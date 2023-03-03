Port - 같은 IP내에서 프로세스 구분(아파트에서 몇 호인지 구분하는 것과 비슷하다.)<br>
- 0 ~ 65535 할당 가능
- URI(Uniform Resource Identifier)
  - URL과 URN의 상위개념
  - Uniform: 리소스 식별하는 통일된 방식
  - Resource: 자원, URI로 식별할 수 있는 모든 것
  - Identifier: 다른 항목과 구분하는데 필요한 정보
- URL(Uniform Resource Locator)
  - resouce의 위치 지정
  - 수정 가능
- URN(Uniform Resource Name)
  - resource의 이름
  - 수정 불가

- URL 분석
  - schema://[userinfo@]host[:port][/path][?query][#fragment]
  - `https://www.google.com/search?q=hello&hl=ko`
  - `https`: 프로토콜(어떤 방식으로 자원에 접근할 것인가?)
    - URL에 포트번호 생략 가능
  - `www.google.com`: 호스트명(도메인, IP)
  - `/search`: 리소스 경로(path), 계층적 구조(디렉토리 ...)
  - `?q=hello&hl=ko`: 쿼리(query)
    - key=value 형태
    - `?`로 시작, `&`을 붙이면 추가 가능 `?keyA=valueA&keyB=valueB`
    - query parameter, query string으로 불림, 문자열 형태
  - fragment
    - html 내부 북마크 등에 사용함
    - 서버에 전송하는 정보 아님

- 웹 브라우저 요청 흐름
  - 도메인 입력
  - DNS 조회하여 IP와 PORT 검색
  - 웹 브라우저에서 HTTP 요청 메시지 생성
  - 웹 브라우저에서 HTTP 메시지 전송
    - 소켓 라이브러리를 통해 전달
      - TCP/IP연결
      - 데이터 전달
    - TCP/IP 패킷 생성, HTTP메시지 포함
  - 서버에 패킷 도착
  - 서버가 HTTP응답 메시지 생성, html데이터 포함
  - 서버가 HTTP응답 메시지 전달


# 1. HTTP 기본
## 모든 것이 HTTP
- **H**yper**T**ext **T**ransfer **P**rotocol
  - HTML, TEXT, 이미지, 음성, 영상, 파일, JSON, XML ...
  - 거의 모든 형태의 데이터 전송 가능
  - 서버간에 데이터를 주고 받을 때도 대부분 HTTP 사용

- 기반 프로토콜
  - **TCP**: HTTP/1.1, HTTP/2
  - **UDP**: HTTP/3
  - 현재 HTTP/1.1 주로 사용

- HTTP 특징
  - 클라이언트 서버 구조
  - 무상태 프로토콜, 비연결성
  - HTTP 메시지를 이용해 통신
  - 단순하고, 확장이 가능

## 클라이언트 서버 구조
- Request-Response구조
- 클라이언트는 서버에 요청을 보내고, 응답을 대기
- 서버가 요청에 대한 결과를 만들어서 응답
- 클라이언트와 서버를 개념적으로 분리하여 담당하는 기능을 나눠야 한다.
  - 클라이언트는 UI/UX에 집중한다.
  - 서버에는 데이터와 트래픽을 관리하는 복잡한 알고리즘을 담고있면 된다.
  - 클라이언트와 서버는 독립적으로 발전 할 수 있다.

## 무상태 프로토콜(Stateless)
- 상태유지(Stateful)
  - 서버가 클라이언트의 이전 상태를 보존하는 것
  - 항상 같은 서버가 유지되어야 한다.
  - 상태를 유지하던 서버가 바뀌면 문맥이 사라짐, 오류 발생

- 무상태(Stateless)
  - 서버가 클라이언트의 상태를 보존하지 않는다.
  - 필요한 데이터를 그때 그때 모두 서버에 전송
  - 무상태는 응답 서버를 쉽게 바꿀 수 있다. (= 같은 기능을 하는 무한한 서버 증설 가능)
    - 트래픽이 증가하면 여러개의 서버를 추가로 만들어 사용 할 수 있다.
  
- 한계
  - 상태를 유지해야 하는 경우(ex. 로그인)에는 사용할 수 없다.
  - 일반적으로 브라우저 쿠키와 서버 세션등을 사용해서 상태 유지
  - 전송하는 데이터의 크기가 크다.(상태유지를 하지 않기 때문에)

## 비연결성(connectionless)
- 연결을 유지하는 모델(ex. TCP/IP)
   - 현재 사용중이 아닌 클라이언트도 서버는 계속 연결된 상태로 유지해야 한다.
      - 자원 낭비가 생길 수 있음

