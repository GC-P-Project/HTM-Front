<p align="center">
  <a href="https://github.com/mnxmnz/HTM-Front">
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbveuv8%2FbtqQps6md8g%2Fk1tANMK8CgQnspmj428590%2Fimg.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center"><a href="http://gchtm.s3.ap-northeast-2.amazonaws.com/index.html#/">Home Training Manager</a>
</h2>
</p>

## 📑 프로젝트 소개

🏃‍♀️🏃‍♂️ ML 기반의 개인 맞춤 홈 트레이닝 관리 웹 서비스입니다.

## ✨ 주요 기능

💡 홈

  - [1] 사용자 선택지를 통해 로그인 화면 또는 회원가입 화면으로 이동

  - [2] 로그인을 하면 회원가입을 할 때 입력한 개인 신체 정보 제공

  - [3] 각 신체 부위별 총 운동 시간 차트를 통해 제공
  
  - [4] 전신, 상체, 하체 중 운동 시간이 부족한 부위 추천 운동 영상 제공

  - [5] 사용자의 운동 평점 정보에 따라 ML 기반으로 다음 추천 운동 영상 제공

💡 전신

  - [1] 전신 운동에 해당하는 유튜브 영상 제공

  - [2] 영상 시청 화면에서 시청 완료 버튼 및 영상 평점 버튼 클릭
  
  - [2-1] 해당 정보는 개인 맞춤형 운동 영상을 제공할 때 사용

💡 상체

  - [1] 상체 운동에 해당하는 유튜브 영상 제공
  
  - [2] 영상 시청 화면에서 시청 완료 버튼 및 영상 평점 버튼 클릭
  
  - [2-1] 해당 정보는 개인 맞춤형 운동 영상을 제공할 때 사용

💡 하체

  - [1] 하체 운동에 해당하는 유튜브 영상 제공

  - [2] 영상 시청 화면에서 시청 완료 버튼 및 영상 평점 버튼 클릭
  
  - [2-1] 해당 정보는 개인 맞춤형 운동 영상을 제공할 때 사용

💡 회원관리

  - [1] 회원가입, 로그인 및 로그아웃

## 🛠 사용 기술

| Front-End | Back-End | DataBase | Front-Server | Back-Server | Tool |
| --- | --- | --- | --- | --- | --- |
| JavaScript<br>React | Python<br>Spring Boot | MySQL | AWS S3 | AWS EC2 | Git<br>Photoshop |

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

## 🎞 실행 화면

#### [1] 사용자 로그인 전 메인 화면 및 로그인 이후 메인 화면

#### [1-1] 로그인 한 사용자에게 개인 맞춤 정보 제공

<img src="https://drive.google.com/uc?export=view&id=1HRzMr0MRUxCEg7fPv37ZZ-zxdzYt0yOa" alt="usertest1" >

#### [2] 로그인 한 사용자에게 추천 운동 영상 제공

#### [2-1] 사용자가 영상 시청을 완료했을 때 변경된 부위별 운동 시간에 따라 추천 영상 변경

#### [2-2] 메인 페이지 하단 추천 영상은 사용자의 운동 평점 정보에 따라 ML 기반으로 다음 추천 운동 영상 제공

<img src="https://drive.google.com/uc?export=view&id=1tEA_psQ2kBblKI9jzjfosfnVcgnFCe0A" alt="usertest2" >

#### [3] 운동 부위 별 영상 시청 페이지

#### [3-1] 회원가입을 진행하지 않은 사용자도 영상 시청 가능

<img src="https://drive.google.com/uc?export=view&id=1SrZhxNvIReh_2bWSfvBLAuSW0dNweHu2" alt="usertest2" >

## :link: URL

- [HTM 바로가기](http://gchtm.s3.ap-northeast-2.amazonaws.com/index.html#/)
