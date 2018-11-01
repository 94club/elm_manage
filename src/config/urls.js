export default {
  login: '/admin/login',
  signout: '/admin/signout',
  adminInfo: '/admin/info', // 获取用户信息
  apiCount: '/statis/api', // '/statis/api/' + date + '/count'某天api请求量
  apiAllCount: '/statis/api/count', // 所有api请求量
  apiAllRecord: '/statis/api/all', // 所有api请求信息
  userCount: '/statis/user', // '/statis/user/' + date + '/count'用户注册量
  orderCount: '/statis/order', // '/statis/user/' + date + '/count'某一天订单数量
  adminDayCount: '/statis/admin', // '/statis/admin/' + date + '/count'某一天管理员注册量
  adminList: '/admin/all', // 管理员列表
  adminCount: '/admin/count', // 管理员数量
  cityGuess: '/v1/cities?type=guess', // 获取定位城市
  shopAdd: '/shopping/addShop', // 添加商铺
  placeeSearch: '/v1/pois', // 获取搜索地址
  categoryGet: '/shopping/getcategory/', // 获取当前店铺食品种类
  categoryAdd: '/shopping/addcategory', // 添加食品种类
  foodAdd: '/shopping/addfood', // 添加食品
  foodCategory: '/shopping/v2/restaurant/category', // 种类列表
  restaurantsGet: '/shopping/restaurants', // 获取餐馆列表
  resturantDetail: '/shopping/restaurant/', // 获取餐馆详细信息
  resturantCount: '/shopping/restaurants/count', // 获取餐馆数量
  restaurantUpdate: '/shopping/updateshop', // 更新餐馆信息
  restaurantDelete: '/shopping/restaurant/', // 删除餐馆
  foodsGet: '/shopping/v2/foods', // 获取食品列表
  foodsCount: '/shopping/v2/foods/count', // 获取食品数量
  foodUpdate: '/shopping/v2/updatefood', // 更新食品信息
  foodDelete: '/shopping/v2/food/', // 删除食品
  menuList: '/shopping/v2/menu', // 菜单列表
  menuDetail: '/shopping/v2/menu/', // 菜单详情
  userList: '/v1/users/list', // 获取用户列表
  userCount: '/v1/users/count', // 获取用户数量
  orderList: '/bos/orders', // 获取订单列表,
  orderCount: '/bos/orders/count', // 获取订单数量
  userInfo: '/v1/user/', // 获取用户信息
  addressDetail: '/v1/addresse/', // 获取地址信息
  userCityCount: '/v1/user/city/count' // 获取用户分布信息
}