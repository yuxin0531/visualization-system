<template>
  <div class="tricolour-light-wrap" :style="{backgroundPositionX:left+'px',backgroundPositionY:top+'px' }"></div>
</template>
<script>
export default {
  name: "tricolourlight1",
  data(){
      return {
          top:"0",
          left: "0"
      }
  }
};
</script>

<style lang="less" scoped>
.tricolour-light-wrap {
  position: absolute;
  z-index: 10;
  width: 29px;
  height: 64px;
  background: url("../../assets/img/tricolourlight.png") no-repeat;
//   background-position: 53px -119px;
}
</style>