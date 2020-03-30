<template>
<!-- 3块闪烁块 -->
  <div class="ground-wrap">
    <div class="groundOne"></div>
    <div class="groundTwo"></div>
    <div class="groundThree"></div>
  </div>
</template>

<script>
// 导入jq
import $ from "jquery";
export default {
  name: "ground1",
  // data() {
  //   return {
  //     // groundOneShow: false,
  //     // groundTwo: false,
  //     // groundThree: false
  //     // // a: "",
  //     // timer1: null,
  //     clear: "",
  //     arr: []
  //   };
  // },
  // created() {
  //   //   // console.log(this.timer1);
  //   //  this.timer1 = setTimeout(this.a, 0);
  //   //   // console.log(this.timer1);
  //   //   this.groundOneShow = true,
  //   //        this.groundTwo = true,
  //   //    this.groundThree = true;
  // },
  // created() {
  //   if (this.$route.path === "/home") {
  //     window.timer1 = setTimeout(this.a, 2000);
  //     if (window.timer1) {
  //       this.arr.push(window.timer1);
  //       // console.log(this.arr)
  //     }
  //   }
  //   // console.log(this.timer1);
  // },
  // beforeDestroy() {
  //   console.log(this.arr);
  //   if (window.timer1) {
  //     this.arr.push(window.timer1);
  //     // console.log(this.arr)
  //     for (let val of this.arr) {
  //       console.log(val);
  //       clearTimeout(val);
  //     }
  //   }
  // },
  created() {

    if (this.$route.path === "/home") {
      this.timer1 = setTimeout(this.a, 2000);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer1);
  },
  // 调用闪烁动画
  // mounted() {
  //   this.a();
  // },
  methods: {
    // 灯闪烁动画
    a() {
      $(".groundOne").animate({ opacity: "1" }, "2000");
      $(".groundOne").animate({ opacity: "0.5" }, "2000");
      $(".groundOne").animate({ opacity: "0" }, "2000");
      $(".groundOne").animate({ opacity: "0.5" }, "2000");
      $(".groundOne").animate({ opacity: "1" }, "2000");
      $(".groundOne").animate({ opacity: "0.5" }, "2000");
      $(".groundOne").animate({ opacity: "0" }, "2000", () => {
        $(".groundTwo").animate({ opacity: "1" }, "2000");
        $(".groundTwo").animate({ opacity: "0.5" }, "2000");
        $(".groundTwo").animate({ opacity: "0" }, "2000");
        $(".groundTwo").animate({ opacity: "0.5" }, "2000");
        $(".groundTwo").animate({ opacity: "1" }, "2000");
        $(".groundTwo").animate({ opacity: "0.5" }, "2000");
        $(".groundTwo").animate({ opacity: "0" }, "2000", () => {
          $(".groundThree").animate({ opacity: "1" }, "2000");
          $(".groundThree").animate({ opacity: "0.5" }, "2000");
          $(".groundThree").animate({ opacity: "0" }, "2000");
          $(".groundThree").animate({ opacity: "0.5" }, "2000");
          $(".groundThree").animate({ opacity: "1" }, "2000");
          $(".groundThree").animate({ opacity: "0.5" }, "2000");
          $(".groundThree").animate({ opacity: "0" }, "2000", () => {
            // this.a();
          });
        });
      });
    }
  }

  // activated () {

  //     //     this.groundOneShow = true,
  //     //       this.groundTwo = true,
  //     //       this.groundThree = true;
  //      console.log(this.timer1);
  //     clearTimeout(this.timer1);
  //     console.log(this.timer1);
  //     // this.timer1 = null;

  //   // else {
  //   //     this.groundOneShow = false,
  //   //       this.groundTwo = false,
  //   //       this.groundThree = false;
  //   //   }
  // }

  // beforeDestroy: function() {
  // this.groundOneShow = false,
  // this.groundTwo = false,
  // this.groundThree = false;
  //   console.log("aaaa");
  //   $(".groundOne").stop();
  //   $(".groundTwo").stop();
  //   $(".groundThree").stop();
  // //   // console.log("aaaa");
  // clearTimeout(this.timer1);
  // //   // console.log(this.timer1);
  // //   // this.timer1 = null;
  // //   console.log(this.timer1);
  // }
};
</script>

<style lang="less" scoped>
// 3块闪烁块公共样式
.groundOne,
.groundTwo,
.groundThree {
  position: absolute;
  width: 564px;
  height: 246px;
  top: -47px;
  left: 0;
  opacity: 0;
  background-color: rgb(207, 207, 207);
}
// 第二块样式
.groundTwo {
  width: 508px;
  left: 564px;
}
// 第三块样式
.groundThree {
  width: 805px;
  left: 1072px;
}
</style>