import{_ as c}from"./Header.yBGtqOyy.js";import{_ as i,n,q as l,s as d,c as r,b as _,a as t,t as e,F as p,o as m,p as h,e as u}from"./entry.q_I087aj.js";import"./nuxt-link.73noUn6-.js";const g={data(){return{}},mounted(){console.log(this.$route.params.id)},computed:n(["posts"]),computed:{...l(["singlePost"])},created(){this.onePosts(this.$route.params.id)},methods:{...d(["onePosts"])}},o=s=>(h("data-v-be4c39ae"),s=s(),u(),s),v={class:"container"},b={class:"row align-items-start"},f={class:"col-lg-8 m-15px-tb"},P={class:"article"},$=o(()=>t("div",{class:"article-img"},[t("img",{src:"https://www.bootdey.com/image/800x350/87CEFA/000000",title:"",alt:""})],-1)),w={class:"article-title"},S=o(()=>t("h6",null,[t("a",{href:"#"})],-1)),x={class:"media"},y=o(()=>t("div",{class:"avatar"},[t("img",{src:"https://bootdey.com/img/Content/avatar/avatar1.png",title:"",alt:""})],-1)),I={class:"media-body"},B={class:"article-content"},F=o(()=>t("div",{class:"col-lg-4 m-15px-tb blog-aside"},null,-1));function k(s,A,C,E,N,V){const a=c;return m(),r(p,null,[_(a),t("div",v,[t("div",b,[t("div",f,[t("article",P,[$,t("div",w,[S,t("h2",null,e(s.singlePost.title),1),t("div",x,[y,t("div",I,[t("label",null,e(s.singlePost.author),1)])])]),t("div",B,[t("p",null,e(s.singlePost.description),1)])])]),F])])],64)}const H=i(g,[["render",k],["__scopeId","data-v-be4c39ae"]]);export{H as default};
