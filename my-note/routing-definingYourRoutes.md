
https://guides.emberjs.com/release/routing/defining-your-routes/


To define a route, run
```
ember generate route [route-name]
```
route/route-name.js, templates/route-name.hbs, tests/unit/routes/route-name-test.js가 만들어진다.


# Basic Routes
```
Router.map(function(){
  this.route('about', { path: '/about' });
  this.route('favorites', { path: '/favs' });
});
```

/about 접속시 about template을 렌더, /favs 접속시 favorites template을 렌더한다.
{path:''} 가 없을 경우 route name, 기본적으로 `about`의 경우 about.js가 기본 route handler가 사용되며
about.hbs가 template으로 사용된다.

# Nested Routes



# The Application route

The application route is entered when your app first boots up. 
You should put your header, footer, and any other decorative content here.
모든 route의 template은 application.hbs의 {{outlet}} 으로 렌더링 된다.

# Index Routes
```
Router.map(function() { 
  this.route('index', { path: '/' });
  this.route('favorites');
});
```

기본적으로 index template은 application.hbs의 {{outlet}}으로 렌더된다.
/favorites으로 접근하면 ember는 index template을 favorites template으로 교체한다.



# Dynamic Segments
One of the responseibilities of a route is to load a model.

``` app/templates/photos.hbs
<ul>
  {{#each this.photos as |p|}}
    <li>
      <LinkTo @route="photos.edit" @model={{p}}>{{p.title}}</LinkTo>
    </li>
  {{/each}}
</ul>
```

@model argument is a model object to fill in the dynamic segment for the route.

