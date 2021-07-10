const fetch = require('node-fetch')

async function waitForGraphQL(url) {
  let counter = 0
  const id = setInterval(async () => {
    const gotResponse = await checkForGraphQL(url)
    if (gotResponse) {
      clearInterval(id)
      return true
    }
    counter += 1
    if (counter > 60) {
      console.log('wait-for-url.js: checkForGraphQL - TIMEOUT')
      process.exit(1)
    }
  }, 500)
}

async function checkForGraphQL(url) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'admin_secret_local_zzz',
      },
      body: JSON.stringify({
        query: 'query usersCount { users_aggregate { aggregate { count } } }',
      }),
    })

    const resData = await response.json()
    if (resData?.data?.users_aggregate?.aggregate?.count >= 0) {
      process.stdout.write(`found users(${resData.data.users_aggregate.aggregate.count})\n`)
      return true
    }
  } catch (error) {
    if (error.message.match(/(ECONNREFUSED|ECONNRESET|socket hang up)/)) {
      process.stdout.write('.')
    } else {
      console.log('-- error: ', error)
    }
  }
  return false
}

// main
waitForGraphQL('http://localhost:8080/v1/graphql')
  .then(() => {
    process.stdout.write('graphQl service is up and running\n')
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
