<template>
<div>
  <el-table :data="tableData" border style="width: 100%">
    <!--插入index-->
    <el-table-column v-if="indexOptions.showIndex" type="index" :label="indexOptions.label" :align="indexOptions.align" :width="indexOptions.width" :index="indexOptions.indexMethod"></el-table-column>

    <template v-for="(item,index) in columns">

      <!--定义expand插槽-->

      <el-table-column type="expand" v-if="item.type==='expand'" :key="index">
        <template slot-scope="scope">
          <slot name="expand" :scope="scope"></slot>
        </template>
      </el-table-column>

      <!--通过item.propName属性判断一般显示-->

      <el-table-column v-if="item.propName" :label="item.label" :key="index">
        <template slot-scope="scope">
          <span>{{ scope.row[item.propName]}}</span>
        </template>
      </el-table-column>

      <!--通过slots来留插槽，通过item.name来定义名字，然后用它的组件就可以写插槽的内容-->

      <template v-if="item.slots" >

        <template v-for="(childComponent,indexs) in item.slots" >

          <el-table-column :key="`${index}${indexs}`" :label="childComponent.label">

            <template  slot-scope="scope">
              <slot :name="childComponent.name" :scope="scope"></slot>
            </template>

          </el-table-column>

        </template>

      </template>

    </template>

  </el-table>

</div>
</template>

<script>
export default {
  name: '',
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    indexOptions: {
      type: Object,
    }

  },
  components: {

  },
  data() {
    return {

      // -----父组件需要的data-----

      // indexOptions: {

      //   showIndex: true,
      //   label: '#',
      //   align: 'center',
      //   width: '200',
      //   indexMethod(index) {
      //     return index * 2
      //   },

      // },
      // columns: [{
      //     type: 'expand',
      //   },
      //   //首先配置仅仅只是展示的列。，，
      //   {
      //     propName: 'date',
      //     label: "日期",

      //   },
      //   {
      //     propName: 'name',
      //     label: "名字",
      //   },
      //   {
      //     propName: 'address',
      //     label: "地址",
      //   },
      //   //配置type=expand

      //   //配置插槽，提高可配置性
      //   {
      //     slots: [{
      //         label: "操作",
      //         name: 'operation',
      //       },
      //       {
      //         label: "状态",
      //         name: "state"

      //       }

      //     ]
      //   }
      // ],

    }
  },
  methods: {

  },
  mounted() {

   console.log(this.$scopedSlots); 
    

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>

</style>
