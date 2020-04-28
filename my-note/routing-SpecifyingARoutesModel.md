
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


## [Fetch Example](https://guides.emberjs.com/release/routing/specifying-a-routes-model/#toc_fetch-example)

Note: A route with a dynamic segment will always have its model hook called when it is entered via the URL. *model object가 제공되는 route에 접근할 때 transition(<LinkTo/> 컴포넌트)등을 통하여 접근하면 `model` hook이 동작하지 않는다. id나 slug와 같은 식별자를 같이 제공해야 `hook`이 동작한다.*

아래의 예처럼 `photo`route로 transitioning 하면 `model`hook은 fire되지 않는다.

``` app/templates/photos.hbs
<h1>Photos</h1>
{{#each @model.photos as |photo|}}
  <p>
    <LinkTo @route="photo" @model={{photo}}>
      <img src="{{photo.thumbnailUrl}}" alt="{{photo.title}}" />
    </LinkTo>
  </p>
{{/each}}

```

반면, 아래와 같은 예처럼(`photo.id`) 식별자를 삽입해주면된다.

```
<h1>Photos</h1>
{{#each @model.photos as |photo|}}
  <p>
    <LinkTo @route="photo" @model={{photo.id}}>
      <img src="{{photo.thumbnailUrl}}" alt="{{photo.title}}" />
    </LinkTo>
  </p>
{{/each}}
```

