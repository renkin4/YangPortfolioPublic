import{_ as a,c as t,j as e,a as i,a0 as r,o}from"./chunks/framework.tSOPSn7n.js";const h=JSON.parse('{"title":"Web SDK for Unreal Engine","description":"","frontmatter":{},"headers":[],"relativePath":"portfolios/WebSDK.md","filePath":"portfolios/WebSDK.md"}'),s={name:"portfolios/WebSDK.md"};function l(d,n,c,m,g,u){return o(),t("div",null,n[0]||(n[0]=[e("h1",{id:"web-sdk-for-unreal-engine",tabindex:"-1"},[i("Web SDK for Unreal Engine "),e("a",{class:"header-anchor",href:"#web-sdk-for-unreal-engine","aria-label":'Permalink to "Web SDK for Unreal Engine"'},"​")],-1),e("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ugG06ihO3hY?si=DdL8nHcokialki-B",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1),r('<h2 id="custom-cef-integration-for-unreal-engine-overview" tabindex="-1">Custom CEF Integration for Unreal Engine Overview <a class="header-anchor" href="#custom-cef-integration-for-unreal-engine-overview" aria-label="Permalink to &quot;Custom CEF Integration for Unreal Engine Overview&quot;">​</a></h2><p>Due to the limitations in Unreal Engine’s built-in <strong>Chromium Embedded Framework (CEF) integration</strong>, we undertook the development of a custom solution. Unreal Engine’s default CEF implementation was outdated, lacking crucial features that impacted our web applications&#39; performance.</p><h2 id="key-issues-with-unreal-engine-s-cef" tabindex="-1">Key Issues with Unreal Engine’s CEF: <a class="header-anchor" href="#key-issues-with-unreal-engine-s-cef" aria-label="Permalink to &quot;Key Issues with Unreal Engine’s CEF:&quot;">​</a></h2><ul><li><strong>Outdated CEF Version</strong>: Unreal Engine’s implementation relied on an older version of CEF, which did not include the latest performance optimizations and features.</li><li><strong>No GPU Acceleration</strong>: The default integration lacked GPU acceleration, hindering graphical performance and preventing smooth rendering of intensive web-based content.</li><li><strong>External Message Pump</strong>: The CEF version in Unreal used an external message pump, which added overhead and complexity.</li><li><strong>Frame Rate Limitations</strong>: Unreal Engine limited the framerate of CEF’s message pump to prioritize engine performance, which negatively affected the responsiveness and speed of some web applications.</li></ul><h2 id="solution-and-enhancements" tabindex="-1">Solution and Enhancements: <a class="header-anchor" href="#solution-and-enhancements" aria-label="Permalink to &quot;Solution and Enhancements:&quot;">​</a></h2><p>To overcome these issues, we built a custom integration that directly addressed these limitations, providing a more efficient and modern CEF implementation in Unreal Engine. Additionally, several enhancements were made to streamline communication and ease of use:</p><ul><li><strong>State Management System for Message Passing</strong>: I developed a state management system inspired by <strong>Vuex</strong>, using <strong>gameplay tags</strong> in Unreal Engine. This system facilitated easy and structured message passing between web-based applications and Unreal, significantly improving the interoperability and synchronization between the two environments.</li><li><strong>NPM Package for Web Developers</strong>: To simplify the integration process for web developers, I created an <strong>NPM package</strong> that provides easy access to the SDK, allowing developers to quickly connect and interact with Unreal Engine from their web applications.</li></ul>',7)]))}const f=a(s,[["render",l]]);export{h as __pageData,f as default};
