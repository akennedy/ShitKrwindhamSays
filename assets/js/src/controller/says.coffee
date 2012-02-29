Ext.define 'ShitKrwindhamSays.controller.Says',
  extend: 'Ext.app.Controller'

  views: ['Says.New','Viewport']

  models: []
  stores: []

  config: {
    refs: { viewport: { selector: 'viewportview', xtype: 'viewportview', autoCreate: true }}
  }

  init: ->

    @getViewport()