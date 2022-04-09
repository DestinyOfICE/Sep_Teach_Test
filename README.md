# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

API：{
    个人信息：{
        学生：{
            姓名
            性别
            大学
            学号
            密码
            绑定手机号
        },
        老师（出卷人而非任课老师）：{
            姓名
            性别
            大学
            工号
            密码
            绑定手机号
        }
        管理员：{
            工号
            密码
            空学生学号
            空教职工工号
        }
    }

    课程信息：{
        课程名称（统一）
        课程id（区分）
        课程创始人（任课老师）不能参与出卷
        绑定课程学生学号：{
            学生学号1，
            学生学号2，
            ......
        }
        绑定唯一题库：{
            选择：{
                题目难度：
                题目内容：
                题目选项：{
                    选项1，
                    选项2，
                    选项3，
                    选项4，
                }，
                题目答案：
                题目解析：
            }
            填空：{
                题目难度：
                题目内容：
                题目答案：
                题目解析：
            }
            ......
        }
    }

    考试信息：{
        考试id（区分）
        考试名称
        考试时间
        考试范围
        考试题型
        绑定课程名称（统一）
        绑定老师数据（互相绑定）{
            老师1，
            老师2，
            ......
        }
        绑定学生数据（互相绑定）{
            绑定课程对应学生
        }
        绑定试卷数据库{  出卷是否随机，按照难度把题目划分，然后按照难度系统自动出卷
            空试卷，
            学生答卷库{
                答卷1，
                ......
            }
        }
        考试结果反馈{
            查看答卷，
            查看成绩，
            ......
        }
        学生权限{
            查看答卷，
            查看成绩，
            ......
        }
    }
    
    学生：{
        绑定课程库id（互相绑定）{
            id1，
            id2，
            ......
        }
    }

    老师：{
        绑定考试库id（互相绑定）{
            id1，
            id2，
            ......
        }
        绑定课程id
    }

}

