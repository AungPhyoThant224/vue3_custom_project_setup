<template>
  <div>
    <h3>Provider</h3>
    <button @click="add">+</button>
    {{ counter }}
    <button @click="lose">-</button>
  </div>
  <div>
    <h3>Language</h3>
    <button @click="changeLangs('mn')">MM</button>
    {{ t("home.home") }}
    <button @click="changeLangs('en')">EN</button>
  </div>
  <div>
    <h3>Axios</h3>
    <button @click="egGet()">Get</button>
    {{ responseData }}
  </div>
  <div>
    <h3>Theme</h3>
    <button @click="switchTheme('dark')">Dark</button>
    <button @click="switchTheme('light')">Light</button>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useAppStore, getAppStore } from "../../stores/modules/app";
import { useI18n } from "vue-i18n";
import { changeLang } from "../../locales/i18n";
import http from "@/http";

export default {
  name: "Home",
  setup() {
    const useStore = useAppStore;
    const getStore = getAppStore;
    const { t } = useI18n();
    const state = reactive({
      counter: getStore.counterStore.counter,
      responseData: '',
    });

    const add = () => {
      console.log(state.counter);
      useStore.counterStore.addCount();
      console.log(state.counter);
    };

    const lose = () => {
      useStore.counterStore.loseCount();
    };

    const changeLangs = (lang) => {
      changeLang(lang);
    };

    const egGet = () => {
      http.general
        .egGet()
        .then((res) => {
          state.responseData = res;
        })
        .catch((e) => {
          state.responseData = e;
        });
    };

    const switchTheme = (theme) => {
      let htmlElement = document.documentElement;
      
      if(theme === "dark") {
        htmlElement.setAttribute("theme", "dark");
        localStorage.setItem("theme", "dark");
      }
      else{
        htmlElement.setAttribute("theme", "light");
        localStorage.setItem("theme", "light");
      }
    }

    onMounted(() => {
    });

    return {
      ...toRefs(state),
      t,
      add,
      lose,
      changeLangs,
      egGet,
      switchTheme,
    };
  },
};
</script>
