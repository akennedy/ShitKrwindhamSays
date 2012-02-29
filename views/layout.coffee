doctype 5
html ->
  head ->
    title 'Shit krwindham Says'
    meta charset: 'utf-8'
    title "#{@title} | My Site" if @title?
    meta(name: 'description', content: @description) if @description?
    link(rel: 'canonical', href: @canonical) if @canonical?
    link rel: 'icon', href: '/favicon.png'
    link(rel: 'stylesheet', href: '/stylesheets/sencha-touch.css')

    script src: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'
    script src: 'javascripts/sencha-touch-all.js'
    script src: 'javascripts/sencha-app.js'