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
