Easytip
=======

jQuery Plugin to add a hover tooltip to an element.  Supports tips on the left, right, above, below, and overlay of the target element.

Features
--------
- tooltips in five locations
- tooltips can be hardcoded text or a function
- lightweight 
- easy to customize

Options
--------
easyMessage: Supply text to display in the tooltip or a function to get the text to display
easyClass: Default class is easy-tip.  Supply a custom class or mulitple classes to include.
easyPosition: Possible values are left, right, above, below, and overlay.
easyCss: Supply a jQuery css string to override tooltip style at the element level.

Prequisites
--------
jQuery:  Plugin has been tested with 1.10 & 1.11 but should be compatable several versions back and forward

Getting Started
--------
- add <code>jquery.easytip.js</code> or <code>jquery.easytip.min.js</code> to a script tag in your webpage
- link to easytip.css or add the class to an existing stylesheet

Demo: 
--------
http://jsfiddle.net/ShawnGSweeney/tU3zL

Basic Example:
--------
<pre>
input id="left" type="text"

JavaScript:  $("#left").easytip({ easyMessage: "Help to the left", easyPosition: "left" });
</pre>

**See <code>EasyTipTestPage.htm</code>** or the demo: http://jsfiddle.net/ShawnGSweeney/tU3zL for a complete list of examples

Browser support
--------
- IE 8-10
- Chrome
- Firefox
- Safari


License:
--------
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
