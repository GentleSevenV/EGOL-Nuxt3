<template>
  <div>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="wxForm" status-icon>
      <el-form-item class="form-con" prop="wxaccount">
        <el-input v-model="ruleForm.wxaccount" placeholder="请输入您微信绑定的手机号码" />
        <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from "element-plus";

interface RuleForm {
  wxaccount: string;
}

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive<RuleForm>({
  wxaccount: "",
});

const rules = reactive<FormRules<RuleForm>>({
  wxaccount: [
    { required: true, message: "请输入您微信绑定的手机号码", trigger: "blur" },
    {
      required: true,
      pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
      message: "请输入正确的11位手机号码",
      trigger: "blur",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
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
