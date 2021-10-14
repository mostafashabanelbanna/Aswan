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
import {
  ideaApply,
  getAllBusinessFields,
} from "../../store/actions/forms-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactUsModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const IdeaForm = (props) => {
  let title = "إضافة فكرة";

  const [Title, setTitle] = useState("");
  const [YouTubeId, setYouTubeId] = useState("");
  const [PhotoFile, setPhotoFile] = useState("");
  const [AttachmentFile, setAttachmentFile] = useState("");
  const [BusinessFieldId, setBusinessFieldId] = useState("");
  const [Problem, setProblem] = useState("");
  const [Solution, setSolution] = useState("");

  const [disabled, setDisabled] = useState(false);

  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  const SignupSchema = Yup.object().shape({
    Title: Yup.string()
      .min(3, "العنوان قصير جدا")
      .max(150, "العنوان طويل جدا")
      .trim("", "مطلوب *")
      .required("مطلوب *"),
    BusinessFieldId: Yup.string().required("مطلوب *"),
    Problem: Yup.string().required("مطلوب *").trim("", "مطلوب *"),
    Solution: Yup.string().required("مطلوب *").trim("", "مطلوب *"),
  });

  useEffect(() => {
    props.getAllBusinessFields();
  }, []);

  // const BusinessFieldIdHandler = (e) => {
  //   setBusinessFieldId(e.value);
  // };

  const initialState = () => {
    setTitle("");
    setYouTubeId("");
    setPhotoFile("");
    setAttachmentFile("");
    setBusinessFieldId("");
    setProblem("");
    setSolution("");
    setDisabled(false);
  };

  const onPhotoFileChange = (event) => {
    setPhotoFile(event.target.files[0]);
  };

  const onAttachmentFileChange = (event) => {
    setAttachmentFile(event.target.files[0]);
  };

  const renderFormModal = () => {
    let BusinessFieldName;
    {
      props.businessFields
        ? (BusinessFieldName = props.businessFields.result.map(
            ({ id, nameA }) => ({
              value: id,
              label: nameA,
            })
          ))
        : (BusinessFieldName = "");
    }
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        onHide={props.onHideIdeaModal}
        show={props.showIdeaModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">{title}</div>
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => {
              props.onHideIdeaModal();
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
                Title: "",
                YouTubeId: "",
                PhotoFile: "",
                AttachmentFile: "",
                BusinessFieldId: "",
                Problem: "",
                Solution: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={async (values, { setSubmitting }) => {
                const obj = new FormData();
                for (const objs in values) {
                  obj.append(objs, values[objs]);
                }
                obj.append("PhotoFile", PhotoFile);
                obj.append("AttachmentFile", AttachmentFile);

                if (disabled) {
                  return;
                } else {
                  setDisabled(true);
                }
                let res = await ideaApply(obj);
                if (res.response?.data.status == 200) {
                  props.onHideIdeaModal();
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
                          العنوان <span style={{ color: "red" }}> * </span>{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="Titlef"
                          name="Title"
                          required
                          placeholder="العنوان"
                          onChange={Formik.handleChange("Title")}
                        />
                        {Formik.touched.Title && Formik.errors.Title ? (
                          <div className="text-danger">
                            {Formik.errors.Title}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="form-row d-flex flex-md-row flex-column">
                    <div
                      style={{ height: "1.1rem", zIndex: "16" }}
                      className="col-md-6 col-12 align-self-baseline form-group"
                    >
                      <label className="form-label text-black">
                        {" "}
                        نوع المجال<span style={{ color: "red" }}> * </span>{" "}
                      </label>
                      <Select
                        // value={BusinessFieldId}
                        required
                        // value={BusinessFieldName.find(
                        //   (e) => e.value == BusinessFieldId
                        // )}
                        placeholder={"نوع المجال"}
                        options={BusinessFieldName}
                        onChange={(e) => {
                          Formik.setFieldValue("BusinessFieldId", e.value);
                          console.log(e.value);
                        }}
                      />
                      {Formik.touched.BusinessFieldId &&
                      Formik.errors.BusinessFieldId ? (
                        <div className="text-danger">
                          {Formik.errors.BusinessFieldId}
                        </div>
                      ) : null}
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="form-group">
                        <label className="form-label text-black">
                          كود اليوتيوب
                        </label>
                        <input
                          type="text"
                          className="form-control text-right "
                          id="YouTubeIdf"
                          name="YouTubeId"
                          placeholder="كود اليوتيوب"
                          onChange={Formik.handleChange("YouTubeId")}
                        />
                        {Formik.touched.YouTubeId && Formik.errors.YouTubeId ? (
                          <div className="text-danger">
                            {Formik.errors.YouTubeId}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="form-row d-flex flex-md-row flex-column">
                    <div className="col-md-6 col-12 ">
                      <div className="form-group">
                        <label className="form-label d-block">صورة</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="PhotoFile"
                            accept=".jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg, .webp, .apng, .avif, .gif"
                            className="custom-file-input"
                            id="PhotoFile_AttachmentInput"
                            style={{ cursor: "pointer" }}
                            onChange={onPhotoFileChange}
                          />
                          <label
                            id="PhotoFileLabel"
                            className="custom-file-label p-2"
                            for="PhotoFile_AttachmentInput"
                          >
                            {PhotoFile?.name ? PhotoFile.name : "اختر صورة..."}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 ">
                      <div className="form-group">
                        <label className="form-label d-block">ملف مرفق</label>
                        <div className="custom-file">
                          <input
                            type="file"
                            name="AttachmentFile"
                            className="custom-file-input"
                            id="AttachmentFileInput"
                            style={{ cursor: "pointer" }}
                            onChange={onAttachmentFileChange}
                          />
                          <label
                            id="attachmentLabel"
                            className="custom-file-label p-2"
                            for="AttachmentFileInput"
                          >
                            {AttachmentFile?.name
                              ? AttachmentFile.name
                              : "اختر ملف..."}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>
                        المشكلة <span style={{ color: "red" }}> * </span>
                      </label>
                      <div>
                        <textarea
                          className="form-control text-right"
                          id=""
                          name="Problem"
                          required
                          rows="4"
                          cols="0"
                          placeholder="المشكلة"
                          onChange={Formik.handleChange("Problem")}
                        ></textarea>
                        {Formik.touched.Problem && Formik.errors.Problem ? (
                          <div className="text-danger">
                            {Formik.errors.Problem}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label>
                        {" "}
                        الحل <span style={{ color: "red" }}>*</span>
                      </label>
                      <textarea
                        className="form-control text-right"
                        name="Solution"
                        required
                        rows="4"
                        placeholder="الحل"
                        onChange={Formik.handleChange("Solution")}
                      ></textarea>
                      {Formik.touched.Solution && Formik.errors.Solution ? (
                        <div className="text-danger">
                          {Formik.errors.Solution}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      id="savee"
                      type="submit"
                      disabled={disabled}
                      class="btn btn-primary btn-main-bg my-4 mx-2"
                    >
                      {disabled ? "جاري الحفظ" : "حفظ"}
                    </button>
                    <Button
                      className="my-4 mx-2"
                      style={{ backgroundColor: "orange", borderColor: "gray" }}
                      onClick={() => {
                        props.onHideIdeaModal();
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

const mapStateToProps = (state) => {
  return {
    businessFields: state.formsComponents.businessFields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ideaApply, getAllBusinessFields }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaForm);
