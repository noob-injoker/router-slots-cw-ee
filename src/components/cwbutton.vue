<template>
 <div>

      <div @click="clickSomeThing">
          <slot></slot>
      </div>

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
     clickSomeThing(){
       
        this.$emit('click')
         console.log(111);
        
     }

   },
   mounted() {

     console.log(this.$slots);

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>