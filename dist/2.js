var terser = require("./bundle.min.js");
let str = `
var ads = {{bdCustAd}};
var config = {{bdCustConf}};
var ad_num = window.ads.length;
var bdJinglianExpFlag={{bdJinglianExpFlag}};
var bdUserPreferenceExpFlag={{bdUserPreferenceExpFlag}};
var bdJinglianHoverTitle="{{bdJinglianHoverTitle}}";
if (config.znyxStyleRecover) {
    config.enable_wap_znyx = 0;
    config.oDesc = 0;
    config.ptDesc = 2;
    config.pih = 77;
    config.piw = 120;
    config.titleLineHeight = 0;
}
config.ptLogo = 0;
for(var i = 0;i<ads.length;++i){
    var t = ads[i].mt_desc.split("?");
    if (t.length ==2) {
        ads[i].mt_desc = t[0];
        ads[i].curl += "&"+t[1];
    }
}
if(config.ptp === 3 && config.rtn > 1) {
    {{>baiduCustNativeADImageCarousel_iSlider}}
}
{{>template_inlay_all_mobile_lu_native_ad_topic_1_assets_js}}
{{>TemplateEngine_winnotice_mob}}
if(isLogoOrder(config) === 1){
    {{>TemplateEngine_mob_logoIsShow}}
}
var is_fcad = "{{is_fcad}}";
var dtime = "{{ck_dtime}}";
{{>template_inlay_all_mobile_lu_native_ad_add_ck_js}}
if(is_fcad == 1){CK(dtime,document.querySelectorAll('.container'),ckToLink);}

{{>template_inlay_all_lu_image_filter}}
{{>TemplateEngine_adbDup}}
adbDup("background-color:white;overflow:hidden;display:block;font-family:Microsoft YaHei;margin:0;padding:0;");
picContainerHandle();
{{>TemplateEngine_postmessage}}
`
var result = terser.minify(str, {
    compress: {
        reduce_vars: false,
        join_vars: false,
    }
});
result.then(res => {
    console.log(res.code);
});
