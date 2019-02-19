import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-myotherinterests',
  templateUrl: './myotherinterests.component.html',
  styleUrls: ['./myotherinterests.component.scss']
})
export class MyotherinterestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#musicButton" ).click(function() {

      $( "#musicDiv" ).removeClass( "software video gaming bartending" ).addClass( "music" );

      $( "#softwareDiv" ).removeClass( "software video gaming bartending" ).addClass( "music" );

      $( "#videoDiv" ).removeClass( "software video gaming bartending" ).addClass( "music" );

      $( "#gamingDiv" ).removeClass( "software video gaming bartending" ).addClass( "music" );

      $( "#bartendingDiv" ).removeClass( "software video gaming bartending" ).addClass( "music" );

      $( "#interestsButtonsUnderline" ).removeClass( "software video gaming bartending" ).addClass( "music" );

    });

    $( "#softwareButton" ).click(function() {

      $( "#musicDiv" ).removeClass( "music video gaming bartending" ).addClass( "software" );

      $( "#softwareDiv" ).removeClass( "music video gaming bartending" ).addClass( "software" );

      $( "#videoDiv" ).removeClass( "music video gaming bartending" ).addClass( "software" );

      $( "#gamingDiv" ).removeClass( "music video gaming bartending" ).addClass( "software" );

      $( "#bartendingDiv" ).removeClass( "music video gaming bartending" ).addClass( "software" );

      $( "#interestsButtonsUnderline" ).removeClass( "music video gaming bartending" ).addClass( "software" );

    });

    $( "#videoButton" ).click(function() {

      $( "#musicDiv" ).removeClass( "music software gaming bartending" ).addClass( "video" );

      $( "#softwareDiv" ).removeClass( "music software gaming bartending" ).addClass( "video" );

      $( "#videoDiv" ).removeClass( "music software gaming bartending" ).addClass( "video" );

      $( "#gamingDiv" ).removeClass( "music software gaming bartending" ).addClass( "video" );

      $( "#bartendingDiv" ).removeClass( "music software gaming bartending" ).addClass( "video" );

      $( "#interestsButtonsUnderline" ).removeClass( "music software gaming bartending" ).addClass( "video" );

    });

    $( "#gamingButton" ).click(function() {

      $( "#musicDiv" ).removeClass( "music software video bartending" ).addClass( "gaming" );

      $( "#softwareDiv" ).removeClass( "music software video bartending" ).addClass( "gaming" );

      $( "#videoDiv" ).removeClass( "music software video bartending" ).addClass( "gaming" );

      $( "#gamingDiv" ).removeClass( "music software video bartending" ).addClass( "gaming" );

      $( "#bartendingDiv" ).removeClass( "music software video bartending" ).addClass( "gaming" );

      $( "#interestsButtonsUnderline" ).removeClass( "music software video bartending" ).addClass( "gaming" );

    });

    $( "#bartendingButton" ).click(function() {

      $( "#musicDiv" ).removeClass( "music software video gaming" ).addClass( "bartending" );

      $( "#softwareDiv" ).removeClass( "music software video gaming" ).addClass( "bartending" );

      $( "#videoDiv" ).removeClass( "music software video gaming" ).addClass( "bartending" );

      $( "#gamingDiv" ).removeClass( "music software video gaming" ).addClass( "bartending" );

      $( "#bartendingDiv" ).removeClass( "music software video gaming" ).addClass( "bartending" );

      $( "#interestsButtonsUnderline" ).removeClass( "music software video gaming" ).addClass( "bartending" );

    });

  }

}
