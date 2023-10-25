import React from 'react'
import { Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <>
      <Row>
        <Col sm={2}>
          <div className="test mt-10 w-full h-10 bg-red-600"></div>
        </Col>
        <Col sm={5}>
        <div className="test mt-10 w-full h-10 bg-green-600"></div>
        </Col>
        <Col sm={3}>
        <div className="test mt-10 w-full h-10 bg-blue-600"></div>
        </Col>
        <Col>
        <div className="test mt-10 w-full h-10 bg-pink-600"></div>
        </Col>
      </Row>
    </>
  )
}

export default Home