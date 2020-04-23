
# Application and Instances

모든 Ember App은 `Application`class를 확장하여 표현된다. This class is used to declare and configure the many object that make up your app.

Ember가 부팅될때, stateful aspect 를 manage하는 `ApplicationInstance`가 생성된다. 이 instances는 Ember가 인스턴스화된 객체를 `owner` 역할을 한다. 즉, `Application`은 ember를 정의하고 이를 인스턴스화한 `ApplicationInstance`가 상태를 관리한다.


# Dependency Injection

## Overview

- `Application`은 의존성 선언 등록 역할을 한다.
- `ApplicationInstance`는 factory에 의하여 등록/인스턴스화 되어진 객체의 `owner`역할을 한다. (`lookup`을 통하여 인스턴스/검색 기능을 제공)

Note. `application`뿐만 아니라 `ApplicationInstance`에서도 test와 같은 곳에서 사용하기 위한 instance-level의 registry기능을 제공한다.

## Factory Registrations

모든 factory는 특정 키과 함께 등록된다. 예를들면, index template은 `template:index`, application route는 `route:application`.

`user` custom factory type을 생성하고 싶다면 다음과 같이 [application.register('user:user-to-register')](https://api.emberjs.com/ember/3.17/classes/Application/methods/register?anchor=register)로 등록가능하다.



#

``` application 
ember generate initializer [name]
```

``` instance-application
ember generate instance-initializer [name]
```


## Factory Inject

Once a factory is registered, it can be 'injected' where it is needed.

```  app/initializers/logger.js
import EmberObject from '@ember/object';

export function initialize(application) {
  let Logger = EmberObject.extend({
    log(m) {
      console.log(m);
    }
  });

  application.register('logger:main', Logger);

  application.inject('route', 'logger', 'logger:main');
	또는
	application.inject('route:index', 'logger', 'logger:main');
}

export default {
  name: 'logger',
  initialize: initialize
};
```

위와 같이 'injected'된 factory는 아래와 같이 접근 할 수 있다.

```   app/routes/index.js
import Route from '@ember/routing/route';

export default Route.extend({
  activate() {
    // The logger property is injected into all routes
    this.logger.log('Entered the index route!');
  }
});
```


## Factory Instance Lookups

https://guides.emberjs.com/release/applications/dependency-injection/#toc_factory-instance-lookups

실행 중인 application에서 인스턴스화 된 factory를 가져오기 위해서는 `lookup` mehtod를 사용한다. 

```
applicationInstance.lookup('factory-type:factory-name');
```


## Initializers

There are two types of initializers: application initializers and application instancfe initializers.

1. application initializer : 어플리케이션이 boot될 때 실행되며, DI를 설정하게 한다.

2. application instance initializer : application instance가 로드될때 사용된다. 


# Run Loop

## An example of the internals

https://guides.emberjs.com/release/applications/dependency-injection/#toc_factory-instance-lookups




