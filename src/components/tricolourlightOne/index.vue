<template>
  <div class="tricolour-light-wrap">
    <div class="red" :style="{backgroundPositionX:redPosition+'px'}"></div>
    <div class="green" :style="{backgroundPositionX:greenPosition+'px'}"></div>
    <div class="yellow" :style="{backgroundPositionX:yellowPosition+'px'}"></div>
  </div>
</template>

<script>
export default {
  // 子组件接收父组件传过来的灯数据
  props: ["tricolourlightOne"],
  name: "tricolourlightOne" ,
  data() {
    return {
      // 红色灯位置
      redPosition: "",
      // 绿色灯位置
      greenPosition: "",
      // 黄色灯位置
      yellowPosition: ""
    };
  },
  // 监听父组件传过来的灯数据,进行位移
  watch: {
    tricolourlightOne: {
      handler(val) {
        if (
          val.every(date => {
            return date === 0;
          })
        ) {
          this.redPosition = -67;
          this.greenPosition = -167;
          this.yellowPosition = -167;
        } else {
          if (val[0] == 0) {
            this.redPosition = -34;
          } else {
            this.redPosition = 0;
          }
          if (val[1] == 0) {
            this.greenPosition = -134;
          } else {
            this.greenPosition = -100;
          }
          if (val[2] == 0) {
            this.yellowPosition = -234;
          } else {
            this.yellowPosition = -201;
          }
        }
      },
      deep: true
    }
  }

  // created() {
  //   console.log(this.tricolourlightOne);

  //   if(this.tricolourlightOne[0]==0){
  //     this.redPosition = 0
  //   }else{
  //     this.redPosition = 33

  //   }
  //   console.log(this.redPosition);
  // },
};
</script>

<style lang="less" scoped>
// 灯的外面盒子样式
.tricolour-light-wrap {
  position: absolute;
  z-index: 10;
}
// 三色灯的公共样式
.red,
.green,
.yellow {
  position: absolute;
  width: 29px;
  height: 34px;
  background-position-y: 0;
}
// 红色灯样式
.red {
  position: absolute;
  z-index: 2;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  // background-position-x: -33px;
}
// 绿色灯样式
.green {
  width: 29px;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  height: 34px;
  // background-position-x: -100px;
  top: 16px;
  z-index: 1;
}
// 黄色灯样式
.yellow {
  width: 29px;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  height: 34px;
  // background-position-x: -234px;
  top: 32px;
}
</style>