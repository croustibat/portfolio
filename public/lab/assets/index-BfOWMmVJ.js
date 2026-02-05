var lp=Object.defineProperty;var cp=(r,e,t)=>e in r?lp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var qe=(r,e,t)=>cp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vc="160",up=0,jc=1,hp=2,nf=1,fp=2,vi=3,Ki=0,vn=1,Mi=2,Vi=0,ls=1,Jc=2,Qc=3,eu=4,dp=5,mr=100,pp=101,mp=102,tu=103,nu=104,_p=200,gp=201,vp=202,xp=203,Bl=204,zl=205,Sp=206,Mp=207,Ep=208,yp=209,Tp=210,bp=211,Ap=212,wp=213,Rp=214,Cp=0,Pp=1,Lp=2,mo=3,Dp=4,Up=5,Ip=6,Np=7,rf=0,Op=1,Fp=2,Wi=0,Bp=1,zp=2,kp=3,Gp=4,Hp=5,Vp=6,sf=300,_s=301,gs=302,kl=303,Gl=304,Do=306,Hl=1e3,ni=1001,Vl=1002,fn=1003,iu=1004,qo=1005,Vn=1006,Wp=1007,aa=1008,Xi=1009,Xp=1010,qp=1011,xc=1012,af=1013,Oi=1014,Fi=1015,oa=1016,of=1017,lf=1018,xr=1020,Yp=1021,ii=1023,$p=1024,Kp=1025,Sr=1026,vs=1027,Zp=1028,cf=1029,jp=1030,uf=1031,hf=1033,Yo=33776,$o=33777,Ko=33778,Zo=33779,ru=35840,su=35841,au=35842,ou=35843,ff=36196,lu=37492,cu=37496,uu=37808,hu=37809,fu=37810,du=37811,pu=37812,mu=37813,_u=37814,gu=37815,vu=37816,xu=37817,Su=37818,Mu=37819,Eu=37820,yu=37821,jo=36492,Tu=36494,bu=36495,Jp=36283,Au=36284,wu=36285,Ru=36286,df=3e3,Mr=3001,Qp=3200,em=3201,tm=0,nm=1,qn="",Xt="srgb",wi="srgb-linear",Sc="display-p3",Uo="display-p3-linear",_o="linear",Mt="srgb",go="rec709",vo="p3",Or=7680,Cu=519,im=512,rm=513,sm=514,pf=515,am=516,om=517,lm=518,cm=519,Pu=35044,Lu="300 es",Wl=1035,yi=2e3,xo=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Xl=180/Math.PI;function ga(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function gn(r,e,t){return Math.max(e,Math.min(t,r))}function um(r,e){return(r%e+e)%e}function Qo(r,e,t){return(1-t)*r+t*e}function Du(r){return(r&r-1)===0&&r!==0}function ql(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,i,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],x=i[4],S=i[7],R=i[2],A=i[5],T=i[8];return s[0]=o*_+a*M+l*R,s[3]=o*m+a*x+l*A,s[6]=o*p+a*S+l*T,s[1]=c*_+u*M+h*R,s[4]=c*m+u*x+h*A,s[7]=c*p+u*S+h*T,s[2]=f*_+d*M+g*R,s[5]=f*m+d*x+g*A,s[8]=f*p+d*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new tt;function mf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function So(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hm(){const r=So("canvas");return r.style.display="block",r}const Uu={};function qs(r){r in Uu||(Uu[r]=!0,console.warn(r))}const Iu=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[wi]:{transfer:_o,primaries:go,toReference:r=>r,fromReference:r=>r},[Xt]:{transfer:Mt,primaries:go,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Uo]:{transfer:_o,primaries:vo,toReference:r=>r.applyMatrix3(Nu),fromReference:r=>r.applyMatrix3(Iu)},[Sc]:{transfer:Mt,primaries:vo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nu),fromReference:r=>r.applyMatrix3(Iu).convertLinearToSRGB()}},fm=new Set([wi,Uo]),dt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!fm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ea[e].toReference,i=Ea[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ea[r].primaries},getTransfer:function(r){return r===qn?_o:Ea[r].transfer}};function cs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function tl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fr;class _f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=So("canvas")),Fr.width=e.width,Fr.height=e.height;const n=Fr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=So("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dm=0;class gf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(nl(i[o].image)):s.push(nl(i[o]))}else s=nl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function nl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_f.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pm=0;class Nn extends ws{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,n=ni,i=ni,s=Vn,o=aa,a=ii,l=Xi,c=Nn.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ga(),this.name="",this.source=new gf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Mr?Xt:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Mr:df}set encoding(e){qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mr?Xt:qn}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=sf;Nn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,i=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,R=(p+1)/2,A=(u+f)/4,T=(h+_)/4,D=(g+m)/4;return x>S&&x>R?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):S>R?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=D/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=D/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mm extends ws{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mr?Xt:qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vf extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _m extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,p*M);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*M;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new X,Ou=new va;class xa{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ta.subVectors(this.max,Ls),Br.subVectors(e.a,Ls),zr.subVectors(e.b,Ls),kr.subVectors(e.c,Ls),Pi.subVectors(zr,Br),Li.subVectors(kr,zr),rr.subVectors(Br,kr);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-rr.z,rr.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,rr.z,0,-rr.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-rr.y,rr.x,0];return!rl(t,Br,zr,kr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Br,zr,kr,Ta))?!1:(ba.crossVectors(Pi,Li),t=[ba.x,ba.y,ba.z],rl(t,Br,zr,kr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new X,new X,new X,new X,new X,new X,new X,new X],Zn=new X,ya=new xa,Br=new X,zr=new X,kr=new X,Pi=new X,Li=new X,rr=new X,Ls=new X,Ta=new X,ba=new X,sr=new X;function rl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){sr.fromArray(r,s);const a=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),l=e.dot(sr),c=t.dot(sr),u=n.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const gm=new xa,Ds=new X,sl=new X;class Mc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ds,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(sl)),this.expandByPoint(Ds.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new X,al=new X,Aa=new X,Di=new X,ol=new X,wa=new X,ll=new X;class vm{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){al.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(al);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Aa),a=Di.dot(this.direction),l=-Di.dot(Aa),c=Di.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(al).addScaledVector(Aa,f),d}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){ol.subVectors(t,e),wa.subVectors(n,e),ll.crossVectors(ol,wa);let o=this.direction.dot(ll),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Di,wa));if(l<0)return null;const c=a*this.direction.dot(ol.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(ll);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,Sm)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ui.crossVectors(n,bn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ui.crossVectors(n,bn)),Ui.normalize(),Ra.crossVectors(bn,Ui),i[0]=Ui.x,i[4]=Ra.x,i[8]=bn.x,i[1]=Ui.y,i[5]=Ra.y,i[9]=bn.y,i[2]=Ui.z,i[6]=Ra.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],S=n[11],R=n[15],A=i[0],T=i[4],D=i[8],v=i[12],E=i[1],F=i[5],U=i[9],Z=i[13],L=i[2],N=i[6],G=i[10],W=i[14],q=i[3],$=i[7],C=i[11],j=i[15];return s[0]=o*A+a*E+l*L+c*q,s[4]=o*T+a*F+l*N+c*$,s[8]=o*D+a*U+l*G+c*C,s[12]=o*v+a*Z+l*W+c*j,s[1]=u*A+h*E+f*L+d*q,s[5]=u*T+h*F+f*N+d*$,s[9]=u*D+h*U+f*G+d*C,s[13]=u*v+h*Z+f*W+d*j,s[2]=g*A+_*E+m*L+p*q,s[6]=g*T+_*F+m*N+p*$,s[10]=g*D+_*U+m*G+p*C,s[14]=g*v+_*Z+m*W+p*j,s[3]=M*A+x*E+S*L+R*q,s[7]=M*T+x*F+S*N+R*$,s[11]=M*D+x*U+S*G+R*C,s[15]=M*v+x*Z+S*W+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,x=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,A=t*M+n*x+i*S+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(_*f*s-h*m*s-_*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=x*T,e[5]=(u*m*s-g*f*s+g*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*n*d+t*_*d+u*n*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=R*T,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*T,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,M=l*c,x=l*u,S=l*h,R=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*R,i[1]=(d+S)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(d-S)*A,i[5]=(1-(f+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-M)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Gr.set(i[0],i[1],i[2]).length();const o=Gr.set(i[4],i[5],i[6]).length(),a=Gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/s,u=1/o,h=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=h,jn.elements[9]*=h,jn.elements[10]*=h,t.setFromRotationMatrix(jn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=yi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===yi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===xo)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=yi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,d=(n+i)*u;let g,_;if(a===yi)g=(o+s)*h,_=-2*h;else if(a===xo)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gr=new X,jn=new $t,xm=new X(0,0,0),Sm=new X(1,1,1),Ui=new X,Ra=new X,bn=new X,Fu=new $t,Bu=new va;class Io{constructor(e=0,t=0,n=0,i=Io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Io.DEFAULT_ORDER="XYZ";class xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mm=0;const zu=new X,Hr=new va,mi=new $t,Ca=new X,Us=new X,Em=new X,ym=new va,ku=new X(1,0,0),Gu=new X(0,1,0),Hu=new X(0,0,1),Tm={type:"added"},bm={type:"removed"};class On extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new X,t=new Io,n=new va,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new tt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Us,Ca,this.up):mi.lookAt(Ca,Us,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(mi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Em),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}On.DEFAULT_UP=new X(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new X,_i=new X,cl=new X,gi=new X,Vr=new X,Wr=new X,Vu=new X,ul=new X,hl=new X,fl=new X;let Pa=!1;class ei{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Jn.subVectors(i,t),_i.subVectors(n,t),cl.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(_i),l=Jn.dot(cl),c=_i.dot(_i),u=_i.dot(cl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),_i.subVectors(e,t),Jn.cross(_i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Jn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Pa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pa=!0),ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Vr.subVectors(i,n),Wr.subVectors(s,n),ul.subVectors(e,n);const l=Vr.dot(ul),c=Wr.dot(ul);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,i);const u=Vr.dot(hl),h=Wr.dot(hl);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vr,o);fl.subVectors(e,s);const d=Vr.dot(fl),g=Wr.dot(fl);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Wr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Vu.subVectors(s,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Vu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Vr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},La={h:0,s:0,l:0};function dl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class pt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=um(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=dl(o,s,e+1/3),this.g=dl(o,s,e),this.b=dl(o,s,e-1/3)}return dt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return dt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(gn(Jt.r*255,0,255))*65536+Math.round(gn(Jt.g*255,0,255))*256+Math.round(gn(Jt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Xt){dt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(La);const n=Qo(Ii.h,La.h,t),i=Qo(Ii.s,La.s,t),s=Qo(Ii.l,La.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new pt;pt.NAMES=Sf;let Am=0;class No extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=ls,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bl,this.blendDst=zl,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bl&&(n.blendSrc=this.blendSrc),this.blendDst!==zl&&(n.blendDst=this.blendDst),this.blendEquation!==mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mf extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new X,Da=new ht;class ui{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=mn(t,this.array),n=mn(n,this.array),i=mn(i,this.array),s=mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pu&&(e.usage=this.usage),e}}class Ef extends ui{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yf extends ui{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Er extends ui{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wm=0;const Gn=new $t,pl=new On,Xr=new X,An=new xa,Is=new xa,Gt=new X;class Ir extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mf(e)?yf:Ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Er(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(An.min,Is.min),An.expandByPoint(Gt),Gt.addVectors(An.max,Is.max),An.expandByPoint(Gt)):(An.expandByPoint(Is.min),An.expandByPoint(Is.max))}An.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),Gt.add(Xr)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<a;E++)c[E]=new X,u[E]=new X;const h=new X,f=new X,d=new X,g=new ht,_=new ht,m=new ht,p=new X,M=new X;function x(E,F,U){h.fromArray(i,E*3),f.fromArray(i,F*3),d.fromArray(i,U*3),g.fromArray(o,E*2),_.fromArray(o,F*2),m.fromArray(o,U*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(Z),M.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(Z),c[E].add(p),c[F].add(p),c[U].add(p),u[E].add(M),u[F].add(M),u[U].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,F=S.length;E<F;++E){const U=S[E],Z=U.start,L=U.count;for(let N=Z,G=Z+L;N<G;N+=3)x(n[N+0],n[N+1],n[N+2])}const R=new X,A=new X,T=new X,D=new X;function v(E){T.fromArray(s,E*3),D.copy(T);const F=c[E];R.copy(F),R.sub(T.multiplyScalar(T.dot(F))).normalize(),A.crossVectors(D,F);const Z=A.dot(u[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=Z}for(let E=0,F=S.length;E<F;++E){const U=S[E],Z=U.start,L=U.count;for(let N=Z,G=Z+L;N<G;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ui(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new ui(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ir,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new $t,ar=new vm,Ua=new Mc,Xu=new X,qr=new X,Yr=new X,$r=new X,ml=new X,Ia=new X,Na=new ht,Oa=new ht,Fa=new ht,qu=new X,Yu=new X,$u=new X,Ba=new X,za=new X;class Ti extends On{constructor(e=new Ir,t=new Mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ml.fromBufferAttribute(h,e),o?Ia.addScaledVector(ml,u):Ia.addScaledVector(ml.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Ua.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Ua,Xu)===null||ar.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,R=x;S<R;S+=3){const A=a.getX(S),T=a.getX(S+1),D=a.getX(S+2);i=ka(this,p,e,n,c,u,h,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=ka(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=M,R=x;S<R;S+=3){const A=S,T=S+1,D=S+2;i=ka(this,p,e,n,c,u,h,A,T,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,S=m+2;i=ka(this,o,e,n,c,u,h,M,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Rm(r,e,t,n,i,s,o,a){let l;if(e.side===vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ki,a),l===null)return null;za.copy(a),za.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:r}}function ka(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,qr),r.getVertexPosition(l,Yr),r.getVertexPosition(c,$r);const u=Rm(r,e,t,n,qr,Yr,$r,Ba);if(u){i&&(Na.fromBufferAttribute(i,a),Oa.fromBufferAttribute(i,l),Fa.fromBufferAttribute(i,c),u.uv=ei.getInterpolation(Ba,qr,Yr,$r,Na,Oa,Fa,new ht)),s&&(Na.fromBufferAttribute(s,a),Oa.fromBufferAttribute(s,l),Fa.fromBufferAttribute(s,c),u.uv1=ei.getInterpolation(Ba,qr,Yr,$r,Na,Oa,Fa,new ht),u.uv2=u.uv1),o&&(qu.fromBufferAttribute(o,a),Yu.fromBufferAttribute(o,l),$u.fromBufferAttribute(o,c),u.normal=ei.getInterpolation(Ba,qr,Yr,$r,qu,Yu,$u,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new X,materialIndex:0};ei.getNormal(qr,Yr,$r,h.normal),u.face=h}return u}class Sa extends Ir{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Er(c,3)),this.setAttribute("normal",new Er(u,3)),this.setAttribute("uv",new Er(h,2));function g(_,m,p,M,x,S,R,A,T,D,v){const E=S/T,F=R/D,U=S/2,Z=R/2,L=A/2,N=T+1,G=D+1;let W=0,q=0;const $=new X;for(let C=0;C<G;C++){const j=C*F-Z;for(let ne=0;ne<N;ne++){const Y=ne*E-U;$[_]=Y*M,$[m]=j*x,$[p]=L,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(ne/T),h.push(1-C/D),W+=1}}for(let C=0;C<D;C++)for(let j=0;j<T;j++){const ne=f+j+N*C,Y=f+j+N*(C+1),K=f+(j+1)+N*(C+1),se=f+(j+1)+N*C;l.push(ne,Y,se),l.push(Y,K,se),q+=6}a.addGroup(d,q,v),d+=q,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function Cm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Tf(r){return r.getRenderTarget()===null?r.outputColorSpace:dt.workingColorSpace}const Pm={clone:xs,merge:ln};var Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bf extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ti extends bf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kr=-90,Zr=1;class Um extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ti(Kr,Zr,e,t);i.layers=this.layers,this.add(i);const s=new ti(Kr,Zr,e,t);s.layers=this.layers,this.add(s);const o=new ti(Kr,Zr,e,t);o.layers=this.layers,this.add(o);const a=new ti(Kr,Zr,e,t);a.layers=this.layers,this.add(a);const l=new ti(Kr,Zr,e,t);l.layers=this.layers,this.add(l);const c=new ti(Kr,Zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Af extends Nn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Im extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mr?Xt:qn),this.texture=new Af(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sa(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Vi});s.uniforms.tEquirect.value=t;const o=new Ti(i,s),a=t.minFilter;return t.minFilter===aa&&(t.minFilter=Vn),new Um(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const _l=new X,Nm=new X,Om=new tt;class ur{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_l.subVectors(n,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Om.getNormalMatrix(e),i=this.coplanarPoint(_l).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Mc,Ga=new X;class wf{constructor(e=new ur,t=new ur,n=new ur,i=new ur,s=new ur,o=new ur){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-s,f-c,m-d,S-p).normalize(),n[1].setComponents(l+s,f+c,m+d,S+p).normalize(),n[2].setComponents(l+o,f+u,m+g,S+M).normalize(),n[3].setComponents(l-o,f-u,m-g,S-M).normalize(),n[4].setComponents(l-a,f-h,m-_,S-x).normalize(),t===yi)n[5].setComponents(l+a,f+h,m+_,S+x).normalize();else if(t===xo)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ga.x=i.normal.x>0?e.max.x:e.min.x,Ga.y=i.normal.y>0?e.max.y:e.min.y,Ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=h.byteLength,g=r.createBuffer();r.bindBuffer(u,g),r.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,h){const f=u.array,d=u._updateRange,g=u.updateRanges;if(r.bindBuffer(h,c),d.count===-1&&g.length===0&&r.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):r.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,i(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Oo extends Ir{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let x=0;x<c;x++){const S=x*h-s;g.push(S,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const x=M+c*p,S=M+c*(p+1),R=M+1+c*(p+1),A=M+1+c*p;d.push(x,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new Er(g,3)),this.setAttribute("normal",new Er(_,3)),this.setAttribute("uv",new Er(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,__=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ag=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,m0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:km,alphamap_pars_fragment:Gm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:$m,beginnormal_vertex:Km,bsdfs:Zm,iridescence_fragment:jm,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:s_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:c_,displacementmap_pars_vertex:u_,displacementmap_vertex:h_,emissivemap_fragment:f_,emissivemap_pars_fragment:d_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:__,envmap_common_pars_fragment:g_,envmap_pars_fragment:v_,envmap_pars_vertex:x_,envmap_physical_pars_fragment:L_,envmap_vertex:S_,fog_vertex:M_,fog_pars_vertex:E_,fog_fragment:y_,fog_pars_fragment:T_,gradientmap_pars_fragment:b_,lightmap_fragment:A_,lightmap_pars_fragment:w_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:D_,lights_toon_pars_fragment:U_,lights_phong_fragment:I_,lights_phong_pars_fragment:N_,lights_physical_fragment:O_,lights_physical_pars_fragment:F_,lights_fragment_begin:B_,lights_fragment_maps:z_,lights_fragment_end:k_,logdepthbuf_fragment:G_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:W_,map_fragment:X_,map_pars_fragment:q_,map_particle_fragment:Y_,map_particle_pars_fragment:$_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Z_,morphcolor_vertex:j_,morphnormal_vertex:J_,morphtarget_pars_vertex:Q_,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:rg,normal_vertex:sg,normalmap_pars_fragment:ag,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:ug,opaque_fragment:hg,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:_g,roughnessmap_fragment:gg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:Sg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Eg,skinbase_vertex:yg,skinning_pars_vertex:Tg,skinning_vertex:bg,skinnormal_vertex:Ag,specularmap_fragment:wg,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ug,uv_pars_vertex:Ig,uv_vertex:Ng,worldpos_vertex:Og,background_vert:Fg,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:kg,cube_vert:Gg,cube_frag:Hg,depth_vert:Vg,depth_frag:Wg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:$g,linedashed_vert:Kg,linedashed_frag:Zg,meshbasic_vert:jg,meshbasic_frag:Jg,meshlambert_vert:Qg,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:r0,meshphong_vert:s0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:l0,meshtoon_vert:c0,meshtoon_frag:u0,points_vert:h0,points_frag:f0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:_0},he={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ai={basic:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new pt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([he.points,he.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([he.common,he.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([he.sprite,he.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:ln([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:ln([he.lights,he.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ai.physical={uniforms:ln([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ha={r:0,b:0,g:0};function g0(r,e,t,n,i,s,o){const a=new pt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(m,p){let M=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),M=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Do)?(u===void 0&&(u=new Ti(new Sa(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:xs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ti(new Oo(2,2),new Zi({name:"BackgroundMaterial",uniforms:xs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ha,Tf(r)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function v0(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(L,N,G,W,q){let $=!1;if(o){const C=_(W,G,N);c!==C&&(c=C,d(c.object)),$=p(L,W,G,q),$&&M(L,W,G,q)}else{const C=N.wireframe===!0;(c.geometry!==W.id||c.program!==G.id||c.wireframe!==C)&&(c.geometry=W.id,c.program=G.id,c.wireframe=C,$=!0)}q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,D(L,N,G,W),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,N,G){const W=G.wireframe===!0;let q=a[L.id];q===void 0&&(q={},a[L.id]=q);let $=q[N.id];$===void 0&&($={},q[N.id]=$);let C=$[W];return C===void 0&&(C=m(f()),$[W]=C),C}function m(L){const N=[],G=[],W=[];for(let q=0;q<i;q++)N[q]=0,G[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,N,G,W){const q=c.attributes,$=N.attributes;let C=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){const K=q[ne];let se=$[ne];if(se===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;C++}return c.attributesNum!==C||c.index!==W}function M(L,N,G,W){const q={},$=N.attributes;let C=0;const j=G.getAttributes();for(const ne in j)if(j[ne].location>=0){let K=$[ne];K===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),q[ne]=se,C++}c.attributes=q,c.attributesNum=C,c.index=W}function x(){const L=c.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function S(L){R(L,0)}function R(L,N){const G=c.newAttributes,W=c.enabledAttributes,q=c.attributeDivisors;G[L]=1,W[L]===0&&(r.enableVertexAttribArray(L),W[L]=1),q[L]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),q[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let G=0,W=N.length;G<W;G++)N[G]!==L[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function T(L,N,G,W,q,$,C){C===!0?r.vertexAttribIPointer(L,N,G,q,$):r.vertexAttribPointer(L,N,G,W,q,$)}function D(L,N,G,W){if(n.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const q=W.attributes,$=G.getAttributes(),C=N.defaultAttributeValues;for(const j in $){const ne=$[j];if(ne.location>=0){let Y=q[j];if(Y===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const K=Y.normalized,se=Y.itemSize,_e=t.get(Y);if(_e===void 0)continue;const de=_e.buffer,Ce=_e.type,Pe=_e.bytesPerElement,Ue=n.isWebGL2===!0&&(Ce===r.INT||Ce===r.UNSIGNED_INT||Y.gpuType===af);if(Y.isInterleavedBufferAttribute){const Ge=Y.data,z=Ge.stride,He=Y.offset;if(Ge.isInstancedInterleavedBuffer){for(let me=0;me<ne.locationSize;me++)R(ne.location+me,Ge.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let me=0;me<ne.locationSize;me++)S(ne.location+me);r.bindBuffer(r.ARRAY_BUFFER,de);for(let me=0;me<ne.locationSize;me++)T(ne.location+me,se/ne.locationSize,Ce,K,z*Pe,(He+se/ne.locationSize*me)*Pe,Ue)}else{if(Y.isInstancedBufferAttribute){for(let Ge=0;Ge<ne.locationSize;Ge++)R(ne.location+Ge,Y.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ge=0;Ge<ne.locationSize;Ge++)S(ne.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Ge=0;Ge<ne.locationSize;Ge++)T(ne.location+Ge,se/ne.locationSize,Ce,K,se*Pe,se/ne.locationSize*Ge*Pe,Ue)}}else if(C!==void 0){const K=C[j];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ne.location,K);break;case 3:r.vertexAttrib3fv(ne.location,K);break;case 4:r.vertexAttrib4fv(ne.location,K);break;default:r.vertexAttrib1fv(ne.location,K)}}}}A()}function v(){U();for(const L in a){const N=a[L];for(const G in N){const W=N[G];for(const q in W)g(W[q].object),delete W[q];delete N[G]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const G in N){const W=N[G];for(const q in W)g(W[q].object),delete W[q];delete N[G]}delete a[L.id]}function F(L){for(const N in a){const G=a[N];if(G[L.id]===void 0)continue;const W=G[L.id];for(const q in W)g(W[q].object),delete W[q];delete G[L.id]}}function U(){Z(),u=!0,c!==l&&(c=l,d(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:Z,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function x0(r,e,t,n){const i=n.isWebGL2;let s;function o(u){s=u}function a(u,h){r.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let d,g;if(i)d=r,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(s,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function S0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||e.has("OES_texture_float"),R=x&&S,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:A}}function M0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ur,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let S=p.clippingState||null;l.value=S,S=u(g,f,x,d);for(let R=0;R!==x;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=d;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function E0(r){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=_s:a===Gl&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Im(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cf extends bf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const is=4,Ku=[.125,.215,.35,.446,.526,.582],_r=20,gl=new Cf,Zu=new pt;let vl=null,xl=0,Sl=0;const hr=(1+Math.sqrt(5))/2,jr=1/hr,ju=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,hr,jr),new X(0,hr,-jr),new X(jr,0,hr),new X(-jr,0,hr),new X(hr,jr,0),new X(-hr,jr,0)];class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,Sl),e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:oa,format:ii,colorSpace:wi,depthBuffer:!1},i=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y0(s)),this._blurMaterial=T0(s,e,t)}return i}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,i){const a=new ti(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zu),u.toneMapping=Wi,u.autoClear=!1;const d=new Mf({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),g=new Ti(new Sa,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Zu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;Va(i,M*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_s||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ju[(i-1)%ju.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ti(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*_r-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const p=[];let M=0;for(let T=0;T<_r;++T){const D=T/_,v=Math.exp(-D*D/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[i],R=3*S*(i>x-is?i-x+is:0),A=4*(this._cubeSize-S);Va(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(h,gl)}}function y0(r){const e=[],t=[],n=[];let i=r;const s=r-is+1+Ku.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-is?l=Ku[o-r+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,D=A>2?0:-1,v=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];M.set(v,_*g*A),x.set(f,m*g*A);const E=[A,A,A,A,A,A];S.set(E,p*g*A)}const R=new Ir;R.setAttribute("position",new ui(M,_)),R.setAttribute("uv",new ui(x,m)),R.setAttribute("faceIndex",new ui(S,p)),e.push(R),i>is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(r,e,t){const n=new Pr(r,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function T0(r,e,t){const n=new Float32Array(_r),i=new X(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function eh(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function th(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Gl,u=l===_s||l===gs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Ju(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ju(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function A0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function w0(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,S=M.length;x<S;x+=3){const R=M[x+0],A=M[x+1],T=M[x+2];f.push(R,A,A,T,T,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const R=x+0,A=x+1,T=x+2;f.push(R,A,A,T,T,R)}}else return;const m=new(mf(f)?yf:Ef)(f,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function R0(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){r.drawElements(s,g,a,d*l),t.update(g,s,1)}function h(d,g,_){if(_===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,d*l,_),t.update(g,s,_)}function f(d,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let p=0;for(let M=0;M<_;M++)p+=g[M];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function C0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function P0(r,e){return r[0]-e[0]}function L0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function D0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let N=function(){Z.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var d=N;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),R===!0&&(v=3);let E=u.attributes.position.count*v,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*F*4*_),Z=new vf(U,E,F,_);Z.type=Fi,Z.needsUpdate=!0;const L=v*4;for(let G=0;G<_;G++){const W=A[G],q=T[G],$=D[G],C=E*F*4*G;for(let j=0;j<W.count;j++){const ne=j*L;x===!0&&(o.fromBufferAttribute(W,j),U[C+ne+0]=o.x,U[C+ne+1]=o.y,U[C+ne+2]=o.z,U[C+ne+3]=0),S===!0&&(o.fromBufferAttribute(q,j),U[C+ne+4]=o.x,U[C+ne+5]=o.y,U[C+ne+6]=o.z,U[C+ne+7]=0),R===!0&&(o.fromBufferAttribute($,j),U[C+ne+8]=o.x,U[C+ne+9]=o.y,U[C+ne+10]=o.z,U[C+ne+11]=$.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new ht(E,F)},s.set(u,m),u.addEventListener("dispose",N)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const M=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const R=_[S];R[0]=S,R[1]=f[S]}_.sort(L0);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(P0);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let M=0;for(let S=0;S<8;S++){const R=a[S],A=R[0],T=R[1];A!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[A]&&u.setAttribute("morphTarget"+S,m[A]),p&&u.getAttribute("morphNormal"+S)!==p[A]&&u.setAttribute("morphNormal"+S,p[A]),i[S]=T,M+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function U0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Pf extends Nn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Sr,u!==Sr&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Sr&&(n=Oi),n===void 0&&u===vs&&(n=xr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lf=new Nn,Df=new Pf(1,1);Df.compareFunction=pf;const Uf=new vf,If=new _m,Nf=new Af,nh=[],ih=[],rh=new Float32Array(16),sh=new Float32Array(9),ah=new Float32Array(4);function Rs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nh[i];if(s===void 0&&(s=new Float32Array(i),nh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fo(r,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function I0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function N0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),kt(t,e)}}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),kt(t,e)}}function F0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),kt(t,e)}}function B0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;ah.set(n),r.uniformMatrix2fv(this.addr,!1,ah),kt(t,n)}}function z0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;sh.set(n),r.uniformMatrix3fv(this.addr,!1,sh),kt(t,n)}}function k0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;rh.set(n),r.uniformMatrix4fv(this.addr,!1,rh),kt(t,n)}}function G0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function H0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),kt(t,e)}}function V0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),kt(t,e)}}function W0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),kt(t,e)}}function X0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),kt(t,e)}}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),kt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),kt(t,e)}}function K0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Df:Lf;t.setTexture2D(e||s,i)}function Z0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||If,i)}function j0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nf,i)}function J0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uf,i)}function Q0(r){switch(r){case 5126:return I0;case 35664:return N0;case 35665:return O0;case 35666:return F0;case 35674:return B0;case 35675:return z0;case 35676:return k0;case 5124:case 35670:return G0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return J0}}function ev(r,e){r.uniform1fv(this.addr,e)}function tv(r,e){const t=Rs(e,this.size,2);r.uniform2fv(this.addr,t)}function nv(r,e){const t=Rs(e,this.size,3);r.uniform3fv(this.addr,t)}function iv(r,e){const t=Rs(e,this.size,4);r.uniform4fv(this.addr,t)}function rv(r,e){const t=Rs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function sv(r,e){const t=Rs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function av(r,e){const t=Rs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ov(r,e){r.uniform1iv(this.addr,e)}function lv(r,e){r.uniform2iv(this.addr,e)}function cv(r,e){r.uniform3iv(this.addr,e)}function uv(r,e){r.uniform4iv(this.addr,e)}function hv(r,e){r.uniform1uiv(this.addr,e)}function fv(r,e){r.uniform2uiv(this.addr,e)}function dv(r,e){r.uniform3uiv(this.addr,e)}function pv(r,e){r.uniform4uiv(this.addr,e)}function mv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lf,s[o])}function _v(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||If,s[o])}function gv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Nf,s[o])}function vv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uf,s[o])}function xv(r){switch(r){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return sv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return uv;case 5125:return hv;case 36294:return fv;case 36295:return dv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return _v;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return vv}}class Sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Q0(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Ev{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function oh(r,e){r.seq.push(e),r.map[e.id]=e}function yv(r,e,t){const n=r.name,i=n.length;for(Ml.lastIndex=0;;){const s=Ml.exec(n),o=Ml.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){oh(t,c===void 0?new Sv(a,r,e):new Mv(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Ev(a),oh(t,h)),t=h}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);yv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Tv=37297;let bv=0;function Av(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wv(r){const e=dt.getPrimaries(dt.workingColorSpace),t=dt.getPrimaries(r);let n;switch(e===t?n="":e===vo&&t===go?n="LinearDisplayP3ToLinearSRGB":e===go&&t===vo&&(n="LinearSRGBToLinearDisplayP3"),r){case wi:case Uo:return[n,"LinearTransferOETF"];case Xt:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ch(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Av(r.getShaderSource(e),o)}else return i}function Rv(r,e){const t=wv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cv(r,e){let t;switch(e){case Bp:t="Linear";break;case zp:t="Reinhard";break;case kp:t="OptimizedCineon";break;case Gp:t="ACESFilmic";break;case Vp:t="AgX";break;case Hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function Lv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(rs).join(`
`)}function Dv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function rs(r){return r!==""}function uh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Iv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(r){return r.replace(Iv,Ov)}const Nv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ov(r,e){let t=Ke[e];if(t===void 0){const n=Nv.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const Fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(r){return r.replace(Fv,Bv)}function Bv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===fp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function kv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _s:case gs:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Hv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rf:e="ENVMAP_BLENDING_MULTIPLY";break;case Op:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function Vv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=zv(t),c=kv(t),u=Gv(t),h=Hv(t),f=Vv(t),d=t.isWebGL2?"":Pv(t),g=Lv(t),_=Dv(s),m=i.createProgram();let p,M,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),p.length>0&&(p+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rs).join(`
`),M.length>0&&(M+=`
`)):(p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),M=[d,dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Wi?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rs).join(`
`)),o=Yl(o),o=uh(o,t),o=hh(o,t),a=Yl(a),a=uh(a,t),a=hh(a,t),o=fh(o),a=fh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=x+p+o,R=x+M+a,A=lh(i,i.VERTEX_SHADER,S),T=lh(i,i.FRAGMENT_SHADER,R);i.attachShader(m,A),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function D(U){if(r.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(T).trim();let G=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,A,T);else{const q=ch(i,A,"vertex"),$=ch(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+q+`
`+$)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||N==="")&&(W=!1);W&&(U.diagnostics={runnable:G,programLog:Z,vertexShader:{log:L,prefix:p},fragmentShader:{log:N,prefix:M}})}i.deleteShader(A),i.deleteShader(T),v=new ro(i,m),E=Uv(i,m)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(m,Tv)),F},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=T,this}let Xv=0;class qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=Xv++,this.code=e,this.usedTimes=0}}function $v(r,e,t,n,i,s,o){const a=new xf,l=new qv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function m(v,E,F,U,Z){const L=U.fog,N=Z.geometry,G=v.isMeshStandardMaterial?U.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),q=W&&W.mapping===Do?W.image.height:null,$=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const C=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=C!==void 0?C.length:0;let ne=0;N.morphAttributes.position!==void 0&&(ne=1),N.morphAttributes.normal!==void 0&&(ne=2),N.morphAttributes.color!==void 0&&(ne=3);let Y,K,se,_e;if($){const xe=ai[$];Y=xe.vertexShader,K=xe.fragmentShader}else Y=v.vertexShader,K=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const de=r.getRenderTarget(),Ce=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Ue=!!v.map,Ge=!!v.matcap,z=!!W,He=!!v.aoMap,me=!!v.lightMap,Le=!!v.bumpMap,ge=!!v.normalMap,k=!!v.displacementMap,Fe=!!v.emissiveMap,w=!!v.metalnessMap,y=!!v.roughnessMap,O=v.anisotropy>0,ee=v.clearcoat>0,Q=v.iridescence>0,te=v.sheen>0,pe=v.transmission>0,ue=O&&!!v.anisotropyMap,ce=ee&&!!v.clearcoatMap,be=ee&&!!v.clearcoatNormalMap,ke=ee&&!!v.clearcoatRoughnessMap,J=Q&&!!v.iridescenceMap,st=Q&&!!v.iridescenceThicknessMap,we=te&&!!v.sheenColorMap,Ve=te&&!!v.sheenRoughnessMap,ye=!!v.specularMap,ve=!!v.specularColorMap,We=!!v.specularIntensityMap,Je=pe&&!!v.transmissionMap,ot=pe&&!!v.thicknessMap,fe=!!v.gradientMap,re=!!v.alphaMap,P=v.alphaTest>0,ae=!!v.alphaHash,oe=!!v.extensions,Ne=!!N.attributes.uv1,De=!!N.attributes.uv2,it=!!N.attributes.uv3;let at=Wi;return v.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(at=r.toneMapping),{isWebGL2:u,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:K,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Pe,instancing:Ce,instancingColor:Ce&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:wi,map:Ue,matcap:Ge,envMap:z,envMapMode:z&&W.mapping,envMapCubeUVHeight:q,aoMap:He,lightMap:me,bumpMap:Le,normalMap:ge,displacementMap:f&&k,emissiveMap:Fe,normalMapObjectSpace:ge&&v.normalMapType===nm,normalMapTangentSpace:ge&&v.normalMapType===tm,metalnessMap:w,roughnessMap:y,anisotropy:O,anisotropyMap:ue,clearcoat:ee,clearcoatMap:ce,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,iridescence:Q,iridescenceMap:J,iridescenceThicknessMap:st,sheen:te,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:ye,specularColorMap:ve,specularIntensityMap:We,transmission:pe,transmissionMap:Je,thicknessMap:ot,gradientMap:fe,opaque:v.transparent===!1&&v.blending===ls,alphaMap:re,alphaTest:P,alphaHash:ae,combine:v.combine,mapUv:Ue&&_(v.map.channel),aoMapUv:He&&_(v.aoMap.channel),lightMapUv:me&&_(v.lightMap.channel),bumpMapUv:Le&&_(v.bumpMap.channel),normalMapUv:ge&&_(v.normalMap.channel),displacementMapUv:k&&_(v.displacementMap.channel),emissiveMapUv:Fe&&_(v.emissiveMap.channel),metalnessMapUv:w&&_(v.metalnessMap.channel),roughnessMapUv:y&&_(v.roughnessMap.channel),anisotropyMapUv:ue&&_(v.anisotropyMap.channel),clearcoatMapUv:ce&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(v.sheenRoughnessMap.channel),specularMapUv:ye&&_(v.specularMap.channel),specularColorMapUv:ve&&_(v.specularColorMap.channel),specularIntensityMapUv:We&&_(v.specularIntensityMap.channel),transmissionMapUv:Je&&_(v.transmissionMap.channel),thicknessMapUv:ot&&_(v.thicknessMap.channel),alphaMapUv:re&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ge||O),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:De,vertexUv3s:it,pointsUvs:Z.isPoints===!0&&!!N.attributes.uv&&(Ue||re),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&dt.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mi,flipSided:v.side===vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:oe&&v.extensions.derivatives===!0,extensionFragDepth:oe&&v.extensions.fragDepth===!0,extensionDrawBuffers:oe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)E.push(F),E.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(M(E,v),x(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function M(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function x(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function S(v){const E=g[v.type];let F;if(E){const U=ai[E];F=Pm.clone(U.uniforms)}else F=v.uniforms;return F}function R(v,E){let F;for(let U=0,Z=c.length;U<Z;U++){const L=c[U];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new Wv(r,E,v,s),c.push(F)),F}function A(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:D}}function Kv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ph(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Zv),n.length>1&&n.sort(f||ph),i.length>1&&i.sort(f||ph)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function jv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new mh,r.set(n,[o])):i>=s.length?(o=new mh,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new pt};break;case"SpotLight":t={position:new X,direction:new X,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Qv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ex=0;function tx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nx(r,e){const t=new Jv,n=Qv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const s=new X,o=new $t,a=new $t;function l(u,h){let f=0,d=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let _=0,m=0,p=0,M=0,x=0,S=0,R=0,A=0,T=0,D=0,v=0;u.sort(tx);const E=h===!0?Math.PI:1;for(let U=0,Z=u.length;U<Z;U++){const L=u[U],N=L.color,G=L.intensity,W=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*G*E,d+=N.g*G*E,g+=N.b*G*E;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],G);v++}else if(L.isDirectionalLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const C=L.shadow,j=n.get(L);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,i.directionalShadow[_]=j,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=$,_++}else if(L.isSpotLight){const $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(N).multiplyScalar(G*E),$.distance=W,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[p]=$;const C=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,C.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[p]=C.matrix,L.castShadow){const j=n.get(L);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,i.spotShadow[p]=j,i.spotShadowMap[p]=q,A++}p++}else if(L.isRectAreaLight){const $=t.get(L);$.color.copy(N).multiplyScalar(G),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=$,M++}else if(L.isPointLight){const $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity*E),$.distance=L.distance,$.decay=L.decay,L.castShadow){const C=L.shadow,j=n.get(L);j.shadowBias=C.bias,j.shadowNormalBias=C.normalBias,j.shadowRadius=C.radius,j.shadowMapSize=C.mapSize,j.shadowCameraNear=C.camera.near,j.shadowCameraFar=C.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=$,m++}else if(L.isHemisphereLight){const $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(G*E),$.groundColor.copy(L.groundColor).multiplyScalar(G*E),i.hemi[x]=$,x++}}M>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const F=i.hash;(F.directionalLength!==_||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==M||F.hemiLength!==x||F.numDirectionalShadows!==S||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==T||F.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+T-D,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=v,F.directionalLength=_,F.pointLength=m,F.spotLength=p,F.rectAreaLength=M,F.hemiLength=x,F.numDirectionalShadows=S,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=T,F.numLightProbes=v,i.version=ex++)}function c(u,h){let f=0,d=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const S=u[M];if(S.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),f++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const R=i.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function _h(r,e){const t=new nx(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ix(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new _h(r,e),t.set(s,[l])):o>=a.length?(l=new _h(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class rx extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sx extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ax=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ox=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(r,e,t){let n=new wf;const i=new ht,s=new ht,o=new qt,a=new rx({depthPacking:em}),l=new sx,c={},u=t.maxTextureSize,h={[Ki]:vn,[vn]:Ki,[Mi]:Mi},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ax,fragmentShader:ox}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ir;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ti(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let p=this.type;this.render=function(A,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),E=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Vi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=p!==vi&&this.type===vi,L=p===vi&&this.type!==vi;for(let N=0,G=A.length;N<G;N++){const W=A[N],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const $=q.getFrameExtents();if(i.multiply($),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,q.mapSize.y=s.y)),q.map===null||Z===!0||L===!0){const j=this.type!==vi?{minFilter:fn,magFilter:fn}:{};q.map!==null&&q.map.dispose(),q.map=new Pr(i.x,i.y,j),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const C=q.getViewportCount();for(let j=0;j<C;j++){const ne=q.getViewport(j);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),U.viewport(o),q.updateMatrices(W,j),n=q.getFrustum(),S(T,D,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===vi&&M(q,D),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,E,F)};function M(A,T){const D=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pr(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,D,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,D,d,_,null)}function x(A,T,D,v){let E=null;const F=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)E=F;else if(E=D.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=E.uuid,Z=T.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let N=L[Z];N===void 0&&(N=E.clone(),L[Z]=N,T.addEventListener("dispose",R)),E=N}if(E.visible=T.visible,E.wireframe=T.wireframe,v===vi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:h[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=r.properties.get(E);U.light=D}return E}function S(A,T,D,v,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===vi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),L=A.material;if(Array.isArray(L)){const N=Z.groups;for(let G=0,W=N.length;G<W;G++){const q=N[G],$=L[q.materialIndex];if($&&$.visible){const C=x(A,$,v,E);A.onBeforeShadow(r,A,T,D,Z,C,q),r.renderBufferDirect(D,null,Z,C,A,q),A.onAfterShadow(r,A,T,D,Z,C,q)}}}else if(L.visible){const N=x(A,L,v,E);A.onBeforeShadow(r,A,T,D,Z,N,null),r.renderBufferDirect(D,null,Z,N,A,null),A.onAfterShadow(r,A,T,D,Z,N,null)}}const U=A.children;for(let Z=0,L=U.length;Z<L;Z++)S(U[Z],T,D,v,E)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const v=c[D],E=A.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function cx(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new qt;let oe=null;const Ne=new qt(0,0,0,0);return{setMask:function(De){oe!==De&&!P&&(r.colorMask(De,De,De,De),oe=De)},setLocked:function(De){P=De},setClear:function(De,it,at,Te,xe){xe===!0&&(De*=Te,it*=Te,at*=Te),ae.set(De,it,at,Te),Ne.equals(ae)===!1&&(r.clearColor(De,it,at,Te),Ne.copy(ae))},reset:function(){P=!1,oe=null,Ne.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,oe=null,Ne=null;return{setTest:function(De){De?Pe(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(De){ae!==De&&!P&&(r.depthMask(De),ae=De)},setFunc:function(De){if(oe!==De){switch(De){case Cp:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case Lp:r.depthFunc(r.LESS);break;case mo:r.depthFunc(r.LEQUAL);break;case Dp:r.depthFunc(r.EQUAL);break;case Up:r.depthFunc(r.GEQUAL);break;case Ip:r.depthFunc(r.GREATER);break;case Np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=De}},setLocked:function(De){P=De},setClear:function(De){Ne!==De&&(r.clearDepth(De),Ne=De)},reset:function(){P=!1,ae=null,oe=null,Ne=null}}}function o(){let P=!1,ae=null,oe=null,Ne=null,De=null,it=null,at=null,Te=null,xe=null;return{setTest:function(Re){P||(Re?Pe(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Re){ae!==Re&&!P&&(r.stencilMask(Re),ae=Re)},setFunc:function(Re,ie,Oe){(oe!==Re||Ne!==ie||De!==Oe)&&(r.stencilFunc(Re,ie,Oe),oe=Re,Ne=ie,De=Oe)},setOp:function(Re,ie,Oe){(it!==Re||at!==ie||Te!==Oe)&&(r.stencilOp(Re,ie,Oe),it=Re,at=ie,Te=Oe)},setLocked:function(Re){P=Re},setClear:function(Re){xe!==Re&&(r.clearStencil(Re),xe=Re)},reset:function(){P=!1,ae=null,oe=null,Ne=null,De=null,it=null,at=null,Te=null,xe=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,S=null,R=null,A=null,T=null,D=null,v=new pt(0,0,0),E=0,F=!1,U=null,Z=null,L=null,N=null,G=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,$=0;const C=r.getParameter(r.VERSION);C.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(C)[1]),q=$>=1):C.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),q=$>=2);let j=null,ne={};const Y=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),se=new qt().fromArray(Y),_e=new qt().fromArray(K);function de(P,ae,oe,Ne){const De=new Uint8Array(4),it=r.createTexture();r.bindTexture(P,it),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<oe;at++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(ae+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return it}const Ce={};Ce[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ce[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(mo),Fe(!1),w(jc),Pe(r.CULL_FACE),ge(Vi);function Pe(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function Ue(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Ge(P,ae){return d[P]!==ae?(r.bindFramebuffer(P,ae),d[P]=ae,n&&(P===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ae),P===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(P,ae){let oe=_,Ne=!1;if(P)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(oe.length!==De.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let it=0,at=De.length;it<at;it++)oe[it]=r.COLOR_ATTACHMENT0+it;oe.length=De.length,Ne=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,Ne=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,Ne=!0);Ne&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function He(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const me={[mr]:r.FUNC_ADD,[pp]:r.FUNC_SUBTRACT,[mp]:r.FUNC_REVERSE_SUBTRACT};if(n)me[tu]=r.MIN,me[nu]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(me[tu]=P.MIN_EXT,me[nu]=P.MAX_EXT)}const Le={[_p]:r.ZERO,[gp]:r.ONE,[vp]:r.SRC_COLOR,[Bl]:r.SRC_ALPHA,[Tp]:r.SRC_ALPHA_SATURATE,[Ep]:r.DST_COLOR,[Sp]:r.DST_ALPHA,[xp]:r.ONE_MINUS_SRC_COLOR,[zl]:r.ONE_MINUS_SRC_ALPHA,[yp]:r.ONE_MINUS_DST_COLOR,[Mp]:r.ONE_MINUS_DST_ALPHA,[bp]:r.CONSTANT_COLOR,[Ap]:r.ONE_MINUS_CONSTANT_COLOR,[wp]:r.CONSTANT_ALPHA,[Rp]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ae,oe,Ne,De,it,at,Te,xe,Re){if(P===Vi){p===!0&&(Ue(r.BLEND),p=!1);return}if(p===!1&&(Pe(r.BLEND),p=!0),P!==dp){if(P!==M||Re!==F){if((x!==mr||A!==mr)&&(r.blendEquation(r.FUNC_ADD),x=mr,A=mr),Re)switch(P){case ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jc:r.blendFunc(r.ONE,r.ONE);break;case Qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,T=null,D=null,v.set(0,0,0),E=0,M=P,F=Re}return}De=De||ae,it=it||oe,at=at||Ne,(ae!==x||De!==A)&&(r.blendEquationSeparate(me[ae],me[De]),x=ae,A=De),(oe!==S||Ne!==R||it!==T||at!==D)&&(r.blendFuncSeparate(Le[oe],Le[Ne],Le[it],Le[at]),S=oe,R=Ne,T=it,D=at),(Te.equals(v)===!1||xe!==E)&&(r.blendColor(Te.r,Te.g,Te.b,xe),v.copy(Te),E=xe),M=P,F=!1}function k(P,ae){P.side===Mi?Ue(r.CULL_FACE):Pe(r.CULL_FACE);let oe=P.side===vn;ae&&(oe=!oe),Fe(oe),P.blending===ls&&P.transparent===!1?ge(Vi):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ne=P.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){U!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),U=P)}function w(P){P!==up?(Pe(r.CULL_FACE),P!==Z&&(P===jc?r.cullFace(r.BACK):P===hp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),Z=P}function y(P){P!==L&&(q&&r.lineWidth(P),L=P)}function O(P,ae,oe){P?(Pe(r.POLYGON_OFFSET_FILL),(N!==ae||G!==oe)&&(r.polygonOffset(ae,oe),N=ae,G=oe)):Ue(r.POLYGON_OFFSET_FILL)}function ee(P){P?Pe(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function Q(P){P===void 0&&(P=r.TEXTURE0+W-1),j!==P&&(r.activeTexture(P),j=P)}function te(P,ae,oe){oe===void 0&&(j===null?oe=r.TEXTURE0+W-1:oe=j);let Ne=ne[oe];Ne===void 0&&(Ne={type:void 0,texture:void 0},ne[oe]=Ne),(Ne.type!==P||Ne.texture!==ae)&&(j!==oe&&(r.activeTexture(oe),j=oe),r.bindTexture(P,ae||Ce[P]),Ne.type=P,Ne.texture=ae)}function pe(){const P=ne[j];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(P){se.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function Je(P){_e.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function ot(P,ae){let oe=h.get(ae);oe===void 0&&(oe=new WeakMap,h.set(ae,oe));let Ne=oe.get(P);Ne===void 0&&(Ne=r.getUniformBlockIndex(ae,P.name),oe.set(P,Ne))}function fe(P,ae){const Ne=h.get(ae).get(P);u.get(ae)!==Ne&&(r.uniformBlockBinding(ae,Ne,P.__bindingPointIndex),u.set(ae,Ne))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},j=null,ne={},d={},g=new WeakMap,_=[],m=null,p=!1,M=null,x=null,S=null,R=null,A=null,T=null,D=null,v=new pt(0,0,0),E=0,F=!1,U=null,Z=null,L=null,N=null,G=null,se.set(0,0,r.canvas.width,r.canvas.height),_e.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:Ue,bindFramebuffer:Ge,drawBuffers:z,useProgram:He,setBlending:ge,setMaterial:k,setFlipSided:Fe,setCullFace:w,setLineWidth:y,setPolygonOffset:O,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:pe,compressedTexImage2D:ue,compressedTexImage3D:ce,texImage2D:ye,texImage3D:ve,updateUBOMapping:ot,uniformBlockBinding:fe,texStorage2D:we,texStorage3D:Ve,texSubImage2D:be,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:st,scissor:We,viewport:Je,reset:re}}function ux(r,e,t,n,i,s,o){const a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):So("canvas")}function _(w,y,O,ee){let Q=1;if((w.width>ee||w.height>ee)&&(Q=ee/Math.max(w.width,w.height)),Q<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=y?ql:Math.floor,pe=te(Q*w.width),ue=te(Q*w.height);h===void 0&&(h=g(pe,ue));const ce=O?g(pe,ue):h;return ce.width=pe,ce.height=ue,ce.getContext("2d").drawImage(w,0,0,pe,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+ue+")."),ce}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Du(w.width)&&Du(w.height)}function p(w){return a?!1:w.wrapS!==ni||w.wrapT!==ni||w.minFilter!==fn&&w.minFilter!==Vn}function M(w,y){return w.generateMipmaps&&y&&w.minFilter!==fn&&w.minFilter!==Vn}function x(w){r.generateMipmap(w)}function S(w,y,O,ee,Q=!1){if(a===!1)return y;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=y;if(y===r.RED&&(O===r.FLOAT&&(te=r.R32F),O===r.HALF_FLOAT&&(te=r.R16F),O===r.UNSIGNED_BYTE&&(te=r.R8)),y===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.R8UI),O===r.UNSIGNED_SHORT&&(te=r.R16UI),O===r.UNSIGNED_INT&&(te=r.R32UI),O===r.BYTE&&(te=r.R8I),O===r.SHORT&&(te=r.R16I),O===r.INT&&(te=r.R32I)),y===r.RG&&(O===r.FLOAT&&(te=r.RG32F),O===r.HALF_FLOAT&&(te=r.RG16F),O===r.UNSIGNED_BYTE&&(te=r.RG8)),y===r.RGBA){const pe=Q?_o:dt.getTransfer(ee);O===r.FLOAT&&(te=r.RGBA32F),O===r.HALF_FLOAT&&(te=r.RGBA16F),O===r.UNSIGNED_BYTE&&(te=pe===Mt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(w,y,O){return M(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==Vn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){return w===fn||w===iu||w===qo?r.NEAREST:r.LINEAR}function T(w){const y=w.target;y.removeEventListener("dispose",T),v(y),y.isVideoTexture&&u.delete(y)}function D(w){const y=w.target;y.removeEventListener("dispose",D),F(y)}function v(w){const y=n.get(w);if(y.__webglInit===void 0)return;const O=w.source,ee=f.get(O);if(ee){const Q=ee[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(w),Object.keys(ee).length===0&&f.delete(O)}n.remove(w)}function E(w){const y=n.get(w);r.deleteTexture(y.__webglTexture);const O=w.source,ee=f.get(O);delete ee[y.__cacheKey],o.memory.textures--}function F(w){const y=w.texture,O=n.get(w),ee=n.get(y);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(O.__webglFramebuffer[Q]))for(let te=0;te<O.__webglFramebuffer[Q].length;te++)r.deleteFramebuffer(O.__webglFramebuffer[Q][te]);else r.deleteFramebuffer(O.__webglFramebuffer[Q]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[Q])}else{if(Array.isArray(O.__webglFramebuffer))for(let Q=0;Q<O.__webglFramebuffer.length;Q++)r.deleteFramebuffer(O.__webglFramebuffer[Q]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=y.length;Q<te;Q++){const pe=n.get(y[Q]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(w)}let U=0;function Z(){U=0}function L(){const w=U;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),U+=1,w}function N(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function G(w,y){const O=n.get(w);if(w.isVideoTexture&&k(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,w,y);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+y)}function W(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){se(O,w,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+y)}function q(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){se(O,w,y);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+y)}function $(w,y){const O=n.get(w);if(w.version>0&&O.__version!==w.version){_e(O,w,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+y)}const C={[Hl]:r.REPEAT,[ni]:r.CLAMP_TO_EDGE,[Vl]:r.MIRRORED_REPEAT},j={[fn]:r.NEAREST,[iu]:r.NEAREST_MIPMAP_NEAREST,[qo]:r.NEAREST_MIPMAP_LINEAR,[Vn]:r.LINEAR,[Wp]:r.LINEAR_MIPMAP_NEAREST,[aa]:r.LINEAR_MIPMAP_LINEAR},ne={[im]:r.NEVER,[cm]:r.ALWAYS,[rm]:r.LESS,[pf]:r.LEQUAL,[sm]:r.EQUAL,[lm]:r.GEQUAL,[am]:r.GREATER,[om]:r.NOTEQUAL};function Y(w,y,O){if(O?(r.texParameteri(w,r.TEXTURE_WRAP_S,C[y.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,C[y.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,C[y.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,j[y.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,j[y.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==ni||y.wrapT!==ni)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(y.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(y.minFilter)),y.minFilter!==fn&&y.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ne[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===fn||y.minFilter!==qo&&y.minFilter!==aa||y.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===oa&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function K(w,y){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",T));const ee=y.source;let Q=f.get(ee);Q===void 0&&(Q={},f.set(ee,Q));const te=N(y);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[te].usedTimes++;const pe=Q[w.__cacheKey];pe!==void 0&&(Q[w.__cacheKey].usedTimes--,pe.usedTimes===0&&E(y)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return O}function se(w,y,O){let ee=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=r.TEXTURE_3D);const Q=K(w,y),te=y.source;t.bindTexture(ee,w.__webglTexture,r.TEXTURE0+O);const pe=n.get(te);if(te.version!==pe.__version||Q===!0){t.activeTexture(r.TEXTURE0+O);const ue=dt.getPrimaries(dt.workingColorSpace),ce=y.colorSpace===qn?null:dt.getPrimaries(y.colorSpace),be=y.colorSpace===qn||ue===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=p(y)&&m(y.image)===!1;let J=_(y.image,ke,!1,i.maxTextureSize);J=Fe(y,J);const st=m(J)||a,we=s.convert(y.format,y.colorSpace);let Ve=s.convert(y.type),ye=S(y.internalFormat,we,Ve,y.colorSpace,y.isVideoTexture);Y(ee,y,st);let ve;const We=y.mipmaps,Je=a&&y.isVideoTexture!==!0&&ye!==ff,ot=pe.__version===void 0||Q===!0,fe=R(y,J,st);if(y.isDepthTexture)ye=r.DEPTH_COMPONENT,a?y.type===Fi?ye=r.DEPTH_COMPONENT32F:y.type===Oi?ye=r.DEPTH_COMPONENT24:y.type===xr?ye=r.DEPTH24_STENCIL8:ye=r.DEPTH_COMPONENT16:y.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Sr&&ye===r.DEPTH_COMPONENT&&y.type!==xc&&y.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Oi,Ve=s.convert(y.type)),y.format===vs&&ye===r.DEPTH_COMPONENT&&(ye=r.DEPTH_STENCIL,y.type!==xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=xr,Ve=s.convert(y.type))),ot&&(Je?t.texStorage2D(r.TEXTURE_2D,1,ye,J.width,J.height):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,we,Ve,null));else if(y.isDataTexture)if(We.length>0&&st){Je&&ot&&t.texStorage2D(r.TEXTURE_2D,fe,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],Je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,Ve,ve.data):t.texImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,we,Ve,ve.data);y.generateMipmaps=!1}else Je?(ot&&t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,we,Ve,J.data)):t.texImage2D(r.TEXTURE_2D,0,ye,J.width,J.height,0,we,Ve,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Je&&ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ye,We[0].width,We[0].height,J.depth);for(let re=0,P=We.length;re<P;re++)ve=We[re],y.format!==ii?we!==null?Je?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,we,ve.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ye,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ve.width,ve.height,J.depth,we,Ve,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ye,ve.width,ve.height,J.depth,0,we,Ve,ve.data)}else{Je&&ot&&t.texStorage2D(r.TEXTURE_2D,fe,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],y.format!==ii?we!==null?Je?t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve.width,ve.height,we,Ve,ve.data):t.texImage2D(r.TEXTURE_2D,re,ye,ve.width,ve.height,0,we,Ve,ve.data)}else if(y.isDataArrayTexture)Je?(ot&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,we,Ve,J.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ye,J.width,J.height,J.depth,0,we,Ve,J.data);else if(y.isData3DTexture)Je?(ot&&t.texStorage3D(r.TEXTURE_3D,fe,ye,J.width,J.height,J.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,we,Ve,J.data)):t.texImage3D(r.TEXTURE_3D,0,ye,J.width,J.height,J.depth,0,we,Ve,J.data);else if(y.isFramebufferTexture){if(ot)if(Je)t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height);else{let re=J.width,P=J.height;for(let ae=0;ae<fe;ae++)t.texImage2D(r.TEXTURE_2D,ae,ye,re,P,0,we,Ve,null),re>>=1,P>>=1}}else if(We.length>0&&st){Je&&ot&&t.texStorage2D(r.TEXTURE_2D,fe,ye,We[0].width,We[0].height);for(let re=0,P=We.length;re<P;re++)ve=We[re],Je?t.texSubImage2D(r.TEXTURE_2D,re,0,0,we,Ve,ve):t.texImage2D(r.TEXTURE_2D,re,ye,we,Ve,ve);y.generateMipmaps=!1}else Je?(ot&&t.texStorage2D(r.TEXTURE_2D,fe,ye,J.width,J.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ve,J)):t.texImage2D(r.TEXTURE_2D,0,ye,we,Ve,J);M(y,st)&&x(ee),pe.__version=te.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _e(w,y,O){if(y.image.length!==6)return;const ee=K(w,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(r.TEXTURE0+O);const pe=dt.getPrimaries(dt.workingColorSpace),ue=y.colorSpace===qn?null:dt.getPrimaries(y.colorSpace),ce=y.colorSpace===qn||pe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,ke=y.image[0]&&y.image[0].isDataTexture,J=[];for(let re=0;re<6;re++)!be&&!ke?J[re]=_(y.image[re],!1,!0,i.maxCubemapSize):J[re]=ke?y.image[re].image:y.image[re],J[re]=Fe(y,J[re]);const st=J[0],we=m(st)||a,Ve=s.convert(y.format,y.colorSpace),ye=s.convert(y.type),ve=S(y.internalFormat,Ve,ye,y.colorSpace),We=a&&y.isVideoTexture!==!0,Je=te.__version===void 0||ee===!0;let ot=R(y,st,we);Y(r.TEXTURE_CUBE_MAP,y,we);let fe;if(be){We&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ve,st.width,st.height);for(let re=0;re<6;re++){fe=J[re].mipmaps;for(let P=0;P<fe.length;P++){const ae=fe[P];y.format!==ii?Ve!==null?We?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Ve,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,0,0,ae.width,ae.height,Ve,ye,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P,ve,ae.width,ae.height,0,Ve,ye,ae.data)}}}else{fe=y.mipmaps,We&&Je&&(fe.length>0&&ot++,t.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ve,J[0].width,J[0].height));for(let re=0;re<6;re++)if(ke){We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,J[re].width,J[re].height,Ve,ye,J[re].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,J[re].width,J[re].height,0,Ve,ye,J[re].data);for(let P=0;P<fe.length;P++){const oe=fe[P].image[re].image;We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,oe.width,oe.height,Ve,ye,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ve,oe.width,oe.height,0,Ve,ye,oe.data)}}else{We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ve,ye,J[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ve,Ve,ye,J[re]);for(let P=0;P<fe.length;P++){const ae=fe[P];We?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,0,0,Ve,ye,ae.image[re]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+re,P+1,ve,Ve,ye,ae.image[re])}}}M(y,we)&&x(r.TEXTURE_CUBE_MAP),te.__version=Q.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function de(w,y,O,ee,Q,te){const pe=s.convert(O.format,O.colorSpace),ue=s.convert(O.type),ce=S(O.internalFormat,pe,ue,O.colorSpace);if(!n.get(y).__hasExternalTextures){const ke=Math.max(1,y.width>>te),J=Math.max(1,y.height>>te);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ce,ke,J,y.depth,0,pe,ue,null):t.texImage2D(Q,te,ce,ke,J,0,pe,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),ge(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,0,Le(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,Q,n.get(O).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(w,y,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),y.depthBuffer&&!y.stencilBuffer){let ee=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||ge(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Fi?ee=r.DEPTH_COMPONENT32F:Q.type===Oi&&(ee=r.DEPTH_COMPONENT24));const te=Le(y);ge(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ee,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ee,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(y.depthBuffer&&y.stencilBuffer){const ee=Le(y);O&&ge(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ee=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],pe=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),ce=S(te.internalFormat,pe,ue,te.colorSpace),be=Le(y);O&&ge(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,be,ce,y.width,y.height):ge(y)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,be,ce,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ce,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const ee=n.get(y.depthTexture).__webglTexture,Q=Le(y);if(y.depthTexture.format===Sr)ge(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(y.depthTexture.format===vs)ge(y)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(w){const y=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,w)}else if(O){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ce(y.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Ce(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(w,y,O){const ee=n.get(w);y!==void 0&&de(ee.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Ue(w)}function z(w){const y=w.texture,O=n.get(w),ee=n.get(y);w.addEventListener("dispose",D),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=y.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,pe=m(w)||a;if(Q){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let ce=0;ce<y.mipmaps.length;ce++)O.__webglFramebuffer[ue][ce]=r.createFramebuffer()}else O.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<y.mipmaps.length;ue++)O.__webglFramebuffer[ue]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const ue=w.texture;for(let ce=0,be=ue.length;ce<be;ce++){const ke=n.get(ue[ce]);ke.__webglTexture===void 0&&(ke.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ge(w)===!1){const ue=te?y:[y];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<ue.length;ce++){const be=ue[ce];O.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const ke=s.convert(be.format,be.colorSpace),J=s.convert(be.type),st=S(be.internalFormat,ke,J,be.colorSpace,w.isXRRenderTarget===!0),we=Le(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,st,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Y(r.TEXTURE_CUBE_MAP,y,pe);for(let ue=0;ue<6;ue++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)de(O.__webglFramebuffer[ue][ce],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else de(O.__webglFramebuffer[ue],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(y,pe)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const ue=w.texture;for(let ce=0,be=ue.length;ce<be;ce++){const ke=ue[ce],J=n.get(ke);t.bindTexture(r.TEXTURE_2D,J.__webglTexture),Y(r.TEXTURE_2D,ke,pe),de(O.__webglFramebuffer,w,ke,r.COLOR_ATTACHMENT0+ce,r.TEXTURE_2D,0),M(ke,pe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ue=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ee.__webglTexture),Y(ue,y,pe),a&&y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)de(O.__webglFramebuffer[ce],w,y,r.COLOR_ATTACHMENT0,ue,ce);else de(O.__webglFramebuffer,w,y,r.COLOR_ATTACHMENT0,ue,0);M(y,pe)&&x(ue),t.unbindTexture()}w.depthBuffer&&Ue(w)}function He(w){const y=m(w)||a,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,Q=O.length;ee<Q;ee++){const te=O[ee];if(M(te,y)){const pe=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ue=n.get(te).__webglTexture;t.bindTexture(pe,ue),x(pe),t.unbindTexture()}}}function me(w){if(a&&w.samples>0&&ge(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,ee=w.height;let Q=r.COLOR_BUFFER_BIT;const te=[],pe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=n.get(w),ce=w.isWebGLMultipleRenderTargets===!0;if(ce)for(let be=0;be<y.length;be++)t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<y.length;be++){te.push(r.COLOR_ATTACHMENT0+be),w.depthBuffer&&te.push(pe);const ke=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ke===!1&&(w.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]),ke===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),ce){const J=n.get(y[be]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,O,ee,0,0,O,ee,Q,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<y.length;be++){t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const ke=n.get(y[be]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ue.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D,ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Le(w){return Math.min(i.maxSamples,w.samples)}function ge(w){const y=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Fe(w,y){const O=w.colorSpace,ee=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Wl||O!==wi&&O!==qn&&(dt.getTransfer(O)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ee===ii?(w.format=Wl,w.minFilter=Vn,w.generateMipmaps=!1):y=_f.sRGBToLinear(y):(ee!==ii||Q!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=Ge,this.setupRenderTarget=z,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function hx(r,e,t){const n=t.isWebGL2;function i(s,o=qn){let a;const l=dt.getTransfer(o);if(s===Xi)return r.UNSIGNED_BYTE;if(s===of)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xp)return r.BYTE;if(s===qp)return r.SHORT;if(s===xc)return r.UNSIGNED_SHORT;if(s===af)return r.INT;if(s===Oi)return r.UNSIGNED_INT;if(s===Fi)return r.FLOAT;if(s===oa)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yp)return r.ALPHA;if(s===ii)return r.RGBA;if(s===$p)return r.LUMINANCE;if(s===Kp)return r.LUMINANCE_ALPHA;if(s===Sr)return r.DEPTH_COMPONENT;if(s===vs)return r.DEPTH_STENCIL;if(s===Wl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Zp)return r.RED;if(s===cf)return r.RED_INTEGER;if(s===jp)return r.RG;if(s===uf)return r.RG_INTEGER;if(s===hf)return r.RGBA_INTEGER;if(s===Yo||s===$o||s===Ko||s===Zo)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ru||s===su||s===au||s===ou)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===ru)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===su)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===au)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ou)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ff)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lu||s===cu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lu)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uu||s===hu||s===fu||s===du||s===pu||s===mu||s===_u||s===gu||s===vu||s===xu||s===Su||s===Mu||s===Eu||s===yu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===uu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===fu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===du)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_u)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Su)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yu)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo||s===Tu||s===bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jo)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Tu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Jp||s===Au||s===wu||s===Ru)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ru)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xr?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class fx extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wa extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dx={type:"move"};class El{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class px extends ws{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const M=[],x=[],S=new ht;let R=null;const A=new ti;A.layers.enable(1),A.viewport=new qt;const T=new ti;T.layers.enable(2),T.viewport=new qt;const D=[A,T],v=new fx;v.layers.enable(1),v.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=M[Y];return K===void 0&&(K=new El,M[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=M[Y];return K===void 0&&(K=new El,M[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=M[Y];return K===void 0&&(K=new El,M[Y]=K),K.getHandSpace()};function U(Y){const K=x.indexOf(Y.inputSource);if(K===-1)return;const se=M[K];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Z(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",L);for(let Y=0;Y<M.length;Y++){const K=x[Y];K!==null&&(x[Y]=null,M[Y].disconnect(K))}E=null,F=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Pr(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,se=null,_e=null;_.depth&&(_e=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?vs:Sr,se=_.stencil?xr:Oi);const de={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(de),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Pr(f.textureWidth,f.textureHeight,{format:ii,type:Xi,depthTexture:new Pf(f.textureWidth,f.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(Y){for(let K=0;K<Y.removed.length;K++){const se=Y.removed[K],_e=x.indexOf(se);_e>=0&&(x[_e]=null,M[_e].disconnect(se))}for(let K=0;K<Y.added.length;K++){const se=Y.added[K];let _e=x.indexOf(se);if(_e===-1){for(let Ce=0;Ce<M.length;Ce++)if(Ce>=x.length){x.push(se),_e=Ce;break}else if(x[Ce]===null){x[Ce]=se,_e=Ce;break}if(_e===-1)break}const de=M[_e];de&&de.connect(se)}}const N=new X,G=new X;function W(Y,K,se){N.setFromMatrixPosition(K.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const _e=N.distanceTo(G),de=K.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Pe=de[14]/(de[10]-1),Ue=de[14]/(de[10]+1),Ge=(de[9]+1)/de[5],z=(de[9]-1)/de[5],He=(de[8]-1)/de[0],me=(Ce[8]+1)/Ce[0],Le=Pe*He,ge=Pe*me,k=_e/(-He+me),Fe=k*-He;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Fe),Y.translateZ(k),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const w=Pe+k,y=Ue+k,O=Le-Fe,ee=ge+(_e-Fe),Q=Ge*Ue/y*w,te=z*Ue/y*w;Y.projectionMatrix.makePerspective(O,ee,Q,te,w,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function q(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;v.near=T.near=A.near=Y.near,v.far=T.far=A.far=Y.far,(E!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,F=v.far);const K=Y.parent,se=v.cameras;q(v,K);for(let _e=0;_e<se.length;_e++)q(se[_e],K);se.length===2?W(v,A,T):v.projectionMatrix.copy(A.projectionMatrix),$(Y,v,K)};function $(Y,K,se){se===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)};let C=null;function j(Y,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let _e=!1;se.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let de=0;de<se.length;de++){const Ce=se[de];let Pe=null;if(d!==null)Pe=d.getViewport(Ce);else{const Ge=h.getViewSubImage(f,Ce);Pe=Ge.viewport,de===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,f.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let Ue=D[de];Ue===void 0&&(Ue=new ti,Ue.layers.enable(de),Ue.viewport=new qt,D[de]=Ue),Ue.matrix.fromArray(Ce.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ce.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),de===0&&(v.matrix.copy(Ue.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(Ue)}}for(let se=0;se<M.length;se++){const _e=x[se],de=M[se];_e!==null&&de!==void 0&&de.update(_e,K,c||o)}C&&C(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const ne=new Rf;ne.setAnimationLoop(j),this.setAnimationLoop=function(Y){C=Y},this.dispose=function(){}}}function mx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _x(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const S=x.program;n.uniformBlockBinding(M,S)}function c(M,x){let S=i[M.id];S===void 0&&(g(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(f(M),s[M.id]=A)}function u(M){const x=h();M.__bindingPointIndex=x;const S=r.createBuffer(),R=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],S=M.uniforms,R=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=S.length;A<T;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let v=0,E=D.length;v<E;v++){const F=D[v];if(d(F,A,v,R)===!0){const U=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let N=0;N<Z.length;N++){const G=Z[N],W=_(G);typeof G=="number"||typeof G=="boolean"?(F.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+L,F.__data)):G.isMatrix3?(F.__data[0]=G.elements[0],F.__data[1]=G.elements[1],F.__data[2]=G.elements[2],F.__data[3]=0,F.__data[4]=G.elements[3],F.__data[5]=G.elements[4],F.__data[6]=G.elements[5],F.__data[7]=0,F.__data[8]=G.elements[6],F.__data[9]=G.elements[7],F.__data[10]=G.elements[8],F.__data[11]=0):(G.toArray(F.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,x,S,R){const A=M.value,T=x+"_"+S;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const D=R[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(M){const x=M.uniforms;let S=0;const R=16;for(let T=0,D=x.length;T<D;T++){const v=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,F=v.length;E<F;E++){const U=v[E],Z=Array.isArray(U.value)?U.value:[U.value];for(let L=0,N=Z.length;L<N;L++){const G=Z[L],W=_(G),q=S%R;q!==0&&R-q<W.boundary&&(S+=R-q),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=W.storage}}}const A=S%R;return A>0&&(S+=R-A),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Of{constructor(e={}){const{canvas:t=hm(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=Wi,this.toneMappingExposure=1;const x=this;let S=!1,R=0,A=0,T=null,D=-1,v=null;const E=new qt,F=new qt;let U=null;const Z=new pt(0);let L=0,N=t.width,G=t.height,W=1,q=null,$=null;const C=new qt(0,0,N,G),j=new qt(0,0,N,G);let ne=!1;const Y=new wf;let K=!1,se=!1,_e=null;const de=new $t,Ce=new ht,Pe=new X,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return T===null?W:1}let z=n;function He(b,I){for(let V=0;V<b.length;V++){const H=b[V],B=t.getContext(H,I);if(B!==null)return B}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vc}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){const I=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&I.shift(),z=He(I,b),z===null)throw He(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let me,Le,ge,k,Fe,w,y,O,ee,Q,te,pe,ue,ce,be,ke,J,st,we,Ve,ye,ve,We,Je;function ot(){me=new A0(z),Le=new S0(z,me,e),me.init(Le),ve=new hx(z,me,Le),ge=new cx(z,me,Le),k=new C0(z),Fe=new Kv,w=new ux(z,me,ge,Fe,Le,ve,k),y=new E0(x),O=new b0(x),ee=new Fm(z,Le),We=new v0(z,me,ee,Le),Q=new w0(z,ee,k,We),te=new U0(z,Q,ee,k),we=new D0(z,Le,w),ke=new M0(Fe),pe=new $v(x,y,O,me,Le,We,ke),ue=new mx(x,Fe),ce=new jv,be=new ix(me,Le),st=new g0(x,y,O,ge,te,f,l),J=new lx(x,te,Le),Je=new _x(z,k,Le,ge),Ve=new x0(z,me,k,Le),ye=new R0(z,me,k,Le),k.programs=pe.programs,x.capabilities=Le,x.extensions=me,x.properties=Fe,x.renderLists=ce,x.shadowMap=J,x.state=ge,x.info=k}ot();const fe=new px(x,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(N,G,!1))},this.getSize=function(b){return b.set(N,G)},this.setSize=function(b,I,V=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,G=I,t.width=Math.floor(b*W),t.height=Math.floor(I*W),V===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(N*W,G*W).floor()},this.setDrawingBufferSize=function(b,I,V){N=b,G=I,W=V,t.width=Math.floor(b*V),t.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(C)},this.setViewport=function(b,I,V,H){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,I,V,H),ge.viewport(E.copy(C).multiplyScalar(W).floor())},this.getScissor=function(b){return b.copy(j)},this.setScissor=function(b,I,V,H){b.isVector4?j.set(b.x,b.y,b.z,b.w):j.set(b,I,V,H),ge.scissor(F.copy(j).multiplyScalar(W).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ge.setScissorTest(ne=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(b=!0,I=!0,V=!0){let H=0;if(b){let B=!1;if(T!==null){const le=T.texture.format;B=le===hf||le===uf||le===cf}if(B){const le=T.texture.type,Me=le===Xi||le===Oi||le===xc||le===xr||le===of||le===lf,Be=st.getClearColor(),Ee=st.getClearAlpha(),Ae=Be.r,ze=Be.g,$e=Be.b;Me?(d[0]=Ae,d[1]=ze,d[2]=$e,d[3]=Ee,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Ae,g[1]=ze,g[2]=$e,g[3]=Ee,z.clearBufferiv(z.COLOR,0,g))}else H|=z.COLOR_BUFFER_BIT}I&&(H|=z.DEPTH_BUFFER_BIT),V&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),be.dispose(),Fe.dispose(),y.dispose(),O.dispose(),te.dispose(),We.dispose(),Je.dispose(),pe.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xe),fe.removeEventListener("sessionend",Re),_e&&(_e.dispose(),_e=null),ie.stop()};function re(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=k.autoReset,I=J.enabled,V=J.autoUpdate,H=J.needsUpdate,B=J.type;ot(),k.autoReset=b,J.enabled=I,J.autoUpdate=V,J.needsUpdate=H,J.type=B}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const I=b.target;I.removeEventListener("dispose",oe),Ne(I)}function Ne(b){De(b),Fe.remove(b)}function De(b){const I=Fe.get(b).programs;I!==void 0&&(I.forEach(function(V){pe.releaseProgram(V)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,H,B,le){I===null&&(I=Ue);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Be=vt(b,I,V,H,B);ge.setMaterial(H,Me);let Ee=V.index,Ae=1;if(H.wireframe===!0){if(Ee=Q.getWireframeAttribute(V),Ee===void 0)return;Ae=2}const ze=V.drawRange,$e=V.attributes.position;let Et=ze.start*Ae,Ot=(ze.start+ze.count)*Ae;le!==null&&(Et=Math.max(Et,le.start*Ae),Ot=Math.min(Ot,(le.start+le.count)*Ae)),Ee!==null?(Et=Math.max(Et,0),Ot=Math.min(Ot,Ee.count)):$e!=null&&(Et=Math.max(Et,0),Ot=Math.min(Ot,$e.count));const ut=Ot-Et;if(ut<0||ut===1/0)return;We.setup(B,H,Be,V,Ee);let sn,ft=Ve;if(Ee!==null&&(sn=ee.get(Ee),ft=ye,ft.setIndex(sn)),B.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Ge()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(B.isLine){let Xe=H.linewidth;Xe===void 0&&(Xe=1),ge.setLineWidth(Xe*Ge()),B.isLineSegments?ft.setMode(z.LINES):B.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else B.isPoints?ft.setMode(z.POINTS):B.isSprite&&ft.setMode(z.TRIANGLES);if(B.isBatchedMesh)ft.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ft.renderInstances(Et,ut,B.count);else if(V.isInstancedBufferGeometry){const Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ho=Math.min(V.instanceCount,Xe);ft.renderInstances(Et,ut,Ho)}else ft.render(Et,ut)};function it(b,I,V){b.transparent===!0&&b.side===Mi&&b.forceSinglePass===!1?(b.side=vn,b.needsUpdate=!0,gt(b,I,V),b.side=Ki,b.needsUpdate=!0,gt(b,I,V),b.side=Mi):gt(b,I,V)}this.compile=function(b,I,V=null){V===null&&(V=b),m=be.get(V),m.init(),M.push(m),V.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==V&&b.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(x._useLegacyLights);const H=new Set;return b.traverse(function(B){const le=B.material;if(le)if(Array.isArray(le))for(let Me=0;Me<le.length;Me++){const Be=le[Me];it(Be,V,B),H.add(Be)}else it(le,V,B),H.add(le)}),M.pop(),m=null,H},this.compileAsync=function(b,I,V=null){const H=this.compile(b,I,V);return new Promise(B=>{function le(){if(H.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){B(b);return}setTimeout(le,10)}me.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let at=null;function Te(b){at&&at(b)}function xe(){ie.stop()}function Re(){ie.start()}const ie=new Rf;ie.setAnimationLoop(Te),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(b){at=b,fe.setAnimationLoop(b),b===null?ie.stop():ie.start()},fe.addEventListener("sessionstart",xe),fe.addEventListener("sessionend",Re),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(I),I=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,T),m=be.get(b,M.length),m.init(),M.push(m),de.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(de),se=this.localClippingEnabled,K=ke.init(this.clippingPlanes,se),_=ce.get(b,p.length),_.init(),p.push(_),Oe(b,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(q,$),this.info.render.frame++,K===!0&&ke.beginShadows();const V=m.state.shadowsArray;if(J.render(V,b,I),K===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(_,b),m.setupLights(x._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let B=0,le=H.length;B<le;B++){const Me=H[B];Ie(_,b,Me,Me.viewport)}}else Ie(_,b,I);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,I),We.resetDefaultState(),D=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Oe(b,I,V,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){H&&Pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Me=te.update(b),Be=b.material;Be.visible&&_.push(b,Me,Be,V,Pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Me=te.update(b),Be=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Be)){const Ee=Me.groups;for(let Ae=0,ze=Ee.length;Ae<ze;Ae++){const $e=Ee[Ae],Et=Be[$e.materialIndex];Et&&Et.visible&&_.push(b,Me,Et,V,Pe.z,$e)}}else Be.visible&&_.push(b,Me,Be,V,Pe.z,null)}}const le=b.children;for(let Me=0,Be=le.length;Me<Be;Me++)Oe(le[Me],I,V,H)}function Ie(b,I,V,H){const B=b.opaque,le=b.transmissive,Me=b.transparent;m.setupLightsView(V),K===!0&&ke.setGlobalState(x.clippingPlanes,V),le.length>0&&Ye(B,le,I,V),H&&ge.viewport(E.copy(H)),B.length>0&&Tt(B,I,V),le.length>0&&Tt(le,I,V),Me.length>0&&Tt(Me,I,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ye(b,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const le=Le.isWebGL2;_e===null&&(_e=new Pr(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?oa:Xi,minFilter:aa,samples:le?4:0})),x.getDrawingBufferSize(Ce),le?_e.setSize(Ce.x,Ce.y):_e.setSize(ql(Ce.x),ql(Ce.y));const Me=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Be=x.toneMapping;x.toneMapping=Wi,Tt(b,V,H),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let Ee=!1;for(let Ae=0,ze=I.length;Ae<ze;Ae++){const $e=I[Ae],Et=$e.object,Ot=$e.geometry,ut=$e.material,sn=$e.group;if(ut.side===Mi&&Et.layers.test(H.layers)){const ft=ut.side;ut.side=vn,ut.needsUpdate=!0,Qe(Et,V,H,Ot,ut,sn),ut.side=ft,ut.needsUpdate=!0,Ee=!0}}Ee===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),x.setRenderTarget(Me),x.setClearColor(Z,L),x.toneMapping=Be}function Tt(b,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let B=0,le=b.length;B<le;B++){const Me=b[B],Be=Me.object,Ee=Me.geometry,Ae=H===null?Me.material:H,ze=Me.group;Be.layers.test(V.layers)&&Qe(Be,I,V,Ee,Ae,ze)}}function Qe(b,I,V,H,B,le){b.onBeforeRender(x,I,V,H,B,le),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,I,V,H,b,le),B.transparent===!0&&B.side===Mi&&B.forceSinglePass===!1?(B.side=vn,B.needsUpdate=!0,x.renderBufferDirect(V,I,H,B,b,le),B.side=Ki,B.needsUpdate=!0,x.renderBufferDirect(V,I,H,B,b,le),B.side=Mi):x.renderBufferDirect(V,I,H,B,b,le),b.onAfterRender(x,I,V,H,B,le)}function gt(b,I,V){I.isScene!==!0&&(I=Ue);const H=Fe.get(b),B=m.state.lights,le=m.state.shadowsArray,Me=B.state.version,Be=pe.getParameters(b,B.state,le,I,V),Ee=pe.getProgramCacheKey(Be);let Ae=H.programs;H.environment=b.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||H.environment),Ae===void 0&&(b.addEventListener("dispose",oe),Ae=new Map,H.programs=Ae);let ze=Ae.get(Ee);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===Me)return St(b,Be),ze}else Be.uniforms=pe.getUniforms(b),b.onBuild(V,Be,x),b.onBeforeCompile(Be,x),ze=pe.acquireProgram(Be,Ee),Ae.set(Ee,ze),H.uniforms=Be.uniforms;const $e=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=ke.uniform),St(b,Be),H.needsLights=Tn(b),H.lightsStateVersion=Me,H.needsLights&&($e.ambientLightColor.value=B.state.ambient,$e.lightProbe.value=B.state.probe,$e.directionalLights.value=B.state.directional,$e.directionalLightShadows.value=B.state.directionalShadow,$e.spotLights.value=B.state.spot,$e.spotLightShadows.value=B.state.spotShadow,$e.rectAreaLights.value=B.state.rectArea,$e.ltc_1.value=B.state.rectAreaLTC1,$e.ltc_2.value=B.state.rectAreaLTC2,$e.pointLights.value=B.state.point,$e.pointLightShadows.value=B.state.pointShadow,$e.hemisphereLights.value=B.state.hemi,$e.directionalShadowMap.value=B.state.directionalShadowMap,$e.directionalShadowMatrix.value=B.state.directionalShadowMatrix,$e.spotShadowMap.value=B.state.spotShadowMap,$e.spotLightMatrix.value=B.state.spotLightMatrix,$e.spotLightMap.value=B.state.spotLightMap,$e.pointShadowMap.value=B.state.pointShadowMap,$e.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function Nt(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function St(b,I){const V=Fe.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function vt(b,I,V,H,B){I.isScene!==!0&&(I=Ue),w.resetTextureUnits();const le=I.fog,Me=H.isMeshStandardMaterial?I.environment:null,Be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wi,Ee=(H.isMeshStandardMaterial?O:y).get(H.envMap||Me),Ae=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),$e=!!V.morphAttributes.position,Et=!!V.morphAttributes.normal,Ot=!!V.morphAttributes.color;let ut=Wi;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=x.toneMapping);const sn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=sn!==void 0?sn.length:0,Xe=Fe.get(H),Ho=m.state.lights;if(K===!0&&(se===!0||b!==v)){const kn=b===v&&H.id===D;ke.setState(H,b,kn)}let Rt=!1;H.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ho.state.version||Xe.outputColorSpace!==Be||B.isBatchedMesh&&Xe.batching===!1||!B.isBatchedMesh&&Xe.batching===!0||B.isInstancedMesh&&Xe.instancing===!1||!B.isInstancedMesh&&Xe.instancing===!0||B.isSkinnedMesh&&Xe.skinning===!1||!B.isSkinnedMesh&&Xe.skinning===!0||B.isInstancedMesh&&Xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xe.instancingColor===!1&&B.instanceColor!==null||Xe.envMap!==Ee||H.fog===!0&&Xe.fog!==le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ke.numPlanes||Xe.numIntersection!==ke.numIntersection)||Xe.vertexAlphas!==Ae||Xe.vertexTangents!==ze||Xe.morphTargets!==$e||Xe.morphNormals!==Et||Xe.morphColors!==Ot||Xe.toneMapping!==ut||Le.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(Rt=!0):(Rt=!0,Xe.__version=H.version);let nr=Xe.currentProgram;Rt===!0&&(nr=gt(H,I,B));let Kc=!1,Cs=!1,Vo=!1;const Zt=nr.getUniforms(),ir=Xe.uniforms;if(ge.useProgram(nr.program)&&(Kc=!0,Cs=!0,Vo=!0),H.id!==D&&(D=H.id,Cs=!0),Kc||v!==b){Zt.setValue(z,"projectionMatrix",b.projectionMatrix),Zt.setValue(z,"viewMatrix",b.matrixWorldInverse);const kn=Zt.map.cameraPosition;kn!==void 0&&kn.setValue(z,Pe.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Cs=!0,Vo=!0)}if(B.isSkinnedMesh){Zt.setOptional(z,B,"bindMatrix"),Zt.setOptional(z,B,"bindMatrixInverse");const kn=B.skeleton;kn&&(Le.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),Zt.setValue(z,"boneTexture",kn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Zt.setOptional(z,B,"batchingTexture"),Zt.setValue(z,"batchingTexture",B._matricesTexture,w));const Wo=V.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&Le.isWebGL2===!0)&&we.update(B,V,nr),(Cs||Xe.receiveShadow!==B.receiveShadow)&&(Xe.receiveShadow=B.receiveShadow,Zt.setValue(z,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ir.envMap.value=Ee,ir.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Cs&&(Zt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&ct(ir,Vo),le&&H.fog===!0&&ue.refreshFogUniforms(ir,le),ue.refreshMaterialUniforms(ir,H,W,G,_e),ro.upload(z,Nt(Xe),ir,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ro.upload(z,Nt(Xe),ir,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Zt.setValue(z,"center",B.center),Zt.setValue(z,"modelViewMatrix",B.modelViewMatrix),Zt.setValue(z,"normalMatrix",B.normalMatrix),Zt.setValue(z,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const kn=H.uniformsGroups;for(let Xo=0,op=kn.length;Xo<op;Xo++)if(Le.isWebGL2){const Zc=kn[Xo];Je.update(Zc,nr),Je.bind(Zc,nr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nr}function ct(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,V){Fe.get(b.texture).__webglTexture=I,Fe.get(b.depthTexture).__webglTexture=V;const H=Fe.get(b);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){const V=Fe.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,V=0){T=b,R=I,A=V;let H=!0,B=null,le=!1,Me=!1;if(b){const Ee=Fe.get(b);Ee.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Ee.__webglFramebuffer===void 0?w.setupRenderTarget(b):Ee.__hasExternalTextures&&w.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const ze=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[I])?B=ze[I][V]:B=ze[I],le=!0):Le.isWebGL2&&b.samples>0&&w.useMultisampledRTT(b)===!1?B=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[V]:B=ze,E.copy(b.viewport),F.copy(b.scissor),U=b.scissorTest}else E.copy(C).multiplyScalar(W).floor(),F.copy(j).multiplyScalar(W).floor(),U=ne;if(ge.bindFramebuffer(z.FRAMEBUFFER,B)&&Le.drawBuffers&&H&&ge.drawBuffers(b,B),ge.viewport(E),ge.scissor(F),ge.setScissorTest(U),le){const Ee=Fe.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,V)}else if(Me){const Ee=Fe.get(b.texture),Ae=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ae)}D=-1},this.readRenderTargetPixels=function(b,I,V,H,B,le,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Be=Be[Me]),Be){ge.bindFramebuffer(z.FRAMEBUFFER,Be);try{const Ee=b.texture,Ae=Ee.format,ze=Ee.type;if(Ae!==ii&&ve.convert(Ae)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=ze===oa&&(me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&me.has("EXT_color_buffer_float"));if(ze!==Xi&&ve.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Fi&&(Le.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&V>=0&&V<=b.height-B&&z.readPixels(I,V,H,B,ve.convert(Ae),ve.convert(ze),le)}finally{const Ee=T!==null?Fe.get(T).__webglFramebuffer:null;ge.bindFramebuffer(z.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(b,I,V=0){const H=Math.pow(2,-V),B=Math.floor(I.image.width*H),le=Math.floor(I.image.height*H);w.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,b.x,b.y,B,le),ge.unbindTexture()},this.copyTextureToTexture=function(b,I,V,H=0){const B=I.image.width,le=I.image.height,Me=ve.convert(V.format),Be=ve.convert(V.type);w.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,b.x,b.y,B,le,Me,Be,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Me,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,b.x,b.y,Me,Be,I.image),H===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,I,V,H,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=b.max.x-b.min.x+1,Me=b.max.y-b.min.y+1,Be=b.max.z-b.min.z+1,Ee=ve.convert(H.format),Ae=ve.convert(H.type);let ze;if(H.isData3DTexture)w.setTexture3D(H,0),ze=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const $e=z.getParameter(z.UNPACK_ROW_LENGTH),Et=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ot=z.getParameter(z.UNPACK_SKIP_PIXELS),ut=z.getParameter(z.UNPACK_SKIP_ROWS),sn=z.getParameter(z.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[B]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(ze,B,I.x,I.y,I.z,le,Me,Be,Ee,Ae,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,B,I.x,I.y,I.z,le,Me,Be,Ee,ft.data)):z.texSubImage3D(ze,B,I.x,I.y,I.z,le,Me,Be,Ee,Ae,ft),z.pixelStorei(z.UNPACK_ROW_LENGTH,$e),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,ut),z.pixelStorei(z.UNPACK_SKIP_IMAGES,sn),B===0&&H.generateMipmaps&&z.generateMipmap(ze),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,ge.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=dt.workingColorSpace===Uo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Mr:df}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mr?Xt:wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gx extends Of{}gx.prototype.isWebGL1Renderer=!0;class vx extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vc);var Sx=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Mx=`precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform float uProgress;      
uniform vec2 uResolution;
uniform vec3 uBlobPositions[12];  
uniform float uBlobCount;
uniform float uPulseAmount;   
uniform float uChaosAmount;   
uniform float uPatternAmount; 

const vec3 COLOR_BG = vec3(0.0);
const vec3 COLOR_GREEN_DEEP = vec3(0.02, 0.12, 0.06);
const vec3 COLOR_GREEN = vec3(0.04, 0.18, 0.1);
const vec3 COLOR_ACCENT = vec3(0.486, 0.227, 0.929); 

float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;

  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }

  return value;
}

