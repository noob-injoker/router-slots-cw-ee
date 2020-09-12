import service from './index'

export default {

  login({username, password}) {
    return service.post('/login', {
      username,
      password
    })
  },

  getMenus() {
    return service.get('menus')
  },

  getUserDataList({query, pagenum, pagesize}){
    return service.get(`users?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}`)
  },

  getEditeData({id,email,mobile}){

      return service.put(`users/${id}`,{email,mobile})

  },
  deletUser({id}){
    return service.delete(`users/${id}`)
  },
  addUser({username,password,email,mobile}){
    return service.post(`users`,{
      username,
      password,
      email,
      mobile
    })
  },
  getRoleList(){
    return service.get(`roles`)
  }
}