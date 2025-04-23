<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="wxForm"
      status-icon
    >
      <el-form-item class="form-con" prop="phone">
        <el-input
          v-model="ruleForm.phone"
          placeholder="请输入您微信绑定的手机号码"
        />
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from "element-plus";

interface RuleForm {
  phone: string;
}

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<RuleForm>({
  phone: "",
});

const rules = reactive<FormRules<RuleForm>>({
  phone: [
    { required: true, message: "请输入您微信绑定的手机号码", trigger: "blur" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "请输入正确的11位手机号码",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      $fetch<DataResponse<IMessage>>(`/open/messages/wxaccount/add`, {
        method: "post",
        body: {
          phone: ruleForm.phone,
        },
      })
        .then((res) => {
          if (res.code == 1000) {
            ElMessage({
              message:
                "您的信息已成功提交, 24小时内会有工作人员和您联系，请保持手机畅通。",
              type: "success",
              showClose: true,
              duration: 0,
            });

            formEl.resetFields();
          } else {
            ElMessage({
              message: res.message,
              type: "error",
              showClose: true,
              duration: 0,
            });
          }
        })
        .catch((err) => {
          ElMessage({
            message: "请按照页面提示填写相关信息。",
            type: "error",
            showClose: true,
            duration: 0,
          });
        });
    } else {
      // console.log("error submit!", fields);
      ElMessage({
        message: "表单验证未通过，请按照页面提示填写相关信息。",
        type: "error",
      });
    }
  });
};
</script>
<style lang="less" scoped>
.wxForm {
  width: 300px;
  margin: 20px 0;

  .el-form-item__content {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;

    .el-input {
      width: 240px;
      font-size: 14px;

      :deep(.el-input__wrapper) {
        border-radius: 0;
        height: 38px;
        box-shadow: none;
      }
    }

    .el-button {
      border-radius: 0;
      height: 38px;

      &:hover {
        background-color: #f8c052;
        border-color: #f8c052;
      }
    }
  }
}
</style>
