<template>
<div class="container">
  <div class="r1">

    <div class="input-box">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <div class="icon-search-box b1"> <i class="el-icon-search"></i></div>
    </div>

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
.icon-search-box {
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  width: 4vw;
  height: 100%;
}

.input-box {
  width: 20vw;
  position: relative;
}

.container {

  width: 100%;
}
</style>
