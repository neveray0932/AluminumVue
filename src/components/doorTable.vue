<template>
  <div>
    <h1 style="text-align: center">目前在:{{ page }}頁</h1>

    <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
      <el-table-column align="center" prop="name" label="扇名" width="180">
      </el-table-column>

      <el-table-column align="center" prop="amount3" label="價錢">
      </el-table-column>
      <!-- <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-row>
            <el-button
              disabled
              @click="showEditDialog(scope.row)"
              type="success"
              size="small"
              >編輯</el-button
            >

            <el-button
              disabled
              type="danger"
              @click="deleteCust(scope.row)"
              size="small"
              >刪除</el-button
            >
          </el-row>
        </template>
      </el-table-column> -->
    </el-table>
    <el-dialog title="修改門扇" :visible.sync="editDialogVisible" width="70%">
      <!--內容主體區域-->
      <el-form
        :model="editForm"
        :rules="rules"
        ref="editForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-row>
          <el-col :span="10">
            <el-form-item label="扇名" prop="name">
              <el-input
                v-model="editForm.name"
                placeholder="扇名"
                name="doorname"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="價錢" prop="amount3">
              <el-input
                v-model="editForm.amount3"
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
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('editForm')"
          >確 定</el-button
        >
      </span>
    </el-dialog>
    <el-pagination
      layout="prev, pager, next"
      :total="this.tableData.length"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        name: [{ required: true, message: "請輸入門扇名稱", trigger: "blur" }],
        amount3: [
          {
            required: true,

            message: "請輸入門扇價格",
            trigger: "blur",
          },
        ],
      },
      page: 1,
      pageSize: 10,
      editDialogVisible: false,
      doorForm: {},
      editForm: {
        id: "",
        name: "",
        amount1: "",
        amount2: "",
        amount3: "",
      },
      tableData: [
        {
          id: "1",
          name: "扇-一般",
          amount1: "",
          amount2: "SECC1.6",
          amount3: 2300,
        },
        {
          id: "2",
          name: "扇-防火L",
          amount1: "",
          amount2: "SUS1.5",
          amount3: 4300,
        },
        {
          id: "3",
          name: "扇-防盜(不含飾條檔板)",
          amount1: "",
          amount2: "SECC1.6",
          amount3: 3320,
        },
        {
          id: "4",
          name: "扇改SUS",
          amount1: "",
          amount2: "SUS1.5",
          amount3: 2300,
        },
        {
          id: "5",
          name: "扇改SECC0.8",
          amount1: "",
          amount2: "SECC1.6",
          amount3: -240,
        },
        {
          id: "6",
          name: "扇改SECC0.8",
          amount1: "",
          amount2: "SUS1.5",
          amount3: -640,
        },
      ],
    };
  },
  computed: {
    pagedTableData() {
      return this.tableData.slice(
        this.pageSize * this.page - this.pageSize,
        this.pageSize * this.page
      );
    },
  },
  methods: {
    setPage(val) {
      this.page = val;
    },
    showEditDialog(doorinfo) {
      this.editDialogVisible = true;
      console.log(doorinfo);
      this.editForm = doorinfo;
    },
    resetForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].resetFields();
    },
  },
};
</script>
