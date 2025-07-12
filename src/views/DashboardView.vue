<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="dashboard-header">
      <h1>Vue.js 학습 프로젝트</h1>
      <p>실습용 화면과 도구들을 제공하는 교육용 대시보드</p>
    </header>

    <!-- Navigation Cards -->
    <div class="dashboard-container">
      <!-- 실습용 화면 섹션 -->
      <section class="section">
        <h2 class="section-title">
          <span class="section-icon">🎯</span>
          실습용 화면
          <span class="section-badge">Practice Screens</span>
        </h2>
        <p class="section-description">
          이 화면들은 퍼블리싱만 완성되어 있고, 스크립트 로직은 여러분이 구현하는 실습용 화면입니다.
        </p>

        <div class="practice-grid">
          <!-- Login Card -->
          <div class="practice-card" @click="navigateTo('/login')">
            <div class="card-content">
              <div class="card-icon">🔐</div>
              <div class="card-text">
                <h3>로그인 화면</h3>
                <p>사용자 인증 폼 구현</p>
                <div class="practice-skills">
                  <span class="skill-tag">Form Validation</span>
                  <span class="skill-tag">API 호출</span>
                </div>
              </div>
            </div>
          </div>

          <!-- List Card -->
          <div class="practice-card" @click="navigateTo('/list')">
            <div class="card-content">
              <div class="card-icon">📋</div>
              <div class="card-text">
                <h3>게시글 목록</h3>
                <p>목록 조회 및 페이지네이션</p>
                <div class="practice-skills">
                  <span class="skill-tag">리스트 렌더링</span>
                  <span class="skill-tag">검색/필터</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Detail Card -->
          <div class="practice-card" @click="navigateTo('/detail')">
            <div class="card-content">
              <div class="card-icon">📄</div>
              <div class="card-text">
                <h3>게시글 상세</h3>
                <p>상세 정보 표시</p>
                <div class="practice-skills">
                  <span class="skill-tag">라우터 파라미터</span>
                  <span class="skill-tag">데이터 바인딩</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Post Card -->
          <div class="practice-card" @click="navigateTo('/post')">
            <div class="card-content">
              <div class="card-icon">✏️</div>
              <div class="card-text">
                <h3>게시글 작성</h3>
                <p>새 게시글 등록 폼</p>
                <div class="practice-skills">
                  <span class="skill-tag">폼 처리</span>
                  <span class="skill-tag">유효성 검사</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Update Card -->
          <div class="practice-card" @click="navigateTo('/update')">
            <div class="card-content">
              <div class="card-icon">🔧</div>
              <div class="card-text">
                <h3>게시글 수정</h3>
                <p>기존 데이터 수정</p>
                <div class="practice-skills">
                  <span class="skill-tag">데이터 로딩</span>
                  <span class="skill-tag">수정 처리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 도구 및 가이드 섹션 -->
      <section class="section">
        <h2 class="section-title">
          <span class="section-icon">🛠️</span>
          개발 도구 & 가이드
          <span class="section-badge tools">Development Tools</span>
        </h2>
        <p class="section-description">
          실습을 도와주는 유용한 도구들과 가이드입니다.
        </p>

        <div class="tools-grid">
          <!-- Requirements Card -->
          <div class="tool-card requirements" @click="navigateTo('/requirements')">
            <div class="card-content">
              <div class="card-icon">📋</div>
              <div class="card-text">
                <h3>실습 요구사항</h3>
                <p>각 화면별 구현 기능 가이드</p>
                <div class="tool-features">
                  <span class="feature-tag">구현 가이드</span>
                  <span class="feature-tag">개발 팁</span>
                  <span class="feature-tag">단계별 설명</span>
                </div>
              </div>
            </div>
          </div>

          <!-- API Guide Card -->
          <div class="tool-card api-guide" @click="navigateTo('/api-guide')">
            <div class="card-content">
              <div class="card-icon">📘</div>
              <div class="card-text">
                <h3>API 가이드</h3>
                <p>localFetch API 테스트 & 문서</p>
                <div class="tool-features">
                  <span class="feature-tag">API 테스트</span>
                  <span class="feature-tag">시드 데이터</span>
                  <span class="feature-tag">사용법</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Test Card -->
          <div class="tool-card modal-test" @click="showModalTest">
            <div class="card-content">
              <div class="card-icon">🔔</div>
              <div class="card-text">
                <h3>모달 테스트</h3>
                <p>Alert & Confirm 컴포넌트</p>
                <div class="tool-features">
                  <span class="feature-tag">Alert</span>
                  <span class="feature-tag">Confirm</span>
                  <span class="feature-tag">Pinia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 학습 정보 -->
      <section class="section">
        <h2 class="section-title">
          <span class="section-icon">📖</span>
          학습 정보
        </h2>

        <div class="learning-info">
          <div class="info-card tech-stack">
            <h4>🚀 기술 스택</h4>
            <ul>
              <li><strong>Vue 3</strong> - Composition API</li>
              <li><strong>TypeScript</strong> - 타입 안전성</li>
              <li><strong>Vite</strong> - 빠른 개발 서버</li>
              <li><strong>Pinia</strong> - 상태 관리</li>
              <li><strong>Vue Router</strong> - 라우팅</li>
            </ul>
          </div>

          <div class="info-card learning-goals">
            <h4>🎯 학습 목표</h4>
            <ul>
              <li>Vue 3 Composition API 이해</li>
              <li>TypeScript 기반 개발</li>
              <li>컴포넌트 기반 구조 설계</li>
              <li>상태 관리 패턴 학습</li>
              <li>모던 프론트엔드 개발 경험</li>
            </ul>
          </div>

          <div class="info-card practice-tips">
            <h4>💡 실습 팁</h4>
            <ul>
              <li>API 가이드에서 시드 데이터를 먼저 생성하세요</li>
              <li>브라우저 개발자 도구를 활용하세요</li>
              <li>에러 메시지를 주의 깊게 읽어보세요</li>
              <li>코드를 단계별로 작성하고 테스트하세요</li>
              <li>궁금한 점은 언제든지 질문하세요</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useModal } from '@/stores/modal'

