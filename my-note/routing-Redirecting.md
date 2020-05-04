

# Redirecting

리다이렉트 방법

1. One of the methods is `transitionTo()`.
2. The other one is `replaceWith()` which works the same way as `transitionTo()`. 유일한 차이는 history manage, `replaceWith()`는 현재의 route entry를 이곳에서 정한 경로로 대체하는 반면, `transitionTo()`는 현재의 route entry를 떠나 새로운 리다이렉션을 위한 entry를 만든다.


**새로운 route가 dynamic segment를 가질 경우, model이나 식별자를 각 segment에 전달하여야 합니다. 또한 model이 이미 로드되었을 경우,`<link-to>`나 `transitionTo()`를 통하여 transtition된 경우,  `model()`hook은 동작하지 않음.**


``` app/routes/index.js
import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel(/* transition */) {
    this.transitionTo('posts'); // Implicitly aborts the on-going transition.
  }
}
```

beforeModel() 는 이전 transition을 argument로 받을 수 있는데, 이는 이전의 transition로 다시 되돌아가기위해서 사용할수있다. 예를 들면 로그인 실패시..


# Preventing and Retrying Transitions







# Asynchronous-routing

https://guides.emberjs.com/v3.15.0/routing/asynchronous-routing/


## The Router는 Promise를 위해 pause 된다.

`model` hook(`beforeModel` or `afterModel`)이 object나 array를 return하면 그 즉시 상태 이동이 완료 된다. 그러나 `model` hook이 promise를 리턴할 때는 promise가 fulfill되거나 reject될때까지 상태이동(`transition`)은 pause된다.


