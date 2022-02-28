# Linked List(연결 리스트)란?

- 데이터와 다음 노트를 가리키는 포인터를 가지고 있는 각 노드가 한줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조.

  ![리스트 이미지](https://cdn.codingworldnews.com/news/photo/202104/img_3379_1.jpg)

## 연결 리스트 기능(함수)

- length( ) : 리스트의 노드개수, 즉 길이를 알수있다.
- search(entry) : entry가 리스트에 저장되어 있는지 판단한다.
- locate(index) : index에 위치한 노드의 포인터를 알수있다.
- copy(list) : list를 다른 리스트에 복사한다.
- insert(index, entry) : entry를 저장하고 있는 노드를 index위치에 삽입한다.
- remove(entry) : entry를 리스트에서 제거한다.
- clear() : list를 empty list로 만든다.

## 연결 리스트의 종류

- 단방향 연결리스트(위 이미지와 같은 형태)
- 양방향 연결리스트

  - 자신의 앞쪽 노드와 뒤쪽 노드를 연결하는 포인터를 가진 연결리스트

    ![양방향 리스트 이미지](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2IlJDgDORL_clXhsBTLE5REEhTZLkb9ILg&usqp=CAU)

- 원형 연결리스트

  - 단방향 연결리스트에서 가장 끝 노드가 가장 앞 노드를 연결하는 연결리스트

    ![원형 리스트 이미지](data:image/png;base64,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)

## 연결 리스트의 장점과 단점

- 장점
  - 데이터를 임의의 위치에 삽입, 제거하는 것이 용이하다.
  - 데이터의 이동이 유연해 효율적인 재배치가 가능하다.
  - 이중 연결리스트의 경우 양방향 커서를 사용해 앞쪽 노드에서 뒤쪽 노드로 효율적으로 이동 할 수 있다.
- 단점
  - 무작위로 결정된 위치의 데이터 접근이 배열에 비해 비효율적이다.(첫 노드부터 검색을 시작해야 하기 때문이다.)

## 연결 리스트는 어디에 쓰이는가?

- 지하철 노선도와 닮아 있다.
  - 2호선 순환(원형 연결 리스트)
  - 기타 다른 노선도(단방향 연결 리스트)
- 멜론 음악 이동 : 곡에 대한 데이터를 리스트에 저장해두고 사용자가 조작하여 이동한다.(이중 연결 리스트)
- 웹 페이지 뒤로 가기, 앞으로 가기 : 음악 이동과 비슷한 원리

## 연결 리스트를 언제 쓸까?

- 리스트는 배열과 비슷한 부분이 있지만 서로 장단점이 존재한다.
- 따라서 배열의 단점을 극복하고, 리스트의 장점을 살릴 수 있을 때 사용하자.
- 배열에 비해 탐색 속도가 떨어지지만 데이터의 추가, 삭제가 용이하다.
- 따라서 탐색과 정렬을 자주 하지 않고, 데이터의 추가와 삭제가 빈번한 데이터를 관리 할 경우에 연결 리스트를 사용하자!
