<p align="center">
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbveuv8%2FbtqQps6md8g%2Fk1tANMK8CgQnspmj428590%2Fimg.png" alt="Logo" width="150" height="150">

<h2 align="center"><a href="http://gchtm.s3.ap-northeast-2.amazonaws.com/index.html#/">Home Training Manager</a></h2>
</p>

## 📑 프로젝트 소개

🏃‍♀️🏃‍♂️ ML 기반의 개인 맞춤 홈 트레이닝 관리 웹 서비스입니다.

PROJECT PERIOD: 2020.11.23 ~ 2020.12.16

## ✨ 주요 기능

### 🏋️‍♀️ 메인 홈

<img src="https://drive.google.com/uc?export=view&id=1HRzMr0MRUxCEg7fPv37ZZ-zxdzYt0yOa" alt="img1" >

💡 홈

  - [1] 사용자 선택지를 통해 로그인 화면 또는 회원가입 화면으로 이동

  - [2] 로그인을 하면 회원가입을 할 때 입력한 개인 신체 정보 제공

  - [3] 각 신체 부위별 총 운동 시간을 차트를 통해 제공
  
  - [4] 전신, 상체, 하체 중 운동 시간이 부족한 부위 추천 운동 영상 제공

  - [5] 사용자의 운동 평점 정보에 따라 ML 기반으로 다음 추천 운동 영상 제공

💡 회원관리

  - [1] 회원가입, 로그인 및 로그아웃

### 🏋️‍♂️ 부위별 운동 영상

<img src="https://drive.google.com/uc?export=view&id=1tEA_psQ2kBblKI9jzjfosfnVcgnFCe0A" alt="img2" >

💡 전신, 상체, 하체

  - [1] 전신, 상체, 하체 운동에 해당하는 유튜브 영상 제공

  - [2] 영상 시청 화면에서 시청 완료 버튼 및 영상 평점 버튼 클릭
  
  - [3] 영상 평점으로 개인 맞춤형 운동 영상을 제공
  
  - [4] 사용자가 영상 시청을 완료했을 때 변경된 부위별 운동 시간에 따라 추천 영상 변경

### 🏋️‍♀️ 로그인하지 않은 화면

<img src="https://drive.google.com/uc?export=view&id=1SrZhxNvIReh_2bWSfvBLAuSW0dNweHu2" alt="img3" >

💡 기본 화면

  - [1] 회원가입을 진행하지 않은 사용자도 영상 시청 가능

## 🗂 프로젝트 구조

```
src
 ┣ assets
 ┃ ┗ icons
 ┃ ┃ ┣ logo.png
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ pen.svg
 ┣ components
 ┃ ┣ login
 ┃ ┃ ┗ LoginWrap.js
 ┃ ┣ main
 ┃ ┃ ┣ MainLogin.js
 ┃ ┃ ┣ MainNotlogin.js
 ┃ ┃ ┗ MainWrap.js
 ┃ ┣ singup
 ┃ ┃ ┗ SignupWrap.js
 ┃ ┗ video
 ┃ ┃ ┣ Detail.js
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ Wrap.js
 ┣ pages
 ┃ ┣ Content.js
 ┃ ┣ Footer.js
 ┃ ┗ Header.js
 ┣ App.css
 ┣ App.js
 ┣ index.css
 ┗ index.js
```

## 🛠 사용 기술

| Front-End | Back-End | DataBase | Front-Server | Back-Server | Tool |
| --- | --- | --- | --- | --- | --- |
| JavaScript<br>React | Python<br>Spring Boot | MySQL | AWS S3 | AWS EC2 | Git<br>Photoshop |

```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
 "devDependencies": {
    "@babel/preset-typescript": "^7.12.7",
    "@material-ui/core": "^4.11.2",
    "@material-ui/icons": "^4.11.2",
    "bootstrap": "^4.5.3",
    "highcharts-react-official": "^3.0.0",
    "react-bootstrap": "^1.4.0",
    "react-highcharts": "^16.1.0",
    "react-router-dom": "^5.2.0",
    "styled-components": "^5.2.1"
  }
```

## 🖥 Local 실행 방법

#### [1] Yarn 설치

[Yarn 설치 바로가기](https://classic.yarnpkg.com/en/docs/install#windows-stable)

#### [2] Clone the Repo

```sh
git clone https://github.com/mnxmnz/HTM-Front.git
```

#### [3] Install Packages

```sh
yarn
```

#### [4] Run the Project

```sh
yarn start
```

## 💻 개발자

| <img src="https://avatars1.githubusercontent.com/u/48766355?s=460&u=0419d273d1a31539ee4f1151cdacb6fefd45dacc&v=4" width="105" height="105"><br>[김민지](https://github.com/mnxmnz) | <img src="https://avatars0.githubusercontent.com/u/71953870?s=460&v=4" width="105" height="105"><br>[황연수](https://github.com/hwang-yeonsu) |
| --- | --- |


## :link: URL

- [HTM 바로가기](http://gchtm.s3.ap-northeast-2.amazonaws.com/index.html#/)
