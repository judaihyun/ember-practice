

# CLI command

실행방법 
: ember server

테스트 설치 방법

: 

테스트 실행 방법
: ember test --server or ember t -s  
( localhost:7357 )



----------------------
# annotation

@tracked : It tells Ember to monitor this variable for updates.
(Whenever this variable's value changes, Ember re-render templates
that depend on its value.)

----------------------
# Syntax

{{yield}}   : text replace
{{outlet}}  : the place where our site's pages should be rendered

ex: <Rental @rental={{@model}}>
- Rental컴포넌트에 @rental 라고 매개변수명을 사용자가 정의하고
이곳에 @model을 넘길 수 있다.
- rental.hbs 에서는 {{@rental.*}} 로 @model 데이터를 접근한다.

ex: {{#each @model as |rental|}}
		<li><Rental @rental={{rental}}/></li>
	{{/each}}
- {{#each}} ... {{/each}} : to iterate and loop through the array returned by the model hook.
- as |property| : @model를 |property|로 alias





------------------

#  files

application.hbs : This template is special in that it does not have its own URL and cannot be navigated to on its own. Rather, it is used to specify a common layout that is shared by every page in your app. This is a great place to put site-wide UI elements, like a nav-bar and a site footer.

environment.js : 


-------------------------

# Modules

- Route : 경로에 기능을 추가하는 시작점으로 써 사용한다.
method
model() : known as the model hook. The model hook is responsible for fetching and preparing any data that you need for your route. Ember will automatically call this hook when entering a route.
.hbs 파일에서 {{@model.}} 형식으로 데이터에 엑세스할 수 있다.


------------------------------------
