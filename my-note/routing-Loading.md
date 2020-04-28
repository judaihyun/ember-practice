
# Loading / Error Substates


- Ember Router는 route가 loading 중 일때 에러 발생등의 feedback을 제공합니다.

 `error`와 `loading` 상태가 각 `route`의 일부로써 존재하기 때문에 직접 `router.js`파일에 추가하면 안됩니다.
이 substates을 활용하기 위해서는 route, controller, template에 정의될 수 있습니다.

## `Loading` substates

`beforeModel`, `model`, `afterModel` hook이 동작하는 동안에, 데이터가 로드되는데 시간이 걸린다. 기술적으로는 router는 promises가 fulfill될 때 까지 router를 pause시킨다.





## the `loading` event

`beforeModel`/`model`/`afterModel` hook은 그 즉시 resolve되지 않으면 그 해당 route의 `loading` event가 fired.
만약 `loading`핸들러가 해당 route에 정의되어 있지 않다면 이벤트는 transition's parent route를 타고 올라가는(버블링) 동작을 수행하다 최종적으로 `application` route가 이를 manage 하게 할 수 있다.



