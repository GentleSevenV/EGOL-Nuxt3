<template>
  <div class="about">
    <AboutHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item active" to="/about/brandintro.html"
        >品牌介绍</NuxtLink
      >
      <NuxtLink class="nav-item" to="/about/brandhonor.html">所获荣誉</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandprogress.html"
        >发展历程</NuxtLink
      >
      <NuxtLink class="nav-item" to="/about/shops.html">门店形象</NuxtLink>
    </div>
    <div class="section intro">
      <div class="factory">
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide>
            <img class="swiper-img" src="/images/jd2_bg.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img class="swiper-img" src="/images/jd1_bg.jpg" />
          </swiper-slide>
        </swiper-container>
      </div>
      <div>
        <span>品牌介绍</span>
        <h2>关于我们</h2>

        <p>
          易高家居有限公司（品牌）创建于2004年，是一家集研发、设计、生产、销售、服务于一体的大型全屋家居企业，总部位于安徽合肥。公司先后荣获中国环境标志产品认证、全国工商联定制家居专业委员会副会长单位、质量管理体系认证、国家高新技术企业认证、专精特新企业、定制行业百强等诸多荣誉。
        </p>
        <p>
          公司拥有10万㎡合肥双凤生产基地及21万㎡合肥下塘生产基地，同时与德国豪迈、德国海蒂诗、奥地利爱格等供应商品牌达成战略合作，全面整合优质供应链，确保高效的订单交付能力及高品质产品输出，确保用户核心利益。
        </p>
        <p>
          公司在扩大产能的同时，进一步加强终端门店建设，凭借选商育商的招商态度和强大的终端运营保障能力，目前全国在营专卖店数量突破1000户。
        </p>
        <p>
          作为中国全品类全屋整家企业，易高始终坚持“专业环保定制，整家一体交付”的品牌理念，致力于为亿万家庭提供整家生活方式解决方案！
        </p>
      </div>
    </div>
    <div class="section video">
      <div class="video-con">
        <div>
          <span>视频播放</span>
          <h2>全新实景宣传片</h2>
          <p>
            易高整家定制全新品牌宣传片，载誉前行21年，秉承“专业环保定制，整家一体交付”的品牌理念，以行业领先的设计理念及资源整合优势把品质标准融于服务，将健康美学引入生活。
          </p>
          <p>
            从全案设计到定制服务，以门墙柜厨一体化定制为核心，将家的每一个角落用户的每一处需求都纳入其中。以规模化生产保障高效定制，以智能化运作引领高端品质，协同机械与技艺整合全球先进生产设施，打造行业领先的产品工艺，融合智慧与品质。
          </p>
          <p>
            易高智慧化信息平台让家居定制视线全体系精准触达，全流程高效服务、多方位品质保障，让消费者对于家的定制有更多的参与感。
          </p>
          <p>
            易高秉承对家的初心将所有美好融入家居空间每个角落，只为让家更懂你的生活。
          </p>
        </div>
        <div class="video-player">
          <video
            class="video-source"
            controls
            poster="/images/video_cover.jpg"
            src="/videos/egol_2024_video.mp4"
          ></video>
        </div>
      </div>
    </div>
    <div class="section brand-advantage">
      <div class="brand-con">
        <div>
          <span>优势解读</span>
          <h2>品牌优势</h2>
        </div>
        <div class="advantage-con">
          <div>
            <div>明星代言</div>
            <p>
              当红影星宋佳女士为品牌形象代言，中国环保家居理念倡导者，品质家居生活践行者。
            </p>
          </div>
          <div>
            <div>优秀理念</div>
            <p>
              易高整家定制所有产品研发，融合中国传统文化理念和欧美前沿时尚设计的元素。
            </p>
          </div>
          <div>
            <div>先进工艺</div>
            <p>
              从产品研发、生产设备、工艺结构、产品细节等方面精益求精。向每一位客户承诺——精工品质、健康环保！
            </p>
          </div>
          <div>
            <div>保障体系</div>
            <p>
              工艺保障，产品保障，售后保障三管齐下，专注细节，为千万家庭定制幸福生活！
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section brand-responsibility">
      <div class="responsibility-con">
        <div class="title">
          <span>使命职责</span>
          <h2>社会责任</h2>
        </div>
        <div class="item-con">
          <div><img src="/images/brand_responsibility.jpg" /></div>
          <div>
            <div class="item">
              <div>环保:全球的责任与义务</div>
              <p>
                作为全屋定制家具行业领军企业，我们从选材、生产直至安装入户，全程依据环保标准执行，产品通过十环认证。
              </p>
            </div>
            <div class="item">
              <div>可持续发展</div>
              <p>
                易高整家定制在选用高环保等级材料的基础上，制造过程秉承一贯的严谨态度，确保产品快速交付与后续无忧使用。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "易高整家定制|易高定制家具|EGOL全屋定制品牌简介及企业使命",
  meta: [
    {
      name: "description",
      content:
        "易高整家定制（EGOL）品牌介绍：易高整家定制坐落于中国科教基地-合肥，为国内超大型全品类全屋定制家具品牌，近50万㎡现代化物联网全屋定制家具生产基地，同时拥有3000平米新概念全屋定制家具品牌展示系统！易高整家定制品牌代言人：宋佳！",
    },
    {
      name: "keywords",
      content: "易高整家定制，全屋定制家具品牌，EGOL全屋定制",
    },
  ],
});

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  effect: "creative",
  loop: true,
  speed: 1600,
  autoplay: {
    delay: 3000,
  },
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: true,
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
    width: 300px;
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

