# Container Class
- 데이터를 저장할 수 있는 저장소로서의 구조체

## Bag
- 자료를 저장 할 수 있는 구조체
  - 데이터의 순서가 없다.
  - ex) 숫자를 저장 할 수 있는 구조체의 기능
    - 초기 상태의 Bag: 아무 데이터도 가지고 있지 않은 상태
    - insert: 데이터를 구조체에 저장하는 기능
    - examining: 어떤 데이터가 있는지 알 수 있는 기능
    - remove: 데이터 삭제 기능
    - how many: 얼마나 많은 데이터가 있는지 알려주는 기능
  
  ```cpp
  // 클래스의 정의만을 읽고 어떤 기능을 하는지 알 수 있도록 작성하는게 좋다.

  class bag{
    public:
      bag();
      void insert(int new_entry);
      void size();
      // 나머지 함수들

    private:
      int data[];
      int size;
      // 멤버 변수...
  }

  bag::bag()
  //Postcondition: 빈 bag 객체를 하나 만듦
  {
    // ...
  }

  void bag::insert(int new_entry)
  // Precondition: bag이 꽉 차지있지 않아야 함
  // Postcondition: 데이터를 bag에 저장
  { 
    // size 확인
    data[size++] = new_entry;
  }

  int bag::size() const
  // Postcondition: bag의 크기 반환
  {
    //... 
  }

  int bag::occurrences(int target) const
  // Postcondition: bag에 존재하는 target과 같은 값의 데이터 개수 반환   
  {
    //... 
  }

  void bag::remove(int target)
  // Postcondition: 만약 target이 존재하지 않는다면 아무일도 안일어남
  //                target이 bag에 존재하는 경우 그 중 하나의 데이터를 삭제함
  {
    // 배열을 검색해 데이터를 삭제하고 배열의 마지막 요소를 삭제한 위치로 이동
    // size--
  }

  // ex) a += b;
  void bag::operator+=(const bag& addend)
  // Precondition: 새로운 데이터를 추가 했을 때 최대 용량을 초과하면 안됨
  // Postcondition: bag에 데이터를 끝에서 부터 추가함
  {
    // 데이터 복사, size += addend.size;
  }
  ```

## Dynamic Bag
- bag의 크기가 정적으로 정해져 있지 않고 크기가 변하는 bag
- 만들어지는 bag의 크기가 모두 같지는 않다.
  ```cpp
  class bag{
      public:
        bag(int init_capacity);
        bag(const bag& source); //copy constructor(deep copy)
        /* 복사 생성자의 쓰임
           1. 같은 데이터를 갖는 객체를 만들 때
           2. 함수의 반환값일 때 (return bag)
           3. 함수의 매개변수로 사용 될 때
        */
        ~bag(); // 동적 메모리 공간 반환
        
        void insert(int new_entry);
        /*
          1. 만약 공간이 꽉 차있다면 reserve를 호출해 크기를 증가시킴
          2. 빈 공간에 데이터 삽입
        */
        void size();
        void reserve(int new_capacity); // 데이터는 유지하고 배열의 크기만을 증가시킴
        // 나머지 함수들
        void operator=(const bag& source);
        /* bag대입 연산자
          1. 매개 변수가 자기 자신인지 판별 if(this == &source) retrun;
          2. 두 변수의 capacity를 같도록 만듦
          3. 데이터를 복사함(deep copy)
        */
      private:
        int *data;
        int size;
        int capacity;
        // 멤버 변수...
  }
  ```