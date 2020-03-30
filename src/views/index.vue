<template>
  <el-container class="index-wrap">
    <!-- 点击关闭按钮弹出来的确认关闭窗口 -->
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :modal="true"
      :close-on-click-modal="false"
    >
      <span style="font-size:27px;color:#0b55b4">是否要关闭系统!</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="closeWin">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 点击下载弹出的窗口 -->
    <!-- 包含一个时间选择 -->
    <el-dialog title="请选择要导出哪个时间的报表,点击确认开始下载" :visible.sync="dialogVisible" width="30%" center>
      <div class="block">
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 蓝色色块 -->
    <div class="blue-lump">
      <!-- 返回主页按钮 -->
      <div class="btn-switch-wrap">
        <el-button
          circle
          class="return-index iconfont"
          @click="returnIndex"
          v-if="returnShow"
        >&#xe663;</el-button>
      </div>
      <!-- 开关按钮 -->
      <el-button
        icon="el-icon-switch-button"
        circle
        class="btn-switch"
        @click="close"
        v-if="switchShow"
      ></el-button>
    </div>
    <!-- 头部 -->
    <el-header id="index-header" style="height:210px">
      <!-- logo -->
      <div class="logo-wrap">
        <img src="../assets/img/jsmlogo.png" alt />
      </div>
    </el-header>
    <!-- 中部 -->
    <el-main id="index-main">
      <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="30%"  >
        <span>这是一段信息</span>
      </el-dialog>-->
      <!-- 生产线 -->
      <!-- <div class="production-line-wrap" v-if="isShow">
        <div
          class="production-line"
          v-for="(item,index) in productionLineList"
          :key="index"
          @click="details(item.methods)  "
        >
          <img :src="item.url" alt />
        </div>
        <article>
      <ground class="a"></ground>-->
      <!-- <ground class="b"></ground>
      <ground class="c"></ground>-->
      <!-- </article> -->
      <!-- 链接灯的虚线 -->
      <!-- <div class="dotted">
          <img src="../assets/img/dotted.png" alt />
        </div>
        <tricolourlight :class="item.name" v-for="(item) in tricolourLightList" :key="item.name"></tricolourlight>
      </div>-->
      <!-- 路由出口 -->
      <router-view
        :isShow="isShow"
        v-on:success="success"
        :downloadShow="downloadShow"
        v-on:downloadSuccess="downloadSuccess"
      ></router-view>
      <!-- 语言切换 -->
      <!-- <div class="lang-choose-wrap" v-if="!isShow">
        <div class="lang-choose">
          <div class="flag">
            <div
              :class="{flagBgi:index==current}"
              v-for="(item,index) in flagImgList"
              :key="index"
              @click="btnBgiShow(index)"
            >
              <img :src="item.url" alt />
            </div>
          </div>
          <div class="lang-bigbtn-wrap">
            <div class="lang-btn-bgi" @click="BigLangBtn">
              <el-button circle class="lang-big-btn iconfont">&#xe6ad;</el-button>
            </div>
          </div>
        </div>
      </div>-->
    </el-main>
    <!-- 底部 -->
    <el-footer id="index-foot" style="height:262px">
      <div class="time-icon">
        <img src="../assets/img/timeicon.png" alt />
        <span>{{currentTime}}</span>
      </div>
      <!-- <div class="operation-icon" v-if="yunxing">
        <img src="../assets/img/operationicon.png" alt />
        <span>运行</span>
      </div>-->
      <!-- 语言切换按钮 -->
      <div class="lang-btn-wrap" v-if="isShow" @click="SmallLangBtn">
        <el-button circle class="btn-switch iconfont lang-btn">&#xe6ad;</el-button>
      </div>
      <!-- 返回按钮 -->
      <div class="lang-btn-wrap" v-if="!isShow" @click="getBack">
        <el-button circle class="btn-switch iconfont lang-btn">&#xe62e;</el-button>
      </div>
      <!-- 下载按钮 -->
      <div class="download-btn-wrap" v-if="downloadShow" @click="download">
        <el-button circle class="btn-switch iconfont download">&#xe660;</el-button>
      </div>
      <!-- 图表按钮 -->
      <div class="download-btn-wrap" v-if="chartShow" @click="chart">
        <el-button circle class="btn-switch iconfont chart">&#xe664;</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
