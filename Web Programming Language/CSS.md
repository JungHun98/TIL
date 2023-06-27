# CSS

- Cascading Style Sheets, CSS는 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어로, HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다.
- HTML이 웹 사이트의 기본 골격을 나타낸다면 CSS는 그 골격을 디자인하는 역할을 한다.

## HTML에 CSS 적용하기

CSS는 HTML에 적용하여 골격의 형태를 변경할 수 있는데, 접근 방법에는 크게 두 가지가 존재한다.

1. HTML 태그의 stlye속성을 활용하는 방법

   - HTML태그들은 각자 고유하거나 이름이 같은 속성값을 설정할 수 있는데 그 중 하나인 style속성은 태그에 css를 적용할 수 있다.

   ```
   <h1 style = "height: 100%;"></h1>
   ```

2. `<link>`, `<style>`을 이용하는 방법

   - 널리 사용되고 있는 방법인데, css 명령을 별도로 생성해서 html파일에 연동하는 방법이다.

   ```
   <style>
      h1 {
        font-size = 100px;
      }
   </style>
   <link href="style.css" rel="stylesheet">
   ```

## CSS 선택자

```
h1 {
  font-size = 100px;
  }
```

해당 코드는 h1태그를 선택해서 css를 적용하는 코드이다. 이 코드에서 h1이 선택자라고 불린다. html파일에서 h1태그만을 선택해 css를 적용한것이다.

1. 선택자의 종류

   - 태그 선택자

     - 위 코드의 h1이 태그 선택자이다.
     - 태그를 선택하려면 태그의 이름을 작성하면된다.

   - id 선택자

     ```
     <!-- HTML -->
     <h1 id = "first">Hello</h1>
     <!-- CSS -->
     #first {
      color : black;
      }
     ```

     - id 선택자를 선택하려면 #을 붙여야 한다.
     - id 선택자의 이름은 고유해야 한다.(같은 값의 id는 사용하지 말도록 하자)

   - class 선택자

     ```
     <!-- HTML -->
     <h1 class = "first">Hello</h1>
     <!-- CSS -->
     .first {
       color : black;
     }
     ```

     - class 선택자를 선택하려면 .을 붙여야 한다.

   - 부모, 자식 선택자

     ```
     <!-- HTML -->
     <div>
      <h1 class = "first">Hello1</h1>
      <h1 class = "second">Hello2</h1>
     <div>
     <!-- CSS -->
     div .first {
       font-size = 100px;
     }

     div>second{
       font-size = 100px;
     }
     ```

     - div태그의 자식을 개별로 선택할 수 있다.

   - 가상 class 선택자

     - class 선택자 처럼 동작하지면 요소들의 상태에 따라서 선택하는 선택자다.

     ```
     <!-- HTML -->
     <div>
     </div>
     <!-- CSS -->
     div:hover{
       color : black;
     }
     div:active{

     }
     ```

     - `태그:선택속성`으로 선택하면 특수한 상태의 태그를 스타일링 할 수 있다. 선택속성은 다양하다.
     - ex) hover 태그위에 마우스가 올라가있을 때 색이 검정색으로 적용

   - tag.class : html 파일에 존재하는 모든 tag에서 class의 값이 "class"인 것들을 선택한다.
   - selector1, selector2 ... : 여러개의 선택자를 선택한다.
   - selector \* : 선택자의 모든 자식들을 선택한다.
   - selector:nth-child(n) : 선택자의 n번째 자식을 선택한다.
   - selector1:not(selector2) : selector1에서 selector2가 아닌 모든 것을 선택한다.
   - 같은 선택자가 선택되어 서로 다른 CSS속성을 입력한다면 우선순위에 따라 속성이 적용된다.
     1. HTML style 속성
     2. id 선택자
     3. class 선택자
     4. tag 선택자
     5. `!important`라는 css 속성을 추가 할 경우 우선순위를 무시하고 추가한 선택자에 작성된 css가 적용된다.

## CSS 상속

- 부모 태그의 css속성은 모든 자식 tag에 상속된다.
- 하지만 모든 태그가 상속받을 수 있는 것은 아니다.

## ⭐CSS 포지셔닝
`position` 속성은 요소들이 화면에 어떻게 배치될지를 지정한다. 특이사항으로는 자식 요소에게 상속되지 않는다는 점이있다.

- `static`: 기본값, 전적으로 페이지의 흐름을 따르며 `top`, `bottom`, `left`, `right`, `z-index` 속성에 영향을 받지 않는다.

- `relative`: HTML 요소가 원래 있어야 하는 위치를 기준으로 위치 속성값이 적용되도록한다. 요소의 위치는 이동하지만 요소가 차지하고 있던 공백의 위치는 유지된다. 다른 요소가 밀려나거나 공간을 차지하지 않는다.

- `absolute`: `static`이 아닌 **첫 부모** 요소를 기준으로 위치 속성 값을 사용하여 위치를 조정할 수 있다. 만약 모든 부모가 `static`이라면 viewport를 기준으로 위치를 설정한다. 요소는 페이지의 문서 흐름에서 벗어나 기존 요소가 차지하고 있던 공백을 다른 요소가 차지하게 된다.

- `fixed`: 어떤 부모요소도 아닌 veiwport를 기준으로 위치를 지정한다. 스크롤에도 영향을 받지 않으며, 다이얼로그 팝업처럼 움직이지 않는 요소들에 유용하게 사용할 수 있다.

- `sticky`: 요소가 스크롤로 이동할 수 있는 공간을 지정할 수 있다.

- `z-index`: position 속성 값이 `static`이 아닌 요소들간의 위아래 배치순서를 지정한다. `auto`는 0과 같으며, 같은 값의 요소는 나중에 배치된 것이 위로 쌓여 올라오게 된다.
