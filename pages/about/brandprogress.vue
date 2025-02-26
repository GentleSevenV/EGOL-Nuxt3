<template>
  <div class="brandprogress">
    <AboutHeader />
    <div class="second-nav">
      <NuxtLink class="nav-item" to="/about/brandintro">品牌介绍</NuxtLink>
      <NuxtLink class="nav-item" to="/about/brandhonor">所获荣誉</NuxtLink>
      <NuxtLink class="nav-item active" to="/about/brandprogress"
        >发展历程</NuxtLink
      >
      <NuxtLink class="nav-item" to="/about/shops">专卖形象</NuxtLink>
    </div>
    <div class="container">
      <div class="page-title">
        <h2>发展历程</h2>
        <p>21年行业深耕，专业值得信赖</p>
        <i></i>
      </div>
      <div class="progress-img">
        <img src="/images/pr_new.jpg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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

.container {
  width: 100%;
  padding: 80px 0;

  .page-title {
    h2 {
      font-size: 32px;
      color: #333;
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
      color: #676767;
      text-align: center;
    }

    i {
      display: block;
      width: 100px;
      height: 15px;
      margin: 0 auto;
      border-bottom: 1px solid var(--theme-color);
    }
  }

  .progress-img {
    width: 1200px;
    margin: 60px auto 0;

    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
