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

        <el-table ref="singleTable" :data="userDataList" border highlight-current-row @current-change="handleCurrentChange" style="width: 100%">

          <el-table-column label="#" type="index" width="50">

          </el-table-column>

          <el-table-column label="姓名" width="180">
            <template slot-scope="scope">

              <span style="margin-left: 10px">{{ scope.row.username }}</span>

            </template>
          </el-table-column>

          <el-table-column label="角色" width="180">
            <template slot-scope="scope">

              <span style="margin-left: 10px">{{ scope.row.role_name }}</span>

            </template>
          </el-table-column>

          <el-table-column label="电话" width="180">
            <template slot-scope="scope">

              <span style="margin-left: 10px">{{ scope.row.mobile }}</span>

            </template>
          </el-table-column>

          <el-table-column label="邮箱" width="180">

            <template slot-scope="scope">

              <span style="margin-left: 10px">{{ scope.row.email }}</span>

            </template>

          </el-table-column>

          <el-table-column label="状态">
            <template slot-scope="scope">

              <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949">
              </el-switch>

            </template>

          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
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
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange() {

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
.table-box{
  margin-top: 20px;
}
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
