var loc = location.href;
var n1 = loc.length;//地址的总长度
var n2 = loc.indexOf("=");//取得=号的位置
var id = decodeURI(loc.substr(n2+1, n1-n2));//从=号后面的内容
var count = 0; //购物车中的商品种类
var sumPrice = 0;//购物车中的所有选中商品的价格
    //document.write(id)
alert("欢迎你！" + id);
