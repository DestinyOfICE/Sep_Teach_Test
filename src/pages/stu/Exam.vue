<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm, NDivider, NCountdown } from "naive-ui"
import Single from "../../components/exam/single.vue";
import multiple from "../../components/exam/multiple.vue";
import completion from "../../components/exam/completion.vue";
import TOF from "../../components/exam/TOF.vue"

import { useRoute } from 'vue-router';
import { reactive, ref } from "vue";
import axios from "axios";
import { fdatasync } from "fs";

const route = useRoute()

// interface paper_info {
//     aggrerateScore: 0, beginTime: ""
// }
let data = reactive({
    paper_info: { aggrerateScore: 0, beginTime: "", paperName: "" },
    stuName: "",
    stuID: 0,
    allNum: 0,
    Topics1: [],
    Topics2: [],
    Topics3: [],
    Topics4: [],
    schoiceNum: 0,
    mchoiceNum: 0,
    judgeNum: 0,
    fillNum: 0,
})

// interface commit {
//     paperId: number,
//     stuId: number,
//     finishStatus: number,
//     finishTime: string,
//     paper_answer: [
//         {
//             topicType: number,
//             answerList: [
//                 {
//                     topicId: number,
//                     difficulty: string,
//                     answer: string
//                 }
//             ]
//         },
//     ]
// }

const myPaper = ref([])
// let info = data.paper_info;

let paperId = route.query.paperId;
let stuId = route.query.stuId;


//获取用户信息
axios.get('http://127.0.0.1/account/info/a_account', {
    params: {
        id: stuId,
        accountType: 1,
    }
}).then(function (response: any) {
    // data.stuName = response.data.info.stuName;
    // data.stuID = response.data.info.stuId;
    data.stuName = "宿";
    data.stuID = 13;
}).catch(function (error: any) {
    console.log(error);
});


//获取试卷信息
axios.get('http://127.0.0.1/paper/get_one_paper', {
    params: {
        paperId: paperId
    }
}).then(function (response: any) {
    // let info = response.data.paper_info;
    let info = {
        "paperId": 1,
        "psId": 1,
        "pcId": "234",
        "beginTime": "2022-03-22 14:50:55",
        "endTime": "2022-03-22 14:50:55",
        "setTime": "2022-03-22 14:50:55",
        "pcosId": 1,
        "aggrerateScore": 9,
        "totalTime": 5000000,
        "paperName": "2020计算机组成原理考试之第一学期期末考试",
        "schoiceNum": 4,
        "mchoiceNum": 2,
        "judgeNum": 1,
        "fillNum": 2,
    }
    // console.log(typeof (info))
    data.paper_info = info;
    // data.schoiceNum = info.schoiceNum
    // data.mchoiceNum = info.mchoiceNum
    // data.judgeNum = info.judgeNum
    // data.fillNum = info.fillNum
    // data.allNum = info.schoiceNum + info.mchoiceNum + info.judgeNum + info.fillNum;
    data.schoiceNum = 4
    data.mchoiceNum = 2
    data.judgeNum = 1
    data.fillNum = 2
    data.allNum = 9;

}).catch(function (error: any) {
    console.log(error);
});


//获取试卷题目
for (let i = 1; i < 5; i++) {
    // console.log(i)
    axios.get('http://127.0.0.1/paper/get_topic', {
        params: {
            paperId: 1,
            topicType: i
        }
    }).then(function (response: any) {
        switch (i) {
            case 1:
                data.Topics1 = response.data.all_topic_info
                break
            case 2:
                data.Topics2 = response.data.all_topic_info
                break
            case 3:
                data.Topics3 = response.data.all_topic_info
                break
            case 4:
                data.Topics4 = response.data.all_topic_info
                break
        }

    }).catch(function (error: any) {
        console.log(error);
    });
}


const now = ref(1);

function last() {
    if (now.value > 1)
        now.value -= 1;
}
function next() {
    if (now.value < data.allNum) { now.value += 1; }

}

