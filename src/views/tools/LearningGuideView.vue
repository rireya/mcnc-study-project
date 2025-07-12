<template>
  <div class="learning-guide">
    <div class="head">
      <h2 class="title">학습 가이드</h2>
    </div>
    
    <div class="container">
      <!-- 학습 목차 -->
      <div class="guide-nav">
        <h3>📚 학습 목차</h3>
        <p style="font-size: 0.8rem; color: #666; margin-bottom: 1rem;">
          현재 선택: {{ activeGuide }}
        </p>
        <div class="nav-item" 
             v-for="guide in learningGuides" 
             :key="guide.id"
             :class="{ active: activeGuide === guide.id }"
             @click="setActiveGuide(guide.id)">
          <span class="emoji">{{ guide.emoji }}</span>
          <span class="title">{{ guide.title }}</span>
        </div>
      </div>

      <!-- 학습 내용 -->
      <div class="guide-content">
        <!-- Vue 3 기초 -->
        <div v-show="activeGuide === 'vue-basics'" class="guide-section">
          <div class="section-header">
            <h3>🎯 Vue 3 기초</h3>
          </div>
          
          <div class="section-content">
            <h4>1. Vue 3 Composition API 기본</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue 3 + TypeScript</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="vue-basic-setup">복사</button>
              </div>
              <pre><code id="vue-basic-setup">&lt;<span class="tag">script</span> <span class="attr-name">setup</span> <span class="attr-name">lang</span>=<span class="attr-value">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="function">ref</span>, <span class="function">reactive</span>, <span class="function">computed</span>, <span class="function">onMounted</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="comment">// 반응형 데이터</span>
<span class="keyword">const</span> <span class="variable">count</span> = <span class="function">ref</span>(<span class="number">0</span>)
<span class="keyword">const</span> <span class="variable">user</span> = <span class="function">reactive</span>({
  <span class="variable">name</span>: <span class="string">''</span>,
  <span class="variable">email</span>: <span class="string">''</span>
})

<span class="comment">// 계산된 속성</span>
<span class="keyword">const</span> <span class="variable">doubleCount</span> = <span class="function">computed</span>(() => <span class="variable">count</span>.<span class="variable">value</span> * <span class="number">2</span>)

<span class="comment">// 라이프사이클</span>
<span class="function">onMounted</span>(() => {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'컴포넌트가 마운트되었습니다'</span>)
})

<span class="comment">// 메소드</span>
<span class="keyword">const</span> <span class="variable">increment</span> = () => {
  <span class="variable">count</span>.<span class="variable">value</span>++
}
&lt;/<span class="tag">script</span>&gt;</code></pre>
            </div>

            <h4>2. 템플릿 문법</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Template</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="vue-template">복사</button>
              </div>
              <pre><code id="vue-template">&lt;<span class="tag">template</span>&gt;
  &lt;<span class="tag">div</span>&gt;
    &lt;!-- <span class="comment">데이터 바인딩</span> --&gt;
    &lt;<span class="tag">p</span>&gt;카운트: <span class="variable">&#123;&#123; count &#125;&#125;</span>&lt;/<span class="tag">p</span>&gt;
    &lt;<span class="tag">p</span>&gt;더블 카운트: <span class="variable">&#123;&#123; doubleCount &#125;&#125;</span>&lt;/<span class="tag">p</span>&gt;
    
    &lt;!-- <span class="comment">이벤트 핸들링</span> --&gt;
    &lt;<span class="tag">button</span> <span class="attr-name">@click</span>=<span class="attr-value">"increment"</span>&gt;증가&lt;/<span class="tag">button</span>&gt;
    
    &lt;!-- <span class="comment">v-model 양방향 바인딩</span> --&gt;
    &lt;<span class="tag">input</span> <span class="attr-name">v-model</span>=<span class="attr-value">"user.name"</span> <span class="attr-name">placeholder</span>=<span class="attr-value">"이름"</span> /&gt;
    
    &lt;!-- <span class="comment">조건부 렌더링</span> --&gt;
    &lt;<span class="tag">p</span> <span class="attr-name">v-if</span>=<span class="attr-value">"count > 5"</span>&gt;5보다 큽니다!&lt;/<span class="tag">p</span>&gt;
    
    &lt;!-- <span class="comment">리스트 렌더링</span> --&gt;
    &lt;<span class="tag">ul</span>&gt;
      &lt;<span class="tag">li</span> <span class="attr-name">v-for</span>=<span class="attr-value">"item in items"</span> <span class="attr-name">:key</span>=<span class="attr-value">"item.id"</span>&gt;
        <span class="variable">&#123;&#123; item.name &#125;&#125;</span>
      &lt;/<span class="tag">li</span>&gt;
    &lt;/<span class="tag">ul</span>&gt;
  &lt;/<span class="tag">div</span>&gt;
&lt;/<span class="tag">template</span>&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- Vue 라이프사이클 -->
        <div v-show="activeGuide === 'vue-lifecycle'" class="guide-section">
          <div class="section-header">
            <h3>🔄 Vue 라이프사이클</h3>
          </div>
          
          <div class="section-content">
            <h4>1. 라이프사이클 훅 개요</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Lifecycle</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="lifecycle-overview">복사</button>
              </div>
              <pre><code id="lifecycle-overview">&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { 
  <span class="variable">onBeforeMount</span>, 
  <span class="variable">onMounted</span>, 
  <span class="variable">onBeforeUpdate</span>, 
  <span class="variable">onUpdated</span>,
  <span class="variable">onBeforeUnmount</span>, 
  <span class="variable">onUnmounted</span> 
} <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="comment">// 컴포넌트 마운트 전</span>
<span class="function-name">onBeforeMount</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 마운트되기 전'</span>)
})

<span class="comment">// 컴포넌트 마운트 후 (가장 많이 사용)</span>
<span class="function-name">onMounted</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 마운트된 후'</span>)
  <span class="comment">// DOM에 접근 가능</span>
  <span class="comment">// API 호출, 이벤트 리스너 등록</span>
})

<span class="comment">// 컴포넌트 업데이트 전</span>
<span class="function-name">onBeforeUpdate</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 업데이트되기 전'</span>)
})

<span class="comment">// 컴포넌트 업데이트 후</span>
<span class="function-name">onUpdated</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 업데이트된 후'</span>)
})

<span class="comment">// 컴포넌트 언마운트 전</span>
<span class="function-name">onBeforeUnmount</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 언마운트되기 전'</span>)
})

<span class="comment">// 컴포넌트 언마운트 후</span>
<span class="function-name">onUnmounted</span>(() => {
  <span class="variable">console</span>.<span class="function-name">log</span>(<span class="string">'컴포넌트가 언마운트된 후'</span>)
  <span class="comment">// 리소스 정리, 이벤트 리스너 제거</span>
})
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>2. 실전 활용 예제</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Lifecycle</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="lifecycle-practical">복사</button>
              </div>
              <pre><code id="lifecycle-practical">&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">onMounted</span>, <span class="variable">onUnmounted</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">const</span> <span class="variable">data</span> = <span class="function-name">ref</span>([])
<span class="keyword">const</span> <span class="variable">timer</span> = <span class="function-name">ref</span>(<span class="keyword">null</span>)

<span class="comment">// 초기 데이터 로드</span>
<span class="function-name">onMounted</span>(<span class="keyword">async</span> () => {
  <span class="keyword">try</span> {
    <span class="comment">// API 호출</span>
    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>)
    <span class="variable">data</span>.<span class="variable">value</span> = <span class="variable">response</span>.<span class="variable">data</span>
    
    <span class="comment">// 주기적 데이터 갱신</span>
    <span class="variable">timer</span>.<span class="variable">value</span> = <span class="function-name">setInterval</span>(<span class="keyword">async</span> () => {
      <span class="keyword">const</span> <span class="variable">updated</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>)
      <span class="variable">data</span>.<span class="variable">value</span> = <span class="variable">updated</span>.<span class="variable">data</span>
    }, <span class="number">30000</span>) <span class="comment">// 30초마다</span>
    
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'데이터 로드 실패:'</span>, <span class="variable">error</span>)
  }
})

<span class="comment">// 정리 작업</span>
<span class="function-name">onUnmounted</span>(() => {
  <span class="keyword">if</span> (<span class="variable">timer</span>.<span class="variable">value</span>) {
    <span class="function-name">clearInterval</span>(<span class="variable">timer</span>.<span class="variable">value</span>)
    <span class="variable">timer</span>.<span class="variable">value</span> = <span class="keyword">null</span>
  }
})
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>3. 라이프사이클 실행 순서</h4>
            <div class="tips-list">
              <div class="tip">
                <strong>생성 단계:</strong> 
                setup() → onBeforeMount() → onMounted()
              </div>
              <div class="tip">
                <strong>업데이트 단계:</strong> 
                onBeforeUpdate() → onUpdated() (반응형 데이터 변경 시)
              </div>
              <div class="tip">
                <strong>소멸 단계:</strong> 
                onBeforeUnmount() → onUnmounted()
              </div>
            </div>
          </div>
        </div>

        <!-- ES6 문법 -->
        <div v-show="activeGuide === 'es6-syntax'" class="guide-section">
          <div class="section-header">
            <h3>⚡ ES6 문법</h3>
          </div>
          
          <div class="section-content">
            <h4>1. 화살표 함수 (Arrow Functions)</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">JavaScript ES6</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="arrow-functions">복사</button>
              </div>
              <pre><code id="arrow-functions"><span class="comment">// 기존 함수 선언</span>
