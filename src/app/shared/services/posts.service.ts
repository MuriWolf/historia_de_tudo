import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { PostInfo } from '../interfaces/post-info';
import { PostSection } from '../interfaces/post-section';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  URL = 'posts.json';

  constructor(private http: HttpClient) { }

  loadPostsInfo(): Observable<PostInfo[]> {
    return this.http.get<PostInfo>(this.URL)
      .pipe(
        map(response => response || []),
        catchError(error => of(error))
      )
  }

  getPostsBySection(searchedSection: string): Observable<PostInfo[]> {
    return this.http.get<PostInfo[]>(this.URL).
      pipe(
        map((posts: PostInfo[]) => {
          return posts.filter((post: PostInfo) => post.section === searchedSection);
        }),
        catchError(error => of(error))
      )
  }

  getPostsBySearchText(searchText: string): Observable<PostInfo[]> {
    searchText = searchText.trim().toLowerCase();

    return this.http.get<PostInfo[]>(this.URL).
      pipe(
        map((posts: PostInfo[]) => {
          return posts.filter((post: PostInfo) =>
            post.section === searchText ||
            post.title.toLowerCase().includes(searchText) ||
            post.preview.includes(searchText));
        }),
        catchError(error => of(error))
      );
  }

  getPostsSections(): PostSection[] {
    return [
      { "name": "Idade Antiga", "url": "/sections/idade-antiga", "slug": "idade-antiga" },
      { "name": "Idade Média", "url": " /sections/idade-media", "slug": "idade-media" },
      { "name": "Folclore Brasileiro", "url": "/sections/folclore-brasileiro", "slug": "folclore-brasileiro" },
      { "name": "Arte", "url": "/sections/arte", "slug": "arte" },
      { "name": "Biografias", "url": "/sections/biografias", "slug": "biografias" },
      { "name": "Comidas e Bebidas", "url": "/sections/comidas-e-bebidas", "slug": "comidas-e-bebidas" },
      { "name": "Curiosidades", "url": "/sections/curiosidades", "slug": "curiosidades" },
      { "name": "Datas Comemorativas", "url": "/sections/datas-comemorativas", "slug": "datas-comemorativas" },
      { "name": "Drogas", "url": "/sections/drogas", "slug": "drogas" },
      { "name": "Economia", "url": "/sections/economia", "slug": "economia" },
      { "name": "Educação", "url": "/sections/educacao", "slug": "educacao" },
      { "name": "Eletrodomésticos", "url": "/sections/eletrodomesticos", "slug": "eletrodomesticos" },
      { "name": "Eletrônicos", "url": "/sections/eletronicos", "slug": "eletronicos" },
      { "name": "Esportes", "url": "/sections/esportes", "slug": "esportes" },
      { "name": "Expressões Populares", "url": "/sections/expressoes-populares", "slug": "expressoes-populares" },
      { "name": "Games", "url": "/sections/games", "slug": "games" },
      { "name": "Higiene", "url": "/sections/higiene", "slug": "higiene" },
      { "name": "História do Brasil", "url": "/sections/historia-do-brasil", "slug": "historia-do-brasil" },
      { "name": "Idade Moderna", "url": " /sections/idade-moderna", "slug": "idade-moderna" },
      { "name": "Idade Contemporânea", "url": " /sections/idade-contemporanea", "slug": "idade-contemporanea" },
      { "name": "Informática", "url": " /sections/informatica", "slug": "informatica" },
      { "name": "Instrumentos Musicais", "url": " /sections/instrumentos-musicais", "slug": "instrumentos-musicais" },
      { "name": "Meios de Transporte", "url": " /sections/meios-de-transporte", "slug": "meios-de-transporte" },
      { "name": "Objetos", "url": " /sections/objetos", "slug": "objetos" },
      { "name": "Pré-História", "url": " /sections/pre-historia", "slug": "pre-historia" }
    ];
  }
}
