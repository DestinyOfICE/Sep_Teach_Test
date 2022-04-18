<script setup lang="ts">
import axios from 'axios';
import { NCard, NSpace, NRadio, NButton, NCheckboxGroup, NCheckbox, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';

const props = defineProps<{ id: number, updated: boolean }>()
if (props.updated) {
    console.log(props.id)
    axios.post('http://127.0.0.1/topic/queryById', {
        table: 'schoice',
        id: props.id
    }).then(function (response) {
        console.log(response)
        let data = response.data[0]
        // let data = {
        //     "difficulty": "B",
        //     "answer": "ABC",
        //     "num": 5,
        //     "course": "计算机网络原理",
        //     "id": 242,
        //     "title": "计算机网络有电路交换、报文交换和分组交换等交换方式，下列说法是正确的？（ ）",
        //     "choices": [
        //         "电路交换：端对端通信质量因约定了通信资源获得可靠保障",
        //         "电路交换：对连续传送大量数据效率高。",
        //         "分组交换：各分组小，路由灵活，网络生存性能好。",
        //         "报文交换：需要预约传输带宽，通信效率略低",
        //     ]
        // }
        model.value.title = data.title;
        model.value.answer = data.answer.split("");
        model.value.difficulty = data.difficulty;
        model.value.options[0] = { label: data.choices[0], value: 'A' };
        model.value.options[1] = { label: data.choices[1], value: 'B' };
        model.value.options[2] = { label: data.choices[2], value: 'C' };
        model.value.options[3] = { label: data.choices[3], value: 'D' };
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
        // let courses = response.data.info
        let courses = [{
            cosName: "计算机网络与案例"
        }]
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
    table: "mchoice",
    course: "",
    answer: [],
    title: "",
    difficulty: "C",
    options: [
        {
            label: "",
            value: "A"
        },
        {
            label: "",
            value: "B"
        },
        {
            label: "",
            value: "C"
        },
        {
            label: "",
            value: "D"
        },
    ],
    // resolution: "",

})

// function answerChange(e: Event) {
//     model.value.answer += (e.target as HTMLInputElement).value
// }

function save() {
    if (!props.updated) {
        axios.post('http://127.0.0.1/topic/insertAll', {
            table: model.value.table,
            course: model.value.course,
            answer: model.value.answer.join(""),
            choicea: model.value.options[0].label,
            choiceb: model.value.options[1].label,
            choicec: model.value.options[2].label,
            choiced: model.value.options[3].label,
            title: model.value.title,
            difficulty: model.value.difficulty,
        }).then(function (response) {
            console.log(response);

        }).catch(function (response) {
            console.log(response)
        })
    } else {
        axios.post('http://127.0.0.1/topic/updateMchoice', {
            table: model.value.table,
            course: model.value.course,
            answer: model.value.answer.join(""),
            choicea: model.value.options[0].label,
            choiceb: model.value.options[1].label,
            choicec: model.value.options[2].label,
            choiced: model.value.options[3].label,
            title: model.value.title,
            difficulty: model.value.difficulty,
            num: 4,
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
            <!-- {{ types[value].label }} -->
            <n-form-item path="stem">
                <n-input v-model:value="model.title" type="textarea" placeholder />
            </n-form-item>
            <n-form-item>
                <n-space vertical>
                    <n-checkbox-group v-model:value="model.answer">
                        <n-space vertical>
                            <!-- {{ model.answer }} -->
                            <div v-for="item in model.options" style="display: flex;">
                                <n-checkbox size="large" :value="item.value" :label="item.value"></n-checkbox>
                                <n-input placeholder v-model:value="item.label"
                                    style="min-width:300px; width:fit-content;"></n-input>
                            </div>
                        </n-space>
                    </n-checkbox-group>
                </n-space>
            </n-form-item>
            <!-- <n-form-item path="resolution">
                <n-space></n-space>
                <n-input v-model:value="model.resolution" placeholder="输入答案解析" />
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