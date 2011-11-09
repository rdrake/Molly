goog.provide('molly.client.test');
goog.require('cljs.core');
goog.require('pinot.remotes');
pinot.remotes.remote_callback.call(null,"groups",cljs.core.Vector.fromArray(["instructors|75"]),(function (result){
return alert.call(null,result.call(null));
}));
alert.call(null,"It's working!");
