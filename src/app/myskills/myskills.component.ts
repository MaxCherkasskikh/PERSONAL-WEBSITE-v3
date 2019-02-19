import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#specificSkillsButton" ).click(function() {

      $( "#skillsSwitchUnderline" ).removeClass( "generalskills" ).addClass( "specificskills" );

      $( "#theGeneralSkillsContainer" ).removeClass( "generalskills" ).addClass( "specificskills" );

      $( "#theSpecificSkillsContainer" ).removeClass( "generalskills" ).addClass( "specificskills" );

    });

    $( "#generalSkillsButton" ).click(function() {

      $( "#skillsSwitchUnderline" ).removeClass( "specificskills" ).addClass( "generalskills" );

      $( "#theGeneralSkillsContainer" ).removeClass( "specificskills" ).addClass( "generalskills" );

      $( "#theSpecificSkillsContainer" ).removeClass( "specificskills" ).addClass( "generalskills" );

    });

    $( "#theBackEndButton" ).click(function() {

      $( "#frontBackEndSwitchUnderline" ).removeClass( "frontend" ).addClass( "backend" );

      $( "#theFrontEndDiv" ).removeClass( "frontend" ).addClass( "backend" );

      $( "#theBackEndDiv" ).removeClass( "frontend" ).addClass( "backend" );

    });

    $( "#theFrontEndButton" ).click(function() {

      $( "#frontBackEndSwitchUnderline" ).removeClass( "backend" ).addClass( "frontend" );

      $( "#theFrontEndDiv" ).removeClass( "backend" ).addClass( "frontend" );

      $( "#theBackEndDiv" ).removeClass( "backend" ).addClass( "frontend" );

    });

  }

}
