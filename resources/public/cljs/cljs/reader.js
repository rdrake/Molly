goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____2423 = reader;

if(cljs.core.truth_(and__3546__auto____2423))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____2423;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____2424 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{var or__3548__auto____2425 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____2425))
{return or__3548__auto____2425;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____2426 = reader;

if(cljs.core.truth_(and__3546__auto____2426))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____2426;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____2427 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
} else
{var or__3548__auto____2428 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____2428))
{return or__3548__auto____2428;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__2429 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__2429.buffer_atom))))
{var idx__2430 = cljs.core.deref.call(null,this__2429.index_atom);

cljs.core.swap_BANG_.call(null,this__2429.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__2429.s,idx__2430);
} else
{var buf__2431 = cljs.core.deref.call(null,this__2429.buffer_atom);

cljs.core.swap_BANG_.call(null,this__2429.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__2431);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__2432 = this;
return cljs.core.swap_BANG_.call(null,this__2432.buffer_atom,(function (p1__2422_SHARP_){
return cljs.core.cons.call(null,ch,p1__2422_SHARP_);
}));
});
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____2433 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____2434 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____2434))
{return or__3548__auto____2434;
} else
{var and__3546__auto____2436 = (function (){var or__3548__auto____2435 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____2436))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__2437 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__2437);
return next_ch__2437;
})());
} else
{return and__3546__auto____2436;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__2438){
var rdr = cljs.core.first(arglist__2438);
var msg = cljs.core.rest(arglist__2438);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____2439 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____2439))
{var and__3546__auto____2440 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____2440))
{var and__3546__auto____2441 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____2441))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____2441;
}
} else
{return and__3546__auto____2440;
}
} else
{return and__3546__auto____2439;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__2442 = (new goog.string.StringBuffer(initch));
var ch__2443 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____2444 = cljs.core.nil_QMARK_.call(null,ch__2443);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = cljs.reader.whitespace_QMARK_.call(null,ch__2443);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__2443);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__2443);
return sb__2442.toString();
} else
{{
var G__2446 = (function (){sb__2442.append(ch__2443);
return sb__2442;
})();
var G__2447 = cljs.reader.read_char.call(null,rdr);
sb__2442 = G__2446;
ch__2443 = G__2447;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__2448 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____2449 = cljs.core._EQ_.call(null,ch__2448,"n");

if(cljs.core.truth_(or__3548__auto____2449))
{return or__3548__auto____2449;
} else
{var or__3548__auto____2450 = cljs.core._EQ_.call(null,ch__2448,"r");

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{return cljs.core.nil_QMARK_.call(null,ch__2448);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__2451 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);

if(cljs.core.truth_(cljs.core.nth.call(null,groups__2451,2)))
{return 0;
} else
{var negate__2453 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__2451,1)))?-1:1);
var vec__2452__2454 = (cljs.core.truth_(cljs.core.nth.call(null,groups__2451,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2451,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2451,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2451,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2451,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2451,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__2451,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__2451,7),parseInt.call(null,cljs.core.nth.call(null,groups__2451,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__2455 = cljs.core.nth.call(null,vec__2452__2454,0,null);
var radix__2456 = cljs.core.nth.call(null,vec__2452__2454,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__2455)))
{return null;
} else
{return (negate__2453 * parseInt.call(null,n__2455,radix__2456));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__2457 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__2458 = cljs.core.nth.call(null,groups__2457,1);
var denominator__2459 = cljs.core.nth.call(null,groups__2457,2);

return (parseInt.call(null,numinator__2458) / parseInt.call(null,denominator__2459));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__2460 = cljs.reader.read_char.call(null,reader);
var mapresult__2461 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__2460);

if(cljs.core.truth_(mapresult__2461))
{return mapresult__2461;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____2462 = cljs.core._EQ_.call(null,"u",ch__2460);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__2460);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__2460);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__2460);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__2463 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__2463)))
{{
var G__2464 = cljs.reader.read_char.call(null,rdr);
ch__2463 = G__2464;
continue;
}
} else
{return ch__2463;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__2465 = cljs.core.Vector.fromArray([]);

while(true){
var ch__2466 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__2466))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__2466)))
{return a__2465;
} else
{var temp__3695__auto____2467 = cljs.core.get.call(null,cljs.reader.macros,ch__2466);

if(cljs.core.truth_(temp__3695__auto____2467))
{var macrofn__2468 = temp__3695__auto____2467;

var mret__2469 = macrofn__2468.call(null,rdr,ch__2466);

{
var G__2471 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__2469,rdr))?a__2465:cljs.core.conj.call(null,a__2465,mret__2469));
a__2465 = G__2471;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__2466);
var o__2470 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__2472 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__2470,rdr))?a__2465:cljs.core.conj.call(null,a__2465,o__2470));
a__2465 = G__2472;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__2473 = cljs.reader.read_char.call(null,rdr);
var dm__2474 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__2473);

