<template>
  <div class="main-container">
    <div class="main-card shadow-1">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { getRandomNumber } from "./app";
import { useMainStore } from "./stores";

const { t } = useI18n();
const q = useQuasar();
const mainStore = useMainStore();

watch(
  mainStore.$state,
  state => {
    localStorage.setItem("state", JSON.stringify(state));
  },
  { deep: true },
);

onMounted(async () => {
  try {
    q.loading.show({ message: t("randomNumber") });
    const randomNumber = await getRandomNumber();
    q.notify({ message: t("randomNumberGenerated", { randomNumber }) })
  } finally {
    q.loading.hide();
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .main-card {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
  }
}
</style>
