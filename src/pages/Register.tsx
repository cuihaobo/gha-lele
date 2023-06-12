import { Row, Col, Form, Input, Button } from 'antd';

export const Register = () => {
  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col>
        <Form>
          <Form.Item>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Repeat Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
