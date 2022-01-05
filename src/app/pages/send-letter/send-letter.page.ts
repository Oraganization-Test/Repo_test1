import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@awesome-cordova-plugins/speech-recognition/ngx';


@Component({
  selector: 'app-send-letter',
  templateUrl: './send-letter.page.html',
  styleUrls: ['./send-letter.page.scss'],
})
export class SendLetterPage implements OnInit {

  matches: String[];
  isRecording = false;

  constructor(private speechRecognition: SpeechRecognition) {
  }

  ngOnInit() {
  }

  // Check feature available
  isFeatureAvailable() {
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => { console.log(available); this.isRecording = available; });
  }

  // Start the recognition process
  startListening() {
    let options = {
      language: 'en-US'
    }

    this.isRecording = true;
    this.speechRecognition.startListening(options)
      .subscribe(
        (matches: string[]) => console.log(matches),
        (onerror) => console.log('error:', onerror)
      )
  }

  // Stop the recognition process (iOS only)
  stopListening() {
    this.isRecording = false;
    this.speechRecognition.stopListening();
  }

  // Get the list of supported languages
  getSupportedLanguage() {
    this.speechRecognition.getSupportedLanguages()
      .then(
        (languages: string[]) => console.log(languages),
        (error) => console.log(error)
      )
  }

  // Check permission
  checkPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => console.log(hasPermission))
  }

  // Request permissions
  getPermission() {
    this.speechRecognition.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )
  }
}
