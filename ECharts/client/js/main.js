var data={};//从服务器端返回的数据对象

document.getElementById("btn").addEventListener("click",ajax,true);

function ajax(){
	var xhr=new XMLHttpRequest();
	function callback(){
		if(xhr.readyState==4){			
			if((xhr.status>=200&&xhr.status<300)||xhr.status==304){	
				data=JSON.parse(xhr.responseText);
				document.getElementById('content').innerText=JSON.stringify(data);
				
				var obj=document.getElementById('main');
				chart.init(obj,data);					
			}
		}
	}
	xhr.open('get',"http://localhost:3000/",true);
	xhr.onreadystatechange=callback;
	xhr.send(null);
}

/*
	@parms:obj 表格的dom对象
	@parms:data  服务器端返回的数据对象
*/
var chart={
	init:function(obj,data){
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(obj);
		myChart.showLoading();
		// 指定图表的配置项和数据
	    var option = {
	        title: {
	            text: data.title
	        },
	        tooltip: data.tooltip,
	        legend: {
	            data:data.legend.data
	        },
	        xAxis: {
	            data: data.xAxis.data
	        },
	        yAxis: data.yAxis,
	        series: data.series
	    };
	    console.log(option);
	    
	    // 2000毫秒的loading的时间
	    setTimeout(function(){
	    	myChart.hideLoading();
	    	// 使用刚指定的配置项和数据显示图表。
	    	myChart.setOption(option);
	    },2000);
		
	}
}
