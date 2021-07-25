(self.webpackChunknext_starter=self.webpackChunknext_starter||[]).push([[179],{44943:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Button.stories.tsx":38901};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=44943},60973:module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=60973,module.exports=webpackEmptyContext},42126:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(60973),__webpack_require__(44943)],module,!1)},26663:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{parameters:()=>parameters});__webpack_require__(47941),__webpack_require__(82526),__webpack_require__(57327),__webpack_require__(38880),__webpack_require__(89554),__webpack_require__(54747),__webpack_require__(49337),__webpack_require__(33321),__webpack_require__(69070);var client_api=__webpack_require__(32545),types=__webpack_require__(18672),esm=__webpack_require__(59400),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.kg.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,client_api.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,client_api.HZ)(loader,!1)}));case"parameters":return(0,client_api.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,client_api.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,client_api._C)(enhancer)}));case"render":return(0,types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,client_api.h1)(v,!1);default:return console.log(key+" was not supported :( !")}}))},76986:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__(3012)},38901:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,default:()=>Button_stories});__webpack_require__(19601),__webpack_require__(24812);var classnames=__webpack_require__(94184),classnames_default=__webpack_require__.n(classnames),Button_module=__webpack_require__(34165),Button_module_default=__webpack_require__.n(Button_module),jsx_runtime=__webpack_require__(85893),Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,backgroundColor=_ref.backgroundColor,label=_ref.label;return(0,jsx_runtime.jsx)("button",{type:"button",className:classnames_default()(Button_module_default().button,Button_module_default()["button--"+size],Button_module_default()["button--"+(primary?"primary":"secondary")]),style:{backgroundColor},children:label})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Example/Button",component:Button,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return(0,jsx_runtime.jsx)(Button,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},53721:(module,exports,__webpack_require__)=>{(exports=__webpack_require__(23645)(!1)).push([module.id,'.GRvxtEFVG2B54IhqW-RKt{border:0;border-radius:3em;cursor:pointer;display:inline-block;font-family:"Nunito Sans","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;line-height:1}._1RwZ1Ruy5KAJySJZ42JJAy{background-color:#1ea7fd;color:#fff}.T5yzy7w_e5IYQE4fo2tP{background-color:transparent;box-shadow:rgba(0,0,0,.15) 0 0 0 1px inset;color:#333}._5qFPhSHcHaMABEU8QI5IE{font-size:12px;padding:10px 16px}._1E78M2_KSqnFTKgGu9AaWl{font-size:14px;padding:11px 20px}._30ZVAo3hxaqmfuGgsfvZCL{font-size:16px;padding:12px 24px}',""]),exports.locals={button:"GRvxtEFVG2B54IhqW-RKt","button--primary":"_1RwZ1Ruy5KAJySJZ42JJAy","button--secondary":"T5yzy7w_e5IYQE4fo2tP","button--small":"_5qFPhSHcHaMABEU8QI5IE","button--medium":"_1E78M2_KSqnFTKgGu9AaWl","button--large":"_30ZVAo3hxaqmfuGgsfvZCL"},module.exports=exports},34165:(module,__unused_webpack_exports,__webpack_require__)=>{var api=__webpack_require__(93379),content=__webpack_require__(53721);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.id,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},21177:()=>{},24654:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[89],(()=>(__webpack_exec__(25622),__webpack_exec__(5122),__webpack_exec__(76986),__webpack_exec__(45158),__webpack_exec__(4379),__webpack_exec__(59746),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(64049),__webpack_exec__(21424),__webpack_exec__(57445),__webpack_exec__(76871),__webpack_exec__(26663),__webpack_exec__(42126))));__webpack_require__.O()}]);
//# sourceMappingURL=main.9c84e6ce.iframe.bundle.js.map