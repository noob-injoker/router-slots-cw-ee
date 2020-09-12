<template>
<div class="df j-around a-center">
  <div>欢迎来到小艾后台管理系统</div>
  <div>
    <div>{{time}}</div>
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
      time: ""

    }
  },
  methods: {
    getDate() {

      setInterval(() => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours()*1; //获取当前小时数(0-23)
        if(hours>12){
          hours = hours - 12
        }else{
 hours = `0${hours}`
        }
        let secondes = date.getSeconds();
        let minuts = date.getMinutes(); //获取当前分钟数(0-59)
        this.time = `${year}年${month}月${day}日,下午${hours}:${minuts}:${secondes}`
      }, 1000);

    }

  },
  mounted() {
    this.getDate()

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>

</style>
