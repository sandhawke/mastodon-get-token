Do the oauth dance to get a user's access token, knowing the password.

This is meant for bots, where the machine is going to know the password.

If you're dealing with an end user, you'll need to open a browser and
do this properly.  You don't want to be handling their password, and
they might be using 2FA anyway.

## Command line usage

Use mastodon-register-app and mastodon-create-account first, in the same directory, giving you an app-registration.json and user-details-USERNAME.json files, which have data we need to get the tokens.

```sh
$ npm install -g mastodon-get-token
$ mastodon-get-token test7
wrote access-token-test7.json
$ cat access-token-test7.json
{
   ...
}
```

## Library usage


```sh
$ npm install --save mastodon-get-token
```

```js
const getToken = require('mastodon-get-token')

const appreg = require('./app-registration.json')
const user = require('./user-details-alice.json')

getToken(appreg, user)
  .then(access => {
     // use access.server and access.token is what you'll need for the API
  })
```