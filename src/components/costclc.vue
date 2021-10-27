v-if="dynamicValidateForm.domains.materialname === materialVal"
<template>
  <el-form
    :model="dynamicValidateForm"
    ref="dynamicValidateForm"
    label-width="100px"
    class="demo-dynamic"
    inline
  >
    <el-form-item
      label="規格"
      :rules="[
        { required: false, message: '请输入邮箱地址', trigger: 'blur' },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <el-row>
        <el-col :span="50">
          <el-input placeholder="請輸入規格" v-model="value"> </el-input>
        </el-col>

        <el-col>
          <el-button type="primary" @click="specCreate">創建</el-button>
        </el-col>
      </el-row>
      <!-- <el-select
        style="width: 500px"
        v-model="value"
        filterable
        allow-create
        default-first-option
        placeholder="請選擇規格"
      >
        <el-option
          v-for="item in options"
          :key="item.specid"
          :label="item.prodname"
          :value="item.prodname"
        >
        </el-option>
      </el-select> -->
    </el-form-item>
    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :label="'材料' + index"
      :key="domain.key"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: '',
        trigger: 'blur',
      }"
    >
      <el-row>
        <el-col :span="4">
          <el-form-item label="材料">
            <el-select
              v-model="domain.materialname"
              default-first-option
              filterable
              placeholder="請選擇材料"
            >
              <el-option
                v-for="item of material"
                :key="item.materialid"
                :label="item.label"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="用量">
            <el-input
              v-model.number="domain.dosage"
              placeholder="用量"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="成本">
            <el-input v-model="domain.materialname" placeholder="成本">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="材料系數">
            <el-input
              v-model="domain.coefficient"
              placeholder="材料系數"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="小計">
            <el-input
              :value="
                domain.materialname.unitprice *
                domain.dosage *
                domain.coefficient
              "
              placeholder="小計"
            ></el-input>
            <!-- <h1>{{}}</h1> -->
          </el-form-item>
        </el-col>

        <el-col style="text-align: right">
          <el-button
            style="margin-top: 10px"
            @click.prevent="removeDomain(domain)"
            >删除</el-button
          >
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')"
        >提交</el-button
      >
      <el-button @click="addDomain">新增材料</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import axios from "axios";

// import Axios from "axios";
export default {
  created() {
    this.getmaterial();
    this.test();
  },
  mounted() {
    // this.getSpec();
    this.$store.dispatch("SPEC_READ");
  },
  data() {
    return {
      // options: "",
      value: "",
      material: [],
      materialObj: "",
      costForm: {
        materialid: "",
        materialname: "",
        coefficient: 1,
        unitprice: "",
        memo: "",
      },
      dynamicValidateForm: {
        domains: [
          {
            materialname: "",
            coefficient: 1,
            dosage: "",
            total: 1,
          },
        ],
      },
    };
  },
  computed: {
    materialVal() {
      return this.dynamicValidateForm.domains.filter(this.filtercost);
    },
    options() {
      return this.$store.state.spec;
    },
    specid() {
      return this.options.find((a) => {
        return this.value === a.prodname;
      });
    },
    total() {
      return this.dynamicValidateForm.domains;
    },

    // clc(){
    //   return this.
    // }
  },
  methods: {
    filtercost(array) {
      var a;
      this.material.forEach((element) => {
        if (array.value == element.value) {
          a = element.unitprice;
        }
      });
      return a;
    },
    submitForm() {
      this.costPost();

      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        materialname: "",
        coefficient: 1,
        total: 0,
        key: Date.now(),
      });
    },
    getmaterial() {
      this.$axios({
        url: "/public/api/material",
        method: "get",
      }).then((res) => {
        var data = res.data;

        data.forEach((element) => {
          this.material.push({
            materialid: element.materialid,
            value: element.materialname,
            label: element.materialname,
            unitprice: element.unitprice,
          });
        });
      });
    },
    test() {
      console.log(this.dynamicValidateForm.domains);
    },
    costPost() {
      var costObj = [
        // {
        //   materialid:
        //     this.dynamicValidateForm.domains[0].materialname.materialid,
        //   specid: "",
        //   dosage: this.dynamicValidateForm.domains[0].dosage,
        //   total:
        //     this.dynamicValidateForm.domains[0].dosage *
        //     this.dynamicValidateForm.domains[0].materialname.unitprice *
        //     this.dynamicValidateForm.domains[0].coefficient,
        // },
      ];
      var Obj = this.dynamicValidateForm.domains;
      Obj.forEach((element) => {
        console.log(element);
        costObj.push({
          materialid: element.materialname.materialid,
          specid: this.specid.specid,
          dosage: element.dosage,
          total:
            element.materialname.unitprice *
            element.coefficient *
            element.dosage,
        });
      });

      console.log(costObj);
      this.$axios({
        url: "/public/api/materialcost",
        method: "post",
        data: costObj,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // getSpec() {
    //   Axios({
    //     url: "/public/api/specname",
    //     method: "get",
    //   }).then((res) => {
    //     var obj = res.data;
    //     console.log(obj);
    //     this.options = obj;
    //     console.log(this.options);
    //     this.$store.commit("setSpec", obj);
    //   });
    // },
    specCreate() {
      var spec = {
        specname: this.value,
        prodname: this.value,
      };
      // console.log(spec);
      this.$axios({
        method: "post",
        url: "/public/api/specname",

        data: spec,
        headers: {
          token: "",
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log(res);
        console.log(res.data);
        this.$store.commit("addSpec", res.data);
        if (res.status === 201) {
          this.$message({
            message: "成功新增一筆資料",
            type: "success",
          });
        }
      });
    },
    dosage(val) {
      console.log(val);
    },
  },
};
</script>
