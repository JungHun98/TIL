# HTML(Hyper Text Markup Language)

- HTML은 웹 페이지 마크업 언어이다. 웹 페이지의 기본적인 골격을 Tag를 사용해 구현할 수 있다.
- 기본 문법. Tag의 이름을 <>로 감싼다. <br>
  <strong>`<tag> </tag>`</strong>
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

</body>
</html>
```

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
