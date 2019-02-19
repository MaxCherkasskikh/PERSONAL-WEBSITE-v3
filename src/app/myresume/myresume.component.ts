import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-myresume',
  templateUrl: './myresume.component.html',
  styleUrls: ['./myresume.component.scss']
})
export class MyresumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#page1Button" ).click(function() {

      $( "#resumeDiv1" ).removeClass( "pagetwo pagethree" ).addClass( "pageone" );

      $( "#resumeDiv2" ).removeClass( "pagetwo pagethree" ).addClass( "pageone" );

      $( "#resumeDiv3" ).removeClass( "pagetwo pagethree" ).addClass( "pageone" );

      $( "#resumePageButtonUnderline" ).removeClass( "pagetwo pagethree" ).addClass( "pageone" );

    });

    $( "#page2Button" ).click(function() {

      $( "#resumeDiv1" ).removeClass( "pageone pagethree" ).addClass( "pagetwo" );

      $( "#resumeDiv2" ).removeClass( "pageone pagethree" ).addClass( "pagetwo" );

      $( "#resumeDiv3" ).removeClass( "pageone pagethree" ).addClass( "pagetwo" );

      $( "#resumePageButtonUnderline" ).removeClass( "pageone pagethree" ).addClass( "pagetwo" );

    });

    $( "#page3Button" ).click(function() {

      $( "#resumeDiv1" ).removeClass( "pageone pagetwo" ).addClass( "pagethree" );

      $( "#resumeDiv2" ).removeClass( "pageone pagetwo" ).addClass( "pagethree" );

      $( "#resumeDiv3" ).removeClass( "pageone pagetwo" ).addClass( "pagethree" );

      $( "#resumePageButtonUnderline" ).removeClass( "pageone pagetwo" ).addClass( "pagethree" );

    });

    $( "#pageEnlargeButton1" ).click(function() {

      $( "#resumeLink1" ).toggleClass( "largeresume smallresume" );

    });

    $( "#pageEnlargeButton2" ).click(function() {

      $( "#resumeLink2" ).toggleClass( "largeresume smallresume" );

    });

    $( "#pageEnlargeButton3" ).click(function() {

      $( "#resumeLink3" ).toggleClass( "largeresume smallresume" );

    });

  }

}
