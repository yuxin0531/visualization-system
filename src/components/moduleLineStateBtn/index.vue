<template>
  <!-- 模组线机器详情状态条 -->
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
  name: "moduleLineStateBtn"
};
</script>

<style lang="less" scoped>
// 状态条外部盒子样式
.state-btn-wrap {
  width: 100%;
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
.blue {
  color: #0b55b4;
}
// 设置全部div的margin-top和margin-left
div {
  margin-top: 18px;
  margin-left: 58px;
}
// 取消不需要margin-left的div
.checked,
.state,
.state-btn-wrap {
  margin-left: 0;
}
// 取消不需要margin-top的div
.checked {
  margin-top: 0px;
}
</style>