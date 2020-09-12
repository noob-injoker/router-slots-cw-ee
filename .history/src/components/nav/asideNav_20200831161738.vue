<template>
  <div>
    <el-row class="tac">
      <el-col>
        <div class="el-menu-box">
          <el-menu unique-opened router :default-active="$route.path" class="el-menu-vertical-demo">
            <template v-for="(item,index) in menus">
              
              <el-menu-item :index="`/${item.path}`" :key="item.path" v-if="index===0">
                <i :class="item.icon"></i>
                <span slot="title">{{item.authName}}</span>
              </el-menu-item>

              <el-submenu :index="`/${item.path}`" :key="item.path" v-else>
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{item.authName}}</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item
                    :index="`/${item.path}/${item1.path}`"
                    v-for="(item1) in item.children"
                    :key="item1.path"
                  >
                    <i :class="item1.icon"></i>
                    <span slot="title">{{item1.authName}}</span>
                  </el-menu-item>
                </el-menu-item-group>
                
              </el-submenu>
            </template>
          </el-menu>
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
    console.log();
  },
  watch: {},
  computed: {
    ...userState(["menus"]),
  },
};
</script>

<style scoped lang='scss'>
</style>
