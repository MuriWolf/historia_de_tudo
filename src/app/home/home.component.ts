import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PostInfo } from '../shared/interfaces/post-info';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  postsInfo: PostInfo[] = [];
  error: HttpErrorResponse | undefined;
  sub: Subscription | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.sub = this.postsService.loadPostsInfo().subscribe((response: PostInfo[] | HttpErrorResponse) => {
      if (response instanceof HttpErrorResponse) {
        this.error = response;
        console.error(response);
      } else {
        this.postsInfo = response;
      }
    })
  }

  ngOnDestroy(): void {
    this.sub!.unsubscribe();
  }
}
