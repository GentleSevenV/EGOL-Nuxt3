<template>
  <div class="contactus">
    <div class="header">
      <img src="/images/contactus_banner.jpg" />
    </div>
    <div class="container">
      <h2>CONTACT US</h2>
      <p>联系我们</p>

      <div class="contact-info">
        <div class="contact-top">
          <h4>易高家居有限公司</h4>
          <p>全国统一服务热线：<span>400 - 057 - 9889</span></p>
          <p>
            售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前：<span
              >19905609682 （直线）</span
            >
          </p>
          <p>
            定&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;制：<span
              >0551 - 63463820 转 91103</span
            >
          </p>
          <p>
            售&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;后：<span>18010860507</span>
          </p>
          <p>
            人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;资：<span
              >0551 - 63462472 转 90501</span
            >
          </p>
          <p>
            微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信：<span
              >yigaojiaju（个人微信添加即可）</span
            >
          </p>
          <div class="btn">
            <a
              href="tencent://Message/?Uin=779894377&amp;websiteName=sc.chinaz.com=&amp;Menu=yes"
              class="btn-qq"
              ><Icon class="icon" name="icons:qq" />客服QQ</a
            >
            <a
              href="http://p.qiao.baidu.com/cps/chat?siteId=12887600&amp;userId=26908502"
              class="btn-ol"
              ><Icon class="icon" name="icons:kf" />在线客服</a
            >
          </div>
        </div>

        <div class="contact-btm">
          <div>
            <div class="net">www.yigaojiaju.com</div>
            <div class="mail">779894377@qq.com</div>
            <div class="adr">
              <span>办公大厦</span>
              中国·合肥市双凤经济开发区金淮路16号<br /><br />
              <span>生产基地</span>
              双凤：中国·合肥双凤开发区易高定制产业园<br />
              下塘：中国·合肥长丰县下塘智能化生产基地
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.contactus {
  width: 100%;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }

  .container {
    width: 100%;
    padding: 100px 0;
    background: url(/images/contactbg.jpg) top center no-repeat;
    background-size: 100% 100%;

    & > h2 {
      font-size: 50px;
      color: #333;
      text-align: center;
    }

    & > p {
      font-size: 30px;
      color: #333;
      font-weight: normal;
      text-align: center;
      letter-spacing: 1px;
    }

    .contact-info {
      width: 1200px;
      margin: 0 auto;

      .contact-top {
        width: 1200px;
        padding-left: 100px;
        background: #fff url(/images/contact_contentbg.jpg) top right no-repeat;
        height: 510px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        margin-top: 38px;

        h4 {
          font-size: 24px;
          color: #333;
          letter-spacing: 1px;
          padding-bottom: 15px;
        }

        p {
          font-size: 16px;
          color: #333;
          margin-top: 10px;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            border: 1px solid #333;
            height: 32px;
            line-height: 32px;
            color: #333;
            font-size: 16px;
            margin-top: 35px;
            margin-right: 10px;
            text-align: center;
            border-radius: 4px;

            .icon {
              font-size: 18px;
              color: #5d5d5d;
            }
          }
        }
      }

      .contact-btm {
        background: #fff url(/images/contact_map.jpg) 20px 20px no-repeat;
        height: 364px;
        margin-top: 20px;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        & > div {
          margin-right: 60px;
          font-size: 16px;

          .net {
            background: url(/images/contact_neticon.jpg) center left no-repeat;
            background-size: 6%;
            height: 32px;
            line-height: 32px;
            padding-left: 30px;
            margin-bottom: 10px;
          }

          .mail {
            background: url(/images/contact_mailicon.jpg) center left no-repeat;
            background-size: 6%;
            height: 32px;
            line-height: 32px;
            padding-left: 30px;
            margin-bottom: 10px;
          }

          .adr {
            background: url(/images/contact_adricon.jpg) 0px 0px no-repeat;
            background-size: 6%;
            padding-left: 30px;
            color: #999;
            line-height: 20px;
            font-size: 14px;

            span {
              font-size: 16px;
              color: #333;
              margin-bottom: 6px;
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
