import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'MAX CHERKASSKIKH';

  ngOnInit() {

    $( "#navMenuButton" ).click(function() {

      $( "#navMenuButton" ).toggleClass( "closed open" );

      $( "#navMenuContainer" ).toggleClass( "closed open" );

      $( "#navMenuContainer" ).removeClass( "initial" );

      $( "#navMenuContainer" ).addClass( "secondary" );
      
      $( "#menuLink1" ).toggleClass( "closed open" );

      $( "#menuLink2" ).toggleClass( "closed open" );

      $( "#menuLink3" ).toggleClass( "closed open" );

      $( "#menuLink4" ).toggleClass( "closed open" );

      $( "#menuLink5" ).toggleClass( "closed open" );

      $( "#menuLink6" ).toggleClass( "closed open" );

      $( "#menuLink7" ).toggleClass( "closed open" );

      $( "#menuLink8" ).toggleClass( "closed open" );

      $( "#menuLink9" ).toggleClass( "closed open" );

      $( "#menuLink10" ).toggleClass( "closed open" );

      $( "#menuLink11" ).toggleClass( "closed open" );

      $( "#menuLink12" ).toggleClass( "closed open" );

      $( "#mainHeadingContainer" ).toggleClass( "open closed" );

      $( "#aboutMeSwitchContainer" ).toggleClass( "open closed" );

      $( "#socialMediaDiv" ).toggleClass( "open closed" );

      $( "#overallSkillsDiv" ).toggleClass( "open closed" );

      $( "#myWorkDiv" ).toggleClass( "open closed" );

      $( "#mainResumeContainer" ).toggleClass( "open closed" );

      $( "#findMeInfoDiv" ).toggleClass( "open closed" );

      $( "#myTutorialsDiv" ).toggleClass( "open closed" );

      $( "#myOtherInterestsDiv" ).toggleClass( "open closed" );

      $( "#myServicesDiv" ).toggleClass( "open closed" );

      $( "#myPricingInfoDiv" ).toggleClass( "open closed" );

      $( "#myFaqInfoDiv" ).toggleClass( "open closed" );

      $( "#contactFormDiv" ).toggleClass( "open closed" );

    });

    $( ".menuLinks" ).click(function() {

      $( "#navMenuButton" ).removeClass( "open" ).addClass( "closed" );

      $( "#navMenuContainer" ).removeClass( "open" ).addClass( "closed" );

      $( "#navMenuContainer" ).removeClass( "secondary" ).addClass( "initial" );
      
      $( "#menuLink1" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink2" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink3" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink4" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink5" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink6" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink7" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink8" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink9" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink10" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink11" ).removeClass( "open" ).addClass( "closed" );

      $( "#menuLink12" ).removeClass( "open" ).addClass( "closed" );

      $( "#mainHeadingContainer" ).removeClass( "closed" ).addClass( "open" );

    });

    $( "#nameLogo" ).click(function() {

      $( "#navMenuContainer" ).addClass( "initial" );

      $( "#navMenuContainer" ).removeClass( "secondary" );

    });

    $( "#learnMoreButton" ).click(function() {

      $( "#navMenuContainer" ).addClass( "initial" );

      $( "#navMenuContainer" ).removeClass( "secondary" );

    });

    $( "#needWebsiteButton" ).click(function() {

      $( "#navMenuContainer" ).addClass( "initial" );

      $( "#navMenuContainer" ).removeClass( "secondary" );

    });

  };

};