const router = useRouter()
const { alert, confirm } = useModal()

const navigateTo = (path: string) => {
  router.push(path)
}

const showModalTest = async () => {
  // Alert 테스트
  await alert('간단한 알림 메시지입니다!', {
    title: '알림 테스트'
  })

  // Confirm 테스트
  const result = await confirm(
    '이것은 확인/취소 다이얼로그입니다.<br><strong>계속 진행하시겠습니까?</strong>',
    {
      title: 'Confirm 테스트',
      confirmText: '네, 계속',
      cancelText: '아니오'
    }
  )

  if (result) {
    await alert('확인을 선택하셨습니다! 🎉', { title: '테스트 결과' })
  } else {
    await alert('취소를 선택하셨습니다. 😊', { title: '테스트 결과' })
  }
}
</script>

<style scoped>
/* 모바일 우선 디자인 */
.dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 16px;
  padding-bottom: 40px;
}

.dashboard-header {
  text-align: center;
  color: white;
  margin-bottom: 32px;
  padding: 20px 0;
}

.dashboard-header h1 {
  font-size: 1.8rem;
  margin: 0 0 8px 0;
  font-weight: 700;
  line-height: 1.2;
}

.dashboard-header p {
  font-size: 1rem;
  opacity: 0.9;
  margin: 0;
  line-height: 1.4;
}

.dashboard-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* 섹션 스타일 */
.section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 8px 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  flex-wrap: wrap;
}

.section-icon {
  font-size: 1.5rem;
}

.section-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-badge.tools {
  background: linear-gradient(135deg, #20bf6b, #01a3a4);
}

.section-description {
  color: #666;
  margin-bottom: 24px;
  line-height: 1.5;
  font-size: 0.9rem;
}

/* 실습용 화면 그리드 */
.practice-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.practice-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}

