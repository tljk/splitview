// ==UserScript==
// @name         split view new
// @namespace https://github.com/tljk/splitview/
// @version      0.3
// @description  long press link to open in side panel, 长按链接在侧边栏打开
// @author       tljk
// @match        https://*/*
// @match        http://*/*
// @match        ftp://*/*
// @require      https://raw.githubusercontent.com/john-doherty/long-press-event/master/dist/long-press-event.min.js
// @grant        none
// @run-at       document-end
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    if (window.screen.width >= 600){
        function modlink(){
            document.querySelectorAll('a').forEach(function(r_node) {
                r_node.addEventListener("long-press", function (e) {
                    if(r_node.href.split('?')[0]=='https://www.google.com/url'){
                        const urlParams = new URLSearchParams((new URL(r_node.href)).search);
                        if(urlParams.get('url')){
                            iframeobj.src = urlParams.get('url');
                        }else{
                            iframeobj.src = urlParams.get('q');
                        }
                    }else{
                        iframeobj.src = r_node.href;
                    }
                });
            });
        }
        const observer = new MutationObserver(modlink);
        observer.observe(document.body, {childList: true, attributes: true, subtree: true});

        // Your code here...
        if (window.self === window.top) {
            var iframeobj = document.createElement('iframe');
            iframeobj.name = 'iframe_splitview';
            iframeobj.src = ''
            iframeobj.style = 'top:0;left:51%;width:49%;height:100%;border:0;position:fixed';
            iframeobj.sandbox = "allow-downloads allow-downloads-without-user-activation allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation-by-user-activation"
            document.body.style.width = '49%';
            document.body.style.marginRight = '51%';
            document.body.setAttribute("data-long-press-delay", "300");
            document.body.appendChild(iframeobj);

            modlink();
        }
    }
}

)();