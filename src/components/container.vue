<template>
  <el-container style="border: 1px solid #eee">
    <!-- <div>
      <el-button @click="drawer = true" type="primary" icon="el-icon-menu">
      </el-button>
    </div> -->
    <!-- <el-drawer
      title="我是标题"
      :direction="direction"
      :visible.sync="drawer"
      :with-header="false"
      size="20%"
    > -->
    <!-- <el-aside width="200px" style="background-color: rgb(238, 241, 246)"> -->
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
      <el-button @click="toggleShow" type="primary" size="mini">OPEN</el-button>
      <el-submenu index="1">
        <template slot="title"
          ><i class="el-icon-document"></i
          ><span slot="title">管理</span></template
        >
        <el-menu-item-group>
          <el-menu-item @click="pagename = '客戶管理'" index="1-1">
            <router-link to="/customer">客戶管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2-1">
            <router-link to="/material">材料管理</router-link>
          </el-menu-item>
          <el-menu-item index="1-2-2">
            <router-link to="/costclc">成本設定</router-link>
          </el-menu-item>
        </el-menu-item-group>

        <!-- <el-submenu index="1-4">
            <template slot="title"></template>
            <el-menu-item index="1-4-1"></el-menu-item>
            <el-menu-item index="1-4-2">材質設定</el-menu-item>
            <el-menu-item index="1-4-3">材料類別</el-menu-item>
          </el-submenu> -->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i
          ><span slot="title">資料設定</span></template
        >

        <el-menu-item-group>
          <el-menu-item index="2-3"
            ><router-link to="/setting">設定</router-link></el-menu-item
          >
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1"
            ><router-link to="/frame">門框</router-link></el-menu-item
          >
          <el-menu-item index="2-4-2"
            ><router-link to="/threshold">門檻</router-link></el-menu-item
          >
          <el-menu-item index="2-4-2"
            ><router-link to="/door">門扇</router-link></el-menu-item
          >
          <el-menu-item index="2-4-2"
            ><router-link to="/otherpd">其他產品</router-link></el-menu-item
          >
          <el-menu-item index="2-4-2"
            ><router-link to="/quotation">報價單</router-link></el-menu-item
          >
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-s-order"></i
          ><span slot="title">報價單</span></template
        >
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <!-- </el-aside> -->
    <!-- </el-drawer> -->

    <el-container>
      <el-header style="text-align: left">{{ test1 }}</el-header>
      <el-main>
        <transition name="slide-fade">
          <router-view />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
html {
  font-weight: bold;
  /* border: black 2px solid; */
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(-430px);
  opacity: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
// import customer from "./customer.vue";

export default {
  name: "container",
  data() {
    return {
      drawer: false,
      direction: "ltr",
      isCollapse: true,
      pagename: "",
    };
  },

  computed: {
    test1() {
      return this.$route.path == "/material" ? "material" : "haha";
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleShow() {
      this.isCollapse = !this.isCollapse;
      console.log(this.$route.path);
    },
    test(val) {
      this.pagename = val;
      console.log("ok");
      console.log(this.pagename);
    },
  },
};
</script>
<style>
a {
  text-decoration-line: none;
}
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  /* background: url("../assets/unnamed.png"); */
}
</style>
