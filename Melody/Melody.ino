#include <SPI.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define SCREEN_WIDTH 128 // OLED display width, in pixels
#define SCREEN_HEIGHT 64 // OLED display height, in pixels

// Declaration for an SSD1306 display connected to I2C (SDA, SCL pins)
#define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);


#include <Wire.h>
#include "pitches.h"


// constant variables
const int  buttonPin = 12;


// changing variables
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // previous state of the button
bool broadcasting = false;
int bounceCheck = 0;

void setup() {
    // initialize serial communication:
    Serial.begin(115200);
    
     // initialize the button pin as a input:
    pinMode(buttonPin, INPUT);


    if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
        Serial.println(F("SSD1306 allocation failed"));
    }

    display.display();
    // Clear the buffer
    display.clearDisplay();
}

void loop() {

    // read the pushbutton input pin:
    buttonState = digitalRead(buttonPin);
    Serial.println(buttonState);

    // compare the buttonState to its previous state
   if (buttonState == 1) {
          
      if (broadcasting) {
          Serial.println("Turning broadcast off...");
          broadcasting=false;
      } else {
          Serial.println("Turning broadcast on...");
          broadcasting=true;
      }

      buttonState = 0;
      delay(500);
   
   }

   if (broadcasting) {
        Serial.println("BROADCAST");
        broadcast_message();
        tone(14, NOTE_DS8,180);
        delay(200);        
   } else { 
        idle_message();
   }
  
}

void broadcast_message(void) {
  display.clearDisplay();

  display.setTextSize(2);             // Normal 1:1 pixel scale
  display.setTextColor(WHITE);        // Draw white text
  display.setCursor(0,0);             // Start at top-left corner
  display.println(F("Pinging..."));
  display.println(F(""));
  display.println(F("Help is"));
  display.println(F("on the way"));

  display.display();
}

void idle_message(void) {
  display.clearDisplay();

  display.setTextSize(2);             // Normal 1:1 pixel scale
  display.setTextColor(WHITE);        // Draw white text
  display.setCursor(0,0);             // Start at top-left corner
  display.println(F(""));
  display.println(F(""));
  display.println(F("   Liv    "));
  display.println(F(""));
  display.println(F(""));

  display.display();

}
