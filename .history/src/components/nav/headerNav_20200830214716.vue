<template>
<div class="df h00 b1 j-bettween a-center">
  <div class="m-l-20">欢迎来到小艾后台管理系统</div>
  <div class="df">

    <div v-if="date">{{year}}年{{month}}月{{day}}日,下午<span>{{hours}}</span>:<span>{{minuts}}</span>:<span>{{secondes}}</span></div>

    <div class="wether">天气</div>
    <div class="topUsername-box">亲爱的，{{topUsername}}</div>
    <div class="logOut"><a  href="#">退出</a></div>

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
      topUsername: "",
      adminUser: null,

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
      this.adminUser = JSON.parse(localStorage.getItem('adminUser'))
      this.topUsername = this.adminUser.username
      console.log(this.adminUser);
      console.log(this.topUsername);
    }

  },
  mounted() {

    this.getDate()
    this.getUserInfo()

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
a{
  text-decoration: none;

}
.wether{
  margin: 0 20px;
}
.logOut{
  margin-right: 20px;
}
.topUsername-box{
  margin-left: 20px;
  margin-right: 20px;
}
span {
  text-align: center;
  display: inline-block;
  width: 20px;
 
}
</style>