function submit() {
    // console.log(data.Topics2)
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


    let finishStatus = 2;
    let isallnull = true;
    let finishTime = getNowDate()
    //判断是否有漏题
    for (let i = 1; i <= data.allNum; i++) {
        if (myPaper.value[i] == null || myPaper.value[i] == "") {
            finishStatus = 1
        }
        if (myPaper.value[i] != null) {
            isallnull = false
        }
    }
    if (isallnull) {
        finishStatus = 0
    }

    const a1 = []
    const a2 = []
    const a3 = []
    const a4 = []

    for (let i = 0; i < data.schoiceNum; i++) {
        a1.push({
            topicId: data.Topics1[i].id,
            difficulty: data.Topics1[i].difficulty,
            answer: myPaper.value[i + 1],
        })
    }
    for (let i = 0; i < data.mchoiceNum; i++) {
        a2.push({
            topicId: data.Topics2[i].id,
            difficulty: data.Topics2[i].difficulty,
            answer: myPaper.value[i + 1 + data.schoiceNum] == null ? null : myPaper.value[i + 1 + data.schoiceNum].join(""),
        })
    }
    for (let i = 0; i < data.judgeNum; i++) {
        a3.push({
            topicId: data.Topics3[i].id,
            difficulty: data.Topics3[i].difficulty,
            answer: myPaper.value[i + 1 + data.schoiceNum + data.mchoiceNum],
        })
    }
    for (let i = 0; i < data.fillNum; i++) {
        a4.push({
            topicId: data.Topics4[i].id,
            difficulty: data.Topics4[i].difficulty,
            answer: myPaper.value[i + 1 + data.schoiceNum + data.mchoiceNum + data.judgeNum],
        })
    }


    const submit_answer = {
        paperId: paperId,
        stuId: stuId,
        finishStatus: finishStatus,
        finishTime: finishTime,
        paper_answer: [
            {
                topicType: 1,
                answerList: a1
            },
            {
                topicType: 2,
                answerList: a2
            },
            {
                topicType: 3,
                answerList: a3
            },
            {
                topicType: 4,
                answerList: a4
            },
        ]
    }
    console.log(submit_answer)
    
    axios.post('http://127.0.0.1/paper_finished/add_paper_score', {
        paperId: paperId,
        stuId: stuId,
        finishStatus: finishStatus,
        finishTime: finishTime,
        paper_answer: [
            {
                topicType: 1,
                answerList: a1
            },
            {
                topicType: 2,
                answerList: a2
            },
            {
                topicType: 3,
                answerList: a3
            },
            {
                topicType: 4,
                answerList: a4
            },
        ]
    })
        .then(function (response: any) {
            console.log(response);
            //返回

        })
        .catch(function (error: any) {
            console.log(error);
        });
}

function getValue(value: any) {
    myPaper.value[value[0]] = value[1]
}

const error = false
</script>

