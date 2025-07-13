<template>
  <div class="subWrap01">
    <!-- header -->
    <header class="headerWrap">
      <!-- title bar -->
      <div class="titleBar">
        <h1 class="tt"><strong>게시글 상세</strong></h1>
        <div class="title_btn">
          <button type="button" class="btn_head_prev">
            <span>대시보드로</span>
          </button>
        </div>
      </div>
      <!-- //title bar -->
    </header>
    <!-- //header -->

    <!-- contents area -->
    <section class="contentsWrap">
      <h2 class="tit_board"><span>게시글 제목</span></h2>
      <!-- writer's info -->
      <div class="board_info">
        <div class="board_info_list">
          <dl class="full">
            <dt>글번호</dt>
            <dd><span>1720512345678</span></dd>
          </dl>
          <dl>
            <dt>작성자</dt>
            <dd><span>관리자</span></dd>
          </dl>
          <dl>
            <dt>분류</dt>
            <dd><span>공지</span></dd>
          </dl>
          <dl>
            <dt>작성일</dt>
            <dd><span>2025-07-12</span></dd>
          </dl>
          <dl>
            <dt>수정일</dt>
            <dd><span></span></dd>
          </dl>
        </div>
      </div>
      <!-- //writer's info -->

      <!-- board contents -->
      <div class="board_cont">
        게시글 내용
      </div>
      <!-- //board contents -->
    </section>
    <!-- //contents area -->

    <!-- footer -->
    <footer class="footerWrap">
      <div class="foot_btn">
        <button type="button" class="btn03"><span>삭제</span></button>
        <button type="button" class="btn01"><span>수정</span></button>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script setup lang="ts">
console.log('💡 게시글 상세 화면 구현 가이드:')
console.log('1. URL 파라미터에서 게시글 ID 추출')
console.log('2. localFetch API를 사용하여 /get 엔드포인트 호출')
console.log('3. 게시글 데이터 화면에 바인딩')
console.log('4. 수정/삭제 버튼 이벤트 처리')
console.log('5. 에러 처리 및 예외 상황 대응')
</script>