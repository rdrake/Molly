goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2432 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{var or__3548__auto____2433 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = coll;

if(cljs.core.truth_(and__3546__auto____2434))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2434;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = coll;

if(cljs.core.truth_(and__3546__auto____2437))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2437;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = coll;

if(cljs.core.truth_(and__3546__auto____2440))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2440;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2449 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = coll;

if(cljs.core.truth_(and__3546__auto____2443))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2443;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2450 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2446 = coll;

if(cljs.core.truth_(and__3546__auto____2446))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2446;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2447 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{var or__3548__auto____2448 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2448))
{return or__3548__auto____2448;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2449.call(this,coll,n);
case  3 :
return _nth__2450.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2452 = coll;

if(cljs.core.truth_(and__3546__auto____2452))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2452;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2453 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{var or__3548__auto____2454 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2454))
{return or__3548__auto____2454;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2455 = coll;

if(cljs.core.truth_(and__3546__auto____2455))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2455;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2456 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{var or__3548__auto____2457 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2464 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2458 = o;

if(cljs.core.truth_(and__3546__auto____2458))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2458;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2459 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{var or__3548__auto____2460 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2465 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2461 = o;

if(cljs.core.truth_(and__3546__auto____2461))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2461;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2462 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{var or__3548__auto____2463 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2464.call(this,o,k);
case  3 :
return _lookup__2465.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2467 = coll;

if(cljs.core.truth_(and__3546__auto____2467))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2467;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2468 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{var or__3548__auto____2469 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2470 = coll;

if(cljs.core.truth_(and__3546__auto____2470))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2470;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2471 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{var or__3548__auto____2472 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2473 = coll;

if(cljs.core.truth_(and__3546__auto____2473))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2473;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2474 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2474))
{return or__3548__auto____2474;
} else
{var or__3548__auto____2475 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2475))
{return or__3548__auto____2475;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2476 = coll;

if(cljs.core.truth_(and__3546__auto____2476))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2476;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2477 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{var or__3548__auto____2478 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2479 = coll;

if(cljs.core.truth_(and__3546__auto____2479))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2479;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2480 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{var or__3548__auto____2481 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2482 = coll;

if(cljs.core.truth_(and__3546__auto____2482))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2482;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2483 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{var or__3548__auto____2484 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2485 = coll;

if(cljs.core.truth_(and__3546__auto____2485))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2485;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2486 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{var or__3548__auto____2487 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2488 = o;

if(cljs.core.truth_(and__3546__auto____2488))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2488;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2489 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{var or__3548__auto____2490 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2490))
{return or__3548__auto____2490;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2491 = o;

if(cljs.core.truth_(and__3546__auto____2491))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2491;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2492 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{var or__3548__auto____2493 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2494 = o;

if(cljs.core.truth_(and__3546__auto____2494))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2494;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2495 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{var or__3548__auto____2496 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2496))
{return or__3548__auto____2496;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2497 = o;

if(cljs.core.truth_(and__3546__auto____2497))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2497;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2498 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{var or__3548__auto____2499 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2506 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2500 = coll;

if(cljs.core.truth_(and__3546__auto____2500))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2500;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2501 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{var or__3548__auto____2502 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2502))
{return or__3548__auto____2502;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2507 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2503 = coll;

if(cljs.core.truth_(and__3546__auto____2503))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2503;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2504 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{var or__3548__auto____2505 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2505))
{return or__3548__auto____2505;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2506.call(this,coll,f);
case  3 :
return _reduce__2507.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2509 = o;

if(cljs.core.truth_(and__3546__auto____2509))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2509;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2510 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2510))
{return or__3548__auto____2510;
} else
{var or__3548__auto____2511 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2511))
{return or__3548__auto____2511;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2512 = o;

if(cljs.core.truth_(and__3546__auto____2512))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2512;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2513 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2513))
{return or__3548__auto____2513;
} else
{var or__3548__auto____2514 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2514))
{return or__3548__auto____2514;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2515 = o;

if(cljs.core.truth_(and__3546__auto____2515))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2515;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2516 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2516))
{return or__3548__auto____2516;
} else
{var or__3548__auto____2517 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2517))
{return or__3548__auto____2517;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2518 = o;

if(cljs.core.truth_(and__3546__auto____2518))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2518;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2519 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2519))
{return or__3548__auto____2519;
} else
{var or__3548__auto____2520 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2520))
{return or__3548__auto____2520;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2521 = d;

if(cljs.core.truth_(and__3546__auto____2521))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2521;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2522 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2522))
{return or__3548__auto____2522;
} else
{var or__3548__auto____2523 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2523))
{return or__3548__auto____2523;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2524 = this$;

if(cljs.core.truth_(and__3546__auto____2524))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2524;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2525 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2525))
{return or__3548__auto____2525;
} else
{var or__3548__auto____2526 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2526))
{return or__3548__auto____2526;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2527 = this$;

if(cljs.core.truth_(and__3546__auto____2527))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2527;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2528 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2528))
{return or__3548__auto____2528;
} else
{var or__3548__auto____2529 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2529))
{return or__3548__auto____2529;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2530 = this$;

if(cljs.core.truth_(and__3546__auto____2530))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2530;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2531 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2531))
{return or__3548__auto____2531;
} else
{var or__3548__auto____2532 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2532))
{return or__3548__auto____2532;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2533 = null;
var G__2533__2534 = (function (o,k){
return null;
});
var G__2533__2535 = (function (o,k,not_found){
return not_found;
});
G__2533 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2533__2534.call(this,o,k);
case  3 :
return G__2533__2535.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2533;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2537 = null;
var G__2537__2538 = (function (_,f){
return f.call(null);
});
var G__2537__2539 = (function (_,f,start){
return start;
});
G__2537 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2537__2538.call(this,_,f);
case  3 :
return G__2537__2539.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2537;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2541 = null;
var G__2541__2542 = (function (_,n){
return null;
});
var G__2541__2543 = (function (_,n,not_found){
return not_found;
});
G__2541 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2541__2542.call(this,_,n);
case  3 :
return G__2541__2543.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2541;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2551 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2545 = cljs.core._nth.call(null,cicoll,0);
var n__2546 = 1;

while(true){
if(cljs.core.truth_((n__2546 < cljs.core._count.call(null,cicoll))))
{{
var G__2555 = f.call(null,val__2545,cljs.core._nth.call(null,cicoll,n__2546));
var G__2556 = (n__2546 + 1);
val__2545 = G__2555;
n__2546 = G__2556;
continue;
}
} else
{return val__2545;
}
break;
}
}
});
var ci_reduce__2552 = (function (cicoll,f,val){
var val__2547 = val;
var n__2548 = 0;

while(true){
if(cljs.core.truth_((n__2548 < cljs.core._count.call(null,cicoll))))
{{
var G__2557 = f.call(null,val__2547,cljs.core._nth.call(null,cicoll,n__2548));
var G__2558 = (n__2548 + 1);
val__2547 = G__2557;
n__2548 = G__2558;
continue;
}
} else
{return val__2547;
}
break;
}
});
var ci_reduce__2553 = (function (cicoll,f,val,idx){
var val__2549 = val;
var n__2550 = idx;

while(true){
if(cljs.core.truth_((n__2550 < cljs.core._count.call(null,cicoll))))
{{
var G__2559 = f.call(null,val__2549,cljs.core._nth.call(null,cicoll,n__2550));
var G__2560 = (n__2550 + 1);
val__2549 = G__2559;
n__2550 = G__2560;
continue;
}
} else
{return val__2549;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2551.call(this,cicoll,f);
case  3 :
return ci_reduce__2552.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2553.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2561 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2574 = null;
var G__2574__2575 = (function (coll,f){
var this__2562 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2562.a[this__2562.i]),(this__2562.i + 1));
});
var G__2574__2576 = (function (coll,f,start){
var this__2563 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2563.i);
});
G__2574 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2574__2575.call(this,coll,f);
case  3 :
return G__2574__2576.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2574;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2564 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2565 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2578 = null;
var G__2578__2579 = (function (coll,n){
var this__2566 = this;
var i__2567 = (n + this__2566.i);

if(cljs.core.truth_((i__2567 < this__2566.a.length)))
{return (this__2566.a[i__2567]);
} else
{return null;
}
});
var G__2578__2580 = (function (coll,n,not_found){
var this__2568 = this;
var i__2569 = (n + this__2568.i);

if(cljs.core.truth_((i__2569 < this__2568.a.length)))
{return (this__2568.a[i__2569]);
} else
{return not_found;
}
});
G__2578 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2578__2579.call(this,coll,n);
case  3 :
return G__2578__2580.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2578;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2570 = this;
return (this__2570.a.length - this__2570.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2571 = this;
return (this__2571.a[this__2571.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2572 = this;
if(cljs.core.truth_(((this__2572.i + 1) < this__2572.a.length)))
{return (new cljs.core.IndexedSeq(this__2572.a,(this__2572.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2573 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2582 = null;
var G__2582__2583 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2582__2584 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2582 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2582__2583.call(this,array,f);
case  3 :
return G__2582__2584.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2582;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2586 = null;
var G__2586__2587 = (function (array,k){
return (array[k]);
});
var G__2586__2588 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2586 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2586__2587.call(this,array,k);
case  3 :
return G__2586__2588.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2586;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2590 = null;
var G__2590__2591 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2590__2592 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2590 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2590__2591.call(this,array,n);
case  3 :
return G__2590__2592.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2590;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2594))
{var s__2595 = temp__3698__auto____2594;

return cljs.core._first.call(null,s__2595);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2596 = cljs.core.next.call(null,s);
s = G__2596;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2597 = cljs.core.seq.call(null,x);
var n__2598 = 0;

while(true){
if(cljs.core.truth_(s__2597))
{{
var G__2599 = cljs.core.next.call(null,s__2597);
var G__2600 = (n__2598 + 1);
s__2597 = G__2599;
n__2598 = G__2600;
continue;
}
} else
{return n__2598;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2601 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2602 = (function() { 
var G__2604__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2605 = conj.call(null,coll,x);
var G__2606 = cljs.core.first.call(null,xs);
var G__2607 = cljs.core.next.call(null,xs);
coll = G__2605;
x = G__2606;
xs = G__2607;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2604 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2604__delegate.call(this, coll, x, xs);
};
G__2604.cljs$lang$maxFixedArity = 2;
G__2604.cljs$lang$applyTo = (function (arglist__2608){
var coll = cljs.core.first(arglist__2608);
var x = cljs.core.first(cljs.core.next(arglist__2608));
var xs = cljs.core.rest(cljs.core.next(arglist__2608));
return G__2604__delegate.call(this, coll, x, xs);
});
return G__2604;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2601.call(this,coll,x);
default:
return conj__2602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2602.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2609 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2610 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2609.call(this,coll,n);
case  3 :
return nth__2610.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2612 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2613 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2612.call(this,o,k);
case  3 :
return get__2613.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2616 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2617 = (function() { 
var G__2619__delegate = function (coll,k,v,kvs){
while(true){
var ret__2615 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2620 = ret__2615;
var G__2621 = cljs.core.first.call(null,kvs);
var G__2622 = cljs.core.second.call(null,kvs);
var G__2623 = cljs.core.nnext.call(null,kvs);
coll = G__2620;
k = G__2621;
v = G__2622;
kvs = G__2623;
continue;
}
} else
{return ret__2615;
}
break;
}
};
var G__2619 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2619__delegate.call(this, coll, k, v, kvs);
};
G__2619.cljs$lang$maxFixedArity = 3;
G__2619.cljs$lang$applyTo = (function (arglist__2624){
var coll = cljs.core.first(arglist__2624);
var k = cljs.core.first(cljs.core.next(arglist__2624));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2624)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2624)));
return G__2619__delegate.call(this, coll, k, v, kvs);
});
return G__2619;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2616.call(this,coll,k,v);
default:
return assoc__2617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2617.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2626 = (function (coll){
return coll;
});
var dissoc__2627 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2628 = (function() { 
var G__2630__delegate = function (coll,k,ks){
while(true){
var ret__2625 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2631 = ret__2625;
var G__2632 = cljs.core.first.call(null,ks);
var G__2633 = cljs.core.next.call(null,ks);
coll = G__2631;
k = G__2632;
ks = G__2633;
continue;
}
} else
{return ret__2625;
}
break;
}
};
var G__2630 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2630__delegate.call(this, coll, k, ks);
};
G__2630.cljs$lang$maxFixedArity = 2;
G__2630.cljs$lang$applyTo = (function (arglist__2634){
var coll = cljs.core.first(arglist__2634);
var k = cljs.core.first(cljs.core.next(arglist__2634));
var ks = cljs.core.rest(cljs.core.next(arglist__2634));
return G__2630__delegate.call(this, coll, k, ks);
});
return G__2630;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2626.call(this,coll);
case  2 :
return dissoc__2627.call(this,coll,k);
default:
return dissoc__2628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2628.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__316__auto____2635 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2636 = x__316__auto____2635;

if(cljs.core.truth_(and__3546__auto____2636))
{var and__3546__auto____2637 = x__316__auto____2635.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2637))
{return cljs.core.not.call(null,x__316__auto____2635.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2637;
}
} else
{return and__3546__auto____2636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____2635);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2639 = (function (coll){
return coll;
});
var disj__2640 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2641 = (function() { 
var G__2643__delegate = function (coll,k,ks){
while(true){
var ret__2638 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2644 = ret__2638;
var G__2645 = cljs.core.first.call(null,ks);
var G__2646 = cljs.core.next.call(null,ks);
coll = G__2644;
k = G__2645;
ks = G__2646;
continue;
}
} else
{return ret__2638;
}
break;
}
};
var G__2643 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2643__delegate.call(this, coll, k, ks);
};
G__2643.cljs$lang$maxFixedArity = 2;
G__2643.cljs$lang$applyTo = (function (arglist__2647){
var coll = cljs.core.first(arglist__2647);
var k = cljs.core.first(cljs.core.next(arglist__2647));
var ks = cljs.core.rest(cljs.core.next(arglist__2647));
return G__2643__delegate.call(this, coll, k, ks);
});
return G__2643;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2639.call(this,coll);
case  2 :
return disj__2640.call(this,coll,k);
default:
return disj__2641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2641.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2648 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2649 = x__316__auto____2648;

if(cljs.core.truth_(and__3546__auto____2649))
{var and__3546__auto____2650 = x__316__auto____2648.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2650))
{return cljs.core.not.call(null,x__316__auto____2648.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2650;
}
} else
{return and__3546__auto____2649;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__316__auto____2648);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2651 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2652 = x__316__auto____2651;

if(cljs.core.truth_(and__3546__auto____2652))
{var and__3546__auto____2653 = x__316__auto____2651.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2653))
{return cljs.core.not.call(null,x__316__auto____2651.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2653;
}
} else
{return and__3546__auto____2652;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__316__auto____2651);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__316__auto____2654 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2655 = x__316__auto____2654;

if(cljs.core.truth_(and__3546__auto____2655))
{var and__3546__auto____2656 = x__316__auto____2654.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2656))
{return cljs.core.not.call(null,x__316__auto____2654.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2656;
}
} else
{return and__3546__auto____2655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__316__auto____2654);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__316__auto____2657 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2658 = x__316__auto____2657;

