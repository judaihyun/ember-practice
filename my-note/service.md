
Service


=====================================

Service : 자바의 bean과 같은 역할로써 어플리케이션이 구동되는 동안
전 영역(js파일, 모듈파일등)에서 사용가능한 공유 객체로 생각하면 됨.

Example uses of services might include :
- User/session authentication
- Geolocation
- WebSockets
- Server-sent events or notifications
- Server-backed API calls that may not fit Ember DAta
- Third-party APIs
- Loggin

# Defining Services


아래의 명령어로 Service 를 생성할수도 있다.
```
 ember generate service shopping-cart
```

- service API DOC 
https://api.emberjs.com/ember/release/modules/@ember%2Fservice


# Accessing Services

다른 곳(모듈,파일등)에서 정의한 service를 사용하기 위해서는 
`@ember/service`모듈의 `inject`를 사용하면 된다.
서비스 주입을 좀 더 명확히 하기 위해 `inject`을 별칭으로 사용합니다.

`service`를 호출하는 두 가지 방법이 있다.
1. argument를 넘겨주지 않는 방식
2. 아래와 같이 넘겨주는 방식(별칭지정이라고 보면됨)
```
@service('shopping-cart') cart;
```
