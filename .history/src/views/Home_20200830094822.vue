<template>
<div>
  首页
</div>
</template>

<script>
import {
  createNamespacedHelpers
} from 'vuex'
const userModule = createNamespacedHelpers('user')
const {
  mapState: userState,
  mapActions: userActions
} = userModule
export default {
  name: 'Home',
  props: {},
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  },
  watch: {

  },
  computed: {

  }
}
</script>

<style scoped lang='scss'>

</style>
