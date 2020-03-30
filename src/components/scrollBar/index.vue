<template>
<!-- 3个滚动条 -->
  <div class="scroll-bar-wrap">
    <div class="front" :class="{green:frontGreen}"></div>
    <div class="center" :class="{green:centerGreen}"></div>
    <div class="rear" :class="{green:rearGreen}"></div>
  </div>
</template>

<script>
export default {
  name: "scrollBar",
  data() {
    return {
        // 3个判断显示隐藏的变量
      frontGreen: false,
      centerGreen: false,
      rearGreen: false
    };
  },
  //   实例挂载前进行滚动条显示隐藏判断
  beforeMount: function() {
    if (this.$route.path === "/front") {
      this.frontGreen = true;
    } else if (this.$route.path === "/center") {
      this.centerGreen = true;
    } else {
        this.rearGreen=  true
    }
  }
};
</script>

<style lang="less" scoped>
//滚动条外部盒子
.scroll-bar-wrap {
  display: flex;
  position: absolute;
  height: 10px;
  width: 1920px;
  bottom: 0;
  // 3段滚动条均分
  div {
    flex: 1;
  }
// 3段分别设置边框
  .front {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    border-left: 2px solid #ccc;
  }
  .center {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
  }
  .rear {
    border-bottom: 2px solid #ccc;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
  }
// 当前位置的样式
  .green {
    border: none;
    background-color: #9ad15c;
  }
}
</style>