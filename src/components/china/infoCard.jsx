import React, { Component } from "react";
import { Card, Col, Row } from "antd";

import "../css/infoCard.css";

import { reqInfoCardInChina } from "../../api";

class InfoCardInChina extends Component {
    state = {
        currentConfirmedCount: 0,
        suspectedCount: 0,
        curedCount: 0,
        confirmedCount: 0,
    };
    async componentDidMount() {
        const response = await reqInfoCardInChina();
        this.setState((this.state = response));
    }

    render() {
        const {
            currentConfirmedCount,
            suspectedCount,
            curedCount,
            confirmedCount,
        } = this.state;
        return (
            <div className="site-card-wrapper">
                <Row gutter={32}>
                    <Col span={12}>
                        <Card
                            className="infoCard"
                            title="现有确诊"
                            bordered={false}
                            style={{ color: "rgb(255,106,87)" }}
                        >
                            {currentConfirmedCount}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="infoCard"
                            title="现有疑似"
                            bordered={false}
                            style={{ color: "rgb(236,146,23)" }}
                        >
                            {suspectedCount}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="infoCard"
                            title="累计确诊"
                            bordered={false}
                            style={{ color: "rgb(232,49,50)" }}
                        >
                            {confirmedCount}
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            className="infoCard"
                            title="累计治愈"
                            bordered={false}
                            style={{ color: "rgb(16,174,181)" }}
                        >
                            {curedCount}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default InfoCardInChina;
