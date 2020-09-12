import api from '../../http/api'

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    userDataList: [],
    total: 0,
  },
  mutations: {
    setUserDataList(state, data) {
      state.userDataList = data
    },
    setTotal(state, data) {
      state.total = data
    }
  },
  actions: {

    async $getUserDataList({ commit }, { query, pagenum, pagesize }) {

      console.log(commit);

      let res = await api.getUserDataList({ query, pagenum, pagesize })

      if (res.meta.status === 200) {

        let userListData = res.data.users;
        let total = res.data.total * 1

        console.log(res);

        commit('setUserDataList', userListData);
        commit('setTotal', total);

      }
    },

    async $EditeData({ dispatch }, { id, email, mobile, query, pagenum, pagesize }) {
      let res = await api.getEditeData({ id, email, mobile })
      console.log(res);
      if (res.meta.status === 200) {
        dispatch(`$getUserDataList`, {
          query,
          pagenum,
          pagesize
        })
      }

      console.log(res);
    },

    async $deletUser({ dispatch }, { id, query, pagenum, pagesize }) {


      let res = await api.deletUser({ id })
      console.log(res);
      if (res.meta.status === 200) {
        dispatch(`$getUserDataList`, {
          query,
          pagenum,
          pagesize
        })
      }
    },

    async $addUser({ dispatch }, {
      username,
      password,
      email,
      mobile,
      query,
      pagenum,
      pagesize
    }) 
    {


      let res = await api.addUser({

        username,
        password,
        email,
        mobile,

      })

      console.log(res);

      if (res.meta.status === 201) {

        dispatch(`$getUserDataList`, {
          query,
          pagenum,
          pagesize
        })
        console.log(8888);

      }


    },




    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数




  },
}