import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  constructor() {
  }

  @Input() pathImage: string = ''
  @Input() articleTitle: string = ''
  @Input() articleDate: string = ''
  @Input() articleId: number = 0
}
