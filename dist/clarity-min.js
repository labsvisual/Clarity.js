!function(){var t={},i=window,e=[],n={at2xSuffix:"@2x"};t={config:function(t){n.at2xSuffix=t.suffix},isDeviceRetina:function(){var t="(min-resolution: 1.5dppx),(-webkit-min-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2)";return i.devicePixelRatio>1||i.matchMedia&&i.matchMedia(t).matches?!0:!1},indexElements:function(){var t=document.getElementsByTagName("img");if(null==t||null===t||t.length<=0)return void console.log("Clarity Debug: No Image Elements found");for(var i=0;i<t.length;i++){var n=t[i];"escape"!==n.getAttribute("data-clarity")&&e.push(n)}console.log("Clarity Debug: Initialization Successful; indexed "+e.length+" elements.")},clarity:function(){for(var t=0;t<e.length;t++){var i=e[t],a=i.getAttribute("src"),l,s,o,r=[];r[0]=i.height,r[1]=i.width,o=a.substring(0,a.lastIndexOf("/")),s=a.substring(a.lastIndexOf("/")+1),s=s.split(".")[0]+n.at2xSuffix+"."+s.split(".")[1],o=o+"/"+s,i.setAttribute("src",o),i.setAttribute("style","height: "+r[0]+"px; width: "+r[1]+"px;")}},init:function(t){void 0!=t&&null!=t&&this.config(t),this.isDeviceRetina()&&(this.indexElements(),this.clarity())}},t.init()}();