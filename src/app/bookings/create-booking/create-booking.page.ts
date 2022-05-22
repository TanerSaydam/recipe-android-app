import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.page.html',
  styleUrls: ['./create-booking.page.scss'],
})
export class CreateBookingPage implements OnInit {

  @Input() selectedPlace: Place;
  constructor(
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace(){
    this.modalCtrl.dismiss({
      message: 'This is a dummy message'
    }, 'confirm');
  }

}
