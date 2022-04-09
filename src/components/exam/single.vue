<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NIcon, NRadioGroup, NRadioButton } from "naive-ui"
import { ref } from "vue"


const value = ref("1")
let disabled2 = ref(false)
let disabled1 = ref(false)
let songs = [
    {
        value: "Rock'n'Roll Star",
        label: "A. 1"
    },
    {
        value: 'Shakermaker',
        label: 'B. 2'
    },
    {
        value: 'Live Forever',
        label: 'C. 3'
    },
    {
        value: 'Up in the Sky',
        label: 'D. 4'
    }
].map((s) => {
    s.value = s.value.toLowerCase()
    return s
})
</script>

<template>
    <n-space vertical>
        <span>1.(单选题, 1.0分)</span>
        <span>题目题目题目题目题目</span>
        <n-radio-group v-model:value="value">
            <n-space vertical>
                <n-radio-button v-for="song in songs" :key="song.value" :value="song.value">{{song.label}}</n-radio-button>
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
</style>