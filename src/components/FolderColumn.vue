<template>
  <div class="left-bar">
    <!-- 切换组 -->
    <div class="switch-group">
      <div class="of-ele">
        {{ selectGroup.name }}
      </div>
      <div @click="showGroup" class="select-btn">
        <span class="iconfont icon-arrow-down"></span>
      </div>
      <div ref="selectsGroup" class="group-list" :class="{ 'active': showSelectGroup }" @blur="showSelectGroup = false"
        tabindex="-1">
        <div v-for="el in groupList" :key="el.id" class="group-item of-ele">
          {{ el.name }}
        </div>
      </div>
    </div>
    <!-- 固定标签 -->
    <div class="fixedContent">
      <listRow icon="work" text="全部" value="100" @click="switchData"></listRow>
      <listRow icon="work" text="未分类" value="100" @click="switchData"></listRow>
      <listRow icon="work" text="未标签" value="100" @click="switchData"></listRow>
      <listRow icon="work" text="标签管理" value="100" @click="switchData"></listRow>
      <listRow icon="work" text="回收站" value="100" @click="switchData"></listRow>
    </div>
    <div class="class-title">
      文件夹
    </div>
    <div class="floder-list">
      <listRow icon="folder-close" color="red" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" :select="true" text="文件夹2" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹3" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹4文件夹4文件夹4文件夹4文件夹4" value="10000" @click="switchData()"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
      <listRow icon="folder-close" text="文件夹1" value="100" @click="switchData"></listRow>
    </div>
  </div>
</template>

<script>
import listRow from "./listRow.vue";
export default {
  // props:{
  //   selectGroup:{
  //     type: Object,
  //     default: ()=>{}
  //   }
  // },
  components: {
    listRow
  },
  data() {
    return {
      showSelectGroup: false,
      selectGroup: {
        name: "测试分组测试分组测试分组测试分组测试分组测试分组测试分组测试分组测试分组"
      },
      lsit: [
        {
          icon: "folder-close",
          color: "blue",
          text: "下级文件夹",
          value: 120
        }
      ],
      groupList: [
        {
          name: "测试分组",
          id: 0
        },
        {
          name: "测试分组2",
          id: 1
        },
        {
          name: "测试分组3",
          id: 2
        },
        {
          name: "测试分组4测试分组4测试分组4测试分组4测试分组4",
          id: 3
        },
      ]
    }
  },
  methods: {
    switchData() {
      console.log("切换")
    },
    showGroup() {
      this.showSelectGroup = true
      this.$refs.selectsGroup.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.left-bar {
  width: 240px;
  height: 100%;
  border-right: solid 1px #2c2c2c;
  background-color: #3d3d3d;
  box-shadow: 1px 0px 3px rgba($color: #2c2c2c, $alpha: 0.3);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  .floder-list {
    width: 100%;
    height: auto;
    overflow-y: auto;
  }

  .switch-group {
    width: 100%;
    height: 30px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    position: relative;

    .group-list {
      position: absolute;
      top: 100%;
      left: 3%;
      width: 94%;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.15);
      min-height: 100%;
      background-color: #2c2c2c;
      z-index: 100;
      padding: 5px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-15px);
      transition: 300ms;

      &.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
      }

      .group-item {
        width: 100%;
        height: 25px;
        line-height: 25px;
        padding: 0 10px;
        margin-bottom: 5px;
        border-radius: 4px;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          background-color: #3d3d3d;
        }
      }
    }

    &>.of-ele {
      max-width: calc(100% - 35px);
      opacity: 0.8;
    }

    .select-btn {
      width: 25px;
      height: 25px;
      border-radius: 4px;
      padding-top: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        border: solid 1px #2c2c2c;
      }
    }
  }

  .fixedContent {
    width: 100%;
  }

  .class-title {
    padding: 0 16px;
    font-size: 12px;
    line-height: 36px;
    opacity: 0.8;
  }
}
</style>