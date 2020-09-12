<template>
<div>

  <ee :columns="columns" :indexOptions="indexOptions" :tableData='rightsManagementList'>

    <template v-slot:expand="scope">
      <el-form label-position="left" inline class="demo-table-expand">

        <el-form-item label="商品名称">
          <span>--{{ scope.scope.row }}--</span>
        </el-form-item>

      </el-form>
    </template>

    <template v-slot:operation="scope">
      <el-button type="primary" @click="set(scope)">设置</el-button>
    </template>

    <template v-slot:switch>

     

    </template>

  </ee>
<!--   

  <div>
  <cwbutton>hihao</cwbutton>
  </div> -->
<!-- console.log(this.$scopedSlots.msg()[0].children[0].text); -->


</div>
</template>

<script>
import {
  createNamespacedHelpers
} from "vuex";
const rightsManagement = createNamespacedHelpers("rightsManagement");
const {
  mapState: rightManagementState,
  mapActions: rightManagementActions,
} = rightsManagement;

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: false,

      indexOptions: {

        showIndex: true,
        label: '#',
        align: 'center',
        width: '200',
        indexMethod(index) {
          return index * 1
        },

      },
      columns: [
        //根据需要然后是否填写这个type。
        {
          type: 'expand',
        },
        //首先配置一般列。，，
        {
          propName: 'roleName',
          label: "职位",

        },
        {
          propName: 'roleDesc',
          label: "描述",
        },

        //配置插槽，提高可配置性,name即是插槽的名字。
        {
          slots: [{
              label: "操作",
              name: 'operation',
            },
            {
              label: "开关",
              name: 'switch',
              propName: 'switch',
            }

          ]
        }
      ],

      //this is form

    };
  },
  methods: {
    set(scope) {
      console.log(scope);
    },
    handleEdit(a, b) {
      console.log(a, b);
    },
    handleDelete(a, b) {
      console.log(a, b);
    },
    handleSet(a, b) {
      console.log(a, b);
    },
    ...rightManagementActions(["$setRightsManagement"]),
  },
  mounted() {
    this.$setRightsManagement();
  },
  watch: {},
  computed: {
    ...rightManagementState(["rightsManagementList"]),
  },
};
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
  border: 1px solid red;
  display: flex;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
