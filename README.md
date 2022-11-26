매번 새로운 프로젝트를 생성할 때마다 동일한 환경을 세팅하는 것이 번거로워 만든 폴더복사 기능입니다.<br/>
작은 단위의 스크립트부터, 나만의 작은 보일러 플레이트를 만든다는 느낌으로 다양하게 사용하시면 됩니다.<br/>
Templates에 있는 현재 폴더들은 모두 제거하시고 사용하시면 됩니다. : )<br/>
피드백은 언제나 환영입니다. issue를 이용해서 피드백 부탁드리겠습니다.

## 설정방법
1. mac OS사용자일 경우, ~/Desktop에 repository를 clone 하신 후 alias를 설정해줍니다. <br/>

2. `$ yarn add` 또는 `$ npm instll` 커맨드를 실행시켜 모듈을 다운받아주세요. <br/>

3. 우선 자주 사용하는 환경을 templates에 구성해주세요.<br/>
   현재 templates에는 자바스크립트 react 버전과 타입스크립트 react 버전이 있습니다.<br/>
   각각의 템플릿은 CRA 없는 환경으로 구성되어 있는 상태입니다.<br/>
   불필요 하시면 지우시고 새로운 환경을 셋업하시면 되겠습니다.<br/>

4. 다음 커멘드를 터미널에 입력해서 엘리어스를 추가합니다.<br/>
```
$ cd ~
$ vi .aliases
$ alias {사용자가 원하는 키워드를 작성해주세요.}="node ~/duplicate_custom_template/duplicate_template.js"
```

5. 터미널에서 `$ {위에서 입력한 키워드}` 커맨드를 입력하면 이용하실 수 있습니다.

## 사용방법

1. 설정을 모두 마친 후 프로젝트를 생성할 위치로 이동헙니다.
2. 터미널에서 `$ {위에서 입력한 키워드}` 커맨드를 실행시킵니다.
3. templates에 저장한 템플릿들이 출력되는 것을 확인하실 수 있습니다.
   이 중 사용자가 원하는 프로젝트를 선택합니다.
<img width="569" alt="image" src="https://user-images.githubusercontent.com/67903181/203673151-fb008c7e-4644-47dd-a414-dbd1f26c2c1f.png">
4. 프로젝트 이름을 path에 입력해주세요.
   (만약 입력한 경로에 특정 폴더가 없을 경우, 새롭게 생성됩니다.)
<img width="557" alt="image" src="https://user-images.githubusercontent.com/67903181/203673104-7a8a3ad2-828f-45d4-a014-274a771662c0.png">
5. 프로젝트 이름을 입력해주세요.
<img width="570" alt="image" src="https://user-images.githubusercontent.com/67903181/203673220-0402237a-a680-4f27-90ed-5e171b83f831.png">
6. 프로젝트가 생성된 것을 확인하실 수 있습니다.
<img width="568" alt="image" src="https://user-images.githubusercontent.com/67903181/203673582-bab9823d-cb54-4d52-98f6-0bcc5f1a8a64.png">



