
# Firebase용 Clund Functions

- 공식 문서
1. https://firebase.google.com/docs/functions?hl=ko

2. https://cloud.google.com/functions/docs

**실제 funciton 관련 수정,로그,테스트의 기능들은**
**firebase console페이지가 아닌 아래 링크의 google cloud페이지에 존재**

firebase와 cloud 플랫폼은 연동이 가능한데 통합하려면 blaze요금제로 변경해야함.

https://console.cloud.google.com/


===================================================

## 구현 개요
1. Clud Functions 설정 : firebase CLI설치 후 firebase 프로젝트의 cloud funciton을 초기화 합니다.

2. Function 작성 : JS 또는 배포시 변환 컴파일할 TS코드를 작성
(local 에뮬레이터를 이용, 로컬 프로젝트에서 js작성 후 deploy)

3. Funciton Test : 로컬 에뮬레이터를 사용하여 함수를 테스트

4. Deploy and Monitoring : Firebase CLI를 사용하여 함수를 배포

## 간단 설명

- google cloud(통합필요)에서 웹상(웹편집기 제공)에서 nodejs기반 웹 편집기를 제공하므로 이것을 이용, 하거나 로컬 vscode등의 IDE에서 gcloud등의 gcloud function cli을 이용하여 deploy하는 방법이 있음.

- gcloud를 이용하지 않고 직접 로컬에서 test 후 deploy 하는 방법.




# 시작하기

아래 두개의 함수는 built-in 이 아니라 설명을 위한 편의로 만든 사용자 정의 함수.

- `addMessage()` : HTTP 엔드포인트, 요청이 들어오면 `onRequest()`콜백에 전달된다.
export.[함수명] = functions.https.onRequest(async (req, res) => { ~~ 
식으로 뒤에 https.~를 할당하면 사용자가 이름을 만들수있다.

- `makeUppercase()` : 실시간 데이터베이스 쓰기에서 트리거되고 텍스트를 대문자로 변환합니다.


1. make firebase project

2. Node.js 및 Firebase CLI 설정
- `npm install -g firebase-tools` 

3. Cloud Function Firebase SDK 초기화
- `firebase login`
- `firebase init functions`

4. 필수 모듈 가져오기 및 앱 초기화
```
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();
```

5. `addMessage()`함수 추가

```
exports.addMessage = functions.https.onRequest(async (req, res) => {
// [END addMessageTrigger]
  // Grab the text parameter.
  const original = req.query.text;
  // [START adminSdkAdd]
  // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('messages').add({original: original});
  // Send back a message that we've succesfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
  // [END adminSdkAdd]
});;
```

`addMessage()`함수는 HTTP 엔드포인트입니다. 이 엔드포인트에 요청이 오면 `onRequest()` 콜백에 작동.

6. 배포 및 실행

- `firebase deploy --only functions`



=================================================

# 로컬에서 함수 실행(local emulator)

https://firebase.google.com/docs/functions/local-emulator?hl=ko#top_of_page

Firebase CLI에는 다음 함수 유형을 에뮬레이션할 수 있다.
1. HTTPS 함수
2. 호출 가능 함수
3. Cloud Firestore 함수

함수를 배포하기 전에 로컬에서 테스트 실행이 가능..


1. firebase CLI를 설치.

2. functions내에 다른 firebase API와 상호작용하게 하기 위해서는 관리자 인증 정보를 설정해야함.

- 이를 위해서는 Firebase Admin SDK가 필요하며, 이를 위해서는 java설치가 필요하다. ( AdminSdk -  https://firebase.google.com/docs/admin/setup?hl=ko )


2-1. 
- firebase console(해당프로젝트) settings > 서비스 계정 
- 새 비공개 키 생성 -> 다운로드
-  Admin SDK 구성 스니펫(새 비공개 설정 버튼 위)의 소스 코드를 현재 테스트 하려는 function에서 initializeApp으로써 사용해야함.

2-2. 위의 링크 내용과 같이. 해당 키를 로컬에 다운로드 받고 해당 파일의 위치를 vscode내 환경변수 설정해야함.


## 에뮬레이터 도구 모음 실행

- 실행
```
firebase emulators:start
```
를 실행하면 `firebase init`를 사용하여 로컬 프로젝트에서 초기화한 functions용 에뮬레이터가 실행됩니다. 특정 시뮬레이터를 시작하려면 `--only`플래그를 사용.

```
firebase emulators:start --only functions
```


- 실행화면
해당 함수명과 해당 url이 표시되고.
localhost:5001로 local emulator가 구동됨을 확인.

```
i  emulators: Starting emulators: functions
!  emulators: It seems that you are running multiple instances of the emulator suite for
project my-firest-66bb6. This may result in unexpected behavior.
+  hub: emulator hub started at http://localhost:4400
!  Your requested "node" version "8" doesn't match your global version "12"
+  functions: functions emulator started at http://localhost:5001
i  functions: Watching "C:\Users\User\Documents\ember-practice\functions" for Cloud Functions...
+  functions[addMessage]: http function initialized (http://localhost:5001/my-firest-66bb6/us-central1/addMessage).
+  functions[selectAll]: http function initialized (http://localhost:5001/my-firest-66bb6/us-central1/selectAll).
+  emulators: All emulators started, it is now safe to connect.
+  functions[hellow]: http function initialized (http://localhost:5001/my-firest-66bb6/us-central1/hellow).
i  functions: Beginning execution of "hellow"
i  functions: Finished "hellow" in ~1s
```

# test

실행: npm test 

해당 설정등을 해야 위의 커맨드가 수행됨.

