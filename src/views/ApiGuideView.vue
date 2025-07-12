<template>
  <div class="api-guide-page">
    <!-- Header -->
    <header class="guide-header">
      <div class="header-content">
        <h1>📘 localFetch API 가이드</h1>
        <p>서버 없이 fetch 스타일로 API 테스트가 가능한 Mock API 도구</p>
      </div>
    </header>

    <div class="guide-container">
      <!-- API 테스트 섹션 -->
      <section class="test-section">
        <h2>🧪 API 테스트</h2>

        <!-- API 선택 -->
        <div class="api-selector">
          <h3>테스트할 API 선택</h3>
          <div class="api-buttons">
            <button v-for="api in apiList" :key="api.endpoint"
              :class="['api-btn', { active: selectedApi === api.endpoint }]" @click="selectApi(api.endpoint)">
              {{ api.icon }} {{ api.name }}
            </button>
          </div>
        </div>

        <!-- 선택된 API 정보 -->
        <div v-if="currentApi" class="api-info">
          <h3>{{ currentApi.icon }} {{ currentApi.name }}</h3>
          <p class="api-description">{{ currentApi.description }}</p>

          <!-- 입력 파라미터 -->
          <div class="input-section">
            <h4>📝 입력 파라미터</h4>
            <div class="input-grid">
              <div v-for="(param, key) in currentApi.params" :key="key" class="input-group">
                <label :for="key">{{ key }}</label>
                <input :id="key" v-model="inputData[key]" :type="param?.type || 'text'"
                  :placeholder="param?.placeholder || ''" :required="param?.required || false" />
                <small v-if="param?.description">{{ param.description }}</small>
              </div>
            </div>
          </div>

          <!-- 테스트 실행 버튼 -->
          <div class="test-actions">
            <button class="test-btn" @click="executeTest" :disabled="isLoading">
              {{ isLoading ? '⏳ 실행 중...' : '🚀 API 테스트 실행' }}
            </button>
          </div>

          <!-- 응답 결과 -->
          <div v-if="response" class="response-section">
            <h4>📤 응답 결과</h4>
            <div class="response-status" :class="{ success: response.ok, error: !response.ok }">
              <span class="status-code">{{ response.status }}</span>
              <span class="status-text">{{ response.statusText }}</span>
            </div>
            <pre class="response-body">{{ JSON.stringify(response.data, null, 2) }}</pre>
          </div>
        </div>
      </section>

      <!-- 데이터 관리 섹션 -->
      <section class="data-management-section">
        <h2>🛠️ 데이터 관리</h2>
        <div class="data-actions">
          <button class="seed-btn" @click="insertSeedData" :disabled="isSeeding">
            {{ isSeeding ? '⏳ 입력 중...' : '🌱 시드 데이터 5개 입력' }}
          </button>
          <button class="clear-btn" @click="clearStorage">
            🗑️ 모든 데이터 초기화
          </button>
        </div>
        <div class="seed-info">
          <p>💡 시드 데이터를 입력하면 다양한 카테고리의 샘플 게시글 5개가 자동으로 생성됩니다.</p>
        </div>
      </section>

      <!-- localStorage 데이터 보기 -->
      <section class="storage-section">
        <h2>💾 localStorage 데이터</h2>
        <div class="storage-tabs">
          <button :class="['tab-btn', { active: activeTab === 'loginMap' }]" @click="activeTab = 'loginMap'">
            🔐 로그인 데이터
          </button>
          <button :class="['tab-btn', { active: activeTab === 'boardMap' }]" @click="activeTab = 'boardMap'">
            📋 게시글 데이터
          </button>
        </div>
        <div class="storage-content">
          <pre>{{ getStorageData(activeTab) }}</pre>
        </div>
      </section>

      <!-- API 가이드 섹션 -->
      <section class="guide-section">
        <h2>📖 사용 가이드</h2>

        <div class="guide-cards">
          <div class="guide-card">
            <h3>🔧 기본 사용법</h3>
            <pre><code>import { localFetch } from '@/api/localFetch'

