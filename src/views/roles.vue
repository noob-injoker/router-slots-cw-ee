<template>
<div>

  <div class="createRole">
    <el-button type="text" @click="dialogFormVisible = true">创建角色</el-button>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">

        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>

  <el-table border highlight-current-row :data="rightsManagementList" style="width: 100%">
    
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品 ID">
            <span>{{ props.row[item.name] }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

   
      <template v-for="(item,index) in column">
        <el-table-column :key="index" :label="item.name" >
          <template slot-scope="scope">{{scope.row[item.name]}}</template>
        </el-table-column>
      </template>


  </el-table>

  <div>
    {{rightsManagementList}}
  </div>
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

      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      column: [{
          label: "职位",
          name: "roleName",
          id:"id"
        },
        {
          label: "描述",
          name: "roleDesc",
           id:"id"
        },
        {
          label: "操作",
          operation: "operation",
           
        }
      ],
      formLabelWidth: '120px',

      //this is form
      tableData: [{
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
    };
  },
  methods: {
    handleEdit(a, b) {
      console.log(a, b);
    },
    handleDelete(a, b) {
      console.log(a, b);
    },
    handleSet(a, b) {
      console.log(a, b);
    },
    ...rightManagementActions(['$setRightsManagement'])
  },
  mounted() {
    this.$setRightsManagement()
  },
  watch: {},
  computed: {

    ...rightManagementState(['rightsManagementList'])

  },
};
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
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
