// 单次签到脚本
const axios = require('axios');

const defaultDotunnelUrl = 'https://dotunnel005.com/user/checkin'

const signup = (dotunnelCookie, dotunnelUrl = defaultDotunnelUrl) => {
  const instance = axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      },
    },
    withCredentials: true, // default
  })
  if (!dotunnelCookie) return
  return instance({
    method: 'post',
    url: dotunnelUrl,
    headers: {
      cookie: dotunnelCookie
    }
  })
}

exports.signup = signup



