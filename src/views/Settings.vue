<template>
  <div><q-btn :label="t('settings.changeLanguage')" @click="onLanguageClicked" /></div>
  <div>
    <q-btn color="primary" :label="t('settings.homeLink')" :to="{ name: 'Home' }" />
  </div>
</template>

<script setup lang="ts">
import { setLocale } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

function onLanguageClicked() {
  if (locale.value === "hu-hu") {
    setLocale("en-gb");
  } else {
    setLocale("hu-hu");
  }
}
</script>
