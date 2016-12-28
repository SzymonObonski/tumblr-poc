class HomeController {
  constructor(getService) {
    this.getService = getService;
    this.userName = 'lucifersloverboy';
    this.startNum = 0;
    this.posts = this.getService.get({ userName: this.userName, start: this.startNum });
  }
  searchUser() {
    this.startNum = 0;
    this.posts = this.getService.get({ userName: this.userName, start: this.startNum });
  }
  loadMore() {
    this.startNum += 20;
    this.posts = this.getService.get({ userName: this.userName, start: this.startNum });
  }

}
HomeController.$inject = ['getService'];
export default HomeController;
