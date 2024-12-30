import { Component, Input } from '@angular/core';
import { PostSection } from '../../interfaces/post-section';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
  standalone: false
})
export class AsideComponent {
  public sections!: PostSection[];
  searchText: string = "";

  constructor(private postsService: PostsService, private router: Router) {
    this.sections = this.postsService.getPostsSections();
  }

  search(text: string) {
    this.router.navigate(['/search'], { queryParams: { q: text }});
  }
}
