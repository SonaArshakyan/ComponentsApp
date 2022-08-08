import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Author } from '../models/author';
import { AuthorsService } from './author.service';
@Injectable({
    providedIn: 'root'
  })

export class AuthorsStoreService {
    
    readonly isLoading$$ = new BehaviorSubject<boolean>(false);
    readonly authors$$:BehaviorSubject<Author[]>  = new BehaviorSubject([] as Author[]);
    public authors$ : Observable<Author[]> = this.authors$$.asObservable();
    public isLoading$ : Observable<boolean> = this.isLoading$$.asObservable();
    private authors:Author [] ;
    subscription: any;

    constructor(private authorsService: AuthorsService)
     {
        this.authors =[];
        this.authors$$.next(this.authors); 
        this.isLoading$$.next(false);

     }
     ngOnInit() {
        this.subscription = this.getAllAuthors().subscribe((data) => {
            this.authors = data;
          });
          this.authors$$.next(this.subscription);
          this.isLoading$$.next(true);
      }
      ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    getAllAuthors(): Observable<any> {
        return this.authorsService.getAllAuthors();
    }

    getAuthorById( id: number): Observable<Author> {
      return this.authorsService.getAuthor(id);
    }
  }