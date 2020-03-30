<template>
  <div class="tricolour-light-wrap">
    <div class="red" :style="{backgroundPositionX:redPosition+'px'}"></div>
    <div class="green" :style="{backgroundPositionX:greenPosition+'px'}"></div>
    <div class="yellow" :style="{backgroundPositionX:yellowPosition+'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "tricolourlightFifteen",
  props: ["tricolourlightFifteen"],
  data() {
    return {
      redPosition: "",
      greenPosition: "",
      yellowPosition: ""
    };
  },
  watch: {
    tricolourlightFifteen: {
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
};
</script>

<style lang="less" scoped>
.tricolour-light-wrap {
  position: absolute;
  z-index: 10;
}
.red,
.green,
.yellow {
  position: absolute;
  width: 29px;
  height: 34px;
  background-position-y: 0;
}
.red {
  position: absolute;
  z-index: 2;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  // background-position-x: -33px;
}
.green {
  width: 29px;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  height: 34px;
  // background-position-x: -134px;
  top: 16px;
  z-index: 1;
}
.yellow {
  width: 29px;
  background: url("../../assets/img/tricolourlightSingle.png") no-repeat;
  height: 34px;
  // background-position-x: -234px;
  top: 32px;
}
</style>