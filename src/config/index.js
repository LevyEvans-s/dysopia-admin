const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    mockApi: 'https://mock.mengxuegu.com/mock/626bd8971e3d7470073a22aa/dysopia-admin',
    verifyApi: 'https://dysopia-admin-auth.authing.cn/api/v2/oidc/validate_token',
    appId:'62752a2f22494fc572206eb7'
  },
  prod: {
    baseApi: '',
  }
}

export default {
  env,
  namespace:'dysopia-admin',
  ...EnvConfig[env]
}