if(cljs.core.truth_(and__3546__auto____2658))
{var and__3546__auto____2659 = x__316__auto____2657.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2659))
{return cljs.core.not.call(null,x__316__auto____2657.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2659;
}
} else
{return and__3546__auto____2658;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__316__auto____2657);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__316__auto____2660 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2661 = x__316__auto____2660;

if(cljs.core.truth_(and__3546__auto____2661))
{var and__3546__auto____2662 = x__316__auto____2660.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2662))
{return cljs.core.not.call(null,x__316__auto____2660.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2662;
}
} else
{return and__3546__auto____2661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__316__auto____2660);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__316__auto____2663 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2664 = x__316__auto____2663;

if(cljs.core.truth_(and__3546__auto____2664))
{var and__3546__auto____2665 = x__316__auto____2663.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2665))
{return cljs.core.not.call(null,x__316__auto____2663.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2665;
}
} else
{return and__3546__auto____2664;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__316__auto____2663);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__316__auto____2666 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2667 = x__316__auto____2666;

if(cljs.core.truth_(and__3546__auto____2667))
{var and__3546__auto____2668 = x__316__auto____2666.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2668))
{return cljs.core.not.call(null,x__316__auto____2666.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2668;
}
} else
{return and__3546__auto____2667;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__316__auto____2666);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2669 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2669.push(key);
}));
return keys__2669;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__316__auto____2670 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2671 = x__316__auto____2670;

