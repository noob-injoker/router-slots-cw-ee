<template>
<div class=" container ">
  <el-container class="">

    <el-header>
      <div class=" w00  h00 ">
  
          <headerNav></headerNav>
       
      </div>
    </el-header>

    <el-container class="">

      <el-aside width="16vw">
        <div class="">
          <asideNav></asideNav>
        </div>
      </el-aside>

      <el-main class="main-box ">

        <div class=" h00">
          <router-view></router-view>
        </div>

      </el-main>

    </el-container>

  </el-container>
</div>
</template>

<script>
import asideNav from "../components/nav/asideNav";
import headerNav from "../components/nav/headerNav";
export default {
  name: "Layout",
  props: {},
  components: {
    asideNav,
    headerNav,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.main-box {

  height: calc(100vh - 60px);
}

.el-header {
  background-color: white;
  color: #333;

  border-bottom: 1px solid #f0f2f5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.el-aside {
  border-right: 1px solid #f0f2f5;
  background-color: white;
  line-height: 200px;
  border-top: 1px solid white;
  position: fixed;
  top: 59px;
  left: 0;
  bottom: 0;
}

.el-main {

  background-color: white;

  margin-left: 200px;
  margin-top: 60px;

}
</style>
