<template>
  <div class="shop-details">
    <AboutHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/about/brandintro">品牌介绍</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandhonor">所获荣誉</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandprogress">发展历程</NuxtLink>
      <NuxtLink class="nav-item active" to="/about/shops">专卖形象</NuxtLink>
    </div>
    <div class="shop-con">
      <h2>{{ shopInfo?.data.name }}</h2>
      <p>店面详情介绍</p>
      <i>&nbsp;</i>
      <div class="shop-details">
        <div class="shop-img">
          <img :src="shopInfo?.data.image" />
        </div>
        <div class="shop-info">
          <h4>店面简介</h4>
          <p>
            易高家居浙江台州温岭市店，内设客厅、卧室、厨房、阳台、书房等全屋八大空间定制家具展厅以及休闲区，周边交通便利，环境优雅。易高家居浙江台州温岭市店为您提供免费量尺设计等服务，一站式家居定制，就选易高家居。
          </p>
          <h4>服务内容</h4>
          <div class="server-con">
            <div><img src="/images/ruler_icon.png" />&nbsp;免费量尺</div>
            <div><img src="/images/fa_icon.png" />&nbsp;定制方案</div>
            <div><img src="/images/percent_icon.png" />&nbsp;领优惠券</div>
            <div><img src="/images/hy_icon.png" />&nbsp;会员积分</div>
            <div><img src="/images/wifi_icon.png" />&nbsp;免费 wifi</div>
            <div><img src="/images/parking_icon.png" />&nbsp;免费停车</div>
          </div>
        </div>
      </div>
    </div>

    <div class="free-booking">
      <div class="booking-left">
        <div>
          <h5>
            免费获取预约定制名额
            <span>已有 <span>8498</span> 位用户免费预约了定制名额</span>
          </h5>
        </div>
        <div>
          <el-form :inline="true" :model="formInline" class="form-inline">
            <el-form-item label="">
              <el-input
                size="large"
                v-model="formInline.name"
                placeholder="请输入您的姓名"
                clearable
              />
            </el-form-item>
            <el-form-item label="">
              <el-input
                size="large"
                v-model="formInline.phone"
                placeholder="请输入您的电话"
                clearable
              />
            </el-form-item>

            <el-form-item label="">
              <el-input
                size="large"
                v-model="inputCode"
                placeholder="输入验证码"
                clearable
              />
            </el-form-item>
            <el-form-item label="">
              <div
                class="captchasvg"
                v-html="captchaSVG"
                @click="refreshCaptcha"
              ></div>
            </el-form-item>
            <el-form-item>
              <el-button size="large" type="primary" @click="onSubmit"
                >立即预约</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="booking-right">联系电话：<span>400-0579-889</span></div>
    </div>
    <ProductsLatest />

    <div class="dz-ad">
      <div>
        <h2>
          尊享定制，由此开启<br /><span>易高整家定制全体员工恭候您的光临</span>
        </h2>
        <a
          href="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502&amp;siteToken=410b9dac4b1169822b6e70c7d40bb238"
          target="_blank"
          >免费预约</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const shopId = route.params.id;

interface IShopInfo {
  id: number;
  name: string;
  summary: string;
  image: string;
}

const { data: shopInfo } = await useFetch<DataResponse<IShopInfo>>(
  `/open/shops/info/info?id=${shopId}`,
  {
    method: "get",
  }
);

const captchaSVG = ref("");
const inputCode = ref("");

// 获取验证码
const refreshCaptcha = async () => {
  const data = await $fetch("/api/captcha");
  //   console.log(data);
  captchaSVG.value = data.data || "";
};
// 验证逻辑
const verify = async () => {
  const data = await $fetch("/api/verify", {
    method: "POST",
    body: { code: inputCode.value },
  });
  alert(data.valid ? "验证成功" : "验证失败");
};

refreshCaptcha();

const formInline = reactive({
  name: "",
  phone: "",
});

const onSubmit = () => {
  console.log("submit!");
};
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

img {
  display: block;
  border: none;
}

.shop-con {
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0 0;

  h2 {
    font-size: 32px;
    color: #333;
    text-align: center;
    letter-spacing: 2px;
  }

  & > p {
    font-size: 18px;
    color: #676767;
    text-align: center;
    margin-top: 15px;
  }

  i {
    width: 100px;
    margin: 20px auto 0;
    display: block;
    border-top: 1px solid #f9c152;
  }

  & > div {
    width: 1200px;
    height: 582px;
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

    .shop-img {
      width: 880px;
      height: 582px;
    }

    .shop-info {
      width: 320px;
      height: 582px;
      background: var(--theme-color);
      padding: 0px 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h4 {
        font-size: 24px;
        color: #333;
      }

      p {
        font-size: 16px;
        color: #333;
        text-align: justify;
        line-height: 25px;
        padding: 30px 0 30px;
        border-bottom: 1px solid #666;
        overflow: hidden;
        margin-bottom: 20px;
      }

      .server-con {
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
        margin-top: 10px;

        div {
          width: 128px;
          height: auto;
          border: 1px solid #333;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 5px 0;
          margin-top: 15px;
        }
      }
    }
  }
}

.free-booking {
  width: 1200px;
  margin: 20px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border: 1px solid #e8e8e8;

  .booking-left {
    width: 780px;

    h5 {
      font-size: 24px;
      color: #222;
      padding-bottom: 10px;

      & > span {
        font-size: 16px;
        color: #999;
        margin-left: 10px;
        padding-left: 15px;
        font-weight: normal;
        border-left: 1px solid #e8e8e8;

        span {
          background: #f9c152;
          color: #222;
          padding: 2px 4px;
          font-size: 13px;
          font-weight: bold;
        }
      }
    }

    .form-inline {
      .el-form-item {
        margin-right: 12px;
        margin-bottom: 0px;

        .el-input {
          --el-input-width: 160px;
        }

        .captchasvg {
          width: 100px;
          height: 38px;
        }
      }
    }
  }

  .booking-right {
    border-left: 1px solid #e8e8e8;
    text-align: center;
    height: 81px;
    line-height: 81px;
    font-size: 24px;
    padding-left: 50px;
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
</style>
