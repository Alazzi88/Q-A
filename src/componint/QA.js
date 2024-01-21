import React from "react";
import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { question } from "../data";

const QA = ({  deleteOneItem }) => {

const dataLocal = JSON.parse(localStorage.getItem("items"))

  // to delete one of item
  const onDeleteItem = (ID) => {
    if (localStorage.getItem("items")!= null) {
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deleteOneItem(question)
    }
  };
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items")!= null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="px-3 d-inline text-end">{item.a}</div>
                  <button
                    onClick={() => {
                      onDeleteItem(item.id);
                    }}
                    className="btn-color"
                  >
                    مسح
                  </button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> لا يوجد اسئله </h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QA;
