(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{8:function(t,e,o){t.exports=o(9)},9:function(t,e,o){"use strict";o.r(e);var a=o(3),n=o(4),u=o(1),c=o(7),r=o(6),s=(o(10),o(0)),i=o.n(s),l=o(5),h=o.n(l),d=function(t){Object(c.a)(o,t);var e=Object(r.a)(o);function o(t){var n;return Object(a.a)(this,o),(n=e.call(this,t)).state={color:"RGB(".concat(Math.floor(100*Math.random()),", ").concat(Math.floor(100*Math.random()),", ").concat(Math.floor(100*Math.random()),")"),quotes:[],quote:"",author:""},n.button=n.button.bind(Object(u.a)(n)),n.rQuote=n.rQuote.bind(Object(u.a)(n)),n.setQuotes=n.setQuotes.bind(Object(u.a)(n)),n}return Object(n.a)(o,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(e){return t.setQuotes(e)}))}},{key:"setQuotes",value:function(t){this.setState({quotes:t.quotes}),console.log(this.state.quotes)}},{key:"rQuote",value:function(){var t=this.state.quotes.map((function(t){return t.quote})),e=this.state.quotes.map((function(t){return t.author})),o=Math.floor(Math.random()*t.length);this.setState({quote:t[o],author:e[o]})}},{key:"button",value:function(t){var e=this;t.preventDefault(),document.querySelector("#quote").animate({opacity:0},500,(function(){document.querySelector("#quote").animate({opacity:1},500),document.querySelector("#quote").text(e.rQuote())}))}},{key:"render",value:function(){return i.a.createElement("div",{id:"background",style:{backgroundColor:this.state.color}},i.a.createElement("div",{className:"card"},i.a.createElement("h1",{id:"quote",style:{color:this.state.color}},this.state.quote),i.a.createElement("p",{id:"author",style:{color:this.state.color}},this.state.author),i.a.createElement("div",{className:"buttons"},i.a.createElement("button",{onClick:this.getQuotes,style:{backgroundColor:this.state.color}},"Get quote"),i.a.createElement("button",{onClick:this.button,style:{backgroundColor:this.state.color}},"Get quote"))))}}]),o}(s.Component);h.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d,null)),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.1e4ac2bb.chunk.js.map