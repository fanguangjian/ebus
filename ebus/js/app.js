/*
 * @Author: FGJ
 * @LastEditTime: 2019-01-30 14:35:51
 */

// 判断设备
if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
    $('body').addClass('mac');
    console.log("Mac");
  } else {
    $('body').addClass('win');
    console.log("Win");

}

// window.onload = function () {
//     //去掉默认的contextmenu事件，否则会和右键事件同时出现。
//     document.oncontextmenu = function (e) {
//         var e = event || window.event;
//         e.returnValue = false;
//         e.preventDefault();
//     };
// } 

var mapContainer = document.getElementById("map");
var mapContainerLeft = document.getElementById("main-left");
// // 右3图
var mapContainerTrend = document.getElementById("trend");//300
var mapContainerPie = document.getElementById("pie");//300
var mapContainerPassager = document.getElementById("passager");//200
//  左图
var containerLeft = document.getElementById("left");//200
var mapContainerPer = document.getElementById("percent");//250
var mapContainerRouse = document.getElementById("rouse");//200

// var mapContainerRan =  $(".range-part");
var mapContainerRan =  document.getElementById("range-part");


// // 柱图
var mapContainerBar = document.getElementById("bar");
var mapContainerBarPro = document.getElementById("barPro");


function resizeMapContainer () {
    var hh = window.innerHeight;
    // console.log(hh);
    
    // 不同于以往,此处是隐藏出现的问题,上次时是使用Table切换  
     // // map高度
    //  if(window.innerHeight<768){
    //     mapContainer.style.height = 500 +'px';
    //  }else if (window.innerHeight>700) {
        mapContainer.style.height = (window.innerHeight*400/700 - 0) +'px'; 
        // mapContainer.style.height = 600 +'px';

        // console.log(mapContainer.style.height);               
    //  }
    //  console.log(mapContainer.style.height);  
    mapContainerLeft.style.height = (window.innerHeight*600/700 + 20) +'px'; 
    // right
    mapContainerTrend.style.height = (window.innerHeight*200/700 - 2) +'px';  
    mapContainerPie.style.height   = (window.innerHeight*250/700 + 0) +'px'; 
    mapContainerPassager.style.height = (window.innerHeight*150/700) +'px';  
    // left
    containerLeft.style.height = (window.innerHeight*600/700 + 20) +'px';  

    mapContainerBar.style.height = (window.innerHeight*250/700 -0) +'px';  
    mapContainerPer.style.height = (window.innerHeight*175/700 -0) +'px'; 
    mapContainerRouse.style.height = (window.innerHeight*175/700 -0) +'px';  


    mapContainerRan.style.height = (window.innerHeight*350/700 -0) +'px';    
    // mapContainerRan.style.height =  (containerLeft.style.height -  mapContainerBar.style.height);  
    // console.log(mapContainerRan.style.height);
    


    // mapContainerBar.style.height = window.innerHeight*4/7 +'px';
    mapContainerBarPro.style.height = (window.innerHeight*250/700 -0) +'px';  
    //  // 左右高度
 
    //  mapContainerLeft.style.height = (window.innerHeight*6/7 +30-7)+'px';
    // // barPro缩放时宽度赋值
  
    mapContainerBarPro.style.width = (window.innerWidth*3/12-12) +'px';
    mapContainerBar.style.width = (window.innerWidth*3/12-12) +'px';

}
resizeMapContainer();

// drawMap();
// drawBar();

