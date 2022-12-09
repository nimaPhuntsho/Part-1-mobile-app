import { Vehicle } from 'src/app/vehicle';
import { VehicleServiceService } from './../../vehicle-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.page.html',
  styleUrls: ['./available-cars.page.scss'],
})
export class AvailableCarsPage implements OnInit {
  constructor(private data: VehicleServiceService) {}

  allCars: Vehicle[] = [];
  carsAvailable: Vehicle[] = [];
  emptyList: boolean = false;
  help: boolean = false;

  ngOnInit() {
    this.data.currentObject.subscribe((res) => (this.allCars = res));
  }

  ionViewWillEnter() {
    this.availableCars(this.allCars);

    if (this.carsAvailable.length === 0) this.emptyList = true;
  }

  availableCars(cars: Vehicle[]) {
    for (let element of cars) {
      if (element.rentalStatus === 'Available') {
        this.carsAvailable.push(element);
      }
    }
  }

  showHelp() {
    this.help = true;
  }
}
