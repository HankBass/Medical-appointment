/**
 * 后台请求api接口配置
 */
export default {
  /**
   * 登录相关接口
   */

  loginCode: "/weixin/wxLogin", //登录获取openId
  login: "/user/login", //会员登录


  /**
   * 体检项目
   */
  comboList:"/body-check/project", // 获取体检项目
  optionalPackage:"/body-check/select-project",// 获取自选套餐
  /**
   * 用户预约
   */
  order:"/user-order/",
  check:"/user-order/check",
  sendCode:"/user-order/code"
}