function drawMap(msg){
    var data = msg;
    console.log(data);
    // console.log(data[0].name);

    var strProvince = {
        "北京":"beijing",
        "天津":"tianjin",
        "上海":"shanghai",
        "重庆":"chongqing",
        "河北":"hebei",
        "河南":"henan",
        "辽宁":"liaoning",
        "黑龙江":"heilongjiang",
        "吉林":"jilin",
        "内蒙古":"neimenggu",
        "山西":"shanxi",
        "山东":"shandong",
        "甘肃":"gansu",
        "陕西":"shanxi",
        "新疆":"xinjiang",
        "青海":"qinghai",
        "西藏":"xizang",
        "宁夏":"ningxia",
        "江苏":"jiangsu",
        "浙江":"zhejiang",
        "福建":"fujian",
        "江西":"jiangxi",
        "安徽":"anhui",
        "湖北":"hubei",
        "湖南":"hunan",
        "四川":"sichuan",
        "广东":"guangdong",
        "广西":"guangxi",
        "海南":"hainan",
        "贵州":"guizhou",
        "云南":"yunnan",
        "香港":"xianggang",
        "澳门":"aomen",
        "台湾":"taiwan"
        };
        
        // var str = JSON.stringify(strProvince);
        // console.log(str."北京");
        // console.log(strProvince.北京);//beijing
        // var city = "北京";
        // var value1 = strProvince[city];
        // var value2 =  eval("strProvince."+city);
        // console.log(value2);
        
    
    var mockData = [
        {name: "河南", value: 100},
        {name: "河北", value: 100},
        {name: "天津", value: 100},
        {name: "广东", value: 100},
        {name: "北京", value: 100},
        {name: "广西", value: 100},
        {name: "海南", value: 100},
        {name: "宁夏", value: 100},
        {name: "云南", value: 100},
        {name: "山东", value: 100},
        {name: "辽宁", value: 100},
        {name: "浙江", value: 100},
        {name: "四川", value: 100},
        {name: "贵州", value: 100}


    ]    
    var geoCoordMap = {
             "北京":[116.405289,39.904987],
             "天津":[117.190186,39.125595],
             "上海":[121.472641,31.231707],
             "重庆":[106.504959,29.533155],
             "河北":[114.502464,38.045475],
             "河南":[113.665413,34.757977],
             "云南":[102.842102,24.890519],
             "辽宁":[123.429092,41.796768],
             "黑龙江":[126.642464,45.756966],
             "湖南":[112.982277,28.19409],
             "安徽":[117.283043,31.861191],
             "山东":[117.000923,36.675808],
             "新疆":[87.616880,43.826630],
             "江苏":[118.76741,32.041546],
             "浙江":[120.15358,30.287458],
             "江西":[115.892151,28.676493],
             "湖北":[114.298569,30.584354],
             "广西":[108.320007,22.82402],
             "甘肃":[103.834170,36.061380],
             "山西":[112.549248,37.857014],
             "内蒙古":[111.751990,40.841490],
             "陕西":[108.948021,34.263161],
             "吉林":[125.324501,43.886841],
             "福建":[119.306236,26.075302],
             "贵州":[106.713478,26.578342],
             "广东":[113.28064,23.125177],
             "青海":[101.777820,36.617290],
             "西藏":[91.11450,29.644150],
             "四川":[104.065735,30.659462],
             "宁夏":[106.232480,38.486440],
             "海南":[110.199890,20.044220],
             "台湾":[121.5200760,25.0307240],
             "香港":[114.165460,22.275340],
             "澳门":[113.549130,22.198750],

        };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];//获取坐标
            if (geoCoord) {//如果有坐标
                  res.push({//创建对象数组，
                      name: data[i].name,  
                      value: geoCoord.concat(data[i].value)  //用连接数组的形式将value值加入

                });
            }
        }
        return res;
    };


    var myChart = echarts.init(document.getElementById('map'));
    var option = { 
          // backgroundColor: '#404a59',//整个画布背景 
          title: {  
        //    text : '分布总览',  
        //    subtext : '当前区域信息',
           top:'800',
           textStyle: {
                fontSize: 18,
                color: '#333'          // 主标题文字颜色
            }
          }, 
          
          dataRange: {          
            min: 0,
            // max: 250,
            x: "90%",
            y: "50%",
            text: ["高", "低"],
            color: ["#0048f5","#1670dc","#293440"],
            calculable: true,
            // splitNumber: 5,
            textStyle: {
                fontSize: 10,
                color: '#FFF'          // 主标题文字颜色
            }
        }, 
         
          //地图区域样式
          geo: {
              map: 'china',
              label: {
                  emphasis: {
                      show: false
                  }
              },
              //   // roam: true,
              zoom: 1.236,// 改变这个值的大小就可以了
              //   center: [108.948021,34.263161],
              // //   layoutCenter layoutSize配合使用
              //   layoutCenter: ['50%', '50%'],
              //   layoutSize: 600,
              itemStyle: {
                //未激活样式
                  normal: {
                      // areaColor: '#323c48',
                      // areaColor: 'red',                      
                      borderColor: '#111',
                      areaColor: '#006fff',
                      borderWidth: 0.5,
                      shadowColor: 'rgba(0,54,255, 1)',
                      shadowBlur: 10

                  },
                  //激活样式
                  emphasis: {
                      areaColor: '#2a333d'
                  }
              },
              // 如果还需要给每个省不同的颜色，那就要在geo中添加
              regions: [
                {
                    name: '北京',
                    itemStyle: {
                        normal: {
                            areaColor: '#954b13',
                            // color: 'red'
                        }
                    }
                },
                {
                    name: '河北',
                    itemStyle: {
                        normal: {
                            areaColor: '#2a333d',
                            color: 'red'
                        }
                    }
                },
                {
                    name: '天津',
                    itemStyle: {
                        normal: {
                            areaColor: '#56969e',
                            // color: 'red'
                        }
                    }
                },
                {
                    name: '山东',
                    itemStyle: {
                        normal: {
                            areaColor: '#00239a',
                            // color: 'red'
                        }
                    }
                },
                {
                    name: '辽宁',
                    itemStyle: {
                        normal: {
                            areaColor: '#130077',
                            // color: 'red'
                        }
                    }
                }
            ]        
          }, 
          
           
          series: [  
            {
                name: 'Top 10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 5)),
                symbolSize: function (val) {
                    return val[2] / 50;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f0ef00',
                        shadowBlur: 6,
                        shadowColor: '#333',
                        textStyle:{color:"#fff"}
                    }
                },
                zlevel: 999
            },
            {  
                name: '售票量',  
                type: 'scatter',  //类型散点
                // mapType: 'china', 
                coordinateSystem: 'geo',           
                // top:'50',
                // zoom:1.25, 
                selectedMode : 'single',  
                data: convertData(mockData),
               
                symbolSize: function (val) {
                    return val[2] / 50;
                },           
                label: {
                    normal: {
                        show: true,//显示省份标签
                        // textStyle:{color:"#fbfdfe"},//省份标签字体颜色
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    },    
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#fff"}
                    } 
                },               
                itemStyle: {
                    normal: {
                        color:'#dbb400',
                        // color:'red',
                        // borderWidth: .5,//区域边框宽度
                        borderColor: '#0550c3',//区域边框颜色
                        // borderColor: 'red',//区域边框颜色
                        // areaColor:"#303b49",//区域颜色
                        // areaColor:"red",//区域颜色
                        label: {
                            show: true,
                            textStyle: {
                                color: "#ffdd12",
                                fontSize: 12
                            }
                        }

                    },
                    //鼠标放上显示
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#f2e826',
                        areaColor:"#3f495b"

                    }
                }, 
     
            },
            
            {  
                name: '售票量',  
                type: 'map',  //类型map
                mapType: 'china', 
                coordinateSystem: 'geo',           
                // top:'50',
                // 图层同步
                zoom:1.22, 
                selectedMode : 'single',                
                data: data,    
               
                label: {
                    normal: {
                        // show: true,//显示省份标签
                        textStyle:{color:"#fbfdfe"},//省份标签字体颜色
                        formatter: '{b}',
                        position: 'left',
                        show: false
                    },    
                    emphasis: {//对应的鼠标悬浮效果
                        show: false,
                        textStyle:{color:"#fff"}
                    } 
                },
                itemStyle: {
                    normal: {
                        // borderWidth: .5,//区域边框宽度
                        borderColor: '#0550c3',//区域边框颜色                     
                        areaColor:"#001d36",//区域颜色
                        // areaColor:"#303b49",//区域颜色
                         textStyle:{color:"#fbfdfe"},//省份标签字体颜色

                    },
                    //鼠标放上显示
                    emphasis: {
                        borderWidth: .5,
                        borderColor: '#f2e826',
                        // areaColor:"#3f495b"
                        areaColor:"#303b49"

                    }
                }, 
     
            }
         ]  
          };  
          
    var newArr = data.sort(compare('value'));
    var maxV = Number(newArr[0].value);
    option.dataRange.max = maxV;

    // myChart.setOption(option);  
    // window.onresize = myChart.resize;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        window.addEventListener('resize', function () {
            resizeMapContainer();
            myChart.resize();
        });

    }
    //左键点击显示div  
     //左键点击显示div  
     myChart.on('click', function (params) {//点击事件
        console.log(params,"params");
        var provinceName =params.name;  
        var pageX = params.event.event.layerX;
        var pageY = params.event.event.layerY;
        console.log(pageX);      
            if (provinceName!=="台湾" && provinceName!=="") {

                 if($("#box").is(":visible")){                  
                     var name = $("#box-title").html(); 
                     console.log(name,"name");                   
                     if(name === provinceName){                       
                        $('#box').css('display','none');
                        // Bar切换显示
                        $('#barPro').css('display','none'); 
                        $('.barProvince').css('display','none');
                        $('#bar').css('display','block');
                        drawBar();  
                        return;
                     }   
                }

                if (
                    params.componentSubType==="map" ||
                    params.componentSubType==="scatter" ||
                    params.componentSubType==="effectScatter"
                    ) {
                        // 获取点击省份数据
                    // var pn = provinceName;   
                    // 今日售票量 省份名称                        
                    getProvince(provinceName); 
                    // 班次
                    // getshiftLine(provinceName); 
                    
                    // $("#box-title").html(provinceName); 

                }
                    $('#box').css({
                        top: (pageY+50),
                        left: (pageX-150)                       
                    });
                    // // Bar切换显示
                    // $('#bar').css('display','none');
                    // $('#barPro').css('display','block');   
                    // $('.barProvince').css('display','block');
                    // $(".barProvince span:eq(1)").html('('+provinceName+')');  
              
            }   
    });
    
    

}

