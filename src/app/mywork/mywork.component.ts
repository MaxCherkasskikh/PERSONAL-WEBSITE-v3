import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#ldmImageContainer" ).click(function() {

      $( "#ldmImageContainer" ).toggleClass( "large small" );

      $( "#ldmImage" ).toggleClass( "larger smaller" );

    });

    $( "#instafamousImageContainer" ).click(function() {

      $( "#instafamousImageContainer" ).toggleClass( "large small" );

      $( "#instafamousImage" ).toggleClass( "larger smaller" );

    });

    $( "#academyImageContainer" ).click(function() {

      $( "#academyImageContainer" ).toggleClass( "large small" );

      $( "#academyImage" ).toggleClass( "larger smaller" );

    });

    $( "#gameonImageContainer" ).click(function() {

      $( "#gameonImageContainer" ).toggleClass( "large small" );

      $( "#gameonImage" ).toggleClass( "larger smaller" );

    });

  }

}
