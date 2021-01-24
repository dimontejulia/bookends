import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Confirmation(props) {
  return (
    <div aria-live='polite' aria-atomic='true'>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => props.setShow({ item: '', status: false })}
            show={props.show.status}
            delay={3000}
            autohide
            className='confirmation-box'
          >
            <Toast.Header>
              {/* <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              /> */}
              <h3 className='mr-auto'>{props.show.item}</h3>
            </Toast.Header>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}
