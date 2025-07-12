<template>
  <div class="requirements-page">
    <!-- Header -->
    <header class="requirements-header">
      <div class="header-content">
        <button class="back-btn" @click="goBack">
          ← 대시보드로
        </button>
        <h1>📋 실습 요구사항</h1>
        <p>각 화면별 구현해야 할 기능들을 확인하세요</p>
      </div>
    </header>

    <div class="requirements-container">
      <!-- 로그인 화면 요구사항 -->
      <section class="requirement-section">
        <div class="section-header">
          <div class="section-icon">🔐</div>
          <h2>로그인 화면</h2>
          <span class="difficulty-badge beginner">초급</span>
        </div>
        
        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>입력란 'x' 버튼 제어</h4>
              <p>입력란에 값이 있는 경우에만 'x' 버튼을 표시하세요. JavaScript의 조건부 렌더링을 활용합니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>비밀번호 표시/숨김 기능</h4>
              <p>비밀번호 입력란의 표시 변경 버튼을 클릭하면 비밀번호가 평문(text)으로 보여야 합니다. input의 type 속성을 동적으로 변경하세요.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>로그인 API 호출</h4>
              <p>로그인 버튼 클릭시 아이디와 비밀번호 입력값을 확인하고, 값이 있다면 localFetch를 사용해 '/login' API를 호출하세요.</p>
            </div>
          </div>

          <div class="requirement-item optional">
            <div class="requirement-icon">🎯</div>
            <div class="requirement-content">
              <h4>추가 기능 (선택사항)</h4>
              <p>아이디 저장, 자동로그인 기능을 구현해보세요. localStorage를 활용할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 게시글 목록 요구사항 -->
      <section class="requirement-section">
        <div class="section-header">
          <div class="section-icon">📋</div>
          <h2>게시글 목록</h2>
          <span class="difficulty-badge intermediate">중급</span>
        </div>
        
        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>카테고리 탭 기능</h4>
              <p>상단 탭에 카테고리 목록을 표시하고, 탭 클릭시 해당 카테고리의 게시글만 조회하세요. '/category' API로 카테고리 목록을 가져올 수 있습니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>검색 기능</h4>
              <p>검색 입력란에 값을 입력하고 검색 버튼을 누르면 제목/내용에서 검색된 목록을 조회하세요. '/list' API의 keyword 파라미터를 사용합니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>화면 이동 기능</h4>
              <p>목록 클릭시 게시글 상세 화면으로, 쓰기 버튼 클릭시 게시글 등록 화면으로 이동하세요. Vue Router의 push 메서드를 사용합니다.</p>
            </div>
          </div>

          <div class="requirement-item optional">
            <div class="requirement-icon">🎯</div>
            <div class="requirement-content">
              <h4>무한 스크롤 (선택사항)</h4>
              <p>스크롤을 끝까지 내렸을 때 다음 페이지의 데이터를 자동으로 로딩하는 기능을 구현해보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 게시글 상세 요구사항 -->
      <section class="requirement-section">
        <div class="section-header">
          <div class="section-icon">📄</div>
          <h2>게시글 상세</h2>
          <span class="difficulty-badge beginner">초급</span>
        </div>
        
        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>수정일 조건부 표시</h4>
              <p>수정일은 게시글이 수정된 경우에만 표시하세요. 조건부 렌더링(v-if)을 사용합니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>작성자 권한 제어</h4>
              <p>삭제, 수정 버튼은 작성자와 로그인 사용자가 동일한 경우에만 활성화하세요. 버튼의 disabled 속성을 동적으로 제어합니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>삭제 기능</h4>
              <p>삭제 버튼 클릭시 삭제 확인 다이얼로그를 표시하고, 확인시 '/delete' API 호출 후 목록으로 이동하세요.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>수정 화면 이동</h4>
              <p>수정 버튼 클릭시 게시글 수정 화면으로 이동하세요. 게시글 ID를 라우터 파라미터로 전달합니다.</p>
            </div>
          </div>

          <div class="requirement-item optional">
            <div class="requirement-icon">🎯</div>
            <div class="requirement-content">
              <h4>HTML 내용 렌더링 (선택사항)</h4>
              <p>게시글 내용이 HTML 형식인 경우를 고려해 v-html 디렉티브 사용을 검토해보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 게시글 등록 요구사항 -->
      <section class="requirement-section">
        <div class="section-header">
          <div class="section-icon">✏️</div>
          <h2>게시글 등록</h2>
          <span class="difficulty-badge intermediate">중급</span>
        </div>
        
        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>사용자 정보 표시</h4>
              <p>작성자는 로그인한 사용자의 ID를, 작성일은 현재 날짜를 표시하세요. new Date()를 사용해 현재 시간을 가져올 수 있습니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>카테고리 선택</h4>
              <p>분류(카테고리) 선택 항목에 '/category' API로 조회한 카테고리 목록을 표시하세요.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>유효성 검사</h4>
              <p>분류와 제목은 필수 입력 항목입니다. 내용은 선택사항입니다. 필수 항목이 비어있으면 등록을 막고 안내 메시지를 표시하세요.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>등록 및 이동 기능</h4>
              <p>뒤로가기/취소 버튼은 이전 화면으로, 등록 버튼은 확인 다이얼로그 후 '/post' API 호출하고 목록으로 이동하세요.</p>
            </div>
          </div>

          <div class="requirement-item optional">
            <div class="requirement-icon">🎯</div>
            <div class="requirement-content">
              <h4>데이터 손실 방지 (선택사항)</h4>
              <p>뒤로가기/취소시 입력중인 내용이 있다면 데이터 손실 경고 다이얼로그를 표시해보세요.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 게시글 수정 요구사항 -->
      <section class="requirement-section">
        <div class="section-header">
          <div class="section-icon">🔧</div>
          <h2>게시글 수정</h2>
          <span class="difficulty-badge advanced">고급</span>
        </div>
        
        <div class="requirements-list">
          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>기존 데이터 로딩</h4>
              <p>화면 진입시 '/get' API로 기존 게시글 데이터를 조회하여 폼에 설정하세요. 라우터 파라미터에서 게시글 ID를 가져올 수 있습니다.</p>
            </div>
          </div>

          <div class="requirement-item">
            <div class="requirement-icon">✅</div>
            <div class="requirement-content">
              <h4>이동 및 수정 기능</h4>
              <p>뒤로가기/취소 버튼은 상세 화면으로, 수정 버튼은 확인 다이얼로그 후 '/update' API 호출하고 상세 화면으로 이동하세요.</p>
            </div>
          </div>

          <div class="requirement-item optional">
            <div class="requirement-icon">🎯</div>
            <div class="requirement-content">
              <h4>변경사항 감지 (선택사항)</h4>
              <p>뒤로가기/취소시 내용이 수정되었다면 변경사항 손실 경고 다이얼로그를 표시해보세요. 원본 데이터와 현재 데이터를 비교합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 개발 팁 섹션 -->
      <section class="requirement-section tips">
        <div class="section-header">
          <div class="section-icon">💡</div>
          <h2>개발 팁</h2>
        </div>
        
        <div class="tips-grid">
          <div class="tip-card">
            <h4>🔧 API 테스트</h4>
            <p>API 가이드 화면에서 시드 데이터를 생성하고 각 API의 동작을 먼저 테스트해보세요.</p>
          </div>

          <div class="tip-card">
            <h4>🎯 단계적 개발</h4>
            <p>필수 기능부터 구현하고, 동작을 확인한 후 선택적 기능을 추가하세요.</p>
          </div>

          <div class="tip-card">
            <h4>🐛 디버깅</h4>
            <p>브라우저 개발자 도구의 Console과 Network 탭을 적극 활용하세요.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
