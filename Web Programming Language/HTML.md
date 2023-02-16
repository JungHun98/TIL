# HTML(Hyper Text Markup Language)

- HTML은 웹 페이지 마크업 언어이다. 웹 페이지의 기본적인 골격을 Tag를 사용해 구현할 수 있다.
- 기본 문법. Tag의 이름을 <>로 감싼다. <br>
  <strong>`<tag> </tag>`</strong><br>
  `<tag>`와 같이 단일 태그로 이루어진 태그도 존재 한다.
- 태그에는 다양한 속성값을 추가할 수 있다.
- 다음은 vs code에서 HTML파일을 편집할 때 자동완성 되는 HTML Tag들이다.

```
<!DOCTYPE html>
<html lang="kor">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  // 웹 페이지에 보여질 화면
</body>
</html>
```

## 코딩 요령
- HTML은 줄바꿈을 공백 한 칸으로 취급한다. 괄호를 붙여주는 방식으로 제거 할 수 있다.
```
 tag{내용} => <tag>내용</tag>
 tag[속성="내용"] => <tag 속성="내용"></tag>
 &lt;(<) &gt;(>) 
 (ul, ol)>li*n // n개의 li를 같는 (ul, ol)태그 생성
 tag#id_name
 tag#id_name_${id: target_$}*n //0~n까지의 id 생성
```

## 자주 사용하는 Tag들
- 정보의 종류에 따라 사용할 Tag를 결정해야한다.
### 1. `<html>`

- 웹 페이지는 `<html>`로 시작해서 `</html>`에서 끝난다.
- 문서의 최상단 태그다.
- HTML의 모든 태그는 <strong>html</strong>태그의 자식 태그이다.
- `<!DOCTYPE html>`는 문서유형을 html로 해석하겠다는 의미이다.
- `lang` 속성은 지정된 언어로 웹 페이지를 접근하도록 한다.

### 2. `<head>`

- 문서 정보(메타데이터 meta)를 담는다.
- 정보로는 문서가 사용할 제목(title), 스크립트(script), 스타일 시트(style) 등이 있다.

### 3. `<meta>`

- `base`, `link`, `script`, `style`, `title`과 같은 다른 메타관련 요소로 나타낼 수 없는 Metadata를 나타낸다.
- 즉 문서에 관한 정보를 나타내는 태그다.

### 4. `<title>`

- 브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의한다. (해당 코드는 Document라는 이름의 웹 페이지)

### 5. `<style>`

- 문서나 문서 일부에 대한 스타일 정보를 포함한다.
- CSS파일을 연동시키거나, 직접 태그 안에서 CSS코드를 작성 할 수 있다.

### 6. `<script>`

- 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 쓴다.

### 7. `<body>`

- HTML 문서의 내용을 나타낸다. 한 문서에 하나의 <body> 요소만 존재할 수 있다.
- `<body>` 안에서 다양한 HTML 태그를 활용해 웹 페이지를 구현할 수 있다.

### 8. `<link>`

- 현재 문서(HTML 파일)과 외부 리소스의 관계를 명시한다.
- 흔히 CSS파일을 HTML파일에 연결 시킬 때 사용한다.<br>

  ```
  <link href="style.css" rel="stylesheet">
  ```

### 9. `<a>`

- <strong>href</strong> 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만든다.

  ```
  <a href="https://example.com" target="option">Website</a>
  <!--
  Website라는 문자열 클릭시 https://example.com로 페이지 이동
  href에 id를 설정하면 해당 id로 이동한다.
  -->
  ```
 - target option: _blank(새창), _self(현재 창)
### 10. `<div>`

- 플로우 콘텐츠(내장 텍스트나 콘텐츠를 가지는 콘텐츠)를 위한 통용 컨테이너다. CSS로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않는다.
- block요소 이다.

### 11. `<span>`

- 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않는다.

### 12. `<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`

- 6단계의 제목을 나타낸다. 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮다.

### 13. `<p>`

