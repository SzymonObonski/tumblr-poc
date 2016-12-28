class HttpAuthService {
  constructor($q, $injector) {
    angular.extend(this, { $q, $injector });
  }

  request(config) {
    return config;
  }

  requestError(rejection) {
    return this.$q.reject(rejection);
  }

  response(config) {
    return config;
  }

  responseError(rejection) {
    if (rejection.status == 404) {
      alert('User not found')
    }
    return this.$q.reject(rejection);
  }


  static httpAuthFactory($q, $injector) {
    return new HttpAuthService($q, $injector);
  }
}
HttpAuthService.httpAuthFactory.$inject = ['$q', '$injector'];
export default HttpAuthService;
