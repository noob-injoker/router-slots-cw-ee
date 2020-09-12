<template>
<div>

  <el-table @cell-click="clickCell" :data="tableData">

    <el-table-column type="index" width="100" align="center" label="#">

    </el-table-column>

    <template v-for="(item,index) in columns">

      <el-table-column v-if="item.prop" :label="item.lable" :align="item.align" :width="item.width" :key="index">

        <template slot-scope="scope">

          <template v-if="scope.row[scope.column.label]&&!item.slots&&item.lable==='姓名'">
          <!--上面的if需要的是哪些可以出现input框，cell-click里面的if判断条件必须，不写-->
            <div class="input-container">

              <div class="input-box">
                <el-input :ref="item.lable" @blur="onblur(scope)" v-model="scope.row[item.prop]"></el-input>
              </div>

              <div>

                <div class="btn-box">
                  <el-button type="text" size="mini">取消</el-button>
                  <el-button size="mini" type="text">确定</el-button>
                </div>

              </div>

            </div>
          </template>

          <template v-else>

            <template v-if="!item.slots">{{scope.row[item.prop]}}</template>

            <slot v-else :name="item.slots" :scope="scope"></slot>

          </template>

          <!--//如果用了:prop下面就不需要用scope去取值了。-->

        </template>

      </el-table-column>

      <el-table-column v-else :label="item.lable" :align="item.align" :width="item.width" :key="index">
        <template slot-scope="scope">
          <slot name="action" :action="scope"></slot>
        </template>
      </el-table-column>

    </template>
  </el-table>

  <div v-if="showPageNation" class="pagaNation">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
  </div>

</div>
</template>

<script>
export default {
  name: "",
  props: {
    showPageNation: {
      type: Boolean,
      default: true
    },
    tableData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    total: {
      type: Number,
      default: 10
    },
    currentPage4: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  components: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onblur(scope) {
      console.log(666);
      scope.row[scope.column.label] = false
      console.log(scope.row);

    },
    clickCell(row, column) {

      let flag = column.label
      this.$set(row, flag, true)
      console.log(row);
      if (column.label === "姓名") {
        //此处的名字就是可以变成可编辑的item
        this.$nextTick(() => {
          this.$refs[column.label][0].focus()
        })
      }

    },
    handleSizeChange(val) {
      this.$emit('handleSizeChange', val)
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val)
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.btn-box {
  display: flex;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-box {
  width: 80%;
}

.pagaNation {

  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

}
</style>