if(cljs.core.truth_(and__3546__auto____2671))
{var and__3546__auto____2672 = x__316__auto____2670.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2672))
{return cljs.core.not.call(null,x__316__auto____2670.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2672;
}
} else
{return and__3546__auto____2671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__316__auto____2670);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2673 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2673))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2674 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2674))
{return or__3548__auto____2674;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2673;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2675 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2675))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2675;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2676 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2676))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2676;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2677 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2677))
{return (n == n.toFixed());
} else
{return and__3546__auto____2677;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2678 = coll;

if(cljs.core.truth_(and__3546__auto____2678))
{var and__3546__auto____2679 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2679))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2679;
}
} else
{return and__3546__auto____2678;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2684 = (function (x){
return true;
});
var distinct_QMARK___2685 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2686 = (function() { 
var G__2688__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2680 = cljs.core.set([y,x]);
var xs__2681 = more;

while(true){
var x__2682 = cljs.core.first.call(null,xs__2681);
var etc__2683 = cljs.core.next.call(null,xs__2681);

if(cljs.core.truth_(xs__2681))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2680,x__2682)))
{return false;
} else
{{
var G__2689 = cljs.core.conj.call(null,s__2680,x__2682);
var G__2690 = etc__2683;
s__2680 = G__2689;
xs__2681 = G__2690;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2688 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2688__delegate.call(this, x, y, more);
};
G__2688.cljs$lang$maxFixedArity = 2;
G__2688.cljs$lang$applyTo = (function (arglist__2691){
var x = cljs.core.first(arglist__2691);
var y = cljs.core.first(cljs.core.next(arglist__2691));
var more = cljs.core.rest(cljs.core.next(arglist__2691));
return G__2688__delegate.call(this, x, y, more);
});
return G__2688;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2684.call(this,x);
case  2 :
return distinct_QMARK___2685.call(this,x,y);
default:
return distinct_QMARK___2686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2686.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2692 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2692)))
{return r__2692;
} else
{if(cljs.core.truth_(r__2692))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2694 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2695 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2693 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2693,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2693);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2694.call(this,comp);
case  2 :
return sort__2695.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2697 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2698 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2697.call(this,keyfn,comp);
case  3 :
return sort_by__2698.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2700 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2701 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2700.call(this,f,val);
case  3 :
return reduce__2701.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2707 = (function (f,coll){
var temp__3695__auto____2703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2703))
{var s__2704 = temp__3695__auto____2703;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2704),cljs.core.next.call(null,s__2704));
} else
{return f.call(null);
}
});
var seq_reduce__2708 = (function (f,val,coll){
var val__2705 = val;
var coll__2706 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2706))
{{
var G__2710 = f.call(null,val__2705,cljs.core.first.call(null,coll__2706));
var G__2711 = cljs.core.next.call(null,coll__2706);
val__2705 = G__2710;
coll__2706 = G__2711;
continue;
}
} else
{return val__2705;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2707.call(this,f,val);
case  3 :
return seq_reduce__2708.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2712 = null;
var G__2712__2713 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2712__2714 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2712 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2712__2713.call(this,coll,f);
case  3 :
return G__2712__2714.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2712;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2716 = (function (){
return 0;
});
var _PLUS___2717 = (function (x){
return x;
});
var _PLUS___2718 = (function (x,y){
return (x + y);
});
var _PLUS___2719 = (function() { 
var G__2721__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2721 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2721__delegate.call(this, x, y, more);
};
G__2721.cljs$lang$maxFixedArity = 2;
G__2721.cljs$lang$applyTo = (function (arglist__2722){
var x = cljs.core.first(arglist__2722);
var y = cljs.core.first(cljs.core.next(arglist__2722));
var more = cljs.core.rest(cljs.core.next(arglist__2722));
return G__2721__delegate.call(this, x, y, more);
});
return G__2721;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2716.call(this);
case  1 :
return _PLUS___2717.call(this,x);
case  2 :
return _PLUS___2718.call(this,x,y);
default:
return _PLUS___2719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2719.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2723 = (function (x){
return (- x);
});
var ___2724 = (function (x,y){
return (x - y);
});
var ___2725 = (function() { 
var G__2727__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2727 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2727__delegate.call(this, x, y, more);
};
G__2727.cljs$lang$maxFixedArity = 2;
G__2727.cljs$lang$applyTo = (function (arglist__2728){
var x = cljs.core.first(arglist__2728);
var y = cljs.core.first(cljs.core.next(arglist__2728));
var more = cljs.core.rest(cljs.core.next(arglist__2728));
return G__2727__delegate.call(this, x, y, more);
});
return G__2727;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2723.call(this,x);
case  2 :
return ___2724.call(this,x,y);
default:
return ___2725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2725.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2729 = (function (){
return 1;
});
var _STAR___2730 = (function (x){
return x;
});
var _STAR___2731 = (function (x,y){
return (x * y);
});
var _STAR___2732 = (function() { 
var G__2734__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2734 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2734__delegate.call(this, x, y, more);
};
G__2734.cljs$lang$maxFixedArity = 2;
G__2734.cljs$lang$applyTo = (function (arglist__2735){
var x = cljs.core.first(arglist__2735);
var y = cljs.core.first(cljs.core.next(arglist__2735));
var more = cljs.core.rest(cljs.core.next(arglist__2735));
return G__2734__delegate.call(this, x, y, more);
});
return G__2734;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2729.call(this);
case  1 :
return _STAR___2730.call(this,x);
case  2 :
return _STAR___2731.call(this,x,y);
default:
return _STAR___2732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2732.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2736 = (function (x){
return (1 / x);
});
var _SLASH___2737 = (function (x,y){
return (x / y);
});
var _SLASH___2738 = (function() { 
var G__2740__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2740__delegate.call(this, x, y, more);
};
G__2740.cljs$lang$maxFixedArity = 2;
G__2740.cljs$lang$applyTo = (function (arglist__2741){
var x = cljs.core.first(arglist__2741);
var y = cljs.core.first(cljs.core.next(arglist__2741));
var more = cljs.core.rest(cljs.core.next(arglist__2741));
return G__2740__delegate.call(this, x, y, more);
});
return G__2740;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2736.call(this,x);
case  2 :
return _SLASH___2737.call(this,x,y);
default:
return _SLASH___2738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2738.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2742 = (function (x){
return true;
});
var _LT___2743 = (function (x,y){
return (x < y);
});
var _LT___2744 = (function() { 
var G__2746__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2747 = y;
var G__2748 = cljs.core.first.call(null,more);
var G__2749 = cljs.core.next.call(null,more);
x = G__2747;
y = G__2748;
more = G__2749;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2746__delegate.call(this, x, y, more);
};
G__2746.cljs$lang$maxFixedArity = 2;
G__2746.cljs$lang$applyTo = (function (arglist__2750){
var x = cljs.core.first(arglist__2750);
var y = cljs.core.first(cljs.core.next(arglist__2750));
var more = cljs.core.rest(cljs.core.next(arglist__2750));
return G__2746__delegate.call(this, x, y, more);
});
return G__2746;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2742.call(this,x);
case  2 :
return _LT___2743.call(this,x,y);
default:
return _LT___2744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2744.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2751 = (function (x){
return true;
});
var _LT__EQ___2752 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2753 = (function() { 
var G__2755__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2756 = y;
var G__2757 = cljs.core.first.call(null,more);
var G__2758 = cljs.core.next.call(null,more);
x = G__2756;
y = G__2757;
more = G__2758;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2755 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2755__delegate.call(this, x, y, more);
};
G__2755.cljs$lang$maxFixedArity = 2;
G__2755.cljs$lang$applyTo = (function (arglist__2759){
var x = cljs.core.first(arglist__2759);
var y = cljs.core.first(cljs.core.next(arglist__2759));
var more = cljs.core.rest(cljs.core.next(arglist__2759));
return G__2755__delegate.call(this, x, y, more);
});
return G__2755;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2751.call(this,x);
case  2 :
return _LT__EQ___2752.call(this,x,y);
default:
return _LT__EQ___2753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2753.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2760 = (function (x){
return true;
});
var _GT___2761 = (function (x,y){
return (x > y);
});
var _GT___2762 = (function() { 
var G__2764__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2765 = y;
var G__2766 = cljs.core.first.call(null,more);
var G__2767 = cljs.core.next.call(null,more);
x = G__2765;
y = G__2766;
more = G__2767;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2764 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2764__delegate.call(this, x, y, more);
};
G__2764.cljs$lang$maxFixedArity = 2;
G__2764.cljs$lang$applyTo = (function (arglist__2768){
var x = cljs.core.first(arglist__2768);
var y = cljs.core.first(cljs.core.next(arglist__2768));
var more = cljs.core.rest(cljs.core.next(arglist__2768));
return G__2764__delegate.call(this, x, y, more);
});
return G__2764;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2760.call(this,x);
case  2 :
return _GT___2761.call(this,x,y);
default:
return _GT___2762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2762.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2769 = (function (x){
return true;
});
var _GT__EQ___2770 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2771 = (function() { 
var G__2773__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2774 = y;
var G__2775 = cljs.core.first.call(null,more);
var G__2776 = cljs.core.next.call(null,more);
x = G__2774;
y = G__2775;
more = G__2776;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2773 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2773__delegate.call(this, x, y, more);
};
G__2773.cljs$lang$maxFixedArity = 2;
G__2773.cljs$lang$applyTo = (function (arglist__2777){
var x = cljs.core.first(arglist__2777);
var y = cljs.core.first(cljs.core.next(arglist__2777));
var more = cljs.core.rest(cljs.core.next(arglist__2777));
return G__2773__delegate.call(this, x, y, more);
});
return G__2773;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2769.call(this,x);
case  2 :
return _GT__EQ___2770.call(this,x,y);
default:
return _GT__EQ___2771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2771.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2778 = (function (x){
return x;
});
var max__2779 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2780 = (function() { 
var G__2782__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2782 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2782__delegate.call(this, x, y, more);
};
G__2782.cljs$lang$maxFixedArity = 2;
G__2782.cljs$lang$applyTo = (function (arglist__2783){
var x = cljs.core.first(arglist__2783);
var y = cljs.core.first(cljs.core.next(arglist__2783));
var more = cljs.core.rest(cljs.core.next(arglist__2783));
return G__2782__delegate.call(this, x, y, more);
});
return G__2782;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2778.call(this,x);
case  2 :
return max__2779.call(this,x,y);
default:
return max__2780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2780.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2784 = (function (x){
return x;
});
var min__2785 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2786 = (function() { 
var G__2788__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2788 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2788__delegate.call(this, x, y, more);
};
G__2788.cljs$lang$maxFixedArity = 2;
G__2788.cljs$lang$applyTo = (function (arglist__2789){
var x = cljs.core.first(arglist__2789);
var y = cljs.core.first(cljs.core.next(arglist__2789));
var more = cljs.core.rest(cljs.core.next(arglist__2789));
return G__2788__delegate.call(this, x, y, more);
});
return G__2788;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2784.call(this,x);
case  2 :
return min__2785.call(this,x,y);
default:
return min__2786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2786.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2790 = (n % d);

return cljs.core.fix.call(null,((n - rem__2790) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2791 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2791));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2792 = (function (){
return Math.random.call(null);
});
var rand__2793 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2792.call(this);
case  1 :
return rand__2793.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2795 = (function (x){
return true;
});
var _EQ__EQ___2796 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2797 = (function() { 
var G__2799__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2800 = y;
var G__2801 = cljs.core.first.call(null,more);
var G__2802 = cljs.core.next.call(null,more);
x = G__2800;
y = G__2801;
more = G__2802;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2799 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2799__delegate.call(this, x, y, more);
};
G__2799.cljs$lang$maxFixedArity = 2;
G__2799.cljs$lang$applyTo = (function (arglist__2803){
var x = cljs.core.first(arglist__2803);
var y = cljs.core.first(cljs.core.next(arglist__2803));
var more = cljs.core.rest(cljs.core.next(arglist__2803));
return G__2799__delegate.call(this, x, y, more);
});
return G__2799;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2795.call(this,x);
case  2 :
return _EQ__EQ___2796.call(this,x,y);
default:
return _EQ__EQ___2797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2797.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2804 = n;
var xs__2805 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2806 = xs__2805;

if(cljs.core.truth_(and__3546__auto____2806))
{return (n__2804 > 0);
} else
{return and__3546__auto____2806;
}
})()))
{{
var G__2807 = (n__2804 - 1);
var G__2808 = cljs.core.next.call(null,xs__2805);
n__2804 = G__2807;
xs__2805 = G__2808;
continue;
}
} else
{return xs__2805;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2813 = null;
var G__2813__2814 = (function (coll,n){
var temp__3695__auto____2809 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2809))
{var xs__2810 = temp__3695__auto____2809;

return cljs.core.first.call(null,xs__2810);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2813__2815 = (function (coll,n,not_found){
var temp__3695__auto____2811 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2811))
{var xs__2812 = temp__3695__auto____2811;

return cljs.core.first.call(null,xs__2812);
} else
{return not_found;
}
});
G__2813 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2813__2814.call(this,coll,n);
case  3 :
return G__2813__2815.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2813;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2817 = (function (){
return "";
});
var str_STAR___2818 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2819 = (function() { 
var G__2821__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2822 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2823 = cljs.core.next.call(null,more);
sb = G__2822;
more = G__2823;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2821 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2821__delegate.call(this, x, ys);
};
G__2821.cljs$lang$maxFixedArity = 1;
G__2821.cljs$lang$applyTo = (function (arglist__2824){
var x = cljs.core.first(arglist__2824);
var ys = cljs.core.rest(arglist__2824);
return G__2821__delegate.call(this, x, ys);
});
return G__2821;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2817.call(this);
case  1 :
return str_STAR___2818.call(this,x);
default:
return str_STAR___2819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2819.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2825 = (function (){
return "";
});
var str__2826 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2827 = (function() { 
var G__2829__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2829 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2829__delegate.call(this, x, ys);
};
G__2829.cljs$lang$maxFixedArity = 1;
G__2829.cljs$lang$applyTo = (function (arglist__2830){
var x = cljs.core.first(arglist__2830);
var ys = cljs.core.rest(arglist__2830);
return G__2829__delegate.call(this, x, ys);
});
return G__2829;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2825.call(this);
case  1 :
return str__2826.call(this,x);
default:
return str__2827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2827.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2831 = (function (s,start){
return s.substring(start);
});
var subs__2832 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2831.call(this,s,start);
case  3 :
return subs__2832.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2834 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__2835 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2834.call(this,ns);
case  2 :
return symbol__2835.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2837 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2838 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2837.call(this,ns);
case  2 :
return keyword__2838.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2840 = cljs.core.seq.call(null,x);
var ys__2841 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2840)))
{return cljs.core.nil_QMARK_.call(null,ys__2841);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2841)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2840),cljs.core.first.call(null,ys__2841))))
{{
var G__2842 = cljs.core.next.call(null,xs__2840);
var G__2843 = cljs.core.next.call(null,ys__2841);
xs__2840 = G__2842;
ys__2841 = G__2843;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2844_SHARP_,p2__2845_SHARP_){
return cljs.core.hash_combine.call(null,p1__2844_SHARP_,cljs.core.hash.call(null,p2__2845_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2846__2847 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2846__2847))
{var G__2849__2851 = cljs.core.first.call(null,G__2846__2847);
var vec__2850__2852 = G__2849__2851;
var key_name__2853 = cljs.core.nth.call(null,vec__2850__2852,0,null);
var f__2854 = cljs.core.nth.call(null,vec__2850__2852,1,null);
var G__2846__2855 = G__2846__2847;

var G__2849__2856 = G__2849__2851;
var G__2846__2857 = G__2846__2855;

while(true){
var vec__2858__2859 = G__2849__2856;
var key_name__2860 = cljs.core.nth.call(null,vec__2858__2859,0,null);
var f__2861 = cljs.core.nth.call(null,vec__2858__2859,1,null);
var G__2846__2862 = G__2846__2857;

var str_name__2863 = cljs.core.name.call(null,key_name__2860);

obj[str_name__2863] = f__2861;
var temp__3698__auto____2864 = cljs.core.next.call(null,G__2846__2862);

if(cljs.core.truth_(temp__3698__auto____2864))
{var G__2846__2865 = temp__3698__auto____2864;

{
var G__2866 = cljs.core.first.call(null,G__2846__2865);
var G__2867 = G__2846__2865;
G__2849__2856 = G__2866;
G__2846__2857 = G__2867;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2869 = this;
return (new cljs.core.List(this__2869.meta,o,coll,(this__2869.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2870 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2871 = this;
return this__2871.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2872 = this;
return this__2872.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2873 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2874 = this;
return this__2874.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2875 = this;
return this__2875.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2876 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2877 = this;
return (new cljs.core.List(meta,this__2877.first,this__2877.rest,this__2877.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2878 = this;
return this__2878.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2879 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2880 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2881 = this;
return (new cljs.core.List(this__2881.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2882 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2883 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2884 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2885 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2886 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2887 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2888 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2889 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2890 = this;
return this__2890.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2891 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2892){
var items = cljs.core.seq( arglist__2892 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2893 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2894 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2896 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2896.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2897 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2898 = this;
return this__2898.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2899 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2899.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2899.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2900 = this;
return this__2900.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2901 = this;
return (new cljs.core.Cons(meta,this__2901.first,this__2901.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2902 = null;
var G__2902__2903 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2902__2904 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2902 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2902__2903.call(this,string,f);
case  3 :
return G__2902__2904.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2902;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2906 = null;
var G__2906__2907 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2906__2908 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2906 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2906__2907.call(this,string,k);
case  3 :
return G__2906__2908.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2906;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2910 = null;
var G__2910__2911 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2910__2912 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2910 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2910__2911.call(this,string,n);
case  3 :
return G__2910__2912.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2910;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2914 = null;
var G__2914__2915 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2914__2916 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2914 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2914__2915.call(this,_,coll);
case  3 :
return G__2914__2916.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2914;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2918 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2918;
} else
{lazy_seq.x = x__2918.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2919 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2920 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2921 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2922.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2923 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2924 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2925 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2926 = this;
return this__2926.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2927 = this;
return (new cljs.core.LazySeq(meta,this__2927.realized,this__2927.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2928 = cljs.core.array.call(null);

var s__2929 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2929)))
{ary__2928.push(cljs.core.first.call(null,s__2929));
{
var G__2930 = cljs.core.next.call(null,s__2929);
s__2929 = G__2930;
continue;
}
} else
{return ary__2928;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2931 = s;
var i__2932 = n;
var sum__2933 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2934 = (i__2932 > 0);

if(cljs.core.truth_(and__3546__auto____2934))
{return cljs.core.seq.call(null,s__2931);
} else
{return and__3546__auto____2934;
}
})()))
{{
var G__2935 = cljs.core.next.call(null,s__2931);
var G__2936 = (i__2932 - 1);
var G__2937 = (sum__2933 + 1);
s__2931 = G__2935;
i__2932 = G__2936;
sum__2933 = G__2937;
continue;
}
} else
{return sum__2933;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2941 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2942 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2943 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2938 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2938))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2938),concat.call(null,cljs.core.rest.call(null,s__2938),y));
} else
{return y;
}
})));
});
var concat__2944 = (function() { 
var G__2946__delegate = function (x,y,zs){
var cat__2940 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2939 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2939))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2939),cat.call(null,cljs.core.rest.call(null,xys__2939),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2940.call(null,concat.call(null,x,y),zs);
};
var G__2946 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2946__delegate.call(this, x, y, zs);
};
G__2946.cljs$lang$maxFixedArity = 2;
G__2946.cljs$lang$applyTo = (function (arglist__2947){
var x = cljs.core.first(arglist__2947);
var y = cljs.core.first(cljs.core.next(arglist__2947));
var zs = cljs.core.rest(cljs.core.next(arglist__2947));
return G__2946__delegate.call(this, x, y, zs);
});
return G__2946;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2941.call(this);
case  1 :
return concat__2942.call(this,x);
case  2 :
return concat__2943.call(this,x,y);
default:
return concat__2944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2944.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2948 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2949 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2950 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2951 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2952 = (function() { 
var G__2954__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2954 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2954__delegate.call(this, a, b, c, d, more);
};
G__2954.cljs$lang$maxFixedArity = 4;
G__2954.cljs$lang$applyTo = (function (arglist__2955){
var a = cljs.core.first(arglist__2955);
var b = cljs.core.first(cljs.core.next(arglist__2955));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2955)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2955))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2955))));
return G__2954__delegate.call(this, a, b, c, d, more);
});
return G__2954;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2948.call(this,a);
case  2 :
return list_STAR___2949.call(this,a,b);
case  3 :
return list_STAR___2950.call(this,a,b,c);
case  4 :
return list_STAR___2951.call(this,a,b,c,d);
default:
return list_STAR___2952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2952.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2965 = (function (f,args){
var fixed_arity__2956 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2956 + 1)) <= fixed_arity__2956)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2966 = (function (f,x,args){
var arglist__2957 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2958 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2957,fixed_arity__2958) <= fixed_arity__2958)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2957));
} else
{return f.cljs$lang$applyTo(arglist__2957);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2957));
}
});
var apply__2967 = (function (f,x,y,args){
var arglist__2959 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2960 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2959,fixed_arity__2960) <= fixed_arity__2960)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2959));
} else
{return f.cljs$lang$applyTo(arglist__2959);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2959));
}
});
var apply__2968 = (function (f,x,y,z,args){
var arglist__2961 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2962 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2961,fixed_arity__2962) <= fixed_arity__2962)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2961));
} else
{return f.cljs$lang$applyTo(arglist__2961);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2961));
}
});
var apply__2969 = (function() { 
var G__2971__delegate = function (f,a,b,c,d,args){
var arglist__2963 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2964 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2963,fixed_arity__2964) <= fixed_arity__2964)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2963));
} else
{return f.cljs$lang$applyTo(arglist__2963);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2963));
}
};
var G__2971 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2971__delegate.call(this, f, a, b, c, d, args);
};
G__2971.cljs$lang$maxFixedArity = 5;
G__2971.cljs$lang$applyTo = (function (arglist__2972){
var f = cljs.core.first(arglist__2972);
var a = cljs.core.first(cljs.core.next(arglist__2972));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2972)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2972))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2972)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2972)))));
return G__2971__delegate.call(this, f, a, b, c, d, args);
});
return G__2971;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2965.call(this,f,a);
case  3 :
return apply__2966.call(this,f,a,b);
case  4 :
return apply__2967.call(this,f,a,b,c);
case  5 :
return apply__2968.call(this,f,a,b,c,d);
default:
return apply__2969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2969.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2973){
var obj = cljs.core.first(arglist__2973);
var f = cljs.core.first(cljs.core.next(arglist__2973));
var args = cljs.core.rest(cljs.core.next(arglist__2973));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2974 = (function (x){
return false;
});
var not_EQ___2975 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2976 = (function() { 
var G__2978__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2978 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2978__delegate.call(this, x, y, more);
};
G__2978.cljs$lang$maxFixedArity = 2;
G__2978.cljs$lang$applyTo = (function (arglist__2979){
var x = cljs.core.first(arglist__2979);
var y = cljs.core.first(cljs.core.next(arglist__2979));
var more = cljs.core.rest(cljs.core.next(arglist__2979));
return G__2978__delegate.call(this, x, y, more);
});
return G__2978;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2974.call(this,x);
case  2 :
return not_EQ___2975.call(this,x,y);
default:
return not_EQ___2976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2976.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2980 = pred;
var G__2981 = cljs.core.next.call(null,coll);
pred = G__2980;
coll = G__2981;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2982 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2982))
{return or__3548__auto____2982;
} else
{{
var G__2983 = pred;
var G__2984 = cljs.core.next.call(null,coll);
pred = G__2983;
coll = G__2984;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2985 = null;
var G__2985__2986 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2985__2987 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2985__2988 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2985__2989 = (function() { 
var G__2991__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2991 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2991__delegate.call(this, x, y, zs);
};
G__2991.cljs$lang$maxFixedArity = 2;
G__2991.cljs$lang$applyTo = (function (arglist__2992){
var x = cljs.core.first(arglist__2992);
var y = cljs.core.first(cljs.core.next(arglist__2992));
var zs = cljs.core.rest(cljs.core.next(arglist__2992));
return G__2991__delegate.call(this, x, y, zs);
});
return G__2991;
})()
;
G__2985 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2985__2986.call(this);
case  1 :
return G__2985__2987.call(this,x);
case  2 :
return G__2985__2988.call(this,x,y);
default:
return G__2985__2989.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2985.cljs$lang$maxFixedArity = 2;
G__2985.cljs$lang$applyTo = G__2985__2989.cljs$lang$applyTo;
return G__2985;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2993__delegate = function (args){
return x;
};
var G__2993 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2993__delegate.call(this, args);
};
G__2993.cljs$lang$maxFixedArity = 0;
G__2993.cljs$lang$applyTo = (function (arglist__2994){
var args = cljs.core.seq( arglist__2994 );;
return G__2993__delegate.call(this, args);
});
return G__2993;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2998 = (function (){
return cljs.core.identity;
});
var comp__2999 = (function (f){
return f;
});
var comp__3000 = (function (f,g){
return (function() {
var G__3004 = null;
var G__3004__3005 = (function (){
return f.call(null,g.call(null));
});
var G__3004__3006 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3004__3007 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3004__3008 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3004__3009 = (function() { 
var G__3011__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3011__delegate.call(this, x, y, z, args);
};
G__3011.cljs$lang$maxFixedArity = 3;
G__3011.cljs$lang$applyTo = (function (arglist__3012){
var x = cljs.core.first(arglist__3012);
var y = cljs.core.first(cljs.core.next(arglist__3012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3012)));
return G__3011__delegate.call(this, x, y, z, args);
});
return G__3011;
})()
;
G__3004 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3004__3005.call(this);
case  1 :
return G__3004__3006.call(this,x);
case  2 :
return G__3004__3007.call(this,x,y);
case  3 :
return G__3004__3008.call(this,x,y,z);
default:
return G__3004__3009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3004.cljs$lang$maxFixedArity = 3;
G__3004.cljs$lang$applyTo = G__3004__3009.cljs$lang$applyTo;
return G__3004;
})()
});
var comp__3001 = (function (f,g,h){
return (function() {
var G__3013 = null;
var G__3013__3014 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3013__3015 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3013__3016 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3013__3017 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3013__3018 = (function() { 
var G__3020__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3020__delegate.call(this, x, y, z, args);
};
G__3020.cljs$lang$maxFixedArity = 3;
G__3020.cljs$lang$applyTo = (function (arglist__3021){
var x = cljs.core.first(arglist__3021);
var y = cljs.core.first(cljs.core.next(arglist__3021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3021)));
return G__3020__delegate.call(this, x, y, z, args);
});
return G__3020;
})()
;
G__3013 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3013__3014.call(this);
case  1 :
return G__3013__3015.call(this,x);
case  2 :
return G__3013__3016.call(this,x,y);
case  3 :
return G__3013__3017.call(this,x,y,z);
default:
return G__3013__3018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3013.cljs$lang$maxFixedArity = 3;
G__3013.cljs$lang$applyTo = G__3013__3018.cljs$lang$applyTo;
return G__3013;
})()
});
var comp__3002 = (function() { 
var G__3022__delegate = function (f1,f2,f3,fs){
var fs__2995 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3023__delegate = function (args){
var ret__2996 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2995),args);
var fs__2997 = cljs.core.next.call(null,fs__2995);

while(true){
if(cljs.core.truth_(fs__2997))
{{
var G__3024 = cljs.core.first.call(null,fs__2997).call(null,ret__2996);
var G__3025 = cljs.core.next.call(null,fs__2997);
ret__2996 = G__3024;
fs__2997 = G__3025;
continue;
}
} else
{return ret__2996;
}
break;
}
};
var G__3023 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3023__delegate.call(this, args);
};
G__3023.cljs$lang$maxFixedArity = 0;
G__3023.cljs$lang$applyTo = (function (arglist__3026){
var args = cljs.core.seq( arglist__3026 );;
return G__3023__delegate.call(this, args);
});
return G__3023;
})()
;
};
var G__3022 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3022__delegate.call(this, f1, f2, f3, fs);
};
G__3022.cljs$lang$maxFixedArity = 3;
G__3022.cljs$lang$applyTo = (function (arglist__3027){
var f1 = cljs.core.first(arglist__3027);
var f2 = cljs.core.first(cljs.core.next(arglist__3027));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3027)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3027)));
return G__3022__delegate.call(this, f1, f2, f3, fs);
});
return G__3022;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2998.call(this);
case  1 :
return comp__2999.call(this,f1);
case  2 :
return comp__3000.call(this,f1,f2);
case  3 :
return comp__3001.call(this,f1,f2,f3);
default:
return comp__3002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3002.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3028 = (function (f,arg1){
return (function() { 
var G__3033__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3033 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3033__delegate.call(this, args);
};
G__3033.cljs$lang$maxFixedArity = 0;
G__3033.cljs$lang$applyTo = (function (arglist__3034){
var args = cljs.core.seq( arglist__3034 );;
return G__3033__delegate.call(this, args);
});
return G__3033;
})()
;
});
var partial__3029 = (function (f,arg1,arg2){
return (function() { 
var G__3035__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3035 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3035__delegate.call(this, args);
};
G__3035.cljs$lang$maxFixedArity = 0;
G__3035.cljs$lang$applyTo = (function (arglist__3036){
var args = cljs.core.seq( arglist__3036 );;
return G__3035__delegate.call(this, args);
});
return G__3035;
})()
;
});
var partial__3030 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3037__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3037 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3037__delegate.call(this, args);
};
G__3037.cljs$lang$maxFixedArity = 0;
G__3037.cljs$lang$applyTo = (function (arglist__3038){
var args = cljs.core.seq( arglist__3038 );;
return G__3037__delegate.call(this, args);
});
return G__3037;
})()
;
});
var partial__3031 = (function() { 
var G__3039__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3040__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3040 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3040__delegate.call(this, args);
};
G__3040.cljs$lang$maxFixedArity = 0;
G__3040.cljs$lang$applyTo = (function (arglist__3041){
var args = cljs.core.seq( arglist__3041 );;
return G__3040__delegate.call(this, args);
});
return G__3040;
})()
;
};
var G__3039 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3039__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3039.cljs$lang$maxFixedArity = 4;
G__3039.cljs$lang$applyTo = (function (arglist__3042){
var f = cljs.core.first(arglist__3042);
var arg1 = cljs.core.first(cljs.core.next(arglist__3042));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3042)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3042))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3042))));
return G__3039__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3039;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3028.call(this,f,arg1);
case  3 :
return partial__3029.call(this,f,arg1,arg2);
case  4 :
return partial__3030.call(this,f,arg1,arg2,arg3);
default:
return partial__3031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3031.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3043 = (function (f,x){
return (function() {
var G__3047 = null;
var G__3047__3048 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3047__3049 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3047__3050 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3047__3051 = (function() { 
var G__3053__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3053 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3053__delegate.call(this, a, b, c, ds);
};
G__3053.cljs$lang$maxFixedArity = 3;
G__3053.cljs$lang$applyTo = (function (arglist__3054){
var a = cljs.core.first(arglist__3054);
var b = cljs.core.first(cljs.core.next(arglist__3054));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3054)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3054)));
return G__3053__delegate.call(this, a, b, c, ds);
});
return G__3053;
})()
;
G__3047 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3047__3048.call(this,a);
case  2 :
return G__3047__3049.call(this,a,b);
case  3 :
return G__3047__3050.call(this,a,b,c);
default:
return G__3047__3051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3047.cljs$lang$maxFixedArity = 3;
G__3047.cljs$lang$applyTo = G__3047__3051.cljs$lang$applyTo;
return G__3047;
})()
});
var fnil__3044 = (function (f,x,y){
return (function() {
var G__3055 = null;
var G__3055__3056 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3055__3057 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3055__3058 = (function() { 
var G__3060__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3060 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3060__delegate.call(this, a, b, c, ds);
};
G__3060.cljs$lang$maxFixedArity = 3;
G__3060.cljs$lang$applyTo = (function (arglist__3061){
var a = cljs.core.first(arglist__3061);
var b = cljs.core.first(cljs.core.next(arglist__3061));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3061)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3061)));
return G__3060__delegate.call(this, a, b, c, ds);
});
return G__3060;
})()
;
G__3055 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3055__3056.call(this,a,b);
case  3 :
return G__3055__3057.call(this,a,b,c);
default:
return G__3055__3058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3055.cljs$lang$maxFixedArity = 3;
G__3055.cljs$lang$applyTo = G__3055__3058.cljs$lang$applyTo;
return G__3055;
})()
});
var fnil__3045 = (function (f,x,y,z){
return (function() {
var G__3062 = null;
var G__3062__3063 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3062__3064 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3062__3065 = (function() { 
var G__3067__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3067 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3067__delegate.call(this, a, b, c, ds);
};
G__3067.cljs$lang$maxFixedArity = 3;
G__3067.cljs$lang$applyTo = (function (arglist__3068){
var a = cljs.core.first(arglist__3068);
var b = cljs.core.first(cljs.core.next(arglist__3068));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3068)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3068)));
return G__3067__delegate.call(this, a, b, c, ds);
});
return G__3067;
})()
;
G__3062 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3062__3063.call(this,a,b);
case  3 :
return G__3062__3064.call(this,a,b,c);
default:
return G__3062__3065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3062.cljs$lang$maxFixedArity = 3;
G__3062.cljs$lang$applyTo = G__3062__3065.cljs$lang$applyTo;
return G__3062;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3043.call(this,f,x);
case  3 :
return fnil__3044.call(this,f,x,y);
case  4 :
return fnil__3045.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3071 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3069 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3069))
{var s__3070 = temp__3698__auto____3069;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3070)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3070)));
} else
{return null;
}
})));
});

