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
