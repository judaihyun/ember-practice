

# Redirecting

리다이렉트 방법

1. One of the methods is `transitionTo()`.
2. The other one is `replaceWith()` which works the same way as `transitionTo()`. 유일한 차이는 history manage, `replaceWith()`는 현재의 route entry를 이곳에서 정한 경로로 대체하는 반면, `transitionTo()`는 현재의 route entry를 떠나 새로운 리다이렉션을 위한 entry를 만든다.


``` app/routes/index.js
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('posts'); // Implicitly aborts the on-going transition.
  }
}
```

beforeModel() 는 현재 transition을 argument로 받을 수 있는데, 이는 현재의 transition을 저장 후 다시 되돌아가기위해서 사용할수있다. 예를 들면 로그인 실패시..

