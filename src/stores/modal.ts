import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

interface ModalOptions {
  title?: string
  message: string
  type?: 'alert' | 'confirm'
  confirmText?: string
  cancelText?: string
  showCloseButton?: boolean
  closeOnOverlay?: boolean
}

interface ModalState extends ModalOptions {
  isVisible: boolean
  resolve?: (value: boolean) => void
}

export const useModalStore = defineStore('modal', () => {
  const modalState = reactive<ModalState>({
    isVisible: false,
    message: '',
    type: 'alert',
    showCloseButton: true,
    closeOnOverlay: true
  })

  // Alert 표시 (Promise 기반)
  const showAlert = (message: string, options?: Partial<ModalOptions>): Promise<boolean> => {
    return new Promise((resolve) => {
      Object.assign(modalState, {
        isVisible: true,
        message,
        type: 'alert',
        showCloseButton: true,
        closeOnOverlay: true,
        ...options,
        resolve
      })
    })
  }

  // Confirm 표시 (Promise 기반)
  const showConfirm = (message: string, options?: Partial<ModalOptions>): Promise<boolean> => {
    return new Promise((resolve) => {
      Object.assign(modalState, {
        isVisible: true,
        message,
        type: 'confirm',
        showCloseButton: true,
        closeOnOverlay: true,
        ...options,
        resolve
      })
    })
  }

  // 모달 닫기
  const closeModal = () => {
    modalState.isVisible = false
    if (modalState.resolve) {
      modalState.resolve(false)
    }
    resetModal()
  }

  // 확인 처리
  const confirmModal = () => {
    modalState.isVisible = false
    if (modalState.resolve) {
      modalState.resolve(true)
    }
    resetModal()
  }

  // 취소 처리
  const cancelModal = () => {
    modalState.isVisible = false
    if (modalState.resolve) {
      modalState.resolve(false)
    }
    resetModal()
  }

  // 모달 상태 초기화
  const resetModal = () => {
    modalState.resolve = undefined
  }

  return {
    modalState,
    showAlert,
    showConfirm,
    closeModal,
    confirmModal,
    cancelModal
  }
})

// 편의 함수들
export const useModal = () => {
  const modalStore = useModalStore()

  const alert = (message: string, options?: Partial<ModalOptions>) => {
    return modalStore.showAlert(message, options)
  }

  const confirm = (message: string, options?: Partial<ModalOptions>) => {
    return modalStore.showConfirm(message, options)
  }

  return {
    alert,
    confirm
  }
}
