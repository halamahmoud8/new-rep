import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class ReadCoursesService {
    constructor(private http: HttpClient) {
        // this.getJSON(dimensions).subscribe((data:any) => {
        //     console.log("data",data);
        // });
    }

    public getJSON(CourseCategory: string
        ): Observable<any> {
        let _queryParams: HttpParams = new HttpParams();

        if (CourseCategory != null && CourseCategory.length != 0)
            _queryParams = _queryParams.append("CourseCategory", CourseCategory);
        return this.http.get("../assets/img/courses.json" , {
            params: _queryParams
        });
    }
    






}
