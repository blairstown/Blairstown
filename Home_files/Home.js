// Created by iWeb 3.0.3 local-build-20131213

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,372),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,277,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(282,-5,10,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(282,5,10,372),url:'Home_files/stroke_4.png'},{rect:new IWRect(282,377,10,11),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,377,277,11),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,377,10,11),url:'Home_files/stroke_7.png'}],new IWSize(287,383)),stroke_1:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
