<template>
<div>
  <el-row class="tac">
    <el-col>
      <div class="el-menu-box">

        <el-menu unique-opened router default-active="2" class="el-menu-vertical-demo">

          <template v-for="item in menus">

            <el-menu-item index="2" :key="item.path" v-if="menus.length[0]">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

            <el-submenu :index="item.path" :key="item.path" v-else>

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>

              <el-menu-item-group>

                <el-menu-item :index="item1.path" v-for="item1 in item.children" :key="item1.path">{{item1.authName}}</el-menu-item>

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
import {
  createNamespacedHelpers
} from "vuex";
const userModule = createNamespacedHelpers("user");
const {
  mapState: userState,
  mapActions: userActions
} = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {

      iconList: [{
          icon: 'el-icon-s-home',
          childIconList: [{
            childIconListIcon: ''
          }]
        },
        {
          icon: 'el-icon-user',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-opened'
          }]
        },
        {
          icon: 'el-icon-s-home',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-opened'
          }]
        },
        {
          icon: 'el-icon-s-home',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-opened'
          }]
        },
        {
          icon: 'el-icon-s-home',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-opened'
          }]
        }
      ]

    };
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
