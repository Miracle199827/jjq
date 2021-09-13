let url_config = ""
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  url_config = 'http://172.168.1.18:8176/jjCqjy/'
} else if (process.env.NODE_ENV === "test") {
  // 测试环境
  // baseUrl = "http://test";
} else if (process.env.NODE_ENV === "pre") {
  // 预发布环境
  // baseUrl = "http://pre";
} else if (process.env.NODE_ENV === "production") {
  // 生产环境
  url_config = 'http://172.168.1.18:8176/jjCqjy/'
}

export default url_config