const response = await localFetch('/login', {
  method: 'POST',
  body: {
    userId: 'tester',
    password: '1234'
  }
})

if (response.ok) {
  const data = await response.json()
  console.log(data.userId)
} else {
  alert(`[${response.status}] ${response.statusText}`)
}</code></pre>
          </div>

          <div class="guide-card">
            <h3>📋 지원 API 목록</h3>
            <ul class="api-list">
              <li><strong>/login</strong> - 로그인 및 최초 등록</li>
              <li><strong>/category</strong> - 카테고리 목록 조회</li>
              <li><strong>/list</strong> - 게시글 목록 조회</li>
              <li><strong>/get</strong> - 게시글 상세 조회</li>
              <li><strong>/post</strong> - 게시글 등록</li>
              <li><strong>/update</strong> - 게시글 수정</li>
              <li><strong>/delete</strong> - 게시글 삭제</li>
            </ul>
          </div>

          <div class="guide-card">
            <h3>⚠️ 주의사항</h3>
            <ul>
              <li>method는 항상 'POST'로 호출</li>
              <li>localStorage 기반 데이터 저장</li>
              <li>응답 지연 시뮬레이션 (100~500ms)</li>
              <li>브라우저 저장소 초기화 필요시 localStorage.clear() 사용</li>
              <li>시드 데이터는 기존 데이터에 추가됩니다</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { localFetch } from '@/api/localFetch'

const router = useRouter()

// 타입 정의
interface ApiParam {
  type?: string
  placeholder?: string
  required?: boolean
  description?: string
}

interface ApiDefinition {
  endpoint: string
  name: string
  icon: string
  description: string
  params: Record<string, ApiParam>
}

// 반응형 데이터
const selectedApi = ref('')
const inputData = ref<Record<string, any>>({})
const response = ref<any>(null)
const isLoading = ref(false)
const isSeeding = ref(false)
const activeTab = ref('loginMap')

// API 목록 정의
const apiList: ApiDefinition[] = [
  {
    endpoint: '/login',
    name: '로그인',
    icon: '🔐',
    description: '로그인 및 최초 등록',
    params: {
      userId: { type: 'text', placeholder: 'tester', required: true, description: '사용자 ID' },
      password: { type: 'password', placeholder: '1234', required: true, description: '비밀번호' }
    }
  },
  {
    endpoint: '/category',
    name: '카테고리 목록',
    icon: '📁',
    description: '카테고리 목록 조회',
    params: {}
  },
  {
    endpoint: '/list',
    name: '게시글 목록',
    icon: '📋',
    description: '게시글 목록 조회 (페이지네이션, 검색, 필터)',
    params: {
      pageNumber: { type: 'number', placeholder: '1', description: '페이지 번호' },
      keyword: { type: 'text', placeholder: '검색어 (선택)', description: '제목+내용 검색' },
      category: { type: 'text', placeholder: 'free, info, notice (선택)', description: '카테고리 필터' }
    }
  },
  {
    endpoint: '/get',
    name: '게시글 상세',
    icon: '📄',
    description: '게시글 상세 조회',
    params: {
      boardSeq: { type: 'text', placeholder: '게시글 ID', required: true, description: '게시글 순번' }
    }
  },
  {
    endpoint: '/post',
    name: '게시글 등록',
    icon: '✏️',
    description: '새 게시글 등록',
    params: {
      title: { type: 'text', placeholder: '게시글 제목', required: true, description: '제목' },
      contents: { type: 'text', placeholder: '게시글 내용', description: '내용' },
      userId: { type: 'text', placeholder: 'tester', required: true, description: '작성자 ID' },
      category: { type: 'text', placeholder: 'free, info, notice', required: true, description: '카테고리' }
    }
  },
  {
    endpoint: '/update',
    name: '게시글 수정',
    icon: '🔧',
    description: '기존 게시글 수정 (작성자만 가능)',
    params: {
      boardSeq: { type: 'text', placeholder: '게시글 ID', required: true, description: '게시글 순번' },
      title: { type: 'text', placeholder: '수정할 제목', required: true, description: '제목' },
      contents: { type: 'text', placeholder: '수정할 내용', description: '내용' },
      userId: { type: 'text', placeholder: 'tester', required: true, description: '작성자 ID' },
      category: { type: 'text', placeholder: 'free, info, notice', required: true, description: '카테고리' }
    }
  },
  {
    endpoint: '/delete',
    name: '게시글 삭제',
    icon: '❌',
    description: '게시글 삭제 (작성자만 가능)',
    params: {
      boardSeq: { type: 'text', placeholder: '게시글 ID', required: true, description: '게시글 순번' },
      userId: { type: 'text', placeholder: 'tester', required: true, description: '작성자 ID' }
    }
  }
]

