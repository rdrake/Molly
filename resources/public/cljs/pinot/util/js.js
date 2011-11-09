goog.provide('pinot.util.js');
goog.require('cljs.core');
pinot.util.js.map__GT_js = (function map__GT_js(m){
var out__2400 = cljs.core.js_obj.call(null);

var G__2401__2402 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__2401__2402))
{var G__2404__2406 = cljs.core.first.call(null,G__2401__2402);
var vec__2405__2407 = G__2404__2406;
var k__2408 = cljs.core.nth.call(null,vec__2405__2407,0,null);
var v__2409 = cljs.core.nth.call(null,vec__2405__2407,1,null);
var G__2401__2410 = G__2401__2402;

var G__2404__2411 = G__2404__2406;
var G__2401__2412 = G__2401__2410;

while(true){
var vec__2413__2414 = G__2404__2411;
var k__2415 = cljs.core.nth.call(null,vec__2413__2414,0,null);
var v__2416 = cljs.core.nth.call(null,vec__2413__2414,1,null);
var G__2401__2417 = G__2401__2412;

(out__2400[cljs.core.name.call(null,k__2415)] = v__2416);
var temp__3698__auto____2418 = cljs.core.next.call(null,G__2401__2417);

if(cljs.core.truth_(temp__3698__auto____2418))
{var G__2401__2419 = temp__3698__auto____2418;

{
var G__2420 = cljs.core.first.call(null,G__2401__2419);
var G__2421 = G__2401__2419;
G__2404__2411 = G__2420;
G__2401__2412 = G__2421;
continue;
}
} else
{}
break;
}
} else
{}
return out__2400;
});
pinot.util.js.log = (function log(text){
return console.log(text);
});
pinot.util.js.as_int = (function as_int(n){
return parseInt.call(null,n);
});
