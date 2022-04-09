<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NIcon, NRadioGroup, NRadioButton, NDatePicker } from "naive-ui"
import { ref } from "vue"


const formattedValue = ref('2007.06.30 12:08:55')
</script>

<template>
    <!-- <n-card style="margin: 15px 0 15px 0;"> -->
    <div class="flex">
        <div class="exam_icon"></div>
        <div class="right_content">
            <p class="exam_name">高数期中考</p>
            <p class="exam_status">未开始</p>
        </div>
        <div class="tea_content">
            <n-space>
                <n-date-picker
                    style="width: 200px;"
                    v-model:formatted-value="formattedValue"
                    value-format="yyyy.MM.dd HH:mm:ss"
                    type="datetime"
                    clearable
                >{{ formattedValue }}</n-date-picker>
                <n-button>发布</n-button>
            </n-space>
        </div>
    </div>
    <!-- </n-card> -->
</template>

<style>
p {
    font-size: 12px;
    font-weight: 400;
    margin: 4px 0;
}
.flex {
    width: 100%;
    display: flex;
    align-items: center;
}
.exam_icon {
    width: 84px;
    height: 84px;
    transform: scale(0.5);
    border-radius: 10px;
    background: url(/exam-gray.png) no-repeat;
}

.right_content {
    width: calc(100% - 384px);
    padding-bottom: 5px;
    border-bottom: 0.5px solid #f2f2f2;
}
.exam_name {
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #181e33;
    /* max-width: 92%; */
    display: inline-block;
}
.exam_status {
    font-size: 12px;
    font-weight: 400;
    color: #a8a8b3;
    line-height: 17px;
    margin-top: 4px;
}

.tea_content {
    width: 300px;
}
</style>