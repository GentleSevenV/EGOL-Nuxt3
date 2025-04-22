<template>
  <div class="products">
    <div class="header">
      <img src="/images/qudz_banner.jpg" />
    </div>
    <div class="container">
      <div class="page-title">
        <h2>选择我们的定制产品</h2>
        <p>通过筛选器找到你所需要的</p>
        <i></i>
      </div>
      <div class="filter">
        <div class="filter-item">
          <h3>类型</h3>
          <el-radio-group @change="categoryChange" v-model="category">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.category">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="filter-item">
          <h3>风格</h3>
          <el-radio-group @change="styleChange" v-model="style">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.style">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
        <div class="filter-item">
          <h3>空间</h3>
          <el-radio-group @change="spaceChange" v-model="space">
            <el-radio border :value="0">全部</el-radio>
            <template v-for="item in filterDict?.data.space">
              <el-radio border :value="item.value">{{ item.name }}</el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>

      <div v-if="productsList?.data.list.length != 0">
        <div class="products-list">
          <template v-for="item in productsList?.data.list" :key="item.id">
            <NuxtLink class="item" :to="`/products/${item.id}.html`">
              <h3>{{ item.name }}</h3>
              <i></i>
              <img :src="item.coverImage" />
              <div>
                <p>包含：{{ item.includes }}</p>
                <div class="readmore">
                  <Icon class="icon-play" name="icons:play" />
                  了解更多
                </div>
              </div>
            </NuxtLink>
          </template>
        </div>

        <div class="pagination">
          <ClientOnly fallback-tag="span" fallback="分页加载中...">
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[3, 6, 9]"
              background
              layout="total, sizes, prev, pager, next, jumper"
              :total="
                productsList?.data.pagination
                  ? productsList?.data.pagination.total
                  : 0
              "
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </ClientOnly>
        </div>
      </div>
      <div v-else>
        <el-empty description="未查询到与该条件匹配的商品，请选择其他品类。" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title:
    "易高整家定制产品-衣柜效果图片,橱柜效果图片,全屋定制家具效果图片,榻榻米效果图片大全",
  meta: [
    {
      name: "description",
      content:
        "最具代表性的衣柜效果图、衣帽间效果图、酒柜效果图、书柜效果图、榻榻米效果图、儿童房效果图等内容，全部产品均为易高定制家居研发部门原创设计，涵盖了易高定制家居全品类产品的主要组成部分。想看最新衣柜效果图片,橱柜效果图片,定制家具效果图片,榻榻米效果图片大全，就上易高定制家居官网！",
    },
    {
      name: "keywords",
      content:
        "易高定制家具,衣柜效果图片,橱柜效果图片,定制家具效果图片,榻榻米效果图片大全",
    },
  ],
});

interface IProductsList {
  id: number;
  name: string;
  coverImage: string;
  includes: string;
}

// 1.初始化筛选列表选中状态
const category = ref<string | number | boolean | undefined>(0);
const style = ref<string | number | boolean | undefined>(0);
const space = ref<string | number | boolean | undefined>(0);

// 2.初始化默认产品列表请求参数
const categoryRef = ref<string | number | boolean | undefined | null>(null);
const styleRef = ref<string | number | boolean | undefined | null>(null);
const spaceRef = ref<string | number | boolean | undefined | null>(null);

// 3.获取当前路由中的currentPage参数，用于发送网络请求获取当前页面的news数据
const route = useRoute();
const currentPage = ref(route.query.page ? Number(route.query.page) : 1);
const pageSize = ref(9);

// 4.获取筛选器中各分类的数据
const { data: filterDict } = await useFetch<DataResponsePageDict<IDict[]>>(
  "/open/dict/info/data",
  {
    method: "post",
    body: { types: ["category", "style", "space"] },
  }
);

// 5.获取默认产品列表数据
const { data: productsList } = await useFetch<
  DataResponsePage<IProductsList[]>
>("/open/products/info/page", {
  method: "post",
  body: {
    category: categoryRef,
    style: styleRef,
    space: spaceRef,
    page: currentPage,
    size: pageSize,
    status: 1,
  },
});

