import api from '../../http/api'

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    rightsManagementList: [],

  },
  mutations: {
    setRightsManagementList(state, data) {
      state.rightsManagementList = data
    }
  },
  actions: {

    async $setRightsManagement({ commit }) {

      console.log(commit);

      try {

        let res = await api.getRoleList()
        console.log(res);

        if (res.meta.status === 200) {

          let rightsManagementList = res.data;
          console.log(rightsManagementList);
          
          commit('setRightsManagementList', rightsManagementList);
          

        } else {
          console.log('err');
        }
      } catch (err) {
        console.log(err);
      }
    }




  },




  // 所有的请求都写在actions里面
  // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数




}