<template>
<div class="box">

  <div class="login-box">
    <div class="title ">欢迎来到小艾后台管理系统</div>
    <div class="line"></div>

    <div class="form-box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">

        <div class="username">
          <el-form-item label="用户名" prop="用户名">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
        </div>

        <div class="password">
          <el-form-item label="密码" prop="密码">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>
        </div>

        <el-form-item>

         <div class="button-box "> <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button></div>

        </el-form-item>

      </el-form>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: '',
  props: {},
  components: {

  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: "",
      },
      rules: {
        username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ]
      }

    }
  },
  methods: {

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('user/login', {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          })
          alert('submit!');

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
.button-box{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.form-box{
  width: 360px;
}
.line {
  text-align: left !important;
}

.line {
  margin: 20px auto;
  width: 100%;
  height: 1px;
  background: rgb(216, 212, 212);
}

.title {
  margin-top: 20px;
  font-size: 24px;
}

.el-input__inner {
  background: white;
}

.box {
  letter-spacing: 2px;
  background: rgb(192, 234, 236);
  width: 100%;
  height: 100%;
  position: absolute;

}

.login-box {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 300px;
  background: white;
  box-shadow: 0 0 8px rgb(75, 70, 70);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.8;

}
</style>
