/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris',
      'https://thumbs.dreamstime.com/z/amour-toujours-2273346.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Place',
      'Not your avarage city trip!',
      'https://i.pinimg.com/736x/a4/e8/95/a4e8954739cc0b4f452688e0d4372490--san-francisco-shadows.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }

  getPlace(id: string){
    return {...this._places.find(
      p=> p.id === id
    )};
  }
}
