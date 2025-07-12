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
// TODO: 아래 주석을 참고하여 게시글 상세 조회 기능을 구현해보세요!

import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useModal } from '@/stores/modal'
// import { localFetch } from '@/api/localFetch'

const route = useRoute()
const router = useRouter()
const { alert, confirm } = useModal()

// TODO: 게시글 데이터
// const post = ref(null)

// TODO: 로딩 상태
// const isLoading = ref(false)

// TODO: 게시글 ID 가져오기
// const postId = route.params.id || route.query.id

// TODO: 게시글 상세 조회 함수
// const fetchPost = async () => {
//   try {
//     // isLoading.value = true
//     // const response = await localFetch('/get', {
//     //   method: 'GET',
//     //   params: { id: postId }
//     // })
//     // if (response.success) {
//     //   post.value = response.data
//     // } else {
//     //   await alert('게시글을 찾을 수 없습니다.')
//     //   router.push('/list')
//     // }
//   } catch (error) {
//     console.error('게시글 조회 실패:', error)
//     // await alert('게시글 조회 중 오류가 발생했습니다.')
//   } finally {
//     // isLoading.value = false
//   }
// }

// TODO: 게시글 삭제 함수
// const deletePost = async () => {
//   try {
//     // const result = await confirm('정말로 이 게시글을 삭제하시겠습니까?')
//     // if (!result) return
//     
//     // const response = await localFetch('/delete', {
//     //   method: 'DELETE',
//     //   params: { id: postId }
//     // })
//     
//     // if (response.success) {
//     //   await alert('게시글이 삭제되었습니다.')
//     //   router.push('/list')
//     // }
//   } catch (error) {
//     console.error('게시글 삭제 실패:', error)
//     // await alert('게시글 삭제 중 오류가 발생했습니다.')
//   }
// }

// TODO: 게시글 수정 페이지로 이동
// const goToEdit = () => {
//   // router.push(`/update/${postId}`)
// }

// TODO: 목록으로 돌아가기
// const goToList = () => {
//   // router.push('/list')
// }

// TODO: 날짜 포맷팅 함수
// const formatDate = (dateString: string) => {
//   // return new Date(dateString).toLocaleDateString('ko-KR')
// }

// TODO: 카테고리 표시 이름 변환
// const getCategoryName = (category: string) => {
//   // const categoryMap = {
//   //   'notice': '공지',
//   //   'chat': '잡담',
//   //   'info': '정보'
//   // }
//   // return categoryMap[category] || category
// }

// TODO: 컴포넌트 마운트 시 데이터 로드
// onMounted(() => {
//   // if (!postId) {
//   //   alert('잘못된 접근입니다.')
//   //   router.push('/list')
//   //   return
//   // }
//   // fetchPost()
// })

console.log('💡 게시글 상세 화면 구현 가이드:')
console.log('1. URL 파라미터에서 게시글 ID 추출')
console.log('2. localFetch API를 사용하여 /get 엔드포인트 호출')
console.log('3. 게시글 데이터 화면에 바인딩')
console.log('4. 수정/삭제 버튼 이벤트 처리')
console.log('5. 에러 처리 및 예외 상황 대응')
</script>