import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() {

    

  }

  ngOnInit() {

    $( "#myPhilosophyButton" ).click(function() {

      $( "#switchUnderline" ).removeClass( "aboutme" ).addClass( "myphilosophy" );

      $( "#aboutMeSection" ).removeClass( "aboutme" ).addClass( "myphilosophy" );

      $( "#myPhilosophySection" ).removeClass( "aboutme" ).addClass( "myphilosophy" );

    });

    $( "#aboutMeButton" ).click(function() {

      $( "#switchUnderline" ).removeClass( "myphilosophy" ).addClass( "aboutme" );

      $( "#aboutMeSection" ).removeClass( "myphilosophy" ).addClass( "aboutme" );

      $( "#myPhilosophySection" ).removeClass( "myphilosophy" ).addClass( "aboutme" );

    });
    
  }

}
