<script setup lang="ts">
import { propsToAttrMap } from "@vue/shared";
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NIcon, NRadioGroup, NRadioButton, NCheckbox, NCheckboxGroup } from "naive-ui"
import { ref,watch } from "vue"

const props = defineProps<{ content: any, value: any, index: number }>()
const emit = defineEmits(['getValue'])

const value = ref(props.value)

let disabled2 = ref(false)
let disabled1 = ref(false)

let songs = ref([
    {
        value: "A",
        label: 'A' + props.content.topicList[0]
    },
    {
        value: 'B',
        label: 'B' + props.content.topicList[1]
    },
    {
        value: 'C',
        label: 'C' + props.content.topicList[2]
    },
    {
        value: 'D',
        label: 'D' + props.content.topicList[3]
    }
])

watch(value, (val, preVal) => {
    console.log(val)
    emit('getValue', [props.index, val])
})

</script>

<template>
    <!-- {{ content }} -->
    <n-space vertical>


        <span>{{ content.title }}</span>
        <n-checkbox-group v-model:value="value">
            <n-space vertical>
                <!-- {{ value }} -->
                <div v-for="item in songs" style="display: flex;margin: 5px 0;">

                    <n-checkbox size="large" :value="item.value" :label="item.label"></n-checkbox>
                    <!-- <n-button placeholder :value="value">{{ item.label }}</n-button> -->
                </div>
            </n-space>
        </n-checkbox-group>


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