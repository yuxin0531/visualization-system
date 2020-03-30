<template>
  <div class="tricolour-light-wrap">
    <div class="commonality-light-wrap yellow-light-wrap">
      <div class="commonality-light">
        <div class="yellow-light"></div>
      </div>
    </div>
    <div class="shade"></div>
    <div class="commonality-light-wrap green-light-wrap">
      <div class="commonality-light">
        <div class="green-light"></div>
      </div>
    </div>
    <div class="commonality-light-wrap red-light-wrap">
      <div class="commonality-light">
        <div class="red-light red-frame"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"tricolourlight",
    // props:['tricolourlight'],
    // model:{

    // }
};
</script>

<style lang="less" scoped>
.tricolour-light-wrap {
  position: absolute;
  z-index: 10;
  // top: -230px;
  // left: 32px;
    /* 公共样式 */
  .commonality-light-wrap {
    position: absolute;
    width: 26px;
    height: 32px;
    overflow: hidden;
    transform: rotate(120deg);
    margin: 0px;
  }

  .commonality-light {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
  }
  /* 控制每个色灯移动位置 */
  .red-light-wrap {
    top: -26px;
    
  }
  .green-light-wrap {
    top: -13px;
    
  }
  .yellow-light-wrap {
    top: 0;
    
  }
   /* 红 */
  .red-light,
  .green-light,
  .yellow-light {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: rotate(-60deg);
    background-color: #fb4736;
  }
   /* 绿 */
  .green-light {
    background-color: #9ad15c;
    
  }
    /* 黄 */
  .yellow-light {
    background-color: #fec90b;
  }
  // 红带色框
  // 黄带色框
  // 绿带色框

  // 红带灰框
  // 黄带灰框
  // 绿带灰框


  
}
</style>