import { Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
declare var System: any;

@Injectable()
export class StateService {
  private examples = [];
  private examplesUrl = "./.tmp/test.json";

  public selectedExample;

  constructor(private http: Http) {
  }

  init(zAnimator){
    this.loadExamples().then((data) => {
      for(var entry of data.examples){
        System.import(entry).then( loadedExample => {
          this.examples.push(loadedExample.create(zAnimator));

          this.selectExample(this.examples[0]);
        });
      }
    });
  }

  selectExample(example){
    this.selectedExample = example;
  }

  loadExamples() {
     return this.http.get(this.examplesUrl)
                .toPromise()
                .then(response => response.json())
  }

  getExamples(){
    return this.examples;
  }


}
