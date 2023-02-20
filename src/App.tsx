import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
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
const { Content, Header, Sider } = Layout;
function App() {
  const [count, setCount] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [load, setLoad] = useState(false);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    return dateString;
  };
  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ background: "white" }}>
        <div className="logo" />
        
      </Header>
      <Layout>
        
        <Content>
          <div>
            <Row>
              <Col span={8}>
              <Button type="primary" danger>
              Primary
            </Button>
            <Switch
                  checkedChildren="david is sleepy"
                  unCheckedChildren="david is not sleepy"
                  loading={load}
                />
            <Form.Item
              label="Today(this morning)david is sleepy or not"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
              </Col>
              <Col span={8}>
                <Card
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
                </Card>
                <QRCode value="https://china.nba.com/lakers" />
                <Space direction="vertical">
              <DatePicker onChange={onchange} />
              <DatePicker onChange={onchange} picker="week" />
              <DatePicker onChange={onchange} picker="month" />
              <DatePicker onChange={onchange} picker="quarter" />
              <DatePicker onChange={onchange} picker="year" />
            </Space>
              </Col>
              <Col span={8}>
              <Space wrap>
              
              <QRCode
                value="https://ant.design/"
                status="expired"
                onRefresh={() => console.log("refresh")}
              />
            </Space>
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
