import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition';


@Component({
  selector: 'app-send-letter',
  templateUrl: './send-letter.page.html',
  styleUrls: ['./send-letter.page.scss'],
})
export class SendLetterPage implements OnInit {

  matches: Array<string> = [];
  isRecording = false;
  responseMessage: string;

  constructor() {
  }

  ngOnInit() {
    this.responseMessage = "";
  }

  // Check feature available
  isFeatureAvailable() {
    SpeechRecognition.isRecognitionAvailable()
      .then((available: boolean) => { 
        console.log(available); 
        this.responseMessage += available;
        this.isRecording = available; 
      });
  }

  // Start the recognition process
  startListening() {
    let options = {
      language: 'en-US',
      prompt: 'Speak into your phone'
    }

    this.isRecording = true;
    this.responseMessage += "Started";
    SpeechRecognition.startListening()
      .subscribe(
        data => this.matches = data,
        error => {
          console.log('error:', onerror);
          this.responseMessage += "Error: " + onerror.toString;
        }
      )
  }

  // Stop the recognition process (iOS only)
  stopListening() {
    this.isRecording = false;
    this.responseMessage += "Stopped";
    SpeechRecognition.stopListening();
  }

  // Get the list of supported languages
  getSupportedLanguage() {
    SpeechRecognition.getSupportedLanguages()
      .then(
        (languages: string[]) => console.log(languages),
        (error) => console.log(error)
      )
  }

  // Check permission
  hasPermission() {
    SpeechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        console.log(hasPermission);
        this.responseMessage += "Has Permission: " + hasPermission;
      })
  }

  // Request permissions
  getPermission() {
    SpeechRecognition.requestPermission()
      .then(
        () => {
          console.log('Granted');
          this.responseMessage += "Permission Granted.";
        },
        () => {
          console.log('Denied');
          this.responseMessage += "Permission Denied.";
        }
      )
  }
}
