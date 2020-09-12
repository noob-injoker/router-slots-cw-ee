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

        <el-table ref="singleTable" :data="userDataList" border highlight-current-row @current-change="handleCurrentChange" style="width: 100%">

          <el-table-column align="center" label="#" type="index" width="50">

          </el-table-column>

          <el-table-column label="姓名" align="center" width="180">
            <template slot-scope="scope">

              <span style="margin-left: 10px">{{scope.row.username}}</span>

            </template>
          </el-table-column>

          <el-table-column label="角色" align="center" width="180">
            <template slot-scope="scope">

              <span>{{ scope.row.role_name }}</span>

            </template>
          </el-table-column>

          <el-table-column label="电话" align="center" width="180">
            <template slot-scope="scope">

              <span style="margin-left: 10px">{{scope.row.mobile }}</span>

            </template>
          </el-table-column>

          <el-table-column label="邮箱" align="center" width="180">

            <template slot-scope="scope">

              <span style="margin-left: 10px">{{scope.row.email }}</span>

            </template>

          </el-table-column>

          <el-table-column label="状态" align="center" width="80">

            <template slot-scope="scope">

              <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#DCDFE6">
              </el-switch>

            </template>

          </el-table-column>

          <el-table-column label="操作" align="center">

            <template slot-scope="scope">

             

              <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>

              <el-button size="mini" type="warning" @click="handleSet(scope.$index, scope.row)">设置</el-button>

            </template>

          </el-table-column>

        </el-table>

         <el-dialog title="增加用户" align="left" :visible.sync="dialogFormVisibleAdd">

                <el-form :model="form" :rules="rules" ref="ruleForm">

                  <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
                    <el-input v-model="form.username" auto-complete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" auto-complete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.email" auto-complete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="form.mobile" auto-complete="off"></el-input>
                  </el-form-item>

                </el-form>

                <div slot="footer" class="dialog-footer">

                  <el-button @click="dialogFormVisibleAdd">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisibleAdd = false">确 定</el-button>
               
                </div>

              </el-dialog>

              <el-dialog title="编辑用户" align="left" :visible.sync="dialogFormVisibleEdit">

                <el-form :model="form" :rules="rules" ref="ruleForm">

                  <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
                    <el-input v-model="form.username" auto-complete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.email" auto-complete="off"></el-input>
                  </el-form-item>

                  <el-form-item label="电话" :label-width="formLabelWidth">
                    <el-input v-model="form.username" auto-complete="off"></el-input>
                  </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="handleEditCancel">取 消</el-button>
                  <el-button type="primary" @click="handleEditSure">确 定</el-button>
                </div>

              </el-dialog>

              <el-dialog title="分配用户" align="left" :visible.sync="dialogFormVisibleSet">

          

                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogSetConcel">取 消</el-button>
                  <el-button type="primary" @click="dialogSetSure">确 定</el-button>
                </div>

              </el-dialog>

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
      pagenum: 1,
      pagesize: 5,
      dialogFormVisibleEdit: false,
      dialogFormVisibleAdd: false,
      dialogFormVisibleSet: false,

      formLabelWidth: '120px'
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
