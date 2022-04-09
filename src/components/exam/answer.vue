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
    <n-card style="margin: 15px 0 15px 0;">
        <div style="display: flex;justify-content: space-between;align-items: center;">
            <div>我的答案：A &nbsp&nbsp&nbsp&nbsp&nbsp 正确答案：A</div>
            <div class="score">&nbsp&nbsp&nbsp&nbsp&nbsp 5.0分</div>
        </div>
        <div>答案解析：</div>
        <img src="/favicon.ico">
    </n-card>
</template>

<style>
.score {

    padding-left: 50px;
    margin-left: 50px;

}
.score::before {
    content: url(/favicon.ico);
}
</style>