<span class="keyword">function</span> <span class="function">add</span>(<span class="variable">a</span>, <span class="variable">b</span>) {
  <span class="keyword">return</span> <span class="variable">a</span> + <span class="variable">b</span>
}

<span class="comment">// 화살표 함수</span>
<span class="keyword">const</span> <span class="variable">add</span> = (<span class="variable">a</span>, <span class="variable">b</span>) => <span class="variable">a</span> + <span class="variable">b</span>

<span class="comment">// 복잡한 로직</span>
<span class="keyword">const</span> <span class="variable">processData</span> = (<span class="variable">items</span>) => {
  <span class="keyword">return</span> <span class="variable">items</span>
    .<span class="function">filter</span>(<span class="variable">item</span> => <span class="variable">item</span>.<span class="variable">active</span>)
    .<span class="function">map</span>(<span class="variable">item</span> => ({ ...<span class="variable">item</span>, <span class="variable">processed</span>: <span class="keyword">true</span> }))
}

<span class="comment">// Vue에서 활용</span>
<span class="keyword">const</span> <span class="variable">handleClick</span> = () => {
  <span class="variable">console</span>.<span class="function">log</span>(<span class="string">'클릭됨'</span>)
}

<span class="keyword">const</span> <span class="variable">fetchData</span> = <span class="keyword">async</span> () => {
  <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function">localFetch</span>(<span class="string">'/data'</span>)
  <span class="keyword">return</span> <span class="variable">response</span>.<span class="variable">data</span>
}</code></pre>
            </div>

            <h4>2. 구조 분해 할당 (Destructuring)</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">JavaScript ES6</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="destructuring">복사</button>
              </div>
              <pre><code id="destructuring"><span class="comment">// 배열 구조 분해</span>
<span class="keyword">const</span> [<span class="variable">first</span>, <span class="variable">second</span>, ...<span class="variable">rest</span>] = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>]

<span class="comment">// 객체 구조 분해</span>
<span class="keyword">const</span> <span class="variable">user</span> = { <span class="variable">name</span>: <span class="string">'홍길동'</span>, <span class="variable">age</span>: <span class="number">30</span>, <span class="variable">email</span>: <span class="string">'hong@test.com'</span> }
<span class="keyword">const</span> { <span class="variable">name</span>, <span class="variable">age</span> } = <span class="variable">user</span>

<span class="comment">// 기본값 설정</span>
<span class="keyword">const</span> { <span class="variable">name</span> = <span class="string">'익명'</span>, <span class="variable">address</span> = <span class="string">'미입력'</span> } = <span class="variable">user</span>

<span class="comment">// Vue Composable에서 활용</span>
<span class="keyword">const</span> { <span class="variable">posts</span>, <span class="variable">loading</span>, <span class="variable">error</span> } = <span class="function-name">usePostsStore</span>()

<span class="comment">// 함수 매개변수에서 활용</span>
<span class="keyword">const</span> <span class="variable">createUser</span> = ({ <span class="variable">name</span>, <span class="variable">email</span>, <span class="variable">age</span> = <span class="number">18</span> }) => {
  <span class="keyword">return</span> { <span class="variable">id</span>: <span class="variable">Date</span>.<span class="function-name">now</span>(), <span class="variable">name</span>, <span class="variable">email</span>, <span class="variable">age</span> }
}</code></pre>
            </div>

            <h4>3. 템플릿 리터럴 (Template Literals)</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">JavaScript ES6</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="template-literals">복사</button>
              </div>
              <pre><code id="template-literals"><span class="comment">// 문자열 보간</span>
<span class="keyword">const</span> <span class="variable">name</span> = <span class="string">'홍길동'</span>
<span class="keyword">const</span> <span class="variable">age</span> = <span class="number">30</span>
<span class="keyword">const</span> <span class="variable">message</span> = <span class="string">`안녕하세요, ${<span class="variable">name</span>}님! 나이는 ${<span class="variable">age</span>}세이군요.`</span>

<span class="comment">// 여러 줄 문자열</span>
<span class="keyword">const</span> <span class="variable">html</span> = <span class="string">`
  &lt;div class="user-card"&gt;
    &lt;h3&gt;${<span class="variable">name</span>}&lt;/h3&gt;
    &lt;p&gt;나이: ${<span class="variable">age</span>}&lt;/p&gt;
  &lt;/div&gt;
`</span>

<span class="comment">// 조건부 문자열</span>
<span class="keyword">const</span> <span class="variable">status</span> = <span class="variable">isActive</span> ? <span class="string">'활성'</span> : <span class="string">'비활성'</span>
<span class="keyword">const</span> <span class="variable">statusMessage</span> = <span class="string">`사용자 상태: ${<span class="variable">status</span>}`</span>

<span class="comment">// API URL 생성</span>
<span class="keyword">const</span> <span class="variable">userId</span> = <span class="number">123</span>
<span class="keyword">const</span> <span class="variable">apiUrl</span> = <span class="string">`/api/users/${<span class="variable">userId</span>}/posts?page=${<span class="variable">currentPage</span>}`</span></code></pre>
            </div>

            <h4>4. 스프레드 연산자 (...)</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">JavaScript ES6</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="spread-operator">복사</button>
              </div>
              <pre><code id="spread-operator"><span class="comment">// 배열 복사 및 합치기</span>
<span class="keyword">const</span> <span class="variable">arr1</span> = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>]
<span class="keyword">const</span> <span class="variable">arr2</span> = [<span class="number">4</span>, <span class="number">5</span>, <span class="number">6</span>]
<span class="keyword">const</span> <span class="variable">combined</span> = [...<span class="variable">arr1</span>, ...<span class="variable">arr2</span>]

<span class="comment">// 객체 복사 및 병합</span>
<span class="keyword">const</span> <span class="variable">user</span> = { <span class="variable">name</span>: <span class="string">'홍길동'</span>, <span class="variable">age</span>: <span class="number">30</span> }
<span class="keyword">const</span> <span class="variable">updatedUser</span> = { ...<span class="variable">user</span>, <span class="variable">age</span>: <span class="number">31</span>, <span class="variable">city</span>: <span class="string">'서울'</span> }

<span class="comment">// Vue reactive에서 활용</span>
<span class="keyword">const</span> <span class="variable">form</span> = <span class="function-name">reactive</span>({ <span class="variable">title</span>: <span class="string">''</span>, <span class="variable">content</span>: <span class="string">''</span> })
<span class="keyword">const</span> <span class="variable">resetForm</span> = () => {
  <span class="variable">Object</span>.<span class="function-name">assign</span>(<span class="variable">form</span>, { <span class="variable">title</span>: <span class="string">''</span>, <span class="variable">content</span>: <span class="string">''</span> })
}

<span class="comment">// 함수 매개변수</span>
<span class="keyword">const</span> <span class="variable">sum</span> = (...<span class="variable">numbers</span>) => <span class="variable">numbers</span>.<span class="function-name">reduce</span>((<span class="variable">a</span>, <span class="variable">b</span>) => <span class="variable">a</span> + <span class="variable">b</span>, <span class="number">0</span>)</code></pre>
            </div>

            <h4>5. Promise & async/await</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">JavaScript ES6</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="promise-async">복사</button>
              </div>
              <pre><code id="promise-async"><span class="comment">// Promise 기본</span>
<span class="keyword">const</span> <span class="variable">fetchUser</span> = (<span class="variable">id</span>) => {
  <span class="keyword">return</span> <span class="function-name">fetch</span>(<span class="string">`/api/users/${<span class="variable">id</span>}`</span>)
    .<span class="function-name">then</span>(<span class="variable">response</span> => <span class="variable">response</span>.<span class="function-name">json</span>())
    .<span class="function-name">then</span>(<span class="variable">data</span> => <span class="variable">data</span>)
    .<span class="function-name">catch</span>(<span class="variable">error</span> => <span class="variable">console</span>.<span class="function-name">error</span>(<span class="variable">error</span>))
}

<span class="comment">// async/await 사용</span>
<span class="keyword">const</span> <span class="variable">fetchUser</span> = <span class="keyword">async</span> (<span class="variable">id</span>) => {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">fetch</span>(<span class="string">`/api/users/${<span class="variable">id</span>}`</span>)
    <span class="keyword">const</span> <span class="variable">data</span> = <span class="keyword">await</span> <span class="variable">response</span>.<span class="function-name">json</span>()
    <span class="keyword">return</span> <span class="variable">data</span>
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'사용자 조회 실패:'</span>, <span class="variable">error</span>)
    <span class="keyword">throw</span> <span class="variable">error</span>
  }
}

