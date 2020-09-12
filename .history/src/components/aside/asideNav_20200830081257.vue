<template>
<div>
  <el-row class="tac">
    <el-col>

      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        

        <template>
          
        </template>

        <el-submenu index="1">

          <template slot="title">

            <i class="el-icon-location"></i>
            <span>导航一</span>

          </template>

          <el-menu-item-group>

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

          </el-menu-item-group>

       


        </el-submenu>

      </el-menu>
    </el-col>

  </el-row>

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

<style scoped lang='scss'>

</style>
