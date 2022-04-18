<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NIcon, NRadioGroup, NRadioButton } from "naive-ui"
import { ref,watch } from "vue"

const props = defineProps<{ content: any, value: any, index: number }>()
const emit = defineEmits(['getValue'])

const value = ref(props.value)
let disabled2 = ref(false)
let disabled1 = ref(false)

watch(value, (val, preVal) => {
    console.log(val)
    emit('getValue', [props.index, val])
})


</script>

<template>
    <!-- {{ content }} -->
    <n-space vertical>

        <span>{{ content.title }}</span>
        <n-input placeholder v-model:value="value"></n-input>

        </n-space>
</template>

<style>
.ifchecked {
    width: 20px;
    height: 20px;
    border: 1px solid rgb(168, 168, 168);
    border-radius: 50%;
}

</style>