$(function(){
		function graph_1(){
			// // 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('graph_1'),'dark');
			
			// 使用刚指定的配置项和数据显示图表。
			$.get('test.json', function (data) {
				myChart.setOption({
					title: {
						text: '三日播放量测试图表'
					},
					tooltip: {
						trigger: 'axis',
					},
					legend: {},
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
				graph_1();
		function graph_2(){
				// // 基于准备好的dom，初始化echarts实例
				var myChart_2 = echarts.init(document.getElementById('graph_2'),'dark');
				
				// 使用刚指定的配置项和数据显示图表。
				$.get('test.json', function (data) {
					myChart_2.setOption({
						title: {
							text: '三日播放量测试图表'
						},
						tooltip: {
							trigger: 'axis',
						},
						legend: {},
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
				graph_2();
		function graph_3(){
				// // 基于准备好的dom，初始化echarts实例
				var myChart_3 = echarts.init(document.getElementById('graph_3'),'dark');
				
				// 使用刚指定的配置项和数据显示图表。
				$.get('test.json', function (data) {
					myChart_3.setOption({
						title: {
							text: '三日播放量测试图表'
						},
						tooltip: {
							trigger: 'axis',
						},
						legend: {},
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
		
				graph_3();


})