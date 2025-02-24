<template>
  <div class="header">
    <div class="statistic">
      <div class="top">
        <div class="title">
          <h2>公司概况</h2>
          <p>截至2025年1月1日<span>易高整家定制概况</span></p>
        </div>
        <div class="data">
          <div>
            <el-statistic :value="outputClients">
              <template #title>
                <div class="title-statistic">服务客户</div>
              </template>
              <template #suffix><sup> + </sup></template>
            </el-statistic>
            <div class="footer-statistic">
              <span>clients</span>
            </div>
          </div>
          <div>
            <el-statistic :value="outputStores">
              <template #title>
                <div class="title-statistic">专卖店面</div>
              </template>
              <template #suffix><sup> + </sup></template>
            </el-statistic>
            <div class="footer-statistic">
              <span>stores</span>
            </div>
          </div>
          <div>
            <el-statistic :value="outputIndustry">
              <template #title>
                <div class="title-statistic">产业规模</div>
              </template>
              <template #suffix> ㎡<sup> + </sup> </template>
            </el-statistic>
            <div class="footer-statistic">
              <span>industry</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <Icon class="icon" name="icons:myd" />
          <p>客户满意度<br />Rise:<span>98.4%</span></p>
        </div>
        <div class="myd">
          <Icon class="icon" name="icons:zzl" />
          <p>年增长率<br />Rise:<span>39.6%</span></p>
        </div>
        <div>
          <Icon class="icon" name="icons:yf" />
          <p>研发占比<br />Rise:<span>6.3%</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const clients = ref(0);
const stores = ref(0);
const industry = ref(0);
import { useTransition } from "@vueuse/core";

const outputClients = useTransition(clients, {
  duration: 1500,
});
const outputStores = useTransition(stores, {
  duration: 1500,
});
const outputIndustry = useTransition(industry, {
  duration: 1500,
});
clients.value = 1000000;
stores.value = 1000;
industry.value = 300000;
</script>

<style lang="less" scoped>
.header {
  background: url(/images/about_banner.jpg) top center no-repeat;
  background-size: cover;
  width: 100%;
  height: 758px;
  display: flex;
  align-items: center;

  .statistic {
    width: 1520px;
    margin: 0 auto;

    .top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 60px;
      border-bottom: 2px solid #3c3c3c;

      .title {
        width: 370px;
        color: #fff;

        h2 {
          font-size: 48px;
          font-weight: normal;
          letter-spacing: 2px;
        }

        p {
          font-size: 14px;
          margin-top: 52px;
          line-height: 30px;
          letter-spacing: 1px;

          span {
            font-size: 20px;
            display: block;
          }
        }
      }

      .data {
        width: 1150px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        text-align: center;

        .el-statistic {
          --el-statistic-content-font-size: 60px;
          --el-statistic-content-font-weight: bold;
          --el-statistic-content-color: var(--theme-color);
        }

        .title-statistic {
          display: inline-flex;
          align-items: center;
          font-size: 20px;
          color: #fff;
        }

        .footer-statistic {
          text-align: center;
          font-size: 20px;
          color: #fff;
          line-height: 50px;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding-top: 60px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          font-size: 80px;
          color: var(--theme-color);
        }

        p {
          margin-left: 30px;
          font-size: 20px;
          color: #fff;
          line-height: 60px;

          span {
            font-size: 48px;
            font-weight: bold;
          }
        }
      }

      .myd {
        width: 600px;
        border-left: 2px solid #3c3c3c;
        border-right: 2px solid #3c3c3c;
      }
    }
  }
}
</style>