return mapi__3071.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3072))
{var s__3073 = temp__3698__auto____3072;

var x__3074 = f.call(null,cljs.core.first.call(null,s__3073));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3074)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3073));
} else
{return cljs.core.cons.call(null,x__3074,keep.call(null,f,cljs.core.rest.call(null,s__3073)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3084 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3081))
{var s__3082 = temp__3698__auto____3081;

var x__3083 = f.call(null,idx,cljs.core.first.call(null,s__3082));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3083)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3082));
} else
{return cljs.core.cons.call(null,x__3083,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3082)));
}
} else
{return null;
}
})));
});

return keepi__3084.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3129 = (function (p){
return (function() {
var ep1 = null;
var ep1__3134 = (function (){
return true;
});
var ep1__3135 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3136 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3091 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3091))
{return p.call(null,y);
} else
{return and__3546__auto____3091;
}
})());
});
var ep1__3137 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3092 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3092))
{var and__3546__auto____3093 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3093))
{return p.call(null,z);
} else
{return and__3546__auto____3093;
}
} else
{return and__3546__auto____3092;
}
})());
});
var ep1__3138 = (function() { 
var G__3140__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3094 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3094))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3094;
}
})());
};
var G__3140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3140__delegate.call(this, x, y, z, args);
};
G__3140.cljs$lang$maxFixedArity = 3;
G__3140.cljs$lang$applyTo = (function (arglist__3141){
var x = cljs.core.first(arglist__3141);
var y = cljs.core.first(cljs.core.next(arglist__3141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3141)));
return G__3140__delegate.call(this, x, y, z, args);
});
return G__3140;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3134.call(this);
case  1 :
return ep1__3135.call(this,x);
case  2 :
return ep1__3136.call(this,x,y);
case  3 :
return ep1__3137.call(this,x,y,z);
default:
return ep1__3138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3138.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3130 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3142 = (function (){
return true;
});
var ep2__3143 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3095 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3095))
{return p2.call(null,x);
} else
{return and__3546__auto____3095;
}
})());
});
var ep2__3144 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3096 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3096))
{var and__3546__auto____3097 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3097))
{var and__3546__auto____3098 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3098))
{return p2.call(null,y);
} else
{return and__3546__auto____3098;
}
} else
{return and__3546__auto____3097;
}
} else
{return and__3546__auto____3096;
}
})());
});
var ep2__3145 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3099 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3099))
{var and__3546__auto____3100 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3101))
{var and__3546__auto____3102 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3102))
{var and__3546__auto____3103 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3103))
{return p2.call(null,z);
} else
{return and__3546__auto____3103;
}
} else
{return and__3546__auto____3102;
}
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
} else
{return and__3546__auto____3099;
}
})());
});
var ep2__3146 = (function() { 
var G__3148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3104 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3104))
{return cljs.core.every_QMARK_.call(null,(function (p1__3075_SHARP_){
var and__3546__auto____3105 = p1.call(null,p1__3075_SHARP_);

if(cljs.core.truth_(and__3546__auto____3105))
{return p2.call(null,p1__3075_SHARP_);
} else
{return and__3546__auto____3105;
}
}),args);
} else
{return and__3546__auto____3104;
}
})());
};
var G__3148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3148__delegate.call(this, x, y, z, args);
};
G__3148.cljs$lang$maxFixedArity = 3;
G__3148.cljs$lang$applyTo = (function (arglist__3149){
var x = cljs.core.first(arglist__3149);
var y = cljs.core.first(cljs.core.next(arglist__3149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3149)));
return G__3148__delegate.call(this, x, y, z, args);
});
return G__3148;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3142.call(this);
case  1 :
return ep2__3143.call(this,x);
case  2 :
return ep2__3144.call(this,x,y);
case  3 :
return ep2__3145.call(this,x,y,z);
default:
return ep2__3146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3146.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3131 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3150 = (function (){
return true;
});
var ep3__3151 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3106 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3106))
{var and__3546__auto____3107 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3107))
{return p3.call(null,x);
} else
{return and__3546__auto____3107;
}
} else
{return and__3546__auto____3106;
}
})());
});
var ep3__3152 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3108 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3108))
{var and__3546__auto____3109 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3109))
{var and__3546__auto____3110 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3110))
{var and__3546__auto____3111 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3111))
{var and__3546__auto____3112 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3112))
{return p3.call(null,y);
} else
{return and__3546__auto____3112;
}
} else
{return and__3546__auto____3111;
}
} else
{return and__3546__auto____3110;
}
} else
{return and__3546__auto____3109;
}
} else
{return and__3546__auto____3108;
}
})());
});
var ep3__3153 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3113 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3113))
{var and__3546__auto____3114 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3114))
{var and__3546__auto____3115 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3115))
{var and__3546__auto____3116 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3116))
{var and__3546__auto____3117 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3117))
{var and__3546__auto____3118 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3118))
{var and__3546__auto____3119 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3119))
{var and__3546__auto____3120 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3120))
{return p3.call(null,z);
} else
{return and__3546__auto____3120;
}
} else
{return and__3546__auto____3119;
}
} else
{return and__3546__auto____3118;
}
} else
{return and__3546__auto____3117;
}
} else
{return and__3546__auto____3116;
}
} else
{return and__3546__auto____3115;
}
} else
{return and__3546__auto____3114;
}
} else
{return and__3546__auto____3113;
}
})());
});
var ep3__3154 = (function() { 
var G__3156__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3121 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3121))
{return cljs.core.every_QMARK_.call(null,(function (p1__3076_SHARP_){
var and__3546__auto____3122 = p1.call(null,p1__3076_SHARP_);

if(cljs.core.truth_(and__3546__auto____3122))
{var and__3546__auto____3123 = p2.call(null,p1__3076_SHARP_);

if(cljs.core.truth_(and__3546__auto____3123))
{return p3.call(null,p1__3076_SHARP_);
} else
{return and__3546__auto____3123;
}
} else
{return and__3546__auto____3122;
}
}),args);
} else
{return and__3546__auto____3121;
}
})());
};
var G__3156 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3156__delegate.call(this, x, y, z, args);
};
G__3156.cljs$lang$maxFixedArity = 3;
G__3156.cljs$lang$applyTo = (function (arglist__3157){
var x = cljs.core.first(arglist__3157);
var y = cljs.core.first(cljs.core.next(arglist__3157));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3157)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3157)));
return G__3156__delegate.call(this, x, y, z, args);
});
return G__3156;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3150.call(this);
case  1 :
return ep3__3151.call(this,x);
case  2 :
return ep3__3152.call(this,x,y);
case  3 :
return ep3__3153.call(this,x,y,z);
default:
return ep3__3154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3154.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3132 = (function() { 
var G__3158__delegate = function (p1,p2,p3,ps){
var ps__3124 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3159 = (function (){
return true;
});
var epn__3160 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3077_SHARP_){
return p1__3077_SHARP_.call(null,x);
}),ps__3124);
});
var epn__3161 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3078_SHARP_){
var and__3546__auto____3125 = p1__3078_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3125))
{return p1__3078_SHARP_.call(null,y);
} else
{return and__3546__auto____3125;
}
}),ps__3124);
});
var epn__3162 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3079_SHARP_){
var and__3546__auto____3126 = p1__3079_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3126))
{var and__3546__auto____3127 = p1__3079_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3127))
{return p1__3079_SHARP_.call(null,z);
} else
{return and__3546__auto____3127;
}
} else
{return and__3546__auto____3126;
}
}),ps__3124);
});
var epn__3163 = (function() { 
var G__3165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3128 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3128))
{return cljs.core.every_QMARK_.call(null,(function (p1__3080_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3080_SHARP_,args);
}),ps__3124);
} else
{return and__3546__auto____3128;
}
})());
};
var G__3165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3165__delegate.call(this, x, y, z, args);
};
G__3165.cljs$lang$maxFixedArity = 3;
G__3165.cljs$lang$applyTo = (function (arglist__3166){
var x = cljs.core.first(arglist__3166);
var y = cljs.core.first(cljs.core.next(arglist__3166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3166)));
return G__3165__delegate.call(this, x, y, z, args);
});
return G__3165;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3159.call(this);
case  1 :
return epn__3160.call(this,x);
case  2 :
return epn__3161.call(this,x,y);
case  3 :
return epn__3162.call(this,x,y,z);
default:
return epn__3163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3163.cljs$lang$applyTo;
return epn;
})()
};
var G__3158 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3158__delegate.call(this, p1, p2, p3, ps);
};
G__3158.cljs$lang$maxFixedArity = 3;
G__3158.cljs$lang$applyTo = (function (arglist__3167){
var p1 = cljs.core.first(arglist__3167);
var p2 = cljs.core.first(cljs.core.next(arglist__3167));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3167)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3167)));
return G__3158__delegate.call(this, p1, p2, p3, ps);
});
return G__3158;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3129.call(this,p1);
case  2 :
return every_pred__3130.call(this,p1,p2);
case  3 :
return every_pred__3131.call(this,p1,p2,p3);
default:
return every_pred__3132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3132.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3207 = (function (p){
return (function() {
var sp1 = null;
var sp1__3212 = (function (){
return null;
});
var sp1__3213 = (function (x){
return p.call(null,x);
});
var sp1__3214 = (function (x,y){
var or__3548__auto____3169 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{return p.call(null,y);
}
});
var sp1__3215 = (function (x,y,z){
var or__3548__auto____3170 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3170))
{return or__3548__auto____3170;
} else
{var or__3548__auto____3171 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{return p.call(null,z);
}
}
});
var sp1__3216 = (function() { 
var G__3218__delegate = function (x,y,z,args){
var or__3548__auto____3172 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3218__delegate.call(this, x, y, z, args);
};
G__3218.cljs$lang$maxFixedArity = 3;
G__3218.cljs$lang$applyTo = (function (arglist__3219){
var x = cljs.core.first(arglist__3219);
var y = cljs.core.first(cljs.core.next(arglist__3219));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3219)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3219)));
return G__3218__delegate.call(this, x, y, z, args);
});
return G__3218;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3212.call(this);
case  1 :
return sp1__3213.call(this,x);
case  2 :
return sp1__3214.call(this,x,y);
case  3 :
return sp1__3215.call(this,x,y,z);
default:
return sp1__3216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3216.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3208 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3220 = (function (){
return null;
});
var sp2__3221 = (function (x){
var or__3548__auto____3173 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3173))
{return or__3548__auto____3173;
} else
{return p2.call(null,x);
}
});
var sp2__3222 = (function (x,y){
var or__3548__auto____3174 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{var or__3548__auto____3175 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{var or__3548__auto____3176 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3176))
{return or__3548__auto____3176;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3223 = (function (x,y,z){
var or__3548__auto____3177 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{var or__3548__auto____3179 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3179))
{return or__3548__auto____3179;
} else
{var or__3548__auto____3180 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3224 = (function() { 
var G__3226__delegate = function (x,y,z,args){
var or__3548__auto____3182 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3182))
{return or__3548__auto____3182;
} else
{return cljs.core.some.call(null,(function (p1__3085_SHARP_){
var or__3548__auto____3183 = p1.call(null,p1__3085_SHARP_);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{return p2.call(null,p1__3085_SHARP_);
}
}),args);
}
};
var G__3226 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3226__delegate.call(this, x, y, z, args);
};
G__3226.cljs$lang$maxFixedArity = 3;
G__3226.cljs$lang$applyTo = (function (arglist__3227){
var x = cljs.core.first(arglist__3227);
var y = cljs.core.first(cljs.core.next(arglist__3227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3227)));
return G__3226__delegate.call(this, x, y, z, args);
});
return G__3226;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3220.call(this);
case  1 :
return sp2__3221.call(this,x);
case  2 :
return sp2__3222.call(this,x,y);
case  3 :
return sp2__3223.call(this,x,y,z);
default:
return sp2__3224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3224.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3209 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3228 = (function (){
return null;
});
var sp3__3229 = (function (x){
var or__3548__auto____3184 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{var or__3548__auto____3185 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3185))
{return or__3548__auto____3185;
} else
{return p3.call(null,x);
}
}
});
var sp3__3230 = (function (x,y){
var or__3548__auto____3186 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{var or__3548__auto____3188 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3188))
{return or__3548__auto____3188;
} else
{var or__3548__auto____3189 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3231 = (function (x,y,z){
var or__3548__auto____3191 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3191))
{return or__3548__auto____3191;
} else
{var or__3548__auto____3192 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var or__3548__auto____3194 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{var or__3548__auto____3195 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{var or__3548__auto____3197 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{var or__3548__auto____3198 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3232 = (function() { 
var G__3234__delegate = function (x,y,z,args){
var or__3548__auto____3199 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{return cljs.core.some.call(null,(function (p1__3086_SHARP_){
var or__3548__auto____3200 = p1.call(null,p1__3086_SHARP_);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{var or__3548__auto____3201 = p2.call(null,p1__3086_SHARP_);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{return p3.call(null,p1__3086_SHARP_);
}
}
}),args);
}
};
var G__3234 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3234__delegate.call(this, x, y, z, args);
};
G__3234.cljs$lang$maxFixedArity = 3;
G__3234.cljs$lang$applyTo = (function (arglist__3235){
var x = cljs.core.first(arglist__3235);
var y = cljs.core.first(cljs.core.next(arglist__3235));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3235)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3235)));
return G__3234__delegate.call(this, x, y, z, args);
});
return G__3234;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3228.call(this);
case  1 :
return sp3__3229.call(this,x);
case  2 :
return sp3__3230.call(this,x,y);
case  3 :
return sp3__3231.call(this,x,y,z);
default:
return sp3__3232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3232.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3210 = (function() { 
var G__3236__delegate = function (p1,p2,p3,ps){
var ps__3202 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3237 = (function (){
return null;
});
var spn__3238 = (function (x){
return cljs.core.some.call(null,(function (p1__3087_SHARP_){
return p1__3087_SHARP_.call(null,x);
}),ps__3202);
});
var spn__3239 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3088_SHARP_){
var or__3548__auto____3203 = p1__3088_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{return p1__3088_SHARP_.call(null,y);
}
}),ps__3202);
});
var spn__3240 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3089_SHARP_){
var or__3548__auto____3204 = p1__3089_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = p1__3089_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{return p1__3089_SHARP_.call(null,z);
}
}
}),ps__3202);
});
var spn__3241 = (function() { 
var G__3243__delegate = function (x,y,z,args){
var or__3548__auto____3206 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{return cljs.core.some.call(null,(function (p1__3090_SHARP_){
return cljs.core.some.call(null,p1__3090_SHARP_,args);
}),ps__3202);
}
};
var G__3243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3243__delegate.call(this, x, y, z, args);
};
G__3243.cljs$lang$maxFixedArity = 3;
G__3243.cljs$lang$applyTo = (function (arglist__3244){
var x = cljs.core.first(arglist__3244);
var y = cljs.core.first(cljs.core.next(arglist__3244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3244)));
return G__3243__delegate.call(this, x, y, z, args);
});
return G__3243;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3237.call(this);
case  1 :
return spn__3238.call(this,x);
case  2 :
return spn__3239.call(this,x,y);
case  3 :
return spn__3240.call(this,x,y,z);
default:
return spn__3241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3241.cljs$lang$applyTo;
return spn;
})()
};
var G__3236 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3236__delegate.call(this, p1, p2, p3, ps);
};
G__3236.cljs$lang$maxFixedArity = 3;
G__3236.cljs$lang$applyTo = (function (arglist__3245){
var p1 = cljs.core.first(arglist__3245);
var p2 = cljs.core.first(cljs.core.next(arglist__3245));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3245)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3245)));
return G__3236__delegate.call(this, p1, p2, p3, ps);
});
return G__3236;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3207.call(this,p1);
case  2 :
return some_fn__3208.call(this,p1,p2);
case  3 :
return some_fn__3209.call(this,p1,p2,p3);
default:
return some_fn__3210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3210.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3258 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3246 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3246))
{var s__3247 = temp__3698__auto____3246;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3247)),map.call(null,f,cljs.core.rest.call(null,s__3247)));
} else
{return null;
}
})));
});
var map__3259 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3248 = cljs.core.seq.call(null,c1);
var s2__3249 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3250 = s1__3248;

