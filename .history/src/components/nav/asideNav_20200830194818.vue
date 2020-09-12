<template>
<div>
  <el-row class="tac">
    <el-col>
      <div class="el-menu-box">

        <el-menu unique-opened router default-active="2" class="el-menu-vertical-demo">

          <template v-for="(item,index) in menus">

            <el-menu-item :index="item.path" :key="item.path" v-if="index===0">
              <i :class="iconList[index].icon"></i>
              <span slot="title">{{item.authName}}</span>
            </el-menu-item>

            <el-submenu :index="item.path" :key="item.path" v-else>

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}{{index}}</span>
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

      iconList: [
        {
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
          icon: 'el-icon-folder',
          childIconList: [{
              childIconListIcon: 'el-icon-folder-el-icon-setting'
            },
            {
              childIconListIcon: 'el-icon-c-scale-to-original'
            },

          ]
        },
        {
          icon: 'el-icon-goods',
          childIconList: [{
              childIconListIcon: 'el-icon-help'
            },
            {
              childIconListIcon: 'el-icon-bell'
            },
            {
              childIconListIcon: 'el-icon-date'
            },
          ]
        },
        {
          icon: 'el-icon-s-order',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-add'
          }]
        },
        {
          icon: 'el-icon-s-order',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-add'
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
