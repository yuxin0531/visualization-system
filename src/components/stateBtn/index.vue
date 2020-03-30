<template>
<!-- 状态条 -->
  <div class="state-btn-wrap">
    <div class="state">状态:</div>
    <div class="border">
      <div class="checked"></div>
    </div>
    <div class="blue">启动</div>
    <div class="border black">
      <div class="checked" v-if="false"></div>
    </div>
    <div>停止</div>
    <div class="border black">
      <div class="checked" v-if="false"></div>
    </div>
    <div>异常</div>
  </div>
</template>
<script>
export default {
  name: "stateBtn"
};
</script>

<style lang="less" scoped>
// 状态条外部盒子样式
.state-btn-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 26px;
  font-size: 34px;
}
// 处于当前状态的状态按钮
.border {
  display: flex;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #0b55b4;
  align-items: center;
    // 处于当前状态中间的圆形样式
  .checked {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: #0b55b4;
  }
}
// 未处于当前状态的按钮样式
.black {
  border: 2px solid black;
}
// 选中的按钮的蓝色字体
.blue {
  color: #0b55b4;
}
// 所有div设置margin-left
div {
  margin-left: 80px;
}
// 把不需要margin-left的div取消
.checked,.state,.state-btn-wrap {
  margin-left: 0;
}
</style>