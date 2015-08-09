/*

The MIT License (MIT)

Copyright (c) <2015> <Shreyansh Pandey (334@doonschool.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

(function() {

  // Global Variables
  //   Clarity (object)      : Stores the entire code base for Clarity.
  //   context (object)      : Holds the current context, i.e. the 'window'.
  //   imgElements (array)   : Holds the list of retina image elements to be manipulated later.
  //   configObject (object) : Stores the configuration for the Clarity context.

  var Clarity = {},
      context = window;

  var imgElements = [];

  var configObject = {
    at2xSuffix : '@2x'
  };

  Clarity = {

    // Incase you want to use your own suffix, you can state it here.
    config: function(conf) {

      configObject.at2xSuffix = conf.suffix;

    },

    // Checks if the device is retina.
    // Currently only works on Chrome, IE (Yeah, that's right :( ) and Opera.
    isDeviceRetina: function() {

        var retinaQuery = "(min-resolution: 1.5dppx)," +
                          "(-webkit-min-device-pixel-ratio: 1.5)," +
                          "(-o-min-device-pixel-ratio: 3/2)";

        if (context.devicePixelRatio > 1 || (context.matchMedia && context.matchMedia(retinaQuery).matches))
            return true;

        return false;

    },

    // Add the elements to the array, imgElements, to be processed later.
    indexElements: function() {

      var elements = document.getElementsByTagName("img");
      if (elements == null || elements === null || elements.length <= 0) {
        console.log("Clarity Debug: No Image Elements found");
        return;
      }

      for (var i = 0; i < elements.length; i++) {

        var currentElement = elements[i];
        if (currentElement.getAttribute("data-clarity") === "escape") { continue; }

        imgElements.push(currentElement);

      }

      console.log("Clarity Debug: Initialization Successful; indexed " + imgElements.length + " elements.");

    },

    // Apply the Clarity 'filter'.
    clarity: function() {

      for (var i = 0; i < imgElements.length; i++) {

        var currentElement = imgElements[i];

        var srcAttr        = currentElement.getAttribute("src"),
            srcNewAttr,
            data,
            path,
            size = [];

       size[0] = currentElement.height;
       size[1] = currentElement.width;

       path = srcAttr.substring(0, srcAttr.lastIndexOf('/')),
       data = srcAttr.substring(srcAttr.lastIndexOf('/') + 1);

       data = data.split('.')[0] + configObject.at2xSuffix + "." + data.split('.')[1];
       path = path + "/" + data;

       currentElement.setAttribute('src', path);
       currentElement.setAttribute('style', 'height: ' + size[0] + 'px; width: ' + size[1] + 'px;');

      }

    },

    // Hold everything together.
    init: function(conf) {

      if (!(conf == undefined || conf == null)) {
        this.config(conf);
      }

      if (this.isDeviceRetina()) {
        this.indexElements();
        this.clarity();
      }

    }

  };

  // Call for globl context.
  Clarity.init();

})();
