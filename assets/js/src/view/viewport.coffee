Ext.define "ShitKrwindhamSays.view.Viewport",
  extend: "Ext.Panel"
  xtype: "viewportview"
  config:
    fullscreen: true
    layout: 'card'
    defaults:
      scrollable: true
    items: [
      title: "Shit krwindham Says"
      xtype: "newsayview"
     ]