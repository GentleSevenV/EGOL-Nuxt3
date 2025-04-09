<template>
  <div>
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/help/process.html"> 定制流程 </NuxtLink>
      <NuxtLink class="nav-item" to="/help/antifake.html"> 产品防伪 </NuxtLink>
      <NuxtLink class="nav-item active" to="/help/aftersale.html">
        产品售后
      </NuxtLink>
      <NuxtLink class="nav-item" to="/help/maintenance.html">
        维修保养
      </NuxtLink>
    </div>
    <div class="section help">
      <h2>产品售后</h2>
      <p>七心服务，只为最佳用户体验</p>
      <i>&nbsp;</i>
      <div class="content con1">
        <p>
          七心服务
          <i>&nbsp;</i>
          <span>
            易高整家定制独创“七心服务”，将售前售中售后全程服务纳入到服务规范内，不仅提供“十年质保升级为终身质保”的服务，还为老客户免费上门维护一次，以专业、完善、贴心的售后服务承诺，让您买的放心，用得安心。量”心定制，易高以此为品牌价值观，以实际行动，对品质的定义不断进行丰富、完善并与时俱进：品质不仅仅是质量。
          </span>
        </p>
      </div>
      <div class="content con2">
        <p>
          用户体验
          <i>&nbsp;</i>
          <span>
            从一个消费者日常生活的问题的洞查开始，为解决问题而度身定做的产品方案，经过精心制造，以最适宜的方式送到消费者手中，其良好的品牌形象让消费者得到产品价值外的满足，而好用实用的产品功能让消费者得到最佳的使用体验和从始至终的优质服务。
          </span>
        </p>
      </div>
    </div>
    <FreeCommon />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "产品售后",
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
    background: #f7f7f7 url(/images/help_aftersale_bg1.jpg) top left no-repeat;
    justify-content: flex-end;
    padding-right: 120px;
  }

  .con2 {
    background: #f7f7f7 url(/images/help_aftersale_bg2.jpg) top right no-repeat;
    justify-content: flex-start;
    padding-left: 120px;
  }
}
</style>
