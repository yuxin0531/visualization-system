<template>
  <div class="production-line-wrap">
    <!--整条生产线 -->
    <div
      class="production-line"
      v-for="(item,index) in productionLineList"
      :key="index"
      @click="details(item.methods)"
    >
      <img :src="item.url" alt />
      <!-- <ground></ground> -->
      <!-- <ground class="b"></ground>
      <ground class="c"></ground>-->
    </div>
    <!-- 点击闪烁块 -->
    <ground1></ground1>
    <!-- 链接灯的虚线 -->
    <div class="dotted">
      <img src="../../assets/img/dotted.png" alt />
    </div>
    <!-- <tricolourlight1
      :class="item.name"
      v-for="(item) in tricolourLightList"
      :key="item.name"
      class="tricolour-light-commonality"
    ></tricolourlight1>-->
    <!-- <tricolourlight :class="item.name" v-for="(item) in tricolourLightList" :key="item.name"></tricolourlight> -->
    <!-- 16盏三色灯 -->
    <tricolourlightOne
      class="one tricolour-light-commonality"
      :tricolourlightOne="tricolourlightOne"
    ></tricolourlightOne>
    <tricolourlightTwo
      class="two tricolour-light-commonality"
      :tricolourlightTwo="tricolourlightTwo"
    ></tricolourlightTwo>
    <tricolourlightThree
      class="three tricolour-light-commonality"
      :tricolourlightThree="tricolourlightThree"
    ></tricolourlightThree>
    <tricolourlightFour
      class="four tricolour-light-commonality"
      :tricolourlightFour="tricolourlightFour"
    ></tricolourlightFour>
    <tricolourlightFive
      class="five tricolour-light-commonality"
      :tricolourlightFive="tricolourlightFive"
    ></tricolourlightFive>
    <tricolourlightSix
      class="six tricolour-light-commonality"
      :tricolourlightSix="tricolourlightSix"
    ></tricolourlightSix>
    <tricolourlightSeven
      class="seven tricolour-light-commonality"
      :tricolourlightSeven="tricolourlightSeven"
    ></tricolourlightSeven>
    <tricolourlightEight
      class="eight tricolour-light-commonality"
      :tricolourlightEight="tricolourlightEight"
    ></tricolourlightEight>
    <tricolourlightNine
      class="nine tricolour-light-commonality"
      :tricolourlightNine="tricolourlightNine"
    ></tricolourlightNine>
    <tricolourlightTen
      class="ten tricolour-light-commonality"
      :tricolourlightTen="tricolourlightTen"
    ></tricolourlightTen>
    <tricolourlightEleven
      class="eleven tricolour-light-commonality"
      :tricolourlightEleven="tricolourlightEleven"
    ></tricolourlightEleven>
    <tricolourlightTwelve
      class="twelve tricolour-light-commonality"
      :tricolourlightTwelve="tricolourlightTwelve"
    ></tricolourlightTwelve>
    <tricolourlightThirteen
      class="thirteen tricolour-light-commonality"
      :tricolourlightThirteen="tricolourlightThirteen"
    ></tricolourlightThirteen>
    <tricolourlightFourteen
      class="fourteen tricolour-light-commonality"
      :tricolourlightFourteen="tricolourlightFourteen"
    ></tricolourlightFourteen>
    <tricolourlightFifteen
      class="fifteen tricolour-light-commonality"
      :tricolourlightFifteen="tricolourlightFifteen"
    ></tricolourlightFifteen>
    <tricolourlightSixteen
      class="sixteen tricolour-light-commonality"
      :tricolourlightSixteen="tricolourlightSixteen"
    ></tricolourlightSixteen>
  </div>
</template>

<script>
// import tricolourlight from "../../components/tricolourlight";
// import tricolourlight1 from "../../components/tricolourlight1";
// 导入16盏三色灯组件
import tricolourlightOne from "../../components/tricolourlightOne";
import tricolourlightTwo from "../../components/tricolourlightTwo";
import tricolourlightThree from "../../components/tricolourlightThree";
import tricolourlightFour from "../../components/tricolourlightFour";
import tricolourlightFive from "../../components/tricolourlightFive";
import tricolourlightSix from "../../components/tricolourlightSix";
import tricolourlightSeven from "../../components/tricolourlightSeven";
import tricolourlightEight from "../../components/tricolourlightEight";
import tricolourlightNine from "../../components/tricolourlightNine";
import tricolourlightTen from "../../components/tricolourlightTen";
import tricolourlightEleven from "../../components/tricolourlightEleven";
import tricolourlightTwelve from "../../components/tricolourlightTwelve";
import tricolourlightThirteen from "../../components/tricolourlightThirteen";
import tricolourlightFourteen from "../../components/tricolourlightFourteen";
import tricolourlightFifteen from "../../components/tricolourlightFifteen";
import tricolourlightSixteen from "../../components/tricolourlightSixteen";
// import ground from "../../components/ground";
// 闪烁的黑色背景
import ground1 from "../../components/ground1";

