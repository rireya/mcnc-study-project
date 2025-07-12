// localFetch.ts
// - 서버 없이 fetch 스타일로 API 테스트 가능한 mock API 구현
// - localStorage 기반 (loginMap, boardMap)
// - 지원 API 목록: /login, /category, /post, /get, /list, /delete, /update
// - 모든 응답은 fetch Response 객체와 동일하게 반환됨

const CATEGORY_LIST = [
  { code: 'free', label: '잡담' },
  { code: 'info', label: '정보' },
  { code: 'notice', label: '공지' }
]

// 현재 시각을 'yyyymmdd hhmmss' 형식으로 반환
function getNowDateString(): string {
  const now = new Date()
  const pad = (n: number) => n.toString().padStart(2, '0')
  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    ' ' +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds())
  )
}

// 100~500ms 랜덤 지연 시뮬레이션
function delayRandom(): Promise<void> {
  const delay = Math.floor(Math.random() * 400) + 100
  return new Promise((resolve) => setTimeout(resolve, delay))
}

// localStorage → Map 변환
function getMap(key: string): Map<string, any> {
  const raw = localStorage.getItem(key)
  try {
    const obj = raw ? JSON.parse(raw) : {}
    return new Map(Object.entries(obj))
  } catch {
    return new Map()
  }
}

// Map → localStorage 저장
function setMap(key: string, map: Map<string, any>) {
  const obj = Object.fromEntries(map.entries())
  localStorage.setItem(key, JSON.stringify(obj))
}

// 성공 응답 Response 객체 생성
function createResponse(data: any, status = 200, statusText = 'OK') {
  return new Response(JSON.stringify(data), {
    status,
    statusText,
    headers: { 'Content-Type': 'application/json' }
  })
}

// 에러 응답 Response 객체 생성
function createError(status: number, message: string) {
  return new Response(null, {
    status,
    statusText: message
  })
}

// fetch 스타일의 Mock API 구현
export async function localFetch(
  url: string,
  options: { method: 'POST'; body?: Record<string, any> }
): Promise<Response> {
  await delayRandom()
  const { method, body = {} } = options
  const loginMap = getMap('loginMap')
  const boardMap = getMap('boardMap')

  try {
    switch (url) {
      case '/login': {
        const { userId, password } = body
        if (!userId || !password) return createError(400, 'Missing credentials')

        const savedPw = loginMap.get(userId)
        if (!savedPw) {
          loginMap.set(userId, password)
          setMap('loginMap', loginMap)
        } else if (savedPw !== password) {
          return createError(403, 'Invalid password')
        }
        return createResponse({ userId })
      }

      case '/category': {
        return createResponse(CATEGORY_LIST)
      }

      case '/post': {
        const { title, contents = '', userId, category } = body
        if (!title || !userId || !category) return createError(400, 'Missing fields')

        const matched = CATEGORY_LIST.find((cat) => cat.code === category)
        if (!matched) return createError(400, 'Invalid category')

        const now = getNowDateString()
        const boardSeq = Date.now().toString()

        boardMap.set(boardSeq, {
          boardSeq,
          title,
          contents,
          userId,
          categoryCode: matched.code,
          categoryLabel: matched.label,
          regDate: now,
          modDate: now
        })
        setMap('boardMap', boardMap)
        return createResponse({ boardSeq })
      }

      case '/get': {
        const { boardSeq } = body
        const post = boardMap.get(boardSeq)
        if (!post) return createError(404, 'Post not found')
        return createResponse(post)
      }

      case '/list': {
        const { pageNumber = 1, pageSize = 3, keyword = '', category } = body
        const allPosts = Array.from(boardMap.values())

        let filtered = allPosts.filter((post) =>
          [post.title, post.contents].some((text) => text.includes(keyword))
        )

        if (category) {
          const valid = CATEGORY_LIST.some((cat) => cat.code === category)
          if (!valid) return createError(400, 'Invalid category')
          filtered = filtered.filter((post) => post.categoryCode === category)
        }

        filtered.sort((a, b) => b.regDate.localeCompare(a.regDate))

        const PAGE_SIZE = pageSize
        const totalCount = filtered.length
        const start = (pageNumber - 1) * PAGE_SIZE
        const paged = filtered.slice(start, start + PAGE_SIZE)

        return createResponse({
          pageNumber,
          pageSize: PAGE_SIZE,
          totalCount,
          list: paged
        })
      }

      case '/delete': {
        const { boardSeq, userId } = body
        const post = boardMap.get(boardSeq)
        if (!post) return createError(404, 'Post not found')
        if (post.userId !== userId) return createError(403, 'Forbidden')

        boardMap.delete(boardSeq)
        setMap('boardMap', boardMap)
        return createResponse({})
      }

      case '/update': {
        const { boardSeq, title, contents, userId, category } = body
        const post = boardMap.get(boardSeq)
        if (!post) return createError(404, 'Post not found')
        if (post.userId !== userId) return createError(403, 'Forbidden')

        const matched = CATEGORY_LIST.find((cat) => cat.code === category)
        if (!matched) return createError(400, 'Invalid category')

        post.title = title
        post.contents = contents
        post.categoryCode = matched.code
        post.categoryLabel = matched.label
        post.modDate = getNowDateString()
        boardMap.set(boardSeq, post)
        setMap('boardMap', boardMap)
        return createResponse({})
      }

      default:
        return createError(404, 'Unknown API')
    }
  } catch (err: any) {
    return createError(500, err?.message || 'Internal Error')
  }
}
