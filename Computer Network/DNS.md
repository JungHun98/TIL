IP주소를 기억하기에는 쉽지 않은 일이다. 그렇기에 고안된 것이 **D**omain **N**ame **S**ystem 줄여서 **DNS**이다.

- Host: 인터넷에 연결된 각각의 컴퓨터, 디바이스
- 두 대의 컴퓨터가 서로 통신하기 위해서는 반드시 서로의 IP가 필요하다.
    ![](./img/DNS.jpeg)

- 운영체제마다 hosts라는 파일이 존재함
    - {IP  Domain-Name}이 기록되어 있음
    - [OS] hosts file location
        - ex) UNIX : /etc/hosts (접근시 관리자 권한이 필요함)
        ![](./img/hosts.PNG)
    - 파일을 수정하면 도메인으로 해당 IP에 접속가능 하지만 hosts파일의 소유자만 접근 할 수 있는 DNS이전 방식이다.

# DNS

- server 컴퓨터는 DNS server에 자신의 IP와 Domain Name을 저장할 것을 요청한다.
- DNS server는 요청받은 내용을 저장한다.
- client가 Domain Name을 입력한다.
- 인터넷에 연결된 순간 DHCP를 이용해 Client에 DNS Server의 IP를 등록한다.
- Client의 hosts파일을 살펴보고, Domain이 없을 경우 DNS Server에 해당 Domain의 IP를 요청한다.
- DNS Server는 IP를 Client에 전달하고 Client는 전달받은 IP로 접속한다.
    ![](./img/DNS2.jpeg)

- DNS Server를 따로 사용하면 DNS Server에 변경사항이 있더라도 모든 컴퓨터는 그 변경사항을 곧바로 알 수 있다.