// import tricolourlight from "../components/tricolourlight";
// import ground from "../components/ground";
// import anime from "animejs/lib/anime.es.js";

export default {
  // 三色灯组件
  // components: {
  //   // tricolourlight,
  //   // ground
  // },

  data() {
    return {
      // 时间选择器
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      // 弹出时的默认时间
      value2: [new Date(), new Date()],
      // 点击关闭按钮确定，取消控制弹出显示隐藏的初始值
      dialogVisible: false,
      // 点击关机按钮，确认取消，控制弹窗显示的初始值
      centerDialogVisible: false,
      // 图表按钮显示隐藏
      chartShow: false,
      yunxing: false,
      // 下载按钮
      downloadShow: true,
      // 当前时间
      currentTime: "",
      //时间实时刷新定时器的变量
      timer: "",
      returnShow: false,
      switchShow: true,
      //   切换国旗标的初始值
      // current: 0,
      // //   国旗图片
      // flagImgList: [
      //   {
      //     url: require("../assets/img/china.png")
      //   },
      //   {
      //     url: require("../assets/img/english.png")
      //   },
      //   {
      //     url: require("../assets/img/cambodia.png")
      //   }
      // ],
      //  生产线图片
      // productionLineList: [
      //   {
      //     url: require("../assets/img/productionline-front.png"),
      //     methods: "front"
      //   },

      //   {
      //     url: require("../assets/img/productionline-centre.png")
      //   },
      //   {
      //     url: require("../assets/img/productionline-rear.png")
      //   }
      // ],
      //   三色灯动态添加的类名数组
      // tricolourLightList: [
      //   {
      //     name: "one"
      //   },
      //   {
      //     name: "two"
      //   },
      //   {
      //     name: "three"
      //   },
      //   {
      //     name: "four"
      //   },
      //   {
      //     name: "five"
      //   },
      //   {
      //     name: "six"
      //   },
      //   {
      //     name: "seven"
      //   },
      //   {
      //     name: "eight"
      //   },
      //   {
      //     name: "nine"
      //   },
      //   {
      //     name: "ten"
      //   },
      //   {
      //     name: "eleven"
      //   },
      //   {
      //     name: "twelve"
      //   },
      //   {
      //     name: "thirteen"
      //   },
      //   {
      //     name: "fourteen"
      //   },
      //   {
      //     name: "fifteen"
      //   },
      //   {
      //     name: "sixteen"
      //   }
      // ],
      // 生产线和语言切换小按钮显示与隐藏
      isShow: true
      // bgiShow: false
    };
  },
  //
  updated: function() {
    // 对路由进行判断，显示隐藏开关按钮和返回主页按钮的显示隐藏
    if (this.$route.path === "/home") {
      this.switchShow = true;
      this.returnShow = !this.switchShow;
    } else {
      this.returnShow = true;
      this.switchShow = !this.returnShow;
    }
    // 对路由进行判断，对返回按钮显示隐藏进行判断
    if (
      this.$route.path === "/home" ||
      this.$route.path === "/front" ||
      this.$route.path === "/center" ||
      this.$route.path === "/rear"
    ) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
    // 对路由进行判断，控制下载按钮进行显示隐藏
    if (
      this.$route.path === "/home" ||
      this.$route.path === "/front" ||
      this.$route.path === "/center" ||
      this.$route.path === "/rear" ||
      this.$route.path === "/language"
    ) {
      this.downloadShow = false;
    } else {
      this.downloadShow = true;
    }
    // 对路由进行判断，控制图表按钮的显示隐藏
    if (this.$route.path === "/home") {
      this.chartShow = true;
    } else {
      this.chartShow = false;
    }
  },
  methods: {
    // handleClose() {
    //   this.$confirm("确认关闭？");
    // },
    // 图表按钮
    chart() {
      this.$router.push("/chart");
    },
    // 下载按钮事件
    download() {
      this.dialogVisible = true;
      // this.$router.push("/download");
      // this.downloadShow = false;
    },
    // 返回事件
    getBack() {
      this.$router.back(-1);
    },
    // lang组件传过来的值并进行操作
    success(res) {
      this.isShow = res;
    },
    downloadSuccess(res) {
      this.downloadShow = res;
    },
    // 触发返回主页的事件
    returnIndex() {
      this.$router.push("/home");
      this.isShow = true;
    },

    //  语言切换事件
    SmallLangBtn() {
      this.$router.push("/language");
      this.isShow = false;
    },
    // BigLangBtn() {
    //   this.isShow = true;
    // },
    // 控制选中的国旗语言
    // btnBgiShow(index) {
    //   this.current = index;
    // },
    // 点击确认关闭系统时执行的函数
    closeWin() {
      var browserName = navigator.appName;
      if (browserName == "Netscape") {
        window.location.href = "about:blank"; //Chrome浏览器必须要有这句话才能正常关闭页面
      } else if (browserName == "Microsoft Internet Explorer") {
        window.opener = null;
      }
      window.close(); //关闭页面
    },
    // 关闭系统
    close() {
      this.centerDialogVisible = true;
    },
    details(detailsWords) {
      this[detailsWords]();
    },
    // 点击前段跳转到相应页面
    front() {
      this.$router.push("/front");
      // this.isShow= false
    }
  },
  //   在实例对象创建后的钩子调用,使用定时器实时获得时间
  created() {
    this.timer = setInterval(() => {
      this.currentTime = this.$moment(new Date()).format("YYYY .MM .DD HH:mm");
    }, 1000);
  },
  //   实例销毁之前调用,清除定时器
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
// anime({
//   targets: ".green",
//   loop: 4,
//   background: "hsla(0, 100%, 100%, .2)",
//   direction: "alternate",
//   easing: "easeInOutCirc",
//   complete: function(anim) {
//     console.log(anim);
//     anime({
//       direction: "normal",
//       targets: ".green",
//       left: "240px",
//       // direction: 'alternate',

//       complete: function(anim) {
//         console.log(anim);
//         anime({
//           targets: ".green",
//           left: "1000px",

//           // direction: 'alternate',

//           complete: function(anim) {
//             console.log(anim);
//           }
//         });
//       }
//     });
//   }
// });
</script>

<style lang="less" scoped>
// 1920 1080
.index-wrap {
  width: 1920px;
  height: 1080px;
  position: relative;
  //   蓝色色块样式
  .blue-lump {
    position: absolute;
    height: 100%;
    width: 100%;
    // top: 2px;
    background-image: url("../assets/img/bluelump.png");
    // 开关按钮样式
    .btn-switch {
      width: 56px;
      height: 56px;
      color: #0b55b4;
      font-size: 30px;
      position: absolute;
      top: 78px;
      right: 58px;
      box-shadow: -4px 5px 5px 2px #0d1d33;
    }
    // 返回主页按钮样式
    .return-index {
      width: 56px;
      height: 56px;
      color: #0b55b4;
      font-size: 40px;
      padding: 0;
      position: absolute;
      top: 78px;
      right: 58px;
      display: flex;
      justify-content: center;
      box-shadow: -4px 5px 5px 2px #0d1d33;
    }
  }

  // 头部样式
  #index-header {
    background-color: #f3f3f3;
    display: flex;
    align-items: center;
    box-shadow: inset -20px -30px 40px 5px #e0e0e0;
    .logo-wrap {
      margin-left: 42px;
    }
  }

  // 中间部分样式
  #index-main {
    padding: 0;
    position: relative;
    z-index: 1;
    background-color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    // // 生产线图
    // .production-line-wrap {
    //   position: absolute;
    //   bottom: 118px;
    //   display: flex;
    //   justify-content: center;

    //   .production-line {
    //     cursor: pointer;
    //     position: relative;
    //     z-index: 1;
    //     // align-items: center;
    //   }
    //   //   连接灯的虚线的样式
    //   .dotted {
    //     position: absolute;
    //     bottom: 34px;
    //   }
    // }

    // 语言切换界面
    // .lang-choose-wrap {
    //   // 语言切换
    //   width: 100%;
    //   .lang-choose {
    //     height: 100%;
    //     .flag {
    //       height: 130px;
    //       display: flex;
    //       align-items: center;
    //       //    position:;
    //       margin: 30px 0 0 28px;
    //       position: absolute;
    //       div {
    //         margin-left: 38px;
    //         float: left;
    //         img {
    //           width: 198px;
    //           height: 106px;
    //         }
    //       }
    //     }
    //   }
    // // 国旗背景图
    // .flagBgi {
    //   // text-align: center;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   width: 224px;
    //   height: 124px;
    //   background: url("../assets/img/flagbgi.png") no-repeat;
    // }
    // // 语言切换大按钮样式
    // .lang-bigbtn-wrap {
    //   height: 100%;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // 按钮背景
    //     .lang-btn-bgi {
    //       width: 211px;
    //       height: 211px;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       background: url("../assets/img/langbigbtnbgi.png") no-repeat;
    //       //   按钮内部
    //       .lang-big-btn {
    //         display: flex;
    //         justify-content: center;
    //         width: 185px;
    //         height: 185px;
    //         font-size: 98px;
    //         color: #0b55b4;
    //         box-shadow: -4px 12px 20px 8px #0d1d33;
    //       }
    //     }
    //   }
    // }
  }

  // 底部样式
  #index-foot {
    background-color: #f3f3f3;
    // 时间和运行图标样式
    .time-icon,
    .operation-icon {
      position: absolute;
      bottom: 120px;
      font-size: 38px;
      span {
        width: 32px;
        margin-left: 32px;
      }
    }
    .time-icon {
      left: 610px;
      color: white;
    }
    .operation-icon {
      right: 862px;
      color: #9ad15c;
    }
    // 语言按钮
  }
  //   底部语言小按钮样式
  .lang-btn-wrap {
    position: absolute;
    z-index: 1;
    right: 58px;
    bottom: 120px;
    height: 65px;
    width: 65px;
    display: flex;
    justify-content: center;
    // line-height: 65px;
    background: url("../assets/img/langbtnbgi.png") no-repeat;
    .lang-btn {
      padding: 0;
      margin-top: 5px;
      font-size: 36px;
      color: #0b55b4;
      width: 56px;
      height: 56px;
      display: flex;
      justify-content: center;
      box-shadow: -4px 2px 4px 2px #0d1d33;
    }
  }
  // //   16盏三色灯动态添加的样式
  // .one {
  //   top: -230px;
  //   left: 29px;
  // }
  // .two {
  //   top: -230px;
  //   left: 120px;
  // }
  // .three {
  //   top: -230px;
  //   left: 211px;
  // }
  // .four {
  //   top: -230px;
  //   left: 347px;
  // }
  // .five {
  //   top: -230px;
  //   left: 432px;
  // }
  // .six {
  //   top: -230px;
  //   left: 496px;
  // }
  // .seven {
  //   top: -230px;
  //   left: 614px;
  // }
  // .eight {
  //   top: -230px;
  //   left: 684px;
  // }
  // .nine {
  //   top: -230px;
  //   left: 758px;
  // }
  // .ten {
  //   top: -230px;
  //   left: 870px;
  // }
  // .eleven {
  //   top: -230px;
  //   left: 952px;
  // }
  // .twelve {
  //   top: -230px;
  //   right: 844px;
  // }
  // .thirteen {
  //   top: -230px;
  //   right: 681px;
  // }
  // .fourteen {
  //   top: -230px;
  //   right: 580px;
  // }
  // .fifteen {
  //   top: -230px;
  //   right: 247px;
  // }
  // .sixteen {
  //   top: -230px;
  //   right: 45px;
  // }
}

