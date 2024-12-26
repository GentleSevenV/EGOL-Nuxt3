<template>
  <div class="products">
    <div class="header">
      <img src="/public/images/qudz_banner.jpg" />
    </div>
    <div class="container">
      <div class="page-title">
        <h2>选择我们的定制产品</h2>
        <p>通过筛选器找到你所需要的</p>
        <i></i>
      </div>
      <div class="filter">
        <el-radio-group @change="categoryChange" v-model="category">
          <el-radio :value="1">Option A</el-radio>
          <el-radio :value="2">Option B</el-radio>
          <el-radio :value="3">Option C</el-radio>
        </el-radio-group>
      </div>

      <div class="products-list">
        <template v-for="item in productslist?.data.list" :key="item.id">
          <NuxtLink class="item" :to="`/products/${item.id}`">
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
            :page-sizes="[2, 4, 6]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNews"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProducts {
  id: number;
  name: string;
  coverImage: string;
  includes: string;
}

const category = ref(1);

const currentPage = ref(1);
const pageSize = ref(6);
const totalNews = ref(0);

const { data: productslist } = await useFetch<DataResponsePage<IProducts[]>>(
  "/open/products/info/page",
  {
    method: "post",
    body: {
      status: 1,
      page: currentPage.value,
      size: pageSize.value,
    },
  }
);

const categoryChange = async () => {
  const data = await $fetch("/open/products/info/page", {
    method: "post",
    body: {
      category: category.value,
      page: currentPage.value,
      size: pageSize.value,
      status: 1,
    },
  });
};

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
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
    background: url(/public/images/qwdz_bg.jpg) top center no-repeat;
    background-size: 100% 100%;
    padding: 100px 0;

    .filter {
      width: 1200px;
      margin: 40px auto;
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
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      .item {
        width: 380px;
        color: #333;
        margin-bottom: 30px;

        h3 {
          font-size: 20px;
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
          -webkit-box-shadow: 0px 2px 13px #ececec;
          box-shadow: 0px 2px 13px #ececec;

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
  }
}
</style>
