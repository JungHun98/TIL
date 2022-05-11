## Branch and Bound

백트래킹과 비슷한점: state-space tree가 문제 해결에 사용된다.
백트래킹과 다른점: tree를 탐색하는 방법이 정해져 있지 않다. 최적화문제에만 사용한다.

- 해결방법
  - step 1: node의 promising여부를 판단하기 위한 bound를 계산한다.
    - promising: 지금보다 더 좋은 값이 존재할 가능성이 있는 경우
  - step 2: non-promising하다면 다음 node를 탐색한다.

## Example 1

### The 0-1 Knapsack Problem (Breadth-First Search)

- state-space tree의 각 노드에는 세가지 값이 들어가 있다.

  - 현재 node의 총 이득
  - 현재 node의 총 무게
  - bound값: fractional knapsack문제로 취급했을 때 현재 node에서 취할 수 있는 최대 이득.

- 현재 모든 node에서 가장 큰 이득을 갖는 node의 이득값을 best solution으로 지정한다.

- 그리고 다음 탐색 node는 현재 node에서 다음 아이템을 추가할지 하지 않을 지 결정한다.

- 탐색한 node의 promising여부를 판단하고 계속해서 작업을 진행한다.
  - promising
    1. 현재 탐색중인 node의 bound가 best solution보다 커야한다.
    2. 현재 탐색중인 node의 무게가 제한무게보다 작아야한다.
- promising하다면 node를 queue에 담고 queue가 빌때 까지 계속 탐색한다.
  ![](./img/knapscak1.JPG)

```
p[] => profit array
bound() => compute bound of current node

public class node{
  int level; // bound
  int profit;
  int weight;
}

public static int knapsack2(int n, int[] p, int[] w, int W){
  queue_of_node Q; node u, v; int maxProfit;

  initialize(Q); // Q: empty
  v.level = 0; v.profit = 0; v.weight = 0;
  maxProfit = 0;
  enqueue(Q, V);
  while(!empty(Q)){
    dequeue(Q, v);
    u.level = v.level + 1;

    //take care of left child
    u.weight = v.weight + p[u.level];
    if(u.weight <= W && u.profit > maxProfit)
      maxProfit = u.profit;
    if(bound(u) > maxProfit)
      enqueue(Q, u);

    //take care of right child
    u.weight = v.weight;
    u.profit = v.profit;
    if(bound(u) > maxProfit)
      enqueue(Q, u);
  }
  return maxProfit;
}
```

## Example 2

### The 0-1 Knapsack Problem (Best-First Search)

- bound값을 promising을 판별한다음 확장할 다음 node를 선택하는데 활용한다.
- 우선순위가 node의 bound값에 의해 결정되는 우선순위 큐를 사용한다.(큰 값이 높은 우선순위)
- 예제 1과 비슷하게 흘러가지만 node를 확장할 때 우선순위에 따라서 확장한다.
- 먼저 현재 node의 child node를 두개 생성하고 현재 best solution과 child bound값을 비교하여 child bound값이 큰 node를 우선순위 큐에 삽입한다.
- 큐에서 node를 하나씩 꺼내면서 반복한다.
  ![](./img/knapscak2.JPG)

```
bound 함수는 위 예제와 동일함.

public class node{
  int level;
  int profit;
  int weight;
  float bound;
}

public static int knapsack3(int n, int[] p, int[] w, int W){
  priority_queue_of_node PQ; node u,v;
  int maxProfit;

  v.level = 0; v.profit = 0;
  v.weight = 0; maxProfit = 0;
  v.bound = bound(v);
  enqueue(PQ, v);

  while(!Empty(PQ)){
    dequeue(PQ, v);
    if(v.bound > maxProfit){
      u.level = v.level + 1;

      //take care of the left child;
      u.weight = v.weight + w[u.level];
      u.profit = v.profit + p[u.level];

      if(u.weight <= W && u.profit > maxProfit)
        maxProfit = u.profit;

      u.bound = bound(u);
      if(u.bound > maxProfit)
        enqueue(PQ, u);

      //take care of right child
      u.weight = v.weight;
      u.bound = bound(u);
      u.profit = v.profit;
      if(u.bound > maxProfit)
        enqueue(PQ, u);
    }
  }
}
```