<span class="comment">// Vue에서 활용</span>
<span class="keyword">const</span> <span class="variable">loadData</span> = <span class="keyword">async</span> () => {
  <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">true</span>
  <span class="keyword">try</span> {
    <span class="keyword">const</span> [<span class="variable">users</span>, <span class="variable">posts</span>] = <span class="keyword">await</span> <span class="variable">Promise</span>.<span class="function-name">all</span>([
      <span class="function-name">localFetch</span>(<span class="string">'/users'</span>),
      <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>)
    ])
    
    <span class="variable">userList</span>.<span class="variable">value</span> = <span class="variable">users</span>.<span class="variable">data</span>
    <span class="variable">postList</span>.<span class="variable">value</span> = <span class="variable">posts</span>.<span class="variable">data</span>
  } <span class="keyword">finally</span> {
    <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">false</span>
  }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- Composable 함수 -->
        <div v-show="activeGuide === 'composables'" class="guide-section">
          <div class="section-header">
            <h3>🔧 Composable 함수</h3>
          </div>
          
          <div class="section-content">
            <h4>1. Composable 기본 개념</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Composable</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="composable-basic">복사</button>
              </div>
              <pre><code id="composable-basic"><span class="comment">// composables/useCounter.ts</span>
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">computed</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">export</span> <span class="keyword">function</span> <span class="function-name">useCounter</span>(<span class="variable">initialValue</span> = <span class="number">0</span>) {
  <span class="keyword">const</span> <span class="variable">count</span> = <span class="function-name">ref</span>(<span class="variable">initialValue</span>)
  
  <span class="keyword">const</span> <span class="variable">doubleCount</span> = <span class="function-name">computed</span>(() => <span class="variable">count</span>.<span class="variable">value</span> * <span class="number">2</span>)
  
  <span class="keyword">const</span> <span class="variable">increment</span> = () => {
    <span class="variable">count</span>.<span class="variable">value</span>++
  }
  
  <span class="keyword">const</span> <span class="variable">decrement</span> = () => {
    <span class="variable">count</span>.<span class="variable">value</span>--
  }
  
  <span class="keyword">const</span> <span class="variable">reset</span> = () => {
    <span class="variable">count</span>.<span class="variable">value</span> = <span class="variable">initialValue</span>
  }
  
  <span class="keyword">return</span> {
    <span class="variable">count</span>,
    <span class="variable">doubleCount</span>,
    <span class="variable">increment</span>,
    <span class="variable">decrement</span>,
    <span class="variable">reset</span>
  }
}</code></pre>
            </div>

            <h4>2. API 통신 Composable</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Composable</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="composable-api">복사</button>
              </div>
              <pre><code id="composable-api"><span class="comment">// composables/useApi.ts</span>
<span class="keyword">import</span> { <span class="variable">ref</span> } <span class="keyword">from</span> <span class="string">'vue'</span>
<span class="keyword">import</span> { <span class="variable">localFetch</span> } <span class="keyword">from</span> <span class="string">'@/api/localFetch'</span>

<span class="keyword">export</span> <span class="keyword">function</span> <span class="function-name">useApi</span>&lt;<span class="type">T</span>&gt;(<span class="variable">url</span>: <span class="keyword">string</span>) {
  <span class="keyword">const</span> <span class="variable">data</span> = <span class="function-name">ref</span>&lt;<span class="type">T</span> | <span class="keyword">null</span>&gt;(<span class="keyword">null</span>)
  <span class="keyword">const</span> <span class="variable">loading</span> = <span class="function-name">ref</span>(<span class="keyword">false</span>)
  <span class="keyword">const</span> <span class="variable">error</span> = <span class="function-name">ref</span>&lt;<span class="keyword">string</span> | <span class="keyword">null</span>&gt;(<span class="keyword">null</span>)
  
  <span class="keyword">const</span> <span class="variable">execute</span> = <span class="keyword">async</span> (<span class="variable">options</span> = {}) => {
    <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">true</span>
    <span class="variable">error</span>.<span class="variable">value</span> = <span class="keyword">null</span>
    
    <span class="keyword">try</span> {
      <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="variable">url</span>, <span class="variable">options</span>)
      <span class="variable">data</span>.<span class="variable">value</span> = <span class="variable">response</span>.<span class="variable">data</span>
      <span class="keyword">return</span> <span class="variable">response</span>
    } <span class="keyword">catch</span> (<span class="variable">err</span>) {
      <span class="variable">error</span>.<span class="variable">value</span> = <span class="variable">err</span>.<span class="variable">message</span> || <span class="string">'요청 실패'</span>
      <span class="keyword">throw</span> <span class="variable">err</span>
    } <span class="keyword">finally</span> {
      <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">false</span>
    }
  }
  
  <span class="keyword">const</span> <span class="variable">reset</span> = () => {
    <span class="variable">data</span>.<span class="variable">value</span> = <span class="keyword">null</span>
    <span class="variable">error</span>.<span class="variable">value</span> = <span class="keyword">null</span>
    <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">false</span>
  }
  
  <span class="keyword">return</span> {
    <span class="variable">data</span>,
    <span class="variable">loading</span>,
    <span class="variable">error</span>,
    <span class="variable">execute</span>,
    <span class="variable">reset</span>
  }
}

<span class="comment">// 사용 예제</span>
&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">const</span> { <span class="variable">data</span>: <span class="variable">posts</span>, <span class="variable">loading</span>, <span class="variable">error</span>, <span class="variable">execute</span> } = <span class="function-name">useApi</span>(<span class="string">'/posts'</span>)

<span class="function-name">onMounted</span>(() => {
  <span class="function-name">execute</span>({ <span class="variable">method</span>: <span class="string">'GET'</span> })
})
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>3. 폼 유효성 검사 Composable</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Composable</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="composable-validation">복사</button>
              </div>
              <pre><code id="composable-validation"><span class="comment">// composables/useValidation.ts</span>
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">reactive</span>, <span class="variable">computed</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">export</span> <span class="keyword">function</span> <span class="function-name">useValidation</span>(<span class="variable">rules</span>: <span class="variable">Record</span>&lt;<span class="keyword">string</span>, <span class="variable">Function</span>[]&gt;) {
  <span class="keyword">const</span> <span class="variable">errors</span> = <span class="function-name">reactive</span>&lt;<span class="variable">Record</span>&lt;<span class="keyword">string</span>, <span class="keyword">string</span>&gt;&gt;({})
  <span class="keyword">const</span> <span class="variable">touched</span> = <span class="function-name">reactive</span>&lt;<span class="variable">Record</span>&lt;<span class="keyword">string</span>, <span class="keyword">boolean</span>&gt;&gt;({})
  
  <span class="keyword">const</span> <span class="variable">validate</span> = (<span class="variable">field</span>: <span class="keyword">string</span>, <span class="variable">value</span>: <span class="keyword">any</span>) => {
    <span class="keyword">const</span> <span class="variable">fieldRules</span> = <span class="variable">rules</span>[<span class="variable">field</span>] || []
    
    <span class="keyword">for</span> (<span class="keyword">const</span> <span class="variable">rule</span> <span class="keyword">of</span> <span class="variable">fieldRules</span>) {
      <span class="keyword">const</span> <span class="variable">result</span> = <span class="function-name">rule</span>(<span class="variable">value</span>)
      <span class="keyword">if</span> (<span class="variable">result</span> !== <span class="keyword">true</span>) {
        <span class="variable">errors</span>[<span class="variable">field</span>] = <span class="variable">result</span>
        <span class="keyword">return</span> <span class="keyword">false</span>
      }
    }
    
    <span class="variable">errors</span>[<span class="variable">field</span>] = <span class="string">''</span>
    <span class="keyword">return</span> <span class="keyword">true</span>
  }
  
  <span class="keyword">const</span> <span class="variable">validateAll</span> = (<span class="variable">formData</span>: <span class="variable">Record</span>&lt;<span class="keyword">string</span>, <span class="keyword">any</span>&gt;) => {
    <span class="keyword">let</span> <span class="variable">isValid</span> = <span class="keyword">true</span>
    
    <span class="variable">Object</span>.<span class="function-name">keys</span>(<span class="variable">rules</span>).<span class="function-name">forEach</span>(<span class="variable">field</span> => {
      <span class="keyword">if</span> (!<span class="function-name">validate</span>(<span class="variable">field</span>, <span class="variable">formData</span>[<span class="variable">field</span>])) {
        <span class="variable">isValid</span> = <span class="keyword">false</span>
      }
      <span class="variable">touched</span>[<span class="variable">field</span>] = <span class="keyword">true</span>
    })
    
    <span class="keyword">return</span> <span class="variable">isValid</span>
  }
  
  <span class="keyword">const</span> <span class="variable">isFieldValid</span> = (<span class="variable">field</span>: <span class="keyword">string</span>) => {
    <span class="keyword">return</span> !<span class="variable">errors</span>[<span class="variable">field</span>] && <span class="variable">touched</span>[<span class="variable">field</span>]
  }
  
  <span class="keyword">const</span> <span class="variable">isFormValid</span> = <span class="function-name">computed</span>(() => {
    <span class="keyword">return</span> <span class="variable">Object</span>.<span class="function-name">keys</span>(<span class="variable">rules</span>).<span class="function-name">every</span>(<span class="variable">field</span> => 
      <span class="variable">touched</span>[<span class="variable">field</span>] && !<span class="variable">errors</span>[<span class="variable">field</span>]
    )
  })
  
  <span class="keyword">return</span> {
    <span class="variable">errors</span>,
    <span class="variable">touched</span>,
    <span class="variable">validate</span>,
    <span class="variable">validateAll</span>,
    <span class="variable">isFieldValid</span>,
    <span class="variable">isFormValid</span>
  }
}

