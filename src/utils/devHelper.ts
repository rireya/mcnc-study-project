/**
 * 개발 도우미 유틸리티 함수들
 * 주니어 개발자의 학습과 디버깅을 돕는 함수들을 제공합니다.
 */

/**
 * 콘솔에 컬러풀한 로그를 출력하는 함수
 */
export const debugLog = {
  info: (message: string, data?: any) => {
    console.log(`%c[INFO] ${message}`, 'color: #2196F3; font-weight: bold', data || '')
  },
  
  success: (message: string, data?: any) => {
    console.log(`%c[SUCCESS] ${message}`, 'color: #4CAF50; font-weight: bold', data || '')
  },
  
  warning: (message: string, data?: any) => {
    console.log(`%c[WARNING] ${message}`, 'color: #FF9800; font-weight: bold', data || '')
  },
  
  error: (message: string, data?: any) => {
    console.log(`%c[ERROR] ${message}`, 'color: #F44336; font-weight: bold', data || '')
  },
  
  api: (method: string, url: string, data?: any) => {
    console.log(`%c[API] ${method} ${url}`, 'color: #9C27B0; font-weight: bold', data || '')
  }
}

/**
 * 폼 유효성 검사 도우미 함수들
 */
export const validation = {
  /**
   * 이메일 형식 검증
   */
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  
  /**
   * 비밀번호 강도 검증 (최소 6자, 영문+숫자 포함)
   */
  password: (password: string): { isValid: boolean; message: string } => {
    if (password.length < 6) {
      return { isValid: false, message: '비밀번호는 6자 이상이어야 합니다' }
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      return { isValid: false, message: '비밀번호는 영문과 숫자를 포함해야 합니다' }
    }
    return { isValid: true, message: '' }
  },
  
  /**
   * 필수 입력 필드 검증
   */
  required: (value: string, fieldName: string): { isValid: boolean; message: string } => {
    if (!value || !value.trim()) {
      return { isValid: false, message: `${fieldName}을(를) 입력해주세요` }
    }
    return { isValid: true, message: '' }
  },
  
  /**
   * 최대 길이 검증
   */
  maxLength: (value: string, max: number, fieldName: string): { isValid: boolean; message: string } => {
    if (value.length > max) {
      return { isValid: false, message: `${fieldName}은(는) ${max}자 이내로 입력해주세요` }
    }
    return { isValid: true, message: '' }
  }
}

/**
 * 날짜 포맷팅 유틸리티
 */
