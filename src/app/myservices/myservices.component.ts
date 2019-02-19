import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.scss']
})
export class MyservicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#servicesBackEndButton" ).click(function() {

      $( "#servicesFrontEndDiv" ).removeClass( "servicesfrontend" ).addClass( "servicesbackend" );

      $( "#servicesBackEndDiv" ).removeClass( "servicesfrontend" ).addClass( "servicesbackend" );

      $( "#servicesButtonsUnderline" ).removeClass( "servicesfrontend" ).addClass( "servicesbackend" );

    });

    $( "#servicesFrontEndButton" ).click(function() {

      $( "#servicesFrontEndDiv" ).removeClass( "servicesbackend" ).addClass( "servicesfrontend" );

      $( "#servicesBackEndDiv" ).removeClass( "servicesbackend" ).addClass( "servicesfrontend" );

      $( "#servicesButtonsUnderline" ).removeClass( "servicesbackend" ).addClass( "servicesfrontend" );

    });

  }

}
