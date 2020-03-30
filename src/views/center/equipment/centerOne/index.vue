<template>
  <div class="front-machine-wrap">
    <div class="machine-center">
      <div class="machine-img">
        <div
          class="alarm"
          v-for="(item,index) in alarmList"
          :key="index"
          :style="{bottom:(index+1)*20+index*20+'px'}"
        >{{item.alarm}}</div>
        <!-- 模组线状态组件 -->
        <moduleLineStateBtn></moduleLineStateBtn>
        <!-- <img src="../../../../assets/img/heelSettingMachine.png" alt=""> -->
        <div class="parameter">
          <span>产能:</span>
          <span>1200</span>
          <span>Pair</span>
          <span>能耗:</span>
          <span>50</span>
          <span>KWH</span>
        </div>
      </div>
      <div class="machine-data">
        <!-- 设备名称 -->
        <div class="machineName">{{machineName}}</div>
        <!-- 设备状态 -->
        <div class="state">
          <el-tabs type="border-card" class="switchover">
            <el-tab-pane label="①">
              <!--设备数据  -->
              <ul class="row">
                <li>
                  <span class="dataTitle">烘烤时间设定值</span>
                  <span>{{setBakingTimeOne}}</span>
                  <span>S</span>
                </li>
                <li>
                  <span class="dataTitle">烘烤时间实际值</span>
                  <span>{{BakingTimeOne}}</span>
                  <span>S</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">上层温度设定值</span>
                  <span>{{setTopTemperatureOne}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">上层实际温度值</span>
                  <span>{{setBottomTemperatureOne}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">下层温度设定值</span>
                  <span>{{TopTemperatureOne}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">下层实际温度值</span>
                  <span>{{BottomTemperatureOne}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="②">
              <!--设备数据  -->
              <ul class="row">
                <li>
                  <span class="dataTitle">烘烤时间设定值</span>
                  <span>{{setBakingTimeTwo}}</span>
                  <span>S</span>
                </li>
                <li>
                  <span class="dataTitle">烘烤时间实际值</span>
                  <span>{{BakingTimeTwo}}</span>
                  <span>S</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">上层温度设定值</span>
                  <span>{{setTopTemperatureTwo}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">上层实际温度值</span>
                  <span>{{setBottomTemperatureTwo}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">下层温度设定值</span>
                  <span>{{TopTemperatureTwo}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">下层实际温度值</span>
                  <span>{{BottomTemperatureTwo}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="③">
              <!--设备数据  -->
              <ul class="row">
                <li>
                  <span class="dataTitle">烘烤时间设定值</span>
                  <span>{{setBakingTime}}</span>
                  <span>S</span>
                </li>
                <li>
                  <span class="dataTitle">烘烤时间实际值</span>
                  <span>{{BakingTime}}</span>
                  <span>S</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">上层温度设定值</span>
                  <span>{{setTopTemperature}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">上层实际温度值</span>
                  <span>{{TopTemperature}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li>
                  <span class="dataTitle">下层温度设定值</span>
                  <span>{{setBottomTemperature}}</span>
                  <span>℃</span>
                </li>
                <li>
                  <span class="dataTitle">下层实际温度值</span>
                  <span>{{BottomTemperature}}</span>
                  <span>℃</span>
                </li>
              </ul>
              <ul class="row">
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
                <li class="empty">
                  <span class="dataTitle"></span>
                  <span></span>
                  <span></span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleLineStateBtn from "../../../../components/moduleLineStateBtn";
export default {
  components: {
    moduleLineStateBtn
  },
  data() {
    return {
      // 机器数据
      machineName: "模组线",
      // 第一个
      setBakingTimeOne: 180.2,
      BakingTimeOne: 170.2,
      setTopTemperatureOne: 60.2,
      setBottomTemperatureOne: 60.2,
      TopTemperatureOne: 60.2,
      BottomTemperatureOne: 60.2,
      // 第二个
      setBakingTimeTwo: 180.1,
      BakingTimeTwo: 170.1,
      setTopTemperatureTwo: 60.1,
      setBottomTemperatureTwo: 60.1,
      TopTemperatureTwo: 60.1,
      BottomTemperatureTwo: 60.1,
      // 第三个
      setBakingTime: 180,
      BakingTime: 170,
      setTopTemperature: 60,
      setBottomTemperature: 60,
      TopTemperature: 60,
      BottomTemperature: 60,
      // 警报列表
      alarmList: [{ alarm: "温度异常报警" }]
    };
  }
};
// 1825 544
</script>

<style lang="less" scoped>
.front-machine-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .machine-center {
    display: flex;
    justify-content: space-between;
    width: 1825px;
    height: 540px;
    // 左侧设备图
    .machine-img {
      position: relative;
      width: 781px;
      height: 540px;
      background: url("../../../../assets/img/Moduleline.png") no-repeat;
      // 报警信息样式
      .alarm {
        position: absolute;
        left: 22px;
        font-size: 27px;
        color: #ffff00;
        font-weight: bold;
      }
      // 图片上的数据
      .parameter {
        font-size: 34px;
        display: flex;
        justify-content: space-around;
        margin-top: 22px;
      }
    }
    // 右侧设备参数
    .machine-data {
      right: 0;
      width: 988px;
      height: 540px;
      // 右侧下部设备名称
      .machineName {
        width: 100%;
        height: 80px;
        background-color: #ccc;
        border-radius: 10px;
        margin-bottom: 14px;
        text-align: center;
        line-height: 80px;
        font-size: 44px;
      }
      // 设备状态
      .state {
        width: 100%;
        height: 70px;
        background-color: #ccc;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        // elementui tab栏切换样式修改
        .switchover {
          width: 100%;
          /deep/ .el-tabs__item {
            font-size: 40px;
            height: 70px;
            width: 330px;
            text-align: center;
            // color:#0b55b4;
            line-height: 56px;
            // background-color: #fff;
            // color:blue;
          }
          /deep/.el-tabs__content {
            padding: 0;
          }
        }
      }
      //每行的样式
      .row {
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        li {
          box-sizing: border-box;
          padding: 20px;
          background-color: #ccc;
          border-radius: 5px;
          width: 470px;
          height: 70px;
          display: flex;
          justify-content: space-between;
          span {
            margin-bottom: 4px;
            // margin-top: 8px;
            display: flex;
            align-items: center;
            font-size: 34px;
          }
          // 数据标题样式
          .dataTitle {
            // margin: 0;
            width: 252px;
          }
        }
        // 空的单元格
        .empty {
          background-color: #e6e6e6;
        }
      }
    }
  }
}
</style>