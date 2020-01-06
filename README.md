# vue-firebase-sample

## Prjoect 생성
```bash
$ vue create vue-firebase-sample
```
### Manually select features
- Babel
- Router
- Vuex
- Linter

### 그외
- Standard
- Use Yarn

## vuetify 설치
```bash
$ vue add vuetify
$ vue add vuetify@0.5   # vuetify 1.x 를 설치하기 위해
```

## firebase tools 설치
```bash
$ yarn add firebase-tools
```


## Visual Source Code Extensinos
VSCode룰 사용한다면 아래의 플러그인을 에디터에 추가해준다. 
- Task Explorer
- vuetify vscode
- eslint
    - Auto Fix On Save
    - onFoucsSave
    - settings.json에서 아래를 추가
    ```
    "eslint.validate" : [
        {"language": "vue", "autoFix": true},
        {"language": "javascript", "autoFix": true},
        {"language": "html", "autoFix": true},
    ]
    ```
- MDI(Material Design Icon)

## 16강 firestore 설정하기
1. `프로젝트 설정` - `</>` - 앱 닉네임 설정
```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.6.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```
2. Database 생성
테스트 모드로 우선 생성

3. 프로젝트 포함
[Firebase SDK 추가 및 Firebase 초기화](https://firebase.google.com/docs/web/setup?authuser=0#add-sdks-initialize)의 모듈 Bundler사용 탭의 내용을 참조하여 firebase package를 설치 및 설정을 해준다.
```bash
$ yarn add firebase
```

**firebaseConfig.js**
```js
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
```

## 19강 firebase functions
```
$ firebase init functions
```
그리고 `package.json`에서 node 버전을 올려준다.
```json
    "engines": {
    "node": "10"
    },
```

이후 yarn으로 설치해준다.
```
$ yarn
```

## 21강 axios 사용
```
$ yarn add axios
```

## 22강 error 처리
error 처리시 console은 개발자에게만 활용이 되므로 toast를 사용한다. toast를 다 작성하는 것보다 패키지를 사용할 예정이다. [vue-toasted](https://www.npmjs.com/package/vue-toasted) 추천
```
$ yarn add vue-toasted
```

## 30강 loading 상태
```
$ yarn add vue-progressbar
```

## 36강 firebase functions 환경변수 사용하기
```
$ firebase functions:config:set admin.email=이메일주소
```

이렇게 admin email을 등록한 후에 아래의 명령어로 확인가능하다
```
$ firebase functions:config:get
```

그리고 이것을 `.runtimeconfig.json` 파일에 저장시켜둬야 한다.

```
$ firebase functions:config:get > .runtimeconfig.json
```

그리고 아래의 명령어로 항상 udpate 시켜놓는 것이 좋다.
```
$ npm i -g firebase-tools
```

## 44강 Service key
`firebase`의 `프로젝트 설정`-`서비스 계정` 탭에서 `Google Cloud Platform`의 서비스 계정으로 들어간다. 그래서 해당 프로젝트에서 키만들기를 선택한 후 `json 키`를 만들어서 down 받은 후 functions 디렉토리 밑에 이동시켜준다.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### firebase deploy
54강 내용 숙지 후 Firebase에 deploy
```shell script
$ yarn firebase:deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