// -------------map over---------------------------------
// drawBar()
// 绘制柱形图 全国
function drawBar(){
    // console.log(msg);  
    // Echarts 初始化
    
    $("#bar").css('width',$(".barContent").width());//解决100pxbug    // 
    var myChartbar = echarts.init(document.getElementById("bar"));

    var option = {
            title: {
                text: "售票总量省份TOP10",
                x: "8",
                y: "10",
                // padding: 10,
                itemGap: 60,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 16,
                    color: "rgb(7, 137, 244)"
                }
            },
            tooltip: {
                trigger: "axis",
                show: false
            },
            grid: {
                x: 44,
                x2:10,
                y2:40
            },
            legend: {
                // data: ["售票量(单位:张)"],
                data: [{
                    name: '售票量(单位:张)',
                    icon: 'rectangle',//'image://../asset/ico/favicon.png',//标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：'circle' | 'rectangle' | 'triangle' | 'diamond' |'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond'另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，同时，'star' + n（n>=3)可变化出N角星，如指定为'star6'则可以显示6角星
                   
                }],
                x: "right",
                // x: "240",
                y: "15",
                borderRadius:4,
                itemGap: 10,
                itemWidth:20,
                itemHeight:9,
                textStyle: {
                    // fontSize: 10,
                    color: '#fff'          // 主标题文字颜色
                }
            },
           
            calculable: true,
            xAxis: [
                {
                    type: "category",                   
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 9
                        },
                        interval:0,
                        // rotate:40
                    },
                    // data: ["河北", "北京", "广州", "重庆", "天津", "西安", "南京", "杭州", "甘肃", "宁夏"],
                    // data:"",
                    axisTick: {
                        inside: true,
                        length: 3
                        // interval: 0
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "#08446d",
                            width: 1
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    // name: "单位:张",
                    // nameLocation: "end",
                    // nameTextStyle: {
                    //     color: "rgb(247, 249, 249)",
                    //     align: "left",
                    //     baseline: "bottom",
                    //     fontSize: 9
                    // },
                    axisTick: {
                        show: true,
                        inside: true
                    },
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 9
                        }
                    },
                    splitNumber: 0,
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1,
                            type: "solid"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#08446d"
                        }
                    }
                }
            ],
            series: [
                {
                    name: "售票量(单位:张)",
                    type: "bar",
                    // data: [39339, 33233, 30301, 23567, 25387, 21222, 18001, 13398, 9007, 7398],
                    // data:"",
                    barWidth: 20,                    
                    itemStyle: {
                        normal: {
                            borderRadius: 8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fee100'
                            }, {
                                offset: 1,
                                color: '#ff4500'
                            }]),
                            label: {
                                show: true,
                                position: "top",
                                formatter: function(p) {
                                    return format(p.value)
                                },
                                textStyle: {
                                        color: "#affaff",
                                        fontSize: 11,
                                        fontStyle: "normal"
                                    }
                            }
                        },
                        emphasis: {
                            color: "#f09b67",
                            borderWidth: 1,
                            borderColor: "#f09b67",
                            borderRadius: 18,
                            label: {
                                show: true
                            }
                        }


                    },
                    symbol: 'emptydiamond',
    //                 data: currentDayArray,
                    barGap: '100%'
                }
            ],
            backgroundColor: "#031554",
            // backgroundColor: "rgba(0,0,0,0)"
        }
        
    var regionnameArr = []
    sellticketcountArr = [];
    // var prorank = localStorage.getItem("proRank"); 
    var prorank = sessionStorage.getItem("proRank");   

    var msg = JSON.parse(prorank);
    console.log(msg);

    // msg [{"北京":63872},{"河南":63760},{"河北":61664},{"广东":32643},{"天津":32469},{"广西":27724},{"辽宁":7995},{"山东":6971},{"海南":5636}]
    
    // for (var i = 0; i < msg.length; i++) {
    //     //  IE 不支持 
    //     regionnameArr.push(Object.keys(msg[i])[0]);        
    //     sellticketcountArr.push(Object.values(msg[i])[0]);
    // }  
    for (var i = 0; i < msg.length; i++) {
        // alert(msg[0].key)
        for(var key in msg[i]){  
            regionnameArr.push(key); 
            sellticketcountArr.push(msg[i][key]);
        }        
    }  
    // sellticketcountArr = Object.values(msg);
    console.log(regionnameArr,"key"); //["北京", "河南", "河北", "广东", "天津", "广西", "辽宁", "山东", "海南"] "key"
    console.log(sellticketcountArr,"value");      //  [63882, 63764, 61671, 32644, 32470, 27724, 7996, 6977, 5637] "value"         
    option.xAxis[0].data = regionnameArr;
    option.series[0].data = sellticketcountArr;   
      
    if (option && typeof option === "object") {
        myChartbar.setOption(option);
        window.addEventListener('resize', function () {
            resizeMapContainer();
            myChartbar.resize();
        });
    }

}
// bar 全国over--------------
// bar 省份 
// drawBarPro();
function drawBarPro(msg){
    console.log(msg);   
    console.log(getBeforeMonth(0),getBeforeMonth(1),
    getBeforeMonth(2),getBeforeMonth(3)
    );    //12月

    
    var monthArr = [getBeforeMonth(11),getBeforeMonth(10),getBeforeMonth(9),getBeforeMonth(8),getBeforeMonth(7),getBeforeMonth(6),getBeforeMonth(5),getBeforeMonth(4),getBeforeMonth(3),getBeforeMonth(2)];
    console.log(monthArr);    
  
    // Echarts 初始化
    $("#barPro").css('width',$(".barContent").width());//解决100pxbug    //     
    // $('.barProvince').css('display','block');
    var myChartbarPro = echarts.init(document.getElementById("barPro"));

    var option = {
            // title: {
            //     text: "售票量统计",
            //     x: "8",
            //     y: "10",
            //     // padding: 10,
            //     itemGap: 60,
            //     textStyle: {
            //         fontWeight: "normal",
            //         fontSize: 16,
            //         color: "rgb(7, 137, 244)"
            //     }
            // },
            tooltip: {
                trigger: "axis",
                show: false
            },
            grid: {
                x: 44,
                x2:10,
                y2:40
            },
            legend: {
                // data: ["售票量(单位:张)"],
                data: [{
                    name: '售票量(单位:张)',
                    icon: 'rectangle',                   
                }
                ],
                x: "right",
                y: "15",
                borderRadius:4,
                itemWidth:20,
                itemHeight:9,
                textStyle: {
                    // fontSize: 10,
                    color: '#fff'          // 主标题文字颜色
                }
            },
           
            calculable: true,
            xAxis: [
                {
                    type: "category",                   
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 9
                        },
                        interval:0,
                        // rotate:40
                    },
                    // data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月"],
                    // data:"",
                    axisTick: {
                        inside: true,
                        length: 3
                        // interval: 0
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "#08446d",
                            width: 1
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    // name: "单位:张",
                    // nameLocation: "end",
                    // nameTextStyle: {
                    //     color: "rgb(247, 249, 249)",
                    //     align: "left",
                    //     baseline: "bottom",
                    //     fontSize: 9
                    // },
                    axisTick: {
                        show: true,
                        inside: true
                    },
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 10
                        }
                    },
                    splitNumber: 0,
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1,
                            type: "solid"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#08446d"
                        }
                    }
                }
            ],
            series: [
                {
                    name: "售票量(单位:张)",
                    type: "bar",
                    // data: [39339, 33233, 30301, 23567, 25387, 21222, 18001, 13398, 9007, 7398],
                    // data:"",
                    // barWidth: 20,      
                    barCategoryGap: "40%",
                    itemStyle: {
                        normal: {
                            borderRadius: 8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#caff01'
                            }, {
                                offset: 1,
                                color: '#00ffa1'
                            }]),
                            label: {
                                show: true,
                                position: "top",
                                formatter: function(p) {
                                    return format(p.value)
                                },
                                textStyle: {
                                        color: "#affaff",
                                        fontSize: 11,
                                        fontStyle: "normal"
                                    }
                            }
                        },
                        emphasis: {
                            color: "#f09b67",
                            borderWidth: 1,
                            borderColor: "#f09b67",
                            borderRadius: 18,
                            label: {
                                show: true
                            }
                        }


                    },
                    symbol: 'emptydiamond',
    //                 data: currentDayArray,
    //                 barGap: '100%'
                }
            ],
            backgroundColor: "#031554",
            // backgroundColor: "rgba(0,0,0,0)"
        }

        option.xAxis[0].data = monthArr;
        option.series[0].data = msg.reverse();
    
    if (option && typeof option === "object") {
        myChartbarPro.setOption(option);
        window.addEventListener('resize', function () {
            resizeMapContainer();
            myChartbarPro.resize();
        });
    }

}
// drawPercent(); 渠道分布
function drawPercent(channel){
    console.log(channel);

    var text1 = "mobile";
    var text2 = "b2c";
    var text3 = "afc";
    var text4 = "b2b";
    // console.log(channel[text1]);   

    var channelData = [
        {
            value: channel[text1],
            name: text1
        },
        {
            value: channel[text2],
            name: text2
        },
        {
            value: channel[text3],
            name: text3
        },
        {
            value: channel[text4],
            name: text4
        },
    ] 

    var myChartper = echarts.init(document.getElementById("percent"));
    var option = {
        title: {
            text: "售票量渠道分布",
            // x: "left",
            // // x: "center",
            // y: "0%",   
            x: "8",
            y: "10",      
            textStyle: {
                color: "#508df0",
                fontSize: 15
            }
        },
        // tooltip: {
        //     trigger: "axis",
        //     show: true,
        //     axisPointer: {
        //         type: "line",
        //         lineStyle: {
        //             color: "#48b"
        //         },
        //         areaStyle: {
        //             type: "default",
        //             color: "#1DBB37"
        //         }
        //     }
        // },
        tooltip: {
            enterable: true,
            formatter: function (e) {
              console.log(e);
              console.log(e.data);//{value: 238236, name: "app"}
              console.log(e.data.name);
              
              if(e.data.name === 'mobile'){
                //    alert("APP");
                //    $("#appBox").css("display","block")
                //    $("#appBox").html("AAAAAA");
                   drawApp(channel);
                   $("#appBox").toggle();
              }

            },
            triggerOn: 'click'
        },

        legend: {
            // orient: "vertical",
            x: "center",
            // x: "left",
            bottom:'0',
            data: [text1, text2, text3, text4],
            // y: "bottom",
            // y: "70%",
            itemGap: 10,
            // itemHeight: 10,
            // itemWidth: 10,

            icon: 'circle',
            // icon: '',

            itemGap: 2,
            itemHeight: 10,
            itemWidth: 10,
            textStyle: {
                color: "#FFF",
                fontSize: 12
            }           
        },
        toolbox: {
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            },
            show: false
        },
        series: [
            {
                name: "访问来源",
                type: "pie",
                radius: "60%",
                center: ["50%", "55%"],
                avoidLabelOverlap: true,   //是否启用防止标签重叠策略
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                // silent: true,　　　　　　　　//图形是否不响应和触发鼠标事件
                startAngle: 90,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            // formatter: "{d}%",
                            formatter:function(data){ return data.percent.toFixed(1)+"%";},
                            position: "outer"
                        },
                        labelLine: {
                            show: true,
                            //手册
                            length:0,
                            length2:8                       
                        },
                    },
            //         normal: {
            //             label: {
            //                 show: true,
            //                 formatter: "{b}\n{d}%",
            //                 position: "bottom",
            //                 distance: 0.4,
            //                 textStyle:{
            // 　　　　　　　　　　　　align:"center",
            // 　　　　　　　　　　　　baseline:"middle",
            // 　　　　　　　　　　}
            //             },
            //             labelLine: {
            //                 show: true,
            //                 //手册
            //                 length:0,
            //                 length2:10
                           
            //             },
            //             borderWidth: 0
            //         },
                    emphasis: {
                        // color: "#ff3509",
                        label: {
                            // show:false,
                            // position: "inside",
                            position: "outer",
                            // formatter: "{d}%",
                            formatter:function(data){ return data.percent.toFixed(1)+"%";},
                            textStyle: {
                                color: "#C4EAFC"
                            },
                            distance: 0.5
                        }
                    }
                },
                // data: [
                //     {
                //         value: 200,
                //         name: "IOS"
                //     },
                //     {
                //         value: 30,
                //         name: "B2C"
                //     },
                //     {
                //         value: 10,
                //         name: "AFC"
                //     },
                //     {
                //         value: 40,
                //         name: "移动端"
                //     }
                // ],
                markPoint: {
                    data: []
                }
                
            }
        ],
        calculable: false,
        animation: true,
        animationDuration: 2000,
        animationEasing: "Linear",
        backgroundColor: "#031554",
        color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32"],
        calculableColor: "rgb(255, 86, 170)",
        calculableHolderColor: "rgb(244, 17, 17)"
    }
    option.series[0].data = channelData;

    myChartper.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartper.resize();
    });
}
function drawApp(channel){
    console.log(channel,"ccccc");

    var mobileV = channel.mobile;
    var afcV = channel.afc;
    var b2bV = channel.b2b;
    var b2cV = channel.b2c;
    var totalV = mobileV + afcV + b2bV + b2cV;

    var appV = channel.app;
    var wechatV = mobileV - appV;

    console.log(
        mobileV,appV,wechatV,totalV 
    );

    var appPer = ( appV/totalV *100).toFixed(1);
    var wechatPer = ( (mobileV - appV)/totalV *100).toFixed(1);
    console.log(appPer);

    var myChartper = echarts.init(document.getElementById("appBox"));
    var labelTop = {
        normal : {
            color: '#42aef5',      
            label : {
                show : true,
                position : 'center',
                formatter : '{b}\n{c}%',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine : {
                show : false
            }
        }
    };
    var labelFromatter = {
        normal : {
            label : {
                formatter : function (params){
                    return 100 - params.value + '%'
                },
                // icon: 'circle',
                // textStyle: {
                //     baseline : 'top'
                // }
            }
        },
    }
    var labelBottom = {
        normal : {
           color: 'yellow',      
           label : {
                show : true,
                position : 'bottom',
                formatter : '{b}\n{c}%',
                textStyle: {
                    baseline : 'bottom'
                }
            },
            labelLine: {
                show: true,
                length:0,
                length2:2.5
                
            }
        },
        emphasis: {
            color: 'cyan'
        }
    };
    var radius = [24, 35];
    var option = {        
        series : [
            {
                type : 'pie',
                center : ['71%', '56%'],
                radius : radius,
                startAngle: -90,               

                x: '0%', // for funnel
                itemStyle : labelFromatter,
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                data : [
                    {name:'MiniApp', value:wechatPer, itemStyle : labelBottom},
                    {name:'App', value:appPer,itemStyle : labelTop}
                ]
            }
        ]
    };     
    // option.series[0].data = channelData;

    myChartper.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartper.resize();
    });
}

