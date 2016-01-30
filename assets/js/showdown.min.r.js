var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,b){if("function"==typeof a.forEach)a.forEach(b);else{var c,d=a.length;for(c=0;d>c;c++)b(a[c],c,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(a){var b,c,d,e=0,f=[],g=[];if("undefind"!=typeof module&&"undefined"!=typeof exports&&"undefind"!=typeof require){var h=require("fs");if(h){var i=h.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")});Showdown.forEach(i,function(a){var b=stdExtName(a);Showdown.extensions[b]=require("./extensions/"+a)})}}if(this.makeHtml=function(a){return b={},c={},d=[],a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a="\n\n"+a+"\n\n",a=M(a),a=a.replace(/^[ \t]+$/gm,""),Showdown.forEach(f,function(b){a=k(b,a)}),a=z(a),a=m(a),a=l(a),a=o(a),a=K(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(g,function(b){a=k(b,a)}),a},a&&a.extensions){var j=this;Showdown.forEach(a.extensions,function(a){if("string"==typeof a&&(a=Showdown.extensions[stdExtName(a)]),"function"!=typeof a)throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(j),function(a){a.type?"language"===a.type||"lang"===a.type?f.push(a):("output"===a.type||"html"===a.type)&&g.push(a):g.push(a)})})}var w,k=function(a,b){if(a.regex){var c=RegExp(a.regex,"g");return b.replace(c,a.replace)}return a.filter?a.filter(b):void 0},l=function(a){return a+="~0",a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(a,d,e,f,g){return d=d.toLowerCase(),b[d]=G(e),f?f+g:(g&&(c[d]=g.replace(/"/g,"&quot;")),"")}),a=a.replace(/~0/,"")},m=function(a){return a=a.replace(/\n/g,"\n\n"),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,n),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/\n\n/g,"\n")},n=function(a,b){var c=b;return c=c.replace(/\n\n/g,"\n"),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(d.push(c)-1)+"K\n\n"},o=function(a){a=v(a);var b=A("<hr />");return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,b),a=x(a),a=y(a),a=E(a),a=m(a),a=F(a)},p=function(a){return a=B(a),a=q(a),a=H(a),a=t(a),a=r(a),a=I(a),a=G(a),a=D(a),a=a.replace(/  +\n/g," <br />\n")},q=function(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=N(b,"\\`*_")})},r=function(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,s),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,s)},s=function(a,d,e,f,g,h,i,j){void 0==j&&(j="");var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(""==n)if(""==m&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m,void 0!=b[m])n=b[m],void 0!=c[m]&&(o=c[m]);else{if(!(k.search(/\(\s*\)$/m)>-1))return k;n=""}n=N(n,"*_");var p='<a href="'+n+'"';return""!=o&&(o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"'),p+=">"+l+"</a>"},t=function(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,u),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,u)},u=function(a,d,e,f,g,h,i,j){var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(o||(o=""),""==n){if(""==m&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m,void 0==b[m])return k;n=b[m],void 0!=c[m]&&(o=c[m])}l=l.replace(/"/g,"&quot;"),n=N(n,"*_");var p='<img src="'+n+'" alt="'+l+'"';return o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"',p+=" />"},v=function(a){function b(a){return a.replace(/[^\w]/g,"").toLowerCase()}return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,c){return A('<h1 id="'+b(c)+'">'+p(c)+"</h1>")}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return A('<h2 id="'+b(c)+'">'+p(c)+"</h2>")}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,d){var e=c.length;return A("<h"+e+' id="'+b(d)+'">'+p(d)+"</h"+e+">")})},x=function(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return e?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol";d=d.replace(/\n{2,}/g,"\n\n\n");var f=w(d);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",f=f.replace(/\n{2,}/g,"\n\n\n"),h=w(f);return h=e+"<"+g+">\n"+h+"</"+g+">\n"})),a=a.replace(/~0/,"")};w=function(a){return e++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,c,d,e){var f=e,g=b;return g||f.search(/\n{2,}/)>-1?f=o(L(f)):(f=x(L(f)),f=f.replace(/\n$/,""),f=p(f)),"<li>"+f+"</li>\n"}),a=a.replace(/~0/g,""),e--,a};var y=function(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=C(L(d)),d=M(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>",A(d)+e}),a=a.replace(/~0/,"")},z=function(a){return a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,b,c){var d=b,e=c;return e=C(e),e=M(e),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),e="<pre><code"+(d?' class="'+d+'"':"")+">"+e+"\n</code></pre>",A(e)}),a=a.replace(/~0/,"")},A=function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(d.push(a)-1)+"K\n\n"},B=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=C(f),b+"<code>"+f+"</code>"})},C=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=N(a,"*_{}[]\\",!1)},D=function(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")},E=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=o(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"~0"),c=c.replace(/~0/g,"")}),A("<blockquote>\n"+c+"\n</blockquote>")})},F=function(a){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var b=a.split(/\n{2,}/g),c=[],e=b.length,f=0;e>f;f++){var g=b[f];g.search(/~K(\d+)K/g)>=0?c.push(g):g.search(/\S/)>=0&&(g=p(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",c.push(g))}e=c.length;for(var f=0;e>f;f++)for(;c[f].search(/~K(\d+)K/)>=0;){var h=d[RegExp.$1];h=h.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,h)}return c.join("\n\n")},G=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;")},H=function(a){return a=a.replace(/\\(\\)/g,O),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,O)},I=function(a){return a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return J(K(b))})},J=function(a){var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if("@"==a)a=b[Math.floor(2*Math.random())](a);else if(":"!=a){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">')},K=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})},L=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,"")},M=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b){for(var d=b,e=4-d.length%4,f=0;e>f;f++)d+=" ";return d}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,"")},N=function(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=RegExp(d,"g");return a=a.replace(e,O)},O=function(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}},"undefined"!=typeof module&&(module.exports=Showdown),"function"==typeof define&&define.amd&&define("showdown",function(){return Showdown});

