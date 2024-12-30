import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { PostInfo } from '../shared/interfaces/post-info';
import { PostSection } from '../shared/interfaces/post-section';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css',
  standalone: false
})
export class SectionsComponent implements OnInit, OnDestroy {
  searchedSection: string | undefined;
  error: HttpErrorResponse | undefined;
  postsResult: PostInfo[] = [];
  section!: PostSection | undefined;
  sub: Subscription | undefined;
  innerSub: Subscription | undefined;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.searchedSection = params['section'];

      if (this.searchedSection) {
        this.innerSub = this.postsService.getPostsBySection(this.searchedSection).subscribe((response: PostInfo[] | HttpErrorResponse) => {
          if (response instanceof HttpErrorResponse) {
            this.error = response;
            console.error(response);
          } else {
            this.postsResult = response;
            this.section = this.postsService.getPostsSections().find((section: PostSection) => section.slug === this.searchedSection);
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.innerSub!.unsubscribe();
    this.sub!.unsubscribe();
  }
}
