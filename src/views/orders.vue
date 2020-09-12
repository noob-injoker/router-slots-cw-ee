<template>
 <div>
    <cwbutton  @click.native.prevent ="clickBtn">你好</cwbutton>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
    
     clickBtn(){
       console.log(8888);
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