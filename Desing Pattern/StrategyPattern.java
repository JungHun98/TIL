// 특정계열의 알고리즘을 정의하고 캡슐화
interface FlyBehavior {
    void fly();
}

interface QauckBehavior{
    void qauck();
}

// 알고리즘들을 해당 계열안에서 상호 교체가 가능하게 설계
class FlyWithWings implements FlyBehavior {
    @Override
    public void fly() { System.out.println("Duck Fly!!!"); }
}

class FlyNoWay implements FlyBehavior {
    @Override
    public void fly() { System.out.println("I do not fly..."); }
}

class Qauck implements QauckBehavior{
    @Override
    public void qauck() { System.out.println("quack quack");}
}

abstract class Duck {
    FlyBehavior flyBehavior;
    QauckBehavior qauckBehavior;

    public void swim() { System.out.println("Duck swimmibg"); }
    public abstract void display();
    
    public void performQuack(){
        this.qauckBehavior.qauck();
    }
    public void performFly(){
        this.flyBehavior.fly();
    }
}

class MallardDuck extends Duck {
    public MallardDuck(){
        this.flyBehavior = new FlyWithWings();
        this.qauckBehavior = new Qauck();
    }

    @Override
    public void display() {System.out.println("MallardDuck");}

    public void setFlyBehavior(FlyBehavior fb){
        flyBehavior = fb;
    }

    public void setQuackBehavior(QauckBehavior qauckBehavior){
        this.qauckBehavior = qauckBehavior;
    }
}

public class StrategyPattern {
    public static void main(String args[]) {
        MallardDuck mallDuck = new MallardDuck();
        FlyBehavior fh = new FlyNoWay();

        mallDuck.performFly();

        mallDuck.setFlyBehavior(fh);
        mallDuck.performFly();

        mallDuck.performQuack();
    }
}