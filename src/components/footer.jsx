import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

class MyFooter extends Component {
    render() {
        return (
            <Footer style={{ textAlign: "center" }}>
                疫情大数据 ©2020 
            </Footer>
        );
    }
}

export default MyFooter;
