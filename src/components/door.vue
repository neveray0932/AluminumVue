<template>
  <el-tabs type="border-card">
    <el-tab-pane label="扇-SECC1.0(1000*2100)">
      <!-- <el-button disabled plain @click="insertDoor">新增</el-button> -->
      <el-dialog
        title="新增門扇"
        :visible.sync="insertDialogVisible"
        width="70%"
      >
        <!--內容主體區域-->
        <el-form
          :model="doorForm"
          :rules="rules"
          ref="doorForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-row>
            <el-col :span="10">
              <el-form-item label="扇名" prop="doorname">
                <el-input
                  v-model="doorForm.doorname"
                  placeholder="扇名"
                  name="doorname"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="價錢" prop="price">
                <el-input
                  v-model="doorForm.price"
                  placeholder="價錢"
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
          <el-button type="primary" @click="submitForm('doorForm')"
            >確 定</el-button
          >
          <el-button type="warning" @click="resetForm('doorForm')"
            >重 置</el-button
          >
        </span>
      </el-dialog>
      <doorTable />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import doorTable from "./doorTable.vue";
export default {
  components: {
    doorTable,
  },

  data() {
    return {
      insertDialogVisible: false,
      doorForm: {
        doorname: "",
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
