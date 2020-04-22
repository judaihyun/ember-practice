
# Firebase용 Clund Functions

- 공식 문서
1. https://firebase.google.com/docs/functions?hl=ko

2. https://cloud.google.com/functions/docs

**실제 funciton관련 수정,로그,테스트의 기능들은 firebase console페이지가 아닌 아래 링크의 google cloud페이지에 존재**

firebase와 cloud 플랫폼은 연동이 가능한데 통합하려면 blaze요금제로 변경해야함.

https://console.cloud.google.com/


===================================================

## 구현 개요
1. Clud Functions 설정 : firebase CLI설치 후 firebase 프로젝트의 cloud funciton을 초기화 합니다.

2. Function 작성 : JS 또는 배포시 변환 컴파일할 TS코드를 작성

3. Funciton Test : 로컬 에뮬레이터를 사용하여 함수를 테스트

4. Deploy and Monitoring : Firebase CLI를 사용하여 함수를 배포

## 간단 설명

- google cloud에서 웹상(웹편집기 제공)에서 nodejs기반 웹 편집기를 제공하므로 이것을 이용
로컬 vscode등의 IDE에서 gcloud등의 gcloud function cli을 이용하여 deploy하는 방법이 있음.

# 시작하기

아래 두개의 함수는 build이나 제공함수가 아니라 설명을 위한 편의로 만든 사용자 정의 함수.

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

# 로컬에서 함수 실행

https://firebase.google.com/docs/functions/local-emulator?hl=ko#top_of_page

Firebase CLI에는 다음 함수 유형을 에뮬레이션할 수 있다.
1. HTTPS 함수
2. 호출 가능 함수
3. Cloud Firestore 함수

함수를 배포하기 전에 로컬에서 테스트 실행이 가능..


1. firebase CLI를 설치.

2. functions내에 다른 firebase API와 상호작용하게 하기 위해서는 관리자 인증 정보를 설정해야함.

- 이를 위해서는 FIREbase Admin SDK가 필요하며, 이를 위해서는 java설치가 필요하다. ( AdminSdk -  https://firebase.google.com/docs/admin/setup?hl=ko )


2-1. 
- firebase console(해당프로젝트) settings > 서비스 계정 
- 새 비공개 키 생성 -> 다운로드
-  Admin SDK 구성 스니펫(새 비공개 설정 버튼 위)의 소스 코드를 현재 테스트 하려는 function에서 initializeApp으로써 사용해야함.

2-2. 위의 링크 내용과 같이. 해당 키를 로컬에 다운로드 받고 해당 파일의 위치를 vscode내 환경변수 설정해야함.
