

#재사용가능한


## Self-CLosing Tags : <div/>와 같은 식을 허용한다.

## Naming : sent-message.hbs 면 <SentMessage> 형식으로 사용한다.

## Arguments
HTML의 다른 부분을 template 만들수 있다.

``` app/components/avatar.hbs
<aside>
  <div class="avatar" title={{@title}}>{{@initial}}</div>
</aside>
```
<Avatar>태그를 이용하여 {{@initial}} <div>태그 안에 동적으로 값을 삽입한다.

위의 컴포넌트 사용 예
```
<Avatar @title="Tomster's avatar" @initial="T" />
```

...attributes : 속성 뒤에 ...attributes가 나타나면 그 속성이 override된다.
속성 앞에 나타나면 override되지 않는다. 또한 class속성은 특별하게 덮어쓰여지기 보다
병합된다.

## Conditional Content

1. https://guides.emberjs.com/release/components/conditional-content/
2. https://api.emberjs.com/ember/release/classes/Ember.Templates.helpers/methods/if?anchor=if

ex :
```
{{#if this.thingIsTrue}}   << This is BLOCK `if`
   Content for the block form of "if"
{{/if}}

<div class={{if this.IsTrue "if-true" "if-false"}}> << This is Inline `if`
    This div used the inline "if" to calculate the class to use.
</div>
```

## Block Content

https://guides.emberjs.com/release/components/block-content/


## Helper Function

https://guides.emberjs.com/release/components/helper-functions/

## Component State and Actions

https://guides.emberjs.com/release/components/component-state-and-actions/

### Tracked Properties

## Looping THrough Lists

https://guides.emberjs.com/release/components/looping-through-lists/

<form> 전송하는 예제들..

