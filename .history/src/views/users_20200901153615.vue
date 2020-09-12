<template>
<div class="container">
  <div>
    <el-card class="box-card">
      <div class="df">
        <div class="input-box">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <div @click="searchData" class="icon-search-box ccc">
            <i class="el-icon-search"></i>
          </div>
        </div>

        <div class="add-box">
          <el-button type="primary">主要按钮</el-button>
        </div>
      </div>

      <div class="table-box">

        <el-table ref="singleTable" :data="userDataList" border  highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
        
            <el-table-column type="index" width="50">
            </el-table-column>

            <el-table-column prop="date" label="username" width="180">
            </el-table-column>

            <el-table-column prop="name" label="role_name" width="180">
            </el-table-column>

            <el-table-column prop="address" label="电话">
            </el-table-column>

            <el-table-column prop="address" label="邮箱">
            </el-table-column>

            <el-table-column prop="address" label="状态">
            </el-table-column>

            <el-table-column prop="address" label="操作">
            </el-table-column>

          </el-table>

      </div>
    </el-card>

    <div></div>
  </div>
</div>
</template>

<script>
import {
  createNamespacedHelpers
} from "vuex";
const userManagementModule = createNamespacedHelpers("userManagement");
const {
  mapState: userManagerState,
  mapActions: userManagerActions,
} = userManagementModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: "",
      query: "",
      pagenum: 1,
      pagesize: 5,
    };
  },
  methods: {
    handleCurrentChange(){

    },

    searchData() {
      console.log(66);
    },

    ...userManagerActions(["$getUserDataList"]),

  },
  mounted() {
    this.$getUserDataList({
      query: this.query,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...userManagerState(["userDataList"]),
  },
};
</script>

<style lang="scss" scoped>
.add-box {
  margin-left: 100px;
}

.icon-search-box {
  position: absolute;
  z-index: 1;
  right: -4.5vw;
  top: 0;
  width: 4.5vw;
  height: calc(100% - 2px);
  background: #f5f7fa;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #dedfe2;
}

.icon-search-box:hover {
  cursor: pointer;
}

.input-box {
  width: 21vw;
  position: relative;
}

.container {
  width: 100%;
}
</style>
