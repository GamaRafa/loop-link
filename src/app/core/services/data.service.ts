import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'yarnStash'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageReady = new BehaviorSubject(false)

  constructor(private storage: Storage) {
    this.init()
  }

  async init(){
    await this.storage.defineDriver(CordovaSQLiteDriver)
    await this.storage.create()
    this.storageReady.next(true)
  }

  // CREATE
  // needs to have:
  /*
  return this.storageReady.pipe(
    filter(ready => ready),
    switchMap(_ => {
      return from(this.storage.get(STORAGE_KEY)) || of []
    })
  )
  */

  // READ

  // UPDATE

  // DELETE

}
