export default $resource => {
  return $resource('https://:userName.tumblr.com/api/read/json?:startNum', { userName: '@name', startNum: '@number' }, {
    'get': {
      method: 'JSONP',
    }
  });
}
