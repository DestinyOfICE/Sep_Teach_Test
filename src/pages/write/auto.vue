<script setup lang="ts">
import { NCard, NSpace, NButton, NTabs, NTabPane, NForm, NFormItem, NInput, NSelect, NDatePicker } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router';
import { ref, reactive } from "vue"
import axios from 'axios';


const router = useRouter()
const route = useRoute()

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
        TOF: {
            string: "判断题",
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

let data = reactive({
    course_options: [],
    course_exams: [],
})
let id = route.query.id;
//获取课程的信息
axios.get('http://127.0.0.1/account/info/stuid_cos?stuId=189')
    .then(function (response: any) {
        // let info = response.data.info
        let info = [{
            cosName: "计算机组成原理",
            cosId: 15,
        }]
        for (let index = 0; index < info.length; index++) {
            data.course_options.push({
                label: info[index].cosName,
                value: info[index].cosId,
            })
        }
        console.log(data.course_options)
    })
    .catch(function (error: any) {
        console.log(error);
    });

const course = ref("")



interface paperInfo {
    psId: number,
    pcId: string,
    beginTime: string,
    endTime: string,
    setTime: string,
    pcosId: number,
    AggregateScore: number,
    totalTime: number,
    paperName: string,
    schoiceNum: number,
    mchoiceNum: number,
    judgeNum: number,
    fillNum: number,
}

const range = ref(['2022-04-01 00:00:00', '2022-04-01 00:00:00'])
const Time = ref("90")

function submit() {
    function getNowDate(): string {
        const date = new Date();
        let month: string | number = date.getMonth() + 1;
        let strDate: string | number = date.getDate();

        if (month <= 9) {
            month = "0" + month;
        }

        if (strDate <= 9) {
            strDate = "0" + strDate;
        }

        return date.getFullYear() + "-" + month + "-" + strDate + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
    const info: paperInfo = {
        psId: id,
        pcId: "123",
        beginTime: range.value[0],
        endTime: range.value[1],
        setTime: getNowDate(),

        pcosId: course.value,

        AggregateScore: model.value.score,
        paperName: model.value.title,
        schoiceNum: model.value.questions["single"].num,
        mchoiceNum: model.value.questions["single"].num,
        judgeNum: model.value.questions["single"].num,
        fillNum: model.value.questions["single"].num,
    }
    axios.post('http://127.0.0.1/paper/add_paper', {
        psId: id,
        pcId: "123",
        beginTime: range.value[0],
        endTime: range.value[1],
        setTime: getNowDate(),
        pcosId: course.value,
        AggregateScore: model.value.score,
        paperName: model.value.title,
        schoiceNum: model.value.questions["single"].num,
        mchoiceNum: model.value.questions["single"].num,
        judgeNum: model.value.questions["single"].num,
        fillNum: model.value.questions["single"].num,
    }).then(function (response) {
        console.log(Response)
    }).catch(function (response) {
        console.log(Response)
    })

    console.log(info)
}
</script>


<template>
    <div style="width: 1100px; margin: auto;">
        <!-- <n-card class="auto_que_list">
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
        </n-card> -->

        <n-card class="auto_que_get" title="设置试卷结构" :segmented="{
            content: true,
        }">
            <n-form :model="model" label-placement="left" label-width="80px" label-align="left" :style="{
                // maxWidth: '300px'
            }" size="small">
                <n-form-item label="试卷标题" path="title">
                    <n-input placeholder v-model:value="model.title" />
                </n-form-item>
                <n-form-item label="满分" path="score">
                    <n-input placeholder v-model:value="model.score" :style="{ width: '50px' }" />
                    <span style="width: 10px;"></span>分
                </n-form-item>

                <n-form-item label="课程" path="score">
                    <n-select :options="data.course_options" v-model:value="course"></n-select>
                    <span style="width: 10px;"></span>

                </n-form-item>

                <n-form-item label="起止时间">
                    <n-date-picker style="width: 400px;" v-model:formatted-value="range"
                        value-format="yyyy-MM-dd HH:mm:ss" type="datetimerange" clearable>{{ range }}
                    </n-date-picker>
                </n-form-item>

                <n-form-item label="时间">
                    <n-input placeholder v-model:value="Time" :style="{ width: '50px' }" />
                    <span style="width: 10px;"></span>分钟
                </n-form-item>

                <n-card v-for="item in model.questions " :title="item.string" :segmented="{
                    content: true,
                }">
                    <!-- <n-form-item label="总分" :path="item.score">
                        <n-input placeholder v-model:value="item.score" :style="{ width: '50px' }" size="small" />
                        <span style="width: 10px;"></span>分
                    </n-form-item> -->
                    <n-form-item label="从题库选题" :path="item.num">
                        <n-input placeholder v-model:value="item.num" :style="{ width: '50px' }" />
                        <span style="width: 10px;"></span>
                        / {{ item.bank.num }}
                    </n-form-item>

                    <!-- <div>
                        <n-form-item v-for="(str, i) in model.degree" :label-style="{ 'font-size': '10px' }">
                            <label style="font-size: 10px;margin-right: 10px;">{{ str }}(共{{
                                item.bank[i]
                            }}道题)&nbsp&nbsp抽题数量</label>
                            <n-input placeholder v-model:value="item[i]" :style="{ width: '40px' }" />
                            <span style="width: 10px;"></span>
                            / {{ item.bank[i] }}
                        </n-form-item>
                    </div> -->

                </n-card>

            </n-form>
            <n-button tertiary round type="info" style="width: 100%;height: 100pxs;" @click="submit">保存</n-button>
        </n-card>
    </div>
</template>

<style>
/* .auto_que_list {
    width: 200px;
    height: 500px;

    float: left;
} */
.auto_que_get {
    width: 1100px;
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