// drawRouse();
function drawRouse(booking){

    var text1 = "一天以内";
    var text2 = "三天以内";
    var text3 = "七天以内";
    var text4 = "七天以上";
    // console.log(channel[text1]);   

    var bookingData = [
        {
            value: booking[text1],
            name: text1
        },
        {
            value: booking[text2],
            name: text2
        },
        {
            value: booking[text3],
            name: text3
        },
        {
            value: booking[text4],
            name: text4
        },
    ] 

    var myChartRouse = echarts.init(document.getElementById("rouse"));
    var option = {
        title: {
            text: "提前订票时间分布",
            // x: "left",
            x: "8",
            y: "10",
            textStyle: {
                color: "#007df2",
                fontSize: 15
            }
        },
        tooltip: {
            trigger: "item",
            show: false
        }, 
        legend: {
                    x: "center",
                    bottom:'2',
                    data:[ text1, text2, text3, ,text4],
                    // icon: '/',
                    itemGap: 10,
                    itemHeight: 6,
                    itemWidth: 20,
                    textStyle: {
                        color: "#FFF"
                    }
                },      
        series: [
            {
                name: "半径模式",
                type: "pie",
                radius: [20, 65],
                center: ["50%", "55%"],
                roseType: "radius",
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            // formatter: "{b}\n{d}%",
                            formatter: "{d}%",                            
                            position: "bottom",
                            distance: 0.4,
                            textStyle:{
            　　　　　　　　　　　　align:"center",
            　　　　　　　　　　　　baseline:"middle",
            　　　　　　　　　　}
                        },
                        labelLine: {
                            show: true,
                            //手册
                            length:0,
                            length2:10
                           
                        },
                        borderWidth: 0
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                // data: [
                //     {
                //         value: 10,
                //         name: "1天以内"
                //     },
                //     {
                //         value: 5,
                //         name: "3天以内"
                //     },
                //     {
                //         value: 15,
                //         name: "7天以内"
                //     },
                //     {
                //         value: 25,
                //         name: "7天以上"
                //     }
                // ]
            }
        ],
        backgroundColor: "#031554",
        color: ["#00bfff", "#fee100", "#da70d6", "#32cd32", "#6495ed"]
    }
    option.series[0].data = bookingData;
    myChartRouse.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartRouse.resize();
    });
}

