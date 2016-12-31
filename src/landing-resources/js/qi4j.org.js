
$( document ).ready( function( $ )
{
    // Open external user links in a new window/tab
    $("a[href^='http:']").attr('target','_blank');
    $("a[href^='https:']").attr('target','_blank');
} );
