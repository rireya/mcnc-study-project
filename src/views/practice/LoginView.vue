<template>
  <div class="login_wrapper">
    <section class="contentsWrap ">
      <fieldset class="login_box">
        <legend>Login</legend>
        <p class="txt">Front End<br /><strong>Study Project</strong></p>

        <div class="inp_box active"> <!-- input focused or has value : add class "active" -->
          <div class="inp"><input type="text" placeholder="아이디를 입력해주세요." /></div>
          <button type="button" class="btn_inp_del"><span>Delete input text</span></button>
        </div>
        <div class="inp_box pw active"> <!-- input focused or has value : add class "active" -->
          <div class="inp"><input type="password" placeholder="비밀번호를 입력해주세요." /></div>
          <button type="button" class="btn_inp_text"><span>input text</span></button>
          <button type="button" class="btn_inp_del"><span>Delete input text</span></button>
        </div>

        <div class="c_btn">
          <button type="button" class="btn01"><span>로그인</span></button>
        </div>

        <div class="login_option">
          <label><input type="checkbox" name="" /><span>아이디 저장</span></label>
          <label><input type="checkbox" name="" /><span>자동로그인</span></label>
        </div>

      </fieldset>
    </section>

    <footer>
      <p>Copyright mobile c&c, All Right Reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
console.log('💡 로그인 화면 구현 가이드:')
console.log('1. localFetch API를 사용하여 /login 엔드포인트 호출')
console.log('2. 폼 유효성 검사 구현')
console.log('3. 로딩 상태 관리')
console.log('4. 에러 처리 및 사용자 피드백')
console.log('5. 성공 시 대시보드로 라우팅')
</script>

<style scoped lang="scss">
.login_wrapper {
  position: relative;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  min-height: 100%;
  overflow: auto;
}

.login_wrapper .contentsWrap {
  -webkit-flex: 1;
  flex: 1;
  height: auto;
  padding: 5vh 30px 20px;
  overflow: inherit;
}

.login_box {
  margin: 60px 0 20px;
  font-weight: 500;
  font-size: 1.125rem;
  color: var(--sub);
  line-height: 1.23;
}

.login_box p strong {
  font-size: 1.25rem;
  color: var(--normal);
}

.login_box .txt {
  margin-bottom: 20px;
}

.login_box .inp_box {
  margin-top: 15px;
}

.login_box .inp_box input {
  padding-left: 44px;
  background: url("../assets/images/ico_user_id.svg") no-repeat 10px center;
}

.login_box .inp_box.pw input {
  background: url("../assets/images/ico_user_pw.svg") no-repeat 10px center;
}

.login_box .c_btn {
  margin: 20px 0 15px;
}

.login_box .login_option {
  font-weight: 500;
  font-size: .9375rem;
  color: var(--normal);
  text-align: right;
}

.login_box .login_option label:not(:first-child) {
  margin-left: 25px;
}

.login_wrapper footer {
  padding: 30px;
  font-weight: 500;
  font-size: .625rem;
  color: var(--light);
  text-align: center;
}
</style>