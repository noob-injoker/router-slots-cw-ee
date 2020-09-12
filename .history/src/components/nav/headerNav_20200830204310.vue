<template>
<div class="df j-around a-center">
  <div>欢迎来到小艾后台管理系统</div>
  <div>this is header-right</div>
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
    getDate(){
      let data = new Date()
      date .getFullYear(); //获取完整的年份(4位)

date .getMonth(); //获取当前月份(0-11,0代表1月)

date .getDate(); //获取当前日(1-31)
    }

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>

</style>