if(cljs.core.truth_(dm__2474))
{return dm__2474.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__2473);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__2475 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__2475))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__2475);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__2476 = (new goog.string.StringBuffer(initch));
var ch__2477 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____2478 = cljs.core.nil_QMARK_.call(null,ch__2477);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{var or__3548__auto____2479 = cljs.reader.whitespace_QMARK_.call(null,ch__2477);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__2477);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__2477);
var s__2480 = buffer__2476.toString();

var or__3548__auto____2481 = cljs.reader.match_number.call(null,s__2480);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__2480,"]");
}
} else
{{
var G__2482 = (function (){buffer__2476.append(ch__2477);
return buffer__2476;
})();
var G__2483 = cljs.reader.read_char.call(null,reader);
buffer__2476 = G__2482;
ch__2477 = G__2483;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__2484 = (new goog.string.StringBuffer());
var ch__2485 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2485)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__2485)))
{{
var G__2486 = (function (){buffer__2484.append(cljs.reader.escape_char.call(null,buffer__2484,reader));
return buffer__2484;
})();
var G__2487 = cljs.reader.read_char.call(null,reader);
buffer__2484 = G__2486;
ch__2485 = G__2487;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__2485)))
{return buffer__2484.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__2488 = (function (){buffer__2484.append(ch__2485);
return buffer__2484;
})();
var G__2489 = cljs.reader.read_char.call(null,reader);
buffer__2484 = G__2488;
ch__2485 = G__2489;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__2490 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__2490,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__2490,0,token__2490.indexOf("/")),cljs.core.subs.call(null,(token__2490.indexOf("/") + 1),token__2490.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__2490,cljs.core.symbol.call(null,token__2490));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__2492 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__2491__2493 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__2492);
var token__2494 = cljs.core.nth.call(null,vec__2491__2493,0,null);
var ns__2495 = cljs.core.nth.call(null,vec__2491__2493,1,null);
var name__2496 = cljs.core.nth.call(null,vec__2491__2493,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____2498 = (function (){var and__3546__auto____2497 = cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__2495));

if(cljs.core.truth_(and__3546__auto____2497))
{return cljs.core.identical_QMARK_.call(null,ns__2495.substring((ns__2495.length - 2),ns__2495.length),":/");
} else
{return and__3546__auto____2497;
}
})();

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{var or__3548__auto____2499 = cljs.core.identical_QMARK_.call(null,(name__2496[(name__2496.length - 1)]),":");

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{return cljs.core.not.call(null,(token__2494.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__2494);
} else
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.undefined_QMARK_.call(null,ns__2495))))
{return cljs.core.keyword.call(null,ns__2495.substring(0,ns__2495.indexOf("/")),name__2496);
} else
{return cljs.core.keyword.call(null,token__2494);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__2500 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__2500)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__2501 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__316__auto____2502 = o__2501;

if(cljs.core.truth_((function (){var and__3546__auto____2503 = x__316__auto____2502;

if(cljs.core.truth_(and__3546__auto____2503))
{var and__3546__auto____2504 = x__316__auto____2502.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____2504))
{return cljs.core.not.call(null,x__316__auto____2502.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____2504;
}
} else
{return and__3546__auto____2503;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__316__auto____2502);
}
})()))
{return cljs.core.with_meta.call(null,o__2501,cljs.core.merge.call(null,cljs.core.meta.call(null,o__2501),m__2500));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__2505 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__2505)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__2505)))
{{
var G__2507 = reader;
var G__2508 = eof_is_error;
var G__2509 = sentinel;
var G__2510 = is_recursive;
reader = G__2507;
eof_is_error = G__2508;
sentinel = G__2509;
is_recursive = G__2510;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__2505)))
{{
var G__2511 = cljs.reader.read_comment.call(null,reader,ch__2505);
var G__2512 = eof_is_error;
var G__2513 = sentinel;
var G__2514 = is_recursive;
reader = G__2511;
eof_is_error = G__2512;
sentinel = G__2513;
is_recursive = G__2514;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__2506 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__2505))?cljs.reader.macros.call(null,ch__2505).call(null,reader,ch__2505):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__2505))?cljs.reader.read_number.call(null,reader,ch__2505):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__2505):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__2506,reader)))
{{
var G__2515 = reader;
var G__2516 = eof_is_error;
var G__2517 = sentinel;
var G__2518 = is_recursive;
reader = G__2515;
eof_is_error = G__2516;
sentinel = G__2517;
is_recursive = G__2518;
continue;
}
} else
{return res__2506;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__2519 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__2519,true,null,false);
});