<template>
    <div class="stu_exam">
        <n-card class="stu_exam_left" :title="data.paper_info.paperName">
            <n-space>
                <span class="font_2">姓名：{{ data.stuName }}</span>
                <span class="font_2">学号：{{ data.stuID }}</span>
            </n-space>
            <n-space>
                <span class="font_2">题量：{{ data.allNum }}</span>
                <span class="font_2">满分：{{ data.paper_info.aggrerateScore }}</span>
                <span class="font_2">考试时间：{{ data.paper_info.beginTime }}</span>
            </n-space>
            <n-divider />
            <n-card :bordered="false" title="一.单选题（共1题，1.0分）">
                <!-- {{now}} -->
                <span>{{ now }}.</span>
                <!-- {{ myPaper }} -->
                <div v-for="(content, i) in data.Topics1">
                    <single :value="myPaper[i + 1]" :content="content" :index="i + 1" v-if="now == i + 1"
                        @getValue="getValue">
                    </single>
                </div>

                <div v-for="(content, i) in data.Topics2">
                    <multiple :value="myPaper[i + 1 + data.schoiceNum]" :content="content"
                        :index="i + 1 + data.schoiceNum" v-if="now - data.schoiceNum == i + 1" @getValue="getValue">
                    </multiple>
                </div>

                <div v-for="(content, i) in data.Topics3">
                    <TOF :value="myPaper[i + 1 + data.schoiceNum + data.mchoiceNum]" :content="content"
                        :index="i + 1 + data.schoiceNum + data.mchoiceNum"
                        v-if="now - data.schoiceNum - data.mchoiceNum == i + 1" @getValue="getValue"></TOF>
                </div>

                <div v-for="(content, i) in data.Topics4">
                    <completion :value="myPaper[i + 2 + data.schoiceNum + data.mchoiceNum]" :content="content"
                        :index="i + 2 + data.schoiceNum + data.mchoiceNum"
                        v-if="now - data.allNum + data.fillNum == i + 1" @getValue="getValue"></completion>
                </div>

                <!-- <completion content="123"></completion> -->


                <div class="next_q">
                    <div @click="last" style="cursor: pointer;" v-if="now > 1">上一题</div>
                    <div @click="next" style="cursor: pointer;" v-if="now < data.allNum">下一题</div>
                    <div @click="submit" style="cursor: pointer;" v-else>提交</div>
                </div>
            </n-card>

        </n-card>


        <n-card class="stu_exam_right">

            <n-countdown :duration="data.paper_info.totalTime" />
            <!-- <span id="exam_time">时间</span> -->
            <n-divider />

            <div>
                <span class="">1.单选题(1.0分)</span>
                <div style="display: flex;flex-wrap: wrap;">
                    <div class="exam_num" @click="now = i + 1" v-for="(content, i) in data.Topics1">{{ i + 1 }}</div>
                </div>
            </div>

            <div>
                <span class="">2.多选题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num" @click="now = i + 1 + data.schoiceNum" v-for="(content, i) in data.Topics2">{{
                        i + 1 + data.schoiceNum
                    }}</div>
                </div>
            </div>

            <div>
                <span class="">3.判断题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num" @click="now = i + 1 + data.schoiceNum + data.mchoiceNum"
                        v-for="(content, i) in data.Topics3">{{
                            i + 1 + data.schoiceNum + data.mchoiceNum
                        }}</div>
                </div>
            </div>

            <div>
                <span class="">4.填空题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num" @click="now = i + 2 + data.schoiceNum + data.mchoiceNum"
                        v-for="(content, i) in data.Topics4">{{
                            i + 2 + data.allNum - data.fillNum
                        }}</div>
                </div>
            </div>
        </n-card>
    </div>
</template>

<style>
.font_2 {
    padding: 5px;
    color: rgb(168, 168, 168);
}

.stu_exam {
    width: 850px;
    height: auto;
    margin: auto;

    display: flex;
    justify-content: space-between;
}

.stu_exam_left {
    width: 600px;
    min-height: 1000px;
    background-color: white;
}

.stu_exam_right {
    width: 230px;
    min-height: 300px;
    height: fit-content;
    background-color: white;
}

.stu_exam_right div {
    margin-top: 5px;
}

.next_q {
    height: 36px;

    padding: 30px 0;

    display: flex;
    justify-content: center;

}

.next_q div {
    width: 90px;
    height: 35px;

    margin: 0 15px;
    border: 1px solid #94C1FF;
    border-radius: 35PX;

    color: #3A8BFF;

    display: flex;
    justify-content: center;
    align-items: center;

}

#exam_time {
    display: flex;
    align-items: center;
}

#exam_time::before {
    content: url(/favicon.ico);
}

.exam_num {
    width: 30px;
    height: 30px;

    margin: 0 5px;
    border: 1px solid #94C1FF;
    border-radius: 3px;

    color: #3A8BFF;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}
</style>