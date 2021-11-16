(()=>{"use strict";var e,t={843:(e,t,r)=>{var n=r(114),l=r(357),o=r(766),a=r(438),c=r(715),i=r(116);class u extends n.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){var e;return this.state.error?n.createElement("div",null,n.createElement("p",null,"Error occurred"),this.state.error&&this.state.error.toString()," ",n.createElement("br",null),null===(e=this.state.errorInfo)||void 0===e?void 0:e.componentStack):this.props.children}}const s=()=>n.createElement("div",{className:"err404"},n.createElement("p",null,"存在しないページか、閲覧権限のないページです。"));var d=r(564),m=r.n(d);const h=()=>{const{loginWithRedirect:e,user:t,logout:r,isLoading:l,getAccessTokenSilently:a}=(0,o.D3)(),[c,i]=(0,n.useState)({}),u=e=>{return t=void 0,r=void 0,l=function*(){i("fetching...");const t=yield a().then((e=>e)).catch((e=>(console.log(e),"")));m().get(`http://localhost:3333/${e}`,{headers:{Authorization:`Bearer ${t}`}}).then((e=>{var t;i({data:(t=e).data,status:t.status,statusText:t.statusText,headers:t.headers})})).catch((e=>i(e)))},new((n=void 0)||(n=Promise))((function(e,o){function a(e){try{i(l.next(e))}catch(e){o(e)}}function c(e){try{i(l.throw(e))}catch(e){o(e)}}function i(t){var r;t.done?e(t.value):(r=t.value,r instanceof n?r:new n((function(e){e(r)}))).then(a,c)}i((l=l.apply(t,r||[])).next())}));var t,r,n,l};return l?n.createElement("div",null,"Loading..."):n.createElement("div",null,n.createElement("h1",null,"Express + Prisma + Auth0 Demo"),n.createElement("div",{style:{marginBottom:"24px"}},"Login credential",n.createElement("br",null),"email: test@gmail.com",n.createElement("br",null),"password: Password1234!"),n.createElement("button",{onClick:()=>e()},"Login"),n.createElement("button",{onClick:()=>r({returnTo:window.location.origin})},"Logout"),n.createElement(v,null,n.createElement("div",null,"User info"),n.createElement("pre",null,JSON.stringify(t||{},null,4))),n.createElement("h2",null,"API"),n.createElement("button",{onClick:()=>u("city")},"GET (Public)"),n.createElement("button",{onClick:()=>u("todo")},"GET (Auth required)"),n.createElement("button",{onClick:()=>i({})},"CLEAR"),n.createElement(v,null,n.createElement("div",null,"Server Response"),n.createElement("pre",null,JSON.stringify(c,null,4))))},v=a.ZP.div`
  padding: 20px 20px;

  border: 1px #ccc solid;
  border-radius: 4px;
  background-color: #eee;
  color: #333;

  > div {
    font-weight: bolder;
  }
`,f=a.vJ`
  html {
    font-family: "Helvetica", "Roboto", "Lucida Grande", Verdana, Arial, sans-serif;
  }
`;(0,l.render)(n.createElement(o.tw,{domain:"dev-0cdfx4ya.us.auth0.com",clientId:"mx1WmrcgPw3u8ZxGbX3PGGKXNJ8axXen",redirectUri:window.location.origin,audience:"https://dev-0cdfx4ya.us.auth0.com/api/v2/"},n.createElement(f,null),n.createElement((()=>n.createElement(u,null,n.createElement(c.VK,null,n.createElement(i.Z5,null,n.createElement(i.AW,{path:"/",element:n.createElement(h,null)}),n.createElement(i.AW,{path:"*",element:n.createElement(s,null)}))))),null)),document.getElementById("root"))}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,l,o)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,l,o]=e[s],c=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(c=!1,o<a&&(a=o));if(c){e.splice(s--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,l,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,o,[a,c,i]=r,u=0;if(a.some((t=>0!==e[t]))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(i)var s=i(n)}for(t&&t(r);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[a[u]]=0;return n.O(s)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[736],(()=>n(843)));l=n.O(l)})();