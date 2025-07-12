<template>
  <RouterView />
  <ModalAlert :is-visible="modalStore.modalState.isVisible" :title="modalStore.modalState.title"
    :message="modalStore.modalState.message" :type="modalStore.modalState.type"
    :confirm-text="modalStore.modalState.confirmText" :cancel-text="modalStore.modalState.cancelText"
    :show-close-button="modalStore.modalState.showCloseButton" :close-on-overlay="modalStore.modalState.closeOnOverlay"
    @confirm="modalStore.confirmModal" @cancel="modalStore.cancelModal" @close="modalStore.closeModal" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import ModalAlert from './components/ModalAlert.vue'
import { useModalStore } from './stores/modal'

const modalStore = useModalStore()
const route = useRoute()

// 라우트 변경시 스크롤 초기화
watch(() => route.path, () => {
  const appElement = document.getElementById('app')
  if (appElement) {
    appElement.scrollTop = 0
  }
})
</script>

<style>
#app {
  position: relative;
  height: 100%;
}

/* iOS Safari에서 Pull-to-Refresh 비활성화 */
html,
body {
  width: 100% !important;
  /* 100vw 대신 100% 사용 */
  overflow-x: hidden;
  /* 가로 스크롤 방지 */
  overscroll-behavior: none;
  /* 오버스크롤 동작 비활성화 */
  -webkit-overflow-scrolling: touch;
  /* 부드러운 스크롤 */
}

/* 추가적인 iOS Safari 최적화 */
body {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
}
</style>