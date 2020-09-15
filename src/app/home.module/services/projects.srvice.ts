import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectsService {
    private apiUrl: string = 'https://api.github.com/search/repositories';

    constructor(private httpClient: HttpClient) { }

    public getProjects(keyWord): Observable<any>{
        return this.httpClient.get(`${this.apiUrl}?q=${keyWord}`).pipe(map((result: any) => result.items));
    }

}