- 텍스트 작성시 하나의 문단을 나타낸다.

### 14. `<img>`

- 문서에 이미지를 넣는다. src 특성은 필수로 작정해야 하며, 포함하고자 하는 이미지로의 경로를 지정한다.

  ```
  <img scr = "이미지 경로(파일위치 or 이미지 URL)">
  // 속성
  alt="이미지 대체 텍스트/이미지 설명"
  title="text" // alt의 대체제나 중복되면 안됨
  width="숫자", height="숫자" // 픽셀 단위의 정수를 대입
  ```

### 15. `<ul>, <ol>, <li>`

- 세 태그는 웹 페이지에 리스트를 표현하기 위해 사용한다.
- `<ul>`은 unordered list, 순서가 중요하지 않은 리스트를 표현한다.
- `<ol>`은 ordered list, 순서가 중요한 리스트를 표현한다.
  - `type` 속성으로 순서 표기의 유형을, `start` 속성으로 시작 표기를 설정 할 수 있다.
- `<li>`는 `<ul>, <ol>`의 자식 태그로 사용되며 리스트의 항목을 나타낸다.
- 나열되는 요소들을 만들 때 사용한다.

### 16. `<br>`

- 텍스트 안에 줄바꿈(캐리지 리턴)을 생성한다.

### 17. `<input>`

- 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성한다.
- 동작 방식은 type 특성에 따라 현격히 달라진다. 기본 type은 text이다.

### 18. `<form>`

- 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타낸다.
- method라는 특성을 활용해 정보 전송 방식을 지정 할 수 있다.

### 19. `<nav>`

- 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 부분을 생성한다. 자주 쓰이는 예제는 메뉴, 목차, 색인이다.

### 20. `<header>`

- 소개 및 탐색에 도움을 주는 콘텐츠를 나타낸니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있다. 반드시 페이지 위에 위치할 필요는 없다.

### 21. `<iframe>`

- 현재 문서 안에 다른 HTML 페이지를 삽입한다.

  ```
  <iframe src="https://mdn-samples.mozilla.org/snippets/html/iframe-simple-contents.html" title="iframe Example 1">
  </iframe>
  ```

### 22. `<button>`

- 클릭 가능한 버튼을 나타낸다.

### 23. `<i> <em>`

- i: 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타낸다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있고, 보통 기울임꼴로 표시한다.
- em: 감싼 요소를 강조한다.(글자가 기울어짐)

### 24. `<b> <strong>`
- b 태그는 글자를 굵게 만든다. => 글자를 굵게만 만들 뿐이라면 CSS를 사용하는게 좋다.
- strong 태그는 감싼 요소를 강조한다.(중요한 정보)

### 25. `<u> <s>`
- u: 과거에 밑줄을 긋는 용도였지만 현재는 CSS와 함께 철자 오류 등을 강조할 때 사용
- s: 더 이상 유효하지 않은 정보를 취소선과 함께 나타낸다.

### 26. `<blockquote cite="url"> <cite> <q> <mark>`
- blockquote: 안쪽의 텍스트가 긴 인용문임을 나타낸다.
- cite: 저작물의 출처를 제목을 포함해 표기
- q: 둘러싼 텍스트가 짧은 인라인 인용문이라는 것을 나타낸다.
- mark: 사용자의 행동과 관련있는 부분(ex. 검색어 표시)

### 27 `<abbr title="text">`
- 태그에 감싼 데이터의 머리말을 설정하는 태그

### 28 `<table> <caption> <tr> <tb>`
```
table>caption+(tr>td*3)*3
```
- table: 표 뼈대
- caption: 표 설명
- tr: 테이블의 행
- td: 테이블의 데이터 셀

### 28 `<thead> <tbody> <tfoot> <th>`
- thead: 테이블의 헤더부분
- tbody: 테이블의 본문
- tfoot: 테이블의 푸터부분
- th: 열 또는 행의 헤더
- td태그 colspan속성: 열 병합
- td태그 rowspan속성: 행 병합

