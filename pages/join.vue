<template>
  <div class="join">
    <img src="/images/join_banner.jpg" class="banner" />
    <div class="section join-form">
      <h2>今日仅剩 <span>6</span> 个开店扶持名额</h2>
      <p>立即填写表单</p>
      <i>&nbsp;</i>

      <div class="formbox">
        <div>
          <el-form
            :model="formData"
            :rules="rules"
            ref="ruleFormRef"
            class="join-form-inline"
          >
            <div class="form-input">
              <el-form-item prop="name">
                <el-input
                  v-model="formData.name"
                  placeholder="请输入您的姓名"
                  size="large"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="phone">
                <el-input
                  v-model="formData.phone"
                  placeholder="请输入您的电话"
                  size="large"
                  clearable
                />
              </el-form-item>
              <el-form-item prop="region">
                <ClientOnly>
                  <el-cascader
                    v-model="formData.region"
                    size="large"
                    :options="pcaRegion"
                    placeholder="请选择您所在的城市"
                    @change="distChange"
                    clearable
                  >
                  </el-cascader>
                </ClientOnly>
              </el-form-item>
              <el-form-item prop="area">
                <el-select
                  v-model="formData.area"
                  placeholder="请选择您的店铺面积"
                  size="large"
                  style="width: 290px"
                  clearable
                >
                  <el-option label="100-200㎡" value="100-200㎡" />
                  <el-option label="200-300㎡" value="200-300㎡" />
                  <el-option label="300-500㎡" value="300-500㎡" />
                  <el-option label="500㎡以上" value="500㎡以上" />
                </el-select>
              </el-form-item>
            </div>
            <div>
              <el-form-item>
                <div class="submit-btn" @click="onSubmit(ruleFormRef)">
                  <img src="/images/join_form_btn2.jpg" />
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="join-server">
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
import type { CascaderValue } from "element-plus";
import { pcaTextArr, regionData, codeToText } from "element-china-area-data";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";

const pcaRegion = ref(pcaTextArr);

interface RuleForm {
  name: string;
  phone: string;
  region: string[];
  area: string;
}

const formData = reactive<RuleForm>({
  name: "",
  phone: "",
  region: [],
  area: "",
});

const distChange = (values: CascaderValue) => {
  // 如果此处获取到的values为省市区的编码组成的一个数组，类似["11","1101","110108"],使用codeToText解析出来的对应中文的省市区就是["北京市","市辖区","海淀区"]
  // console.log(values);
  if (Array.isArray(values)) {
    formData.region = values.map((item) => {
      return item.toString();
    });
  }

  // 由于values类型是CascaderValue，而我们可以看源码发现CascaderValue是一个联合类型（CascaderNodeValue | CascaderNodePathValue | (CascaderNodeValue | CascaderNodePathValue)[]），对于联合类型，我们需要按照它类型的不同的情况去做对应的处理，所以此处我们先判断当他是一个数组类型的时候
  // if (Array.isArray(values)) {
  //   // 我们在源码中可以发现CascaderValue它的每一项的值其实都是string类型或者number类型，所以我们遍历这个value，将里面的值分别赋值给province, city, district这三个变量。
  //   const [province, city, district] = values.map(
  //     // 由于codeToText是个大的对象（element-china-area-data这个库的文档里有说），所以必须对item进行一个转换成string的操作。
  //     (item) => codeToText[item.toString()]
  //   );
  //   console.log(province, city, district);
  // }
};

const ruleFormRef = ref<FormInstance>();

const rules = reactive({
  name: [
    { required: true, message: "请输入正确的名称", trigger: "blur" },
    { min: 2, max: 5, message: "名称的长度为2~5个字符", trigger: "blur" },
  ],
  phone: [{ required: true, message: "请输入正确的手机号码", trigger: "blur" }],
  region: [
    { required: true, message: "请选择您所在的地区", trigger: "change" },
  ],
  area: [{ required: true, message: "请选择您的店铺面积", trigger: "change" }],
});

const onSubmit = async (formEl: FormInstance | undefined) => {
  // console.log(formEl);
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("验证通过!", formData);
      $fetch<DataResponse<IMessage>>(`/open/messages/join/add`, {
        method: "post",
        body: {
          name: formData.name,
          phone: formData.phone,
          province: formData.region[0],
          city: formData.region[1],
          district: formData.region[2],
          area: formData.area,
        },
      })
        .then((res) => {
          if (res.code == 1000) {
          }
        })
        .catch((err) => {
          console.log("提交失败！" + err);
        });
    } else {
      console.log("error submit!", fields);
    }
  });
};
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
        background: var(--theme-color);
        padding: 5px 15px;
        display: inline-block;
      }
    }

    & > p {
      font-size: 18px;
      color: #666;
      text-align: center;
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
      height: 390px;
      border: 1px solid var(--theme-color);
      padding: 0 60px 0 300px;
      background: url(/images/join_form_bg.jpg) no-repeat;
      background-position: 60px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .join-form-inline {
        width: 838px;
        margin-bottom: 12px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .form-input {
          width: 600px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;

          .el-form-item {
            padding-bottom: 5px;
          }

          .el-input {
            --el-input-width: 290px;
          }

          :deep(.el-cascader) {
            width: 290px;
          }
        }

        .submit-btn {
          cursor: pointer;
          width: 216px;

          img {
            width: 100%;
            display: block;
            border-radius: 4px;
          }
        }
      }

      .join-server {
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
        padding-top: 30px;
        border-top: 1px solid #e8e8e8;

        div {
          padding: 0 20px;
          height: 35px;
          line-height: 35px;
          border: 1px solid #666;
          border-radius: 4px;
          font-size: 16px;
          color: #666;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
