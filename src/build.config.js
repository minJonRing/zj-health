const ENV = process.env.NODE_ENV
let BUILD_CONFIG = {
  ENV,
  proxy: '/api',
  title: '',
  permission: []
}

switch (ENV) {
  case 'development':
    BUILD_CONFIG = {
      ...BUILD_CONFIG,
      proxy: '/app',
      // proxy: 'http://192.168.2.237:9994',
      title: '开发环境',
    }
    break;
  // 测试
  case 'exam':
    BUILD_CONFIG = {
      ...BUILD_CONFIG,
      proxy: '/api',
      title: '计算机辅助个人访谈(CAPI)',
      permission: []
    }
    break;
  // 技术报送、检测卡
  case 'production':
    BUILD_CONFIG = {
      ...BUILD_CONFIG,
      proxy: '/api',
      title: '计算机辅助个人访谈(CAPI)',
      permission: []
    }
    break;
}

export default BUILD_CONFIG;
