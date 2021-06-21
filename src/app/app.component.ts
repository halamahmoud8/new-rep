import { Component } from '@angular/core';
import { ReadCoursesService } from './eduction.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'MyAppMedical';
  constructor(
    private appSettingsService : ReadCoursesService 
) { }
courseDetails:any[]=[]
res:any
filterNameHint: any;
filterNameAction: any;
filterForDetails: any = [];
filterName:any
onClickFilter(event:any) {
  console.log('event', event);
  console.log('event-id', event.target.id);
  console.log('event-checked', event.srcElement.checked);

   this.updateFilter('CourseCategory', event);
}
updateFilter(filterName:string, event:any) {
  console.log(filterName, event, "//*");
  this.filterNameHint = filterName;
  this.filterNameAction = event.target.id
  let selectedDimensions: string[] = this.filterName;
  if (selectedDimensions == null) selectedDimensions = [];

  if (event.srcElement.checked) {

    selectedDimensions.push((event.target.id as string).split('_')[1]);
  } else {
    for (let i = 0; i < selectedDimensions.length; i++)
      if (selectedDimensions[i] == (event.target.id as string).split('_')[1]) {
        selectedDimensions.splice(i, 1);
      }
  }

  // this.filterName.reset(selectedDimensions);



  console.log(" filter by :", filterName, "is = ", event.target.id)
  this.filterForDetails.push({
    filterName: filterName,
    event: event.target.id
  })
  console.log("hala",this.filterForDetails)
}
// formData: FormGroup = this.fb.group({
//   courseDuration: null,
//   courseCategory: null,
 
 
// });
ngOnInit(){
 this.getAllCourses()
 this.filterName.valueChanges.subscribe((data:any) => this.getAllCourses()
//  console.log(data)
 );

=======
  title = 'MyTask';
>>>>>>> a3aa39e8c9e5d7388570e8bff27fab6ef6ed9a77
}
getAllCourses(){
  this.appSettingsService.getJSON(this.filterName).subscribe(data => {
    this.res=data
       // console.log("services",data.courseLevel);
       this.courseDetails=[]
       this.filterName=data.CourseCategory
       for(let i=0; i<data.length;i++){
       this.courseDetails.push({
         courseImg:data[i].CourseImg,
         courseLevel:data[i].courseLevel,
         courseDuration:data[i].CourseDuration,
         coursePrice:data[i].CoursePrice,
         availableSeats:data[i].AvailableSeats,
         courseName:data[i].CourseName
       })}
       console.log("servicesBox",this.courseDetails);

   });
}
}

