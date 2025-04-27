int Led7=7;
int Led6=6;
int Led5=5;
int Led4=4;
int Led3=8;
int Led2=2;
int Led1=1;
int Dom=1;
int butt=0;

void setup() {
    pinMode(Led7, OUTPUT);
    pinMode(Led6, OUTPUT);
    pinMode(Led5, OUTPUT);
    pinMode(Led4, OUTPUT);
    pinMode(Led3, OUTPUT);
    pinMode(Led2, OUTPUT);
    pinMode(Led1, OUTPUT);
    pinMode(butt, INPUT_PULLUP);
    randomSeed(analogRead(A0) + analogRead(A1));
    
}

void loop() {
   
    Up();
    Down();
    
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, LOW);
    digitalWrite(Led1, LOW);
    for (int i = 0; i < 50; i++) {
        Random();
        delay(100);
        
    } 
    
    Down();
    Up();
}
void Up() /*This program flashes the lights in an upword pattern */ { 
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, LOW);
    digitalWrite(Led1, LOW);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, LOW);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, HIGH);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, HIGH);
    digitalWrite(Led6, HIGH);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
}
void Down() /*This program flashes the lights in a downword pattern */ {
    digitalWrite(Led7, HIGH);
    digitalWrite(Led6, HIGH);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, HIGH);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, HIGH);
    digitalWrite(Led4, HIGH);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, HIGH);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, HIGH);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, LOW);
    digitalWrite(Led1, HIGH);
    delay(100);
    digitalWrite(Led7, LOW);
    digitalWrite(Led6, LOW);
    digitalWrite(Led5, LOW);
    digitalWrite(Led4, LOW);
    digitalWrite(Led3, LOW);
    digitalWrite(Led2, LOW);
    digitalWrite(Led1, LOW);
    delay(100);
}
void Random() {
    Dom = random(1, 15);
    //reads Doms random number to create a rondom light show
    if (Dom==1) {
        digitalWrite(Led1, HIGH);
        delay(10);
    }
    else if (Dom==2) {
        digitalWrite(Led1, LOW);
        delay(10);
    }
    else if (Dom==3) {
        digitalWrite(Led2, HIGH);
        delay(10);
    }
    else if (Dom==4) {
        digitalWrite(Led2, LOW);
        delay(10);
    }
    else if (Dom==5) {
        digitalWrite(Led3, HIGH);
        delay(10);
    }
    else if (Dom==6) {
        digitalWrite(Led3, LOW);
        delay(10);
    }
    else if (Dom==7) {
        digitalWrite(Led4, HIGH);
        delay(10);
    }
    else if (Dom==8) {
        digitalWrite(Led4, LOW);
        delay(10);
    }
    else if (Dom==9) {
        digitalWrite(Led5, HIGH);
        delay(10);
    }
    else if (Dom==10) {
        digitalWrite(Led5, LOW);
        delay(10);
    }
    else if (Dom==11) {
        digitalWrite(Led6, HIGH);
        delay(10);
    }
    else if (Dom==12) {
        digitalWrite(Led6, LOW);
        delay(10);
    }
    else if (Dom==13) {
        digitalWrite(Led7, HIGH);
        delay(10);
    }
    else if (Dom==14) {
        digitalWrite(Led7, LOW);
        delay(10);
    }
}

