<template>
  <div class="page vue_i18n">
    <!--$t(key.value)-->
    <h1>{{ $t("header") }}</h1>
    <br />
    <div class="row horizontal v_center">
      <el-form style="width: 500px">
        <el-form-item label="選擇語言">
          <!--如果對象是label、value、placeholder等，必須改為v-bind:label ...etc-->
          <el-select
            v-model="langSelect.select"
            :placeholder="$t('please_select')"
            clearable
          >
            <el-option
              v-for="(item, index) in langSelect.items"
              :key="index"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
          <el-button
            type="primary"
            @click="changeLanguage(langSelect.select)"
            >{{ $t("change_language") }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 引入我們在 lang >> index.js 中設置與取得語系的function
import { getLanguage, setLanguage } from "../lang";
export default {
  name: "VueI18n",
  data() {
    return {
      langSelect: {
        select: "",
        items: [
          // JS中引用的 i18n 則需改為 this.$t(key.value)
          { value: "zh_tw", label: this.$t("locale_zh_tw") },
          { value: "en", label: this.$t("locale_en") },
          { value: "jp", label: this.$t("locale_jp") },
        ],
      },
    };
  },

  // created階段就先取得Cookies中記錄的語系
  created() {
    getLanguage;
  },

  methods: {
    changeLanguage(val) {
      setLanguage(val);
      // 由於更新語系函數執行後不會更新所有DOM，讓網頁refresh後就沒這個問題
      location.reload();
    },
  },
};
</script>
