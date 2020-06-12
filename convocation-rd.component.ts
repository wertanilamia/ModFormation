import { Component, OnInit,Input } from '@angular/core';
import { ConvocationComponent } from '../convocation/convocation.component';
import { ConvocationServiceService } from '../service/convocation-service.service';

@Component({
  selector: 'app-convocation-rd',
  templateUrl: './convocation-rd.component.html',
  styleUrls: ['./convocation-rd.component.css']
})
export class ConvocationRDComponent implements OnInit {
listConvocationRecus:ConvocationComponent;

  constructor(private convocat:ConvocationComponent,
    private convocationservice:ConvocationServiceService) { }
  
  ngOnInit(): void {
  
  }

}
