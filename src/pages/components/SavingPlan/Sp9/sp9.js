import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import './style.css'

class Sp9 extends Component {
  render() {
    return (
      <div className="wrap-sp9">
        <div className="navi-header">Goal Summary</div>
        <div className="bg-red-savingPlan">
          <fieldset className="sp9_fieldset">
            <Form.Group as={Row}>
              <Col sm={12}>
                <Form.Check
                  type="radio"
                  label="Save 500 Bath per day for 10 day"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Save 2,500 Bath per week for 2 week every Tuesday"
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

export default Sp9;