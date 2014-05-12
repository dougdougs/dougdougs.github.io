/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg-img',
            type:'image',
            rect:['0px','-15px','667px','444px','auto','auto'],
            overflow:'hidden',
            fill:["rgba(0,0,0,0)",im+"bg-img.jpg",'0px','0px']
         },
         {
            id:'corn-flakes',
            type:'image',
            rect:['0px','0','666px','444px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"corn-flakes.jpg",'0px','0px']
         },
         {
            id:'LOGO-PADRA-BRANCO',
            type:'image',
            rect:['-22px','40px','756px','444px','auto','auto'],
            fill:["rgba(0,0,0,0)",'LOGO-PADRA-BRANCO.png','0px','0px']
         },
         {
            id:'LOGO-PADRA-BRANCOCopy',
            type:'image',
            rect:['-176px','91px','756px','444px','auto','auto'],
            fill:["rgba(0,0,0,0)",'LOGO-PADRA-BRANCO.png','0px','0px']
         },
         {
            id:'logo-laranja',
            type:'image',
            rect:['145px','107px','274px','199px','auto','auto'],
            fill:["rgba(0,0,0,0)",'logo-laranja.png','0px','0px']
         },
         {
            id:'domingo-dia-churrasco',
            type:'image',
            rect:['53px','176px','483px','93px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"domingo-dia-churrasco.png",'0px','0px']
         },
         {
            id:'a-partir-29-90',
            type:'image',
            rect:['22px','269px','464px','73px','auto','auto'],
            opacity:0,
            fill:["rgba(0,0,0,0)",im+"a-partir-29-90.png",'0px','0px']
         },
         {
            id:'cafe-pede-leite',
            type:'image',
            rect:['22px','176','453px','94px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"cafe-pede-leite.png",'0px','0px']
         },
         {
            id:'a-partir-3-90',
            type:'image',
            rect:['32px','293px','407px','89px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"a-partir-3-90.png",'0px','0px']
         },
         {
            id:'molde-laranja',
            type:'image',
            rect:['0','0','550px','400px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"molde-laranja.png",'0px','0px']
         },
         {
            id:'molde-azul',
            type:'image',
            rect:['0px','0px','550px','400px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"molde-azul.png",'0px','0px']
         },
         {
            id:'logo-branco2',
            type:'image',
            rect:['453px','10px','83px','60px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-branco.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_molde-azul}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_LOGO-PADRA-BRANCOCopy}": [
            ["style", "top", '91px'],
            ["style", "height", '444px'],
            ["style", "opacity", '0'],
            ["style", "left", '-176px'],
            ["style", "width", '756px']
         ],
         "${_cafe-pede-leite}": [
            ["style", "left", '97px'],
            ["style", "opacity", '0']
         ],
         "${_LOGO-PADRA-BRANCO}": [
            ["style", "top", '40px'],
            ["style", "height", '444px'],
            ["style", "opacity", '0'],
            ["style", "left", '-22px'],
            ["style", "width", '756px']
         ],
         "${_bg-img}": [
            ["style", "top", '-15px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '444px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '667px']
         ],
         "${_logo-laranja}": [
            ["style", "top", '164px'],
            ["style", "height", '199px'],
            ["style", "opacity", '0'],
            ["style", "left", '145px'],
            ["style", "width", '274px']
         ],
         "${_a-partir-29-90}": [
            ["style", "top", '269px'],
            ["style", "opacity", '0'],
            ["style", "left", '22px']
         ],
         "${_corn-flakes}": [
            ["subproperty", "filter.blur", '0px'],
            ["style", "height", '444px'],
            ["style", "opacity", '0'],
            ["style", "left", '-10px'],
            ["style", "width", '666px']
         ],
         "${_logo-branco2}": [
            ["style", "top", '10px'],
            ["style", "height", '60px'],
            ["style", "opacity", '1'],
            ["style", "left", '453px'],
            ["style", "width", '83px']
         ],
         "${_molde-laranja}": [
            ["style", "opacity", '1']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_a-partir-3-90}": [
            ["style", "top", '216px'],
            ["style", "opacity", '0'],
            ["style", "left", '32px']
         ],
         "${_domingo-dia-churrasco}": [
            ["style", "top", '176px'],
            ["style", "opacity", '0'],
            ["style", "left", '53px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 15000,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_cafe-pede-leite}", "opacity", '1', { fromValue: '0'}], position: 5000, duration: 500 },
            { id: "eid37", tween: [ "style", "${_cafe-pede-leite}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
            { id: "eid7", tween: [ "style", "${_domingo-dia-churrasco}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid15", tween: [ "style", "${_domingo-dia-churrasco}", "opacity", '0', { fromValue: '1'}], position: 3500, duration: 500 },
            { id: "eid72", tween: [ "style", "${_logo-laranja}", "top", '107px', { fromValue: '164px'}], position: 10000, duration: 1000 },
            { id: "eid79", tween: [ "style", "${_LOGO-PADRA-BRANCOCopy}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1000 },
            { id: "eid24", tween: [ "style", "${_bg-img}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid80", tween: [ "style", "${_LOGO-PADRA-BRANCO}", "opacity", '1', { fromValue: '0'}], position: 9000, duration: 1000 },
            { id: "eid77", tween: [ "style", "${_LOGO-PADRA-BRANCO}", "left", '-228px', { fromValue: '-22px'}], position: 9000, duration: 6000 },
            { id: "eid74", tween: [ "style", "${_LOGO-PADRA-BRANCOCopy}", "left", '-22px', { fromValue: '-176px'}], position: 9000, duration: 6000 },
            { id: "eid34", tween: [ "style", "${_cafe-pede-leite}", "left", '32px', { fromValue: '97px'}], position: 5000, duration: 500 },
            { id: "eid35", tween: [ "style", "${_cafe-pede-leite}", "left", '32px', { fromValue: '32px'}], position: 8500, duration: 17 },
            { id: "eid38", tween: [ "style", "${_cafe-pede-leite}", "left", '22px', { fromValue: '32px'}], position: 8517, duration: 483 },
            { id: "eid31", tween: [ "style", "${_molde-azul}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 750 },
            { id: "eid49", tween: [ "style", "${_molde-azul}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid40", tween: [ "style", "${_a-partir-3-90}", "top", '293px', { fromValue: '216px'}], position: 5750, duration: 500 },
            { id: "eid41", tween: [ "style", "${_a-partir-3-90}", "top", '346px', { fromValue: '293px'}], position: 8500, duration: 500 },
            { id: "eid29", tween: [ "style", "${_corn-flakes}", "opacity", '1', { fromValue: '0'}], position: 4250, duration: 1612 },
            { id: "eid8", tween: [ "style", "${_domingo-dia-churrasco}", "left", '22px', { fromValue: '53px'}], position: 0, duration: 500 },
            { id: "eid16", tween: [ "style", "${_domingo-dia-churrasco}", "left", '-22px', { fromValue: '22px'}], position: 3500, duration: 500 },
            { id: "eid50", tween: [ "style", "${_logo-branco2}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 500 },
            { id: "eid52", tween: [ "subproperty", "${_corn-flakes}", "filter.blur", '7.109375px', { fromValue: '0px'}], position: 9500, duration: 1000 },
            { id: "eid11", tween: [ "style", "${_a-partir-29-90}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500 },
            { id: "eid19", tween: [ "style", "${_a-partir-29-90}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 500 },
            { id: "eid42", tween: [ "style", "${_a-partir-3-90}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500 },
            { id: "eid43", tween: [ "style", "${_a-partir-3-90}", "opacity", '0', { fromValue: '1'}], position: 8500, duration: 500 },
            { id: "eid68", tween: [ "style", "${_logo-laranja}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 1000 },
            { id: "eid3", tween: [ "style", "${_bg-img}", "left", '-59px', { fromValue: '0px'}], position: 0, duration: 500 },
            { id: "eid4", tween: [ "style", "${_bg-img}", "left", '-117px', { fromValue: '-59px'}], position: 500, duration: 4500 },
            { id: "eid23", tween: [ "style", "${_molde-laranja}", "opacity", '0', { fromValue: '1'}], position: 4250, duration: 750 },
            { id: "eid12", tween: [ "style", "${_a-partir-29-90}", "top", '307px', { fromValue: '269px'}], position: 1500, duration: 500 },
            { id: "eid20", tween: [ "style", "${_a-partir-29-90}", "top", '346px', { fromValue: '307px'}], position: 4250, duration: 500 },
            { id: "eid33", tween: [ "style", "${_corn-flakes}", "left", '-46px', { fromValue: '-10px'}], position: 4250, duration: 1075 },
            { id: "eid32", tween: [ "style", "${_corn-flakes}", "left", '-85px', { fromValue: '-46px'}], position: 5325, duration: 2675 },
            { id: "eid55", tween: [ "style", "${_corn-flakes}", "left", '-106px', { fromValue: '-85px'}], position: 8000, duration: 7000 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-115884590");
