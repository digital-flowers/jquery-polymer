# jquery-polymer

**this jquery plugin extend several jquery functions for web components manpulations specialy accessing web components internal shadow root and template elements:**

`$.nativeShadowDOM()`
this function return true if the browser already support shadow dom natively without any polyfill


`$("#element").hasShadowRoot()`
this function return true if the selected element has shadow root


`$("#element").shadow()` or `$("#element").getShadowRoot()`
this function return the element shadow root as Jquery object where you can access internal template items for example you can do `$("#element").shadow().find("#my-button")`


`$("#element").getOwnerShadowRoot()` this function return the parent element shadow root if the selected element is inside a web component template  


`$("#element").find(":shadow")` this psudo selector refere to any elemnt shadow root

also this plugin fix jquery offset() function for the any element inside a webcomponent (shadow root) 