if(cljs.core.truth_(and__3546__auto____3250))
{return s2__3249;
} else
{return and__3546__auto____3250;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3248),cljs.core.first.call(null,s2__3249)),map.call(null,f,cljs.core.rest.call(null,s1__3248),cljs.core.rest.call(null,s2__3249)));
} else
{return null;
}
})));
});
var map__3260 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3251 = cljs.core.seq.call(null,c1);
var s2__3252 = cljs.core.seq.call(null,c2);
var s3__3253 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3254 = s1__3251;

if(cljs.core.truth_(and__3546__auto____3254))
{var and__3546__auto____3255 = s2__3252;

if(cljs.core.truth_(and__3546__auto____3255))
{return s3__3253;
} else
{return and__3546__auto____3255;
}
} else
{return and__3546__auto____3254;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3251),cljs.core.first.call(null,s2__3252),cljs.core.first.call(null,s3__3253)),map.call(null,f,cljs.core.rest.call(null,s1__3251),cljs.core.rest.call(null,s2__3252),cljs.core.rest.call(null,s3__3253)));
} else
{return null;
}
})));
});
var map__3261 = (function() { 
var G__3263__delegate = function (f,c1,c2,c3,colls){
var step__3257 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3256 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3256)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3256),step.call(null,map.call(null,cljs.core.rest,ss__3256)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3168_SHARP_){
return cljs.core.apply.call(null,f,p1__3168_SHARP_);
}),step__3257.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3263 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3263__delegate.call(this, f, c1, c2, c3, colls);
};
G__3263.cljs$lang$maxFixedArity = 4;
G__3263.cljs$lang$applyTo = (function (arglist__3264){
var f = cljs.core.first(arglist__3264);
var c1 = cljs.core.first(cljs.core.next(arglist__3264));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3264)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3264))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3264))));
return G__3263__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3263;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3258.call(this,f,c1);
case  3 :
return map__3259.call(this,f,c1,c2);
case  4 :
return map__3260.call(this,f,c1,c2,c3);
default:
return map__3261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3261.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3265))
{var s__3266 = temp__3698__auto____3265;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3266),take.call(null,(n - 1),cljs.core.rest.call(null,s__3266)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3269 = (function (n,coll){
while(true){
var s__3267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3268 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3268))
{return s__3267;
} else
{return and__3546__auto____3268;
}
})()))
{{
var G__3270 = (n - 1);
var G__3271 = cljs.core.rest.call(null,s__3267);
n = G__3270;
coll = G__3271;
continue;
}
} else
{return s__3267;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3269.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3272 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3273 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3272.call(this,n);
case  2 :
return drop_last__3273.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3275 = cljs.core.seq.call(null,coll);
var lead__3276 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3276))
{{
var G__3277 = cljs.core.next.call(null,s__3275);
var G__3278 = cljs.core.next.call(null,lead__3276);
s__3275 = G__3277;
lead__3276 = G__3278;
continue;
}
} else
{return s__3275;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3281 = (function (pred,coll){
while(true){
var s__3279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3280 = s__3279;

if(cljs.core.truth_(and__3546__auto____3280))
{return pred.call(null,cljs.core.first.call(null,s__3279));
} else
{return and__3546__auto____3280;
}
})()))
{{
var G__3282 = pred;
var G__3283 = cljs.core.rest.call(null,s__3279);
pred = G__3282;
coll = G__3283;
continue;
}
} else
{return s__3279;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3281.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3284 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3284))
{var s__3285 = temp__3698__auto____3284;

return cljs.core.concat.call(null,s__3285,cycle.call(null,s__3285));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3286 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3287 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3286.call(this,n);
case  2 :
return repeat__3287.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3289 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3290 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3289.call(this,n);
case  2 :
return repeatedly__3290.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3296 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3292 = cljs.core.seq.call(null,c1);
var s2__3293 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3294 = s1__3292;

if(cljs.core.truth_(and__3546__auto____3294))
{return s2__3293;
} else
{return and__3546__auto____3294;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3292),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3293),interleave.call(null,cljs.core.rest.call(null,s1__3292),cljs.core.rest.call(null,s2__3293))));
} else
{return null;
}
})));
});
var interleave__3297 = (function() { 
var G__3299__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3295 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3295)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3295),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3295)));
} else
{return null;
}
})));
};
var G__3299 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3299__delegate.call(this, c1, c2, colls);
};
G__3299.cljs$lang$maxFixedArity = 2;
G__3299.cljs$lang$applyTo = (function (arglist__3300){
var c1 = cljs.core.first(arglist__3300);
var c2 = cljs.core.first(cljs.core.next(arglist__3300));
var colls = cljs.core.rest(cljs.core.next(arglist__3300));
return G__3299__delegate.call(this, c1, c2, colls);
});
return G__3299;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3296.call(this,c1,c2);
default:
return interleave__3297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3297.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3303 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3301))
{var coll__3302 = temp__3695__auto____3301;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3302),cat.call(null,cljs.core.rest.call(null,coll__3302),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3303.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3304 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3305 = (function() { 
var G__3307__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3307 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3307__delegate.call(this, f, coll, colls);
};
G__3307.cljs$lang$maxFixedArity = 2;
G__3307.cljs$lang$applyTo = (function (arglist__3308){
var f = cljs.core.first(arglist__3308);
var coll = cljs.core.first(cljs.core.next(arglist__3308));
var colls = cljs.core.rest(cljs.core.next(arglist__3308));
return G__3307__delegate.call(this, f, coll, colls);
});
return G__3307;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3304.call(this,f,coll);
default:
return mapcat__3305.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3305.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3309))
{var s__3310 = temp__3698__auto____3309;

var f__3311 = cljs.core.first.call(null,s__3310);
var r__3312 = cljs.core.rest.call(null,s__3310);

if(cljs.core.truth_(pred.call(null,f__3311)))
{return cljs.core.cons.call(null,f__3311,filter.call(null,pred,r__3312));
} else
{return filter.call(null,pred,r__3312);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3314 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3314.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3313_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3313_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3321 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3322 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3315 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3315))
{var s__3316 = temp__3698__auto____3315;

var p__3317 = cljs.core.take.call(null,n,s__3316);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3317))))
{return cljs.core.cons.call(null,p__3317,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3316)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3323 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3318))
{var s__3319 = temp__3698__auto____3318;

var p__3320 = cljs.core.take.call(null,n,s__3319);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3320))))
{return cljs.core.cons.call(null,p__3320,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3319)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3320,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3321.call(this,n,step);
case  3 :
return partition__3322.call(this,n,step,pad);
case  4 :
return partition__3323.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3329 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3330 = (function (m,ks,not_found){
var sentinel__3325 = cljs.core.lookup_sentinel;
var m__3326 = m;
var ks__3327 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3327))
{var m__3328 = cljs.core.get.call(null,m__3326,cljs.core.first.call(null,ks__3327),sentinel__3325);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3325,m__3328)))
{return not_found;
} else
{{
var G__3332 = sentinel__3325;
var G__3333 = m__3328;
var G__3334 = cljs.core.next.call(null,ks__3327);
sentinel__3325 = G__3332;
m__3326 = G__3333;
ks__3327 = G__3334;
continue;
}
}
} else
{return m__3326;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3329.call(this,m,ks);
case  3 :
return get_in__3330.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3335,v){
var vec__3336__3337 = p__3335;
var k__3338 = cljs.core.nth.call(null,vec__3336__3337,0,null);
var ks__3339 = cljs.core.nthnext.call(null,vec__3336__3337,1);

if(cljs.core.truth_(ks__3339))
{return cljs.core.assoc.call(null,m,k__3338,assoc_in.call(null,cljs.core.get.call(null,m,k__3338),ks__3339,v));
} else
{return cljs.core.assoc.call(null,m,k__3338,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3340,f,args){
var vec__3341__3342 = p__3340;
var k__3343 = cljs.core.nth.call(null,vec__3341__3342,0,null);
var ks__3344 = cljs.core.nthnext.call(null,vec__3341__3342,1);

if(cljs.core.truth_(ks__3344))
{return cljs.core.assoc.call(null,m,k__3343,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3343),ks__3344,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3343,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3343),args));
}
};
var update_in = function (m,p__3340,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3340, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3345){
var m = cljs.core.first(arglist__3345);
var p__3340 = cljs.core.first(cljs.core.next(arglist__3345));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3345)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3345)));
return update_in__delegate.call(this, m, p__3340, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3346 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3371 = null;
var G__3371__3372 = (function (coll,k){
var this__3347 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3371__3373 = (function (coll,k,not_found){
var this__3348 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3371 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3371__3372.call(this,coll,k);
case  3 :
return G__3371__3373.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3371;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3349 = this;
var new_array__3350 = cljs.core.aclone.call(null,this__3349.array);

(new_array__3350[k] = v);
return (new cljs.core.Vector(this__3349.meta,new_array__3350));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3351 = this;
var new_array__3352 = cljs.core.aclone.call(null,this__3351.array);

new_array__3352.push(o);
return (new cljs.core.Vector(this__3351.meta,new_array__3352));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3375 = null;
var G__3375__3376 = (function (v,f){
var this__3353 = this;
return cljs.core.ci_reduce.call(null,this__3353.array,f);
});
var G__3375__3377 = (function (v,f,start){
var this__3354 = this;
return cljs.core.ci_reduce.call(null,this__3354.array,f,start);
});
G__3375 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3375__3376.call(this,v,f);
case  3 :
return G__3375__3377.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3375;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3355 = this;
if(cljs.core.truth_((this__3355.array.length > 0)))
{var vector_seq__3356 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3355.array.length)))
{return cljs.core.cons.call(null,(this__3355.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3356.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3357 = this;
return this__3357.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3358 = this;
var count__3359 = this__3358.array.length;

if(cljs.core.truth_((count__3359 > 0)))
{return (this__3358.array[(count__3359 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3360 = this;
if(cljs.core.truth_((this__3360.array.length > 0)))
{var new_array__3361 = cljs.core.aclone.call(null,this__3360.array);

new_array__3361.pop();
return (new cljs.core.Vector(this__3360.meta,new_array__3361));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3362 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3363 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3364 = this;
return (new cljs.core.Vector(meta,this__3364.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3365 = this;
return this__3365.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3379 = null;
var G__3379__3380 = (function (coll,n){
var this__3366 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3367 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3367))
{return (n < this__3366.array.length);
} else
{return and__3546__auto____3367;
}
})()))
{return (this__3366.array[n]);
} else
{return null;
}
});
var G__3379__3381 = (function (coll,n,not_found){
var this__3368 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3369 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3369))
{return (n < this__3368.array.length);
} else
{return and__3546__auto____3369;
}
})()))
{return (this__3368.array[n]);
} else
{return not_found;
}
});
G__3379 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3379__3380.call(this,coll,n);
case  3 :
return G__3379__3381.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3379;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3370 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3370.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3383 = null;
var G__3383__3384 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3383__3385 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3383 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3383__3384.call(this,_,k);
case  3 :
return G__3383__3385.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3383;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3387){
var args = cljs.core.seq( arglist__3387 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3388 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3389 = array.length;

var i__3390 = 0;

while(true){
if(cljs.core.truth_((i__3390 < len__3389)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3390]))))
{return i__3390;
} else
{{
var G__3391 = (i__3390 + incr);
i__3390 = G__3391;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3393 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3394 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3392 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3392))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3392;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3393.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3394.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3397 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3416 = null;
var G__3416__3417 = (function (coll,k){
var this__3398 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3416__3418 = (function (coll,k,not_found){
var this__3399 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3399.strobj,(this__3399.strobj[k]),not_found);
});
G__3416 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3416__3417.call(this,coll,k);
case  3 :
return G__3416__3418.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3416;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3400 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3401 = goog.object.clone.call(null,this__3400.strobj);
var overwrite_QMARK___3402 = new_strobj__3401.hasOwnProperty(k);

(new_strobj__3401[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3402))
{return (new cljs.core.ObjMap(this__3400.meta,this__3400.keys,new_strobj__3401));
} else
{var new_keys__3403 = cljs.core.aclone.call(null,this__3400.keys);

new_keys__3403.push(k);
return (new cljs.core.ObjMap(this__3400.meta,new_keys__3403,new_strobj__3401));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3400.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3404 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3404.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3405 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3406 = this;
if(cljs.core.truth_((this__3406.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3396_SHARP_){
return cljs.core.vector.call(null,p1__3396_SHARP_,(this__3406.strobj[p1__3396_SHARP_]));
}),this__3406.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3407 = this;
return this__3407.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3408 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3409 = this;
return (new cljs.core.ObjMap(meta,this__3409.keys,this__3409.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3410 = this;
return this__3410.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3411 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3411.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3412 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3413 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3413))
{return this__3412.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3413;
}
})()))
{var new_keys__3414 = cljs.core.aclone.call(null,this__3412.keys);
var new_strobj__3415 = goog.object.clone.call(null,this__3412.strobj);

new_keys__3414.splice(cljs.core.scan_array.call(null,1,k,new_keys__3414),1);
cljs.core.js_delete.call(null,new_strobj__3415,k);
return (new cljs.core.ObjMap(this__3412.meta,new_keys__3414,new_strobj__3415));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3421 = null;
var G__3421__3422 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3421__3423 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3421 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3421__3422.call(this,_,k);
case  3 :
return G__3421__3423.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3421;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3425 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3455 = null;
var G__3455__3456 = (function (coll,k){
var this__3426 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3455__3457 = (function (coll,k,not_found){
var this__3427 = this;
var bucket__3428 = (this__3427.hashobj[cljs.core.hash.call(null,k)]);
var i__3429 = (cljs.core.truth_(bucket__3428)?cljs.core.scan_array.call(null,2,k,bucket__3428):null);

if(cljs.core.truth_(i__3429))
{return (bucket__3428[(i__3429 + 1)]);
} else
{return not_found;
}
});
G__3455 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3455__3456.call(this,coll,k);
case  3 :
return G__3455__3457.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3455;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3430 = this;
var h__3431 = cljs.core.hash.call(null,k);
var bucket__3432 = (this__3430.hashobj[h__3431]);

if(cljs.core.truth_(bucket__3432))
{var new_bucket__3433 = cljs.core.aclone.call(null,bucket__3432);
var new_hashobj__3434 = goog.object.clone.call(null,this__3430.hashobj);

(new_hashobj__3434[h__3431] = new_bucket__3433);
var temp__3695__auto____3435 = cljs.core.scan_array.call(null,2,k,new_bucket__3433);

if(cljs.core.truth_(temp__3695__auto____3435))
{var i__3436 = temp__3695__auto____3435;

(new_bucket__3433[(i__3436 + 1)] = v);
return (new cljs.core.HashMap(this__3430.meta,this__3430.count,new_hashobj__3434));
} else
{new_bucket__3433.push(k,v);
return (new cljs.core.HashMap(this__3430.meta,(this__3430.count + 1),new_hashobj__3434));
}
} else
{var new_hashobj__3437 = goog.object.clone.call(null,this__3430.hashobj);

(new_hashobj__3437[h__3431] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3430.meta,(this__3430.count + 1),new_hashobj__3437));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3438 = this;
var bucket__3439 = (this__3438.hashobj[cljs.core.hash.call(null,k)]);
var i__3440 = (cljs.core.truth_(bucket__3439)?cljs.core.scan_array.call(null,2,k,bucket__3439):null);

if(cljs.core.truth_(i__3440))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3441 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3442 = this;
if(cljs.core.truth_((this__3442.count > 0)))
{var hashes__3443 = cljs.core.js_keys.call(null,this__3442.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3420_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3442.hashobj[p1__3420_SHARP_])));
}),hashes__3443);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3444 = this;
return this__3444.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3445 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3446 = this;
return (new cljs.core.HashMap(meta,this__3446.count,this__3446.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3447 = this;
return this__3447.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3448 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3448.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3449 = this;
var h__3450 = cljs.core.hash.call(null,k);
var bucket__3451 = (this__3449.hashobj[h__3450]);
var i__3452 = (cljs.core.truth_(bucket__3451)?cljs.core.scan_array.call(null,2,k,bucket__3451):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3452)))
{return coll;
} else
{var new_hashobj__3453 = goog.object.clone.call(null,this__3449.hashobj);

if(cljs.core.truth_((3 > bucket__3451.length)))
{cljs.core.js_delete.call(null,new_hashobj__3453,h__3450);
} else
{var new_bucket__3454 = cljs.core.aclone.call(null,bucket__3451);

new_bucket__3454.splice(i__3452,2);
(new_hashobj__3453[h__3450] = new_bucket__3454);
}
return (new cljs.core.HashMap(this__3449.meta,(this__3449.count - 1),new_hashobj__3453));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3459 = ks.length;

var i__3460 = 0;
var out__3461 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3460 < len__3459)))
{{
var G__3462 = (i__3460 + 1);
var G__3463 = cljs.core.assoc.call(null,out__3461,(ks[i__3460]),(vs[i__3460]));
i__3460 = G__3462;
out__3461 = G__3463;
continue;
}
} else
{return out__3461;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3464 = null;
var G__3464__3465 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3464__3466 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3464 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3464__3465.call(this,_,k);
case  3 :
return G__3464__3466.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3464;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3468 = cljs.core.seq.call(null,keyvals);
var out__3469 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3468))
{{
var G__3470 = cljs.core.nnext.call(null,in$__3468);
var G__3471 = cljs.core.assoc.call(null,out__3469,cljs.core.first.call(null,in$__3468),cljs.core.second.call(null,in$__3468));
in$__3468 = G__3470;
out__3469 = G__3471;
continue;
}
} else
{return out__3469;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3472){
var keyvals = cljs.core.seq( arglist__3472 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3473_SHARP_,p2__3474_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3475 = p1__3473_SHARP_;

if(cljs.core.truth_(or__3548__auto____3475))
{return or__3548__auto____3475;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3474_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3476){
var maps = cljs.core.seq( arglist__3476 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3479 = (function (m,e){
var k__3477 = cljs.core.first.call(null,e);
var v__3478 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3477)))
{return cljs.core.assoc.call(null,m,k__3477,f.call(null,cljs.core.get.call(null,m,k__3477),v__3478));
} else
{return cljs.core.assoc.call(null,m,k__3477,v__3478);
}
});
var merge2__3481 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3479,(function (){var or__3548__auto____3480 = m1;

if(cljs.core.truth_(or__3548__auto____3480))
{return or__3548__auto____3480;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3481,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3482){
var f = cljs.core.first(arglist__3482);
var maps = cljs.core.rest(arglist__3482);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3484 = cljs.core.ObjMap.fromObject([],{});
var keys__3485 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3485))
{var key__3486 = cljs.core.first.call(null,keys__3485);
var entry__3487 = cljs.core.get.call(null,map,key__3486,"﷐'user/not-found");

{
var G__3488 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3487,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3484,key__3486,entry__3487):ret__3484);
var G__3489 = cljs.core.next.call(null,keys__3485);
ret__3484 = G__3488;
keys__3485 = G__3489;
continue;
}
} else
{return ret__3484;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3490 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3503 = null;
var G__3503__3504 = (function (coll,v){
var this__3491 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3503__3505 = (function (coll,v,not_found){
var this__3492 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3492.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3503 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3503__3504.call(this,coll,v);
case  3 :
return G__3503__3505.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3503;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3493 = this;
return (new cljs.core.Set(this__3493.meta,cljs.core.assoc.call(null,this__3493.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3494 = this;
return cljs.core.keys.call(null,this__3494.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3495 = this;
return (new cljs.core.Set(this__3495.meta,cljs.core.dissoc.call(null,this__3495.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3496 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3497 = this;
var and__3546__auto____3498 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3498))
{var and__3546__auto____3499 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3499))
{return cljs.core.every_QMARK_.call(null,(function (p1__3483_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3483_SHARP_);
}),other);
} else
{return and__3546__auto____3499;
}
} else
{return and__3546__auto____3498;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3500 = this;
return (new cljs.core.Set(meta,this__3500.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3501 = this;
return this__3501.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3502 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3502.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3507 = null;
var G__3507__3508 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3507__3509 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3507 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3507__3508.call(this,_,k);
case  3 :
return G__3507__3509.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3507;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3512 = cljs.core.seq.call(null,coll);
var out__3513 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3512))))
{{
var G__3514 = cljs.core.rest.call(null,in$__3512);
var G__3515 = cljs.core.conj.call(null,out__3513,cljs.core.first.call(null,in$__3512));
in$__3512 = G__3514;
out__3513 = G__3515;
continue;
}
} else
{return out__3513;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3516 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3517 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3517))
{var e__3518 = temp__3695__auto____3517;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3518));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3516,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3511_SHARP_){
var temp__3695__auto____3519 = cljs.core.find.call(null,smap,p1__3511_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3519))
{var e__3520 = temp__3695__auto____3519;

return cljs.core.second.call(null,e__3520);
} else
{return p1__3511_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3528 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3521,seen){
while(true){
var vec__3522__3523 = p__3521;
var f__3524 = cljs.core.nth.call(null,vec__3522__3523,0,null);
var xs__3525 = vec__3522__3523;

var temp__3698__auto____3526 = cljs.core.seq.call(null,xs__3525);

if(cljs.core.truth_(temp__3698__auto____3526))
{var s__3527 = temp__3698__auto____3526;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3524)))
{{
var G__3529 = cljs.core.rest.call(null,s__3527);
var G__3530 = seen;
p__3521 = G__3529;
seen = G__3530;
continue;
}
} else
{return cljs.core.cons.call(null,f__3524,step.call(null,cljs.core.rest.call(null,s__3527),cljs.core.conj.call(null,seen,f__3524)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3528.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3531 = cljs.core.Vector.fromArray([]);
var s__3532 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3532)))
{{
var G__3533 = cljs.core.conj.call(null,ret__3531,cljs.core.first.call(null,s__3532));
var G__3534 = cljs.core.next.call(null,s__3532);
ret__3531 = G__3533;
s__3532 = G__3534;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3531);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3535 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3535))
{return or__3548__auto____3535;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3536 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3536 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3536 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3537 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3537))
{return or__3548__auto____3537;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3538 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3538 > -1)))
{return cljs.core.subs.call(null,x,2,i__3538);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3541 = cljs.core.ObjMap.fromObject([],{});
var ks__3542 = cljs.core.seq.call(null,keys);
var vs__3543 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3544 = ks__3542;

if(cljs.core.truth_(and__3546__auto____3544))
{return vs__3543;
} else
{return and__3546__auto____3544;
}
})()))
{{
var G__3545 = cljs.core.assoc.call(null,map__3541,cljs.core.first.call(null,ks__3542),cljs.core.first.call(null,vs__3543));
var G__3546 = cljs.core.next.call(null,ks__3542);
var G__3547 = cljs.core.next.call(null,vs__3543);
map__3541 = G__3545;
ks__3542 = G__3546;
vs__3543 = G__3547;
continue;
}
} else
{return map__3541;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3550 = (function (k,x){
return x;
});
var max_key__3551 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3552 = (function() { 
var G__3554__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3539_SHARP_,p2__3540_SHARP_){
return max_key.call(null,k,p1__3539_SHARP_,p2__3540_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3554 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3554__delegate.call(this, k, x, y, more);
};
G__3554.cljs$lang$maxFixedArity = 3;
G__3554.cljs$lang$applyTo = (function (arglist__3555){
var k = cljs.core.first(arglist__3555);
var x = cljs.core.first(cljs.core.next(arglist__3555));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3555)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3555)));
return G__3554__delegate.call(this, k, x, y, more);
});
return G__3554;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3550.call(this,k,x);
case  3 :
return max_key__3551.call(this,k,x,y);
default:
return max_key__3552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3552.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3556 = (function (k,x){
return x;
});
var min_key__3557 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3558 = (function() { 
var G__3560__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3548_SHARP_,p2__3549_SHARP_){
return min_key.call(null,k,p1__3548_SHARP_,p2__3549_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3560 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3560__delegate.call(this, k, x, y, more);
};
G__3560.cljs$lang$maxFixedArity = 3;
G__3560.cljs$lang$applyTo = (function (arglist__3561){
var k = cljs.core.first(arglist__3561);
var x = cljs.core.first(cljs.core.next(arglist__3561));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3561)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3561)));
return G__3560__delegate.call(this, k, x, y, more);
});
return G__3560;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3556.call(this,k,x);
case  3 :
return min_key__3557.call(this,k,x,y);
default:
return min_key__3558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3558.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3564 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3565 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3562 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3562))
{var s__3563 = temp__3698__auto____3562;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3563),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3563)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3564.call(this,n,step);
case  3 :
return partition_all__3565.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3567 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3567))
{var s__3568 = temp__3698__auto____3567;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3568))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3568),take_while.call(null,pred,cljs.core.rest.call(null,s__3568)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3569 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3570 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3586 = null;
var G__3586__3587 = (function (rng,f){
var this__3571 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3586__3588 = (function (rng,f,s){
var this__3572 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3586 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3586__3587.call(this,rng,f);
case  3 :
return G__3586__3588.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3586;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3573 = this;
var comp__3574 = (cljs.core.truth_((this__3573.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3574.call(null,this__3573.start,this__3573.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3575 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3575.end - this__3575.start) / this__3575.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3576 = this;
return this__3576.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3577 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3577.meta,(this__3577.start + this__3577.step),this__3577.end,this__3577.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3578 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3579 = this;
return (new cljs.core.Range(meta,this__3579.start,this__3579.end,this__3579.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3580 = this;
return this__3580.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3590 = null;
var G__3590__3591 = (function (rng,n){
var this__3581 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3581.start + (n * this__3581.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3582 = (this__3581.start > this__3581.end);

if(cljs.core.truth_(and__3546__auto____3582))
{return cljs.core._EQ_.call(null,this__3581.step,0);
} else
{return and__3546__auto____3582;
}
})()))
{return this__3581.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3590__3592 = (function (rng,n,not_found){
var this__3583 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3583.start + (n * this__3583.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3584 = (this__3583.start > this__3583.end);

if(cljs.core.truth_(and__3546__auto____3584))
{return cljs.core._EQ_.call(null,this__3583.step,0);
} else
{return and__3546__auto____3584;
}
})()))
{return this__3583.start;
} else
{return not_found;
}
}
});
G__3590 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3590__3591.call(this,rng,n);
case  3 :
return G__3590__3592.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3590;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3585 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3585.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3594 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3595 = (function (end){
return range.call(null,0,end,1);
});
var range__3596 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3597 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3594.call(this);
case  1 :
return range__3595.call(this,start);
case  2 :
return range__3596.call(this,start,end);
case  3 :
return range__3597.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3599))
{var s__3600 = temp__3698__auto____3599;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3600),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3600)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3602 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3602))
{var s__3603 = temp__3698__auto____3602;

var fst__3604 = cljs.core.first.call(null,s__3603);
var fv__3605 = f.call(null,fst__3604);
var run__3606 = cljs.core.cons.call(null,fst__3604,cljs.core.take_while.call(null,(function (p1__3601_SHARP_){
return cljs.core._EQ_.call(null,fv__3605,f.call(null,p1__3601_SHARP_));
}),cljs.core.next.call(null,s__3603)));

return cljs.core.cons.call(null,run__3606,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3606),s__3603))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3621 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3617 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3617))
{var s__3618 = temp__3695__auto____3617;

return reductions.call(null,f,cljs.core.first.call(null,s__3618),cljs.core.rest.call(null,s__3618));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3622 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3619))
{var s__3620 = temp__3698__auto____3619;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3620)),cljs.core.rest.call(null,s__3620));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3621.call(this,f,init);
case  3 :
return reductions__3622.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3625 = (function (f){
return (function() {
var G__3630 = null;
var G__3630__3631 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3630__3632 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3630__3633 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3630__3634 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3630__3635 = (function() { 
var G__3637__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3637 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3637__delegate.call(this, x, y, z, args);
};
G__3637.cljs$lang$maxFixedArity = 3;
G__3637.cljs$lang$applyTo = (function (arglist__3638){
var x = cljs.core.first(arglist__3638);
var y = cljs.core.first(cljs.core.next(arglist__3638));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3638)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3638)));
return G__3637__delegate.call(this, x, y, z, args);
});
return G__3637;
})()
;
G__3630 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3630__3631.call(this);
case  1 :
return G__3630__3632.call(this,x);
case  2 :
return G__3630__3633.call(this,x,y);
case  3 :
return G__3630__3634.call(this,x,y,z);
default:
return G__3630__3635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3630.cljs$lang$maxFixedArity = 3;
G__3630.cljs$lang$applyTo = G__3630__3635.cljs$lang$applyTo;
return G__3630;
})()
});
var juxt__3626 = (function (f,g){
return (function() {
var G__3639 = null;
var G__3639__3640 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3639__3641 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3639__3642 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3639__3643 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3639__3644 = (function() { 
var G__3646__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3646__delegate.call(this, x, y, z, args);
};
G__3646.cljs$lang$maxFixedArity = 3;
G__3646.cljs$lang$applyTo = (function (arglist__3647){
var x = cljs.core.first(arglist__3647);
var y = cljs.core.first(cljs.core.next(arglist__3647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3647)));
return G__3646__delegate.call(this, x, y, z, args);
});
return G__3646;
})()
;
G__3639 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3639__3640.call(this);
case  1 :
return G__3639__3641.call(this,x);
case  2 :
return G__3639__3642.call(this,x,y);
case  3 :
return G__3639__3643.call(this,x,y,z);
default:
return G__3639__3644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3639.cljs$lang$maxFixedArity = 3;
G__3639.cljs$lang$applyTo = G__3639__3644.cljs$lang$applyTo;
return G__3639;
})()
});
var juxt__3627 = (function (f,g,h){
return (function() {
var G__3648 = null;
var G__3648__3649 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3648__3650 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3648__3651 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3648__3652 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3648__3653 = (function() { 
var G__3655__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3655__delegate.call(this, x, y, z, args);
};
G__3655.cljs$lang$maxFixedArity = 3;
G__3655.cljs$lang$applyTo = (function (arglist__3656){
var x = cljs.core.first(arglist__3656);
var y = cljs.core.first(cljs.core.next(arglist__3656));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3656)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3656)));
return G__3655__delegate.call(this, x, y, z, args);
});
return G__3655;
})()
;
G__3648 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3648__3649.call(this);
case  1 :
return G__3648__3650.call(this,x);
case  2 :
return G__3648__3651.call(this,x,y);
case  3 :
return G__3648__3652.call(this,x,y,z);
default:
return G__3648__3653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3648.cljs$lang$maxFixedArity = 3;
G__3648.cljs$lang$applyTo = G__3648__3653.cljs$lang$applyTo;
return G__3648;
})()
});
var juxt__3628 = (function() { 
var G__3657__delegate = function (f,g,h,fs){
var fs__3624 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3658 = null;
var G__3658__3659 = (function (){
return cljs.core.reduce.call(null,(function (p1__3607_SHARP_,p2__3608_SHARP_){
return cljs.core.conj.call(null,p1__3607_SHARP_,p2__3608_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3624);
});
var G__3658__3660 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3609_SHARP_,p2__3610_SHARP_){
return cljs.core.conj.call(null,p1__3609_SHARP_,p2__3610_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3624);
});
var G__3658__3661 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3611_SHARP_,p2__3612_SHARP_){
return cljs.core.conj.call(null,p1__3611_SHARP_,p2__3612_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3624);
});
var G__3658__3662 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3613_SHARP_,p2__3614_SHARP_){
return cljs.core.conj.call(null,p1__3613_SHARP_,p2__3614_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3624);
});
var G__3658__3663 = (function() { 
var G__3665__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3615_SHARP_,p2__3616_SHARP_){
return cljs.core.conj.call(null,p1__3615_SHARP_,cljs.core.apply.call(null,p2__3616_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3624);
};
var G__3665 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3665__delegate.call(this, x, y, z, args);
};
G__3665.cljs$lang$maxFixedArity = 3;
G__3665.cljs$lang$applyTo = (function (arglist__3666){
var x = cljs.core.first(arglist__3666);
var y = cljs.core.first(cljs.core.next(arglist__3666));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3666)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3666)));
return G__3665__delegate.call(this, x, y, z, args);
});
return G__3665;
})()
;
G__3658 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3658__3659.call(this);
case  1 :
return G__3658__3660.call(this,x);
case  2 :
return G__3658__3661.call(this,x,y);
case  3 :
return G__3658__3662.call(this,x,y,z);
default:
return G__3658__3663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3658.cljs$lang$maxFixedArity = 3;
G__3658.cljs$lang$applyTo = G__3658__3663.cljs$lang$applyTo;
return G__3658;
})()
};
var G__3657 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3657__delegate.call(this, f, g, h, fs);
};
G__3657.cljs$lang$maxFixedArity = 3;
G__3657.cljs$lang$applyTo = (function (arglist__3667){
var f = cljs.core.first(arglist__3667);
var g = cljs.core.first(cljs.core.next(arglist__3667));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3667)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3667)));
return G__3657__delegate.call(this, f, g, h, fs);
});
return G__3657;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3625.call(this,f);
case  2 :
return juxt__3626.call(this,f,g);
case  3 :
return juxt__3627.call(this,f,g,h);
default:
return juxt__3628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3628.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3669 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3672 = cljs.core.next.call(null,coll);
coll = G__3672;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3670 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3668))
{return (n > 0);
} else
{return and__3546__auto____3668;
}
})()))
{{
var G__3673 = (n - 1);
var G__3674 = cljs.core.next.call(null,coll);
n = G__3673;
coll = G__3674;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3669.call(this,n);
case  2 :
return dorun__3670.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3675 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3676 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3675.call(this,n);
case  2 :
return doall__3676.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3678 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3678),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3678),1)))
{return cljs.core.first.call(null,matches__3678);
} else
{return cljs.core.vec.call(null,matches__3678);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3679 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3679)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3679),1)))
{return cljs.core.first.call(null,matches__3679);
} else
{return cljs.core.vec.call(null,matches__3679);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3680 = cljs.core.re_find.call(null,re,s);
var match_idx__3681 = s.search(re);
var match_str__3682 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3680))?cljs.core.first.call(null,match_data__3680):match_data__3680);
var post_match__3683 = cljs.core.subs.call(null,s,(match_idx__3681 + cljs.core.count.call(null,match_str__3682)));

