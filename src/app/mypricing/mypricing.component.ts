import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mypricing',
  templateUrl: './mypricing.component.html',
  styleUrls: ['./mypricing.component.scss']
})
export class MypricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $( "#generalPricingButton" ).click(function() {

      $( "#specificPricingDiv" ).removeClass( "specificpricing" );

      $( "#specificPricingDiv" ).addClass( "generalpricing" );

      $( "#generalPricingDiv" ).removeClass( "specificpricing" );

      $( "#generalPricingDiv" ).addClass( "generalpricing" );

      $( "#pricingButtonUnderline" ).removeClass( "specificpricing" );

      $( "#pricingButtonUnderline" ).addClass( "generalpricing" );

    });

    $( "#specificPricingButton" ).click(function() {

      $( "#specificPricingDiv" ).removeClass( "generalpricing" );

      $( "#specificPricingDiv" ).addClass( "specificpricing" );

      $( "#generalPricingDiv" ).removeClass( "generalpricing" );

      $( "#generalPricingDiv" ).addClass( "specificpricing" );

      $( "#pricingButtonUnderline" ).removeClass( "generalpricing" );

      $( "#pricingButtonUnderline" ).addClass( "specificpricing" );

    });

    $( "#specificPricingWebDesignButton" ).click(function() {

      $( "#specificPricingWebDesignDiv" ).removeClass( "pricingwebdevelopment pricingbranding pricingwordpress" );

      $( "#specificPricingWebDesignDiv" ).addClass( "pricingwebdesign" );

      $( "#specificPricingWebDevelopmentDiv" ).removeClass( "pricingwebdevelopment pricingbranding pricingwordpress" );

      $( "#specificPricingWebDevelopmentDiv" ).addClass( "pricingwebdesign" );

      $( "#specificPricingBrandingDiv" ).removeClass( "pricingwebdevelopment pricingbranding pricingwordpress" );

      $( "#specificPricingBrandingDiv" ).addClass( "pricingwebdesign" );

      $( "#specificPricingWordpressDiv" ).removeClass( "pricingwebdevelopment pricingbranding pricingwordpress" );

      $( "#specificPricingWordpressDiv" ).addClass( "pricingwebdesign" );

      $( "#specificPricingButtonUnderline" ).removeClass( "pricingwebdevelopment pricingbranding pricingwordpress" );

      $( "#specificPricingButtonUnderline" ).addClass( "pricingwebdesign" );

    });

    $( "#specificPricingWebDevelopmentButton" ).click(function() {

      $( "#specificPricingWebDesignDiv" ).removeClass( "pricingwebdesign pricingbranding pricingwordpress" );

      $( "#specificPricingWebDesignDiv" ).addClass( "pricingwebdevelopment" );

      $( "#specificPricingWebDevelopmentDiv" ).removeClass( "pricingwebdesign pricingbranding pricingwordpress" );

      $( "#specificPricingWebDevelopmentDiv" ).addClass( "pricingwebdevelopment" );

      $( "#specificPricingBrandingDiv" ).removeClass( "pricingwebdesign pricingbranding pricingwordpress" );

      $( "#specificPricingBrandingDiv" ).addClass( "pricingwebdevelopment" );

      $( "#specificPricingWordpressDiv" ).removeClass( "pricingwebdesign pricingbranding pricingwordpress" );

      $( "#specificPricingWordpressDiv" ).addClass( "pricingwebdevelopment" );

      $( "#specificPricingButtonUnderline" ).removeClass( "pricingwebdesign pricingbranding pricingwordpress" );

      $( "#specificPricingButtonUnderline" ).addClass( "pricingwebdevelopment" );

    });

    $( "#specificPricingBrandingButton" ).click(function() {

      $( "#specificPricingWebDesignDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingwordpress" );

      $( "#specificPricingWebDesignDiv" ).addClass( "pricingbranding" );

      $( "#specificPricingWebDevelopmentDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingwordpress" );

      $( "#specificPricingWebDevelopmentDiv" ).addClass( "pricingbranding" );

      $( "#specificPricingBrandingDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingwordpress" );

      $( "#specificPricingBrandingDiv" ).addClass( "pricingbranding" );

      $( "#specificPricingWordpressDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingwordpress" );

      $( "#specificPricingWordpressDiv" ).addClass( "pricingbranding" );

      $( "#specificPricingButtonUnderline" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingwordpress" );

      $( "#specificPricingButtonUnderline" ).addClass( "pricingbranding" );

    });

    $( "#specificPricingWordpressButton" ).click(function() {

      $( "#specificPricingWebDesignDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingbranding" );

      $( "#specificPricingWebDesignDiv" ).addClass( "pricingwordpress" );

      $( "#specificPricingWebDevelopmentDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingbranding" );

      $( "#specificPricingWebDevelopmentDiv" ).addClass( "pricingwordpress" );

      $( "#specificPricingBrandingDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingbranding" );

      $( "#specificPricingBrandingDiv" ).addClass( "pricingwordpress" );

      $( "#specificPricingWordpressDiv" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingbranding" );

      $( "#specificPricingWordpressDiv" ).addClass( "pricingwordpress" );

      $( "#specificPricingButtonUnderline" ).removeClass( "pricingwebdesign pricingwebdevelopment pricingbranding" );

      $( "#specificPricingButtonUnderline" ).addClass( "pricingwordpress" );

    });

  }

}
