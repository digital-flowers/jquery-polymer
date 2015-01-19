// browser has native support for shadow root
jQuery.nativeShadowDOM = function () {
    return !!document.body.createShadowRoot;
};

// filters
jQuery.extend(
        jQuery.expr[":"],
        {
            shadow: function (elem) {
                return elem.shadowRoot;
            }
        }
);

// methods
// override default jquery find method
// first copy as shallowFind
// jQuery.fn.shallowFind = jQuery.fn.find;

window.getWindow = function (elem) {
    return window;
};

// new methods
jQuery.fn.extend({
    offset: function (options) {
        if (arguments.length) {
            return options === undefined ?
                    this :
                    this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
        }

        var docElem, win, elem = this[0], box = {top: 0, left: 0},
        doc = elem && elem.ownerDocument;
        if (!doc) {
            return box;
        }

        docElem = doc.documentElement;

        // Support: BlackBerry 5, iOS 3 (original iPhone)
        // If we don't have gBCR, just use 0,0 rather than error
        if (typeof elem.getBoundingClientRect !== undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    },
    hasShadowRoot: function () {
        return !!this[0].shadowRoot;
    },
    getShadowRoot: function () {
        return $(this[0].shadowRoot);
    },
    getOwnerShadowRoot: function () {
        var templateInstance = this[0].templateInstance;
        var shadow;
        if (templateInstance) {
            shadow = templateInstance.model.shadowRoot;
        }

        return $(shadow);
    }
});