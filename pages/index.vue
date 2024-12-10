<template>
  <div class="egol-page">
    <!-- 轮播 -->
    <Banner :banners="banners?.data" />
    <div class="container">
      <!-- 关于我们 -->
      <div class="section aboutus">
        <div class="layout">
          <h1>关于我们</h1>
          <div class="flex-box">
            <div>
              <p class="slogan">专业环保定制，整家一体交付</p>
              <h2>拥有21年全屋定制家居经验的大品牌</h2>
              <p>
                易高家居有限公司创建于2004年，是一家集研发、设计、生产、销售、服务于一体的大型全屋家居企业，总部位于安徽合肥。公司先后荣获中国环境标志产品认证、全国工商联定制家居专业委员会理事单位、质量管理体系认证、国家高新技术企业认证、专精特新企业、定制行业百强等诸多荣誉。<br />
                公司拥有10万㎡合肥双凤生产基地及21万㎡合肥下塘生产基地，同时与德国豪迈、德国海蒂诗、奥地利爱格等供应商品牌达成战略合作，全面整合优质供应链，确保高效的订单交付能力及高品质产品输出，确保用户核心利益。<br />
                公司在扩大产能的同时，进一步加强终端门店建设，凭借选商育商的招商态度和强大的终端运营保障能力，目前全国在营专卖店数量突破1000户。<br />
                作为中国全品类全屋定制类企业，易高始终坚持“专业环保定制，整家一体交付”的品牌理念，致力于为亿万家庭提供整家生活方式解决方案！
              </p>
              <NuxtLink class="more" to="/about/brandintro">了解更多</NuxtLink>
            </div>

            <div class="building-pic">
              <img src="/images/aboutus_07.jpg" />
            </div>
          </div>
        </div>
      </div>
      <!-- 推荐产品 -->
      <div class="section products">
        <div class="layout">
          <h1>产品展示</h1>
          <div>
            <ClientOnly>
              <swiper-container ref="containerRef">
                <swiper-slide class="rec-product" v-for="item in recProducts?.data" :key="item.id">
                  <div class="product-infos">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                    <template v-for="(label, index) in item.labels" :key="index">
                      <span>{{ label }}</span>
                    </template>
                    <div class="probtn">
                      <NuxtLink class="more" to="/about/brandintro">了解更多</NuxtLink>
                    </div>
                  </div>
                  <img class="product-img" :src="item.coverImage" />
                </swiper-slide>
              </swiper-container>
            </ClientOnly>
          </div>
        </div>
      </div>
      <!-- 终端形象 -->
      <div class="section terminal-image">
        <div class="layout">
          <h1>终端形象</h1>
          <div class="terminal-image-list">
            <template v-for="item in terminalImages?.data" :key="item.id">
              <div class="terminal-image-card">
                <div class="flip-box">
                  <div class="front">
                    <img :src="item.icon" />
                    <p>
                      {{ item.name }}<br /><span>{{ item.description }}</span>
                    </p>
                  </div>
                  <div class="back">
                    <img :src="item.image" />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <!-- 门店 -->
      <div class="section shops">
        <div class="layout">
          <div class="shops-link">
            <p>
              1000+全国专卖店布局<br />
              <span>打造易高整家定制销售、安装、售后等一站式服务体验终端矩阵</span>
            </p>
            <NuxtLink class="more" to="/about/brandintro">了解更多</NuxtLink>
          </div>
        </div>
      </div>
      <!-- 新闻 -->
      <div class="section news">
        <div class="layout">
          <h1>资讯中心</h1>
          <div>
            <el-tabs v-model="activeName" class="demo-tabs">
              <el-tab-pane label="User" name="first">User</el-tab-pane>
              <el-tab-pane label="Config" name="second">Config</el-tab-pane>
              <el-tab-pane label="Role" name="third">Role</el-tab-pane>
              <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IBannerType {
  id: number;
  title: string;
  link: string;
  pcImage: string;
}

const { data: banners } = await useFetch<DataResponse<IBannerType[]>>("/open/banner/info/list", {
  method: "post",
  body: {
    status: 1,
    type: 0,
  },
});

interface IRecProducts {
  id: number;
  name: string;
  description: string;
  coverImage: string;
  labels: [];
}

const { data: recProducts } = await useFetch<DataResponse<IRecProducts[]>>(
  "/open/products/info/list",
  {
    method: "post",
    body: {
      recommend: 1,
    },
  }
);

const containerRef = ref(null);
const swiper = useSwiper(containerRef, {
  spaceBetween: 300,
  loop: true,
  speed: 1600,
  autoplay: {
    delay: 4000,
  },
});

interface ITerminalImage {
  id: number;
  name: string;
  description: string;
  icon: string;
  image: string;
}

