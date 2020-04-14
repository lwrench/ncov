import React, { Component } from "react";
import { Tabs } from "antd";

import {
    reqConfirmTrendInWorld,
    reqDeadTrendInWorld,
} from "../../api";

import echarts from "echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

import "../css/trend.css";
const { TabPane } = Tabs;

class TrendInWorld extends Component {
    state = {
        trend1: { dateList: [], num: [] },
        
        trend2: { dateList: [], deadNum: [], cureNum: [] },
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
        const trend1 = await reqConfirmTrendInWorld();
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
                text: "疫情累计治愈死亡趋势图",
            },
            legend: {},
            tooltip: {},
            xAxis: { data: [] },
            yAxis: {},
        });
        chart2.showLoading();
        const trend2 = await reqDeadTrendInWorld();
        this.setState((this.state = { trend2 }));
        chart2.hideLoading();
        chart2.setOption({
            xAxis: {
                data: this.state.trend2.dateList,
            },
            series: [
                {
                    name: "治愈人数",
                    type: "line",
                    data: this.state.trend2.cureNum,
                },
                {
                    name: "死亡人数",
                    type: "line",
                    data: this.state.trend2.deadNum,
                },
            ],
        });
    }
    render() {
        return (
            <div className="card-container">
                <Tabs className="trendTab" defaultActiveKey="1">
                    <TabPane tab="国外疫情确诊趋势" key="1" forceRender="true">
                        <div
                            className="trend1"
                            ref="trend1"
                            style={{ width: 800, height: 500 }}
                        ></div>
                    </TabPane>
                    <TabPane tab="国外累计治愈死亡" key="2" forceRender="true">
                        <div
                            className="trend2"
                            ref="trend2"
                            style={{ width: 800, height: 500 }}
                        ></div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default TrendInWorld;
