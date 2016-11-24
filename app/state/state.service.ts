import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';
declare var System: any;

@Injectable()
export class StateService {
  private examples = [];
  private examplesUrl = './.tmp/test.json';

  public onNewExample = new Subject();

  public selectedExample;

  constructor(private http: Http) {
  }

  init(zAnimator){
    this.loadExamples().then((data) => {
      for(var entry of data.examples){
        var path = entry.example;
        var onLoaded = (p) => {
            return (loadedExample) => {
              if(loadedExample.create){
                var example = loadedExample.create(zAnimator);
                example.folder = entry.path;
                this.examples.push(example);
                this.selectExample(this.examples[0]);
                this.onNewExample.next(example);
              }else{
                console.warn("Example has no create method, skipping example. Path: " + p);
              };
          };
        }

        System.import(path).then(onLoaded(path));

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
