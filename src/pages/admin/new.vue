<script setup lang="ts">
import { NCard, NSpace, NRadioGroup, NRadioButton, NButton, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import single from "./type/single.vue"
import multiple from "./type/multiple.vue"
import completion from './type/completion.vue';
import tof from "./type/TOF.vue"

const router = useRouter();
const route = useRoute();

const value = ref("单选题")
const types = ref([
    {
        value: "单选题",
        label: "单选题"
    },
    {
        value: "多选题",
        label: "多选题"
    },
    {
        value: "填空题",
        label: "填空题"
    },
    {
        value: "判断题",
        label: "判断题"
    }
])

let id = route.query.id;
let item_type = route.query.type;
// console.log(item_type)
if (id != undefined) {
    value.value = item_type
}

function back() {
    router.go(-1)
}
</script>

<template>
    <n-card style="width: 1100px;margin: 10px auto;">
        <n-space>
            <n-button style="margin-right: 25px;" @click="back()">返回</n-button>
            <n-radio-group v-model:value="value" name="radiobuttongroup1">
                <n-radio-button v-for="type in types" :key="type.value" :value="type.value">{{ type.label }}
                </n-radio-button>
            </n-radio-group>
        </n-space>
        <div></div>
    </n-card>
    <n-card style="width: 1100px;margin: 10px auto;">
        <div v-if="value == '单选题'">
            <single :id="id" :updated="id != undefined"></single>
        </div>
        <div v-if="value == '多选题'">
            <multiple :id="id" :updated="id != undefined"></multiple>
        </div>
        <div v-if="value == '填空题'">
            <completion :id="id" :updated="id != undefined"></completion>
        </div>
        <div v-if="value == '判断题'">
            <tof :id="id" :updated="id != undefined"></tof>
        </div>
    </n-card>
</template >

<style>
</style>
