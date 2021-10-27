import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../Styles/forms.css";
import {
  DatePicker,
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/ar";
import "../ui/MUIcalender.css";
import { useState, useEffect } from "react";
import { eventApplyAPI } from "../../store/actions/forms-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactUsModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AgendaForm = (props) => {
  let title = props.content.title;
  if (props.content.title === null) {
    title = props.content.caption;
  }

  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState();
  const [Email, setEmail] = useState("");
  const [EventId, setEventId] = useState();
  const [NationalId, setNationalId] = useState();

  const [disabled, setDisabled] = useState(false);

  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  const SignupSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, "الإسم قصير جدا")
      .max(50, "الإسم طويل جدا")
      .trim("", "مطلوب *")
      .required("مطلوب *"),
    Mobile: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "رقم الموبايل غير صحيح")
      .required("مطلوب *"),
    Email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "برجاء إدخال بريد إلكتروني صحيح"
      )
      .required("مطلوب *"),
    NationalId: Yup.string()
      .matches(
        /(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/,
        "برجاء إدخال رقم بطاقة صحيح"
      )
      .required("مطلوب *"),
  });

  useEffect(() => {
    setEventId(props.content.id);
  }, []);

  const initialState = () => {
    setName("");
    setMobile();
    setEmail("");
    setEventId(props.content.id);
    setNationalId();
    setDisabled(false);
  };

  const renderFormModal = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        onHide={props.onHideEventModal}
        show={props.showEventModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">{title}</div>
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              props.onHideEventModal();
              initialState();
            }}
            style={{ cursor: "pointer", fontSize: "22px" }}
            className="align-self-start my-1 ms-2 text-danger fa-1x"
          />
        </Modal.Header>
        <Modal.Body>
          <div
            className="tab-pane fade show active"
            id="tab_direction-1"
            role="tabpanel"
          >
            <Formik
              initialValues={{
                Name: "",
                Mobile: "",
                Email: "",
                EventId: props.content.id,
                NationalId: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { setSubmitting }) => {
                const obj = new FormData();
                for (const objs in values) {
                  obj.append(objs, values[objs]);
                }

                if (disabled) {
                  return;
                } else {
                  setDisabled(true);
                }
                let res = await eventApplyAPI(obj);
                if (res.response?.data.status == 200) {
                  props.onHideEventModal();
                  initialState();
                  setSuccessShow(true);
                } else {
                  setDangerShow(true);
                  setDisabled(false);
                }
              }}
            >
              {(Formik) => (
                <form
                  className="panel-content justify-content-center col-12"
                  onSubmit={Formik.handleSubmit}
                >
                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          الاسم <span style={{ color: "red" }}> * </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="Namef"
                          name="Name"
                          required
                          placeholder="الاسم"
                          onChange={Formik.handleChange("Name")}
                        />
                        {Formik.touched.Name && Formik.errors.Name ? (
                          <div className="text-danger">
                            {Formik.errors.Name}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-md-6 col-12 ">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          الموبايل <span style={{ color: "red" }}>
                            {" "}
                            *{" "}
                          </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="Mobilef"
                          name="Mobile"
                          required
                          placeholder="الموبايل"
                          onChange={Formik.handleChange("Mobile")}
                        />
                        {Formik.touched.Mobile && Formik.errors.Mobile ? (
                          <div className="text-danger">
                            {Formik.errors.Mobile}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          البريد الالكتروني{" "}
                          <span style={{ color: "red" }}> * </span>{" "}
                        </label>
                        <input
                          type="email"
                          className="form-control text-right "
                          id="Emailf"
                          name="Email"
                          required
                          placeholder="البريد الالكتروني"
                          onChange={Formik.handleChange("Email")}
                        />
                        {Formik.touched.Email && Formik.errors.Email ? (
                          <div className="text-danger">
                            {Formik.errors.Email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-md-6 col-12 ">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          الرقم القومي <span style={{ color: "red" }}>
                            {" "}
                            *{" "}
                          </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="NationalIdf"
                          name="NationalId"
                          required
                          placeholder="الرقم القومي"
                          onChange={Formik.handleChange("NationalId")}
                        />
                        {Formik.touched.NationalId &&
                        Formik.errors.NationalId ? (
                          <div className="text-danger">
                            {Formik.errors.NationalId}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      id="savee"
                      type="submit"
                      disabled={disabled}
                      className="btn btn-primary btn-main-bg my-4 mx-2"
                    >
                      {disabled ? "جاري الحفظ" : "حفظ"}
                    </button>
                    <Button
                      className="my-4 mx-2"
                      style={{ backgroundColor: "orange", borderColor: "gray" }}
                      onClick={() => {
                        props.onHideEventModal();
                        initialState();
                      }}
                    >
                      إلغاء
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div>
      {renderFormModal()}
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
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ eventApplyAPI }, dispatch);
};

export default connect(null, mapDispatchToProps)(AgendaForm);