/* Chrome, Safari, Opera */
// @-webkit-keyframes mymove {
//     50% {opacity: 0;}
// }

/* Standard syntax */
// @keyframes mymove {
//     50% {opacity: 0;}
//     // 100% {opacity: 0;}
// }
// .oneShade{

//     opacity: 1;
//      -webkit-animation: mymove 3s infinite; /* Chrome, Safari, Opera */
//     animation: mymove 3s infinite;
//     animation-delay:2s;
// }
// 下载和图表按钮外部盒子公用样式样式
.download-btn-wrap {
  position: absolute;
  z-index: 1;
  right: 218px;
  bottom: 120px;
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  background: url("../assets/img/langbtnbgi.png") no-repeat;
  // 下载按钮样式
  .download {
    padding: 0;
    margin-top: 5px;
    font-size: 36px;
    color: #0b55b4;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    box-shadow: -4px 2px 4px 2px #0d1d33;
  }
  // 图表按钮样式
  .chart {
    padding: 0;
    margin-top: 5px;
    font-size: 26px;
    color: #0b55b4;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    box-shadow: -4px 2px 4px 2px #0d1d33;
  }
}

// 下载按钮弹出窗口样式
.block {
  display: flex;
  justify-content: center;
}
// /deep/.el-dialog--center {
//   position: fixed;
//   z-index: 2200;
// }
</style>