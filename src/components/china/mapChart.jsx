import React, { Component } from "react";
import { Tabs } from "antd";
import echarts from "echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
import "echarts/lib/chart/map";
import "echarts/map/js/china";

import "../css/mapChart.css";

import { reqMapChartInChinaAll } from "../../api";

const { TabPane } = Tabs;

class MapChartInChina extends Component {
    state = {
        all: [],
    };

    async componentDidMount() {
        const chart1 = echarts.init(this.refs.map);
        chart1.setOption({
            title: {
                text: "全国现有确诊人数分布图",
            },
            tooltip: {
                triggerOn: "click",
                formatter: function (e) {
                    return e.seriesName + "<br />" + e.name + "：" + e.value;
                },
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                bottom: 40,
                showLabel: !0,
                text: ["高", "低"],
                pieces: [
                    {
                        gt: 10000,
                        label: "> 10000 人",
                        color: "#7f1100",
                    },
                    {
                        gte: 1000,
                        lte: 9999,
                        label: "1000 - 9999人",
                        color: "#cc2929",
                    },

                    {
                        gte: 100,
                        lte: 999,
                        label: "100 - 999 人",
                        color: "#ff5428",
                    },
                    {
                        gte: 10,
                        lte: 99,
                        label: "10 - 99 人",
                        color: "#ff8c71",
                    },
                    {
                        gte: 1,
                        lte: 9,
                        label: "1 - 9 人",
                        color: "#ffffff",
                    },
                ],
                show: !0,
            },
            geo: {
                map: "china",
                roam: !1,
                scaleLimit: {
                    min: 1,
                    max: 2,
                },
                zoom: 1.23,
                top: 120,
                label: {
                    normal: {
                        show: !0,
                        fontSize: "14",
                        color: "rgba(0,0,0,0.7)",
                    },
                },
                itemStyle: {
                    normal: {
                        //shadowBlur: 50,
                        //shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)",
                    },
                    emphasis: {
                        areaColor: "#2C98D7",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0,
                    },
                },
            },
        });
        chart1.showLoading();
        const all = await reqMapChartInChinaAll();
        this.setState((this.state = { all }));
        chart1.hideLoading();
        chart1.setOption({
            series: [
                {
                    name: "确诊病例",
                    type: "map",
                    geoIndex: 0,
                    data: this.state.all,
                },
            ],
        });
    }

    render() {
        return (
            <div>
                <Tabs
                    className="mapTabs"
                    defaultActiveKey="1"
                    size="large"
                    onTabClick={this.hundleTabClick}
                >
                    <TabPane tab="疫情地图" key="1">
                        <div
                            ref="map"
                            style={{ width: 800, height: 800 }}
                        ></div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default MapChartInChina;
