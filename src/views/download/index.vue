<template>
  <div class="lang-choose-wrap">
    <div class="lang-choose">
      <div class="block">
        <el-date-picker
          class="date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          v-model="value2"
        ></el-date-picker>
      </div>
      <div class="lang-bigbtn-wrap">
        <div class="lang-btn-bgi" @click="BigDownloadBtn">
          <el-button circle class="lang-big-btn iconfont">&#xe660;</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 接受父组修改小按钮显示隐藏的值
  props: ["downloadSuccess"],
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value2: ""
    };
  },
  methods: {
    BigDownloadBtn() {
      // this.$router.push('/index')
      this.$router.back(-1);
      // 像父组件传递一个修改isShow的值
      this.$emit("downloadSuccess", true);
    }
  }
};
</script>

<style lang="less" scoped>
.date {
  margin-top: 80px;
  margin-bottom: 80px;
}
//控制日期的样式
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 600px;
  height: 80px;
}
/deep/.el-date-editor .el-range-input,
.el-date-editor .el-range-separator {
  line-height: 30px;
  width: 100%;
}
/deep/.el-date-editor .el-range-separator {
  line-height: 74px;
  font-size: 30px;
}
/deep/.el-date-editor .el-range-input,
.el-date-editor .el-range-separator {
  font-size: 30px;
}
/deep/.el-date-editor .el-range__icon {
  font-size: 30px;
  position: absolute;
  z-index: 5;
  line-height: 78px;
}
// 语言切换界面
.lang-choose-wrap {
  // 语言切换大按钮样式
  .lang-bigbtn-wrap {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // 按钮背景
    .lang-btn-bgi {
      width: 211px;
      height: 211px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/img/langbigbtnbgi.png") no-repeat;
      //   按钮内部
      .lang-big-btn {
        display: flex;
        justify-content: center;
        width: 185px;
        height: 185px;
        font-size: 98px;
        color: #0b55b4;
        box-shadow: -4px 12px 20px 8px #0d1d33;
      }
    }
  }
}
</style>