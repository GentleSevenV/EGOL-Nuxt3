<template>
  <div class="backtop">
    <a
      target="_blank"
      href="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502&amp;siteToken=410b9dac4b1169822b6e70c7d40bb238"
      class="item"
    >
      <Icon class="icon" name="icons:kf" />
    </a>
    <div class="item wx">
      <a class="item-link" to=""><Icon class="icon" name="icons:wechat" /></a>
      <img src="/images/wwxin.jpg" />
    </div>
    <el-backtop :right="0" :bottom="400">
      <Icon class="icon" name="icons:backtop" />
    </el-backtop>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.backtop {
  z-index: 999;
  position: fixed;
  right: 0;
  bottom: 460px;
  height: 120px;
  width: 60px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  border-left: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;

  .item {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;

    &:hover {
      background-color: var(--theme-color);
    }

    .icon {
      font-size: 40px;
      color: #333;
    }
  }

  .wx {
    position: relative;
    border-bottom: none;

    img {
      width: 0;
      height: auto;
      position: absolute;
      top: 0px;
      right: 61px;
    }

    &:hover img {
      width: 120px;
      transition: width 0.5s;
    }
  }

  .el-backtop {
    width: 60px;
    height: 60px;
    border-radius: 0;
    box-shadow: none;
    border-left: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;

    .icon {
      font-size: 36px;
    }
  }
}
</style>
