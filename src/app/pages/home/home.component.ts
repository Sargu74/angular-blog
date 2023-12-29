import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

  articles = [
    {
      pathImage: "../../../assets/images/firstCardImage.svg",
      articleTitle: "Morbi eget ante libero. Vestibulum eu lectus ipsum. Praesent egestas nulla vel nunc blandit.",
      articleDate: "March 27, 2022"
    },
    {
      pathImage: "../../../assets/images/secondCardImage.svg",
      articleTitle: "Curabitur sem tortor, euismod a dui id, congue varius leo.",
      articleDate: "February 16, 2022"
    },
    {
      pathImage: "../../../assets/images/thirdCardImage.svg",
      articleTitle: "Nunc consequat fermentum augue ultricies euismod. Nulla et lectus semper erat ultricies semper in suscipit odio.",
      articleDate: "January 10, 2022"
    },
  ]

}
