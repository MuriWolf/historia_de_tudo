import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: false
})
export class CardComponent {
  @Input({ required: true }) title = 'Título';
  @Input({ required: true }) preview = 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
  @Input({ required: true }) imgSrc = '';
  @Input({ required: true }) imgAlt = '';
  @Input({ required: true }) postUrl = '';
}