float metaballField(vec2 uv) {
  float field = 0.0;

  for (int i = 0; i < 12; i++) {
    if (float(i) >= uBlobCount) break;

    vec2 blobPos = uBlobPositions[i].xy;
    float radius = uBlobPositions[i].z;

    
    float pulse = 1.0 + uPulseAmount * 0.15 * sin(uTime * 2.0 + float(i) * 0.5);
    radius *= pulse;

    
    if (uChaosAmount > 0.0) {
      float wobble = uChaosAmount * 0.03;
      blobPos.x += wobble * sin(uTime * 3.0 + float(i) * 1.7);
      blobPos.y += wobble * cos(uTime * 2.5 + float(i) * 2.3);
    }

    float dist = length(uv - blobPos);
    field += (radius * radius) / (dist * dist + 0.001);
  }

  return field;
}

void main() {
  
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;
  uv.x *= aspect;
  uv = uv * 2.0 - vec2(aspect, 1.0); 

  
  float field = metaballField(uv);

  
  float threshold = 1.0;
  float edge = smoothstep(threshold - 0.3, threshold + 0.1, field);

  
  float innerGlow = smoothstep(threshold + 0.5, threshold + 2.0, field);

  
  float patternMask = 0.0;
  if (uPatternAmount > 0.0) {
    float angle = atan(uv.y, uv.x);
    float dist = length(uv);
    float spiral = sin(angle * 3.0 + dist * 8.0 - uTime * 0.5);
    patternMask = uPatternAmount * 0.3 * smoothstep(0.3, 0.8, spiral) * edge;
  }

  
  float noiseVal = fbm(uv * 3.0 + uTime * 0.1);
  float organicNoise = noiseVal * 0.15 * edge;

  
  vec3 color = COLOR_BG;

  
  color = mix(color, COLOR_GREEN_DEEP, edge * 0.8);

  
  color = mix(color, COLOR_GREEN, innerGlow * 0.6);

  
  float edgeHighlight = smoothstep(threshold - 0.1, threshold + 0.05, field) -
                        smoothstep(threshold + 0.05, threshold + 0.3, field);
  color = mix(color, COLOR_ACCENT * 0.4, edgeHighlight * 0.5 * (0.3 + uProgress * 0.7));

  
  color += COLOR_ACCENT * patternMask * 0.3;

  
  color += organicNoise * vec3(0.1, 0.15, 0.08);

  
  float vignette = 1.0 - smoothstep(0.5, 1.5, length(vUv - 0.5) * 1.5);
  color *= 0.7 + vignette * 0.3;

  
  float bgNoise = fbm(vUv * 50.0 + uTime * 0.05) * 0.02;
  color += bgNoise;

  
  color.g *= 1.05;

  gl_FragColor = vec4(color, 1.0);
}`;const Ns=30;class Ex{constructor(e){qe(this,"canvas");qe(this,"renderer");qe(this,"scene");qe(this,"camera");qe(this,"material");qe(this,"blobs",[]);qe(this,"clock");qe(this,"state",{progress:0,pulseAmount:0,chaosAmount:0,patternAmount:0});qe(this,"mouse",{x:0,y:0,isOverBlobs:!1});qe(this,"isExploding",!1);qe(this,"explodeTime",0);this.canvas=e,this.clock=new xx,this.renderer=new Of({canvas:e,antialias:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.scene=new vx,this.camera=new Cf(-1,1,1,-1,0,1),this.material=new Zi({vertexShader:Sx,fragmentShader:Mx,uniforms:{uTime:{value:0},uProgress:{value:0},uResolution:{value:new ht(window.innerWidth,window.innerHeight)},uBlobPositions:{value:new Array(Ns).fill(null).map(()=>new X(0,0,0))},uBlobCount:{value:0},uPulseAmount:{value:0},uChaosAmount:{value:0},uPatternAmount:{value:0}}});const t=new Oo(2,2),n=new Ti(t,this.material);this.scene.add(n),this.initBlobs(),window.addEventListener("resize",this.onResize.bind(this)),this.canvas.addEventListener("click",this.onClick.bind(this)),this.canvas.addEventListener("mousemove",this.onMouseMove.bind(this))}initBlobs(){for(let t=0;t<6;t++){const n=t/6*Math.PI*2,i=.1+Math.random()*.15;this.blobs.push({x:Math.cos(n)*i,y:Math.sin(n)*i,vx:0,vy:0,radius:.08+Math.random()*.06,baseRadius:.08+Math.random()*.06,targetX:0,targetY:0})}this.updateBlobUniforms()}updateBlobUniforms(){const e=this.material.uniforms.uBlobPositions.value;for(let t=0;t<Ns;t++)if(t<this.blobs.length){const n=this.blobs[t];e[t].set(n.x,n.y,n.radius)}else e[t].set(0,0,0);this.material.uniforms.uBlobCount.value=this.blobs.length}setState(e){Object.assign(this.state,e)}updatePhysics(e){const{progress:t,chaosAmount:n,patternAmount:i}=this.state,s=Math.min(e,.05),o=this.clock.getElapsedTime();if(!this.isExploding&&this.explodeTime>0){const u=o-this.explodeTime;if(u>.8){const h=Math.min((u-.8)*2,3);for(const f of this.blobs)f.vx-=f.x*h*s,f.vy-=f.y*h*s}}if(this.mouse.isOverBlobs)for(const u of this.blobs){const h=u.x-this.mouse.x,f=u.y-this.mouse.y,d=Math.sqrt(h*h+f*f);if(d<.5&&d>.01){const g=.3/d;u.vx+=h/d*g*s,u.vy+=f/d*g*s}}const a=t*t,l=.3+a*2,c=Math.floor(6+t*10);for(;this.blobs.length<c&&this.blobs.length<Ns;){const u=Math.random()*Math.PI*2,h=1.2;this.blobs.push({x:Math.cos(u)*h,y:Math.sin(u)*h,vx:-Math.cos(u)*l,vy:-Math.sin(u)*l,radius:.06+Math.random()*.08,baseRadius:.06+Math.random()*.08,targetX:0,targetY:0})}for(let u=0;u<this.blobs.length;u++){const h=this.blobs[u];if(i>.3){const x=u/this.blobs.length*Math.PI*2+o*.1,S=.3+u/this.blobs.length*.4;h.targetX=Math.cos(x)*S,h.targetY=Math.sin(x)*S;const R=h.targetX-h.x,A=h.targetY-h.y;h.vx+=R*i*.5*s,h.vy+=A*i*.5*s}const f=n+a*1.5;if(f>0&&(h.vx+=(Math.random()-.5)*f*3*s,h.vy+=(Math.random()-.5)*f*3*s,Math.random()<a*.05)){const x=Math.random()*Math.PI*2,S=a*.5;h.vx+=Math.cos(x)*S,h.vy+=Math.sin(x)*S}const d=Math.sin(o*.7+u*1.3)*Math.cos(o*.4+u*.7),g=Math.cos(o*.5+u*1.7)*Math.sin(o*.6+u*1.1);h.vx+=d*a*.8*s,h.vy+=g*a*.8*s;const _=.4*(1-i)*(1-a*.5);h.vx-=h.x*_*s,h.vy-=h.y*_*s;for(let x=u+1;x<this.blobs.length;x++){const S=this.blobs[x],R=S.x-h.x,A=S.y-h.y,T=Math.sqrt(R*R+A*A),D=(h.radius+S.radius)*(1.5+a*.5);if(T<D&&T>.001){const v=(D-T)/D*(.5+a*.8),E=R/T,F=A/T;h.vx-=E*v*s,h.vy-=F*v*s,S.vx+=E*v*s,S.vy+=F*v*s}}const m=.96-a*.06;h.vx*=m,h.vy*=m,h.x+=h.vx*s,h.y+=h.vy*s;const p=1.2+a*.3;Math.abs(h.x)>p&&(h.vx*=-.5,h.x=Math.sign(h.x)*p),Math.abs(h.y)>p&&(h.vy*=-.5,h.y=Math.sign(h.y)*p);const M=Math.sin(o*2+u)*a*.15;h.radius=h.baseRadius*(.9+t*.3+M)}this.updateBlobUniforms()}onResize(){const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.material.uniforms.uResolution.value.set(e,t)}render(){const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.updatePhysics(e),this.material.uniforms.uTime.value=t,this.material.uniforms.uProgress.value=this.state.progress,this.material.uniforms.uPulseAmount.value=this.state.pulseAmount,this.material.uniforms.uChaosAmount.value=this.state.chaosAmount,this.material.uniforms.uPatternAmount.value=this.state.patternAmount,this.renderer.render(this.scene,this.camera)}onClick(e){const t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height*2-1),s=t.width/t.height,o=n*s,a=i;if(this.blobs.length<Ns){const l=Math.atan2(-a,-o);this.blobs.push({x:o,y:a,vx:Math.cos(l)*.5,vy:Math.sin(l)*.5,radius:.05+Math.random()*.05,baseRadius:.05+Math.random()*.05,targetX:0,targetY:0})}}onMouseMove(e){const t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height*2-1),s=t.width/t.height;this.mouse.x=n*s,this.mouse.y=i;let o=!1;for(const a of this.blobs){const l=this.mouse.x-a.x,c=this.mouse.y-a.y;if(Math.sqrt(l*l+c*c)<a.radius*2){o=!0;break}}o&&!this.mouse.isOverBlobs&&!this.isExploding&&this.triggerExplosion(),this.mouse.isOverBlobs=o}spawnBlobAt(e,t){const n=this.canvas.getBoundingClientRect(),i=(e-n.left)/n.width*2-1,s=-((t-n.top)/n.height*2-1),o=n.width/n.height,a=i*o,l=s;if(this.blobs.length<Ns){const c=Math.atan2(-l,-a);this.blobs.push({x:a,y:l,vx:Math.cos(c)*.8,vy:Math.sin(c)*.8,radius:.06+Math.random()*.06,baseRadius:.06+Math.random()*.06,targetX:0,targetY:0}),console.log("[LAB] Blob spawned at",a.toFixed(2),l.toFixed(2))}}triggerExplosion(){this.isExploding=!0,this.explodeTime=this.clock.getElapsedTime();for(const e of this.blobs){const t=Math.atan2(e.y,e.x),n=(Math.random()-.5)*.8,i=t+n,s=4+Math.random()*4;e.vx=Math.cos(i)*s,e.vy=Math.sin(i)*s,e.radius=e.baseRadius*(.8+Math.random()*.6)}setTimeout(()=>{this.isExploding=!1},1500)}dispose(){this.renderer.dispose(),this.material.dispose(),window.removeEventListener("resize",this.onResize.bind(this))}}function xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ff(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},yc,Kt,yt,Yn=1e8,_t=1/Yn,$l=Math.PI*2,yx=$l/4,Tx=0,Bf=Math.sqrt,bx=Math.cos,Ax=Math.sin,Wt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},Ri=function(e){return typeof e=="number"},Tc=function(e){return typeof e>"u"},fi=function(e){return typeof e=="object"},xn=function(e){return e!==!1},bc=function(){return typeof window<"u"},Xa=function(e){return Ct(e)||Wt(e)},zf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,wx=/random\([^)]+\)/g,Rx=/,\s*/g,vh=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gf=/[+-]=-?[.\d]+/,Cx=/[^,'"\[\]\s]+/gi,Px=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,At,ri,Kl,Ac,Bn={},Mo={},Hf,Vf=function(e){return(Mo=Ms(e,Bn))&&yn},wc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},la=function(e,t){return!t&&console.warn(e)},Wf=function(e,t){return e&&(Bn[e]=t)&&Mo&&(Mo[e]=t)||Bn},ca=function(){return 0},Lx={suppressEvents:!0,isStart:!0,kill:!1},so={suppressEvents:!0,kill:!1},Dx={suppressEvents:!0},Rc={},qi=[],Zl={},Xf,Cn={},Tl={},xh=30,ao=[],Cc="",Pc=function(e){var t=e[0],n,i;if(fi(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ao.length;i--&&!ao[i].targetTest(t););n=ao[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new md(e[i],n)))||e.splice(i,1);return e},yr=function(e){return e._gsap||Pc($n(e))[0]._gsap},qf=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():Tc(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},us=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ux=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Eo=function(){var e=qi.length,t=qi.slice(0),n,i;for(Zl={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lc=function(e){return!!(e._initted||e._startAt||e.add)},Yf=function(e,t,n,i){qi.length&&!Kt&&Eo(),e.render(t,n,!!(Kt&&t<0&&Lc(e))),qi.length&&!Kt&&Eo()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Cx).length<2?t:Wt(e)?e.trim():e},Kf=function(e){return e},zn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ix=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ms=function(e,t){for(var n in t)e[n]=t[n];return e},Sh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=fi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ys=function(e){var t=e.parent||At,n=e.keyframes?Ix(rn(e.keyframes)):zn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Nx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zf=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ox=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},jl=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(so):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Fx=function r(e){return!e||e._ts&&r(e.parent)},Mh=function(e){return e._repeat?Es(e._tTime,e=e.duration()+e._rDelay)*e:0},Es=function(e,t){var n=Math.floor(e=bt(e/t));return e&&n===e?n-1:n},To=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zo=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},ko=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zo(e),n._dirty||Tr(n,e)),e},jf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=To(e.rawTime(),t),(!t._dur||Ma(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},oi=function(e,t,n,i){return t.parent&&ji(t),t._start=bt((Ri(n)?n:n||e!==At?Hn(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zf(e,t,"_first","_last",e._sort?"_start":0),Jl(t)||(e._recent=t),i||jf(e,t),e._ts<0&&ko(e,e._tTime),e},Jf=function(e,t){return(Bn.ScrollTrigger||wc("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},Qf=function(e,t,n,i,s){if(Uc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xf!==Ln.frame)return qi.push(e),e._lazy=[s,i],1},Bx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Jl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Bx(e)&&!(!e._initted&&Jl(e))||(e._ts<0||e._dp._ts<0)&&!Jl(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ma(0,e._tDur,t),u=Es(l,a),e._yoyo&&u&1&&(o=1-o),u!==Es(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Kt||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&Qf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&jl(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ji(e,1),!n&&!Kt&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ys=function(e,t,n,i){var s=e._repeat,o=bt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:bt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ko(e,e._tTime=e._tDur*a),e.parent&&zo(e),n||Tr(e.parent,e),e},Eh=function(e){return e instanceof dn?Tr(e):ys(e,e._dur)},Gx={_start:0,endTime:ca,totalDuration:ca},Hn=function r(e,t,n){var i=e.labels,s=e._recent||Gx,o=e.duration()>=Yn?s.endTime(!1):e._dur,a,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$s=function(e,t,n){var i=Ri(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;o.immediateRender=xn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new It(t[0],o,t[s+1])},tr=function(e,t){return e||e===0?t(e):t},Ma=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Wt(e)||!(t=Px.exec(e))?"":t[1]},Hx=function(e,t,n){return tr(n,function(i){return Ma(e,t,i)})},Ql=[].slice,ed=function(e,t){return e&&fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fi(e[0]))&&!e.nodeType&&e!==ri},Vx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Wt(i)&&!t||ed(i,1)?(s=n).push.apply(s,$n(i)):n.push(i)})||n},$n=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Wt(e)&&!n&&(Kl||!Ts())?Ql.call((t||Ac).querySelectorAll(e),0):rn(e)?Vx(e,n):ed(e)?Ql.call(e,0):e?[e]:[]},ec=function(e){return e=$n(e)[0]||la("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return $n(t,n.querySelectorAll?n:n===e?la("Invalid scope")||Ac.createElement("div"):e)}},td=function(e){return e.sort(function(){return .5-Math.random()})},nd=function(e){if(Ct(e))return e;var t=fi(e)?e:{each:e},n=br(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,M,x,S,R,A,T,D,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Yn])[1],!v){for(T=-Yn;T<(T=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,M=v===Yn?0:l?_*h/v-.5:i/v|0,T=0,D=Yn,A=0;A<_;A++)x=A%v-p,S=M-(A/v|0),m[A]=R=c?Math.abs(c==="y"?S:x):Bf(x*x+S*S),R>T&&(T=R),R<D&&(D=R);i==="random"&&td(m),m.max=T-D,m.min=D,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(t.amount||t.each)||0,n=n&&_<0?fd(n):n}return _=(m[f]-m.min)/m.max||0,bt(m.b+(n?n(_):_)*m.v)+m.u}},tc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ri(n)?0:tn(n))}},id=function(e,t){var n=rn(e),i,s;return!n&&fi(e)&&(i=n=e.radius||Yn,e.values?(e=$n(e.values),(s=!Ri(e[0]))&&(i*=i)):e=tc(e.increment)),tr(t,n?Ct(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Yn,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||Ri(o)?u:u+tn(o)}:tc(e))},rd=function(e,t,n,i){return tr(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Wx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Xx=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},qx=function(e,t,n){return ad(e,t,0,1,n)},sd=function(e,t,n){return tr(n,function(i){return e[~~t(i)]})},Yx=function r(e,t,n){var i=t-e;return rn(e)?sd(e,r(0,e.length),t):tr(n,function(s){return(i+(s-e)%i)%i+e})},$x=function r(e,t,n){var i=t-e,s=i*2;return rn(e)?sd(e,r(0,e.length-1),t):tr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ua=function(e){return e.replace(wx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Rx);return rd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ad=function(e,t,n,i,s){var o=t-e,a=i-n;return tr(s,function(l){return n+((l-e)/o*a||0)})},Kx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Wt(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ms(rn(e)?[]:{},e));if(!u){for(l in t)Dc.call(a,e,l,"get",t[l]);s=function(g){return Oc(g,a)||(o?e.p:e)}}}return tr(n,s)},yh=function(e,t,n){var i=e.labels,s=Yn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(e,t,n){var i=e.vars,s=i[t],o=yt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&Eo(),a&&(yt=a),u=l?s.apply(c,l):s.call(c),yt=o,u},zs=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Un(e,"onInterrupt"),e},as,od=[],ld=function(e){if(e)if(e=!e.name&&e.default||e,bc()||e.headless){var t=e.name,n=Ct(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ca,render:Oc,add:Dc,kill:hS,modifier:uS,rawVars:0},o={targetTest:0,get:0,getSetter:Nc,aliases:{},register:0};if(Ts(),e!==i){if(Cn[t])return;zn(i,zn(yo(e,s),o)),Ms(i.prototype,Ms(s,yo(e,o))),Cn[i.prop=t]=i,e.targetTest&&(ao.push(i),Rc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wf(t,i),e.register&&e.register(yn,i,Mn)}else od.push(e)},mt=255,ks={aqua:[0,mt,mt],lime:[0,mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mt],navy:[0,0,128],white:[mt,mt,mt],olive:[128,128,0],yellow:[mt,mt,0],orange:[mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mt,0,0],pink:[mt,192,203],cyan:[0,mt,mt],transparent:[mt,mt,mt,0]},bl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*mt+.5|0},cd=function(e,t,n){var i=e?Ri(e)?[e>>16,e>>8&mt,e&mt]:0:ks.black,s,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ks[e])i=ks[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&mt,i&mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&mt,e&mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(vh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=bl(l+1/3,s,o),i[1]=bl(l,s,o),i[2]=bl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(vh)||ks.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/mt,o=i[1]/mt,a=i[2]/mt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ud=function(e){var t=[],n=[],i=-1;return e.split(Yi).forEach(function(s){var o=s.match(ss)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Th=function(e,t,n){var i="",s=(e+i).match(Yi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=cd(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=ud(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Yi,"1").split(ss),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Yi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Yi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ks)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Zx=/hsl[a]?\(/,hd=function(e){var t=e.join(" "),n;if(Yi.lastIndex=0,Yi.test(t))return n=Zx.test(t),e[1]=Th(e[1],n),e[0]=Th(e[0],n,ud(e[1])),!0},ha,Ln=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=r()-i,M=m===!0,x,S,R,A;if((p>e||p<0)&&(n+=p-t),i+=p,R=i-n,x=R-o,(x>0||M)&&(A=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=x+(x>=s?4:s-x),S=1),M||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](R,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Hf&&(!Kl&&bc()&&(ri=Kl=window,Ac=ri.document||{},Bn.gsap=yn,(ri.gsapVersions||(ri.gsapVersions=[])).push(yn.version),Vf(Mo||ri.GreenSockGlobals||!ri.gsap&&ri||{}),od.forEach(ld)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ha=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,M){var x=p?function(S,R,A,T){m(S,R,A,T),h.remove(x)}:m;return h.remove(m),a[M?"unshift":"push"](x),Ts(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h}(),Ts=function(){return!ha&&Ln.wake()},rt={},jx=/^[\d.\-M][\d.\-,\s]/,Jx=/["']/g,Qx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(Jx,"").trim():+c,i=l.substr(a+1).trim();return t},eS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},tS=function(e){var t=(e+"").split("("),n=rt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Qx(t[1])]:eS(e).split(",").map($f)):rt._CE&&jx.test(e)?rt._CE("",e):n},fd=function(e){return function(t){return 1-e(1-t)}},dd=function r(e,t){for(var n=e._first,i;n;)n instanceof dn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},br=function(e,t){return e&&(Ct(e)?e:rt[e]||tS(e))||t},Nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Sn(e,function(a){rt[a]=Bn[a]=s,rt[o=a.toLowerCase()]=n;for(var l in s)rt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=rt[a+"."+l]=s[l]}),s},pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Al=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/$l*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ax((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:pd(a);return s=$l/s,l.config=function(c,u){return r(e,c,u)},l},wl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pd(n);return i.config=function(s){return r(e,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Nr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});rt.Linear.easeNone=rt.none=rt.Linear.easeIn;Nr("Elastic",Al("in"),Al("out"),Al());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Nr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Nr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Nr("Circ",function(r){return-(Bf(1-r*r)-1)});Nr("Sine",function(r){return r===1?1:-bx(r*yx)+1});Nr("Back",wl("in"),wl("out"),wl());rt.SteppedEase=rt.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-_t;return function(a){return((i*Ma(0,o,a)|0)+s)*n}}};Ss.ease=rt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Cc+=r+","+r+"Params,"});var md=function(e,t){this.id=Tx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qf,this.set=t?t.getSetter:Nc},fa=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ys(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),ha||Ln.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ts(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ko(this,n),!s._dp||s.parent||jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Yf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?To(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(Ma(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zo(this),Ox(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ts(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=bt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&oi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?To(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Dx);var i=Kt;return Kt=n,Lc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Eh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Eh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Hn(this,n),xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-_t),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ct(n)?n:Kf,l=function(){var u=i.then;i.then=null,s&&s(),Ct(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){zs(this)},r}();zn(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var dn=function(r){Ff(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),At&&oi(n.parent||At,xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jf(xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return $s(0,arguments,this),this},t.from=function(i,s,o){return $s(1,arguments,this),this},t.fromTo=function(i,s,o,a){return $s(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ys(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,Hn(this,o),1),this},t.call=function(i,s,o){return oi(this,It.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new It(i,o,Hn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Ys(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,Ys(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,M,x,S,R,A,T;if(this!==At&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,x=this._ts,p=!x,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=bt(u%m),u===l?(_=this._repeat,f=c):(R=bt(u/m),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=Es(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),A&&_&1&&(f=c-f,T=1),_!==R&&!this._lock){var D=A&&R&1,v=D===(A&&_&1);if(_<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(T?0:bt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;dd(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kx(this,bt(a),bt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!R&&(Un(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-_t);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||Kt&&Lc(d)),f!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=E?-_t:_t);break}}d=g}}if(M&&!s&&(this.pause(),M.render(f>=a?0:-_t)._zTime=f>=a?1:-1,this._ts))return this._start=S,zo(this),this.render(i,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Ri(s)||(s=Hn(this,s,i)),!(i instanceof fa)){if(rn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Wt(i))return this.addLabel(i,s);if(Ct(i))i=It.delayedCall(0,i);else return this}return this!==i?oi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof It?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Ct(i)?this.killTweensOf(i):(i.parent===this&&Bo(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Hn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=It.delayedCall(0,s||ca,o);return a.data="isPause",this._hasPause=1,oi(this,a,Hn(this,i))},t.removePause=function(i){var s=this._first;for(i=Hn(this,i);s;)s._start===i&&s.data==="isPause"&&ji(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=$n(i),l=this._first,c=Ri(s),u;l;)l instanceof It?Ux(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Hn(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=It.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||_t,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ys(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,zn({startAt:{time:Hn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yh(this,Hn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yh(this,Hn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=bt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Tr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Yn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,oi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=bt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ys(o,o===At&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(At._ts&&(Yf(At,To(i,At)),Xf=Ln.frame),Ln.frame>=xh){xh+=Fn.autoSleep||120;var s=At._first;if((!s||!s._ts)&&Fn.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(fa);zn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nS=function(e,t,n,i,s,o,a){var l=new Mn(this._pt,e,t,0,1,Md,null,s),c=0,u=0,h,f,d,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ua(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(yl)||[];h=yl.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?us(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=yl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Gf.test(i)||p)&&(l.e=0),this._pt=l,l},Dc=function(e,t,n,i,s,o,a,l,c,u){Ct(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Ct(h)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ct(h)?c?oS:xd:Ic,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=ua(i)),i.charAt(1)==="="&&(g=us(f,i)+(tn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||nc)return!isNaN(f*i)&&i!==""?(g=new Mn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?cS:Sd,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&wc(t,i),nS.call(this,e,t,f,i,d,l||Fn.stringFilter,c))},iS=function(e,t,n,i,s){if(Ct(e)&&(e=Ks(e,s,t,n,i)),!fi(e)||e.style&&e.nodeType||rn(e)||zf(e))return Wt(e)?Ks(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ks(e[a],s,t,n,i);return o},_d=function(e,t,n,i,s,o){var a,l,c,u;if(Cn[e]&&(a=new Cn[e]).init(s,a.rawVars?t[e]:iS(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Mn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Bi,nc,Uc=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!yc,S=e.timeline,R,A,T,D,v,E,F,U,Z,L,N,G,W;if(S&&(!f||!s)&&(s="none"),e._ease=br(s,Ss.ease),e._yEase=h?fd(br(h===!0?s:h,Ss.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!i.runBackwards,!S||f&&!i.stagger){if(U=m[0]?yr(m[0]).harness:0,G=U&&i[U.prop],R=yo(i,Rc),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?so:Lx),_._lazy=0),o){if(ji(e._startAt=It.set(m,zn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!a&&!d)&&e._startAt.revert(so),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&xn(l),immediateRender:a,stagger:0,parent:p},R),G&&(T[U.prop]=G),ji(e._startAt=It.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(so):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&xn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],F=v._gsap||Pc(m)[A]._gsap,e._ptLookup[A]=L={},Zl[F.id]&&qi.length&&Eo(),N=M===m?A:M.indexOf(v),U&&(Z=new U).init(v,G||R,e,N,M)!==!1&&(e._pt=D=new Mn(e._pt,v,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(q){L[q]=D}),Z.priority&&(E=1)),!U||G)for(T in R)Cn[T]&&(Z=_d(T,R,e,N,v,M))?Z.priority&&(E=1):L[T]=D=Dc.call(e,v,T,"get",R[T],N,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),x&&e._pt&&(Bi=e,At.killTweensOf(v,L,e.globalTime(t)),W=!e.parent,Bi=0),e._pt&&l&&(Zl[F.id]=1)}E&&Ed(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!W,f&&t<=0&&S.render(Yn,!0,!0)},rS=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return nc=1,e.vars[t]="+=0",Uc(e,a),nc=0,l?la(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Pt(n)+tn(h.e)),h.b&&(h.b=u.s+tn(h.b))},sS=function(e,t){var n=e[0]?yr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ms({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},aS=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(rn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ks=function(e,t,n,i,s){return Ct(e)?e.call(t,n,i,s):Wt(e)&&~e.indexOf("random(")?ua(e):e},gd=Cc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vd={};Sn(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vd[r]=1});var It=function(r){Ff(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ys(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||At,x=(rn(n)||zf(n)?Ri(n[0]):"length"in i)?[n]:$n(n),S,R,A,T,D,v,E,F;if(a._targets=x.length?Pc(x):la("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Xa(c)||Xa(u)){if(i=a.vars,S=a.timeline=new dn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:x}),S.kill(),S.parent=S._dp=xi(a),S._start=0,f||Xa(c)||Xa(u)){if(T=x.length,E=f&&nd(f),fi(f))for(D in f)~gd.indexOf(D)&&(F||(F={}),F[D]=f[D]);for(R=0;R<T;R++)A=yo(i,vd),A.stagger=0,p&&(A.yoyoEase=p),F&&Ms(A,F),v=x[R],A.duration=+Ks(c,xi(a),R,v,x),A.delay=(+Ks(u,xi(a),R,v,x)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),S.to(v,A,E?E(R,v,x):0),S._ease=rt.none;S.duration()?c=u=0:a.timeline=0}else if(g){Ys(zn(S.vars.defaults,{ease:"none"})),S._ease=br(g.ease||i.ease||"none");var U=0,Z,L,N;if(rn(g))g.forEach(function(G){return S.to(x,G,">")}),S.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||aS(D,g[D],A,g.easeEach);for(D in A)for(Z=A[D].sort(function(G,W){return G.t-W.t}),U=0,R=0;R<Z.length;R++)L=Z[R],N={ease:L.e,duration:(L.t-(R?Z[R-1].t:0))/100*c},N[D]=L.v,S.to(x,N,U),U+=N.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!yc&&(Bi=xi(a),At.killTweensOf(x),Bi=0),oi(M,xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===bt(M._time)&&xn(h)&&Fx(xi(a))&&M.data!=="nested")&&(a._tTime=-_t,a.render(Math.max(0,-u)||0)),m&&Jf(xi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_t&&!u?l:i<_t?0:i,f,d,g,_,m,p,M,x,S;if(!c)zx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=bt(h%_),h===l?(g=this._repeat,f=c):(m=bt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(S=this._yEase,f=c-f),m=Es(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&dd(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qf(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(f/c),this._from&&(this.ratio=M=1-M),!a&&h&&!s&&!m&&(Un(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&jl(this,i,s,o),Un(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&jl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ji(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Un(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ha||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Uc(this,c),u=this._ease(c/this._dur),rS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ko(this,0),this.parent||Zf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Bi&&Bi.vars.overwrite!==!0)._first||zs(this),this.parent&&o!==this.timeline.totalDuration()&&ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?$n(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&Nx(a,l))return s==="all"&&(this._pt=0),zs(this);for(h=this._op=this._op||[],s!=="all"&&(Wt(s)&&(_={},Sn(s,function(M){return _[M]=1}),s=_),s=sS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Bo(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&zs(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $s(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return $s(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return At.killTweensOf(i,s,o)},e}(fa);zn(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new dn,t=Ql.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ic=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},oS=function(e,t,n,i){return e[t](i.fp,n)},lS=function(e,t,n){return e.setAttribute(t,n)},Nc=function(e,t){return Ct(e[t])?xd:Tc(e[t])&&e.setAttribute?lS:Ic},Sd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Md=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Oc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},uS=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},hS=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fS=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ed=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Mn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Sd,this.d=l||this,this.set=c||Ic,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fS,this.m=n,this.mt=s,this.tween=i},r}();Sn(Cc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Rc[r]=1});Bn.TweenMax=Bn.TweenLite=It;Bn.TimelineLite=Bn.TimelineMax=dn;At=new dn({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=hd;var Ar=[],oo={},dS=[],bh=0,pS=0,Rl=function(e){return(oo[e]||dS).map(function(t){return t()})},ic=function(){var e=Date.now(),t=[];e-bh>2&&(Rl("matchMediaInit"),Ar.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Rl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bh=e,Rl("matchMedia"))},yd=function(){function r(t,n){this.selector=n&&ec(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pS++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ct(n)&&(s=i,i=n,n=Ct);var o=this,a=function(){var c=yt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=ec(s)),yt=o,h=i.apply(o,arguments),Ct(h)&&o._r.push(h),yt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ct?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof It)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ar.length;o--;)Ar[o].id===this.id&&Ar.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),mS=function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){fi(n)||(n={matches:n});var o=new yd(0,s||this.scope),a=o.conditions={},l,c,u;yt&&!o.selector&&(o.selector=yt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=ri.matchMedia(n[c]),l&&(Ar.indexOf(o)<0&&Ar.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ic):l.addEventListener("change",ic)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),bo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ld(i)})},timeline:function(e){return new dn(e)},getTweensOf:function(e,t){return At.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=$n(e)[0]);var s=yr(e||{}).get,o=n?Kf:$f;return n==="native"&&(n=""),e&&(t?o((Cn[t]&&Cn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Cn[a]&&Cn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=$n(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Cn[t],a=yr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;as._pt=0,h.init(e,n?u+n:u,as,0,[e]),h.render(1,h),as._pt&&Oc(1,as)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,zn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return At.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=br(e.ease,Ss.ease)),Sh(Ss,e||{})},config:function(e){return Sh(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Cn[a]&&!Bn[a]&&la(t+" effect requires "+a+" plugin.")}),Tl[t]=function(a,l,c){return n($n(a),zn(l||{},s),c)},o&&(dn.prototype[t]=function(a,l,c){return this.add(Tl[t](a,fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){rt[e]=br(t)},parseEase:function(e,t){return arguments.length?br(e,t):rt},getById:function(e){return At.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new dn(e),i,s;for(n.smoothChildTiming=xn(e.smoothChildTiming),At.remove(n),n._dp=0,n._time=n._tTime=At._time,i=At._first;i;)s=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&oi(n,i,i._start-i._delay),i=s;return oi(At,n,0),n},context:function(e,t){return e?new yd(e,t):yt},matchMedia:function(e){return new mS(e)},matchMediaRefresh:function(){return Ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ic()},addEventListener:function(e,t){var n=oo[e]||(oo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=oo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Yx,wrapYoyo:$x,distribute:nd,random:rd,snap:id,normalize:qx,getUnit:tn,clamp:Hx,splitColor:cd,toArray:$n,selector:ec,mapRange:ad,pipe:Wx,unitize:Xx,interpolate:Kx,shuffle:td},install:Vf,effects:Tl,ticker:Ln,updateRoot:dn.updateRoot,plugins:Cn,globalTimeline:At,core:{PropTween:Mn,globals:Wf,Tween:It,Timeline:dn,Animation:fa,getCache:yr,_removeLinkedListItem:Bo,reverting:function(){return Kt},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return yc=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return bo[r]=It[r]});Ln.add(dn.updateRoot);as=bo.to({},{duration:0});var _S=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},gS=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_S(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Cl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Wt(s)&&(l={},Sn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}gS(a,s)}}}},yn=bo.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Cl("roundProps",tc),Cl("modifiers"),Cl("snap",id))||bo;It.version=dn.version=yn.version="3.14.2";Hf=1;bc()&&Ts();rt.Power0;rt.Power1;rt.Power2;rt.Power3;rt.Power4;rt.Linear;rt.Quad;rt.Cubic;rt.Quart;rt.Quint;rt.Strong;rt.Elastic;rt.Back;rt.SteppedEase;rt.Bounce;rt.Sine;rt.Expo;rt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ah,zi,hs,Fc,gr,wh,Bc,vS=function(){return typeof window<"u"},Ci={},fr=180/Math.PI,fs=Math.PI/180,Jr=Math.atan2,Rh=1e8,zc=/([A-Z])/g,xS=/(left|right|width|margin|padding|x)/i,SS=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ES=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},yS=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},TS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Td=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bS=function(e,t,n){return e.style[t]=n},AS=function(e,t,n){return e.style.setProperty(t,n)},wS=function(e,t,n){return e._gsap[t]=n},RS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},CS=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},PS=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},wt="transform",En=wt+"Origin",LS=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Ci&&s){if(this.tfm=this.tfm||{},e!=="transform")e=li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Si(i,a)}):this.tfm[e]=o.x?o[e]:Si(i,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return li.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},DS=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(zc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bc(),(!s||!s.isStart)&&!n[wt]&&(Ad(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wd=function(e,t){var n={target:e,props:[],revert:DS,save:LS};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rd,sc=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n&&n.style?n:zi.createElement(e)},In=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(zc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,bs(t)||t,1)||""},Ch="O,Moz,ms,Ms,Webkit".split(","),bs=function(e,t,n){var i=t||gr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ch[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ch[o]:"")+e},ac=function(){vS()&&window.document&&(Ah=window,zi=Ah.document,hs=zi.documentElement,gr=sc("div")||{style:{}},sc("div"),wt=bs(wt),En=wt+"Origin",gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rd=!!bs("perspective"),Bc=yn.core.reverting,Fc=1)},Ph=function(e){var t=e.ownerSVGElement,n=sc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),hs.removeChild(n),s},Lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cd=function(e){var t,n;try{t=e.getBBox()}catch{t=Ph(e),n=1}return t&&(t.width||t.height)||n||(t=Ph(e)),t&&!t.width&&!t.x&&!t.y?{x:+Lh(e,["x","cx","x1"])||0,y:+Lh(e,["y","cy","y1"])||0,width:0,height:0}:t},Pd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cd(e))},Ji=function(e,t){if(t){var n=e.style,i;t in Ci&&t!==En&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(zc,"-$1").toLowerCase())):n.removeAttribute(t)}},ki=function(e,t,n,i,s,o){var a=new Mn(e._pt,t,n,0,1,o?bd:Td);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Dh={deg:1,rad:1,turn:1},US={grid:1,flex:1},Qi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=gr.style,l=xS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||Dh[i]||Dh[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&Pd(e),(d||o==="%")&&(Ci[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Pt(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===zi||!_.appendChild)&&(_=zi.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Pt(s/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,g=e[u],M?e.style[t]=M:Ji(e,t)}else(d||o==="%")&&!US[In(_,"display")]&&(a.position=In(e,"position")),_===e&&(a.position="static"),_.appendChild(gr),g=gr[u],_.removeChild(gr),a.position="absolute";return l&&d&&(m=yr(_),m.time=Ln.time,m.width=_[u]),Pt(f?g*s/h:g&&s?h/g*s:0)},Si=function(e,t,n,i){var s;return Fc||ac(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ci[t]&&t!=="transform"?(s=pa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wo(In(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ao[t]&&Ao[t](e,t,n)||In(e,t)||qf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qi(e,t,s,n)+n:s},IS=function(e,t,n,i){if(!n||n==="none"){var s=bs(t,e,1),o=s&&In(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=In(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,Md),l=0,c=0,u,h,f,d,g,_,m,p,M,x,S,R;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=In(e,t)||i,_?e.style[t]=_:Ji(e,t)),u=[n,i],hd(u),n=u[0],i=u[1],f=n.match(ss)||[],R=i.match(ss)||[],R.length){for(;h=ss.exec(i);)m=h[0],M=i.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),m.charAt(1)==="="&&(m=us(d,m)+S),p=parseFloat(m),x=m.substr((p+"").length),l=ss.lastIndex-x.length,x||(x=x||Fn.units[t]||S,l===i.length&&(i+=x,a.e+=x)),S!==x&&(d=Qi(e,t,_,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?bd:Td;return Gf.test(i)&&(a.e=0),this._pt=a,a},Uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NS=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Uh[n]||n,t[1]=Uh[i]||i,t.join(" ")},OS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ci[a]&&(l=1,a=a==="transformOrigin"?En:wt),Ji(n,a);l&&(Ji(n,wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",pa(n,1),o.uncache=1,Ad(i)))}},Ao={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,n,0,0,OS);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},da=[1,0,0,1,0,0],Ld={},Dd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ih=function(e){var t=In(e,wt);return Dd(t)?da:t.substr(7).match(kf).map(Pt)},kc=function(e,t){var n=e._gsap||yr(e),i=e.style,s=Ih(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?da:s):(s===da&&!e.offsetParent&&e!==hs&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,hs.appendChild(e)),s=Ih(e),l?i.display=l:Ji(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):hs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},oc=function(e,t,n,i,s,o){var a=e._gsap,l=s||kc(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],x=t.split(" "),S=parseFloat(x[0])||0,R=parseFloat(x[1])||0,A,T,D,v;n?l!==da&&(T=d*m-g*_)&&(D=S*(m/T)+R*(-_/T)+(_*M-m*p)/T,v=S*(-g/T)+R*(d/T)-(d*M-g*p)/T,S=D,R=v):(A=Cd(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),R=A.y+(~(x[1]||x[0]).indexOf("%")?R/100*A.height:R)),i||i!==!1&&a.smooth?(p=S-c,M=R-u,a.xOffset=h+(p*d+M*_)-p,a.yOffset=f+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[En]="0px 0px",o&&(ki(o,a,"xOrigin",c,S),ki(o,a,"yOrigin",u,R),ki(o,a,"xOffset",h,a.xOffset),ki(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},pa=function(e,t){var n=e._gsap||new md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=In(e,En)||"0",u,h,f,d,g,_,m,p,M,x,S,R,A,T,D,v,E,F,U,Z,L,N,G,W,q,$,C,j,ne,Y,K,se;return u=h=f=_=m=p=M=x=S=0,d=g=1,n.svg=!!(e.getCTM&&Pd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),T=kc(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),oc(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,A=n.yOrigin||0,T!==da&&(F=T[0],U=T[1],Z=T[2],L=T[3],u=N=T[4],h=G=T[5],T.length===6?(d=Math.sqrt(F*F+U*U),g=Math.sqrt(L*L+Z*Z),_=F||U?Jr(U,F)*fr:0,M=Z||L?Jr(Z,L)*fr+_:0,M&&(g*=Math.abs(Math.cos(M*fs))),n.svg&&(u-=R-(R*F+A*Z),h-=A-(R*U+A*L))):(se=T[6],Y=T[7],C=T[8],j=T[9],ne=T[10],K=T[11],u=T[12],h=T[13],f=T[14],D=Jr(se,ne),m=D*fr,D&&(v=Math.cos(-D),E=Math.sin(-D),W=N*v+C*E,q=G*v+j*E,$=se*v+ne*E,C=N*-E+C*v,j=G*-E+j*v,ne=se*-E+ne*v,K=Y*-E+K*v,N=W,G=q,se=$),D=Jr(-Z,ne),p=D*fr,D&&(v=Math.cos(-D),E=Math.sin(-D),W=F*v-C*E,q=U*v-j*E,$=Z*v-ne*E,K=L*E+K*v,F=W,U=q,Z=$),D=Jr(U,F),_=D*fr,D&&(v=Math.cos(D),E=Math.sin(D),W=F*v+U*E,q=N*v+G*E,U=U*v-F*E,G=G*v-N*E,F=W,N=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Pt(Math.sqrt(F*F+U*U+Z*Z)),g=Pt(Math.sqrt(G*G+se*se)),D=Jr(N,G),M=Math.abs(D)>2e-4?D*fr:0,S=K?1/(K<0?-K:K):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dd(In(e,wt)),W&&e.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Pt(d),n.scaleY=Pt(g),n.rotation=Pt(_)+a,n.rotationX=Pt(m)+a,n.rotationY=Pt(p)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[En]=wo(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?BS:Rd?Ud:FS,n.uncache=0,n},wo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Pl=function(e,t,n){var i=tn(t);return Pt(parseFloat(t)+parseFloat(Qi(e,"x",n+"px",i)))+i},FS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ud(e,t)},lr="0deg",Os="0px",cr=") ",Ud=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,x=n.zOrigin,S="",R=p==="auto"&&e&&e!==1||p===!0;if(x&&(h!==lr||u!==lr)){var A=parseFloat(u)*fs,T=Math.sin(A),D=Math.cos(A),v;A=parseFloat(h)*fs,v=Math.cos(A),o=Pl(M,o,T*v*-x),a=Pl(M,a,-Math.sin(A)*-x),l=Pl(M,l,D*v*-x+x)}m!==Os&&(S+="perspective("+m+cr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(R||o!==Os||a!==Os||l!==Os)&&(S+=l!==Os||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cr),c!==lr&&(S+="rotate("+c+cr),u!==lr&&(S+="rotateY("+u+cr),h!==lr&&(S+="rotateX("+h+cr),(f!==lr||d!==lr)&&(S+="skew("+f+", "+d+cr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+cr),M.style[wt]=S||"translate(0, 0)"},BS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,x=parseFloat(o),S=parseFloat(a),R,A,T,D,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fs,c*=fs,R=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=fs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),T*=v,D*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),R*=v,A*=v)),R=Pt(R),A=Pt(A),T=Pt(T),D=Pt(D)):(R=h,D=f,A=T=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Qi(d,"x",o,"px"),S=Qi(d,"y",a,"px")),(g||_||m||p)&&(x=Pt(x+g-(g*R+_*T)+m),S=Pt(S+_-(g*A+_*D)+p)),(i||s)&&(v=d.getBBox(),x=Pt(x+i/100*v.width),S=Pt(S+s/100*v.height)),v="matrix("+R+","+A+","+T+","+D+","+x+","+S+")",d.setAttribute("transform",v),M&&(d.style[wt]=v)},zS=function(e,t,n,i,s){var o=360,a=Wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?fr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Rh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Rh)%o-~~(c/o)*o)),e._pt=f=new Mn(e._pt,t,n,i,c,MS),f.e=u,f.u="deg",e._props.push(n),f},Nh=function(e,t){for(var n in t)e[n]=t[n];return e},kS=function(e,t,n){var i=Nh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[wt]=t,a=pa(n,1),Ji(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],o[wt]=t,a=pa(n,1),o[wt]=c);for(l in Ci)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=tn(c),g=tn(u),h=d!==g?Qi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Mn(e._pt,a,l,h,f-h,rc),e._pt.u=g||0,e._props.push(l));Nh(a,i)};Sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ao[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Si(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var Id={name:"css",register:ac,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,M,x,S,R,A,T,D,v;Fc||ac(),this.styles=this.styles||wd(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Cn[_]&&_d(_,t,n,i,e,s)))){if(d=typeof u,g=Ao[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ua(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Yi.lastIndex=0,Yi.test(c)||(m=tn(c),p=tn(u),p?m!==p&&(c=Qi(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Wt(c)&&~c.indexOf("random(")&&(c=ua(c)),tn(c+"")||c==="auto"||(c+=Fn.units[_]||tn(Si(e,_))||""),(c+"").charAt(1)==="="&&(c=Si(e,_))):c=Si(e,_),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in li&&(_==="autoAlpha"&&(f===1&&Si(e,"visibility")==="hidden"&&h&&(f=0),D.push("visibility",0,a.visibility),ki(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Ci,x){if(this.styles.save(_),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=In(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=In(e,"perspective"),E?e.style.perspective=E:Ji(e,"perspective")}h=parseFloat(u)}if(S||(R=e._gsap,R.renderTransform&&!t.parseTransform||pa(e,t.parseTransform),A=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new Mn(this._pt,a,wt,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new Mn(this._pt,R,"scaleY",R.scaleY,(M?us(R.scaleY,M+h):h)-R.scaleY||0,rc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(En,0,a[En]),u=NS(u),R.svg?oc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&ki(this,R,"zOrigin",R.zOrigin,p),ki(this,a,_,wo(c),wo(u)));continue}else if(_==="svgOrigin"){oc(e,u,1,A,0,this);continue}else if(_ in Ld){zS(this,R,_,f,M?us(f,M+u):u);continue}else if(_==="smoothOrigin"){ki(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){kS(this,u,e);continue}}else _ in a||(_=bs(_)||_);if(x||(h||h===0)&&(f||f===0)&&!SS.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=tn(u)||(_ in Fn.units?Fn.units[_]:m),m!==p&&(f=Qi(e,_,c,p)),this._pt=new Mn(this._pt,x?R:a,_,f,(M?us(f,M+h):h)-f,!x&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?TS:rc),this._pt.u=p||0,x&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=yS):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ES);else if(_ in a)IS.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){wc(_,u);continue}x||(_ in a?D.push(_,0,a[_]):typeof e[_]=="function"?D.push(_,2,e[_]()):D.push(_,1,c||e[_])),o.push(_)}}T&&Ed(this)},render:function(e,t){if(t.tween._time||!Bc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Si,aliases:li,getSetter:function(e,t,n){var i=li[t];return i&&i.indexOf(",")<0&&(t=i),t in Ci&&t!==En&&(e._gsap.x||Si(e,"x"))?n&&wh===n?t==="scale"?RS:wS:(wh=n||{})&&(t==="scale"?CS:PS):e.style&&!Tc(e.style[t])?bS:~t.indexOf("-")?AS:Nc(e,t)},core:{_removeProperty:Ji,_getMatrix:kc}};yn.utils.checkPrefix=bs;yn.core.getStyleSaver=wd;(function(r,e,t,n){var i=Sn(r+","+e+","+t,function(s){Ci[s]=1});Sn(e,function(s){Fn.units[s]="deg",Ld[s]=1}),li[i[13]]=r+","+e,Sn(n,function(s){var o=s.split(":");li[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fn.units[r]="px"});yn.registerPlugin(Id);var Nd=yn.registerPlugin(Id)||yn;Nd.core.Tween;function GS(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function HS(r,e,t){return e&&GS(r.prototype,e),r}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Yt,lo,Dn,Gi,Hi,ds,Od,dr,Zs,Fd,bi,Qn,Bd,zd=function(){return Yt||typeof window<"u"&&(Yt=window.gsap)&&Yt.registerPlugin&&Yt},kd=1,os=[],nt=[],hi=[],js=Date.now,lc=function(e,t){return t},VS=function(){var e=Zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,hi),nt=n,hi=i,lc=function(o,a){return t[o](a)}},$i=function(e,t){return~hi.indexOf(e)&&hi[hi.indexOf(e)+1][t]},Js=function(e){return!!~Fd.indexOf(e)},on=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},qa="scrollLeft",Ya="scrollTop",cc=function(){return bi&&bi.isPressed||nt.cache++},Ro=function(e,t){var n=function i(s){if(s||s===0){kd&&(Dn.history.scrollRestoration="manual");var o=bi&&bi.isPressed;s=i.v=Math.round(s)||(bi&&bi.iOS?1:0),e(s),i.cacheID=nt.cache,o&&lc("ss",s)}else(t||nt.cache!==i.cacheID||lc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},pn={s:qa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ro(function(r){return arguments.length?Dn.scrollTo(r,Bt.sc()):Dn.pageXOffset||Gi[qa]||Hi[qa]||ds[qa]||0})},Bt={s:Ya,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:Ro(function(r){return arguments.length?Dn.scrollTo(pn.sc(),r):Dn.pageYOffset||Gi[Ya]||Hi[Ya]||ds[Ya]||0})},_n=function(e,t){return(t&&t._ctx&&t._ctx.selector||Yt.utils.toArray)(e)[0]||(typeof e=="string"&&Yt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},WS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},er=function(e,t){var n=t.s,i=t.sc;Js(e)&&(e=Gi.scrollingElement||Hi);var s=nt.indexOf(e),o=i===Bt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||on(e,"scroll",cc);var a=nt[s+o],l=a||(nt[s+o]=Ro($i(e,n),!0)||(Js(e)?i:Ro(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Yt.getProperty(e,"scrollBehavior")==="smooth"),l},uc=function(e,t,n){var i=e,s=e,o=js(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=js();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=js();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Fs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Oh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Gd=function(){Zs=Yt.core.globals().ScrollTrigger,Zs&&Zs.core&&VS()},Hd=function(e){return Yt=e||zd(),!lo&&Yt&&typeof document<"u"&&document.body&&(Dn=window,Gi=document,Hi=Gi.documentElement,ds=Gi.body,Fd=[Dn,Gi,Hi,ds],Yt.utils.clamp,Bd=Yt.core.context||function(){},dr="onpointerenter"in ds?"pointer":"mouse",Od=Lt.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qn=Lt.eventTypes=("ontouchstart"in Hi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Hi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kd=0},500),Gd(),lo=1),lo};pn.op=Bt;nt.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){lo||Hd(Yt)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||Gd();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,x=n.onPress,S=n.onRelease,R=n.onRight,A=n.onLeft,T=n.onUp,D=n.onDown,v=n.onChangeX,E=n.onChangeY,F=n.onChange,U=n.onToggleX,Z=n.onToggleY,L=n.onHover,N=n.onHoverEnd,G=n.onMove,W=n.ignoreCheck,q=n.isNormalizer,$=n.onGestureStart,C=n.onGestureEnd,j=n.onWheel,ne=n.onEnable,Y=n.onDisable,K=n.onClick,se=n.scrollSpeed,_e=n.capture,de=n.allowClicks,Ce=n.lockAxis,Pe=n.onLockAxis;this.target=a=_n(a)||Hi,this.vars=n,d&&(d=Yt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,se=se||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Dn.getComputedStyle(ds).lineHeight)||22);var Ue,Ge,z,He,me,Le,ge,k=this,Fe=0,w=0,y=n.passive||!u&&n.passive!==!1,O=er(a,pn),ee=er(a,Bt),Q=O(),te=ee(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Qn[0]==="pointerdown",ue=Js(a),ce=a.ownerDocument||Gi,be=[0,0,0],ke=[0,0,0],J=0,st=function(){return J=js()},we=function(xe,Re){return(k.event=xe)&&d&&WS(xe.target,d)||Re&&pe&&xe.pointerType!=="touch"||W&&W(xe,Re)},Ve=function(){k._vx.reset(),k._vy.reset(),Ge.pause(),h&&h(k)},ye=function(){var xe=k.deltaX=Oh(be),Re=k.deltaY=Oh(ke),ie=Math.abs(xe)>=i,Oe=Math.abs(Re)>=i;F&&(ie||Oe)&&F(k,xe,Re,be,ke),ie&&(R&&k.deltaX>0&&R(k),A&&k.deltaX<0&&A(k),v&&v(k),U&&k.deltaX<0!=Fe<0&&U(k),Fe=k.deltaX,be[0]=be[1]=be[2]=0),Oe&&(D&&k.deltaY>0&&D(k),T&&k.deltaY<0&&T(k),E&&E(k),Z&&k.deltaY<0!=w<0&&Z(k),w=k.deltaY,ke[0]=ke[1]=ke[2]=0),(He||z)&&(G&&G(k),z&&(m&&z===1&&m(k),M&&M(k),z=0),He=!1),Le&&!(Le=!1)&&Pe&&Pe(k),me&&(j(k),me=!1),Ue=0},ve=function(xe,Re,ie){be[ie]+=xe,ke[ie]+=Re,k._vx.update(xe),k._vy.update(Re),c?Ue||(Ue=requestAnimationFrame(ye)):ye()},We=function(xe,Re){Ce&&!ge&&(k.axis=ge=Math.abs(xe)>Math.abs(Re)?"x":"y",Le=!0),ge!=="y"&&(be[2]+=xe,k._vx.update(xe,!0)),ge!=="x"&&(ke[2]+=Re,k._vy.update(Re,!0)),c?Ue||(Ue=requestAnimationFrame(ye)):ye()},Je=function(xe){if(!we(xe,1)){xe=Fs(xe,u);var Re=xe.clientX,ie=xe.clientY,Oe=Re-k.x,Ie=ie-k.y,Ye=k.isDragging;k.x=Re,k.y=ie,(Ye||(Oe||Ie)&&(Math.abs(k.startX-Re)>=s||Math.abs(k.startY-ie)>=s))&&(z||(z=Ye?2:1),Ye||(k.isDragging=!0),We(Oe,Ie))}},ot=k.onPress=function(Te){we(Te,1)||Te&&Te.button||(k.axis=ge=null,Ge.pause(),k.isPressed=!0,Te=Fs(Te),Fe=w=0,k.startX=k.x=Te.clientX,k.startY=k.y=Te.clientY,k._vx.reset(),k._vy.reset(),on(q?a:ce,Qn[1],Je,y,!0),k.deltaX=k.deltaY=0,x&&x(k))},fe=k.onRelease=function(Te){if(!we(Te,1)){an(q?a:ce,Qn[1],Je,!0);var xe=!isNaN(k.y-k.startY),Re=k.isDragging,ie=Re&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Oe=Fs(Te);!ie&&xe&&(k._vx.reset(),k._vy.reset(),u&&de&&Yt.delayedCall(.08,function(){if(js()-J>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(ce.createEvent){var Ie=ce.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Dn,1,Oe.screenX,Oe.screenY,Oe.clientX,Oe.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ie)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Re&&!q&&Ge.restart(!0),z&&ye(),p&&Re&&p(k),S&&S(k,ie)}},re=function(xe){return xe.touches&&xe.touches.length>1&&(k.isGesturing=!0)&&$(xe,k.isDragging)},P=function(){return(k.isGesturing=!1)||C(k)},ae=function(xe){if(!we(xe)){var Re=O(),ie=ee();ve((Re-Q)*se,(ie-te)*se,1),Q=Re,te=ie,h&&Ge.restart(!0)}},oe=function(xe){if(!we(xe)){xe=Fs(xe,u),j&&(me=!0);var Re=(xe.deltaMode===1?l:xe.deltaMode===2?Dn.innerHeight:1)*g;ve(xe.deltaX*Re,xe.deltaY*Re,0),h&&!q&&Ge.restart(!0)}},Ne=function(xe){if(!we(xe)){var Re=xe.clientX,ie=xe.clientY,Oe=Re-k.x,Ie=ie-k.y;k.x=Re,k.y=ie,He=!0,h&&Ge.restart(!0),(Oe||Ie)&&We(Oe,Ie)}},De=function(xe){k.event=xe,L(k)},it=function(xe){k.event=xe,N(k)},at=function(xe){return we(xe)||Fs(xe,u)&&K(k)};Ge=k._dc=Yt.delayedCall(f||.25,Ve).pause(),k.deltaX=k.deltaY=0,k._vx=uc(0,50,!0),k._vy=uc(0,50,!0),k.scrollX=O,k.scrollY=ee,k.isDragging=k.isGesturing=k.isPressed=!1,Bd(this),k.enable=function(Te){return k.isEnabled||(on(ue?ce:a,"scroll",cc),o.indexOf("scroll")>=0&&on(ue?ce:a,"scroll",ae,y,_e),o.indexOf("wheel")>=0&&on(a,"wheel",oe,y,_e),(o.indexOf("touch")>=0&&Od||o.indexOf("pointer")>=0)&&(on(a,Qn[0],ot,y,_e),on(ce,Qn[2],fe),on(ce,Qn[3],fe),de&&on(a,"click",st,!0,!0),K&&on(a,"click",at),$&&on(ce,"gesturestart",re),C&&on(ce,"gestureend",P),L&&on(a,dr+"enter",De),N&&on(a,dr+"leave",it),G&&on(a,dr+"move",Ne)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=He=z=!1,k._vx.reset(),k._vy.reset(),Q=O(),te=ee(),Te&&Te.type&&ot(Te),ne&&ne(k)),k},k.disable=function(){k.isEnabled&&(os.filter(function(Te){return Te!==k&&Js(Te.target)}).length||an(ue?ce:a,"scroll",cc),k.isPressed&&(k._vx.reset(),k._vy.reset(),an(q?a:ce,Qn[1],Je,!0)),an(ue?ce:a,"scroll",ae,_e),an(a,"wheel",oe,_e),an(a,Qn[0],ot,_e),an(ce,Qn[2],fe),an(ce,Qn[3],fe),an(a,"click",st,!0),an(a,"click",at),an(ce,"gesturestart",re),an(ce,"gestureend",P),an(a,dr+"enter",De),an(a,dr+"leave",it),an(a,dr+"move",Ne),k.isEnabled=k.isPressed=k.isDragging=!1,Y&&Y(k))},k.kill=k.revert=function(){k.disable();var Te=os.indexOf(k);Te>=0&&os.splice(Te,1),bi===k&&(bi=0)},os.push(k),q&&Js(a)&&(bi=k),k.enable(_)},HS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.14.2";Lt.create=function(r){return new Lt(r)};Lt.register=Hd;Lt.getAll=function(){return os.slice()};Lt.getById=function(r){return os.filter(function(e){return e.vars.id===r})[0]};zd()&&Yt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,ts,et,xt,Pn,lt,Gc,Co,ma,Qs,Gs,$a,Qt,Go,hc,un,Fh,Bh,ns,Vd,Ll,Wd,cn,fc,Xd,qd,Ni,dc,Hc,ps,Vc,ea,pc,Dl,Ka=1,en=Date.now,Ul=en(),Kn=0,Hs=0,zh=function(e,t,n){var i=Rn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},kh=function(e,t){return t&&(!Rn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},XS=function r(){return Hs&&requestAnimationFrame(r)},Gh=function(){return Go=1},Hh=function(){return Go=0},si=function(e){return e},Vs=function(e){return Math.round(e*1e5)/1e5||0},Yd=function(){return typeof window<"u"},$d=function(){return Se||Yd()&&(Se=window.gsap)&&Se.registerPlugin&&Se},Lr=function(e){return!!~Gc.indexOf(e)},Kd=function(e){return(e==="Height"?Vc:et["inner"+e])||Pn["client"+e]||lt["client"+e]},Zd=function(e){return $i(e,"getBoundingClientRect")||(Lr(e)?function(){return po.width=et.innerWidth,po.height=Vc,po}:function(){return Ei(e)})},qS=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=$i(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Kd(s):e["client"+s])||0}},YS=function(e,t){return!t||~hi.indexOf(e)?Zd(e):function(){return po}},ci=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=$i(e,n))?o()-Zd(e)()[s]:Lr(e)?(Pn[n]||lt[n])-Kd(i):e[n]-e["offset"+i])},Za=function(e,t){for(var n=0;n<ns.length;n+=3)(!t||~t.indexOf(ns[n+1]))&&e(ns[n],ns[n+1],ns[n+2])},Rn=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},Ws=function(e){return typeof e=="number"},pr=function(e){return typeof e=="object"},Bs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Il=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qr=Math.abs,jd="left",Jd="top",Wc="right",Xc="bottom",wr="width",Rr="height",ta="Right",na="Left",ia="Top",ra="Bottom",Ut="padding",Wn="margin",As="Width",qc="Height",Ft="px",Xn=function(e){return et.getComputedStyle(e)},$S=function(e){var t=Xn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Vh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ei=function(e,t){var n=t&&Xn(e)[hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Po=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Qd=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},KS=function(e){return function(t){return Se.utils.snap(Qd(e),t)}},Yc=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},ZS=function(e){return function(t,n){return Yc(Qd(e))(t,n.direction)}},ja=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Vt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ja=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Wh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Qa={toggleActions:"play",anticipatePin:0},Lo={top:0,left:0,center:.5,bottom:1,right:1},co=function(e,t){if(Rn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Lo?Lo[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},eo=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,g=xt.createElement("div"),_=Lr(n)||$i(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?lt:n,M=e.indexOf("start")!==-1,x=M?c:u,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(i===Bt?Wc:Xc)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],uo(g,0,i,M),g},uo=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+As]=1,s["border"+a+As]=0,s[n.p]=t+"px",Se.set(e,s)},Ze=[],mc={},_a,Xh=function(){return en()-Kn>34&&(_a||(_a=requestAnimationFrame(Ai)))},es=function(){(!cn||!cn.isPressed||cn.startX>lt.clientWidth)&&(nt.cache++,cn?_a||(_a=requestAnimationFrame(Ai)):Ai(),Kn||Ur("scrollStart"),Kn=en())},Nl=function(){qd=et.innerWidth,Xd=et.innerHeight},Xs=function(e){nt.cache++,(e===!0||!Qt&&!Wd&&!xt.fullscreenElement&&!xt.webkitFullscreenElement&&(!fc||qd!==et.innerWidth||Math.abs(et.innerHeight-Xd)>et.innerHeight*.25))&&Co.restart(!0)},Dr={},jS=[],ep=function r(){return Ht(je,"scrollEnd",r)||vr(!0)},Ur=function(e){return Dr[e]&&Dr[e].map(function(t){return t()})||jS},wn=[],tp=function(e){for(var t=0;t<wn.length;t+=5)(!e||wn[t+4]&&wn[t+4].query===e)&&(wn[t].style.cssText=wn[t+1],wn[t].getBBox&&wn[t].setAttribute("transform",wn[t+2]||""),wn[t+3].uncache=1)},np=function(){return nt.forEach(function(e){return nn(e)&&++e.cacheID&&(e.rec=e())})},$c=function(e,t){var n;for(un=0;un<Ze.length;un++)n=Ze[un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ea=!0,t&&tp(t),t||Ur("revert")},ip=function(e,t){nt.cache++,(t||!hn)&&nt.forEach(function(n){return nn(n)&&n.cacheID++&&(n.rec=0)}),Rn(e)&&(et.history.scrollRestoration=Hc=e)},hn,Cr=0,qh,JS=function(){if(qh!==Cr){var e=qh=Cr;requestAnimationFrame(function(){return e===Cr&&vr(!0)})}},rp=function(){lt.appendChild(ps),Vc=!cn&&ps.offsetHeight||et.innerHeight,lt.removeChild(ps)},Yh=function(e){return ma(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vr=function(e,t){if(Pn=xt.documentElement,lt=xt.body,Gc=[et,xt,Pn,lt],Kn&&!e&&!ea){Vt(je,"scrollEnd",ep);return}rp(),hn=je.isRefreshing=!0,ea||np();var n=Ur("refreshInit");Vd&&je.sort(),t||$c(),nt.forEach(function(i){nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),ea=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),pc=1,Yh(!0),Ze.forEach(function(i){var s=ci(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Yh(!1),pc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ip(Hc,1),Co.pause(),Cr++,hn=2,Ai(2),Ze.forEach(function(i){return nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),hn=je.isRefreshing=!1,Ur("refresh")},_c=0,ho=1,sa,Ai=function(e){if(e===2||!hn&&!ea){je.isUpdating=!0,sa&&sa.update(0);var t=Ze.length,n=en(),i=n-Ul>=50,s=t&&Ze[0].scroll();if(ho=_c>s?-1:1,hn||(_c=s),i&&(Kn&&!Go&&n-Kn>200&&(Kn=0,Ur("scrollEnd")),Gs=Ul,Ul=n),ho<0){for(un=t;un-- >0;)Ze[un]&&Ze[un].update(0,i);ho=1}else for(un=0;un<t;un++)Ze[un]&&Ze[un].update(0,i);je.isUpdating=!1}_a=0},gc=[jd,Jd,Xc,Wc,Wn+ra,Wn+ta,Wn+ia,Wn+na,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fo=gc.concat([wr,Rr,"boxSizing","max"+As,"max"+qc,"position",Wn,Ut,Ut+ia,Ut+ta,Ut+ra,Ut+na]),QS=function(e,t,n){ms(n);var i=e._gsap;if(i.spacerIsNative)ms(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ol=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=gc.length,o=t.style,a=e.style,l;s--;)l=gc[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Xc]=a[Wc]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=Po(e,pn)+Ft,o[Rr]=Po(e,Bt)+Ft,o[Ut]=a[Wn]=a[Jd]=a[jd]="0",ms(i),a[wr]=a["max"+As]=n[wr],a[Rr]=a["max"+qc]=n[Rr],a[Ut]=n[Ut],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eM=/([A-Z])/g,ms=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(eM,"-$1").toLowerCase())}},to=function(e){for(var t=fo.length,n=e.style,i=[],s=0;s<t;s++)i.push(fo[s],n[fo[s]]);return i.t=e,i},tM=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},po={left:0,top:0},$h=function(e,t,n,i,s,o,a,l,c,u,h,f,d,g){nn(e)&&(e=e(l)),Rn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?co("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Ws(e))d&&(e=Se.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&uo(a,n,i,!0);else{nn(t)&&(t=t(l));var x=(e||"0").split(" "),S,R,A,T;M=_n(t,l)||lt,S=Ei(M)||{},(!S||!S.left&&!S.top)&&Xn(M).display==="none"&&(T=M.style.display,M.style.display="block",S=Ei(M),T?M.style.display=T:M.style.removeProperty("display")),R=co(x[0],S[i.d]),A=co(x[1]||"0",n),e=S[i.p]-c[i.p]-u+R+s-A,a&&uo(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var D=e+n,v=o._isStart;m="scroll"+i.d2,uo(o,D,i,v&&D>20||!v&&(h?Math.max(lt[m],Pn[m]):o.parentNode[m])<=D+1),h&&(c=Ei(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ft))}return d&&M&&(m=Ei(M),d.seek(f),p=Ei(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},nM=/(webkit|moz|length|cssText|inset)/i,Kh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===lt){e._stOrig=s.cssText,a=Xn(e);for(o in a)!+o&&!nM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},sp=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},no=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},Zh=function(e,t){var n=er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=sp(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&Ai()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Se.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Vt(e,"wheel",n.wheelHandler),je.isTouch&&Vt(e,"touchmove",n.wheelHandler),s},je=function(){function r(t,n){ts||r.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hs){this.update=this.refresh=this.kill=si;return}n=Vh(Rn(n)||Ws(n)||n.nodeType?{trigger:n}:n,Qa);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,x=s.once,S=s.snap,R=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,D=s.fastScrollEnd,v=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:Bt,F=!h&&h!==0,U=_n(n.scroller||et),Z=Se.core.getCache(U),L=Lr(U),N=("pinType"in n?n.pinType:$i(U,"pinType")||L&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=F&&n.toggleActions.split(" "),q="markers"in n?n.markers:Qa.markers,$=L?0:parseFloat(Xn(U)["border"+E.p2+As])||0,C=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ne=qS(U,L,E),Y=YS(U,L),K=0,se=0,_e=0,de=er(U,E),Ce,Pe,Ue,Ge,z,He,me,Le,ge,k,Fe,w,y,O,ee,Q,te,pe,ue,ce,be,ke,J,st,we,Ve,ye,ve,We,Je,ot,fe,re,P,ae,oe,Ne,De,it;if(C._startClamp=C._endClamp=!1,C._dir=E,m*=45,C.scroller=U,C.scroll=T?T.time.bind(T):de,Ge=de(),C.vars=n,i=i||n.animation,"refreshPriority"in n&&(Vd=1,n.refreshPriority===-9999&&(sa=C)),Z.tweenScroll=Z.tweenScroll||{top:Zh(U,Bt),left:Zh(U,pn)},C.tweenTo=Ce=Z.tweenScroll[E.p],C.scrubDuration=function(ie){re=Ws(ie)&&ie,re?fe?fe.duration(ie):fe=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return p&&p(C)}}):(fe&&fe.progress(1).kill(),fe=0)},i&&(i.vars.lazy=!1,i._initted&&!C.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),C.animation=i.pause(),i.scrollTrigger=C,C.scrubDuration(h),Je=0,l||(l=i.vars.id)),S&&((!pr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in lt.style&&Se.set(L?[lt,Pn]:U,{scrollBehavior:"auto"}),nt.forEach(function(ie){return nn(ie)&&ie.target===(L?xt.scrollingElement||Pn:U)&&(ie.smooth=!1)}),Ue=nn(S.snapTo)?S.snapTo:S.snapTo==="labels"?KS(i):S.snapTo==="labelsDirectional"?ZS(i):S.directional!==!1?function(ie,Oe){return Yc(S.snapTo)(ie,en()-se<500?0:Oe.direction)}:Se.utils.snap(S.snapTo),P=S.duration||{min:.1,max:2},P=pr(P)?Qs(P.min,P.max):Qs(P,P),ae=Se.delayedCall(S.delay||re/2||.1,function(){var ie=de(),Oe=en()-se<500,Ie=Ce.tween;if((Oe||Math.abs(C.getVelocity())<10)&&!Ie&&!Go&&K!==ie){var Ye=(ie-He)/O,Tt=i&&!F?i.totalProgress():Ye,Qe=Oe?0:(Tt-ot)/(en()-Gs)*1e3||0,gt=Se.utils.clamp(-Ye,1-Ye,Qr(Qe/2)*Qe/.185),Nt=Ye+(S.inertia===!1?0:gt),St,vt,ct=S,Tn=ct.onStart,b=ct.onInterrupt,I=ct.onComplete;if(St=Ue(Nt,C),Ws(St)||(St=Nt),vt=Math.max(0,Math.round(He+St*O)),ie<=me&&ie>=He&&vt!==ie){if(Ie&&!Ie._initted&&Ie.data<=Qr(vt-ie))return;S.inertia===!1&&(gt=St-Ye),Ce(vt,{duration:P(Qr(Math.max(Qr(Nt-Tt),Qr(St-Tt))*.185/Qe/.05||0)),ease:S.ease||"power3",data:Qr(vt-ie),onInterrupt:function(){return ae.restart(!0)&&b&&b(C)},onComplete:function(){C.update(),K=de(),i&&!F&&(fe?fe.resetTo("totalProgress",St,i._tTime/i._tDur):i.progress(St)),Je=ot=i&&!F?i.totalProgress():C.progress,M&&M(C),I&&I(C)}},ie,gt*O,vt-ie-gt*O),Tn&&Tn(C,Ce.tween)}}else C.isActive&&K!==ie&&ae.restart(!0)}).pause()),l&&(mc[l]=C),f=C.trigger=_n(f||d!==!0&&d),it=f&&f._gsap&&f._gsap.stRevert,it&&(it=it(C)),d=d===!0?f:_n(d),Rn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===Wn||(g=!g&&d.parentNode&&d.parentNode.style&&Xn(d.parentNode).display==="flex"?!1:Ut),C.pin=d,Pe=Se.core.getCache(d),Pe.spacer?ee=Pe.pinState:(A&&(A=_n(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=to(A))),Pe.spacer=pe=A||xt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Pe.pinState=ee=to(d)),n.force3D!==!1&&Se.set(d,{force3D:!0}),C.spacer=pe=Pe.spacer,We=Xn(d),st=We[g+E.os2],ce=Se.getProperty(d),be=Se.quickSetter(d,E.a,Ft),Ol(d,pe,We),te=to(d)),q){w=pr(q)?Vh(q,Wh):Wh,k=eo("scroller-start",l,U,E,w,0),Fe=eo("scroller-end",l,U,E,w,0,k),ue=k["offset"+E.op.d2];var at=_n($i(U,"content")||U);Le=this.markerStart=eo("start",l,at,E,w,ue,0,T),ge=this.markerEnd=eo("end",l,at,E,w,ue,0,T),T&&(De=Se.quickSetter([Le,ge],E.a,Ft)),!N&&!(hi.length&&$i(U,"fixedMarkers")===!0)&&($S(L?lt:U),Se.set([k,Fe],{force3D:!0}),Ve=Se.quickSetter(k,E.a,Ft),ve=Se.quickSetter(Fe,E.a,Ft))}if(T){var Te=T.vars.onUpdate,xe=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),Te&&Te.apply(T,xe||[])})}if(C.previous=function(){return Ze[Ze.indexOf(C)-1]},C.next=function(){return Ze[Ze.indexOf(C)+1]},C.revert=function(ie,Oe){if(!Oe)return C.kill(!0);var Ie=ie!==!1||!C.enabled,Ye=Qt;Ie!==C.isReverted&&(Ie&&(oe=Math.max(de(),C.scroll.rec||0),_e=C.progress,Ne=i&&i.progress()),Le&&[Le,ge,k,Fe].forEach(function(Tt){return Tt.style.display=Ie?"none":"block"}),Ie&&(Qt=C,C.update(Ie)),d&&(!R||!C.isActive)&&(Ie?QS(d,pe,ee):Ol(d,pe,Xn(d),we)),Ie||C.update(Ie),Qt=Ye,C.isReverted=Ie)},C.refresh=function(ie,Oe,Ie,Ye){if(!((Qt||!C.enabled)&&!Oe)){if(d&&ie&&Kn){Vt(r,"scrollEnd",ep);return}!hn&&j&&j(C),Qt=C,Ce.tween&&!Ie&&(Ce.tween.kill(),Ce.tween=0),fe&&fe.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Xe){return Xe.vars.immediateRender&&Xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Tt=ne(),Qe=Y(),gt=T?T.duration():ci(U,E),Nt=O<=.01||!O,St=0,vt=Ye||0,ct=pr(Ie)?Ie.end:n.end,Tn=n.endTrigger||f,b=pr(Ie)?Ie.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),I=C.pinnedContainer=n.pinnedContainer&&_n(n.pinnedContainer,C),V=f&&Math.max(0,Ze.indexOf(C))||0,H=V,B,le,Me,Be,Ee,Ae,ze,$e,Et,Ot,ut,sn,ft;for(q&&pr(Ie)&&(sn=Se.getProperty(k,E.p),ft=Se.getProperty(Fe,E.p));H-- >0;)Ae=Ze[H],Ae.end||Ae.refresh(0,1)||(Qt=C),ze=Ae.pin,ze&&(ze===f||ze===d||ze===I)&&!Ae.isReverted&&(Ot||(Ot=[]),Ot.unshift(Ae),Ae.revert(!0,!0)),Ae!==Ze[H]&&(V--,H--);for(nn(b)&&(b=b(C)),b=zh(b,"start",C),He=$h(b,f,Tt,E,de(),Le,k,C,Qe,$,N,gt,T,C._startClamp&&"_startClamp")||(d?-.001:0),nn(ct)&&(ct=ct(C)),Rn(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(Rn(b)?b.split(" ")[0]:"")+ct:(St=co(ct.substr(2),Tt),ct=Rn(b)?b:(T?Se.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,He):He)+St,Tn=f)),ct=zh(ct,"end",C),me=Math.max(He,$h(ct||(Tn?"100% 0":gt),Tn,Tt,E,de()+St,ge,Fe,C,Qe,$,N,gt,T,C._endClamp&&"_endClamp"))||-.001,St=0,H=V;H--;)Ae=Ze[H]||{},ze=Ae.pin,ze&&Ae.start-Ae._pinPush<=He&&!T&&Ae.end>0&&(B=Ae.end-(C._startClamp?Math.max(0,Ae.start):Ae.start),(ze===f&&Ae.start-Ae._pinPush<He||ze===I)&&isNaN(b)&&(St+=B*(1-Ae.progress)),ze===d&&(vt+=B));if(He+=St,me+=St,C._startClamp&&(C._startClamp+=St),C._endClamp&&!hn&&(C._endClamp=me||-.001,me=Math.min(me,ci(U,E))),O=me-He||(He-=.01)&&.001,Nt&&(_e=Se.utils.clamp(0,1,Se.utils.normalize(He,me,oe))),C._pinPush=vt,Le&&St&&(B={},B[E.a]="+="+St,I&&(B[E.p]="-="+de()),Se.set([Le,ge],B)),d&&!(pc&&C.end>=ci(U,E)))B=Xn(d),Be=E===Bt,Me=de(),ke=parseFloat(ce(E.a))+vt,!gt&&me>1&&(ut=(L?xt.scrollingElement||Pn:U).style,ut={style:ut,value:ut["overflow"+E.a.toUpperCase()]},L&&Xn(lt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+E.a.toUpperCase()]="scroll")),Ol(d,pe,B),te=to(d),le=Ei(d,!0),$e=N&&er(U,Be?pn:Bt)(),g?(we=[g+E.os2,O+vt+Ft],we.t=pe,H=g===Ut?Po(d,E)+O+vt:0,H&&(we.push(E.d,H+Ft),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=H+Ft)),ms(we),I&&Ze.forEach(function(Xe){Xe.pin===I&&Xe.vars.pinSpacing!==!1&&(Xe._subPinOffset=!0)}),N&&de(oe)):(H=Po(d,E),H&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=H+Ft)),N&&(Ee={top:le.top+(Be?Me-He:$e)+Ft,left:le.left+(Be?$e:Me-He)+Ft,boxSizing:"border-box",position:"fixed"},Ee[wr]=Ee["max"+As]=Math.ceil(le.width)+Ft,Ee[Rr]=Ee["max"+qc]=Math.ceil(le.height)+Ft,Ee[Wn]=Ee[Wn+ia]=Ee[Wn+ta]=Ee[Wn+ra]=Ee[Wn+na]="0",Ee[Ut]=B[Ut],Ee[Ut+ia]=B[Ut+ia],Ee[Ut+ta]=B[Ut+ta],Ee[Ut+ra]=B[Ut+ra],Ee[Ut+na]=B[Ut+na],Q=tM(ee,Ee,R),hn&&de(0)),i?(Et=i._initted,Ll(1),i.render(i.duration(),!0,!0),J=ce(E.a)-ke+O+vt,ye=Math.abs(O-J)>1,N&&ye&&Q.splice(Q.length-2,2),i.render(0,!0,!0),Et||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ll(0)):J=O,ut&&(ut.value?ut.style["overflow"+E.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+E.a));else if(f&&de()&&!T)for(le=f.parentNode;le&&le!==lt;)le._pinOffset&&(He-=le._pinOffset,me-=le._pinOffset),le=le.parentNode;Ot&&Ot.forEach(function(Xe){return Xe.revert(!1,!0)}),C.start=He,C.end=me,Ge=z=hn?oe:de(),!T&&!hn&&(Ge<oe&&de(oe),C.scroll.rec=0),C.revert(!1,!0),se=en(),ae&&(K=-1,ae.restart(!0)),Qt=0,i&&F&&(i._initted||Ne)&&i.progress()!==Ne&&i.progress(Ne||0,!0).render(i.time(),!0,!0),(Nt||_e!==C.progress||T||_||i&&!i._initted)&&(i&&!F&&(i._initted||_e||i.vars.immediateRender!==!1)&&i.totalProgress(T&&He<-.001&&!_e?Se.utils.normalize(He,me,0):_e,!0),C.progress=Nt||(Ge-He)/O===_e?0:_e),d&&g&&(pe._pinOffset=Math.round(C.progress*J)),fe&&fe.invalidate(),isNaN(sn)||(sn-=Se.getProperty(k,E.p),ft-=Se.getProperty(Fe,E.p),no(k,E,sn),no(Le,E,sn-(Ye||0)),no(Fe,E,ft),no(ge,E,ft-(Ye||0))),Nt&&!hn&&C.update(),u&&!hn&&!y&&(y=!0,u(C),y=!1)}},C.getVelocity=function(){return(de()-z)/(en()-Gs)*1e3||0},C.endAnimation=function(){Bs(C.callbackAnimation),i&&(fe?fe.progress(1):i.paused()?F||Bs(i,C.direction<0,1):Bs(i,i.reversed()))},C.labelToScroll=function(ie){return i&&i.labels&&(He||C.refresh()||He)+i.labels[ie]/i.duration()*O||0},C.getTrailing=function(ie){var Oe=Ze.indexOf(C),Ie=C.direction>0?Ze.slice(0,Oe).reverse():Ze.slice(Oe+1);return(Rn(ie)?Ie.filter(function(Ye){return Ye.vars.preventOverlaps===ie}):Ie).filter(function(Ye){return C.direction>0?Ye.end<=He:Ye.start>=me})},C.update=function(ie,Oe,Ie){if(!(T&&!Ie&&!ie)){var Ye=hn===!0?oe:C.scroll(),Tt=ie?0:(Ye-He)/O,Qe=Tt<0?0:Tt>1?1:Tt||0,gt=C.progress,Nt,St,vt,ct,Tn,b,I,V;if(Oe&&(z=Ge,Ge=T?de():Ye,S&&(ot=Je,Je=i&&!F?i.totalProgress():Qe)),m&&d&&!Qt&&!Ka&&Kn&&(!Qe&&He<Ye+(Ye-z)/(en()-Gs)*m?Qe=1e-4:Qe===1&&me>Ye+(Ye-z)/(en()-Gs)*m&&(Qe=.9999)),Qe!==gt&&C.enabled){if(Nt=C.isActive=!!Qe&&Qe<1,St=!!gt&&gt<1,b=Nt!==St,Tn=b||!!Qe!=!!gt,C.direction=Qe>gt?1:-1,C.progress=Qe,Tn&&!Qt&&(vt=Qe&&!gt?0:Qe===1?1:gt===1?2:3,F&&(ct=!b&&W[vt+1]!=="none"&&W[vt+1]||W[vt],V=i&&(ct==="complete"||ct==="reset"||ct in i))),v&&(b||V)&&(V||h||!i)&&(nn(v)?v(C):C.getTrailing(v).forEach(function(Me){return Me.endAnimation()})),F||(fe&&!Qt&&!Ka?(fe._dp._time-fe._start!==fe._time&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",Qe,i._tTime/i._tDur):(fe.vars.totalProgress=Qe,fe.invalidate().restart())):i&&i.totalProgress(Qe,!!(Qt&&(se||ie)))),d){if(ie&&g&&(pe.style[g+E.os2]=st),!N)be(Vs(ke+J*Qe));else if(Tn){if(I=!ie&&Qe>gt&&me+1>Ye&&Ye+1>=ci(U,E),R)if(!ie&&(Nt||I)){var H=Ei(d,!0),B=Ye-He;Kh(d,lt,H.top+(E===Bt?B:0)+Ft,H.left+(E===Bt?0:B)+Ft)}else Kh(d,pe);ms(Nt||I?Q:te),ye&&Qe<1&&Nt||be(ke+(Qe===1&&!I?J:0))}}S&&!Ce.tween&&!Qt&&!Ka&&ae.restart(!0),a&&(b||x&&Qe&&(Qe<1||!Dl))&&ma(a.targets).forEach(function(Me){return Me.classList[Nt||x?"add":"remove"](a.className)}),o&&!F&&!ie&&o(C),Tn&&!Qt?(F&&(V&&(ct==="complete"?i.pause().totalProgress(1):ct==="reset"?i.restart(!0).pause():ct==="restart"?i.restart(!0):i[ct]()),o&&o(C)),(b||!Dl)&&(c&&b&&Il(C,c),G[vt]&&Il(C,G[vt]),x&&(Qe===1?C.kill(!1,1):G[vt]=0),b||(vt=Qe===1?1:3,G[vt]&&Il(C,G[vt]))),D&&!Nt&&Math.abs(C.getVelocity())>(Ws(D)?D:2500)&&(Bs(C.callbackAnimation),fe?fe.progress(1):Bs(i,ct==="reverse"?1:!Qe,1))):F&&o&&!Qt&&o(C)}if(ve){var le=T?Ye/T.duration()*(T._caScrollDist||0):Ye;Ve(le+(k._isFlipped?1:0)),ve(le)}De&&De(-Ye/T.duration()*(T._caScrollDist||0))}},C.enable=function(ie,Oe){C.enabled||(C.enabled=!0,Vt(U,"resize",Xs),L||Vt(U,"scroll",es),j&&Vt(r,"refreshInit",j),ie!==!1&&(C.progress=_e=0,Ge=z=K=de()),Oe!==!1&&C.refresh())},C.getTween=function(ie){return ie&&Ce?Ce.tween:fe},C.setPositions=function(ie,Oe,Ie,Ye){if(T){var Tt=T.scrollTrigger,Qe=T.duration(),gt=Tt.end-Tt.start;ie=Tt.start+gt*ie/Qe,Oe=Tt.start+gt*Oe/Qe}C.refresh(!1,!1,{start:kh(ie,Ie&&!!C._startClamp),end:kh(Oe,Ie&&!!C._endClamp)},Ye),C.update()},C.adjustPinSpacing=function(ie){if(we&&ie){var Oe=we.indexOf(E.d)+1;we[Oe]=parseFloat(we[Oe])+ie+Ft,we[1]=parseFloat(we[1])+ie+Ft,ms(we)}},C.disable=function(ie,Oe){if(ie!==!1&&C.revert(!0,!0),C.enabled&&(C.enabled=C.isActive=!1,Oe||fe&&fe.pause(),oe=0,Pe&&(Pe.uncache=1),j&&Ht(r,"refreshInit",j),ae&&(ae.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!L)){for(var Ie=Ze.length;Ie--;)if(Ze[Ie].scroller===U&&Ze[Ie]!==C)return;Ht(U,"resize",Xs),L||Ht(U,"scroll",es)}},C.kill=function(ie,Oe){C.disable(ie,Oe),fe&&!Oe&&fe.kill(),l&&delete mc[l];var Ie=Ze.indexOf(C);Ie>=0&&Ze.splice(Ie,1),Ie===un&&ho>0&&un--,Ie=0,Ze.forEach(function(Ye){return Ye.scroller===C.scroller&&(Ie=1)}),Ie||hn||(C.scroll.rec=0),i&&(i.scrollTrigger=null,ie&&i.revert({kill:!1}),Oe||i.kill()),Le&&[Le,ge,k,Fe].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),sa===C&&(sa=0),d&&(Pe&&(Pe.uncache=1),Ie=0,Ze.forEach(function(Ye){return Ye.pin===d&&Ie++}),Ie||(Pe.spacer=0)),n.onKill&&n.onKill(C)},Ze.push(C),C.enable(!1,!1),it&&it(C),i&&i.add&&!O){var Re=C.update;C.update=function(){C.update=Re,nt.cache++,He||me||C.refresh()},Se.delayedCall(.01,C.update),O=.01,He=me=0}else C.refresh();d&&JS()},r.register=function(n){return ts||(Se=n||$d(),Yd()&&window.document&&r.enable(),ts=Hs),ts},r.defaults=function(n){if(n)for(var i in n)Qa[i]=n[i];return Qa},r.disable=function(n,i){Hs=0,Ze.forEach(function(o){return o[i?"kill":"disable"](n)}),Ht(et,"wheel",es),Ht(xt,"scroll",es),clearInterval($a),Ht(xt,"touchcancel",si),Ht(lt,"touchstart",si),ja(Ht,xt,"pointerdown,touchstart,mousedown",Gh),ja(Ht,xt,"pointerup,touchend,mouseup",Hh),Co.kill(),Za(Ht);for(var s=0;s<nt.length;s+=3)Ja(Ht,nt[s],nt[s+1]),Ja(Ht,nt[s],nt[s+2])},r.enable=function(){if(et=window,xt=document,Pn=xt.documentElement,lt=xt.body,Se&&(ma=Se.utils.toArray,Qs=Se.utils.clamp,dc=Se.core.context||si,Ll=Se.core.suppressOverwrites||si,Hc=et.history.scrollRestoration||"auto",_c=et.pageYOffset||0,Se.core.globals("ScrollTrigger",r),lt)){Hs=1,ps=document.createElement("div"),ps.style.height="100vh",ps.style.position="absolute",rp(),XS(),Lt.register(Se),r.isTouch=Lt.isTouch,Ni=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fc=Lt.isTouch===1,Vt(et,"wheel",es),Gc=[et,xt,Pn,lt],Se.matchMedia?(r.matchMedia=function(c){var u=Se.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Se.addEventListener("matchMediaInit",function(){np(),$c()}),Se.addEventListener("matchMediaRevert",function(){return tp()}),Se.addEventListener("matchMedia",function(){vr(0,1),Ur("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return Nl(),Nl})):console.warn("Requires GSAP 3.11.0 or later"),Nl(),Vt(xt,"scroll",es);var n=lt.hasAttribute("style"),i=lt.style,s=i.borderTopStyle,o=Se.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ei(lt),Bt.m=Math.round(a.top+Bt.sc())||0,pn.m=Math.round(a.left+pn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(lt.setAttribute("style",""),lt.removeAttribute("style")),$a=setInterval(Xh,250),Se.delayedCall(.5,function(){return Ka=0}),Vt(xt,"touchcancel",si),Vt(lt,"touchstart",si),ja(Vt,xt,"pointerdown,touchstart,mousedown",Gh),ja(Vt,xt,"pointerup,touchend,mouseup",Hh),hc=Se.utils.checkPrefix("transform"),fo.push(hc),ts=en(),Co=Se.delayedCall(.2,vr).pause(),ns=[xt,"visibilitychange",function(){var c=et.innerWidth,u=et.innerHeight;xt.hidden?(Fh=c,Bh=u):(Fh!==c||Bh!==u)&&Xs()},xt,"DOMContentLoaded",vr,et,"load",vr,et,"resize",Xs],Za(Vt),Ze.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)Ja(Ht,nt[l],nt[l+1]),Ja(Ht,nt[l],nt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Dl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval($a)||($a=i)&&setInterval(Xh,i),"ignoreMobileResize"in n&&(fc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Za(Ht)||Za(Vt,n.autoRefreshEvents||"none"),Wd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=_n(n),o=nt.indexOf(s),a=Lr(s);~o&&nt.splice(o,a?6:2),i&&(a?hi.unshift(et,i,lt,i,Pn,i):hi.unshift(s,i))},r.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Rn(n)?_n(n):n).getBoundingClientRect(),a=o[s?wr:Rr]*i||0;return s?o.right-a>0&&o.left+a<et.innerWidth:o.bottom-a>0&&o.top+a<et.innerHeight},r.positionInViewport=function(n,i,s){Rn(n)&&(n=_n(n));var o=n.getBoundingClientRect(),a=o[s?wr:Rr],l=i==null?a/2:i in Lo?Lo[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/et.innerWidth:(o.top+l)/et.innerHeight},r.killAll=function(n){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Dr.killAll||[];Dr={},i.forEach(function(s){return s()})}},r}();je.version="3.14.2";je.saveStyles=function(r){return r?ma(r).forEach(function(e){if(e&&e.style){var t=wn.indexOf(e);t>=0&&wn.splice(t,5),wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),dc())}}):wn};je.revert=function(r,e){return $c(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?Xs(!0):(ts||je.register())&&vr(!0)};je.update=function(r){return++nt.cache&&Ai(r===!0?2:0)};je.clearScrollMemory=ip;je.maxScroll=function(r,e){return ci(r,e?pn:Bt)};je.getScrollFunc=function(r,e){return er(_n(r),e?pn:Bt)};je.getById=function(r){return mc[r]};je.getAll=function(){return Ze.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Kn};je.snapDirectional=Yc;je.addEventListener=function(r,e){var t=Dr[r]||(Dr[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=Dr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Se.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return nn(s)&&(s=s(),Vt(je,"refresh",function(){return s=e.batchMax()})),ma(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(je.create(c))}),t};var jh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Fl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===Pn&&r(lt,t)},io={auto:1,scroll:1},iM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Se.core.getCache(s),a=en(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==lt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(io[(l=Xn(s)).overflowY]||io[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Lr(s)&&(io[(l=Xn(s)).overflowY]||io[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ap=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&iM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Vt(xt,Lt.eventTypes[0],Qh,!1,!0)},onDisable:function(){return Ht(xt,Lt.eventTypes[0],Qh,!0)}})},rM=/(input|label|select|textarea)/i,Jh,Qh=function(e){var t=rM.test(e.target.tagName);(t||Jh)&&(e._gsapAllow=!0,Jh=t)},sM=function(e){pr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=_n(e.target)||Pn,u=Se.core.globals().ScrollSmoother,h=u&&u.get(),f=Ni&&(e.content&&_n(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=er(c,Bt),g=er(c,pn),_=1,m=(Lt.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,p=0,M=nn(i)?function(){return i(a)}:function(){return i||2.8},x,S,R=ap(c,e.type,!0,s),A=function(){return S=!1},T=si,D=si,v=function(){l=ci(c,Bt),D=Qs(Ni?1:0,l),n&&(T=Qs(0,ci(c,pn))),x=Cr},E=function(){f._gsap.y=Vs(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},F=function(){if(S){requestAnimationFrame(A);var q=Vs(a.deltaY/2),$=D(d.v-q);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var C=Vs((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",f._gsap.y=C+"px",d.cacheID=nt.cache,Ai()}return!0}d.offset&&E(),S=!0},U,Z,L,N,G=function(){v(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Se.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return Ni&&W.type==="touchmove"&&F()||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){S=!1;var W=_;_=Vs((et.visualViewport&&et.visualViewport.scale||1)/m),U.pause(),W!==_&&Fl(c,_>1.01?!0:n?!1:"x"),Z=g(),L=d(),v(),x=Cr},e.onRelease=e.onGestureStart=function(W,q){if(d.offset&&E(),!q)N.restart(!0);else{nt.cache++;var $=M(),C,j;n&&(C=g(),j=C+$*.05*-W.velocityX/.227,$*=jh(g,C,j,ci(c,pn)),U.vars.scrollX=T(j)),C=d(),j=C+$*.05*-W.velocityY/.227,$*=jh(d,C,j,ci(c,Bt)),U.vars.scrollY=D(j),U.invalidate().duration($).play(.01),(Ni&&U.vars.scrollY>=l||C>=l-1)&&Se.to({},{onUpdate:G,duration:$})}o&&o(W)},e.onWheel=function(){U._ts&&U.pause(),en()-p>1e3&&(x=0,p=en())},e.onChange=function(W,q,$,C,j){if(Cr!==x&&v(),q&&n&&g(T(C[2]===q?Z+(W.startX-W.x):g()+q-C[1])),$){d.offset&&E();var ne=j[2]===$,Y=ne?L+W.startY-W.y:d()+$-j[1],K=D(Y);ne&&Y!==K&&(L+=K-Y),d(K)}($||q)&&Ai()},e.onEnable=function(){Fl(c,n?!1:"x"),je.addEventListener("refresh",G),Vt(et,"resize",G),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){Fl(c,!0),Ht(et,"resize",G),je.removeEventListener("refresh",G),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Lt(e),a.iOS=Ni,Ni&&!d()&&d(1),Ni&&Se.ticker.add(si),N=a._dc,U=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sp(d,d(),function(){return U.pause()})},onUpdate:Ai,onComplete:N.vars.onComplete}),a};je.sort=function(r){if(nn(r))return Ze.sort(r);var e=et.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+et.innerHeight}),Ze.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new Lt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return cn;if(r===!0&&cn)return cn.enable();if(r===!1){cn&&cn.kill(),cn=r;return}var e=r instanceof Lt?r:sM(r);return cn&&cn.target===e.target&&cn.kill(),Lr(e.target)&&(cn=e),e};je.core={_getVelocityProp:uc,_inputObserver:ap,_scrollers:nt,_proxies:hi,bridge:{ss:function(){Kn||Ur("scrollStart"),Kn=en()},ref:function(){return Qt}}};$d()&&Se.registerPlugin(je);Nd.registerPlugin(je);class aM{constructor(e,t,n={}){qe(this,"scene");qe(this,"audio");qe(this,"callbacks");qe(this,"currentState","boot");qe(this,"progress",0);this.scene=e,this.audio=t,this.callbacks=n,this.initScrollTrigger()}initScrollTrigger(){je.create({trigger:"#scroll-container",start:"top top",end:"bottom bottom",scrub:.5,onUpdate:e=>{var t,n;this.progress=e.progress,this.updateState(this.progress),(n=(t=this.callbacks).onProgress)==null||n.call(t,this.progress)}})}updateState(e){var i,s;let t,n;if(e<.1)t="boot",n={progress:e,pulseAmount:0,chaosAmount:0,patternAmount:0};else if(e<.4){t="pulse";const o=(e-.1)/.3;n={progress:e,pulseAmount:o,chaosAmount:0,patternAmount:0}}else if(e<.75){t="collision";const o=(e-.4)/.35;n={progress:e,pulseAmount:1,chaosAmount:o,patternAmount:0}}else{t="pattern";const o=(e-.75)/.25;n={progress:e,pulseAmount:1-o*.5,chaosAmount:1-o,patternAmount:o}}this.scene.setState(n),this.audio&&this.audio.setProgress(e),t!==this.currentState&&(this.currentState=t,(s=(i=this.callbacks).onStateChange)==null||s.call(i,t,e),this.onStateChange(t)),this.updateUI(e,t)}onStateChange(e){console.log(`[LAB] State: ${e}`)}updateUI(e,t){}getProgress(){return this.progress}getState(){return this.currentState}dispose(){je.killAll()}}class oM{constructor(){qe(this,"ctx",null);qe(this,"isEnabled",!1);qe(this,"isInitialized",!1);qe(this,"subOsc",null);qe(this,"subOsc2",null);qe(this,"noiseSource",null);qe(this,"crackleSource",null);qe(this,"noiseBuffer",null);qe(this,"crackleBuffer",null);qe(this,"filter",null);qe(this,"highpassFilter",null);qe(this,"subGain",null);qe(this,"noiseGain",null);qe(this,"crackleGain",null);qe(this,"masterGain",null);qe(this,"compressor",null);qe(this,"progress",0);qe(this,"targetFilterFreq",200);qe(this,"currentFilterFreq",200)}async init(){if(this.isInitialized)return;this.ctx=new AudioContext;const e=this.ctx.sampleRate*2;this.noiseBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const t=this.noiseBuffer.getChannelData(0);let n=0;for(let s=0;s<e;s++){const o=Math.random()*2-1;n=(n+.02*o)/1.02,t[s]=n*3.5}this.crackleBuffer=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const i=this.crackleBuffer.getChannelData(0);for(let s=0;s<e;s++)if(Math.random()<.003){const o=Math.random()*.8+.2,a=Math.floor(Math.random()*200+50);for(let l=0;l<a&&s+l<e;l++)i[s+l]=o*(1-l/a)*(Math.random()*2-1)}this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-20,this.compressor.knee.value=20,this.compressor.ratio.value=8,this.compressor.attack.value=.002,this.compressor.release.value=.2,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=200,this.filter.Q.value=2,this.highpassFilter=this.ctx.createBiquadFilter(),this.highpassFilter.type="highpass",this.highpassFilter.frequency.value=800,this.highpassFilter.Q.value=.5,this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.value=38,this.subOsc2=this.ctx.createOscillator(),this.subOsc2.type="sine",this.subOsc2.frequency.value=40.5,this.subGain=this.ctx.createGain(),this.subGain.gain.value=.12,this.subOsc.connect(this.subGain),this.subOsc2.connect(this.subGain),this.subGain.connect(this.filter),this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.value=.025,this.crackleGain=this.ctx.createGain(),this.crackleGain.gain.value=.15,this.filter.connect(this.compressor),this.highpassFilter.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.subOsc.start(),this.subOsc2.start(),this.isInitialized=!0}startNoise(){if(!(!this.ctx||!this.noiseBuffer||!this.noiseGain||!this.filter)){if(this.noiseSource)try{this.noiseSource.stop()}catch{}this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=this.noiseBuffer,this.noiseSource.loop=!0,this.noiseSource.connect(this.noiseGain),this.noiseGain.connect(this.filter),this.noiseSource.start()}}startCrackle(){if(!(!this.ctx||!this.crackleBuffer||!this.crackleGain||!this.highpassFilter)){if(this.crackleSource)try{this.crackleSource.stop()}catch{}this.crackleSource=this.ctx.createBufferSource(),this.crackleSource.buffer=this.crackleBuffer,this.crackleSource.loop=!0,this.crackleSource.playbackRate.value=.8+Math.random()*.4,this.crackleSource.connect(this.crackleGain),this.crackleGain.connect(this.highpassFilter),this.crackleSource.start()}}async enable(){var e;await this.init(),this.isEnabled=!0,((e=this.ctx)==null?void 0:e.state)==="suspended"&&await this.ctx.resume(),this.startNoise(),this.startCrackle(),this.masterGain&&this.masterGain.gain.setTargetAtTime(.6,this.ctx.currentTime,.3)}disable(){this.isEnabled=!1,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(0,this.ctx.currentTime,.2)}toggle(){return this.isEnabled?this.disable():this.enable(),this.isEnabled}getEnabled(){return this.isEnabled}setProgress(e){if(this.progress=e,!(!this.isEnabled||!this.ctx)){if(this.targetFilterFreq=150+e*2500,this.noiseGain){const t=.02+e*.12;this.noiseGain.gain.setTargetAtTime(t,this.ctx.currentTime,.1)}if(this.crackleGain){const t=.1+e*.4;this.crackleGain.gain.setTargetAtTime(t,this.ctx.currentTime,.1)}if(this.crackleSource&&Math.random()<.02&&this.crackleSource.playbackRate.setTargetAtTime(.6+Math.random()*.8+e*.5,this.ctx.currentTime,.3),this.subOsc&&this.subOsc2){const t=Math.sin(this.ctx.currentTime*.1)*e*3;this.subOsc.frequency.setTargetAtTime(36+t+e*8,this.ctx.currentTime,.2),this.subOsc2.frequency.setTargetAtTime(40+t*.7+e*6,this.ctx.currentTime,.2)}if(this.subGain){const t=.1+e*.15;this.subGain.gain.setTargetAtTime(t,this.ctx.currentTime,.1)}}}update(){if(!this.isEnabled||!this.filter||!this.ctx)return;const e=(Math.random()-.5)*this.progress*200;this.currentFilterFreq+=(this.targetFilterFreq-this.currentFilterFreq)*.05,this.filter.frequency.setTargetAtTime(this.currentFilterFreq+e,this.ctx.currentTime,.05)}dispose(){if(this.subOsc&&(this.subOsc.stop(),this.subOsc.disconnect()),this.subOsc2&&(this.subOsc2.stop(),this.subOsc2.disconnect()),this.noiseSource){try{this.noiseSource.stop()}catch{}this.noiseSource.disconnect()}if(this.crackleSource){try{this.crackleSource.stop()}catch{}this.crackleSource.disconnect()}this.ctx&&this.ctx.close()}}const ef="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>[]{}/_";function lM(r,e={}){const{staggerDelay:t=25,scrambleIterations:n=4}=e,s=(r.getAttribute("data-text")||r.textContent||"").split("");r.textContent="",r.style.visibility="visible",s.forEach((o,a)=>{const l=document.createElement("span");l.style.opacity="0",l.textContent=o===" "?" ":"_",r.appendChild(l);const c=a*t;setTimeout(()=>{if(l.style.opacity="1",o===" "||o===`
`){l.textContent=o===" "?" ":o;return}let u=0;const h=setInterval(()=>{u<n?(l.textContent=ef[Math.floor(Math.random()*ef.length)],u++):(l.textContent=o,clearInterval(h))},40)},c)})}function cM(){const r=new MutationObserver(e=>{e.forEach(t=>{if(t.type==="attributes"&&t.attributeName==="class"){const n=t.target;n.classList.contains("active")&&tf(n)}})});document.querySelectorAll(".content-section").forEach(e=>{r.observe(e,{attributes:!0,attributeFilter:["class"]})}),setTimeout(()=>{document.querySelectorAll(".content-section.active").forEach(e=>{tf(e)})},100)}function tf(r){r.querySelectorAll("[data-scramble]").forEach((t,n)=>{const i=t;i.getAttribute("data-scrambled")!=="true"&&(i.setAttribute("data-scrambled","true"),setTimeout(()=>{lM(i,{staggerDelay:i.hasAttribute("data-scramble-fast")?15:25,scrambleIterations:i.hasAttribute("data-scramble-fast")?2:5})},n*200))})}class uM{constructor(){qe(this,"scene");qe(this,"scroll");qe(this,"audio");qe(this,"animationId",0);qe(this,"soundToggle");qe(this,"scrollProgress");qe(this,"scrollHint");qe(this,"sectionCounter");qe(this,"sectionLabels");qe(this,"endState");qe(this,"contentSections");const e=document.getElementById("canvas");if(!e)throw new Error("Canvas not found");this.scene=new Ex(e),this.audio=new oM,this.scroll=new aM(this.scene,this.audio,{onStateChange:this.onStateChange.bind(this),onProgress:this.onProgress.bind(this)}),this.soundToggle=document.getElementById("sound-toggle"),this.scrollProgress=document.querySelector(".scroll-progress"),this.scrollHint=document.querySelector(".scroll-hint"),this.sectionCounter=document.querySelector(".section-current"),this.sectionLabels=document.querySelectorAll(".section-label"),this.endState=document.querySelector(".end-state"),this.contentSections=document.querySelectorAll(".content-section"),this.initSoundToggle(),this.animate(),cM(),document.addEventListener("click",t=>{t.target.closest("a, button, .sound-btn")||this.scene.spawnBlobAt(t.clientX,t.clientY)}),console.log("[LAB] Initialized")}initSoundToggle(){this.soundToggle&&this.soundToggle.addEventListener("click",async()=>{const e=await this.toggleSound();this.updateSoundToggleUI(e)})}async toggleSound(){return this.audio.toggle()&&await this.audio.enable(),this.audio.getEnabled()}updateSoundToggleUI(e){this.soundToggle&&(e?this.soundToggle.classList.add("active"):this.soundToggle.classList.remove("active"))}onStateChange(e,t){console.log(`[LAB] State: ${e} at ${(t*100).toFixed(1)}%`)}onProgress(e){this.audio.update(),this.updateUI(e)}updateUI(e){this.scrollProgress&&(this.scrollProgress.style.height=`${e*100}%`),this.scrollHint&&(e>.05?this.scrollHint.classList.add("hidden"):this.scrollHint.classList.remove("hidden"));const t=Math.min(4,Math.floor(e*5));this.sectionCounter&&(this.sectionCounter.textContent=t.toString().padStart(2,"0")),this.sectionLabels.forEach((n,i)=>{const s=i/5,o=(i+1)/5;e>=s&&e<o?n.classList.add("active"):n.classList.remove("active")}),this.endState&&(e>.92?this.endState.classList.add("visible"):this.endState.classList.remove("visible")),this.contentSections.forEach((n,i)=>{const s=i/5-.1,o=(i+1)/5+.1;e>=s&&e<o?n.classList.add("active"):n.classList.remove("active")})}animate(){this.animationId=requestAnimationFrame(this.animate.bind(this)),this.scene.render()}dispose(){cancelAnimationFrame(this.animationId),this.scene.dispose(),this.scroll.dispose(),this.audio.dispose()}}document.addEventListener("DOMContentLoaded",()=>{new uM});
