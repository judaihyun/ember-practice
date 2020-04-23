
# Specifying a Route's Model

A route's JS file is one of the best places in an app to make requests to an API.

- When a user first visits the `/favorites-posts` route, the `model` hook in `app/routes/favorite-posts.js` **will automatically run.**

- `model` hook을 이용하는 주요 이유는 
1. better user experience
2. 로딩 및 오류를 적절하게 사용하여 better user experience
3. Dealing with concurrency

- `service`에서 사용해도 좋다.



예를들어 아래와 같이 router가 존재.

``` app/router.js
Router.map(function() {
  this.route('favorite-posts');
});
```

유저가 `/favorite-posts`를 방문하면 `model`은 아래의 js파일의 hook한다.

``` app/routes/favorites-posts.js
import Route from '@ember/routing/route';

export default class FavoritePostsRoute extends Route {
  model() {
    console.log('The model hook just ran!');
    return 'Hello Ember!';
  }
}
```

