import React, { Component } from "react";
import PropTypes from "prop-types"
import { Layout } from "antd";

import InfoCardInChina from "./china/infoCard";
import InfoCardInWorld from "./world/infoCard"
import MapChartInChina from "./china/mapChart";
import MapChartInWorld from "./world/mapChart"
import TrendInChina from "./china/trend"
import TrendInWorld from "./world/trend"
import "./css/content.css";

const { Content } = Layout;

class MyContent extends Component {
    static propTypes={
        select:PropTypes.string.isRequired
    }

    render() {
        switch(this.props.select){
            case "1":
                return (
                    <Content className="content">
                        <InfoCardInChina/>
                        <MapChartInChina/>
                        <TrendInChina/>
                    </Content>
                );
            case "2":return (
                <Content className="content">
                    
                </Content>
            );
            case "3":
                return (
                    <Content className="content">
                        <InfoCardInWorld/>
                        <MapChartInWorld/>
                        <TrendInWorld/>
                    </Content>
                );
            default:break;
        }
        
        
    }
}

export default MyContent;
