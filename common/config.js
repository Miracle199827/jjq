let url_config = ""
 
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://172.168.1.18:8176/jjCqjy/'
}else{
    // 生产环境
    url_config = 'http://172.168.1.18:8176/jjCqjy/'
}

export default url_config
