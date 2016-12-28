import template from './post.html';
import controller from './post.controller';
import './post.scss';

let postComponent = {
  restrict: 'E',
  bindings: {
    post: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default postComponent;
