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

        <cwTable :tableData ='userDataList' >

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
      
      form: {
        username: '',
        password: "",
        email: "",
        mobile: "",
      },
      rules: {
        username: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        region: [{
          required: true,
          message: '请选择活动区域',
          trigger: 'change'
        }],
        date1: [{
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        date2: [{
          type: 'date',
          required: true,
          message: '请选择时间',
          trigger: 'change'
        }],
        type: [{
          type: 'array',
          required: true,
          message: '请至少选择一个活动性质',
          trigger: 'change'
        }],
        resource: [{
          required: true,
          message: '请选择活动资源',
          trigger: 'change'
        }],
        desc: [{
          required: true,
          message: '请填写活动形式',
          trigger: 'blur'
        }]
      },

      input: "",
      query: "",


    };
  },
  methods: {
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
