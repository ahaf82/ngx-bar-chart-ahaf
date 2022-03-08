# NgxBarChartAhaf

A simple Bar-Chart Module for your angular project

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
	options = {
		chartTitle: "chart title",
		yAxisMaxValue: 100,
		yAxisUnit: "hours",
		barColor: "#38D430",
		barBackgroundColor: "#ececec"
	}

	data = [
		{
			x: "1st Bar",
			y: 23,
		},
		{
			x: "2nd Bar",
			y: 65,
		},
		{
			x: "3rd Bar",
			y: 13,
		},
		{
			x: "4th Bar",
			y: 98,
		},
		{
			x: "5th Bar",
			y: 65,
		},
	]

```

