import { Component, Input } from '@angular/core';
import { articleType } from '../../data/data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})

export class BigCardComponent {

  constructor() {}

  @Input() article: articleType = {
    id: 0,
    pathImage: "",
    articleTitle: "",
    articleDate: "",
    smallContent: ""
  }
}
