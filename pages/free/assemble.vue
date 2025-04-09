<template>
  <div>
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/free/design.html">免费量尺设计</NuxtLink>
      <NuxtLink class="nav-item" to="/free/delivery.html"
        >免费标准配送</NuxtLink
      >
      <NuxtLink class="nav-item active" to="/free/assemble.html"
        >免费安装调试</NuxtLink
      >
    </div>
    <div class="section delivery">
      <h2>免费安装调试</h2>
      <p>从生产至安装全程参与，提供贴心服务</p>
      <i>&nbsp;</i>
      <div>
        <p>
          安装调试
          <i>&nbsp;</i>
          <span>
            您的订单由物流师傅配送至家，易高整家定制会为您提供免费安装调试服务，直至您的家具可以正常使用，如有尺寸不符等问题，可联系易高家居售后服务热线0551-65778313
            转96555咨询解决。
          </span>
        </p>
      </div>
    </div>
    <FreeCommon />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "免费安装调试",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制，国内超大型专注于高端全屋定制家具加盟代理及其配套产品研发、生产及销售的全屋定制家具加盟代理十大品牌厂家。易高整家定制涵盖家装目录所有软装定制产品，为全屋定制家具加盟代理服务解决方案5A级供应商。",
    },
    {
      name: "keywords",
      content: "全屋定制|易高定制家具|整家定制|定制家具|定制家具十大品牌",
    },
  ],
});
</script>

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

.delivery {
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
    background: #f7f7f7 url(/images/free_assemble_bg.jpg) top left no-repeat;
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
