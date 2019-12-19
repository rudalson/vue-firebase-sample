# test

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

## vuetify
```bash
$ vue add vuetify
$ vue add vuetify@0.5   # vuetify 1.x 를 설치하기 위해
```


## Visual Source Code Extensinos
아래의 플러그인을 에디터에 추가해준다. 
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
1. `프로젝트 설정` - `</>` - 액 닉네임 설정
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


