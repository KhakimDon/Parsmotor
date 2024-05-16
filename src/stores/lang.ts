import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLangStore = defineStore('language', () => {

    let lang = ref("ru")
    let once = ref(false)

  return { lang,once }
})
