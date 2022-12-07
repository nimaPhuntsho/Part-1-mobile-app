import { NavigationExtras, Router } from '@angular/router';
import { VehicleServiceService } from './../../vehicle-service.service';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/vehicle';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.page.html',
  styleUrls: ['./list-cars.page.scss'],
})
export class ListCarsPage implements OnInit {
  constructor(
    private data: VehicleServiceService,
    private alertController: AlertController,
    private router: Router
  ) {}
  allCars: Vehicle[] = [];
  name: string[] = ['nima', 'funso'];
  filterTerm: string = '';
  carsAvailable: Vehicle[] = [];
  emptyList: boolean = false;
  editCar: Vehicle = {} as Vehicle;
  updatedCar: Vehicle = {} as Vehicle;
  handlerMessage: string = '';

  ngOnInit() {
    this.data.currentObject.subscribe((res) => (this.allCars = res));
    this.data.currentUpdate.subscribe((res) => (this.updatedCar = res));

    this.availableCars(this.allCars);
    this.allCars.push(this.updatedCar);
    console.log(this.updatedCar);

    if (this.allCars.length === 0) this.emptyList = true;
    console.log(this.allCars.length);
  }

  availableCars(cars: Vehicle[]) {
    for (let element of cars) {
      if (element.rentalStatus === 'Available') {
        this.carsAvailable.push(element);
      }
    }
  }

  delete(index: number) {
    this.allCars.splice(index, 1);
  }

  edit(editIndex: number) {
    this.editCar = this.allCars[editIndex];
    this.allCars.splice(editIndex, 1);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        editCarDetails: JSON.stringify(this.editCar),
      },
    };

    this.router.navigate(['list-cars/:id'], navigationExtras);
  }

  async presentAlert(index: number) {
    const alert = await this.alertController.create({
      header: 'Sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.allCars.splice(index, 1);
            if (this.allCars.length === 0) this.emptyList = true;
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
}
