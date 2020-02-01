/*
 *  Simple HTTP get webclient test
 */

 
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <Wire.h>

const char* ssid     = "RedRover";
const char* password = "";
 
const char* host = "10.148.8.186";

void setup() {
  Wire.begin();
  Serial.begin(115200);
  delay(100);
 
  // We start by connecting to a WiFi network
 
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
 
  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

int value = 0;

void loop() {
  // put your main code here, to run repeatedly:
  //delay(500);
  ++value;
 
  Serial.print("connecting to ");
  Serial.println(host);
  
  // Use WiFiClient class to create TCP connections
  WiFiClient client;
  const int httpPort = 8000;
  if (!client.connect(host, httpPort)) {
    Serial.println("connection failed");
    return;
  }
  else {
    Serial.println("connection success");
  }

  Serial.println();
  Serial.println();
}
