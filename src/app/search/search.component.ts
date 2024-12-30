import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../shared/services/posts.service';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PostInfo } from '../shared/interfaces/post-info';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  standalone: false
})
export class SearchComponent implements OnInit, OnDestroy {
  searchedText: string = "";
  searchText: string = "";
  error: HttpErrorResponse | undefined;
  postsResult: PostInfo[] = [];
  sub: Subscription | undefined;
  innerSub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams
      .subscribe(params => {
        this.searchedText = params['q'];
        if (this.searchedText) {
          this.innerSub = this.postsService.getPostsBySearchText(this.searchedText).subscribe((response: PostInfo[] | HttpErrorResponse) => {
            if (response instanceof HttpErrorResponse) {
              this.error = response;
              console.error(response);
            } else {
              this.postsResult = response;
              console.log(this.postsResult);
            }
          })
        }
      })
  }

  search(text: string) {
    this.router.navigate(['/search'], { queryParams: { q: text }});
  }

  ngOnDestroy(): void {
    this.innerSub!.unsubscribe();
    this.sub!.unsubscribe();
  }
}
