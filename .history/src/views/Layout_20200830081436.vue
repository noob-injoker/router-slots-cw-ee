<template>
<div>
  <el-container>

    <el-header>Header</el-header>

    <el-container>
      <el-aside width="200px">
        <div class="">
          <asideNav></asideNav>
        </div>
      </el-aside>

      <el-main>
        <div class="b1">
          <router-view></router-view>
        </div>
      </el-main>

    </el-container>

  </el-container>
</div>
</template>

<script>
import asideNav from "../components/aside/asideNav";
export default {
  name: "Layout",
  props: {},
  components: {
    asideNav,
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
.el-header {
  background-color: white;
  color: #333;

  border-bottom: 1px solid #f0f2f5;
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

  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}
</style>
