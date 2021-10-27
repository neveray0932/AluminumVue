<template>
  <el-tabs type="border-card">
    <el-tab-pane label="客戶資料">
      <el-button plain @click="insertCust">新增</el-button>
      <el-dialog
        title="新增客戶"
        :visible.sync="insertDialogVisible"
        width="70%"
      >
        <!--內容主體區域-->
        <el-form
          :model="custForm"
          :rules="rules"
          ref="custForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-row>
            <el-col :span="10">
              <el-form-item label="客戶" prop="customer">
                <el-input
                  v-model="custForm.customer"
                  placeholder="客戶名稱"
                  name="customer"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="寶號" prop="title">
                <el-input
                  v-model="custForm.title"
                  placeholder="寶號"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="21">
              <el-form-item label="地址" prop="address">
                <el-input
                  v-model="custForm.address"
                  placeholder="地址"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="7">
              <el-form-item label="電話" prop="tel">
                <el-input v-model="custForm.tel" placeholder="電話"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="傳真" prop="fax">
                <el-input v-model="custForm.fax" placeholder="傳真"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="聯絡人" prop="contact">
                <el-input
                  v-model="custForm.contact"
                  placeholder="聯絡人"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="行動電話" prop="phone">
                <el-input
                  v-model="custForm.phone"
                  placeholder="行動電話"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="統一編號" prop="taxnumber">
                <el-input
                  v-model="custForm.taxnumber"
                  placeholder="統一編號"
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
          <el-button type="primary" @click="submitForm('custForm')"
            >確 定</el-button
          >
          <el-button type="warning" @click="resetForm('custForm')"
            >重 置</el-button
          >
        </span>
      </el-dialog>
      <quotation-table />
      <!-- <router-view /> -->
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import quotationTable from "./quotationTable.vue";
// import axios from "axios";
export default {
  inject: ["reload"],
  components: {
    quotationTable,
  },

  data() {
    return {
      insertDialogVisible: false,
      custForm: {
        customer: "",
        title: "",
        address: "",
        tel: "",
        fax: "",
        contact: "",
        phone: "",
        taxnumber: "",
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
    submitForm(formName) {
      var cust = [
        {
          customer: this.custForm.customer,
          title: this.custForm.title,
          tel: this.custForm.tel,
          fax: this.custForm.fax,
          phone: this.custForm.phone,
          contact: this.custForm.contact,
          address: this.custForm.address,
          taxnumber: this.custForm.taxnumber,
        },
        {
          customer: this.custForm.customer,
          title: this.custForm.title,
          tel: this.custForm.tel,
          fax: this.custForm.fax,
          phone: this.custForm.phone,
          contact: this.custForm.contact,
          address: this.custForm.address,
          taxnumber: this.custForm.taxnumber,
        },
      ];

      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
          this.$axios({
            method: "post",
            url: "/public/api/customer1",
            data: cust,

            headers: {
              token: "",
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
            },
          })
            .then((a) => {
              console.log(a);

              if (a.status === 201) {
                this.$message({
                  message: "成功新增一筆資料",
                  type: "success",
                });

                this.insertDialogVisible = false;
              }

              // window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              this.$message.error("新增客戶異常");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },

    insertCust() {
      this.insertDialogVisible = true;
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
