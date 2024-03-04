import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from 'highcharts/highcharts-3d';

import { useViewport } from 'contexts/viewport/useViewport'

highcharts3d(Highcharts);

const plotBandChartOptions = {
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
        title: '',
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
          lineWidth: 4,
          states: {
            hover: {
              lineWidth: 5
            }
          },
          marker: {
            enabled: false
          },
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
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        itemMarginTop: 10,
        itemMarginBottom: 10,
        itemStyle: { color : "#fff" },
        itemHoverStyle: { color: "#fff" },
        floating: true,
    },
    colors: ['rgba(42, 109, 255, 1)', 'rgba(122, 72, 0, 1)'],
} 

export const PlotBandChart = ({ series, height, className }) => {
    const ref = useRef();
    const chartRef = useRef();
    const [chartOptions, setChartOptions] = useState(plotBandChartOptions);
    const { width: windowWidth } = useViewport();

    const formatSeries = (series) => {
        return [{
            name: 'Wins',
            data: series.wins,
        }, {
            name: 'Losses',
            data: series.losses,
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
        setChartOptions({ ...plotBandChartOptions, series: formatSeries(series) });
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