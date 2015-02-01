/**
 * Package: voylinux.com
 * Author: Pablo Bernardo <voylinux@gmail.com>
 */

(function(){
  'use strict';


  var primaryNav = $('#primary_nav');
  var menuButton = $('#menu_button');
  var speed = 200;
    menuButton.on('click', toggleMenu);

  function toggleMenu(speed){
    if(primaryNav.hasClass('open')){
      primaryNav.animate({
        'max-height': '0px'
      }, speed);
    }else{
      primaryNav.animate({
        'max-height': '1000px'
      }, speed);
    }
    primaryNav.toggleClass('open');
  }

})();
