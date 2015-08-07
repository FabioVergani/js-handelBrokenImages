(function(global){
 //⌈
 var scope=global, page=scope.document;
 //⌋⌈
 var fiximages=function(){//console.log('page loaded!');
	for(var s='',p='title',o,m=page.images,l=m.length+0,i=0;i<l;i++){
		o=m[i];
		if(o.complete && o.naturalWidth>0){
			if(o.hasAttribute(p)){s=o[p].trim();if(s!==''){s=('\u200B\xA0'+s);};};// ZWS+NBS (xA0=\u00A0)
			o.setAttribute(p,s);
		}else{
			o.classList.add('broken');
		};
	};
	fiximages=null;
	scope.removeEventListener('load',fiximages);
 };
 scope.addEventListener('load',fiximages);
 //⌋
 //console.clear();
})(window);
//∴
