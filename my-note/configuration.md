

Configuring Your App

====================================================

기본적으로 ember는 설정할것이 없다.
runtime 실행 환경 설정은 `config/environment.js`.

`ENV`object의 세 가지 주목할만한 속성이 있다.
1. `EmberENV`는 `Ember feature flags`를 정의한다.
2. `APP`는 flag나 옵션을 `Application instance`에 넘겨 줄 수 있다.
3. `environment`는 development,test,production을 선택한다.

`ENV`는 빌드타임에 정의되지만, `your-app-name/config/environemtn`를 import하여 access 할 수 있다.



