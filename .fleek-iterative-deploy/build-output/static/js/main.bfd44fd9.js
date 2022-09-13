/*! For license information please see main.bfd44fd9.js.LICENSE.txt */
(()=>{var __webpack_modules__={5318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},862:(e,t,r)=>{var a=r(8).default;function n(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=o?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(i,s,c):i[s]=e[s]}return i.default=e,r&&r.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports},8:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2552:(e,t,r)=>{"use strict";var a={};r.r(a),r.d(a,{Bool:()=>he,BoolClass:()=>L,ConstructType:()=>F,Empty:()=>ue,EmptyClass:()=>D,FixedIntClass:()=>Y,FixedNatClass:()=>J,Float32:()=>Ae,Float64:()=>ye,FloatClass:()=>W,Func:()=>Qe,FuncClass:()=>ie,Int:()=>ge,Int16:()=>ve,Int32:()=>we,Int64:()=>xe,Int8:()=>be,IntClass:()=>V,Nat:()=>me,Nat16:()=>Ee,Nat32:()=>qe,Nat64:()=>Be,Nat8:()=>ke,NatClass:()=>H,Null:()=>fe,NullClass:()=>G,Opt:()=>_e,OptClass:()=>K,PrimitiveType:()=>O,Principal:()=>Ie,PrincipalClass:()=>ne,Rec:()=>Me,RecClass:()=>re,Record:()=>Se,RecordClass:()=>X,Reserved:()=>de,ReservedClass:()=>U,Service:()=>Ne,ServiceClass:()=>oe,Text:()=>pe,TextClass:()=>Z,Tuple:()=>je,TupleClass:()=>ee,Type:()=>P,Variant:()=>ze,VariantClass:()=>te,Vec:()=>Ce,VecClass:()=>$,Visitor:()=>T,decode:()=>le,encode:()=>ce});var n=r(7313),i=r(1168),o=r(7462),s=(r(5192),r(454)),c={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},l=function(e){return(0,o.Z)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};const u=(0,s.Z)((function(e){return{"@global":{html:c,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},l(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,r=void 0===t?null:t;return e.classes,n.createElement(n.Fragment,null,r)}));var d,h=r(7010),f=r(918);!function(e){e[e.SysFatal=1]="SysFatal",e[e.SysTransient=2]="SysTransient",e[e.DestinationInvalid=3]="DestinationInvalid",e[e.CanisterReject=4]="CanisterReject",e[e.CanisterError=5]="CanisterError"}(d||(d={}));const p="abcdefghijklmnopqrstuvwxyz234567",g=Object.create(null);for(let Fv=0;Fv<p.length;Fv++)g[p[Fv]]=Fv;g[0]=g.o,g[1]=g.i;const m=new Uint32Array([0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]);function A(e){const t=new Uint8Array(e);let r=-1;for(let a=0;a<t.length;a++){const e=t[a];r=m[255&(e^r)]^r>>>8}return(-1^r)>>>0}var y=r(9293);function b(e){const t=y.sha224.create();return t.update(e),new Uint8Array(t.array())}class v{constructor(e){this._arr=e,this._isPrincipal=!0}static anonymous(){return new this(new Uint8Array([4]))}static selfAuthenticating(e){const t=b(e);return new this(new Uint8Array([...t,2]))}static from(e){if("string"===typeof e)return v.fromText(e);if("object"===typeof e&&null!==e&&!0===e._isPrincipal)return new v(e._arr);throw new Error(`Impossible to convert ${JSON.stringify(e)} to Principal.`)}static fromHex(e){return new this((e=>{var t;return new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16))))})(e))}static fromText(e){let t=function(e){let t=0,r=0;const a=new Uint8Array(4*e.length/3|0);let n=0;function i(e){let i=g[e.toLowerCase()];if(void 0===i)throw new Error(`Invalid character: ${JSON.stringify(e)}`);i<<=3,r|=i>>>t,t+=5,t>=8&&(a[n++]=r,t-=8,r=t>0?i<<5-t&255:0)}for(const o of e)i(o);return a.slice(0,n)}(e.toLowerCase().replace(/-/g,""));t=t.slice(4,t.length);const r=new this(t);if(r.toText()!==e)throw new Error(`Principal "${r.toText()}" does not have a valid checksum (original value "${e}" may not be a valid Principal ID).`);return r}static fromUint8Array(e){return new this(e)}isAnonymous(){return 1===this._arr.byteLength&&4===this._arr[0]}toUint8Array(){return this._arr}toHex(){return(e=this._arr,e.reduce(((e,t)=>e+t.toString(16).padStart(2,"0")),"")).toUpperCase();var e}toText(){const e=new ArrayBuffer(4);new DataView(e).setUint32(0,A(this._arr));const t=new Uint8Array(e),r=Uint8Array.from(this._arr),a=function(e){let t=0,r=0,a="";for(let i=0;i<e.length;)i+=(n=e[i],t<0?r|=n>>-t:r=n<<t&248,t>3?(t-=8,1):(t<4&&(a+=p[r>>3],t+=5),0));var n;return a+(t<0?p[r>>3]:"")}(new Uint8Array([...t,...r])),n=a.match(/.{1,5}/g);if(!n)throw new Error;return n.join("-")}toString(){return this.toText()}}class w extends Error{}function x(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=new Uint8Array(t.reduce(((e,t)=>e+t.byteLength),0));let n=0;for(const i of t)a.set(new Uint8Array(i),n),n+=i.byteLength;return a}class k{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(null===e||void 0===e?void 0:e.byteLength)||0;this._buffer=e||new ArrayBuffer(0),this._view=new Uint8Array(this._buffer,0,t)}get buffer(){return this._view.slice()}get byteLength(){return this._view.byteLength}read(e){const t=this._view.subarray(0,e);return this._view=this._view.subarray(e),t.slice().buffer}readUint8(){const e=this._view[0];return this._view=this._view.subarray(1),e}write(e){const t=new Uint8Array(e),r=this._view.byteLength;this._view.byteOffset+this._view.byteLength+t.byteLength>=this._buffer.byteLength?this.alloc(t.byteLength):this._view=new Uint8Array(this._buffer,this._view.byteOffset,this._view.byteLength+t.byteLength),this._view.set(t,r)}get end(){return 0===this._view.byteLength}alloc(e){const t=new ArrayBuffer(1.2*(this._buffer.byteLength+e)|0),r=new Uint8Array(t,0,this._view.byteLength+e);r.set(this._view),this._buffer=t,this._view=r}}function E(e){if(/^_\d+_$/.test(e)||/^_0x[0-9a-fA-F]+_$/.test(e)){const t=+e.slice(1,-1);if(Number.isSafeInteger(t)&&t>=0&&t<2**32)return t}return function(e){const t=(new TextEncoder).encode(e);let r=0;for(const a of t)r=(223*r+a)%2**32;return r}(e)}function q(){throw new Error("unexpected end of buffer")}function B(e,t){return e.byteLength<t&&q(),e.read(t)}function I(e){const t=e.readUint8();return void 0===t&&q(),t}function j(e){if("number"===typeof e&&(e=BigInt(e)),e<BigInt(0))throw new Error("Cannot leb encode negative values.");const t=(e===BigInt(0)?0:Math.ceil(Math.log2(Number(e))))+1,r=new k(new ArrayBuffer(t),0);for(;;){const t=Number(e&BigInt(127));if((e/=BigInt(128))===BigInt(0)){r.write(new Uint8Array([t]));break}r.write(new Uint8Array([128|t]))}return r.buffer}function C(e){let t,r=BigInt(1),a=BigInt(0);do{t=I(e),a+=BigInt(127&t).valueOf()*r,r*=BigInt(128)}while(t>=128);return a}function _(e){"number"===typeof e&&(e=BigInt(e));const t=e<BigInt(0);t&&(e=-e-BigInt(1));const r=(e===BigInt(0)?0:Math.ceil(Math.log2(Number(e))))+1,a=new k(new ArrayBuffer(r),0);for(;;){const r=n(e);if(e/=BigInt(128),t&&e===BigInt(0)&&0!==(64&r)||!t&&e===BigInt(0)&&0===(64&r)){a.write(new Uint8Array([r]));break}a.write(new Uint8Array([128|r]))}function n(e){const r=e%BigInt(128);return Number(t?BigInt(128)-r-BigInt(1):r)}return a.buffer}function S(e){const t=new Uint8Array(e.buffer);let r=0;for(;r<t.byteLength;r++)if(t[r]<128){if(0===(64&t[r]))return C(e);break}const a=new Uint8Array(B(e,r+1));let n=BigInt(0);for(let i=a.byteLength-1;i>=0;i--)n=n*BigInt(128)+BigInt(128-(127&a[i])-1);return-n-BigInt(1)}function z(e,t){e=BigInt(e);const r=new k(new ArrayBuffer(Math.min(1,t)),0);let a=0,n=BigInt(256),i=BigInt(0),o=Number(e%n);for(r.write(new Uint8Array([o]));++a<t;)e<0&&i===BigInt(0)&&0!==o&&(i=BigInt(1)),o=Number((e/n-i)%BigInt(256)),r.write(new Uint8Array([o])),n*=BigInt(256);return r.buffer}function M(e,t){let r=BigInt(I(e)),a=BigInt(1),n=0;for(;++n<t;){a*=BigInt(256);r+=a*BigInt(I(e))}return r}const Q="DIDL";function N(e,t,r){return e.map(((e,a)=>r(e,t[a])))}class R{constructor(){this._typs=[],this._idx=new Map}has(e){return this._idx.has(e.name)}add(e,t){const r=this._typs.length;this._idx.set(e.name,r),this._typs.push(t)}merge(e,t){const r=this._idx.get(e.name),a=this._idx.get(t);if(void 0===r)throw new Error("Missing type index for "+e);if(void 0===a)throw new Error("Missing type index for "+t);this._typs[r]=this._typs[a],this._typs.splice(a,1),this._idx.delete(t)}encode(){const e=j(this._typs.length),t=x(...this._typs);return x(e,t)}indexOf(e){if(!this._idx.has(e))throw new Error("Missing type index for "+e);return _(this._idx.get(e)||0)}}class T{visitType(e,t){throw new Error("Not implemented")}visitPrimitive(e,t){return this.visitType(e,t)}visitEmpty(e,t){return this.visitPrimitive(e,t)}visitBool(e,t){return this.visitPrimitive(e,t)}visitNull(e,t){return this.visitPrimitive(e,t)}visitReserved(e,t){return this.visitPrimitive(e,t)}visitText(e,t){return this.visitPrimitive(e,t)}visitNumber(e,t){return this.visitPrimitive(e,t)}visitInt(e,t){return this.visitNumber(e,t)}visitNat(e,t){return this.visitNumber(e,t)}visitFloat(e,t){return this.visitPrimitive(e,t)}visitFixedInt(e,t){return this.visitNumber(e,t)}visitFixedNat(e,t){return this.visitNumber(e,t)}visitPrincipal(e,t){return this.visitPrimitive(e,t)}visitConstruct(e,t){return this.visitType(e,t)}visitVec(e,t,r){return this.visitConstruct(e,r)}visitOpt(e,t,r){return this.visitConstruct(e,r)}visitRecord(e,t,r){return this.visitConstruct(e,r)}visitTuple(e,t,r){const a=t.map(((e,t)=>[`_${t}_`,e]));return this.visitRecord(e,a,r)}visitVariant(e,t,r){return this.visitConstruct(e,r)}visitRec(e,t,r){return this.visitConstruct(t,r)}visitFunc(e,t){return this.visitConstruct(e,t)}visitService(e,t){return this.visitConstruct(e,t)}}class P{display(){return this.name}valueToString(e){return se(e)}buildTypeTable(e){e.has(this)||this._buildTypeTableImpl(e)}}class O extends P{checkType(e){if(this.name!==e.name)throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);return e}_buildTypeTableImpl(e){}}class F extends P{checkType(e){if(e instanceof re){const t=e.getType();if("undefined"===typeof t)throw new Error("type mismatch with uninitialized type");return t}throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`)}encodeType(e){return e.indexOf(this.name)}}class D extends O{accept(e,t){return e.visitEmpty(this,t)}covariant(e){return!1}encodeValue(){throw new Error("Empty cannot appear as a function argument")}valueToString(){throw new Error("Empty cannot appear as a value")}encodeType(){return _(-17)}decodeValue(){throw new Error("Empty cannot appear as an output")}get name(){return"empty"}}class L extends O{accept(e,t){return e.visitBool(this,t)}covariant(e){return"boolean"===typeof e}encodeValue(e){return new Uint8Array([e?1:0])}encodeType(){return _(-2)}decodeValue(e,t){switch(this.checkType(t),I(e)){case 0:return!1;case 1:return!0;default:throw new Error("Boolean value out of range")}}get name(){return"bool"}}class G extends O{accept(e,t){return e.visitNull(this,t)}covariant(e){return null===e}encodeValue(){return new ArrayBuffer(0)}encodeType(){return _(-1)}decodeValue(e,t){return this.checkType(t),null}get name(){return"null"}}class U extends O{accept(e,t){return e.visitReserved(this,t)}covariant(e){return!0}encodeValue(){return new ArrayBuffer(0)}encodeType(){return _(-16)}decodeValue(e,t){return t.name!==this.name&&t.decodeValue(e,t),null}get name(){return"reserved"}}class Z extends O{accept(e,t){return e.visitText(this,t)}covariant(e){return"string"===typeof e}encodeValue(e){const t=(new TextEncoder).encode(e);return x(j(t.byteLength),t)}encodeType(){return _(-15)}decodeValue(e,t){this.checkType(t);const r=C(e),a=B(e,Number(r));return new TextDecoder("utf8",{fatal:!0}).decode(a)}get name(){return"text"}valueToString(e){return'"'+e+'"'}}class V extends O{accept(e,t){return e.visitInt(this,t)}covariant(e){return"bigint"===typeof e||Number.isInteger(e)}encodeValue(e){return _(e)}encodeType(){return _(-4)}decodeValue(e,t){return this.checkType(t),S(e)}get name(){return"int"}valueToString(e){return e.toString()}}class H extends O{accept(e,t){return e.visitNat(this,t)}covariant(e){return"bigint"===typeof e&&e>=BigInt(0)||Number.isInteger(e)&&e>=0}encodeValue(e){return j(e)}encodeType(){return _(-3)}decodeValue(e,t){return this.checkType(t),C(e)}get name(){return"nat"}valueToString(e){return e.toString()}}class W extends O{constructor(e){if(super(),this._bits=e,32!==e&&64!==e)throw new Error("not a valid float type")}accept(e,t){return e.visitFloat(this,t)}covariant(e){return"number"===typeof e||e instanceof Number}encodeValue(e){const t=new ArrayBuffer(this._bits/8),r=new DataView(t);return 32===this._bits?r.setFloat32(0,e,!0):r.setFloat64(0,e,!0),t}encodeType(){return _(32===this._bits?-13:-14)}decodeValue(e,t){this.checkType(t);const r=B(e,this._bits/8),a=new DataView(r);return 32===this._bits?a.getFloat32(0,!0):a.getFloat64(0,!0)}get name(){return"float"+this._bits}valueToString(e){return e.toString()}}class Y extends O{constructor(e){super(),this._bits=e}accept(e,t){return e.visitFixedInt(this,t)}covariant(e){const t=BigInt(2)**BigInt(this._bits-1)*BigInt(-1),r=BigInt(2)**BigInt(this._bits-1)-BigInt(1);if("bigint"===typeof e)return e>=t&&e<=r;if(Number.isInteger(e)){const a=BigInt(e);return a>=t&&a<=r}return!1}encodeValue(e){return z(e,this._bits/8)}encodeType(){return _(-9-(Math.log2(this._bits)-3))}decodeValue(e,t){this.checkType(t);const r=function(e,t){let r=M(e,t);const a=BigInt(2)**(BigInt(8)*BigInt(t-1)+BigInt(7));return r>=a&&(r-=a*BigInt(2)),r}(e,this._bits/8);return this._bits<=32?Number(r):r}get name(){return`int${this._bits}`}valueToString(e){return e.toString()}}class J extends O{constructor(e){super(),this.bits=e}accept(e,t){return e.visitFixedNat(this,t)}covariant(e){const t=BigInt(2)**BigInt(this.bits);if("bigint"===typeof e&&e>=BigInt(0))return e<t;if(Number.isInteger(e)&&e>=0){return BigInt(e)<t}return!1}encodeValue(e){return function(e,t){if(BigInt(e)<BigInt(0))throw new Error("Cannot write negative values.");return z(e,t)}(e,this.bits/8)}encodeType(){return _(-5-(Math.log2(this.bits)-3))}decodeValue(e,t){this.checkType(t);const r=M(e,this.bits/8);return this.bits<=32?Number(r):r}get name(){return`nat${this.bits}`}valueToString(e){return e.toString()}}class $ extends F{constructor(e){super(),this._type=e,this._blobOptimization=!1,e instanceof J&&8===e.bits&&(this._blobOptimization=!0)}accept(e,t){return e.visitVec(this,this._type,t)}covariant(e){return Array.isArray(e)&&e.every((e=>this._type.covariant(e)))}encodeValue(e){const t=j(e.length);return this._blobOptimization?x(t,new Uint8Array(e)):x(t,...e.map((e=>this._type.encodeValue(e))))}_buildTypeTableImpl(e){this._type.buildTypeTable(e);const t=_(-19),r=this._type.encodeType(e);e.add(this,x(t,r))}decodeValue(e,t){const r=this.checkType(t);if(!(r instanceof $))throw new Error("Not a vector type");const a=Number(C(e));if(this._blobOptimization)return[...new Uint8Array(e.read(a))];const n=[];for(let i=0;i<a;i++)n.push(this._type.decodeValue(e,r._type));return n}get name(){return`vec ${this._type.name}`}display(){return`vec ${this._type.display()}`}valueToString(e){return"vec {"+e.map((e=>this._type.valueToString(e))).join("; ")+"}"}}class K extends F{constructor(e){super(),this._type=e}accept(e,t){return e.visitOpt(this,this._type,t)}covariant(e){return Array.isArray(e)&&(0===e.length||1===e.length&&this._type.covariant(e[0]))}encodeValue(e){return 0===e.length?new Uint8Array([0]):x(new Uint8Array([1]),this._type.encodeValue(e[0]))}_buildTypeTableImpl(e){this._type.buildTypeTable(e);const t=_(-18),r=this._type.encodeType(e);e.add(this,x(t,r))}decodeValue(e,t){const r=this.checkType(t);if(!(r instanceof K))throw new Error("Not an option type");switch(I(e)){case 0:return[];case 1:return[this._type.decodeValue(e,r._type)];default:throw new Error("Not an option value")}}get name(){return`opt ${this._type.name}`}display(){return`opt ${this._type.display()}`}valueToString(e){return 0===e.length?"null":`opt ${this._type.valueToString(e[0])}`}}class X extends F{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this._fields=Object.entries(e).sort(((e,t)=>E(e[0])-E(t[0])))}accept(e,t){return e.visitRecord(this,this._fields,t)}tryAsTuple(){const e=[];for(let t=0;t<this._fields.length;t++){const[r,a]=this._fields[t];if(r!==`_${t}_`)return null;e.push(a)}return e}covariant(e){return"object"===typeof e&&this._fields.every((t=>{let[r,a]=t;if(!e.hasOwnProperty(r))throw new Error(`Record is missing key "${r}".`);return a.covariant(e[r])}))}encodeValue(e){const t=this._fields.map((t=>{let[r]=t;return e[r]})),r=N(this._fields,t,((e,t)=>{let[,r]=e;return r.encodeValue(t)}));return x(...r)}_buildTypeTableImpl(e){this._fields.forEach((t=>{let[r,a]=t;return a.buildTypeTable(e)}));const t=_(-20),r=j(this._fields.length),a=this._fields.map((t=>{let[r,a]=t;return x(j(E(r)),a.encodeType(e))}));e.add(this,x(t,r,x(...a)))}decodeValue(e,t){const r=this.checkType(t);if(!(r instanceof X))throw new Error("Not a record type");const a={};let n=0;for(const[i,o]of r._fields){if(n>=this._fields.length||E(this._fields[n][0])!==E(i)){o.decodeValue(e,o);continue}const[t,r]=this._fields[n];a[t]=r.decodeValue(e,o),n++}if(n<this._fields.length)throw new Error("Cannot find field "+this._fields[n][0]);return a}get name(){return`record {${this._fields.map((e=>{let[t,r]=e;return t+":"+r.name})).join("; ")}}`}display(){return`record {${this._fields.map((e=>{let[t,r]=e;return t+":"+r.display()})).join("; ")}}`}valueToString(e){const t=this._fields.map((t=>{let[r]=t;return e[r]})),r=N(this._fields,t,((e,t)=>{let[r,a]=e;return r+"="+a.valueToString(t)}));return`record {${r.join("; ")}}`}}class ee extends X{constructor(e){const t={};e.forEach(((e,r)=>t["_"+r+"_"]=e)),super(t),this._components=e}accept(e,t){return e.visitTuple(this,this._components,t)}covariant(e){return Array.isArray(e)&&e.length>=this._fields.length&&this._components.every(((t,r)=>t.covariant(e[r])))}encodeValue(e){const t=N(this._components,e,((e,t)=>e.encodeValue(t)));return x(...t)}decodeValue(e,t){const r=this.checkType(t);if(!(r instanceof ee))throw new Error("not a tuple type");if(r._components.length<this._components.length)throw new Error("tuple mismatch");const a=[];for(const[n,i]of r._components.entries())n>=this._components.length?i.decodeValue(e,i):a.push(this._components[n].decodeValue(e,i));return a}display(){return`record {${this._components.map((e=>e.display())).join("; ")}}`}valueToString(e){const t=N(this._components,e,((e,t)=>e.valueToString(t)));return`record {${t.join("; ")}}`}}class te extends F{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),this._fields=Object.entries(e).sort(((e,t)=>E(e[0])-E(t[0])))}accept(e,t){return e.visitVariant(this,this._fields,t)}covariant(e){return"object"===typeof e&&1===Object.entries(e).length&&this._fields.every((t=>{let[r,a]=t;return!e.hasOwnProperty(r)||a.covariant(e[r])}))}encodeValue(e){for(let t=0;t<this._fields.length;t++){const[r,a]=this._fields[t];if(e.hasOwnProperty(r)){return x(j(t),a.encodeValue(e[r]))}}throw Error("Variant has no data: "+e)}_buildTypeTableImpl(e){this._fields.forEach((t=>{let[,r]=t;r.buildTypeTable(e)}));const t=_(-21),r=j(this._fields.length),a=this._fields.map((t=>{let[r,a]=t;return x(j(E(r)),a.encodeType(e))}));e.add(this,x(t,r,...a))}decodeValue(e,t){const r=this.checkType(t);if(!(r instanceof te))throw new Error("Not a variant type");const a=Number(C(e));if(a>=r._fields.length)throw Error("Invalid variant index: "+a);const[n,i]=r._fields[a];for(const[o,s]of this._fields)if(E(n)===E(o)){return{[o]:s.decodeValue(e,i)}}throw new Error("Cannot find field hash "+n)}get name(){return`variant {${this._fields.map((e=>{let[t,r]=e;return t+":"+r.name})).join("; ")}}`}display(){return`variant {${this._fields.map((e=>{let[t,r]=e;return t+("null"===r.name?"":`:${r.display()}`)})).join("; ")}}`}valueToString(e){for(const[t,r]of this._fields)if(e.hasOwnProperty(t)){const a=r.valueToString(e[t]);return"null"===a?`variant {${t}}`:`variant {${t}=${a}}`}throw new Error("Variant has no data: "+e)}}class re extends F{constructor(){super(...arguments),this._id=re._counter++,this._type=void 0}accept(e,t){if(!this._type)throw Error("Recursive type uninitialized.");return e.visitRec(this,this._type,t)}fill(e){this._type=e}getType(){return this._type}covariant(e){return!!this._type&&this._type.covariant(e)}encodeValue(e){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.encodeValue(e)}_buildTypeTableImpl(e){if(!this._type)throw Error("Recursive type uninitialized.");e.add(this,new Uint8Array([])),this._type.buildTypeTable(e),e.merge(this,this._type.name)}decodeValue(e,t){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.decodeValue(e,t)}get name(){return`rec_${this._id}`}display(){if(!this._type)throw Error("Recursive type uninitialized.");return`\u03bc${this.name}.${this._type.name}`}valueToString(e){if(!this._type)throw Error("Recursive type uninitialized.");return this._type.valueToString(e)}}function ae(e){if(1!==I(e))throw new Error("Cannot decode principal");const t=Number(C(e));return v.fromUint8Array(new Uint8Array(B(e,t)))}re._counter=0;class ne extends O{accept(e,t){return e.visitPrincipal(this,t)}covariant(e){return e&&e._isPrincipal}encodeValue(e){const t=e.toUint8Array(),r=j(t.byteLength);return x(new Uint8Array([1]),r,t)}encodeType(){return _(-24)}decodeValue(e,t){return this.checkType(t),ae(e)}get name(){return"principal"}valueToString(e){return`${this.name} "${e.toText()}"`}}class ie extends F{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];super(),this.argTypes=e,this.retTypes=t,this.annotations=r}static argsToString(e,t){if(e.length!==t.length)throw new Error("arity mismatch");return"("+e.map(((e,r)=>e.valueToString(t[r]))).join(", ")+")"}accept(e,t){return e.visitFunc(this,t)}covariant(e){return Array.isArray(e)&&2===e.length&&e[0]&&e[0]._isPrincipal&&"string"===typeof e[1]}encodeValue(e){let[t,r]=e;const a=t.toUint8Array(),n=j(a.byteLength),i=x(new Uint8Array([1]),n,a),o=(new TextEncoder).encode(r),s=j(o.byteLength);return x(new Uint8Array([1]),i,s,o)}_buildTypeTableImpl(e){this.argTypes.forEach((t=>t.buildTypeTable(e))),this.retTypes.forEach((t=>t.buildTypeTable(e)));const t=_(-22),r=j(this.argTypes.length),a=x(...this.argTypes.map((t=>t.encodeType(e)))),n=j(this.retTypes.length),i=x(...this.retTypes.map((t=>t.encodeType(e)))),o=j(this.annotations.length),s=x(...this.annotations.map((e=>this.encodeAnnotation(e))));e.add(this,x(t,r,a,n,i,o,s))}decodeValue(e){if(1!==I(e))throw new Error("Cannot decode function reference");const t=ae(e),r=B(e,Number(C(e)));return[t,new TextDecoder("utf8",{fatal:!0}).decode(r)]}get name(){return`(${this.argTypes.map((e=>e.name)).join(", ")}) -> (${this.retTypes.map((e=>e.name)).join(", ")})${" "+this.annotations.join(" ")}`}valueToString(e){let[t,r]=e;return`func "${t.toText()}".${r}`}display(){return`(${this.argTypes.map((e=>e.display())).join(", ")}) \u2192 (${this.retTypes.map((e=>e.display())).join(", ")})${" "+this.annotations.join(" ")}`}encodeAnnotation(e){if("query"===e)return new Uint8Array([1]);if("oneway"===e)return new Uint8Array([2]);throw new Error("Illeagal function annotation")}}class oe extends F{constructor(e){super(),this._fields=Object.entries(e).sort(((e,t)=>E(e[0])-E(t[0])))}accept(e,t){return e.visitService(this,t)}covariant(e){return e&&e._isPrincipal}encodeValue(e){const t=e.toUint8Array(),r=j(t.length);return x(new Uint8Array([1]),r,t)}_buildTypeTableImpl(e){this._fields.forEach((t=>{let[r,a]=t;return a.buildTypeTable(e)}));const t=_(-23),r=j(this._fields.length),a=this._fields.map((t=>{let[r,a]=t;const n=(new TextEncoder).encode(r);return x(j(n.length),n,a.encodeType(e))}));e.add(this,x(t,r,...a))}decodeValue(e){return ae(e)}get name(){return`service {${this._fields.map((e=>{let[t,r]=e;return t+":"+r.name})).join("; ")}}`}valueToString(e){return`service "${e.toText()}"`}}function se(e){return JSON.stringify(e,((e,t)=>"bigint"===typeof t?`BigInt(${t})`:t))}function ce(e,t){if(t.length<e.length)throw Error("Wrong number of message arguments");const r=new R;e.forEach((e=>e.buildTypeTable(r)));const a=(new TextEncoder).encode(Q),n=r.encode(),i=j(t.length),o=x(...e.map((e=>e.encodeType(r)))),s=x(...N(e,t,((e,t)=>{if(!e.covariant(t))throw new Error(`Invalid ${e.display()} argument: ${se(t)}`);return e.encodeValue(t)})));return x(a,n,i,o,s)}function le(e,t){const r=new k(t);if(t.byteLength<Q.length)throw new Error("Message length smaller than magic number");const a=B(r,Q.length),n=(new TextDecoder).decode(a);if(n!==Q)throw new Error("Wrong magic number: "+JSON.stringify(n));const[i,o]=function(e){const t=[],r=Number(C(e));for(let i=0;i<r;i++){const r=Number(S(e));switch(r){case-18:case-19:{const a=Number(S(e));t.push([r,a]);break}case-20:case-21:{const a=[];let n,i=Number(C(e));for(;i--;){const t=Number(C(e));if(t>=Math.pow(2,32))throw new Error("field id out of 32-bit range");if("number"===typeof n&&n>=t)throw new Error("field id collision or not sorted");n=t;const r=Number(S(e));a.push([t,r])}t.push([r,a]);break}case-22:for(let t=0;t<2;t++){let t=Number(C(e));for(;t--;)S(e)}B(e,Number(C(e))),t.push([r,void 0]);break;case-23:{let a=Number(C(e));for(;a--;){B(e,Number(C(e))),S(e)}t.push([r,void 0]);break}default:throw new Error("Illegal op_code: "+r)}}const a=[],n=Number(C(e));for(let i=0;i<n;i++)a.push(Number(S(e)));return[t,a]}(r);if(o.length<e.length)throw new Error("Wrong number of return values");const s=i.map((e=>Me()));function c(e){if(e<-24)throw new Error("future value not supported");if(e<0)switch(e){case-1:return fe;case-2:return he;case-3:return me;case-4:return ge;case-5:return ke;case-6:return Ee;case-7:return qe;case-8:return Be;case-9:return be;case-10:return ve;case-11:return we;case-12:return xe;case-13:return Ae;case-14:return ye;case-15:return pe;case-16:return de;case-17:return ue;case-24:return Ie;default:throw new Error("Illegal op_code: "+e)}if(e>=i.length)throw new Error("type index out of range");return s[e]}i.forEach(((e,t)=>{const r=function(e){switch(e[0]){case-19:return Ce(c(e[1]));case-18:return _e(c(e[1]));case-20:{const t={};for(const[n,i]of e[1])t[`_${n}_`]=c(i);const r=Se(t),a=r.tryAsTuple();return Array.isArray(a)?je(...a):r}case-21:{const t={};for(const[r,a]of e[1])t[`_${r}_`]=c(a);return ze(t)}case-22:return Qe([],[],[]);case-23:return Ne({});default:throw new Error("Illegal op_code: "+e[0])}}(e);s[t].fill(r)}));const l=o.map((e=>c(e))),u=e.map(((e,t)=>e.decodeValue(r,l[t])));for(let d=e.length;d<l.length;d++)l[d].decodeValue(r,l[d]);if(r.byteLength>0)throw new Error("decode: Left-over bytes");return u}const ue=new D,de=new U,he=new L,fe=new G,pe=new Z,ge=new V,me=new H,Ae=new W(32),ye=new W(64),be=new Y(8),ve=new Y(16),we=new Y(32),xe=new Y(64),ke=new J(8),Ee=new J(16),qe=new J(32),Be=new J(64),Ie=new ne;function je(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return new ee(t)}function Ce(e){return new $(e)}function _e(e){return new K(e)}function Se(e){return new X(e)}function ze(e){return new te(e)}function Me(){return new re}function Qe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return new ie(e,t,r)}function Ne(e){return new oe(e)}var Re=r(7844);function Te(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const a=new Uint8Array(t.reduce(((e,t)=>e+t.byteLength),0));let n=0;for(const i of t)a.set(new Uint8Array(i),n),n+=i.byteLength;return a.buffer}function Pe(e){return[...new Uint8Array(e)].map((e=>e.toString(16).padStart(2,"0"))).join("")}const Oe=/^([0-9A-F]{2})*$/i.compile();function Fe(e){if(!Oe.test(e))throw new Error("Invalid hexadecimal string.");const t=[...e].reduce(((e,t,r)=>(e[r/2|0]=(e[r/2|0]||"")+t,e)),[]).map((e=>Number.parseInt(e,16)));return new Uint8Array(t).buffer}function De(e){return y.sha256.create().update(new Uint8Array(e)).arrayBuffer()}function Le(e){if(e instanceof Re.Tagged)return Le(e.value);if("string"===typeof e)return Ge(e);if("number"===typeof e)return De(j(e));if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return De(e);if(Array.isArray(e)){return De(Te(...e.map(Le)))}if(e&&"object"===typeof e&&e._isPrincipal)return De(e.toUint8Array());if("object"===typeof e&&null!==e&&"function"===typeof e.toHash)return Le(e.toHash());if("bigint"===typeof e)return De(j(e));throw Object.assign(new Error(`Attempt to hash a value of unsupported type: ${e}`),{value:e})}const Ge=e=>De((new TextEncoder).encode(e));function Ue(e){const t=Object.entries(e).filter((e=>{let[,t]=e;return void 0!==t})).map((e=>{let[t,r]=e;return[Ge(t),Le(r)]})),r=t.sort(((e,t)=>{let[r]=e,[a]=t;return function(e,t){if(e.byteLength!==t.byteLength)return e.byteLength-t.byteLength;const r=new Uint8Array(e),a=new Uint8Array(t);for(let n=0;n<r.length;n++)if(r[n]!==a[n])return r[n]-a[n];return 0}(r,a)})),a=Te(...r.map((e=>Te(...e))));return De(a)}var Ze=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};const Ve=(new TextEncoder).encode("\nic-request");class He{getPrincipal(){return this._principal||(this._principal=v.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()))),this._principal}async transformRequest(e){const{body:t}=e,r=Ze(e,["body"]),a=await Ue(t);return Object.assign(Object.assign({},r),{body:{content:t,sender_pubkey:this.getPublicKey().toDer(),sender_sig:await this.sign(Te(Ve,a))}})}}class We{getPrincipal(){return v.anonymous()}async transformRequest(e){return Object.assign(Object.assign({},e),{body:{content:e.body}})}}var Ye=r(5799);const Je=Ye.SelfDescribeCborSerializer.withDefaultEncoders(!0);var $e,Ke;function Xe(e){return Je.serialize(e)}function et(e){const t=e.byteLength;let r=BigInt(0);for(let a=0;a<t;a++)r=r*BigInt(256)+BigInt(e[a]);return r}Je.addEncoder(new class{get name(){return"Principal"}get priority(){return 0}match(e){return e&&!0===e._isPrincipal}encode(e){return Ye.value.bytes(e.toUint8Array())}}),Je.addEncoder(new class{get name(){return"Buffer"}get priority(){return 1}match(e){return e instanceof ArrayBuffer||ArrayBuffer.isView(e)}encode(e){return Ye.value.bytes(new Uint8Array(e))}}),Je.addEncoder(new class{get name(){return"BigInt"}get priority(){return 1}match(e){return"bigint"===typeof e}encode(e){return e>BigInt(0)?Ye.value.tagged(2,Ye.value.bytes(Fe(e.toString(16)))):Ye.value.tagged(3,Ye.value.bytes(Fe((BigInt("-1")*e).toString(16))))}}),function(e){e[e.Uint64LittleEndian=71]="Uint64LittleEndian",e[e.Semantic=55799]="Semantic"}($e||($e={}));class tt extends Re.Decoder{createByteString(e){return Te(...e)}createByteStringFromHeap(e,t){return e===t?new ArrayBuffer(0):new Uint8Array(this._heap.slice(e,t))}}function rt(e){const t=new Uint8Array(e);return new tt({size:t.byteLength,tags:{2:e=>et(e),3:e=>-et(e),[$e.Semantic]:e=>e}}).decodeFirst(t)}!function(e){e.Call="call"}(Ke||(Ke={}));const at=BigInt(1e6),nt=BigInt(6e4);class it{constructor(e){this._value=(BigInt(Date.now())+BigInt(e)-nt)*at}toCBOR(){return Ye.value.u64(this._value.toString(16),16)}toHash(){return j(this._value)}}var ot;!function(e){e.Received="received",e.Processing="processing",e.Replied="replied",e.Rejected="rejected",e.Unknown="unknown",e.Done="done"}(ot||(ot={}));const st=3e5;class ct extends w{constructor(e){super(e),this.message=e}}class lt{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.rootKey=Fe("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae"),this._pipeline=[],this._rootKeyFetched=!1,e.source){if(!(e.source instanceof lt))throw new Error("An Agent's source can only be another HttpAgent");this._pipeline=[...e.source._pipeline],this._identity=e.source._identity,this._fetch=e.source._fetch,this._host=e.source._host,this._credentials=e.source._credentials}else this._fetch=e.fetch||function(){let e;if("undefined"!==typeof window){if(!window.fetch)throw new ct("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present.");e=window.fetch.bind(window)}else if("undefined"!==typeof r.g){if(!r.g.fetch)throw new ct("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available.");e=r.g.fetch}else"undefined"!==typeof self&&self.fetch&&(e=self.fetch);if(e)return e;throw new ct("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context.")}()||fetch.bind(r.g);if(void 0!==e.host)e.host.match(/^[a-z]+:/)||"undefined"===typeof window?this._host=new URL(e.host):this._host=new URL(window.location.protocol+"//"+e.host);else if(void 0!==e.source)this._host=e.source._host;else{const e="undefined"!==typeof window?window.location:void 0;if(!e)throw new Error("Must specify a host to connect to.");this._host=new URL(e+"")}if(this._host.hostname.endsWith(".ic0.app")&&(this._host.hostname="ic0.app"),e.credentials){const{name:t,password:r}=e.credentials;this._credentials=`${t}${r?":"+r:""}`}this._identity=Promise.resolve(e.identity||new We)}addTransform(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.priority||0;const r=this._pipeline.findIndex((e=>(e.priority||0)<t));this._pipeline.splice(r>=0?r:this._pipeline.length,0,Object.assign(e,{priority:t}))}async getPrincipal(){return(await this._identity).getPrincipal()}async call(e,t,r){const a=await(void 0!==r?await r:await this._identity),n=v.from(e),i=t.effectiveCanisterId?v.from(t.effectiveCanisterId):n,o=a.getPrincipal()||v.anonymous(),s={request_type:Ke.Call,canister_id:n,method_name:t.methodName,arg:t.arg,sender:o,ingress_expiry:new it(st)};let c=await this._transform({request:{body:null,method:"POST",headers:Object.assign({"Content-Type":"application/cbor"},this._credentials?{Authorization:"Basic "+btoa(this._credentials)}:{})},endpoint:"call",body:s});c=await a.transformRequest(c);const l=Xe(c.body),[u,d]=await Promise.all([this._fetch(""+new URL(`/api/v2/canister/${i.toText()}/call`,this._host),Object.assign(Object.assign({},c.request),{body:l})),Ue(s)]);if(!u.ok)throw new Error(`Server returned an error:\n  Code: ${u.status} (${u.statusText})\n  Body: ${await u.text()}\n`);return{requestId:d,response:{ok:u.ok,status:u.status,statusText:u.statusText}}}async query(e,t,r){const a=await(void 0!==r?await r:await this._identity),n="string"===typeof e?v.fromText(e):e,i=(null===a||void 0===a?void 0:a.getPrincipal())||v.anonymous(),o={request_type:"query",canister_id:n,method_name:t.methodName,arg:t.arg,sender:i,ingress_expiry:new it(st)};let s=await this._transform({request:{method:"POST",headers:Object.assign({"Content-Type":"application/cbor"},this._credentials?{Authorization:"Basic "+btoa(this._credentials)}:{})},endpoint:"read",body:o});s=await a.transformRequest(s);const c=Xe(s.body),l=await this._fetch(""+new URL(`/api/v2/canister/${n.toText()}/query`,this._host),Object.assign(Object.assign({},s.request),{body:c}));if(!l.ok)throw new Error(`Server returned an error:\n  Code: ${l.status} (${l.statusText})\n  Body: ${await l.text()}\n`);return rt(await l.arrayBuffer())}async readState(e,t,r){const a="string"===typeof e?v.fromText(e):e,n=await(void 0!==r?await r:await this._identity),i=(null===n||void 0===n?void 0:n.getPrincipal())||v.anonymous();let o=await this._transform({request:{method:"POST",headers:Object.assign({"Content-Type":"application/cbor"},this._credentials?{Authorization:"Basic "+btoa(this._credentials)}:{})},endpoint:"read_state",body:{request_type:"read_state",paths:t.paths,sender:i,ingress_expiry:new it(st)}});o=await n.transformRequest(o);const s=Xe(o.body),c=await this._fetch(""+new URL(`/api/v2/canister/${a}/read_state`,this._host),Object.assign(Object.assign({},o.request),{body:s}));if(!c.ok)throw new Error(`Server returned an error:\n  Code: ${c.status} (${c.statusText})\n  Body: ${await c.text()}\n`);return rt(await c.arrayBuffer())}async status(){const e=this._credentials?{Authorization:"Basic "+btoa(this._credentials)}:{},t=await this._fetch(""+new URL("/api/v2/status",this._host),{headers:e});if(!t.ok)throw new Error(`Server returned an error:\n  Code: ${t.status} (${t.statusText})\n  Body: ${await t.text()}\n`);return rt(await t.arrayBuffer())}async fetchRootKey(){return this._rootKeyFetched||(this.rootKey=(await this.status()).root_key,this._rootKeyFetched=!0),this.rootKey}_transform(e){let t=Promise.resolve(e);for(const r of this._pipeline)t=t.then((e=>r(e).then((t=>t||e))));return t}}var ut;!function(e){e.Error="err",e.GetPrincipal="gp",e.GetPrincipalResponse="gpr",e.Query="q",e.QueryResponse="qr",e.Call="c",e.CallResponse="cr",e.ReadState="rs",e.ReadStateResponse="rsr",e.Status="s",e.StatusResponse="sr"}(ut||(ut={}));function dt(){const e="undefined"===typeof window?"undefined"===typeof r.g?"undefined"===typeof self?void 0:self.ic.agent:r.g.ic.agent:window.ic.agent;if(!e)throw new Error("No Agent could be found.");return e}const ht=e=>{let{IDL:t}=e;const r=t.Principal,a=t.Vec(t.Nat8),n=t.Record({compute_allocation:t.Opt(t.Nat),memory_allocation:t.Opt(t.Nat)});return t.Service({provisional_create_canister_with_cycles:t.Func([t.Record({amount:t.Opt(t.Nat),settings:t.Opt(n)})],[t.Record({canister_id:r})],[]),create_canister:t.Func([],[t.Record({canister_id:r})],[]),install_code:t.Func([t.Record({mode:t.Variant({install:t.Null,reinstall:t.Null,upgrade:t.Null}),canister_id:r,wasm_module:a,arg:t.Vec(t.Nat8)})],[],[]),set_controller:t.Func([t.Record({canister_id:r,new_controller:t.Principal})],[],[])})};function ft(e){function t(e,t,r){const a=t[0];let n=v.fromHex("");return a&&"object"===typeof a&&a.canister_id&&(n=v.from(a.canister_id)),{effectiveCanisterId:n}}return Tt.createActor(ht,Object.assign(Object.assign(Object.assign({},e),{canisterId:v.fromHex("")}),{callTransform:t,queryTransform:t}))}var pt=r(5354);let gt;const mt="\n    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\n    g8AAEF8CQAJAIAZB6AFqEFoNACAGQShqEIQBDQAgBkGIPWoQS0EAIQcgBkGIwwBqQTgQchogBkG4IWpBOBByGiAGQYjA\n    AGoQSyAGQcjEAGoQSyAGQcjJAGoQSyAGQcjMAGoQSyAGQagGahBLIAZBsAxqEEsgBkHIzwBqEEsgBkHQ1QBqEEsgBkHY\n    2wBqEEsgBkG4FWoQSyAGQZgjaiAGQcjJAGpBwAEQZxogBkHYJGogBkHIzABqQcABEGcaIAZBmCZqIAZBqAZqQcABEGca\n    IAZB2CdqIAZBsAxqQcABEGcaIAZBmClqIAZByM8AakHAARBnGiAGQdgqaiAGQdDVAGpBwAEQZxogBkGYLGogBkHY2wBq\n    QcABEGcaIAZB2C1qIAZBuBVqQcABEGcaIAZBuBVqQecAEHIaIAZBiMAAaiAGQShqEH8gBkGIwABqEBggBkGYI2ogBkEo\n    ahB/A0AgB0HACkYEQCAGQbghaiAGQegBahBrIAYpA7ghIRcgBkG4IWpBARCdASAGQbghahBEIAYpA7ghIRYgBkGIwwBq\n    IAZBuCFqEGsgBkGIwwBqQQEQnQEgBkGIwwBqEEQgBkG4IWogBkGIwwBqIBdCAoGnEE8gBkGIwABqIAZBKGogFkICgacQ\n    bSAGQcjEAGogBkGIwABqEH8gBkG4IWoQKUEDaiIJQQJ2IgdBAWohAkEAIQgCQAJAAkADQAJAIAZBuCFqQQUQjAEhAyAC\n    IAhGBEAgCUGYA0kNASACQecAQbCEwAAQPAALIAhB5wBGDQIgBkG4FWogCGogA0FwaiIDOgAAIAZBuCFqIANBGHRBGHUQ\n    ngEgBkG4IWoQRCAGQbghakEEEDsgCEEBaiEIDAELCyAGQbgVaiACaiADOgAAIANBGHRBGHVBf2oiA0EBdiECIANBD0sN\n    ASAGQYg9aiAGQZgjaiACQcABbGoQfwNAIAdBf0YEQCAGQYg9aiAGQcjEAGoQcyAGQZgjaiAGQYg9akHAARBnGgwICyAH\n    QeYASw0DIAZBiMAAaiAGQZgjaiAGQbgVaiAHaiwAABAfIAdBf2ohByAGQYg9ahAYIAZBiD1qEBggBkGIPWoQGCAGQYg9\n    ahAYIAZBiD1qIAZBiMAAahAMDAALAAtB5wBB5wBBoITAABA8AAsgAkEIQcCEwAAQPAALIAdB5wBB0ITAABA8AAUgBkHI\n    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\n    UtcEAKAIAIgFBASACdCICcQRAIAAoAggMAQtB1LXBACABIAJyNgIAIAALIQEgACAENgIIIAEgBDYCDCAEIAA2AgwgBCAB\n    NgIIC0EAIQVB6LjBACgCACIAIAZNDQBB6LjBACAAIAZrIgI2AgBB8LjBAEHwuMEAKAIAIgEgBmoiADYCACAAIAJBAXI2A\n    gQgASAGQQNyNgIEIAFBCGoPCyAFDwsgASAHNgIYIAMoAhAiAARAIAEgADYCECAAIAE2AhgLIANBFGooAgAiAEUNACABQR\n    RqIAA2AgAgACABNgIYCwJAIAVBEE8EQCADIAZBA3I2AgQgAyAGaiIEIAVBAXI2AgQgBCAFaiAFNgIAQeS4wQAoAgAiAAR\n    AIABBA3YiAkEDdEHctcEAaiEAQey4wQAoAgAhBwJ/QdS1wQAoAgAiAUEBIAJBH3F0IgJxBEAgACgCCAwBC0HUtcEAIAEg\n    AnI2AgAgAAshAiAAIAc2AgggAiAHNgIMIAcgADYCDCAHIAI2AggLQey4wQAgBDYCAEHkuMEAIAU2AgAMAQsgAyAFIAZqI\n    gBBA3I2AgQgACADaiIAIAAoAgRBAXI2AgQLIANBCGoLtA8BA38jAEGAC2siAiQAIAJBCGoQSyACQcgBakE4EHIaIAJBAT\n    YCgAIgAkGIAmpBOBByGiACQQE2AsACIAJByAJqQTgQchogAkEBNgKAAyACQYgDakE4EHIaIAJBATYCwAMgAkHIA2pBOBB\n    yGiACQQE2AoAEIAJBiARqQQEQigEgAkHIBGpBOBByGiACQQE2AoAFIAJBiAVqQTgQchogAkEBNgLABSACQcgFaiABEIUB\n    IAJBiAZqQTgQchogAkEBNgLABiACQcgGakE4EHIaIAJBATYCgAcgAkGIB2pBOBByGiACQQE2AsAHIAJByAdqQTgQchogA\n    kEBNgKACCACQcgFahBYIQMgAkHICWpB4ITAABBfIAJBiApqIAJByAlqEIsBIAJByAFqIAJBiApqEKUBIAJByAlqQZiFwA\n    AQXyACQYgKaiACQcgJahCLASACQYgCaiACQYgKahClASACQcgFahADIAJByAVqQQsQUiACQYgGaiACQcgFahClASACQYg\n    GaiACQYgEahB4IAJBiAZqEEQgAkGIBmogAkHIBWoQSCACQYgFaiACQcgBahClASACQYgFaiACQYgGahBIIAJBiAZqIAJB\n    iARqEHggAkGIBmoQRCACQYgGaiACQYgCahBIIAJBiAZqEEEgAkGIBmoQRCACQYgDaiACQYgGahClASACQcgDaiACQcgFa\n    hClASACQcgDaiACQYgDahBIIAJByAdqIAJBiANqEKUBIAJByAdqEAMgAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgGai\n    ACQcgBahClASACQYgGaiACQcgGahBIIAJByAdqIAJBiAZqEHggAkHIB2oQRCACQcgHaiACQYgDahBIIAJByAZqIAJBiAV\n    qEEggAkGIBmogAkGIAmoQpQEgAkGIBmogAkHIBmoQSCACQcgHaiACQYgGahB4IAJByAdqEEQgAkGIBmogAkHIB2oQpQEg\n    AkGIBmogAkGIBWoQSCACQYgGaiACQYgHahBcIQQgAkGIBWogAkGIBmoQpQEgAkGIBWogAkGIB2oQNCACQYgFaiACQcgHa\n    hBIIAJBiANqIAJBiAVqEEggAkHIA2ogAkGIBWoQSCACQcgFaiABEEggAkHIBmogAkGIBWoQpQEgAkHIBmoQAyACQYgFai\n    ACQcgGahClASACQYgFaiACQcgFahBIIAJByAVqIAJBiAZqEKUBIAJByAVqQQsQUiACQcgJakHQhcAAEF8gAkGICmogAkH\n    ICWoQiwEgAkHIAmogAkGICmoQpQEgAkHIAmogAkGIB2oQSCACQYgDaiACQcgDakEBIARrIgEQeSACQcgGaiACQYgFaiAB\n    EHkgAkGIBmogAkHIBWogARB5IAJBiAdqIAJByAJqIAEQeSACQYgKaiACQYgGaiACQYgHahAjIAJByARqIAJBiApqEKUBI\n    AJByARqIAJByAZqEEggAkHIBGoQWCEBIAJBiAZqIAJByARqEKUBIAJBiAZqEEEgAkGIBmoQRCACQcgEaiACQYgGaiABIA\n    NzEHkgAkGICmpBiIbAABBfIAJBiAhqIAJBiApqEIsBQTghAQNAIAFBoAVGRQRAIAJBiAhqIAJBiANqEEggAkHICWogAUG\n    IhsAAahBfIAFBOGohASACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQYgIaiACQYgGahB4IAJBiAhqEEQMAQsL\n    IAJByAhqIAJBiANqEIUBIAJByAlqQaiLwAAQXyACQYgKaiACQcgJahCLASACQYgGaiACQYgKahClASACQcgIaiACQYgGa\n    hB4IAJByAhqEERBACEBA0AgAUH4A0ZFBEAgAkHICGogAkGIA2oQSCACQcgJaiABQeCLwABqEF8gAUE4aiEBIAJBiApqIA\n    JByAlqEIsBIAJBiAZqIAJBiApqEKUBIAJByAhqIAJBiAZqEHggAkHICGoQRAwBCwsgAkGICmpB2I/AABBfIAJBiAlqIAJ\n    BiApqEIsBQQAhAQNAIAFByAZGBEACQCACQcgJaiACQYgDahCFASACQcgKakHYlsAAEF8gAkGICmogAkHICmoQiwEgAkGI\n    BmogAkGICmoQpQEgAkHICWogAkGIBmoQeCACQcgJahBEQQAhAQNAIAFBkAZGDQEgAkHICWogAkGIA2oQSCACQcgKaiABQ\n    ZCXwABqEF8gAUE4aiEBIAJBiApqIAJByApqEIsBIAJBiAZqIAJBiApqEKUBIAJByAlqIAJBiAZqEHggAkHICWoQRAwACw\n    ALBSACQYgJaiACQYgDahBIIAJByAlqIAFBkJDAAGoQXyABQThqIQEgAkGICmogAkHICWoQiwEgAkGIBmogAkGICmoQpQE\n    gAkGICWogAkGIBmoQeCACQYgJahBEDAELCyACQYgJaiACQcgEahBIIAJBiAZqIAJBiAhqEKUBIAJBiAZqIAJByAlqEEgg\n    AkEIaiACQYgGahClASACQYgGaiACQYgJahClASACQYgGaiACQcgIahBIIAJByABqIAJBiAZqEKUBIAJBiAZqIAJByAhqE\n    KUBIAJBiAZqIAJByAlqEEggAkGIAWogAkGIBmoQpQEgACACQQhqQcABEGcaIAJBgAtqJAALzQ0CE38IfiMAQYADayIBJA\n    AgADQCOCIUIBR+QoCAgBBaBEAgABASCyABQeABakHoABByGiABQcgBaiAAKQMAIhggGEI/hyIZIBggGRAxIAEgASkDyAE\n    iFEL//////////wODNwPYASABQdABaikDACIXQgaGIBRCOoiEIRUgF0I6iCEaIABBCGoiCyEFIAAhBkEBIQcDQCAHQQZP\n    BEAgAEEYaiEMIABBKGohCyAAQRBqIQcgACkDMCEYQQQhBkEAIQkgAUGgAWohDUEDIQpBAiEIQQchBQJAAkADQCAFQQpLD\n    QIgBiAIIAYgCEsbIQ4gBiAKIAYgCksbQQN0QWhqIQ8gAUGYAWogBUEDdCIQIABqQVBqKQMAIhQgFEI/hyAYIBhCP4ciGR\n    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\n    OBByGiACQQE2AvgMIAJBgA1qQTgQchogAkG4DWpBATYCACACQYAIakE4EHIaIAJBATYCuAggAkHACGpBOBByGiACQfgIa\n    kEBNgIAIAJBgApqIABBgANqIgMQXiACQYAIaiACQYAKahCQASACQYAKaiABQYADaiIFEF4gAkGACGogAkGACmoQDyACQc\n    AMahCpASAERQRAIAJBgApqIAMQXiACQcAMaiACQYAKahCQASACQYAKaiABQYACahBeIAJBwAxqIAJBgApqEA8LIAAoAoA\n    GQQRHBEAgAkGACmogAEGAAmoQXiACQcAMaiACQYAKahCQASACQYAKaiAFEF4gAkHADGogAkGACmoQDwsgAkGABGogAkHA\n    DGogAkGACGoQoQEgAkGABGoQZgsgAkGACGogABCOASACQYAKaiABEI4BIAJBgAhqIABBgAJqIgQQlgEgAkGACGoQrAEgA\n    kGACmogAUGAAmoiBRCWASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAQQkgEgAkGACG\n    ogAEGABGoiAxCWASACQYAIahCsASACQYAKaiAFEJIBIAJBgApqIAFBgARqIgUQlgEgAkGACmoQrAEgAkGABmogAkGACGo\n    QkgEgAkGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAI\n    ahCWASAEIAJBgAJqEJIBIAQgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQ\n    YAIaiADEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBRCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIA\n    JBgAhqEJYBIAJBgAhqIAMQkgEgAkGACGogBRAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgAyACQYAEahCSASADIAJBgAp\n    qEJYBIAJBgAZqIAJBgApqEJYBIAJBgAhqEGYgBCACQYAIahCWAQwDCyAAIAEQBgwECyACQcAMaiABQYAFahBeIAJBgAxq\n    IAJBwAxqQcAAEGcaIAJBgAZqIAJBgAxqEKMBCyACQYAGahBmIAJBgAhqIAIQkgEgAkGACGoQKyACQYACaiACQYAIahCWA\n    SAFIAJBgAJqEJIBIAJBgARqIAJBgAhqEJIBIAJBgAhqIAAQkgEgAkGACGogAxCWASACQYAIahCsASACQYAKaiABEJIBIA\n    JBgApqIAFBgARqEJYBIAJBgApqEKwBIAJBgAhqIAJBgApqEBkgAkGABGogAkGACGoQlgEgAkGACGogAxCSAQJAIARBAkc\n    EQCACQcAMaiABQYAFahBeIAJBgAhqIAJBwAxqEKIBDAELIAJBwAxqIAFBgAVqEF4gAkGADGogAkHADGpBwAAQZxogAkGA\n    CGogAkGADGoQowELIAJBgAhqEGYgAkGACmogAkGACGoQkgEgAkGACmoQKyADIAJBgARqEJIBIAMgAkGACmoQlgEgAkGAB\n    mogAkGACmoQlgEgAkGACGoQZiAFIAJBgAhqEJYBCyACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIABBBT\n    YCgAYgABCZAQwBCyAAIAEQbAsgAkHADWokAAuaCQIPfwt+IwBBwAJrIgIkACACQeAAakGgp8AAEF8gAEE4EHIhDCACQZg\n    BakHwABByGiACQZACakEwEHIaIAwQdCACIAEpAwAiFEL9//P/z///+QF+Qv//////////A4MiETcDiAIgAkHQAGogEUIA\n    IAIpA2AiGCAYQj+HIhoQMSAUIAIpA1AiEXwiFiARVK0gAkHYAGopAwAgFEI/h3x8IhRCOocgASkDCCIRQj+HfCARIBRCB\n    oYgFkI6iIQiEXwiEiARVK18IRNBASEDAkADQAJAIANBB0YEQCACQZACaiEJIAJB6ABqIQpBByEEIAJB4ABqIQ0gAkGIAm\n    ohDkEGIQ8MAQsgA0EBdiIAQQFqIQUgCiAAayEGIAkgAEEDdCIHayEAIAdBCGohCCACQUBrIANBA3QiBCACQeAAamopAwA\n    iFiAWQj+HIhQgAikDiAIiESARQj+HEDEgAkHIAGopAwAgEiAVfCIRIBJUrSATIBd8fHwgESACKQNAfCITIBFUrXwhEiAD\n    QQFqIQcDQCADIAVNBEAgAkGIAmogBGogE0L9//P/z///+QF+Qv//////////A4MiETcDACACQTBqIBFCACAYIBoQMSACQ\n    SBqIBFCACAWIBQQMSACQZgBaiADQQR0aiIAIAJBKGopAwAiGzcDCCAAIAIpAyAiGTcDACACKQMwIhEgE3wiFiARVK0gAk\n    E4aikDACASfHwiFEI6hyABIAdBA3RqKQMAIhFCP4d8IBEgFEIGhiAWQjqIhCIRfCISIBFUrXwhEyAVIBl8IhUgGVStIBc\n    gG3x8IRcgCUEIaiEJIApBAWohCiAHIQMMAwsgBkEGSw0DIAJBEGogAkHgAGogCGopAwAgAkHgAGogAGopAwB9IhEgEUI/\n    hyACQYgCaiAAaikDACACQYgCaiAIaikDAH0iESARQj+HEDEgAikDECIRIBN8IhMgEVStIAJBGGopAwAgEnx8IRIgBUEBa\n    iEFIABBeGohACAGQX9qIQYgCEEIaiEIDAALAAsLA0ACQCAEQQ1HBEAgDyAEQQF2IgBrIQUgDiAAQQN0IgtrIRAgDSALay\n    EIIBMgF3wgEiAVfCITIBJUrXwhEiAEQQFqIQdBMCEAIAkhBiAKIQMDQCAAIAtGDQIgBUEGTQRAIAIgAyALaikDACAAIAh\n    qKQMAfSIRIBFCP4cgACAQaikDACAGIAtqKQMAfSIRIBFCP4cQMSACKQMAIhEgE3wiEyARVK0gAkEIaikDACASfHwhEiAF\n    QX9qIQUgBkEIaiEGIANBCGohAyAAQXhqIQAMAQsLIAVBB0HknsAAEDwACyAMIBJC//////////8DgzcDMCACQcACaiQAD\n    wsgBEEDdCAMakFIaiATQv//////////A4M3AwAgEkI6hyABIAdBA3RqKQMAIhFCP4d8IBEgEkIGhiATQjqIhCIRfCISIB\n    FUrXwhEyAXIARBBHQgAmpBOGoiAEEIaikDAH0gFSAAKQMAIhFUrX0hFyAOQQhqIQ4gDUEIaiENIA9BAWohDyAVIBF9IRU\n    gByEEDAALAAsgBkEHQdSewAAQPAAL+QkBBH8jAEGACWsiAiQAIAJBgAhqIAAQXiACIAJBgAhqEF4gAkGACGogAEGAAWoi\n    BBBeIAJBgAFqIAJBgAhqEF4gAkGACGogARBeIAIgAkGACGoQDyACQYAIaiABQYABaiIFEF4gAkGAAWogAkGACGoQDyAAK\n    AKABiEDAkACQCABKAKABkECRwRAIANBAkYNASACQYAIaiAAQYAFahBeIAJBgAJqIAJBgAhqEF4gAkGACGogAUGABWoQXi\n    ACQYACaiACQYAIahAPDAILIANBAkYEQCACQYAIaiAAQYAFahBeIAJBgAdqIAJBgAhqQcAAEGcaIAJBgAZqIAJBgAdqEIU\n    BIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGABmogAkGAB2oQSCACQYAIakE4EHIaIAJBATYCuAggAkHA\n    CGpBOBByIAJB+AhqQQE2AgAgAkGACGogAkGABmoQpQEQsgEgAkGAAmogAkGACGpBgAEQZxoMAgsgAkGACGogAEGABWoQX\n    iACQYACaiACQYAIahBeIAJBgAhqIAFBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAEMAQsgAkGACG\n    ogAUGABWoQXiACQYACaiACQYAIahBeIAJBgAhqIABBgAVqEF4gAkGAB2ogAkGACGpBwAAQZxogAkGAAmogAkGAB2oQoAE\n    LIAJBgAhqIAAQXiACQYADaiACQYAIahBeIAJBgAhqIAEQXiACQYAEaiACQYAIahBeIAJBgAhqIAQQXiACQYADaiACQYAI\n    ahCVASACQYADahCoASACQYAIaiAFEF4gAkGABGogAkGACGoQlQEgAkGABGoQqAEgAkGABWogAkGAA2oQXiACQYAFaiACQ\n    YAEahAPIAJBgAZqIAIQXiACQYAGaiACQYABahCVASACQYAGahA6IAJBgAVqIAJBgAZqEJUBIAJBgAhqIAAQXiACQYADai\n    ACQYAIahCQASACQYAIaiAAQYAFaiIDEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogARBeIAJBgARqIAJBgAh\n    qEJABIAJBgAhqIAFBgAVqIgEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAHaiACQYADahBeIAJBgAdqIAJBgARq\n    EA8gAkGABmogAhCQASACQYAGaiACQYACahCVASACQYAGahA6IAJBgAdqIAJBgAZqEJUBIAJBgAhqIAQQXiACQYADaiACQ\n    YAIahCQASACQYAIaiADEF4gAkGAA2ogAkGACGoQlQEgAkGAA2oQqAEgAkGACGogBRBeIAJBgARqIAJBgAhqEJABIAJBgA\n    hqIAEQXiACQYAEaiACQYAIahCVASACQYAEahCoASACQYAIaiACQYADahBeIAJBgAhqIAJBgARqEA8gAkGABmogAkGAAWo\n    QkAEgAkGABmogAkGAAmoQlQEgAkGABmoQOiACQYAIaiACQYAGahCVASACQYABahBVIAIgAkGAAWoQlQEgACACIAJBgAVq\n    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\n    GogAkGABWoQfSACQYAEahCoASACQYAFaiAAEJABIAJBgAVqIAQQlQEgAkGABWoQqAEgAkGABmogARBeIAJBgAZqIAYQlQ\n    EgAkGABmoQqAEgAkGABWogAkGABmoQDyACQYAGaiACEJABIAJBgAZqIAJBgAJqEJUBIAJBgAZqIAJBgAVqELUBIAJBgAZ\n    qEKgBIAJBgAVqIAIQkAEgAkGABWogAhCVASACIAJBgAVqEJUBIAIQqAEgAkGAAmpBDBCfASACQYACahBVIAJBgAJqEKgB\n    IAJBgAdqIAJBgAFqEF4gAkGAB2ogAkGAAmoQlQEgAkGAB2oQqAEgAkGAAWogAkGAAmoQfSACQYABahCoASACQYAGakEME\n    J8BIAJBgAZqEFUgAkGABmoQqAEgAkGABWogAkGABmoQkAEgAkGABWogAkGABGoQDyACQYACaiACQYADahCQASACQYACai\n    ACQYABahAPIAJBgAVqIAJBgAJqELUBIAJBgAZqIAIQDyACQYABaiACQYAHahAPIAJBgAZqIAJBgAFqEJUBIAIgAkGAA2o\n    QDyACQYAHaiACQYAEahAPIAJBgAdqIAIQlQEgACACQYAFahCQASAAEKgBIAMgAkGABmoQkAEgAxCoASAEIAJBgAdqEJAB\n    IAQQqAEgAkGACGokAAv2BQEFfyMAQYAEayICJAAgAiAAEIUBIAIgARBIIAJBQGsgAEFAayIDEIUBIAJBQGsgAUFAayIFE\n    EggAkGAAWogAEGAAWoiBBCFASACQYABaiABQYABaiIGEEggAkHAAWogABCFASACQcABaiADEHggAkHAAWoQRCACQYACai\n    ABEIUBIAJBgAJqIAUQeCACQYACahBEIAJBwAFqIAJBgAJqEEggAkGAAmogAhClASACQYACaiACQUBrEHggAkHAAWogAkG\n    AAmoQgAEgAkHAAWoQRCACQYACaiADEKUBIAJBgAJqIAQQeCACQYACahBEIAJBwAJqIAUQhQEgAkHAAmogBhB4IAJBwAJq\n    EEQgAkGAAmogAkHAAmoQSCACQcACaiACQUBrEKUBIAJBwAJqIAJBgAFqEHggAkGAAmogAkHAAmoQgAEgAkGAAmoQRCACQ\n    cACaiAAEKUBIAJBwAJqIAQQeCACQcACahBEIAJBgANqIAEQhQEgAkGAA2ogBhB4IAJBgANqEEQgAkHAAmogAkGAA2oQSC\n    ACQYADaiACEKUBIAJBgANqIAJBgAFqEHggAkGAA2ogAkHAAmoQswEgAkGAA2oQRCACQcACaiACEKUBIAJBwAJqIAIQeCA\n    CIAJBwAJqEHggAhBEIAJBgAFqQQwQUiACQcADaiACQUBrEIUBIAJBwANqIAJBgAFqEHggAkHAA2oQRCACQUBrIAJBgAFq\n    EIABIAJBQGsQRCACQYADakEMEFIgAkHAAmogAkGAA2oQpQEgAkHAAmogAkGAAmoQSCACQYABaiACQcABahClASACQYABa\n    iACQUBrEEggAkHAAmogAkGAAWoQswEgAkGAA2ogAhBIIAJBQGsgAkHAA2oQSCACQYADaiACQUBrEHggAiACQcABahBIIA\n    JBwANqIAJBgAJqEEggAkHAA2ogAhB4IAAgAkHAAmoQpQEgABBEIAMgAkGAA2oQpQEgAxBEIAQgAkHAA2oQpQEgBBBEIAJ\n    BgARqJAALxQUBBH8jAEHwEmsiACQAIAAQOEF/IQEgABCIAUUEQCAAQYADakE4EHIaIABBuANqQTgQchogAEG4A2ogAEGA\n    A2oQVCAAQfAKakG4gMAAEF8gAEHwDWpB8IDAABBfIABB8ANqIABB8ApqIABB8A1qEEkgAEHwBGpBOBByGiAAQQE2AqgFI\n    ABBsAVqQTgQchogAEHoBWpBATYCACAAQfAFakE4EHIaIABBATYCqAYgAEGwBmpBOBByGiAAQegGakEBNgIAIABB8AZqQT\n    gQchogAEEBNgKoByAAQbAHakE4EHIaIABB6AdqQQE2AgBBf2ohAyAAQfAHahAqIABB8AdqIAAQfiAAQfAKahAqIABB8Ap\n    qIABB8AdqEH4gAEHwDWoQKiAAQfANaiAAQfAHahB+IABB8A1qEJwBAkACQAJAA0AgAiEBIANBAkkNAyAAQfAKaiAAQfAE\n    aiAAQfAFaiAAQfAGahAlIAFBxABNBEAgAEHwEGogAEHwBGogAEHwBWogAEHwBmoQRiABQQh0QdCrwABqIABB8BBqEJIBI\n    AFBAWohAgJAAkAgAEG4A2ogA0F/aiIDEFcgAEGAA2ogAxBXa0EBag4DAQMAAwsgAEHwCmogAEHwB2ogAEHwBGogAEHwBW\n    ogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYgAkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQI\n    MAgsgAEHwCmogAEHwDWogAEHwBGogAEHwBWogAEHwBmoQHiABQcMASw0DIABB8BBqIABB8ARqIABB8AVqIABB8AZqEEYg\n    AkEIdEHQq8AAaiAAQfAQahCSASABQQJqIQIMAQsLIAFBxQBBvIHAABA8AAtBxQBBxQBBzIHAABA8AAtBxQBBxQBB3IHAA\n    BA8AAtBACEBCyAAQfASaiQAIAEL8gQBBH8jAEGADGsiAiQAIAIgABCOASACQYACahAvIAJBgARqIABBgAJqIgMQjgEgAk\n    GABmoQLyACQYAIaiAAEI4BIAJBgApqIAEQjgEgAiABEBkgAkGABGogAUGAAmoiBBAZIAJBgAhqIAMQlgEgAkGACmogBBC\n    WASACQYAIahCsASACQYAKahCsASACQYACaiACQYAIahCSASACQYACaiACQYAKahAZIAJBgAhqIAMQkgEgAkGACGogAEGA\n    BGoiBRCWASACQYAKaiAEEJIBIAJBgApqIAFBgARqIgQQlgEgAkGACGoQrAEgAkGACmoQrAEgAkGABmogAkGACGoQkgEgA\n    kGABmogAkGACmoQGSACQYAIaiACEJIBIAJBgAhqECsgAkGACmogAkGABGoQkgEgAkGACmoQKyACQYACaiACQYAIahCWAS\n    ADIAJBgAJqEJIBIAMgAkGACmoQlgEgAkGABmogAkGACmoQlgEgAkGABGogAkGACGoQlgEgAkGACGogABCSASACQYAIaiA\n    FEJYBIAJBgAhqEKwBIAJBgApqIAEQkgEgAkGACmogBBCWASACQYAKahCsASACQYAIaiACQYAKahAZIAJBgARqIAJBgAhq\n    EJYBIAJBgAhqIAUQkgEgAkGACGogBBAZIAJBgApqIAJBgAhqEJIBIAJBgApqECsgBSACQYAEahCSASAFIAJBgApqEJYBI\n    AJBgAZqIAJBgApqEJYBIAJBgAhqEGYgAyACQYAIahCWASACQYAGahCsASACQYAGahBmIAAgAhCSASAAIAJBgAZqEJYBIA\n    BBBTYCgAYgABCZASACQYAMaiQAC68EAQV/IwBBkAZrIgIkACAAQUBrIQQCQCABQfgAaigCACABKAI4aqwgAEH4AGooAgA\n    iAyAAKAI4IgVqrH5CgICAEFMNACAFQQJOBH8gABASIAAoAngFIAMLQQJIDQAgBBASCyACQaCnwAAQX0EAIQMgAkE4akHw\n    ABByGiABQUBrIQUDQCADQThGBEAgAkHwAGohBkEAIQMDQCADQThGRQRAIAMgBmogAiADaikDADcDACADQQhqIQMMAQsLI\n    AJBqAFqIAAQXyACQeABaiABEF8gAkGYAmogACABEAggAkGIA2ogBCAFEAggAkGoAWogBBBhIAJBqAFqEEQgAkHgAWogBR\n    BhIAJB4AFqEEQgAkH4A2ogAkGoAWogAkHgAWoQCEEAIQMgAkHoBGpB8AAQchoDQCADQfAARkUEQCACQegEaiADaiACQZg\n    CaiADaikDADcDACADQQhqIQMMAQsLIAJB6ARqIAJBiANqEGVBACEDA0AgA0HwAEZFBEAgAkGIA2ogA2oiASACQThqIANq\n    KQMAIAEpAwB9NwMAIANBCGohAwwBCwsgAkGYAmogAkGIA2oQZSACQZgCahBFIAJB+ANqIAJB6ARqEGQgAkH4A2oQRSACQ\n    dgFaiACQZgCahAFIAAgAkHYBWoQayAAQQM2AjggAkHYBWogAkH4A2oQBSAEIAJB2AVqEGsgAEECNgJ4IAJBkAZqJAAFIA\n    JBOGogA2pCADcDACADQQhqIQMMAQsLC5QEAQF/IwBB0CJrIgMkACADQcAWakG4gMAAEF8gA0HIHGpB8IDAABBfIANBCGo\n    gA0HAFmogA0HIHGoQSSADQYgBakE4EHIaIANBwAFqQTgQchogA0H4AWoQKgJAIAIQhAFFBEAgA0H4BGoQKiADQfgEaiAB\n    EH4gA0H4BGoQSiADQfgHahBLIANB+AdqIAIQfyADQfgHahBHIANByBxqIANB+AdqEIUBIANBuAlqIANByBxqEIUBIANBy\n    BxqIANBuAhqEIUBIANB+AlqIANByBxqEIUBIANBuApqECogA0G4DWoQYCADQbgKaiADQfgEahB+IANBwBNqECogA0HAE2\n    ogA0H4BGoQfiADQcATahCcASADQcABaiADQYgBahBUQX9qIQIDQCACQQFNBEAgA0G4DWoQkwEgACADQbgNakGIBhBnGgw\n    DBSADQbgNahAbIANBwBZqIANBuApqIANBuAlqIANB+AlqEBcCQAJAAkAgA0HAAWogAkF/aiICEFcgA0GIAWogAhBXa0EB\n    ag4DAQIAAgsgA0HIHGogA0G4CmogA0H4BGogA0G4CWogA0H4CWoQFiADQcAWaiADQcgcahAGDAELIANByBxqIANBuApqI\n    ANBwBNqIANBuAlqIANB+AlqEBYgA0HAFmogA0HIHGoQBgsgA0G4DWogA0HAFmoQBAwBCwALAAsgABBgCyADQdAiaiQAC8\n    MDARV/A0AgAUHAAUYEQAJAIABBKGohCyAAQRRqKAIAIgwhCCAAQRBqKAIAIg0hAyAAQQxqKAIAIg4hAiAAKAIIIg8hASA\n    AQRhqKAIAIhAhCiAAQRxqKAIAIhEhBCAAQSBqKAIAIhIhByAAQSRqKAIAIhMhBgNAIAchCSAEIQcgCiEEIAVBgAJGDQEg\n    AiADcSEUIAIgA3MhFSAFIAtqKAIAIAVB9J7AAGooAgAgBEEadyAEQRV3cyAEQQd3cyAGaiAJIARBf3NxIAQgB3FyampqI\n    gYgCGohCiAFQQRqIQUgAyEIIAIhAyABIQIgAUEedyABQRN3cyABQQp3cyAUIAEgFXFzaiAGaiEBIAkhBgwACwALBSAAIA\n    FqIgNB6ABqIANBzABqKAIAIANBKGooAgAgA0EsaigCACICQRl3IAJBDndzIAJBA3ZzIANB4ABqKAIAIgJBD3cgAkENd3M\n    gAkEKdnNqamo2AgAgAUEEaiEBDAELCyAAIAYgE2o2AiQgACAJIBJqNgIgIAAgByARajYCHCAAIAQgEGo2AhggACAIIAxq\n    NgIUIAAgAyANajYCECAAIAIgDmo2AgwgACABIA9qNgIIC9YDAgZ/An4jAEHwAGsiASQAIAFBoKfAABBfIAFBOGogARBfI\n    AAQRAJAAkACQCABAn8gACgCOCICQRBMBEAgAkF/ahA5DAELIAEpAzAiCEIBfCIHIAhUDQEgACkDMCIIQoCAgICAgICAgH\n    9RQQAgB0J/URsNAiABQThqIAggB3+nECghByABIAEpA2ggB0I6hnw3A2ggACABQThqEGIgABBEQQILIgMQLSAAQQhqIQQ\n    DQCADRQ0DIAEgASkDCEI5hkKAgICAgICAgAKDIAEpAwBCAYeEIgc3AwAgASAAKQMAIAd9IgdC//////////8DgzcDOEEA\n    IQIDQCAHQjqHIQcgAkEoRkUEQCABIAJqIgVBCGoiBiAFQRBqKQMAQjmGQoCAgICAgICAAoMgBikDAEIBh4QiCDcDACABI\n    AJqQUBrIAIgBGopAwAgCH0gB3wiB0L//////////wODNwMAIAJBCGohAgwBCwsgASABKQMwQgGHIgg3AzAgASAAKQMwIA\n    h9IAd8Igc3A2ggACABQThqIAdCP4enQQFqEE8gA0F/aiEDDAALAAtBoKLAAEEZQbyiwAAQWwALQdCiwABBH0G8osAAEFs\n    ACyAAQQE2AjggAUHwAGokAAuhAwEBfyMAQZADayIGJAAgBkEIakHAABByGiAGQcgAakGoAhByGiAGQcgAahBDA0AgAQRA\n    IAZByABqQQAQPiABQX9qIQEMAQUCQCACBEAgBkHIAGogAiADEHoLIAQEQCAGQcgAaiAEIAUQegsgBkGIA2pCADcDACAGQ\n    YADakIANwMAIAZB+AJqQgA3AwAgBkIANwPwAiAGKAJIIQEgBigCTCECIAZByABqQYABED4DQCAGKAJIQf8DcUHAA0ZFBE\n    AgBkHIAGpBABA+DAELCyAGQawBaiABNgIAIAZBqAFqIAI2AgAgBkHIAGoQEUEAIQJBACEBA0AgAUEgRkUEQCAGQfACaiA\n    BaiABQXxxIAZqQdAAaigCACACQX9zQRhxdjoAACACQQhqIQIgAUEBaiEBDAELCyAGQcgAahBDQQAhAQNAIAFBIEZFBEAg\n    BkEIaiABaiAGQfACaiABai0AADoAACABQQFqIQEMAQsLQQAhAQNAIAFBIEYNASAAIAFqIAZBCGogAWotAAA6AAAgAUEBa\n    iEBDAALAAsLCyAGQZADaiQAC6EDAQN/IwBBgAZrIgEkACABIABBgAFqIgMQXiABQYABaiADEF4gAUGAAWoQMiABQYACai\n    ABEF4gAUGAAmogAEGAAmoiAhAPIAFBgANqIAIQXiABQYADahAyIAIgAUGAAWoQkAEgAiABQYABahCVASACEKgBIAIQpwE\n    gAhCnASACEKgBIAFBgANqQQwQnwEgAUGAA2oQVSABQYADahCoASABQYAEaiABQYADahBeIAFBgARqIAIQDyABQYAFaiAB\n    QYABahBeIAFBgAVqIAFBgANqEJUBIAFBgAVqEKgBIAIgAUGAAmoQDyABQYACaiABQYADahCQASABQYACaiABQYADahCVA\n    SABQYADaiABQYACahCVASABQYADahCoASABQYABaiABQYADahB9IAFBgAFqEKgBIAFBgAVqIAFBgAFqEA8gAUGABWogAU\n    GABGoQlQEgAUGAAmogABCQASABQYACaiABEA8gACABQYABahCQASAAEKgBIAAgAUGAAmoQDyAAEKcBIAAQqAEgAyABQYA\n    FahCQASADEKgBIAFBgAZqJAALhQMBBH8CQAJAIAFBgAJPBEAgAEEYaigCACEEAkACQCAAIAAoAgwiAkYEQCAAQRRBECAA\n    QRRqIgIoAgAiAxtqKAIAIgENAUEAIQIMAgsgACgCCCIBIAI2AgwgAiABNgIIDAELIAIgAEEQaiADGyEDA0AgAyEFIAEiA\n    kEUaiIDKAIAIgFFBEAgAkEQaiEDIAIoAhAhAQsgAQ0ACyAFQQA2AgALIARFDQIgACAAQRxqKAIAQQJ0QeS3wQBqIgEoAg\n    BHBEAgBEEQQRQgBCgCECAARhtqIAI2AgAgAkUNAwwCCyABIAI2AgAgAg0BQdi1wQBB2LXBACgCAEF+IAAoAhx3cTYCAA8\n    LIABBDGooAgAiAiAAQQhqKAIAIgBHBEAgACACNgIMIAIgADYCCA8LQdS1wQBB1LXBACgCAEF+IAFBA3Z3cTYCAAwBCyAC\n    IAQ2AhggACgCECIBBEAgAiABNgIQIAEgAjYCGAsgAEEUaigCACIARQ0AIAJBFGogADYCACAAIAI2AhgLC7MCAQF/IwBBg\n    AtrIgUkACAFEC8gBUGAAmoQLyAFQYAEahAvIAVBgAZqQTgQchogBUEBNgK4BiAFQcAGakE4EHIaIAVB+AZqQQE2AgAgBU\n    GAB2pBOBByGiAFQQE2ArgHIAVBwAdqQTgQchogBUH4B2pBATYCACAFQYAIakE4EHIaIAVBATYCuAggBUHACGpBOBByGiA\n    FQfgIakEBNgIAIAEgAiAFQYAGaiAFQYAHaiAFQYAIahAeIAVBgAhqIAMQoAEgBUGABmogBBCgASAFQYAJaiAFQYAGaiAF\n    QYAHahCRASAFIAVBgAlqEJIBIAVBgAlqIAVBgAhqEJsBIAVBgARqIAVBgAlqEJIBIAVBgARqEGYgACAFIAVBgAJqIAVBg\n    ARqEHYgAEEDNgKABiAFQYALaiQAC7ECAQF/IwBBgAtrIgQkACAEEC8gBEGAAmoQLyAEQYAEahAvIARBgAZqQTgQchogBE\n    EBNgK4BiAEQcAGakE4EHIaIARB+AZqQQE2AgAgBEGAB2pBOBByGiAEQQE2ArgHIARBwAdqQTgQchogBEH4B2pBATYCACA\n    EQYAIakE4EHIaIARBATYCuAggBEHACGpBOBByGiAEQfgIakEBNgIAIAEgBEGABmogBEGAB2ogBEGACGoQJSAEQYAIaiAC\n    EKABIARBgAZqIAMQoAEgBEGACWogBEGABmogBEGAB2oQkQEgBCAEQYAJahCSASAEQYAJaiAEQYAIahCbASAEQYAEaiAEQ\n    YAJahCSASAEQYAEahBmIAAgBCAEQYACaiAEQYAEahB2IABBAzYCgAYgBEGAC2okAAvJAgEDfyMAQcACayIBJAAgASAAQU\n    BrIgMQhQEgARADIAFBQGsgAxCFASABQUBrIABBgAFqIgIQSCABQYABaiACEIUBIAFBgAFqEAMgAiABEKUBIAIgARB4IAI\n    QRCACEE4gAhBOIAIQRCABQYABakEMEFIgAUHAAWogAUGAAWoQhQEgAUHAAWogAhBIIAFBgAJqIAEQhQEgAUGAAmogAUGA\n    AWoQeCABQYACahBEIAIgAUFAaxBIIAFBQGsgAUGAAWoQpQEgAUFAayABQYABahB4IAFBgAFqIAFBQGsQeCABIAFBgAFqE\n    IABIAEQRCABQYACaiABEEggAUGAAmogAUHAAWoQeCABQUBrIAAQpQEgAUFAayADEEggACABEKUBIAAQRCAAIAFBQGsQSC\n    AAEE4gABBEIAMgAUGAAmoQpQEgAxBEIAFBwAJqJAALrQIBA38jAEGABGsiAiQAIAIgABBeIAJBgAFqIABBgAFqIgMQXiA\n    CQYACakE4EHIaIAJBATYCuAIgAkHAAmpBOBByGiACQfgCakEBNgIAIAJBgANqIAMQXiACIAEQDyACQYABaiABQYABaiIE\n    EA8gAkGAAmogBBCQASACQYACaiABEJUBIAJBgANqIAAQlQEgAkGAAmoQqAEgAkGAA2oQqAEgAkGAA2ogAkGAAmoQDyACQ\n    YACaiACEJABIAJBgAJqEDogAkGAA2ogAkGAAmoQlQEgAkGAA2oQqAEgAkGAAmogAkGAAWoQkAEgAkGAAmoQOiADIAJBgA\n    NqEJABIAMgAkGAAmoQlQEgAkGAAWoQVSAAIAJBgAFqEJABIAAgAhCVASAAEKwBIAJBgARqJAALvQIBA38jAEGACGsiASQ\n    AIAEgABCOASABQYACaiAAQYAEaiICEI4BIAFBgARqIABBgAJqIgMQjgEgAUGABmoQLyAAECIgAUGABmogABCSASABQYAG\n    aiAAEJYBIAAgAUGABmoQlgEgABCsASABELYBIAEQrwEgACABEJYBIAFBgAJqECIgAUGAAmoQZiABQYAGaiABQYACahCSA\n    SABQYAGaiABQYACahCWASABQYACaiABQYAGahCWASABQYACahCsASABQYAEahAiIAFBgAZqIAFBgARqEJIBIAFBgAZqIA\n    FBgARqEJYBIAFBgARqIAFBgAZqEJYBIAFBgARqEKwBIAMQrgEgAxCvASACELYBIAIQrwEgAyABQYACahCWASACIAFBgAR\n    qEJYBIABBBTYCgAYgABCaASABQYAIaiQAC7ICAQN/IwBBgAhrIgEkACAAKAKABkEBRwRAIAEgABCOASABQYACaiAAQYAC\n    aiIDEI4BIAFBgARqIABBgARqIgIQjgEgAUGABmogABCOASABECIgAUGAAmogAhAZIAFBgAJqEK8BIAFBgAJqEKwBIAFBg\n    ARqECIgAUGABmogAxAZIAFBgAZqEK8BIAIgABCWASACIAMQlgEgAhCsASACECIgACABEJIBIAEgAUGAAmoQlgEgARCsAS\n    ABIAFBgARqEJYBIAEgAUGABmoQlgEgARCsASABECsgAUGAAmoQZiABQYAEahBmIAAgAUGAAmoQlgEgAyABQYAEahCSASA\n    DIAFBgAZqEJYBIAIgARCWASAAQQRBBSAAKAKABkF+cUECRhs2AoAGIAAQmQELIAFBgAhqJAALigIBAn8jAEHgAWsiAiQA\n    IAAQRCACQQhqQTAQchogAkIBNwMAIAJBOGogABBfIAJB8ABqIAEQXyACQagBakE4EHIaIAAQdANAIAJBOGogAkHwAGoQN\n    UF/TARAA0ACQCADQQBMDQAgAkHwAGpBARA7IAJBARA7IAJBqAFqIAJBOGoQayACQagBaiACQfAAahBiIAJBqAFqEEQgAk\n    E4aiACQagBaiACKQPYAUI/h6dBAWoiARBPIAJBqAFqIAAQayACQagBaiACEGEgAkGoAWoQRCAAIAJBqAFqIAEQTyADQX9\n    qIQMMAQsLBSACQQEQLSACQfAAakEBEC0gA0EBaiEDDAELCyACQeABaiQAC54CAQF/IwBBgA1rIgMkACADIAEQaiADEJkB\n    IANBiAZqIAIQXyADQYgGahBEIANBwAZqIANBiAZqEF8gA0HABmpBAxAoGiADQcAGahBEIANB+AZqIAMQagJAIANBwAZqE\n    FpFBEAgA0HABmoQKUF/aiECA0AgAkEBTQRAIANB+AZqEJoBDAMLIANB+AZqEBoCQAJAIANBwAZqIAJBf2oiAhBXIANBiA\n    ZqIAIQV2tBAWoOAwECAAILIANB+AZqIAMQDgwBCyADEJMBIANB+AZqIAMQDiADEJMBDAALAAsgA0H4BmoQsAEgA0H4B2o\n    QqQEgA0H4CGoQrQEgA0H4CmoQrQEgA0EBNgL4DAsgACADQfgGakGIBhBnGiADQYANaiQAC5ACAQJ/IwBBgAJrIgUkACAF\n    QYABaiAAEF4gAiAFQYABahCQASAFQYABaiAAQYABahBeIAQgBUGAAWoQkAEgBUGAAWogAEGAAmoiBhBeIAUgBUGAAWoQX\n    iAFQYABaiAGEF4gAyAFQYABahCQASAFQYABaiABQYABaiIGEF4gBSAFQYABahAPIAVBgAFqIAEQXiADIAVBgAFqEA8gAi\n    ADEH0gAhCoASAEIAUQfSAEEKgBIAUgAhCQASACEFUgAhCoASAFQYABaiAGEF4gBSAFQYABahAPIAMgBBCQASAFQYABaiA\n    BEF4gAyAFQYABahAPIAMgBRB9IAMQqAEgBBA6IAQQqAEgACABEAsgBUGAAmokAAvkAQECfyMAQcABayIDJAAgAxBLIAAg\n    ASACQR91IgQgAnMgBEF/c2pBAm0iAkF/akEfdhBtIAAgAUHAAWogAkEBc0F/akEfdhBtIAAgAUGAA2ogAkECc0F/akEfd\n    hBtIAAgAUHABGogAkEDc0F/akEfdhBtIAAgAUGABmogAkEEc0F/akEfdhBtIAAgAUHAB2ogAkEFc0F/akEfdhBtIAAgAU\n    GACWogAkEGc0F/akEfdhBtIAAgAUHACmogAkEHc0F/akEfdhBtIAMgABB/IAMQpgEgACADIARBAXEQbSADQcABaiQAC+Q\n    BAQJ/IwBBgANrIgMkACADECogACABIAJBH3UiBCACcyAEQX9zakECbSICQX9qQR92EG8gACABQYADaiACQQFzQX9qQR92\n    EG8gACABQYAGaiACQQJzQX9qQR92EG8gACABQYAJaiACQQNzQX9qQR92EG8gACABQYAMaiACQQRzQX9qQR92EG8gACABQ\n    YAPaiACQQVzQX9qQR92EG8gACABQYASaiACQQZzQX9qQR92EG8gACABQYAVaiACQQdzQX9qQR92EG8gAyAAEH4gAxCcAS\n    AAIAMgBEEBcRBvIANBgANqJAALvAEBAn8jAEGwAWsiAiQAIAJBMBByIQIDQCADQTBGBEACQCABQTBqIQEgAkEwaiACEHV\n    BACEDA0AgA0EwRg0BIAIgA2ogASADai0AADoAACADQQFqIQMMAAsACwUgAiADaiABIANqLQAAOgAAIANBAWohAwwBCwsg\n    AkHwAGogAhB1IABBOBByIgBBATYCOCAAQUBrQTgQciAAQfgAakEBNgIAIAAgAkHwAGoQpQEgAkEwahClASACQbABaiQAC\n    9QBAQJ/IwBBgANrIgEkACABIAAQXiABQYABaiAAQYABaiICEF4gAUGAAmogABBeIAFBgAJqIAIQDyABIAIQlQEgAUGAAW\n    oQVSABQYABaiAAEJUBIAEQqAEgAUGAAWoQqAEgACABEJABIAAgAUGAAWoQDyABQYABaiABQYACahCQASABQYABahBVIAF\n    BgAFqIAFBgAJqEJUBIAFBgAFqEKgBIAFBgAFqEDogACABQYABahCVASABQYACahCnASACIAFBgAJqEJABIAAQrAEgAUGA\n    A2okAAvEAQEBfyMAQYADayIDJAAgA0EIaiABEIUBAkAgAkUEQCADQQhqEAcMAQsgA0EIaiACEKUBCyADQcgAakHYo8AAE\n    F8gA0GAAWogA0HIAGoQiwEgA0HAAWogA0EIahCFASADQcABahADIANBwAFqIAEQSCAAIAEQhQEgACADQQhqEEggA0GAAm\n    ogA0HAAWoQhQEgABBYIQEgA0HAAmogABCFASADQcACahBBIANBwAJqEEQgACADQcACaiABEHkgA0GAA2okAAufAQEBfyM\n    AQfAAayICJAAgAiABEF9BACEBIAJBOGpBOBByGiAAEEQCQCAAIAIQNUEASA0AA0AgAkEBEC0gAUEBaiEBIAAgAhA1QX9K\n    DQALA0AgAUEATA0BIAJBARA7IAJBOGogABBrIAJBOGogAhBiIAJBOGoQRCAAIAJBOGogAikDaEI/h6dBAWoQTyABQX9qI\n    QEMAAsACyACQfAAaiQAC7IBAQF/IwBBgAJrIgQkACAEQYABaiAAEF4gAyAEQYABahCQASAEQYABaiAAQYABahBeIAQgBE\n    GAAWoQXiAEQYABaiAAQYACahBeIAIgBEGAAWoQkAEgASAEEJABIAEgAhAPIAMQMiAEEDIgAhAyIAEQpwEgARA6IAEQqAE\n    gARBVIAEQqAEgAkEMEJ8BIANBAxCfASACEFUgAhCoASACIAQQfSACEKgBIAAQFCAEQYACaiQAC58BAQJ/IwBBgAJrIgIk\n    ACAAIAEQXiAAEDIgAkGIAWpB2KTAABBfIAJBCGpBOBByGiACQQE2AkAgAkHIAGpBOBByIAJBgAFqQQE2AgAgAkHAAWogA\n    kGIAWoQiwEgAkEIaiACQcABahClARCyASACQQhqEKgBIAJBCGoQVSACQQhqEKgBIAAgARAPIAAgAkEIahCVASAAEKsBIA\n    JBgAJqJAALowEBAX8jAEEwayIGJAAgBkEQaiAAIAEQsQEgBiAGKAIUIgA2AhwgBiAGKAIQIgE2AhggBkEIaiACIAMQsQE\n    gBiAGKAIMIgI2AiQgBiAGKAIIIgM2AiAgBiAEIAUQsQEgBiAGKAIEIgQ2AiwgBiAGKAIAIgU2AiggASAAIAMgAiAFIAQQ\n    ACAGQShqEKQBIAZBIGoQpAEgBkEYahCkASAGQTBqJAALiAECA38DfiMAQRBrIgIkAAN+IANBOEYEfiACQRBqJAAgBgUgA\n    iAAIANqIgQpAwAiBSAFQj+HIAGsIgUgBUI/hxAxIAQgAikDACIHIAZ8IgVC//////////8DgzcDACAFIAdUrSACQQhqKQ\n    MAIAZCP4d8fEIGhiAFQjqIhCEGIANBCGohAwwBCwsLhAECA38BfiMAQUBqIgEkACABQQhqIAAQXyABQQhqEEQgAUE4aiE\n    CQQYhA0HcAiEAAn8DQEEAIANBAEgNARogAikDACIEUARAIAJBeGohAiAAQUZqIQAgA0F/aiEDDAELCwN/IARQBH8gAAUg\n    AEEBaiEAIARCAn8hBAwBCwsLIAFBQGskAAuHAQEBfyMAQcABayIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAa\n    kEBNgIAIAEQUCABQYgBakE4EHIaIABBgAFqIAFBgAEQZxogAEGAAmpBOBByGiAAQbgCakEBNgIAIABBvAJqIAFBhAFqQT\n    wQZxogAEH4AmpBATYCACABQcABaiQAC48BAQJ/IwBBgAJrIgEkACAAEKwBIAEgABBeIAFBgAFqQTgQchogAUEBNgK4ASA\n    BQcABakE4EHIaIAFB+AFqQQE2AgAgASAAQYABaiICEJUBIAEQOiABQYABaiABEJABIAFBgAFqIAIQlQEgAiABEJABIAIg\n    ABCVASAAIAFBgAFqEJABIAAQrAEgAUGAAmokAAt9AgF/An4jAEGAAWsiASQAIAFBCGogABCFASABQQhqEBIgAUHIAGogA\n    UEIahCDAUEIIQADQCAAQThGRQRAIAFByABqIABqKQMAIAKEIQIgAEEIaiEADAELCyABKQNIIQMgAUGAAWokACACQn98IA\n    NCAYVCf3yDQjqIp0EBcQuJAQIBfwJ+IAAgACkDMCABQT9xrSIDhiAAKQMoQTogAWtBP3GtIgSHhDcDMCAAQShqIQFBBiE\n    CA0AgAkEBTQRAIAAgACkDACADhkL//////////wODNwMABSABIAEpAwAgA4ZC//////////8DgyABQXhqIgEpAwAgBIeE\n    NwMAIAJBf2ohAgwBCwsLiQECAX8CfiAAIAApA2BBOiABQTpwIgFrrSIEhyAAKQNoIAGtIgOGhDcDaCAAQeAAaiEBQQ0hA\n    gNAIAJBAU0EQCAAIAApAwAgA4ZC//////////8DgzcDAAUgASABKQMAIAOGQv//////////A4MgAUF4aiIBKQMAIASHhD\n    cDACACQX9qIQIMAQsLC3EBAX8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByGiAAQfgAakEBNgIAIAFBCGpBOBB\n    yGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAEG8AWogAUEEakE8EGcaIABB+AFqQQE2AgAgAUFAayQAC4EBAgF/AX4gAEHw\n    ABByIQADQCACQThGBEACQCAAIAEpAzAiA0I6hzcDOCAAIANC//////////8DgzcDMCAAQUBrIQBBACECA0AgAkEwRg0BI\n    AAgAmpCADcDACACQQhqIQIMAAsACwUgACACaiABIAJqKQMANwMAIAJBCGohAgwBCwsLdQECfiAAIANCIIgiBSABQiCIIg\n    Z+IAIgA358IAEgBH58IANC/////w+DIgIgAUL/////D4MiAX4iA0IgiCACIAZ+fCICQiCIfCABIAV+IAJC/////w+DfCI\n    BQiCIfDcDCCAAIANC/////w+DIAFCIIaENwMAC3YBAn8jAEHAAWsiASQAIAEgABCFASABQUBrIAAQhQEgAUGAAWogAEFA\n    ayICEIUBIAEgAhB4IAFBQGsgABB4IAFBQGsQRCACIAFBQGsQSCABQYABahBBIAAgAUGAAWoQeCABEEQgABBEIAAgARBII\n    AFBwAFqJAALkwEBAn9B0LXBAEHQtcEAKAIAQQFqNgIAAkACQEGYucEAKAIAQQFGBEBBnLnBAEGcucEAKAIAQQFqIgA2Ag\n    AgAEECSw0CQaC5wQAoAgAiAUF/Sg0BDAILQZi5wQBCgYCAgBA3AwBBoLnBACgCACIAQQBIDQFBoLnBACAANgIAAAtBoLn\n    BACABNgIAIABBAUsNAAALAAtnAQJ/IwBBQGoiAiQAIAAQRCACIAAQhQECQCABRQRAIAAQBwwBCyAAIAEQpQELQQAhAQNA\n    IAFBAUsgA3JFBEAgABADIAFBAEchAyABIAFFaiEBDAELCyAAIAIQSCAAEBIgAkFAayQAC18CAX8EfkIBIQNBMCECA38gA\n    kF4RgR/IARCAYYgA3ynQX9qBSABIAJqKQMAIgUgACACaikDACIGfUI6hyADgyAEhCEEIAJBeGohAiAFIAaFQn98QjqHIA\n    ODIQMMAQsLC2ACAX8EfkIBIQNB6AAhAgN/IAJBeEYEfyAEQgGGIAN8p0F/agUgASACaikDACIFIAAgAmopAwAiBn1COoc\n    gA4MgBIQhBCACQXhqIQIgBSAGhUJ/fEI6hyADgyEDDAELCwt3AQN/IwBBgAJrIgIkACACIAEQXiACQYABaiABEF4gAhAy\n    IAJBgAFqIAIQDyAAIAJBgAFqEJcBIABBgAJqIgMgAkGAAWoQlwEgAEGABGoiBCACQYABahCXASADIAEQogEgBCACEKIBI\n    ABBBTYCgAYgAkGAAmokAAt6AQF/IwBB4ANrIgEkACABQYABakHApcAAEF8gAUG4AWpB+KXAABBfIAEgAUGAAWogAUG4AW\n    oQSSABQfACakGwpsAAEF8gAUGoA2pB6KbAABBfIAFB8AFqIAFB8AJqIAFBqANqEEkgACABIAFB8AFqED8gAUHgA2okAAt\n    nACAAQQF2IAByIgBBAnYgAHIiAEEEdiAAciIAQQh2IAByIgBBEHYgAHIiACAAQQF2QdWq1aoFcWsiAEECdkGz5syZA3Eg\n    AEGz5syZA3FqIgBBBHYgAGpBj568+ABxQYGChAhsQRh2C2cBAn8jAEGAAWsiASQAIAEgABCFASABQUBrQTgQchogAUEBN\n    gJ4IAEgAEFAayICEHggARBBIAFBQGsgARClASABQUBrIAIQeCACIAEQpQEgAiAAEHggACABQUBrEKUBIAFBgAFqJAALaA\n    IBfwJ+IAFBP3GtIQNBOiABa0E/ca0hBEEAIQEDQCABQTBGBEAgACAAKQMwIAOHNwMwBSAAIAFqIgIgAkEIaikDACAEhkL\n    //////////wODIAIpAwAgA4eENwMAIAFBCGohAQwBCwsLbAEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBHGpBAjYC\n    ACADQSxqQQI2AgAgA0ICNwIMIANBlKjAADYCCCADQQI2AiQgAyADQSBqNgIYIAMgAzYCKCADIANBBGo2AiAgA0EIaiACE\n    HAAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakECNgIAIANCAjcCDCADQbCqwAA2AgggA0\n    ECNgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBwAAtlAQJ/IAAgACgCACICQQhqIgM2AgAgACACQQN\n    2QTxxakEoaiICIAFB/wFxIAIoAgBBCHRyNgIAAkACQCADRQRAIABBADYCACAAIAAoAgRBAWo2AgQMAQsgA0H/A3ENAQsg\n    ABARCwtnAQF/IwBBgAJrIgMkACAAECogACABEJABIABBgAFqIgEgAhCQASAAQYACahCwASAAEKgBIAMgABAmIANBgAFqI\n    AEQXiADQYABahAyIANBgAFqIAMQe0UEQCAAEJgBCyADQYACaiQAC18BAn8jAEGAAWsiASQAIAAQqAEgASAAEIUBIAFBQG\n    sgAEFAayICEIUBIAEQAyABQUBrEAMgASABQUBrEHggAUEAEDQgACABEEggARBBIAEQRCACIAEQSCABQYABaiQAC10BAn8\n    jAEFAaiIBJAAgAUEIakGgp8AAEF8gAUEIaiAAKAI4QX9qEDkiAhAtIAAgAUEIahBjIABBASACQQFqQR9xdCICNgI4IAJB\n    gICAEE4EQCAAEBILIAFBQGskAAtfAgF/AX4jAEHwAGsiASQAIAFBoKfAABBfIAApAwAhAiABQThqIAAQXyAAQQEQOyABQ\n    ThqIAEQYSABQThqEEQgAUE4akEBEDsgACABQThqIAJCAoGnEE8gAUHwAGokAAt7AQJ/IABBKGohAgNAIAFBgAJGBEAgAE\n    LnzKfQ1tDrs7t/NwIIIABCADcCACAAQSBqQquzj/yRo7Pw2wA3AgAgAEEYakL/pLmIxZHagpt/NwIAIABBEGpC8ua746O\n    n/aelfzcCAAUgASACakEANgIAIAFBBGohAQwBCwsLaQICfwF+IAAgACkDACIDQv//////////A4M3AwBBCCEBA0AgA0I6\n    hyEDIAFBMEYEQCAAIAApAzAgA3w3AzAFIAAgAWoiAiACKQMAIAN8IgNC//////////8DgzcDACABQQhqIQEMAQsLC2oCA\n    n8BfiAAIAApAwAiA0L//////////wODNwMAQQghAQNAIANCOochAyABQegARgRAIAAgACkDaCADfDcDaAUgACABaiICIA\n    IpAwAgA3wiA0L//////////wODNwMAIAFBCGohAQwBCwsLWQEBfyMAQYADayIEJAAgBCADEF4gBBBAIARBgAFqIAEQXiA\n    EQYACaiACEF4gBEGAAWogBBAPIARBgAJqIAQQDyAAIARBgAFqIARBgAJqEJEBIARBgANqJAALWQECfyMAQUBqIgEkAAJA\n    IAAQhAENACABQQEQigEgAEGAAWoiAiABEFkNACACQQAQNCAAIAIQSCAAEBIgAEFAayIAIAIQSCAAEBIgAiABEKUBCyABQ\n    UBrJAALVwEBfyMAQbABayICJAAgATQCOCAANAI4fkKAgIAQWQRAIAAQEgsgAkEIaiAAIAEQCCACQfgAaiACQQhqEAUgAC\n    ACQfgAahBrIABBAjYCOCACQbABaiQAC08BAn8jAEFAaiIDJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgA\n    gAyABEIsBIAAgAxClASADIAIQiwEgAxClASADQUBrJAALWQECfyMAQYABayIBJAACQCAAEIgBDQAgARBQIABBgAJqIgIg\n    ARB7DQAgAhBAIAAgAhAPIAAQqwEgAEGAAWoiACACEA8gABCrASACIAEQkAELIAFBgAFqJAALSwEBfyMAQUBqIgEkACAAQ\n    TgQciIAQQE2AjggAUEBEIoBIABBQGsgAUHAABBnGiAAQYABakE4EHIaIABBuAFqQQE2AgAgAUFAayQAC0sBAn8jAEHwAG\n    siASQAIAAQd0UEQCABQaCnwAAQXyABQThqIAAQgwEgASABQThqEGIgARBEIAFBOGogARA1IQILIAFB8ABqJAAgAgtPAQF\n    /IwBBgAFrIgIkACAAIAEQhQEgABADIAJByABqQdikwAAQXyACQQhqIAJByABqEIsBIAAgARBIIAAgAkEIahB4IAAQEiAC\n    QYABaiQAC0kBAn8DQCABQThGRQRAIAAgAWoiAiACKQMAQgGGNwMAIAFBCGohAQwBCwsgACAAKAI4QQF0IgE2AjggAUGAg\n    IAQTgRAIAAQEgsLQgIBfwJ+QQAgAmusIQQDQCADQThHBEAgACADaiICIAIpAwAiBSABIANqKQMAhSAEgyAFhTcDACADQQ\n    hqIQMMAQsLC0YBAn8jAEFAaiIBJAAgAEE4EHIiAEEBNgI4IABBQGtBOBByIABB+ABqQQE2AgAgAUEBEIoBIAAgARClARC\n    yASABQUBrJAALTgEBfyMAQYAEayIBJAAgABAvIAEQLyABQYACahAvIABBgAJqIAFBgAIQZxogAEGABGogAUGAAmpBgAIQ\n    ZxogAEEANgKABiABQYAEaiQAC0sBAX8jAEFAaiICJAACQCAAKAI4IAFsQYCAgBBOBEAgAiABEIoBIAAgAhBIDAELIAAgA\n    RAoGiAAIAAoAjggAWw2AjgLIAJBQGskAAtKAAJ/IAFBgIDEAEcEQEEBIAAoAhggASAAQRxqKAIAKAIQEQMADQEaCyACRQ\n    RAQQAPCyAAKAIYIAJBACAAQRxqKAIAKAIMEQUACwtCAQF/IwBBQGoiAiQAIAJBCGpBgIDAABBfIAEgAkEIahBrIAEQRCA\n    AIAEQayAAQQMQKBogABBEIAAQKSACQUBrJAALSQECfyMAQcABayIBJAAgASAAEF4gAUGAAWogABCFASAAIABBQGsiAhCl\n    ASAAEEEgAiABQYABahClASAAIAEQlQEgAUHAAWokAAtIAQF/IwBB4AFrIgEkACABQeihwAAQXyABQThqIAAgARAIIAFBq\n    AFqIAFBOGoQBSAAIAFBqAFqEGsgAEECNgI4IAFB4AFqJAALPgEBfyABQTpuIQIgAUGVA00EQCAAIAJBA3RqKQMAQgEgAU\n    H//wNxQTpwrYaDQgBVDwsgAkEHQdSdwAAQPAALQAIBfwF+IwBBgAFrIgEkACABQQhqIAAQhQEgAUEIahASIAFByABqIAF\n    BCGoQgwEgASkDSCABQYABaiQAQgKBpws8AQF/IwBBgAFrIgIkACACIAAQhQEgAkFAayABEIUBIAIQEiACQUBrEBIgAiAC\n    QUBrEDUgAkGAAWokAEULPAIBfwF+A38gAUE4RgR/IAJCf3xCgICAgICAgIAEg0I6iKcFIAAgAWopAwAgAoQhAiABQQhqI\n    QEMAQsLC0cBAX8jAEEgayIDJAAgA0EUakEANgIAIANB9KrAADYCECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2Ag\n    AgAyACEHAACzkBAX8jAEFAaiICJAAgAiAAEIUBIAIQByABBEAgASACEKUBCyACEAMgAiAAEEggAhAsIAJBQGskAAs6AQF\n    /IABBOBByIQADQCACQTBGRQRAIABBCBAtIAAgACkDACABIAJqMQAAfDcDACACQQFqIQIMAQsLCzQBAX8gAEE4EHIiAEEB\n    NgI4IABBQGtBOBByIABB+ABqQQE2AgAgACABEKUBIAFBQGsQpQELMAEBfyAAQTgQciEAA0AgAkE4RwRAIAAgAmogASACa\n    ikDADcDACACQQhqIQIMAQsLCz8BAX8jAEGAAmsiASQAIAAQUSABEG4gACABEJIBIABBgAJqEK0BIABBgARqEK0BIABBAT\n    YCgAYgAUGAAmokAAswAQJ/A0AgAkE4RwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLMAECfwNAIAJ\n    BOEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLCzABAn8DQCACQThHBEAgACACaiIDIAEgAmopAwAg\n    AykDAH03AwAgAkEIaiECDAELCwsxAQJ/A0AgAkHwAEcEQCAAIAJqIgMgAykDACABIAJqKQMAfTcDACACQQhqIQIMAQsLC\n    zEBAn8DQCACQfAARwRAIAAgAmoiAyADKQMAIAEgAmopAwB8NwMAIAJBCGohAgwBCwsLOQECfyMAQYABayIBJAAgASAAQY\n    ABaiICEF4gAiAAEJABIAEQVSAAIAEQkAEgABCsASABQYABaiQACzMBAX8gAgRAIAAhAwNAIAMgAS0AADoAACABQQFqIQE\n    gA0EBaiEDIAJBf2oiAg0ACwsgAAtIAQN/IwBBEGsiASQAIAAoAgwhAyAAKAIIIgJFBEBB9KrAAEErQaCrwAAQWwALIAEg\n    AzYCCCABIAA2AgQgASACNgIAIAEQcQALMgEBfyAAQgE3AwBBCCEBA0AgAUE4RkUEQCAAIAFqQgA3AwAgAUEIaiEBDAELC\n    yAAEFYLNwAgABBRIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahCSASAAIAEoAoAGNgKABgsoAQF/A0AgAk\n    E4RwRAIAAgAmogASACaikDADcDACACQQhqIQIMAQsLCzMAIAAgARCSASAAQYACaiABQYACahCSASAAQYAEaiABQYAEahC\n    SASAAIAEoAoAGNgKABgsoACAAIAEgAhB5IABBQGsgAUFAayACEHkgAEGAAWogAUGAAWogAhB5Cy4BAX8jAEGAAWsiASQA\n    IAAQLyABEFAgACABEJABIABBgAFqEKkBIAFBgAFqJAALLQAgACABIAIQjwEgAEGAAWogAUGAAWogAhCPASAAQYACaiABQ\n    YACaiACEI8BCzQBAX8jAEEQayICJAAgAiABNgIMIAIgADYCCCACQaSowAA2AgQgAkH0qsAANgIAIAIQaAALPgEBfyMAQR\n    BrIgEkACABQQhqIABBCGooAgA2AgAgASAAKQIANwMAIAEoAgAiAEEUaigCABogACgCBBoQMwALKQEBfyABBEAgACECA0A\n    gAkEAOgAAIAJBAWohAiABQX9qIgENAAsLIAALKwEBfyMAQcABayICJAAgAhBLIAIgARB/IAIQpgEgACACEAwgAkHAAWok\n    AAsiAQF/A0AgAUE4RwRAIAAgAWpCADcDACABQQhqIQEMAQsLCycBAX8jAEFAaiICJAAgAkEIaiABEF0gACACQQhqEIsBI\n    AJBQGskAAsrACAAEFEgACABEJIBIABBgAJqIAIQkgEgAEGABGogAxCSASAAQQU2AoAGCyMBAX8jAEFAaiIBJAAgASAAEI\n    UBIAEQEiABEFogAUFAayQACykAIAAgARBhIAAgACgCOCABKAI4aiIBNgI4IAFBgICAEE4EQCAAEBILCyUAIAAgASACEE8\n    gAEEAIAJrIAAoAjgiACABKAI4c3EgAHM2AjgLIwADQCACBEAgACABLQAAED4gAkF/aiECIAFBAWohAQwBCwsLIgACQCAA\n    IAEQWUUNACAAQUBrIAFBQGsQWUUNAEEBDwtBAAskAAJAIABBfE0EQCAARQRAQQQhAAwCCyAAEAEiAA0BCwALIAALJwEBf\n    yMAQYABayICJAAgAiABEF4gAhA6IAAgAhCVASACQYABaiQACycAIAAgARCQASAAQYABaiABQYABahCQASAAQYACaiABQY\n    ACahCQAQslACAAIAEQpQEgAEFAayABQUBrEKUBIABBgAFqIAFBgAFqEKUBCyUBAX8jAEFAaiICJAAgAiABEIUBIAIQQSA\n    AIAIQeCACQUBrJAALKAEBfyMAQYACayICJAAgAiABEI4BIAIQKyAAIAIQlgEgAkGAAmokAAsjAEGEAiACSQRAIAJBhAIg\n    AxA9AAsgACACNgIEIAAgATYCAAsiAQF/IwBB8ABrIgIkACACIAEQMCAAIAIQBSACQfAAaiQACxwAAkAgABB3RQ0AIABBg\n    AFqEHdFDQBBAQ8LQQALHwAgAEE4EHIiAEEBNgI4IAAgARBrIAAgASgCODYCOAseAAJAIAAQhwFFDQAgAEGAAWoQhwFFDQ\n    BBAQ8LQQALGwACQCAAEHdFDQAgAEFAaxB3RQ0AQQEPC0EACx4AAkAgABCHAUUNACAAQYACahCHAUUNAEEBDwtBAAsaAQF\n    /IAAQWCIBIABBQGsQWCABcyAAEHdxcwsaACAAQTgQciIAQQE2AjggACABEJ0BIAAQVgsZACAAQTgQciIAQQE2AjggACAB\n    EGsgABBWCxcAIAAQRCAAKAIAQX8gAUEfcXRBf3NxCxoAIAAgARBfIAAgAhAkIAAgAhBjIAAgAhAkCxwAIAAQLyAAIAEQk\n    AEgAEGAAWogAUGAAWoQkAELGAAgACABIAIQeSAAQUBrIAFBQGsgAhB5CxYAIAAgARClASAAQUBrIAFBQGsQpQELGAAgAB\n    AvIAAgARCQASAAQYABaiACEJABCxgAIAAgARCQASAAQYABaiABQYABahCQAQsZACAAEK4BIABBgAJqELYBIABBgARqEK4\n    BCxcAIAAQsgEgAEFAaxBpIABBgAFqELIBCxQAIAAgARB4IABBQGsgAUFAaxB4CxgAIAAgARCVASAAQYABaiABQYABahCV\n    AQsYACAAEKYBIABBgAFqIgAQpgEgACABEA8LGQAgABCpASAAQYABahCwASAAQYACahCpAQsZACAAEKwBIABBgAJqEKwBI\n    ABBgARqEKwBCxkAIAAQqgEgAEGAAmoQqgEgAEGABGoQqgELFgAgABAvIAAgARCQASAAQYABahCpAQsWACAAQYABaiIAEK\n    gBIAAQOiAAEKgBCxQAIAAQRCAAIAApAwAgAax8NwMACxQAIAAQRCAAIAApAwAgAax9NwMACxEAIAAgARBSIABBQGsgARB\n    SCxEAIAAgARBIIABBQGsgARBICxQAIAAgARCQASAAQYABaiACEJABCxIAIAAgARAPIABBgAFqIAEQDwsUACAAIAEQoAEg\n    AEGAAWogARCgAQsRACAAKAIEBEAgACgCABAJCwsSACAAIAEQayAAIAEoAjg2AjgLDwAgAEFAayIAEEEgABBECw0AIAAQT\n    iAAQUBrEE4LDQAgABBEIABBQGsQRAsPACAAELIBIABBQGsQsgELEAAgABCrASAAQYABahCrAQsNACAAEBIgAEFAaxASCx\n    AAIAAQqAEgAEGAAWoQqAELEAAgABCpASAAQYABahCpAQsPACAAQYABahA6IAAQrAELEAAgABCnASAAQYABahCnAQsOACA\n    AEGkgAEFAaxCyAQsQACAAIAI2AgQgACABNgIACw0AIAAQdCAAQQE2AjgLDAAgABBBIAAgARB4CwwAIAAgARBrIAAQVgsN\n    ACAAEDogACABEJUBCwsAIAAQOiAAEKwBCwwAQunQotvMouq7RgsDAAELAwABCwv+PZoCAEGCgMAACwcBAAAAAQI0AEG4g\n    MAAC9sBuF8jku11BwFjT+D5WE+pA2dPnKtLeD0Akew9ffXy9AMD1g8fDSwgAK1vjPCZwa4A8DtNkAEAAADzStxtEor3AI\n    uwH1tTsFYDgvLFYx+X7AAysL/NHtseAkehVLifHyMCQHo6ogw4sQGz4sMPAAAAAHNyYy9ibHMxMjM4MS9wYWlyLnJzqAA\n    QABQAAAAHAQAACQAAAKgAEAAUAAAADAEAAA0AAACoABAAFAAAABEBAAANAAAAAAAAAAEAAAD///8Dv/+W/78AaQM7VYAd\n    moCAAefMIPV1pkwBp+1zAEGogsAACyz+//7///8BAosAgILYBPYB4Y1oiW++kwLOdqvfPagdAMZpulHOdt8Dy1nGFwBB4\n    ILAAAuRAZABEAATAAAA0AEAABgAAACQARAAEwAAANQBAAARAAAAkAEQABMAAADWAQAAHAAAAHNyYy9ibHMxMjM4MS9lY3\n    AucnMAkAEQABMAAAAZBQAADQAAAJABEAATAAAAGwUAAAkAAACQARAAEwAAABwFAAARAAAAkAEQABMAAAAfBQAAHAAAAAA\n    AAAABAAEAAAABAjQAQaCEwAALuSCQARAAEwAAAGcEAAARAAAAkAEQABMAAABsBAAADQAAAJABEAATAAAAbgQAABUAAACQ\n    ARAAEwAAAHAEAAAgAAAAHUxYLQgo9ADXXz44aOPbAInJGoj9roEBomOjmrkPTgGY6rCCSW3JAoBOWs9QOu4AimlEAQAAA\n    ADgKxeO6UjMAXSpOluMVsgAolXvNe/8FADngsIBPcnDA8EWIDvuPnUAusRiAAwgWgDRCCkuAQAAALgh6L1iEMUA3/4Vlz\n    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\n    GZYzb76G2KA7ycH+3PFk8AK2qmngEAAABhdHRlbXB0IHRvIGRpdmlkZSBieSB6ZXJvAAAAbxEQABIAAAB8AQAAFAAAAAA\n    AAABhdHRlbXB0IHRvIGRpdmlkZSB3aXRoIG92ZXJmbG93c3JjL2JsczEyMzgxL2ZwLnJzAAAAbxEQABIAAAASAgAADQAA\n    AG8REAASAAAAHgIAACYAAABvERAAEgAAAB4CAAAjAAAAbxEQABIAAAAkAgAAFwAAAG8REAASAAAAJAIAABQAAAAAAAAAq\n    qr//////gHu//9UrP//AupBYg9rDyoBw5z9ShTOEwJLd2TXrEtDAu3pxpKm+V8Cox4RoAEAAABAEhAAFAAAABUBAAATAA\n    AAQBIQABQAAAAeAQAAGAAAAEASEAAUAAAAJAEAABwAAABzcmMvYmxzMTIzODEvZWNwMi5ycwAAAAAEAEGQpcAAC7wGQBI\n    QABQAAADmAgAACQAAAEASEAAUAAAA7gIAAA0AAABAEhAAFAAAAP4CAAAhAAAAuL0hwchWgAD1+24BqskAA7pwFz2uR7YA\n    RNEK7ADpUwN65MZREMUtA0kBgkmkwiMALyuqJAAAAAB+KwRdBX2sAflVF+WERDwDNJME9ce9GwJp12rYgmRCA9BrWWVPJ\n    4gA6DRrH9hnnAAFtgI+AQAAAAEouAiGVJMBeKIo6w5zsgIjyRINFpWmAQq1nU73MqoCm/2tGjUu2gJxczJjhFufAHdSXc\n    4AAAAAvnlf8F8HqQJqaAc710nDAfOzmulytSoB0pm8jp0W+gEoPsuZi8IrAKw0qwwzzakDAkpsYAAAAACrqv/////+Ae7\n    //1Ss//8C6kFiD2sPKgHDnP1KFM4TAkt3ZNesS0MC7enGkqb5XwKjHhGgAQAAAAgUEAALAAAAjwEAAA8AAAAIFBAACwAA\n    AKcBAAATAAAACBQQAAsAAACqAQAADQAAAHNyYy9obWFjLnJzADQUEAAgAAAAVBQQABIAAAADAAAAAAAAAAEAAAAEAAAAa\n    W5kZXggb3V0IG9mIGJvdW5kczogdGhlIGxlbiBpcyAgYnV0IHRoZSBpbmRleCBpcyAwMDAxMDIwMzA0MDUwNjA3MDgwOT\n    EwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ\n    0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5\n    ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OQAAQBUQABAAAABQFRAAIgAAAHJhbmdlIGVuZCBpb\n    mRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIG\n    EgYE5vbmVgIHZhbHVlALAVEAAcAAAA7gEAAB4AAABsaWJyYXJ5L3N0ZC9zcmMvcGFuaWNraW5nLnJzAEGIrMAACwEBAEH\n    IrMAACwEBAEGIrcAACwEBAEHIrcAACwEBAEGIrsAACwEBAEHIrsAACwEBAEGIr8AACwEBAEHIr8AACwEBAEGIsMAACwEB\n    AEHIsMAACwEBAEGIscAACwEBAEHIscAACwEBAEGIssAACwEBAEHIssAACwEBAEGIs8AACwEBAEHIs8AACwEBAEGItMAAC\n    wEBAEHItMAACwEBAEGItcAACwEBAEHItcAACwEBAEGItsAACwEBAEHItsAACwEBAEGIt8AACwEBAEHIt8AACwEBAEGIuM\n    AACwEBAEHIuMAACwEBAEGIucAACwEBAEHIucAACwEBAEGIusAACwEBAEHIusAACwEBAEGIu8AACwEBAEHIu8AACwEBAEG\n    IvMAACwEBAEHIvMAACwEBAEGIvcAACwEBAEHIvcAACwEBAEGIvsAACwEBAEHIvsAACwEBAEGIv8AACwEBAEHIv8AACwEB\n    AEGIwMAACwEBAEHIwMAACwEBAEGIwcAACwEBAEHIwcAACwEBAEGIwsAACwEBAEHIwsAACwEBAEGIw8AACwEBAEHIw8AAC\n    wEBAEGIxMAACwEBAEHIxMAACwEBAEGIxcAACwEBAEHIxcAACwEBAEGIxsAACwEBAEHIxsAACwEBAEGIx8AACwEBAEHIx8\n    AACwEBAEGIyMAACwEBAEHIyMAACwEBAEGIycAACwEBAEHIycAACwEBAEGIysAACwEBAEHIysAACwEBAEGIy8AACwEBAEH\n    Iy8AACwEBAEGIzMAACwEBAEHIzMAACwEBAEGIzcAACwEBAEHIzcAACwEBAEGIzsAACwEBAEHIzsAACwEBAEGIz8AACwEB\n    AEHIz8AACwEBAEGI0MAACwEBAEHI0MAACwEBAEGI0cAACwEBAEHI0cAACwEBAEGI0sAACwEBAEHI0sAACwEBAEGI08AAC\n    wEBAEHI08AACwEBAEGI1MAACwEBAEHI1MAACwEBAEGI1cAACwEBAEHI1cAACwEBAEGI1sAACwEBAEHI1sAACwEBAEGI18\n    AACwEBAEHI18AACwEBAEGI2MAACwEBAEHI2MAACwEBAEGI2cAACwEBAEHI2cAACwEBAEGI2sAACwEBAEHI2sAACwEBAEG\n    I28AACwEBAEHI28AACwEBAEGI3MAACwEBAEHI3MAACwEBAEGI3cAACwEBAEHI3cAACwEBAEGI3sAACwEBAEHI3sAACwEB\n    AEGI38AACwEBAEHI38AACwEBAEGI4MAACwEBAEHI4MAACwEBAEGI4cAACwEBAEHI4cAACwEBAEGI4sAACwEBAEHI4sAAC\n    wEBAEGI48AACwEBAEHI48AACwEBAEGI5MAACwEBAEHI5MAACwEBAEGI5cAACwEBAEHI5cAACwEBAEGI5sAACwEBAEHI5s\n    AACwEBAEGI58AACwEBAEHI58AACwEBAEGI6MAACwEBAEHI6MAACwEBAEGI6cAACwEBAEHI6cAACwEBAEGI6sAACwEBAEH\n    I6sAACwEBAEGI68AACwEBAEHI68AACwEBAEGI7MAACwEBAEHI7MAACwEBAEGI7cAACwEBAEHI7cAACwEBAEGI7sAACwEB\n    AEHI7sAACwEBAEGI78AACwEBAEHI78AACwEBAEGI8MAACwEBAEHI8MAACwEBAEGI8cAACwEBAEHI8cAACwEBAEGI8sAAC\n    wEBAEHI8sAACwEBAEGI88AACwEBAEHI88AACwEBAEGI9MAACwEBAEHI9MAACwEBAEGI9cAACwEBAEHI9cAACwEBAEGI9s\n    AACwEBAEHI9sAACwEBAEGI98AACwEBAEHI98AACwEBAEGI+MAACwEBAEHI+MAACwEBAEGI+cAACwEBAEHI+cAACwEBAEG\n    I+sAACwEBAEHI+sAACwEBAEGI+8AACwEBAEHI+8AACwEBAEGI/MAACwEBAEHI/MAACwEBAEGI/cAACwEBAEHI/cAACwEB\n    AEGI/sAACwEBAEHI/sAACwEBAEGI/8AACwEBAEHI/8AACwEBAEGIgMEACwEBAEHIgMEACwEBAEGIgcEACwEBAEHIgcEAC\n    wEBAEGIgsEACwEBAEHIgsEACwEBAEGIg8EACwEBAEHIg8EACwEBAEGIhMEACwEBAEHIhMEACwEBAEGIhcEACwEBAEHIhc\n    EACwEBAEGIhsEACwEBAEHIhsEACwEBAEGIh8EACwEBAEHIh8EACwEBAEGIiMEACwEBAEHIiMEACwEBAEGIicEACwEBAEH\n    IicEACwEBAEGIisEACwEBAEHIisEACwEBAEGIi8EACwEBAEHIi8EACwEBAEGIjMEACwEBAEHIjMEACwEBAEGIjcEACwEB\n    AEHIjcEACwEBAEGIjsEACwEBAEHIjsEACwEBAEGIj8EACwEBAEHIj8EACwEBAEGIkMEACwEBAEHIkMEACwEBAEGIkcEAC\n    wEBAEHIkcEACwEBAEGIksEACwEBAEHIksEACwEBAEGIk8EACwEBAEHIk8EACwEBAEGIlMEACwEBAEHIlMEACwEBAEGIlc\n    EACwEBAEHIlcEACwEBAEGIlsEACwEBAEHIlsEACwEBAEGIl8EACwEBAEHIl8EACwEBAEGImMEACwEBAEHImMEACwEBAEG\n    ImcEACwEBAEHImcEACwEBAEGImsEACwEBAEHImsEACwEBAEGIm8EACwEBAEHIm8EACwEBAEGInMEACwEBAEHInMEACwEB\n    AEGIncEACwEBAEHIncEACwEBAEGInsEACwEBAEHInsEACwEBAEGIn8EACwEBAEHIn8EACwEBAEGIoMEACwEBAEHIoMEAC\n    wEBAEGIocEACwEBAEHIocEACwEBAEGIosEACwEBAEHIosEACwEBAEGIo8EACwEBAEHIo8EACwEBAEGIpMEACwEBAEHIpM\n    EACwEBAEGIpcEACwEBAEHIpcEACwEBAEGIpsEACwEBAEHIpsEACwEBAEGIp8EACwEBAEHIp8EACwEBAEGIqMEACwEBAEH\n    IqMEACwEBAEGIqcEACwEBAEHIqcEACwEBAEGIqsEACwEBAEHIqsEACwEBAEGIq8EACwEBAEHIq8EACwEBAEGIrMEACwEB\n    AEHIrMEACwEBAEGIrcEACwEBAEHIrcEACwEBAEGIrsEACwEBAEHIrsEACwEBAEGIr8EACwEBAEHIr8EACwEBAEGIsMEAC\n    wEBAEHIsMEACwEBAEGIscEACwEBAEHIscEACwEBAEGIssEACwEBAEHIssEACwEBAEGIs8EACwEBAEHIs8EACwEBAEGItM\n    EACwEBAEHItMEACwEBAEGItcEACwEBAEHItcEACwEBAHsJcHJvZHVjZXJzAghsYW5ndWFnZQEEUnVzdAAMcHJvY2Vzc2V\n    kLWJ5AwVydXN0Yx0xLjQ5LjAgKGUxODg0YThlMyAyMDIwLTEyLTI5KQZ3YWxydXMGMC4xOC4wDHdhc20tYmluZGdlbhIw\n    LjIuNzAgKGI2MzU1YzI3MCk=\n".replace(/[^0-9a-zA-Z/+]/g,""),At=pt.J(mt);let yt=null;function bt(e,t){const r=t(1*e.length);return(null!==yt&&yt.buffer===gt.memory.buffer||(yt=new Uint8Array(gt.memory.buffer)),yt).set(e,r/1),[r,e.length]}const vt=async function e(){const{instance:t,module:r}=await async function(e,t){if("function"===typeof Response&&e instanceof Response){const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,t)}{const r=await WebAssembly.instantiate(e,t);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}(At,{});return gt=t.exports,e.__wbindgen_wasm_module=r,gt};let wt;async function xt(e,t,r){if(!wt){if(await vt(),0!==gt.bls_init())throw new Error("Cannot initialize BLS");wt=(e,t,r)=>0===function(e,t,r){const[a,n]=bt(e,gt.__wbindgen_malloc),[i,o]=bt(t,gt.__wbindgen_malloc),[s,c]=bt(r,gt.__wbindgen_malloc);return gt.bls_verify(a,n,i,o,s,c)}(t,r,e)}return wt(e,t,r)}class kt extends w{constructor(){super("Cannot lookup unverified certificate. Call 'verify()' first.")}}function Et(e,t){if(e.byteLength!==t.byteLength)return!1;const r=new Uint8Array(e),a=new Uint8Array(t);for(let n=0;n<r.length;n++)if(r[n]!==a[n])return!1;return!0}class qt{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dt();this._agent=t,this.verified=!1,this._rootKey=null,this.cert=rt(new Uint8Array(e.certificate))}lookup(e){return this.checkState(),Ct(e,this.cert.tree)}async verify(){const e=await It(this.cert.tree),t=await this._checkDelegation(this.cert.delegation),r=this.cert.signature,a=function(e){const t=Bt.byteLength+96;if(e.byteLength!==t)throw new TypeError(`BLS DER-encoded public key must be ${t} bytes long`);const r=e.slice(0,Bt.byteLength);if(!Et(r,Bt))throw new TypeError(`BLS DER-encoded public key is invalid. Expect the following prefix: ${Bt}, but get ${r}`);return e.slice(Bt.byteLength)}(t),n=Te(jt("ic-state-root"),e),i=await xt(new Uint8Array(a),new Uint8Array(r),new Uint8Array(n));return this.verified=i,i}checkState(){if(!this.verified)throw new kt}async _checkDelegation(e){if(!e){if(!this._rootKey){if(this._agent.rootKey)return this._rootKey=this._agent.rootKey,this._rootKey;throw new Error("Agent does not have a rootKey. Do you need to call 'fetchRootKey'?")}return this._rootKey}const t=new qt(e,this._agent);if(!await t.verify())throw new Error("fail to verify delegation certificate");const r=t.lookup(["subnet",e.subnet_id,"public_key"]);if(!r)throw new Error(`Could not find subnet key for subnet 0x${Pe(e.subnet_id)}`);return r}}const Bt=Fe("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100");async function It(e){switch(e[0]){case 0:return De(jt("ic-hashtree-empty"));case 4:return e[1];case 3:return De(Te(jt("ic-hashtree-leaf"),e[1]));case 2:return De(Te(jt("ic-hashtree-labeled"),e[1],await It(e[2])));case 1:return De(Te(jt("ic-hashtree-fork"),await It(e[1]),await It(e[2])));default:throw new Error("unreachable")}}function jt(e){return Te(new Uint8Array([e.length]),(new TextEncoder).encode(e))}function Ct(e,t){if(0===e.length)return 3===t[0]?new Uint8Array(t[1]).buffer:void 0;const r=function(e,t){if(0===t.length)return;for(const r of t)if(2===r[0]){if(Et(e,r[1]))return r[2]}}("string"===typeof e[0]?(new TextEncoder).encode(e[0]):e[0],_t(t));return r?Ct(e.slice(1),r):void 0}function _t(e){switch(e[0]){case 0:return[];case 1:return _t(e[1]).concat(_t(e[2]));default:return[e]}}async function St(e,t,r,a){const n=[(new TextEncoder).encode("request_status"),r],i=await e.readState(t,{paths:[n]}),o=new qt(i,e);if(!await o.verify())throw new Error("Fail to verify certificate");const s=o.lookup([...n,(new TextEncoder).encode("status")]);let c;switch(c="undefined"===typeof s?ot.Unknown:(new TextDecoder).decode(s),c){case ot.Replied:return o.lookup([...n,"reply"]);case ot.Received:case ot.Unknown:case ot.Processing:return await a(t,r,c),St(e,t,r,a);case ot.Rejected:{const e=new Uint8Array(o.lookup([...n,"reject_code"]))[0],t=(new TextDecoder).decode(o.lookup([...n,"reject_message"]));throw new Error(`Call was rejected:\n  Request ID: ${Pe(r)}\n  Reject code: ${e}\n  Reject text: ${t}\n`)}case ot.Done:throw new Error(`Call was marked as done but we never saw the reply:\n  Request ID: ${Pe(r)}\n`)}throw new Error("unreachable")}class zt extends w{constructor(e,t,r,a){super(["Call failed:",`  Canister: ${e.toText()}`,`  Method: ${t} (${r})`,...Object.getOwnPropertyNames(a).map((e=>`  "${e}": ${JSON.stringify(a[e])}`))].join("\n")),this.canisterId=e,this.methodName=t,this.type=r,this.props=a}}class Mt extends zt{constructor(e,t,r){var a;super(e,t,"query",{Status:r.status,Code:null!==(a=d[r.reject_code])&&void 0!==a?a:`Unknown Code "${r.reject_code}"`,Message:r.reject_message}),this.result=r}}class Qt extends zt{constructor(e,t,r,a){super(e,t,"update",{"Request ID":Pe(r),"HTTP status code":a.status.toString(),"HTTP status text":a.statusText}),this.requestId=r,this.response=a}}var Nt;!function(e){e.Install="install",e.Reinstall="reinstall",e.Upgrade="upgrade"}(Nt||(Nt={}));const Rt=Symbol.for("ic-agent-metadata");class Tt{constructor(e){this[Rt]=Object.freeze(e)}static agentOf(e){return e[Rt].config.agent}static interfaceOf(e){return e[Rt].service}static canisterIdOf(e){return v.from(e[Rt].config.canisterId)}static async install(e,t){const r=void 0===e.mode?Nt.Install:e.mode,a=e.arg?[...new Uint8Array(e.arg)]:[],n=[...new Uint8Array(e.module)],i="string"===typeof t.canisterId?v.fromText(t.canisterId):t.canisterId;await ft(t).install_code({mode:{[r]:null},arg:a,wasm_module:n,canister_id:i})}static async createCanister(e){const{canister_id:t}=await ft(e||{}).provisional_create_canister_with_cycles({amount:[],settings:[]});return t}static async createAndInstallCanister(e,t,r){const a=await this.createCanister(r);return await this.install(Object.assign({},t),Object.assign(Object.assign({},r),{canisterId:a})),this.createActor(e,Object.assign(Object.assign({},r),{canisterId:a}))}static createActorClass(e){const t=e({IDL:a});return class extends Tt{constructor(e){const r="string"===typeof e.canisterId?v.fromText(e.canisterId):e.canisterId;super({config:Object.assign(Object.assign(Object.assign({},Ot),e),{canisterId:r}),service:t});for(const[a,n]of t._fields)this[a]=Ft(this,a,n)}}}static createActor(e,t){return new(this.createActorClass(e))(t)}}function Pt(e,t){const r=le(e,f.Buffer.from(t));switch(r.length){case 0:return;case 1:return r[0];default:return r}}const Ot={pollingStrategyFactory:function(){return function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return async(e,r,a)=>{for(const n of t)await n(e,r,a)}}((e=function(){let e=!0;return async()=>!!e&&(e=!1,!0)}(),t=1e3,async(r,a,n)=>{if(await e(r,a,n))return new Promise((e=>setTimeout(e,t)))}),function(e,t){let r=e;return()=>new Promise((e=>setTimeout((()=>{r*=t,e()}),r)))}(1e3,1.2),function(e){const t=Date.now()+e;return async(r,a,n)=>{if(Date.now()>t)throw new Error(`Request timed out after ${e} msec:\n  Request ID: ${Pe(a)}\n  Request status: ${n}\n`)}}(3e5));var e,t}};function Ft(e,t,r){let a;a=r.annotations.includes("query")?async function(a){for(var n,i,o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];const l=(a=Object.assign(Object.assign({},a),null===(i=(n=e[Rt].config).queryTransform)||void 0===i?void 0:i.call(n,t,s,Object.assign(Object.assign({},e[Rt].config),a)))).agent||e[Rt].config.agent||dt(),u=v.from(a.canisterId||e[Rt].config.canisterId),d=ce(r.argTypes,s),h=await l.query(u,{methodName:t,arg:d});switch(h.status){case"rejected":throw new Mt(u,t,h);case"replied":return Pt(r.retTypes,h.reply.arg)}}:async function(a){for(var n,i,o=arguments.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=arguments[c];const l=(a=Object.assign(Object.assign({},a),null===(i=(n=e[Rt].config).callTransform)||void 0===i?void 0:i.call(n,t,s,Object.assign(Object.assign({},e[Rt].config),a)))).agent||e[Rt].config.agent||dt(),{canisterId:u,effectiveCanisterId:d,pollingStrategyFactory:h}=Object.assign(Object.assign(Object.assign({},Ot),e[Rt].config),a),f=v.from(u),p=void 0!==d?v.from(d):f,g=ce(r.argTypes,s),{requestId:m,response:A}=await l.call(f,{methodName:t,arg:g,effectiveCanisterId:p});if(!A.ok)throw new Qt(f,t,m,A);const y=h(),b=await St(l,p,m,y);if(void 0!==b)return Pt(r.retTypes,b);if(0!==r.retTypes.length)throw new Error(`Call was returned undefined, but type [${r.retTypes.join(",")}].`)};const n=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return a({},...t)};return n.withOptions=e=>function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return a(e,...r)},n}var Dt=r(3266);function Lt(e){var t;return new Uint8Array((null!==(t=e.match(/.{1,2}/g))&&void 0!==t?t:[]).map((e=>parseInt(e,16)))).buffer}function Gt(e){return new Uint8Array(e).reduce(((e,t)=>e+t.toString(16).padStart(2,"0")),"")}const Ut=e=>{if(e<=127)return 1;if(e<=255)return 2;if(e<=65535)return 3;if(e<=16777215)return 4;throw new Error("Length too long (> 4 bytes)")},Zt=(e,t,r)=>{if(r<=127)return e[t]=r,1;if(r<=255)return e[t]=129,e[t+1]=r,2;if(r<=65535)return e[t]=130,e[t+1]=r>>8,e[t+2]=r,3;if(r<=16777215)return e[t]=131,e[t+1]=r>>16,e[t+2]=r>>8,e[t+3]=r,4;throw new Error("Length too long (> 4 bytes)")},Vt=(e,t)=>{if(e[t]<128)return 1;if(128===e[t])throw new Error("Invalid length 0");if(129===e[t])return 2;if(130===e[t])return 3;if(131===e[t])return 4;throw new Error("Length too long (> 4 bytes)")},Ht=(Uint8Array.from([48,12,6,10,43,6,1,4,1,131,184,67,1,1]),Uint8Array.from([48,5,6,3,43,101,112]));Uint8Array.from([48,16,6,7,42,134,72,206,61,2,1,6,5,43,129,4,0,10]);const Wt=(e,t)=>{let r=0;const a=(e,t)=>{if(n[r++]!==e)throw new Error("Expected: "+t)},n=new Uint8Array(e);if(a(48,"sequence"),r+=Vt(n,r),!((e,t)=>{if(e.byteLength!==t.byteLength)return!1;const r=new Uint8Array(e),a=new Uint8Array(t);for(let n=0;n<r.length;n++)if(r[n]!==a[n])return!1;return!0})(n.slice(r,r+t.byteLength),t))throw new Error("Not the expected OID.");r+=t.byteLength,a(3,"bit string");const i=((e,t)=>{const r=Vt(e,t);if(1===r)return e[t];if(2===r)return e[t+1];if(3===r)return(e[t+1]<<8)+e[t+2];if(4===r)return(e[t+1]<<16)+(e[t+2]<<8)+e[t+3];throw new Error("Length too long (> 4 bytes)")})(n,r)-1;r+=Vt(n,r),a(0,"0 padding");const o=n.slice(r);if(i!==o.length)throw new Error(`DER payload mismatch: Expected length ${i} actual length ${o.length}`);return o};class Yt{constructor(e){this.rawKey=e,this.derKey=Yt.derEncode(e)}static from(e){return this.fromDer(e.toDer())}static fromRaw(e){return new Yt(e)}static fromDer(e){return new Yt(this.derDecode(e))}static derEncode(e){return function(e,t){const r=2+Ut(e.byteLength+1),a=t.byteLength+r+e.byteLength;let n=0;const i=new Uint8Array(1+Ut(a)+a);return i[n++]=48,n+=Zt(i,n,a),i.set(t,n),n+=t.byteLength,i[n++]=3,n+=Zt(i,n,e.byteLength+1),i[n++]=0,i.set(new Uint8Array(e),n),i}(e,Ht).buffer}static derDecode(e){const t=Wt(e,Ht);if(t.length!==this.RAW_KEY_LENGTH)throw new Error("An Ed25519 public key must be exactly 32bytes long");return t}toDer(){return this.derKey}toRaw(){return this.rawKey}}Yt.RAW_KEY_LENGTH=32;class Jt extends He{constructor(e,t){super(),this._privateKey=t,this._publicKey=Yt.from(e)}static generate(e){if(e&&32!==e.length)throw new Error("Ed25519 Seed needs to be 32 bytes long.");const{publicKey:t,secretKey:r}=void 0===e?Dt.sign.keyPair():Dt.sign.keyPair.fromSeed(e);return new this(Yt.fromRaw(t),r)}static fromParsedJson(e){const[t,r]=e;return new Jt(Yt.fromDer(Lt(t)),Lt(r))}static fromJSON(e){const t=JSON.parse(e);if(Array.isArray(t)){if("string"===typeof t[0]&&"string"===typeof t[1])return this.fromParsedJson([t[0],t[1]]);throw new Error("Deserialization error: JSON must have at least 2 items.")}throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(e)}`)}static fromKeyPair(e,t){return new Jt(Yt.fromRaw(e),t)}static fromSecretKey(e){const t=Dt.sign.keyPair.fromSecretKey(new Uint8Array(e));return Jt.fromKeyPair(t.publicKey,t.secretKey)}toJSON(){return[Gt(this._publicKey.toDer()),Gt(this._privateKey)]}getKeyPair(){return{secretKey:this._privateKey,publicKey:this._publicKey}}getPublicKey(){return this._publicKey}async sign(e){const t=new Uint8Array(e);return Dt.sign.detached(t,new Uint8Array(this._privateKey)).buffer}}r(8631);const $t=(new TextEncoder).encode("\x1aic-request-auth-delegation");(new TextEncoder).encode("\nic-request");function Kt(e){if("string"!==typeof e||e.length<64)throw new Error("Invalid public key.");return Lt(e)}class Xt{constructor(e,t,r){this.pubkey=e,this.expiration=t,this.targets=r}toCBOR(){return Ye.value.map(Object.assign({pubkey:Ye.value.bytes(this.pubkey),expiration:Ye.value.u64(this.expiration.toString(16),16)},this.targets&&{targets:Ye.value.array(this.targets.map((e=>Ye.value.bytes(e.toUint8Array()))))}))}toJSON(){return Object.assign({expiration:this.expiration.toString(16),pubkey:Gt(this.pubkey)},this.targets&&{targets:this.targets.map((e=>e.toHex()))})}}class er{constructor(e,t){this.delegations=e,this.publicKey=t}static async create(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date(Date.now()+9e5),a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};var n,i;const o=await async function(e,t,r,a){const n=new Xt(t.toDer(),BigInt(+r)*BigInt(1e6),a),i=new Uint8Array([...$t,...new Uint8Array(Ue(n))]);return{delegation:n,signature:await e.sign(i)}}(e,t,r,a.targets);return new er([...(null===(n=a.previous)||void 0===n?void 0:n.delegations)||[],o],(null===(i=a.previous)||void 0===i?void 0:i.publicKey)||e.getPublicKey().toDer())}static fromJSON(e){const{publicKey:t,delegations:r}="string"===typeof e?JSON.parse(e):e;if(!Array.isArray(r))throw new Error("Invalid delegations.");return new this(r.map((e=>{const{delegation:t,signature:r}=e,{pubkey:a,expiration:n,targets:i}=t;if(void 0!==i&&!Array.isArray(i))throw new Error("Invalid targets.");return{delegation:new Xt(Kt(a),BigInt(`0x${n}`),i&&i.map((e=>{if("string"!==typeof e)throw new Error("Invalid target.");return v.fromHex(e)}))),signature:Kt(r)}})),Kt(t))}static fromDelegations(e,t){return new this(e,t)}toJSON(){return{delegations:this.delegations.map((e=>{const{delegation:t,signature:r}=e,{targets:a}=t;return{delegation:Object.assign({expiration:t.expiration.toString(16),pubkey:Gt(t.pubkey)},a&&{targets:a.map((e=>e.toHex()))}),signature:Gt(r)}})),publicKey:Gt(this.publicKey)}}}var tr;!function(e){e[e.ECDSA_WITH_SHA256=-7]="ECDSA_WITH_SHA256"}(tr||(tr={}));var rr=r(1881),ar=r.n(rr),nr=r(8704),ir=r.n(nr),or=r(7418);const sr=r.n(or)()({strict:!0}),cr=Object.freeze({NotFound:0,Timeout:1,NetworkError:2});class lr extends Error{constructor(e,t){switch(super(e),t){case 408:this.errorType=cr.Timeout;break;case 500:this.errorType=cr.NotFound;break;default:this.errorType=cr.NetworkError}}}class ur{constructor(e,t){this.blockIndex=t,this.hash=e.transaction_identifier.hash;const r=e.metadata.timestamp.div(1e6).toNumber();this.timestamp=new Date(r);const a=e.operations;a.length>=1?(this.type=a[0].type,this.status=a[0].status,this.account1Address=a[0].account.address,this.amount=new(ir())(a[0].amount.value),"TRANSACTION"!==a[0].type&&"BURN"!==a[0].type||this.amount.isZero()||(this.amount=this.amount.negated())):(this.type="",this.status="",this.account1Address="",this.amount=new(ir())(0)),a.length>=2&&"TRANSACTION"===a[1].type?this.account2Address=a[1].account.address:this.account2Address="",a.length>=3&&"FEE"===a[2].type?this.fee=new(ir())(-a[2].amount.value):this.fee=new(ir())(0),this.memo=new(ir())(e.metadata.memo)}}var dr=r(918).Buffer;const hr="ryjl3-tyaaa-aaaaa-aaaba-cai",fr="rkp4c-7iaaa-aaaaa-aaaca-cai",pr=new class{constructor(){this.axios=ar().create({baseURL:"https://rosetta-api.internetcomputer.org/",method:"post",transformRequest:e=>sr.stringify(e),transformResponse:e=>sr.parse(e),headers:{"Content-Type":"application/json;charset=utf-8"}}),this.networkIdentifier=this.networksList().then((e=>e.network_identifiers.find((e=>"Internet Computer"===e.blockchain))))}async getAccountBalance(e){try{const t=await this.accountBalanceByAddress(e);return new(ir())(t.balances[0].value)}catch(r){var t;return new lr(r.message,ar().isAxiosError(r)?null===r||void 0===r||null===(t=r.response)||void 0===t?void 0:t.status:void 0)}}async getLastBlockIndex(){try{return(await this.networkStatus()).current_block_identifier.index}catch(t){var e;return new lr(t.message,ar().isAxiosError(t)?null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.status:void 0)}}async getTransaction(e){try{const t=await this.transactionsByHash(e);return 0===t.transactions.length?new lr("Transaction not found.",500):new ur(t.transactions[0].transaction,t.transactions[0].block_identifier.index)}catch(r){var t;return new lr(r.message,ar().isAxiosError(r)?null===r||void 0===r||null===(t=r.response)||void 0===t?void 0:t.status:void 0)}}async getTransactions(e,t,r){try{let a;if(t)a=t;else{a=(await this.networkStatus()).current_block_identifier.index}r&&(a=Math.max(a-r,-1));const n=Math.min(e,a+1),i=[];for(let e=0;e<n;e++)i.push(await this.getTransactionByBlock(a-e));return i}catch(n){var a;return new lr(n.message,ar().isAxiosError(n)?null===n||void 0===n||null===(a=n.response)||void 0===a?void 0:a.status:void 0)}}async getTransactionsByAccount(e){try{const t=await this.transactionsByAccount(e);return(await Promise.all(t.transactions.map((e=>new ur(e.transaction,e.block_identifier.index))))).reverse()}catch(r){var t;return new lr(r.message,ar().isAxiosError(r)?null===r||void 0===r||null===(t=r.response)||void 0===t?void 0:t.status:void 0)}}async getTransactionByBlock(e){const t=await this.blockByIndex(e);return new ur(t.block.transactions[0],e)}async request(e,t){return(await this.axios.request({url:e,data:t})).data}networksList(){return this.request("/network/list",{})}async networkStatus(){const e=await this.networkIdentifier;return this.request("/network/status",{network_identifier:e})}async accountBalanceByAddress(e){const t=await this.networkIdentifier;return this.request("/account/balance",{network_identifier:t,account_identifier:{address:e}})}async blockByIndex(e){const t=await this.networkIdentifier;return this.request("/block",{network_identifier:t,block_identifier:{index:e}})}async transactionsByAccount(e){const t=await this.networkIdentifier;return this.request("/search/transactions",{network_identifier:t,account_identifier:{address:e}})}async transactionsByHash(e){const t=await this.networkIdentifier;return this.request("/search/transactions",{network_identifier:t,transaction_identifier:{hash:e}})}},gr=(r(9862),r(3781),r(6183),e=>{var t=Array.from(v.fromText(e).toUint8Array());return[t.length,...t]}),mr=(e,t)=>{const r=dr("\naccount-id"),a=b(new Uint8Array([...r,...v.fromText(e).toUint8Array(),...Ar(t)])),n=br(A(a)),i=new Uint8Array([...n,...a]);return vr(i)},Ar=e=>Array.isArray(e)?e.concat(Array(32-e.length).fill(0)):Array(28).fill(0).concat(br(e||0)),yr=e=>{for(var t,r=0;r<4;r++)t=t<<8|e[r];return t},br=e=>{let t=new ArrayBuffer(4);return new DataView(t).setUint32(0,e),Array.from(new Uint8Array(t))},vr=e=>Array.from(e,(function(e){return("0"+(255&e).toString(16)).slice(-2)})).join(""),wr=e=>{"0x"===e.substr(0,2)&&(e=e.substr(2));for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},xr=e=>/^[0-9a-fA-F]+$/.test(e),kr=e=>{try{return e===v.fromText(e).toText()}catch(t){return!1}},Er=e=>{let{IDL:t}=e;const r=t.Record({xdr_permyriad_per_icp:t.Nat64,timestamp_seconds:t.Nat64}),a=t.Record({certificate:t.Vec(t.Nat8),data:r,hash_tree:t.Vec(t.Nat8)}),n=t.Record({who:t.Opt(t.Principal),subnets:t.Vec(t.Principal)}),i=t.Record({e8s:t.Nat64}),o=t.Record({to:t.Principal,to_subaccount:t.Opt(t.Vec(t.Nat8)),from:t.Principal,memo:t.Nat64,from_subaccount:t.Opt(t.Vec(t.Nat8)),amount:i,block_height:t.Nat64}),s=t.Variant({Refunded:t.Tuple(t.Text,t.Opt(t.Nat64)),CanisterCreated:t.Principal,ToppedUp:t.Null}),c=t.Variant({Ok:s,Err:t.Text});return t.Service({get_average_icp_xdr_conversion_rate:t.Func([],[a],["query"]),get_icp_xdr_conversion_rate:t.Func([],[a],["query"]),set_authorized_subnetwork_list:t.Func([n],[],[]),transaction_notification:t.Func([o],[c],[])})},qr=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=r,n=t.Nat32,i=t.Text,o=i,s=t.Record({subaccount:a,seller:t.Principal,buyer:o,price:t.Nat64}),c=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),l=t.Text,u=t.Variant({principal:t.Principal,address:i}),d=t.Record({token:l,user:u}),h=t.Nat,f=t.Variant({InvalidToken:l,Other:t.Text}),p=t.Variant({ok:h,err:f}),g=l,m=f,A=t.Variant({ok:t.Vec(t.Tuple(n,c)),err:m}),y=t.Variant({ok:o,err:m}),b=t.Int,v=t.Record({locked:t.Opt(b),seller:t.Principal,price:t.Nat64}),w=t.Variant({ok:t.Tuple(o,t.Opt(v)),err:m}),x=u,k=t.Text,E=t.Record({hat:t.Opt(t.Tuple(t.Nat32,t.Nat32)),pet:t.Opt(t.Tuple(t.Nat32,t.Nat32)),accessory:t.Opt(t.Tuple(t.Nat32,t.Nat32)),eyewear:t.Opt(t.Tuple(t.Nat32,t.Nat32))}),q=t.Tuple(t.Text,t.Text),B=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(q)}),I=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(q),status_code:t.Nat16}),j=t.Variant({ok:n,err:m}),C=t.Record({token:g,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),_=t.Variant({ok:t.Null,err:m}),S=t.Variant({ok:c,err:m}),z=t.Record({to:u,metadata:t.Opt(t.Vec(t.Nat8))}),M=h,Q=t.Variant({ok:M,err:m}),N=t.Variant({ok:t.Vec(n),err:m}),R=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(v),t.Opt(t.Vec(t.Nat8)))),err:m}),T=t.Record({token:g,time:b,seller:t.Principal,buyer:o,price:t.Nat64}),P=t.Vec(t.Nat8),O=t.Record({to:u,token:l,notify:t.Bool,from:u,memo:P,subaccount:t.Opt(r),amount:h}),F=t.Variant({ok:h,err:t.Variant({CannotNotify:i,InsufficientBalance:t.Null,InvalidToken:l,Rejected:t.Null,Unauthorized:i,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addRefund:t.Func([t.Text,t.Principal,a],[],["oneway"]),availableCycles:t.Func([],[t.Nat],["query"]),backendRefundSettlement:t.Func([t.Text],[t.Vec(t.Tuple(n,s)),t.Vec(t.Tuple(o,t.Principal,a)),t.Vec(t.Tuple(t.Principal,t.Vec(a))),t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),backup:t.Func([],[t.Vec(t.Tuple(n,o)),t.Vec(t.Tuple(o,t.Vec(n))),t.Vec(t.Tuple(n,c))],["query"]),balance:t.Func([d],[p],["query"]),bearer:t.Func([g],[y],["query"]),details:t.Func([g],[w],["query"]),disribute:t.Func([x],[],[]),extensions:t.Func([],[t.Vec(k)],["query"]),freeGift:t.Func([o],[t.Opt(n)],[]),getAllPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),getAllWearables:t.Func([],[t.Vec(t.Tuple(n,E))],["query"]),getBuyers:t.Func([],[t.Vec(t.Tuple(o,t.Vec(n)))],["query"]),getMinted:t.Func([],[n],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),getSold:t.Func([],[n],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,c))],["query"]),http_request:t.Func([B],[I],["query"]),index:t.Func([g],[j],["query"]),list:t.Func([C],[_],[]),listings:t.Func([],[t.Vec(t.Tuple(n,v,c))],["query"]),lock:t.Func([g,t.Nat64,o,a],[y],[]),metadata:t.Func([g],[S],["query"]),mintNFT:t.Func([z],[n],[]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),receiveWearable:t.Func([n,n,t.Vec(t.Nat8),o],[t.Variant({replaced:n,success:t.Null,failed:t.Null})],[]),refunds:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),removeRefunds:t.Func([t.Vec(a)],[],[]),retreiveSnapshot:t.Func([t.Text],[t.Vec(o)],[]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([g],[_],[]),settle_force:t.Func([t.Text,g],[],["oneway"]),settlements:t.Func([],[t.Vec(t.Tuple(n,o,t.Nat64))],["query"]),salesStats:t.Func([],[t.Bool,t.Nat32,t.Nat32,t.Nat,t.Tuple(t.Nat64,n)],["query"]),supply:t.Func([g],[Q],["query"]),takeSnapshot:t.Func([t.Text],[t.Nat],[]),tokens:t.Func([o],[N],["query"]),tokens_ext:t.Func([o],[R],["query"]),transactions:t.Func([],[t.Vec(T)],["query"]),transfer:t.Func([O],[F],[]),unpack:t.Func([l,t.Opt(r)],[A],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},Br=e=>{let{IDL:t}=e;const r=t.Nat32,a=t.Nat,n=a,i=t.Text,o=i,s=t.Tuple(t.Nat,t.Nat),c=t.Text,l=c,u=t.Record({isGiveBase:t.Bool,trade:n,base:o,rate:s,user:l,quote:o,filled:n,amount:n}),d=t.Text,h=t.Nat32,f=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),p=t.Variant({principal:t.Principal,address:c}),g=t.Record({token:i,user:p}),m=t.Variant({InvalidToken:i,Other:t.Text}),A=t.Variant({ok:a,err:m}),y=t.Vec(t.Nat8),b=y,v=t.Record({subaccount:t.Opt(b),orderId:r}),w=t.Variant({ok:t.Null,err:t.Text}),x=t.Text,k=t.Record({subaccount:t.Opt(b),getAmount:n,getToken:o,giveToken:o,giveAmount:n}),E=t.Variant({ok:t.Tuple(t.Opt(r),n,n),err:t.Variant({InsufficientBalance:t.Null,InvalidToken:o,Other:t.Text})}),q=t.Record({subaccount:t.Opt(b),getToken:o,giveToken:o,giveAmount:n}),B=t.Variant({ok:t.Tuple(n,n),err:t.Variant({InsufficientBalance:t.Null,InvalidToken:o,Other:t.Text})}),I=m,j=t.Variant({ok:f,err:I}),C=t.Variant({ok:t.Nat,err:I}),_=t.Record({owner:l,metadata:f,supply:n}),S=t.Variant({ok:h,err:t.Text}),z=t.Variant({ok:t.Vec(t.Tuple(l,n)),err:I}),M=t.Variant({ok:n,err:I}),Q=t.Variant({ok:t.Vec(h),err:I}),N=t.Vec(t.Nat8),R=t.Record({to:p,token:i,notify:t.Bool,from:p,memo:N,subaccount:t.Opt(y),amount:a}),T=t.Variant({ok:a,err:t.Variant({CannotNotify:c,InsufficientBalance:t.Null,InvalidToken:i,Rejected:t.Null,Unauthorized:c,Other:t.Text})});return t.Service({DEXDebugData:t.Func([],[t.Vec(t.Tuple(r,u)),t.Vec(t.Tuple(d,t.Tuple(t.Vec(r),t.Vec(r)))),t.Vec(t.Tuple(o,n))],["query"]),acceptCycles:t.Func([],[],[]),allMetadata:t.Func([],[t.Vec(t.Tuple(h,t.Tuple(f,n)))],["query"]),allRegistry:t.Func([],[t.Vec(t.Tuple(h,t.Vec(t.Tuple(l,n))))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([g],[A],["query"]),cancelOrder:t.Func([v],[w],[]),changeAdmin:t.Func([t.Principal],[],[]),clearDEX:t.Func([],[],[]),extensions:t.Func([],[t.Vec(x)],["query"]),getOrderBook:t.Func([o,o],[t.Opt(t.Tuple(t.Vec(o),d,t.Vec(u),t.Vec(u),t.Opt(s)))],["query"]),limitOrder:t.Func([k],[E],[]),marketOrder:t.Func([q],[B],[]),metadata:t.Func([o],[j],["query"]),numberOfTokenHolders:t.Func([o],[C],["query"]),numberOfTokens:t.Func([],[t.Nat],["query"]),registerToken:t.Func([_],[S],[]),registry:t.Func([o],[z],["query"]),supply:t.Func([o],[M],["query"]),tokenRegistry:t.Func([],[t.Vec(t.Tuple(h,f,n,t.Nat))],["query"]),tokens:t.Func([l],[Q],["query"]),transfer:t.Func([R],[T],[])})},Ir=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=r,n=t.Nat32,i=t.Text,o=i,s=t.Record({subaccount:a,seller:t.Principal,buyer:o,price:t.Nat64}),c=t.Text,l=t.Variant({principal:t.Principal,address:i}),u=t.Record({token:c,user:l}),d=t.Nat,h=t.Variant({InvalidToken:c,Other:t.Text}),f=t.Variant({ok:d,err:h}),p=c,g=h,m=t.Variant({ok:o,err:g}),A=t.Int,y=t.Record({locked:t.Opt(A),seller:t.Principal,price:t.Nat64}),b=t.Variant({ok:t.Tuple(o,t.Opt(y)),err:g}),v=t.Text,w=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),status_code:t.Nat16}),q=t.Record({token:p,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),B=t.Variant({ok:t.Null,err:g}),I=t.Variant({ok:w,err:g}),j=d,C=t.Variant({ok:j,err:g}),_=t.Variant({ok:t.Vec(n),err:g}),S=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(y),t.Opt(t.Vec(t.Nat8)))),err:g}),z=t.Record({token:p,time:A,seller:t.Principal,buyer:o,price:t.Nat64}),M=t.Vec(t.Nat8),Q=t.Record({to:l,token:c,notify:t.Bool,from:l,memo:M,subaccount:t.Opt(r),amount:d}),N=t.Variant({ok:d,err:t.Variant({CannotNotify:i,InsufficientBalance:t.Null,InvalidToken:c,Rejected:t.Null,Unauthorized:i,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addRefund:t.Func([t.Text,t.Principal,a],[],["oneway"]),availableCycles:t.Func([],[t.Nat],["query"]),backendRefundSettlement:t.Func([t.Text],[t.Vec(t.Tuple(n,s)),t.Vec(t.Tuple(o,t.Principal,a)),t.Vec(t.Tuple(t.Principal,t.Vec(a))),t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),balance:t.Func([u],[f],["query"]),bearer:t.Func([p],[m],["query"]),details:t.Func([p],[b],["query"]),extensions:t.Func([],[t.Vec(v)],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,w))],["query"]),http_request:t.Func([k],[E],["query"]),list:t.Func([q],[B],[]),listings:t.Func([],[t.Vec(t.Tuple(n,y,w))],["query"]),lock:t.Func([p,t.Nat64,o,a],[m],[]),metadata:t.Func([p],[I],["query"]),mint:t.Func([p],[t.Bool],[]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),refunds:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),removeRefunds:t.Func([t.Vec(a)],[],[]),settle:t.Func([p],[B],[]),settlements:t.Func([],[t.Vec(t.Tuple(n,o,t.Nat64))],["query"]),supply:t.Func([p],[C],["query"]),tokens:t.Func([o],[_],["query"]),tokens_ext:t.Func([o],[S],["query"]),transactions:t.Func([],[t.Vec(z)],["query"]),transfer:t.Func([Q],[N],[]),unwrap:t.Func([p,t.Opt(a)],[t.Bool],[]),wrap:t.Func([p],[t.Bool],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},jr=e=>{let{IDL:t}=e;const r=t.Record({value:t.Text,name:t.Text}),a=t.Record({id:t.Nat,url:t.Text,owner:t.Principal,desc:t.Text,name:t.Text,properties:t.Vec(r)}),n=t.Int,i=t.Record({tokenId:t.Nat,owner:t.Principal,timestamp:n,price:t.Nat64}),o=t.Variant({init:t.Null,list:t.Null,mint:t.Null,delist:t.Null,transfer:t.Null,purchase:t.Null}),s=t.Service({addRecord:t.Func([t.Principal,o,t.Opt(t.Principal),t.Opt(t.Principal),t.Nat,t.Opt(t.Nat64),n],[t.Nat],[])}),c=t.Tuple(t.Text,t.Text),l=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(c)}),u=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),d=t.Record({token:t.Opt(u),body:t.Vec(t.Nat8)}),h=t.Variant({Callback:t.Record({token:u,callback:t.Func([u],[d],["query"])})}),f=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(c),streaming_strategy:t.Opt(h),status_code:t.Nat16}),p=t.Record({url:t.Text,contentType:t.Text,data:t.Vec(t.Nat8),desc:t.Text,name:t.Text,properties:t.Vec(r)}),g=t.Record({e8s:t.Nat64}),m=t.Record({to:t.Principal,to_subaccount:t.Opt(t.Nat8),from:t.Principal,memo:t.Nat64,from_subaccount:t.Opt(t.Nat8),amount:g,block_height:t.Nat64}),A=t.Variant({Ok:t.Text,Err:t.Text});return t.Service({add_genesis_record:t.Func([],[t.Nat],[]),data_of:t.Func([t.Nat],[a],["query"]),delist:t.Func([t.Nat],[t.Bool],[]),get_cycles:t.Func([],[t.Nat],["query"]),get_listed:t.Func([t.Nat],[t.Vec(i)],["query"]),get_storage_canister:t.Func([],[t.Opt(s)],["query"]),http_request:t.Func([l],[f],["query"]),list:t.Func([t.Nat,t.Nat64],[t.Bool],[]),mint:t.Func([p],[t.Nat],[]),multi_mint:t.Func([t.Vec(p)],[t.Vec(t.Nat)],[]),name:t.Func([],[t.Text],["query"]),owner:t.Func([],[t.Principal],["query"]),owner_of:t.Func([t.Nat],[t.Principal],["query"]),set_owner:t.Func([t.Principal],[t.Bool],[]),set_storage_canister_id:t.Func([t.Opt(t.Principal)],[t.Bool],[]),symbol:t.Func([],[t.Text],["query"]),total_supply:t.Func([],[t.Nat],["query"]),transaction_notification:t.Func([m],[A],[]),transfer_to:t.Func([t.Principal,t.Nat],[t.Bool],[]),user_tokens:t.Func([t.Principal],[t.Vec(t.Nat)],["query"])})},Cr=e=>{let{IDL:t}=e;return t.Service({list:t.Func([],[t.Vec(t.Principal)],["query"]),log:t.Func([],[],[])})},_r=e=>{let{IDL:t}=e;const r=t.Variant({Ok:t.Nat64,Err:t.Text}),a=t.Record({controllers:t.Vec(t.Principal),tokens:t.Vec(t.Tuple(t.Nat64,t.Principal)),claim_index:t.Nat64,token_seeds:t.Vec(t.Tuple(t.Nat64,t.Nat64)),total_supply:t.Nat64}),n=t.Tuple(t.Text,t.Text),i=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(n)}),o=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(n),status_code:t.Nat16});return t.Service({add_airdrops:t.Func([t.Vec(t.Principal)],[t.Bool],[]),add_controller:t.Func([t.Principal],[t.Bool],[]),claim:t.Func([],[r],[]),get_address_book:t.Func([],[a],["query"]),get_airdrops:t.Func([],[t.Vec(t.Tuple(t.Nat64,t.Bool))],["query"]),get_controllers:t.Func([],[t.Vec(t.Principal)],["query"]),get_token_properties:t.Func([t.Nat64],[t.Vec(t.Tuple(t.Text,t.Text))],["query"]),http_request:t.Func([i],[o],["query"]),name:t.Func([],[t.Text],["query"]),owner_of:t.Func([t.Nat64],[t.Opt(t.Principal)],["query"]),remaining:t.Func([],[t.Nat64],[]),remove_controller:t.Func([t.Principal],[t.Bool],[]),supply:t.Func([],[t.Nat64],[]),symbol:t.Func([],[t.Text],["query"]),transfer_to:t.Func([t.Principal,t.Nat64],[t.Bool],[]),user_tokens:t.Func([t.Principal],[t.Vec(t.Nat64)],["query"])})},Sr=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=r,n=t.Nat32,i=t.Text,o=i,s=t.Record({subaccount:a,seller:t.Principal,buyer:o,price:t.Nat64}),c=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),l=t.Text,u=t.Variant({principal:t.Principal,address:i}),d=t.Record({token:l,user:u}),h=t.Nat,f=t.Variant({InvalidToken:l,Other:t.Text}),p=t.Variant({ok:h,err:f}),g=l,m=f,A=t.Variant({ok:o,err:m}),y=t.Int,b=t.Record({locked:t.Opt(y),seller:t.Principal,price:t.Nat64}),v=t.Variant({ok:t.Tuple(o,t.Opt(b)),err:m}),w=t.Text,x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),status_code:t.Nat16}),q=t.Variant({ok:n,err:m}),B=t.Record({token:g,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),I=t.Variant({ok:t.Null,err:m}),j=t.Variant({ok:c,err:m}),C=t.Record({to:u,metadata:t.Opt(t.Vec(t.Nat8))}),_=t.Variant({ok:t.Tuple(o,t.Nat64),err:t.Text}),S=t.Variant({ok:t.Null,err:t.Text}),z=t.Record({token:n,expires:y,subaccount:a,buyer:o,price:t.Nat64}),M=h,Q=t.Variant({ok:M,err:m}),N=t.Variant({ok:t.Vec(n),err:m}),R=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(b),t.Opt(t.Vec(t.Nat8)))),err:m}),T=t.Record({token:g,time:y,seller:t.Principal,buyer:o,price:t.Nat64}),P=t.Vec(t.Nat8),O=t.Record({to:u,token:l,notify:t.Bool,from:u,memo:P,subaccount:t.Opt(r),amount:h}),F=t.Variant({ok:h,err:t.Variant({CannotNotify:i,InsufficientBalance:t.Null,InvalidToken:l,Rejected:t.Null,Unauthorized:i,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(n,s))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),backup:t.Func([],[t.Vec(t.Tuple(n,o)),t.Vec(t.Tuple(o,t.Vec(n))),t.Vec(t.Tuple(n,c))],["query"]),balance:t.Func([d],[p],["query"]),bearer:t.Func([g],[A],["query"]),clearBadSales:t.Func([o],[],[]),clearPayments:t.Func([t.Principal,t.Vec(a)],[],[]),details:t.Func([g],[v],["query"]),extensions:t.Func([],[t.Vec(w)],["query"]),getAllPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),getBuyers:t.Func([],[t.Vec(t.Tuple(o,t.Vec(n)))],["query"]),getMinted:t.Func([],[n],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),getSold:t.Func([],[n],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,c))],["query"]),http_request:t.Func([k],[E],["query"]),index:t.Func([g],[q],["query"]),list:t.Func([B],[I],[]),listings:t.Func([],[t.Vec(t.Tuple(n,b,c))],["query"]),lock:t.Func([g,t.Nat64,o,a],[A],[]),metadata:t.Func([g],[j],["query"]),mintNFT:t.Func([C],[n],[]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),refunds:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),removeRefunds:t.Func([t.Vec(a)],[],[]),reserve:t.Func([t.Nat64,o,a],[_],[]),retreive:t.Func([o],[S],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(o,z))],["query"]),salesStats:t.Func([],[t.Bool,t.Nat32,t.Nat32,t.Nat,t.Tuple(t.Nat64,n)],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([g],[I],[]),settlements:t.Func([],[t.Vec(t.Tuple(n,o,t.Nat64))],["query"]),supply:t.Func([g],[Q],["query"]),tokens:t.Func([o],[N],["query"]),tokens_ext:t.Func([o],[R],["query"]),transactions:t.Func([],[t.Vec(T)],["query"]),transfer:t.Func([O],[F],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},zr=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=r,n=t.Nat32,i=t.Text,o=i,s=t.Record({subaccount:a,seller:t.Principal,buyer:o,price:t.Nat64}),c=t.Text,l=t.Variant({principal:t.Principal,address:i}),u=t.Record({token:c,user:l}),d=t.Nat,h=t.Variant({InvalidToken:c,Other:t.Text}),f=t.Variant({ok:d,err:h}),p=c,g=h,m=t.Variant({ok:o,err:g}),A=t.Int,y=t.Record({locked:t.Opt(A),seller:t.Principal,price:t.Nat64}),b=t.Variant({ok:t.Tuple(o,t.Opt(y)),err:g}),v=t.Text,w=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),q=t.Record({token:t.Opt(E),body:t.Vec(t.Nat8)}),B=t.Variant({Callback:t.Record({token:E,callback:t.Func([E],[q],["query"])})}),I=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),streaming_strategy:t.Opt(B),status_code:t.Nat16}),j=t.Record({token:p,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),C=t.Variant({ok:t.Null,err:g}),_=t.Variant({ok:w,err:g}),S=t.Record({to:l,metadata:t.Opt(t.Vec(t.Nat8))}),z=t.Variant({ok:t.Tuple(o,t.Nat64),err:t.Text}),M=t.Variant({ok:t.Null,err:t.Text}),Q=t.Record({expires:A,subaccount:a,tokens:t.Vec(n),buyer:o,price:t.Nat64}),N=d,R=t.Variant({ok:N,err:g}),T=t.Variant({ok:t.Vec(n),err:g}),P=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(y),t.Opt(t.Vec(t.Nat8)))),err:g}),O=t.Record({token:p,time:A,seller:t.Principal,buyer:o,price:t.Nat64}),F=t.Vec(t.Nat8),D=t.Record({to:l,token:c,notify:t.Bool,from:l,memo:F,subaccount:t.Opt(r),amount:d}),L=t.Variant({ok:d,err:t.Variant({CannotNotify:i,InsufficientBalance:t.Null,InvalidToken:c,Rejected:t.Null,Unauthorized:i,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(n,s))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([u],[f],["query"]),bearer:t.Func([p],[m],["query"]),clearPayments:t.Func([t.Principal,t.Vec(a)],[],[]),details:t.Func([p],[b],["query"]),extensions:t.Func([],[t.Vec(v)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(o,a))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,w))],["query"]),http_request:t.Func([k],[I],["query"]),list:t.Func([j],[C],[]),listings:t.Func([],[t.Vec(t.Tuple(n,y,w))],["query"]),lock:t.Func([p,t.Nat64,o,a],[m],[]),metadata:t.Func([p],[_],["query"]),mintAndList:t.Func([o,t.Opt(t.Vec(t.Nat8)),t.Nat64,t.Text],[n],[]),mintNFT:t.Func([S],[n],[]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),reserve:t.Func([t.Nat64,t.Nat64,o,a],[z],[]),retreive:t.Func([o],[M],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(o,Q))],["query"]),salesStats:t.Func([o],[t.Bool,t.Nat,t.Nat,t.Nat64],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([p],[C],[]),settlements:t.Func([],[t.Vec(t.Tuple(n,o,t.Nat64))],["query"]),supply:t.Func([p],[R],["query"]),tokens:t.Func([o],[T],["query"]),tokens_ext:t.Func([o],[P],["query"]),transactions:t.Func([],[t.Vec(O)],["query"]),transfer:t.Func([D],[L],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},Mr=e=>{let{IDL:t}=e;return t.Service({createCanister:t.Func([t.Text,t.Text],[t.Principal],[]),getCanisters:t.Func([],[t.Vec(t.Principal)],[])})},Qr=e=>{let{IDL:t}=e;const r=t.Text,a=t.Vec(t.Nat8),n=a,i=t.Nat32,o=t.Text,s=o,c=t.Record({subaccount:n,seller:t.Principal,buyer:s,price:t.Nat64}),l=t.Text,u=t.Variant({principal:t.Principal,address:o}),d=t.Record({token:l,user:u}),h=t.Nat,f=t.Variant({InvalidToken:l,Other:t.Text}),p=t.Variant({ok:h,err:f}),g=l,m=f,A=t.Variant({ok:s,err:m}),y=t.Int,b=t.Record({locked:t.Opt(y),seller:t.Principal,price:t.Nat64}),v=t.Variant({ok:t.Tuple(s,t.Opt(b)),err:m}),w=t.Text,x=t.Record({id:t.Nat32,name:t.Text,ctype:t.Text,canister:t.Text}),k=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),E=t.Tuple(t.Text,t.Text),q=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(E)}),B=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),I=t.Record({token:t.Opt(B),body:t.Vec(t.Nat8)}),j=t.Variant({Callback:t.Record({token:B,callback:t.Func([B],[I],["query"])})}),C=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(E),streaming_strategy:t.Opt(j),status_code:t.Nat16}),_=t.Record({token:g,from_subaccount:t.Opt(n),price:t.Opt(t.Nat64)}),S=t.Variant({ok:t.Null,err:m}),z=t.Variant({ok:k,err:m}),M=t.Variant({ok:t.Tuple(s,t.Nat64),err:t.Text}),Q=t.Variant({ok:t.Null,err:t.Text}),N=t.Record({expires:y,asset:r,subaccount:n,buyer:s,price:t.Nat64}),R=h,T=t.Variant({ok:R,err:m}),P=t.Variant({ok:t.Vec(i),err:m}),O=t.Variant({ok:t.Vec(t.Tuple(i,t.Opt(b),t.Opt(t.Vec(t.Nat8)))),err:m}),F=t.Record({token:g,time:y,seller:t.Principal,buyer:s,price:t.Nat64}),D=t.Vec(t.Nat8),L=t.Record({to:u,token:l,notify:t.Bool,from:u,memo:D,subaccount:t.Opt(a),amount:h}),G=t.Variant({ok:h,err:t.Variant({CannotNotify:o,InsufficientBalance:t.Null,InvalidToken:l,Rejected:t.Null,Unauthorized:o,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([r,t.Nat32,t.Text,t.Text,t.Text],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(n)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(i,c))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([d],[p],["query"]),bearer:t.Func([g],[A],["query"]),clearPayments:t.Func([t.Principal,t.Vec(n)],[],[]),details:t.Func([g],[v],["query"]),extensions:t.Func([],[t.Vec(w)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(s,n))],["query"]),getAllAssets:t.Func([],[t.Vec(t.Tuple(r,t.Vec(x)))],["query"]),getAssetHandles:t.Func([],[t.Vec(t.Tuple(r,t.Tuple(t.Text,t.Nat32),t.Tuple(t.Text,t.Nat32)))],["query"]),getAssets:t.Func([r],[t.Opt(t.Vec(x))],["query"]),getAssetsSlice:t.Func([t.Nat,t.Nat],[t.Vec(t.Tuple(r,t.Vec(x)))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(i,s))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(i,k))],["query"]),http_request:t.Func([q],[C],["query"]),list:t.Func([_],[S],[]),listings:t.Func([],[t.Vec(t.Tuple(i,b,k))],["query"]),lock:t.Func([g,t.Nat64,s,n],[A],[]),metadata:t.Func([g],[z],["query"]),payments:t.Func([],[t.Opt(t.Vec(n))],["query"]),removePayments:t.Func([t.Vec(n)],[],[]),reserve:t.Func([t.Nat64,r,s,n],[M],[]),retreive:t.Func([s],[Q],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(s,N))],["query"]),salesStats:t.Func([s],[t.Nat64,t.Opt(t.Nat8),y,t.Vec(t.Text)],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([g],[S],[]),settlements:t.Func([],[t.Vec(t.Tuple(i,s,t.Nat64))],["query"]),supply:t.Func([g],[T],["query"]),tokens:t.Func([s],[P],["query"]),tokens_ext:t.Func([s],[O],["query"]),transactions:t.Func([],[t.Vec(F)],["query"]),transfer:t.Func([L],[G],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},Nr=e=>{let{IDL:t}=e;const r=t.Text,a=t.Vec(t.Nat8),n=a,i=t.Nat32,o=t.Text,s=o,c=t.Record({subaccount:n,seller:t.Principal,buyer:s,price:t.Nat64}),l=t.Text,u=t.Variant({principal:t.Principal,address:o}),d=t.Record({token:l,user:u}),h=t.Nat,f=t.Variant({InvalidToken:l,Other:t.Text}),p=t.Variant({ok:h,err:f}),g=l,m=f,A=t.Variant({ok:s,err:m}),y=t.Int,b=t.Record({locked:t.Opt(y),seller:t.Principal,price:t.Nat64}),v=t.Variant({ok:t.Tuple(s,t.Opt(b)),err:m}),w=t.Text,x=t.Record({ttype:t.Text,thumbnail:t.Vec(t.Nat32),data:t.Vec(t.Nat32),ctype:t.Text}),k=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),E=t.Tuple(t.Text,t.Text),q=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(E)}),B=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),I=t.Record({token:t.Opt(B),body:t.Vec(t.Nat8)}),j=t.Variant({Callback:t.Record({token:B,callback:t.Func([B],[I],["query"])})}),C=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(E),streaming_strategy:t.Opt(j),status_code:t.Nat16}),_=t.Record({token:g,from_subaccount:t.Opt(n),price:t.Opt(t.Nat64)}),S=t.Variant({ok:t.Null,err:m}),z=t.Variant({ok:k,err:m}),M=t.Record({to:s,asset:t.Nat32}),Q=t.Variant({ok:t.Tuple(s,t.Nat64),err:t.Text}),N=t.Variant({ok:t.Null,err:t.Text}),R=t.Record({expires:y,subaccount:n,tokens:t.Vec(i),buyer:s,price:t.Nat64}),T=h,P=t.Variant({ok:T,err:m}),O=t.Variant({ok:t.Vec(i),err:m}),F=t.Variant({ok:t.Vec(t.Tuple(i,t.Opt(b),t.Opt(t.Vec(t.Nat8)))),err:m}),D=t.Record({token:g,time:y,seller:t.Principal,buyer:s,price:t.Nat64}),L=t.Vec(t.Nat8),G=t.Record({to:u,token:l,notify:t.Bool,from:u,memo:L,subaccount:t.Opt(a),amount:h}),U=t.Variant({ok:h,err:t.Variant({CannotNotify:o,InsufficientBalance:t.Null,InvalidToken:l,Rejected:t.Null,Unauthorized:o,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([r,t.Text,t.Text],[t.Text],[]),addThumb:t.Func([r,t.Text],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(n)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(i,c))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([d],[p],["query"]),bearer:t.Func([g],[A],["query"]),clearPayments:t.Func([t.Principal,t.Vec(n)],[],[]),details:t.Func([g],[v],["query"]),extensions:t.Func([],[t.Vec(w)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(s,n))],["query"]),getAssets:t.Func([],[t.Vec(t.Tuple(t.Text,x))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(i,s))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(i,k))],["query"]),http_request:t.Func([q],[C],["query"]),http_request_streaming_callback:t.Func([B],[I],["query"]),list:t.Func([_],[S],[]),listings:t.Func([],[t.Vec(t.Tuple(i,b,k))],["query"]),lock:t.Func([g,t.Nat64,s,n],[A],[]),metadata:t.Func([g],[z],["query"]),mintNFT:t.Func([M],[i],[]),payments:t.Func([],[t.Opt(t.Vec(n))],["query"]),reserve:t.Func([t.Nat64,t.Nat64,s,n],[Q],[]),retreive:t.Func([s],[N],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(s,R))],["query"]),salesStats:t.Func([s],[y,t.Nat64,t.Nat],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([g],[S],[]),settlements:t.Func([],[t.Vec(t.Tuple(i,s,t.Nat64))],["query"]),streamAsset:t.Func([r,t.Vec(t.Nat8),t.Bool,t.Bool],[t.Bool],[]),supply:t.Func([g],[P],["query"]),tokens:t.Func([s],[O],["query"]),tokens_ext:t.Func([s],[F],["query"]),transactions:t.Func([],[t.Vec(D)],["query"]),transfer:t.Func([G],[U],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},Rr=e=>{let{IDL:t}=e;const r=t.Text,a=t.Vec(t.Nat8),n=t.Nat32,i=t.Text,o=t.Record({subaccount:a,seller:t.Principal,buyer:i,price:t.Nat64}),s=t.Text,c=t.Text,l=t.Variant({principal:t.Principal,address:c}),u=t.Record({token:s,user:l}),d=t.Nat,h=t.Variant({InvalidToken:s,Other:t.Text}),f=t.Variant({ok:d,err:h}),p=t.Text,g=t.Variant({InvalidToken:s,Other:t.Text}),m=t.Variant({ok:i,err:g}),A=t.Int,y=t.Record({locked:t.Opt(A),seller:t.Principal,price:t.Nat64}),b=t.Variant({ok:t.Tuple(i,t.Opt(y)),err:g}),v=t.Text,w=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),q=t.Record({token:t.Opt(E),body:t.Vec(t.Nat8)}),B=t.Variant({Callback:t.Record({token:E,callback:t.Func([E],[q],["query"])})}),I=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),streaming_strategy:t.Opt(B),status_code:t.Nat16}),j=t.Record({token:p,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),C=t.Variant({ok:t.Null,err:g}),_=t.Variant({ok:w,err:g}),S=t.Variant({ok:t.Tuple(i,t.Nat64),err:t.Text}),z=t.Variant({ok:t.Null,err:t.Text}),M=t.Record({expires:A,subaccount:a,tokens:t.Vec(n),buyer:i,price:t.Nat64}),Q=t.Nat,N=t.Variant({ok:Q,err:g}),R=t.Variant({ok:t.Vec(n),err:g}),T=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(y),t.Opt(t.Vec(t.Nat8)))),err:g}),P=t.Record({token:p,time:A,seller:t.Principal,buyer:i,price:t.Nat64}),O=t.Vec(t.Nat8),F=t.Vec(t.Nat8),D=t.Record({to:l,token:s,notify:t.Bool,from:l,memo:O,subaccount:t.Opt(F),amount:d}),L=t.Variant({ok:d,err:t.Variant({CannotNotify:c,InsufficientBalance:t.Null,InvalidToken:s,Rejected:t.Null,Unauthorized:c,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([r,t.Nat32,t.Text,t.Text,t.Text],[],[]),addThumbnail:t.Func([r,t.Vec(t.Nat8)],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),assetsToTokens:t.Func([t.Vec(r)],[t.Vec(n)],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([u],[f],["query"]),bearer:t.Func([p],[m],["query"]),clearPayments:t.Func([t.Principal,t.Vec(a)],[],[]),details:t.Func([p],[b],["query"]),extensions:t.Func([],[t.Vec(v)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(i,a))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,i))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,w))],["query"]),http_request:t.Func([k],[I],["query"]),list:t.Func([j],[C],[]),listings:t.Func([],[t.Vec(t.Tuple(n,y,w))],["query"]),lock:t.Func([p,t.Nat64,i,a],[m],[]),metadata:t.Func([p],[_],["query"]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),reserve:t.Func([t.Nat64,t.Nat64,i,a],[S],[]),retreive:t.Func([i],[z],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(i,M))],["query"]),salesStats:t.Func([i],[t.Nat,t.Nat,t.Nat,t.Nat,t.Bool],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([p],[C],[]),settlements:t.Func([],[t.Vec(t.Tuple(n,i,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),supply:t.Func([p],[N],["query"]),testWhitelist:t.Func([t.Text],[],[]),tokens:t.Func([i],[R],["query"]),tokens_ext:t.Func([i],[T],["query"]),transactions:t.Func([],[t.Vec(P)],["query"]),transfer:t.Func([D],[L],[])})},Tr=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=t.Nat32,n=t.Text,i=t.Record({subaccount:r,seller:t.Principal,buyer:n,price:t.Nat64}),o=t.Text,s=t.Text,c=t.Variant({principal:t.Principal,address:s}),l=t.Record({token:o,user:c}),u=t.Nat,d=t.Variant({InvalidToken:o,Other:t.Text}),h=t.Variant({ok:u,err:d}),f=t.Text,p=t.Variant({InvalidToken:o,Other:t.Text}),g=t.Variant({ok:n,err:p}),m=t.Int,A=t.Record({locked:t.Opt(m),seller:t.Principal,price:t.Nat64}),y=t.Variant({ok:t.Tuple(n,t.Opt(A)),err:p}),b=t.Text,v=t.Record({ctype:t.Text,filename:t.Text,chunks:t.Vec(t.Nat32)}),w=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),q=t.Record({token:t.Opt(E),body:t.Vec(t.Nat8)}),B=t.Variant({Callback:t.Record({token:E,callback:t.Func([E],[q],["query"])})}),I=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),streaming_strategy:t.Opt(B),status_code:t.Nat16}),j=t.Record({token:f,from_subaccount:t.Opt(r),price:t.Opt(t.Nat64)}),C=t.Variant({ok:t.Null,err:p}),_=t.Variant({ok:w,err:p}),S=t.Record({to:n,asset:t.Nat32}),z=t.Variant({ok:t.Tuple(n,t.Nat64),err:t.Text}),M=t.Variant({ok:t.Null,err:t.Text}),Q=t.Record({time:m,seller:t.Principal,tokens:t.Vec(a),buyer:n,price:t.Nat64}),N=t.Record({expires:m,subaccount:r,tokens:t.Vec(a),buyer:n,price:t.Nat64}),R=t.Nat,T=t.Variant({ok:R,err:p}),P=t.Variant({ok:t.Vec(a),err:p}),O=t.Variant({ok:t.Vec(t.Tuple(a,t.Opt(A),t.Opt(t.Vec(t.Nat8)))),err:p}),F=t.Record({token:f,time:m,seller:t.Principal,buyer:n,price:t.Nat64}),D=t.Vec(t.Nat8),L=t.Vec(t.Nat8),G=t.Record({to:c,token:o,notify:t.Bool,from:c,memo:D,subaccount:t.Opt(L),amount:u}),U=t.Variant({ok:u,err:t.Variant({CannotNotify:s,InsufficientBalance:t.Null,InvalidToken:o,Rejected:t.Null,Unauthorized:s,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([t.Text,t.Text,t.Text],[t.Text],[]),addThumb:t.Func([t.Text,t.Text],[t.Text],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(r)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(a,i))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([l],[h],["query"]),bearer:t.Func([f],[g],["query"]),clearPayments:t.Func([t.Principal,t.Vec(r)],[],[]),details:t.Func([f],[y],["query"]),extensions:t.Func([],[t.Vec(b)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(n,r))],["query"]),getAssets:t.Func([],[t.Vec(t.Tuple(t.Text,v))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(a,n))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(a,w))],["query"]),http_request:t.Func([k],[I],["query"]),http_request_streaming_callback:t.Func([E],[q],["query"]),list:t.Func([j],[C],[]),listings:t.Func([],[t.Vec(t.Tuple(a,A,w))],["query"]),lock:t.Func([f,t.Nat64,n,r],[g],[]),metadata:t.Func([f],[_],["query"]),mintNFT:t.Func([S],[a],[]),payments:t.Func([],[t.Opt(t.Vec(r))],["query"]),reserve:t.Func([t.Nat64,t.Nat64,n,r],[z],[]),retreive:t.Func([n],[M],[]),saleTransactions:t.Func([],[t.Vec(Q)],["query"]),salesSettlements:t.Func([],[t.Vec(t.Tuple(n,N))],["query"]),salesStats:t.Func([n],[t.Nat,t.Opt(m),t.Tuple(t.Text,t.Nat64,t.Nat64,t.Bool),t.Bool],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([f],[C],[]),settlements:t.Func([],[t.Vec(t.Tuple(a,n,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),streamAsset:t.Func([t.Text,t.Vec(t.Nat8),t.Bool],[t.Bool],[]),supply:t.Func([f],[T],["query"]),tokens:t.Func([n],[P],["query"]),tokens_ext:t.Func([n],[O],["query"]),transactions:t.Func([],[t.Vec(F)],["query"]),transfer:t.Func([G],[U],[])})},Pr=e=>{let{IDL:t}=e;const r=t.Rec(),a=t.Rec(),n=t.Variant({Int:t.Int,Nat:t.Nat,Empty:t.Null,Bool:t.Bool,Text:t.Text,Float:t.Float64,Principal:t.Principal,Class:t.Vec(r)});r.fill(t.Record({value:n,name:t.Text,immutable:t.Bool}));const i=t.Vec(r),o=t.Variant({Immutable:t.Null,NotFound:t.Null,Unauthorized:t.Null,InvalidRequest:t.Null,AuthorizedPrincipalLimitReached:t.Nat,FailedToWrite:t.Text}),s=t.Variant({ok:i,err:o}),c=t.Record({key:t.Text,index:t.Nat,content_encoding:t.Text}),l=t.Record({token:t.Opt(c),body:t.Vec(t.Nat8)}),u=t.Record({id:t.Text,contentType:t.Text,createdAt:t.Int,properties:i}),d=t.Variant({ok:u,err:o}),h=t.Nat,f=t.Func([],[],[]),p=t.Variant({Init:t.Record({id:t.Text,size:t.Nat,callback:t.Opt(f)}),Chunk:t.Record({id:t.Text,chunk:t.Vec(t.Nat8),callback:t.Opt(f)})}),g=t.Variant({Put:t.Record({key:t.Text,contentType:t.Text,callback:t.Opt(f),payload:t.Variant({StagedData:t.Null,Payload:t.Vec(t.Nat8)})}),Remove:t.Record({key:t.Text,callback:t.Opt(f)}),StagedWrite:p}),m=t.Variant({ok:t.Null,err:o}),A=t.Record({p:t.Principal,id:t.Text,isAuthorized:t.Bool}),y=t.Nat,b=t.Variant({ok:y,err:t.Variant({ListOnMarketPlace:t.Null,NotAllowTransferToSelf:t.Null,NotOwnerOrNotApprove:t.Null,Other:t.Null})}),v=t.Variant({ok:t.Vec(t.Tuple(t.Text,u)),err:o}),w=t.Variant({ok:t.Vec(t.Tuple(t.Text,t.Tuple(t.Text,t.Vec(t.Tuple(t.Text,t.Int))))),err:o}),x=t.Record({id:t.Text,contentType:t.Text,owner:t.Principal,createdAt:t.Int,properties:i}),k=t.Variant({ok:t.Vec(t.Tuple(t.Text,x)),err:o}),E=t.Record({to:t.Opt(t.Principal),tokenId:t.Text,amount:t.Nat}),q=t.Variant({ok:t.Tuple(t.Text,t.Principal,t.Nat),err:o}),B=t.Record({tokenIndex:y,marketFeeRatio:t.Nat,feeTo:t.Principal}),I=t.Variant({ok:y,err:t.Variant({NotAllowBuySelf:t.Null,InsufficientBalance:t.Null,AlreadyTransferToOther:t.Null,NotFoundIndex:t.Null,Unauthorized:t.Null,Other:t.Null,LessThanFee:t.Null,AllowedInsufficientBalance:t.Null})}),j=t.Variant({ok:y,err:t.Variant({NotApprove:t.Null,NotNFT:t.Null,NotFoundIndex:t.Null,SamePrice:t.Null,NotOwner:t.Null,Other:t.Null,AlreadyList:t.Null})}),C=t.Record({contentType:t.Text,properties:i,isPrivate:t.Bool,equippable:t.Bool,payload:t.Variant({StagedData:t.Text,Payload:t.Vec(t.Nat8)})}),_=t.Variant({ok:t.Text,err:o}),S=t.Variant({ok:t.Vec(t.Nat),err:o}),z=t.Func([],[t.Nat],[]),M=t.Variant({ContractAuthorize:t.Record({isAuthorized:t.Bool,user:t.Principal}),Mint:t.Record({id:t.Text,owner:t.Principal})}),Q=t.Variant({Immutable:t.Null,NotFound:t.Null,Unauthorized:t.Null,InvalidRequest:t.Null,AuthorizedPrincipalLimitReached:t.Nat,FailedToWrite:t.Text}),N=t.Variant({ok:t.Text,err:Q}),R=t.Variant({Reserve:t.Record({nftIds:t.Vec(t.Nat),wasReserve:t.Bool,from:t.Principal,details:N}),Sale:t.Record({from:t.Principal,details:N,balanceAfter:t.Int,amount:t.Nat})}),T=t.Variant({Notify:t.Record({from:t.Principal,nftId:t.Text,details:N,balanceAfter:t.Int})}),P=t.Variant({AccessoryAuthorize:t.Record({id:t.Text,isAuthorized:t.Bool,owner:t.Principal,user:t.Principal}),Authorize:t.Record({id:t.Text,isAuthorized:t.Bool,user:t.Principal}),Transfer:t.Record({id:t.Text,to:t.Principal,from:t.Principal})}),O=t.Variant({ContractEvent:M,ShopEvent:R,LedgerEvent:T,TokenEvent:P}),F=t.Record({topupCallback:z,createdAt:t.Int,topupAmount:t.Nat,event:O}),D=t.Record({e8s:t.Nat64}),L=t.Record({nft_payload_size:t.Nat,memory_size:t.Nat,max_live_size:t.Nat,cycles:t.Nat,total_minted:t.Nat,heap_size:t.Nat,authorized_users:t.Vec(t.Principal)}),G=t.Record({createdAt:t.Int,event:t.Variant({Event:O,Custom:t.Text})}),U=t.Record({contentType:t.Text,createdAt:t.Int,properties:i,isPrivate:t.Bool,payload:t.Vec(t.Vec(t.Nat8))}),Z=t.Func([F],[],[]),V=t.Record({failedCalls:t.Nat,failedCallsLimit:t.Nat,callback:t.Opt(Z),noTopupCallLimit:t.Nat,callsSinceLastTopup:t.Nat}),H=t.Record({index:y,canisterId:t.Principal}),W=t.Int,Y=t.Record({tokenIndex:y,time:W,seller:t.Principal,price:t.Nat}),J=t.Record({name:t.Text,symbol:t.Text}),$=t.Int,K=t.Variant({ok:t.Tuple(t.Text,t.Vec(t.Tuple(t.Text,t.Float64))),err:o}),X=t.Variant({ok:t.Tuple(t.Text,t.Vec(t.Tuple(t.Text,t.Int))),err:o}),ee=t.Record({lastPrice:t.Nat,time:W,account:t.Nat}),te=t.Tuple(t.Text,t.Text),re=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(te)}),ae=t.Func([c],[l],["query"]),ne=t.Variant({Callback:t.Record({token:c,callback:ae})}),ie=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(te),streaming_strategy:t.Opt(ne),status_code:t.Nat16}),oe=t.Record({tokenIndex:y,price:t.Nat}),se=t.Record({isEquip:t.Bool,accessoryId:t.Text}),ce=t.Variant({ok:t.Tuple(i,t.Vec(t.Tuple(t.Text,t.Int)),t.Vec(t.Tuple(t.Text,t.Principal,t.Nat))),err:o}),le=t.Record({from:t.Principal,amount_due:t.Nat,amount:t.Nat}),ue=t.Variant({ok:t.Tuple(le,t.Int),err:o}),de=t.Variant({ok:t.Principal,err:o}),he=t.Record({contentType:t.Text,owner:t.Opt(t.Principal),properties:i,isPrivate:t.Bool,payload:t.Variant({StagedData:t.Text,Payload:t.Vec(t.Nat8)})});a.fill(t.Record({name:t.Text,next:t.Vec(a)}));const fe=t.Variant({All:t.Null,Some:t.Vec(a)}),pe=t.Record({id:t.Text,mode:fe}),ge=t.Variant({ok:t.Tuple(t.Vec(t.Nat),t.Int),err:o}),me=t.Record({accessoryId:t.Text,rarity:t.Float64}),Ae=t.Record({data:t.Vec(t.Nat8),totalPages:t.Nat,nextPage:t.Opt(t.Nat)}),ye=t.Variant({Complete:t.Vec(t.Nat8),Chunk:Ae}),be=t.Record({id:t.Text,contentType:t.Text,owner:t.Principal,createdAt:t.Int,properties:i,payload:ye}),ve=t.Variant({ok:be,err:o}),we=t.Variant({ok:Ae,err:o}),xe=t.Variant({ok:x,err:o}),ke=t.Variant({ok:t.Nat,err:o}),Ee=t.Variant({Set:Z,Remove:t.Null}),qe=t.Nat64,Be=t.Variant({TxTooOld:t.Record({allowed_window_nanos:t.Nat64}),BadFee:t.Record({expected_fee:D}),TxDuplicate:t.Record({duplicate_of:qe}),TxCreatedInFuture:t.Null,InsufficientFunds:t.Record({balance:D})}),Ie=t.Nat,je=t.Variant({ok:Ie,err:t.Variant({InsufficientBalance:t.Null,Unauthorized:t.Null,Other:t.Null,LessThanFee:t.Null,AllowedInsufficientBalance:t.Null})});return t.Service({accessoryBalanceOf:t.Func([t.Principal],[t.Vec(t.Tuple(t.Text,t.Nat))],["query"]),accessoryOwnersOf:t.Func([t.Text],[t.Vec(t.Tuple(t.Principal,t.Nat))],["query"]),accessoryProperties:t.Func([t.Text],[s],["query"]),accessoryStreamingCallback:t.Func([c],[l],["query"]),accessoryTokenMetadataByIndex:t.Func([t.Text],[d],[]),addOwner:t.Func([t.Principal],[t.Vec(t.Principal)],[]),addPrincipalsToOgs:t.Func([t.Vec(t.Principal)],[t.Vec(t.Principal)],[]),addPrincipalsToWhitelist:t.Func([t.Vec(t.Principal)],[t.Vec(t.Principal)],[]),airDrop:t.Func([],[t.Bool],[]),approve:t.Func([t.Principal,h],[t.Bool],[]),assetRequest:t.Func([g],[m],[]),authorize:t.Func([A],[m],[]),authorizeAccessory:t.Func([A,t.Principal],[m],[]),balanceOf:t.Func([t.Principal],[t.Vec(t.Text)],["query"]),batchTransferFrom:t.Func([t.Principal,t.Vec(t.Principal),t.Vec(h)],[b],[]),blocksRedeemed:t.Func([],[t.Vec(t.Tuple(t.Nat64,t.Bool))],[]),bulkAccessoryTokenMetadataByIndex:t.Func([t.Vec(t.Text)],[v],[]),bulkGetNftStats:t.Func([t.Vec(t.Text)],[w],["query"]),bulkTokenMetadataByIndex:t.Func([t.Vec(t.Text),t.Bool],[k],["query"]),burnAccessoryTokens:t.Func([E],[q],[]),buyNow:t.Func([B],[I],[]),cancelFavorite:t.Func([h],[t.Bool],[]),cancelList:t.Func([h],[j],[]),createAccessoryToken:t.Func([C,t.Opt(t.Nat)],[_],[]),currTokensOnSale:t.Func([t.Nat],[S],["query"]),eventCallback:t.Func([F],[],[]),getAllAccessoryMetadata:t.Func([],[t.Vec(t.Tuple(t.Text,u))],["query"]),getAllNFT:t.Func([t.Principal],[t.Vec(t.Tuple(h,t.Principal))],["query"]),getAllNftPhotoCanister:t.Func([],[t.Principal],[]),getApproved:t.Func([h],[t.Vec(t.Principal)],["query"]),getAuthorized:t.Func([t.Text],[t.Vec(t.Principal)],["query"]),getAuthorizedForAccessory:t.Func([t.Text,t.Principal],[t.Vec(t.Principal)],["query"]),getAvailableNfts:t.Func([],[t.Vec(t.Nat)],["query"]),getBalance:t.Func([],[D],[]),getBlockRedemptions:t.Func([],[t.Vec(t.Tuple(t.Nat64,t.Bool))],["query"]),getContractInfo:t.Func([],[L],[]),getCurrentLog:t.Func([],[t.Vec(G)],["query"]),getCurrentPrices:t.Func([t.Nat],[t.Int],["query"]),getCycles:t.Func([],[t.Nat],["query"]),getEntries:t.Func([],[t.Vec(t.Tuple(t.Text,t.Tuple(t.Opt(t.Principal),t.Vec(t.Principal)),U))],["query"]),getEventCallbackStatus:t.Func([],[V],[]),getListings:t.Func([],[t.Vec(t.Tuple(H,Y))],["query"]),getLogHistory:t.Func([t.Nat],[t.Vec(G),t.Nat],[]),getMetadata:t.Func([],[J],["query"]),getNFTUIDsMinted:t.Func([],[t.Vec(t.Nat)],["query"]),getNftPrice:t.Func([t.Nat],[t.Int],["query"]),getNftPriceBreakdown:t.Func([],[t.Vec(t.Tuple(t.Nat,$))],[]),getNftRarity:t.Func([t.Text,t.Bool],[K],["query"]),getNftStats:t.Func([t.Text],[X],["query"]),getNumSold:t.Func([],[t.Nat],["query"]),getOgs:t.Func([],[t.Vec(t.Principal)],["query"]),getOwnerToNft:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(t.Text)))],["query"]),getPublicSaleStartTime:t.Func([],[W],["query"]),getRarity:t.Func([t.Text],[t.Float64],["query"]),getReservedNfts:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(t.Nat)))],["query"]),getRoyaltyFeeRatio:t.Func([],[t.Nat],["query"]),getSoldListings:t.Func([],[t.Vec(t.Tuple(H,ee))],["query"]),getStorageCanisterId:t.Func([],[t.Opt(t.Principal)],["query"]),getTotalAccessoryTokensCreated:t.Func([],[t.Nat],["query"]),getTotalMinted:t.Func([],[t.Nat],["query"]),getUserBalances:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Int))],["query"]),getWICPCanisterId:t.Func([],[t.Principal],["query"]),getWhitelist:t.Func([],[t.Vec(t.Principal)],["query"]),http_request:t.Func([re],[ie],["query"]),http_request_streaming_callback:t.Func([c],[l],["query"]),init:t.Func([t.Vec(t.Principal),J],[],[]),isAuthorized:t.Func([t.Text,t.Principal],[t.Bool],["query"]),isAuthorizedForAccessory:t.Func([t.Text,t.Principal,t.Principal],[t.Bool],["query"]),isList:t.Func([h],[t.Opt(Y)],["query"]),list:t.Func([oe],[j],[]),listAssets:t.Func([],[t.Vec(t.Tuple(t.Text,t.Text,t.Nat))],["query"]),mintAccessoryTokens:t.Func([E],[q],[]),mutateAccessories:t.Func([t.Text,t.Vec(se)],[ce],[]),myAccountId:t.Func([],[t.Text],[]),myBalance:t.Func([],[D],[]),myRole:t.Func([],[t.Text],["query"]),myWICPBalance:t.Func([],[t.Nat],[]),newStorageCanister:t.Func([t.Principal],[t.Bool],[]),nftStreamingCallback:t.Func([c],[l],["query"]),notify:t.Func([le,t.Nat64],[ue],[]),notifyAndClaim:t.Func([le,t.Nat64],[S],[]),ownerOf:t.Func([h],[t.Opt(t.Principal)],["query"]),ownerOfText:t.Func([t.Text],[de],["query"]),ownerTokenEntries:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(t.Text)))],["query"]),preMint:t.Func([he,t.Opt(t.Nat)],[_],[]),pubSell:t.Func([],[t.Bool],[]),queryProperties:t.Func([pe],[s],["query"]),reserveNfts:t.Func([t.Vec(t.Nat)],[ge],[]),reserveNftsInSale:t.Func([t.Nat],[ge],[]),reservedTimeEntries:t.Func([],[t.Vec(t.Tuple(t.Principal,W))],["query"]),resetReserved:t.Func([],[S],[]),resetSale:t.Func([t.Vec(t.Tuple(t.Nat,t.Nat))],[t.Vec(t.Nat)],[]),setApprovalForAll:t.Func([t.Principal,t.Bool],[t.Bool],[]),setEventCallBack:t.Func([],[],[]),setFavorite:t.Func([h],[t.Bool],[]),setNftPhotoCanister:t.Func([t.Principal],[t.Bool],[]),setOwner:t.Func([t.Principal],[t.Bool],[]),setPublicSaleTime:t.Func([t.Nat],[W],[]),setRarities:t.Func([t.Vec(me)],[],["oneway"]),setRoyaltyFeeRatio:t.Func([t.Nat],[t.Nat],[]),setStorageCanisterId:t.Func([t.Opt(t.Principal)],[t.Bool],[]),setUpSale:t.Func([t.Vec(t.Tuple(t.Nat,t.Nat))],[t.Vec(t.Nat)],[]),setWICPCanisterId:t.Func([t.Principal],[t.Bool],[]),staticStreamingCallback:t.Func([c],[l],["query"]),testLogging:t.Func([],[t.Vec(G)],[]),tokenByIndex:t.Func([t.Text],[ve],[]),tokenChunkByIndex:t.Func([t.Text,t.Nat],[we],[]),tokenMetadataByIndex:t.Func([t.Text],[xe],[]),tokenMetadataByIndexPretty:t.Func([t.Text,t.Bool],[xe],["query"]),transfer:t.Func([t.Principal,t.Text],[m],[]),transferAccessory:t.Func([t.Principal,t.Text,t.Principal,t.Nat],[ke],[]),transferFrom:t.Func([t.Principal,t.Principal,h],[b],[]),unreserveNfts:t.Func([],[t.Opt(t.Vec(t.Nat))],[]),updateContractOwners:t.Func([t.Principal,t.Bool],[m],[]),updateEventCallback:t.Func([Ee],[],[]),updateList:t.Func([oe],[j],[]),wallet_receive:t.Func([],[t.Nat],[]),whoAmI:t.Func([],[t.Principal],[]),withdrawFunds:t.Func([],[t.Variant({Ok:qe,Err:Be})],[]),withdrawWICP:t.Func([],[je],[])})},Or=e=>{let{IDL:t}=e;const r=t.Text,a=t.Vec(t.Nat8),n=t.Nat32,i=t.Text,o=t.Record({subaccount:a,seller:t.Principal,buyer:i,price:t.Nat64}),s=t.Text,c=t.Text,l=t.Variant({principal:t.Principal,address:c}),u=t.Record({token:s,user:l}),d=t.Nat,h=t.Variant({InvalidToken:s,Other:t.Text}),f=t.Variant({ok:d,err:h}),p=t.Text,g=t.Variant({InvalidToken:s,Other:t.Text}),m=t.Variant({ok:i,err:g}),A=t.Int,y=t.Record({locked:t.Opt(A),seller:t.Principal,price:t.Nat64}),b=t.Variant({ok:t.Tuple(i,t.Opt(y)),err:g}),v=t.Text,w=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),x=t.Tuple(t.Text,t.Text),k=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(x)}),E=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),q=t.Record({token:t.Opt(E),body:t.Vec(t.Nat8)}),B=t.Variant({Callback:t.Record({token:E,callback:t.Func([E],[q],["query"])})}),I=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(x),streaming_strategy:t.Opt(B),status_code:t.Nat16}),j=t.Record({token:p,from_subaccount:t.Opt(a),price:t.Opt(t.Nat64)}),C=t.Variant({ok:t.Null,err:g}),_=t.Variant({ok:w,err:g}),S=t.Variant({ok:t.Tuple(i,t.Nat64),err:t.Text}),z=t.Variant({ok:t.Null,err:t.Text}),M=t.Record({expires:A,subaccount:a,tokens:t.Vec(n),buyer:i,price:t.Nat64}),Q=t.Nat,N=t.Variant({ok:Q,err:g}),R=t.Variant({ok:t.Vec(n),err:g}),T=t.Variant({ok:t.Vec(t.Tuple(n,t.Opt(y),t.Opt(t.Vec(t.Nat8)))),err:g}),P=t.Record({token:p,time:A,seller:t.Principal,buyer:i,price:t.Nat64}),O=t.Vec(t.Nat8),F=t.Vec(t.Nat8),D=t.Record({to:l,token:s,notify:t.Bool,from:l,memo:O,subaccount:t.Opt(F),amount:d}),L=t.Variant({ok:d,err:t.Variant({CannotNotify:c,InsufficientBalance:t.Null,InvalidToken:s,Rejected:t.Null,Unauthorized:c,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([r,t.Nat32,t.Text,t.Text,t.Text],[],[]),addThumbnail:t.Func([r,t.Vec(t.Nat8),t.Bool,t.Text],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(a)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(n,o))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([u],[f],["query"]),bearer:t.Func([p],[m],["query"]),clearPayments:t.Func([t.Principal,t.Vec(a)],[],[]),details:t.Func([p],[b],["query"]),extensions:t.Func([],[t.Vec(v)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(i,a))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(n,i))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(n,w))],["query"]),http_request:t.Func([k],[I],["query"]),http_request_streaming_callback:t.Func([E],[q],["query"]),list:t.Func([j],[C],[]),listings:t.Func([],[t.Vec(t.Tuple(n,y,w))],["query"]),lock:t.Func([p,t.Nat64,i,a],[m],[]),metadata:t.Func([p],[_],["query"]),payments:t.Func([],[t.Opt(t.Vec(a))],["query"]),removePayments:t.Func([t.Vec(a)],[],[]),reserve:t.Func([t.Nat64,t.Nat,i,a],[S],[]),retreive:t.Func([i],[z],[]),salesSettlements:t.Func([],[t.Vec(t.Tuple(i,M))],["query"]),salesStats:t.Func([i],[A,t.Nat64,t.Nat,t.Nat,t.Nat,t.Nat,t.Nat,t.Nat,t.Nat,t.Nat],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([p],[C],[]),settlements:t.Func([],[t.Vec(t.Tuple(n,i,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),supply:t.Func([p],[N],["query"]),tokens:t.Func([i],[R],["query"]),tokens_ext:t.Func([i],[T],["query"]),transactions:t.Func([],[t.Vec(P)],["query"]),transfer:t.Func([D],[L],[])})},Fr=e=>{let{IDL:t}=e;const r=t.Text,a=t.Int;return t.Service({allOffers:t.Func([],[t.Vec(r)],["query"]),cancelOffer:t.Func([r],[],[]),like:t.Func([r],[t.Nat],[]),liked:t.Func([],[t.Vec(r)],["query"]),likes:t.Func([r],[t.Nat],["query"]),offer:t.Func([r,t.Nat64,t.Text],[],[]),offered:t.Func([],[t.Vec(r)],["query"]),offers:t.Func([r],[t.Vec(t.Tuple(t.Principal,t.Nat64,a,t.Text))],["query"]),saveLiked:t.Func([t.Vec(r)],[],[]),unlike:t.Func([r],[t.Nat],[])})},Dr=e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=t.Nat32,n=t.Text,i=t.Record({subaccount:r,seller:t.Principal,buyer:n,price:t.Nat64}),o=t.Text,s=t.Text,c=t.Variant({principal:t.Principal,address:s}),l=t.Record({token:o,user:c}),u=t.Nat,d=t.Variant({InvalidToken:o,Other:t.Text}),h=t.Variant({ok:u,err:d}),f=t.Text,p=t.Variant({InvalidToken:o,Other:t.Text}),g=t.Variant({ok:n,err:p}),m=t.Int,A=t.Record({locked:t.Opt(m),seller:t.Principal,price:t.Nat64}),y=t.Variant({ok:t.Tuple(n,t.Opt(A)),err:p}),b=t.Text,v=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),w=t.Tuple(t.Text,t.Text),x=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(w)}),k=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),E=t.Record({token:t.Opt(k),body:t.Vec(t.Nat8)}),q=t.Variant({Callback:t.Record({token:k,callback:t.Func([k],[E],["query"])})}),B=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(w),streaming_strategy:t.Opt(q),status_code:t.Nat16}),I=t.Record({token:f,from_subaccount:t.Opt(r),price:t.Opt(t.Nat64)}),j=t.Variant({ok:t.Null,err:p}),C=t.Variant({ok:v,err:p}),_=t.Nat,S=t.Variant({ok:_,err:p}),z=t.Variant({principal:t.Principal,address:s}),M=t.Vec(t.Nat8),Q=t.Variant({ok:t.Vec(a),err:p}),N=t.Variant({ok:t.Vec(t.Tuple(a,t.Opt(A),t.Opt(t.Vec(t.Nat8)))),err:p}),R=t.Variant({ok:t.Null,err:t.Text}),T=t.Variant({ok:t.Text,err:t.Text}),P=t.Variant({ok:n,err:t.Text}),O=t.Record({repaid:t.Bool,reward:t.Nat64,tokenid:f,date:m,fees:t.Tuple(t.Nat64,t.Nat64),live:t.Bool,user:t.Principal,subaccount:r,locked:t.Opt(m),repayment:t.Opt(n),filled:t.Opt(m),lender:t.Opt(n),length:m,amount:t.Nat64,payment:t.Opt(n),defaulted:t.Bool}),F=t.Record({token:f,time:m,seller:t.Principal,buyer:n,price:t.Nat64}),D=t.Vec(t.Nat8),L=t.Vec(t.Nat8),G=t.Record({to:c,token:o,notify:t.Bool,from:c,memo:D,subaccount:t.Opt(L),amount:u}),U=t.Variant({ok:u,err:t.Variant({CannotNotify:s,InsufficientBalance:t.Null,InvalidToken:o,Rejected:t.Null,Unauthorized:s,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),adminKillHeartbeat:t.Func([],[],[]),adminStartHeartbeat:t.Func([],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(r)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(a,i))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([l],[h],["query"]),bearer:t.Func([f],[g],["query"]),clearPayments:t.Func([t.Principal,t.Vec(r)],[],[]),cronCapEvents:t.Func([],[],[]),cronDisbursements:t.Func([],[],[]),cronSettlements:t.Func([],[],[]),details:t.Func([f],[y],["query"]),extensions:t.Func([],[t.Vec(b)],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(a,n))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(a,v))],["query"]),historicExport:t.Func([],[t.Bool],[]),http_request:t.Func([x],[B],["query"]),initCap:t.Func([],[],[]),isHeartbeatRunning:t.Func([],[t.Bool],["query"]),list:t.Func([I],[j],[]),listings:t.Func([],[t.Vec(t.Tuple(a,A,v))],["query"]),lock:t.Func([f,t.Nat64,n,r],[g],[]),metadata:t.Func([f],[C],["query"]),payments:t.Func([],[t.Opt(t.Vec(r))],["query"]),pendingCronJobs:t.Func([],[t.Vec(t.Nat)],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([f],[j],[]),settlements:t.Func([],[t.Vec(t.Tuple(a,n,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),supply:t.Func([f],[S],["query"]),tokenTransferNotification:t.Func([f,z,_,M],[t.Opt(_)],[]),tokens:t.Func([n],[Q],["query"]),tokens_ext:t.Func([n],[N],["query"]),tp_cancel:t.Func([f],[R],[]),tp_clear:t.Func([],[],[]),tp_close:t.Func([a],[T],[]),tp_create:t.Func([f,r,t.Nat64,m,t.Nat64,t.Nat64,t.Nat64],[P],[]),tp_fill:t.Func([f,n,t.Nat64],[P],[]),tp_loanDetails:t.Func([f],[t.Opt(O)],["query"]),tp_loans:t.Func([],[t.Vec(t.Tuple(a,O))],["query"]),tp_loansActive:t.Func([],[t.Vec(t.Tuple(a,O))],["query"]),tp_loansByAddress:t.Func([n],[t.Vec(t.Tuple(a,O))],["query"]),tp_requests:t.Func([],[t.Vec(t.Tuple(f,O))],["query"]),tp_requestsAll:t.Func([],[t.Vec(t.Tuple(f,O))],["query"]),tp_requestsByAddress:t.Func([n],[t.Vec(t.Tuple(f,O))],["query"]),tp_settle:t.Func([n],[R],[]),tp_test:t.Func([],[],[]),tp_tokenOwner:t.Func([f],[t.Opt(n)],[]),tp_whitelistCanister:t.Func([t.Text],[],[]),tp_whitelisted:t.Func([],[t.Vec(t.Text)],["query"]),transactions:t.Func([],[t.Vec(F)],["query"]),transfer:t.Func([G],[U],[]),viewDisbursements:t.Func([],[t.Vec(t.Tuple(a,n,r,t.Nat64))],["query"])})};var Lr=r(918).Buffer;const Gr=e=>xr(e)&&64===e.length?{address:e}:{principal:v.fromText(e)},Ur=(e,t)=>{const r=Lr("\ntid"),a=new Uint8Array([...r,...v.fromText(e).toUint8Array(),...br(t)]);return v.fromUint8Array(a).toText()},Zr=e=>{var t=[...v.fromText(e).toUint8Array()],r=t.splice(0,4);return vr(r)!==vr(Lr("\ntid"))?{index:0,canister:e,token:Ur(e,0)}:{index:yr(t.splice(-4)),canister:v.fromUint8Array(t).toText(),token:e}},Vr={governance:e=>{let{IDL:t}=e;const r=t.Rec(),a=t.Record({id:t.Nat64}),n=t.Record({followees:t.Vec(a)}),i=t.Record({id:t.Opt(t.Principal)}),o=t.Record({neuron_minimum_stake_e8s:t.Nat64,max_proposals_to_keep_per_topic:t.Nat32,neuron_management_fee_per_proposal_e8s:t.Nat64,reject_cost_e8s:t.Nat64,transaction_fee_e8s:t.Nat64,neuron_spawn_dissolve_delay_seconds:t.Nat64,minimum_icp_xdr_rate:t.Nat64,maximum_node_provider_rewards_e8s:t.Nat64}),s=t.Record({day_after_genesis:t.Nat64,actual_timestamp_seconds:t.Nat64,distributed_e8s_equivalent:t.Nat64,settled_proposals:t.Vec(a)}),c=t.Record({to_subaccount:t.Vec(t.Nat8),neuron_stake_e8s:t.Nat64,from:t.Opt(t.Principal),memo:t.Nat64,from_subaccount:t.Vec(t.Nat8),transfer_timestamp:t.Nat64,block_height:t.Nat64}),l=t.Record({error_message:t.Text,error_type:t.Int32}),u=t.Record({vote:t.Int32,voting_power:t.Nat64}),d=t.Record({no:t.Nat64,yes:t.Nat64,total:t.Nat64,timestamp_seconds:t.Nat64}),h=t.Record({new_controller:t.Opt(t.Principal)}),f=t.Record({amount_e8s:t.Nat64}),p=t.Record({topic:t.Int32,followees:t.Vec(a)}),g=t.Record({hot_key_to_remove:t.Opt(t.Principal)}),m=t.Record({new_hot_key:t.Opt(t.Principal)}),A=t.Record({additional_dissolve_delay_seconds:t.Nat32}),y=t.Record({dissolve_timestamp_seconds:t.Nat64}),b=t.Variant({RemoveHotKey:g,AddHotKey:m,StopDissolving:t.Record({}),StartDissolving:t.Record({}),IncreaseDissolveDelay:A,SetDissolveTimestamp:y}),v=t.Record({operation:t.Opt(b)}),w=t.Record({vote:t.Int32,proposal:t.Opt(a)}),x=t.Record({dissolve_delay_seconds:t.Nat64,kyc_verified:t.Bool,amount_e8s:t.Nat64,new_controller:t.Opt(t.Principal),nonce:t.Nat64}),k=t.Record({hash:t.Vec(t.Nat8)}),E=t.Record({e8s:t.Nat64}),q=t.Record({to_account:t.Opt(k),amount:t.Opt(E)}),B=t.Variant({Spawn:h,Split:f,Follow:p,Configure:v,RegisterVote:w,DisburseToNeuron:x,MakeProposal:r,Disburse:q}),I=t.Record({id:t.Opt(a),command:t.Opt(B)}),j=t.Record({nns_function:t.Int32,payload:t.Vec(t.Nat8)}),C=t.Record({dissolve_delay_seconds:t.Nat64}),_=t.Record({to_account:t.Opt(k)}),S=t.Variant({RewardToNeuron:C,RewardToAccount:_}),z=t.Record({node_provider:t.Opt(i),reward_mode:t.Opt(S),amount_e8s:t.Nat64}),M=t.Record({default_followees:t.Vec(t.Tuple(t.Int32,n))}),Q=t.Record({principals:t.Vec(t.Principal)}),N=t.Variant({ToRemove:i,ToAdd:i}),R=t.Record({change:t.Opt(N)}),T=t.Record({motion_text:t.Text}),P=t.Variant({ManageNeuron:I,ExecuteNnsFunction:j,RewardNodeProvider:z,SetDefaultFollowees:M,ManageNetworkEconomics:o,ApproveGenesisKyc:Q,AddOrRemoveNodeProvider:R,Motion:T});r.fill(t.Record({url:t.Text,action:t.Opt(P),summary:t.Text}));const O=t.Record({id:t.Opt(a),failure_reason:t.Opt(l),ballots:t.Vec(t.Tuple(t.Nat64,u)),proposal_timestamp_seconds:t.Nat64,reward_event_round:t.Nat64,failed_timestamp_seconds:t.Nat64,reject_cost_e8s:t.Nat64,latest_tally:t.Opt(d),decided_timestamp_seconds:t.Nat64,proposal:t.Opt(r),proposer:t.Opt(a),executed_timestamp_seconds:t.Nat64}),F=t.Record({controller:t.Opt(t.Principal),memo:t.Nat64}),D=t.Variant({Spawn:h,Split:f,ClaimOrRefresh:F,DisburseToNeuron:x,Disburse:q}),L=t.Record({command:t.Opt(D),timestamp:t.Nat64}),G=t.Record({vote:t.Int32,proposal_id:t.Opt(a)}),U=t.Variant({DissolveDelaySeconds:t.Nat64,WhenDissolvedTimestampSeconds:t.Nat64}),Z=t.Record({id:t.Opt(a),controller:t.Opt(t.Principal),recent_ballots:t.Vec(G),kyc_verified:t.Bool,not_for_profit:t.Bool,maturity_e8s_equivalent:t.Nat64,cached_neuron_stake_e8s:t.Nat64,created_timestamp_seconds:t.Nat64,aging_since_timestamp_seconds:t.Nat64,hot_keys:t.Vec(t.Principal),account:t.Vec(t.Nat8),dissolve_state:t.Opt(U),followees:t.Vec(t.Tuple(t.Int32,n)),neuron_fees_e8s:t.Nat64,transfer:t.Opt(c)}),V=(t.Record({default_followees:t.Vec(t.Tuple(t.Int32,n)),wait_for_quiet_threshold_seconds:t.Nat64,node_providers:t.Vec(i),economics:t.Opt(o),latest_reward_event:t.Opt(s),to_claim_transfers:t.Vec(c),short_voting_period_seconds:t.Nat64,proposals:t.Vec(t.Tuple(t.Nat64,O)),in_flight_commands:t.Vec(t.Tuple(t.Nat64,L)),neurons:t.Vec(t.Tuple(t.Nat64,Z)),genesis_timestamp_seconds:t.Nat64}),t.Variant({Ok:t.Null,Err:l})),H=t.Variant({Error:l,NeuronId:a}),W=t.Record({result:t.Opt(H)}),Y=t.Variant({Ok:Z,Err:l}),J=t.Record({dissolve_delay_seconds:t.Nat64,recent_ballots:t.Vec(G),created_timestamp_seconds:t.Nat64,state:t.Int32,retrieved_at_timestamp_seconds:t.Nat64,voting_power:t.Nat64,age_seconds:t.Nat64}),$=t.Variant({Ok:J,Err:l}),K=t.Record({id:t.Opt(a),status:t.Int32,topic:t.Int32,failure_reason:t.Opt(l),ballots:t.Vec(t.Tuple(t.Nat64,u)),proposal_timestamp_seconds:t.Nat64,reward_event_round:t.Nat64,failed_timestamp_seconds:t.Nat64,reject_cost_e8s:t.Nat64,latest_tally:t.Opt(d),reward_status:t.Int32,decided_timestamp_seconds:t.Nat64,proposal:t.Opt(r),proposer:t.Opt(a),executed_timestamp_seconds:t.Nat64}),X=t.Record({neuron_ids:t.Vec(t.Nat64),include_neurons_readable_by_caller:t.Bool}),ee=t.Record({neuron_infos:t.Vec(t.Tuple(t.Nat64,J)),full_neurons:t.Vec(Z)}),te=t.Record({include_reward_status:t.Vec(t.Int32),before_proposal:t.Opt(a),limit:t.Nat32,exclude_topic:t.Vec(t.Int32),include_status:t.Vec(t.Int32)}),re=t.Record({proposal_info:t.Vec(K)}),ae=t.Record({created_neuron_id:t.Opt(a)}),ne=t.Record({proposal_id:t.Opt(a)}),ie=t.Record({transfer_block_height:t.Nat64}),oe=t.Variant({Error:l,Spawn:ae,Split:ae,Follow:t.Record({}),Configure:t.Record({}),RegisterVote:t.Record({}),DisburseToNeuron:ae,MakeProposal:ne,Disburse:ie}),se=t.Record({command:t.Opt(oe)});return t.Service({claim_gtc_neurons:t.Func([t.Principal,t.Vec(a)],[V],[]),claim_or_refresh_neuron_from_account:t.Func([F],[W],[]),get_full_neuron:t.Func([t.Nat64],[Y],["query"]),get_neuron_ids:t.Func([],[t.Vec(t.Nat64)],["query"]),get_neuron_info:t.Func([t.Nat64],[$],["query"]),get_pending_proposals:t.Func([],[t.Vec(K)],["query"]),get_proposal_info:t.Func([t.Nat64],[t.Opt(K)],["query"]),list_neurons:t.Func([X],[ee],["query"]),list_proposals:t.Func([te],[re],["query"]),manage_neuron:t.Func([I],[se],[]),transfer_gtc_neuron:t.Func([a,a],[V],[])})},ledger:e=>{let{IDL:t}=e;const r=t.Text,a=t.Record({secs:t.Nat64,nanos:t.Nat32}),n=t.Record({max_message_size_bytes:t.Opt(t.Nat32),node_max_memory_size_bytes:t.Opt(t.Nat32),controller_id:t.Principal}),i=t.Record({e8s:t.Nat64}),o=(t.Record({send_whitelist:t.Vec(t.Tuple(t.Principal)),minting_account:r,transaction_window:t.Opt(a),max_message_size_bytes:t.Opt(t.Nat32),archive_options:t.Opt(n),initial_values:t.Vec(t.Tuple(r,i))}),t.Record({account:r})),s=t.Vec(t.Nat8),c=t.Nat64,l=t.Record({to_subaccount:t.Opt(s),from_subaccount:t.Opt(s),to_canister:t.Principal,max_fee:i,block_height:c}),u=t.Nat64,d=t.Record({timestamp_nanos:t.Nat64}),h=t.Record({to:r,fee:i,memo:u,from_subaccount:t.Opt(s),created_at_time:t.Opt(d),amount:i});return t.Service({account_balance_dfx:t.Func([o],[i],["query"]),notify_dfx:t.Func([l],[],[]),send_dfx:t.Func([h],[c],[])})},hzld:e=>{let{IDL:t}=e;const r=t.Principal,a=t.Record({user:r}),n=t.Nat,i=t.Vec(t.Nat8),o=t.Record({to:r,metadata:t.Opt(i),from:r,amount:n}),s=t.Variant({ok:t.Null,err:t.Variant({InsufficientBalance:t.Null,InvalidSource:r,Unauthorized:t.Null})}),c=t.Variant({removeOperator:t.Null,setOperator:t.Null}),l=t.Record({owner:r,operators:t.Vec(t.Tuple(r,c))}),u=t.Variant({ok:t.Null,err:t.Variant({Unauthorized:t.Null,InvalidOwner:r})});return t.Service({getBalance:t.Func([a],[t.Opt(n)],[]),getBalanceInsecure:t.Func([a],[t.Opt(n)],["query"]),getCommunityChestValueInsecure:t.Func([],[t.Opt(t.Nat)],["query"]),getInfo:t.Func([],[t.Record({balance:t.Nat,maxLiveSize:t.Nat,heap:t.Nat,size:t.Nat})],["query"]),getNumberOfAccounts:t.Func([],[t.Nat],[]),getTokenInfo:t.Func([],[t.Record({fee:t.Nat,totalMinted:t.Nat,totalSupply:t.Nat,totalTransactions:t.Nat})],["query"]),getTotalMinted:t.Func([],[t.Nat],[]),mint:t.Func([t.Principal,t.Nat],[],[]),transfer:t.Func([o],[s],[]),updateOperator:t.Func([t.Vec(l)],[u],[])})},nns:e=>{let{IDL:t}=e;const r=t.Text,a=t.Record({name:t.Text,canister_id:t.Principal}),n=t.Variant({Ok:t.Null,CanisterAlreadyAttached:t.Null,NameAlreadyTaken:t.Null,NameTooLong:t.Null,CanisterLimitExceeded:t.Null}),i=t.Vec(t.Nat8),o=t.Record({name:t.Text,sub_account:i,account_identifier:r}),s=t.Variant({Ok:o,AccountNotFound:t.Null,NameTooLong:t.Null,SubAccountLimitExceeded:t.Null}),c=t.Record({canister_id:t.Principal}),l=t.Variant({Ok:t.Null,CanisterNotFound:t.Null}),u=t.Record({name:t.Text,account_identifier:r}),d=t.Record({account_identifier:r,hardware_wallet_accounts:t.Vec(u),sub_accounts:t.Vec(o)}),h=t.Variant({Ok:d,AccountNotFound:t.Null}),f=t.Record({name:t.Text,canister_id:t.Principal}),p=t.Nat64,g=t.Record({latest_transaction_block_height:p,seconds_since_last_ledger_sync:t.Nat64,sub_accounts_count:t.Nat64,hardware_wallet_accounts_count:t.Nat64,accounts_count:t.Nat64,earliest_transaction_block_height:p,transactions_count:t.Nat64,block_height_synced_up_to:t.Opt(t.Nat64),latest_transaction_timestamp_nanos:t.Nat64,earliest_transaction_timestamp_nanos:t.Nat64}),m=t.Record({page_size:t.Nat8,offset:t.Nat32,account_identifier:r}),A=t.Record({timestamp_nanos:t.Nat64}),y=t.Record({e8s:t.Nat64}),b=t.Record({to:r,fee:y,amount:y}),v=t.Record({fee:y,from:r,amount:y}),w=t.Variant({Burn:t.Record({amount:y}),Mint:t.Record({amount:y}),Send:b,Receive:v}),x=t.Record({memo:t.Nat64,timestamp:A,block_height:p,transfer:w}),k=t.Record({total:t.Nat32,transactions:t.Vec(x)}),E=t.Tuple(t.Text,t.Text),q=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(E)}),B=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(E),status_code:t.Nat16}),I=t.Record({name:t.Text,account_identifier:r}),j=t.Variant({Ok:t.Null,AccountNotFound:t.Null,HardwareWalletAlreadyRegistered:t.Null,HardwareWalletLimitExceeded:t.Null,NameTooLong:t.Null}),C=t.Record({account_identifier:r}),_=t.Variant({Ok:t.Null,HardwareWalletNotFound:t.Null}),S=t.Record({new_name:t.Text,account_identifier:r}),z=t.Variant({Ok:t.Null,AccountNotFound:t.Null,SubAccountNotFound:t.Null,NameTooLong:t.Null});return t.Service({add_account:t.Func([],[r],[]),attach_canister:t.Func([a],[n],[]),create_sub_account:t.Func([t.Text],[s],[]),detach_canister:t.Func([c],[l],[]),get_account:t.Func([],[h],["query"]),get_canisters:t.Func([],[t.Vec(f)],["query"]),get_icp_to_cycles_conversion_rate:t.Func([],[t.Nat64],["query"]),get_stats:t.Func([],[g],["query"]),get_transactions:t.Func([m],[k],["query"]),http_request:t.Func([q],[B],["query"]),register_hardware_wallet:t.Func([I],[j],[]),remove_hardware_wallet:t.Func([C],[_],[]),rename_sub_account:t.Func([S],[z],[])})},ext:qr,ext2:e=>{let{IDL:t}=e;const r=t.Text,a=t.Nat32,n=t.Vec(t.Nat8),i=t.Text,o=t.Text,s=t.Text,c=t.Variant({principal:t.Principal,address:s}),l=t.Record({token:o,user:c}),u=t.Nat,d=t.Variant({InvalidToken:o,Other:t.Text}),h=t.Variant({ok:u,err:d}),f=t.Text,p=t.Variant({InvalidToken:o,Other:t.Text}),g=t.Variant({ok:i,err:p}),m=t.Int,A=t.Record({locked:t.Opt(m),seller:t.Principal,price:t.Nat64}),y=t.Variant({ok:t.Tuple(i,t.Opt(A)),err:p}),b=t.Nat32,v=t.Nat32,w=t.Variant({other:t.Text,canister:t.Record({id:b,canister:t.Text}),direct:t.Vec(v)}),x=t.Text,k=t.Record({token:f,from_subaccount:t.Opt(n),price:t.Opt(t.Nat64)}),E=t.Variant({ok:t.Null,err:p}),q=t.Tuple(t.Text,t.Variant({nat:t.Nat,blob:t.Vec(t.Nat8),nat8:t.Nat8,text:t.Text})),B=t.Variant({blob:t.Vec(t.Nat8),data:t.Vec(q),json:t.Text}),I=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(B),name:t.Text,symbol:t.Text}),nonfungible:t.Record({thumbnail:t.Text,asset:t.Text,metadata:t.Opt(B),name:t.Text})}),j=t.Variant({ok:t.Tuple(i,t.Nat64),err:p}),C=t.Record({token:a,time:m,seller:i,buyer:i,price:t.Nat64}),_=t.Variant({ok:I,err:p}),S=t.Variant({nft:a,nfts:t.Vec(a),sale:t.Nat64}),z=t.Record({expires:m,subaccount:n,payer:i,amount:t.Nat64,purchase:S}),M=t.Record({end:m,participants:t.Vec(i),name:t.Text,limit:t.Tuple(t.Nat64,t.Nat64),pricing:t.Vec(t.Tuple(t.Nat64,t.Nat64)),start:m}),Q=t.Variant({retain:t.Null,burn:t.Null,send:i}),N=t.Record({end:m,groups:t.Vec(M),start:m,quantity:t.Nat,remaining:Q}),R=t.Variant({ok:t.Tuple(i,t.Nat64),err:t.Text}),T=t.Record({id:t.Nat,end:m,name:t.Text,available:t.Bool,pricing:t.Vec(t.Tuple(t.Nat64,t.Nat64)),start:m}),P=t.Record({end:m,groups:t.Vec(T),start:m,quantity:t.Nat,remaining:t.Nat}),O=t.Variant({ok:t.Null,err:t.Text}),F=t.Record({time:m,seller:t.Principal,tokens:t.Vec(a),buyer:i,price:t.Nat64}),D=t.Vec(t.Nat8),L=t.Vec(t.Nat8),G=t.Record({to:c,token:o,notify:t.Bool,from:c,memo:D,subaccount:t.Opt(L),amount:u}),U=t.Variant({ok:u,err:t.Variant({CannotNotify:s,InsufficientBalance:t.Null,InvalidToken:o,Rejected:t.Null,Unauthorized:s,Other:t.Text})}),Z=t.Nat,V=t.Variant({ok:Z,err:p}),H=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),W=t.Tuple(t.Text,t.Text),Y=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(W)}),J=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),$=t.Record({token:t.Opt(J),body:t.Vec(t.Nat8)}),K=t.Variant({Callback:t.Record({token:J,callback:t.Func([J],[$],["query"])})}),X=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(W),streaming_strategy:t.Opt(K),status_code:t.Nat16}),ee=t.Variant({ok:H,err:p}),te=t.Record({startTime:m,whitelist:t.Bool,totalToSell:t.Nat,sold:t.Nat,bulkPricing:t.Vec(t.Tuple(t.Nat64,t.Nat64)),whitelistTime:m,salePrice:t.Nat64,remaining:t.Nat,price:t.Nat64}),re=t.Variant({ok:t.Vec(a),err:p}),ae=t.Variant({ok:t.Vec(t.Tuple(a,t.Opt(A),t.Opt(t.Vec(t.Nat8)))),err:p});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([r,t.Nat32,t.Text,t.Text,t.Text],[],[]),addThumbnail:t.Func([r,t.Vec(t.Nat8)],[],[]),adminKillHeartbeat:t.Func([],[],[]),adminStartHeartbeat:t.Func([],[],[]),allSettlements:t.Func([],[t.Vec(t.Tuple(a,t.Record({subaccount:n,seller:t.Principal,buyer:i,price:t.Nat64})))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([l],[h],["query"]),bearer:t.Func([f],[g],["query"]),details:t.Func([f],[y],["query"]),ext_addAssetCanister:t.Func([],[],[]),ext_admin:t.Func([],[t.Principal],["query"]),ext_assetAdd:t.Func([r,t.Text,t.Text,w,t.Nat],[],[]),ext_assetExists:t.Func([r],[t.Bool],["query"]),ext_assetFits:t.Func([t.Bool,t.Nat],[t.Bool],["query"]),ext_assetStream:t.Func([r,t.Vec(t.Nat8),t.Bool],[t.Bool],[]),ext_balance:t.Func([l],[h],["query"]),ext_bearer:t.Func([f],[g],["query"]),ext_capInit:t.Func([],[],[]),ext_expired:t.Func([],[t.Vec(t.Tuple(i,n))],["query"]),ext_extensions:t.Func([],[t.Vec(x)],["query"]),ext_marketplaceList:t.Func([k],[E],[]),ext_marketplaceListings:t.Func([],[t.Vec(t.Tuple(a,A,I))],["query"]),ext_marketplacePurchase:t.Func([f,t.Nat64,i],[j],[]),ext_marketplaceSettle:t.Func([i],[E],[]),ext_marketplaceStats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),ext_marketplaceTransactions:t.Func([],[t.Vec(C)],["query"]),ext_metadata:t.Func([f],[_],["query"]),ext_mint:t.Func([t.Vec(t.Tuple(i,I))],[t.Vec(a)],[]),ext_payments:t.Func([],[t.Vec(t.Tuple(i,z))],["query"]),ext_removeAdmin:t.Func([],[],[]),ext_saleClose:t.Func([],[t.Bool],[]),ext_saleCurrent:t.Func([],[t.Opt(N)],["query"]),ext_saleOpen:t.Func([t.Vec(M),Q,t.Vec(i)],[t.Bool],[]),ext_salePurchase:t.Func([t.Nat,t.Nat64,t.Nat64,i],[R],[]),ext_saleSettings:t.Func([i],[t.Opt(P)],["query"]),ext_saleSettle:t.Func([i],[O],[]),ext_saleTransactions:t.Func([],[t.Vec(F)],["query"]),ext_setAdmin:t.Func([t.Principal],[],[]),ext_setCollectionMetadata:t.Func([t.Text,t.Text],[],[]),ext_setMarketplaceOpen:t.Func([m],[],[]),ext_setOwner:t.Func([t.Principal],[],[]),ext_setRoyalty:t.Func([i,t.Nat64],[],[]),ext_transfer:t.Func([G],[U],[]),extdata_supply:t.Func([f],[V],["query"]),extensions:t.Func([],[t.Vec(x)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(i,n))],["query"]),getMetadata:t.Func([],[t.Vec(t.Tuple(a,H))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(a,i))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(a,H))],["query"]),heartbeat_assetCanisters:t.Func([],[],[]),heartbeat_capEvents:t.Func([],[],[]),heartbeat_disbursements:t.Func([],[],[]),heartbeat_external:t.Func([],[],[]),heartbeat_isRunning:t.Func([],[t.Bool],["query"]),heartbeat_paymentSettlements:t.Func([],[],[]),heartbeat_pending:t.Func([],[t.Vec(t.Tuple(t.Text,t.Nat))],["query"]),heartbeat_start:t.Func([],[],[]),heartbeat_stop:t.Func([],[],[]),http_request:t.Func([Y],[X],["query"]),http_request_streaming_callback:t.Func([J],[$],["query"]),isHeartbeatRunning:t.Func([],[t.Bool],["query"]),list:t.Func([k],[E],[]),listings:t.Func([],[t.Vec(t.Tuple(a,A,H))],["query"]),lock:t.Func([f,t.Nat64,i,n],[g],[]),metadata:t.Func([f],[ee],["query"]),reserve:t.Func([t.Nat64,t.Nat64,i,n],[R],[]),retreive:t.Func([i],[O],[]),saleTransactions:t.Func([],[t.Vec(F)],["query"]),salesSettings:t.Func([i],[te],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([f],[E],[]),settlements:t.Func([],[t.Vec(t.Tuple(a,i,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),supply:t.Func([f],[V],["query"]),tokens:t.Func([i],[re],["query"]),tokens_ext:t.Func([i],[ae],["query"]),transactions:t.Func([],[t.Vec(C)],["query"]),transfer:t.Func([G],[U],[])})},nft:e=>{let{IDL:t}=e;const r=t.Record({data:t.Vec(t.Vec(t.Nat8)),ctype:t.Text}),a=t.Record({thumbnail:t.Opt(r),name:t.Text,payload:r}),n=t.Vec(t.Nat8),i=n,o=t.Nat32,s=t.Text,c=s,l=t.Record({subaccount:i,seller:t.Principal,buyer:c,price:t.Nat64}),u=t.Text,d=t.Variant({principal:t.Principal,address:s}),h=t.Record({token:u,user:d}),f=t.Nat,p=t.Variant({InvalidToken:u,Other:t.Text}),g=t.Variant({ok:f,err:p}),m=u,A=p,y=t.Variant({ok:c,err:A}),b=t.Int,v=t.Record({locked:t.Opt(b),seller:t.Principal,price:t.Nat64}),w=t.Variant({ok:t.Tuple(c,t.Opt(v)),err:A}),x=t.Text,k=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),E=t.Tuple(t.Text,t.Text),q=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(E)}),B=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),I=t.Record({token:t.Opt(B),body:t.Vec(t.Nat8)}),j=t.Variant({Callback:t.Record({token:B,callback:t.Func([B],[I],["query"])})}),C=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(E),streaming_strategy:t.Opt(j),status_code:t.Nat16}),_=t.Record({token:m,from_subaccount:t.Opt(i),price:t.Opt(t.Nat64)}),S=t.Variant({ok:t.Null,err:A}),z=t.Variant({ok:k,err:A}),M=t.Record({to:c,asset:t.Nat32}),Q=f,N=t.Variant({ok:Q,err:A}),R=t.Variant({ok:t.Vec(o),err:A}),T=t.Variant({ok:t.Vec(t.Tuple(o,t.Opt(v),t.Opt(t.Vec(t.Nat8)))),err:A}),P=t.Record({token:m,time:b,seller:t.Principal,buyer:c,price:t.Nat64}),O=t.Vec(t.Nat8),F=t.Record({to:d,token:u,notify:t.Bool,from:d,memo:O,subaccount:t.Opt(n),amount:f}),D=t.Variant({ok:f,err:t.Variant({CannotNotify:s,InsufficientBalance:t.Null,InvalidToken:u,Rejected:t.Null,Unauthorized:s,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([a],[t.Nat],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(i)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(o,l))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([h],[g],["query"]),bearer:t.Func([m],[y],["query"]),clearPayments:t.Func([t.Principal,t.Vec(i)],[],[]),details:t.Func([m],[w],["query"]),extensions:t.Func([],[t.Vec(x)],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(o,c))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(o,k))],["query"]),http_request:t.Func([q],[C],["query"]),http_request_streaming_callback:t.Func([B],[I],["query"]),list:t.Func([_],[S],[]),listings:t.Func([],[t.Vec(t.Tuple(o,v,k))],["query"]),lock:t.Func([m,t.Nat64,c,i],[y],[]),metadata:t.Func([m],[z],["query"]),mintNFT:t.Func([M],[o],[]),payments:t.Func([],[t.Opt(t.Vec(i))],["query"]),removePayments:t.Func([t.Vec(i)],[],[]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([m],[S],[]),settlements:t.Func([],[t.Vec(t.Tuple(o,c,t.Nat64))],["query"]),streamAsset:t.Func([t.Nat,t.Bool,t.Vec(t.Nat8)],[],[]),supply:t.Func([m],[N],["query"]),tokens:t.Func([c],[R],["query"]),tokens_ext:t.Func([c],[T],["query"]),transactions:t.Func([],[t.Vec(P)],["query"]),transfer:t.Func([F],[D],[]),updateThumb:t.Func([t.Text,r],[t.Opt(t.Nat)],[]),transfer_bulk:t.Func([t.Vec(t.Tuple(o,s))],[t.Vec(t.Tuple(o,s))],[]),list_bulk:t.Func([t.Vec(t.Tuple(o,t.Nat64))],[t.Vec(t.Tuple(o,t.Nat64))],[]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"])})},sale:e=>{let{IDL:t}=e;const r=t.Vec(t.Nat8),a=t.Nat32,n=t.Text,i=t.Record({subaccount:r,seller:t.Principal,buyer:n,price:t.Nat64}),o=t.Text,s=t.Text,c=t.Variant({principal:t.Principal,address:s}),l=t.Record({token:o,user:c}),u=t.Nat,d=t.Variant({InvalidToken:o,Other:t.Text}),h=t.Variant({ok:u,err:d}),f=t.Text,p=t.Variant({InvalidToken:o,Other:t.Text}),g=t.Variant({ok:n,err:p}),m=t.Int,A=t.Record({locked:t.Opt(m),seller:t.Principal,price:t.Nat64}),y=t.Variant({ok:t.Tuple(n,t.Opt(A)),err:p}),b=t.Text,v=t.Variant({fungible:t.Record({decimals:t.Nat8,metadata:t.Opt(t.Vec(t.Nat8)),name:t.Text,symbol:t.Text}),nonfungible:t.Record({metadata:t.Opt(t.Vec(t.Nat8))})}),w=t.Tuple(t.Text,t.Text),x=t.Record({url:t.Text,method:t.Text,body:t.Vec(t.Nat8),headers:t.Vec(w)}),k=t.Record({key:t.Text,sha256:t.Opt(t.Vec(t.Nat8)),index:t.Nat,content_encoding:t.Text}),E=t.Record({token:t.Opt(k),body:t.Vec(t.Nat8)}),q=t.Variant({Callback:t.Record({token:k,callback:t.Func([k],[E],["query"])})}),B=t.Record({body:t.Vec(t.Nat8),headers:t.Vec(w),streaming_strategy:t.Opt(q),status_code:t.Nat16}),I=t.Record({token:f,from_subaccount:t.Opt(r),price:t.Opt(t.Nat64)}),j=t.Variant({ok:t.Null,err:p}),C=t.Variant({ok:v,err:p}),_=t.Record({to:n,asset:t.Nat32}),S=t.Variant({ok:t.Tuple(n,t.Nat64),err:t.Text}),z=t.Variant({ok:t.Null,err:t.Text}),M=t.Record({time:m,seller:t.Principal,tokens:t.Vec(a),buyer:n,price:t.Nat64}),Q=t.Record({startTime:m,whitelist:t.Bool,totalToSell:t.Nat,bulkPricing:t.Vec(t.Tuple(t.Nat64,t.Nat64)),whitelistTime:m,salePrice:t.Nat64,remaining:t.Nat,sold:t.Nat,price:t.Nat64}),N=t.Record({expires:m,subaccount:r,tokens:t.Vec(a),buyer:n,price:t.Nat64}),R=t.Nat,T=t.Variant({ok:R,err:p}),P=t.Variant({ok:t.Vec(a),err:p}),O=t.Variant({ok:t.Vec(t.Tuple(a,t.Opt(A),t.Opt(t.Vec(t.Nat8)))),err:p}),F=t.Record({token:f,time:m,seller:t.Principal,buyer:n,price:t.Nat64}),D=t.Vec(t.Nat8),L=t.Vec(t.Nat8),G=t.Record({to:c,token:o,notify:t.Bool,from:c,memo:D,subaccount:t.Opt(L),amount:u}),U=t.Variant({ok:u,err:t.Variant({CannotNotify:s,InsufficientBalance:t.Null,InvalidToken:o,Rejected:t.Null,Unauthorized:s,Other:t.Text})});return t.Service({acceptCycles:t.Func([],[],[]),addAsset:t.Func([t.Text,t.Text],[t.Text],[]),addThumb:t.Func([t.Text,t.Text],[t.Text],[]),adminKillHeartbeat:t.Func([],[],[]),adminStartHeartbeat:t.Func([],[],[]),allPayments:t.Func([],[t.Vec(t.Tuple(t.Principal,t.Vec(r)))],["query"]),allSettlements:t.Func([],[t.Vec(t.Tuple(a,i))],["query"]),availableCycles:t.Func([],[t.Nat],["query"]),balance:t.Func([l],[h],["query"]),bearer:t.Func([f],[g],["query"]),clearPayments:t.Func([t.Principal,t.Vec(r)],[],[]),cronCapEvents:t.Func([],[],[]),cronDisbursements:t.Func([],[],[]),cronSettlements:t.Func([],[],[]),details:t.Func([f],[y],["query"]),extensions:t.Func([],[t.Vec(b)],["query"]),failedSales:t.Func([],[t.Vec(t.Tuple(n,r))],["query"]),getAssets:t.Func([],[t.Vec(t.Tuple(t.Text,t.Text))],["query"]),getMinter:t.Func([],[t.Principal],["query"]),getRegistry:t.Func([],[t.Vec(t.Tuple(a,n))],["query"]),getTokens:t.Func([],[t.Vec(t.Tuple(a,v))],["query"]),historicExport:t.Func([],[t.Bool],[]),http_request:t.Func([x],[B],["query"]),http_request_streaming_callback:t.Func([k],[E],["query"]),initCap:t.Func([],[],[]),list:t.Func([I],[j],[]),listings:t.Func([],[t.Vec(t.Tuple(a,A,v))],["query"]),lock:t.Func([f,t.Nat64,n,r],[g],[]),metadata:t.Func([f],[C],["query"]),mintNFT:t.Func([_],[a],[]),payments:t.Func([],[t.Opt(t.Vec(r))],["query"]),reserve:t.Func([t.Nat64,t.Nat64,n,r],[S],[]),retreive:t.Func([n],[z],[]),saleTransactions:t.Func([],[t.Vec(M)],["query"]),salesSettings:t.Func([n],[Q],["query"]),salesSettlements:t.Func([],[t.Vec(t.Tuple(n,N))],["query"]),setMinter:t.Func([t.Principal],[],[]),settle:t.Func([f],[j],[]),settlements:t.Func([],[t.Vec(t.Tuple(a,n,t.Nat64))],["query"]),stats:t.Func([],[t.Nat64,t.Nat64,t.Nat64,t.Nat64,t.Nat,t.Nat,t.Nat],["query"]),supply:t.Func([f],[T],["query"]),tokens:t.Func([n],[P],["query"]),tokens_ext:t.Func([n],[O],["query"]),transactions:t.Func([],[t.Vec(F)],["query"]),transfer:t.Func([G],[U],[])})},treasure:Dr,default:qr};var Hr={"dhiaa-ryaaa-aaaae-qabva-cai":[0,2015],"pk6rk-6aaaa-aaaae-qaazq-cai":[0,2009],"jmuqr-yqaaa-aaaaj-qaicq-cai":[0,3507],"jeghr-iaaaa-aaaah-qco7q-cai":[0,1e4],"y3b7h-siaaa-aaaah-qcnwa-cai":[0,1e4],"bxdf4-baaaa-aaaah-qaruq-cai":[1,1e4],"3db6u-aiaaa-aaaah-qbjbq-cai":[0,8001],"poyn6-dyaaa-aaaah-qcfzq-cai":[0,30133],"nfvlz-jaaaa-aaaah-qcciq-cai":[0,6e4]},Wr={};for(const Fv in Hr)if(Hr.hasOwnProperty(Fv)){Wr[Fv]=[];for(var Yr=Hr[Fv][0];Yr<Hr[Fv][1]+Hr[Fv][0];Yr++)Wr[Fv].push([Yr,{nonfungible:{metadata:[]}}])}class Jr{constructor(e,t,r){return this._canister=!1,this._idl=!1,this._actor=!1,this._type="",e&&(this._canister=e),t&&(this._idl=t),r&&(this._type=r),new Proxy(this,{get:(e,t)=>async function(){return e._actor||(e._actor=await window.ic[e._type].createActor({canisterId:e._canister,interfaceFactory:e._idl})),await e._actor[t](...arguments)}})}}class $r{constructor(e,t){this._mapIdls={[hr]:Vr.ledger,"rrkah-fqaaa-aaaaa-aaaaq-cai":Vr.governance,"qoctq-giaaa-aaaaa-aaaea-cai":Vr.nns,"qz7gu-giaaa-aaaaf-qaaka-cai":Vr.hzld,"rkp4c-7iaaa-aaaaa-aaaca-cai":Er,"kxh4l-cyaaa-aaaah-qadaq-cai":Br,"bxdf4-baaaa-aaaah-qaruq-cai":Ir,"y3b7h-siaaa-aaaah-qcnwa-cai":Ir,"jeghr-iaaaa-aaaah-qco7q-cai":Ir,"4nvhy-3qaaa-aaaah-qcnoq-cai":jr,"qcg3w-tyaaa-aaaah-qakea-cai":jr,"qgsqp-byaaa-aaaah-qbi4q-cai":Cr,"d3ttm-qaaaa-aaaai-qam4a-cai":_r,"3db6u-aiaaa-aaaah-qbjbq-cai":Ir,"bzsui-sqaaa-aaaah-qce2a-cai":Rr,"ctt6t-faaaa-aaaah-qcpbq-cai":Tr,"3mttv-dqaaa-aaaah-qcn6q-cai":Tr,"v3zkd-syaaa-aaaah-qcm5a-cai":Tr,"unssi-hiaaa-aaaah-qcmya-cai":Tr,"zvycl-fyaaa-aaaah-qckmq-cai":Tr,"px5ub-qqaaa-aaaah-qcjxa-cai":Or,"njgly-uaaaa-aaaah-qb6pa-cai":Sr,"ahl3d-xqaaa-aaaaj-qacca-cai":zr,"er7d4-6iaaa-aaaaj-qac2q-cai":Qr,"nfvlz-jaaaa-aaaah-qcciq-cai":Nr,"xkbqi-2qaaa-aaaah-qbpqq-cai":jr,"q6hjz-kyaaa-aaaah-qcama-cai":Ir,"fl5nr-xiaaa-aaaai-qbjmq-cai":Pr,"33uhc-liaaa-aaaah-qcbra-cai":Mr,"6z5wo-yqaaa-aaaah-qcsfa-cai":Fr,"yigae-jqaaa-aaaah-qczbq-cai":Dr},this._metadata={[hr]:{name:"ICP",symbol:"ICP",decimals:8,type:"fungible"},"qz7gu-giaaa-aaaaf-qaaka-cai":{name:"HZLD",symbol:"HZLD",decimals:0,type:"fungible"}},this._identity=!1,this._host=!1,this._agent=!1,this._canisters={},t&&(this._identity=t),e&&(this._host=e),this._makeAgent()}idl(e,t){this._mapIdls[e]=t}setIdentity(e){return this._identity=e||!1,this._makeAgent(),this}setHost(e){return this._host=e||!1,this._makeAgent(),this}canister(e,t){if(t){if("string"==typeof t){if(!Vr.hasOwnProperty(t))throw new Error(t+" is not a preloaded IDL");t=Vr[t]}}else t=this._mapIdls.hasOwnProperty(e)?this._mapIdls[e]:Vr.default;return this._canisters.hasOwnProperty(e)||("infinityWallet"==this._agent||"plug"==this._agent?this._canisters[e]=new Jr(e,t,this._agent):this._canisters[e]=Tt.createActor(t,{agent:this._agent,canisterId:e})),this._canisters[e]}token(e,t){e||(e=hr);var r=Zr(e);t||(t=this._mapIdls.hasOwnProperty(r.canister)?this._mapIdls[r.canister]:Vr.ext);var a=this.canister(r.canister,t);return{call:a,fee:()=>new Promise(((e,t)=>{switch(r.canister){case hr:e(1e4);break;case"qz7gu-giaaa-aaaaf-qaaka-cai":e(1);break;default:e(0)}})),size:async()=>(Wr.hasOwnProperty(r.canister)||(Wr[r.canister]=await a.getTokens()),Wr[r.canister].length),listings:async()=>{Wr.hasOwnProperty(r.canister)||(Wr[r.canister]=await a.getTokens());var e=await a.listings();return Wr[r.canister].map((t=>[t[0],!!e.find((e=>e[0]==t[0]))&&e.find((e=>e[0]==t[0]))[1],t[1]]))},stats:()=>new Promise(((e,t)=>{try{a.stats().then((t=>{e({total:(Number(t[0]/1000000n)/100).toFixed(2),high:(Number(t[1]/1000000n)/100).toFixed(2),low:(Number(t[2]/1000000n)/100).toFixed(2),floor:(Number(t[3]/1000000n)/100).toFixed(2),listings:Number(t[4]),tokens:Number(t[5]),sales:Number(t[6]),average:Number(t[6])?(Number(t[0]/t[6]/1000000n)/100).toFixed(2):"-"})})).catch(t)}catch(r){t(r)}})),getTokens:(e,t)=>new Promise(((n,i)=>{switch(r.canister){case"4nvhy-3qaaa-aaaah-qcnoq-cai":case"qcg3w-tyaaa-aaaah-qakea-cai":case"jzg5e-giaaa-aaaah-qaqda-cai":case"d3ttm-qaaaa-aaaai-qam4a-cai":case"xkbqi-2qaaa-aaaah-qbpqq-cai":e!==mr(t,0)?n([]):a.user_tokens(v.fromText(t)).then((e=>{n(e.map((e=>({id:Ur(r.canister,Number(e)),canister:r.canister,index:Number(e),listing:!1,metadata:!1,wrapped:!1}))))}));break;case"fl5nr-xiaaa-aaaai-qbjmq-cai":e!==mr(t,0)?n([]):a.getAllNFT(v.fromText(t)).then((e=>{n(e.map((e=>({id:Ur(r.canister,Number(e[0])),canister:r.canister,index:Number(e[0]),listing:!1,metadata:!1,wrapped:!1}))))}));break;default:if("undefined"==typeof a.tokens_ext)i("Not supported");else try{a.tokens_ext(e).then((e=>{if("undefined"!=typeof e.ok){var t=e.ok.map((e=>({index:e[0],id:Ur(r.canister,e[0]),canister:r.canister,listing:!!e[1].length&&e[1][0],metadata:!!e[2].length&&e[2][0]})));n(t)}else"undefined"!=typeof e.err?e.err.hasOwnProperty("Other")&&"No tokens"===e.err.Other?n([]):i(e.err):i(e)})).catch(i)}catch(o){i(o)}}})),getMetadata:()=>new Promise(((e,t)=>{this._metadata.hasOwnProperty(r.canister)?e(this._metadata[r.canister]):(r.canister,a.metadata(r.token).then((r=>{if("undefined"!=typeof r.ok)if("undefined"!=typeof r.ok.fungible)e({name:r.ok.fungible.name,symbol:r.ok.fungible.symbol,decimals:r.ok.fungible.decimals,metadata:r.ok.fungible.metadata,type:"fungible"});else{var a=r.ok.nonfungible.metadata[0];"undefined"!=typeof a&&a.length>256&&(a=a.slice(0,256)),e({metadata:[a],type:"nonfungible"})}else"undefined"!=typeof r.err?t(r.err):t(r)})).catch(t))})),getBearer:()=>new Promise(((e,t)=>{a.bearer(r.token).then((r=>{"undefined"!=typeof r.ok?e(r.ok):"undefined"!=typeof r.err?t(r.err):t(r)})).catch(t)})),getDetails:()=>new Promise(((e,t)=>{a.details(r.token).then((r=>{"undefined"!=typeof r.ok?e(r.ok):"undefined"!=typeof r.err?t(r.err):t(r)})).catch(t)})),getBalance:(e,t)=>new Promise(((n,i)=>{var o;switch(r.canister){case hr:pr.getAccountBalance(e).then((e=>{n(e)}));break;case"qz7gu-giaaa-aaaaf-qaaka-cai":o={user:v.fromText(t)},a.getBalanceInsecure(o).then((e=>{var t=0===e.length?0:e[0];n(t)})).catch(i);break;default:o={user:Gr(e),token:r.token},a.balance(o).then((e=>{"undefined"!=typeof e.ok?n(e.ok):"undefined"!=typeof e.err?i(e.err):i(e)})).catch(i)}})),getTransactions:(e,t)=>new Promise(((t,a)=>{if(r.canister===hr)pr.getTransactionsByAccount(e).then((e=>{Array.isArray(e)||t([]);var r=[];e.map((e=>"TRANSACTION"===e.type&&("COMPLETED"===e.status&&(r.push({from:e.account1Address,to:e.account2Address,amount:Number(e.amount/1e8),fee:Number(e.fee/1e8),hash:e.hash,timestamp:e.timestamp,memo:Number(e.memo)}),!0)))),r.reverse(),t(r)})).catch(a);else t([])})),list:(t,n)=>new Promise(((i,o)=>{var s;switch(r.canister){case hr:case"qz7gu-giaaa-aaaaf-qaaka-cai":o("Not supported");break;default:s={token:e,from_subaccount:[Ar(null!==t&&void 0!==t?t:0)],price:0===n?[]:[n]},a.list(s).then((e=>{"undefined"!=typeof e.ok?i(!0):o(JSON.stringify(e.err))})).catch(o)}})),transfer:(t,n,i,o,s,c,l)=>new Promise(((u,d)=>{var h;switch(r.canister){case hr:h={from_subaccount:[Ar(null!==n&&void 0!==n?n:0)],to:i,amount:{e8s:o},fee:{e8s:s},memo:c?Number(BigInt(c)):0,created_at_time:[]},a.send_dfx(h).then((e=>{u(!0)})).catch(d);break;case"qcg3w-tyaaa-aaaah-qakea-cai":case"4nvhy-3qaaa-aaaah-qcnoq-cai":case"jzg5e-giaaa-aaaah-qaqda-cai":case"d3ttm-qaaaa-aaaai-qam4a-cai":case"xkbqi-2qaaa-aaaah-qbpqq-cai":kr(i)||d("This does not support traditional addresses, you must use a Principal"),a.transfer_to(v.fromText(i),r.index).then((e=>{e?u(!0):d("Something went wrong")})).catch(d);break;case"fl5nr-xiaaa-aaaai-qbjmq-cai":kr(i)||d("This does not support traditional addresses, you must use a Principal"),a.transferFrom(v.fromText(t),v.fromText(i),r.index).then((e=>{e.hasOwnProperty("ok")?u(!0):d("Something went wrong")})).catch(d);break;case"qz7gu-giaaa-aaaaf-qaaka-cai":h={to:v.fromText(i),metadata:[],from:v.fromText(t),amount:o},a.transfer(h).then((e=>{"undefined"!=typeof e.ok?u(!0):d(JSON.stringify(e.err))})).catch(d);break;default:h={token:e,from:{address:mr(t,null!==n&&void 0!==n?n:0)},subaccount:[Ar(null!==n&&void 0!==n?n:0)],to:Gr(i),amount:o,fee:s,memo:wr(c),notify:l},a.transfer(h).then((e=>{"undefined"!=typeof e.ok?u(e.ok):d(JSON.stringify(e.err))})).catch(d)}})),mintCycles:(e,t,n,i,o)=>new Promise(((e,s)=>{switch(r.canister){case hr:var c=gr(n),l=mr(fr,c),u={from_subaccount:[Ar(null!==t&&void 0!==t?t:0)],to:l,fee:{e8s:o},memo:Number(BigInt("0x50555054")),created_at_time:[],amount:{e8s:i}};a.send_dfx(u).then((r=>{var n={block_height:r,max_fee:{e8s:o},from_subaccount:[Ar(null!==t&&void 0!==t?t:0)],to_subaccount:[Ar(c)],to_canister:v.fromText(fr)};a.notify_dfx(n).then(e).catch(s)})).catch(s);break;case"5ymop-yyaaa-aaaah-qaa4q-cai":s("WIP");break;default:s("Cycle topup is not supported by this token")}}))}}_makeAgent(){if(this._identity.hasOwnProperty("type"))this._agent=this._identity.type;else{var e={};this._identity&&(e.identity=this._identity),this._host&&(e.host=this._host),this._agent=new lt(e)}}}const Kr={connect:(e,t)=>new $r(null!==e&&void 0!==e?e:"https://boundary.ic0.app/",t),decodeTokenId:Zr,encodeTokenId:Ur,toAddress:mr,toSubaccount:Ar};var Xr,ea=Xr||(Xr={});ea.Pop="POP",ea.Push="PUSH",ea.Replace="REPLACE";var ta=function(e){return e};function ra(e){e.preventDefault(),e.returnValue=""}function aa(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function na(){return Math.random().toString(36).substr(2,8)}function ia(e){var t=e.pathname;t=void 0===t?"/":t;var r=e.search;return r=void 0===r?"":r,e=void 0===(e=e.hash)?"":e,r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),e&&"#"!==e&&(t+="#"===e.charAt(0)?e:"#"+e),t}function oa(e){var t={};if(e){var r=e.indexOf("#");0<=r&&(t.hash=e.substr(r),e=e.substr(0,r)),0<=(r=e.indexOf("?"))&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sa(e,t){if(!e)throw new Error(t)}const ca=(0,n.createContext)(null);const la=(0,n.createContext)(null);const ua=(0,n.createContext)({outlet:null,matches:[]});function da(e){return function(e){let t=(0,n.useContext)(ua).outlet;if(t)return(0,n.createElement)(ba.Provider,{value:e},t);return t}(e.context)}function ha(e){sa(!1)}function fa(e){let{basename:t="/",children:r=null,location:a,navigationType:i=Xr.Pop,navigator:o,static:s=!1}=e;ma()&&sa(!1);let c=Ma(t),l=(0,n.useMemo)((()=>({basename:c,navigator:o,static:s})),[c,o,s]);"string"===typeof a&&(a=oa(a));let{pathname:u="/",search:d="",hash:h="",state:f=null,key:p="default"}=a,g=(0,n.useMemo)((()=>{let e=Sa(u,c);return null==e?null:{pathname:e,search:d,hash:h,state:f,key:p}}),[c,u,d,h,f,p]);return null==g?null:(0,n.createElement)(ca.Provider,{value:l},(0,n.createElement)(la.Provider,{children:r,value:{location:g,navigationType:i}}))}function pa(e){let{children:t,location:r}=e;return function(e,t){ma()||sa(!1);let{matches:r}=(0,n.useContext)(ua),a=r[r.length-1],i=a?a.params:{},o=(a&&a.pathname,a?a.pathnameBase:"/");a&&a.route;0;let s,c=Aa();if(t){var l;let e="string"===typeof t?oa(t):t;"/"===o||(null==(l=e.pathname)?void 0:l.startsWith(o))||sa(!1),s=e}else s=c;let u=s.pathname||"/",d="/"===o?u:u.slice(o.length)||"/",h=function(e,t,r){void 0===r&&(r="/");let a=Sa(("string"===typeof t?oa(t):t).pathname||"/",r);if(null==a)return null;let n=ka(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(n);let i=null;for(let o=0;null==i&&o<n.length;++o)i=Ia(n[o],a);return i}(e,{pathname:d});0;return ja(h&&h.map((e=>Object.assign({},e,{params:Object.assign({},i,e.params),pathname:za([o,e.pathname]),pathnameBase:"/"===e.pathnameBase?o:za([o,e.pathnameBase])}))),r)}(xa(t),r)}function ga(e){ma()||sa(!1);let{basename:t,navigator:r}=(0,n.useContext)(ca),{hash:a,pathname:i,search:o}=wa(e),s=i;if("/"!==t){let r=function(e){return""===e||""===e.pathname?"/":"string"===typeof e?oa(e).pathname:e.pathname}(e),a=null!=r&&r.endsWith("/");s="/"===i?t+(a?"/":""):za([t,i])}return r.createHref({pathname:s,search:o,hash:a})}function ma(){return null!=(0,n.useContext)(la)}function Aa(){return ma()||sa(!1),(0,n.useContext)(la).location}function ya(){ma()||sa(!1);let{basename:e,navigator:t}=(0,n.useContext)(ca),{matches:r}=(0,n.useContext)(ua),{pathname:a}=Aa(),i=JSON.stringify(r.map((e=>e.pathnameBase))),o=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{o.current=!0})),(0,n.useCallback)((function(r,n){if(void 0===n&&(n={}),!o.current)return;if("number"===typeof r)return void t.go(r);let s=_a(r,JSON.parse(i),a);"/"!==e&&(s.pathname=za([e,s.pathname])),(n.replace?t.replace:t.push)(s,n.state)}),[e,t,i,a])}const ba=(0,n.createContext)(null);function va(){let{matches:e}=(0,n.useContext)(ua),t=e[e.length-1];return t?t.params:{}}function wa(e){let{matches:t}=(0,n.useContext)(ua),{pathname:r}=Aa(),a=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,n.useMemo)((()=>_a(e,JSON.parse(a),r)),[e,a,r])}function xa(e){let t=[];return n.Children.forEach(e,(e=>{if(!(0,n.isValidElement)(e))return;if(e.type===n.Fragment)return void t.push.apply(t,xa(e.props.children));e.type!==ha&&sa(!1);let r={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(r.children=xa(e.props.children)),t.push(r)})),t}function ka(e,t,r,a){return void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===a&&(a=""),e.forEach(((e,n)=>{let i={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:n,route:e};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(a)||sa(!1),i.relativePath=i.relativePath.slice(a.length));let o=za([a,i.relativePath]),s=r.concat(i);e.children&&e.children.length>0&&(!0===e.index&&sa(!1),ka(e.children,t,s,o)),(null!=e.path||e.index)&&t.push({path:o,score:Ba(o,e.index),routesMeta:s})})),t}const Ea=/^:\w+$/,qa=e=>"*"===e;function Ba(e,t){let r=e.split("/"),a=r.length;return r.some(qa)&&(a+=-2),t&&(a+=2),r.filter((e=>!qa(e))).reduce(((e,t)=>e+(Ea.test(t)?3:""===t?1:10)),a)}function Ia(e,t){let{routesMeta:r}=e,a={},n="/",i=[];for(let o=0;o<r.length;++o){let e=r[o],s=o===r.length-1,c="/"===n?t:t.slice(n.length)||"/",l=Ca({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c);if(!l)return null;Object.assign(a,l.params);let u=e.route;i.push({params:a,pathname:za([n,l.pathname]),pathnameBase:za([n,l.pathnameBase]),route:u}),"/"!==l.pathnameBase&&(n=za([n,l.pathnameBase]))}return i}function ja(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((r,a,i)=>(0,n.createElement)(ua.Provider,{children:void 0!==a.route.element?a.route.element:(0,n.createElement)(da,null),value:{outlet:r,matches:t.concat(e.slice(0,i+1))}})),null)}function Ca(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));e.endsWith("*")?(a.push("*"),n+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n+=r?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(n,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let i=n[0],o=i.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:a.reduce(((e,t,r)=>{if("*"===t){let e=s[r]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return e}}(s[r]||""),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function _a(e,t,r){let a,n="string"===typeof e?oa(e):e,i=""===e||""===n.pathname?"/":n.pathname;if(null==i)a=r;else{let e=t.length-1;if(i.startsWith("..")){let t=i.split("/");for(;".."===t[0];)t.shift(),e-=1;n.pathname=t.join("/")}a=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:r,search:a="",hash:n=""}="string"===typeof e?oa(e):e,i=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:i,search:Qa(a),hash:Na(n)}}(n,a);return i&&"/"!==i&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Sa(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&"/"!==r?null:e.slice(t.length)||"/"}const za=e=>e.join("/").replace(/\/\/+/g,"/"),Ma=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qa=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Na=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";var Ra=r(5987),Ta=r(3061),Pa=r(9685),Oa=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.component,s=void 0===i?"div":i,c=e.square,l=void 0!==c&&c,u=e.elevation,d=void 0===u?1:u,h=e.variant,f=void 0===h?"elevation":h,p=(0,Ra.Z)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(s,(0,o.Z)({className:(0,Ta.Z)(r.root,a,"outlined"===f?r.outlined:r["elevation".concat(d)],!l&&r.rounded),ref:t},p))}));const Fa=(0,s.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(Oa);var Da=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.color,s=void 0===i?"primary":i,c=e.position,l=void 0===c?"fixed":c,u=(0,Ra.Z)(e,["classes","className","color","position"]);return n.createElement(Fa,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,Ta.Z)(r.root,r["position".concat((0,Pa.Z)(l))],r["color".concat((0,Pa.Z)(s))],a,"fixed"===l&&"mui-fixed"),ref:t},u))}));const La=(0,s.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(Da);function Ga(){return Ga=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ga.apply(this,arguments)}function Ua(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}const Za=["onClick","reloadDocument","replace","state","target","to"];function Va(e){let{basename:t,children:r,window:a}=e,i=(0,n.useRef)();null==i.current&&(i.current=function(e){function t(){var e=s.location,t=c.state||{};return[t.idx,ta({pathname:e.pathname,search:e.search,hash:e.hash,state:t.usr||null,key:t.key||"default"})]}function r(e){return"string"===typeof e?e:ia(e)}function a(e,t){return void 0===t&&(t=null),ta((0,o.Z)({pathname:h.pathname,hash:"",search:""},"string"===typeof e?oa(e):e,{state:t,key:na()}))}function n(e){u=e,e=t(),d=e[0],h=e[1],f.call({action:u,location:h})}function i(e){c.go(e)}void 0===e&&(e={});var s=void 0===(e=e.window)?document.defaultView:e,c=s.history,l=null;s.addEventListener("popstate",(function(){if(l)p.call(l),l=null;else{var e=Xr.Pop,r=t(),a=r[0];if(r=r[1],p.length){if(null!=a){var o=d-a;o&&(l={action:e,location:r,retry:function(){i(-1*o)}},i(o))}}else n(e)}}));var u=Xr.Pop,d=(e=t())[0],h=e[1],f=aa(),p=aa();return null==d&&(d=0,c.replaceState((0,o.Z)({},c.state,{idx:d}),"")),{get action(){return u},get location(){return h},createHref:r,push:function e(t,i){var o=Xr.Push,l=a(t,i);if(!p.length||(p.call({action:o,location:l,retry:function(){e(t,i)}}),0)){var u=[{usr:l.state,key:l.key,idx:d+1},r(l)];l=u[0],u=u[1];try{c.pushState(l,"",u)}catch(h){s.location.assign(u)}n(o)}},replace:function e(t,i){var o=Xr.Replace,s=a(t,i);p.length&&(p.call({action:o,location:s,retry:function(){e(t,i)}}),1)||(s=[{usr:s.state,key:s.key,idx:d},r(s)],c.replaceState(s[0],"",s[1]),n(o))},go:i,back:function(){i(-1)},forward:function(){i(1)},listen:function(e){return f.push(e)},block:function(e){var t=p.push(e);return 1===p.length&&s.addEventListener("beforeunload",ra),function(){t(),p.length||s.removeEventListener("beforeunload",ra)}}}}({window:a}));let s=i.current,[c,l]=(0,n.useState)({action:s.action,location:s.location});return(0,n.useLayoutEffect)((()=>s.listen(l)),[s]),(0,n.createElement)(fa,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:s})}const Ha=(0,n.forwardRef)((function(e,t){let{onClick:r,reloadDocument:a,replace:i=!1,state:o,target:s,to:c}=e,l=Ua(e,Za),u=ga(c),d=function(e,t){let{target:r,replace:a,state:i}=void 0===t?{}:t,o=ya(),s=Aa(),c=wa(e);return(0,n.useCallback)((t=>{if(0===t.button&&(!r||"_self"===r)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)){t.preventDefault();let r=!!a||ia(s)===ia(c);o(e,{replace:r,state:i})}}),[s,o,c,a,i,r,e])}(c,{replace:i,state:o,target:s});return(0,n.createElement)("a",Ga({},l,{href:u,onClick:function(e){r&&r(e),e.defaultPrevented||a||d(e)},ref:t,target:s}))}));function Wa(e){let t=(0,n.useRef)(Ya(e)),r=Aa(),a=(0,n.useMemo)((()=>{let e=Ya(r.search);for(let r of t.current.keys())e.has(r)||t.current.getAll(r).forEach((t=>{e.append(r,t)}));return e}),[r.search]),i=ya();return[a,(0,n.useCallback)(((e,t)=>{i("?"+Ya(e),t)}),[i])]}function Ya(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,r)=>{let a=e[r];return t.concat(Array.isArray(a)?a.map((e=>[r,e])):[[r,a]])}),[]))}var Ja=r(4942),$a=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.component,s=void 0===i?"div":i,c=e.disableGutters,l=void 0!==c&&c,u=e.variant,d=void 0===u?"regular":u,h=(0,Ra.Z)(e,["classes","className","component","disableGutters","variant"]);return n.createElement(s,(0,o.Z)({className:(0,Ta.Z)(r.root,r[d],a,!l&&r.gutters),ref:t},h))}));const Ka=(0,s.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,Ja.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})($a);var Xa={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},en=n.forwardRef((function(e,t){var r=e.align,a=void 0===r?"inherit":r,i=e.classes,s=e.className,c=e.color,l=void 0===c?"initial":c,u=e.component,d=e.display,h=void 0===d?"initial":d,f=e.gutterBottom,p=void 0!==f&&f,g=e.noWrap,m=void 0!==g&&g,A=e.paragraph,y=void 0!==A&&A,b=e.variant,v=void 0===b?"body1":b,w=e.variantMapping,x=void 0===w?Xa:w,k=(0,Ra.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=u||(y?"p":x[v]||Xa[v])||"span";return n.createElement(E,(0,o.Z)({className:(0,Ta.Z)(i.root,s,"inherit"!==v&&i[v],"initial"!==l&&i["color".concat((0,Pa.Z)(l))],m&&i.noWrap,p&&i.gutterBottom,y&&i.paragraph,"inherit"!==a&&i["align".concat((0,Pa.Z)(a))],"initial"!==h&&i["display".concat((0,Pa.Z)(h))]),ref:t},k))}));const tn=(0,s.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(en);r(6214);var rn=r(670),an=r(516),nn=r(3958),on=r(468),sn=r(7420),cn=r(3621),ln=r(1225),un=r(8088);var dn="undefined"!==typeof window?n.useLayoutEffect:n.useEffect;const hn=n.forwardRef((function(e,t){var r=e.children,a=e.container,o=e.disablePortal,s=void 0!==o&&o,c=e.onRendered,l=n.useState(null),u=l[0],d=l[1],h=(0,un.Z)(n.isValidElement(r)?r.ref:null,t);return dn((function(){s||d(function(e){return e="function"===typeof e?e():e,i.findDOMNode(e)}(a)||document.body)}),[a,s]),dn((function(){if(u&&!s)return(0,ln.Z)(t,u),function(){(0,ln.Z)(t,null)}}),[t,u,s]),dn((function(){c&&(u||s)&&c()}),[c,u,s]),s?n.isValidElement(r)?n.cloneElement(r,{ref:h}):r:u?i.createPortal(r,u):u}));var fn=r(2705),pn=r(4398),gn=r(5671),mn=r(3144),An=r(3433);function yn(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function bn(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function vn(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function wn(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,i=[t,r].concat((0,An.Z)(a)),o=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===i.indexOf(e)&&-1===o.indexOf(e.tagName)&&bn(e,n)}))}function xn(e,t){var r=-1;return e.some((function(e,a){return!!t(e)&&(r=a,!0)})),r}function kn(e,t){var r,a=[],n=[],i=e.container;if(!t.disableScrollLock){if(function(e){var t=(0,an.Z)(e);return t.body===e?(0,nn.Z)(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(i)){var o=yn();a.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(vn(i)+o,"px"),r=(0,an.Z)(i).querySelectorAll(".mui-fixed"),[].forEach.call(r,(function(e){n.push(e.style.paddingRight),e.style.paddingRight="".concat(vn(e)+o,"px")}))}var s=i.parentElement,c="HTML"===s.nodeName&&"scroll"===window.getComputedStyle(s)["overflow-y"]?s:i;a.push({value:c.style.overflow,key:"overflow",el:c}),c.style.overflow="hidden"}return function(){r&&[].forEach.call(r,(function(e,t){n[t]?e.style.paddingRight=n[t]:e.style.removeProperty("padding-right")})),a.forEach((function(e){var t=e.value,r=e.el,a=e.key;t?r.style.setProperty(a,t):r.style.removeProperty(a)}))}}var En=function(){function e(){(0,gn.Z)(this,e),this.modals=[],this.containers=[]}return(0,mn.Z)(e,[{key:"add",value:function(e,t){var r=this.modals.indexOf(e);if(-1!==r)return r;r=this.modals.length,this.modals.push(e),e.modalRef&&bn(e.modalRef,!1);var a=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);wn(t,e.mountNode,e.modalRef,a,!0);var n=xn(this.containers,(function(e){return e.container===t}));return-1!==n?(this.containers[n].modals.push(e),r):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:a}),r)}},{key:"mount",value:function(e,t){var r=xn(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),a=this.containers[r];a.restore||(a.restore=kn(a,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var r=xn(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),a=this.containers[r];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.restore&&a.restore(),e.modalRef&&bn(e.modalRef,!0),wn(a.container,e.mountNode,e.modalRef,a.hiddenSiblingNodes,!1),this.containers.splice(r,1);else{var n=a.modals[a.modals.length-1];n.modalRef&&bn(n.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();const qn=function(e){var t=e.children,r=e.disableAutoFocus,a=void 0!==r&&r,o=e.disableEnforceFocus,s=void 0!==o&&o,c=e.disableRestoreFocus,l=void 0!==c&&c,u=e.getDoc,d=e.isEnabled,h=e.open,f=n.useRef(),p=n.useRef(null),g=n.useRef(null),m=n.useRef(),A=n.useRef(null),y=n.useCallback((function(e){A.current=i.findDOMNode(e)}),[]),b=(0,un.Z)(t.ref,y),v=n.useRef();return n.useEffect((function(){v.current=h}),[h]),!v.current&&h&&"undefined"!==typeof window&&(m.current=u().activeElement),n.useEffect((function(){if(h){var e=(0,an.Z)(A.current);a||!A.current||A.current.contains(e.activeElement)||(A.current.hasAttribute("tabIndex")||A.current.setAttribute("tabIndex",-1),A.current.focus());var t=function(){null!==A.current&&(e.hasFocus()&&!s&&d()&&!f.current?A.current&&!A.current.contains(e.activeElement)&&A.current.focus():f.current=!1)},r=function(t){!s&&d()&&9===t.keyCode&&e.activeElement===A.current&&(f.current=!0,t.shiftKey?g.current.focus():p.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",r,!0);var n=setInterval((function(){t()}),50);return function(){clearInterval(n),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",r,!0),l||(m.current&&m.current.focus&&m.current.focus(),m.current=null)}}}),[a,s,l,d,h]),n.createElement(n.Fragment,null,n.createElement("div",{tabIndex:0,ref:p,"data-test":"sentinelStart"}),n.cloneElement(t,{ref:b}),n.createElement("div",{tabIndex:0,ref:g,"data-test":"sentinelEnd"}))};var Bn={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}};const In=n.forwardRef((function(e,t){var r=e.invisible,a=void 0!==r&&r,i=e.open,s=(0,Ra.Z)(e,["invisible","open"]);return i?n.createElement("div",(0,o.Z)({"aria-hidden":!0,ref:t},s,{style:(0,o.Z)({},Bn.root,a?Bn.invisible:{},s.style)})):null}));var jn=new En,Cn=n.forwardRef((function(e,t){var r=(0,sn.Z)(),a=(0,cn.Z)({name:"MuiModal",props:(0,o.Z)({},e),theme:r}),s=a.BackdropComponent,c=void 0===s?In:s,l=a.BackdropProps,u=a.children,d=a.closeAfterTransition,h=void 0!==d&&d,f=a.container,p=a.disableAutoFocus,g=void 0!==p&&p,m=a.disableBackdropClick,A=void 0!==m&&m,y=a.disableEnforceFocus,b=void 0!==y&&y,v=a.disableEscapeKeyDown,w=void 0!==v&&v,x=a.disablePortal,k=void 0!==x&&x,E=a.disableRestoreFocus,q=void 0!==E&&E,B=a.disableScrollLock,I=void 0!==B&&B,j=a.hideBackdrop,C=void 0!==j&&j,_=a.keepMounted,S=void 0!==_&&_,z=a.manager,M=void 0===z?jn:z,Q=a.onBackdropClick,N=a.onClose,R=a.onEscapeKeyDown,T=a.onRendered,P=a.open,O=(0,Ra.Z)(a,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),F=n.useState(!0),D=F[0],L=F[1],G=n.useRef({}),U=n.useRef(null),Z=n.useRef(null),V=(0,un.Z)(Z,t),H=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(a),W=function(){return(0,an.Z)(U.current)},Y=function(){return G.current.modalRef=Z.current,G.current.mountNode=U.current,G.current},J=function(){M.mount(Y(),{disableScrollLock:I}),Z.current.scrollTop=0},$=(0,fn.Z)((function(){var e=function(e){return e="function"===typeof e?e():e,i.findDOMNode(e)}(f)||W().body;M.add(Y(),e),Z.current&&J()})),K=n.useCallback((function(){return M.isTopModal(Y())}),[M]),X=(0,fn.Z)((function(e){U.current=e,e&&(T&&T(),P&&K()?J():bn(Z.current,!0))})),ee=n.useCallback((function(){M.remove(Y())}),[M]);if(n.useEffect((function(){return function(){ee()}}),[ee]),n.useEffect((function(){P?$():H&&h||ee()}),[P,ee,H,h,$]),!S&&!P&&(!H||D))return null;var te=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(r||{zIndex:pn.Z}),re={};return void 0===u.props.tabIndex&&(re.tabIndex=u.props.tabIndex||"-1"),H&&(re.onEnter=(0,on.Z)((function(){L(!1)}),u.props.onEnter),re.onExited=(0,on.Z)((function(){L(!0),h&&ee()}),u.props.onExited)),n.createElement(hn,{ref:X,container:f,disablePortal:k},n.createElement("div",(0,o.Z)({ref:V,onKeyDown:function(e){"Escape"===e.key&&K()&&(R&&R(e),w||(e.stopPropagation(),N&&N(e,"escapeKeyDown")))},role:"presentation"},O,{style:(0,o.Z)({},te.root,!P&&D?te.hidden:{},O.style)}),C?null:n.createElement(c,(0,o.Z)({open:P,onClick:function(e){e.target===e.currentTarget&&(Q&&Q(e),!A&&N&&N(e,"backdropClick"))}},l)),n.createElement(qn,{disableEnforceFocus:b,disableAutoFocus:g,disableRestoreFocus:q,getDoc:W,isEnabled:K,open:P},n.cloneElement(u,re))))}));const _n=Cn;var Sn=r(9439),zn=r(2242),Mn=r(1385),Qn=r(5475);function Nn(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var Rn={entering:{opacity:1,transform:Nn(1)},entered:{opacity:1,transform:"none"}},Tn=n.forwardRef((function(e,t){var r=e.children,a=e.disableStrictModeCompat,i=void 0!==a&&a,s=e.in,c=e.onEnter,l=e.onEntered,u=e.onEntering,d=e.onExit,h=e.onExited,f=e.onExiting,p=e.style,g=e.timeout,m=void 0===g?"auto":g,A=e.TransitionComponent,y=void 0===A?zn.ZP:A,b=(0,Ra.Z)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),v=n.useRef(),w=n.useRef(),x=(0,Mn.Z)(),k=x.unstable_strictMode&&!i,E=n.useRef(null),q=(0,un.Z)(r.ref,t),B=(0,un.Z)(k?E:void 0,q),I=function(e){return function(t,r){if(e){var a=k?[E.current,t]:[t,r],n=(0,Sn.Z)(a,2),i=n[0],o=n[1];void 0===o?e(i):e(i,o)}}},j=I(u),C=I((function(e,t){(0,Qn.n)(e);var r,a=(0,Qn.C)({style:p,timeout:m},{mode:"enter"}),n=a.duration,i=a.delay;"auto"===m?(r=x.transitions.getAutoHeightDuration(e.clientHeight),w.current=r):r=n,e.style.transition=[x.transitions.create("opacity",{duration:r,delay:i}),x.transitions.create("transform",{duration:.666*r,delay:i})].join(","),c&&c(e,t)})),_=I(l),S=I(f),z=I((function(e){var t,r=(0,Qn.C)({style:p,timeout:m},{mode:"exit"}),a=r.duration,n=r.delay;"auto"===m?(t=x.transitions.getAutoHeightDuration(e.clientHeight),w.current=t):t=a,e.style.transition=[x.transitions.create("opacity",{duration:t,delay:n}),x.transitions.create("transform",{duration:.666*t,delay:n||.333*t})].join(","),e.style.opacity="0",e.style.transform=Nn(.75),d&&d(e)})),M=I(h);return n.useEffect((function(){return function(){clearTimeout(v.current)}}),[]),n.createElement(y,(0,o.Z)({appear:!0,in:s,nodeRef:k?E:void 0,onEnter:C,onEntered:_,onEntering:j,onExit:z,onExited:M,onExiting:S,addEndListener:function(e,t){var r=k?e:t;"auto"===m&&(v.current=setTimeout(r,w.current||0))},timeout:"auto"===m?null:m},b),(function(e,t){return n.cloneElement(r,(0,o.Z)({style:(0,o.Z)({opacity:0,transform:Nn(.75),visibility:"exited"!==e||s?void 0:"hidden"},Rn[e],p,r.props.style),ref:B},t))}))}));Tn.muiSupportAuto=!0;const Pn=Tn;function On(e,t){var r=0;return"number"===typeof t?r=t:"center"===t?r=e.height/2:"bottom"===t&&(r=e.height),r}function Fn(e,t){var r=0;return"number"===typeof t?r=t:"center"===t?r=e.width/2:"right"===t&&(r=e.width),r}function Dn(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function Ln(e){return"function"===typeof e?e():e}var Gn=n.forwardRef((function(e,t){var r=e.action,a=e.anchorEl,s=e.anchorOrigin,c=void 0===s?{vertical:"top",horizontal:"left"}:s,l=e.anchorPosition,u=e.anchorReference,d=void 0===u?"anchorEl":u,h=e.children,f=e.classes,p=e.className,g=e.container,m=e.elevation,A=void 0===m?8:m,y=e.getContentAnchorEl,b=e.marginThreshold,v=void 0===b?16:b,w=e.onEnter,x=e.onEntered,k=e.onEntering,E=e.onExit,q=e.onExited,B=e.onExiting,I=e.open,j=e.PaperProps,C=void 0===j?{}:j,_=e.transformOrigin,S=void 0===_?{vertical:"top",horizontal:"left"}:_,z=e.TransitionComponent,M=void 0===z?Pn:z,Q=e.transitionDuration,N=void 0===Q?"auto":Q,R=e.TransitionProps,T=void 0===R?{}:R,P=(0,Ra.Z)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),O=n.useRef(),F=n.useCallback((function(e){if("anchorPosition"===d)return l;var t=Ln(a),r=(t&&1===t.nodeType?t:(0,an.Z)(O.current).body).getBoundingClientRect(),n=0===e?c.vertical:"center";return{top:r.top+On(r,n),left:r.left+Fn(r,c.horizontal)}}),[a,c.horizontal,c.vertical,l,d]),D=n.useCallback((function(e){var t=0;if(y&&"anchorEl"===d){var r=y(e);if(r&&e.contains(r)){var a=function(e,t){for(var r=t,a=0;r&&r!==e;)a+=(r=r.parentElement).scrollTop;return a}(e,r);t=r.offsetTop+r.clientHeight/2-a||0}0}return t}),[c.vertical,d,y]),L=n.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:On(e,S.vertical)+t,horizontal:Fn(e,S.horizontal)}}),[S.horizontal,S.vertical]),G=n.useCallback((function(e){var t=D(e),r={width:e.offsetWidth,height:e.offsetHeight},n=L(r,t);if("none"===d)return{top:null,left:null,transformOrigin:Dn(n)};var i=F(t),o=i.top-n.vertical,s=i.left-n.horizontal,c=o+r.height,l=s+r.width,u=(0,nn.Z)(Ln(a)),h=u.innerHeight-v,f=u.innerWidth-v;if(o<v){var p=o-v;o-=p,n.vertical+=p}else if(c>h){var g=c-h;o-=g,n.vertical+=g}if(s<v){var m=s-v;s-=m,n.horizontal+=m}else if(l>f){var A=l-f;s-=A,n.horizontal+=A}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(s),"px"),transformOrigin:Dn(n)}}),[a,d,F,D,L,v]),U=n.useCallback((function(){var e=O.current;if(e){var t=G(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[G]),Z=n.useCallback((function(e){O.current=i.findDOMNode(e)}),[]);n.useEffect((function(){I&&U()})),n.useImperativeHandle(r,(function(){return I?{updatePosition:function(){U()}}:null}),[I,U]),n.useEffect((function(){if(I){var e=(0,rn.Z)((function(){U()}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[I,U]);var V=N;"auto"!==N||M.muiSupportAuto||(V=void 0);var H=g||(a?(0,an.Z)(Ln(a)).body:void 0);return n.createElement(_n,(0,o.Z)({container:H,open:I,ref:t,BackdropProps:{invisible:!0},className:(0,Ta.Z)(f.root,p)},P),n.createElement(M,(0,o.Z)({appear:!0,in:I,onEnter:w,onEntered:x,onExit:E,onExited:q,onExiting:B,timeout:V},T,{onEntering:(0,on.Z)((function(e,t){k&&k(e,t),U()}),T.onEntering)}),n.createElement(Fa,(0,o.Z)({elevation:A,ref:Z},C,{className:(0,Ta.Z)(f.paper,C.className)}),h)))}));const Un=(0,s.Z)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(Gn);const Zn=n.createContext({});var Vn=n.forwardRef((function(e,t){var r=e.children,a=e.classes,i=e.className,s=e.component,c=void 0===s?"ul":s,l=e.dense,u=void 0!==l&&l,d=e.disablePadding,h=void 0!==d&&d,f=e.subheader,p=(0,Ra.Z)(e,["children","classes","className","component","dense","disablePadding","subheader"]),g=n.useMemo((function(){return{dense:u}}),[u]);return n.createElement(Zn.Provider,{value:g},n.createElement(c,(0,o.Z)({className:(0,Ta.Z)(a.root,i,u&&a.dense,!h&&a.padding,f&&a.subheader),ref:t},p),f,r))}));const Hn=(0,s.Z)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(Vn);function Wn(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function Yn(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function Jn(e,t){if(void 0===t)return!0;var r=e.innerText;return void 0===r&&(r=e.textContent),0!==(r=r.trim().toLowerCase()).length&&(t.repeating?r[0]===t.keys[0]:0===r.indexOf(t.keys.join("")))}function $n(e,t,r,a,n,i){for(var o=!1,s=n(e,t,!!t&&r);s;){if(s===e.firstChild){if(o)return;o=!0}var c=!a&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&Jn(s,i)&&!c)return void s.focus();s=n(e,s,r)}}var Kn="undefined"===typeof window?n.useEffect:n.useLayoutEffect,Xn=n.forwardRef((function(e,t){var r=e.actions,a=e.autoFocus,s=void 0!==a&&a,c=e.autoFocusItem,l=void 0!==c&&c,u=e.children,d=e.className,h=e.disabledItemsFocusable,f=void 0!==h&&h,p=e.disableListWrap,g=void 0!==p&&p,m=e.onKeyDown,A=e.variant,y=void 0===A?"selectedMenu":A,b=(0,Ra.Z)(e,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),v=n.useRef(null),w=n.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Kn((function(){s&&v.current.focus()}),[s]),n.useImperativeHandle(r,(function(){return{adjustStyleForScrollbar:function(e,t){var r=!v.current.style.width;if(e.clientHeight<v.current.clientHeight&&r){var a="".concat(yn(),"px");v.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=a,v.current.style.width="calc(100% + ".concat(a,")")}return v.current}}}),[]);var x=n.useCallback((function(e){v.current=i.findDOMNode(e)}),[]),k=(0,un.Z)(x,t),E=-1;n.Children.forEach(u,(function(e,t){n.isValidElement(e)&&(e.props.disabled||("selectedMenu"===y&&e.props.selected||-1===E)&&(E=t))}));var q=n.Children.map(u,(function(e,t){if(t===E){var r={};return l&&(r.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===y&&(r.tabIndex=0),n.cloneElement(e,r)}return e}));return n.createElement(Hn,(0,o.Z)({role:"menu",ref:k,className:d,onKeyDown:function(e){var t=v.current,r=e.key,a=(0,an.Z)(t).activeElement;if("ArrowDown"===r)e.preventDefault(),$n(t,a,g,f,Wn);else if("ArrowUp"===r)e.preventDefault(),$n(t,a,g,f,Yn);else if("Home"===r)e.preventDefault(),$n(t,null,g,f,Wn);else if("End"===r)e.preventDefault(),$n(t,null,g,f,Yn);else if(1===r.length){var n=w.current,i=r.toLowerCase(),o=performance.now();n.keys.length>0&&(o-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&i!==n.keys[0]&&(n.repeating=!1)),n.lastTime=o,n.keys.push(i);var s=a&&!n.repeating&&Jn(a,n);n.previousKeyMatched&&(s||$n(t,a,!1,f,Wn,n))?e.preventDefault():n.previousKeyMatched=!1}m&&m(e)},tabIndex:s?0:-1},b),q)}));const ei=Xn;var ti={vertical:"top",horizontal:"right"},ri={vertical:"top",horizontal:"left"},ai=n.forwardRef((function(e,t){var r=e.autoFocus,a=void 0===r||r,s=e.children,c=e.classes,l=e.disableAutoFocusItem,u=void 0!==l&&l,d=e.MenuListProps,h=void 0===d?{}:d,f=e.onClose,p=e.onEntering,g=e.open,m=e.PaperProps,A=void 0===m?{}:m,y=e.PopoverClasses,b=e.transitionDuration,v=void 0===b?"auto":b,w=e.TransitionProps,x=(w=void 0===w?{}:w).onEntering,k=(0,Ra.Z)(w,["onEntering"]),E=e.variant,q=void 0===E?"selectedMenu":E,B=(0,Ra.Z)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","onEntering","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"]),I=(0,Mn.Z)(),j=a&&!u&&g,C=n.useRef(null),_=n.useRef(null),S=-1;n.Children.map(s,(function(e,t){n.isValidElement(e)&&(e.props.disabled||("menu"!==q&&e.props.selected||-1===S)&&(S=t))}));var z=n.Children.map(s,(function(e,t){return t===S?n.cloneElement(e,{ref:function(t){_.current=i.findDOMNode(t),(0,ln.Z)(e.ref,t)}}):e}));return n.createElement(Un,(0,o.Z)({getContentAnchorEl:function(){return _.current},classes:y,onClose:f,TransitionProps:(0,o.Z)({onEntering:function(e,t){C.current&&C.current.adjustStyleForScrollbar(e,I),p&&p(e,t),x&&x(e,t)}},k),anchorOrigin:"rtl"===I.direction?ti:ri,transformOrigin:"rtl"===I.direction?ti:ri,PaperProps:(0,o.Z)({},A,{classes:(0,o.Z)({},A.classes,{root:c.paper})}),open:g,ref:t,transitionDuration:v},B),n.createElement(ei,(0,o.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),f&&f(e,"tabKeyDown"))},actions:C,autoFocus:a&&(-1===S||u),autoFocusItem:j,variant:q},h,{className:(0,Ta.Z)(c.list,h.className)}),z))}));const ni=(0,s.Z)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(ai);var ii=r(9381),oi=r(2879),si="undefined"===typeof window?n.useEffect:n.useLayoutEffect,ci=n.forwardRef((function(e,t){var r=e.alignItems,a=void 0===r?"center":r,s=e.autoFocus,c=void 0!==s&&s,l=e.button,u=void 0!==l&&l,d=e.children,h=e.classes,f=e.className,p=e.component,g=e.ContainerComponent,m=void 0===g?"li":g,A=e.ContainerProps,y=(A=void 0===A?{}:A).className,b=(0,Ra.Z)(A,["className"]),v=e.dense,w=void 0!==v&&v,x=e.disabled,k=void 0!==x&&x,E=e.disableGutters,q=void 0!==E&&E,B=e.divider,I=void 0!==B&&B,j=e.focusVisibleClassName,C=e.selected,_=void 0!==C&&C,S=(0,Ra.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),z=n.useContext(Zn),M={dense:w||z.dense||!1,alignItems:a},Q=n.useRef(null);si((function(){c&&Q.current&&Q.current.focus()}),[c]);var N=n.Children.toArray(d),R=N.length&&(0,oi.Z)(N[N.length-1],["ListItemSecondaryAction"]),T=n.useCallback((function(e){Q.current=i.findDOMNode(e)}),[]),P=(0,un.Z)(T,t),O=(0,o.Z)({className:(0,Ta.Z)(h.root,f,M.dense&&h.dense,!q&&h.gutters,I&&h.divider,k&&h.disabled,u&&h.button,"center"!==a&&h.alignItemsFlexStart,R&&h.secondaryAction,_&&h.selected),disabled:k},S),F=p||"li";return u&&(O.component=p||"div",O.focusVisibleClassName=(0,Ta.Z)(h.focusVisible,j),F=ii.Z),R?(F=O.component||p?F:"div","li"===m&&("li"===F?F="div":"li"===O.component&&(O.component="div")),n.createElement(Zn.Provider,{value:M},n.createElement(m,(0,o.Z)({className:(0,Ta.Z)(h.container,y),ref:P},b),n.createElement(F,O,N),N.pop()))):n.createElement(Zn.Provider,{value:M},n.createElement(F,(0,o.Z)({ref:P},O),N))}));const li=(0,s.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(ci);var ui=n.forwardRef((function(e,t){var r,a=e.classes,i=e.className,s=e.component,c=void 0===s?"li":s,l=e.disableGutters,u=void 0!==l&&l,d=e.ListItemClasses,h=e.role,f=void 0===h?"menuitem":h,p=e.selected,g=e.tabIndex,m=(0,Ra.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(r=void 0!==g?g:-1),n.createElement(li,(0,o.Z)({button:!0,role:f,tabIndex:r,component:c,selected:p,disableGutters:u,classes:(0,o.Z)({dense:a.dense},d),className:(0,Ta.Z)(a.root,i,p&&a.selected,!u&&a.gutters),ref:t},m))}));const di=(0,s.Z)((function(e){return{root:(0,o.Z)({},e.typography.body1,(0,Ja.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,o.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(ui);var hi=r(3644),fi=n.forwardRef((function(e,t){var r=e.absolute,a=void 0!==r&&r,i=e.classes,s=e.className,c=e.component,l=void 0===c?"hr":c,u=e.flexItem,d=void 0!==u&&u,h=e.light,f=void 0!==h&&h,p=e.orientation,g=void 0===p?"horizontal":p,m=e.role,A=void 0===m?"hr"!==l?"separator":void 0:m,y=e.variant,b=void 0===y?"fullWidth":y,v=(0,Ra.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(l,(0,o.Z)({className:(0,Ta.Z)(i.root,s,"fullWidth"!==b&&i[b],a&&i.absolute,d&&i.flexItem,f&&i.light,"vertical"===g&&i.vertical),role:A,ref:t},v))}));const pi=(0,s.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,hi.Fq)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(fi);var gi=r(8132),mi=n.forwardRef((function(e,t){var r=e.children,a=e.classes,i=e.className,s=e.invisible,c=void 0!==s&&s,l=e.open,u=e.transitionDuration,d=e.TransitionComponent,h=void 0===d?gi.Z:d,f=(0,Ra.Z)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return n.createElement(h,(0,o.Z)({in:l,timeout:u},f),n.createElement("div",{className:(0,Ta.Z)(a.root,i,c&&a.invisible),"aria-hidden":!0,ref:t},r))}));const Ai=(0,s.Z)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(mi);var yi=r(4993),bi=r(4006),vi={left:"right",right:"left",top:"down",bottom:"up"};var wi={enter:bi.x9.enteringScreen,exit:bi.x9.leavingScreen},xi=n.forwardRef((function(e,t){var r=e.anchor,a=void 0===r?"left":r,i=e.BackdropProps,s=e.children,c=e.classes,l=e.className,u=e.elevation,d=void 0===u?16:u,h=e.ModalProps,f=(h=void 0===h?{}:h).BackdropProps,p=(0,Ra.Z)(h,["BackdropProps"]),g=e.onClose,m=e.open,A=void 0!==m&&m,y=e.PaperProps,b=void 0===y?{}:y,v=e.SlideProps,w=e.TransitionComponent,x=void 0===w?yi.Z:w,k=e.transitionDuration,E=void 0===k?wi:k,q=e.variant,B=void 0===q?"temporary":q,I=(0,Ra.Z)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"]),j=(0,Mn.Z)(),C=n.useRef(!1);n.useEffect((function(){C.current=!0}),[]);var _=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?vi[t]:t}(j,a),S=n.createElement(Fa,(0,o.Z)({elevation:"temporary"===B?d:0,square:!0},b,{className:(0,Ta.Z)(c.paper,c["paperAnchor".concat((0,Pa.Z)(_))],b.className,"temporary"!==B&&c["paperAnchorDocked".concat((0,Pa.Z)(_))])}),s);if("permanent"===B)return n.createElement("div",(0,o.Z)({className:(0,Ta.Z)(c.root,c.docked,l),ref:t},I),S);var z=n.createElement(x,(0,o.Z)({in:A,direction:vi[_],timeout:E,appear:C.current},v),S);return"persistent"===B?n.createElement("div",(0,o.Z)({className:(0,Ta.Z)(c.root,c.docked,l),ref:t},I),z):n.createElement(_n,(0,o.Z)({BackdropProps:(0,o.Z)({},i,f,{transitionDuration:E}),BackdropComponent:Ai,className:(0,Ta.Z)(c.root,c.modal,l),open:A,onClose:g,ref:t},I,p),z)}));const ki=(0,s.Z)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(xi);var Ei=n.forwardRef((function(e,t){var r=e.children,a=e.classes,i=e.className,s=e.disableTypography,c=void 0!==s&&s,l=e.inset,u=void 0!==l&&l,d=e.primary,h=e.primaryTypographyProps,f=e.secondary,p=e.secondaryTypographyProps,g=(0,Ra.Z)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),m=n.useContext(Zn).dense,A=null!=d?d:r;null==A||A.type===tn||c||(A=n.createElement(tn,(0,o.Z)({variant:m?"body2":"body1",className:a.primary,component:"span",display:"block"},h),A));var y=f;return null==y||y.type===tn||c||(y=n.createElement(tn,(0,o.Z)({variant:"body2",className:a.secondary,color:"textSecondary",display:"block"},p),y)),n.createElement("div",(0,o.Z)({className:(0,Ta.Z)(a.root,i,m&&a.dense,u&&a.inset,A&&y&&a.multiline),ref:t},g),A,y)}));const qi=(0,s.Z)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(Ei);var Bi=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=(0,Ra.Z)(e,["classes","className"]),s=n.useContext(Zn);return n.createElement("div",(0,o.Z)({className:(0,Ta.Z)(r.root,a,"flex-start"===s.alignItems&&r.alignItemsFlexStart),ref:t},i))}));const Ii=(0,s.Z)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(Bi);var ji=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=e.color,s=void 0===i?"default":i,c=e.component,l=void 0===c?"li":c,u=e.disableGutters,d=void 0!==u&&u,h=e.disableSticky,f=void 0!==h&&h,p=e.inset,g=void 0!==p&&p,m=(0,Ra.Z)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return n.createElement(l,(0,o.Z)({className:(0,Ta.Z)(r.root,a,"default"!==s&&r["color".concat((0,Pa.Z)(s))],g&&r.inset,!f&&r.sticky,!d&&r.gutters),ref:t},m))}));const Ci=(0,s.Z)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(ji);var _i=r(3301),Si=r(5607),zi=r(64),Mi=r(6323),Qi=n.forwardRef((function(e,t){var r=e.classes,a=e.className,i=(0,Ra.Z)(e,["classes","className"]),s=n.useContext(Zn);return n.createElement("div",(0,o.Z)({className:(0,Ta.Z)(r.root,a,"flex-start"===s.alignItems&&r.alignItemsFlexStart),ref:t},i))}));const Ni=(0,s.Z)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(Qi);var Ri=r(2399);const Ti=(0,Ri.Z)(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var Pi=n.forwardRef((function(e,t){var r=e.alt,a=e.children,i=e.classes,s=e.className,c=e.component,l=void 0===c?"div":c,u=e.imgProps,d=e.sizes,h=e.src,f=e.srcSet,p=e.variant,g=void 0===p?"circular":p,m=(0,Ra.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),A=null,y=function(e){var t=e.src,r=e.srcSet,a=n.useState(!1),i=a[0],o=a[1];return n.useEffect((function(){if(t||r){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=r,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,r]),i}({src:h,srcSet:f}),b=h||f,v=b&&"error"!==y;return A=v?n.createElement("img",(0,o.Z)({alt:r,src:h,srcSet:f,sizes:d,className:i.img},u)):null!=a?a:b&&r?r[0]:n.createElement(Ti,{className:i.fallback}),n.createElement(l,(0,o.Z)({className:(0,Ta.Z)(i.root,i.system,i[g],s,!v&&i.colorDefault),ref:t},m),A)}));const Oi=(0,s.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(Pi);var Fi=n.forwardRef((function(e,t){var r=e.children,a=e.classes,i=e.className,s=e.color,c=void 0===s?"default":s,l=e.component,u=void 0===l?"button":l,d=e.disabled,h=void 0!==d&&d,f=e.disableElevation,p=void 0!==f&&f,g=e.disableFocusRipple,m=void 0!==g&&g,A=e.endIcon,y=e.focusVisibleClassName,b=e.fullWidth,v=void 0!==b&&b,w=e.size,x=void 0===w?"medium":w,k=e.startIcon,E=e.type,q=void 0===E?"button":E,B=e.variant,I=void 0===B?"text":B,j=(0,Ra.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),C=k&&n.createElement("span",{className:(0,Ta.Z)(a.startIcon,a["iconSize".concat((0,Pa.Z)(x))])},k),_=A&&n.createElement("span",{className:(0,Ta.Z)(a.endIcon,a["iconSize".concat((0,Pa.Z)(x))])},A);return n.createElement(ii.Z,(0,o.Z)({className:(0,Ta.Z)(a.root,a[I],i,"inherit"===c?a.colorInherit:"default"!==c&&a["".concat(I).concat((0,Pa.Z)(c))],"medium"!==x&&[a["".concat(I,"Size").concat((0,Pa.Z)(x))],a["size".concat((0,Pa.Z)(x))]],p&&a.disableElevation,h&&a.disabled,v&&a.fullWidth),component:u,disabled:h,focusRipple:!m,focusVisibleClassName:(0,Ta.Z)(a.focusVisible,y),ref:t,type:q},j),n.createElement("span",{className:a.label},C,r,_))}));const Di=(0,s.Z)((function(e){return{root:(0,o.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,hi.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,hi.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,hi.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,hi.Fq)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,hi.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,hi.Fq)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,hi.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(Fi);var Li=r(3746),Gi=r(3890),Ui=r(6708),Zi=r(7241),Vi=r(6417);var Hi=r(4680),Wi=r.n(Hi);const Yi={width:"100%",height:"100%"};const Ji=function(e){return(0,Vi.jsx)("img",{alt:e.address,style:Yi,src:Wi()(e.address)})};var $i=r(6568);const Ki=["","k","M","B","T","P","E","Z","Y"];function Xi(e){var t,r;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(e.includes("e+"))throw new Error(`Number is too large, it cannot be truncated: ${e}`);if(e.includes("e-"))throw new Error(`Number is too small, it cannot be truncated: ${e}`);const i=e.split(".");n=null!==(t=i[1])&&void 0!==t?t:n;const o=null!==(r=i[0])&&void 0!==r?r:"";return o.length>3?(n=o.slice(-3),Xi(o.slice(0,-3),a+1,n)):{value:o,decimalValues:n,recursionDepth:a}}function eo(e){try{const t="number"===typeof e?e:Number(e);if(isNaN(t))throw new Error(`${e} could not be converted into a number.`);const r=Xi(String(t)),a=Ki[r.recursionDepth];if(void 0===a)throw new Error(`Number is too large, could not truncate: ${t}`);const n=4-(r.value.length-1)-a.length,i=r.decimalValues.replace(/0+$/,"").slice(0,n),o=i.length?`.${i}`:"";return`${r.value}${o}${a}`}catch(t){return console.error(t),String(e)}}const to=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ro=Symbol(),ao=new WeakMap;class no{constructor(e,t,r){if(this._$cssResult$=!0,r!==ro)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(to&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=ao.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ao.set(t,e))}return e}toString(){return this.cssText}}const io=e=>new no("string"==typeof e?e:e+"",void 0,ro),oo=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];const n=1===e.length?e[0]:r.reduce(((t,r,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[a+1]),e[0]);return new no(n,e,ro)},so=to?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return io(t)})(e):e;var co;const lo=window.trustedTypes,uo=lo?lo.emptyScript:"",ho=window.reactiveElementPolyfillSupport,fo={toAttribute(e,t){switch(t){case Boolean:e=e?uo:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},po=(e,t)=>t!==e&&(t==t||e==e),go={attribute:!0,type:String,converter:fo,reflect:!1,hasChanged:po};class mo extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const a=this._$Ep(r,t);void 0!==a&&(this._$Ev.set(a,r),e.push(a))})),e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:go;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,r,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(a){const n=this[e];this[t]=a,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||go}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(so(e))}else void 0!==e&&t.push(so(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{to?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),a=window.litNonce;void 0!==a&&r.setAttribute("nonce",a),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:go;var a,n;const i=this.constructor._$Ep(e,r);if(void 0!==i&&!0===r.reflect){const o=(null!==(n=null===(a=r.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==n?n:fo.toAttribute)(t,r.type);this._$El=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(e,t){var r,a;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),o=e.converter,s=null!==(a=null!==(r=null==o?void 0:o.fromAttribute)&&void 0!==r?r:"function"==typeof o?o:null)&&void 0!==a?a:fo.fromAttribute;this._$El=i,this[i]=s(t,e.type),this._$El=null}}requestUpdate(e,t,r){let a=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||po)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var Ao;mo.finalized=!0,mo.elementProperties=new Map,mo.elementStyles=[],mo.shadowRootOptions={mode:"open"},null==ho||ho({ReactiveElement:mo}),(null!==(co=globalThis.reactiveElementVersions)&&void 0!==co?co:globalThis.reactiveElementVersions=[]).push("1.3.4");const yo=globalThis.trustedTypes,bo=yo?yo.createPolicy("lit-html",{createHTML:e=>e}):void 0,vo=`lit$${(Math.random()+"").slice(9)}$`,wo="?"+vo,xo=`<${wo}>`,ko=document,Eo=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return ko.createComment(e)},qo=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Bo=Array.isArray,Io=e=>Bo(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),jo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Co=/-->/g,_o=/>/g,So=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),zo=/'/g,Mo=/"/g,Qo=/^(?:script|style|textarea|title)$/i,No=e=>function(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return{_$litType$:e,strings:t,values:a}},Ro=No(1),To=(No(2),Symbol.for("lit-noChange")),Po=Symbol.for("lit-nothing"),Oo=new WeakMap,Fo=ko.createTreeWalker(ko,129,null,!1),Do=(e,t)=>{const r=e.length-1,a=[];let n,i=2===t?"<svg>":"",o=jo;for(let c=0;c<r;c++){const t=e[c];let r,s,l=-1,u=0;for(;u<t.length&&(o.lastIndex=u,s=o.exec(t),null!==s);)u=o.lastIndex,o===jo?"!--"===s[1]?o=Co:void 0!==s[1]?o=_o:void 0!==s[2]?(Qo.test(s[2])&&(n=RegExp("</"+s[2],"g")),o=So):void 0!==s[3]&&(o=So):o===So?">"===s[0]?(o=null!=n?n:jo,l=-1):void 0===s[1]?l=-2:(l=o.lastIndex-s[2].length,r=s[1],o=void 0===s[3]?So:'"'===s[3]?Mo:zo):o===Mo||o===zo?o=So:o===Co||o===_o?o=jo:(o=So,n=void 0);const d=o===So&&e[c+1].startsWith("/>")?" ":"";i+=o===jo?t+xo:l>=0?(a.push(r),t.slice(0,l)+"$lit$"+t.slice(l)+vo+d):t+vo+(-2===l?(a.push(void 0),c):d)}const s=i+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==bo?bo.createHTML(s):s,a]};class Lo{constructor(e,t){let r,{strings:a,_$litType$:n}=e;this.parts=[];let i=0,o=0;const s=a.length-1,c=this.parts,[l,u]=Do(a,n);if(this.el=Lo.createElement(l,t),Fo.currentNode=this.el.content,2===n){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(r=Fo.nextNode())&&c.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const e=[];for(const t of r.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(vo)){const a=u[o++];if(e.push(t),void 0!==a){const e=r.getAttribute(a.toLowerCase()+"$lit$").split(vo),t=/([.?@])?(.*)/.exec(a);c.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?Ho:"?"===t[1]?Yo:"@"===t[1]?Jo:Vo})}else c.push({type:6,index:i})}for(const t of e)r.removeAttribute(t)}if(Qo.test(r.tagName)){const e=r.textContent.split(vo),t=e.length-1;if(t>0){r.textContent=yo?yo.emptyScript:"";for(let a=0;a<t;a++)r.append(e[a],Eo()),Fo.nextNode(),c.push({type:2,index:++i});r.append(e[t],Eo())}}}else if(8===r.nodeType)if(r.data===wo)c.push({type:2,index:i});else{let e=-1;for(;-1!==(e=r.data.indexOf(vo,e+1));)c.push({type:7,index:i}),e+=vo.length-1}i++}}static createElement(e,t){const r=ko.createElement("template");return r.innerHTML=e,r}}function Go(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,a=arguments.length>3?arguments[3]:void 0;var n,i,o,s;if(t===To)return t;let c=void 0!==a?null===(n=r._$Cl)||void 0===n?void 0:n[a]:r._$Cu;const l=qo(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(i=null==c?void 0:c._$AO)||void 0===i||i.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,r,a)),void 0!==a?(null!==(o=(s=r)._$Cl)&&void 0!==o?o:s._$Cl=[])[a]=c:r._$Cu=c),void 0!==c&&(t=Go(e,c._$AS(e,t.values),c,a)),t}class Uo{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:a}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ko).importNode(r,!0);Fo.currentNode=n;let i=Fo.nextNode(),o=0,s=0,c=a[0];for(;void 0!==c;){if(o===c.index){let t;2===c.type?t=new Zo(i,i.nextSibling,this,e):1===c.type?t=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(t=new $o(i,this,e)),this.v.push(t),c=a[++s]}o!==(null==c?void 0:c.index)&&(i=Fo.nextNode(),o++)}return n}m(e){let t=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Zo{constructor(e,t,r,a){var n;this.type=2,this._$AH=Po,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=a,this._$C_=null===(n=null==a?void 0:a.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e){e=Go(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),qo(e)?e===Po||null==e||""===e?(this._$AH!==Po&&this._$AR(),this._$AH=Po):e!==this._$AH&&e!==To&&this.T(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.k(e):Io(e)?this.S(e):this.T(e)}j(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.j(e))}T(e){this._$AH!==Po&&qo(this._$AH)?this._$AA.nextSibling.data=e:this.k(ko.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:a}=e,n="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Lo.createElement(a.h,this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(r);else{const e=new Uo(n,this),t=e.p(this.options);e.m(r),this.k(t),this._$AH=e}}_$AC(e){let t=Oo.get(e.strings);return void 0===t&&Oo.set(e.strings,t=new Lo(e)),t}S(e){Bo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,a=0;for(const n of e)a===t.length?t.push(r=new Zo(this.j(Eo()),this.j(Eo()),this,this.options)):r=t[a],r._$AI(n),a++;a<t.length&&(this._$AR(r&&r._$AB.nextSibling,a),t.length=a)}_$AR(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,t=arguments.length>1?arguments[1]:void 0;var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$C_=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Vo{constructor(e,t,r,a,n){this.type=1,this._$AH=Po,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Po}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;const n=this.strings;let i=!1;if(void 0===n)e=Go(this,e,t,0),i=!qo(e)||e!==this._$AH&&e!==To,i&&(this._$AH=e);else{const a=e;let o,s;for(e=n[0],o=0;o<n.length-1;o++)s=Go(this,a[r+o],t,o),s===To&&(s=this._$AH[o]),i||(i=!qo(s)||s!==this._$AH[o]),s===Po?e=Po:e!==Po&&(e+=(null!=s?s:"")+n[o+1]),this._$AH[o]=s}i&&!a&&this.P(e)}P(e){e===Po?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Ho extends Vo{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===Po?void 0:e}}const Wo=yo?yo.emptyScript:"";class Yo extends Vo{constructor(){super(...arguments),this.type=4}P(e){e&&e!==Po?this.element.setAttribute(this.name,Wo):this.element.removeAttribute(this.name)}}class Jo extends Vo{constructor(e,t,r,a,n){super(e,t,r,a,n),this.type=5}_$AI(e){var t;if((e=null!==(t=Go(this,e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==t?t:Po)===To)return;const r=this._$AH,a=e===Po&&r!==Po||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==Po&&(r===Po||a);a&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class $o{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Go(this,e)}}const Ko={A:"$lit$",C:vo,M:wo,L:1,R:Do,V:Uo,D:Io,I:Go,H:Zo,N:Vo,U:Yo,B:Jo,F:Ho,W:$o},Xo=window.litHtmlPolyfillSupport;var es,ts;null==Xo||Xo(Lo,Zo),(null!==(Ao=globalThis.litHtmlVersions)&&void 0!==Ao?Ao:globalThis.litHtmlVersions=[]).push("2.2.7");class rs extends mo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var a,n;const i=null!==(a=null==r?void 0:r.renderBefore)&&void 0!==a?a:t;let o=i._$litPart$;if(void 0===o){const e=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;i._$litPart$=o=new Zo(t.insertBefore(Eo(),e),e,void 0,null!=r?r:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return To}}rs.finalized=!0,rs._$litElement$=!0,null===(es=globalThis.litElementHydrateSupport)||void 0===es||es.call(globalThis,{LitElement:rs});const as=globalThis.litElementPolyfillSupport;null==as||as({LitElement:rs});(null!==(ts=globalThis.litElementVersions)&&void 0!==ts?ts:globalThis.litElementVersions=[]).push("3.2.2");const ns=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};var is;null===(is=window.HTMLSlotElement)||void 0===is||is.prototype.assignedElements;class os extends CustomEvent{constructor(e,t){super("string"===typeof e?e:e.type,{detail:t,bubbles:!0,composed:!0}),this._type=""}get type(){return this._type}}function ss(){return e=>{var t;return(t=class extends os{constructor(t){super(e,t),this._type=e}}).type=e,t}}function cs(){return ss()}function ls(e,t,r){if("string"!==typeof e)throw new Error(`Property name must be a string, got type "${typeof e}" from: "${String(e)}" for ${r}`);if(!(e in t))throw new Error(`Property name "${e}" does not exist on ${r}.`)}class us extends rs{}new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");const ds=["january","february","march","april","may","june","july","august","september","october","november","december"];ds.map((e=>e.slice(0,3)));Error;function hs(e){return Object.keys(e)}Error;const fs={events:{},props:{}};function ps(e){var t;const r=(a=e.events)?Object.keys(a).filter((e=>{if("string"!==typeof e)throw new Error(`Expected event key of type string but got type "${typeof e}" for key ${e}`);if(""===e)throw new Error("Got empty string for events key.");return!0})).reduce(((e,t)=>{const r=ss()(t);return e[t]=r,e}),{}):{};var a;const n=(t=class extends us{constructor(){super(),this.initCalled=!1,this.instanceProps=function(e,t){if(!e)return{};const r=Object.keys(e).reduce(((e,r)=>(e[r]=t[r],e)),{});return new Proxy(r,{get:(r,a)=>(ls(a,e,t.tagName),t[a]),set:(r,a,n)=>(ls(a,e,t.tagName),t[a]=n,!0)})}(e.props,this);const t=e.props||{};Object.keys(t).forEach((e=>{!function(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):ns(e,t)}()(this,e),this[e]=t[e]}))}createRenderParams(){return function(e,t){return{dispatch:t=>e.dispatchEvent(t),genericDispatch:t=>e.dispatchEvent(t),setProps:t=>{hs(t).forEach((r=>{e.instanceProps[r]=t[r]}))},host:e,props:e.instanceProps,events:t}}(this,r)}render(){const t=this.createRenderParams();return!this.initCalled&&e.initCallback&&(this.initCalled=!0,e.initCallback(t)),e.renderCallback(t)}},t.tagName=e.tagName,t.styles=e.styles||oo``,t.init={...fs,...e},t.events=r,t.renderCallback=e.renderCallback,t.props=(i=e.props)?Object.keys(i).filter((e=>{if("string"===typeof e)return!0;throw new Error(`Property init cannot have non string keys: "${e}"`)})).reduce(((e,t)=>(e[t]={propName:t,initValue:i[t]},e)),{}):{},t);var i;return window.customElements.define(e.tagName,n),n}const{H:gs}=Ko,ms=1,As=2,ys=6,bs=e=>function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return{_$litDirective$:e,values:r}};class vs{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ws=(e,t)=>{var r,a;const n=e._$AN;if(void 0===n)return!1;for(const i of n)null===(a=(r=i)._$AO)||void 0===a||a.call(r,t,!1),ws(i,t);return!0},xs=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null==r?void 0:r.size))},ks=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),Bs(t)}};function Es(e){void 0!==this._$AN?(xs(this),this._$AM=e,ks(this)):this._$AM=e}function qs(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const a=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(a))for(let i=r;i<a.length;i++)ws(a[i],!1),xs(a[i]);else null!=a&&(ws(a,!1),xs(a));else ws(this,e)}const Bs=e=>{var t,r,a,n;e.type==As&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=qs),null!==(r=(n=e)._$AQ)&&void 0!==r||(n._$AQ=Es))};class Is extends vs{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),ks(this),this.isConnected=e._$AU}_$AO(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];var r,a;e!==this.isConnected&&(this.isConnected=e,e?null===(r=this.reconnected)||void 0===r||r.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),t&&(ws(this,e),xs(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}function js(e,t){return Cs(e,t,us)}function Cs(e,t,r){_s(e,t);const a=e.element;if(!(a instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return a}function _s(e,t){if(e.type!==ys)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element`)}bs(class extends Is{constructor(e){super(e),this.element=js(e,"assign")}disconnected(){void 0!=this.lastValue&&void 0!=this.lastCallback&&this.lastCallback(this.lastValue)}render(e,t,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(e,t)=>e===t;if(!(e in this.element.instanceProps))throw new Error(`${this.element.tagName} element has no property of name "${e}"`);return a(this.lastValue,t)||r(this.lastValue),this.element.instanceProps[e]=t,this.lastValue=t,this.lastCallback=r,To}});function Ss(e,t){return zs(e.propName,t)}const zs=bs(class extends vs{constructor(e){super(e),this.element=js(e,"assign")}render(e,t){if(!(e in this.element.instanceProps))throw new Error(`${this.element.tagName} element has no property of name "${e}"`);return this.element.instanceProps[e]=t,To}});function Ms(e,t){return Qs(e,t)}const Qs=bs(class extends vs{constructor(e){super(e),this.element=Cs(e,"listen",HTMLElement)}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:e=>{var t;return null===(t=this.lastListenerMetaData)||void 0===t?void 0:t.callback(e)}}}render(e,t){const r="string"===typeof e?e:e.type;if("string"!==typeof r)throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(r,t)),To}}),Ns="onDomCreated",Rs=bs(class extends vs{constructor(e){super(e),_s(e,Ns)}update(e,t){let[r]=t;_s(e,Ns);const a=e.element;return a!==this.element&&(requestAnimationFrame((()=>r(a))),this.element=a),this.render(r)}render(e){}}),Ts="onResize",Ps=bs(class extends vs{constructor(e){super(e),this.resizeObserver=new ResizeObserver((e=>this.fireCallback(e))),_s(e,Ts)}fireCallback(e){var t;const r=e[0];if(!r)throw console.error(e),new Error("onResize observation triggered but the first entry was empty.");null===(t=this.callback)||void 0===t||t.call(this,{target:r.target,contentRect:r.contentRect})}update(e,t){let[r]=t;_s(e,Ts),this.callback=r;const a=e.element;return a!==this.element&&(this.element&&this.resizeObserver.unobserve(this.element),this.resizeObserver.observe(a),this.element=a),this.render(r)}render(e){}});function Os(e,t,r){return{name:e,check:t,transform:r}}const Fs=new WeakMap;function Ds(e,t,r){const a=Fs.get(e),n=null!==a&&void 0!==a?a:r();a||Fs.set(e,n);const i=(o=t,s=n.valueIndexDeletions,o.filter(((e,t)=>!s.includes(t))));var o,s;return{strings:n.templateStrings,values:i}}function Ls(e,t,r,a){const n=[],i=[],o=[];e.forEach(((s,c)=>{var l;const u=n.length-1,d=n[u],h=c-1,f=t[h];let p;a&&a(s),"string"===typeof d&&(p=null===(l=r.find((e=>e.check(d,s,f))))||void 0===l?void 0:l.transform,p&&(n[u]=d+p(f)+s,o.push(h))),p||n.push(s);const g=e.raw[c];p?i[u]=i[u]+p(f)+g:i.push(g)}));return{templateStrings:Object.assign([],n,{raw:i}),valueIndexDeletions:o}}function Gs(e){return"function"===typeof e&&e.hasOwnProperty("tagName")&&"string"===typeof e.tagName&&e.tagName.includes("-")}const Us=[Os("tag name css selector interpolation",((e,t,r)=>Gs(r)),(e=>e.tagName))];function Zs(e,t){return Ls(e,t,Us)}function Vs(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];const n=Ds(e,r,(()=>Zs(e,r))),i=oo(n.strings,...n.values);return i}let Hs=!1;const Ws=[Os("tag name interpolation",((e,t,r)=>{const a=e.trim().endsWith("<")&&!!t.match(/^[\s\n>]/)||(null===e||void 0===e?void 0:e.trim().endsWith("</"))&&t.trim().startsWith(">"),n=Gs(r);if(a&&!n)throw console.error({lastNewString:e,currentLitString:t,currentValue:r}),new Error(`Got interpolated tag name but it wasn't of type VirElement: ${r.prototype.constructor.name}`);return a&&n}),(e=>e.tagName))];function Ys(e){if(Hs){const t=function(e){const t=function(e,t){const r=e.match(t);return null!==r&&void 0!==r?r:[]}(e,/<\/[\s\n]*[^\s\n><]+[\s\n]*>/g);return t.reduce(((e,t)=>{const r=function(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}(t.replace(/\n/g," ")).replace(/<\/|>/g,"");return r.includes("-")?e.concat(r):e}),[])}(e);t.length&&console.error(`Custom element tags must be interpolated from functional elements: ${t.join(", ")}`)}}function Js(e){return Ls(e.strings,e.values,Ws,Ys)}function $s(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];const n=Ro(e,...r),i=Ds(e,r,(()=>Js(n))),o={...n,strings:i.strings,values:i.values};return o}const Ks=Vs`var(${Vs`--toniq-interaction-transition-duration`}, 84ms)`,Xs=(new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g"),["january","february","march","april","may","june","july","august","september","october","november","december"]);Xs.map((e=>e.slice(0,3)));Error;function ec(e){return Object.keys(e)}function tc(e,t){let r=!1;const a=ec(e).reduce(((a,n)=>{const i=t(n,e[n]);return i instanceof Promise&&(r=!0),{...a,[n]:i}}),{});return r?new Promise((async(e,t)=>{try{await Promise.all(ec(a).map((async e=>{const t=await a[e];a[e]=t}))),e(a)}catch(r){t(r)}})):a}Error;const rc={capitalizeFirstLetter:!1};function ac(e){var t;if(!e.length)return"";return(null!==(t=e[0])&&void 0!==t?t:"").toUpperCase()+e.slice(1)}function nc(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rc;return t.capitalizeFirstLetter?ac(e):e}function ic(e){return e!==e.toUpperCase()}function oc(e){return e.split("").reduce(((e,t,r,a)=>{var n,i;const o=r>0&&null!==(n=a[r-1])&&void 0!==n?n:"",s=r<a.length&&null!==(i=a[r+1])&&void 0!==i?i:"",c=ic(o)||ic(s);return t!==t.toLowerCase()&&0!==r&&c?e+=`-${t.toLowerCase()}`:e+=t,e}),"").toLowerCase()}function sc(e){return{foregroundColor:e.backgroundColor,backgroundColor:e.foregroundColor}}const cc=(()=>{const e={backgroundColor:Vs`#ffffff`,foregroundColor:Vs`#000000`},t={...e,foregroundColor:Vs`#00D093`},r={...e,foregroundColor:Vs`#5B5D5C`},a={...e,foregroundColor:Vs`#ACADAD`},n={...t},i={...t,foregroundColor:Vs`#00A876`},o={...t,foregroundColor:Vs`#007D57`},s={backgroundColor:Vs`#F1F3F6`,foregroundColor:Vs`#000000`};return{brandPrimary:t,pagePrimary:e,pageSecondary:r,pageTertiary:a,pageInteraction:n,pageInteractionHover:i,pageInteractionActive:o,divider:{...e,foregroundColor:Vs`#D6D6D6`},dropShadow:{...e,backgroundColor:Vs`#D2EEFA`},accentPrimary:sc(n),accentPrimaryHover:sc(i),accentPrimaryActive:sc(o),accentSecondary:s,accentTertiary:{...s,foregroundColor:Vs`#9A9A9D`}}})();function lc(e,t){return io(`--toniq-${oc(e)}-${oc(t)}`)}const uc=tc(cc,(e=>({backgroundColor:lc(e,"backgroundColor"),foregroundColor:lc(e,"foregroundColor")})));function dc(e,t){const r=cc[e][t];return Vs`var(${uc[e][t]}, ${r})`}const hc=tc(uc,(e=>({foregroundColor:dc(e,"foregroundColor"),backgroundColor:dc(e,"backgroundColor")})));function fc(e){return Vs`
        background-color: ${e.backgroundColor};
        color: ${e.foregroundColor};
    `}function pc(e){"string"!==typeof e&&(e=String(e));const t=`{"${function(e){return e.replace(/\n/g," ").trim().replace(/\s{2,}/g," ")}(e.replace(/"/g,'\\"')).replace(/;(?:\s*;)+/g,";").replace(/; /g,'", "').replace(/: /g,'": "').replace(";","")}"}`;try{const e=JSON.parse(t),r=Object.keys(e).reduce(((t,r)=>{var a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rc;const r=e.toLowerCase();if(!r.length)return"";return nc(r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,(e=>{const t=e[1];return t?t.toUpperCase():""})),t)}(r);return t[a]=e[r],t}),{});return r}catch(r){throw console.error(`Failed to JSON parse: ${t}`),r}}const gc=Vs`
    --outline-width: 3px;
    --outline-gap: 2px;
    --outline-spacing: calc(var(--outline-width) + var(--outline-gap) + var(--border-size));
    content: '';
    top: calc(var(--outline-spacing) * -1);
    left: calc(var(--outline-spacing) * -1);
    position: absolute;
    width: calc(100% + calc(var(--outline-spacing) * 2));
    height: calc(100% + calc(var(--outline-spacing) * 2));
    box-sizing: border-box;
    border: var(--outline-width) solid ${hc.brandPrimary.foregroundColor};
    border-radius: 12px;
    z-index: 100;
`;function mc(e,t){return Vs`
        ${io(e)}::after {
            --border-size: ${t}px;
            ${gc}
        }
    `}const Ac={toniqFont:{"font-family":Vs`'Rubik', sans-serif`},normalWeightFont:{"font-weight":Vs`400`},boldFont:{"font-weight":Vs`600`},extraBoldFont:{"font-weight":Vs`900`},paragraphFont:{"line-height":Vs`24px`,"font-size":Vs`16px`},boldParagraphFont:{},labelFont:{"line-height":Vs`16px`,"font-size":Vs`12px`},boldLabelFont:{},h1Font:{"line-height":Vs`96px`,"font-size":Vs`64px`},h2Font:{"line-height":Vs`48px`,"font-size":Vs`32px`},h3Font:{"line-height":Vs`32px`,"font-size":Vs`24px`},monospaceFont:{"font-family":Vs`'Inconsolata', monospace`,"line-height":Vs`1.125em`}},yc=tc(Ac,((e,t)=>{const r=io(oc(e.replace(/Font$/,"")));return tc(t,(e=>{const t=io(e);return Vs`--toniq-font-${r}-${t}`}))}));function bc(e){const t=yc[e],r=Ac[e],a=ec(t).map((e=>{const a=r[e],n=t[e];return Vs`
            ${io(e)}: var(${n}, ${a});
        `}));return io(a.join("\n"))}const vc=(()=>{const e=Vs`
        font-style: normal;
        color: ${hc.pagePrimary.foregroundColor};
        ${bc("toniqFont")};
    `,t=Vs`
        ${e};
        ${bc("normalWeightFont")};
    `,r=Vs`
        ${e};
        ${bc("boldFont")};
    `,a=Vs`
        ${e};
        ${bc("extraBoldFont")};
    `,n=Vs`
        ${e};
        ${bc("paragraphFont")};
        ${t};
    `,i=Vs`
        ${e};
        ${n};
        ${r};
    `,o=Vs`
        ${e};
        ${bc("labelFont")};
        ${t};
    `;return{toniqFont:e,normalWeightFont:t,boldFont:r,extraBoldFont:a,paragraphFont:n,boldParagraphFont:i,labelFont:o,boldLabelFont:Vs`
        ${o};
        ${r};
    `,h1Font:Vs`
        ${bc("h1Font")};
        ${a};
    `,h2Font:Vs`
        ${bc("h2Font")};
        ${r};
    `,h3Font:Vs`
        ${bc("h3Font")};
        ${r};
    `,monospaceFont:Vs`
        ${bc("monospaceFont")}
    `}})(),wc={color:"--icon-stroke-color",strokeColor:"--toniq-icon-stroke-color",fillColor:"--toniq-icon-fill-color"};function xc(e){return`var(${e}, var(${wc.color}, currentColor))`}const kc=xc(wc.strokeColor),Ec=xc(wc.fillColor),qc=Vs`
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Bc={popupShadow:Vs`
        filter: drop-shadow(0px 12px 8px ${hc.dropShadow.backgroundColor});
    `},Ic=Vs`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,jc="toniq-";function Cc(e){if(!e.tagName.startsWith(jc))throw new Error(`Element tag name must start with "toniq-" (got "${e.tagName}")`);if(e.tagName===jc)throw new Error(`A tag name must exist after the prefix for ${Cc.name}: "${e.tagName}"`);return ps(e)}class _c extends vs{constructor(e){if(super(e),this.it=Po,e.type!==As)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Po||null==e)return this._t=void 0,this.it=e;if(e===To)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}_c.directiveName="unsafeHTML",_c.resultType=1;bs(_c);class Sc extends _c{}Sc.directiveName="unsafeSVG",Sc.resultType=2;const zc=bs(Sc),Mc=Cc({tagName:"toniq-icon",props:{icon:void 0},styles:Vs`
        :host {
            display: block;
        }
        svg {
            /* svg is set to inline by default which gives it space under the image. See: https://stackoverflow.com/a/34952703 */
            display: block;
        }

        :host(.toniq-icon-fit-icon) svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback:e=>{let{props:t}=e;return $s`
            ${zc(t.icon?.svgString)}
        `}}),Qc=Vs`8px`,Nc=Cc({tagName:"toniq-button",props:{text:"",icon:void 0},styles:Vs`
        :host {
            ${vc.boldParagraphFont};
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            box-sizing: border-box;
            ${Ic};
        }

        :host(:hover) button {
            ${fc(hc.accentPrimaryHover)};
        }

        :host(:active) button {
            ${fc(hc.accentPrimaryActive)};
        }

        button {
            ${qc};
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Qc};
            ${fc(hc.accentPrimary)};
            padding: 10px;
            transition: color ${Ks}, background-color ${Ks},
                border-color ${Ks};
        }

        ${mc("button:focus",2)}

        :host(.toniq-button-secondary) button {
            ${fc(hc.accentSecondary)};
        }

        :host(.toniq-button-outline) button {
            ${fc(hc.pagePrimary)};
            border-color: ${hc.accentPrimary.backgroundColor};
        }

        :host(.toniq-button-secondary:hover) button,
        :host(.toniq-button-outline:hover) button {
            border-color: ${hc.accentPrimaryHover.backgroundColor};
        }

        :host(.toniq-button-secondary:active) button,
        :host(.toniq-button-outline:active) button {
            border-color: ${hc.accentPrimaryActive.backgroundColor};
        }

        button .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:e=>{let{props:t}=e;return $s`
            <button>
                <slot>${t.icon?$s`<${Mc} class="icon-template" ${Ss(Mc.props.icon,t.icon)}></${Mc}>`:""} ${t.text?$s`
                  <span class="text-template">${t.text}</span>
              `:""}</slot>
            </button>
        `}});class Rc{svgString;iconName;constructor(e,t){this.iconName=e,this.svgString=t}}function Tc(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];const n=e.reduce(((e,t,a)=>e+t+(a<r.length?r[a]:"")),"");return n}const Pc=new Rc("CheckMark24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m19 6-9 12-5-5" />
        </svg>
    `),Oc=Cc({tagName:"toniq-checkbox",props:{text:"",checked:!1},events:{checkedChange:cs()},styles:Vs`
        :host {
            ${vc.boldParagraphFont};
            display: inline-flex;
            transition: color ${Ks}, background-color ${Ks},
                opacity ${Ks};
            border-radius: 8px;
        }

        button {
            ${qc};
            border-radius: 8px;
        }

        .wrapper {
            transition: inherit;
            display: inline-flex;
            flex-grow: 1;
            align-items: center;
            position: relative;
            outline: none;
        }

        .label {
            font: inherit;
            color: inherit;
            margin-left: 16px;
            ${Ic};
            transition: inherit;
        }

        .checkbox.checked {
            ${fc(hc.accentPrimary)};
        }

        .checkbox.checked ~ .label {
            color: ${hc.pageInteraction.foregroundColor};
        }

        .checkbox {
            transition: inherit;
            display: inline-block;
            background-color: ${hc.accentSecondary.backgroundColor};
            height: 24px;
            width: 24px;
            border-radius: 8px;
        }

        ${mc(".wrapper:focus",0)}

        .check-mark {
            color: ${hc.accentPrimary.foregroundColor};
            transition: inherit;
            opacity: 1;
        }

        .check-mark.hidden {
            opacity: 0;
        }
    `,renderCallback:e=>{let{props:t,dispatch:r,events:a,setProps:n}=e;return $s`
            <button
                class="wrapper ${t.checked?"checked":""}"
                ${Ms("click",(()=>{const e=!t.checked;n({checked:e}),r(new a.checkedChange(e))}))}
                role="checkbox"
                aria-checked=${t.checked}
                class="wrapper"
            >
                <span class="checkbox ${t.checked?"checked":""}">
                    <${Mc}
                        class="check-mark ${t.checked?"":"hidden"}"
                        ${Ss(Mc.props.icon,Pc)}
                    ></${Mc}></span>
                <span class="label">${t.text}</span>
            </button>
        `}}),Fc=Cc({tagName:"toniq-chip",props:{text:"",icon:void 0},styles:Vs`
        :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            ${vc.boldLabelFont}
            padding: 4px 8px;
            border-radius: 8px;
            ${fc(hc.accentPrimary)};
        }

        :host(.toniq-chip-secondary) {
            ${fc(hc.accentSecondary)};
        }
    `,renderCallback:e=>{let{props:t}=e;return $s`
            <slot>${t.icon?$s`<${Mc}
                ${Ss(Mc.props.icon,t.icon)}
            ></${Mc}>`:""}${t.text}</slot>
        `}}),Dc=bs(class extends vs{element;constructor(e){super(e),this.element=function(e,t,r){!function(e,t){if(e.type!==ys)throw new Error(`${t} directive can only be attached directly to an element.`);if(!e.element)throw new Error(`${t} directive found no element.`)}(e,t);const a=e.element;if(!(a instanceof r))throw new Error(`${t} attached to non ${r.name} element.`);return a}(e,"testId",HTMLElement)}render(e){return this.element.setAttribute("data-test-id",e),To}});new Rc("Copy16Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M14 7.33C14 6.6 13.4 6 12.67 6H7.33C6.6 6 6 6.6 6 7.33v5.34C6 13.4 6.6 14 7.33 14h5.34c.73 0 1.33-.6 1.33-1.33V7.33Z"
            ></path>
            <path
                stroke-width="2"
                d="M11 5.67V4.33C11 3.6 10.4 3 9.67 3H4.33C3.6 3 3 3.6 3 4.33v5.34C3 10.4 3.6 11 4.33 11h1.34"
            ></path>
        </svg>
    `),new Rc("ExternalLink16Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path
                stroke-width="2"
                d="M7 4H4.33C3.6 4 3 4.6 3 5.33v6.34C3 12.4 3.6 13 4.33 13h6.34c.73 0 1.33-.6 1.33-1.33V9M7 9l6-6m-3 0h3v3"
            />
        </svg>
    `);const Lc="0 0 58 58",Gc='<image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAEsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNTgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iNTgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSI1OCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjU4IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDctMjZUMDg6MDI6MjItMDY6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA3LTI2VDA4OjAyOjIyLTA2OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4h5ZpxAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz8GjRiNsLCweGlYzciPEhtlJqEmaYwy2Mw8b2bUvPF670myVbZTlNj4teAvYKuslSJSspQ1sUHPeUaNZO7t3vO533vO6dxzwRPPqbpV1QV63jZjI2FlOjGjeB/x0iizmmBStYyhiYkoZcfbDRWuvQq5ucr7/Tvq5jVLhYoa4UHVMG3hUeHosm24vCncrGaT88LHwkFTChS+dvVUkZ9czhT5w2UzHouAp0FYyfzi1C9Ws6YuLC8noOeW1J963Jf4tPzUpNg2Wa1YxBghjMIYw0Too5sB2fsI0UOnnCgT3/UdP86ixKqyG6xgskCGLDZBUZckuyY2LbomM8eK2/+/fbXSvT3F7L4wVD84zks7eDfgs+A47/uO83kAlfdwli/FL+5B/6vohZIW2AX/Gpycl7TUFpyuQ8udkTST31KlLE86Dc9HUJ+ApkuonS327Oeew1uIr8pXXcD2DnSIv3/uC0I4Z9UMnYILAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGhUlEQVRoge2Za2wUVRTH/+fOY7cFBKFtMNBFoAS2EIhQlYcPAsTEIBSISwAfiWIAJT4STCjhtfJIi18Uw0PEiEpQ0y3YFkyUAGpSQhWIiEopBYrbGggPeVPYLXP8MDvbme0+ZpeS+GF+yWZn5p57z/nPuXPunV3AwcHBwcHBwcHBwcHB4X8EpduhsCI4jxnDGHAJCb/KUHccndbz/P0IzuDqjAETSfAQEIZoGkIQVC+Bd3XZdvKY3TFsCfUGghw94YS95tf5PBvsOrbDtVkFZQwsjF6giH8ApBAgC5BMf3XZdHxIqrESCvUGgisALLUVkVX8oTqf51Fb/eJw3je4s0u50wggh4jAzJZ2EgTIBCgEkvVjcgmQRCBZ7MxefXRyvHFFvIve8qbZMIvkeFZm75azIm8gyIUVwVdTy7JyZWZBqUu5cx1ADgi6yNhUyLpAQyRkAkm6cMiYdHPVsJWpQwTgDQS/BjAj3SDj0V3NemB/ce51O7bXXiyYzBqqLMHFZlQiCJdImFEoAlAASLQ3+93fJljGMp9En0UGHqqubeh+sGGAAsDFDAUMBYCbgWsP593dP+dZya7gOp8naS24Oqsg+ZwR0SzegkoqZJJJFfpzKhmi9RtAatsNcL9+KOo3evDwlkZ3VmepJXfPkdM5P/3RT0C/OQo4IhRQGJPWNizdZfQZuuNcXkgL7SKG6Zk0VQwbYlOKBMAuaXy3LfX7zNduLR7Wi0mrgkQjSBWADJAsYD5WW/5101sn71iEegPBG94lWzsZ566ISAWA2qoVbTy17HCiQAYFmpYT2J80WqJ36p7PX2u+dGXWgBsE7pSoC4h+6bqtYWTScQHcWvMIR6exKtqmtEoX1Bdq84CI0EGBYFXhkq2TAUCCnkk1Ml03n1hqe60dXH5mnEZibzIbI7OWTMaZBF2/OpnWGn97XZEuVmkrUkKf3tXylP3FBAATx25g19nLUZH6c6nhkzREGhQGmn0MrTyZTe2346LHRsExF550RRrc+fQxNoSSkV1BkItrSAxf+7vfdfYygDaRCjNkxu5MnB3z9Q6A+eVkNke6DzlgHBtLyL2KBADI2A3T0mPcPN4+tjdNG7g6KAH5sdV1fQbZjMWyo0L7TZU5s8A9iowQqhjNJJHFETNOC0OkwgwV0eraQVCJ5Sym9ani768Yxx0hEoCeTWOkyDcR+gk9g7pAGbpIJeVWyB51vvw1DGxK1B4Sajeg40S2wyRDuJjhZn2tzALgBsPdgb6O+zzzahZsTNg+cuo+DAoEP+5AlxaI9HsoVLRlUZ++ekHqKC55FjEIUMKtVxLZEDDXG2hamKg9UwiRig6CkJlPG1PX+KjcMVP3kmdRdEv5Y8nmbsmtuaxDnJpHBBsZbRKdWHvaDSALetU1PhsK/D/ci5OoSBM1CzZiw7rKA/HsAb1Ke8v/filTn+HKMe1iZmbMCJd+Jt4/6W82qq71G89k6jCeSIOhjWdHJe1M9GVhoNmXoet2MZ9AH1T4nvQLAFAY1RaRkUq8rd/ytOdwMpEA0CNYSqneZhha+eDyM+OS2cQSrhwT168vXFYNmJa2D/r7z7uBXMsbCwMyGMWNK1OW/4v5JbVE9DgQ5z1S52aPYGln8wVvRdPbYP4w2bgM8h/35b+XqD20feRwkqTDBAKb1pMQZBSFt96s83k6W4R+VPCmK5t73DYKk4sZcqQKuwEowGER1opHN6/+x+youU/JuCym6EY+3t4V0DMZL9DY3VNcsYSDqlCfM/8IxztH9Qq3ip+J0D/W56LW+ee+4yd6tty4m3Xmlb63LUIB4Iv+y9nYGblYi1ZhXaieYVW/Aa3ZRCEZnK0AELG/69gUaU+s9dXmc8l/d4Q4IXHMpoZA2MRTGte1Tu9rXDM/Iu0C2NFv2R6ZMd5tWnKie2AGXKaMp1pvNUZxblNpdQozAMDAqgtdRKjlmh3bhLRtpr+p83lmmpva/Tg27fSKCQp4VbQomUTGrrcpfJbZFQkA9cW514kw2659XAgA02uxIo2muNT0XVqtME8yZ08BwwV9+ibqSKCLrS1q37wL/huZxusNBA8CKMqg68o6n2dZ/LhscKrP4j8V8ODYXZP5WWTwmpxgWUmCITLCGwi+AWB9KrtUyxWQ5l8SlzyLChk8l0CjiSgbGu8jCXsfPFNamc446TJ0x7m88N3QHDBPhaAsAEc1TVpeP71X/f306+Dg4ODg4ODg4ODg4HDf+A8ZUHWEL2fa6QAAAABJRU5ErkJggg==" id="icp-16__b" width="58" height="58" />',Uc=new Rc("Icp16Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            fill="none"
            viewBox="${Lc}"
        >
            ${Gc}
        </svg>
    `),Zc=(new Rc("InfoCircle16Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="16"
            height="16"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 16 16"
        >
            <path stroke-width="2" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 3h0M7 8h1v3h1" />
        </svg>
    `),new Rc("ArrowBarUp24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 14V4L8 8m4-4 4 4" />
            <path stroke-miterlimit="4" stroke-width="2" d="M4 20h16" />
        </svg>
    `),new Rc("ArrowForwardUp24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="m20 10-4-4m-6 12H9a4 4 0 0 1 0-8h11l-4 4" />
        </svg>
    `),new Rc("ArrowLeft24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14M5 12l6 6m-6-6 6-6" />
        </svg>
    `)),Vc=(new Rc("ArrowLoopLeft24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M13 21V8a4 4 0 1 1 4 4H4m3 3-3-3 3-3" />
        </svg>
    `),new Rc("ArrowLoopRight24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 21V8a4 4 0 1 0-4 4h13m-3 3 3-3-3-3" />
        </svg>
    `),new Rc("ArrowRight24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14m-6 6 6-6m-6-6 6 6" />
        </svg>
    `)),Hc=(new Rc("ArrowsSort24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M17 5v14l4-4m-4 4-4-4M7 19V5L3 9m4-4 4 4" />
        </svg>
    `),new Rc("Bucket24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19 9-2 9c-.2 1.18-1.03 2.02-2 2H9c-.97.02-1.8-.82-2-2L5 9h14ZM7 9a5 5 0 0 1 10 0"
            />
        </svg>
    `),new Rc("BuildingStore24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M3 21h18M5 21V10.85M19 21V10.85M9 21v-4c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4M3 7l2-4h14l2 4H3Zm18 0v1a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V7"
            />
        </svg>
    `)),Wc=(new Rc("CalendarEvent24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V7Zm-4-4v4M8 3v4m-4 4h16m-10 4H8v2h2v-2Z"
            />
        </svg>
    `),new Rc("Cash24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 11a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm3-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h2"
            />
        </svg>
    `),new Rc("ChevronDown24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 9 6 6 6-6"
            />
        </svg>
    `)),Yc=(new Rc("ChevronUp24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m6 15 6-6 6 6"
            />
        </svg>
    `),new Rc("Circle24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z" />
        </svg>
    `),new Rc("CircleDot24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="${kc}"
                stroke-width="2"
            />
            <circle
                cx="12"
                cy="12"
                r="4"
                fill="${Ec}"
                stroke="${Ec}"
                stroke-width="2"
            />
        </svg>
    `),new Rc("CirclePlusFill24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${Ec}"
                stroke="none"
                d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2Zm-1 9H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2h-2V9a1 1 0 0 0-2 0v2Z"
            />
        </svg>
    `),new Rc("CirclePlusOutline24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm-3 9h6m-3-3v6" />
        </svg>
    `),new Rc("CircleWavyCheck24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${Ec}"
                stroke="none"
                d="M4.93 19.07c.49.48 1.15.7 1.9.75.63.04 1.35-.08 1.87.14.52.22.96.81 1.45 1.23.57.5 1.2.81 1.85.81.65 0 1.28-.32 1.86-.81.5-.42.94-1.02 1.44-1.23.5-.21 1.22-.09 1.86-.14a2.93 2.93 0 0 0 1.9-.75c.49-.48.7-1.15.76-1.9.04-.63-.08-1.35.14-1.87.22-.52.81-.96 1.23-1.45.5-.57.81-1.2.81-1.85 0-.65-.32-1.28-.81-1.86-.42-.5-1.02-.94-1.23-1.44-.21-.5-.09-1.22-.14-1.86a2.93 2.93 0 0 0-.75-1.9 2.9 2.9 0 0 0-1.9-.76c-.63-.04-1.35.08-1.87-.14-.52-.22-.96-.81-1.45-1.23A2.9 2.9 0 0 0 12 2c-.65 0-1.28.32-1.86.81-.5.42-.94 1.02-1.44 1.23-.5.21-1.22.09-1.86.14-.76.06-1.43.27-1.9.75a2.9 2.9 0 0 0-.76 1.9c-.04.63.08 1.35-.14 1.87-.22.52-.81.96-1.23 1.45-.5.57-.81 1.2-.81 1.85 0 .65.32 1.28.81 1.86.42.5 1.02.94 1.23 1.44.21.5.09 1.22.14 1.86.06.76.27 1.43.75 1.9ZM8.3 12.7l2 2a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L11 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),new Rc("Clock24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 4v5l3 3" />
        </svg>
    `),new Rc("Copy24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M20 10a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-8Zm-4-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h2"
            />
        </svg>
    `)),Jc=(new Rc("DotsVertical24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-14a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `),new Rc("Edit24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-3m-8 0h3l8.5-8.5a2.12 2.12 0 0 0-3-3L9 12v3m7-10 3 3"
            />
        </svg>
    `),new Rc("ExternalLink24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 7H6a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
            />
        </svg>
    `)),$c=(new Rc("Filter24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M18 5c1 0 1 .32 1 .63C19 6 14 12 14 12v7l-4-3v-4S5 6 5 5.63C5 5.32 5 5 6 5h12Z"
            />
        </svg>
    `),new Rc("Geometry24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-8 7a9.12 9.12 0 0 0 8 5 9.13 9.13 0 0 0 8-5m-8-7V3M7 21l4-12m2 0 1.33 4m1.34 4L17 21"
            />
        </svg>
    `)),Kc=(new Rc("GridDots24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM5 18a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `),new Rc("HeartFill24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                fill="${Ec}"
                stroke="${kc}"
                stroke-width="2"
                d="M19.51 13.59 12.01 21l-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57Z"
            />
        </svg>
    `),new Rc("HeartOutline24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="m19.51 13.58-7.5 7.43-7.5-7.43a5 5 0 1 1 7.5-6.56 5 5 0 1 1 7.5 6.57"
            />
        </svg>
    `),new Rc("Icp24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            fill="none"
            viewBox="${Lc}"
        >
            ${Gc}
        </svg>
        </svg>
    `)),Xc=new Rc("Infinity24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9.83 9.17a4 4 0 1 0 0 5.66A10 10 0 0 0 12 12a10 10 0 0 1 2.17-2.83 4 4 0 1 1 0 5.66A10 10 0 0 1 12 12a10 10 0 0 0-2.17-2.83Z"
            />
        </svg>
    `),el=(new Rc("LayersLinked24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 8.27A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h3m-8 7.73A2 2 0 0 1 4 14V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3"
            />
        </svg>
    `),new Rc("LayoutGrid24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5ZM10 15a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Zm10 0a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `),new Rc("Lifebuoy24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm3 12 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9"
            />
        </svg>
    `)),tl=(new Rc("List24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01" />
        </svg>
    `),new Rc("ListDetails24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M13 5h8m-8 4h5m-5 6h8m-8 4h5M9 5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5Zm0 10a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4Z"
            />
        </svg>
    `),new Rc("Loader24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25 2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6"
            />
        </svg>
    `),new Rc("LoaderAnimated24Icon",Tc`
        <style>
            @keyframes border-jump {
                0% {
                    opacity: 1;
                }
                12.49% {
                    opacity: 1;
                }
                12.5% {
                    opacity: 1;
                }
                40% {
                    opacity: 0.3;
                }
                95% {
                    opacity: 0;
                }
            }

            .loader-animated-24-icon__svg path:nth-child(0) {
                animation: border-jump 1000ms 0ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(1) {
                animation: border-jump 1000ms 125ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(2) {
                animation: border-jump 1000ms 250ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(3) {
                animation: border-jump 1000ms 375ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(4) {
                animation: border-jump 1000ms 500ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(5) {
                animation: border-jump 1000ms 625ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(6) {
                animation: border-jump 1000ms 750ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(7) {
                animation: border-jump 1000ms 875ms infinite linear;
            }
            .loader-animated-24-icon__svg path:nth-child(8) {
                animation: border-jump 1000ms 1000ms infinite linear;
            }
        </style>
        <svg
            class="loader-animated-24-icon__svg"
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" opacity="0" d="M12 6V3" />
            <path stroke-width="2" opacity="0" d="M16.25 7.75 18.4 5.6" />
            <path stroke-width="2" opacity="0" d="M18 12h3" />
            <path stroke-width="2" opacity="0" d="m16.25 16.25 2.15 2.15" />
            <path stroke-width="2" opacity="0" d="M12 18v3" />
            <path stroke-width="2" opacity="0" d="M7.75 16.25 5.6 18.4" />
            <path stroke-width="2" opacity="0" d="M6 12H3" />
            <path stroke-width="2" opacity="0" d="M7.75 7.75 5.6 5.6" />
        </svg>
    `)),rl=(new Rc("Lock24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V7a4 4 0 0 1 8 0v4"
            />
        </svg>
    `),new Rc("LockOpen24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 13a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-6Zm-7 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4-4V6a4 4 0 0 1 8 0"
            />
        </svg>
    `),new Rc("Menu24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    `)),al=(new Rc("Photo24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M15 8h.01M20 7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7ZM4 15l4-4c.93-.9 2.07-.9 3 0l5 5m-2-2 1-1c.93-.9 2.07-.9 3 0l2 2"
            />
        </svg>
    `),new Rc("Rocket24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M11 20a6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3 8 8 0 0 1 7 7Zm-4-6a6 6 0 0 0-3 6 6 6 0 0 0 6-3m5-9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
            />
        </svg>
    `)),nl=new Rc("Search24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M10 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm11 18-6-6" />
        </svg>
    `),il=(new Rc("Send24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M10 14 21 3m0 0-6.5 17.68a.55.55 0 0 1-1 0L10 14l-6.68-3.5a.55.55 0 0 1 0-1L21 3Z"
            />
        </svg>
    `),new Rc("ShoppingCart24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M6 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm11 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0H6V3H4m2 2 14 1-1 7H6"
            />
        </svg>
    `),new Rc("Social24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M12 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4v4m-5.3 6.8 2.8-2m7.8 2-2.8-2"
            />
        </svg>
    `),new Rc("Square24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <rect
                width="16"
                height="16"
                x="4"
                y="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                rx="2"
            />
        </svg>
    `),new Rc("SquareCheck24Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path fill="none" d="M6 6h12v12H6z" />
            <path
                fill="${Ec}"
                stroke="none"
                d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6ZM8.3 12.7l2 2a1 1 0 0 0 1.4 0l4-4a1 1 0 0 0-1.4-1.4L11 12.58l-1.3-1.3a1 1 0 0 0-1.4 1.42Z"
            />
        </svg>
    `),new Rc("Trash24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M4 7h16m-10 4v6m4-6v6M5 7l1 12c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
        </svg>
    `),new Rc("Users24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8ZM3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2m1-17.87a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85"
            />
        </svg>
    `),new Rc("Wallet24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="1.5"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M19 12V9c0-.62-.42-1-1-1H6S4 8 4 6s2-2 2-2h10c.59 0 1 .4 1 1v2m3 5v4h-4a2 2 0 1 1 0-4h4m-1 5v2c0 .6-.4 1-1 1H6c-1 0-2-1-2-2V6"
            />
        </svg>
    `)),ol=(new Rc("WorldUpload24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width="2"
                d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12m-.42-12a17 17 0 0 0 0 18m.92-18a16.9 16.9 0 0 1 2.5 9m3 9v-7l3 3m-3-3-3 3"
            />
        </svg>
    `),new Rc("X24Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M18 6 6 18M6 6l12 12" />
        </svg>
    `),new Rc("Kyc32Icon",Tc`
        <svg
            viewBox="0 0 32 32"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
        >
            <path
                style="fill:none"
                d="M106 122h533v491H106z"
                transform="matrix(.06004 0 0 .06517 -6.364 -7.951)"
            />
            <path
                d="M30.198 5.54a.47.47 0 0 0-.427-.417 9.458 9.458 0 0 1-2.592-.722 9.192 9.192 0 0 1-2.356-1.428.47.47 0 0 0-.632 0 9.175 9.175 0 0 1-2.356 1.428 9.48 9.48 0 0 1-2.578.722.468.468 0 0 0-.429.417c-.021.199-.49 4.88.668 7.19 1.385 2.762 4.687 4.311 4.826 4.376a.468.468 0 0 0 .394 0c.138-.065 3.44-1.614 4.825-4.376 1.147-2.31.678-6.991.657-7.19Z"
                style="fill:#00d093;fill-rule:nonzero"
            />
            <path
                d="M24.86 2.137 24.506 2a.525.525 0 0 0-.354.137 10.284 10.284 0 0 1-2.635 1.598 10.62 10.62 0 0 1-2.885.807.527.527 0 0 0-.48.467c-.024.223-.549 5.46.747 8.046 1.55 3.09 5.245 4.823 5.4 4.897h.441c.154-.073 3.85-1.807 5.4-4.897 1.282-2.586.758-7.823.734-8.046a.526.526 0 0 0-.477-.467 10.566 10.566 0 0 1-2.9-.807 10.29 10.29 0 0 1-2.637-1.598Zm4.328 10.449c-1.178 2.353-3.895 3.892-4.682 4.304-.786-.412-3.504-1.951-4.68-4.304-.966-1.93-.772-5.793-.678-7.057a12.426 12.426 0 0 0 2.78-.829 11.926 11.926 0 0 0 2.578-1.495c.794.604 1.66 1.106 2.578 1.495.891.384 1.825.662 2.78.829.097 1.264.291 5.127-.676 7.057Zm-1.994-4.661-3.299 3.3-2.077-2.078a.526.526 0 0 0-.743.743l2.447 2.447a.527.527 0 0 0 .743 0l3.671-3.672a.524.524 0 0 0-.742-.74Z"
            />
            <path
                d="M16.5 7.5H5.93A2.431 2.431 0 0 0 3.5 9.93v13.14a2.431 2.431 0 0 0 2.43 2.43h20.14a2.431 2.431 0 0 0 2.43-2.43V17.5"
                style="fill:none;stroke:#000;stroke-width:1px"
            />
            <path
                d="M19 21h6"
                style="fill:none;stroke:#000;stroke-width:1px"
                transform="matrix(1 0 0 1 .5 .5)"
            />
            <path
                d="M19 19h4"
                style="fill:none;stroke:#000;stroke-width:1.13px"
                transform="matrix(.75 0 0 1 5.25 .5)"
            />
            <circle
                cx="11.5"
                cy="14.5"
                r="2.5"
                style="fill:tan;stroke:#000;stroke-width:.83px"
                transform="matrix(1.2 0 0 1.2 -2.3 -3.9)"
            />
            <path
                d="M8.001 20.597v.225c0 .419.129.82.358 1.117.23.295.542.462.866.462h4.55c.324 0 .636-.167.866-.462.229-.297.358-.698.358-1.117v-.225c.014-.778-.172-1.54-.531-2.167-.359-.626-.868-1.082-1.449-1.294H9.981c-.581.212-1.09.668-1.449 1.294a4.25 4.25 0 0 0-.531 2.167Z"
                style="fill:#6495ed;fill-rule:nonzero;stroke:#000;stroke-width:.88px;stroke-linecap:butt;stroke-miterlimit:2"
                transform="matrix(1.14286 0 0 1.13955 -1.643 -3.027)"
            />
        </svg>
    `)),sl=(new Rc("FolderOff48Icon",Tc`
        <svg
            fill="none"
            stroke="${kc}"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="48"
            height="48"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            clip-rule="evenodd"
            viewBox="0 0 48 48"
        >
            <path
                stroke-width="4"
                d="m6 6 36 36m0-8V18c0-2.2-1.77-4-4-4l-14-.02-6-6h-2M8 8s-2 2-2 4v22c0 2.2 1.77 4 4 4h28"
            />
        </svg>
    `),new Rc("EntrepotLogo144Icon",Tc`
        <svg
            height="134"
            width="144"
            viewBox="0 0 134 144"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill="${Ec}"
            fill-rule="evenodd"
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
        >
            <path
                d="M80.595 12.615a552.965 552.965 0 0 1-3.647 20.588L30.045 18.546a1.001 1.001 0 0 0-1.299.954v2c0 .326.16.632.427.819C34.99 26.391 43.9 38.508 40.502 55.286 38.21 66.605 30.346 79.989 12.394 94.5H5.746a1 1 0 0 0-.852.476s-1.796 2.928-2.676 5.108c-.306.758-.499 1.442-.528 1.928-.022.375.043.683.152.914.116.246.332.524.66.798.486.406 1.285.867 2.187 1.357 1.033.562 4.057 1.419 4.163 2.866.186 2.548-1.106 6.782-1.106 12.553 0 16.268 19 19 19 19-1.725-.975-9-6-9-15 0-9.311 6.533-13 13-13 6.343 0 11 4.521 11 10 0 2.933-.741 4.765-1.861 5.866-.998.981-2.269 1.353-3.426 1.467a8.702 8.702 0 0 1-.744.04 9.13 9.13 0 0 0 .738-.666c.548-.548.927-1.517.949-2.591.031-1.533-.644-3.228-2.208-4.01-1.697-.849-5.199-.584-7.134 2.191-.78 1.118-1.314 2.651-1.314 4.703 0 2.063 1.232 4.622 3.321 6.916 3.014 3.31 7.774 6.084 12.679 6.084 10.186 0 20.741-7.959 28.555-13.168 7.471-4.981 12.948-8.718 17.431-11.208 4.314-2.396 7.659-3.624 11.014-3.624 5.334 0 8 4.444 8 8 0 2.101-.587 4.218-2.226 5.563-1.1.902-2.511 1.77-4.626 1.77-3.234 0-5.148-1.716-5.148-3.333 0-1.777.895-3.553.895-3.553a1.002 1.002 0 0 0-.578-1.396c-1.485-.495-3.183-.066-4.668 1.023-2.035 1.492-3.649 4.213-3.649 6.926 0 6.426 5.29 14 16 14 8.42 0 19-8.37 19-21 0-13.65-10.5-21-21-21-2.92 0-5.368.485-7.152.928.699-.382 1.498-.731 2.318-1.053 2.964-1.163 6.264-1.875 6.834-1.875a1 1 0 0 0 1-1v-10c0-1.056.022-1.929.354-2.757.385-.959 1.191-1.832 2.747-2.902 1.75-1.205 4.38-2.595 8.322-4.435l7.493-3.496h-.001l7.508-3.504c.514-.24.802-.568.966-.901.248-.502.221-1.069.028-1.582-.202-.536-.657-1.073-.657-1.073-.45-.53-1.041-.31-1.041-.31l-33.319 9.766c2.883-5.13 6.536-12.927 7.125-20.237.372-4.63-.466-9.065-3.377-12.585l8.627 1.99a.999.999 0 0 0 .524-1.928l-30.784-9.62c1.43-8.034 2.553-15.532 3.462-21.969l-.002.013.005-.034c.37-2.617.704-5.057 1.009-7.286l.011-.184v-.002a1 1 0 0 0-.18-.537l-.054-.07-.128-.127-.079-.06a1.046 1.046 0 0 0-.205-.106c-.402-.161-5.21-2.064-8.354-2.064-3 0-6 1-9 4-1.325 1.325-5 4-8 4-.918 0-1.574-.229-2.22-.447-.834-.283-1.655-.553-2.78-.553-2.161 0-6 1-9 5 0 0 4.249-2.462 7-2.462 3 0 4.242 1.438 5.208 2.194.933.73 1.778 1.268 2.792 1.268 1.35 0 2.892-.827 4.725-1.896 2.345-1.367 5.288-3.104 9.275-3.104l.054-.001s4.194-.202 7.795 3.116Zm-54.86 83.038a1.006 1.006 0 0 0-.229-.804 1.003 1.003 0 0 0-.76-.349h-8.257c3.842-3.151 12.622-9.99 23.111-15.812 8.913-4.946 19.063-9.173 28.449-9.7-6.88 21.744-13.208 30.244-16.196 33.269-4.634 1.021-10.033 1.767-16.184 2.246-4.59.357-7.128-.925-8.486-2.703-2.005-2.625-1.448-6.147-1.448-6.147Zm45.577-26.692c7.033.299 13.458 3.016 18.323 9.547l-17.17 5.032a1 1 0 0 0-.705 1.124c1.173 7.041-3.141 12.11-12.454 15.483 4.876-9.35 8.811-20.119 12.006-31.186ZM85.746 84.5c3.312 0 6 2.689 6 6s-2.688 6-6 6c-3.311 0-6-2.689-6-6s2.689-6 6-6Z"
            />
        </svg>
    `)),cl=(new Rc("BrandInstagram32Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="32"
            height="32"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 32 32"
        >
            <path
                fill="url(#brand-instagram-32__a)"
                fill-rule="nonzero"
                d="M16 0C9.32 0 7.37 0 7 .04a7.93 7.93 0 0 0-3.16.8 6.87 6.87 0 0 0-3.7 5.24c-.1.74-.13.9-.14 4.71V16c0 6.68 0 8.63.04 9.01.11 1.34.32 2.18.76 3.1a6.74 6.74 0 0 0 4.37 3.56c.66.17 1.39.27 2.33.31.4.02 4.43.03 8.47.03 4.04 0 8.08 0 8.47-.02 1.08-.06 1.71-.14 2.4-.32a6.7 6.7 0 0 0 4.38-3.58c.43-.9.65-1.76.75-3.03.02-.27.03-4.67.03-9.06 0-4.4-.01-8.78-.03-9.05a7.8 7.8 0 0 0-.77-3.07A6.9 6.9 0 0 0 25.93.14c-.74-.1-.9-.13-4.72-.14h-5.2Z"
            />
            <path
                fill="url(#brand-instagram-32__b)"
                fill-rule="nonzero"
                d="M16 0C9.32 0 7.37 0 7 .04a7.93 7.93 0 0 0-3.16.8 6.87 6.87 0 0 0-3.7 5.24c-.1.74-.13.9-.14 4.71V16c0 6.68 0 8.63.04 9.01.11 1.34.32 2.18.76 3.1a6.74 6.74 0 0 0 4.37 3.56c.66.17 1.39.27 2.33.31.4.02 4.43.03 8.47.03 4.04 0 8.08 0 8.47-.02 1.08-.06 1.71-.14 2.4-.32a6.7 6.7 0 0 0 4.38-3.58c.43-.9.65-1.76.75-3.03.02-.27.03-4.67.03-9.06 0-4.4-.01-8.78-.03-9.05a7.8 7.8 0 0 0-.77-3.07A6.9 6.9 0 0 0 25.93.14c-.74-.1-.9-.13-4.72-.14h-5.2Z"
            />
            <path
                fill="#fff"
                d="M16 4.18c-3.21 0-3.61.02-4.87.08a8.68 8.68 0 0 0-2.87.54c-.78.3-1.44.71-2.1 1.37a5.8 5.8 0 0 0-1.36 2.1c-.29.74-.49 1.6-.54 2.86A84.36 84.36 0 0 0 4.17 16c0 3.21.02 3.61.08 4.87.05 1.26.25 2.12.54 2.87.3.78.7 1.44 1.37 2.1a5.8 5.8 0 0 0 2.09 1.36c.75.29 1.6.49 2.87.55 1.26.05 1.66.07 4.87.07 3.2 0 3.6-.02 4.87-.07a8.67 8.67 0 0 0 2.86-.55c.78-.3 1.44-.7 2.1-1.37a5.8 5.8 0 0 0 1.36-2.09c.29-.75.49-1.61.55-2.87.06-1.26.07-1.66.07-4.87a84 84 0 0 0-.07-4.87 8.77 8.77 0 0 0-.55-2.87 5.8 5.8 0 0 0-1.36-2.1 5.78 5.78 0 0 0-2.1-1.36 8.7 8.7 0 0 0-2.87-.54A84.32 84.32 0 0 0 16 4.18Zm-.4 2.13h.4c3.15 0 3.53.02 4.77.07 1.15.05 1.78.25 2.2.4.55.22.94.48 1.35.9.42.4.67.8.89 1.35.16.42.35 1.04.4 2.2.06 1.24.07 1.62.07 4.77 0 3.15-.01 3.53-.07 4.77a6.55 6.55 0 0 1-.4 2.2c-.22.55-.47.94-.89 1.35-.41.42-.8.67-1.36.89-.41.16-1.04.35-2.19.4-1.24.06-1.62.07-4.77.07-3.16 0-3.53-.01-4.78-.07a6.53 6.53 0 0 1-2.19-.4 3.66 3.66 0 0 1-1.36-.89c-.41-.41-.67-.8-.88-1.36a6.57 6.57 0 0 1-.4-2.19A83.6 83.6 0 0 1 6.3 16c0-3.16.02-3.53.07-4.78.05-1.15.25-1.78.4-2.2.22-.54.48-.94.9-1.35.4-.41.8-.67 1.35-.88a6.54 6.54 0 0 1 2.2-.41c1.08-.05 1.5-.07 3.7-.07h.67ZM20.9 9.7c0-.78.63-1.41 1.41-1.41a1.42 1.42 0 1 1-1.41 1.41Zm-4.9.24a6.07 6.07 0 1 0 0 12.14 6.07 6.07 0 0 0 0-12.14ZM19.95 16a3.94 3.94 0 1 0-7.88 0 3.94 3.94 0 0 0 7.88 0Z"
            />
            <defs>
                <radialGradient
                    id="brand-instagram-32__a"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-90 21.48 12.98) scale(31.7144)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#fd5" />
                    <stop offset=".1" stop-color="#fd5" />
                    <stop offset=".5" stop-color="#ff543e" />
                    <stop offset="1" stop-color="#c837ab" />
                </radialGradient>
                <radialGradient
                    id="brand-instagram-32__b"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(78.68 -4.09 -2.12) scale(14.17646)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stop-color="#3771c8" />
                    <stop offset=".13" stop-color="#3771c8" />
                    <stop offset="1" stop-color="#60f" stop-opacity=".01" />
                </radialGradient>
            </defs>
        </svg>
    `),new Rc("BrandTiktok32Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="32"
            height="32"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 32 32"
        >
            <path
                fill="#ee1d52"
                d="M22.71 5.57a6.9 6.9 0 0 1-1.63-3.38h1.35s-.27 2.31 1.7 4.6l.03.02a7.9 7.9 0 0 1-1.45-1.24ZM9.7 17.17a4.25 4.25 0 0 0-1.85 3.19 4.29 4.29 0 0 0 2.23 4 4.65 4.65 0 0 1-.8-2.8c.16-1.49.75-2.32 1.84-3.18 1.56-1.16 3.52-.5 3.52-.5v-5.02c-.47-.07-.95-.1-1.42-.08v3.89s-1.96-.66-3.52.5ZM4 26.66l.12.27a5.29 5.29 0 0 1-.12-.27ZM29.23 14v-4.9c-.32.03-.83-.01-1.42-.15v3.85s-1.73-.07-3-.42a11.4 11.4 0 0 1-2.94-1.21l-.86-.56v10.13c0 .57-.14 1.98-.59 3.16a9.4 9.4 0 0 1-1.59 2.67l-.06.08s-1.1 1.37-3.03 2.29c-1.6.76-3.01.8-3.59.82h-.13S9.37 29.9 7 28.27l-.02-.01c.44.45.92.85 1.44 1.21 2.38 1.63 5.02 1.52 5.02 1.52h.13c.58-.02 2-.07 3.6-.83a9.33 9.33 0 0 0 3.02-2.28l.06-.07c.26-.31 1.06-1.28 1.6-2.69.44-1.17.59-2.58.59-3.15V11.82l.85.56s1.15.74 2.94 1.22c1.28.34 3 .41 3 .41Z"
            />
            <path
                fill="#252525"
                fill-rule="nonzero"
                d="M27.83 8.98v3.84s-1.73-.07-3-.41c-1.8-.48-2.94-1.22-2.94-1.22l-.86-.56v10.14c0 .57-.15 1.98-.6 3.15-.58 1.54-1.48 2.55-1.64 2.76 0 0-1.1 1.36-3.03 2.28-1.74.83-3.27.81-3.73.83 0 0-2.64.11-5.02-1.52a9.25 9.25 0 0 1-2.06-3.28 9.08 9.08 0 0 1 8.28-12.2v3.9s-1.95-.66-3.52.5a4.25 4.25 0 0 0-1.84 3.19 4.29 4.29 0 0 0 2.22 3.99c.26.35.57.66.92.9a3.98 3.98 0 0 0 4.16.4 3.94 3.94 0 0 0 2.14-2.38c.22-.64.22-1.3.22-1.96V2.2h3.56a6.9 6.9 0 0 0 3.08 4.62c.16.17.96 1.01 1.99 1.53.53.27 1.1.48 1.67.62Z"
            />
            <path
                fill="#69c9d0"
                fill-rule="nonzero"
                d="M10.12 13.45a8.8 8.8 0 0 0-4.61 4.11A9.07 9.07 0 0 0 4.95 25c.12.33.59 1.49 1.34 2.47.22.28.46.55.71.8a9.93 9.93 0 0 1-2.13-2 9.79 9.79 0 0 1-1.33-2.46 9.08 9.08 0 0 1 9.7-12.11v1.1a8.34 8.34 0 0 0-3.12.66Zm7.41-11.24h3.56c-.12-.73-.06-1.21-.06-1.21H16.1v19.15c0 .66 0 1.3-.22 1.94a3.95 3.95 0 0 1-2.14 2.38c-1.35.55-2.44.56-3.66-.1.26.35.57.66.92.9a3.97 3.97 0 0 0 4.16.4 3.95 3.95 0 0 0 2.14-2.38c.22-.64.22-1.3.22-1.96V2.2Zm10.3 6.77V7.9a6.34 6.34 0 0 1-3.66-1.08c.16.17.96 1.01 2 1.53.52.27 1.08.48 1.66.62Z"
            />
        </svg>
    `),new Rc("BrandTwitch32Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
        >
            <path fill="#fff" d="m27.14 14.86-4.57 4.57H18l-4 4v-4H8.86V2.29h18.28v12.57Z" />
            <path
                fill="#9146FF"
                fill-rule="evenodd"
                d="M2 5.71 7.71 0h21.72v16L19.14 26.29h-4.57L8.86 32v-5.71H2V5.7Zm20.57 13.72 4.57-4.57V2.29H8.86v17.14H14v4l4-4h4.57Z"
                clip-rule="evenodd"
            />
            <path fill="#9146FF" d="M21.43 6.29h2.29v6.86h-2.29zM15.14 6.29h2.29v6.86h-2.29z" />
        </svg>
    `),new Rc("BrandTwitter32Icon",Tc`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
        >
            <path fill="#fff" d="M0 0h32v32H0z" opacity=".01" />
            <path
                fill="#41ABE1"
                fill-rule="evenodd"
                d="M32 7c-1.18.5-2.44.85-3.77 1a6.43 6.43 0 0 0 2.88-3.53 13.36 13.36 0 0 1-4.17 1.55A6.64 6.64 0 0 0 22.15 4a6.48 6.48 0 0 0-6.56 6.4c0 .5.05.99.17 1.45A18.8 18.8 0 0 1 2.23 5.17a6.35 6.35 0 0 0 2.03 8.54 6.68 6.68 0 0 1-2.97-.8v.07c0 3.1 2.26 5.69 5.26 6.28a6.81 6.81 0 0 1-2.96.1 6.55 6.55 0 0 0 6.13 4.45A13.39 13.39 0 0 1 0 26.46a18.93 18.93 0 0 0 10.06 2.87A18.3 18.3 0 0 0 28.72 10.3 13.1 13.1 0 0 0 32 7Z"
                clip-rule="evenodd"
            />
        </svg>
    `),Cc({tagName:"toniq-dropdown",props:{options:[],selected:void 0,icon:void 0,selectedLabelPrefix:"",dropdownOpen:!1},events:{selectChange:cs()},styles:Vs`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 288px;
            min-height: 48px;
            ${vc.boldParagraphFont};
        }

        .dropdown {
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            ${qc}
            border-radius: 8px;
            outline: none;
        }

        ${mc(".dropdown:focus",0)}

        .trigger-icon {
            transform: rotate(0);
            transition: ${Ks} linear transform;
        }

        .trigger-icon {
            align-self: flex-start;
        }

        .dropdown.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown.open .select-options {
            display: flex;
            flex-direction: column;
            will-change: filter;
        }

        .dropdown.open,
        .dropdown.open .select {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        .dropdown-trigger.dropdown-trigger {
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        .select {
            display: flex;
            gap: 8px;
            text-align: left;
            border-radius: 8px;
            cursor: pointer;
            padding: 12px;
            padding-left: 16px;
            ${Ic};
            ${fc(hc.accentSecondary)}
        }

        .select-options {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 99;
            border-radius: 8px;
            ${fc(hc.pagePrimary)}
            ${Bc.popupShadow};
        }

        .selected-label-prefix {
            ${vc.paragraphFont};
        }

        .select-options .option {
            padding: 16px;
            cursor: pointer;
            text-align: left;
            ${Ic};
        }

        .select-options .option.selected {
            ${fc(hc.accentPrimary)}
        }

        .select-options .option:not(.selected):hover {
            background-color: ${hc.accentTertiary.backgroundColor};
        }

        .select-options .option:last-child {
            border-radius: 0px 0px 8px 8px;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }
    `,initCallback:e=>{let{props:t,host:r,setProps:a}=e;window.addEventListener("click",(function(e){const n=r.shadowRoot?.querySelector("button.dropdown");!e.composedPath().includes(n)&&t.dropdownOpen&&a({dropdownOpen:!1})}))},renderCallback:e=>{let{dispatch:t,events:r,props:a,setProps:n}=e;const i=a.selected?a.selected:a.options[0];const o=a.icon?$s`
                <${Mc}
                    ${Dc("rendered-input-icon")}
                    ${Ss(Mc.props.icon,a.icon)}
                ></${Mc}>`:"",s=a.selectedLabelPrefix?$s`
                  <span class="selected-label-prefix">${a.selectedLabelPrefix}</span>
              `:"";return $s`
            <button class="dropdown ${a.dropdownOpen?"open":""}"
                @click=${()=>{n({dropdownOpen:!a.dropdownOpen})}}
                role="listbox"
                aria-expanded=${a.dropdownOpen}>
                <div class="select dropdown-trigger">
                    ${o}
                    <span class="select-selected">
                        ${s}
                        ${i?.label}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${Mc}
                            class="trigger-icon"
                            ${Ss(Mc.props.icon,Wc)}
                        ></${Mc}>
                    </span>
                </div>
                <div class="select-options">
                    ${a.options.map((e=>$s`
                                <span
                                    class="option ${e.value===i?.value?"selected":""}"
                                    @click=${a=>{a.preventDefault(),a.stopPropagation(),function(e){n({dropdownOpen:!1}),t(new r.selectChange(e))}(e)}}
                                    role="option"
                                >
                                    ${e.label}
                                </span>
                            `))}
                </div>
            </button>
        `}}));function ll(e){let{input:t,matcher:r}=e;return!t||!r||(t.length>1?!!t.split("").every((e=>ll({input:e,matcher:r}))):r instanceof RegExp?!!t.match(r):r.includes(t))}function ul(e){let{value:t,allowed:r,blocked:a}=e;const n=!r||ll({input:t,matcher:r}),i=!!a&&ll({input:t,matcher:a});return n&&!i}function dl(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:r}=e.value.split("").reduce(((t,r)=>(ul({...e,value:r})?t.filtered.push(r):t.blocked.push(r),t)),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:r.join("")}}const hl=Cc({tagName:"toniq-input",props:{icon:void 0,value:"",placeholder:"",disabled:!1,allowedInputs:"",blockedInputs:"",innerInputElement:void 0},events:{valueChange:cs(),inputBlocked:cs()},styles:Vs`
        :host {
            position: relative;
            display: inline-flex;
        }

        .focus-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: ${Qc};
            z-index: 0;
            pointer-events: none;
        }

        label {
            cursor: pointer;
            display: inline-flex;
            box-sizing: border-box;
            position: relative;
            padding: 12px 16px;
            border-radius: ${Qc};
            background-color: ${hc.accentTertiary.backgroundColor};
            font: ${vc.paragraphFont};
        }

        ${mc("input:focus ~ .focus-border",0)}

        ${Mc} {
            margin-right: 10px;
        }

        input {
            ${qc};
        }

        input:focus {
            outline: none;
        }

        input::placeholder {
            color: ${hc.accentTertiary.foregroundColor};
        }
    `,renderCallback:e=>{let{props:t,setProps:r,dispatch:a,events:n,host:i}=e;const{filtered:o}=dl({value:t.value,allowed:t.allowedInputs,blocked:t.blockedInputs});o!==t.value&&r({value:o});return $s`
            <label>
                ${t.icon?$s`
                <${Mc}
                    ${Ss(Mc.props.icon,t.icon)}
                ></${Mc}>
            `:""}
                <input
                    ?disabled=${t.disabled}
                    ${Rs((e=>{if(!(e instanceof HTMLInputElement))throw new Error(`Created DOM element was not an input element: "${e.tagName}"`);r({innerInputElement:e})}))}
                    .value=${t.value}
                    ${Ms("input",(e=>{if(!t.innerInputElement){const e=i.shadowRoot?.querySelector("input");if(!(e instanceof HTMLInputElement))throw new Error("Failed to get inner input element in listener");if(r({innerInputElement:e}),!t.innerInputElement)throw new Error("Even after assigning input element again, it still isn't found.")}if(!(e instanceof InputEvent))throw new Error(`Input event type mismatch: "${e.constructor.name}"`);const o=e.data,s=t.value;let c=t.innerInputElement.value??"";if(o)if(1===o.length)ul({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs})||(c=s,a(new n.inputBlocked(o)));else{const{filtered:e,blocked:r}=dl({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs});c=e,a(new n.inputBlocked(r))}t.value!==c&&r({value:c}),t.innerInputElement.value!==c&&(t.innerInputElement.value=c),s!==c&&a(new n.valueChange(c))}))}
                    placeholder=${t.placeholder}
                />
                <div class="focus-border"></div>
            </label>
        `}});const fl=Cc({tagName:"toniq-middle-ellipsis",props:{text:"",letterCount:4,copyOnClick:!1,externalLink:""},events:{copied:cs()},styles:Vs`
        :host {
            /* 5 frames at 60 fps */
            transition: ${Ks};
            ${vc.paragraphFont};
        }

        :host,
        .text-wrapper {
            display: inline-flex;
            align-items: center;
        }

        :host(.clickable:hover) {
            color: ${hc.pageInteraction.foregroundColor};
        }

        ${Mc} {
            margin-left: 4px;
        }

        .copyable {
            cursor: pointer;
        }

        a {
            color: inherit;
            text-decoration: none;
            border-radius: 8px;
            position: relative;
            outline: none;
        }
        a:visited {
            color: inherit;
        }

        button {
            ${qc};
            border-radius: 8px;
            position: relative;
            outline: none;
        }

        ${mc("button:focus",0)}
        ${mc("a:focus",0)}
    `,renderCallback:e=>{let{props:t,setProps:r,host:a,dispatch:n,events:i}=e;t.letterCount%1&&r({letterCount:Math.floor(t.letterCount)}),t.letterCount<1&&r({letterCount:1});const o=!!t.externalLink,s=t.copyOnClick;o||s?a.classList.add("clickable"):a.classList.remove("clickable");const c=t.text.length>2*t.letterCount+2,l=c?(u=t.text,d=t.letterCount,`${u.slice(0,d).trim()}\u2026${u.slice(-1*d).trim()}`):t.text;var u,d;const h=c?t.text:"",f=o?Jc:s?Yc:void 0,p=f?$s`
                <${Mc}
                    ${Ss(Mc.props.icon,f)}
                ></${Mc}>
            `:"";return l?o?$s`
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-wrapper"
                        href=${t.externalLink}
                        title=${h}
                    >
                        <span>${l}</span>
                        ${p}
                    </a>
                `:s?$s`
                    <button
                        class="text-wrapper copyable"
                        ${Ms("click",(async()=>{await async function(e){return navigator.clipboard.writeText(e)}(t.text),n(new i.copied)}))}
                    >
                        <span title=${h}>${l}</span>
                        ${p}
                    </button>
                `:$s`
                    <span title=${h}>${l}</span>
                `:$s``}}),pl=bs(class extends vs{constructor(e){var t;if(super(e),e.type!==ms||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[r]=t;var a,n;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in r)r[e]&&!(null===(a=this.st)||void 0===a?void 0:a.has(e))&&this.nt.add(e);return this.render(r)}const i=e.element.classList;this.nt.forEach((e=>{e in r||(i.remove(e),this.nt.delete(e))}));for(const o in r){const e=!!r[o];e===this.nt.has(o)||(null===(n=this.st)||void 0===n?void 0:n.has(o))||(e?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return To}});function gl(e,t,r){return Math.min(Math.max(e,t),r)}function ml(e){return`${e}px`}function Al(e){return`${e}%`}function yl(e,t){const r=t-e+1;return Array.from({length:r},((t,r)=>e+r))}const bl=Cc({tagName:"toniq-pagination",props:{currentPage:1,pageCount:10,pagesShown:7},styles:Vs`
        :host {
            display: flex;
        }

        button {
            ${qc}
            display: flex;
            align-items: center;
            ${Ic};
        }

        .control {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 8px;
            padding: 4px;
            border-radius: 8px;
            ${fc(hc.accentSecondary)};
        }

        .control:hover {
            ${fc(hc.accentPrimary)};
        }

        .control[disabled] {
            pointer-events: none;
            ${fc(hc.accentTertiary)};
        }

        .page {
            display: flex;
            position: relative;
            width: 32px;
            height: 32px;
            ${vc.labelFont}
            ${Ic}
            justify-content: center;
            padding: 0;
        }

        .page:not(.selected):not([disabled]):hover {
            ${fc(hc.pageInteraction)};
        }

        .page.selected {
            color: white;
            ${fc(hc.accentPrimary)};
            border-radius: 16px;
        }
    `,events:{created:cs(),pageChange:cs(),previous:cs(),next:cs()},initCallback:e=>{let{dispatch:t,events:r}=e;t(new r.created(void 0))},renderCallback:e=>{let{props:t,events:r,setProps:a,dispatch:n}=e;return t.pageCount<=1?$s``:$s`
            <button
                ${Ms("click",(()=>{t.currentPage>1&&(a({currentPage:t.currentPage-1}),n(new r.previous(t.currentPage)))}))}
                class="control"
                ?disabled=${t.currentPage<=1}
            >
                <${Mc}
                    ${Ss(Mc.props.icon,Zc)}></${Mc}>
            </button>
            ${function*(e,t){if(void 0!==e){let r=0;for(const a of e)yield t(a,r++)}}(function(e,t,r){let a,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;e=gl(e,1,t);const i=(r=gl(r,n,t))-5,o=r-3;a=t<=r?r:e<o||e>t-o?o:i;const s={start:Math.round(e-a/2),end:Math.round(e+a/2)};s.start-1!==1&&s.end+1!==t||(s.start+=1,s.end+=1);let c=e>a?yl(Math.min(s.start,t-a),Math.min(s.end,t)):yl(1,Math.min(t,a+1));e>t-o&&t>r&&(c=yl(t-a,t));const l=(e,r)=>c.length+1!==t?r:[e],u=c[c.length-1];return 1!==c[0]&&(c=l(1,[1,"..."]).concat(c)),u&&u<t&&(c=c.concat(l(t,["...",t]))),c}(t.currentPage,t.pageCount,t.pagesShown),(e=>$s`
                        <button
                            class=${pl({page:!0,selected:t.currentPage===e})}
                            ?disabled=${"..."===e||t.currentPage===e}
                            ${Ms("click",(()=>{"number"===typeof e&&(a({currentPage:e}),n(new r.pageChange(e)))}))}
                        >
                            ${e}
                        </button>
                    `))}
            <button
                ${Ms("click",(()=>{t.currentPage<t.pageCount&&(a({currentPage:t.currentPage+1}),n(new r.next(t.currentPage)))}))}
                class="control"
                ?disabled=${t.currentPage>=t.pageCount}
            >
                <${Mc}
                    ${Ss(Mc.props.icon,Vc)}></${Mc}>
            </button>
        `}}),vl=16,wl=Vs`
    ${vl}px
`,xl=Vs`
    -webkit-appearance: none;
    position: relative;
    border: none;
    height: ${wl};
    width: ${wl};
    z-index: 10;
    cursor: pointer;
    pointer-events: all;
    border-radius: 10px;
    transition: ${Ks};
    ${fc(hc.accentPrimary)};
`,kl=Vs`
    transform: scale(1.2);
`,El="lower-label-wrapper",ql="upper-label-wrapper",Bl="label-percent-wrapper",Il="label-pixel-wrapper",jl="label-outer-wrapper",Cl="label-right-wrapper",_l="range",Sl="lower-slider",zl="upper-slider",Ml="slider",Ql="label",Nl="upper-label",Rl="upper-label",Tl="slider",Pl=Cc({tagName:"toniq-slider",props:{value:0,min:0,max:100,double:!1,suffix:"",step:1,internalRangeWidth:0,labelOverlap:0},events:{valueChange:cs()},styles:Vs`
        :host {
            display: block;
        }

        .${io(_l)} {
            display: flex;
            height: 8px;
            width: 100%;
            border-radius: 4px;
            margin: 0;
            margin-bottom: 48px;
            position: relative;
            ${fc(hc.accentSecondary)};
        }

        .progress {
            position: absolute;
            height: 8px;
            z-index: 1;
            pointer-events: none;
            border-radius: 4px;
            ${fc(hc.accentPrimary)};
        }

        .${io(jl)} {
            position: absolute;
            z-index: 1;
            margin-top: 16px;
            display: flex;
            width: max-content;
            ${vc.boldParagraphFont};
            ${Ic};
        }

        .${io(Il)},
            .${io(Bl)} {
            position: relative;
            flex-shrink: 0;
        }

        .${io(Cl)} {
            justify-content: flex-end;
        }

        .${io(Ml)} {
            -webkit-appearance: none;
            height: 8px;
            width: 100%;
            background-color: transparent;
            margin: 0;
            position: relative;
            outline: none;
        }

        /* this does not work in firefox */
        ${mc(".slider:focus",0)}

        .${io(Sl)},
        .${io(zl)} {
            position: absolute;
            left: 0;
            pointer-events: none;
        }

        .slider-wrapper {
            position: relative;
            width: 100%;
        }

        /* these selectors fail if combined with a comma */
        .${io(Ml)}::-moz-range-thumb {
            ${xl}
        }

        /* these selectors fail if combined with a comma */
        .${io(Ml)}::-webkit-slider-thumb {
            ${xl}
        }

        /* these selectors fail if combined with a comma */
        .${io(Ml)}::-webkit-slider-thumb:hover {
            ${kl}
        }

        /* these selectors fail if combined with a comma */
        .${io(Ml)}::-moz-range-thumb:hover {
            ${kl}
        }
    `,renderCallback:e=>{let{props:t,host:r,events:a,dispatch:n,setProps:i}=e;const o=function(e){let{min:t,max:r}=e;if(t>r)return{min:r,max:t};return{min:t,max:r}}({...t}),s=function(e){let{value:t,double:r,min:a,max:n}=e;if(r){if(Dl(t)){return{min:gl(t.min,a,Math.min(t.max,n)),max:gl(t.max,Math.max(t.min,a),n)}}return{min:a,max:n}}if(Dl(t))return a;return gl(t,a,n)}({...t});!function(e,t){if(Dl(e)){const r=t.shadowRoot?.querySelector(`.${Sl}`),a=t.shadowRoot?.querySelector(`.${zl}`);r instanceof HTMLInputElement&&a instanceof HTMLInputElement&&(Number(r.value)!==e.min&&(r.value=String(e.min)),Number(a.value)!==e.max&&(a.value=String(e.max)))}else{const r=t.querySelector(`.${Ml}`);r instanceof HTMLInputElement&&Number(r.value)!==e&&(r.value=String(e))}}(s,r);const c=Ll(r);if(Dl(s)){const e=s,l={left:ml((c-vl)*(e.min-o.min)/(o.max-o.min)+8),right:ml((c-vl)*(o.max-e.max)/(o.max-o.min)+8)},u=Gl(e.min,t.suffix),d=Gl(e.max,t.suffix);setTimeout((()=>{const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;const r=Ol(e);if(!r)return 0;const a=r.lower.right-r.upper.left+t;return Math.max(0,a)}(r);e!==t.labelOverlap&&i({labelOverlap:e})}),0);const h=(o.max-e.max)/(o.max-o.min)>.5,f=Fl({value:e.min,limits:{min:o.min,max:e.max},flip:!0}),p=Fl({value:e.max,limits:{min:e.min,max:o.max},flip:!1}),g=t.labelOverlap&&h?t.labelOverlap:0,m=t.labelOverlap&&!h?t.labelOverlap:0;return $s`
                <div
                    class="range"
                    ${Ps((()=>{i({internalRangeWidth:Ll(r)})}))}
                >
                    <div
                        class="progress"
                        style="left: ${l.left}; right:${l.right}"
                    ></div>
                    <span
                        class="${jl} ${El}"
                        style="left: ${l.left}"
                    >
                        <span
                            class="${Bl}"
                            style="margin-left: ${Al(f)}"
                        >
                            <span
                                class="${Il}"
                                style="margin-right: ${ml(m)}"
                                ${Dc(Rl)}
                            >
                                ${u}
                            </span>
                        </span>
                    </span>
                    <span
                        class="${jl} ${ql} ${Cl}"
                        style="right: ${l.right}"
                    >
                        <span
                            class="${Bl}"
                            style="margin-right: ${Al(p)}"
                        >
                            <span
                                class="${Il}"
                                style="margin-left: ${ml(g)}"
                                ${Dc(Nl)}
                            >
                                ${d}
                            </span>
                        </span>
                    </span>
                    <div class="slider-wrapper">
                        <input
                            type="range"
                            step=${t.step}
                            class="${Sl} ${Ml}"
                            .min=${o.min}
                            .max=${o.max}
                            .value=${e.min}
                            ${Ms("input",(t=>{const r=t.target,o={...e,min:Number(r.value)};i({value:o}),n(new a.valueChange(o))}))}
                        />
                        <input
                            type="range"
                            class="${zl} ${Ml}"
                            step=${t.step}
                            .min=${o.min}
                            .max=${o.max}
                            .value=${e.max}
                            ${Dc(Tl)}
                            ${Ms("input",(t=>{const r=t.target,o={...e,max:Number(r.value)};i({value:o}),n(new a.valueChange(o))}))}
                        />
                    </div>
                </div>
            `}{const e=s,l=ml((c-vl)*(o.max-e)/(o.max-o.min)+8),u=Gl(e,t.suffix),d=Fl({value:e,limits:o,flip:!1});return $s`
                <div
                    class="range"
                    ${Ps((()=>{i({internalRangeWidth:Ll(r)})}))}
                >
                    <div class="progress" style="left: 0px; right: ${l}"></div>
                    <span
                        class="${jl} ${Cl}"
                        style="right: ${l}"
                    >
                        <span
                            class="${Bl}"
                            style="margin-right: ${Al(d)}"
                            ${Dc(Ql)}
                        >
                            ${u}
                        </span>
                    </span>
                    <input
                        type="range"
                        class="${Ml}"
                        step=${t.step}
                        .min=${o.min}
                        .max=${o.max}
                        .value=${e}
                        ${Dc(Tl)}
                        ${Ms("input",(e=>{const t=e.target,r=Number(t.value);i({value:r}),n(new a.valueChange(r))}))}
                    />
                </div>
            `}}});function Ol(e){const t=e.shadowRoot?.querySelector(`.${El} .${Bl}`),r=e.shadowRoot?.querySelector(`.${ql} .${Bl}`);if(r instanceof HTMLElement&&t instanceof HTMLElement){return{lower:t.getBoundingClientRect(),upper:r.getBoundingClientRect()}}}function Fl(e){let{value:t,limits:r,flip:a}=e;const n=100*((r.max-t)/(r.max-r.min));return-(a?100-n:n)}function Dl(e){return"object"===typeof(t=e)&&!!t&&void 0!==e.min&&void 0!==e.max;var t}function Ll(e){const t=e.shadowRoot?.querySelector(`.${_l}`);return t?.clientWidth??0}function Gl(e,t){return`${e} ${t}`}const Ul=Cc({tagName:"toniq-toggle-button",props:{text:"",active:!1,icon:void 0},styles:Vs`
        :host {
            ${vc.boldParagraphFont};
            ${Ic};
            display: inline-flex;
            vertical-align: middle;
        }

        button {
            ${qc};
            border: 0;
            display: inline-flex;
            cursor: pointer;
            align-items: center;
            position: relative;
            outline: none;

            -webkit-tap-highlight-color: transparent;
            border-radius: 8px;
            padding: 4px 12px;

            ${fc(hc.accentSecondary)};
            transition: color ${Ks}, background-color ${Ks};
        }

        ${mc("button:focus",0)}

        button.active {
            ${fc(hc.accentPrimary)};
        }

        :host(:hover) button {
            ${fc(hc.accentPrimary)};
        }

        :host(:hover) button.active {
            ${fc(hc.accentPrimaryHover)};
        }

        :host(:active) button.active {
            ${fc(hc.accentPrimaryActive)};
        }

        :host(.toniq-toggle-button-text-only) button {
            ${fc(hc.pagePrimary)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only) button.active {
            ${fc(hc.pageInteraction)};
            background: none;
        }
        :host(.toniq-toggle-button-text-only:hover) button.active {
            ${fc(hc.pageInteractionHover)};
        }
        :host(.toniq-toggle-button-text-only:hover) button {
            color: ${hc.pageInteraction.foregroundColor};
        }
        :host(.toniq-toggle-button-text-only:active) button.active {
            ${fc(hc.pageInteractionActive)};
        }
        :host(.toniq-toggle-button-text-only) button {
            padding: 0 8px;
        }

        .icon-template + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:e=>{let{props:t}=e;const r=t.icon?$s`
                <${Mc}
                class="icon-template"
                    ${Ss(Mc.props.icon,t.icon)}
                ></${Mc}>
            `:"",a=t.text?$s`
                  <span class="text-template">${t.text}</span>
              `:"";return $s`
            <button
                class="${t.active?"active":""}"
                role="checkbox"
                aria-checked=${t.active}
            >
                ${r} ${a}
            </button>