// drawTrend(data);
function drawTrend(msg){
    var msgData = msg.reverse();
    // var regionnameArr = []
    //     sellticketcountArr = [];
    // for (var i = 0; i < mssg.length; i++) {
    //     regionnameArr.push(mssg[i].createdate);  
    //     // sellticketcountArr.push((mssg[i]. sellticketcount/10000).toFixed(0));
    //     sellticketcountArr.push(mssg[i]. sellticketcount);

    //     // return regionnameArr;                   
    // }  
    // console.log(regionnameArr); 
    // console.log(sellticketcountArr); 

// Echarts 初始化
    // Echarts 初始化
    // $("#barPro").css('width',$(".barContent").width());//解决100px bug, 初始化赋值!!!!!!!

    // $("#barPro").css('width',$(".barContent").offsetWidth());//解决100pxbug,
    // $('#barPro').width($(window).width() * 4/12);
    // $('#barPro').width($("#bar").width());
    // $('#barPro').width($(".barContent").width()-10);

    // var myChart = $("#barPro");
    // myChart.style.width=window.innerWidth*5/12+'px'; 
    // var myChartbarPro = echarts.init(document.getElementById("myChart"));

    // 过去7天
    // console.log(getBeforeDate(0));//昨天的日期   
    var dayArr = [getBeforeDate(7),getBeforeDate(6),getBeforeDate(5),getBeforeDate(4),getBeforeDate(3),getBeforeDate(2),getBeforeDate(1)];
    console.log(dayArr);    

    var myChartTrend = echarts.init(document.getElementById("trend"));

    var option = {
            title: {
                text: "售票量趋势图 (最近7天)",
                x: "8",
                y: "10",
                // padding: 10,
                itemGap: 60,
                textStyle: {
                    fontWeight: "normal",
                    fontSize: 15,
                    color: "rgb(7, 137, 244)"
                }
            },
            tooltip: {
                trigger: "axis",
                show: false
            },
            grid: {
                x: 44,
                x2:10,
                y2:40
            },          
            legend: {
                // data: ["售票量(单位:张)"],
                data: [{
                    name: '售票量(单位:张)',
                    icon: 'rectangle',                   
                },
                    '售票量'
                ],
                x: "right",
                y: "15",
                borderRadius:4,
                // itemGap: 10,
                itemWidth:20,
                itemHeight:9,
                textStyle: {
                    // fontSize: 10,
                    color: '#fff'          // 主标题文字颜色
                }
            },
            
            calculable: true,
            xAxis: [
                {
                    type: "category",  
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 9
                        },
                        interval:0,
                        // rotate:40
                    },
                    // data: ["8-7", "8-8", "8-9", "8-10", "8-11", "8-12", "8-13", "8-14", "8-15", "8-16"],
                    
                    axisTick: {
                        inside: true,
                        length: 3,
                        interval: 0
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: "#08446d",
                            width: 1
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    // name: "单位:张",
                    // nameLocation: "end",
                    // nameTextStyle: {
                    //     color: "rgb(247, 249, 249)",
                    //     align: "right",
                    //     baseline: "bottom",
                    //     fontSize: 9
                    // },
                    axisTick: {
                        show: true,
                        inside: true
                    },
                    axisLabel: { //文字
                        textStyle: {
                            color: "#fff",
                            fontSize: 10
                        }
                    },
                    splitNumber: 0,
                    axisLine: {
                        lineStyle: {
                            color: "#48b",
                            width: 1,
                            type: "solid"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#08446d"
                        }
                    }
                }
            ],
            series: [
                {
                    // name: "售票量(单位:张)",
                    type: "line",
                    // data: [39339, 33233, 30301, 23567, 25387, 21222, 18001, 13398, 9007, 7398],
                    smooth: true,
                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: "rgb(255, 204, 0)"
                            },
                            borderWidth: 2,
                            borderColor: "rgb(255, 204, 0)"
                        }
                    }
                },
                {
                    name: "售票量(单位:张)",
                    type: "bar",
                    // data: [39339, 33233, 30301, 23567, 25387, 21222, 18001, 13398, 9007, 7398],
                    // barWidth: 26,
                    // 间距
                    barCategoryGap: "40%",
                    itemStyle: {
                        normal: {
                            borderRadius: 8,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00e7ff'
                            }, {
                                offset: 1,
                                color: '#00a0ff'
                            }]),
                            label: {
                                show: true,
                                position: "top",
                                formatter: function(p) {
                                    return format(p.value)
                                },
                                textStyle: {
                                        color: "#affaff",
                                        fontSize: 12,
                                        fontStyle: "normal"
                                    }
                            }
                        },
                        emphasis: {
                            color: "yellow",
                            borderWidth: .8,
                            borderColor: "yellow",
                            borderRadius: 18,
                            label: {
                                show: true
                            }
                        }


                    },
                    symbol: 'emptydiamond',
    //                 data: currentDayArray,
                    barGap: '100%'
                }
            ],
            backgroundColor: "#031554",
            // backgroundColor: "rgba(0,0,0,0)"
        }
    option.xAxis[0].data = dayArr;
    option.series[0].data = msgData;   
    option.series[1].data = msgData;


    myChartTrend.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartTrend.resize();
    });
    

}
// drawPie();
// 班次&价格
function drawPie(msg){
    console.log(msg); 

    // 50Km以内: "1750349"
    // 50~100Km: "471804"
    // 100~200Km: "206693"
    // 200~400Km: "84506"
    // 400~800Km: "31347"
    // 800Km以上: "6296"

    // 大于100元: "48254"
    // 50~100元: "104629"
    // 20~50元: "406214"
    // 小于20元: "1923299"

    var pricetext1 = "小于20元";
    var pricetext2 = "20~50元";
    var pricetext3 = "50~100元";
    var pricetext4 = "大于100元";


    var distance1 = "50Km以内";
    var distance2 = "50~100Km";
    var distance3 = "100~200Km";
    var distance4 = "200~400Km";
    var distance5 = "400~800Km";
    var distance6 = "800Km以上";

    // console.log(msg[pricetext1],msg[pricetext2],'测试');  

    var priceData = [
        {
            value: msg[pricetext1],
            name: pricetext1
        },
        {
            value: msg[pricetext2],
            name: pricetext2
        },
        {
            value: msg[pricetext3],
            name: pricetext3
        },
        {
            value: msg[pricetext4],
            name: pricetext4
        },
    ]
    var distanceData = [
        {
            value: msg[distance1],
            name: distance1
        },
        {
            value: msg[distance2],
            name: distance2
        },
        {
            value: msg[distance3],
            name: distance3
        },
        {
            value: msg[distance4],
            name: distance4
        },
        {
            value: msg[distance5],
            name: distance5
        },
        {
            value: msg[distance6],
            name: distance6
        },
    ]
    console.log(priceData,distanceData);
    
    var myChartPie = echarts.init(document.getElementById("pie"));
    var option = {
        // tooltip: {
        //     // trigger: "item",
        //     // formatter: "{b} : {c} ({d}%)"
        // },
        legend:[
                {
                    x: "left",
                    bottom:'40',
                    data:[pricetext1,pricetext2, pricetext3,pricetext4],
                    icon: 'circle',
                    itemGap: 15,
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "#FFF"
                    }
                },{
                    x: "left",
                    bottom:'2',
                    data:[ distance1, distance2, distance3, ,distance4, distance5, distance6],
                    icon: 'circle',
                    itemGap: 5,
                    itemHeight: 6,
                    itemWidth: 10,
                    textStyle: {
                        color: "#FFF"
                    }
                }
            ],
     
        calculable: false,
        series: [
            {
                name: "访问来源",
                type: "pie",
                selectedMode: "single",
                radius: [0, 46],
                center: ["50%", "45%"],
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                itemStyle: {
                    normal: {
                        label: {
                            position: "right",
                            show: true,
                            formatter: "{d}%",
                            textStyle:{
            　　　　　　　　　　　　align:"center",
            　　　　　　　　　　　　baseline:"middle",
                                // color: "#007df2",
                                fontSize:15        
                            }
                        
                        },
                        labelLine: {
                            show: true,
                            length:70,
                            length2:15
                            
                        }
                    }
   
                },
                // data: [
                //     {
                //         value: 335,
                //         name: "<100¥"
                //     },
                //     {
                //         value: 679,
                //         name: "100~300¥"
                //     },
                //     {
                //         value: 154,
                //         name: ">300¥"
                //     }
                // ],
                startAngle: 90,                
                minAngle: 0,
                selectedOffset: 0
            },
            {
                name: "访问来源",
                type: "pie",
                radius: [65, 85],
                center: ["50%", "45%"],
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                // data: [
                //     {
                //         value: 335,
                //         name: "<100km"
                //     },
                //     {
                //         value: 310,
                //         name: "100~499km"
                //     },
                //     {
                //         value: 234,
                //         name: "500~1000km"
                //     },
                //     {
                //         value: 135,
                //         name: ">1000km"
                //     }
                // ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{d}%",
                            position: "right",
                            textStyle:{
            　　　　　　　　　　　　align:"center",
            　　　　　　　　　　　　baseline:"middle",
        　　　　　　　　　　    }
                        },
                        labelLine: {
                            show: true,
                            length:16,
                            length2:5
                            
                        }
                    }
                },
                startAngle: 180,
                markPoint: {
                    data: []
                }
            }
        ],
        title: {
            text: "票价班次&里程班次分布",
            // x: "left",
            // y: "top",
            x: "8",
            y: "10",
            textAlign: "left",
            textStyle: {
                color: "#007df2",
                fontSize:15
            }
        },
        backgroundColor: "#031554",
        // "rgb(86, 255, 255)"
        color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "orange", "rgb(249, 244, 92)"]
    }
    option.series[0].data = priceData;
    option.series[1].data = distanceData;
    myChartPie.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartPie.resize();
    });

}
//乘客画像
function drawPassager(msg){
    console.log(msg);
     // 小于18岁: 13090
    // 18-25岁: 76942
    // 25-30岁: 39606
    // 30-40岁: 40833
    // 40-50岁: 18749
    // 50岁以上: 17254 

    // 总数: 206474
    // 男: 116657
    // 女: 89817

    var male = "男";
    var female = "女";
   

    var age1 = "18岁以下";
    var age2 = "18-25岁";
    var age3 = "25-30岁";
    var age4 = "30-40岁";
    var age5 = "40-50岁";
    var age6 = "50岁以上";


    // console.log(msg[pricetext1],msg[pricetext2],'测试');  

    var sexData = [
        {
            value: msg[male],
            name: male
        },
        {
            value: msg[female],
            name: female
        }       
    ]
    var ageData = [
        {
            value: msg[age1],
            name: age1
        },
        {
            value: msg[age2],
            name: age2
        },
        {
            value: msg[age3],
            name: age3
        },
        {
            value: msg[age4],
            name: age4
        },
        {
            value: msg[age5],
            name: age5
        },
        {
            value: msg[age6],
            name: age6
        }
    ]
    console.log(sexData,ageData);
    
    var myChartPassagers = echarts.init(document.getElementById("passager"));
    var option = {
        // tooltip: {
        //     // trigger: "item",
        //     // formatter: "{b} : {c} ({d}%)"
        // },
        legend:[
                {
                    // x: "left",
                    // bottom:'35',
                    orient: "vertical",
                    x: "left",
                    y: "center",
                    data:[male,female],
                    icon: 'circle',
                    itemGap: 15,
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "#FFF"
                    }
                },{
                    // x: "left",
                    // bottom:'10',
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    data:[ age1, age2, age3, age4, age5, age6],
                    icon: 'circle',
                    itemGap: 8,
                    itemHeight: 6,
                    itemWidth: 7,
                    textStyle: {
                        color: "#FFF"
                    }
                }
            ],
     
        calculable: false,
        series: [
            {
                name: "访问来源",
                type: "pie",
                selectedMode: "single",
                radius: [0, 40],
                center: ["50%", "50%"],
                hoverAnimation:false,　　  //是否开启 hover 在扇区上的放大动画效果。
                itemStyle: {
                    normal: {
                        label: {
                            position: "inside",
                            show: true,
                            formatter: "{d}%",
                            textStyle:{
            　　　　　　　　　　　　align:"center",
            　　　　　　　　　　　　baseline:"middle",
                                // color: "#007df2",
                                // fontSize:15        
                            }
                        
                        },
                        labelLine: {
                            show: true,
                            length:50,
                            length2:5
                            
                        }
                    }
   
                },
                // data: [
                //     {
                //         value: 335,
                //         name: "<100¥"
                //     },
                //     {
                //         value: 679,
                //         name: "100~300¥"
                //     },
                //     {
                //         value: 154,
                //         name: ">300¥"
                //     }
                // ],
                startAngle: 90,                
                minAngle: 0,
                selectedOffset: 0
            },
            {
                name: "访问来源",
                type: "pie",
                radius: [55, 75],
                center: ["50%", "50%"],
                hoverAnimation:false,　　 //是否开启 hover 在扇区上的放大动画效果。
                // data: [
                //     {
                //         value: 335,
                //         name: "<100km"
                //     },
                //     {
                //         value: 310,
                //         name: "100~499km"
                //     },
                //     {
                //         value: 234,
                //         name: "500~1000km"
                //     },
                //     {
                //         value: 135,
                //         name: ">1000km"
                //     }
                // ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{d}%",
                            position: "right",
                            textStyle:{
            　　　　　　　　　　　　align:"center",
            　　　　　　　　　　　　baseline:"middle",
        　　　　　　　　　　    }
                        },
                        labelLine: {
                            show: true,
                            length:10,
                            length2:5
                            
                        }
                    }
                },
                startAngle: 90,               
            }
        ],
        title: {
            text: "乘客画像",
            // x: "left",
            // y: "top",
            x: "8",
            y: "10",
            textAlign: "left",
            textStyle: {
                color: "#007df2",
                fontSize:15
            }
        },
        backgroundColor: "#031554",
        // "rgb(86, 255, 255)"
        color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "orange", "rgb(249, 244, 92)","red"]
    }
    option.series[0].data = sexData;
    option.series[1].data = ageData;
    myChartPassagers.setOption(option);
    window.addEventListener('resize', function () {
        resizeMapContainer();
        myChartPassagers.resize();
    });

}





