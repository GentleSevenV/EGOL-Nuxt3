<template>
  <div class="join">
    <img src="/images/join_banner.jpg" class="banner" />
    <div class="section sheet">
      <h2>今日仅剩 <span>6</span> 个开店扶持名额</h2>
      <p>立即填写表单</p>
      <i>&nbsp;</i>

      <div class="formbox">
        <div>
          <el-form :inline="true" :model="formInline" class="join-form-inline">
            <el-form-item label="1">
              <el-input
                v-model="formInline.name"
                placeholder="请输入您的姓名"
                clearable
              />
            </el-form-item>
            <el-form-item label="2">
              <el-input
                v-model="formInline.phone"
                placeholder="请输入您的电话"
                clearable
              />
            </el-form-item>
            <el-form-item label="3">
              <el-cascader
                size="large"
                :options="pcaRegion"
                v-model="selectedOptions"
              >
              </el-cascader>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <div>免费宣传</div>
          <div>样品返还</div>
          <div>开业指导</div>
          <div>装修全送</div>
          <div>人员培训</div>
          <div>店面设计</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { regionDataPlus } from "../utils/china-area-data";
const pcaRegion = ref(regionDataPlus);
const selectedOptions = ref([]);
const formInline = reactive({
  name: "",
  phone: "",
  region: "",
});

const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<style lang="less" scoped>
.join {
  .banner {
    width: 100%;
    display: block;
  }

  .section {
    width: 1200px;
    margin: 80px auto;

    h2 {
      font-size: 35px;
      color: #333;
      text-align: center;

      span {
        color: #fff;
        background: #f9c152;
        padding: 5px 15px;
        display: inline-block;
      }
    }

    & > p {
      font-size: 16px;
      color: #666;
      text-align: center;
      letter-spacing: 1px;
      padding: 20px 0 15px;
    }

    & > i {
      width: 80px;
      height: 20px;
      border-top: 1px solid #f9c152;
      display: block;
      margin: 0 auto;
    }

    .formbox {
      width: 1200px;
      height: 450px;
      border: 1px solid #e8e8e8;
      padding: 30px 60px 0 300px;
      background: url(/images/join_form_bg.jpg) no-repeat;
      background-position: 60px 37px;

      .join-form-inline .el-input {
        --el-input-width: 220px;
      }
    }
  }
}
</style>
