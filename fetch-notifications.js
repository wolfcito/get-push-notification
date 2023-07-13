const PushApi = require('@pushprotocol/restapi')
require('dotenv').config()

const fetNotifs = async () => {
  const notifications = await PushApi.user.getFeeds({
    user: `eip155:5:${process.env.MV_ADDRESS}`, // user address in CAIP
    env: 'prod',
  })

  console.log('notifications', notifications)
}

fetNotifs()
