$(function(){
		graph_1();
		function log(data){
			console.log(data);
		}
		function graph_1(){
			// // 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('graph_1'),'light');
			
			// 使用刚指定的配置项和数据显示图表。
			$.get('test.json', function (data) {
			    myChart.setOption({
					title: {
						text: '三日播放量'
					},
					tooltip: {
						trigger: 'axis',
					},
					legend: {
						data: [
								{
									name:'xxxx',
									icon:'circle'
								},
								{
									name:'xxxx',
									icon:'circle'
								},
								{
									name:'xxxx',
									icon:'circle'
								}
							]
					},
					xAxis: {
						name: '日期',
						data: data.days
					},
					yAxis: {
						name: '播放量'
						
					},
			        series : [
						{
							name: data.days[0],
							type: 'line',
							data:data.play[0]
						},
						{
							name: data.days[1],
							type: 'line',
							data:data.play[1]
						},
						{
							name: data.days[2],
							type: 'line',
							data:data.play[2]
						}
					]
			    })
			}, 'json')
		}

	
}
)