;(function($) {
  $(window).load(function(){
    function modify_form(){
      // create a proper form
      $('.ss_form').addClass('form-inline');
      
      $('.ss_row').addClass('row');
      
      $('.ss_col_left')
        .addClass('form-group')
        .addClass('col-md-6');
      
      $('.ss_col_right')
        .addClass('form-group')
        .addClass('col-md-6');
      
      $('.ss_returning').addClass('checkbox');
      
      $('.ss_psection').addClass('form-group');

      $('.ss_pass_ico_adults').text('Adults 12+');
      $('.ss_pass_adults').addClass('form-control');

      $('.ss_pass_ico_children').text('Children < 12');
      $('.ss_pass_children').addClass('form-control');

      $('.ss_pass_ico_infants').text('Infants < 2');
      $('.ss_pass_infants').addClass('form-control');
      
      $('.ss_ssection')
        .addClass('btn')
        .addClass('btn-large');
    };
    window.setTimeout( modify_form, 500 ); // .5 second
    console.log ( 'Timeout over' );
  });
})(jQuery);