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

class MapChartInChina extends Component {
    state = {
        all: [
            
        ],
        data2: [
            {
                name: "大兴区",
                value: 390,
                alarm_num: 54,
            },
            {
                name: "西城",
                value: 119,
            },
            {
                name: "朝阳",
                value: 55,
                alarm_num: 9,
            },
            {
                name: "丰台",
                value: 329,
            },
            {
                name: "石景山",
                value: 219,
                alarm_num: 14,
            },
            {
                name: "海淀",
                value: 290,
            },
            {
                name: "门头沟",
                value: 319,
                alarm_num: 2,
            },
            {
                name: "房山",
                value: 199,
            },
            {
                name: "通州",
                value: 419,
                alarm_num: 11,
            },
            {
                name: "顺义",
                value: 299,
            },
            {
                name: "昌平",
                value: 49,
            },
            {
                name: "大兴",
                value: 219,
                alarm_num: 15,
            },
            {
                name: "怀柔",
                value: 89,
            },
            {
                name: "平谷",
                value: 49,
            },
            {
                name: "密云",
                value: 209,
                alarm_num: 27,
            },
            {
                name: "延庆",
                value: 129,
            },
        ]
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
        console.log("map",all)
        this.setState(this.state = {all});
        console.log("state",this.state.all)
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

        // const option2 = {
        //     title: {
        //         text: "全国现有累计确诊人数分布图",
        //     },
        //     tooltip: {
        //         triggerOn: "click",
        //         formatter: function (e) {
        //             return e.seriesName + "<br />" + e.name + "：" + e.value;
        //         },
        //     },
        //     visualMap: {
        //         min: 0,
        //         max: 1000,
        //         left: 26,
        //         bottom: 40,
        //         showLabel: !0,
        //         text: ["高", "低"],
        //         pieces: [
        //             {
        //                 gt: 1000,
        //                 label: "> 1000 人",
        //                 color: "#7f1100",
        //             },
        //             {
        //                 gte: 100,
        //                 lte: 1000,
        //                 label: "100 - 1000 人",
        //                 color: "#ff5428",
        //             },
        //             {
        //                 gte: 10,
        //                 lt: 100,
        //                 label: "10 - 100 人",
        //                 color: "#ff8c71",
        //             },
        //             {
        //                 gte: 1,
        //                 lt: 9,
        //                 label: "1 - 9 人",
        //                 color: "#ffd768",
        //             },
        //             {
        //                 value: 0,
        //                 color: "#ffffff",
        //             },
        //         ],
        //         show: !0,
        //     },
        //     geo: {
        //         map: "黑龙江",
        //         roam: !1,
        //         scaleLimit: {
        //             min: 1,
        //             max: 2,
        //         },
        //         zoom: 1.2,
        //         top: 100,
        //         bottom:100,

        //         label: {
        //             normal: {
        //                 show: !0,
        //                 fontSize: "12",
        //                 color: "rgba(0,0,0,0.7)",
        //             },
        //         },
        //         itemStyle: {
        //             normal: {
        //                 //shadowBlur: 50,
        //                 //shadowColor: 'rgba(0, 0, 0, 0.2)',
        //                 borderColor: "rgba(0, 0, 0, 0.2)",
        //             },
        //             emphasis: {
        //                 areaColor: "#f2d5ad",
        //                 shadowOffsetX: 0,
        //                 shadowOffsetY: 0,
        //                 borderWidth: 0,
        //             },
        //         },
        //     },
        //     series: [
        //         {
        //             name: "确诊病例",
        //             type: "map",
        //             geoIndex: 0,
        //             data: this.state.data2,
        //         },
        //     ],
        // };
        // const chart2 = echarts.init(document.getElementById("map2"));
        // chart2.setOption(option2);
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
