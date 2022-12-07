import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleServiceService {
  intialObject: Vehicle[] = [];
  private objectSource = new BehaviorSubject<Vehicle[]>(this.intialObject);
  currentObject = this.objectSource.asObservable();

  intialUpdate: Vehicle = {} as Vehicle;
  private updateSource = new BehaviorSubject<Vehicle>(this.intialUpdate);
  currentUpdate = this.updateSource.asObservable();
  constructor() {}

  changeObject(cars: Vehicle[]) {
    this.objectSource.next(cars);
  }

  changeUpdate(cars: Vehicle) {
    this.updateSource.next(cars);
  }
}
