import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";

import "./css/header.css";

const { Header } = Layout;

class MyHeader extends Component {
    static propTypes = {
        getKey: PropTypes.func.isRequired
    };

    hundleClick=(key)=>{
        this.props.getKey(key.key);
    };

    render() {
        return (
            <Header className="header" theme="light">
                <Menu
                    className="headerMenu"
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    onClick={this.hundleClick}
                >
                    <Menu.Item className="headerMenuItem" key="1">
                        国内疫情
                    </Menu.Item>
                    <Menu.Item className="headerMenuItem" key="2">
                        本地疫情
                    </Menu.Item>
                    <Menu.Item className="headerMenuItem" key="3">
                        国外疫情
                    </Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default MyHeader;
