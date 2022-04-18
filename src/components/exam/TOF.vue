<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NIcon, NRadioGroup, NRadioButton } from "naive-ui"
import { ref, watch } from "vue"

const props = defineProps<{ content: any, value: any, index: number }>()
const emit = defineEmits(['getValue'])

const value = ref(props.value)
let disabled2 = ref(false)
let disabled1 = ref(false)

let songs = ref([
    {
        value: "T",
        label: "T"
    },
    {
        value: 'F',
        label: 'F'
    },

])

watch(value, (val, preVal) => {
    emit('getValue', [props.index, val])
})

</script>

<template>
    <!-- {{ content }} -->
    <n-space vertical>

        <span>{{ content.title }}</span>
        <n-radio-group v-model:value="value">
            <n-space vertical>
                <n-radio-button class="n-radio-button1" v-for="song in songs" :key="song.value" :value="song.value">{{
                    song.label
                }}
                </n-radio-button>
            </n-space>
        </n-radio-group>

        </n-space>
</template>

<style>
.ifchecked {
    width: 20px;
    height: 20px;
    border: 1px solid rgb(168, 168, 168);
    border-radius: 50%;
}

.n-radio-button1 {
    width: 100%;
    word-wrap: break-word;
    word-break: normal;
    max-width: 100% !important;
}

.n-radio-button1 span {
    word-break: normal;
    width: auto;
    /* display:block;  */
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: hidden;
}
</style>