<template>
  <div class="subWrap01 has-fab">
    <!-- header -->
    <header class="headerWrap">
      <!-- title bar -->
      <div class="titleBar">
        <h1 class="tt"><strong>게시판</strong></h1>
        <div class="title_btn">
          <button type="button" class="btn_head_prev">
            <span>대시보드로</span>
          </button>
        </div>
      </div>
      <!-- //title bar -->

      <!-- tab -->
      <nav class="tab01">
        <ul>
          <li class="on"><button type="button"><span>전체</span></button></li>
          <li><button type="button"><span>공지</span></button></li>
          <li><button type="button"><span>잡담</span></button></li>
          <li><button type="button"><span>정보</span></button></li>
        </ul>
      </nav>
      <!-- //tab -->
    </header>
    <!-- //header -->

    <!-- contents area -->
    <section class="contentsWrap">
      <!-- search area -->
      <div class="searchWrap">
        <div class="search_row_list">
          <!-- row -->
          <dl>
            <dd>
              <div class="form_row">
                <div class="inp_box active"> <!-- input focused or has value : add class "active" -->
                  <div class="inp"><input type="text" id="" placeholder="제목/내용을 검색하세요" /></div>
                  <button type="button" class="btn_inp_del"><span>Delete input text</span></button>
                </div>
                <button type="button" class="btn_search01"><span>Search</span></button>
              </div>
            </dd>
          </dl>
          <!-- //row -->
        </div>
      </div>
      <!-- //search area -->

      <h2 class="tit01">총 <em>3</em>건</h2>

      <!-- nodata -->
      <div class="nodata search float none">
        <p class="tit">검색결과가 없습니다.</p>
      </div>
      <!-- //nodata -->

      <!-- list -->
      <ul class="list01">
        <li>
          <div class="cont">
            <div class="list_info">
              <strong class="txtbox01">공지</strong>
              <p class="tit"><span>공지사항 제목</span></p>
            </div>
          </div>
          <button type="button" class="btn_detail arrow"><span>Go detail</span></button>
        </li>
        <li>
          <div class="cont">
            <div class="list_info">
              <strong class="txtbox01 green">잡담</strong>
              <p class="tit"><span>잡담 게시글</span></p>
            </div>
          </div>
          <button type="button" class="btn_detail arrow"><span>Go detail</span></button>
        </li>
        <li>
          <div class="cont">
            <div class="list_info">
              <strong class="txtbox01 blue">정보</strong>
              <p class="tit"><span>정보 게시글</span></p>
            </div>
          </div>
          <button type="button" class="btn_detail arrow"><span>Go detail</span></button>
        </li>
      </ul>
      <!-- //list -->
    </section>
    <!-- //contents area -->

    <!-- FAB -->
    <div class="fabWrap">
      <!-- fab button -->
      <div class="fab_btn_area">
        <button type="button" class="btn_fab_reg"><span>쓰기</span></button>
      </div>
      <!-- //fab button -->
    </div>
    <!-- //FAB -->
  </div>
</template>

<script setup lang="ts">
// TODO: 아래 주석을 참고하여 게시글 목록 기능을 구현해보세요!

import { ref, reactive, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useModal } from '@/stores/modal'
// import { localFetch } from '@/api/localFetch'

const router = useRouter()
const { alert, confirm } = useModal()

// TODO: 게시글 목록 데이터
// const posts = ref([])

// TODO: 검색 및 필터 상태
// const searchForm = reactive({
//   keyword: '',
//   category: 'all' // 'all', 'notice', 'chat', 'info'
// })

// TODO: 페이지네이션 상태
// const pagination = reactive({
//   currentPage: 1,
//   totalPages: 1,
//   totalItems: 0,
//   itemsPerPage: 10
// })

// TODO: 로딩 상태
// const isLoading = ref(false)

// TODO: 계산된 속성 - 필터링된 게시글
// const filteredPosts = computed(() => {
//   // 카테고리 및 검색어로 필터링
// })

// TODO: 게시글 목록 조회 함수
// const fetchPosts = async () => {
//   try {
//     // isLoading.value = true
//     // const response = await localFetch('/list', {
//     //   method: 'GET',
//     //   params: {
//     //     page: pagination.currentPage,
//     //     limit: pagination.itemsPerPage,
//     //     search: searchForm.keyword,
//     //     category: searchForm.category
//     //   }
//     // })
//     // if (response.success) {
//     //   posts.value = response.data
//     //   pagination.totalItems = response.total
//     //   pagination.totalPages = Math.ceil(response.total / pagination.itemsPerPage)
//     // }
//   } catch (error) {
//     console.error('게시글 조회 실패:', error)
//   } finally {
//     // isLoading.value = false
//   }
// }

// TODO: 검색 처리 함수
// const handleSearch = () => {
//   // 첫 페이지로 이동 후 검색 실행
//   // pagination.currentPage = 1
//   // fetchPosts()
// }

// TODO: 카테고리 변경 함수
// const changeCategory = (category: string) => {
//   // searchForm.category = category
//   // pagination.currentPage = 1
//   // fetchPosts()
// }

// TODO: 페이지 변경 함수
// const changePage = (page: number) => {
//   // pagination.currentPage = page
//   // fetchPosts()
// }

// TODO: 게시글 상세 페이지로 이동
// const goToDetail = (postId: number) => {
//   // router.push(`/detail/${postId}`)
// }

// TODO: 게시글 작성 페이지로 이동
// const goToPost = () => {
//   // router.push('/post')
// }

// TODO: 대시보드로 돌아가기
// const goToDashboard = () => {
//   // router.push('/')
// }

// TODO: 컴포넌트 마운트 시 데이터 로드
// onMounted(() => {
//   fetchPosts()
// })

console.log('💡 게시글 목록 화면 구현 가이드:')
console.log('1. localFetch API를 사용하여 /list 엔드포인트 호출')
console.log('2. 검색 기능 구현 (제목/내용)')
console.log('3. 카테고리 필터링 (전체/공지/잡담/정보)')
console.log('4. 페이지네이션 구현')
console.log('5. 게시글 클릭 시 상세 페이지로 이동')
console.log('6. 플로팅 버튼으로 게시글 작성 페이지 이동')
</script>

<style scoped lang="scss">
.tit {
  font-size: .9375rem !important;
  color: var(--normal);
  margin-top: 0px;
  line-height: 18px;
}
</style>