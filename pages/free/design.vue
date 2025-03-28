<template>
  <div>
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item active" to="/free/design.html">
        免费量尺设计
      </NuxtLink>
      <NuxtLink class="nav-item" to="/free/delivery.html">
        免费标准配送
      </NuxtLink>
      <NuxtLink class="nav-item" to="/free/assemble.html">
        免费安装调试
      </NuxtLink>
    </div>
    <div class="section design">
      <h2>免费量尺设计</h2>
      <p>坚持“量”心定制理念 并以此为品牌价值观</p>
      <i>&nbsp;</i>
      <div>
        <p>
          量尺设计
          <i>&nbsp;</i>
          <span>
            易高整家定制为您提供三免服务，免费量尺设计：预约成功后，店面将与48小时内联系您，与您预约量尺时间，在量尺过程中，设计师会针对户型特点、生活习惯、居室成员、储物需求等情况与您沟通，您可把具体需求告知设计师，若您对效果图不满意，可提出相关建议，设计师将结合您的建议进行修改，使家具设计尽量符合您的预期。
          </span>
        </p>
      </div>
    </div>
    <FreeCommon />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.second-nav {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: -30px;
  background-color: #fff;
  box-shadow: 0px 10px 13px -8px #e1e1e1;
  border-bottom: none;
  height: 60px;

  .nav-item {
    width: 400px;
    text-align: center;
    color: #333;
    font-size: 16px;
    line-height: 16px;
    border-right: 1px solid #d8d8d8;
    box-sizing: border-box;

    &:nth-last-of-type(1) {
      border: none;
    }
  }

  .active {
    color: var(--theme-color);
  }
}

.design {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0 110px;

  & > h2 {
    font-size: 35px;
    color: #333;
    text-align: center;
  }

  & > p {
    font-size: 16px;
    color: #666;
    text-align: center;
    letter-spacing: 1px;
    padding: 20px 0 15px;
  }

  & > i {
    width: 80px;
    height: 20px;
    border-top: 1px solid var(--theme-color);
    display: block;
    margin: 0 auto;
  }

  & > div {
    background: #f7f7f7 url(/images/free_design_bg.jpg) top left no-repeat;
    height: 396px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    justify-content: flex-end;
    padding-right: 120px;
    margin-top: 16px;

    p {
      font-size: 22px;
      color: #333;
      font-weight: bold;
      letter-spacing: 1px;
      text-align: justify;
      width: 405px;

      i {
        width: 30px;
        height: 1px;
        border-top: 1px solid var(--theme-color);
        display: block;
        margin: 10px 0px;
      }

      span {
        font-size: 15px;
        color: #666;
        font-weight: normal;
      }
    }
  }
}
</style>