/* 모바일 우선 디자인 */
.requirements-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-bottom: 20px;
}

.requirements-header {
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 100%;
  margin: 0 auto;
  position: relative;
}

.back-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  margin-bottom: 12px;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.requirements-header h1 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1.4rem;
  font-weight: 700;
}

.requirements-header p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.requirements-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.requirement-section {
  background: white;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.requirement-section.tips {
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
  border: 1px solid #ffeaa7;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.section-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.section-header h2 {
  margin: 0;
  color: #333;
  font-size: 1.3rem;
  font-weight: 700;
  flex: 1;
  min-width: 120px;
}

.difficulty-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.difficulty-badge.beginner {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: white;
}

.difficulty-badge.intermediate {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: white;
}

.difficulty-badge.advanced {
  background: linear-gradient(135deg, #f87171, #ef4444);
  color: white;
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.requirement-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.requirement-item.optional {
  background: #fff8e6;
  border-left-color: #ff9500;
}

.requirement-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.requirement-content {
  flex: 1;
}

.requirement-content h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 1rem;
  font-weight: 600;
}

.requirement-content p {
  margin: 0;
  color: #555;
  font-size: 0.85rem;
  line-height: 1.5;
}

.tips-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tip-card {
  background: white;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #ffeaa7;
}

.tip-card h4 {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
}

.tip-card p {
  margin: 0;
  color: #555;
  font-size: 0.8rem;
  line-height: 1.4;
}

/* 태블릿 이상에서의 개선 */
@media (min-width: 768px) {
  .requirements-header {
    padding: 20px 24px;
  }

  .requirements-header h1 {
    font-size: 1.6rem;
  }

  .requirements-header p {
    font-size: 1rem;
  }

  .requirements-container {
    max-width: 1000px;
    padding: 32px 24px;
    gap: 32px;
  }

  .requirement-section {
    padding: 32px 28px;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .requirement-item {
    padding: 20px;
    gap: 16px;
  }

  .requirement-content h4 {
    font-size: 1.1rem;
  }

  .requirement-content p {
    font-size: 0.9rem;
  }

  .tips-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .tip-card {
    padding: 20px;
  }

  .tip-card h4 {
    font-size: 1rem;
  }

  .tip-card p {
    font-size: 0.85rem;
  }
}

/* 데스크톱에서의 추가 개선 */
@media (min-width: 1024px) {
  .requirements-container {
    max-width: 1200px;
    padding: 40px 32px;
  }

  .requirement-section {
    padding: 40px 36px;
  }

  .requirements-list {
    gap: 20px;
  }

  .requirement-item {
    padding: 24px;
  }

  .requirement-content h4 {
    font-size: 1.2rem;
  }

  .requirement-content p {
    font-size: 0.95rem;
  }

  .tips-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
