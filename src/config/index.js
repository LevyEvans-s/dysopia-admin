const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi:'https://mock.mengxuegu.com/mock/626bd8971e3d7470073a22aa/dysopia-admin'
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