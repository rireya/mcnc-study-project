<template>
  <div class="subWrap01">
    <!-- header -->
    <header class="headerWrap border">
      <!-- title bar -->
      <div class="titleBar">
        <h1 class="tt"><strong>게시글 등록</strong></h1>
        <div class="title_btn ">
          <button type="button" class="btn_head_prev"><span>대시보드로</span></button>
        </div>
      </div>
      <!-- //title bar -->
    </header>
    <!-- //header -->

    <!-- contents area -->
    <section class="contentsWrap">
      <!-- 작성자 정보 -->
      <div class="writer_info">
        <dl>
          <dt>작성자</dt>
          <dd><strong>관리자</strong></dd>
        </dl>
        <dl>
          <dt>작성일</dt>
          <dd><strong>9999-12-21</strong></dd>
        </dl>
      </div>
      <!-- //작성자 정보 -->
      <!-- group -->
      <div class="reg_group">
        <!-- search list -->
        <div class="write_form">
          <!-- row -->
          <dl>
            <dt><em>분류</em></dt>
            <dd>
              <select>
                <option value="code">label</option>
                <option value="code">label</option>
              </select>
            </dd>
          </dl>
          <!-- //row -->
        </div>
        <!-- //search list -->
        <!-- write form -->
        <div class="write_form">
          <dl>
            <dt><em>제목</em></dt>
            <dd><input type="text" placeholder="제목을 입력하세요." /></dd>
          </dl>
          <dl>
            <dt>내용</dt>
            <dd>
              <textarea rows="5" cols="50" placeholder="내용을 입력하세요."></textarea>
            </dd>
          </dl>
        </div>
        <!-- //write form -->
      </div>
      <!-- //group -->
    </section>
    <!-- //contents area -->

    <!-- footer -->
    <footer class="footerWrap">
      <div class="foot_btn">
        <button type="button" class="btn02"><span>취소</span></button>
        <button type="button" class="btn01"><span>등록</span></button>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script setup lang="ts">
console.log('💡 게시글 작성/수정 화면 구현 가이드:')
console.log('1. 작성 모드와 수정 모드 구분 처리')
console.log('2. 폼 유효성 검사 구현')
console.log('3. localFetch API를 사용하여 /post 또는 /update 엔드포인트 호출')
console.log('4. 에러 메시지 표시 및 처리')
console.log('5. 성공 시 목록 페이지로 이동')
</script>