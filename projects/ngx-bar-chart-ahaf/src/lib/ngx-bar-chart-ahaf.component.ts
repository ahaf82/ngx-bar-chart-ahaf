import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'lib-ngx-bar-chart-ahaf',
	templateUrl: './ngx-bar-chart-ahaf.html',

	styleUrls: ['./ngx-bar-chart-ahaf.scss']
})
export class NgxBarChartAhafComponent implements OnInit {

	@Input()
	options = {
		chartTitle: "Chart-Title",
		yAxisMaxValue: 100,
		yAxisUnit: "Cars",
		barColor: "#38D430",
		barBackgroundColor: "#ececec"
	}

	/* data input */
	@Input()
	data = [
		{
			x: "1st Bar",
			y: 0,
		},
		{
			x: "2nd Bar",
			y: 0,
		},
		{
			x: "3rd Bar",
			y: 0,
		},
		{
			x: "4th Bar",
			y: 0,
		},
		{
			x: "5th Bar",
			y: 0,
		},
	]

	showFeedback: boolean = true;
	height: string = "20vw";
	minHeight: string = "286px";
	maxHeight: string = "300px";
	hover: any = {}
	barColor: string = "#38D430";
	barBackgroundColor: string = "#ececec";
	widthAxisPartition: number = 0;
	yAxisUnit: string = "hours";
	yAxisMaxValue: number = 100;
	totalBadges: number = 0;
	yAxisValues: string[] = ["100", "75", "50", "25", "0"];
	yUnit: string = "";
	showInPercent: boolean = false;

	constructor() { }

	ngOnInit(): void {
		this.widthAxisPartition = 100 / this.data.length;
	}

	ngOnChanges() {
		this.widthAxisPartition = 100 / this.data.length;
		if (!!this.options?.barColor) this.barColor = this.options.barColor;
		if (!!this.options?.barBackgroundColor) this.barBackgroundColor = this.options.barBackgroundColor;
		this.setYAxisValues();
	}

	setYAxisValues() {
		this.showInPercent = false;
		!!this.options.yAxisUnit ? this.yUnit = this.options.yAxisUnit : "%";
		this.yAxisMaxValue = !!this.options.yAxisMaxValue ? this.options.yAxisMaxValue : 100;
		this.yAxisValues = [`${this.yAxisMaxValue * 1}`, `${this.yAxisMaxValue * 0.75}`, `${this.yAxisMaxValue * 0.5}`, `${this.yAxisMaxValue * 0.25}`, `${this.yAxisMaxValue * 0}`];
	}

	setYAxisValuesToPercent() {
		if (!!this.options.yAxisMaxValue) {
			this.showInPercent = true;
			this.yAxisValues = [`100`, `75`, `50`, `25`, `0%
		`];
		}
	}

}
