jQuery(document).ready(function($) {
    $(".royalSlider").royalSlider({
        // options go here
        // as an example, enable keyboard arrows nav
        // arrowsNav: true,
        keyboardNavEnabled: true,
        autoScaleSlider: true,
        fullscreen: {
          // fullscreen options go gere
          enabled: true,
          keyboardNav: true,
          buttonFS: true,
          nativeFS: false
        }

    });  
});