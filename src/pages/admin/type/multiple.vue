<script setup lang="ts">
import { NCard, NSpace, NRadio, NButton, NCheckboxGroup, NCheckbox, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { ref } from 'vue';
const value = ref(1)

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

const degree_options = ref([
    {
        label: "易",
        value: "small",
    },
    {
        label: "中",
        value: "medium",
    },
    {
        label: "难",
        value: "large",
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

const model = ref({
    stem: "",
    answer: null,
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
    resolution: "",
    degree: "small",
    course: "",
})

// function answerChange(e: Event) {
//     model.value.answer += (e.target as HTMLInputElement).value
// }

function save() {

}
function next() {

}
</script>

<template>
    <n-form :model="model" label-placement="left">
        <n-space vertical>
            {{ types[value].label }}
            <n-form-item path="stem">
                <n-input v-model:value="model.stem" type="textarea" placeholder />
            </n-form-item>
            <n-form-item>
                <n-space vertical>
                    <n-checkbox-group v-model:value="model.answer">
                        <n-space vertical>
                            <!-- {{ model.answer }} -->
                            <div v-for="item in model.options" style="display: flex;">
                                <n-checkbox size="large" :value="item.value" :label="item.value"></n-checkbox>
                                <n-input
                                    placeholder
                                    v-model:value="item.label"
                                    style="min-width:300px; width:fit-content;"
                                ></n-input>
                            </div>
                        </n-space>
                    </n-checkbox-group>
                </n-space>
            </n-form-item>
            <n-form-item path="resolution">
                <n-space></n-space>
                <n-input v-model:value="model.resolution" placeholder="输入答案解析" />
            </n-form-item>
            <n-form-item path="degree" label="难度">
                <n-select
                    style="width:100px ;"
                    v-model:value="model.degree"
                    :options="degree_options"
                ></n-select>
            </n-form-item>
            <n-form-item path="course" label="科目">
                <n-select
                    style="width:100px ;"
                    v-model:value="model.course"
                    :options="course_options"
                ></n-select>
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

<style></style>