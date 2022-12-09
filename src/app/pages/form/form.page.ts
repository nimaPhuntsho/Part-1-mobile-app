import { VehicleServiceService } from './../../vehicle-service.service';
import { Vehicle } from 'src/app/vehicle';
import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  constructor(private data: VehicleServiceService) {}
  rego: string = '';
  make: string = '';
  model: string = '';
  year: string = '';
  odometer: string = '';
  transmission: string = '';
  bodyType: string = '';
  price: string = '';
  rentalStatus: string = '';
  submitMessage: boolean = false;
  help: boolean = false;

  allCars: Vehicle[] = [];

  ngOnInit() {}

  submit(userInput: NgForm) {
    let userModel = new Vehicle(
      this.rego,
      this.make,
      this.model,
      this.year,
      this.odometer,
      this.transmission,
      this.bodyType,
      this.price,
      this.rentalStatus
    );
    this.allCars.push(userModel);
    this.newCars(this.allCars);
    userInput.reset();
    this.submitMessage = true;
  }

  newCars(cars: Vehicle[]) {
    this.data.changeObject(cars);
  }

  showHelp() {
    this.help = true;
  }
}
