import { NgForm } from '@angular/forms';
import { VehicleServiceService } from './../../vehicle-service.service';
import { Vehicle } from 'src/app/vehicle';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-update',
  templateUrl: './edit-update.page.html',
  styleUrls: ['./edit-update.page.scss'],
})
export class EditUpdatePage implements OnInit {
  car: Vehicle = {} as Vehicle; //store the car details passed from the list-cars page
  updatedCarDetails: Vehicle = {} as Vehicle; //using the new edit input values, object is created and stored in this variable
  updateMessage: boolean = false; // allow the update message to show on the view.
  help: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleServie: VehicleServiceService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.car = JSON.parse(params['editCarDetails']);
    });
  }

  ngOnInit() {}

  update(userInput: NgForm) {
    this.updatedCarDetails = new Vehicle(
      this.car.rego,
      this.car.make,
      this.car.model,
      this.car.year,
      this.car.odometer,
      this.car.transmission,
      this.car.bodyType,
      this.car.rentalPrice,
      this.car.rentalStatus
    );
    this.vehicleServie.changeUpdate(this.updatedCarDetails);
    console.log(this.updatedCarDetails);
    this.updateMessage = true;
    userInput.reset();
  }

  showHelp() {
    this.help = true;
  }
}
