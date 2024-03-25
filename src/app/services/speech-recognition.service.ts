import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition:any;

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  constructor() { }


  name = 'Angular';

  results:any;


  startListening(){

    if('webkitSpeechRecognition' in window){
      const vSearch = new webkitSpeechRecognition();
      vSearch.continous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'de-DE';
      vSearch.start();
      vSearch.onresult = (e:any) => {
        console.log(e);

        this.results = e.results[0][0].transcript;
        this.getResult();
        vSearch.stop();
      }
    } else{
    }
  }

  getResult(){
    console.log(this.results);
  }

}
