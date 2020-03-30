<template>
  <div class="bigBox">
    <!-- 箭头 -->
    <arrows></arrows>
    <!-- 上面数据 -->
    <div class="front-data-wrap">
      <!-- 日产量 -->
      <div class="front-data-electric">
        <div class="electric-title">日用电量:</div>
        <div class="electric-center">
          20
          <span>千瓦时</span>
        </div>
      </div>
      <!-- 人均产值 -->
      <!-- <div class="front-data-production">
        <div class="production-title">人均时产值:</div>
        <div class="production-center">
          20
          <span>双</span>
        </div>
      </div>-->
      <div class="front-data-production">
        <div class="production-title">人均时产值:</div>
        <div class="num">18</div>
        <div class="unit">双</div>
      </div>
      <div class="headcount">
        <div class="production-title">总人数:</div>
        <div class="num">9</div>
        <div class="unit">人</div>
      </div>
      <!-- 图表 -->
      <div ref="FrontDataPie" class="front-data-pie"></div>
      <div class="blueline">
        <img src="../../assets/img/blueline.png" alt />
      </div>
      <!-- 日产量/计划产量 -->
      <div class="output">
        <div class="practical-output">
          <span>日产量:</span>
          <span class="blue">1323</span>
          <span>
            <span>
              <span class="both">双</span>
            </span>
          </span>
        </div>
        <div class="plan-output">
          <span><span>
            
            <span>计划产量:</span></span></span>
          <span>
            <span>
              <span class="gray">1470</span>
            </span>
          </span>

          <span>
            <span>
              <span>
                <span>
                  <span class="both">双</span>
                </span>
              </span>
            </span>
          </span>
          <!-- <span>计划产量:</span>
          <span class="gray">1600</span>
          <span>
            <span>
              <span class="both">双</span>
            </span>
          </span> -->
        </div>
        <!-- <div class="output-title">日产量/计划产量:</div>
        <div class="output-center">
          <span class="blue">1500</span>
          <span class="gray">1600</span>
          <span class="both">双</span>
          <div class="qualified">
            <span class="qualified-title">合格率:</span>
            <span>96%</span>
          </div>
        </div>-->
        <div class="qualified">
          <span class="qualified-title">合格率:</span>
          <span>93%</span>
        </div>
      </div>
      <!-- <div class="output">
        <div class="output-title">日产量/计划产量:</div>
        <div class="output-center">
          <span class="blue">1500</span>
          <span class="gray">1600</span>
          <span class="both">双</span>
          <div class="qualified">
            <span class="qualified-title">合格率:</span>
            <span>96%</span>
          </div>
        </div>
      </div>-->
    </div>
    <div class="front-details-wrap">
      <img src="../../assets/img/rear-details.png" alt />
    </div>
    <!-- 滚动条 -->
    <scrollBar></scrollBar>
    <div class="one" @click="one"></div>
    <div class="two" @click="two"></div>
    <div class="three" @click="three"></div>
    <div class="four" @click="four"></div>
  </div>
</template>

