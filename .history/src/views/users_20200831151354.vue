<template>
<div class="container">
  <div class="df ">

    <div class="input-box ">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div class="icon-search-box ccc"> <i class="el-icon-search"></i></div>
      
    </div>
    <div class="add-box b1"><el-button type="primary">主要按钮</el-button></div>

  </div>
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
.add-box{
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

.input-box {
  width: 21vw;
  position: relative;
}

.container {

  width: 100%;
}
</style>