export default {
  components: {
    // 三色灯组件
    // tricolourlight,
    // tricolourlight1,
    tricolourlightOne,
    tricolourlightTwo,
    tricolourlightThree,
    tricolourlightFour,
    tricolourlightFive,
    tricolourlightSix,
    tricolourlightSeven,
    tricolourlightEight,
    tricolourlightNine,
    tricolourlightTen,
    tricolourlightEleven,
    tricolourlightTwelve,
    tricolourlightThirteen,
    tricolourlightFourteen,
    tricolourlightFifteen,
    tricolourlightSixteen,
    // 闪烁背景组件
    // ground,
    ground1
  },
  data() {
    return {
      // 初始化三色灯的颜色的数据值
      tricolourlightOne: "",
      tricolourlightTwo: "",
      tricolourlightThree: "",
      tricolourlightFour: "",
      tricolourlightFive: "",
      tricolourlightSix: "",
      tricolourlightSeven: "",
      tricolourlightEight: "",
      tricolourlightNine: "",
      tricolourlightTen: "",
      tricolourlightEleven: "",
      tricolourlightTwelve: "",
      tricolourlightThirteen: "",
      tricolourlightFourteen: "",
      tricolourlightFifteen: "",
      tricolourlightSixteen: "",
      websock: null,
      // ground1Show: false,
      //  生产线图片
      productionLineList: [
        {
          // 前段图片
          url: require("../../assets/img/productionline-front.png"),
          methods: "front"
        },

        {
          // 中段图片
          url: require("../../assets/img/productionline-centre.png"),
          methods: "center"
        },
        {
          // 后段图片
          url: require("../../assets/img/productionline-rear.png"),
          methods: "rear"
        }
      ],
      //   三色灯动态添加的类名数组
      tricolourLightList: [
        {
          name: "one"
        },
        {
          name: "two"
        },
        {
          name: "three"
        },
        {
          name: "four"
        },
        {
          name: "five"
        },
        {
          name: "six"
        },
        {
          name: "seven"
        },
        {
          name: "eight"
        },
        {
          name: "nine"
        },
        {
          name: "ten"
        },
        {
          name: "eleven"
        },
        {
          name: "twelve"
        },
        {
          name: "thirteen"
        },
        {
          name: "fourteen"
        },
        {
          name: "fifteen"
        },
        {
          name: "sixteen"
        }
      ]
    };
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://192.168.100.22:8000/pusher?ch=0&push=line&data=debug";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    //  websocketonopen(){ //连接建立之后执行send方法发送数据
    //     let actions = {"test":"12345"};
    //     this.websocketsend(JSON.stringify(actions));
    //   },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(e.data);
      // console.log(redata.data.lamp[0]);
      // 获取每个灯状态的数组,从父组件传的子组件
      this.tricolourlightOne = redata.data.lamp[0];
      this.tricolourlightTwo = redata.data.lamp[1];
      this.tricolourlightThree = redata.data.lamp[2];
      this.tricolourlightFour = redata.data.lamp[3];
      this.tricolourlightFive = redata.data.lamp[4];
      this.tricolourlightSix = redata.data.lamp[5];
      this.tricolourlightSeven = redata.data.lamp[6];
      this.tricolourlightEight = redata.data.lamp[7];
      this.tricolourlightNine = redata.data.lamp[8];
      this.tricolourlightTen = redata.data.lamp[9];
      this.tricolourlightEleven = redata.data.lamp[10];
      this.tricolourlightTwelve = redata.data.lamp[11];
      this.tricolourlightThirteen = redata.data.lamp[12];
      this.tricolourlightFourteen = redata.data.lamp[13];
      this.tricolourlightFifteen = redata.data.lamp[14];
      this.tricolourlightSixteen = redata.data.lamp[15];
      // console.log(this.tricolourlightOne);
    },

    // 点击进去前，中，后段详情事件
    details(detailsWords) {
      this[detailsWords]();
    },
    front() {
      this.$router.push("/front");
      // this.isShow= false
    },
    center() {
      this.$router.push("/center");
      // this.isShow= false
    },
    rear() {
      this.$router.push("/rear");
      // this.isShow= false
    }
  },
  // 调用WebSocket函数
  created() {
    this.initWebSocket();
    // if (this.$route.path === "/home") {
    //   this.ground1Show = true;
    // } else {
    //   this.ground1Show = false;
    // }
  },
  // updated() {
  //   if (this.$route.path === "/home") {
  //     this.ground1Show = true;
  //   }else{
  //      this.ground1Show = false;
  //   }
  // },
  //离开路由之后断开websocket连接
  destroyed() {
    this.websock.close(); 
  }
};
</script>

<style lang="less" scoped>
// 生产线图
.production-line-wrap {
  position: absolute;
  bottom: 118px;
  display: flex;
  justify-content: center;

  .production-line {
    cursor: pointer;
    position: relative;
    z-index: 3;
    // align-items: center;
    img {
      position: relative;
      z-index: 3;
    }
  }
  //   连接灯的虚线的样式
  .dotted {
    position: absolute;
    bottom: 34px;
  }
  // 三色灯位置公共样式
  .tricolour-light-commonality {
    top: -262px;
  }
  //   16盏三色灯动态添加的位置
  .one {
    left: 28px;
  }
  .two {
    left: 119px;
  }
  .three {
    left: 209px;
  }
  .four {
    left: 345px;
  }
  .five {
    left: 431px;
  }
  .six {
    left: 495px;
  }
  .seven {
    left: 611px;
  }
  .eight {
    left: 683px;
  }
  .nine {
    left: 755px;
  }
  .ten {
    left: 868.5px;
  }
  .eleven {
    left: 950px;
  }
  .twelve {
    right: 846px;
  }
  .thirteen {
    right: 683px;
  }
  .fourteen {
    right: 581px;
  }
  .fifteen {
    right: 248px;
  }
  .sixteen {
    right: 47.5px;
  }
}
</style>