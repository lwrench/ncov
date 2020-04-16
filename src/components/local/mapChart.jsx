import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs } from "antd";
import echarts from "echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/visualMap";
import "echarts/lib/chart/map";

import "../css/mapChart.css";

import "echarts/map/js/province/anhui";
import "echarts/map/js/province/aomen";
import "echarts/map/js/province/beijing";
import "echarts/map/js/province/chongqing";
import "echarts/map/js/province/fujian";
import "echarts/map/js/province/gansu";
import "echarts/map/js/province/guangdong";
import "echarts/map/js/province/guangxi";
import "echarts/map/js/province/guizhou";
import "echarts/map/js/province/hainan";
import "echarts/map/js/province/hebei";
import "echarts/map/js/province/heilongjiang";
import "echarts/map/js/province/henan";
import "echarts/map/js/province/hubei";
import "echarts/map/js/province/hunan";
import "echarts/map/js/province/jiangsu";
import "echarts/map/js/province/jiangxi";
import "echarts/map/js/province/jilin";
import "echarts/map/js/province/liaoning";
import "echarts/map/js/province/neimenggu";
import "echarts/map/js/province/ningxia";
import "echarts/map/js/province/qinghai";
import "echarts/map/js/province/shandong";
import "echarts/map/js/province/shanghai";
import "echarts/map/js/province/shanxi";
import "echarts/map/js/province/sichuan";
import "echarts/map/js/province/taiwan";
import "echarts/map/js/province/tianjin";
import "echarts/map/js/province/xianggang";
import "echarts/map/js/province/xinjiang";
import "echarts/map/js/province/xizang";
import "echarts/map/js/province/yunnan";
import "echarts/map/js/province/zhejiang";

const { TabPane } = Tabs;

class MapChartLocal extends Component {
    static propTypes = {
        location: PropTypes.string.isRequired,
    };
    state={
        all:[]
    }
    componentDidMount() {
        const { location } = this.props;
        // console.log("location", location);
        const text = location + "现有累计确诊人数分布图";
        const chart = echarts.init(this.refs.map);
        chart.setOption({
            title: {
                text: text,
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
                        gt: 1000,
                        label: "> 1000 人",
                        color: "#7f1100",
                    },
                    {
                        gte: 100,
                        lte: 1000,
                        label: "100 - 1000 人",
                        color: "#ff5428",
                    },
                    {
                        gte: 10,
                        lt: 100,
                        label: "10 - 100 人",
                        color: "#ff8c71",
                    },
                    {
                        gte: 1,
                        lt: 9,
                        label: "1 - 9 人",
                        color: "#ffd768",
                    },
                    {
                        value: 0,
                        color: "#ffffff",
                    },
                ],
                show: !0,
            },
            geo: {
                map: location,
                roam: !1,
                scaleLimit: {
                    min: 1,
                    max: 2,
                },
                zoom: 1.2,
                top: 100,
                // bottom: 100,

                label: {
                    normal: {
                        show: !0,
                        fontSize: "12",
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
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0,
                    },
                },
            },
        });

        chart.showLoading();
        // const all = await reqMapChartInChinaAll();
        // this.setState(this.state = {all});
        chart.hideLoading();
        chart.setOption({
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

export default MapChartLocal;
