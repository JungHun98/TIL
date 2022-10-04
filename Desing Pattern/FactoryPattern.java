class Pizza{

}

class CheesePizza extends Pizza{

}

class PepperoniPizza extends Pizza{
    
}

class ClamPizza extends Pizza{
    
}

class VeggiePizza extends Pizza{
    
}

class PizzaStore {
    SimplePizzaFactory factory;

    public PizzaStore(SimplePizzaFactory factory){
        this.factory = factory;
    }

    public Pizza orderPizza(String type){
        Pizza pizza;
 
		pizza = factory.createPizza(type);
        
        return pizza;
    }
}
class SimplePizzaFactory {
    
    public Pizza createPizza(String type){
        Pizza pizza = null;
        
        if (type.equals("cheese")) {
			pizza = new CheesePizza();
		} else if (type.equals("pepperoni")) {
			pizza = new PepperoniPizza();
		} else if (type.equals("clam")) {
			pizza = new ClamPizza();
		} else if (type.equals("veggie")) {
			pizza = new VeggiePizza();
		}

		return pizza;
    }
}

public class FactoryPattern {
    public static void main(String args[]){

    }
}
