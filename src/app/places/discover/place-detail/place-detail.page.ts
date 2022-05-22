import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingPage } from 'src/app/bookings/create-booking/create-booking.page';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((res)=>{
      if (!res.has('placeId')) {
        this.navCtrl.navigateBack('/discover');
        return;
      }
      this.place = this.placesService.getPlace(res.get('placeId'));
    });
  }

  onBookPlace(){
    //this.router.navigate(['/places/discover']);
    //this.navCtrl.navigateBack('/places/discover');
    //this.navCtrl.pop();
    this.modalCtrl.create({
      component: CreateBookingPage,
      componentProps: {
        selectedPlace: this.place
      }
    }).then(m=> {
      m.present();
      return m.onDidDismiss();
    })
    .then(r=> {
      console.log(r.data, r.role);
      if (r.data === 'confirm') {
        console.log('Booked');
      }
    });
  }
}
