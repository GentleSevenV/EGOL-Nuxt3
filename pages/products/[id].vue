<template>
  <div class="products">
    <div class="header">
      <img src="/images/qudz_banner.jpg" />
    </div>
    <div class="container">
      <div class="products-breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/products' }">
            整家定制
          </el-breadcrumb-item>
          <el-breadcrumb-item>{{ productInfo?.data.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="product-display">
        <div class="product-lb">
          <ClientOnly>
            <!-- 使用thumbs-swiper指定另外一个swiper的class类名来声明它是缩略图轮播 -->
            <swiper-container ref="productSwiperRef" thumbs-swiper=".my-thumbs">
              <swiper-slide
                class="slide"
                v-for="(item, index) in productInfo?.data.displayImages"
                :key="index"
              >
                <img :src="item" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>

          <ClientOnly>
            <swiper-container ref="thumbsSwiper" class="my-thumbs">
              <swiper-slide
                class="slide"
                v-for="(item, index) in productInfo?.data.displayImages"
                :key="index"
              >
                <img :src="item" />
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
        <div class="product-info">
          <h2>{{ productInfo?.data.name }}</h2>
          <p class="product-includes">包含：{{ productInfo?.data.includes }}</p>
          <div class="product-tag">
            <el-tag
              v-for="(item, index) in productInfo?.data.labels"
              :key="index"
              effect="dark"
            >
              {{ item }}
            </el-tag>
          </div>
          <div class="product-flex">
            <p>颜色</p>
            <div class="color">{{ productInfo?.data.colors }}</div>
          </div>
          <div class="product-flex">
            <p>材质</p>
            <div>
              <el-tag
                v-for="(item, index) in productInfo?.data.materials"
                :key="index"
                effect="plain"
              >
                {{ item }}
              </el-tag>
            </div>
          </div>

          <NuxtLink
            class="btn"
            to="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502"
            target="_blank"
          >
            预约量尺
          </NuxtLink>
          <p class="tips">
            ( 以上提供的部分颜色仅供参考，具体系列可选颜色请咨询设计师 )
          </p>
        </div>
      </div>

      <div class="anchor">
        <el-affix :offset="60">
          <el-anchor :marker="false" :offset="70" direction="horizontal">
            <el-anchor-link href="#anchor-1"> 产品详情 </el-anchor-link>
            <el-anchor-link href="#anchor-2"> 生产基地 </el-anchor-link>
            <el-anchor-link href="#anchor-3"> 板材优势 </el-anchor-link>
            <el-anchor-link href="#anchor-4"> 定制流程 </el-anchor-link>
          </el-anchor>
        </el-affix>
      </div>

      <div id="anchor-1" class="brand-intro">
        <div class="brand-datas">
          <div>
            <div class="data-item">
              <h1>30</h1>
              <div>
                <span>+</span>
                <span>万</span>
              </div>
            </div>
            <p>30多万平米生产基地</p>
          </div>
          <div><div class="line">&nbsp;</div></div>
          <div>
            <div class="data-item">
              <h1>1000</h1>
              <div>
                <span>+</span>
                <span></span>
              </div>
            </div>
            <p>1000多家专卖店</p>
          </div>
          <div><div class="line">&nbsp;</div></div>
          <div>
            <div class="data-item">
              <h1>60</h1>
              <div>
                <span>+</span>
                <span></span>
              </div>
            </div>
            <p>60多项荣誉与资质</p>
          </div>
          <div><div class="line">&nbsp;</div></div>
          <div>
            <div class="data-item">
              <h1>100</h1>
              <div>
                <span>+</span>
                <span>万</span>
              </div>
            </div>
            <p>累积服务客户</p>
          </div>
        </div>
        <p class="intro-text">
          我们是研发、设计、生产、销售、服务于一体全屋定制家居企业<br />先后荣获中国十大定制家居品牌、中国环境标志十环认证企业，全国工商联定制家居专委会副会长单位<br />致力为消费者提供360°全屋定制解决方案。
        </p>
        <NuxtLink
          class="btn"
          to="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502"
          target="_blank"
        >
          了解更多
        </NuxtLink>
      </div>
      <div id="anchor-2" class="anchor-section">
        <div class="section-title">
          <h2>21年实力厂家 铸就好品牌</h2>
          <p>
            易高整家定制始终坚持“专业环保定制，整家一体交付”，致力于中国定制家居文化的倡导和传播！
          </p>
          <i>&nbsp;</i>
        </div>
        <div class="jd1">
          <div class="jd-con">
            <h3>下塘生产基地</h3>
            <p>位于下塘工业园区<br />集研发、设计、生产、销售、服务于一体</p>
            <div>200<span>亩</span></div>
            <p style="margin: 0; font-size: 14px; color: #999">占地约</p>
          </div>
        </div>
        <div class="jd2">
          <div class="jd-con jd2-con">
            <h3>双凤生产基地</h3>
            <p>
              位于合肥双凤经济开发区<br />集研发生产、品牌运营、销售、运输物流于一体
            </p>
            <div>100000<span>㎡</span></div>
            <p style="margin: 0; font-size: 14px; color: #999">总建筑面积达</p>
          </div>
        </div>
        <img src="/images/jd03.jpg" />
      </div>
      <div id="anchor-3" class="anchor-section">
        <div class="section-title">
          <h2>易高优质选材 打造放心品质</h2>
          <p>
            易高整家定制始终坚持“专业环保定制，整家一体交付”，致力于中国定制家居文化的倡导和传播！
          </p>
          <i>&nbsp;</i>
        </div>
        <div class="bc1">
          <div class="jd-con">
            <h3>环保板材</h3>
            <p>全天然绿色板材</p>
            <div class="ys">
              <span>经久耐用</span><span>透气防潮</span><span>稳定环保</span
              ><span>承重力强</span>
            </div>
          </div>
        </div>
        <div class="bc2">
          <div class="jd-con jd2-con">
            <h3>表面装饰</h3>
            <p>德国进口环保表面装饰膜</p>
            <div class="ys">
              <span>抗污易清洁</span><span>抗黄不褪色</span><span>耐热耐磨</span
              ><span>防潮防霉</span>
            </div>
          </div>
        </div>
        <div class="bc3">
          <div class="jd-con">
            <h3>品牌五金</h3>
            <p>国际知名品牌高精密五金</p>
            <div class="ys">
              <span>设计精巧</span><span>缓冲静音</span><span>牢固耐用</span
              ><span>品质保障</span>
            </div>
          </div>
        </div>
        <div class="section-title">
          <h2>精选豪华配件，坚持品质护航</h2>
          <p>GIVE YOU A BETTER CAQUALITY COTTON FILLING</p>
          <i>&nbsp;</i>
        </div>
        <div class="pj-con">
          <div class="pj-item">
            <img src="/images/pj1.jpg" />
            <div>
              <h3>HINGE</h3>
              <h4>德国海蒂诗门铰</h4>
              <span class="pj-line">&nbsp;</span>
              <p>
                10万次开合无故障，25年以上使用寿命
                <span>
                  100,000 TIMES OF OPENING AND CLOSING WITHOUT BREAKDOWN,MORE
                  THAN 25 YEARS OF SERVICE LIFE
                </span>
              </p>
            </div>
          </div>
          <div class="pj-item">
            <div>
              <h3>GUIDE</h3>
              <h4>德国海蒂诗隐藏式导轨</h4>
              <span class="pj-line">&nbsp;</span>
              <p>
                美观实用，不露滑轨<br />顺滑抽拉无噪音，承重力强
                <span>
                  BEAUTIFUL AND PRACTICAL, NO SLIDING TRACK, SMOOTH PULLING, NO
                  NOISE STRONG BEARING CAPACITY
                </span>
              </p>
            </div>
            <img src="/images/pj2.jpg" />
          </div>
          <div class="pj-item">
            <img src="/images/pj3.jpg" />
            <div>
              <h3>TATAMI SUPPORT</h3>
              <h4>榻榻米支撑</h4>
              <span class="pj-line">&nbsp;</span>
              <p>
                自带缓冲设计，闭合轻柔缓降<br />闭合无声音，不夹手
                <span>
                  BUFFER DESIGN,SOFT AND GENTLE CLOSURE,SILENT CLOSURE,NO
                  GRIPPER
                </span>
              </p>
            </div>
          </div>
          <div class="pj-item">
            <div>
              <h3>CLOTHES POLE</h3>
              <h4>橡胶防滑拉丝衣杆</h4>
              <span class="pj-line">&nbsp;</span>
              <p>
                超静音，承重力强，多色可选
                <span>
                  SUPER SILENCE, STRONG BEARING CAPACITY, MULTI-COLOR OPTIONAL
                </span>
              </p>
            </div>
            <img src="/images/pj4.jpg" />
          </div>
          <div class="pj-item">
            <img src="/images/pj3.jpg" />
            <div>
              <h3>HARDWARE HANDLE</h3>
              <h4>五金拉手</h4>
              <span class="pj-line">&nbsp;</span>
              <p>
                精致拉手，美观耐用<br />细节体现品质，款式多种可选
                <span>
                  DELICATE HANDSHAKE,BEAUTIFUL AND DURABLE,DETAILS REFLECT
                  QUALITY,A VARIETY OF STYLES CAN BE SELECTED
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="anchor-4" class="anchor-section dzlc">
        <div class="section-title">
          <h2>易高整家定制 定制流程</h2>
          <p>免费测量、免费设计、免费运输、免费安装</p>
          <i>&nbsp;</i>
        </div>

        <img src="/images/dzlc.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
const route = useRoute();

const productId = route.params.id;

interface IProductsInfo {
  id: number;
  name: string;
  description: string;
  colors: string;
  coverImage: string;
  displayImages: string[];
  includes: string;
  labels: string[];
  materials: string[];
}

const { data: productInfo } = await useFetch<DataResponse<IProductsInfo>>(
  `/open/products/info/info?id=${productId}`,
  {
    method: "get",
  }
);

const productSwiperRef = ref(null);
const productSwiper = useSwiper(productSwiperRef, {
  effect: "creative",
  speed: 1000,
  navigation: true,
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

const thumbsSwiper = ref(null);
const swiper = useSwiper(thumbsSwiper, {
  watchSlidesProgress: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
});
</script>
<style lang="less" scoped>
.products {
  width: 100%;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }

  .container {
    background: url(/images/ruler_bg.jpg) top center no-repeat;
    background-size: 100% 15px;
    width: 100%;
    padding: 60px 0 0;

    .products-breadcrumb {
      width: 1200px;
      margin: 0px auto;
      border-bottom: 1px solid #e4e4e4;
      padding-bottom: 30px;
    }

    .product-display {
      width: 1200px;
      margin: 50px auto 0;
      display: flex;
      justify-content: space-between;

      .product-lb {
        width: 767px;

        .slide {
          width: 767px;
          height: 431px;
          cursor: pointer;

          img {
            width: 100%;
          }
        }

        .my-thumbs {
          margin-top: 10px;

          .slide {
            opacity: 0.4;
            height: auto;
          }
        }

        .my-thumbs .swiper-slide-thumb-active {
          opacity: 1;
        }
      }
    }

    .product-info {
      width: 380px;

      h2 {
        font-size: 26px;
      }

      .product-includes {
        margin: 15px 0;
      }

      .product-tag {
        padding-bottom: 30px;
        border-bottom: 1px solid #e4e4e4;
        margin-bottom: 20px;

        .el-tag {
          margin-right: 10px;
        }
      }

      .product-flex {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: space-between;
        margin-bottom: 16px;

        p {
          line-height: 24px;
        }

        div {
          width: 338px;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          justify-content: flex-start;

          .el-tag {
            margin-right: 10px;
            margin-bottom: 10px;
            --el-tag-border-color: #f9c152;
          }
        }

        .color {
          line-height: 24px;
        }
      }

      .btn {
        display: block;
        width: 130px;
        font-size: 18px;
        color: #333;
        font-weight: bold;
        background: #f9c152;
        text-align: center;
        padding: 12px 0;
        margin-top: 100px;
        cursor: pointer;
        letter-spacing: 1px;
        border-radius: 6px;
      }

      .tips {
        font-size: 12px;
        color: #999;
        padding-top: 25px;
      }
    }

    .anchor {
      width: 1200px;
      margin: 50px auto;

      :deep(.el-anchor__list) {
        padding-bottom: 0;
        border: 1px solid var(--theme-color);
      }

      .el-anchor__item {
        width: 300px;
        border-right: 1px solid var(--theme-color);

        &:nth-last-child(1) {
          border: none;
        }

        :deep(.el-anchor__link) {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          font-size: 16px;
        }
      }
    }

    .brand-intro {
      width: 100%;
      max-width: 1920px;
      padding: 100px 0;
      margin: 0 auto;
      background: url(/images/product_detail_bg.jpg) top center no-repeat;

      .brand-datas {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 1200px;
        margin: 0 auto;
        color: #fff;

        .line {
          height: 55px;
          width: 1px;
          background: #515151;
        }

        .data-item {
          display: flex;
          justify-content: center;
          align-items: center;

          h1 {
            font-size: 66px;
          }

          div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
              font-size: 15px;
              display: block;
              height: 39px;
              line-height: 40px;
            }
          }
        }

        p {
          text-align: center;
        }
      }

      .intro-text {
        font-size: 16px;
        color: #fff;
        text-align: center;
        margin: 60px 0 60px;
        line-height: 40px;
        letter-spacing: 1px;
      }

      .btn {
        display: block;
        width: 130px;
        font-size: 14px;
        color: #333;
        margin: 0 auto;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: var(--theme-color);
        letter-spacing: 1px;
        border-radius: 5px;
      }
    }

    .anchor-section {
      width: 1200px;
      margin: 0 auto;
      padding: 60px 0 20px;

      .section-title {
        text-align: center;
        h2 {
          font-size: 35px;
          color: #333;
        }

        p {
          font-size: 18px;
          color: #999;
          margin-top: 20px;
        }

        i {
          width: 100px;
          margin: 0 auto 60px;
          height: 15px;
          border-bottom: 1px solid var(--theme-color);
          display: block;
        }
      }

      .jd1 {
        background: #f7f7f7 url(/images/jd1_bg.jpg) top right no-repeat;
        height: 462px;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .jd-con {
          h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
          }

          p {
            font-size: 16px;
            color: #999;
            margin-top: 15px;
            line-height: 25px;
          }

          div {
            font-weight: bold;
            font-size: 40px;
            color: #333;
            margin-top: 80px;

            span {
              font-size: 16px;
              font-weight: normal;
            }
          }
        }
      }

      .jd2 {
        background: #f7f7f7 url(/images/jd2_bg.jpg) top left no-repeat;
        height: 462px;
        padding: 0 50px;
        margin-top: 15px;
        margin-bottom: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;

        .jd-con {
          text-align: right;
          h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
          }

          p {
            font-size: 16px;
            color: #999;
            margin-top: 15px;
            line-height: 25px;
          }

          div {
            font-weight: bold;
            font-size: 40px;
            color: #333;
            margin-top: 80px;

            span {
              font-size: 16px;
              font-weight: normal;
            }
          }
        }
      }

      .bc1 {
        background: #f7f7f7 url(/images/bc1_bg.jpg) top right no-repeat;
        height: 462px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        .jd-con {
          padding-left: 50px;

          h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
          }

          p {
            font-size: 16px;
            color: #999;
            margin-top: 15px;
            line-height: 25px;
          }

          div {
            margin-top: 80px;

            span {
              font-size: 16px;
              font-weight: normal;
              padding: 5px 10px;
              border: 1px solid #333;
              margin-left: 6px;
            }
          }
        }
      }

      .bc2 {
        background: #f7f7f7 url(/images/bc2_bg.jpg) top left no-repeat;
        height: 462px;
        margin-top: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-end;

        .jd-con {
          padding-left: 50px;

          h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
          }

          p {
            font-size: 16px;
            color: #999;
            margin-top: 15px;
            line-height: 25px;
          }

          div {
            margin-top: 80px;

            span {
              font-size: 16px;
              font-weight: normal;
              padding: 5px 10px;
              border: 1px solid #333;
              margin-left: 6px;
            }
          }
        }

        .jd2-con {
          text-align: right;
          padding-right: 50px;
        }
      }

      .bc3 {
        background: #f7f7f7 url(/images/bc3_bg.jpg) top right no-repeat;
        height: 462px;
        margin-top: 15px;
        margin-bottom: 60px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;

        .jd-con {
          padding-left: 50px;

          h3 {
            font-size: 30px;
            color: #333;
            font-weight: normal;
          }

          p {
            font-size: 16px;
            color: #999;
            margin-top: 15px;
            line-height: 25px;
          }

          div {
            margin-top: 80px;

            span {
              font-size: 16px;
              font-weight: normal;
              padding: 5px 10px;
              border: 1px solid #333;
              margin-left: 6px;
            }
          }
        }
      }

      .pj-con {
        width: 1200px;
        margin: 0 auto;

        .pj-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #eee;

          div {
            padding: 38px;

            h3 {
              font-size: 40px;
            }

            h4 {
              font-size: 30px;
              font-weight: normal;
            }

            .pj-line {
              display: block;
              width: 50px;
              border-bottom: 2px solid #333;
            }

            p {
              font-size: 18px;
              margin-top: 30px;

              span {
                display: block;
                font-size: 14px;
              }
            }
          }
        }
      }
    }

    .dzlc {
      width: 100%;
      height: 462px;
      background: url(/images/dzlc_bg.jpg) top center no-repeat;
      padding: 60px 0 0;

      img {
        width: 1200px;
        margin: 0 auto;
        display: block;
      }
    }
  }
}

:deep(.el-breadcrumb__inner.is-link) {
  font-weight: normal;
}

// 自定义 swiper 样式，参考：https://swiperjs.com/element#parts
swiper-container::part(button-prev) {
  width: 16px;
  color: #fff;
}

swiper-container::part(button-next) {
  width: 16px;
  color: #fff;
}
</style>
