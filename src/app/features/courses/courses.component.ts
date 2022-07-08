import { Component } from '@angular/core'; 
import {Course} from 'src/app/models/course';

@Component({
  selector: 'app-courses',
  templateUrl:"./courses.component.html"  ,
})
export class CoursesComponent {
  courses: Course[];
  editable: boolean = false;
constructor() {
    this.courses =  [
      {
        Id: 1,
        Name: "Java",
        Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Duration: 90,  
        Created : new Date(),
        Authors: ["Dave Smith" , "Tony Ja"]
      },
      {
        Id: 2,
        Name: "JavaScript",
        Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Duration: 90,  
        Created : new Date(),
        Authors: ["Dave Smith" , "Tony Ja"]
      },
      {
        Id: 3,
        Name: "Angular",
        Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Duration: 90,  
        Created : new Date(),
        Authors: ["Dave Smith" , "Tony Ja"]
      },
      {
        Id: 4,
        Name: "ASP .Net",
        Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        Duration : 90,  
        Created : new Date(),
        Authors: ["Dave Smith" , "Tony Ja"]
      }
    ];
   } 
}