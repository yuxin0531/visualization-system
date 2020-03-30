<template>
  <div class="front-machine-wrap">
    <div class="machine-center">
      <div class="machine-img">
        <!-- <img src="../../../../assets/img/heelSettingMachine.png" alt=""> -->
      </div>
      <div class="machine-data">
        <div class="machineName">{{machineName}}</div>
        <div class="state">
          <stateBtn></stateBtn>
        </div>
        <ul class="row">
          <li>
            <span class="dataTitle">设定温度</span>
            <span>{{setTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">左上设定摸温度</span>
            <span>{{leftTopSetTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">左上模温度</span>
            <span>{{leftTopTemperature}}</span>
            <span>℃</span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">温度</span>
            <span>{{temperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">左下设定模温度</span>
            <span>{{leftBottomSetTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">左下模温度</span>
            <span>{{leftBottomTemperature}}</span>
            <span>℃</span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">压着时间</span>
            <span>{{underdraughtTime}}</span>
            <span>S</span>
          </li>
          <li>
            <span class="dataTitle">右上设定模温度</span>
            <span>{{rightTopSetTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">右上模温度</span>
            <span>{{rightTopTemperature}}</span>
            <span>℃</span>
          </li>
        </ul>
        <ul class="row">
          <li>
            <span class="dataTitle">产能</span>
            <span>{{capacity}}</span>
            <span>Pair</span>
          </li>
          <li>
            <span class="dataTitle">右下设定模温度</span>
            <span>{{rightBottomSetTemperature}}</span>
            <span>℃</span>
          </li>
          <li>
            <span class="dataTitle">右下模温度</span>
            <span>{{rightBottomTemperature}}</span>
            <span>℃</span>
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
      radio: "选中且禁用",
      machineName: "后跟定型机",
      setTemperature: 80,
      leftTopSetTemperature: 80,
      leftTopTemperature: 80,
      temperature: 80,
      leftBottomSetTemperature: 80,
      leftBottomTemperature: 80,
      underdraughtTime: 25,
      rightTopSetTemperature: 80,
      rightTopTemperature: 80,
      capacity: 2000,
      rightBottomSetTemperature: 80,
      rightBottomTemperature: 80
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

    .machine-img {
      width: 490px;
      height: 540px;
      background: url("../../../../assets/img/heelSettingMachine.png") no-repeat;
    }
    .machine-data {
      right: 0;
      width: 1278px;
      height: 540px;

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

      .state {
        width: 100%;
        height: 70px;
        background-color: #ccc;
        border-radius: 5px;
        display: flex;
        justify-content: center;
      }
      .data {
        height: 350px;
        width: 100%;
      }
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
          width: 413px;
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
      }
    }
  }
}
</style>