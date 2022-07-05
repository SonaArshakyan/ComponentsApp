import { Component , Input  } from '@angular/core'; 
import {Course} from 'src/app/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html' ,
})
export class CourseComponent {
    @Input() course : any;
    @Input() editable: boolean = false;
}
