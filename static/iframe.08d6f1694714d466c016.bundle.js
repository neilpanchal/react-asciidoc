(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(n,e){n.exports={readFileSync:function(){return"mocked file"}}},511:function(n,e,t){"use strict";t.d(e,"a",function(){return _});var i=t(7),o=t.n(i),a=t(8),s=t.n(a),r=t(15),c=t.n(r),l=t(16),d=t.n(l),p=t(17),u=t.n(p),m=t(9),h=t.n(m),f=t(2),g=t.n(f),b=t(1),y=t.n(b),x=t(512),v=t.n(x),_=function(n){function e(){return o()(this,e),c()(this,d()(e).apply(this,arguments))}return u()(e,n),s()(e,[{key:"render",value:function(){var n=this.props,e=n.outerTagName,t=n.className,i=n.style,o=v()();return g.a.createElement(e,{className:t,style:i,dangerouslySetInnerHTML:{__html:o.convert(this.props.children)}})}}]),e}(g.a.PureComponent);h()(_,"propTypes",{className:y.a.string,style:y.a.object,children:y.a.string.isRequired}),h()(_,"defaultProps",{outerTagName:"div"}),_.__docgenInfo={description:"",methods:[],displayName:"Asciidoc",props:{outerTagName:{defaultValue:{value:"'div'",computed:!1},required:!1},className:{type:{name:"string"},required:!1,description:""},style:{type:{name:"object"},required:!1,description:""},children:{type:{name:"string"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\index.js"]={name:"Asciidoc",docgenInfo:_.__docgenInfo,path:"src\\index.js"})},514:function(n,e,t){t(193),t(515),n.exports=t(516)},516:function(n,e,t){"use strict";t.r(e),function(n){var e=t(191);Object(e.configure)(function(){t(529)},n)}.call(this,t(292)(n))},529:function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"default",function(){return E});var i=t(7),o=t.n(i),a=t(8),s=t.n(a),r=t(15),c=t.n(r),l=t(16),d=t.n(l),p=t(17),u=t.n(p),m=t(28),h=t.n(m),f=t(9),g=t.n(f),b=t(2),y=t.n(b),x=t(191),v=t(378),_=t.n(v),A=(t(530),t(511)),S=(t(627),t(630),t(633),t(513)),T=t.n(S),w="\nThe Article Title\n=================\nAuthor's Name <authors@email.address>\nv1.0, 2003-12\n\n\nThis is the optional preamble (an untitled section body). Useful for\nwriting simple sectionless documents consisting only of a preamble.\n\nNOTE: The abstract, preface, appendix, bibliography, glossary and\nindex section titles are significant ('specialsections').\n\n\n:numbered!:\n[abstract]\nExample Abstract\n----------------\nThe optional abstract (one or more paragraphs) goes here.\n\nThis document is an AsciiDoc article skeleton containing briefly\nannotated element placeholders plus a couple of example index entries\nand footnotes.\n\n:numbered:\n\nThe First Section\n-----------------\nArticle sections start at level 1 and can be nested up to four levels\ndeep.\nfootnote:[An example footnote.]\nindexterm:[Example index entry]\n\nAnd now for something completely different: ((monkeys)), lions and\ntigers (Bengal and Siberian) using the alternative syntax index\nentries.\n(((Big cats,Lions)))\n(((Big cats,Tigers,Bengal Tiger)))\n(((Big cats,Tigers,Siberian Tiger)))\nNote that multi-entry terms generate separate index entries.\n\nHere are a couple of image examples: an image:https://www.methods.co.nz/asciidoc/images/smallnew.png[]\nexample inline image followed by an example block image:\n\n.Tiger block image\nimage::https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Tiger_in_the_snow_at_the_Detroit_Zoo_March_2008_pic_2.jpg/320px-Tiger_in_the_snow_at_the_Detroit_Zoo_March_2008_pic_2.jpg[Tiger image]\n\nFollowed by an example table:\n\n.An example table\n[width=\"60%\",options=\"header\"]\n|==============================================\n| Option          | Description\n| -a 'USER GROUP' | Add 'USER' to 'GROUP'.\n| -R 'GROUP'      | Disables access to 'GROUP'.\n|==============================================\n\n.An example example\n===============================================\nLorum ipum...\n===============================================\n\n[[X1]]\nSub-section with Anchor\n~~~~~~~~~~~~~~~~~~~~~~~\nSub-section at level 2.\n\nA Nested Sub-section\n^^^^^^^^^^^^^^^^^^^^\nSub-section at level 3.\n\nYet another nested Sub-section\n++++++++++++++++++++++++++++++\nSub-section at level 4.\n\nThis is the maximum sub-section depth supported by the distributed\nAsciiDoc configuration.\nfootnote:[A second example footnote.]\n\n\nThe Second Section\n------------------\nArticle sections are at level 1 and can contain sub-sections nested up\nto four deep.\n\nAn example link to anchor at start of the <<X1,first sub-section>>.\nindexterm:[Second example index entry]\n\nAn example link to a bibliography entry <<taoup>>.\n\n\n:numbered!:\n\n[appendix]\nExample Appendix\n----------------\nAsciiDoc article appendices are just just article sections with\n'specialsection' titles.\n\nAppendix Sub-section\n~~~~~~~~~~~~~~~~~~~~\nAppendix sub-section at level 2.\n\n\n[bibliography]\nExample Bibliography\n--------------------\nThe bibliography list is a style of AsciiDoc bulleted list.\n\n[bibliography]\n- [[[taoup]]] Eric Steven Raymond. 'The Art of Unix\n  Programming'. Addison-Wesley. ISBN 0-13-142901-9.\n- [[[walsh-muellner]]] Norman Walsh & Leonard Muellner.\n  'DocBook - The Definitive Guide'. O'Reilly & Associates. 1999.\n  ISBN 1-56592-580-7.\n\n\n[glossary]\nExample Glossary\n----------------\nGlossaries are optional. Glossaries entries are an example of a style\nof AsciiDoc labeled lists.\n\n[glossary]\nA glossary term::\n  The corresponding (indented) definition.\n\nA second glossary term::\n  The corresponding (indented) definition.\n\n\nifdef::backend-docbook[]\n[index]\nExample Index\n-------------\n////////////////////////////////////////////////////////////////\nThe index is normally left completely empty, it's contents being\ngenerated automatically by the DocBook toolchain.\n////////////////////////////////////////////////////////////////\nendif::backend-docbook[]\n",E=function(n){function e(){var n,t;o()(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=c()(this,(n=d()(e)).call.apply(n,[this].concat(a))),g()(h()(h()(t)),"state",{content:w}),g()(h()(h()(t)),"handleChangeContent",T()(function(n){t.setState({content:n})},200)),t}return u()(e,n),s()(e,[{key:"componentDidMount",value:function(){var n=this;_()(this.editor,{value:this.state.content,mode:"asciidoc"}).on("change",function(e){n.handleChangeContent(e.getValue())})}},{key:"render",value:function(){var n=this,e=this.state.content;return y.a.createElement("div",{className:"row"},y.a.createElement("div",{className:"column"},y.a.createElement("div",{ref:function(e){return n.editor=e}})),y.a.createElement("div",{className:"column"},y.a.createElement(A.a,{className:"asciidoc"},e)))}}]),e}(y.a.Component);Object(x.storiesOf)("react-asciidoc",n).add("Demo",function(){return y.a.createElement(E,null)}),E.__docgenInfo={description:"",methods:[],displayName:"Demo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["storybook\\index.js"]={name:"Demo",docgenInfo:E.__docgenInfo,path:"storybook\\index.js"})}.call(this,t(292)(n))},535:function(n,e){},537:function(n,e){},568:function(n,e){},569:function(n,e){},622:function(n,e){n.exports={XMLHttpRequest:XMLHttpRequest}},630:function(n,e,t){var i=t(631);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0};t(334)(i,o);i.locals&&(n.exports=i.locals)},631:function(n,e,t){(e=n.exports=t(172)(void 0)).i(t(632),""),e.push([n.i,"\n",""])},633:function(n,e,t){var i=t(634);"string"==typeof i&&(i=[[n.i,i,""]]);var o={hmr:!0,transform:void 0};t(334)(i,o);i.locals&&(n.exports=i.locals)},634:function(n,e,t){(n.exports=t(172)(void 0)).push([n.i,"html, body {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n\n#root{\n    height: 100%;\n}\n\n.row {\n    display: flex;\n    height: 100%;\n}\n\n.column {\n    flex: 50%;\n    height: 100%;\n    overflow: auto;\n}\n\n.asciidoc{\n    padding: 10px;\n}\n\n.CodeMirror { height: 100%; }\n",""])}},[[514,2,4]]]);
//# sourceMappingURL=iframe.08d6f1694714d466c016.bundle.js.map