<template>
  <div class="subWrap01">
    <!-- header -->
    <header class="headerWrap border">
      <!-- title bar -->
      <div class="titleBar">
        <h1 class="tt"><strong>게시글 수정</strong></h1>
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
          <dd><strong>2025-07-12</strong></dd>
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
                <option value="notice" selected>공지</option>
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
            <dd><input type="text" placeholder="제목을 입력하세요." value="게시글 제목" /></dd>
          </dl>
          <dl>
            <dt>내용</dt>
            <dd>
              <textarea rows="10" cols="50" placeholder="내용을 입력하세요.">게시글 내용</textarea>
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
        <button type="button" class="btn01"><span>수정</span></button>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script setup lang="ts">
// TODO
</script>