// 객체의 결합을 통해 기능을 동적으로 유연하게 확장 할 수 있게 해주는 패턴
// - 기본 기능에 추가할 수 있는 기능의 종류가 많은 경우 각 추가 기능을 Decorator class로 정의 한 뒤
//   Decorator 객체를 조합함으로써 추가 기능의 조합을 설계한다.

abstract class Beverage {
	String description = "Unknown Beverage";
  
	public String getDescription() {
		return description;
	}
 
	public abstract double cost();
}

abstract class CondimentDecorator extends Beverage{
    public abstract String getDescription(); 
}

// Beverage class를 상속받는 class들 중에서 추가 "기능"에 대한 class들은
// 상위 class의 메소드들을 사용한다. (추가 할 때마다 호출 cost, getDescription)

public class DecoratorPattern {
    public static void main(String args[]){

    }
}
