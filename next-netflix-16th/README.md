### 실행 방법

`npm run dev`

### 배포 링크

https://next-netflix-16th-k7yg.vercel.app/

### 개발 후기

https://55wldms.tistory.com/28

## 5주차 PR

처음 협업 과제였는데 확실히 협업으로 하니까 혼자 과제를 할 때보다는 막막함이 덜 했던 것 같아요!
next.js 를 처음 접해봐서 초기 build를 이해하는 것부터 data fetching 까지 시간이 조금 걸렸네요 ㅠㅠ .. . .
더 깔끔하고 효율적인 코드를 위해 고민을 많이 했는데, 역시나 너무 어렵네요
지금 작성해놓은 코드를 어떻게하면 더 깔끔하게.. 작성할 수 있을지 계속해서 고민을 해보고 고쳐나가야할 것 같습니다!!

### Team Member

안채연, 오지은

### 구현한 페이지

1. 렌더링 페이지
2. 메인 페이지
3. 상세 페이지
4. 검색 페이지 (영화 제목으로 검색)

### 수정해야할 부분

navigator와 main section 구분 (main section 화면 잘림 문제 새로운 div 추가가 아닌 방법..생각하기)
상세페이지 이미지 화질 깨짐 문제
더 효율적인 api 관리 방법? / 코드 구조 고민하기
data fetch .. next 13 버전으로 할 수 있을까
Key Questions

1. Server Side Rendering과 Client Side Rendering의 차이
   Server Side Rendering
   SSR은 클라이언트가 웹 페이지를 렌더링하는 것이 아니라 서버에서 웹 페이지를 생성해서 클라이언트는 이를 가져와서 띄우는 방법이다.
   서버에서 웹 페이지 정보를 모두 가지고 있기 떄문에 서버가 무거워지고 서버 비용이 증가한다는 단점이 있으나
   서버가 가지고 있는 웹 페이지 정보를 검색엔진이 인식할 수 있기 때문에 SEO를 통해 네이버, 구글 등에 웹 페이지가 쉽게 노출될 수 있다는 장점이 있다.

Client Side Rendering
서버는 클라이언트에게 HTML, JS 정보만 보내주고 클라이언트가 이를 받아 브라우저에서 직접 페이지를 렌더링하는 방법이다.
서버가 가벼워지고 서버의 성능에 신경쓰지 않고 페이지를 개발할 수 있다는 장점이 있으나
클라이언트가 직접 페이지를 렌더링하기 때문에 페이지의 초기 로딩 시간이 길고 SEO가 잘 되지 않는다는 단점이 있다.

2. SEO란
   SEO란 검색 엔진 최적화를
   이 SEO를 위해 개발자는 구글, 네이버 등에 자신의 페이지가 상위에 노출되기 위해
   태그, 링크 구조를 개선하여 검색 엔진이 자신의 페이지를 잘 검색할 수 있도록 해야한다.

### SEO를 위한 작업들

<title> 태그 안에 너무 긴 텍스트를 넣지 않고 모든 웹페이지의 title에 단일한 제목을 사용하지 않아야 한다.
태그 안의 요소는 자신의 웹페이지가 노출되었을 때 제목 바로 밑에 뜨는 한 두줄 정도의 요약 문장을 의미한다.
가독성을 고려해서 작성하자.
Open Graph 태그 안의 요소는 웹 페이지가 공유될 때 어떻게 노출될지를 알려준다.
이 요소를 잘 정의해놓아야 트래픽이 증가하고 이런 트래픽 증가는 검색 상위 노출을 위한 평가에 영향을 준다.
3. 전반적인 협업 과정
이번 협업에서는 깃허브에서 organization을 생성한 후 레포 안에서 각자 브랜치를 생성해 각자 맡은 부분을 개발한 후 주기적으로 머지하는 방식으로 진행하였다.
주기적으로 온라인 회의를 통해 진행 방향 및 상황을 공유했으며, data fetching 같이 혼자서 해결하기 어렵거나 이해하기 힘든 부분은 함께 자료를 찾아보고 해결하였다.

## 6주차 PR

이번엔 저번주에 이어!!!

1. 상세페이지 이동시 동적라우팅 사용
2. 실시간 검색 기능 구현

를 추가했습니다!!!

실시간 검색을 useEffect를 이용해서 실시간으로 fetch를 함으로써 구현했는데
이게 맞는지는.. 모르겠습니다 ㅎ 많은 조언 부탁드립니다🙇‍♀️🙇‍♀️🙇‍♀️

## Team Member

안채연, 오지은

## Key Questions

### 1. Static Routing / Dynamic Routing

#### (1) Static Routing (정적 라우팅)

Router(라우터)에게 필요한 정보들을 수동으로 사전 입력해야 한다.
고정된 페이지로 라우팅되기 때문에 누가 언제 접속하더라도 같은 페이지로 라우팅된다.

#### (2) Dynamic Routing (동적 라우팅)

Routing Table(라우팅 테이블)에서 현재 상태에 따라 경로를 자동 조정하는 것이다.
가변적인 페이지로 라우팅되기 때문에 실제 소스코드는 한 페이지지만 글 번호나 글의 id에 따라서 주소가 변경된다.
Next.js에서 동적 라우팅 시, 대괄호 안에 들어있는 문구는 변수의 기능을 한다.
라우터 객체를 이용해 이 변수의 값을 지정해줄 수 있으며, 이 변수는 문서 내에서 자유롭게 활용이 가능하다.

### 2. 성능최적화를 위해 사용한 방법

1. 내부 스타일시트 사용 : styled-component 를 이용한 내부 스타일링
2. 중복 코드 제거 : 중복되는 값은 props를 이용 & 외부 컴포넌트로 분리하여 재사용
3. 필요한 함수만 가져오기 : 실행하지 않는 함수 정리
4. ssr 렌더링 : 사용자가 js이 렌더링 하기 전 볼 수 있게함