if(cljs.core.truth_(match_data__3680))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3680,re_seq.call(null,re,post_match__3683));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3684_SHARP_){
return print_one.call(null,p1__3684_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3685 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3685))
{var and__3546__auto____3689 = (function (){var x__316__auto____3686 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3687 = x__316__auto____3686;

if(cljs.core.truth_(and__3546__auto____3687))
{var and__3546__auto____3688 = x__316__auto____3686.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3688))
{return cljs.core.not.call(null,x__316__auto____3686.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3688;
}
} else
{return and__3546__auto____3687;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__316__auto____3686);
}
})();

if(cljs.core.truth_(and__3546__auto____3689))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3689;
}
} else
{return and__3546__auto____3685;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__316__auto____3690 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3691 = x__316__auto____3690;

if(cljs.core.truth_(and__3546__auto____3691))
{var and__3546__auto____3692 = x__316__auto____3690.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3692))
{return cljs.core.not.call(null,x__316__auto____3690.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3692;
}
} else
{return and__3546__auto____3691;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__316__auto____3690);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3693 = cljs.core.first.call(null,objs);
var sb__3694 = (new goog.string.StringBuffer());

var G__3695__3696 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3695__3696))
{var obj__3697 = cljs.core.first.call(null,G__3695__3696);
var G__3695__3698 = G__3695__3696;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3697,first_obj__3693)))
{} else
{sb__3694.append(" ");
}
var G__3699__3700 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3697,opts));

