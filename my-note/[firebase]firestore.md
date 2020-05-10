


===============================

# example

api docs : https://firebase.google.com/docs/reference/js/firebase?authuser=0#initializeapp

data model guide : https://firebase.google.com/docs/firestore/data-model?authuser=0

api guide : https://googleapis.dev/nodejs/firestore/latest/index.html

# Data Model


## 문서 (doc 또는 Document)
Cloud Firestore의 저장소 단위가 `문서`이다. `문서`는 값에 매핑되는 필드를 포함하는 간단한 레코드다. 각 `문서`는 이름으로 식별.

문서이름: alovelace
first : "Ada"
last : "Lovelace"
born : 1815
으로 표현하고 이를 아래와 같이 중첩 개체로 표현하여 맵이라고 부른다.

name :
    first : "Ada"
    last : "Lovelace"
born : 1815


## 컬렉션
문서는 컬렉션에 저장되며, 컬렉션은 단순히 문서의 컨테이너이다.
위의 user컬렉션의 avlovelace를 코드에서 참조하려면
``` 
    문서 참조
    let docRef = db.collection('users').doc('alovelace');
    or
    let docRef = db.doc('user/alovelace);
```

``` 
    컬렉션 참조
    let collectRef = db.collection('users');
```

컬렉션/문서 참조는 서로 다른 작업을 수행한다. 컬렉션 참조는 컬렉션의 문서를 쿼리 할 수 있고, 문서 참조는 개별 문서를 읽거나 쓸 수 있다.

## 계층적 데이터

```
    var messageRef = db.collection('rooms').doc('roomA')
                .collection('messages').doc('message1');
```


# 데이터 추가

다음의 몇 가지 방법으로 데이터 추가
1. 문서 식별자를 명시적으로 지정
2. 컬렉션에 새 문서를 추가
3. 자동으로 생성된 식별자로 빈 문서를 만들고 나중에 데이터 할당

## 문서 설정

- 단일 문서를 만들거나 덮어쓰려면 `set()` 메서드를 사용.
```
    db.collection('citi').doc('LA').set({
        ~~~
    })
```

```
var cityRef = db.collection('cities').doc('BJ'); //문서만 생성

var setWithMerge = cityRef.set({
    capital: true
}, { merge: true });
```
문서를 실수로 덮어쓰지 않도록 새 데이터를 기존 문서와 병합하는 옵션사용.


- 문서 추가
문서ID(이름)을 자동으로 생성하도록 하려면 아래와 같이 `add()`를 호출한다.
```
db.collection("cities").add({
    name: "Tokyo",
    country: "Japan"
})
```

`add()`와 `set()`은 추가한다는 기능은 같으나 `add()`의 경우 자동으로 문서ID를 생성하고 `set()`은 개발자가 명시적으로 문서ID를 지정해줘야한다.
실제로 .add(...)와 .doc().set(...)은 완전히 동일하므로 더 편리한 것을 사용하면 됩니다.

- 문서 업데이트

`update()`

# 데이터 가져오기

두 가지 방법으로 데이터를 검색할 수 있다.
1. 메서드를 호출하여 데이터를 가져옵니다.
2. 데이터 변경 이벤트를 수신하는 리스너를 설정합니다.


- 문서 가져오기

1. `get()`

```
var docRef = db.collection("cities").doc("SF");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
```

2. `where()` 와 같이 사용.

```
db.collection("cities").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
```
위 코드 설명 : `cities`컬렉션에 doc에 상관없이 레코드가 capital=true인것을 가져오는 것. 

```
    let ret = await db.collection("TEST").doc('MYDOC')
                  .get()
                  .then(q=>{
                    console.log(q.data());
                  });
```
위 코드 설명 : `TEST`컬렉션의 `MYDOC`문서를 검색

doc()뒤에 .where()를 붙여 검색하는 것이 가능하다.



- 중첩된 객체의 필드 업데이트
: `update()`를 호출할 때 '점 표기법'을 사용하여 참조가 가능하다.

```
let initialData = {
  name: 'Frank',
  age: 12,
  favorites: {
    food: 'Pizza',
    color: 'Blue',
    subject: 'recess'
  }
};

// ...
let updateNested = db.collection('users').doc('Frank').update({
  age: 13,
  'favorites.color': 'Red'
});

```



