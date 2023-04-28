import { useCounterStore } from "./counter";
import { systemStore } from "./system";
import { createPinia, storeToRefs } from "pinia";

const pinia = createPinia();
export const useAppStore = {
  counterStore: useCounterStore(pinia),
  systemStore: systemStore(pinia),
};

export const getAppStore = {
  counterStore: storeToRefs(useCounterStore(pinia)),
  systemStore: storeToRefs(systemStore(pinia)),
};