const { data: terminalImages } = await useFetch<DataResponse<ITerminalImage[]>>(
  "/open/terminalimage/info/list",
  {
    method: "post",
    body: {
      status: 1,
      sort: "asc",
    },
  }
);

const activeName = ref("first");

// interface INewsType {
//   id: string;
//   name: string;
//   value: string;
// }

// const data3 = await useFetch<DataResponse<INewsType[]>>("/open/dict/info/data", {
//   method: "post",
//   body: { types: ["news"] },
// });
// console.log(data3);
</script>
<style lang="less" scoped>
.egol-page {
  position: relative;
  color: #333;

  .section {
    width: 100%;

    .layout {
      width: 1200px;
      margin: 0 auto;
      padding: 90px 0;

      h1 {
        margin: 0;
        padding-bottom: 15px;
        letter-spacing: 2px;
        margin-bottom: 60px;
      }
    }
  }

  .aboutus {
    h1 {
      background: url("/images/index_aboutusbg.png") bottom left no-repeat;
    }

    .flex-box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;

      div {
        width: 600px;

        .slogan {
          font-size: 18px;
        }

        h2 {
          font-size: 28px;
          margin: 20px 0;
        }

        p {
          font-size: 15px;
          color: #777;
          text-align: justify;
          line-height: 25px;
        }

        .more {
          background-color: #f9c152;
          width: 130px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          color: #fff;
          border-radius: 5px;
          margin-top: 70px;
          letter-spacing: 1px;
          display: block;
        }
      }

      .building-pic {
        width: 520px;

        img {
          width: 100%;
          display: block;
        }
      }
    }
  }

  .products {
    height: 726px;
    background: url(/images/product_bg.jpg) top center no-repeat;
    background-size: cover;

    h1 {
      color: #fff;
      text-align: center;
      background: url(/images/product_titbg.png) bottom center no-repeat;
    }

    .rec-product {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      margin: 0 auto;

      .product-infos {
        h3 {
          font-size: 25px;
          padding-bottom: 30px;
          letter-spacing: 1px;
          color: #fff;
        }

        p {
          font-size: 16px;
          color: #fff;
          line-height: 25px;
          letter-spacing: 1px;
          padding-bottom: 15px;
        }

        span {
          display: inline-block;
          padding: 3px 10px;
          border: 1px solid #999;
          margin-right: 10px;
          margin-top: 20px;
          font-size: 14px;
          color: #999;
        }

        .probtn {
          width: 540px;
          border-top: 1px solid #999;
          padding-top: 40px;
          margin-top: 40px;

          .more {
            background-color: #f9c152;
            width: 130px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
            color: #333;
            border-radius: 5px;
            letter-spacing: 1px;
            display: block;
          }
        }
      }

      .product-img {
        width: 560px;
        border: 10px solid #fff;
      }
    }
  }

  .terminal-image {
    background: url(/images/shopbg.jpg) top center no-repeat;
    background-size: cover;
    height: 888px;

    h1 {
      text-align: center;
      background: url("/images/stores_titbg.png") bottom center no-repeat;
    }

    .terminal-image-list {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .terminal-image-card {
        width: 340px;
        height: 227px;
        margin-top: 40px;
        perspective: 680px;
        cursor: pointer;

        .flip-box {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          box-shadow: 0px 0px 40px #eaeaea;
        }

        .front {
          backface-visibility: hidden;
          position: absolute;
          z-index: 1;
          height: 100%;
          width: 100%;
          text-align: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            display: inline-block;
            height: 86px;
          }

          p {
            font-size: 18px;
            color: #272727;
            text-align: center;
            line-height: 30px;
            margin-top: 20px;

            span {
              font-size: 14px;
              color: #666;
            }
          }
        }

        .back {
          backface-visibility: hidden;
          position: absolute;
          height: 100%;
          width: 100%;
          transform: rotateY(180deg);

          img {
            width: 100%;
          }
        }

        &:hover .flip-box {
          transform: rotateY(180deg);
        }
      }
    }
  }

  .shops {
    background: url(/images/shopsbg.jpg) top center no-repeat;
    background-size: cover;
    height: 349px;

    .shops-link {
      width: 1200px;
      height: 169px;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 40px;
        color: #fff;
        letter-spacing: 1px;

        span {
          font-size: 20px;
        }
      }

      .more {
        background-color: #f9c152;
        width: 130px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        border-radius: 5px;
        letter-spacing: 1px;
        display: block;
      }
    }
  }

  .news {
    background: url(/images/newsbg.jpg) top center no-repeat;
    background-size: cover;
    height: 888px;

    h1 {
      text-align: center;
      background: url("/images/stores_titbg.png") bottom center no-repeat;
    }
  }
}
</style>
