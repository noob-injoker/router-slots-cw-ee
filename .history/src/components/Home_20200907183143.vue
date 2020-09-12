<template>
<div>

  <cwBackUp>
    <!-- //this is table -->
    <div v-if="true">
      <cw-table :IndexFlag="IndexFlag" cell-click="clickCell" :tableData="tableData" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange" :total="total" :columns="columns" :showPageNation="showPageNation">

        <template v-slot:state="scope">

          <el-switch v-model="scope.scope.row.mg_state">

          </el-switch>

        </template>

        <template v-slot:action="scope">

          <el-button size="mini" type="danger" @click="del(scope.scope)">删除</el-button>
          <el-button size="mini" type="danger" @click="del(scope.scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.scope)">设置</el-button>

        </template>

      </cw-table>
    </div>

    <!-- //this is form -->

    <div v-else>
      <cw-form @cancel="cancel" @ok="ok" :dialogVisible.sync='dialogVisible' :formData="formData">

        <!-- <template v-slot:footer>

        <div> this is team</div>

      </template> -->

      </cw-form>

      <el-button @click=open()>
        打开hh
      </el-button>
        <div class="back-boxs">ddd</div>

    </div>

  
  </cwBackUp>
</div>
</template>

<script>
import axios from 'axios'
import cwTable from '@/components/cwTable'

export default {
  name: '',
  props: {},
  components: {
    cwTable,

  },
  data() {
    return {
      IndexFlag:true,
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

    }
  },
  methods: {
    clickCell(e){
      console.log(e);
    },
    cancel(val) {

      this.$message.success('点击了取消')
      this.dialogVisible = false
      console.log(val);

    },
    ok(val) {

      this.$message.success('点击了确定')
      this.dialogVisible = false
      val.formRef.resetFields()
      console.log(val);

    },
    open() {
      this.dialogVisible = true
    },
    handleCurrentChange(data) {
      console.log(data);
    },
    handleSizeChange(data) {
      console.log(data);
    },

    del(scope) {
      console.log(scope);
    },

    getData() {
      axios
        .get(
          "https://www.liulongbin.top:8888/api/private/v1/users?pagenum=1&pagesize=5", {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjUwMCwicmlkIjowLCJpYXQiOjE1OTk0Mzk1NTcsImV4cCI6MTU5OTUyNTk1N30.d93eT2S3H0U8g46lj0wQAp0FynbfkEe3_5MqIjMuBOQ",
            },
          }
        )
        .then((res) => {
          let data = res.data.data;
          if (res.data.meta.status === 200) {
            this.tableData = data.users;
            this.total = data.total;
          }
          console.log(res);
          console.log(this.total);

        }).catch(err => {
          console.log(err);
        });
    },

  },
  mounted() {
    this.getData()

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.back-boxs{
  width: 500px;
  height: 1000px;
  background: red;

}
</style>
