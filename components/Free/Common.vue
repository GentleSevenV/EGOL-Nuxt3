<template>
  <div class="common">
    <div class="contact">
      易高整家定制竭诚为您提供服务<br />
      <a
        href="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502&amp;siteToken=410b9dac4b1169822b6e70c7d40bb238"
        target="_blank"
        >立即咨询</a
      >
    </div>
    <div class="advantage">
      <h2>我们的优势</h2>
      <p>明星代言、和国际大品牌商业合作、五大保障体系</p>
      <i>&nbsp;</i>
      <img src="/images/free_advantage.jpg" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.common {
  width: 100%;

  .contact {
    height: 300px;
    background: url(/images/free_link_bg.jpg) top center no-repeat;
    background-size: 100% 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 35px;
    color: #fff;
    letter-spacing: 1px;

    a {
      display: block;
      padding: 10px 20px;
      border: 1px solid #fff;
      color: #fff;
      font-size: 24px;
      margin-top: 20px;
    }
  }

  .advantage {
    margin: 0 auto;
    width: 1200px;
    padding: 110px 0;

    h2 {
      font-size: 35px;
      color: #333;
      text-align: center;
    }

    p {
      font-size: 16px;
      color: #666;
      text-align: center;
      letter-spacing: 1px;
      padding: 20px 0 15px;
    }

    i {
      width: 80px;
      height: 20px;
      border-top: 1px solid #f9c152;
      display: block;
      margin: 0 auto;
    }

    & > img {
      width: 1182px;
      margin: 40px auto 0;
      display: block;
    }
  }
}
</style>
