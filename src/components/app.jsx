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
    getLocation() {
        const BMap = window.BMap;
        const geoc = new BMap.Geocoder();
        const geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {
            geoc.getLocation(r.point, function (rs) {
                console.log(rs);
            });
        });
    }
    render() {
        // this.getLocation();
        return (
            <Layout className="layout">
                <MyHeader getKey={this.getKey} />
                <MyContent select={this.state.key} />
                <MyFooter />
            </Layout>
        );
    }
}

export default App;
