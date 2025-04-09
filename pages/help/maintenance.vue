<template>
  <div>
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/help/process.html"> 定制流程 </NuxtLink>
      <NuxtLink class="nav-item" to="/help/antifake.html"> 产品防伪 </NuxtLink>
      <NuxtLink class="nav-item" to="/help/aftersale.html"> 产品售后 </NuxtLink>
      <NuxtLink class="nav-item active" to="/help/maintenance.html">
        维修保养
      </NuxtLink>
    </div>
    <div class="section help">
      <h2>保养与维修</h2>
      <p>时用时新，除了产品还有更多优质服务</p>
      <i>&nbsp;</i>
      <div class="content con1">
        <p>
          清洁保养
          <i>&nbsp;</i>
          <span>
            板材表面为三聚氰胺饰面，如有污渍，请采用清洁液擦拭。再用湿热毛巾擦一遍，最后用干毛巾擦拭。严禁用钢丝球等利器擦拭，封边处严禁水泡，以防起鼓。同时选用腐蚀性小的清洁液清洁产品表面。为保证衣柜移门的清洁，轨道内如有杂物，尘土请用毛刷清理。严防重物及锐器砸碰轨道，以防轨道内部发生破损，影响滑动效果。
          </span>
        </p>
      </div>
      <div class="content con2">
        <p>
          质保十年，终身维护
          <i>&nbsp;</i>
          <span>
            自购货日起，易高整家定制将为您所购产品提供保修期内的保修服务。当您发现产品有任何质量问题，请您联系当地经销商。您还可以通过拨打易高服务热线400-0579-889、关注“易高家居”官方微信等多渠道与我们直接联系。任何机构和人员（如经销商）在本服务承诺之外就您购买的产品向您做出的任何额外承诺，易高整家定制不承担任何责任。
          </span>
        </p>
      </div>
    </div>
    <FreeCommon />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "保养与维修",
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

.help {
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

  .content {
    height: 396px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
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

  .con1 {
    background: #f7f7f7 url(/images/help_maintenance_bg1.jpg) top left no-repeat;
    justify-content: flex-end;
    padding-right: 120px;
  }

  .con2 {
    background: #f7f7f7 url(/images/help_maintenance_bg2.jpg) top right
      no-repeat;
    justify-content: flex-start;
    padding-left: 120px;
  }
}
</style>
