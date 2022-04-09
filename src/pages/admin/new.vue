<script setup lang="ts">
import { NCard, NSpace, NRadioGroup, NRadioButton, NButton, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import single from "./type/single.vue"
import multiple from "./type/multiple.vue"
import completion from './type/completion.vue';
const router = useRouter();
const value = ref(0)
const types = ref([
    {
        value: 0,
        label: "单选题"
    },
    {
        value: 1,
        label: "多选题"
    },
    {
        value: 2,
        label: "填空题"
    }
])

function back() {
    router.go(-1)
}
</script>

<template>
    <n-card style="width: 1100px;margin: 10px auto;">
        <n-space>
            <n-button style="margin-right: 25px;" @click="back()">返回</n-button>
            <n-radio-group v-model:value="value" name="radiobuttongroup1">
                <n-radio-button
                    v-for="type in types"
                    :key="type.value"
                    :value="type.value"
                >{{ type.label }}</n-radio-button>
            </n-radio-group>
        </n-space>
        <div></div>
    </n-card>
    <n-card style="width: 1100px;margin: 10px auto;">
        <div v-if="value == 0">
            <single></single>
        </div>
        <div v-if="value == 1">
            <multiple></multiple>
        </div>
        <div v-if="value == 2">
            <completion></completion>
        </div>
    </n-card>
</template >

<style></style>
