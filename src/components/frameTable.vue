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
      :page-size="6"
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
      page: 1,
      pageSize: 6,
      tableData: [
        {
          id: "輪框FD222-1",
          name: "10.5CM",
          amount1: "",
          amount2: "SECC1.6",
          amount3: 800,
        },
        {
          id: "輪框FD222-1",
          name: "10.5CM",
          amount1: "",
          amount2: "SUS1.5",
          amount3: 1720,
        },
        {
          id: "ㄇ形框",
          name: "10CM",
          amount1: "",
          amount2: "SECC1.6",
          amount3: 910,
        },
        {
          id: "ㄇ形框",
          name: "10CM",
          amount1: "",
          amount2: "SUS1.5",
          amount3: 1880,
        },
        {
          id: "單玄無氣密FD222-2",
          name: "10CM",
          amount1: "",
          amount2: "SECC1.6",
          amount3: 1100,
        },
        {
          id: "單玄無氣密FD222-2",
          name: "10CM",
          amount1: "",
          amount2: "SUS1.5",
          amount3: 2250,
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
        if (rowIndex % 1 === 0) {
          return {
            rowspan: 1,
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
