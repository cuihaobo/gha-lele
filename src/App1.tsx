import {
  ClockCircleOutlined,
  FrownOutlined,
  LikeOutlined,
  MailOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./App.css";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import { MenuProps, Statistic, Timeline } from "antd";
import dayjs from "dayjs";
import { QRMaker } from "./QRMaker";
import { router } from "./routes";
import { Router, Routes } from "react-router-dom";
import {
  Layout,
  Menu,
  Button,
  Upload,
  Form,
  Switch,
  Space,
  DatePicker,
  Card,
  QRCode,
  DatePickerProps,
  Row,
  Col,
} from "antd";
import Meta from "antd/es/card/Meta";
import { RouterProvider } from 'react-router-dom'
const { Content, Header, Sider } = Layout;
function App() {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);//IsOn:reading(true,false) setIsOn:changing
  const [collapsed, setCollapsed] = useState(true);
  const [show,setshow] = useState(false);
  const [load, setLoad] = useState(false);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    return dayjs("2022-06-30");
  };

  const items: MenuProps["items"] = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
      ],
    },
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ background: "white" }}>
        <div className="logo" />
      </Header>
      <Layout>
        <Content>
          <RouterProvider router={router} />
          <div>
            <Row>
              <Col span={8}>
                <Button type="primary" danger onClick={()=>{
                  console.log("helloworld");
                  setCollapsed(!collapsed);
                  console.log(collapsed);
                }}>
                  
                  Primary
                </Button>
                <Button 
                  type="primary"
                  danger
                  onClick ={() => {
                  setshow(!show);
                  console.log(show)
                  }}
                  >Primary Button</Button>
                <Switch
                  checkedChildren="david is sleepy"
                  unCheckedChildren="david is not sleepy"
                  loading={load}
                  onChange={(x: any) => {
                    console.log({ x });
                    setIsOn(x);
                  }}
                />
                <QRMaker />
                <Card title="Card" size="small">
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Form.Item
                  label="Today(this morning)david is sleepy or not"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Col>
              <Col span={8}>
                {collapsed && <Card
                  hoverable
                  style={{ width: 240 }}  
                  cover={
                    <img
                      alt="example"
                      src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2023%2F0213%2Faa7f2cb2j00rq0g1j00psc000ks00hcm.jpg&thumbnail=660x2147483647&quality=80&type=jpg"
                    />
                  }
                >
                  <Meta title="Lakers" description="china.nba.com/lakers" />
                </Card>}
                {!isOn && (
                  <Card title="Lakers" size="small">
                    <p>Let's join LA Lakers!!!</p>
                    <QRCode value="https://china.nba.com/lakers" />
                  </Card>
                )}

                <Menu
                  onClick={() => console.log("dummy")}
                  mode="horizontal"
                  items={items}
                />
                {show &&(<Space direction="vertical">
                  <DatePicker />
                  <DatePicker picker="week" />
                  <DatePicker picker="month" />
                  <DatePicker picker="quarter" />
                  <DatePicker picker="year" />
                </Space>)}
              </Col>
              <Col span={8}>
                <Space wrap>
                  {isOn && (
                    <QRCode
                      value="https://ant.design/"
                      status="expired"
                      onRefresh={() => console.log("refresh")}
                    />
                  )}
                </Space>
                <Row gutter={16}>
                  <Col span={12}>
                    <Statistic
                      title="Feedback"
                      value={1128}
                      prefix={<LikeOutlined />}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Unmerged" value={0} suffix="/ 100" />
                  </Col>
                </Row>
                <Timeline
                  items={[
                    {
                      children: "David works very hard every day",
                    },
                    {
                      children: "He only slept for about 4hours yesterday",
                    },
                    {
                      dot: (
                        <ClockCircleOutlined className="timeline-clock-icon" />
                      ),
                      color: "red",
                      children: "So now he is very sleepy ",
                    },
                  ]}
                />
              </Col>
            </Row>

            <Upload action="/upload.do" listType="picture-card">
              <div>
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>

            <Space direction="vertical">
              <Switch
                checkedChildren="开启"
                unCheckedChildren="关闭"
                defaultChecked
                onChange={(e) => {
                  console.log(e);
                  setLoad(e);
                }}
              />

              <Switch unCheckedChildren={<CloseOutlined />} defaultChecked />
              <FrownOutlined />
            </Space>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
