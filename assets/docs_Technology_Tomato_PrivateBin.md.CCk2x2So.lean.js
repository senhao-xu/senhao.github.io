import{_ as a,c as i,a2 as n,o as e}from"./chunks/framework.DPuwY6B9.js";const c=JSON.parse('{"title":"PrivateBin","description":"","frontmatter":{},"headers":[],"relativePath":"docs/Technology/Tomato/PrivateBin.md","filePath":"docs/Technology/Tomato/PrivateBin.md","lastUpdated":1722519091000}'),t={name:"docs/Technology/Tomato/PrivateBin.md"};function l(p,s,h,k,r,o){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="privatebin" tabindex="-1">PrivateBin <a class="header-anchor" href="#privatebin" aria-label="Permalink to &quot;PrivateBin&quot;">​</a></h1><hr><h2 id="privatebin-1" tabindex="-1">PrivateBin <a class="header-anchor" href="#privatebin-1" aria-label="Permalink to &quot;PrivateBin&quot;">​</a></h2><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p><strong>PrivateBin</strong>是一个极简、开源的在线pastebin，服务器对粘贴的数据一无所知。<a href="https://github.com/PrivateBin/PrivateBin/" target="_blank" rel="noreferrer">PrivateBin|Github</a>.</p><h3 id="使用docker部署" tabindex="-1">使用docker部署 <a class="header-anchor" href="#使用docker部署" aria-label="Permalink to &quot;使用docker部署&quot;">​</a></h3><p><a href="https://hub.docker.com/r/privatebin/nginx-fpm-alpine" target="_blank" rel="noreferrer">PrivateBin|Docker Hub</a> docker镜像地址，该Wiki中有详细的使用方法.</p><p>创建一个PrivateBin容器</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --read-only</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private-bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PWD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/privatebin-data:/srv/data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privatebin/nginx-fpm-alpine</span></span></code></pre></div><p>创建完成后需要对宿主机挂载的文件夹进行授权,否则会出现【送出】功能粘贴失败的问题,<code>chmod -R 777 privatebin-data </code> 进行授权.</p><p>部署完成后访问<code>http://ip:8080</code>进行访问，此时<strong>PrivateBin</strong>还无法使用，由于Private使用浏览器https进行数据加密所以需要使用nginx进行反代。</p><h4 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h4><p>支持上传附件或自定义配置</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;always&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --read-only</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> private-bin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8080:8080</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PWD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/conf.php:/srv/cfg/conf.php:ro</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PWD</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/privatebin-data:/srv/data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privatebin/nginx-fpm-alpine</span></span></code></pre></div><blockquote><p>conf.php</p></blockquote><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http_response_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/*</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; config file for PrivateBin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; An explanation of each setting can be find online at https://github.com/PrivateBin/PrivateBin/wiki/Configuration.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[main]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) set a project name to be displayed on the website</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; name = &quot;PrivateBin&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; The full URL, with the domain name and directories that point to the PrivateBin files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; This URL is essential to allow Opengraph images to be displayed on social networks</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; basepath = &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; enable or disable the discussion feature, defaults to true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">discussion = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; preselect the discussion feature, defaults to false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">opendiscussion = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; enable or disable the password feature, defaults to true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">password = true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; enable or disable the file upload feature, defaults to false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">fileupload = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; preselect the burn-after-reading feature, defaults to false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">burnafterreadingselected = false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; which display mode to preselect by default, defaults to &quot;plaintext&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; make sure the value exists in [formatter_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">defaultformatter = &quot;plaintext&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) set a syntax highlighting theme, as found in css/prettify/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; syntaxhighlightingtheme = &quot;sons-of-obsidian&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; size limit per paste or comment in bytes, defaults to 10 Mebibytes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">sizelimit = 10485760</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; template to include, default is &quot;bootstrap&quot; (tpl/bootstrap.php)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">template = &quot;bootstrap&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) info text to display</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; use single, instead of double quotes for HTML attributes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;info = &quot;More information on the &lt;a href=&#39;https://privatebin.info/&#39;&gt;project page&lt;/a&gt;.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) notice to display</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; notice = &quot;Note: This is a test service: Data may be deleted anytime. Kittens will die if you abuse this service.&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; by default PrivateBin will guess the visitors language based on the browsers</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; settings. Optionally you can enable the language selection menu, which uses</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; a session cookie to store the choice until the browser is closed.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">languageselection = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; set the language your installs defaults to, defaults to English</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; if this is set and language selection is disabled, this will be the only language</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; languagedefault = &quot;en&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) URL shortener address to offer after a new paste is created</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; it is suggested to only use this with self-hosted shorteners as this will leak</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; the pastes encryption key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; urlshortener = &quot;https://shortener.example.com/api?link=&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) Let users create a QR code for sharing the paste URL with one click.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; It works both when a new paste is created and when you view a paste.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; qrcode = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) IP based icons are a weak mechanism to detect if a comment was from</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; a different user when the same username was used in a comment. It might be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; used to get the IP of a non anonymous comment poster if the server salt is</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; leaked and a SHA256 HMAC rainbow table is generated for all (relevant) IPs.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Can be set to one these values: &quot;none&quot; / &quot;vizhash&quot; / &quot;identicon&quot; (default).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; icon = &quot;none&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Content Security Policy headers allow a website to restrict what sources are</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; allowed to be accessed in its context. You need to change this if you added</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; custom scripts from third-party domains to your templates, e.g. tracking</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; scripts or run your site behind certain DDoS-protection services.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Check the documentation at https://content-security-policy.com/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Notes:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; - If you use a bootstrap theme, you can remove the allow-popups from the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   sandbox restrictions.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; - By default this disallows to load images from third-party servers, e.g. when</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   they are embedded in pastes. If you wish to allow that, you can adjust the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   policy here. See https://github.com/PrivateBin/PrivateBin/wiki/FAQ#why-does-not-it-load-embedded-images</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   for details.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; - The &#39;unsafe-eval&#39; is used in two cases; to check if the browser supports</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   async functions and display an error if not and for Chrome to enable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   webassembly support (used for zlib compression). You can remove it if Chrome</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;   doesn&#39;t need to be supported and old browsers don&#39;t need to be warned.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; cspheader = &quot;default-src &#39;none&#39;; base-uri &#39;self&#39;; form-action &#39;none&#39;; manifest-src &#39;self&#39;; connect-src * blob:; script-src &#39;self&#39; &#39;unsafe-eval&#39;; style-src &#39;self&#39;; font-src &#39;self&#39;; frame-ancestors &#39;none&#39;; img-src &#39;self&#39; data: blob:; media-src blob:; object-src blob:; sandbox allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-downloads&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; stay compatible with PrivateBin Alpha 0.19, less secure</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; if enabled will use base64.js version 1.7 instead of 2.1.9 and sha1 instead of</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; sha256 in HMAC for the deletion token</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; zerobincompatibility = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Enable or disable the warning message when the site is served over an insecure</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; connection (insecure HTTP instead of HTTPS), defaults to true.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Secure transport methods like Tor and I2P domains are automatically whitelisted.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; It is **strongly discouraged** to disable this.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; See https://github.com/PrivateBin/PrivateBin/wiki/FAQ#why-does-it-show-me-an-error-about-an-insecure-connection for more information.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; httpwarning = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Pick compression algorithm or disable it. Only applies to pastes/comments</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; created after changing the setting.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Can be set to one these values: &quot;none&quot; / &quot;zlib&quot; (default).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; compression = &quot;zlib&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[expire]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; expire value that is selected per default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; make sure the value exists in [expire_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">default = &quot;1week&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[expire_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set each one of these to the number of seconds in the expiration period,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; or 0 if it should never expire</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">5min = 300</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">10min = 600</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1hour = 3600</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1day = 86400</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1week = 604800</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Well this is not *exactly* one month, it&#39;s 30 days:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1month = 2592000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">1year = 31536000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">never = 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[formatter_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set available formatters, their order and their labels</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">plaintext = &quot;Plain Text&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">syntaxhighlighting = &quot;Source Code&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">markdown = &quot;Markdown&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[traffic]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; time limit between calls from the same IP address in seconds</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set this to 0 to disable rate limiting.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">limit = 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) Set IPs addresses (v4 or v6) or subnets (CIDR) which are exempted</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; from the rate-limit. Invalid IPs will be ignored. If multiple values are to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; be exempted, the list needs to be comma separated. Leave unset to disable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; exemptions.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; exempted = &quot;1.2.3.4,10.10.10/24&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) If you want only some source IP addresses (v4 or v6) or subnets</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (CIDR) to be allowed to create pastes, set these here. Invalid IPs will be</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; ignored. If multiple values are to be exempted, the list needs to be comma</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; separated. Leave unset to allow anyone to create pastes.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; creators = &quot;1.2.3.4,10.10.10/24&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; (optional) if your website runs behind a reverse proxy or load balancer,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; set the HTTP header containing the visitors IP address, i.e. X_FORWARDED_FOR</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; header = &quot;X_FORWARDED_FOR&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[purge]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; minimum time limit between two purgings of expired pastes, it is only</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; triggered when pastes are created</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set this to 0 to run a purge every time a paste is created.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">limit = 300</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; maximum amount of expired pastes to delete in one purge</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; Set this to 0 to disable purging. Set it higher, if you are running a large</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; site</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">batchsize = 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[model]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; name of data model class to load and directory for storage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; the default model &quot;Filesystem&quot; stores everything in the filesystem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">class = Filesystem</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">[model_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">dir = PATH &quot;data&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; example of a Google Cloud Storage configuration</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;class = GoogleCloudStorage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;bucket = &quot;my-private-bin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;prefix = &quot;pastes&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; example of DB configuration for MySQL</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;class = Database</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;dsn = &quot;mysql:host=localhost;dbname=privatebin;charset=UTF8&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;tbl = &quot;privatebin_&quot;	; table prefix</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;usr = &quot;privatebin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;pwd = &quot;Z3r0P4ss&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;opt[12] = true	  ; PDO::ATTR_PERSISTENT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; example of DB configuration for SQLite</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;class = Database</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;dsn = &quot;sqlite:&quot; PATH &quot;data/db.sq3&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;usr = null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;pwd = null</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;opt[12] = true	; PDO::ATTR_PERSISTENT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">; example of DB configuration for PostgreSQL</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;class = Database</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;[model_options]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;dsn = &quot;pgsql:host=localhost;dbname=privatebin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;tbl = &quot;privatebin_&quot;     ; table prefix</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;usr = &quot;privatebin&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;pwd = &quot;Z3r0P4ss&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">;opt[12] = true    ; PDO::ATTR_PERSISTENT</span></span></code></pre></div><h3 id="nginx反代" tabindex="-1">Nginx反代 <a class="header-anchor" href="#nginx反代" aria-label="Permalink to &quot;Nginx反代&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> example.com;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/ssl/nginx.crt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/etc/nginx/ssl/nginx.key;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_session_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">http://example.com:8080;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>配置完成后,你就可以使用<strong>PrivateBin</strong>啦. 本站<a href="https://private.senhao.top/" target="_blank" rel="noreferrer">PrivateBin</a>地址.</p>`,19)]))}const g=a(t,[["render",l]]);export{c as __pageData,g as default};
