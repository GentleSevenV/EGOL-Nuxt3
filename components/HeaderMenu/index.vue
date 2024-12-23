<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      :ellipsis="false"
      background-color="#fff"
      text-color="#333"
      router
    >
      <template v-for="item in navArr" :key="item.id">
        <template v-if="item.subNav?.length == 0">
          <template v-if="item.value.startsWith('http')">
            <el-menu-item index="">
              <a class="httplink" :href="item.value" target="_blank">{{ item.name }}</a>
            </el-menu-item>
          </template>
          <template v-else>
            <el-menu-item :index="item.value">
              {{ item.name }}
            </el-menu-item>
          </template>
        </template>
        <template v-else>
          <el-sub-menu :index="item.value">
            <template #title>{{ item.name }}</template>
            <template v-for="subitem in item.subNav" :key="subitem.id">
              <el-menu-item :index="subitem.value">
                {{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>

      <el-menu-item> <Icon class="icon-phone" name="icons:phone" /> 400-057-9889 </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
// 获取到当前激活的路由对象,并且将当前的路由对象赋值给激活的el-menu,这样即可保证刷新页面时依旧保持当前路由
const route = useRoute();

// 为了当点击在news页面中的2级导航时，可以联动此处的主导航，所以将此组件的activeIndex使用useState定义为全局状态，这样就可以在news页面中修改此值,达到二级导航和主导航联动的效果
const activeIndex = useState("menu", () => {
  return route.path;
});

// 通过监听器watch监听route.path的路由变化来实现头部导航的刷新后选中状态
// Vue3中监听器在页面加载（监听器刚创建的时候）的时候不会执行，所以为了在页面加载（监听器刚创建的时候）的时候也监听数据的变化，则需要添加第三个参数：{immediate:true}
watch(
  () => route.path,
  (value, oldvalue) => {
    // console.log(value, oldvalue);
    // 判断路由中是否存在category值，如果有值，则需要将路径末尾的/:id去除之后赋值给el-menu绑定的activeIndex以获得状态更新
    // 例如：/news/brandnews/6,为了让el-menu可以获得状态更新，则必须去除路径末尾的/6
    if (route.params.category) {
      // 1.使用split方法将原route.path值按照/进行分割成数组
      const newValue = value.split("/");
      // 2.移除数组中第一个空元素
      newValue.shift();
      // 3.拼接成新的路径
      const newpath = "/" + newValue.slice(0, 2).join("/");
      activeIndex.value = newpath;
    } else {
      activeIndex.value = value;
    }
  },
  { immediate: true }
);

interface INavType {
  id: number;
  typeId: number;
  name: string;
  value: string;
  orderNum: number;
  parentId: null | number;
  subNav?: INavType[];
}

const navArr = ref<INavType[]>([]);

const { data }: any = await useFetch("/open/dict/info/data", {
  method: "post",
  body: { types: ["headnav"] },
});
// console.log(data);

// 1.取出所有导航数据
const headnav = data.value.data.headnav;
// console.log(headnav);

// 2.定义二级导航变量
let subNavData: INavType[] = [];

// 3.从所有导航数据中，分离出一级导航和二级导航
const navData = headnav.filter((item: INavType) => {
  if (!item.parentId) {
    item.subNav = [];
    return item;
  } else {
    subNavData.push(item);
  }
});

// 4.循环一级和二级导航，并且将符合条件的二级导航放入一级导航的subNav属性中
for (const subItem of subNavData) {
  for (const item of navData) {
    if (item.id == subItem.parentId) {
      item.subNav.push(subItem);
    }
  }
}

// 5.将组合后的导航数据存入ref定义的响应式变量navArr中，方便在template模板中循环渲染
navArr.value = navData;
</script>
<style lang="less" scoped>
.nav {
  padding-left: 28px;
  width: 1038px;

  .httplink {
    text-decoration: none;
  }

  .icon-phone {
    font-size: 18px;
    line-height: 28px;
    margin-right: 8px;
  }
}

.el-menu--horizontal {
  --el-menu-horizontal-height: 90px;
  --el-menu-item-font-size: 16px;
  border-bottom: none;
  width: 1010px;

  .el-menu-item.is-active {
    border-bottom: none !important;
    // color: #f8c052 !important;
  }

  .el-sub-menu.is-active {
    border-bottom: none !important;
  }

  .el-menu-item {
    --el-menu-base-level-padding: 18px;
    // color: #333 !important;

    // &:hover {
    //   --el-menu-hover-bg-color: none;
    //   color: var(--el-menu-hover-text-color) !important;
    // }
  }

  .el-menu-item:not(.is-disabled):focus,
  .el-menu-item:not(.is-disabled):hover {
    --el-menu-hover-bg-color: none;
  }
}
</style>
