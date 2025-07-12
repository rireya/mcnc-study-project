<template>
  <teleport to="body">
    <div v-if="isVisible" class="modal_overlay" @click.self="handleOverlayClick">
      <div class="modal_alert">
        <div class="modal_header">
          <h3 class="modal_title">{{ title || '알림' }}</h3>
        </div>
        <div class="modal_body">
          <p class="modal_message" v-html="message"></p>
        </div>
        <div class="modal_footer">
          <button v-if="type === 'confirm'" type="button" class="btn_modal btn_cancel" @click="cancel">
            {{ cancelText || '취소' }}
          </button>
          <button type="button" class="btn_modal btn_confirm" @click="confirm">
            {{ confirmText || '확인' }}
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
interface Props {
  isVisible: boolean
  title?: string
  message: string
  type?: 'alert' | 'confirm'
  confirmText?: string
  cancelText?: string
  showCloseButton?: boolean
  closeOnOverlay?: boolean
}

interface Emits {
  (e: 'confirm'): void
  (e: 'cancel'): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'alert',
  showCloseButton: true,
  closeOnOverlay: true
})

const emit = defineEmits<Emits>()

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}

const close = () => {
  emit('close')
}

const handleOverlayClick = () => {
  if (props.closeOnOverlay) {
    close()
  }
}
</script>

<style scoped>
.modal_overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal_alert {
  background: white;
  border-radius: 8px;
  min-width: 320px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0;
}

.modal_title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
}

.btn_modal_close {
  background: none;
  border: none;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  padding: 4px;
}

.btn_modal_close:hover {
  color: #333;
}

.modal_body {
  padding: 20px;
}

.modal_message {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin: 0;
  word-break: break-word;
}

.modal_footer {
  display: flex;
  gap: 8px;
  padding: 0 20px 20px;
  justify-content: flex-end;
}

.btn_modal {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  min-width: 80px;
  transition: background-color 0.2s;
}

.btn_confirm {
  background-color: #007bff;
  color: white;
}

.btn_confirm:hover {
  background-color: #0056b3;
}

.btn_cancel {
  background-color: #6c757d;
  color: white;
}

.btn_cancel:hover {
  background-color: #545b62;
}
</style>