- 연결을 유지하지 않는 모델
  - 클라이언트가 요청한 데이터를 서버로부터 응답 받았다면 연결을 해제한다.
  - 요청을 할 때만 서버와 연결한다.
    - 최소한의 자원으로 서버를 유지할 수 있다.

- 비연결성
  - HTTP는 기본이 연결을 유지하지 않는 모델
  - 일반적으로 초 단위 이하의 빠른 속도로 응답
  - 많은 사람이 서비스를 사용해도 동시에 처리하는 요청은 매우 작다.
  - 서버 자원을 매우 효율적으로 사용할 수 있다. 
  - 단점
    - TCP/IP 연결을 새로 맺어야 함 - 3 way hendshake 시간 추가
    - 웹 브라우저로 사이트를 요청하면 HTML뿐만 아니라 JS, CSS, 이미지 등 수많은 자원을 따로 다운로드
    - 현재는 HTTP 지속 연결로 문제 해결
      - 필요한 자원을 모두 받을 때 까지는 HTTP연결 유지
      - 모두 받으면 연결 종료

## HTTP 메시지
- HTTP 메시지 구조

  ||
  |--------|
  |start-line 시작라인|
  |header 헤더|
  |empty line 공백라인(CRLF)|
  |message body|

- HTTP 요청 메시지
  ```
  GET /search?q=hello&hl=ko HTTP/1.1
  Host: www.google.com

  ```
  - 요청 메시지도 본문 body를 가질 수 있다.
  - start-line: `request-line / status-line`
  - `request-line` = method request-target HTTP-version
    - method: 서버가 수행해야 할 동작 지정
      - GET: 리소스 조회
      - POST: 요청 내역 처리
    - request-target: 요청 대상
      - 절대 경로
    - HTTP-version
  
  <br>
  <br>
- HTTP 응답 메시지
  ```
  HTTP/1.1 200 OK
  Content-Type: text/html;charset=UTF-8
  Content-Length: 3423

  <html>
    <body>...</body>
  </html>
  ```
  - start-line = `request-line / status-line`
  - `status-line`= HTTP-version status-code reason-phrase
    - status-code: HTTP 상태 코드
      - 200: 성공
      - 400: 클라이언트 요청 오류
      - 500: 서버 내부 오류

<br>
<br>

- `header-feild` = field-name":" field-value
    - field-name은 대소문자 구문 없음
    - HTTP 전송에 필요한 모든 부가정보를 담고 있음
      - 메시지 바디의 내용, 바디의 크기, 압축, 인증, 요청 클라이언트 정보, 서버 정보 등등
- HTTP 메시지 바디
  - 실제 전송할 데이터
  - HTML, 이미지, 영상, JSON 등등 byte로 표현 가능한 모든 데이터

2. HTTP 메서드
## HTTP API 설계
- API URI 설계
  - 가장 중요한 것은 리소스의 식별
  - 회원 목록 조회, 등록, 수정, 삭제의 URI를 각각 따로 만들면 리소스를 식별하기 어렵다.
  - 회원을 등록하고 수정하고 조회하는 것을 모두 리소스에서 배제
    - `/members` : 리소스 URI
    - `/members/{id}` 
  - 리소스와 행위를 분리
    - URI는 리소스만 식별
    - 리소스와 해당 리소스를 대상으로 하는 행위를 분리
      - 리소스: 회원
      - 행위: 조회, 등록, 삭제, 변경
    
    - **행위를 구분하는 방법은?**

## HTTP 메서드
- 조요 메서드
  - GET: 리소스 조회
  - POST: 요청 데이터 처리, 주로 등록에 사용
  - PUT: 리소스를 대체, 해당 리소스가 없으면 생성
  - PATCH: 리소스 부분 변경
  - DELETE: 리소스 삭제

### GET
- 리소스 조회
- 서버에 전달하고 싶은 데이터는 query를 통해 전달
- 메시지 바디를 사용해서 데이터를 전달 할 수 있지만, 지원하지 않는 곳이 많아 권장하지 않음
```
GET /members/100 HTTP/1.1
HOST: localhost:8080

----------------------------------

/members/100

{
  "username": "young",
  "age": 20
}
```
- 100번 회원의 정보를 조회 요청 데이터

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 34

{
  "username": "young",
  "age": 20
}
```
- 응답 데이터

### POST
- 요청 데이터 처리
- 메시지 바디를 통해 서버로 요청 데이터 전달
- 서버는 요청 데이터를 처리
  - 메시지 바디를 통해 들어온 데이터를 처리하는 모든 기능을 수행한다.
- 주로 전달된 데이터로 신규 리소스 등록, 프로세스 처리에 사용

```
POST /members HTTP/1.1
Content-Type: application/json

