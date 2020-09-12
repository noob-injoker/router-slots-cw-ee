<template>
<div class="df h00 b1 j-bettween a-center">
  <div>欢迎来到小艾后台管理系统</div>
  <div>

    <div v-if="date">{{year}}年{{month}}月{{day}}日,下午<span>{{hours}}</span>:<span>{{minuts}}</span>:<span>{{secondes}}</span></div>

    <div>天气</div>
    <div>亲爱的,{{}}</div>
    <div>退出</div>

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
      date: null,
      adminUser:""

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
          this.hours = this.hours * 1
        } else {
          this.hours = this.hours - 12
        }
        this.secondes = this.date.getSeconds();
        this.minuts = this.date.getMinutes(); //获取当前分钟数(0-59)
        // this.time = `${year}年${month}月${day}日,下午${hours}:${minuts}:${secondes}`
      }, 1000);

    },
    getUserInfo() {
      this.adminUser = localStorage.getItem('adminUser')
      console.log(this.adminUser);
    }

  },
  mounted() {
    
    this.getDate()
    this.adminUser()

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
span {
  text-align: center;
  display: inline-block;
  width: 20px;
  border: 1px solid red;
}
</style>
