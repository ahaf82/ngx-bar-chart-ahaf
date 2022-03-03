import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lib-ngx-bar-chart-ahaf',
	templateUrl: './ngx-bar-chart-ahaf.html',

	styleUrls: ['./ngx-bar-chart-ahaf.scss']
})
export class NgxBarChartAhafComponent implements OnInit {

	options = {
		chartTitle: "Chart-Title",
		xAxisTitle: "x-axis",
		yAxisTitle: "y-axis",
		displayedYAxisValues: [0, 25, 50, 75, 100],
	}

	data = [
		{
			x: "1st Bar",
			y: 83,
		},
		{
			x: "2nd Bar",
			y: 22,
		},
		{
			x: "3rd Bar",
			y: 47,
		},
		{
			x: "4th Bar",
			y: 98,
		},
		{
			x: "5th Bar",
			y: 36,
		},
	]

	showFeedback: boolean = true;
	height: number = 300;
	hover: any = {}
	widthAxisPartition: number = 0;
	totalBadges: number = 0;

	constructor() { }

	ngOnInit(): void {
		this.widthAxisPartition = 100 / this.data.length;
	}


}
