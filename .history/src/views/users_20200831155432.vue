<template>
<div class="container">
  <div>

    <el-card class="box-card">
      <div class="df ">

        <div class="input-box ">

          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <div @click="searchData" class="icon-search-box ccc"> <i class="el-icon-search"></i></div>

        </div>

        <div class="add-box">
          <el-button type="primary">主要按钮</el-button>
        </div>

      </div>

      <div class="table-box">

      </div>

    </el-card>

    <div>

    </div>

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
  mapActions: userManagerActions
} = userManagementModule;
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {

      input: "",

    }
  },
  methods: {
    searchData() {
      console.log(66);
    },
    ...userManagerActions(['$getUserDataList']),
    

  },
  mounted() {
    this.$getUserDataList()

  },
  watch: {

  },
  computed: {
    ...userManagerState(['']),

  }
}
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
  background: #F5F7FA;
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