// 数据展示 top and right
// showData()
function showData() {
    var saletotal = 987654320;
    var visitD = 7893761;
    var onlinevehiclecount = 99892934;  
    var stationNum= 22233344;

    var sA = transform(saletotal);
    var s1 = transform(visitD);
    var ssss = transform(onlinevehiclecount);
    var sN = format(stationNum);


    console.log(s1);//00<span class='test0'>,</span>00<span class='ceshi'>2,345,679</span>
    

    // $("#totalSale").html(sA );   
    // $(".stationLine").html(s1 );
    $(".stationNum").html(sN );

    // // format()
    // var sellticketcount = format(msg.sellticketcount);//125655123

    // var netstationcount = format(msg.netstationcount);//125655123    
    // var netstationratio = (msg.netstationratio*100).toFixed(0)+'%'; 

    // var onlinevehiclecount = format(msg.onlinevehiclecount);
    // var onlinevehicleratio = (msg.onlinevehicleratio*100).toFixed(0)+'%';  
    
    // var sellableticketcount  = format(msg.sellableticketcount );
    // var sellableticketratio = (msg.sellableticketratio*100).toFixed(0)+'%'; 
    // //    右侧
    // var realnamestationcount = format(msg.realnamestationcount );
    // var realnamestationratio = (msg.realnamestationratio*100).toFixed(0)+'%'; 
    // var realnamevehiclecount = format(msg.realnamevehiclecount );
    // var realnamevehicleratio = (msg.realnamevehicleratio*100).toFixed(0)+'%'; 

    //  $("#totalSale").html(sellticketcount);  //总数

    //  $(".stationLine").html(netstationcount);//车站
    //  $(".stationPer").html(netstationratio);
    // //  $(".shuttleLine").html(onlinevehiclecount );//班车
    //  $(".shuttlePer").html(onlinevehicleratio );//
    //  $(".ticketsSale").html(sellableticketcount );//客票
    //  $(".ticketsPer").html(sellableticketratio );//
   

    // $(".title_li").first().find("i").html(msg.plan_traffic);
    // $(".title_li").eq(1).find("i").html(msg.saled_num);
    // $(".title_li").eq(2).find("i").html(msg.remain_num);
    // $(".title_li").eq(3).find("i").html(msg.plan_veh);
}


//初始化进入加载
getValue();
// 获取map数据   许武成
function getValue(){   
    $.ajax({
        url : 'http://10.237.22.177:8080/data/pt',
        type : 'GET',       
        data:"",
        async: true,
        dataType: 'json',
        // dataType: 'jsonp',
        // jsonp:"callback",
        // jsonpCallback:"success_jsonpCallback",
        crossDomain:true,
        traditional: true,       
        success : function(data) {
            // alert(data);
            console.log(data,"map");
            // console.log(data.initdata);
            var msg = data;         
            if (msg) {              
                drawMap(msg);
            }
           
        },
        complete : function() {
            //请求完成的处理
        },
        error : function() {
            //请求出错处理
            alert("加载失败");
        }
    })
}

