<template>
<div class="page-scroll-content">

  <slot></slot>

  <el-backtop target=".page-scroll-content">
    
  </el-backtop>

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
.page-scroll-content {
  //撑满整个屏幕
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;

}
</style>
