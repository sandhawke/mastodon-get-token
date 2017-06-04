'use strict'

const axios = require('axios')

/*

  Base on https://github.com/5ika/smilodon/blob/master/src/index.js
  
  The main trick is that mastodon allows grant_type='password' so we
  don't need to actually fire up a browser, as most of the bot auth
  examples seem to do.

  Thanks so much, 5ika!

*/

function getToken(reg, user) {
  if (!reg.secret || !reg.id || !reg.server)
    throw 'You need to register the app first'
  if (!user.email || !user.pw)
    throw 'You need to provide the email and password of the account'
  const params = {
    client_id: reg.id,
    client_secret: reg.secret,
    username: user.email,
    password: user.pw,
    grant_type: 'password',
    scope: 'read write follow'
  };
  return axios.post(`${reg.server}/oauth/token`, params)
    .then((response) => {
      console.log('response ', response)
      const result = {}
      result.email = user.email
      result.server = reg.server
      result.token = response.data.access_token
      return result
    })
    // .catch((error) => console.error(error));
}

module.exports.getToken = getToken