// 6.分类筛选逻辑：修改分类请求参数，自动触发useFetch网络请求，加载分类产品数据
const categoryChange = async (val: string | number | boolean | undefined) => {
  if (val === 0) {
    categoryRef.value = null;
  } else {
    categoryRef.value = val;
  }
};

// 7.风格筛选逻辑：修改风格请求参数，自动触发useFetch网络请求，加载风格产品数据
const styleChange = (val: string | number | boolean | undefined) => {
  if (val === 0) {
    styleRef.value = null;
  } else {
    styleRef.value = val;
  }
};

// 8.空间筛选逻辑：修改空间请求参数，自动触发useFetch网络请求，加载空间产品数据
const spaceChange = (val: string | number | boolean | undefined) => {
  if (val === 0) {
    spaceRef.value = null;
  } else {
    spaceRef.value = val;
  }
};

// 9.产品展示数量逻辑：修改产品展示数量请求参数，自动触发useFetch网络请求，加载产品数据
const handleSizeChange = (val: number) => {
  pageSize.value = val;
};

// 10.分页逻辑：修改分页请求参数，自动触发useFetch网络请求，加载产品数据
const handleCurrentChange = async (val: number) => {
  await navigateTo({
    path: `/products.html`,
    query: {
      page: val,
    },
  });
  if (import.meta.client) {
    window.scrollTo(0, 700);
  }
};

// 11.当我们点击浏览器上的后退按钮时，如果我们也想展示后退之后页面的数据时，我们只能通过watch去监听浏览器地址栏中的page参数(也就是route.query.page这个值)，当page参数发生变化，watch会监听到2个值，一个是新的route.query.page值，一个是旧的route.query.page值，那么我们需要将新的page参数值赋值给currentPage.value，那么此时currentPage这个响应式对象发生了改变，那么也就会自动触发上面的useFetch网络请求来获取后退之后这一页的最新数据；
watch(
  () => route.query.page,
  (newVal, oldVal) => {
    if (Number(newVal) > 1) {
      currentPage.value = Number(newVal);
    } else {
      currentPage.value = 1;
    }
  }
);
</script>
<style lang="less" scoped>
.products {
  width: 100%;

  .header {
    img {
      width: 100%;
      display: block;
    }
  }

  .container {
    width: 100%;
    background: url(/images/qwdz_bg.jpg) top center no-repeat;
    background-size: 100% 100%;
    padding: 100px 0;

    .filter {
      width: 1200px;
      margin: 40px auto 80px;

      .filter-item {
        margin-bottom: 20px;

        h3 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }

      :deep(.el-radio) {
        line-height: 32px;
      }
      :deep(.el-radio__input) {
        display: none;
      }
    }

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

    .products-list {
      width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 380px); /* 每行3个，每个宽度为380px */
      gap: 30px; /* 固定间距 */
      justify-content: space-between; /* 子元素之间的间距自适应 */

      .item {
        width: 380px;
        color: #333;
        margin-bottom: 30px;

        h3 {
          font-size: 18px;
        }

        i {
          width: 18px;
          height: 10px;
          border-bottom: 2px solid var(--theme-color);
          display: block;
          margin-bottom: 20px;
        }

        img {
          width: 100%;
          display: block;
        }

        div {
          padding: 25px;
          font-size: 14px;
          color: #939393;
          background-color: #fff;
          -webkit-box-shadow: 0px 2px 13px #ececec;
          box-shadow: 0px 0px 10px #ececec;

          p {
            color: #939393;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .readmore {
            width: 120px;
            display: flex;
            align-content: center;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #272727;
            padding: 8px 0;
            border: 1px solid #e4e4e4;
            margin-top: 10px;
            box-shadow: none;

            .icon-play {
              margin-right: 6px;
              font-size: 16px;
              color: var(--theme-color);
            }
          }
        }
      }
    }

    .pagination {
      width: 1200px;
      margin: 60px auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
