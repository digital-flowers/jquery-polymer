# jquery-polymer

to select any element inside a polymer element lets say

<my-button id='button1'></my-button>


first you need to get the button shadow root using

$("#button1").getShadowRoot() or $("#button1").shadow()

this will return the button shadow root as jquery object 

then you can select anything inside it for example

$("#button1").shadow().find("ul > li:first")
