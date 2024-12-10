<template>
  <div class="header" :class="{ float: isFloat }">
    <a class="logo" href="/" target="_self">
      <img class="logo-img" src="/images/logo.png" />
    </a>
    <HeaderMenu></HeaderMenu>
  </div>
</template>

<script lang="ts" setup>
const isFloat = ref(false);

// 获取到当前激活的路由对象,通过监听器watch监听route.path的路由变化来实现头部导航的刷新后选中状态、回退及是否悬浮等功能
// Vue3中监听器在页面加载（监听器刚创建的时候）的时候不会执行，所以为了在页面加载（监听器刚创建的时候）的时候也监听数据的变化，则需要添加第三个参数：{immediate:true}
const route = useRoute();
watch(
  () => route.path,
  (value, oldvalue) => {
    // 通过监听当前活动的路由来判断主导航是否采用浮动样式
    if (value == "/" || "") {
      isFloat.value = true;
    } else {
      isFloat.value = false;
    }
  },
  { immediate: true }
);
</script>
<style lang="less">
.header {
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: #fff;

  .logo {
    width: 162px;
    height: 90px;
    background-color: #1e3a8a;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-img {
      display: block;
      width: 83.33%;
    }
  }
}

.el-menu--horizontal.el-menu,
.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title,
.el-menu--horizontal > .el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: none !important;
}

.float {
  left: 50%;
  margin-left: -600px !important;
  position: absolute;
  top: 60px;
  z-index: 9999;
}
</style>
