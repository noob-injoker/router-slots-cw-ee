import api from '../../http/api'

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    userDataList: [],
  },
  mutations: {
    setUserDataList(state, data) {
      state.userDataList = data
    }
  },
  actions: {

    async $getUserDataList({ commit }, { query, pagenum, pagesize }) {
      console.log(commit);
      let res = await api.getUserDataList({ query, pagenum, pagesize })
      if(res.meta.status===200){
        let userListData = res.data.users;
        console.log(userListData);
      }
      commit('setUserDataList', res);

      console.log(res);
      console.log(666);
    },
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数




  },
}