/*global module:true*/
/*
 * Basic table support with re-entrant parsing, where cell content
 * can also specify markdown.
 *
 * Tables
 * ======
 *
 * | Col 1   | Col 2                                              |
 * |======== |====================================================|
 * |**bold** | ![Valid XHTML] (http://w3.org/Icons/valid-xhtml10) |
 * | Plain   | Value                                              |
 *
 */

(function(){
  var table = function(converter) {
    var tables = {}, style = 'text-align:left;', filter; 
    tables.th = function(header){
      if (header.trim() === "") { return "";}
      var id = header.trim().replace(/ /g, '_').toLowerCase();
      return '<th class="' + id + '" style="'+style+'">' + header + '</th>';
    };
    tables.td = function(cell) {
      return '<td style="'+style+'">' + converter.makeHtml(cell) + '</td>';
    };
    tables.ths = function(){
      var out = "", i = 0, hs = [].slice.apply(arguments);
      for (i;i<hs.length;i+=1) {
        out += tables.th(hs[i]) + '\n';
      }
      return out;
    };
    tables.tds = function(){
      var out = "", i = 0, ds = [].slice.apply(arguments);
      for (i;i<ds.length;i+=1) {
        out += tables.td(ds[i]) + '\n';
      }
      return out;
    };
    tables.thead = function() {
      var out, i = 0, hs = [].slice.apply(arguments);
      out = "<thead>\n";
      out += "<tr>\n";
      out += tables.ths.apply(this, hs);
      out += "</tr>\n";
      out += "</thead>\n";
      return out;
    };
    tables.tr = function() {
      var out, i = 0, cs = [].slice.apply(arguments);
      out = "<tr>\n";
      out += tables.tds.apply(this, cs);
      out += "</tr>\n";
      return out;
    };
    filter = function(text) { 
      var i=0, lines = text.split('\n'), tbl = [], line, hs, rows, out = [];
      for (i; i<lines.length;i+=1) {
        line = lines[i];
        // looks like a table heading
        if (line.trim().match(/^[|]{1}.*[|]{1}$/)) {
          line = line.trim();
          tbl=[];
          tbl.push('<div class="table-responsive"><table class="table table-bordered">');
          hs = line.substring(1, line.length -1).split('|');
          tbl.push(tables.thead.apply(this, hs));
          line = lines[++i];
          if (!line.trim().match(/^[|]{1}[-=| ]+[|]{1}$/)) {
            // not a table rolling back
            line = lines[--i];
          }
          else {
            line = lines[++i];
            tbl.push('<tbody>');
            while (line.trim().match(/^[|]{1}.*[|]{1}$/)) {
              line = line.trim();
              tbl.push(tables.tr.apply(this, line.substring(1, line.length -1).split('|')));
              line = lines[++i];
            }
            tbl.push('</tbody>');
            tbl.push('</table></div>');
            // we are done with this table and we move along
            out.push(tbl.join('\n'));
            continue;
          }
        }
        out.push(line);
      }             
      return out.join('\n');
    };
    return [
    { 
      type: 'lang', 
      filter: filter
    }
    ];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.table = table; }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = table;
  }
}());

//
//  Github Extension (WIP)
//  ~~strike-through~~   ->  <del>strike-through</del>
//

(function(){
    var github = function(converter) {
        return [
            {
              // strike-through
              // NOTE: showdown already replaced "~" with "~T", so we need to adjust accordingly.
              type    : 'lang',
              regex   : '(~T){2}([^~]+)(~T){2}',
              replace : function(match, prefix, content, suffix) {
                  return '<del>' + content + '</del>';
              }
            }
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.github = github; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = github;
}());