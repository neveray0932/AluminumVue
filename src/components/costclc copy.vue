<template>
  <el-tabs type="border-card">
    <el-tab-pane label="成本設定">
      <el-form
        :model="costForm"
        :rules="rules"
        ref="costForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-row id="selectmaterial">
          <el-col>
            <el-select
              style="width: 500px"
              v-model="value"
              filterable
              allow-create
              default-first-option
              placeholder="請選擇規格"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item label="材料" prop="materialname">
              <el-select
                v-model="materialObj"
                default-first-option
                filterable
                placeholder="請選擇材料"
              >
                <el-option
                  v-for="item of material"
                  :key="item.value"
                  :label="item.label"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="用量" prop="category">
              <el-input v-model="costForm.title" placeholder="用量"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="成本" prop="unitprice">
              <el-input
                :value="materialObj.unitprice"
                placeholder="成本"
                v-if="materialObj.value === materialVal"
              >
              </el-input>
              <!-- <input type="text" :value="materialObj.unitprice" /> -->
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="規格說明" prop="category">
              <el-input
                v-model="costForm.title"
                placeholder="規格說明"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="材料系數" prop="coefficient">
              <el-input
                v-model="costForm.coefficient"
                placeholder="材料系數"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="小計" prop="total">
              <el-input v-model="costForm.total" placeholder="小計"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row id="btn">
          <el-button type="primary"> 送出 </el-button>
        </el-row>
      </el-form>
    </el-tab-pane>
    <!-- 做一個router -->
    <el-tab-pane label="成本資料"></el-tab-pane>
  </el-tabs>
</template>
<script>
// import materialtable from "./materialTable.vue";
// import axios from "axios";
export default {
  created() {
    this.getmaterial();
  },
  components: {},
  data() {
    return {
      costForm: {
        materialid: "",
        materialname: "",
        category: "",
        coefficient: "",
        unitprice: "",
        units: "",
        cost: "",
        memo: "",
      },
      options: [
        {
          value: "1000*2100,10cm框,SECC",
          label: "1000*2100,10cm框,SECC",
        },
        {
          value: "1000*2100,SECC氣密",
          label: "1000*2100,SECC氣密",
        },
        {
          value: "1000*2100,SECC氣密孤框",
          label: "1000*2100,SECC氣密孤框",
        },
      ],
      material: [
        // {
        //   value: "板料-SECC",
        //   label: "板料-SECC",
        // },
        // {
        //   value: "板料-SUS",
        //   label: "板料-SUS",
        // },
        // {
        //   value: "包材",
        //   label: "包材",
        // },
      ],
      value: [],
      materialObj: "",

      rules: {},
    };
  },
  computed: {
    materialVal() {
      return this.materialObj.value;
    },
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getmaterial() {
      this.$axios({
        url: "/public/api/material",
        method: "get",
      }).then((res) => {
        var data = res.data;
        data.forEach((element) => {
          console.log(element);
          this.material.push({
            value: element.materialname,
            label: element.materialname,
            unitprice: element.unitprice,
          });
        });
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
#selectmaterial {
  text-align: center;
}
html {
  font-weight: bold;
}
</style>
