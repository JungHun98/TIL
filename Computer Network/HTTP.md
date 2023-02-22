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