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


