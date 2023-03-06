import { Card, Col, Row } from "antd";
import QRCode from "antd/es/qrcode";
import { useState } from "react";

export const QRMaker = () => {
  const [qrCode, setQrSode] = useState<string | undefined>();

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(event.target.value);
  //   };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQrSode(event.target.value);
  };

  return (
    <Card>
      <Row>
        <Col>
          <input
            onChange={(e) => handleInputChange(e)}
            className="mt4"
            type="text"
          />
        </Col>
        <Col>
          <QRCode value={qrCode || ""} />;
        </Col>
      </Row>
    </Card>
  );
};
