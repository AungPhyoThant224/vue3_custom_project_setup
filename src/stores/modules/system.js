import { defineStore } from "pinia";

export const systemStore = defineStore({
    id: 'System',
    state: () => ({
        lang: localStorage.getItem('lang') || 'en',
    }),

    getters: {
        getLang: ( state ) => {
            return state.lang;
        }
    },

    actions: {
        setLang(lang){
            localStorage.setItem('lang', lang);
        }
    }
})