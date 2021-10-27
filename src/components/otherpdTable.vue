<template>
  <div>
    <h1 style="text-align: center">目前在:{{ page }}頁</h1>

    <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
      <el-table-column align="left" prop="name" label="產品名稱" width="180">
      </el-table-column>
      <el-table-column align="center" prop="amount3" label="種類">
      </el-table-column>

      <el-table-column align="center" prop="amount3" label="價錢">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-row>
            <el-button
              @click="showEditDialog(scope.row)"
              type="success"
              size="small"
              >修改</el-button
            >

            <el-button type="danger" @click="deleteCust(scope.row)" size="small"
              >刪除</el-button
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改產品" :visible.sync="editDialogVisible" width="70%">
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
          <el-col :span="7">
            <el-form-item label="產品名稱" prop="name">
              <el-input
                v-model="editForm.name"
                placeholder="產品名稱"
                name="doorname"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="產品種類" prop="name">
              <el-input
                v-model="editForm.name"
                placeholder="產品種類"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="產品價錢" prop="amount3">
              <el-input
                v-model="editForm.amount3"
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
          name: "九品門花-SUS FD215-2",
          amount1: "",
          amount2: "門花",
          amount3: 2670,
        },
        {
          id: "2",
          name: "透明強化5mm",
          amount1: "",
          amount2: "玻璃/紗網",
          amount3: 510,
        },
        {
          id: "3",
          name: "水平鎖-一般",
          amount1: "",
          amount2: "鎖",
          amount3: 440,
        },
        {
          id: "4",
          name: "鋁檔板-54.5",
          amount1: "",
          amount2: "檔板/封邊",
          amount3: 2300,
        },
        {
          id: "5",
          name: "牛角栓",
          amount1: "",
          amount2: "五金配件",
          amount3: 90,
        },
        {
          id: "6",
          name: "鋁飾條",
          amount1: "",
          amount2: "壓花/飾條",
          amount3: 520,
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
