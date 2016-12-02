$(function() {
  $(document).ready(function () {

    for (var i=1; i<=4; i++) {
      $('[data-animation-'+i+']').each(function(index, e) {


        var trigger = $(e).attr('data-animation-trigger-'+i);
        var animationToRemove = $(e).attr('data-animation-to-remove-'+i);
        var animationToAdd = $(e).attr('data-animation-type-'+i);

        if (trigger == 'load') {
          if (animationToRemove)
            $(e).removeClass(animationToRemove);
          if (animationToAdd)
            $(e).addClass('animated ' + animationToAdd);
        }

        if (trigger == 'click') {
          $(e).click(function () {
            if (animationToRemove)
              $(this).removeClass(animationToRemove);
            if (animationToAdd)
              $(this).addClass('animated ' + animationToAdd);

            $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
              $(this).removeClass('animated ' + animationToAdd);
            });
          });
        }

        if (trigger == 'hover') {
          $(e).hover(function () {
            if (animationToRemove)
              $(this).removeClass(animationToRemove);
            if (animationToAdd)
              $(this).addClass('animated ' + animationToAdd);
          }, function () {
            if (animationToAdd)
              $(this).removeClass(animationToAdd);
          });
        }

        if (trigger == 'scroll') {
          var $el = $(e);

          var scrollDirection = $el.attr('data-animation-scroll-direction-'+i);
          var target = $el.attr('data-animation-target-'+i);
          var offset = $el.attr('data-animation-offset-'+i);

          if (scrollDirection && target && offset) {
            $el.waypoint(function(direction) {
              if (direction == scrollDirection) {
                if (animationToRemove)
                  $(target).removeClass(animationToRemove);
                if (animationToAdd)
                  $(target).addClass('animated ' + animationToAdd);
              }
            }, { offset: offset});
          }
        }

      })
    }
  })
});