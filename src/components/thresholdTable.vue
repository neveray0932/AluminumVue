<template>
  <div>
    <h1 style="text-align: center">目前在:{{ page }}頁</h1>
    <el-table
      :data="pagedTableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column align="center" prop="id" label="框名" width="180">
      </el-table-column>
      <el-table-column align="center" prop="name" label="框寬">
      </el-table-column>
      <el-table-column align="center" prop="amount1" label="說明">
      </el-table-column>
      <el-table-column align="center" prop="amount2" label="材質">
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
    <el-pagination
      layout="prev, pager, next"
      :page-size="6"
      :total="this.tableData.length"
      @current-change="setPage"
    >
    </el-pagination>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  created() {
    //console.log(this.clc);
    console.log(this.tableData);
    console.log(this.test2());
  },
  data() {
    return {
      page: 1,
      pageSize: 6,
      test: this.clc,
      tableData: [
        {
          id: "輪框FD222-1",
          name: "10.5CM",
          amount1: 2,
          amount2: "SECC1.6",
          amount3: this.round(800 / 4.5),
        },
        {
          id: "輪框FD222-1",
          name: "10.5CM",
          amount1: 2,
          amount2: "SUS1.5",
          amount3: this.round(1720 / 4.5),
        },
        {
          id: "輪框FD222-1",
          name: "10.5CM",
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(1720 / 4.5 / 1.3),
        },
        {
          id: "ㄇ形框",
          name: "10CM",
          amount1: 2,
          amount2: "SECC1.6",
          amount3: this.round(910 / 4.5),
        },
        {
          id: "ㄇ形框",
          name: "10CM",
          amount1: 2,
          amount2: "SUS1.5",
          amount3: this.round(1880 / 4.5),
        },
        {
          id: "ㄇ形框",
          name: "10CM",
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(1880 / 4.5 / 1.3),
        },
        {
          id: "單玄無氣密FD222-2",
          name: "10CM",
          amount1: 2,
          amount2: "SECC1.6",
          amount3: this.round(1100 / 4.5),
        },
        {
          id: "單玄無氣密FD222-2",
          name: "10CM",
          amount1: 2,
          amount2: "SUS1.5",
          amount3: this.round(2250 / 4.5),
        },
        {
          id: "單玄無氣密FD222-2",
          name: "10CM",
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(2250 / 4.5 / 1.3),
        },
        {
          id: "單玄無氣密FD222-3",
          name: 5,
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(4250 / 4.5 / 1.3),
        },
        {
          id: "單玄無氣密FD222-3",
          name: 5,
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(4250 / 4.5 / 1.3),
        },
        {
          id: "單玄無氣密FD222-3",
          name: 5,
          amount1: 2,
          amount2: "SUS1.0",
          amount3: this.round(4250 / 4.5 / 1.3),
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
    clc() {
      return this.tableData.amount1 * this.tableData.amount1;
    },
  },
  methods: {
    test2() {
      this.tableData.map((x) =>
        console.log((x.amount2 = x.amount3 * x.amount1))
      );
    },
    test1() {
      this.$axios({
        url: "",
      });
    },
    setPage(val) {
      console.log(val);
      this.page = val;
    },
    round(x) {
      var y = Math.ceil(x);
      return Math.ceil(y / 10) * 10;
    },
    arraySpanMethod({ rowIndex, columnIndex }) {
      // console.log(row);
      // console.log(column);
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod({ rowIndex, columnIndex }) {
      // console.log(row);
      // console.log(column);
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        if (rowIndex % 3 === 0) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>
