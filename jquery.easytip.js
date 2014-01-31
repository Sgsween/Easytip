/*
Easytip 1.0.0 | 01/31/2014
Developed by Shawn Sweeney under the MIT license http://opensource.org/licenses/MIT

The MIT License (MIT)

Copyright (c) 2014 Shawn G Sweeney 
http://github.com/Sgsween/Easytip http://shawngsweeney.wordpress.com/

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

(function ($) {
    $.fn.easytip = function (easyOptions) {
        var easySettings;
        var easyDefaults = {
            easyMessage: null,
            easyClass: "easy-tip",
            easyPosition: "right", //left, right, above, below, overlay
            easyCss: null

        };
        //get settings and store them
        easySettings = $.extend({}, easyDefaults, easyOptions);
        var $tipTarget = $(this).data("easytip", { defaults: easyDefaults, options: easyOptions, settings: easySettings });

        $tipTarget.hover(function () {
            var $elem = $(this);
            var $span = $(document.createElement("span")).addClass(easySettings.easyClass)
                                                    .html(easySettings.easyMessage).css(setcss($elem));
            $elem.after($span);
        },
        function () {
            $("body").find("span." + easySettings.easyClass).remove();
        });

        //private
        function setcss($elem) {
            var settings = $elem.data("easytip").settings;
            if(settings.easyPosition === "left") 
                return { left: $elem.position().left - gettextwidth(settings.easyMessage), top: $elem.position().top };
            else if(settings.easyPosition === "above")
                return { left: $elem.position().left, top: $elem.position().top - $elem.outerHeight() };
            else if (settings.easyPosition === "right")
                return { left: $elem.position().left + $elem.outerWidth(), top: $elem.position().top };
            else if (settings.easyPosition === "below")
                return { left: $elem.position().left, top: $elem.position().top + $elem.outerHeight() };
            else if (settings.easyPosition === "overlay")
                return { left: $elem.position().left, top: $elem.position().top };
        }

        function gettextwidth(text) {
            var $temp = $("<span>");
            $('body').append($temp);
            if (typeof (text) === "string") {
                $temp.html(text);
            }
            else if (typeof (text) === "function") {
                $temp.html(text());
            }
            var width = $temp.outerWidth();
            $temp.remove();
            return width;
        }

        return this;
    };
})(jQuery);
 
