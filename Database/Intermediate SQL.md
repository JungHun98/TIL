## Joined Relations

- 두 개의 relation을 입력으로 받아서 특정 조건이 만족되는 특정 튜플만 반환한다.
- 다른 기본 연산을 조합해 구현할 수 있다.(Cartesian pruduct + where)
- 세 종류의 join
  - Natural join
  - Inner join
  - Outer join

## Natural Join in SQL(Inner join)

- 두 table간 일치하는 이름의 Attribute가 있는 경우 그 Attribute의 값이 서로 일치하는 튜플들만 반환한다.

```
select name, course_id
from students natural join takes;

# 같은 표현이다.

select name, course_id
from students, takes
where students.ID = takes.ID;
```

- 주의할 점
  - natural join은 2회 이상 반복하여 사용 할 수 있는데 이때 원하는 데이터가 반환되지 않을 수 있으니 주의해야 한다.

## Outer Join

- natural join에서 발생할 수 있는 문제인 데이터 유실을 방지할 수 있다.
- relation의 데이터를 보존하는 상태에서 join연산을 한다. join연산의 기준이되는 Attribute의 값이 일치하지 않는 경우 null로 채워진다.
- 3가지의 outer join
  - left outer join: join왼쪽의 relation의 데이터를 보호한다.
  - right outer join: join오른쪽의 relation의 데이터를 보호한다.
  - full outer join: 모든 relation의 데이터를 보호한다.
