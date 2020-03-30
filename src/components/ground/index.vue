<template>
  <div id="demo">
    <!-- <transition name="fade"> -->
    <article>
      <div class="groundOne"></div>
      <!-- <el-tag type="info" class="groundOne"></el-tag> -->
    </article>
    <!-- <div>
      <el-tag type="info" class="groundThree" :class="[!isStopThree?animationStart:animationStop]"></el-tag>
    </div>-->

    <!-- <el-tag type="info" class="groundTwo" ></el-tag>
    <el-tag type="info" class="groundThree" ></el-tag>-->
    <!-- </transition> -->
  </div>
</template>

<script>
// import anime from "animejs/lib/anime.es.js";
export default {
  name: "ground"
  //   data(){
  //       return {
  //           isStopOne:true,
  //           isStopTwo:false,
  //           isStopThree:false,
  //           animationFalse:'',
  //       }
  //   },
  //   beforeUpdate() {
  //     this.animationFalse = setInterval(()=> {
  //       this.isStopOne= false;
  //       this.isStopTwo= true;
  //     }, 7000)
  //     this.animationFalse = setInterval(()=> {
  //       this.isStopOne= false;
  //       this.isStopTwo= false;
  //       this.isStopThree =true;
  //     }, 14000)
  //     this.animationFalse = setInterval(()=> {
  //       this.isStopOne= false;
  //       this.isStopTwo= false;
  //       this.isStopThree =true;
  //     }, 21000)
  //     // this.animationTrue = setInterval(()=> {
  //     //   this.shadowShow= true
  //     // }, 25000)
  //   },
};
// 整块闪烁
// anime({
//   complete: function() {
//     anime({
//       targets: [".groundOne"],
//       loop: true,
//       background: "rgba(255, 255, 255, 0)",
//       duration: 4000,
//       easing: "linear",
//     });
//   }
// });
// 单个闪烁一次
//   anime({
//         targets: '.green',
//           loop: 4,
//         background: 'hsla(0, 100%, 100%, .2)',
//         // direction: 'alternate',
//         // easing: 'easeInOutCirc',
//         complete: function (anim) {
//             console.log(anim);
//             anime({
//                 direction: 'normal',
//                 targets: '.green',
//                 left: "240px",
//                 // direction: 'alternate',
//             background: 'hsla(0, 100%, 100%, .2)',
//                 complete: function (anim) {
//                     console.log(anim);
//                     anime({
//                         targets: '.green',
//                         left: "1000px",

//                         // direction: 'alternate',

//                         complete: function (anim) {
//                             console.log(anim);

//                         }
//                     })
//                 }
//             })
//         }
//     });
// var myAnimation = anime({
//   targets: ".groundOne",
//   translateX: "130",
//   rotate: 180,
//   borderRadius: 8,
//   duration: 2000,
//   loop: true
// });
// console.log(myAnimation.rotate);

//  anime({
//   complete: function() {
//     anime({
//       targets: [".groundOne"],
//       loop: 2,
//       background: "rgba(255, 255, 255, 0.2)",
//       duration: 2000,
//       easing: "linear",
//       direction: "reverse",
//       complete: function() {
//         anime({
//           targets: ".groundOne",
//           left: "564px",
//           width: "508px",
//           easing: "easeInOutQuad",
//           duration: 1000,
//           complete: function() {
//             anime({
//               targets: ".groundOne",
//               loop: 2,
//               background: "rgba(255, 255, 255, 0.2)",
//               duration: 2000,
//               easing: "linear",
//               direction: "reverse",
//               // direction: 'alternate',
//               complete: function() {
//                 anime({
//                   targets: ".groundOne",
//                   left: "1072px",
//                   width: "800px",
//                   easing: "easeInOutQuad",
//                   duration: 1000,
//                   // direction: 'alternate',
//                   complete: function() {
//                     anime({
//                       targets: ".groundOne",
//                       loop: 2,
//                       background: "rgba(255, 255, 255, .2)",
//                       duration: 2000,
//                       easing: "linear",
//                       // direction: 'alternate',
//                       complete: function(anim) {
//                           console.log(anim);

//                       }
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });
</script>

<style lang="less" scoped>
.groundOne {
  //  position: absolute;
  //  z-index: 1;
  cursor: pointer;
  // width: 300px;
  width: 100%;
  height: 246px;

}
/* 564 246 */
.groundOne,
.groundTwo,
.groundThree {
  position: absolute;
  // width: 564px;
  // height: 246px;
  top: -47px;
  //   left: 0;
}
.groundOne {
  left: 0;
}
// .groundTwo{
//     width: 508px;
//   left: 564px;
// }
// .groundThree{
// width: 805px;
//   left: 1072px;
// }
// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0;
// }
// .v-enter,
// .v-leave-to{
// opacity:0;
// // transform:translateX(150px)
// }
// .v-enter-active
// .v-leave-to-active{
// transform:all .8s ease;
// }

// .ground-enter-active,
// .ground-leave-active{
// transition: opacity .5s;
// }

// .ground-enter,
// .ground-leave-to{
// opacity:0;
// // transform:translateY(150px)
// }
// @keyframes groundOne {
//     0% {opacity: 0;}
//     100% {opacity: 1;}
//     // 100% {opacity: 0;}
// }
// @keyframes groundTwo {
//     0% {left:0px;}
//     100% {left:564px; width: 508px;}
//     // 100% {opacity: 0;}
// }
// // @keyframes groundThree {
// //     0% {opacity: 0;}
// //     100% {opacity: 1;}
// //     // 100% {opacity: 0;}
// // }
// @keyframes groundFour {
//     0% {left:564px; width: 508px;}
//     100% {left:1072px; width: 805px;}
//     // 100% {opacity: 0;}
// }
// .groundOne{
//     // opacity: 0;
//     //  -webkit-animation: groundOne 3s infinite; /* Chrome, Safari, Opera */
//     // animation: groundOne 3s infinite;
//     // // animation-iteration-count:2;
//     animation-name:groundOne, groundTwo, groundFour ;
//     animation-duration:3s, 2s, 2s;
//     animation-delay:0s, 6s, 14s;
//     animation-iteration-count:infinite, infinite, infinite;

// }
// @keyframes groundOne {
//     50% {opacity: 0;}
//     // 100% {opacity: 0;}
// }
// .groundOne{
//     animation-delay:0s;
//     opacity: 0.5;
//      -webkit-animation: groundOne 3s infinite; /* Chrome, Safari, Opera */
//     animation: groundOne 4s infinite;
//     // animation-delay:6s;
//     // animation-iteration-count:2;
// }
// @keyframes groundThree {
//     50% {opacity: 1;}
//     // 100% {opacity: 0;}
// }
// .groundThree{
//     animation-delay:2s;
//     opacity: 0;
//      -webkit-animation: groundThree 3s infinite; /* Chrome, Safari, Opera */
//     animation: groundThree 3s infinite;
//     animation-delay:12s;
//     // animation-iteration-count:2;
// }
</style>