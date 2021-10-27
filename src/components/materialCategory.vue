<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    label-position="top"
  >
    <el-row>
      <el-col :span="10">
        <el-form-item label="材質類別" prop="category">
          <el-input v-model="ruleForm.name" placeholder="材質類別"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row id="btn">
      <el-button type="primary">送出</el-button>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name: "materialCategory",
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "請輸入客戶名稱",
            trigger: "blur",
          },
        ],
        address: [{ required: true, message: "請輸入地址", trigger: "blur" }],
        contact: [{ required: true }],
        phone: [{ required: true }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
