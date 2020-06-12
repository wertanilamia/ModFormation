import { Component, OnInit } from '@angular/core';
import { PlanFormation } from '../PlanFormation';
import { FicheBesoinsComponent } from '../fiche-besoins/fiche-besoins.component';
import { PlanformationServiceService } from '../service/planformation-service.service';
import { fiche } from '../fiche';
import { FicheBesoinsService } from '../service/fiche-besoins.service';

@Component({
  selector: 'app-plan-formation',
  templateUrl: './plan-formation.component.html',
  styleUrls: ['./plan-formation.component.css']
})
export class PlanFormationComponent implements OnInit {
listplan:any;
p: PlanFormation;
listFicheRecus: any;
fr:fiche
  constructor(private planformationservice : PlanformationServiceService, private fichebesoins: FicheBesoinsService ) { }

  ngOnInit(): void {
    this.planformationservice.getPlanFormation().subscribe(data=>{
      console.log(data);
      this.listplan=data;
    }, err=>{
      console.log((err));
      
    })
  }


}
