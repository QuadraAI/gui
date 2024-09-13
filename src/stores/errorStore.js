import { defineStore } from 'pinia';

export const useErrorStore = defineStore('error', {
  state: () => ({
    message: '',
  }),
  actions: {
    setError(message) {
      this.message = message;
      setTimeout(() => {
        this.message = '';
      }, 4000);
    },
    clearError() {
      this.message = '';
    }
  }
});
