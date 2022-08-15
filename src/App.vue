<template>
  <div id="app" class="dark-theme">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- 左侧文件夹栏 -->
    <FolderColumn></FolderColumn>
    <!-- 主要视图 -->
    <MainView></MainView>
    <!-- 文件属性 -->
    <FileData></FileData>
  </div>
</template>

<script>
import { remote } from 'electron'
import FolderColumn from "./components/FolderColumn.vue"
import MainView from "./components/MainView.vue"
import FileData from "./components/FileData.vue"
import { mapState } from 'vuex'
import fs from 'fs'
// import Database from 'better-sqlite3'
// const db = new Database('assets.db')
export default {
  name: 'App',
  components: {
    FolderColumn,
    MainView,
    FileData
  },
  computed: {
    ...mapState({
      type: state => state.type
    })
  },
  methods: {
    async init() {
      // let dataPath = await  ipcMain.handle()
    }
  },
  created() {
    console.log(this.type, fs)
    this.init();
    console.log(remote)
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