// 获取省份 --------------今日售票量-----------------许武成
function getProvince(provinceName){   
    $.ajax({
        url : 'http://10.237.22.177:8080/data/gpt',
        type : 'GET',
        data : {
            "pn" : provinceName
        },
        async: true,
        dataType: 'json',  
        success : function(data) {
            // alert(data);
            console.log(data,"省售票量");//只有省份数据 //or  -1
            if($("#box").is(":visible") && data  == -1){
                // alert("ooooo")
                $('#box').css('display','none');
                $('#barPro').css('display','none');  
                $('.barProvince').css('display','none');
                $('#bar').css('display','block');
                drawBar();
            }else if($("#box").is(":hidden") && data  == -1){
                // alert("暂无数据")
               
            }else {
                var todaySale = format(Number(data));
                $("#saleT span:eq(0)").html(todaySale); 
                // 调用某省历史topten
                getProvinceten(provinceName); 
                // box显示
                $("#box-title").html(provinceName);
                $('#box').css('display','block');
                // Bar切换显示
                $('#bar').css('display','none');
                $('#barPro').css('display','block');  
    
                $('.barProvince').css('display','block');
                $(".barProvince span:eq(1)").html('('+provinceName+')');   
                // 读取session   今日可售班次
                var todaySellLine = localStorage.getItem("todaySellLine");  
                var shiftdata = JSON.parse(todaySellLine);
               
                // console.log(shiftdata[provinceName],"todaySellLine");//只有省份数据
                // 今日可售班次
                var prodata = Number(shiftdata[provinceName]);            
                var pp = format(prodata);        //格式转化   
                console.log(typeof pp);
                if (pp == "NaN") {
                    var ppp = 0;
                    $("#saleBs span:eq(0)").html(ppp);  
                }else{
                    $("#saleBs span:eq(0)").html(pp); 
                }                
                
                // 客运站接入数据
                var stationNumber = localStorage.getItem("stationNumber");  
                var stationData = JSON.parse(stationNumber);
                console.log(stationData,"station"); 
                var arr = stationData;  
                // 寻找值
                // for (let i = 0; i < arr.length; i++) {
                //     console.log(provinceName);                    
                //     if(provinceName === arr[i].rgnname){                 
                //         var count = Number(arr[i].count);
                //         console.log(count,"count");

                //         var ct = format(count);        //格式转化   
                //         $("#saleSt span:eq(0)").html(ct);                          
                //     }
                //     // else if (provinceName !== arr[i].rgnname) {
                //     //     // $("#saleSt span:eq(0)").html("0");  
                //     //     return alert("AAA")  
                //     // }
                // } 

                // 查值               
                function getIndex(params) {
                    return params.rgnname == provinceName
                }             
                // arr.find(getIndex)

                var  e = arr.findIndex(getIndex);//返回-1  provinceName不在arr中
                // alert(e)
                if (e !== -1) {
                    var count = Number(arr[e].count);
                    console.log(count,"count");    
                    var ct = format(count);        //格式转化   
                    $("#saleSt span:eq(0)").html(ct);    
                }else{
                    $("#saleSt span:eq(0)").html("0"); 
                }      


            }    
                      
        },
        complete : function() {
            //请求完成的处理
        },
        error : function() {
            //请求出错处理
            $('#box').css('display','none');
            alert("该省暂无数据");
        }
    })
}


// 某省份历史10个月售票(左上)    许武成
function getProvinceten(provinceName){   
    $.ajax({
        url : 'http://10.237.22.177:8080/data/gph',
        type : 'GET',
        data : {
            "pn" : provinceName
        },
        async: true,
        dataType: 'json',  
        success : function(data) {
            // alert(data);
            console.log(data,"proten");//只有省份数据
            var msg = data;
            drawBarPro(msg);
            
        },
        complete : function() {
            //请求完成的处理
        },
        error : function() {
            //请求出错处理
            alert("加载失败");
        }
    })
}

//  数值格式转化, 12345  to 12,345
function format (num) {
    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}
// 获取日期
function getBeforeDate(n){
    var date = new Date() ;
    var year,month,day ;
    date.setDate(date.getDate()-n);
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate() ;
    s =  ( month < 10 ? ( '0' + month ) : month ) + '-' + ( day < 10 ? ( '0' + day ) : day) ;
    return s ;
}  
console.log(getBeforeDate(1));//昨天的日期   12-12  ok

// 获取月份
function getBeforeMonth(n){
    var date = new Date();
    var year,month,day ; 

    date.setMonth(date.getMonth()+1-n);  
    month = date.getMonth()+1;   
   
    s = month+'月';
    // s =  ( month < 10 ? ( '0' + month ) : month +'月') ;
    return s;
}  

// 获取年月
function getBeforeYM(n){
    var date = new Date() ;
    var year,month,day ;
    date.setMonth(date.getMonth()+1-n);  
    month = date.getMonth()+1;   
    year = date.getFullYear();   
    s =  year+""+( month < 10 ? ( '0' + month ) : month )  ;
    return s ;
}  
console.log(getBeforeYM(2));//201827
 
// var num = 0012345;
// alert(format(num));

// 数组大小排序
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}

// 封装转换方法
function transform(onlinevehiclecount){
    // var onlinevehiclecount = 99892934;
    var newNum = "";
        numlength = "";
    function PrefixInteger(num, n) {
        // return (Array(n).join(0) + num).slice(-n);
        newNum =  (Array(n).join(0) + num).slice(-n);
        numlength = num.toString().length;
        // console.log(newNum);        
    }
    PrefixInteger(onlinevehiclecount, 11)//11固定位
    // console.log(newNum, numlength);//7
    var remainder = parseInt(numlength/3);//2商
    var quotient= parseInt(numlength%3);//2余数
    
    // console.log(quotient);
    var newLength = "";
    if (quotient == 0) {
        newLength = remainder + numlength - 1;
    }else{
        newLength = remainder + numlength;
    }   
    // console.log(newLength);
    // 截取位数  14 - newLength
    var n = 14 - newLength ;      

    // var str="000123598752";
    var str=newNum.toString();

    var re=/(?=(?!(\b))(\d{3})+$)/g;
    str=str.replace(re,",");
    // alert(str);
    // console.log(typeof str); //string
    // 分割str 11 + 3 = 14
    // alert(str.slice(0,n))   //结果
    // alert(str.slice(n,14))   //结果

    var sfront = str.slice(0,n);
    // console.log(sfront.split(","));//["00", "0"]
    var strArr = sfront.split(",");
    // console.log(strArr);
    

    var strr = "";
     for (var i = 0; i < strArr.length-1; i++) {
        // strr += strArr[i]+ ",";
        // strArr.css({"color":"#162f93"});
        // strr += strArr[i].fontcolor("#162f93").position("relative")+ "<span style='color:red;position:relative;top:0px'>,</span>";
        // strr += strArr[i].CSS({"color":"#162f93"})+ "<span style='color:red;position:relative;top:0px'>,</span>";
        strr += strArr[i]+ "<span class='test0'>,</span>";


     }
     strr += strArr[strArr.length-1];

    //  console.log(  strr );
     
    //  去掉最后一个逗号(如果不需要去掉，就不用写)
    //  if (strr.length > 0) {
    //      strr = strr.substring(0, strr.length-1 );
    //  }
    
    //  return strr;
    //  console.log(strr);   
    
    var send = str.slice(n,14);
  
    // var inhtmlColor = "<p>" + sfront.fontcolor("#162f93") +  send.fontcolor("#ffd300") + "</p>";
    // var inhtmlColor = "<span class='ceshi'>" +  send.fontcolor("#ffd300") + "</span>";
    var inhtmlColor = "<span class='ceshi'>" +  send + "</span>";
    // var inhtmlColor = "<span class='ceshi'>" +  onlinevehiclecount + "</span>";

    return ssss = strr + inhtmlColor;
} 


// ajax封装
var dataUpload = {
    //ajax请求数据
    method:function(murl,mdata,method,time1,time2,success){
       /*首次读取*/
        setTimeout(function() {
            aJax();
        },time1);
        /*定时读取函数*/
        setInterval(function() {
            aJax();
        },time2);

        function aJax(){
            $.ajax({
                type: method,
                url: murl,
                dataType : "json",
                data: mdata,              
                error: function (data) {
                    console.log(data);
                    alert("请求失败");
                },
                success: function (data) {                        
                    //传出      
                    success?success(data):function(){};
                }
            });
        }    
      
    }
}

