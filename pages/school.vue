<template>
  <div class="school">
    <img
      src="/images/designschool_banner.jpg"
      style="width: 100%; display: block"
    />
    <div class="school-container">
      <div class="school-intro">
        <img src="/images/designschool_lg.jpg" />
        <p class="school-info">
          随着定制家居市场竞争日趋加剧，企业核心竞争力的提升显得尤为重要，人才培养和储备成为企业发展和走向成熟的关键。为了给易高旗下品牌店面培养复合型人才，易高整家定制创建了专业化培训平台——易高商学院。易高商学院于2014年成立以来，秉承“培养复合型人才，塑造职业化团队”的宗旨，以“请进来，走出去”的发展战略，深度联合专业培训机构，结合行业特点与店面实际发展情况有针对性地推出适宜的人才培养计划及学习课程。
          针对总经理、店长、导购、设计师等各层级学员的培养需求目前商学院已启动设计师基础班设计师高级班、导购店长初级班、店长总经理高级班等4种类型的培训，从基础知识到经营战略提供多维度的指导，并将不断完善设计师、导购店长及总经理等培训体系的授课流程，以实现设计与销售的有效融合，把更多更好的理念和实战技能传达给每位学员，为市场培养一专多能复合型人才，提升终端盈利能力。“为市场源源不断输送职业化复合型人才”是易高商学院的愿景与使命，每年将为市场输送2000人次以上。未来，易高商学院将继续以开放、共赢、创新的态度，让人才价值最大化，努力打造成为行业更具影响力企业商学院！
        </p>
      </div>
      <img src="/images/designschool_ad.jpg" class="school-ad" />
      <div class="section pxxs">
        <h2>培训形式</h2>
        <p>与时俱进 实现培训形式多样化</p>
        <i>&nbsp;</i>
        <div>
          <div>
            <img src="/images/zhibo.jpg" />
            <div class="px-title">
              <img src="/images/zbicon.png" />
              <p>直播培训<span>1对N教学，不受时间空间限制</span></p>
            </div>
          </div>
          <div>
            <img src="/images/mendian.jpg" />
            <div class="px-title">
              <img src="/images/mdicon.png" />
              <p>门店培训<span>助力门店，全面提升实战技能</span></p>
            </div>
          </div>
          <div>
            <img src="/images/gongchang.jpg" />
            <div class="px-title">
              <img src="/images/gcicon.png" />
              <p>总部培训<span>高效学习，千人千面精准授课</span></p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <h2>往届培训</h2>
        <p>2014创建以来致力于打造全网数字营销平台</p>
        <i>&nbsp;</i>
        <div class="school-news">
          <template v-for="item in newsList" :key="item.id">
            <div>
              <div>
                <img src="/images/design_pxtime.jpg" />
                <span>{{ item.createTime.slice(0, 11) }}</span>
              </div>
              <div>
                {{ item.title }}<span>{{ item.description }}</span>
              </div>
              <div>
                <NuxtLink :to="`/news/${item.category}/${item.id}`"
                  >查看详情</NuxtLink
                >
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="section members">
        <h2>我们的团队</h2>
        <p>汇聚精英讲师团队</p>
        <i>&nbsp;</i>
        <div class="swiper">
          <ClientOnly>
            <swiper-container ref="thumbsSwiper" class="my-thumbs">
              <swiper-slide
                class="slide"
                v-for="item in membersList"
                :key="item.id"
              >
                <img :src="item.avatar" />
                <div class="teacher-summary">
                  <p>{{ item.summary }}</p>
                </div>
                <div>
                  <h3>{{ item.name }}</h3>
                  <i></i>
                  <p>{{ item.position }}</p>
                </div>
              </swiper-slide>
            </swiper-container>
          </ClientOnly>
        </div>
      </div>
      <div class="section">
        <h2>学员风采</h2>
        <p>为市场源源不断输送职业化复合型人才</p>
        <i>&nbsp;</i>
        <div>
          <div class="pic members-pic1">
            <p>
              易高家居2024首届营销体系业务提升培训会<i>&nbsp;</i
              ><span>2024-1-20</span>
            </p>
          </div>
          <div class="pic members-pic2">
            <p>C6店长总经理高级班<i>&nbsp;</i><span>2021-4-27</span></p>
          </div>
          <div class="pic members-pic3">
            <p>C4店长导购特训周<i>&nbsp;</i><span>2020-09-13</span></p>
          </div>
          <div class="pic members-pic4">
            <p>C6店长总经理高级培训班<i>&nbsp;</i><span>2021-09-24</span></p>
          </div>
          <div class="pic members-pic5">
            <p>安装技能培训<i>&nbsp;</i><span>2019-03-20</span></p>
          </div>
        </div>
      </div>
      <div class="section training-sector">
        <h2>培训板块</h2>
        <p>多维度培训模式 多方位赋能终端</p>
        <i>&nbsp;</i>
        <img src="/images/design_fc.png" />
      </div>
      <div class="dz-ad">
        <div>
          <h2>线上预约，由此开启<br /><span>仅限已合作加盟商伙伴</span></h2>
          <a
            href="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502&amp;siteToken=410b9dac4b1169822b6e70c7d40bb238"
            target="_blank"
            >免费预约</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface INewsType {
  id: number;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  createTime: string;
}

