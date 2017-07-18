webpackJsonp([1],{34:function(n,e,t){t(76);var r=t(20)(t(36),t(85),"data-v-288975d1",null);n.exports=r.exports},36:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(21),o=t.n(r),i=t(41),s=t.n(i),a=t(40),l=t.n(a),u=t(84),c=t.n(u),d=t(83),m=t.n(d),h=t(75);t.n(h);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:m.a},data:function(){return{interval:50,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* \n*\n* Hello, everyone! My name is Xiangyu Xiao, or call me Shawn.\n*\n* I am looking for a software engineer position in California.\n*\n* In the following, I am going to write my resume for this application.\n*/\n\n/* First I would like to add some animated transition effects */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* Why not change the background color? */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* Shift text content a bit and create a border... */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* I will highlight the selector to increase readability */\n.token.selector{\n    color: rgb(133,153,0);\n}\n.token.property{\n    color: rgb(187,137,0);\n}\n.token.punctuation{\n    color: yellow;\n}\n.token.function{\n    color: rgb(42,161,152);\n}\n\n/* Em, add some magic to make it look better */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* OK, here we go to start writing... */\n.resumeEditor{\n  position: fixed;\n  right: 0;\n  top: 0;\n  padding: .5em;\n  margin: .5em;\n  width: 48vw;\n  height: 90vh;\n  border: 1px solid;\n  background: white;\n  color: #222;\n  overflow: auto;\n}\n/* Resume is about to launch... */\n\n\n",'\n/* Now it is Markdown\n * I think it should be something else to make it easy to read\n * HTML is "something" I am working on!\n */\n','\n/* Style the HTML */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"Xiangyu Xiao\n----\n\nWeb Development student/Graduate Teaching Assistant at Fort Hays State University\n\nSkills\n----\n\n* HTML5/CSS3\n* Bootstrap/Foundation\n* Java\n* JavaScript\n\nRelated Projects\n----\n\n1. [Foodies](http://www.foodiechi.com):  aims to use personalization to improve restaurant search and recommendation based on search history and favorite record.\n2. Titan: a log collection and analysis platform for web services using ElasticSearch, Logstash and Kibana (ELK)\n3. LinkItem：a project to provide better item recommendation (Books, Music Instruments, etc.) using Amazon’s dataset\n\n\nLinks\n----\n\n* [GitHub](https://github.com/ShawnXxy)\n* [Personal Website](http://www.shawnxxy.site)\n* [LinkedIn](https://www.linkedin.com/in/shawnxxy/)\n\n> If you would like to talk about potential opportunities ，please send me an [email](mailto: shawnxxy@hotmail.com)！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=l()(s.a.mark(function e(){var r,a,l,u,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);var i=(n.currentMarkdown[n.currentMarkdown.length-1],n.currentMarkdown[n.currentMarkdown.length-2]);console.log(i),"\n"===i&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},37:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(79),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},38:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(80),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},39:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(35),o=t(34),i=t.n(o);new r.a({el:"#app",render:function(n){return n(i.a)}})},75:function(n,e){},76:function(n,e){},77:function(n,e){},78:function(n,e){},83:function(n,e,t){t(78);var r=t(20)(t(37),t(87),"data-v-2df95543",null);n.exports=r.exports},84:function(n,e,t){t(77);var r=t(20)(t(38),t(86),"data-v-2ca90776",null);n.exports=r.exports},85:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},86:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},87:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[39]);
//# sourceMappingURL=app.63b66bdec557adb836e5.js.map