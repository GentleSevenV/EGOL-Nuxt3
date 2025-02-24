<template>
  <footer class="footer">
    <div class="top">
      <div class="top-box">
        <div style="justify-content: flex-start">
          <Icon class="icon" name="icons:email" /> 邮箱：779894377@qq.com
        </div>
        <div style="border-left: 2px solid #333; border-right: 2px solid #333">
          <Icon class="icon" name="icons:phonecall" /> 电话：19905609682
        </div>
        <div style="justify-content: flex-end">
          <Icon class="icon" name="icons:location" />
          地址：中国·合肥市双凤经济开发区金淮路16号
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="mid-left">
        <img src="/images/logo.png" />
        <p>输入微信手机号，快速获取EGOL品牌产品资料</p>
        <FooterForm></FooterForm>
      </div>
      <div class="mid-right">
        <div class="service-item">
          <p>专属服务</p>
          <NuxtLink to="">免费量尺设计</NuxtLink>
          <NuxtLink to="">免费标准配送</NuxtLink>
          <NuxtLink to="">免费安装调试</NuxtLink>
        </div>
        <div class="service-item">
          <p>定制帮助</p>
          <NuxtLink to="">定制流程</NuxtLink>
          <NuxtLink to="">防伪</NuxtLink>
          <NuxtLink to="">售后</NuxtLink>
          <NuxtLink to="">保养与维修</NuxtLink>
        </div>
        <div class="service-item">
          <p>需要帮助</p>
          <NuxtLink to="">联系我们</NuxtLink>
          <NuxtLink to="">常见问题</NuxtLink>
          <NuxtLink to="">站点地图</NuxtLink>
          <NuxtLink to="">TAG地图</NuxtLink>
        </div>
        <div class="service-item">
          <p>关于公司</p>
          <NuxtLink to="">企业责任</NuxtLink>
          <NuxtLink to="">职业发展</NuxtLink>
          <NuxtLink to="">细则及条款</NuxtLink>
          <NuxtLink to="">隐私与 COOKIE</NuxtLink>
          <NuxtLink to="">实力秀</NuxtLink>
        </div>
      </div>
    </div>
    <div class="btm">
      <div class="app">
        <div class="item wx">
          <a class="item-link" to=""
            ><Icon class="icon" name="icons:wechat"
          /></a>
          <img src="/images/wwxin.jpg" />
        </div>
        <a target="_blank" href="http://www.yigaojiaju.com" class="item"
          ><Icon class="icon" name="icons:weibo"
        /></a>
        <a target="_blank" href="" class="item"
          ><Icon class="icon" name="icons:qq"
        /></a>
        <a target="_blank" href="" class="item"
          ><Icon class="icon" name="icons:kf"
        /></a>
      </div>
      <div class="nav">
        <NuxtLink to="">关于易高</NuxtLink>
        <NuxtLink to="">全屋定制</NuxtLink>
        <NuxtLink to="">资讯中心</NuxtLink>
        <NuxtLink to="">合作共赢</NuxtLink>
        <a target="_blank" href="">全景展厅</a>
        <NuxtLink to="">易高商学院</NuxtLink>
        <NuxtLink to="">联系我们</NuxtLink>
      </div>
      <div class="fri-link" @click="showFrilinks">
        友情链接&nbsp;<Icon class="icon" name="icons:down" />
      </div>
    </div>
    <FriendlyLink class="link-con" :class="{ show: isShow }"></FriendlyLink>
    <div class="icpinfo">
      易高家居有限公司 版权所有COPYRIGHT&nbsp;&nbsp;&nbsp;&nbsp;
      <a
        style="color: #727272"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34012102000074"
      >
        <img
          src="/images/icpimage_03.png"
          style="vertical-align: middle; display: inline-block"
        />
        &nbsp;皖公网安备&nbsp;34012102000074号
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        style="color: #727272"
        target="_blank"
        href="https://beian.miit.gov.cn/"
        >皖ICP备18023051号-1
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;投资有风险 选择需谨慎
    </div>
  </footer>
</template>

<script lang="ts" setup>
const isShow = ref(false);

const showFrilinks = () => {
  isShow.value = !isShow.value;
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: auto;
  background: url(/images/footerbg.jpg) top center no-repeat;
  background-size: 100% 100%;

  .top {
    width: 100%;
    margin: 0 auto;
    border-bottom: 2px solid #333;

    .top-box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: space-between;

      div {
        width: 400px;
        height: 70px;
        box-sizing: border-box;
        margin: 0 auto;
        font-size: 15px;
        color: #fff;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;

        .icon {
          font-size: 32px;
          margin-right: 6px;
          color: var(--theme-color);
        }
      }
    }
  }

  .mid {
    width: 1200px;
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .mid-left {
      width: 300px;

      img {
        width: 182px;
      }

      p {
        font-size: 15px;
        color: #fff;
        line-height: 25px;
        margin-top: 15px;
      }
    }

    .mid-right {
      width: 820px;
      display: flex;
      align-content: center;
      align-items: flex-start;
      justify-content: space-between;

      .service-item {
        font-size: 16px;

        p {
          color: #fff;
          margin-bottom: 20px;
        }

        a {
          display: block;
          font-size: 14px;
          color: #727272;
          margin-bottom: 15px;
        }
      }
    }
  }

  .btm {
    padding-top: 30px;
    width: 1200px;
    margin: 0 auto;
    border-top: 1px solid #333;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .app {
      width: 222px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .item {
        border: 1px solid #333;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .item-link {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          font-size: 30px;
          color: #5d5d5d; //修改自定义的svg icon图标颜色时，需要先在svg文件中将所有的fill值修改为currentColor，然后再使用css修改color属性即可
        }

        &:hover {
          background-color: var(--theme-color);
          border: none;

          .icon {
            color: #fff;
          }
        }
      }

      .wx {
        position: relative;

        img {
          width: 0;
          height: auto;
          position: absolute;
          bottom: 50px;
          left: 0;
        }

        &:hover img {
          width: 120px;
          -webkit-transition: width 0.5s;
          transition: width 0.5s;
        }
      }
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 737px;
      height: 48px;
      padding: 0 30px;
      color: #727272;
      border-left: 1px solid #333;
      border-right: 1px solid #333;

      a {
        color: #727272;
      }
    }

    .fri-link {
      font-size: 14px;
      color: #fff;
      text-align: center;
      width: 130px;
      height: 48px;
      line-height: 48px;
      background: var(--theme-color);
      letter-spacing: 1px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .show {
    height: 50px !important;
  }

  .link-con {
    width: 1200px;
    margin: 10px auto 0;
    height: 0px;
    overflow: hidden;
    -webkit-transition: height 1s;
    transition: height 1s;
    -moz-transition: height 0.5s;
    -webkit-transition: height 0.5s;
    -o-transition: height 0.5s;

    a {
      font-size: 12px;
      color: #727272;
      line-height: 25px;
    }
  }

  .icpinfo {
    width: 1200px;
    margin: 10px auto 0;
    font-size: 12px;
    color: #727272;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>
