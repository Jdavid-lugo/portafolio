"use strict";!function(){let o;o=isDarkStyle?config.colors_dark.textMuted:config.colors.textMuted;const t=document.querySelector("#salesChart"),r={chart:{height:120,parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"100%",columnWidth:"25px",startingShape:"rounded",endingShape:"rounded",borderRadius:5,distributed:!0,colors:{backgroundBarColors:[config.colors_label.primary,config.colors_label.primary,config.colors_label.primary,config.colors_label.primary],backgroundBarRadius:5}}},grid:{show:!1,padding:{top:-30,left:-12,bottom:10}},colors:[config.colors.primary],dataLabels:{enabled:!1},series:[{data:[60,35,25,75,15,42,85]}],legend:{show:!1},xaxis:{categories:["S","M","T","W","T","F","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:o,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1440,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:1200,options:{plotOptions:{bar:{columnWidth:"15%"}}}},{breakpoint:768,options:{plotOptions:{bar:{columnWidth:"12%"}}}},{breakpoint:450,options:{plotOptions:{bar:{columnWidth:"19%"}}}}]};if(void 0!==typeof t&&null!==t){new ApexCharts(t,r).render()}}();
