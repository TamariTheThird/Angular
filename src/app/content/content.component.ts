import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  Products = [
    {
      title: 'პროდუქცია 1',
      price: 480,
      weight: [500, 1000],
      discount: true,
      gift: true,
      images: [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
      ],
    },
    {
      title: 'პროდუქცია 2',
      price: 200,
      weight: [1500, 900],
      discount: true,
      gift: false,
      images: [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
      ],
    },
    {
      title: 'პროდუქცია 3',
      price: 150,
      weight: [300, 500],
      discount: false,
      gift: true,
      images: [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
      ],
    },
    {
      title: 'პროდუქცია 4',
      price: 100,
      weight: [500, 1000],
      discount: false,
      gift: false,
      images: [
        'assets/images/img1.jpeg',
        'assets/images/img2.jpeg',
        'assets/images/img3.jpeg',
      ],
    },
  ];
}
