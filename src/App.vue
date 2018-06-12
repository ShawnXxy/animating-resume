<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 50,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Inspired by http://strml.net/
* 
*
* Hello! My name is Xiangyu Xiao, or call me Shawn.
*
* I am looking for a job as a web developer or software engineer.
*
* In the following, I am going to write my resume for this application.
*/

/* First I would like to add some animated transition effects */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* Why not change the background color? */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* Shift text content a bit and create a border... */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* I will highlight the selector to increase readability */
.token.selector{
    color: rgb(133,153,0);
}
.token.property{
    color: rgb(187,137,0);
}
.token.punctuation{
    color: yellow;
}
.token.function{
    color: rgb(42,161,152);
}

/* Em, add some magic to make it look better */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* OK, here we go to start writing... */
.resumeEditor{
  position: fixed;
  right: 0;
  top: 0;
  padding: .5em;
  margin: .5em;
  width: 48vw;
  height: 90vh;
  border: 1px solid;
  background: white;
  color: #222;
  overflow: auto;
}
/* Resume is about to launch... */


`,
          `
/* Now it is Markdown
 * I think it should be something else to make it easy to read
 * HTML is "something" I am working on!
 */
`
          ,
          `
/* Style the HTML */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `Xiangyu (Shawn) Xiao
----

Graduated from Fort Hays State University with a Master of Professional Studies degree,
concentrated in Web Development.
Looking For a job as a Web Developer or Software Engineer!

Skills
----

* HTML/CSS (Bootstrap/Foundation)
* Java (RESTful, Servlet)
* JavaScript (jQuery)
* PHP
* MySQL

Related Projects
----

1. [Foodies](http://www.foodiechi.com):  aims to use personalization to improve restaurants search and recommendation based on search history and favorite record.
2. [Ticket+](https://github.com/ShawnXxy/Ticket-): Java Web Service Development – Event Search and Recommendation Engine.
3. [Around](https://github.com/ShawnXxy/Around): LBS based Android App for Tourists and Local Residents
4. Titan: a log collection and analysis platform for web services using ElasticSearch, Logstash and Kibana (ELK)
5. [AIR](https://github.com/ShawnXxy/LinkItem) - Amazon Item Recommendation：a project to provide better item recommendation (Books, Music Instruments, etc.) using Amazon’s dataset


Links
----

* [GitHub](https://github.com/ShawnXxy)
* [Personal Website](http://www.shawnxxy.site)
* [LinkedIn](https://www.linkedin.com/in/shawnxxy/)

> If you would like to talk about potential opportunities ，please send me an [email](mailto: shawnxxy@hotmail.com)！

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              console.log(prevChar)
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    min-height: 100vh;
  }
  
  * {
    -webkit-transition: all .3s;
    transition: all .3s;
  }
</style>
