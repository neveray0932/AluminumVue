<template>
  <div>
    <!-- <el-dialog title="修改客戶" :visible.sync="editDialogVisible" width="30%"> -->
    <!--內容主體區域-->
    <el-form v-model="editForm1" label-width="70px">
      <!-- <el-form-item label="id" prop="customerid">
          <el-input v-model="editForm.customerid" :disabled="true"></el-input>
        </el-form-item> -->
      <el-form-item label="客戶" prop="customer">
        <el-input v-model="editForm1.customer" disabled></el-input>
      </el-form-item>
      <el-form-item label="寶號" prop="title">
        <el-input v-model="editForm1.title"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="editForm1.address"></el-input>
      </el-form-item>
      <el-form-item label="電話" prop="tel">
        <el-input v-model="editForm1.tel"></el-input>
      </el-form-item>
      <el-form-item label="傳真" prop="fax">
        <el-input v-model="editForm1.fax"></el-input>
      </el-form-item>
      <el-form-item label="聯絡人" prop="contact">
        <el-input v-model="editForm1.contact"></el-input>
      </el-form-item>
      <el-form-item label="行動電話" prop="cellphone">
        <el-input v-model="editForm1.cellphone"></el-input>
      </el-form-item>
      <el-form-item label="統一編號" prop="taxnumber">
        <el-input v-model="editForm1.taxnumber"></el-input>
      </el-form-item>
    </el-form>
    <!--底部按鈕區域-->
    <div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEditUser">取 消</el-button>
        <el-button type="primary" @click="editUser">確 定</el-button>
      </span>
    </div>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
// import Axios from "axios";
export default {
  data() {
    return {
      // editForm1: [],
    };
  },
  computed: {
    editForm1() {
      return this.$store.state.contents.find((item) => {
        return item.customerid == this.$route.params.id;
      });
    },
  },
  methods: {
    cancelEditUser() {
      // this.editDialogVisible = false;
      this.$router.replace("/customer");
    },
    editUser() {
      this.$axios({
        url: `/public/api/customer/${this.editForm1.customerid}`,
        method: "put",
        headers: {
          token: "",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        data: this.editForm1,
      })
        .then((res) => {
          console.log(this.editForm1);

          if (res.status === 200) {
            this.editDialogVisible = false;
            this.$store.commit("updateContents", this.editForm1);
            this.$message({
              message: "修改使用者成功",
              type: "success",
            });
            this.$router.replace("/customer");
          } else {
            this.$message.error("修改使用者失敗");
          }
        })
        .catch((err) => {
          this.$message.error("修改使用者異常");
          console.log(this.editForm);
          console.log(err);
        });
    },
  },
};
</script>
