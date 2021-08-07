import { defineStore } from "pinia";

export interface MainState {
  counter: number;
}

export const useMainStore = defineStore({
  id: "main",
  state: (): MainState => {
    const stateJson = localStorage.getItem("state");

    if (stateJson) {
      return JSON.parse(stateJson);
    }

    return ({counter: 0})
  },
});
