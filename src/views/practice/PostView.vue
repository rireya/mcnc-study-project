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
// TODO: 아래 주석을 참고하여 게시글 작성/수정 기능을 구현해보세요!

import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useModal } from '@/stores/modal'
// import { localFetch } from '@/api/localFetch'

const route = useRoute()
const router = useRouter()
const { alert } = useModal()

// TODO: 수정 모드 여부 확인
// const isEditMode = route.path.includes('/update')
// const postId = route.params.id

// TODO: 폼 데이터
// const form = reactive({
//   title: '',
//   content: '',
//   category: 'chat', // 'notice', 'chat', 'info'
//   author: ''
// })

// TODO: 에러 메시지
// const errors = reactive({
//   title: '',
//   content: '',
//   author: ''
// })

// TODO: 로딩 상태
// const isLoading = ref(false)

// TODO: 기존 게시글 데이터 로드 (수정 모드인 경우)
// const loadPost = async () => {
//   if (!isEditMode || !postId) return
//   
//   try {
//     // const response = await localFetch('/get', {
//     //   method: 'GET',
//     //   params: { id: postId }
//     // })
//     // if (response.success) {
//     //   Object.assign(form, response.data)
//     // }
//   } catch (error) {
//     console.error('게시글 로드 실패:', error)
//   }
// }

// TODO: 폼 유효성 검사
// const validateForm = () => {
//   // 에러 초기화
//   // errors.title = ''
//   // errors.content = ''
//   // errors.author = ''
//   
//   // let isValid = true
//   
//   // 제목 검증
//   // if (!form.title.trim()) {
//   //   errors.title = '제목을 입력해주세요'
//   //   isValid = false
//   // } else if (form.title.length > 100) {
//   //   errors.title = '제목은 100자 이내로 입력해주세요'
//   //   isValid = false
//   // }
//   
//   // 내용 검증
//   // if (!form.content.trim()) {
//   //   errors.content = '내용을 입력해주세요'
//   //   isValid = false
//   // }
//   
//   // 작성자 검증
//   // if (!form.author.trim()) {
//   //   errors.author = '작성자를 입력해주세요'
//   //   isValid = false
//   // }
//   
//   // return isValid
// }

// TODO: 게시글 저장/수정 함수
// const handleSubmit = async () => {
//   // if (!validateForm()) return
//   
//   try {
//     // isLoading.value = true
//     
//     // const apiUrl = isEditMode ? '/update' : '/post'
//     // const method = isEditMode ? 'PUT' : 'POST'
//     // const data = isEditMode ? { ...form, id: postId } : form
//     
//     // const response = await localFetch(apiUrl, {
//     //   method: method,
//     //   body: data
//     // })
//     
//     // if (response.success) {
//     //   const message = isEditMode ? '게시글이 수정되었습니다.' : '게시글이 등록되었습니다.'
//     //   await alert(message)
//     //   router.push('/list')
//     // }
//   } catch (error) {
//     console.error('게시글 저장 실패:', error)
//     // await alert('저장 중 오류가 발생했습니다.')
//   } finally {
//     // isLoading.value = false
//   }
// }

// TODO: 취소 버튼 처리
// const handleCancel = () => {
//   // router.back()
// }

// TODO: 카테고리 변경 처리
// const handleCategoryChange = (category: string) => {
//   // form.category = category
// }

// TODO: 글자 수 계산 함수
// const getCharacterCount = (text: string) => {
//   // return text.length
// }

// TODO: 컴포넌트 마운트 시 데이터 로드
// onMounted(() => {
//   // if (isEditMode) {
//   //   loadPost()
//   // }
// })

console.log('💡 게시글 작성/수정 화면 구현 가이드:')
console.log('1. 작성 모드와 수정 모드 구분 처리')
console.log('2. 폼 유효성 검사 구현')
console.log('3. localFetch API를 사용하여 /post 또는 /update 엔드포인트 호출')
console.log('4. 에러 메시지 표시 및 처리')
console.log('5. 성공 시 목록 페이지로 이동')
</script>