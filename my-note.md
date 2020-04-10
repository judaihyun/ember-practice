

실행방법 
: ember server

테스트 설치 방법

: 

테스트 실행 방법
: ember test --server or ember t -s  
( localhost:7357 )



----------------------
#annotation

@tracked : It tells Ember to monitor this variable for updates.
(Whenever this variable's value changes, Ember re-render templates
that depend on its value.)

----------------------
{{yield}}   : text replace
{{outlet}}  : the place where our site's pages should be rendered


------------------

application.hbs : This template is special in that it does not have its own URL and cannot be navigated to on its own. Rather, it is used to specify a common layout that is shared by every page in your app. This is a great place to put site-wide UI elements, like a nav-bar and a site footer.