const newsList = ref<INewsType[] | undefined>([]);
const { data: newsData } = await useFetch<DataResponsePage<INewsType[]>>(
  "/open/news/info/page",
  {
    method: "post",
    body: {
      training: 1,
      status: 1,
      page: 1,
      size: 5,
    },
  }
);

newsList.value = newsData.value?.data.list;

const thumbsSwiper = ref(null);
const swiper = useSwiper(thumbsSwiper, {
  watchSlidesProgress: true,
  speed: 1000,
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  navigation: true,
});

interface IMembersList {
  id: number;
  name: string;
  avatar: string;
  position: string;
  summary: string;
}

const membersList = ref<IMembersList[] | undefined>([]);

// 获取团队人员数据
const { data } = await useFetch<DataResponsePage<IMembersList[]>>(
  "/open/members/info/page",
  {
    method: "post",
    body: { page: 1, size: 6, sort: "asc" },
  }
);

membersList.value = data.value?.data.list;
</script>

<style lang="less" scoped>
.school-container {
  width: 100%;
  background: url(/images/school_bg.jpg) top center no-repeat;

  .school-intro {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;

    img {
      width: 269px;
      margin: 0 auto;
      display: block;
      padding-bottom: 30px;
    }

    .school-info {
      font-size: 15px;
      color: #333;
      text-align: justify;
      line-height: 30px;
      letter-spacing: 1px;
      padding: 40px;
      background: #fff;
      border-top: 3px solid #f9c152;
      -webkit-box-shadow: 0 0 10px #efefef;
      box-shadow: 0 0 10px #efefef;
    }
  }

  .school-ad {
    width: 100%;
    display: block;
  }

  .section {
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0 0px;

    & > h2 {
      font-size: 32px;
      color: #333;
      text-align: center;
    }

    & > p {
      font-size: 18px;
      color: #666;
      text-align: center;
      padding: 20px 0 15px;
    }

    & > i {
      width: 80px;
      height: 20px;
      border-top: 1px solid #ffcb05;
      display: block;
      margin: 0 auto;
    }
  }

  .pxxs > div {
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
    padding-top: 20px;

    img {
      border: none;
      display: block;
    }

    .px-title {
      padding: 25px 0;

      img {
        margin: 0px auto 10px;
      }

      p {
        text-align: center;
        font-size: 20px;
        color: #333;
        margin-top: 5px;
        letter-spacing: 1px;

        span {
          display: block;
          font-size: 16px;
          color: #999;
          padding-top: 5px;
        }
      }
    }

    & > div {
      background: #fff;
      box-shadow: 0px 3px 10px 1px #dedddd;
    }
  }

  .school-news {
    margin-top: 15px;

    & > div {
      padding: 20px 30px;
      border: 1px solid #e3e3e3;
      margin-bottom: 30px;
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
        display: block;
        border: none;
      }

      & > div:nth-child(1) {
        width: 90px;
        font-size: 13px;
        color: #f9c152;

        span {
          display: block;
          margin-top: 10px;
        }
      }

      & > div:nth-child(2) {
        width: 850px;
        font-size: 16px;
        color: #333;
        overflow: hidden;

        span {
          font-size: 14px;
          color: #666;
          margin-top: 10px;
          display: block;
        }
      }

      & > div:nth-child(3) {
        width: 114px;
        text-align: center;
        border: 1px solid #f9c152;
        height: 35px;
        line-height: 35px;
        color: #f9c152;
        font-size: 16px;

        a {
          color: #f9c152;
          width: 114px;
          height: 35px;
          display: block;
        }
      }
    }
  }

  .members {
    width: 1200px;
    margin: 0 auto;

    .swiper {
      margin-top: 15px;

      .slide {
        width: 30%;
        position: relative;

        img {
          width: 100%;
          display: block;
          border: none;
        }

        .teacher-summary {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(249, 193, 82, 0.8);
          font-size: 14px;
          color: #fff;
          width: 100%;
          height: 100%;
          text-align: center;
          display: none;

          p {
            width: 80%;
            height: 80%;
            margin: 0 auto;
            padding: 20px;
            font-size: 15px;
            line-height: 26px;
            text-align: center;
            border: 1px solid #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &:hover .teacher-summary {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        & > div:nth-child(3) {
          width: 100%;
          padding: 20px;
          border-left: 1px solid var(--theme-color);
          border-right: 1px solid var(--theme-color);
          border-bottom: 1px solid var(--theme-color);
          text-align: center;

          h3 {
            font-size: 20px;
            color: #333;
          }

          i {
            display: block;
            width: 60px;
            height: 15px;
            border-top: 1px solid #f9c152;
            margin: 8px auto 0;
          }

          p {
            font-size: 16px;
            color: #666;
            margin-top: 5px;
          }
        }
      }
    }
  }

  .pic {
    display: flex;
    align-items: center;

    p {
      font-size: 20px;
      color: #333;
      font-weight: bold;

      i {
        width: 30px;
        height: 1px;
        border-top: 1px solid #999;
        display: block;
        margin: 15px 0px;
      }

      span {
        font-size: 16px;
        color: #666;
        font-weight: normal;
      }
    }
  }

  .members-pic1 {
    background: url(/images/member_pic1.jpg) top left no-repeat;
    height: 456px;
    justify-content: flex-end;

    p {
      margin-right: 100px;
    }
  }

  .members-pic2 {
    background: url(/images/member_pic2.jpg) top right no-repeat;
    height: 456px;
    justify-content: flex-start;

    p {
      margin-left: 100px;
    }
  }

  .members-pic3 {
    background: url(/images/member_pic3.jpg) top left no-repeat;
    height: 456px;
    justify-content: flex-end;

    p {
      margin-right: 200px;
    }
  }

  .members-pic4 {
    background: url(/images/member_pic4.jpg) top right no-repeat;
    height: 456px;
    justify-content: flex-start;

    p {
      margin-left: 100px;
    }
  }

  .members-pic5 {
    background: url(/images/member_pic5.jpg) top left no-repeat;
    height: 456px;
    justify-content: flex-end;

    p {
      margin-right: 200px;
    }
  }

  .training-sector {
    width: 100%;
    background: url(/images/training_bg.jpg) bottom center no-repeat;
    background-size: 100% 100%;
    width: 100%;

    img {
      width: 1054px;
      margin: 0 auto;
      display: block;
      border: none;
      padding: 60px 0;
    }
  }

  .dz-ad {
    background: url(/images/dz_ad.jpg) top center no-repeat;
    width: 100%;

    div {
      width: 1200px;
      height: 245px;
      margin: 0 auto;
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

      h2 {
        font-size: 32px;
        color: #333;

        span {
          font-size: 16px;
          font-weight: normal;
        }
      }

      a {
        display: block;
        text-decoration: none;
        height: 45px;
        line-height: 45px;
        width: 150px;
        text-align: center;
        background: #151515;
        font-size: 16px;
        color: #fff;
        letter-spacing: 1px;
        border-radius: 5px;
      }
    }
  }
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
