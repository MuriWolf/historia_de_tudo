import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilesService } from '../shared/services/files.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  standalone: false
})
export class PostComponent implements OnInit {
  postName: string | undefined;
  postUrl: string | undefined;

  constructor(private route: ActivatedRoute, private filesService: FilesService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postName = params['id'];

      if (this.postName) {
        this.postUrl = this.postName + '.md';

        this.filesService.fileExists(this.postUrl).subscribe((response: boolean | HttpErrorResponse) => {
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
}
