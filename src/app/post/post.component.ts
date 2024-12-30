import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilesService } from '../shared/services/files.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  standalone: false
})
export class PostComponent implements OnInit, OnDestroy {
  postName: string | undefined;
  postUrl: string | undefined;
  sub: Subscription | undefined;
  innerSub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private filesService: FilesService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.postName = params['id'];

      if (this.postName) {
        this.postUrl = this.postName + '.md';

        this.innerSub = this.filesService.fileExists(this.postUrl).subscribe((response: boolean | HttpErrorResponse) => {
          if (response instanceof HttpErrorResponse) {
            if (response.status === 404) {
              this.router.navigate(['/notFound'])
              console.log(response);
            }
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.innerSub!.unsubscribe();
    this.sub!.unsubscribe();
  }
}
