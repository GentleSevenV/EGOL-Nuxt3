<template>
  <div>
    <FreeHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item active" to="/others/qa.html"> Q&A </NuxtLink>
      <NuxtLink class="nav-item" to="/others/privacy.html">
        隐私与COOKIE
      </NuxtLink>
      <NuxtLink class="nav-item" to="/others/legal.html"> 法律声明 </NuxtLink>
    </div>
    <div class="qa">
      <el-tabs tab-position="left">
        <el-tab-pane label="产品品质">
          <div class="qa-con">
            <p class="question">Q：产品是否环保？</p>
            <p class="answer">
              A：我们的家具都是经过国家检测的，完全符合国家环保安全标准，符合国家强制性环保标准，不会影响到您的健康，请您放心使用。
            </p>
            <p class="question">Q：有哪些板材？</p>
            <p class="answer">
              A：我们板材分为板式与实木两种，主要包括颗粒板、多层板、实木复合、原木等等板材。
            </p>
            <p class="question">Q：生产周期是多久？</p>
            <p class="answer">
              A：生产周期会根据您所订购的材质不同而不同，具体的交货期以与您签订的合同为准。但是请您放心，我们的生产周期是在保证产品质量的情况下，尽快的交货给我们的客户。
            </p>
            <p class="question">Q：产品都是怎么封边的？</p>
            <p class="answer">
              A：柜体板全部采用德国豪迈封边机封边，PVC封边条是德国进口的瑞好品牌，并采用热溶胶涂封技术，封边一次性完成，使封边光滑、整齐、美观，密封性好，防水防潮，保证了柜体的使用寿命。
            </p>
            <p class="question">Q：套餐和图片展示的是否有色差？</p>
            <p class="answer">
              A：我们网店上传的图片都是根据实物拍摄，但拍摄时受到灯光等外界因素的影响，并且在上传图片时因为不同显示器看出的效果也会不一样，所以实物与图片是有一定颜色效果上的差别，这个是正常现象，只能保证与图片尽量相似哦！
            </p>
            <p class="question">Q：如何看是不是正品？</p>
            <p class="answer">
              A：易高家居产品外包装以及产品封边均有品牌logo,如果有疑问，你可以致电易高家居400-0579-889服务热线，提供合同编号或者姓名、电话、地址，为您提供查询服务。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品价格">
          <div class="qa-con">
            <p class="question">Q：产品怎么报价？</p>
            <p class="answer">
              A：因为定制产品的特殊性，都是需要根据您选择的款式、功能、门板材质，材料价格不同相对应的价格也不同哦，预算和报价要我们设计师和您整体沟通以后为您出方案。
            </p>
            <p class="question">Q：线上价格和线下价格有什么不一样么？</p>
            <p class="answer">
              A：线上价格和线下是一样的，线上预约可以到店优先定制，省去您的等待时间。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="订购流程">
          <div class="qa-con">
            <p class="question">Q：家具的定制流程是什么？</p>
            <p class="answer">
              A：您可以先通过网络、电话、微信等方式预约，审核通过后我们会将您的信息反馈给当地专卖店联系您为您免费量尺设计，如果您对方案满意，可以在店面交定金进行复尺，然后签订合同开始生产，生产完毕商场收到货后会为您上门安装，您现场进行验收就可以了。
            </p>
            <p class="question">Q：付款方式是什么？</p>
            <p class="answer">
              A：线全屋定制是根据顾客的房间量身订做，所以每套产品都无法适用于其他客户的房屋，无法进行二次销售，所以签订合同时都是付全款。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="量尺服务">
          <div class="qa-con">
            <p class="question">Q：设计后不满意会收费么？</p>
            <p class="answer">
              A：不收费的。只是为了不耽误您时间，在设计前设计师便会与您沟通，了解您家的装修风格及您想要的设计效果，如您不满意设计师的方案是可以提出给我们的设计师进行修改的，到您满意为止。
            </p>
            <p class="question">Q：预约定制后多久可以联系我量尺？</p>
            <p class="answer">
              A：申请成功后我们的电话客服会先联系您确认资料，提交给当地店面后，一般48小时内就会与您预约上门量尺时间的，特殊情况以店面联系为准。
            </p>
            <p class="question">Q：不量尺，我有户型图，可以直接出设计么？</p>
            <p class="answer">
              A：由于定制家具对尺寸的精准度要求比较高（尺寸、采光、朝向等原因），从而设计出符合你的定制方案，建议您尽快预约上门量尺。
            </p>
            <p class="question">Q：是你们总部的设计师来给我设计么？</p>
            <p class="answer">
              A：是您所在地区易高家居店面的设计师上门给你提供测量服务。
            </p>
            <p class="question">
              Q：我们是毛坯房，什么时候可以约你们上门测量厨房？
            </p>
            <p class="answer">
              A：橱柜涉及到水电走向，收楼后就可以预约设计师上门先进行一下量尺。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="售后服务">
          <div class="qa-con">
            <p class="question">Q：你们产品质保多长时间？</p>
            <p class="answer">
              A：易高家居产品提供“五年质保，终身维护”的质保服务，免去您的后顾之忧。
            </p>
            <p class="question">
              Q：安装过程中（或安装后）发现有质量问题怎么办？
            </p>
            <p class="answer">
              A：你可以直接向我们店面的售后人员反馈，或者联系公司0551-65778313
              转 96555服务热线进行反馈，我们会按照和您签订的合同来执行。
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "常见问题",
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

.qa {
  width: 1200px;
  margin: 0 auto;
  padding: 38px 0 60px;

  .qa-con {
    background-color: #f7f7f7;
    padding: 38px;

    .question {
      font-size: 16px;
      color: #333;
    }

    .answer {
      font-size: 14px;
      color: #999;
      padding-top: 10px;
      margin-top: 10px;
      border-top: 1px solid #dfdfdf;
      margin-bottom: 30px;

      &:nth-last-child(1) {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
