var terser = require("./bundle.min.js");
let str = `
if(config.ptLogo<=2){{{>template_inlay_all_mobile_lu_native_ad_topic_js_main}}
}else{{{>template_inlay_all_mobile_lu_native_ad_topic_js_main_new}}}
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