// 시드 데이터 정의
const seedData = [
  {
    title: '🚀 프로젝트 시작 가이드',
    contents: 'Vue 3 + TypeScript 기반의 모던 웹 애플리케이션 개발 가이드입니다. 컴포지션 API와 Pinia를 활용한 상태 관리 패턴을 학습할 수 있습니다.\n\n이 프로젝트는 교육용으로 제작되었으며, 실제 서버 없이도 API 테스트가 가능한 localFetch를 사용합니다.',
    userId: 'admin',
    category: 'info'
  },
  {
    title: '💬 자유게시판 운영 안내',
    contents: '자유게시판은 개발자들이 자유롭게 의견을 나누고 정보를 공유하는 공간입니다. 서로를 존중하며 건설적인 토론 문화를 만들어 나가요.\n\n누구든지 자유롭게 글을 작성하고 댓글을 달 수 있습니다. 단, 욕설이나 비방은 금지됩니다.',
    userId: 'moderator',
    category: 'free'
  },
  {
    title: '🔧 시스템 점검 공지',
    contents: '2024년 1월 15일 새벽 2시부터 4시까지 시스템 점검이 예정되어 있습니다. 점검 시간 중에는 서비스 이용이 제한될 수 있으니 양해 부탁드립니다.\n\n점검 내용:\n- 데이터베이스 최적화\n- 보안 업데이트\n- 성능 개선',
    userId: 'admin',
    category: 'notice'
  },
  {
    title: '📚 TypeScript 학습 팁',
    contents: 'TypeScript를 효과적으로 학습하는 방법을 공유합니다. 기본 타입부터 제네릭, 유틸리티 타입까지 단계별로 접근하는 것이 중요합니다.\n\n추천 학습 순서:\n1. 기본 타입 이해\n2. 인터페이스와 타입 별칭\n3. 제네릭 활용\n4. 유틸리티 타입 마스터',
    userId: 'developer1',
    category: 'info'
  },
  {
    title: '🍕 개발팀 회식 안내',
    contents: '이번 주 금요일 저녁 7시에 개발팀 회식이 있습니다. 참석 가능하신 분들은 댓글로 의사표시 부탁드립니다. 맛있는 음식과 함께 즐거운 시간 보내요!\n\n장소: 강남역 근처 이탈리안 레스토랑\n시간: 금요일 오후 7시\n참석 확인: 댓글로 참석 여부 남겨주세요',
    userId: 'teamlead',
    category: 'free'
  }
]

// 계산된 속성
const currentApi = computed(() => {
  return apiList.find(api => api.endpoint === selectedApi.value)
})

// 메서드
const selectApi = (endpoint: string) => {
  selectedApi.value = endpoint
  inputData.value = {}
  response.value = null
}

const executeTest = async () => {
  if (!selectedApi.value) return

  isLoading.value = true
  response.value = null

  try {
    const apiResponse = await localFetch(selectedApi.value, {
      method: 'POST',
      body: inputData.value
    })

    const data = await apiResponse.json()

    response.value = {
      ok: apiResponse.ok,
      status: apiResponse.status,
      statusText: apiResponse.statusText,
      data
    }
  } catch (error) {
    response.value = {
      ok: false,
      status: 500,
      statusText: 'Error',
      data: { error: error instanceof Error ? error.message : 'Unknown error' }
    }
  } finally {
    isLoading.value = false
  }
}

