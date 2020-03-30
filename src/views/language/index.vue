<template>
  <div class="lang-choose-wrap">
    <div class="lang-choose">
      <div class="flag">
        <div
          :class="{flagBgi:index==current}"
          v-for="(item,index) in flagImgList"
          :key="index"
          @click="btnBgiShow(index)"
        >
          <img :src="item.url" alt />
        </div>
      </div>
      <div class="lang-bigbtn-wrap">
        <div class="lang-btn-bgi" @click="BigLangBtn">
          <el-button circle class="lang-big-btn iconfont">&#xe6ad;</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    // 接受父组修改小按钮显示隐藏的值
    props:['isShow'],
  data() {
    return {
      //   切换国旗标的初始值
      current: 0,
      //   国旗图片
      flagImgList: [
        {
          url: require("../../assets/img/china.png")
        },
        {
          url: require("../../assets/img/english.png")
        },
        {
          url: require("../../assets/img/cambodia.png")
        }
      ]
    };
  },
  methods:{
    // 控制选中的国旗语言
     btnBgiShow(index) {
      this.current = index;
    },
    BigLangBtn(){
      // this.$router.push('/index')
      this.$router.back(-1)
      // 像父组件传递一个修改isShow的值
      this.$emit('success',true);
    }
  }
};
</script>

<style lang="less" scoped>
// 语言切换界面
.lang-choose-wrap {
  // 语言切换
  width: 100%;
  .lang-choose {
    height: 100%;
    .flag {
      height: 130px;
      display: flex;
      align-items: center;
      //    position:;
      margin: 30px 0 0 28px;
      position: absolute;
      div {
        margin-left: 38px;
        float: left;
        img {
          width: 198px;
          height: 106px;
        }
      }
    }
  }
  // 国旗背景图
  .flagBgi {
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 224px;
    height: 124px;
    background: url("../../assets/img/flagbgi.png") no-repeat;
  }
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