{
  "username": "young",
  "age": 20
}
```
- POST로 리소스에 데이터를 전달하면 서버는 **약속된 행위**를 수행함.(ex 등록)

```
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 34
Location: /members/100

{
  "username": "young",
  "age": 20
}
```
- 응답 데이터

- POST는 요청 데이터를 어떻게 처리한다는 뜻일까?
  - POST메서드는 대상 리소스가 리소스의 고유한 의미 체계에 따라 요청에 포함된 표현을 처리하도록 요청한다.
  - HTML 데이터 블록을 데이터 처리 프로세스에 제공
  - 서버가 아직 실별하지 않은 새 리소스 생성
  - 기존 자원에 데이터 추가

- POTS 정리
  - 새 리소스 생성(등록)
  - 단순히 데이터를 생성하거나, 변경하는 것을 넘어서 프로세스를 처리해야 하는 경우
    - ex) 상품 주문 결제완료 -> 배달시작 -> 배달완료 처럼 단순히 값 변경을 넘어 프로세스의 상태가 변경되는 경우
    - 리소스와 행위를 분리하는 URI를 설계하기 어려울 때 POST 사용
  - 다른 메서드로 처리하기 애매한 경우
    - ex) JSON으로 조회 데이터를 넘겨야 하는데, GET 메서드를 사용하기 어려운 경우

### PUT
- 리소스 대체
  - 리소스가 있으면 대체, 없으면 생성
  - 데이터를 완전히 대체한다.(덮어쓰기)
- **클라이언트가 리소스 식별**
  - 클라이언트가 리소스의 정확한 위치를 알고 URI 지정함(POST와의 차이)

```
PUT /members/100 HTTP/1.1
Content-Type: application/json

{
  "username": "old",
  "age": 50
}
```

### PATCH
- 리소스 부분 변경(PUT 이후에 만들어진 메소드)

```
PATCH /members/100 HTTP/1.1
Content-Type: application/json

{
  "age": 50
}
```
- 리소스의 해당하는 부분만 변경

### DELETE
- 리소스 삭제
```
DELETE /members/100 HTTP/1.1
HOST: localhost:808

```

## HTTP 메서드의 속성
### 안전(Safe Methods)
- 호출해도 리소스를 변경하지 않는다.
  - GET
  - 안전은 해당 리소스만 고려함.
### 멱등(Idempotent)
- 한 번 호출하든 여러번 호출하든 결과가 똑같다.
  - GET: 조회 회수와 상관없이 같은 결과가 조회
  - PUT: 결과를 대체, 따라서 같은 요청을 여러번해도 최종 결과는 같다.(같은 내용 덮어쓰기)
  - DELETE: 결과를 삭제한다. 같은 요청을 여러번 해도 삭제된 결과는 같음
  - **POST**: 멱등이 아니다!!!! 같은 행위가 중복해서 발생
- 활용
  - 자동 복구 메커니즘
  - 멱등은 서버가 응답을 제대로 못주었을 때, 클라이언트가 같은 요청을 다시해도 되는가에 대한 판단 근거가 된다.

- 재요청 중간에 다른 곳에서 리소스를 변경한다면??
  - GET -> PUT -> GET
  - 멱등은 외부 요인으로 중간에 리소스가 변경되는 것 까지는 고려하지 않는다.
    - 동일한 사용자가 같은 요청을 했을 때 멱등한가를 판단한다.
### 캐시가능
- 응답 결과 리소스를 캐시해서 사용해도 되는가?
  - 리소스를 웹 캐시에 저장해 두는 것
- GET, HEAD, POST, PATCH 캐시가능
- 실제로는 GET, HEAD 정도만 캐시로 사용
  - GET은 URL만 캐시로 고려함
  - POST는 본문 내용까지 캐시 키로 고려해야 해서 구현이 잘 안되어 있다.

# HTTP 메서드 활용
## 클라이언트에서 서버로 데이터 전송
- 데이터 전달 방식은 크게 2가지
  - 쿼리 파라미터를 통한 데이터 전송
    - GET
    - 주로 정렬 필터(검색어)
  - 메시지 바디를 통한 데이터 전송
    - POST, PUT, PATCH
    - 회원 가입, 상품 주문, 리소스 등록, 리소스 변경

### 정적데이터 조회
- 쿼리 파라미터 미사용
- 이미지, 정적 텍스트 문서
- 조회는 GET 사용
- 정적 데이터는 일반적으로 쿼리 파라미터 없이 리소스 경로로 단순하게 조회가능

### 동적 데이터 조회
- 쿼리 파라미터 사용(URL)
- 서버는 쿼리 파라미터를 기반으로 정렬 필터해서 결과를 동적으로 생성
- 주로 검색, 게시판 목록에서 정렬 필터
- 조회 조건을 줄여주는 필터, 조회 결과를 정렬하는 정렬 조건에 주로 사용
- 조회는 GET 사용
- GET은 쿼리 파라미터를 사용해 서버에 데이터 전달

### HTML Form 데이터 전송
- POST 전송 - 저장
```html
<form action="/save" method="post">
  <!-- code... -->
