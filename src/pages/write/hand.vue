<script setup lang="ts">
import { NCard, NSpace, NButton, NTabs, NTabPane, NForm, NFormItem, NInput, NModal } from 'naive-ui'
import { useRouter } from 'vue-router';
import { ref } from "vue"

import single from '../../components/exam/single.vue';
import bank from '../admin/bank.vue';

const router = useRouter()

const model = ref({
    title: null,
    score: null,

    questions: {
        single: {
            string: "单选题",
            score: '0',
            num: '0',
            small: '0',
            medium: '0',
            large: "0",

            bank: {
                num: '6',
                small: '1',
                medium: '2',
                large: "3"
            }
        },
        multiple: {
            string: "多选题",
            score: '0',
            num: '0',
            small: '0',
            medium: '0',
            large: "0",

            bank: {
                num: '6',
                small: '5',
                medium: '6',
                large: "7"
            }
        },
        completion: {
            string: "填空题",
            score: "0",
            num: "0",
            small: "0",
            medium: "0",
            large: "0",

            bank: {
                num: '6',
                small: "2",
                medium: "2",
                large: "2",
            }
        },
    },
    degree: { 'small': '易', 'medium': '中', 'large': '难' },
})


const ifshow = ref(false)
function showSingle() {
    ifshow.value = true
}
function onPositiveClick() {
    ifshow.value = false
}
function onNegativeClick() {
    ifshow.value = false
}

</script>


<template>
    <div style="width: 1100px; margin: auto;">
        <n-card class="auto_que_list">
            <n-space>
                <span>题量0, 总分0</span>
                <span
                    v-for="(item, , i) in model.questions "
                >{{ i + 1 }}.{{ item.string }}(共{{ item.num }}题, {{ item.score }}分)</span>
            </n-space>

            <div class="auto_save">
                <n-space>
                    <span>满分:{{ model.score }}</span>
                    <span>当前总分:0</span>
                </n-space>
                <n-button tertiary round type="info" style="width: 100%;">保存</n-button>
            </div>
        </n-card>

        <n-card
            class="auto_que_get"
            title="设置试卷结构"
            :segmented="{
                content: true,
            }"
        >
            <n-form
                :model="model"
                label-placement="left"
                label-width="80px"
                label-align="left"
                :style="{
                    // maxWidth: '300px'
                }"
                size="small"
            >
                <n-form-item label="试卷标题" path="title">
                    <n-input placeholder v-model:value="model.title" />
                </n-form-item>
                <n-form-item label="满分" path="score">
                    <n-input placeholder v-model:value="model.score" :style="{ width: '50px' }" />
                    <span style="width: 10px;"></span>分
                </n-form-item>

                <n-card>
                    <n-space>
                        <span>添加题目</span>
                        <n-button @click="showSingle">单选题</n-button>
                        <n-button>多选题</n-button>
                        <n-button>填空题</n-button>
                    </n-space>
                </n-card>
                <n-card>
                    <single></single>
                </n-card>

                <!-- <div v-show="ifshow"> -->
                <n-modal
                    v-model:show="ifshow"
                    :mask-closable="false"
                    preset="dialog"
                    positive-text="确认"
                    negative-text="算了"
                    @positive-click="onPositiveClick"
                    @negative-click="onNegativeClick"
                    style="width: 800px;"
                >
                    <bank></bank>
                </n-modal>
                <!-- </div> -->
                <!-- <n-card
                    v-for="item in model.questions "
                    :title="item.string"
                    :segmented="{
                        content: true,
                    }"
                >
                    <n-form-item label="总分" :path="item.score" label-props="font-size : 10px">
                        <n-input
                            placeholder
                            v-model:value="item.score"
                            :style="{ width: '50px' }"
                            size="small"
                        />
                        <span style="width: 10px;"></span>分
                    </n-form-item>
                    <n-form-item label="从题库选题" :path="item.num">
                        <n-input placeholder v-model:value="item.num" :style="{ width: '50px' }" />
                        <span style="width: 10px;"></span>
                        / {{ item.bank.num }}
                    </n-form-item>

                    <div>
                        <n-form-item
                            v-for="(str, i) in model.degree"
                            :label-style="{ 'font-size': '10px' }"
                        >
                            <label
                                style="font-size: 10px;margin-right: 10px;"
                            >{{ str }}(共{{ item.bank[i] }}道题)&nbsp&nbsp抽题数量</label>
                            <n-input
                                placeholder
                                v-model:value="item[i]"
                                :style="{ width: '40px' }"
                            />
                            <span style="width: 10px;"></span>
                            / {{ item.bank[i] }}
                        </n-form-item>
                    </div>
                </n-card>-->
            </n-form>
        </n-card>
    </div>
</template>

<style>
.auto_que_list {
    width: 200px;
    height: 500px;

    float: left;
}
.auto_que_get {
    width: 870px;
    min-height: 700px;

    float: right;
}
.auto_save {
    width: 150px;
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>