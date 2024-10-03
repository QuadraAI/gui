import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', {
  state: () => ({
    firstLaunch: true,
    coreUrl: null,
    DEFAULT_URL: "http://0.0.0.0:5000",
  }),
  actions: {
    firstLaunchConfigDone() { this.firstLaunch = false },
    setCoreUrl(url) { this.coreUrl = url; },
    initializeCoreUrl() {
      if (!this.coreUrl) {
        this.coreUrl = this.DEFAULT_URL;
      }
    },
  },
});
