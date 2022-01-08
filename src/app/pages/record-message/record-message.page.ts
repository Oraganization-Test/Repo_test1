import { Component, OnInit } from '@angular/core';
import { AudioConfig, SpeechConfig, SpeechRecognizer, SpeechTranslationConfig, TranslationRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
import { Subject } from 'rxjs';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-record-message',
  templateUrl: './record-message.page.html',
  styleUrls: ['./record-message.page.scss'],
})
export class RecordMessagePage implements OnInit {

  hasRecognitionStarted: boolean;
  speechRecognitionLanguage: string;
  //private _recognizer: TranslationRecognizer;
  private _recognizer: SpeechRecognizer;
  private _speechTranslationConfig: SpeechTranslationConfig;
  private _audioConfig: AudioConfig;
  private _SpeechConfig: SpeechConfig;
  private _file: File;
  constructor() { }

  ngOnInit() {
    this.initRecognition();
  }

  initRecognition() {

    this.speechRecognitionLanguage = "en-US";
    //this._audioConfig = AudioConfig.fromDefaultMicrophoneInput();
    // this._file.checkDir(this._file.dataDirectory, 'audio')
    //           .then(_ => console.log('Directory exists'))
    //           .catch(err => console.log("Directory doesn't exist"));

    //const fileName = "../assets/audio/sample.mp4";
    //const file = File(filename);

    // this._file.resolveLocalFilesystemUrl("https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/sample-mp4-file.mp4")
    // .then(entry => {
    //   (<FileEntry>entry).file(filecontent => {
    //     return filecontent;        
    //   }
    //   );
    // })
    // .catch(err => {
    //   console.log('Error while reading file.');
    // });

    
    this._audioConfig = AudioConfig.fromMicrophoneInput();
    this._speechTranslationConfig = SpeechTranslationConfig.fromSubscription("1188bc20d70a42fa8d975bea645810c9", "eastasia");
    this._speechTranslationConfig.speechRecognitionLanguage = this.speechRecognitionLanguage;
    this._SpeechConfig = SpeechConfig.fromSubscription("1188bc20d70a42fa8d975bea645810c9", "eastasia");
    //this._recognizer = new TranslationRecognizer(this._speechTranslationConfig, this._audioConfig);
    this._recognizer = new SpeechRecognizer(this._SpeechConfig, this._audioConfig);
    this._recognizer.recognized = this.handleRecognizedResponse.bind(this);
    this._recognizer.canceled = this.handleCanceled.bind(this);
  } 

  

  startContinuousRecognition() {
    try {
      this._recognizer.startContinuousRecognitionAsync(() => {
        console.log('Recognition started');
        this.hasRecognitionStarted = true;
      });
    }
    catch (e) {
      console.log('error', e);
    }
  }

  stopRecognition() {
    this._recognizer.stopContinuousRecognitionAsync(() => {
      this._recognizer.close();
    });
  }

  private handleRecognizingResponse(res: any) {
    
  }

  private handleRecognizedResponse(res: any) {
    
  }

  private handleCanceled(res: any) {
    console.log("error",res);
  }
}
