# Operating System Structures

## 1. User Operating System Interface

- CLI : 명령어를 기반으로 컴퓨토를 운영.
- Desktop : 마우스, 키보드, 모니터를 이용해서 컴퓨터를 운영(GUI).
- 대부분의 시스템은 CLI, GUI를 모두 제공한다.

## 2. System Call and API

- System Call : OS가 제공하는 서비스에 대한 프로그래밍 인터페이스
- API : OS보다 위 계층에 위치하는 Middle Ware가 제공하는 함수들.
  - API를 이용해 어플리케이션을 만들 수 있다.
  - OS의 내부동작을 몰라도 개발이 가능하도록 도와준다. 개발자들은 System Call을 직접 사용하는 것보다 API를 사용하는 것이 더 좋다.
  - API들은 내부적으로 System Call을 이용하도록 구현되어 있다.
  - 하지만 API별로 호환되는 OS들이 따로 존재한다.
    - ex) Posix, win32

![](/img/SystemCall.JPG)

## 3. System Call Implementation

- System Call Number : System Call 종류마다 대응되는 숫자.
- System Call Table : System Call을 정의하고 있는 Table(배열).

  ```
  // read in Posix
  int read(int fd, void* pBuf, int nBytes);
  ```

  ```
  // low level
  #define __NR_read 3
  _syscall3(int, __NR_read, int, fd, void*, pBuf, int, nBytes);
  ```

  - 구현된 것을 보면 먼저 System Call Number를 먼저 정의한다.
  - 그다음 \_syscall3과 같이 선언한다.
  - 함수의 매개변수는 (int(errupt), sysnum, type1, name, type2, name ...);로 이루어진다.

## 4. System Call Parameter Passing

- System Call에서 다수의 매개변수를 CPU레지스터에 전달하기 위해 `Block`을 만들어 `Block`의 시작주소만을 CPU에 전달한다.
  ![](/img/block.JPG)
  - x가 parameter의 `Block`이다.
  - window는 `stack`을 사용한다.