<script>
import arrows from "../../components/arrows";
import scrollBar from "../../components/scrollBar";
export default {
  // 箭头组件
  components: {
    arrows,
    scrollBar
  },
  methods: {
    one() {
      this.$router.push("/rearOne");
    },
    two() {
      this.$router.push("/rearTwo");
    },
    three() {
      this.$router.push("/rearThree");
    },
    four() {
      this.$router.push("/rearFour");
    }
  },
  mounted() {
    //   图表开始
    // 设备标签图表数据
    var FrontDataPie = this.$echarts.init(this.$refs.FrontDataPie);
    var val1data2 = [
      {
        value: 0.07,
        name: "不合数",
        explain: ""
      },
      {
        value: 0.93,
        name: "合格数",
        explain: ""
      }
    ];
    var arr = ["达成率", 0.90, val1data2, "达成率:"];
    var option = {
      title: {
        top: "40%",
        left: "center",
        text: arr[3],
        textStyle: {
          color: "#2b5ca0",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 25
        },
        subtext: ((arr[1] * 10000) / 100).toFixed(0) + "%",
        subtextStyle: {
          color: "#2b5ca0",
          fontSize: 40
        }
      },
      tooltip: {
        trigger: "item",
        formatter: function(res) {
          if (res.componentSubType == "liquidFill") {
            return (
              res.seriesName +
              ": " +
              ((res.value * 10000) / 100).toFixed(2) +
              "%"
            );
          } else {
            return (
              '<span class="ii" style="background:' +
              res.color +
              ' "></span>' +
              res.name +
              ":<br/> " +
              res.data.value +
              " (" +
              res.percent +
              "%)<br/> " +
              res.data.explain
            );
          }
        }
      },
      //   设置外面环装颜色
      color: ["#57d2fa", "#2b5ca0"],
      series: [
        {
          type: "liquidFill",
          itemStyle: {
            normal: {
              opacity: 0.4,
              shadowBlur: 0,
              shadowColor: "blue"
            }
          },
          name: arr[0],
          data: [arr[1]],
          background: "#fff",
          color: ["#53d5ff"],
          center: ["50%", "50%"],

          backgroundStyle: {
            color: "#fff"
          },
          label: {
            normal: {
              formatter: "",
              textStyle: {
                fontSize: 12
              }
            }
          },
          outline: {
            itemStyle: {
              borderColor: "#86c5ff",
              borderWidth: 0
            },
            borderDistance: 0
          }
        },
        {
          type: "pie",
          radius: ["42%", "50%"],
          startAngle: 50, //起始角度
          hoverAnimation: false, ////设置饼图默认的展开样式
          label: {
            show: false,
            normal: {
              show: false,
              position: "center"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },

          itemStyle: {
            // 此配置
            normal: {
              borderWidth: 2,
              borderColor: "#ffffff"
            },
            emphasis: {
              borderWidth: 0,
              shadowBlur: 2,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: arr[2]
        }
      ]
    };
    FrontDataPie.setOption(option);
  }
};
</script>

<style lang="less" scoped>
.headcount{
  position: absolute;
  display: flex;
 left:650px;
 font-weight: bold;
 font-size: 36px;
 margin-top:28px;
 
 .num{
font-size: 50px;
font-weight: normal;
margin-left:120px;
color:#999999;
 margin-top: -10px;
// margin-right:20px;
 }
 .unit{
   margin-top:12px;
    font-size: 26px;
    margin-left:14px
 }
}
.bigBox {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  //   生产线图片
  .front-details-wrap {
    position: absolute;
    bottom: 36px;
  }
  // 上方数据容器
  .front-data-wrap {
    width: 1814px;
    height: 252px;
    display: flex;
    align-items: center;
    justify-content: center;
    //   margin-left: -60px;

    //   日用电量和人均时产值公共样式
    .front-data-electric,
    .front-data-production {
      width: 400px;
      height: 212px;
      background: url("../../assets/img/electricbgi.png") no-repeat;
      margin-right: 30px;
      font-size: 36px;

      // 日用电量和人均时产值标题公共样式
      .electric-title,
      .production-title {
        margin-left: 170px;
        margin-top: 50px;
        font-weight: bold;
      }
      // 人均时产值样标题样式
      .production-title {
        margin-left: 167px;
         span {
          font-size: 54px;
        }
      }
      //  日用电量和人均时产值内容公共样式
      .electric-center,
      .production-center {
        margin-left: 170px;

        font-size: 52px;
        span {
          font-size: 26px;
          font-weight: bold;
        }
      }
      // 人均时产值样内容样式
      .production-center {
        margin-left: 232px;
      }
    }

    //   人均时产值背景图
    .front-data-production {
      display: flex;
      width: 550px;
      margin-right: 0px;
      background: url("../../assets/img/productionbgi.png") no-repeat;
    .unit {
        margin-top: 64px;
        margin-left: 15px;
        font-size: 25px;
        font-weight: bold;
      }
      .num {
        margin-top: 34px;
        font-size: 54px;
        margin-left: 15px;
        color: #2b5ca0;
      }
    }

    //   图表容器样式
    .front-data-pie {
      z-index: 2;
      height: 410px;
      width: 410px;
      position: absolute;
      right: 542px;
    }
    // 蓝线
    .blueline {
      position: absolute;
      z-index: 2;
      right: 558px;
      top: 152px;
    }
    // 日产量/计划产量
    .output {
      width: 550px;
      height: 212px;
      margin-left: 280px;
      background: url("../../assets/img/yellowline.png");
      //   text-align: center;
      // .output-title {
      //   font-weight: bold;
      //   font-size: 36px;
      //   text-align: center;
      //   margin-top: 50px;
      // }
      // span {
      //   font-size: 52px;
      //   margin-right: 18px;
      // }
      .practical-output,
      .plan-output {
        font-weight: bold;
        font-size: 36px;
        margin-left: 38px;
        margin-top: 33px;
        .blue,
        .gray {
          margin-top: 100px;
          font-weight: normal;
          font-size: 58px;
          color: #2b5ca0;
          margin-left: 98px;
        }
        .gray {
          margin-left: 60px;
          color: #999999;
        }
        .both {
          // line-height: 100px;
          font-weight: bold;
          font-size: 26px;
          margin-left: 20px;
          margin-top: 20px;
        }
      }
      .plan-output {
        margin-top: -22px;
        margin-left: 40px;
      }
      .qualified {
        margin-left: 56px;
        .qualified-title {
          letter-spacing: 12px;
        }
        span {
          color: #9ad15c;
          margin-top: 28px;
          font-size: 26px;
          font-weight: bold;
        }
      }
    }
  }
  // 点击热点公共样式
  .one,
  .two,
  .three,
  .four {
    position: absolute;
    z-index: 20;
    cursor: pointer;
    // background-color: #000;
    // opacity: 0.5;
  }
  // 热点单个样式
  .one {
    z-index: 100;
    width: 160px;
    height: 82px;
    left: 40px;
    top: 412px;
  }
  .two {
    width: 354px;
    height: 180px;
    left: 201px;
    bottom: 24px;
  }
  .three {
    width: 1334px;
    height: 136px;
    right: 30px;
    bottom: 74px;
  }
  .four {
    width: 143px;
    z-index: 21;
    height: 100px;
    right: 496px;
    bottom: 120px;
  }
}
</style>