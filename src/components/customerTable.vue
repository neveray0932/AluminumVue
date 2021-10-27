<template>
  <div>
    <span style="text-align: center">目前在:{{ page }}頁</span>

    <div ref="printDom" class="printContainer">
      <el-table
        :header-cell-style="tableHeaderColor"
        :row-class-name="tableRowClassName"
        :data="pagedTableData"
        id="customerTable"
        style="width: 100%"
        border
      >
        <el-table-column align="center" label="編號" prop="id" resizable>
        </el-table-column>
        <el-table-column align="center" prop="customer" label="客戶" resizable>
        </el-table-column>
        <el-table-column
          align="center"
          prop="taxnumber"
          label="統一編號"
          resizable
        >
        </el-table-column>

        <!-- <el-table-column align="center" prop="title" label="寶號" width="120">
        </el-table-column> -->
        <el-table-column align="center" prop="address" label="地址" resizable>
        </el-table-column>
        <el-table-column align="center" prop="tel" label="電話" resizable>
        </el-table-column>
        <el-table-column align="center" prop="fax" label="傳真" resizable>
        </el-table-column>

        <el-table-column align="center" prop="contact" label="聯絡人" resizable>
        </el-table-column>

        <el-table-column align="center" label="操作" width="200">
          <template slot-scope="scope">
            <el-row class="noPrint">
              <el-button
                @click="showEditDialog(scope.row)"
                type="success"
                size="small"
                >編輯</el-button
              >

              <el-button
                type="danger"
                @click="deleteCust(scope.row)"
                size="small"
                >刪除</el-button
              >
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="修改客戶" :visible.sync="editDialogVisible" width="30%">
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
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelEditUser">取 消</el-button>
        <el-button type="primary" @click="editUser">確 定</el-button>
      </span>
    </el-dialog>
    <div style="text-align: right">
      <!-- <button v-print="'#customerTable'">打印</button> -->
      <button @click="onPrint">打印</button>
    </div>

    <el-pagination
      :page-size="pageSize"
      :pager-count="9"
      layout="prev, pager, next"
      :total="tableData.length"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  mounted() {
    this.$store.dispatch("DATA_READ");
  },
  data() {
    return {
      show: "false",
      custForm: {
        customername: "",
        title: "",
        address: "",
        tel: "",
        fax: "",
        contact: "",
        phone: "",
        taxnumber: "",
      },
      page: 1,
      pageSize: 5,
      search: "",
      editDialogVisible: false,
      editForm: {
        customer: "",
        title: "",
        address: "",
        tel: "",
        fax: "",
        contact: "",
        cellphone: "",
        taxnumber: "",
      },
      editForm1: [],
    };
  },
  computed: {
    pagedTableData() {
      return this.$store.state.contents.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
    tableData() {
      return this.$store.state.contents;
    },
    test() {
      return this.$emit("test", this.page);
    },
  },

  methods: {
    tableHeaderColor({ rowIndex }) {
      // console.log(row, column, columnIndex);
      if (rowIndex === 0) {
        return "background-color: #ebf1fb;color: #496fec;font-weight:600;font-size:16px;text-align:center";
      } else if (rowIndex === 1) {
        return "background-color: #f7faff;font-size:14px;text-align:center";
      } else if (rowIndex === 2) {
        return "background-color: #f7faff;font-size:14px;text-align:center";
      }
    },

    tableRowClassName({ rowIndex }) {
      // console.log(row);
      // console.log(rowIndex);

      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },

    // tableRowStyle({ row, rowIndex }) {
    //   console.log(row + rowIndex);
    //   return "background-color: pink";
    // },
    onPrint() {
      this.$print(this.$refs.printDom, {
        noPrint: ".noPrint",
        onStart: () => {
          console.log("打印开始");
        },
        onEnd: () => {
          console.log("打印完成");
        },
      });
    },
    setPage(val) {
      this.page = val;
    },

    async deleteCust(val) {
      const confirmResult = await this.$confirm(
        "此操作將永久刪除該使用者, 是否繼續?",
        "提示",
        {
          confirmButtonText: "確定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confirmResult == "confirm") {
        console.log(val);
        let index = this.$store.state.contents.indexOf(val);
        console.log(index);
        if (index == -1) return false;
        // console.log("ok");
        this.$axios({
          url: `/public/api/customer/${val.customerid}`,
          method: "delete",
        })
          .then((res) => {
            console.log(res);

            if (res.status === 204) {
              this.$message({
                message: "刪除使用者成功",
                type: "success",
              });
              this.$store.commit("deleteContents", index);
            } else {
              this.$message.error("刪除使用者失敗");
            }
          })
          .catch((err) => {
            this.$message.error("刪除使用者異常");
            console.log(err);
          });
      }
    },
    showEditDialog(userinfo) {
      // this.editDialogVisible = true;
      console.log(userinfo);
      // this.editForm = userinfo;
      let index = this.$store.state.contents.indexOf(userinfo);
      console.log(index);
      console.log(this.$store.state.contents);
      this.editForm = this.$store.state.contents[index];

      this.editForm1 = this.$store.state.contents[index];
      this.$router.push({
        name: "custedit",
        params: { id: userinfo.customerid },
      });
    },
    editUser() {
      this.$axios({
        url: `/public/api/customer/${this.editForm.customerid}`,
        method: "put",
        headers: {
          token: "",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        data: this.editForm,
      })
        .then((res) => {
          console.log(this.editForm);

          if (res.status === 200) {
            this.editDialogVisible = false;
            this.$store.commit("updateContents", this.editForm);
            this.$message({
              message: "修改使用者成功",
              type: "success",
            });
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
    cancelEditUser() {
      this.editDialogVisible = false;
      window.location.reload();
      // window.location.replace(window.location.href);
    },
  },
  updated() {
    console.log("updated:" + this.custForm);
  },
  // indexMethod(index) {
  //   return index * 2;
  // },
};
</script>
<style>
.printContainer {
  /* width: 700px; */
  -webkit-print-color-adjust: exact;
}
.el-table .warning-row {
  background: #f7faff;
}
.el-table .success-row {
  background: #ebf1fb;
}
tr,
td,
th {
  border: whitesmoke solid 1px;
  border-right: black solid 1px;
}
</style>
