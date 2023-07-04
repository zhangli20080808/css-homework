import Mock from 'mockjs'

Mock.mock('/api/user', 'get', getUser)

function getUser () {
  return Mock.mock({
    'list|1-10': [{
      'id|+1': 1
    }]
  })
}
