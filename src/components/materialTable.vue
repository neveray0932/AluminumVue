<template>
  <div>
    <h1 style="text-align: center">目前在:{{ page }}頁</h1>
    <el-table :data="pagedTableData" border>
      <el-table-column align="center" prop="materialid" label="編號" width="60">
      </el-table-column>
      <el-table-column align="center" prop="materialname" label="材料名稱">
      </el-table-column>
      <el-table-column align="center" prop="materialcategory" label="材料種類">
      </el-table-column>
      <el-table-column align="center" prop="materialprice" label="材料單價">
      </el-table-column>
      <el-table-column align="center" prop="materialunits" label="材料單位">
      </el-table-column>

      <el-table-column
        align="center"
        prop="materialcofficient"
        label="材料係數"
      >
      </el-table-column>
      <el-table-column align="center" prop="materialcost" label="材料成本">
      </el-table-column>
      <el-table-column align="center" prop="materialmemo" label="材料備註">
      </el-table-column>
      <el-table-column align="center" fixed="right" label="動作" width="150">
        <template slot-scope="scope">
          <el-row>
            <el-button
              @click="handleClick(scope.row)"
              type="success"
              size="small"
              >編輯</el-button
            >

            <el-button type="danger" size="small">刪除</el-button>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
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
    this.getMeterial();
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    setPage(val) {
      this.page = val;
    },
    getMeterial() {
      this.$axios({
        url: "/public/api/material",
        method: "get",
      }).then((result) => {
        let materialArray = result.data;
        materialArray.forEach((element) => {
          this.tableData.push({
            materialid: element.materialid,
            materialname: element.materialname,
            materialcategory: element.category,
            materialprice: element.unitprice,
            materialunits: element.units,
            materialmemo: element.memo,
            materialcofficient: element.coefficient,
            materialcost: element.cost,
          });
        });
      });
    },
  },

  data() {
    return {
      page: 1,
      pageSize: 10,
      tableData: [
        // {
        //   materialid: 1,
        //   materialname: "板料-SECC",
        //   materialcategory: "板材",
        //   materialprice: 29,
        //   materialunits: "KG",
        //   materialmemo: " ",
        //   materialcofficient: 1,
        //   materialcost: 29,
        // },
        // {
        //   materialid: 2,
        //   materialname: "板料-SUS",
        //   materialcategory: "板材",
        //   materialprice: 80,
        //   materialunits: "KG",
        //   materialmemo: " ",
        //   materialcofficient: 1,
        //   materialcost: 80,
        // },
        // {
        //   materialid: 3,
        //   materialname: "塗料",
        //   materialcategory: "其他",
        //   materialprice: 200,
        //   materialunits: "KG",
        //   materialmemo: " ",
        //   materialcofficient: 1,
        //   materialcost: 200,
        // },
        // {
        //   materialid: 4,
        //   materialname: "包材",
        //   materialcategory: "其他",
        //   materialprice: 80,
        //   materialunits: "式",
        //   materialmemo: " ",
        //   materialcofficient: 1,
        //   materialcost: 80,
        // },
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
};
</script>
<style></style>
