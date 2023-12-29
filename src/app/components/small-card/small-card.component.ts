import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor() {
  }

  @Input() pathImage: string = ''
  @Input() articleTitle: string = ''
  @Input() articleDate: string = ''
}
