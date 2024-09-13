import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => ({
    coreUrl: null,
    DEFAULT_URL: "http://localhost:5000",
  }),
  actions: {
    setCoreUrl(url) {
      this.coreUrl = url;
    },
    initializeCoreUrl() {
      if (!this.coreUrl) {
        this.coreUrl = this.DEFAULT_URL;
      }
    },
  },
});
