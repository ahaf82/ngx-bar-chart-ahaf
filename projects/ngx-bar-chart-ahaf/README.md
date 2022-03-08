# NgxBarChartAhaf

A simple Bar-Chart Module for your angular project

<br/>
<kbd><img src="https://github.com/ahaf82/ngx-bar-chart-ahaf/raw/main/projects/ngx-bar-chart-ahaf/src/pics/hours.png"></kbd>
<kbd><img src="https://github.com/ahaf82/ngx-bar-chart-ahaf/raw/main/projects/ngx-bar-chart-ahaf/src/pics/percent.png"></kbd>
<br/><br/>

## Getting Started

### Installation

Install via [npm][npm] package manager 

```bash
npm i ngx-bar-chart-ahaf
```

### Usage

Import `ngx-bar-chart-ahaf` module

```js
import { NgxBarChartAhafModule } from 'ngx-bar-chart-ahaf';
@NgModule({
  imports: [ NgxBarChartAhafModule ]
})
```

Then in HTML

```html
<lib-ngx-bar-chart-ahaf data]="barChartData" [options]="barChartOptions"></lib-ngx-bar-chart-ahaf>
```

### Configuration

```
barChartOptions = {
	chartTitle: "chart title",
	yAxisMaxValue: 100,
	yAxisUnit: "hours",
	barColor: "#38D430",
	barBackgroundColor: "#ececec"
}

barChartData = [
	{
		x: "1st Bar",
		y: 78,
	},
	{
		x: "2nd Bar",
		y: 67,
	},
	{
		x: "3rd Bar",
		y: 72,
	},
	{
		x: "4th Bar",
		y: 77,
	},
	{
		x: "5th Bar",
		y: 65,
	},
]

```

