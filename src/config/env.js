// 配置编译环境和线上环境之间的切换
// baseUrl:域名地址
// routerMode:路由模式
// imgBaseUrl:图片所在域名地址


// vue-route有两种模式：history模式和hash模式。
let baseUrl = '';
let routerMode = 'hash';  //路由模式有两种history和hash
let imgBaseUrl = '';


if (process.env.NODE_ENV == 'development') {  // 测试环境或者线下环境
  imgBaseUrl = '/img/';
}else if(process.env.NODE_ENV == 'production'){ //线上环境
  baseUrl = '//elm.cangdu.org';
  imgBaseUrl = '//elm.cangdu.org/img/'
}


export {
  baseUrl,
  routerMode,
  imgBaseUrl,
}
