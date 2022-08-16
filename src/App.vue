<template>
  <div id="app" class="default-theme dark-theme">
    <!-- 提示组件 -->
    <TooltipView></TooltipView>
    <!-- 左侧文件夹栏 -->
    <FolderColumn></FolderColumn>
    <!-- 主要视图 -->
    <MainView></MainView>
    <!-- 文件属性 -->
    <FileData></FileData>
  </div>
</template>

<script>
// 引入库
import { remote } from 'electron'
import { join } from "path"
import { mapState } from 'vuex'
import fs from 'fs'
import Database from 'better-sqlite3'
const { app } = remote;
const db = new Database(join(app.getPath("userData"), 'images_merge.db'))
console.log("配置路径", app.getPath("userData"))
import DefaultSettings from '../setting'

// 引入组件
import FolderColumn from "./components/FolderColumn.vue"
import MainView from "./components/MainView.vue"
import FileData from "./components/FileData.vue"
import TooltipView from "./components/TooltipView.vue"

export default {
  name: 'App',
  components: {
    FolderColumn,
    MainView,
    FileData,
    TooltipView,
  },
  computed: {
    ...mapState({
      type: state => state.type
    })
  },
  methods: {
    async init() {

    }
  },
  created() {
    console.log(this.type, fs)
    this.init();
    console.log(db)
    console.log(DefaultSettings)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
