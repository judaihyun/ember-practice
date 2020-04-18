

Ember Data(model)

https://guides.emberjs.com/v3.15.0/models/

Note. Route의 `model` method와는 다른 컨셉임을 유의.

=======================================

# Models

In Ember Data, 각 model은 `Model`의 subclass로 표현되고,
`Model`은 attributes, relationships, behavior를 정의할 수 있다.

모델은 서버,api에서 제공하는 데이터 타입을 정의한다. 예를들어
`Person` model은 firstname속성과 birthday속성을 갖을 수 있다.

``` app/models/person.js
import Model, { attr } from '@ember-data/model';

export default class PersonModel extends Model {
  @attr('string') firstName;
  @attr('date') birthday;
}
```

또한 model은 다른 object과의 relationship을 구성할 수 있다.

``` app/models/order.js
import Model, { hasMany } from '@ember-data/model';


export default class OrderModel extends Model {
  @hasMany('line-item') lineItems;
}
```

``` app/models/line-item.js
import Model, { belongsTo } from '@ember-data/model';

export default class LineItemModel extends Model {
  @belongsTo('order') order;
}
```

위의 order, lineItem의 예제같이 order는 여러 line-items을 갖을 수 있고 line-item은 ordey에 속할 수 있다.

이처럼 모델은 데이터 자체를 가지고 있지 않으며, 특정 인스턴스의 속성, 관계 및 동작을 정의하며, 이를 레코드라고 한다.

# Records

A `record` is an instance of a model that contains data loaded from a server.
Your application can alse create new records and save them back to the server.

A record is uniquely identified by its model `type` and `ID`.

```
this.store.findRecord('person', 1); 
// => { id: 1, name: 'steve-buscemi' }
```

