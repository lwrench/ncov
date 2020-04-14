import React, { Component } from "react";
import { Tabs } from "antd";

import {
    reqIncreaseTrendInChina,
    reqConfirmTrendInChina,
    reqDeadCureTrendInChina,
} from "../../api";

import echarts from "echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

import "../css/trend.css";
const { TabPane } = Tabs;

class TrendInChina extends Component {
    state = {
        trend1: { dateList: [], num: [] },
        trend2: { dateList: [], num: [] },
        trend3: { dateList: [], deadNum: [], cureNum: [] },
    };
    async componentDidMount() {
        const chart1 = echarts.init(this.refs.trend1);
        chart1.setOption({
            title: {
                text: "疫情每日新增趋势图",
            },
            tooltip: {},
            legend: {},
            xAxis: {
                data: [],
            },
            yAxis: {},
        });
        chart1.showLoading();
        const trend1 = await reqIncreaseTrendInChina();
        this.setState((this.state = { trend1 }));
        chart1.hideLoading();
        chart1.setOption({
            xAxis: {
                data: this.state.trend1.dateList,
            },

            series: [
                {
                    name: "新增人数",
                    type: "line",
                    data: this.state.trend1.num,
                },
            ],
        });

        const chart2 = echarts.init(this.refs.trend2);
        chart2.setOption({
            title: {
                text: "疫情每日确诊趋势图",
            },
            tooltip: {},
            legend: {},
            xAxis: { data: [] },
            yAxis: {},
        });
        chart2.showLoading();
        const trend2 = await reqConfirmTrendInChina();
        this.setState((this.state = { trend2 }));
        chart2.hideLoading();
        chart2.setOption({
            xAxis: {
                data: this.state.trend2.dateList,
            },
            series: [
                {
                    name: "确诊人数",
                    type: "line",
                    data: this.state.trend2.num,
                },
            ],
        });

        const chart3 = echarts.init(this.refs.trend3);
        chart3.setOption({
            title: {
                text: "疫情累计治愈死亡趋势图",
            },
            legend: {},
            tooltip: {},
            xAxis: { data: [] },
            yAxis: {},
        });
        chart3.showLoading();
        const trend3 = await reqDeadCureTrendInChina();
        this.setState((this.state = { trend3 }));
        chart3.hideLoading();
        chart3.setOption({
            xAxis: {
                data: this.state.trend3.dateList,
            },
            series: [
                {
                    name: "治愈人数",
                    type: "line",
                    data: this.state.trend3.cureNum,
                },
                {
                    name: "死亡人数",
                    type: "line",
                    data: this.state.trend3.deadNum,
                },
            ],
        });
    }
    render() {
        return (
            <div className="card-container">
                <Tabs className="trendTab" defaultActiveKey="1">
                    <TabPane tab="全国疫情新增趋势" key="1">
                        <div
                            className="trend1"
                            ref="trend1"
                            style={{ width: 800, height: 500 }}
                        ></div>
                    </TabPane>
                    <TabPane tab="全国疫情确诊趋势" key="2" forceRender="true">
                        <div
                            className="trend2"
                            ref="trend2"
                            style={{ width: 800, height: 500 }}
                        ></div>
                    </TabPane>
                    <TabPane tab="全国累计治愈死亡" key="3" forceRender="true">
                        <div
                            className="trend3"
                            ref="trend3"
                            style={{ width: 800, height: 500 }}
                        ></div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TrendInChina;
