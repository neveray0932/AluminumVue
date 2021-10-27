<template>
  <el-tabs type="border-card">
    <el-tab-pane label="其他產品">
      <el-button plain @click="insertDoor">新增</el-button>
      <el-dialog
        title="新增產品"
        :visible.sync="insertDialogVisible"
        width="70%"
      >
        <!--內容主體區域-->
        <el-form
          :model="prodForm"
          :rules="rules"
          ref="doorForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-row>
            <el-col :span="7">
              <el-form-item label="產品名稱" prop="prodname">
                <el-input
                  v-model="prodForm.prodname"
                  placeholder="產品名稱"
                  name="doorname"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="產品種類" prop="category">
                <el-input
                  v-model="prodForm.category"
                  placeholder="產品種類"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="產品價錢" prop="price">
                <el-input
                  v-model="prodForm.price"
                  placeholder="產品價錢"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- <el-row id="btn">
            <el-button @click="submitForm" type="primary">送出</el-button>
          </el-row> -->
        </el-form>
        <!--底部按鈕區域-->
        <span slot="footer" class="dialog-footer">
          <el-button @click="insertDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('prodForm')"
            >確 定</el-button
          >
          <el-button type="warning" @click="resetForm('prodForm')"
            >重 置</el-button
          >
        </span>
      </el-dialog>
      <otherpdTable />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import otherpdTable from "./otherpdTable.vue";
export default {
  components: {
    otherpdTable,
  },

  data() {
    return {
      insertDialogVisible: false,
      prodForm: {
        prodname: "",
        price: "",
      },
      rules: {
        customername: [
          {
            required: true,
            message: "請輸入客戶名稱",
            trigger: "blur",
          },
        ],
        address: [{ required: true, message: "請輸入地址", trigger: "blur" }],
        contact: [{ required: true, message: "請輸入聯絡人", trigger: "blur" }],
        phone: [{ required: true, message: "請輸入手機", trigger: "blur" }],
        taxnumber: [
          { required: true, message: "請輸入統一編號", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    insertDoor() {
      this.insertDialogVisible = true;
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
.el-main {
  text-align: left;
}
.el-form-item {
  margin: 10px 20px;
}
#btn {
  text-align: right;
}
</style>
