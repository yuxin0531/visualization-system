<template>
  <div class="chart-wrap">
    <div class="output-chart-wrap">
      <div class="identification">
        <span class="title1">日产量 :</span>
        <span class="green"></span>
        
        <span class="title2">计划产量 :</span>
        <span class="blue"></span>
      </div>
      <div ref="OutPutChart" class="output-chart"></div>
    </div>
    <div>
      <div ref="FrontDataPie" class="front-data-pie"></div>
    </div>
    <div class="electricity-chart-wrap">
      <div ref="electricity" class="electricity"></div>
    </div>
    <div class="PercentOfPass">月用电量</div>
    <div class="percent">合格率:96%</div>
    <div class="blueline">
      <img src="../../assets/img/blueline.png" alt />
    </div>
    <!-- <div class="percent">合格率:96%</div> -->
  </div>
</template>
<script>
export default {
  mounted() {
    var OutPutChart = this.$echarts.init(this.$refs.OutPutChart);
    var option = {
      title: {
        // text: "世界人口总量",
        // subtext: "数据来自网络"
      },

      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      color: ["#96db48", "#2b5ca0"],
      // legend: {
      //   data: ["日产量", "计划产量"]
      // },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, -0.1]
        // splitNumber:10,
      },
      yAxis: {
        type: "category",
        data: [
          "2020.3.15",
          "2020.3.16",
          "2020.3.17",
          "2020.3.18",
          "2020.3.19",
          "2020.3.20"
        ]
      },
      series: [
        {
          name: "日产量",
          type: "bar",
          data: [1500, 1300, 1500, 1000, 800, 1200]
        },
        {
          name: "计划产量",
          type: "bar",
          data: [1600, 1400, 1500, 1000, 900, 1200]
        }
      ]
    };
    OutPutChart.setOption(option);

    // 饼图
    //   图表开始
    // 设备标签图表数据
    var FrontDataPie = this.$echarts.init(this.$refs.FrontDataPie);
    var val1data2 = [
      {
        value: 0.04,
        name: "不合数",
        explain: ""
      },
      {
        value: 0.96,
        name: "合格数",
        explain: ""
      }
    ];
    var arr = ["达成率", 0.93, val1data2, "达 成 率"];
    var option2 = {
     
      title: {
        top: "42%",
        left: "center",
        text: arr[3],
        textStyle: {
          color: "#fff",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 50
        },
         width:"20",
        subtext: ((arr[1] * 10000) / 100).toFixed(0) + "%",
        subtextStyle: {
          color: "#fff",
          fontSize: 100,
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
      color: ["#96db48", "#2b5ca0"],
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
          color: ["#96db48"],
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
    FrontDataPie.setOption(option2);

    // 用电量
    var electricity = this.$echarts.init(this.$refs.electricity);
    var option3 = {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          boundaryGap: [0, 0.5],
          splitNumber: 15
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [
            1900,
            2012,
            2080,
            2103,
            1960,
            2049,
            2140,
            2200,
            2300,
            2470,
            2480,
            2470
          ]
        }
      ]
    };

    electricity.setOption(option3);
  }
};
</script>

<style lang="less" scoped>
.identification {
  display: flex;
  // justify-content: center;
  margin-top:-50px;
  .title1,.title2{
    font-size: 34px;
    font-weight: bold;
    letter-spacing:3px;
  }
  .green {
    margin-top:15px;
    margin-left: 20px;
    background-color: #96db48;
    width: 25px;
    height: 25px;
    margin-right:36px;
  }
  .blue {
    margin-top:15px;
    margin-left: 20px;
    background-color: #2b5ca0;
    width: 25px;
    height: 25px;
    margin-right:36px;
  }
}
.chart-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  .output-chart-wrap {
    width: 580px;
    height: 325px;
    background-color: #f1f1f1;
    margin-top: 160px;
    margin-left: 80px;
  }
}
//   图表容器样式
.output-chart {
  z-index: 2;
  height: 360px;
  width: 540px;
  position: absolute;
  top: 180px;
  left: 16px;
  margin-left: 80px;
}
//   图表容器样式
.front-data-pie {
  z-index: 100;
  height: 1010px;
  width: 1010px;
  position: absolute;
  right: 448px;
  top: -200px;
}
.PercentOfPass {
  position: absolute;
  z-index: 3;
  margin-right: 470px;
  margin-top: 20px;
}
.electricity-chart-wrap {
  width: 580px;
  height: 325px;
  background-color: #f1f1f1;
  margin-left: 616px;
  margin-top: -206px;
}
.electricity {
  z-index: 2;
  height: 360px;
  width: 500px;
  position: absolute;
  right: 110px;
  top: 2px;
}
.PercentOfPass {
  font-weight: bold;
  position: absolute;
  z-index: 2;
  top: 350px;
  right: -160px;
  font-size: 24px;
  letter-spacing:5px;
}
.percent {
  position: absolute;
  top: 490px;
  z-index: 2;
  right: 468px;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 8px;
  color: #2b5ca0;
}

.blueline {
  position: absolute;
  top: 455px;
  z-index: 1000;
  right: 662px;
}
</style>