export const dateUtils = {
  /**
   * 한국 날짜 형식으로 변환 (YYYY-MM-DD)
   */
  toKoreanDate: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    return dateObj.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  },
  
  /**
   * 상대적 시간 표시 (예: 2시간 전, 1일 전)
   */
  timeAgo: (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const diffInMilliseconds = now.getTime() - dateObj.getTime()
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60))
    const diffInHours = Math.floor(diffInMinutes / 60)
    const diffInDays = Math.floor(diffInHours / 24)
    
    if (diffInMinutes < 1) {
      return '방금 전'
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`
    } else if (diffInDays < 7) {
      return `${diffInDays}일 전`
    } else {
      return dateUtils.toKoreanDate(dateObj)
    }
  }
}

/**
 * 로컬 스토리지 도우미 함수들
 */
export const storage = {
  /**
   * 데이터 저장 (JSON 형태로 자동 변환)
   */
  set: (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      debugLog.info(`Storage saved: ${key}`, value)
    } catch (error) {
      debugLog.error(`Storage save failed: ${key}`, error)
    }
  },
  
  /**
   * 데이터 조회 (JSON 파싱 자동 처리)
   */
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      const value = localStorage.getItem(key)
      if (value === null) {
        return defaultValue || null
      }
      return JSON.parse(value)
    } catch (error) {
      debugLog.error(`Storage get failed: ${key}`, error)
      return defaultValue || null
    }
  },
  
  /**
   * 데이터 삭제
   */
  remove: (key: string): void => {
    localStorage.removeItem(key)
    debugLog.info(`Storage removed: ${key}`)
  },
  
  /**
   * 모든 데이터 삭제
   */
  clear: (): void => {
    localStorage.clear()
    debugLog.warning('All storage data cleared')
  }
}

/**
 * API 응답 타입 정의 도우미
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  total?: number
}

/**
 * 에러 처리 도우미 함수
 */
export const errorHandler = {
  /**
   * API 에러 메시지 추출
   */
  getApiErrorMessage: (error: any): string => {
    if (error?.response?.data?.message) {
      return error.response.data.message
    }
    if (error?.message) {
      return error.message
    }
    return '알 수 없는 오류가 발생했습니다'
  },
  
  /**
   * 네트워크 에러 확인
   */
  isNetworkError: (error: any): boolean => {
    return error?.code === 'NETWORK_ERROR' || error?.name === 'NetworkError'
  },
  
  /**
   * 타임아웃 에러 확인
   */
  isTimeoutError: (error: any): boolean => {
    return error?.code === 'TIMEOUT' || error?.name === 'TimeoutError'
  }
}

/**
 * 개발자 도구 관련 유틸리티
 */
export const devTools = {
  /**
   * Vue 컴포넌트 상태 로깅
   */
  logComponentState: (componentName: string, state: any) => {
    debugLog.info(`[${componentName}] Component State:`)
    console.table(state)
  },
  
  /**
   * 성능 측정 시작
   */
  startPerformanceMeasure: (label: string) => {
    performance.mark(`${label}-start`)
  },
  
  /**
   * 성능 측정 종료 및 결과 출력
   */
  endPerformanceMeasure: (label: string) => {
    performance.mark(`${label}-end`)
    performance.measure(label, `${label}-start`, `${label}-end`)
    const measure = performance.getEntriesByName(label)[0]
    debugLog.info(`Performance: ${label}`, `${measure.duration.toFixed(2)}ms`)
    performance.clearMarks()
    performance.clearMeasures()
  }
}

/**
 * 학습용 샘플 데이터 생성기
 */
export const sampleData = {
  /**
   * 랜덤 게시글 데이터 생성
   */
  generatePost: () => {
    const titles = [
      'Vue 3 Composition API 학습 후기',
      'TypeScript와 함께하는 프론트엔드 개발',
      'Pinia 상태 관리 사용법',
      'Vite로 빠른 개발 환경 구축하기',
      '모던 웹 개발 트렌드 2024'
    ]
    
    const contents = [
      'Vue 3의 Composition API를 학습하면서 느낀 점들을 공유합니다.',
      'TypeScript를 도입하면서 겪은 어려움과 해결 방법을 정리했습니다.',
      'Pinia를 사용한 상태 관리 패턴에 대해 알아보겠습니다.',
      'Vite를 사용하여 개발 환경을 구축하는 방법을 소개합니다.',
      '2024년 웹 개발 트렌드와 기술들을 살펴보겠습니다.'
    ]
    
    const authors = ['김개발', '이프론트', '박뷰자', '최타입', '정코드']
    const categories = ['notice', 'chat', 'info']
    
    return {
      id: Math.floor(Math.random() * 1000) + 1,
      title: titles[Math.floor(Math.random() * titles.length)],
      content: contents[Math.floor(Math.random() * contents.length)],
      author: authors[Math.floor(Math.random() * authors.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString()
    }
  },
  
  /**
   * 여러 개의 샘플 게시글 생성
   */
  generatePosts: (count: number) => {
    return Array.from({ length: count }, () => sampleData.generatePost())
  }
}

/**
 * 실습 완료도 체크 함수
 */
export const practiceChecker = {
  /**
   * 로그인 기능 완성도 체크
   */
  checkLoginImplementation: () => {
    const checks = [
      { name: '폼 데이터 바인딩', completed: false },
      { name: '유효성 검사', completed: false },
      { name: 'API 호출', completed: false },
      { name: '에러 처리', completed: false },
      { name: '성공 시 라우팅', completed: false }
    ]
    
    console.log('🔍 로그인 기능 체크리스트:')
    checks.forEach(check => {
      const status = check.completed ? '✅' : '❌'
      console.log(`${status} ${check.name}`)
    })
    
    return checks
  },
  
  /**
   * 목록 기능 완성도 체크
   */
  checkListImplementation: () => {
    const checks = [
      { name: '데이터 조회', completed: false },
      { name: '검색 기능', completed: false },
      { name: '카테고리 필터', completed: false },
      { name: '페이지네이션', completed: false },
      { name: '상세 페이지 이동', completed: false }
    ]
    
    console.log('🔍 목록 기능 체크리스트:')
    checks.forEach(check => {
      const status = check.completed ? '✅' : '❌'
      console.log(`${status} ${check.name}`)
    })
    
    return checks
  }
}

// 개발 모드에서만 전역으로 노출
if (import.meta.env.DEV) {
  (window as any).devUtils = {
    debugLog,
    validation,
    dateUtils,
    storage,
    errorHandler,
    devTools,
    sampleData,
    practiceChecker
  }
  
  console.log('🛠️ 개발 도구가 로드되었습니다!')
  console.log('브라우저 콘솔에서 devUtils.debugLog.info("테스트") 로 사용할 수 있습니다.')
}
