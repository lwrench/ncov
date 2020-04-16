import React, { Component } from "react";
import { Layout } from "antd";

import "../index.css";
import MyHeader from "./header";
import MyFooter from "./footer";
import MyContent from "./content";

class App extends Component {
    state = {
        key: "1",
        location: "",
    };
    getKey = (key) => {
        this.setState({ key });
    };
    componentDidMount() {
        const map=new Map();
        map.set("黑龙","黑龙江");
        map.set("内蒙","内蒙古");
        const that = this
        const BMap = window.BMap;
        const geoc = new BMap.Geocoder();
        const geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            geoc.getLocation(r.point, function (rs) {
                let location=rs.address.substring(0,2)
                if(map.has(location)){
                    location=map.get(location)
                }
                that.setState({location})
            });
        });
        
    }

    render() {
        return (
            <Layout className="layout">
                <MyHeader getKey={this.getKey} />
                <MyContent select={this.state.key} location={this.state.location}/>
                <MyFooter />
            </Layout>
        );
    }
}

export default App;
