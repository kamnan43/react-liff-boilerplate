import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './style.css'

class Tf2 extends Component {
  render() {
    return (
      <div className="wrap-tf9">
        <div className="navi-header">Select Transfer Option</div>
        <div className="bg-red-savingPlan">
          <fieldset className="tf9_fieldset">
            <Form.Group as={Row}>
              <Col sm={12}>
                <Form.Check
                  type="radio"
                  label="to own saving account"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="to other bank account"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="to promptpay"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
              
            </Form.Group>
          </fieldset>
        </div>
      </div>
    )
  }
}

export default Tf2;