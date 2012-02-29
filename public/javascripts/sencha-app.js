
  Ext.define("ShitKrwindhamSays.view.Viewport", {
    extend: "Ext.Panel",
    xtype: "viewportview",
    config: {
      fullscreen: true,
      layout: 'card',
      defaults: {
        scrollable: true
      },
      items: [
        {
          title: "Shit krwindham Says",
          xtype: "newsayview"
        }
      ]
    }
  });

  Ext.define('ShitKrwindhamSays.view.Says.New', {
    extend: 'Ext.Panel',
    xtype: 'newsayview',
    id: 'newsayview',
    config: {
      flex: 1,
      layout: 'vbox',
      items: [
        {
          xtype: 'toolbar',
          title: 'Shit krwindham Says'
        }, {
          layout: 'hbox',
          flex: 1,
          items: [
            {
              flex: 1
            }, {
              xtype: 'image',
              style: 'margin-top: 15px;',
              src: 'https://secure.gravatar.com/avatar/5d7bd142338fde05a5842f8768409d17?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png',
              width: 150
            }, {
              flex: 1
            }
          ]
        }, {
          layout: 'hbox',
          flex: 1,
          items: [
            {
              flex: 1
            }, {
              xtype: 'image',
              style: 'margin-top: 15px;',
              src: 'http://www.sencha.com/img/sencha-large.png',
              width: 375
            }, {
              flex: 1
            }
          ]
        }
      ]
    }
  });

  Ext.define('ShitKrwindhamSays.controller.Says', {
    extend: 'Ext.app.Controller',
    views: ['Says.New', 'Viewport'],
    models: [],
    stores: [],
    config: {
      refs: {
        viewport: {
          selector: 'viewportview',
          xtype: 'viewportview',
          autoCreate: true
        }
      }
    },
    init: function() {
      return this.getViewport();
    }
  });

  Ext.application({
    name: 'ShitKrwindhamSays',
    controllers: ['Says'],
    launch: function() {
      return console.log('Shit krwindham Says');
    }
  });