<span class="comment">// 유효성 검사 규칙</span>
<span class="keyword">export</span> <span class="keyword">const</span> <span class="variable">validationRules</span> = {
  <span class="variable">required</span>: (<span class="variable">value</span>: <span class="keyword">any</span>) => !!<span class="variable">value</span> || <span class="string">'필수 입력 항목입니다'</span>,
  <span class="variable">email</span>: (<span class="variable">value</span>: <span class="keyword">string</span>) => {
    <span class="keyword">const</span> <span class="variable">pattern</span> = <span class="string">/^[^\s@]+@[^\s@]+\.[^\s@]+$/</span>
    <span class="keyword">return</span> <span class="variable">pattern</span>.<span class="function-name">test</span>(<span class="variable">value</span>) || <span class="string">'올바른 이메일을 입력하세요'</span>
  },
  <span class="variable">minLength</span>: (<span class="variable">min</span>: <span class="keyword">number</span>) => (<span class="variable">value</span>: <span class="keyword">string</span>) => 
    <span class="variable">value</span>.<span class="variable">length</span> >= <span class="variable">min</span> || <span class="string">`최소 ${<span class="variable">min</span>}자 이상 입력하세요`</span>
}</code></pre>
            </div>

            <h4>4. 로컬 스토리지 Composable</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Composable</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="composable-localStorage">복사</button>
              </div>
              <pre><code id="composable-localStorage"><span class="comment">// composables/useLocalStorage.ts</span>
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">watch</span>, <span class="variable">Ref</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">export</span> <span class="keyword">function</span> <span class="function-name">useLocalStorage</span>&lt;<span class="type">T</span>&gt;(
  <span class="variable">key</span>: <span class="keyword">string</span>, 
  <span class="variable">defaultValue</span>: <span class="type">T</span>
): [<span class="variable">Ref</span>&lt;<span class="type">T</span>&gt;, (<span class="variable">value</span>: <span class="type">T</span>) => <span class="keyword">void</span>] {
  
  <span class="keyword">const</span> <span class="variable">storedValue</span> = <span class="variable">localStorage</span>.<span class="function-name">getItem</span>(<span class="variable">key</span>)
  <span class="keyword">const</span> <span class="variable">initial</span> = <span class="variable">storedValue</span> ? <span class="variable">JSON</span>.<span class="function-name">parse</span>(<span class="variable">storedValue</span>) : <span class="variable">defaultValue</span>
  
  <span class="keyword">const</span> <span class="variable">state</span> = <span class="function-name">ref</span>&lt;<span class="type">T</span>&gt;(<span class="variable">initial</span>)
  
  <span class="keyword">const</span> <span class="variable">setValue</span> = (<span class="variable">value</span>: <span class="type">T</span>) => {
    <span class="variable">state</span>.<span class="variable">value</span> = <span class="variable">value</span>
    <span class="variable">localStorage</span>.<span class="function-name">setItem</span>(<span class="variable">key</span>, <span class="variable">JSON</span>.<span class="function-name">stringify</span>(<span class="variable">value</span>))
  }
  
  <span class="comment">// 값이 변경될 때마다 로컬 스토리지에 저장</span>
  <span class="function-name">watch</span>(
    <span class="variable">state</span>,
    (<span class="variable">newValue</span>) => {
      <span class="variable">localStorage</span>.<span class="function-name">setItem</span>(<span class="variable">key</span>, <span class="variable">JSON</span>.<span class="function-name">stringify</span>(<span class="variable">newValue</span>))
    },
    { <span class="variable">deep</span>: <span class="keyword">true</span> }
  )
  
  <span class="keyword">return</span> [<span class="variable">state</span>, <span class="variable">setValue</span>]
}

<span class="comment">// 사용 예제</span>
&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">const</span> [<span class="variable">theme</span>, <span class="variable">setTheme</span>] = <span class="function-name">useLocalStorage</span>(<span class="string">'theme'</span>, <span class="string">'light'</span>)
<span class="keyword">const</span> [<span class="variable">userPreferences</span>, <span class="variable">setUserPreferences</span>] = <span class="function-name">useLocalStorage</span>(<span class="string">'preferences'</span>, {
  <span class="variable">language</span>: <span class="string">'ko'</span>,
  <span class="variable">notifications</span>: <span class="keyword">true</span>
})

<span class="keyword">const</span> <span class="variable">toggleTheme</span> = () => {
  <span class="function-name">setTheme</span>(<span class="variable">theme</span>.<span class="variable">value</span> === <span class="string">'light'</span> ? <span class="string">'dark'</span> : <span class="string">'light'</span>)
}
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>5. Composable 조합 및 활용</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Composable</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="composable-combination">복사</button>
              </div>
              <pre><code id="composable-combination"><span class="comment">// 여러 Composable을 조합한 실제 컴포넌트</span>
&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">reactive</span>, <span class="variable">onMounted</span> } <span class="keyword">from</span> <span class="string">'vue'</span>
<span class="keyword">import</span> { <span class="variable">useApi</span> } <span class="keyword">from</span> <span class="string">'@/composables/useApi'</span>
<span class="keyword">import</span> { <span class="variable">useValidation</span>, <span class="variable">validationRules</span> } <span class="keyword">from</span> <span class="string">'@/composables/useValidation'</span>
<span class="keyword">import</span> { <span class="variable">useLocalStorage</span> } <span class="keyword">from</span> <span class="string">'@/composables/useLocalStorage'</span>

<span class="comment">// 폼 데이터</span>
<span class="keyword">const</span> <span class="variable">form</span> = <span class="function-name">reactive</span>({
  <span class="variable">title</span>: <span class="string">''</span>,
  <span class="variable">content</span>: <span class="string">''</span>,
  <span class="variable">category</span>: <span class="string">''</span>
})

<span class="comment">// API 통신</span>
<span class="keyword">const</span> { <span class="variable">data</span>: <span class="variable">posts</span>, <span class="variable">loading</span>, <span class="variable">execute</span> } = <span class="function-name">useApi</span>(<span class="string">'/posts'</span>)

<span class="comment">// 폼 유효성 검사</span>
<span class="keyword">const</span> { <span class="variable">errors</span>, <span class="variable">validateAll</span>, <span class="variable">isFormValid</span> } = <span class="function-name">useValidation</span>({
  <span class="variable">title</span>: [<span class="variable">validationRules</span>.<span class="variable">required</span>, <span class="variable">validationRules</span>.<span class="function-name">minLength</span>(<span class="number">2</span>)],
  <span class="variable">content</span>: [<span class="variable">validationRules</span>.<span class="variable">required</span>, <span class="variable">validationRules</span>.<span class="function-name">minLength</span>(<span class="number">10</span>)]
})

<span class="comment">// 로컬 스토리지 (초안 저장)</span>
<span class="keyword">const</span> [<span class="variable">draft</span>, <span class="variable">saveDraft</span>] = <span class="function-name">useLocalStorage</span>(<span class="string">'post-draft'</span>, {})

<span class="comment">// 컴포넌트 초기화</span>
<span class="function-name">onMounted</span>(() => {
  <span class="function-name">execute</span>() <span class="comment">// 게시글 목록 로드</span>
  
  <span class="comment">// 저장된 초안이 있으면 복원</span>
  <span class="keyword">if</span> (<span class="variable">draft</span>.<span class="variable">value</span>.<span class="variable">title</span>) {
    <span class="variable">Object</span>.<span class="function-name">assign</span>(<span class="variable">form</span>, <span class="variable">draft</span>.<span class="variable">value</span>)
  }
})

<span class="comment">// 폼 제출</span>
<span class="keyword">const</span> <span class="variable">handleSubmit</span> = <span class="keyword">async</span> () => {
  <span class="keyword">if</span> (!<span class="function-name">validateAll</span>(<span class="variable">form</span>)) <span class="keyword">return</span>
  
  <span class="keyword">try</span> {
    <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>, {
      <span class="variable">method</span>: <span class="string">'POST'</span>,
      <span class="variable">body</span>: <span class="variable">form</span>
    })
    
    <span class="comment">// 성공 시 초안 삭제</span>
    <span class="function-name">saveDraft</span>({})
    
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'게시글 저장 실패:'</span>, <span class="variable">error</span>)
  }
}

