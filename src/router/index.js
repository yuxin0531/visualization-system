// 导入Vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// use一下
Vue.use(VueRouter)
// 导入组件
import index from '../views'
// 前段组件
import front from '../views/front'
// 语言切换组件
import language from '../views/language'
// 整线组件
import home from '../views/home'
// 中段组件
import center from "../views/center"
// 后段组件
import rear from "../views/rear"
// 下载页面组件
import download from "../views/download"
// 图表组件
import chart from "../views/chart"

// 前段机器
import frontOne from "../views/front/equipment/frontOne"
import frontTwo from "../views/front/equipment/frontTwo"
import frontThree from "../views/front/equipment/frontThree"
import frontFour from "../views/front/equipment/frontFour"
import frontFive from "../views/front/equipment/frontFive"
import frontSix from "../views/front/equipment/frontSix"
// 中段机器
import centerOne from "../views/center/equipment/centerOne"
import centerTwo from "../views/center/equipment/centerTwo"
import centerThree from "../views/center/equipment/centerThree"
import centerFour from "../views/center/equipment/centerFour"
// 后段机器
import rearOne from "../views/rear/equipment/rearOne"
import rearTwo from "../views/rear/equipment/rearTwo"
import rearThree from "../views/rear/equipment/rearThree"
import rearFour from "../views/rear/equipment/rearFour"
// 准备路由规则
const routes = [
    // 根路径转跳index页面
    {
        path: '/',
        redirect: '/index'
    },
    {

        path: '/index', component: index, name: "index",

        // index下是子路由
        children: [
            // index转跳home页面
            {
                path: '/index',
                redirect:
                    '/home'
            },
            { path: "/home", component: home, name: "home" },
            { path: "/language", component: language, name: "language" },
            { path: "/front", component: front, name: "front" },
            { path: "/center", component: center, name: "center" },
            { path: "/rear", component: rear, name: "rear" },
            { path: "/download", component: download, name: "download" },
            { path: "/chart", component: chart, name: "chart" },
            // 前段机器
            { path: "/frontOne", component: frontOne, name: "frontOne" },
            { path: "/frontTwo", component: frontTwo, name: "frontTwo" },
            { path: "/frontThree", component: frontThree, name: "frontThree" },
            { path: "/frontFour", component: frontFour, name: "frontFour" },
            { path: "/frontFive", component: frontFive, name: "frontFive" },
            { path: "/frontSix", component: frontSix, name: "frontSix" },
            // // 中段机器
            { path: "/centerOne", component: centerOne, name: "centerOne" },
            { path: "/centerTwo", component: centerTwo, name: "centerTwo" },
            { path: "/centerThree", component: centerThree, name: "centerThree" },
            { path: "/centerFour", component: centerFour, name: "centerFour" },
            // //后段机器
            { path: "/rearOne", component: rearOne, name: "rearOne" },
            { path: "/rearTwo", component: rearTwo, name: "rearTwo" },
            { path: "/rearThree", component: rearThree, name: "rearThree" },
            { path: "/rearFour", component: rearFour, name: "rearFour" },
        ]
    },
]

// 创建路由对象
const router = new VueRouter({
    routes
})
// 把router这个对象暴露出去
export default router;