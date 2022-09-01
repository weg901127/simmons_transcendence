import {Button, Row, Col} from "antd";

const Home: React.FunctionComponent = () => {
  return <>
  {/* Todo 로그인 Button에 대한 Routing */}
    <Row justify="center">
      <Col style={{ position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
      <Button type="primary" size="large" onClick={() => window.location.replace("http://3.39.250.209/v0/auth/login")}>로그인</Button>
      </Col>
    </Row>
  </>;
};


export default Home;