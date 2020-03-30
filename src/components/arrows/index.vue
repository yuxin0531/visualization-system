<template>
  <!-- 箭头 -->
  <div class="arrows-wrap">
    <div class="left" @click="up" v-show="upShow">
      <img src="../../assets/img/left.png" alt />
    </div>
    <div class="right" @click="down" v-show="downShow">
      <img src="../../assets/img/right.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "arrows",
  data(){
      return {
        // 控制箭头显示隐藏组件的初始数据
          upShow:true,
          downShow:true,
      }
  },
//   实例挂载前进行箭头显示隐藏判断
  beforeMount: function(){
      if(this.$route.path==="/front"){
          this.upShow=false
      } else if (this.$route.path==="/rear"){
          this.downShow=false
      }
  },
  methods: {
    //   上一段箭头判断
    up() {
      if (this.$route.path === "/center") {
        this.$router.push("/front");
      } else if (this.$route.path === "/rear") {
        this.$router.push("/center");
      }
    },
    //   下一段箭头判断
    down() {
      if (this.$route.path === "/center") {
        this.$router.push("/rear");
      } else if (this.$route.path === "/front") {
        this.$router.push("/center");
      }
    }
  }
};
</script>

<style lang="less" scoped>
// 箭头
.arrows-wrap {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  // 左右箭头公共样式
  .left,
  .right {
      cursor: pointer;
    position: absolute;
    z-index: 10;
  }
  //   左箭头公共样式
  .left {
    left: 0;
  }
  // 右箭头公共样式
  .right {
    right: 0;
  }
}
</style>