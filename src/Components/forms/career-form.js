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
import { careerApplyAPI } from "../../store/actions/forms-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactUsModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const CareerForm = (props) => {
  let title = props.content.title;
  if (props.content.title === null) {
    title = props.content.caption;
  }

  let todayDate = moment(new Date().toLocaleDateString(), "MM-DD-YYYY")
    .format("YYYY-MM-DD")
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState();
  const [Email, setEmail] = useState("");
  const [resumee, setResumee] = useState("");
  const [CareerId, setCareerId] = useState();
  const [Address, setAddress] = useState("");
  const [NationalId, setNationalId] = useState();
  const [EducationalQualification, setEducationalQualification] = useState("");
  const [BirthDate, setBirthDate] = useState(todayDate);
  const [GraduationDate, setGraduationDate] = useState(todayDate);

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
    setCareerId(props.content.id);
  }, []);

  const initialState = () => {
    setName("");
    setMobile();
    setEmail("");
    setResumee("");
    setCareerId();
    setAddress("");
    setNationalId();
    setEducationalQualification("");
    setBirthDate(todayDate);
    setGraduationDate(todayDate);
    setDisabled(false);
  };

  // const apply = async (e) => {
  //   const obj = new FormData();
  //   obj.append("Name", Name);
  //   obj.append("Mobile", Mobile);
  //   obj.append("Email", Email);
  //   obj.append("resumeeFile", resumee);
  //   obj.append("BirthDate", BirthDate);
  //   obj.append("GraduationDate", GraduationDate);
  //   obj.append("CareerId", props.content.id);
  //   obj.append("Address", Address);
  //   obj.append("NationalId", NationalId);
  //   obj.append("EducationalQualification", EducationalQualification);
  //   e.preventDefault();

  //   if (
  //     Name.trim() !== "" &&
  //     Mobile !== undefined &&
  //     Email !== undefined &&
  //     NationalId !== undefined &&
  //     resumee !== undefined
  //   ) {
  //     if (
  //       Name.trim() !== "" &&
  //       Mobile.match(/^01[0125][0-9]{8}$/) &&
  //       Email.match(
  //         /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //       ) &&
  //       NationalId.match(
  //         /(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/
  //       ) &&
  //       resumee !== undefined
  //     ) {
  //       if (disabled) {
  //         return;
  //       } else {
  //         setDisabled(true);
  //       }
  //       let res = await careerApplyAPI(obj);
  //       props.onHideCareerModal();
  //       initialState();
  //       if (res.response.data.status == 200) {
  //         setSuccessShow(true);
  //       } else {
  //         setDangerShow(true);
  //       }
  //     } else {
  //       setDangerShow(true);
  //     }
  //   }
  // };

  const onFileChange = (event) => {
    setResumee(event.target.files[0]);
  };

  const graduationHandler = (dateChanged) =>
    setGraduationDate(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );
  const birthDateHandler = (dateChanged) =>
    setBirthDate(
      moment(new Date(dateChanged._d).toLocaleDateString(), "MM-DD-YYYY")
        .format("YYYY-MM-DD")
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
    );

  const renderFormModal = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        onHide={props.onHideCareerModal}
        show={props.showCareerModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">{title}</div>
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              props.onHideCareerModal();
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
                resumeeFile: "",
                CareerId: props.content.id,
                Address: "",
                NationalId: "",
                EducationalQualification: "",
                BirthDate: todayDate,
                GraduationDate: todayDate,
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { setSubmitting }) => {
                const obj = new FormData();
                for (const objs in values) {
                  obj.append(objs, values[objs]);
                }
                obj.append("resumeeFile", resumee);
                obj.append("BirthDate", BirthDate);
                obj.append("GraduationDate", GraduationDate);

                if (disabled) {
                  return;
                } else {
                  setDisabled(true);
                }
                let res = await careerApplyAPI(obj);
                if (res.response?.data.status == 200) {
                  props.onHideCareerModal();
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
                          // value={Name}
                          onChange={Formik.handleChange("Name")}
                        />
                        {Formik.touched.Name && Formik.errors.Name ? (
                          <div className="text-danger">
                            {Formik.errors.Name}
                          </div>
                        ) : null}

                        {/* {Name.trim()===""&&<div className="text-danger">من فضلك ادخل الاسم</div>} */}
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
                          // value={Mobile}
                          onChange={Formik.handleChange("Mobile")}
                        />
                        {Formik.touched.Mobile && Formik.errors.Mobile ? (
                          <div className="text-danger">
                            {Formik.errors.Mobile}
                          </div>
                        ) : null}
                        {/* <div className="invalid-feedback">من فضلك ادخل الموبايل</div> */}
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
                          // value={Email}
                          onChange={Formik.handleChange("Email")}
                        />
                        {Formik.touched.Email && Formik.errors.Email ? (
                          <div className="text-danger">
                            {Formik.errors.Email}
                          </div>
                        ) : null}
                        {/* <div className="invalid-feedback">
                    من فضلك ادخل البريد الالكتروني
                  </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          العنوان{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="Addressf"
                          name="Address"
                          placeholder="العنوان"
                          // value={Address}
                          onChange={Formik.handleChange("Address")}
                        />
                        {/* <div className="invalid-feedback">من فضلك ادخل العنوان</div> */}
                      </div>
                    </div>
                  </div>
                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label text-black">
                          {" "}
                          المؤهلات العلمية{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="EducationalQualificationf"
                          name="EducationalQualification"
                          placeholder="المؤهلات العلمية"
                          // value={EducationalQualification}
                          onChange={Formik.handleChange(
                            "EducationalQualification"
                          )}
                        />
                        {/* <div className="invalid-feedback">
                    من فضلك ادخل المؤهلات العلمية
                  </div> */}
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
                          // value={NationalId}
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
                    <div className="col-md-6 col-12 ">
                      <div className="form-group">
                        <label className="form-label d-block">
                          السيرة الذاتية{" "}
                          <span style={{ color: "red" }}> * </span>{" "}
                        </label>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="resumeeFile"
                            className="custom-file-input"
                            id="Resumee_AttachmentInput"
                            style={{ cursor: "pointer" }}
                            onChange={onFileChange}
                            required
                          />
                          <label
                            id="attachmentLabel"
                            className="custom-file-label p-2"
                            for="AttachmentInput"
                          >
                            {resumee?.name ? resumee.name : "اختر ملف..."}
                          </label>
                        </div>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-md-row flex-column">
                    <div className={`col-md-6 col-12 px-3 mt-4`}>
                      <label className="my-2">تاريخ الميلاد</label>
                      <MuiPickersUtilsProvider
                        libInstance={moment}
                        utils={MomentUtils}
                        locale={"sw"}
                        className="bg-danger"
                      >
                        <KeyboardDatePicker
                          format="L"
                          inputVariant="outlined"
                          value={BirthDate}
                          variant="dialog"
                          maxDateMessage=""
                          mask="__-__-____"
                          placeholder="يوم/شهر/سنة"
                          onChange={birthDateHandler}
                          views={["year", "month", "date"]}
                        />
                      </MuiPickersUtilsProvider>
                    </div>

                    <div className="col-md-6 col-12 px-3 mt-4">
                      <label className="my-2">تاريخ التخرج</label>
                      <MuiPickersUtilsProvider
                        libInstance={moment}
                        utils={MomentUtils}
                        locale={"sw"}
                        className="bg-danger"
                      >
                        <KeyboardDatePicker
                          format="L"
                          inputVariant="outlined"
                          value={GraduationDate}
                          variant="dialog"
                          maxDateMessage=""
                          mask="__-__-____"
                          placeholder="يوم/شهر/سنة"
                          onChange={graduationHandler}
                          views={["year", "month", "date"]}
                        />
                      </MuiPickersUtilsProvider>
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
                        props.onHideCareerModal();
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
  return bindActionCreators({ careerApplyAPI }, dispatch);
};

export default connect(null, mapDispatchToProps)(CareerForm);