//调用 总售票量  许武成
dataUpload.method("http://10.237.22.177:8080/data/total","","GET",200,60000,function (data) {
    console.log(data,"总售票量");   //294812 "总售票量"
    var saletotal = data;   
    var sT = transform(saletotal); 
    $("#totalSale").html(sT ); 
});

// getpageview
// 访问量 
dataUpload.method("http://10.237.22.177:8080/getpageview","","GET",200,60000,function (data) {
    console.log(data,"visit");     
    var visitData = data;   
    var vD = transform(visitData); 
    $("#stationLine").html(vD);  

});

// 今日售票量   许武成
dataUpload.method("http://10.237.22.177:8080/data/today","","GET",200,60000,function (data) {
    console.log(data,"today");         
    var onlinevehiclecount = data;  
    var ssss = transform(onlinevehiclecount);    
    $(".shuttleLine").html(ssss );   

});  

//今日可销售班次，全国，实时      王帅
dataUpload.method("http://10.237.22.177:8080/todaySellLine","","GET",200,60000,function (data) {
    console.log(data,"可售班次");     
    // 存入session
    localStorage.setItem("todaySellLine",JSON.stringify(data)); 
    var shifttotal = data.count;  
    var st = transform(shifttotal); 
    // console.log(st);    
    $("#ticketsSale").html(st); 

});
//客运站接入量 王帅
dataUpload.method("http://10.237.22.177:8080/stationsNumber","","GET",200,60000,function (data) {
    console.log(data,"客运站");     
    // 存入session
    localStorage.setItem("stationNumber",JSON.stringify(data)); 
    // console.log(data[11].count,"客运站");    

   
    // console.log(data.sort(compare('count')));
    var newArr = data.sort(compare('count'));
    var stationNum = Number(newArr[0].count);
    // console.log(newArr);    

    var sN = format(stationNum);
    $(".stationNum").html(sN);  

});


// 过去7天售票量(右上)   许武成
// [1799,1804,1984,2557,1876,2873,2273]  (结果依次为前一天,前两天,,,前七天)
dataUpload.method("http://10.237.22.177:8080/data/glt","","GET",200,300000,function (data) {
    console.log(data,"week"); 
    var msg = data;
    drawTrend(msg);  
});

// 省份总售票量top10(左上)     许武成
// [{"北京":62383},{"河北":59493},{"河南":59023},{"天津":31891},{"广东":31491},{"广西":24644},{"辽宁":7671},{"山东":5597},{"海南":5246}]
dataUpload.method("http://10.237.22.177:8080/data/rank","","GET",200,300000,function (data) {
    console.log(data,"indexten");   
    // console.log(data[0].split(":"));
    // var a = console.log(data[0]);
    // var msg = data;   
    // localStorage.setItem("proRank",JSON.stringify(data));
    sessionStorage.setItem("proRank",JSON.stringify(data));
        
    drawBar();
//     var a = data[0];
//     console.log(a);    
//     // Object.keys(a)[0];
//    console.log(Object.keys(a)[0]);
//    console.log(Object.values(a)[0]); 
});

//  历史票价班次 里程分布   王帅
// dataUpload.method("http://172.29.201.233:8080/historyMileagePrice","","GET",200,300000,function (data) {
dataUpload.method("http://10.237.22.177:8080/historyMileagePrice","","GET",200,300000,function (data) {    
    console.log(data,"班次&价格");  
    var msg = data; 
    drawPie(msg);

    // 100Km以内: "2939630"
    // 100~200Km: "404098"
    // 100~300元: "67239"
    // 500~1000Km: "23266"
    // 1000Km以上: "3717"
    // 大于300元: "2657"
    // 小于100元: "3229228"
});
//乘客画像   许武成
dataUpload.method("http://10.237.22.177:8080/data/user","","GET",200,300000,function (data) {    
    console.log(data,"乘客画像");  
    var msg = data; 
    drawPassager(msg);
});

// top10 路线     王帅
dataUpload.method("http://10.237.22.177:8080/hotLine","","GET",0,60000,function (data) {
    console.log(data,"top10");   
    // {startStations: "靖西站", endStations: "百色", count: "52"}
    var msgArr = data;
    var str = "";
    var ww = "";
    // console.log(msgArr[0].count);
    // var per = msgArr[0].count;
    $.each(msgArr,function(i,obj){    
        var per =  parseFloat(msgArr[i].count)/parseFloat(msgArr[0].count)*80+'%';    
       
        str += '<div class="line-part">';
            str += '<div class="line-progress">';
                str += '<span class="order-num">' + (i+1) + '</span>';
                str += '<span class="progressbar-title">'+ obj.startStations +'-'+ obj.endStations+'('+obj.count+'张'+')'+'</span>';
            str += '</div>';
            // way 1 变量加在css    !!!!!!!
            str += '<span class="progress progress-bar barbar" style="width:'+per+'">'+'</span>';
        str += '</div>';
    })
    
    // $(".range-part").append(str);//重复
    $(".range-part").html(str);  
    
    $(document).ready(function(){
        // 执行代码   
        // way 2 外部赋值宽度, Dom加载后获取width,改变宽度!!!!!!!
        var widthbar = $(".barbar");
        for (let i = 0; i < msgArr.length; i++) {
            // widthbar[i].style.width = parseFloat(msgArr[i].count)/parseFloat(msgArr[0].count)*80+'%';
            // console.log(msgArr); 
        }
            
    });

    $(document).ready(function(){
        var widthRange = $('.line-part').width();  //获取width值。
        var widthTitle = $('.range-title').width();  //获取width值。

        // var widthRange = $('.progressbar-title').html();  。
        // for (let i = 0; i < msgArr.length; i++) {           
        // console.log(widthRange);//
        // console.log(widthTitle,"widthTitle");
        if (widthTitle>(widthRange-10)) {
            // $(this).context
            // $('.range-title').css("font-size",'15px' );
        }        
        // 遍历控制字体显示 防止溢出
        $(".progressbar-title").each(function(i,val){
            //ii 指第几个元素的序列号。
            //vv 指遍历得到的元素。
            // console.log(i,val);  
            var list = $(this);//n.fn.init [span.progressbar-title, context: span.progressbar-title]
            // console.log(list);
            var widthbar = $(this).context.offsetWidth;
            // console.log(widthbar);
            if (widthbar>widthRange*0.9) {
                // $(this).context
                $(this).css("font-size",'0.56vw' );
            }
        })
    })
    
});

console.log(getBeforeYM(1));//201811 

//渠道 时间
// dataUpload.method("http://10.237.22.177:8080/selectchannel","","GET",function (data) {
//     console.log(data,"可售班次");     
//     // 存入session
//     localStorage.setItem("todaySellLine",JSON.stringify(data)); 
//     var shifttotal = data.count;   
//     // localStorage.setItem("test",shifttotal); 

//     var st = transform(shifttotal); 
//     $("#ticketsSale").html(st); 

// });
getTime()
// setInterval(getTime(), 3000);
// $(function(){
//     // setInterval("getTime();",3000); //每隔3秒运行一次
//     // window.setTimeout("getTime()", 3000);

// })

var sellTime = getBeforeYM(2);//201811 
console.log(sellTime);

function getTime(){   
    $.ajax({
        url : 'http://10.237.22.177:8080/selectchannel',
        // url : 'http://172.29.201.23:8080/selectchannel',
        // http://172.29.201.23:8080/select
        type : 'GET',     
        data : {
            "sellTime" : sellTime
        },
        async: true,      
        dataType: 'json',  
        success : function(data) {
            // alert(data);
            console.log(data,"Booking&Channel");//只有省份数据      
            var booking = data.booking;
            var channel = data.channel;
            console.log(booking,channel);
            drawPercent(channel);
            drawRouse(booking);  
        },
        complete : function() {
            //请求完成的处理
        },
        error : function() {
            //请求出错处理
            alert("加载失败");
        }
    })
}



