<template>
<div>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
      <div class="left">fff</div>
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
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.left{

}
.el-header{
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
    border-bottom: 1px solid red;
}

.el-aside {
  border-right: 1px solid red;
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body>.el-container {
  margin-bottom: 40px;
}

</style>