const insertSeedData = async () => {
  if (!confirm('시드 데이터 5개를 삽입하시겠습니까?\n기존 데이터는 유지되고 새로운 데이터가 추가됩니다.')) {
    return
  }

  isSeeding.value = true

  try {
    // 먼저 관리자 계정들 생성
    const adminAccounts = ['admin', 'moderator', 'developer1', 'teamlead', 'tester']

    for (const userId of adminAccounts) {
      await localFetch('/login', {
        method: 'POST',
        body: {
          userId,
          password: '1234'
        }
      })
    }

    // 각 시드 데이터 삽입
    for (const data of seedData) {
      await localFetch('/post', {
        method: 'POST',
        body: data
      })
      // 요청 간 약간의 지연
      await new Promise(resolve => setTimeout(resolve, 150))
    }

    alert('✅ 시드 데이터 5개가 성공적으로 삽입되었습니다!\n\n포함된 데이터:\n- 프로젝트 가이드\n- 자유게시판 안내\n- 시스템 공지\n- 학습 팁\n- 회식 안내')

    // 스토리지 탭을 boardMap으로 변경하여 데이터 확인 가능하게 함
    activeTab.value = 'boardMap'

  } catch (error) {
    alert('❌ 시드 데이터 삽입 중 오류가 발생했습니다:\n' + (error instanceof Error ? error.message : 'Unknown error'))
  } finally {
    isSeeding.value = false
  }
}

const clearStorage = () => {
  if (confirm('⚠️ localStorage 데이터를 모두 초기화하시겠습니까?\n\n이 작업은 되돌릴 수 없으며 다음 데이터가 삭제됩니다:\n- 모든 로그인 정보\n- 모든 게시글 데이터\n\n정말 초기화하시겠습니까?')) {
    localStorage.removeItem('loginMap')
    localStorage.removeItem('boardMap')
    alert('🗑️ localStorage가 초기화되었습니다.\n모든 데이터가 삭제되었습니다.')
  }
}

const getStorageData = (key: string) => {
  const data = localStorage.getItem(key)
  if (!data) return '데이터 없음'
  try {
    const parsed = JSON.parse(data)
    return JSON.stringify(parsed, null, 2)
  } catch {
    return data
  }
}

// 컴포넌트 마운트 시 첫 번째 API 선택
onMounted(() => {
  if (apiList.length > 0) {
    selectedApi.value = apiList[0].endpoint
  }
})
</script>

<style scoped>
/* 모바일 우선 디자인 */
.api-guide-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-bottom: 20px;
}

.guide-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
}

.back-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  z-index: 1001;
  white-space: nowrap;
}

.back-btn:hover {
  transform: translateY(-50%) translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.guide-header h1 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.2;
  padding: 0 80px;
}

.guide-header p {
  display: none;
}

.guide-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.test-section,
.data-management-section,
.storage-section,
.guide-section {
  background: white;
  border-radius: 12px;
  padding: 20px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.test-section h2,
.data-management-section h2,
.storage-section h2,
.guide-section h2 {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 1.2rem;
  border-bottom: 2px solid #667eea;
  padding-bottom: 8px;
}

.api-selector h3 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  color: #555;
}

.api-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.api-btn {
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: left;
  width: 100%;
}

.api-btn:hover {
  border-color: #667eea;
  background: #f8f9ff;
}

.api-btn.active {
  border-color: #667eea;
  background: #667eea;
  color: white;
}

.api-info {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  background: #f8f9fa;
}

.api-info h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #333;
}

.api-description {
  color: #666;
  margin-bottom: 16px;
  font-style: italic;
  font-size: 0.9rem;
}

.input-section h4 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  color: #333;
}

.input-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.input-group label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.input-group input {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
}

.input-group input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
}

.input-group small {
  color: #666;
  font-size: 0.8rem;
}

