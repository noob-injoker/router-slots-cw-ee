<template>
  <div>
    <el-row class="tac">
      <el-col>
        <div class="el-menu-box">
          
          
        <el-menu unique-opened router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

          <template v-for="item in menus" >

            <el-menu-item index="2" :key="item.id">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

            <el-submenu :index="item.path" :key="item.id">
 
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>item.authName</span>
              </template>

              <el-menu-item-group>

                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>

              </el-menu-item-group>

            </el-submenu>

          </template>

          </el-menu>
          this is left
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    ...userActions(["getMenus"]),
  },
  mounted() {
    this.getMenus();
  },
  watch: {},
  computed: {
    ...userState(["menus"]),
  },
};
</script>

<style scoped lang='scss'>
</style>
