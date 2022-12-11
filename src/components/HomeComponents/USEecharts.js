import * as echart from 'echarts'

export default function(div,option){
    let chart=echart.init(div);
    chart.setOption(option);
    return chart;
}