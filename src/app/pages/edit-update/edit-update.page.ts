import { VehicleServiceService } from './../../vehicle-service.service';
import { Vehicle } from 'src/app/vehicle';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-update',
  templateUrl: './edit-update.page.html',
  styleUrls: ['./edit-update.page.scss'],
})
export class EditUpdatePage implements OnInit {
  car: Vehicle = {} as Vehicle;
  updatedCarDetails: Vehicle = {} as Vehicle;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleServie: VehicleServiceService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.car = JSON.parse(params['editCarDetails']);
      console.log(this.car);
    });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['list-cars']);
  }

  update() {
    this.updatedCarDetails = new Vehicle(
      this.car.rego,
      this.car.make,
      this.car.model,
      this.car.year,
      this.car.transmission,
      this.car.bodyType,
      this.car.rentalPrice,
      this.car.odometer,
      this.car.rentalStatus
    );
    this.vehicleServie.changeUpdate(this.updatedCarDetails);
  }
}
