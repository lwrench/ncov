import React, { Component } from 'react';
import PropTypes from "prop-types"
import { Card, Col, Row } from "antd";

import "../css/infoCard.css";

import {reqInfoCardInProvince} from "../../api"

class InfoCardLocal extends Component {
    static propTypes={
        location:PropTypes.string.isRequired
    }

    state = { provinceConfirm: 0, provinceDead: 0, provinceCure: 0 };
    async componentDidMount(){
        const {location}=this.props
        const response=await reqInfoCardInProvince({provinceName:location});
        // console.log(response)
        this.setState(this.state=response)
    }
    render() {
        const {provinceConfirm, provinceDead,provinceCure}=this.state
        return (
            <div className="site-card-wrapper">
                <Row gutter={40}>
                    <Col span={8}>
                        <Card
                            className="infoCard"
                            title="累计治愈"
                            bordered={false}
                            style={{ color: "rgb(16,174,181)" }}
                        >
                            {provinceCure}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="infoCard"
                            title="累计确证"
                            bordered={false}
                            style={{ color: "rgb(232,49,50)" }}
                        >
                            {provinceConfirm}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card
                            className="infoCard"
                            title="累计死亡"
                            bordered={false}
                            style={{ color: "rgb(#2F4554)" }}
                        >
                            {provinceDead}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InfoCardLocal;