.test-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.test-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
  background: #28a745;
  color: white;
}

.test-btn:hover:not(:disabled) {
  background: #218838;
  transform: translateY(-1px);
}

.test-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

/* 데이터 관리 섹션 스타일 */
.data-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.seed-btn,
.clear-btn {
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  width: 100%;
}

.seed-btn {
  background: #007bff;
  color: white;
}

.seed-btn:hover:not(:disabled) {
  background: #0056b3;
  transform: translateY(-1px);
}

.seed-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.clear-btn {
  background: #dc3545;
  color: white;
}

.clear-btn:hover {
  background: #c82333;
  transform: translateY(-1px);
}

.seed-info {
  background: #e3f2fd;
  border: 1px solid #90caf9;
  border-radius: 6px;
  padding: 12px;
  margin-top: 12px;
}

.seed-info p {
  margin: 0;
  color: #1565c0;
  font-size: 0.85rem;
  line-height: 1.4;
}

.response-section {
  border-top: 1px solid #ddd;
  padding-top: 16px;
}

.response-section h4 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  color: #333;
}

.response-status {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.9rem;
}

.response-status.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.response-status.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.status-code {
  font-weight: bold;
}

.response-body {
  background: #2d3748;
  color: #e2e8f0;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}

.storage-section h2 {
  margin-bottom: 16px;
}

.storage-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.tab-btn {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  text-align: center;
}

.tab-btn:hover {
  background: #f8f9ff;
}

.tab-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.storage-content {
  border: 1px solid #ddd;
  border-radius: 0 6px 6px 6px;
  padding: 12px;
  background: #f8f9fa;
  min-height: 150px;
  max-height: 300px;
  overflow-y: auto;
}

.storage-content pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
}

.guide-section h2 {
  margin-bottom: 16px;
}

.guide-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.guide-card {
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 16px;
  background: #f8f9fa;
  transition: all 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.guide-card h3 {
  margin: 0 0 12px 0;
  color: #333;
  font-size: 1rem;
}

.guide-card pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 12px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.75rem;
  line-height: 1.4;
  margin: 0;
}

.api-list {
  margin: 0;
  padding-left: 16px;
  font-size: 0.9rem;
}

.api-list li {
  margin-bottom: 6px;
  line-height: 1.4;
}

.guide-card ul {
  margin: 0;
  padding-left: 16px;
  font-size: 0.9rem;
}

.guide-card ul li {
  margin-bottom: 6px;
  line-height: 1.4;
}

/* 태블릿 이상에서의 개선 */
@media (min-width: 768px) {
  .guide-container {
    padding: 24px;
    max-width: 1000px;
  }

  .test-section,
  .data-management-section,
  .storage-section,
  .guide-section {
    padding: 24px;
  }

  .guide-header {
    padding: 14px 20px;
  }

  .header-content {
    min-height: 48px;
  }

  .back-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
    border-radius: 18px;
  }

  .guide-header h1 {
    font-size: 1.3rem;
    padding: 0 100px;
  }

  .guide-header p {
    display: block;
    margin: 4px 0 0 0;
    color: #666;
    font-size: 0.85rem;
    padding: 0 100px;
    line-height: 1.3;
  }

  .api-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .test-actions,
  .data-actions {
    flex-direction: row;
    gap: 12px;
  }

  .test-btn,
  .seed-btn,
  .clear-btn {
    flex: 1;
  }

  .guide-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}

/* 데스크톱에서의 추가 개선 */
@media (min-width: 1024px) {
  .guide-container {
    max-width: 1200px;
  }

  .guide-header {
    padding: 16px 24px;
  }

  .header-content {
    min-height: 52px;
  }

  .back-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
    border-radius: 20px;
  }

  .guide-header h1 {
    font-size: 1.5rem;
    padding: 0 120px;
  }

  .guide-header p {
    font-size: 0.9rem;
    padding: 0 120px;
  }

  .api-buttons {
    grid-template-columns: repeat(3, 1fr);
  }

  .input-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}
</style>