if(cljs.core.truth_(G__3699__3700))
{var string__3701 = cljs.core.first.call(null,G__3699__3700);
var G__3699__3702 = G__3699__3700;

while(true){
sb__3694.append(string__3701);
var temp__3698__auto____3703 = cljs.core.next.call(null,G__3699__3702);

if(cljs.core.truth_(temp__3698__auto____3703))
{var G__3699__3704 = temp__3698__auto____3703;

{
var G__3707 = cljs.core.first.call(null,G__3699__3704);
var G__3708 = G__3699__3704;
string__3701 = G__3707;
G__3699__3702 = G__3708;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3705 = cljs.core.next.call(null,G__3695__3698);

if(cljs.core.truth_(temp__3698__auto____3705))
{var G__3695__3706 = temp__3698__auto____3705;

{
var G__3709 = cljs.core.first.call(null,G__3695__3706);
var G__3710 = G__3695__3706;
obj__3697 = G__3709;
G__3695__3698 = G__3710;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3694);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3711 = cljs.core.first.call(null,objs);

var G__3712__3713 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3712__3713))
{var obj__3714 = cljs.core.first.call(null,G__3712__3713);
var G__3712__3715 = G__3712__3713;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3714,first_obj__3711)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3716__3717 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3714,opts));

if(cljs.core.truth_(G__3716__3717))
{var string__3718 = cljs.core.first.call(null,G__3716__3717);
var G__3716__3719 = G__3716__3717;

while(true){
cljs.core.string_print.call(null,string__3718);
var temp__3698__auto____3720 = cljs.core.next.call(null,G__3716__3719);

if(cljs.core.truth_(temp__3698__auto____3720))
{var G__3716__3721 = temp__3698__auto____3720;

{
var G__3724 = cljs.core.first.call(null,G__3716__3721);
var G__3725 = G__3716__3721;
string__3718 = G__3724;
G__3716__3719 = G__3725;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3722 = cljs.core.next.call(null,G__3712__3715);

if(cljs.core.truth_(temp__3698__auto____3722))
{var G__3712__3723 = temp__3698__auto____3722;

{
var G__3726 = cljs.core.first.call(null,G__3712__3723);
var G__3727 = G__3712__3723;
obj__3714 = G__3726;
G__3712__3715 = G__3727;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3728){
var objs = cljs.core.seq( arglist__3728 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3729){
var objs = cljs.core.seq( arglist__3729 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3730){
var objs = cljs.core.seq( arglist__3730 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3731){
var objs = cljs.core.seq( arglist__3731 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3732){
var objs = cljs.core.seq( arglist__3732 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3733 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3733,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3734 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3734))
{var nspc__3735 = temp__3698__auto____3734;

return cljs.core.str.call(null,nspc__3735,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3736 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3736))
{var nspc__3737 = temp__3698__auto____3736;

return cljs.core.str.call(null,nspc__3737,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3738 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3738,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3739 = this;
var G__3740__3741 = cljs.core.seq.call(null,this__3739.watches);

if(cljs.core.truth_(G__3740__3741))
{var G__3743__3745 = cljs.core.first.call(null,G__3740__3741);
var vec__3744__3746 = G__3743__3745;
var key__3747 = cljs.core.nth.call(null,vec__3744__3746,0,null);
var f__3748 = cljs.core.nth.call(null,vec__3744__3746,1,null);
var G__3740__3749 = G__3740__3741;

var G__3743__3750 = G__3743__3745;
var G__3740__3751 = G__3740__3749;

while(true){
var vec__3752__3753 = G__3743__3750;
var key__3754 = cljs.core.nth.call(null,vec__3752__3753,0,null);
var f__3755 = cljs.core.nth.call(null,vec__3752__3753,1,null);
var G__3740__3756 = G__3740__3751;

f__3755.call(null,key__3754,this$,oldval,newval);
var temp__3698__auto____3757 = cljs.core.next.call(null,G__3740__3756);

if(cljs.core.truth_(temp__3698__auto____3757))
{var G__3740__3758 = temp__3698__auto____3757;

{
var G__3765 = cljs.core.first.call(null,G__3740__3758);
var G__3766 = G__3740__3758;
G__3743__3750 = G__3765;
G__3740__3751 = G__3766;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3759 = this;
return this$.watches = cljs.core.assoc.call(null,this__3759.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3760 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3760.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3761 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3761.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3762 = this;
return this__3762.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3763 = this;
return this__3763.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3764 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3773 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3774 = (function() { 
var G__3776__delegate = function (x,p__3767){
var map__3768__3769 = p__3767;
var map__3768__3770 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3768__3769))?cljs.core.apply.call(null,cljs.core.hash_map,map__3768__3769):map__3768__3769);
var validator__3771 = cljs.core.get.call(null,map__3768__3770,"﷐'validator");
var meta__3772 = cljs.core.get.call(null,map__3768__3770,"﷐'meta");

return (new cljs.core.Atom(x,meta__3772,validator__3771,null));
};
var G__3776 = function (x,var_args){
var p__3767 = null;
if (goog.isDef(var_args)) {
  p__3767 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3776__delegate.call(this, x, p__3767);
};
G__3776.cljs$lang$maxFixedArity = 1;
G__3776.cljs$lang$applyTo = (function (arglist__3777){
var x = cljs.core.first(arglist__3777);
var p__3767 = cljs.core.rest(arglist__3777);
return G__3776__delegate.call(this, x, p__3767);
});
return G__3776;
})()
;
atom = function(x,var_args){
var p__3767 = var_args;
switch(arguments.length){
case  1 :
return atom__3773.call(this,x);
default:
return atom__3774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3774.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3778 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3778))
{var validate__3779 = temp__3698__auto____3778;

if(cljs.core.truth_(validate__3779.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")))));
}
} else
{}
var old_value__3780 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3780,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3781 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3782 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3783 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3784 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3785 = (function() { 
var G__3787__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3787 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3787__delegate.call(this, a, f, x, y, z, more);
};
G__3787.cljs$lang$maxFixedArity = 5;
G__3787.cljs$lang$applyTo = (function (arglist__3788){
var a = cljs.core.first(arglist__3788);
var f = cljs.core.first(cljs.core.next(arglist__3788));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3788)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3788))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3788)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3788)))));
return G__3787__delegate.call(this, a, f, x, y, z, more);
});
return G__3787;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3781.call(this,a,f);
case  3 :
return swap_BANG___3782.call(this,a,f,x);
case  4 :
return swap_BANG___3783.call(this,a,f,x,y);
case  5 :
return swap_BANG___3784.call(this,a,f,x,y,z);
default:
return swap_BANG___3785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3785.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3789){
var iref = cljs.core.first(arglist__3789);
var f = cljs.core.first(cljs.core.next(arglist__3789));
var args = cljs.core.rest(cljs.core.next(arglist__3789));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3790 = (function (){
return gensym.call(null,"G__");
});
var gensym__3791 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3790.call(this);
case  1 :
return gensym__3791.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3793 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3793.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3794 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3794.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3794.state,this__3794.f);
}
return cljs.core.deref.call(null,this__3794.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3795){
var body = cljs.core.seq( arglist__3795 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3796__3797 = options;
var map__3796__3798 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3796__3797))?cljs.core.apply.call(null,cljs.core.hash_map,map__3796__3797):map__3796__3797);
var keywordize_keys__3799 = cljs.core.get.call(null,map__3796__3798,"﷐'keywordize-keys");
var keyfn__3800 = (cljs.core.truth_(keywordize_keys__3799)?cljs.core.keyword:cljs.core.str);
var f__3806 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__380__auto____3805 = (function iter__3801(s__3802){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3802__3803 = s__3802;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3802__3803)))
{var k__3804 = cljs.core.first.call(null,s__3802__3803);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3800.call(null,k__3804),thisfn.call(null,(x[k__3804]))]),iter__3801.call(null,cljs.core.rest.call(null,s__3802__3803)));
} else
{return null;
}
break;
}
})));
});

