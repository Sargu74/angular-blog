import { Component, OnInit } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { NgFor } from '@angular/common';
import { Articles } from '../../data/data';

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
export class HomeComponent implements OnInit {
  constructor() {}

  sideArticles = Articles
  ngOnInit(): void {
    this.sideArticles = Articles
  }


  bigArticle = this.sideArticles.shift()
  mainArticle = this.bigArticle || {
    id: 0,
    pathImage: "",
    articleTitle: "",
    articleDate: "",
    smallContent: ""}
}
