<template>
  <el-tabs type="border-card">
    <el-tab-pane label="材料資料">
      <el-button plain @click="insertCust">新增</el-button>
      <el-dialog
        title="新增材料"
        :visible.sync="insertDialogVisible"
        width="70%"
      >
        <el-form
          :model="materialForm"
          :rules="rules"
          ref="materialForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="top"
        >
          <el-row>
            <el-col :span="10">
              <el-form-item label="材料名稱" prop="materialname">
                <el-input
                  v-model="materialForm.materialname"
                  placeholder="材料名稱"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="材料分類" prop="materialcategory">
                <el-input
                  v-model="materialForm.materialcategory"
                  placeholder="材料分類"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10">
              <el-form-item label="材料單價" prop="materialprice">
                <el-input
                  v-model="materialForm.materialprice"
                  placeholder="材料單價"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="材料單位" prop="materialunits">
                <el-input
                  v-model="materialForm.materialunits"
                  placeholder="材料單位"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="材料備註" prop="materialmemo">
                <el-input
                  v-model="materialForm.materialmemo"
                  placeholder="材料備註"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="材料成本" prop="materialcost">
                <el-input
                  v-model="materialForm.materialcost"
                  placeholder="材料成本"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item label="材料系數" prop="materialcofficient">
                <el-input
                  v-model="materialForm.materialcofficient"
                  placeholder="材料系數"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- <el-row id="btn">
            <el-button type="primary" @click="submitForm1"> 送出 </el-button>
          </el-row> -->
        </el-form>
        <!--底部按鈕區域-->
        <span slot="footer" class="dialog-footer">
          <el-button @click="insertDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('materialForm')"
            >確 定</el-button
          >
          <el-button type="warning" @click="resetForm('materialForm')"
            >重 置</el-button
          >
        </span>
      </el-dialog>
      <materialTable />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import materialTable from "./materialTable.vue";
// import axios from "axios";
export default {
  components: {
    materialTable,
  },
  data() {
    return {
      insertDialogVisible: false,
      materialForm: {
        materialname: "",
        materialcategory: "",
        materialprice: "",
        materialunits: "",
        materialmemo: "",
        materialcofficient: 1,
        materialcost: "",
      },
      rules: {},
    };
  },
  methods: {
    insertCust() {
      this.insertDialogVisible = true;
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    submitForm() {
      let m = this.materialForm;
      var material = {
        materialname: m.materialname,
        category: m.materialcategory,
        unitprice: m.materialprice,
        units: m.materialunits,
        memo: m.materialmemo,
        coefficient: m.materialcofficient,
        cost: m.materialcost,
      };

      this.$axios({
        url: "/public/api/material",
        method: "post",
        data: material,
       
      })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            this.open2();
            // this.$router.replace({ path: "/" });
            // window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    open2() {
      this.$message({
        message: "成功新增一筆資料",
        type: "success",
      });
    },
  },
};
</script>
<style>
.el-main {
  text-align: left;
}
.el-form-item {
  margin: 15px 20px 10px;
}
#btn {
  text-align: right;
}
</style>
