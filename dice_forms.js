function makePlayer(playerNumber, rootDiv){

   var common=$("<div></div>");
         
        common.addClass("common");
        common.attr("id","player"+playerNumber);

        var playerName=$("<div></div>").text("Игрок "+playerNumber);
        playerName.addClass("playerName");

        var buttonGo=$("<button></button>").text("Кидай кубик");
        buttonGo.attr("id", playerNumber);
        buttonGo.addClass("btn");

        var circle1=$("<div></div>");
        var circle11=$("<div></div>").html("&#9679;");
        circle1.append(circle11);
        circle1.addClass("dice dice1");

        var circle2=$("<div></div>");
        var circle21=$("<div></div>").html("&#9679;");
        circle21.addClass("dice_bottom");
        var circle22=$("<div></div>").html("&#9679;");
        circle22.addClass("dice_top");
        circle2.addClass("dice dice2");
        circle2.append(circle21, circle22);

        var circle3=$("<div></div>");
        var circle31=$("<div></div>").html("&#9679;");
        circle31.addClass("dice_bottom");
        var circle32=$("<div></div>").html("&#9679;");
        circle32.addClass("dice_center");
        var circle33=$("<div></div>").html("&#9679;");
        circle33.addClass("dice_top");
        circle3.addClass("dice dice3");
        circle3.append(circle31, circle32, circle33);

        var circle4=$("<div></div>");
        circle4.addClass("dice dice4");
        var circle41=$("<div></div>").html("&#9679;");
        var circle42=$("<div></div>").html("&#9679;");
        var circle43=$("<div></div>").html("&#9679;");
        var circle44=$("<div></div>").html("&#9679;");
        circle4.append(circle41, circle42, circle43, circle44);

        var circle5=$("<div></div>");
        circle5.addClass("dice dice5");
          var circle51=$("<div></div>");
          circle51.addClass("dice_col");
            var circle511=$("<div></div>").html("&#9679;");
            var circle512=$("<div></div>").html("&#9679;");
          circle51.append(circle511, circle512);
          var circle52=$("<div></div>");
          circle52.addClass("dice_col");
            var circle521=$("<div></div>").html("&#9679;");
          circle52.append(circle521);
          var circle53=$("<div></div>");
          circle53.addClass("dice_col");
            var circle531=$("<div></div>").html("&#9679;");
            var circle532=$("<div></div>").html("&#9679;");
          circle53.append(circle531, circle532);
        circle5.append(circle51, circle52, circle53);

        var circle6=$("<div></div>");
        circle6.addClass("dice dice6");
        var circle61=$("<div></div>").html("&#9679;");
        var circle62=$("<div></div>").html("&#9679;");
        var circle63=$("<div></div>").html("&#9679;");
        var circle64=$("<div></div>").html("&#9679;");
        var circle65=$("<div></div>").html("&#9679;");
        var circle66=$("<div></div>").html("&#9679;");
        circle6.append(circle61, circle62, circle63, circle64, circle65, circle66);

        common.append(playerName, buttonGo, circle1, circle2, circle3, circle4, circle5, circle6);
        $(rootDiv).append(common);

}

var coords=[[30,30], [35,80], [73,105],[107,135],[135,170],[170,200],//0-5
[215,200],[255, 185],[300,163],[345,140],[390,120],//6-10
[435,100],[480,77],[520,57],[560,40],[605,25], //11-15
[650, 15],[695,20],[735,40],[810,85],[850,145],//16-20
[930,105],[950,145],[990,125],[1030,105],[1070,85], //21-25
[1115,90],[1160,105],[1200,130],[1245,125],[1287,140],//26-30
[1330,180],[1325,230],[1360,350],[1380,390],[1400,430],//31-35
[1430,470],[1475,500],[1525,545],[1590,560],[1630,580],//36-40
[1670,600],[1715,595],[1760,575],[1780,535],[1780,490],//41-45
[1752,455],[1715,435],[1675,415],[1640,390],[1620 ,351],//46-50
[1625,308],[1640,267],[1660,229],[1685,195],[1720,158],//51-55
[1750,125],[1770,85],[1785,43],[1760,-5],[1690,-5],//56-60
[1630,10],[1585,90],[1545,85],[1480,90],[1445,120],//61-65
[1445,165],[1455,210],[1450,255],[1415,285],[1367,280],//66-70
[1320,290],[1275,310],[1230,350],[1190,370],[1150,390],//71-75
[1105,400],[1062,405],[1017,403],[975,380],[953,335],//76-80 
[965,293],[970,250],[923,212],[880,210],[880,270],//81-85
[890,310],[910,347],[905,390],[898,433],[880,475],//86-90
[855,512],[813,525],[775,545],[735,575],[715,620],//91-95
[600,650],[548,658],[490,660],[430,680],[360,670],//96-100
[308,645],[265,640],[220,655],[190,620],[165,575],//101-105
[130,540],[135,496],[142,452],[140,409],[135,365],//106-110
[130,321],[165,280],[210,283],[260,278],[305,255],//111-115
[358,265],[400,230],[455,230],[507,220],[553,210],//116-120
[620,225],[615,270],[608,315],[605,360],[607,405],//121-125
[610,450],[615,495],[615,540],[625,585],[654,620],//126-130
[677,660],[718,680],[765,682],[810,684],[855,686],//131-135
[900,688],[945,688],[990,686],[1035,684],[1080,681],//136-140
[1125,678],[1170,671],[1212,653],[1255,640],[1300,630],//141-145
[1300,580]//finish
           ];

var colors=["#00FF7F",  "yellow", "#00FFFF","#fa3737","#8B008B","#FF8C00", "#FF00FF", "#0000CD", "#8B0000","#C0C0C0"];

var positions=[];

function makeRound(playerNumber, rootDiv, amountPlayers){
    var round=$("<div></div>");
    round.addClass("round");
    round.attr("id", "round"+playerNumber);
    // var diff=(11-amountPlayers)*0.5;
    round.css({left:(coords[0][0]+(playerNumber-1)*45)+3+"px", top:(coords[0][1])+4+"px", "border-color": colors[playerNumber-1]});
    $(rootDiv).append(round);
}
var finishFlag=false;
