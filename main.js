// ==UserScript==
// @name split view
// @namespace https://github.com/tljk/splitview/
// @version 0.1
// @description originated from v2ex user @v2yllhwa
// @author tljk
// @match        https://*/*
// @match        http://*/*
// @match        ftp://*/*
// @grant none
// @run-at document-end
// @license MIT
// ==/UserScript==

(function () {
    "use strict";
    let url = window.location.href;
    if (window.self === window.top) {
        document.write(
`
<html>
<head>
</head>

<body style="margin:0;padding:0;background:gray;" scroll="no">
<iframe src='${url}' id='leftpage' style='width:49%;height:100%;float:left' frameborder='0' allowfullscreen='true' sandbox="allow-downloads allow-downloads-without-user-activation allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation-by-user-activation"></iframe>
<iframe src='' id='rightpage' style='width:49%;height:100%;float:right' frameborder='0' allowfullscreen='true' sandbox="allow-downloads allow-downloads-without-user-activation allow-presentation allow-modals allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation-by-user-activation"></iframe>
</body>

<script>
var lefturl = '${url}';
var righturl;
var iframe_open_url = function (left, right) {
if(righturl != right){
righturl = right;
document.getElementById('rightpage').src = righturl;
}
if(lefturl != left){
lefturl = left;
document.getElementById('leftpage').src = lefturl;
}
history.replaceState({},"",righturl);
history.replaceState({},"",lefturl);
}
</script>
</html>
`
            );
        } else {
            document.body.style.minWidth = "unset";
            let nodes = document.querySelectorAll("a");
            for (let i = 0; i < nodes.length; i++) {
                // console.log(nodes[i].href);
                nodes[i].addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    window.parent.iframe_open_url(url, nodes[i].href);
                });
            }
        }
})();