return iter__380__auto____3805.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3806.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3807){
var x = cljs.core.first(arglist__3807);
var options = cljs.core.rest(arglist__3807);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3808 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3812__delegate = function (args){
var temp__3695__auto____3809 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3808),args);

if(cljs.core.truth_(temp__3695__auto____3809))
{var v__3810 = temp__3695__auto____3809;

return v__3810;
} else
{var ret__3811 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3808,cljs.core.assoc,args,ret__3811);
return ret__3811;
}
};
var G__3812 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3812__delegate.call(this, args);
};
G__3812.cljs$lang$maxFixedArity = 0;
G__3812.cljs$lang$applyTo = (function (arglist__3813){
var args = cljs.core.seq( arglist__3813 );;
return G__3812__delegate.call(this, args);
});
return G__3812;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3815 = (function (f){
while(true){
var ret__3814 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3814)))
{{
var G__3818 = ret__3814;
f = G__3818;
continue;
}
} else
{return ret__3814;
}
break;
}
});
var trampoline__3816 = (function() { 
var G__3819__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3819 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3819__delegate.call(this, f, args);
};
G__3819.cljs$lang$maxFixedArity = 1;
G__3819.cljs$lang$applyTo = (function (arglist__3820){
var f = cljs.core.first(arglist__3820);
var args = cljs.core.rest(arglist__3820);
return G__3819__delegate.call(this, f, args);
});
return G__3819;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3815.call(this,f);
default:
return trampoline__3816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3816.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3821 = (function (){
return rand.call(null,1);
});
var rand__3822 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3821.call(this);
case  1 :
return rand__3822.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3824 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3824,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3824,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3833 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3834 = (function (h,child,parent){
var or__3548__auto____3825 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3825))
{return or__3548__auto____3825;
} else
{var or__3548__auto____3826 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{var and__3546__auto____3827 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3827))
{var and__3546__auto____3828 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3828))
{var and__3546__auto____3829 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3829))
{var ret__3830 = true;
var i__3831 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3832 = cljs.core.not.call(null,ret__3830);

if(cljs.core.truth_(or__3548__auto____3832))
{return or__3548__auto____3832;
} else
{return cljs.core._EQ_.call(null,i__3831,cljs.core.count.call(null,parent));
}
})()))
{return ret__3830;
} else
{{
var G__3836 = isa_QMARK_.call(null,h,child.call(null,i__3831),parent.call(null,i__3831));
var G__3837 = (i__3831 + 1);
ret__3830 = G__3836;
i__3831 = G__3837;
continue;
}
}
break;
}
} else
{return and__3546__auto____3829;
}
} else
{return and__3546__auto____3828;
}
} else
{return and__3546__auto____3827;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3833.call(this,h,child);
case  3 :
return isa_QMARK___3834.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3838 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3839 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3838.call(this,h);
case  2 :
return parents__3839.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3841 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3842 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3841.call(this,h);
case  2 :
return ancestors__3842.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3844 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3845 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3844.call(this,h);
case  2 :
return descendants__3845.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3855 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3856 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")))));
}
var tp__3850 = "﷐'parents".call(null,h);
var td__3851 = "﷐'descendants".call(null,h);
var ta__3852 = "﷐'ancestors".call(null,h);
var tf__3853 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3854 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3850.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3852.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3852.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3850,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3853.call(null,"﷐'ancestors".call(null,h),tag,td__3851,parent,ta__3852),"﷐'descendants":tf__3853.call(null,"﷐'descendants".call(null,h),parent,ta__3852,tag,td__3851)});
})());

if(cljs.core.truth_(or__3548__auto____3854))
{return or__3548__auto____3854;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3855.call(this,h,tag);
case  3 :
return derive__3856.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3862 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3863 = (function (h,tag,parent){
var parentMap__3858 = "﷐'parents".call(null,h);
var childsParents__3859 = (cljs.core.truth_(parentMap__3858.call(null,tag))?cljs.core.disj.call(null,parentMap__3858.call(null,tag),parent):cljs.core.set([]));
var newParents__3860 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3859))?cljs.core.assoc.call(null,parentMap__3858,tag,childsParents__3859):cljs.core.dissoc.call(null,parentMap__3858,tag));
var deriv_seq__3861 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3847_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3847_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3847_SHARP_),cljs.core.second.call(null,p1__3847_SHARP_)));
}),cljs.core.seq.call(null,newParents__3860)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3858.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3848_SHARP_,p2__3849_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3848_SHARP_,p2__3849_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3861));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3862.call(this,h,tag);
case  3 :
return underive__3863.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3865 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3867 = (cljs.core.truth_((function (){var and__3546__auto____3866 = xprefs__3865;

if(cljs.core.truth_(and__3546__auto____3866))
{return xprefs__3865.call(null,y);
} else
{return and__3546__auto____3866;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{var or__3548__auto____3869 = (function (){var ps__3868 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3868) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3868),prefer_table)))
{} else
{}
{
var G__3872 = cljs.core.rest.call(null,ps__3868);
ps__3868 = G__3872;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3869))
{return or__3548__auto____3869;
} else
{var or__3548__auto____3871 = (function (){var ps__3870 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3870) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3870),y,prefer_table)))
{} else
{}
{
var G__3873 = cljs.core.rest.call(null,ps__3870);
ps__3870 = G__3873;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3871))
{return or__3548__auto____3871;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3874 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3874))
{return or__3548__auto____3874;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3883 = cljs.core.reduce.call(null,(function (be,p__3875){
var vec__3876__3877 = p__3875;
var k__3878 = cljs.core.nth.call(null,vec__3876__3877,0,null);
var ___3879 = cljs.core.nth.call(null,vec__3876__3877,1,null);
var e__3880 = vec__3876__3877;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3878)))
{var be2__3882 = (cljs.core.truth_((function (){var or__3548__auto____3881 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3881))
{return or__3548__auto____3881;
} else
{return cljs.core.dominates.call(null,k__3878,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3880:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3882),k__3878,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3878," and ",cljs.core.first.call(null,be2__3882),", and neither is preferred")));
}
return be2__3882;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3883))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3883));
return cljs.core.second.call(null,best_entry__3883);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3884 = mf;

if(cljs.core.truth_(and__3546__auto____3884))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3884;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3885 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3885))
{return or__3548__auto____3885;
} else
{var or__3548__auto____3886 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3886))
{return or__3548__auto____3886;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3887 = mf;

if(cljs.core.truth_(and__3546__auto____3887))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3887;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3888 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3888))
{return or__3548__auto____3888;
} else
{var or__3548__auto____3889 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3889))
{return or__3548__auto____3889;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3890 = mf;

if(cljs.core.truth_(and__3546__auto____3890))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3890;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3891 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3891))
{return or__3548__auto____3891;
} else
{var or__3548__auto____3892 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3892))
{return or__3548__auto____3892;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3893 = mf;

if(cljs.core.truth_(and__3546__auto____3893))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3893;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3894 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3894))
{return or__3548__auto____3894;
} else
{var or__3548__auto____3895 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3895))
{return or__3548__auto____3895;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3896 = mf;

if(cljs.core.truth_(and__3546__auto____3896))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3896;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3897 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3897))
{return or__3548__auto____3897;
} else
{var or__3548__auto____3898 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3898))
{return or__3548__auto____3898;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3899 = mf;

if(cljs.core.truth_(and__3546__auto____3899))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3899;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3900 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3900))
{return or__3548__auto____3900;
} else
{var or__3548__auto____3901 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3901))
{return or__3548__auto____3901;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3902 = mf;

if(cljs.core.truth_(and__3546__auto____3902))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3902;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3903 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3903))
{return or__3548__auto____3903;
} else
{var or__3548__auto____3904 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3904))
{return or__3548__auto____3904;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3905 = mf;

if(cljs.core.truth_(and__3546__auto____3905))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3905;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3906 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3906))
{return or__3548__auto____3906;
} else
{var or__3548__auto____3907 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3907))
{return or__3548__auto____3907;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3908 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3909 = cljs.core._get_method.call(null,mf,dispatch_val__3908);

if(cljs.core.truth_(target_fn__3909))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3908)));
}
return cljs.core.apply.call(null,target_fn__3909,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3910 = this;
cljs.core.swap_BANG_.call(null,this__3910.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3910.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3910.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3910.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3911 = this;
cljs.core.swap_BANG_.call(null,this__3911.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3911.method_cache,this__3911.method_table,this__3911.cached_hierarchy,this__3911.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3912 = this;
cljs.core.swap_BANG_.call(null,this__3912.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3912.method_cache,this__3912.method_table,this__3912.cached_hierarchy,this__3912.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3913 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3913.cached_hierarchy),cljs.core.deref.call(null,this__3913.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3913.method_cache,this__3913.method_table,this__3913.cached_hierarchy,this__3913.hierarchy);
}
var temp__3695__auto____3914 = cljs.core.deref.call(null,this__3913.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3914))
{var target_fn__3915 = temp__3695__auto____3914;

return target_fn__3915;
} else
{var temp__3695__auto____3916 = cljs.core.find_and_cache_best_method.call(null,this__3913.name,dispatch_val,this__3913.hierarchy,this__3913.method_table,this__3913.prefer_table,this__3913.method_cache,this__3913.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3916))
{var target_fn__3917 = temp__3695__auto____3916;

return target_fn__3917;
} else
{return cljs.core.deref.call(null,this__3913.method_table).call(null,this__3913.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3918 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3918.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3918.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3918.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3918.method_cache,this__3918.method_table,this__3918.cached_hierarchy,this__3918.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3919 = this;
return cljs.core.deref.call(null,this__3919.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3920 = this;
return cljs.core.deref.call(null,this__3920.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3921 = this;
return cljs.core.do_invoke.call(null,mf,this__3921.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3922__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3922 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3922__delegate.call(this, _, args);
};
G__3922.cljs$lang$maxFixedArity = 1;
G__3922.cljs$lang$applyTo = (function (arglist__3923){
var _ = cljs.core.first(arglist__3923);
var args = cljs.core.rest(arglist__3923);
return G__3922__delegate.call(this, _, args);
});
return G__3922;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
