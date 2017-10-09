const Parent = window.DDG.base.Page;
const mixins = require('./mixins/index.es6.js');
const PrivacyOptionsView = require('./../views/privacy-options.es6.js');
const PrivacyOptionsModel = require('./../models/privacy-options.es6.js');
const privacyOptionsTemplate = require('./../templates/privacy-options.es6.js');
const WhitelistView = require('./../views/whitelist.es6.js');
const WhitelistModel = require('./../models/whitelist.es6.js');
const whitelistTemplate = require('./../templates/whitelist.es6.js');
const BackgroundMessageModel = require('./../models/background-message.es6.js');

function Options (ops) {
    Parent.call(this, ops)
}

Options.prototype = $.extend({},
    Parent.prototype,
    mixins.setBrowserClassOnBodyTag,
    {

        pageName: 'options',

        ready: function() {

            var $parent = $("#options-content")

            Parent.prototype.ready.call(this)

            this.setBrowserClassOnBodyTag()

            this.views.options = new PrivacyOptionsView({
                pageView: this,
                model: new PrivacyOptionsModel({}),
                appendTo: $parent,
                template: privacyOptionsTemplate
            })

            this.views.whitelist = new WhitelistView({
                pageView: this,
                model: new WhitelistModel({}),
                appendTo: $parent,
                template: whitelistTemplate
            })

            this.message = new BackgroundMessageModel({})

        }

    }
);


// kickoff!
window.DDG = window.DDG || {}
window.DDG.page = new Options()