<span class="comment">// 자동 저장 (초안)</span>
<span class="function-name">watch</span>(<span class="variable">form</span>, (<span class="variable">newForm</span>) => {
  <span class="function-name">saveDraft</span>(<span class="variable">newForm</span>)
}, { <span class="variable">deep</span>: <span class="keyword">true</span> })
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- TypeScript 기초 -->
        <div v-show="activeGuide === 'typescript-basics'" class="guide-section">
          <div class="section-header">
            <h3>📝 TypeScript 기초</h3>
          </div>
          
          <div class="section-content">
            <h4>1. 기본 타입 정의</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">TypeScript</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="ts-basic-types">복사</button>
              </div>
              <pre><code id="ts-basic-types"><span class="comment">// 인터페이스 정의</span>
<span class="keyword">interface</span> <span class="variable">User</span> {
  <span class="variable">id</span>: <span class="keyword">number</span>
  <span class="variable">name</span>: <span class="keyword">string</span>
  <span class="variable">email</span>: <span class="keyword">string</span>
  <span class="variable">age</span>?: <span class="keyword">number</span>  <span class="comment">// 선택적 속성</span>
}

<span class="keyword">interface</span> <span class="variable">Post</span> {
  <span class="variable">id</span>: <span class="keyword">number</span>
  <span class="variable">title</span>: <span class="keyword">string</span>
  <span class="variable">content</span>: <span class="keyword">string</span>
  <span class="variable">author</span>: <span class="variable">User</span>
  <span class="variable">createdAt</span>: <span class="variable">Date</span>
}

<span class="comment">// 타입 별칭</span>
<span class="keyword">type</span> <span class="variable">Status</span> = <span class="string">'pending'</span> | <span class="string">'approved'</span> | <span class="string">'rejected'</span></code></pre>
            </div>

            <h4>2. Vue 컴포넌트에서 TypeScript 사용</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue + TypeScript</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="vue-typescript">복사</button>
              </div>
              <pre><code id="vue-typescript">&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">reactive</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="comment">// 타입이 지정된 반응형 데이터</span>
<span class="keyword">const</span> <span class="variable">users</span> = <span class="function-name">ref</span>&lt;<span class="variable">User</span>[]&gt;([])
<span class="keyword">const</span> <span class="variable">currentUser</span> = <span class="function-name">ref</span>&lt;<span class="variable">User</span> | <span class="keyword">null</span>&gt;(<span class="keyword">null</span>)

<span class="comment">// reactive 객체 타입</span>
<span class="keyword">const</span> <span class="variable">form</span> = <span class="function-name">reactive</span>&lt;{
  <span class="variable">title</span>: <span class="keyword">string</span>
  <span class="variable">content</span>: <span class="keyword">string</span>
  <span class="variable">status</span>: <span class="variable">Status</span>
}&gt;({
  <span class="variable">title</span>: <span class="string">''</span>,
  <span class="variable">content</span>: <span class="string">''</span>,
  <span class="variable">status</span>: <span class="string">'pending'</span>
})

<span class="comment">// 함수 타입 정의</span>
<span class="keyword">const</span> <span class="variable">createPost</span> = <span class="keyword">async</span> (<span class="variable">postData</span>: <span class="variable">Omit</span>&lt;<span class="variable">Post</span>, <span class="string">'id'</span> | <span class="string">'createdAt'</span>&gt;): <span class="variable">Promise</span>&lt;<span class="variable">Post</span>&gt; <span class="keyword">=&gt;</span> {
  <span class="comment">// API 호출 로직</span>
}
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- Pinia 상태관리 -->
        <div v-show="activeGuide === 'pinia-state'" class="guide-section">
          <div class="section-header">
            <h3>🗃️ Pinia 상태관리</h3>
          </div>
          
          <div class="section-content">
            <h4>1. Store 정의</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Pinia Store</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="pinia-store">복사</button>
              </div>
              <pre><code id="pinia-store"><span class="comment">// stores/posts.ts</span>
<span class="keyword">import</span> { <span class="variable">defineStore</span> } <span class="keyword">from</span> <span class="string">'pinia'</span>
<span class="keyword">import</span> { <span class="variable">ref</span>, <span class="variable">computed</span> } <span class="keyword">from</span> <span class="string">'vue'</span>

<span class="keyword">export</span> <span class="keyword">const</span> <span class="variable">usePostsStore</span> = <span class="function-name">defineStore</span>(<span class="string">'posts'</span>, () <span class="keyword">=&gt;</span> {
  <span class="comment">// State</span>
  <span class="keyword">const</span> <span class="variable">posts</span> = <span class="function-name">ref</span>&lt;<span class="variable">Post</span>[]&gt;([])
  <span class="keyword">const</span> <span class="variable">loading</span> = <span class="function-name">ref</span>(<span class="keyword">false</span>)
  
  <span class="comment">// Getters</span>
  <span class="keyword">const</span> <span class="variable">publishedPosts</span> = <span class="function-name">computed</span>(() <span class="keyword">=&gt;</span> 
    <span class="variable">posts</span>.<span class="variable">value</span>.<span class="function-name">filter</span>(<span class="variable">post</span> <span class="keyword">=&gt;</span> <span class="variable">post</span>.<span class="variable">status</span> === <span class="string">'published'</span>)
  )
  
  <span class="comment">// Actions</span>
  <span class="keyword">const</span> <span class="variable">fetchPosts</span> = <span class="keyword">async</span> () <span class="keyword">=&gt;</span> {
    <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">true</span>
    <span class="keyword">try</span> {
      <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>)
      <span class="variable">posts</span>.<span class="variable">value</span> = <span class="variable">response</span>.<span class="variable">data</span>
    } <span class="keyword">finally</span> {
      <span class="variable">loading</span>.<span class="variable">value</span> = <span class="keyword">false</span>
    }
  }
  
  <span class="keyword">const</span> <span class="variable">addPost</span> = (<span class="variable">post</span>: <span class="variable">Post</span>) <span class="keyword">=&gt;</span> {
    <span class="variable">posts</span>.<span class="variable">value</span>.<span class="function-name">push</span>(<span class="variable">post</span>)
  }
  
  <span class="keyword">return</span> {
    <span class="variable">posts</span>,
    <span class="variable">loading</span>,
    <span class="variable">publishedPosts</span>,
    <span class="variable">fetchPosts</span>,
    <span class="variable">addPost</span>
  }
})</code></pre>
            </div>

            <h4>2. 컴포넌트에서 Store 사용</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue + Pinia</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="pinia-usage">복사</button>
              </div>
              <pre><code id="pinia-usage">&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">onMounted</span> } <span class="keyword">from</span> <span class="string">'vue'</span>
<span class="keyword">import</span> { <span class="variable">storeToRefs</span> } <span class="keyword">from</span> <span class="string">'pinia'</span>
<span class="keyword">import</span> { <span class="variable">usePostsStore</span> } <span class="keyword">from</span> <span class="string">'@/stores/posts'</span>

<span class="keyword">const</span> <span class="variable">postsStore</span> = <span class="function-name">usePostsStore</span>()

<span class="comment">// 반응형으로 상태 사용</span>
<span class="keyword">const</span> { <span class="variable">posts</span>, <span class="variable">loading</span> } = <span class="function-name">storeToRefs</span>(<span class="variable">postsStore</span>)

<span class="comment">// 액션 호출</span>
<span class="function-name">onMounted</span>(() <span class="keyword">=&gt;</span> {
  <span class="variable">postsStore</span>.<span class="function-name">fetchPosts</span>()
})
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- API 통신 -->
        <div v-show="activeGuide === 'api-communication'" class="guide-section">
          <div class="section-header">
            <h3>🌐 API 통신</h3>
          </div>
          
          <div class="section-content">
            <h4>1. LocalFetch 기본 사용법</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">API 통신</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="api-basic">복사</button>
              </div>
              <pre><code id="api-basic"><span class="keyword">import</span> { <span class="variable">localFetch</span> } <span class="keyword">from</span> <span class="string">'@/api/localFetch'</span>

<span class="comment">// GET 요청</span>
<span class="keyword">const</span> <span class="variable">fetchPosts</span> = <span class="keyword">async</span> () <span class="keyword">=&gt;</span> {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>, {
      <span class="variable">method</span>: <span class="string">'GET'</span>,
      <span class="variable">params</span>: { <span class="variable">page</span>: <span class="number">1</span>, <span class="variable">limit</span>: <span class="number">10</span> }
    })
    <span class="keyword">return</span> <span class="variable">response</span>.<span class="variable">data</span>
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'데이터 조회 실패:'</span>, <span class="variable">error</span>)
  }
}

<span class="comment">// POST 요청</span>
<span class="keyword">const</span> <span class="variable">createPost</span> = <span class="keyword">async</span> (<span class="variable">postData</span>: <span class="variable">CreatePostRequest</span>) <span class="keyword">=&gt;</span> {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/posts'</span>, {
      <span class="variable">method</span>: <span class="string">'POST'</span>,
      <span class="variable">body</span>: <span class="variable">postData</span>
    })
    <span class="keyword">return</span> <span class="variable">response</span>.<span class="variable">data</span>
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'게시글 생성 실패:'</span>, <span class="variable">error</span>)
  }
}</code></pre>
            </div>

            <h4>2. 에러 처리 패턴</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Error Handling</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="api-error">복사</button>
              </div>
              <pre><code id="api-error"><span class="keyword">const</span> { <span class="variable">alert</span> } = <span class="function-name">useModal</span>()

