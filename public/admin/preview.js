/* CMS preview shows the saved content fields. The deployed URL previews the full motion/layout. */
(function () {
  var h = window.h;
  function Preview(props) {
    var data = props.entry.getIn(['data']).toJS();
    var sections = data.features || data.sections || data.steps || [];
    return h('article', {style:{fontFamily:'system-ui',padding:'32px',color:'#18314d',lineHeight:1.7}},
      h('p',null,data.draft?'DRAFT - excluded from the public site':(data.route || data.platform || data.category || 'Srapsware')),
      h('h1',null,data.pageTitle || data.title || data.question),
      h('p',null,data.pageDescription || data.description || data.excerpt),
      data.scene && h('p',null,'Illustration: '+data.scene+' (full animation on the website preview)'),
      sections.map(function(s,i){return h('section',{key:i},h('h2',null,s.title),h('p',null,s.description||s.text));}),
      props.widgetFor('body'), data.answer && h('p',null,data.answer));
  }
  ['blog','portfolio','services','solutions','products','productDocuments','resources','pages','faq'].forEach(function(name){CMS.registerPreviewTemplate(name,Preview);});
}());
