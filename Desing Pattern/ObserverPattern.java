// Observer pattern은 새로운 사건이 발생할 때 마다 동작하는 디자인 패턴
// subject/observer의 관계로 설계한다.
// subject는 event가 발생하면 observer에게 통지하고, observer는 event를 처리한다.
// 하지만 모든 observer가 event를 처리하는 것은 아니고, event처리를 희망하는 observer만 event를 처리한다.
// 따라서 subject와 observer class에 필요한 메소드들이 있다.

// subject : observer가 사건발생을 인지 할 수 있는 메소드(연결, like eventlistener)
//           연결된 observer 해제 메소드
//           사건발생 통지 메소드

// observer : update(), display()

// update메소드는 observer에 구현되어있지만 호출은 subject에서 한다.
// observer 등록 메소드는 subject에 구현되어 있지만 호출은 observer에서 한다.

import java.util.*;

interface Observer {
    public void update(float temp, float humidity, float pressure); //event 처리
}

interface Subject {
    public void registerObserver(Observer o); // observer 추가
    public void removeObserver(Observer o); // observer 제거
    public void notifyObservers(); // event 통지
}

interface DisplayElement{
    public void display();
}

class WeatherData implements Subject{
    private ArrayList<Observer> observers;
    private float temperature;
    private float humidity;
    private float pressure;

    public WeatherData(){
        observers = new ArrayList<Observer>();
    }

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        int i = observers.indexOf(o);
        if(i >= 0){
            observers.remove(i);
        }
    }

    @Override
    public void notifyObservers() {
        for (Observer item : observers) {
            // observer의 update를 subject에서 호출
            item.update(temperature, humidity, pressure);
        }
    }

    public void measurementsChanged(){
        notifyObservers();
    }

	public void setMeasurements(float temperature, float humidity, float pressure){
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        measurementsChanged();    
    }

    public float getTemperature(){
        return temperature;
    }

    public float getHumidity(){
        return humidity;
    }

    public float getPressure(){
        return pressure;
    }
}

class TempDisplay implements Observer, DisplayElement{

    private float temp;
    private float humi;
    private float pressure;
    private WeatherData weatherData;

    public TempDisplay(WeatherData weatherData){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    @Override
    public void display() {
        
    }

    @Override
    public void update(float temp, float humidity, float pressure) {
        this.temp = temp;
        this.humi = humidity;
        this.pressure = pressure;

        display();
    }

}

public class ObserverPattern {
    public static void main(String args[]){

    }
}
