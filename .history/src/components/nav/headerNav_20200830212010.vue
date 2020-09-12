<template>
<div class="df j-around a-center">
  <div>欢迎来到小艾后台管理系统</div>
  <div>
    <div v-if="date">{{year}}年{{month}}月{{day}}日,下午{{hours}}:{{minuts}}:{{secondes}}</div>
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
      time: "",
      date:null,

    }
  },
  methods: {
    getDate() {

      setInterval(() => {
       this.date = new Date();
       this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.hours = this.date.getHours() * 1; //获取当前小时数(0-23)
        if (this.hours < 12) {
         this.hours = this.hours*1
        }else{
          this.hours = this.hours-12
        }
        this.secondes = this.date.getSeconds();
      this.minuts = this.date.getMinutes(); //获取当前分钟数(0-59)
        // this.time = `${year}年${month}月${day}日,下午${hours}:${minuts}:${secondes}`
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
