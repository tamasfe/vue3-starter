<template>
  <div>{{ props.count }} ({{ mainStore.counter }})</div>
  <q-btn round icon="mdi-plus" @click="onPlusButtonClick" />
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores";
import { computed } from "vue";

const mainStore = useMainStore();

const props = defineProps<{
  count: number;
}>();

const emit = defineEmits({
  "update:count": (nextValue: number) => true,
});

const nextValue = computed(() => props.count + 1);

function onPlusButtonClick() {
  emit("update:count", nextValue.value);
}
</script>