</form>
```
- 웹 브라우저가 생성한 요청 HTTP 메시지(서버로 전달)
```
POST /save HTTP/1.1
Host: localhost:8080
Content-Type: application/x-www-form-urlencoded

username=kim&age=20
```
- GET 전송 - 저장
```html
<form action="/members" method="get">
  <!-- code... -->
</form>
```
- 웹 브라우저가 생성한 요청 HTTP 메시지(서버로 전달)
- 전송할 데이터가 url에 쿼리 파라미터 형식으로 들어감
```
GET /members?username=kim&age=20 HTTP/1.1
Host: localhost:8080

```
- 하지만 GET은 리소스를 변경할 때 사용하면 안된다.

- multipart/form-data
  - 파일, 이미지 전송
  - 다른 종류의 여러 파일과 폼의 내용 함께 전송 가능
```html
<form action="/save" method="post" enctype="multipart/form-data">
  <!-- code... -->
</form>
```
```
POST /save HTTP/1.1
Host: localhost:8080
Content-Type: application/x-www-form-urlencoded

...
```
- HTML Form 전송은 `GET`, `POST`만 지원

### HTTP API 데이터 전송
```
POST /members HTTP/1.1
Content-Type: application/json

{
  "username": "young"
  "age": 20
}
```
- 서버 to 서버: 백엔드 시스템 통신
- 앱 클라이언트
- 웹 클라이언트
  - HTML에서 Form 전송 대신 자바스크립트를 통한 통신에 사용(AJAX)
  - React, Vue.js 같은 웹 클라이언트와 API 통신
- POST, PUT, PATCH: 메시지 바디를 통해 데이터 전송
- GET: 조회, 쿼리 파라미터로 데이터 전달
- Content-Type: application/json을 주로 사용
  - TEXT, XML, JSON 등등

## HTTP API 설계 예시
### 컬렉션 (POST 기반 등록)
- 회원 목록 /members : GET
- 회원 등록 /members : POST
- 회원 조회 /members/{id} : GET
- 회원 수정 /members/{id} : PATCH, PUT, POST
- 회원 삭제 /members/{id} : DELETE

- 클라이언트는 등록될 리소스의 URI를 모른다.
  - 회원 등록 /members: POST, 새로 등록된 URI를 서버가 만들어줌
  - POST /members
- 서버가 새로 등록된 리소스 URI를 생성해준다.
  - Location: /members/100
- 컬렉션(Collection)
  - 서버가 관리하는 리소스 디렉토리
  - 서버가 리소스의 URI를 생성하고 관리
  - 여기서 컬렉션은 **/members**

### 스토어 (PUT 기반 등록)
* 파일 관리 시스템
- 파일 목록 /files: GET
- 파일 조회 /files/{filename}: GET
- 파일 등록 /files/{filename}: PUT
- 파일 삭제 /files/{filename}: DELETE
- 파일 대량 등록 /files: POST

- 클라이언트가 리소스 URI를 알고 있어야 한다.
  - 컬렉션(POST)와의 차이점
  - 파일 등록 할 때 파일의 이름을 넣어주어야 한다.
  - PUT /files/star.jpg
- 클라이언트가 직접 리소스의 URI를 지정한다.
- 스토어(store)
  - 클라이언트가 관리하는 리소스 저장소
  - 클라이언트가 리소스의 URI를 알고 관리
  - 여기서 스토어는 /files

### HTML FORM 사용
- GET, POST만 지원
- AJAX같은 기술을 사용해서 제약 해결 가능
- 순수 HTML, HTML FORM을 사용

- 회원 목록 /members: GET
- 회원 등록 폼 /members/new: GET
- 회원 등록 /members/new, /members: POST
- 회원 조회 /members/{id}: GET
- 회원 수정 폼 /members/{id}/edit: GET
- 회원 수정 /members/{id}/edit, /members/{id}: POST
- 회원 삭제 /members/{id}/delete: POST


- FORM은 DELTE를 사용못함
  - 컨트롤 URI사용하여 해결 
    - 동사로 만든다
    - /new, /edit, /delete
  - HTTP 메서드로 해결하기 애매한 경우 사용(HTTP API 포함)
