var RobustLinks=function(){var t,e=["https?://web.archive.org/web/*","https?://wayback.archive-it.org/11112/*","https?://web.archive.bibalex.org/web/*","https?://www.webarchive.org.uk/wayback/en/archive/*","https?://langzeitarchivierung.bib-bvb.de/wayback/*,","https?://webcitation.org/","https?://webarchive.loc.gov/all/*","https?://wayback.archive-it.org/all/*","https?://wayback.archive-it.org/[0-9]+/*","https?://webarchive.parliament.uk/[0-9]+/*","https?://webarchive.parliament.uk/[0-9]+tf_/*","https?://webarchive.nationalarchives.gov.uk/[0-9]+/*","https?://webarchive.nationalarchives.gov.uk/[0-9]+tf_/*","https?://archive.li/*","https?://archive.vn/*","https?://archive.fo/*","https?://archive.md/*","https?://archive.ph/*","https?://archive.today/*","https?://archive.is/*","https?://waext.banq.qc.ca/wayback/[0-9]+/*","https?://haw.nsk.hr/arhiva/*","https?://wayback.webarchiv.cz/wayback/[0-9]+/*","https?://wayback.vefsafn.is/wayback/[0-9]+/*","https?://arquivo.pt/wayback/[0-9]+/*","https?://arquivo.pt/wayback/[0-9]+if_/*","https?://perma-archives.org/warc/[0-9]+/*","https?://perma.cc/*","https?://wayback.padicat.cat/wayback/[0-9]+/*","https?://archive.aueb.gr/services/web/[0-9]+/*","https?://digital.library.yorku.ca/wayback/[0-9]+/*","https?://veebiarhiiv.digar.ee/a/[0-9]+/*","https?://wayback.archive-it.org/10702/*","https?://webarchive.nrscotland.gov.uk/[0-9]+/*","https?://nukrobia.nuk.uni-lj.si:8080/wayback/[0-9]+/*","https?://swap.stanford.edu/[0-9]+/*"],a=function(t){try{new URL(t);return!0}catch(t){return!1}},r=function(t){return t<10&&(t="0"+t),t},n=function(){t&&(t.setAttribute("aria-hidden","true"),t=null)},i=function(t,e,a){var r=document.createElement("li"),n=document.createElement("div"),i=document.createElement("a");i.setAttribute("class","robustLinks RLItem"),i.href=a,i.innerHTML=e,n.appendChild(i),r.appendChild(n),t.appendChild(r)},s=function(t){var e=new Date(t);if(isNaN(e)&&(e=new Date(t.replace(/ /g,"T")),isNaN(e)))return"Invalid date";var a="";return a+=e.getUTCFullYear(),a+=r(e.getUTCMonth()+1),a+=r(e.getUTCDate()),a+=r(e.getUTCHours()),a+=r(e.getUTCMinutes()),a+=r(e.getUTCSeconds())},o=function(t){var e=s(t),a=e.substr(0,4)+"-"+e.substr(4,2)+"-"+e.substr(6,2);return"000000"!=e.substr(8,6)&&(a+=" "+e.substr(8,2)+":"+e.substr(10,2)+":"+e.substr(12,2)),a},c=function(t,e){try{return t.getAttribute(e).trim()}catch(t){return""}};return{robustify:function(){new RegExp("(?:"+e.join(")|(?:")+")").test(window.location.href)?console.log("Detected web archive, refusing to create Robust Link menus"):function(){for(var e=document.getElementsByTagName("span"),r=e.length-1;r>=0;r--)ariaLabel=c(e[r],"aria-label"),role=c(e[r],"role"),"RLElement"==ariaLabel&&(role="navigation")&&e[r].parentNode.removeChild(e[r]);var u=document.getElementsByTagName("a");for(r=0;r<u.length;r++){var h=c(u[r],"href");0==!h.search("http")&&(h=new URL(h,window.location.href).href);var l=c(u[r],"data-originalurl"),b=Boolean(l);b||(l=h);var p=c(u[r],"data-versionurl"),d=Boolean(p);!d&&b&&(p=h);var v=c(u[r],"data-versiondate"),m=Boolean(v);if(u[r].href.length>0&&(" "+u[r].className+" ").indexOf(" robustLinks ")<0&&(b||d||m)&&a(h)){var w="RL_"+Math.random().toString(36).substr(2,9),g=document.createElement("span");g.setAttribute("role","navigation"),g.setAttribute("aria-label","RLElement");var f=document.createElement("ul"),k=document.createElement("li");k.setAttribute("aria-label","RLOuter");var y=document.createElement("a");y.href="",y.setAttribute("aria-haspopup","true"),y.setAttribute("class","robustLinks dropDownButton RLArrow"),y.setAttribute("aria-controls",w);var L=document.createElement("div");L.setAttribute("class","robustLinks dropDownButton RLIcon");var A=document.createElement("ul");if(A.setAttribute("class","RLMenu"),A.id=w,A.setAttribute("aria-hidden","true"),document.createElement("li").setAttribute("class","RLTitle"),l&&i(A,"Current version of page",l),p&&i(A,"Version archived on "+o(v),p),m){var E="http://timetravel.mementoweb.org/memento/"+s(v)+"/"+l;i(A,"Version archived near "+o(v),E)}i(A,'<span style="text-decoration: underline; color:#0000ff"><img src="https://robustlinks.mementoweb.org/images/robustlinks-16px.png">Robustify Your Links!</span>',"https://robustlinks.mementoweb.org/"),k.appendChild(y),k.appendChild(A),f.appendChild(k),g.appendChild(f),y.parentNode.insertBefore(L,y),y.onclick=function(e){var a=document.getElementById(this.getAttribute("aria-controls")),r="true"==a.getAttribute("aria-hidden");return n(),r?(a.setAttribute("aria-hidden","false"),t=a):(a.setAttribute("aria-hidden","true"),t=null),e.stopPropagation(),!1},u[r].parentNode.insertBefore(g,u[r].nextSibling)}}document.onclick=n}()}}}();document.addEventListener("DOMContentLoaded",function(){RobustLinks.robustify()},!1);
