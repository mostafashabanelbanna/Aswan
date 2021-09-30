import React, { useState } from "react";
import { feedBackApi } from '../../store/actions/News_Action'
import Alert from "react-bootstrap/Alert";
import ContactUsModal from "../modal";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  const feedBack = async (e) => {
    let obj = {
      email,
      name,
      subject,
      message,
    };
    e.preventDefault();
    try {
      let res = await feedBackApi(obj);
      setSuccessShow(true);
    } catch (e) {
      setDangerShow(true);
    }
  };

  return (
    <div>
      <div className="bg-light">
        <div className="container p-0 py-4">
          <div className="mt-2 d-flex">
            <img src="/images/icons/contact_titel-0٢.png" width="80px" />
            <div className="  underline">
              {" "}
              <h3 className="mt-4 me-2 text-dark">اتصل بنا </h3>
            </div>
          </div>
          <div className=" row p-0 m-0">
            <div className="col-sm-4 col-12 p-0 order-sm-1 order-2">
              <form className="justify-content-center col-11" onSubmit={feedBack}>
                <div className="form-group mb-3 mt-2">
                  <input
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="الاسم"
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <input
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                    type="email"
                    className="form-control border-0"
                    placeholder="البريد الالكتروني"
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <input
                    required
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.currentTarget.value);
                    }}
                    type="text"
                    className="form-control border-0"
                    placeholder="الموضوع"
                  />
                </div>
                <div className="form-group mb-3 mt-2">
                  <textarea
                    required
                    value={message}
                    onChange={(e) => {
                      setMessage(e.currentTarget.value);
                    }}
                    placeholder="الرسالة"
                    className="form-control border-0"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-2 d-flex justify-content-end">
                  <div className="align-items-center d-flex j">
                    <button
                      // onClick={}
                      type="submit"
                      className="myButton mx-1 mb-2 mb-sm-0"
                      style={{ verticalAlign: "middle" }}
                    >
                      <span>ارسال</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-sm-7 col-12 order-sm-2 order-1 me-sm-3 me-0 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466348.8095875423!2d32.65012447711616!3d24.053973643294743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14367b5ab1a30e5f%3A0xfb109fe337cabccb!2z2KPYs9mI2KfZhg!5e0!3m2!1sar!2seg!4v1630243110340!5m2!1sar!2seg"
                width="100%"
                height="95%"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <ContactUsModal
              dialogClassName="success"
              show={successShow}
              onHide={() => setSuccessShow(false)}
            />
            <ContactUsModal
              dialogClassName="danger"
              show={dangerShow}
              onHide={() => setDangerShow(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
