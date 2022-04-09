<script setup lang="ts">
import { NButton, NDropdown, NAvatar, NText } from 'naive-ui'
import { h } from "vue"
import { useRouter } from 'vue-router';
const router = useRouter()
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()
const options = [
    {
        key: 'header',
        type: 'render',
        render: renderCustomHeader
    },
    {
        label: '账号管理',
        key: 'Info',
        // disabled: true
    },
    {
        label: '我的课程',
        key: "Home",
    },{
        label: '我的消息',
        key: "Message",
    },
    {
        label: '我的收件箱',
        key: 'Inbox',
    },
    {
        label: '退出登录',
        key: 'back',
    }
    // {
    //     label: '比佛利山庄酒店，洛杉矶',
    //     key: 'the beverly hills hotel, los angeles'
    // }
]
function handleSelect(key: any) {
    if (key == "back") {
        // IfLogin.setState(false)
        router.go(-1)
    } else if (key == "Info") {
        router.push("/stu/Info")
    } else if (key == "Inbox") {
        router.push("/stu/Inbox")
    } else if (key == "Message") {
        router.push("/stu/Message")
    } else if (key == "Home") {
        router.push("/stu/Home")
    }
    // message.info(key)
}

function renderCustomHeader() {
    return h(
        'div',
        {
            style: 'margin-right:10px;display: flex; align-items: center; padding: 8px 12px; font-size:6px; max-width:200px; width:150px'
        },
        [
            h(NAvatar, {
                round: true,
                style: 'margin-right: 12px;width: 60px;height:60px',
                src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
            }),
            h('div', null, [
                h('div', { style: 'font-size: 17px;max-width: 200px;' }, [
                    h(
                        NText,
                        { depth: 2 },
                        { default: () => '冯鸣' }
                    )
                ]),
                h('div', { style: 'font-size: 15px;max-width: 200px;' }, [
                    h(
                        NText,
                        { depth: 3 },
                        { default: () => '枫寒' }
                    )
                ])
            ])
        ]
    )
}
</script>

<template>
    <n-dropdown
        size="huge"
        style="transform: scale(0.7, 0.7);"
        trigger="click"
        :options="options"
        @select="handleSelect"
    >
        <n-button size="large">我的</n-button>
    </n-dropdown>
</template>