import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from 'highcharts/highcharts-3d';

import { useViewport } from 'contexts/viewport/useViewport'

highcharts3d(Highcharts);

const symbolChartOptions = {
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        title: { text: 'Time', style: { color: "#fff" } },
        labels: { enabled: false },
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        minorTickLength: 0,
        tickLength: 0
    },
    yAxis: {
        title: { text: 'Cumulative rewards', style: { color: "#fff" } },
        labels: { enabled: false },
        gridLineColor: 'transparent',
    },
    tooltip: {
        crosshairs: true,
        shared: true,
        valuePrefix: '$'
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    chart: {
        type: 'spline',
        backgroundColor: 'transparent',
        animation: false,
        plotBackgroundColor: "rgba(0,0,0,0)",
    },
    legend: {
        enabled: false
    }
} 

export const SymbolChart = ({ series, height, className }) => {
    const ref = useRef();
    const chartRef = useRef();
    const [chartOptions, setChartOptions] = useState(symbolChartOptions);
    const { width: windowWidth } = useViewport();

    const formatSeries = (series) => {
        return [{
            name: 'Rewards',
            marker: {
                symbol: 'diamond',
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            },
            data: series.rewards,
        }];
    }

    useEffect(() => {
        if (chartRef?.current?.chart) {
            const chart = chartRef.current.chart;
            chart.setSize(ref.current.clientWidth, height);
            chart.redraw();
        }
    }, [windowWidth, chartRef?.current?.chart, ref?.current])

    useEffect(() => {
        if (!series) return;
        setChartOptions({ ...symbolChartOptions, series: formatSeries(series) });
    }, [series])

    useEffect(() => {
        if (ref.current && ref.current?.children[0]?.style) {
            ref.current.style.overflow = "";
            ref.current.children[0].style.overflow = "";
        }
    }, [chartOptions, ref]);

    return (
        <ChartContainer ref = {ref} className={className}>
            <HighchartsReact ref={chartRef} Highcharts={Highcharts} options={chartOptions} allowChartUpdate={true}></HighchartsReact>
        </ChartContainer>
    )
}

const ChartContainer = styled.div`
    width: 100%;
    overflow: hidden;
`;