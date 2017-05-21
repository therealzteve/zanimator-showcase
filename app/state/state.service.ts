import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';
declare var System: any;

@Injectable()
export class StateService {
  private examples = [];
  private examplesUrl = './.tmp/test.json';
  private pendingSelectedExampleName;
  private pendingSelectedExampleFolder;

  public onNewExample = new Subject();
  public onCanvasChange = new Subject();

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
                  this.tryToSelectExample(example);
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

  selectExampleByName(folder, name){
    this.pendingSelectedExampleName = name;
    this.pendingSelectedExampleFolder = folder;

    for(var example of this.examples){
      if(this.tryToSelectExample(example)){
        return;
      }
    }
  }

  loadExamples() {
     return this.http.get(this.examplesUrl)
                .toPromise()
                .then(response => response.json())
  }

  getExamples(){
    return this.examples;
  }

  changeCanvas(width, height){
    this.onCanvasChange.next({width: width, height: height});
  }

  private tryToSelectExample(example){
    if(this.pendingSelectedExampleName == ''){
      return false;
    }
    if(this.arraysEqual(this.pendingSelectedExampleFolder, example.folder) && example.name === this.pendingSelectedExampleName){
      this.selectExample(example);
      this.pendingSelectedExampleName = '';
      this.pendingSelectedExampleFolder = [];
      return true;
    }
  }

  private arraysEqual(arr1, arr2) {
      if(arr1.length !== arr2.length)
          return false;
      for(var i = arr1.length; i--;) {
          if(arr1[i] !== arr2[i])
              return false;
      }

      return true;
  }
}