.practice-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #ff9500, #ff6b35);
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #ff9500;
}

.card-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.card-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  margin-top: 4px;
}

.card-text {
  flex: 1;
}

.practice-card h3,
.tool-card h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 6px 0;
  font-weight: 600;
}

.practice-card p,
.tool-card p {
  color: #666;
  margin: 0 0 12px 0;
  font-size: 0.85rem;
  line-height: 1.3;
}

.practice-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background: #f0f8ff;
  color: #0066cc;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
}

/* 도구 그리드 */
.tools-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #f0f0f0;
  position: relative;
  overflow: hidden;
}

.tool-card.requirements::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #f093fb, #f5576c);
}

.tool-card.api-guide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #20bf6b, #01a3a4);
}

.tool-card.modal-test::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tool-card.requirements:hover {
  border-color: #f093fb;
}

.tool-card.api-guide:hover {
  border-color: #20bf6b;
}

.tool-card.modal-test:hover {
  border-color: #667eea;
}

.tool-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.feature-tag {
  background: #f0f8ff;
  color: #0066cc;
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 500;
}

/* 학습 정보 */
.learning-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e9ecef;
}

.info-card.tech-stack {
  border-left: 4px solid #667eea;
}

.info-card.learning-goals {
  border-left: 4px solid #20bf6b;
}

.info-card.practice-tips {
  border-left: 4px solid #ff9500;
}

.info-card h4 {
  font-size: 1rem;
  margin: 0 0 12px 0;
  font-weight: 600;
  color: #333;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card li {
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #555;
}

.info-card li:last-child {
  border-bottom: none;
}

.info-card li::before {
  content: '✓';
  color: #4ade80;
  font-weight: bold;
  margin-right: 8px;
}

/* 태블릿 이상에서의 개선 */
@media (min-width: 768px) {
  .dashboard {
    padding: 24px;
  }

  .dashboard-header {
    margin-bottom: 40px;
    padding: 24px 0;
  }

  .dashboard-header h1 {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  .dashboard-header p {
    font-size: 1.1rem;
  }

  .dashboard-container {
    max-width: 1000px;
  }

  .section {
    padding: 32px 28px;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  .section-description {
    font-size: 1rem;
    margin-bottom: 28px;
  }

  .practice-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .practice-card,
  .tool-card {
    padding: 24px;
  }

  .card-content {
    gap: 20px;
  }

  .card-icon {
    font-size: 3rem;
  }

  .practice-card h3,
  .tool-card h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  .practice-card p,
  .tool-card p {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }

  .learning-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .info-card {
    padding: 24px;
  }

  .info-card h4 {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }

  .info-card li {
    padding: 8px 0;
    font-size: 0.9rem;
  }
}

/* 데스크톱에서의 추가 개선 */
@media (min-width: 1024px) {
  .dashboard {
    padding: 32px;
  }

  .dashboard-header {
    margin-bottom: 48px;
  }

  .dashboard-header h1 {
    font-size: 2.5rem;
  }

  .dashboard-header p {
    font-size: 1.2rem;
  }

  .dashboard-container {
    max-width: 1200px;
  }

  .section {
    padding: 40px 36px;
  }

  .practice-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .practice-card,
  .tool-card {
    padding: 28px;
  }

  .card-content {
    gap: 24px;
  }

  .card-icon {
    font-size: 3.5rem;
  }

  .practice-card:hover,
  .tool-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
  }

  .practice-card h3,
  .tool-card h3 {
    font-size: 1.3rem;
  }

  .practice-card p,
  .tool-card p {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  .info-card {
    padding: 28px;
  }

  .info-card h4 {
    font-size: 1.2rem;
  }

  .info-card li {
    font-size: 0.95rem;
  }
}

/* 와이드 스크린에서의 최적화 */
@media (min-width: 1440px) {
  .practice-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>