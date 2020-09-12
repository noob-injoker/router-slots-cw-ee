<template>
<div class="container">
  <div>
    <el-card class="box-card">

      <div class="df">

        <div class="input-box">

          <el-input v-model="input" placeholder="请输入内容"></el-input>
          <div @click="searchData" class="icon-search-box ccc">
            <i class="el-icon-search"></i>
          </div>

        </div>

        <div class="add-box">
          <el-button type="primary" @click="addUser">增加用户</el-button>
        </div>

      </div>

      <div class="table-box">

        <cwTable :IndexFlag="IndexFlag" cell-click="clickCell" :tableData="userDataList" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange" :total="total" :columns="columns" :showPageNation="showPageNation">

        </cwTable>

      </div>

    </el-card>

  </div>
</div>
</template>

<script>
import {
  createNamespacedHelpers
} from "vuex";
const userManagementModule = createNamespacedHelpers("userManagement");
const {
  mapState: userManagerState,
  mapActions: userManagerActions,
} = userManagementModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {

      IndexFlag: true,
      //用来判断是否显示#那一列
      //formData用来配置
      formData: [{
          lable: "用户名",
          type: "input",
          value: '',
          prop: 'username',
          attrs: {
            placeholder: "请输入用户名",
            clearable: true,
          },
          rules: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }]
        },

        {

          lable: "密码",
          type: "input",
          value: '',
          prop: "password",
          attrs: {
            placeholder: "请输入密码",
            clearable: true,
            'show-password': true,
          },
          rules: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          }]

        },
        {
          lable: "分配角色",
          type: "select",
          prop: "role",
          value: "",

          children: [{
              type: "option",
              value: "选项1",
              label: "黄金糕",
            },
            {
              type: "option",
              value: "选项2",
              label: "大米",
            },
            {
              type: "option",
              value: "选项3",
              label: "桂花糕",
            }
          ]
        }

      ],
      dialogVisible: false,
      tableData: [],
      showPageNation: true,
      total: 10,

      columns: [

        {
          lable: "姓名",
          prop: "username",
          align: "center",

        },
        {
          lable: "角色",
          prop: "role_name",
          align: "center",

        },
        {
          lable: "电话",
          prop: "mobile",
          align: "center",
        }, {
          lable: "邮箱",
          prop: "email",
          align: "center",
        },
        {
          lable: "状态",
          prop: "mg_state",
          align: "center",
          slots: "state"
        },
        {
          lable: "操作",
          align: "center",

        }

      ],

      form: {
        username: '',
        password: "",
        email: "",
        mobile: "",
      },
      rules: {

      },

      input: "",
      query: "",

    };
  },
  methods: {
    handleSizeChange(){

    },
    addUser() {
      this.dialogFormVisibleAdd = true;
    },
    handleEdit(index, row) {
      this.dialogFormVisibleEdit = true;
      console.log(index, row);
    },
    handleEditCancel() {

    },
    handleEditSure() {

    },
    handleDelete(index, row) {
      this.dialogFormVisibleDelet = true;
      console.log(index, row);
    },
    handleSet(index, row) {
      this.dialogFormVisibleSet = true;
      console.log(index, row);
    },
    dialogSetConcel() {
      this.dialogFormVisibleSet = false;
    },
    dialogSetSure() {
      this.dialogFormVisibleSet = false;
    },
    handleCurrentChange() {

    },

    searchData() {
      console.log(66);
    },

    ...userManagerActions(["$getUserDataList"]),

  },
  mounted() {
    this.$getUserDataList({
      query: this.query,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
 
    
  },
  watch: {},
  computed: {
    ...userManagerState(["userDataList"]),
  },
};
</script>

<style lang="scss" scoped>
.table-box {
  margin-top: 20px;
}

.add-box {
  margin-left: 100px;
}

.icon-search-box {
  position: absolute;
  z-index: 1;
  right: -4.5vw;
  top: 0;
  width: 4.5vw;
  height: calc(100% - 2px);
  background: #f5f7fa;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid #dedfe2;
}

.icon-search-box:hover {
  cursor: pointer;
}

.input-box {
  width: 21vw;
  position: relative;
}

.container {
  width: 100%;
}
</style>