.section {
  padding: 90px 0;
}

.intro {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 530px;
  }

  .factory {
    width: 640px;

    img {
      width: 100%;
      display: block;
    }
  }

  span {
    font-size: 16px;
    color: #8c8e8f;
    font-weight: normal;
    letter-spacing: 1px;
    margin-bottom: 10px;
    display: block;
  }

  h2 {
    font-size: 32px;
    color: #333;
    letter-spacing: 1px;
    padding-bottom: 20px;
    line-height: 40px;
    background: url("/images/title_style1.png") bottom left no-repeat;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    color: #777;
    line-height: 24px;
    margin-bottom: 10px;
    text-align: justify;
    letter-spacing: 1px;

    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
}

.video {
  width: 100%;
  background-color: #f8f8f8;

  .video-con {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 16px;
      color: #8c8e8f;
      font-weight: normal;
      letter-spacing: 1px;
      margin-bottom: 10px;
      display: block;
    }

    h2 {
      font-size: 32px;
      color: #333;
      letter-spacing: 1px;
      padding-bottom: 20px;
      line-height: 40px;
      background: url("/images/title_style1.png") bottom left no-repeat;
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
      color: #777;
      line-height: 24px;
      letter-spacing: 1px;
      margin-bottom: 10px;
      text-align: justify;

      &:nth-last-of-type(1) {
        margin-bottom: 0;
      }
    }

    & > div {
      width: 530px;
    }

    .video-player {
      background: url(/images/video_bg.png) top center no-repeat;
      height: 458px;
      width: 640px;

      .video-source {
        width: 452px;
        height: 256px;
        margin-left: 98px;
        margin-top: 12px;
        background-color: #000;
      }
    }
  }
}

.brand-advantage {
  background: url(/images/brandys_bg.jpg) top center no-repeat;
  background-size: cover;
  height: 827px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .brand-con {
    width: 1200px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: flex-end;
    justify-content: center;

    & > div {
      width: 740px;

      span {
        font-size: 16px;
        color: #c7c7c7;
        font-weight: normal;
        letter-spacing: 1px;
        text-align: right;
        margin-bottom: 10px;
        display: block;
      }

      h2 {
        text-align: right;
        font-size: 32px;
        color: #fff;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
        background: url("/images/title_style2.png") bottom right no-repeat;
        margin-bottom: 20px;
      }
    }

    .advantage-con {
      margin-top: 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;

      & > div {
        width: 355px;
        height: 185px;
        padding-left: 110px;
        padding-right: 30px;
        padding-top: 40px;
        color: #ababab;
        margin-top: 30px;

        div {
          font-size: 18px;
        }

        p {
          font-size: 14px;
          line-height: 22px;
          margin-top: 12px;
          text-align: justify;
        }
      }

      & > div:nth-of-type(1) {
        background: #202020 url("/images/brand_icon_grey.png") no-repeat 30px
          30px;
      }

      & > div:nth-of-type(2) {
        background: #202020 url("/images/brand_icon2_grey.png") no-repeat 30px
          30px;
      }

      & > div:nth-of-type(3) {
        background: #202020 url("/images/brand_icon3_grey.png") no-repeat 30px
          30px;
      }

      & > div:nth-of-type(4) {
        background: #202020 url("/images/brand_icon4_grey.png") no-repeat 30px
          30px;
      }
    }
  }
}

.brand-responsibility {
  background: #fff url("/images/brand_responsibility_bg.jpg") no-repeat top
    right;
  width: 100%;
  padding: 100px 0;

  .responsibility-con {
    width: 1200px;
    margin: 0 auto;

    .title {
      span {
        font-size: 16px;
        color: #c7c7c7;
        font-weight: normal;
        letter-spacing: 1px;
        margin-bottom: 10px;
        display: block;
      }

      h2 {
        font-size: 32px;
        color: #333;
        letter-spacing: 1px;
        padding-bottom: 20px;
        line-height: 40px;
        background: url("/images/title_style1.png") bottom left no-repeat;
        margin-bottom: 20px;
      }
    }

    .item-con {
      margin-top: 60px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      img {
        width: 100%;
        display: block;
      }

      .item {
        width: 495px;
        height: 236px;
        border: 1px solid #dfdfdf;
        padding: 60px 30px 0 110px;
        box-sizing: border-box;

        div {
          color: #333;
          font-size: 20px;
        }

        p {
          font-size: 16px;
          line-height: 25px;
          margin-top: 10px;
          text-align: justify;
        }
      }

      .item:nth-of-type(1) {
        background: url("/images/green_icon.png") no-repeat 52px 52px;
      }

      .item:nth-of-type(2) {
        background: url("/images/cx_icon.png") no-repeat 52px 52px;
        margin-top: 31px;
      }
    }
  }
}
</style>
