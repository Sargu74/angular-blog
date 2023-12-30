import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ActivatedRoute } from '@angular/router';
import { articleType, Articles } from '../../data/data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  constructor(
    private route: ActivatedRoute
  ) {}

  @Input() title: string = ''
  @Input() text: string = ''
  @Input() imagePath: string = ''

  routeId: string | null = "0"
  article: articleType = {
    id: 0,
    pathImage: "",
    articleTitle: "",
    articleDate: "",
    smallContent: ""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.routeId = value.get('id')
        this.article = Articles[this.article.id]
      }
    )
  }
}
