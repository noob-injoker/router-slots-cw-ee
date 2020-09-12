<template>
<div>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form :model="formOptions" :rules="rules" ref="form">
      <template v-for="(item,index) in formData">
        <el-form-item :label="item.lable" :prop="item.prop" v-if="!item.children" :key="index">
          <component v-model="formOptions[item.prop]" :is="`el-${item.type}`" v-bind="item.attrs"></component>
        </el-form-item>

        <el-form-item :label="item.lable" v-else :key="index">
          <component :is="`el-${item.type}`" v-model="formOptions[item.prop]" v-bind="item.attrs">
            <component :is="`el-${item1.type}`" v-for="(item1,ind) in item.children" :value="item1.value" :label="item1.label" :key="ind"></component>
          </component>
        </el-form-item>
      </template>
    </el-form>

    <slot name="footer" v-if="$slots.footer"></slot>

    <span slot="footer" class="dialog-footer" v-else>
      <el-button @click="cancel()">取 消</el-button>

      <el-button type="primary" @click="ok()">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "",
  props: {
    formData: {
      type: Array,
    },

    dialogVisible: {

      type: Boolean,

    },
  },
  components: {},
  data() {
    return {
      value: "",
      formOptions: {},
      rules: {},
    };
  },
  methods: {

    handleClose() {

      this.$emit("update:dialogVisible", false);

    },
    cancel() {

      console.log(this.formOptions);

      let options = JSON.stringify(this.formOptions)

      this.$emit('ok', {
        options: options,
        formRef: this.$refs.form
      });

      for (let i in this.formOptions) {
        if (i === 'role') {
          this.formOptions[i] = ''
        }
      }

    },
    ok() {

      console.log(this.formOptions);
      let options = JSON.stringify(this.formOptions)

      this.$emit('ok', {
        options: options,
        formRef: this.$refs.form
      });

      for (let i in this.formOptions) {
        if (i === 'role') {
          this.formOptions[i] = ''
        }
      }

    },
    upDateFatherData() {
      let options = {};
      let rules = {};

      this.formData.map((item) => {
        console.log(item.rules);
        rules[item.prop] = item.rules;
        options[item.prop] = item.value;
      });

      this.formOptions = JSON.parse(JSON.stringify(options));
      this.rules = JSON.parse(JSON.stringify(rules));

      console.log(this.formOptions);

    },
  },
  mounted() {
      this.upDateFatherData();
  },
  watch: {
    formData() {
      this.upDateFatherData();
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.bk {
  width: 80%;
  position: absolute;
  right: 10px;
}
</style>
