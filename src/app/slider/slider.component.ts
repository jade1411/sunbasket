import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  imgCollection: Array<object> = [
    {
      image: 'https://cdn.sunbasket.com/b335a7ad-5bc6-4c87-a901-1baf17409c84@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/b335a7ad-5bc6-4c87-a901-1baf17409c84@800.jpg',

    }, {
      image: 'https://cdn.sunbasket.com/5b21932c-a190-48cf-978d-4370c9a5eb3d@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/5b21932c-a190-48cf-978d-4370c9a5eb3d@800.jpg',
    }, {
      image: 'https://cdn.sunbasket.com/c197a0e6-95ab-48f5-89c9-b73282a2fefc@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/c197a0e6-95ab-48f5-89c9-b73282a2fefc@800.jpg',
    }, {
      image: 'https://cdn.sunbasket.com/b31be723-af77-4f48-bbf2-b9c01c5c82ef@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/b31be723-af77-4f48-bbf2-b9c01c5c82ef@800.jpg',
    }, {
      image: 'https://cdn.sunbasket.com/68d4023b-5d9d-459b-bfcd-9e8b7a6f1b21@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/68d4023b-5d9d-459b-bfcd-9e8b7a6f1b21@800.jpg',
    }, {
      image: 'https://cdn.sunbasket.com/4d0c21ba-2e63-4ed7-b7d4-15964ee1785d@800.jpg',
      thumbImage: 'https://cdn.sunbasket.com/4d0c21ba-2e63-4ed7-b7d4-15964ee1785d@800.jpg',
    }
];

}
