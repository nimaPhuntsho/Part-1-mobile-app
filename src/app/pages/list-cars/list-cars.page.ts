import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
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
  allCars: Vehicle[] = [];
  filterTerm: string = '';
  carsAvailable: Vehicle[] = [];
  emptyList: boolean = false;
  editCar: Vehicle = {} as Vehicle;
  updatedCar: Vehicle = {} as Vehicle; //store the edited car object passed from the edit page
  handlerMessage: string = '';
  unique: Vehicle[] = [];
  help: boolean = false;

  constructor(
    private data: VehicleServiceService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.data.currentUpdate.subscribe((res) => (this.updatedCar = res));
    this.data.currentObject.subscribe((res) => (this.allCars = res));
    this.availableCars(this.allCars);
  }

  ionViewWillEnter() {
    if (Object.keys(this.updatedCar).length !== 0) {
      this.allCars.push(this.updatedCar);
    }

    if (this.allCars.length === 0) this.emptyList = true;
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
    this.router.navigate(['edit-update'], navigationExtras);
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

  displayCars() {
    this.data.currentUpdate.subscribe((res) => (this.updatedCar = res));
    if (Object.keys(this.updatedCar).length !== 0) {
      this.allCars.push(this.updatedCar);
    }
  }

  showHelp() {
    this.help = true;
  }
}
