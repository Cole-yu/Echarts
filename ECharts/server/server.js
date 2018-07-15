var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200,{"Access-Control-Allow-Origin":"*",'Content-Type':'text/json;charset=utf-8'});

	var option={
		"title":"ECharts 入门示例",
		"tooltip":{},
		"legend":{data:['销量']},
		"xAxis":{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},
		"yAxis":{},
		"series":[{name: '销量',type: 'bar',data: [5, 20, 36, 10, 10, 20]}]
	};

	var data=JSON.stringify(option);
	res.write(data);
	res.end();

}).listen(3000);
console.log('http listen localhost:3000');