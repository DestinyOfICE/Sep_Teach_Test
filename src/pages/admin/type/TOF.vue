<script setup lang="ts">
import axios from 'axios';
import { NCard, NSpace, NRadio, NButton, NRadioGroup, NRadioButton, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';

const props = defineProps<{ id: number, updated: boolean }>()
if (props.updated) {
    console.log(props.id)
    axios.post('http://127.0.0.1/topic/queryById', {
        table: 'schoice',
        id: props.id
    }).then(function (response) {
        console.log(response)
        // let data = response.data[0]
        let data = {
            "difficulty": "A",
            "answer": "T",
            "course": "计算机网络原理",
            "id": 242,
            "title": "物理层协议是为了把信号一方经过物理媒体传到另一方，物理层所关心的是把通信双方连接起来，为数据链路层实..."
        }
        model.value.title = data.title;
        model.value.answer = data.answer;
        model.value.difficulty = data.difficulty;
        model.value.course = data.course;
    }).catch(function (response) {
        console.log(response)
    })
} else {
    console.log("just new")
}

const degree_options = ref([
    {
        label: "易",
        value: "C",
    },
    {
        label: "中",
        value: "B",
    },
    {
        label: "难",
        value: "A",
    },
])
const course_options = ref([
    {
        label: "语文",
        value: "语文",
    },
    {
        label: "数学",
        value: "数学",
    },
    {
        label: "英语",
        value: "英语",
    },
])
axios.get('http://127.0.0.1/account/info/all_cos')
    .then(function (response) {
        course_options.value = []
        console.log(response)
        let courses = response.data.info
        for (let i = 0; i < courses.length; i++) {
            course_options.value.push({
                label: courses[i].cosName,
                value: courses[i].cosName
            })
        }
    }).catch(function (response) {
        console.log(response)
    })
const model = ref({
    table: "judge",
    course: "",
    answer: "",
    title: "",
    difficulty: "C",
    options: [
        {
            label: "T",
            value: "T"
        },
        {
            label: "F",
            value: "F"
        },
    ],
    // resolution: "",

})
function answerChange(e: Event) {
    model.value.answer = (e.target as HTMLInputElement).value
}

function save() {
    if (!props.updated) {
        axios.post('http://127.0.0.1/topic/insertAll', {
            table: model.value.table,
            course: model.value.course,
            answer: model.value.answer,
            title: model.value.title,
            difficulty: model.value.difficulty,
        }).then(function (response) {
            console.log(response);

        }).catch(function (response) {
            console.log(response)
        })
    }else{
        axios.post('http://127.0.0.1/topic/updateAll/judge', {
            table: model.value.table,
            course: model.value.course,
            answer: model.value.answer,
            title: model.value.title,
            difficulty: model.value.difficulty,
            id: props.id
        }).then(function (response) {
            console.log(response);

        }).catch(function (response) {
            console.log(response)
        })
    }

}
function next() {

}
</script>

<template>
    <n-form :model="model" label-placement="left">
        <n-space vertical>
            <n-form-item path="stem">
                <n-input v-model:value="model.title" type="textarea" placeholder />
            </n-form-item>
            <n-form-item>
                <n-space vertical>
                    <div v-for="item in model.options">
                        <n-space>
                            <n-radio size="large" :checked="model.answer === item.value" :value="item.value"
                                :name="item.value" @change="answerChange">{{ item.value }}</n-radio>
                        </n-space>
                    </div>
                </n-space>
            </n-form-item>
            <!-- <n-form-item path="resolution">
                <n-space></n-space>
                <n-input v-model:value="model.difficulty" placeholder="输入答案解析" />
            </n-form-item> -->
            <n-form-item path="degree" label="难度">
                <n-select style="width:100px ;" v-model:value="model.difficulty" :options="degree_options"></n-select>
            </n-form-item>
            <n-form-item path="course" label="科目">
                <n-select style="width:100px ;" v-model:value="model.course" :options="course_options"></n-select>
            </n-form-item>
            <div>
                <n-form-item style="float: left;">
                    <n-button attr-type="button" @click="save" style="width: 70px;">保存</n-button>
                </n-form-item>
                <n-form-item style="float: right;">
                    <n-button attr-type="button" @click="next" style="width: 70px;">下一题</n-button>
                </n-form-item>
            </div>
        </n-space>
    </n-form>
</template >

<style>
</style>