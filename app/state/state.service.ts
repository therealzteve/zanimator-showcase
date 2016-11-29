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
        var onLoaded = (entry) => {
            return (loadedExample) => {
              if(loadedExample.create){
                try {
                  var example = loadedExample.create(zAnimator);
                  example.folder = entry.path;
                  example.visible = true;
                  this.examples.push(example);
                  this.selectExample(this.examples[0]);
                  this.onNewExample.next(example);
                } catch (e) {
                  console.warn(entry.example + " caused an error in the create method: ");
                  console.warn(e);
                  console.warn(e.stack);
                };
              }else{
                console.warn("Example has no create method, skipping example. Path: " + entry.example);
              };
          };
        }

        System.import(entry.example).then(onLoaded(entry));

      }
    });
  }

  selectExample(example){
    if(this.selectedExample){
      this.selectedExample.stop();
    }
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
