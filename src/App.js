import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./componint/formInput";
import QA from "./componint/QA";
import { question } from "./data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // add new item
  const [data, setData] = useState(question);
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الإضافة بنجاح", "Success");
  };

  // delete all items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    // splice to delete all otem from array from zero to end
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "Success");
  };
  // delete one of item from array
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    notify("تم حذف السؤال بنجاح", "Success");

    setData([...items]);
    if (items.length <= 0) {
      deleteAllItems();
    }
  };
  //  to push notification
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "Success") {
      toast.success(message);
    }
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">أسئلة واجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify} />
            <QA data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem("items") != null ? (
              <button onClick={deleteAllItems} className="btn-color w-100 my-3">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
