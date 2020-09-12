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
  getUserDataList({ query, pagenum, pagesize }){
    return service.get(`users?query=""&pagenum=10&pageSize=1`)
  }
}