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
        <!-- <img src="../../../../assets/img/heelSettingMachine.png" alt=""> -->
      </div>
      <div class="machine-data">
        <!-- 设备名称 -->
        <div class="machineName">{{machineName}}</div>
        <!-- 设备状态 -->
        <div class="state">
          <stateBtn></stateBtn>
        </div>
        <!--设备数据  -->
        <ul class="row">
          <li>
            <span class="dataTitle">设定温度</span>
            <span>{{setTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">产能</span>
            <span>{{capacity}}</span>
            <span>Pair</span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">实际温度</span>
            <span>{{temperature}}</span>
            <span>℃</span>
          </li>
          <li class="empty">
            <span class="dataTitle"></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">设定压着时间</span>
            <span>{{setUnderdraughtTime}}</span>
            <span>S</span>
          </li>
          <li class="empty">
            <span class="dataTitle"></span>
            <span></span>
            <span></span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">压着时间</span>
            <span>{{underdraughtTime}}</span>
            <span>S</span>
          </li>
          <li class="empty">
            <span class="dataTitle"></span>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import stateBtn from "../../../../components/stateBtn";
export default {
  components: {
    stateBtn
  },
  data() {
    return {
  
      // 机器数据
      machineName: "蒸湿入楦机",
      setTemperature: 80,
      temperature: 80,
      underdraughtTime: 25,
      setUnderdraughtTime: 25,
      capacity: 2000,
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
      width: 785px;
      height: 540px;
      background: url("../../../../assets/img/SteamWetmachine.png") no-repeat;
      .alarm {
        position: absolute;
        left: 22px;
        font-size: 27px;
        color: #ffff00;
        font-weight: bold;
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
      }
      //
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
            margin-bottom:4px;
            display: flex;
            align-items: center;
            font-size: 34px;
          }
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