<span class="keyword">const</span> <span class="variable">handleApiCall</span> = <span class="keyword">async</span> () <span class="keyword">=&gt;</span> {
  <span class="keyword">try</span> {
    <span class="keyword">const</span> <span class="variable">result</span> = <span class="keyword">await</span> <span class="function-name">apiFunction</span>()
    <span class="keyword">await</span> <span class="function-name">alert</span>(<span class="string">'성공적으로 처리되었습니다.'</span>)
    <span class="keyword">return</span> <span class="variable">result</span>
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="variable">console</span>.<span class="function-name">error</span>(<span class="string">'API 호출 실패:'</span>, <span class="variable">error</span>)
    <span class="keyword">await</span> <span class="function-name">alert</span>(<span class="string">'처리 중 오류가 발생했습니다.'</span>)
    <span class="keyword">throw</span> <span class="variable">error</span>
  }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- 라우터 활용 -->
        <div v-show="activeGuide === 'router-usage'" class="guide-section">
          <div class="section-header">
            <h3>🧭 라우터 활용</h3>
          </div>
          
          <div class="section-content">
            <h4>1. 기본 라우터 사용</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Router</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="router-basic">복사</button>
              </div>
              <pre><code id="router-basic">&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">useRouter</span>, <span class="variable">useRoute</span> } <span class="keyword">from</span> <span class="string">'vue-router'</span>

<span class="keyword">const</span> <span class="variable">router</span> = <span class="function-name">useRouter</span>()
<span class="keyword">const</span> <span class="variable">route</span> = <span class="function-name">useRoute</span>()

<span class="comment">// 페이지 이동</span>
<span class="keyword">const</span> <span class="variable">goToDetail</span> = (<span class="variable">id</span>: <span class="keyword">number</span>) <span class="keyword">=&gt;</span> {
  <span class="variable">router</span>.<span class="function-name">push</span>(<span class="string">`/detail/</span><span class="variable">${id}</span><span class="string">`</span>)
}

<span class="comment">// 파라미터 접근</span>
<span class="keyword">const</span> <span class="variable">postId</span> = <span class="variable">route</span>.<span class="variable">params</span>.<span class="variable">id</span>

<span class="comment">// 쿼리 접근</span>
<span class="keyword">const</span> <span class="variable">page</span> = <span class="variable">route</span>.<span class="variable">query</span>.<span class="variable">page</span> || <span class="number">1</span>

<span class="comment">// 뒤로가기</span>
<span class="keyword">const</span> <span class="variable">goBack</span> = () <span class="keyword">=&gt;</span> {
  <span class="variable">router</span>.<span class="function-name">back</span>()
}
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>2. 네비게이션 가드</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Navigation Guards</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="router-guards">복사</button>
              </div>
              <pre><code id="router-guards"><span class="comment">// 라우트 이동 전 확인</span>
<span class="keyword">import</span> { <span class="variable">onBeforeRouteLeave</span> } <span class="keyword">from</span> <span class="string">'vue-router'</span>

<span class="keyword">const</span> <span class="variable">hasUnsavedChanges</span> = <span class="function-name">ref</span>(<span class="keyword">false</span>)

<span class="function-name">onBeforeRouteLeave</span>(<span class="keyword">async</span> (<span class="variable">to</span>, <span class="variable">from</span>) <span class="keyword">=&gt;</span> {
  <span class="keyword">if</span> (<span class="variable">hasUnsavedChanges</span>.<span class="variable">value</span>) {
    <span class="keyword">const</span> { <span class="variable">confirm</span> } = <span class="function-name">useModal</span>()
    <span class="keyword">const</span> <span class="variable">shouldLeave</span> = <span class="keyword">await</span> <span class="function-name">confirm</span>(<span class="string">'저장되지 않은 변경사항이 있습니다. 정말 나가시겠습니까?'</span>)
    <span class="keyword">if</span> (!<span class="variable">shouldLeave</span>) <span class="keyword">return</span> <span class="keyword">false</span>
  }
})</code></pre>
            </div>

            <h4>3. 로그인 인증 가드</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Auth Guards</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="auth-guards">복사</button>
              </div>
              <pre><code id="auth-guards"><span class="comment">// router/index.ts - 전역 가드 설정</span>
<span class="keyword">import</span> { <span class="variable">createRouter</span>, <span class="variable">createWebHistory</span> } <span class="keyword">from</span> <span class="string">'vue-router'</span>

<span class="keyword">const</span> <span class="variable">router</span> = <span class="function-name">createRouter</span>({
  <span class="comment">// ...라우트 설정</span>
})

<span class="comment">// 전역 before 가드</span>
<span class="variable">router</span>.<span class="function-name">beforeEach</span>((<span class="variable">to</span>, <span class="variable">from</span>, <span class="variable">next</span>) <span class="keyword">=&gt;</span> {
  <span class="keyword">const</span> <span class="variable">isAuthenticated</span> = <span class="variable">localStorage</span>.<span class="function-name">getItem</span>(<span class="string">'isLoggedIn'</span>) === <span class="string">'true'</span>
  
  <span class="comment">// 로그인이 필요한 페이지들</span>
  <span class="keyword">const</span> <span class="variable">requiresAuth</span> = [<span class="string">'list'</span>, <span class="string">'detail'</span>, <span class="string">'post'</span>, <span class="string">'update'</span>]
  
  <span class="keyword">if</span> (<span class="variable">requiresAuth</span>.<span class="function-name">includes</span>(<span class="variable">to</span>.<span class="variable">name</span> <span class="keyword">as</span> <span class="keyword">string</span>) && !<span class="variable">isAuthenticated</span>) {
    <span class="comment">// 로그인 페이지로 리다이렉트</span>
    <span class="function-name">next</span>({ <span class="variable">name</span>: <span class="string">'login'</span>, <span class="variable">query</span>: { <span class="variable">redirect</span>: <span class="variable">to</span>.<span class="variable">fullPath</span> } })
  } <span class="keyword">else</span> {
    <span class="function-name">next</span>()
  }
})

<span class="keyword">export</span> <span class="keyword">default</span> <span class="variable">router</span></code></pre>
            </div>

            <h4>4. 컴포넌트별 인증 가드</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Component Auth</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="component-auth">복사</button>
              </div>
              <pre><code id="component-auth"><span class="comment">// 개별 컴포넌트에서 인증 체크</span>
&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">import</span> { <span class="variable">onMounted</span> } <span class="keyword">from</span> <span class="string">'vue'</span>
<span class="keyword">import</span> { <span class="variable">useRouter</span> } <span class="keyword">from</span> <span class="string">'vue-router'</span>

<span class="keyword">const</span> <span class="variable">router</span> = <span class="function-name">useRouter</span>()

<span class="keyword">const</span> <span class="variable">checkAuthentication</span> = () <span class="keyword">=&gt;</span> {
  <span class="keyword">const</span> <span class="variable">isLoggedIn</span> = <span class="variable">localStorage</span>.<span class="function-name">getItem</span>(<span class="string">'isLoggedIn'</span>) === <span class="string">'true'</span>
  
  <span class="keyword">if</span> (!<span class="variable">isLoggedIn</span>) {
    <span class="variable">router</span>.<span class="function-name">push</span>({
      <span class="variable">name</span>: <span class="string">'login'</span>,
      <span class="variable">query</span>: { <span class="variable">redirect</span>: <span class="variable">router</span>.<span class="variable">currentRoute</span>.<span class="variable">value</span>.<span class="variable">fullPath</span> }
    })
  }
}

<span class="function-name">onMounted</span>(() <span class="keyword">=&gt;</span> {
  <span class="function-name">checkAuthentication</span>()
})
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>

            <h4>5. 로그인 후 원래 페이지로 리다이렉트</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Login Redirect</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="login-redirect">복사</button>
              </div>
              <pre><code id="login-redirect"><span class="comment">// LoginView.vue - 로그인 성공 후 처리</span>
<span class="keyword">const</span> <span class="variable">handleLogin</span> = <span class="keyword">async</span> () <span class="keyword">=&gt;</span> {
  <span class="keyword">try</span> {
    <span class="comment">// 로그인 API 호출</span>
    <span class="keyword">const</span> <span class="variable">response</span> = <span class="keyword">await</span> <span class="function-name">localFetch</span>(<span class="string">'/auth/login'</span>, {
      <span class="variable">method</span>: <span class="string">'POST'</span>,
      <span class="variable">body</span>: { <span class="variable">email</span>: <span class="variable">form</span>.<span class="variable">email</span>, <span class="variable">password</span>: <span class="variable">form</span>.<span class="variable">password</span> }
    })
    
    <span class="keyword">if</span> (<span class="variable">response</span>.<span class="variable">success</span>) {
      <span class="comment">// 로그인 상태 저장</span>
      <span class="variable">localStorage</span>.<span class="function-name">setItem</span>(<span class="string">'isLoggedIn'</span>, <span class="string">'true'</span>)
      <span class="variable">localStorage</span>.<span class="function-name">setItem</span>(<span class="string">'userInfo'</span>, <span class="variable">JSON</span>.<span class="function-name">stringify</span>(<span class="variable">response</span>.<span class="variable">user</span>))
      
      <span class="comment">// 원래 가려던 페이지로 리다이렉트</span>
      <span class="keyword">const</span> <span class="variable">redirect</span> = <span class="variable">route</span>.<span class="variable">query</span>.<span class="variable">redirect</span> <span class="keyword">as</span> <span class="keyword">string</span>
      <span class="variable">router</span>.<span class="function-name">push</span>(<span class="variable">redirect</span> || <span class="string">'/list'</span>)
    }
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="keyword">await</span> <span class="function-name">alert</span>(<span class="string">'로그인에 실패했습니다.'</span>)
  }
}</code></pre>
            </div>
          </div>
        </div>

        <!-- 폼 처리 -->
        <div v-show="activeGuide === 'form-handling'" class="guide-section">
          <div class="section-header">
            <h3>📋 폼 처리</h3>
          </div>
          
          <div class="section-content">
            <h4>1. 기본 폼 처리</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Vue Form</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="form-basic">복사</button>
              </div>
              <pre><code id="form-basic">&lt;<span class="keyword">template</span>&gt;
  &lt;<span class="keyword">form</span> <span class="variable">@submit</span>.<span class="variable">prevent</span>=<span class="string">"handleSubmit"</span>&gt;
    &lt;<span class="keyword">div</span> <span class="variable">class</span>=<span class="string">"form-group"</span>&gt;
      &lt;<span class="keyword">label</span>&gt;제목&lt;/<span class="keyword">label</span>&gt;
      &lt;<span class="keyword">input</span> 
        <span class="variable">v-model</span>=<span class="string">"form.title"</span>
        <span class="variable">:class</span>=<span class="string">"{ error: errors.title }"</span>
        <span class="variable">@blur</span>=<span class="string">"validateTitle"</span>
      /&gt;
      &lt;<span class="keyword">span</span> <span class="variable">v-if</span>=<span class="string">"errors.title"</span> <span class="variable">class</span>=<span class="string">"error-text"</span>&gt;<span class="variable">&#123;&#123; errors.title &#125;&#125;</span>&lt;/<span class="keyword">span</span>&gt;
    &lt;/<span class="keyword">div</span>&gt;
    
    &lt;<span class="keyword">button</span> <span class="variable">type</span>=<span class="string">"submit"</span> <span class="variable">:disabled</span>=<span class="string">"!isFormValid"</span>&gt;
      저장
    &lt;/<span class="keyword">button</span>&gt;
  &lt;/<span class="keyword">form</span>&gt;
&lt;/<span class="keyword">template</span>&gt;

&lt;<span class="keyword">script</span> <span class="variable">setup</span> <span class="variable">lang</span>=<span class="string">"ts"</span>&gt;
<span class="keyword">const</span> <span class="variable">form</span> = <span class="function-name">reactive</span>({
  <span class="variable">title</span>: <span class="string">''</span>,
  <span class="variable">content</span>: <span class="string">''</span>,
  <span class="variable">category</span>: <span class="string">''</span>
})

<span class="keyword">const</span> <span class="variable">errors</span> = <span class="function-name">reactive</span>({
  <span class="variable">title</span>: <span class="string">''</span>,
  <span class="variable">content</span>: <span class="string">''</span>,
  <span class="variable">category</span>: <span class="string">''</span>
})

<span class="keyword">const</span> <span class="variable">validateTitle</span> = () <span class="keyword">=&gt;</span> {
  <span class="keyword">if</span> (!<span class="variable">form</span>.<span class="variable">title</span>.<span class="function-name">trim</span>()) {
    <span class="variable">errors</span>.<span class="variable">title</span> = <span class="string">'제목은 필수입니다'</span>
  } <span class="keyword">else</span> <span class="keyword">if</span> (<span class="variable">form</span>.<span class="variable">title</span>.<span class="variable">length</span> &lt; <span class="number">2</span>) {
    <span class="variable">errors</span>.<span class="variable">title</span> = <span class="string">'제목은 2자 이상이어야 합니다'</span>
  } <span class="keyword">else</span> {
    <span class="variable">errors</span>.<span class="variable">title</span> = <span class="string">''</span>
  }
}

<span class="keyword">const</span> <span class="variable">isFormValid</span> = <span class="function-name">computed</span>(() <span class="keyword">=&gt;</span> {
  <span class="keyword">return</span> <span class="variable">form</span>.<span class="variable">title</span> && <span class="variable">form</span>.<span class="variable">content</span> && !<span class="variable">errors</span>.<span class="variable">title</span> && !<span class="variable">errors</span>.<span class="variable">content</span>
})

<span class="keyword">const</span> <span class="variable">handleSubmit</span> = <span class="keyword">async</span> () <span class="keyword">=&gt;</span> {
  <span class="comment">// 전체 유효성 검사</span>
  <span class="function-name">validateTitle</span>()
  <span class="function-name">validateContent</span>()
  
  <span class="keyword">if</span> (!<span class="variable">isFormValid</span>.<span class="variable">value</span>) <span class="keyword">return</span>
  
  <span class="keyword">try</span> {
    <span class="keyword">await</span> <span class="function-name">createPost</span>(<span class="variable">form</span>)
    <span class="keyword">await</span> <span class="function-name">alert</span>(<span class="string">'게시글이 생성되었습니다'</span>)
    <span class="variable">router</span>.<span class="function-name">push</span>(<span class="string">'/list'</span>)
  } <span class="keyword">catch</span> (<span class="variable">error</span>) {
    <span class="keyword">await</span> <span class="function-name">alert</span>(<span class="string">'저장 중 오류가 발생했습니다'</span>)
  }
}
&lt;/<span class="keyword">script</span>&gt;</code></pre>
            </div>
          </div>
        </div>

        <!-- 디버깅 팁 -->
        <div v-show="activeGuide === 'debugging-tips'" class="guide-section">
          <div class="section-header">
            <h3>🐛 디버깅 팁</h3>
          </div>
          
          <div class="section-content">
            <h4>1. Vue DevTools 활용</h4>
            <div class="tips-list">
              <div class="tip">
                <strong>컴포넌트 상태 확인:</strong> 
                Vue DevTools에서 컴포넌트를 선택하여 ref, reactive 데이터 실시간 확인
              </div>
              <div class="tip">
                <strong>이벤트 추적:</strong> 
                Events 탭에서 발생한 이벤트와 데이터 변경 추적
              </div>
              <div class="tip">
                <strong>Pinia 상태 관리:</strong> 
                Pinia 탭에서 store 상태와 액션 실행 이력 확인
              </div>
            </div>

            <h4>2. 개발자 도구 활용</h4>
            <div class="code-block">
              <div class="code-header">
                <span class="code-language">Debug Utils</span>
                <button class="copy-btn" @click="copyCode($event)" data-code="debug-utils">복사</button>
              </div>
              <pre><code id="debug-utils"><span class="comment">// 브라우저 콘솔에서 사용 가능한 디버깅 도구</span>
<span class="variable">devUtils</span>.<span class="variable">debugLog</span>.<span class="function-name">info</span>(<span class="string">'디버그 정보'</span>, <span class="variable">data</span>)
<span class="variable">devUtils</span>.<span class="variable">debugLog</span>.<span class="function-name">warn</span>(<span class="string">'경고 메시지'</span>)
<span class="variable">devUtils</span>.<span class="variable">debugLog</span>.<span class="function-name">error</span>(<span class="string">'에러 발생'</span>)

<span class="comment">// 폼 유효성 검사</span>
<span class="variable">devUtils</span>.<span class="variable">validation</span>.<span class="function-name">email</span>(<span class="string">'test@example.com'</span>)
<span class="variable">devUtils</span>.<span class="variable">validation</span>.<span class="function-name">required</span>(<span class="string">'값'</span>)

<span class="comment">// 샘플 데이터 생성</span>
<span class="keyword">const</span> <span class="variable">samplePost</span> = <span class="variable">devUtils</span>.<span class="variable">sampleData</span>.<span class="function-name">generatePost</span>()
<span class="keyword">const</span> <span class="variable">sampleUser</span> = <span class="variable">devUtils</span>.<span class="variable">sampleData</span>.<span class="function-name">generateUser</span>()</code></pre>
            </div>

            <div class="debug-output-example">
              <h5>📄 콘솔 출력 예시</h5>
              <div class="code-block">
                <div class="code-header">
                  <span class="code-language">Console Output</span>
                  <button class="copy-btn" @click="copyCode($event)" data-code="debug-output">복사</button>
                </div>
                <pre><code id="debug-output"><span class="comment">// devUtils.debugLog.info('사용자 데이터', { id: 1, name: '홍길동' }) 실행 시:</span>
<span style="color: #4CAF50;">ℹ️ [DEBUG-INFO] 사용자 데이터</span>
<span style="color: #2196F3;">{</span>
  <span style="color: #FF9800;">id</span>: <span style="color: #9C27B0;">1</span>,
  <span style="color: #FF9800;">name</span>: <span style="color: #4CAF50;">"홍길동"</span>
<span style="color: #2196F3;">}</span>

<span class="comment">// devUtils.debugLog.warn('API 응답 지연') 실행 시:</span>
<span style="color: #FF9800;">⚠️ [DEBUG-WARN] API 응답 지연</span>

<span class="comment">// devUtils.debugLog.error('로그인 실패') 실행 시:</span>
<span style="color: #F44336;">❌ [DEBUG-ERROR] 로그인 실패</span>

<span class="comment">// devUtils.validation.email('test@example.com') 실행 시:</span>
<span style="color: #4CAF50;">✅ Email validation: true</span>

<span class="comment">// devUtils.validation.required('') 실행 시:</span>
<span style="color: #F44336;">❌ Required validation: "필수 입력 항목입니다"</span>

<span class="comment">// devUtils.sampleData.generatePost() 실행 시:</span>
<span style="color: #2196F3;">{</span>
  <span style="color: #FF9800;">id</span>: <span style="color: #9C27B0;">1</span>,
  <span style="color: #FF9800;">title</span>: <span style="color: #4CAF50;">"샘플 게시글 제목"</span>,
  <span style="color: #FF9800;">content</span>: <span style="color: #4CAF50;">"샘플 게시글 내용입니다."</span>,
  <span style="color: #FF9800;">createdAt</span>: <span style="color: #4CAF50;">"2024-01-15T10:30:00Z"</span>
<span style="color: #2196F3;">}</span></code></pre>
              </div>
            </div>

            <h4>3. 자주 발생하는 문제 해결</h4>
            <div class="troubleshooting">
              <div class="issue">
                <h5>반응형 데이터가 업데이트되지 않음</h5>
                <p><strong>원인:</strong> ref() 없이 일반 변수 사용</p>
                <p><strong>해결:</strong> ref() 또는 reactive() 사용</p>
              </div>
              
              <div class="issue">
                <h5>API 응답이 undefined</h5>
                <p><strong>원인:</strong> 시드 데이터 미생성 또는 잘못된 엔드포인트</p>
                <p><strong>해결:</strong> /api-guide에서 시드 데이터 생성 후 Network 탭 확인</p>
              </div>
              
              <div class="issue">
                <h5>라우터 파라미터 접근 불가</h5>
                <p><strong>원인:</strong> useRoute() 미사용</p>
                <p><strong>해결:</strong> useRoute()로 route 객체 가져와서 params 접근</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface LearningGuide {
  id: string
  title: string
  emoji: string
}

const activeGuide = ref('es6-syntax')

const learningGuides: LearningGuide[] = [
  {
    id: 'es6-syntax',
    title: 'ES6 문법',
    emoji: '⚡',
  },
  {
    id: 'typescript-basics',
    title: 'TypeScript 기초',
    emoji: '📝',
  },
  {
    id: 'vue-basics',
    title: 'Vue 3 기초',
    emoji: '🎯',
  },
  {
    id: 'vue-lifecycle',
    title: 'Vue 라이프사이클',
    emoji: '🔄',
  },
  {
    id: 'form-handling',
    title: '폼 처리',
    emoji: '📋',
  },
  {
    id: 'router-usage',
    title: '라우터 활용',
    emoji: '🧭',
  },
  {
    id: 'api-communication',
    title: 'API 통신',
    emoji: '🌐',
  },
  {
    id: 'composables',
    title: 'Composable 함수',
    emoji: '🔧',
  },
  {
    id: 'pinia-state',
    title: 'Pinia 상태관리',
    emoji: '🗃️',
  },
  {
    id: 'debugging-tips',
    title: '디버깅 팁',
    emoji: '🐛',
  }
]

const setActiveGuide = (guideId: string) => {
  console.log('Active guide changed to:', guideId)
  activeGuide.value = guideId
}

// 코드 복사 기능
const copyCode = async (event: Event) => {
  const button = event.target as HTMLButtonElement
  const codeId = button.getAttribute('data-code')
  
  if (!codeId) return
  
  const codeElement = document.getElementById(codeId)
  if (!codeElement) return
  
  try {
    // HTML 태그를 제거하고 텍스트만 가져오기
    const codeText = codeElement.textContent || codeElement.innerText
    await navigator.clipboard.writeText(codeText)
    
    // 버튼 상태 변경
    button.textContent = '복사됨!'
    button.classList.add('copied')
    
    // 2초 후 원래 상태로 복원
    setTimeout(() => {
      button.textContent = '복사'
      button.classList.remove('copied')
    }, 2000)
    
  } catch (err) {
    console.error('복사 실패:', err)
    button.textContent = '복사 실패'
    setTimeout(() => {
      button.textContent = '복사'
    }, 2000)
  }
}
</script>

<style scoped lang="scss">
.learning-guide {
  .head {
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    .title {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  
  .container {
    display: flex;
    min-height: calc(100vh - 200px);
  }
  
  .guide-nav {
    width: 280px;
    background: #f8f9fa;
    padding: 1.5rem;
    border-right: 1px solid #eee;
    
    h3 {
      margin: 0 0 1rem 0;
      color: #333;
      font-size: 1.1rem;
    }
    
    .nav-item {
      display: flex;
      align-items: center;
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      background: white;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: #e3f2fd;
      }
      
      &.active {
        background: #1976d2;
        color: white;
      }
      
      .emoji {
        margin-right: 0.5rem;
        font-size: 1.2rem;
      }
      
      .title {
        flex: 1;
        font-weight: 500;
      }
      
      .time {
        font-size: 0.8rem;
        opacity: 0.7;
      }
    }
  }
  
  .guide-content {
    flex: 1;
    padding: 2rem;
    
    .guide-section {
      display: block;
    }
    
    .section-header {
      margin-bottom: 2rem;
      
      h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.4rem;
        color: #333;
      }
    }
    
    .section-content {
      h4 {
        color: #1976d2;
        margin: 1.5rem 0 1rem 0;
        font-size: 1.1rem;
      }
      
      h5 {
        color: #333;
        margin: 1rem 0 0.5rem 0;
      }
      
      .code-block {
        position: relative;
        background: #1e1e1e;
        border-radius: 8px;
        margin: 1rem 0;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        
        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #2d2d30;
          padding: 0.5rem 1rem;
          border-bottom: 1px solid #3e3e42;
          
          .code-language {
            color: #cccccc;
            font-size: 0.8rem;
            font-weight: 500;
          }
          
          .copy-btn {
            background: #0e639c;
            color: white;
            border: none;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: background-color 0.2s;
            
            &:hover {
              background: #1177bb;
            }
            
            &.copied {
              background: #16825d;
            }
          }
        }
        
        pre {
          margin: 0;
          padding: 1rem;
          font-family: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          overflow-x: auto;
          background: transparent;
          
          code {
            color: #d4d4d4;
            background: transparent;
            font-family: inherit;
            
            // TypeScript/JavaScript 하이라이팅
            .keyword { color: #569cd6; }
            .string { color: #ce9178; }
            .comment { color: #6a9955; font-style: italic; }
            .number { color: #b5cea8; }
            .function { color: #dcdcaa; }
            .variable { color: #9cdcfe; }
            .operator { color: #d4d4d4; }
            .tag { color: #569cd6; }
            .attr-name { color: #92c5f7; }
            .attr-value { color: #ce9178; }
            .punctuation { color: #d4d4d4; }
          }
        }
      }
      
      .tips-list {
        .tip {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 4px;
          padding: 1rem;
          margin: 0.5rem 0;
          
          strong {
            color: #856404;
          }
        }
      }
      
      .troubleshooting {
        .issue {
          background: #f8f9fa;
          border-left: 4px solid #dc3545;
          padding: 1rem;
          margin: 1rem 0;
          
          h5 {
            margin: 0 0 0.5rem 0;
            color: #dc3545;
          }
          
          p {
            margin: 0.25rem 0;
            font-size: 0.9rem;
            
            strong {
              color: #495057;
            }
          }
        }
      }
      
      .debug-output-example {
        margin: 1.5rem 0;
        
        h5 {
          color: #1976d2;
          margin-bottom: 1rem;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .code-block {
          background: #0d1117;
          border: 1px solid #30363d;
          border-radius: 8px;
          overflow: hidden;
          
          pre code {
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            line-height: 1.6;
            
            // 콘솔 출력 스타일링
            span[style*="color: #4CAF50"] {
              color: #4CAF50 !important;
            }
            span[style*="color: #FF9800"] {
              color: #FF9800 !important;
            }
            span[style*="color: #F44336"] {
              color: #F44336 !important;
            }
            span[style*="color: #2196F3"] {
              color: #2196F3 !important;
            }
            span[style*="color: #9C27B0"] {
              color: #9C27B0 !important;
            }
          }
        }
      }
    }
  }
}
</style>
