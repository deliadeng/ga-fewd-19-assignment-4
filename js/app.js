/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
        
        $( '.readmore' ).click(function() {
            $( '#show-this-on-click' ).slideDown( 'slow' );
            $( '.readmore' ).hide( 'slow' );
            $( '.readless' ).show( 'slow' );
        });
        
        $( '.readless' ).click(function() {
            $( '#show-this-on-click' ).slideUp( 'slow' );
            $( '.readless' ).hide( 'slow' );
            $( '.readmore' ).show( 'slow' );
        });
        
        $( '.learnmore' ).click(function() {
            $( 'span' ).slideDown( 'slow' );
            $( '.learnmore' ).hide( 'slow' );
        });
        
        /****** Why does the page jump to the top of the page each time the functions are clicked? ******/
        
        /* ----- Finish writing your JavaScript here  -----*/
    });
}());
