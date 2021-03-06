import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../Styles/forms.css";
import { useState, useEffect } from "react";
import { youthApplyAPI } from "../../store/actions/forms-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactUsModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CitizenServicesForm = (props) => {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Mobile, setMobile] = useState();
  const [Email, setEmail] = useState("");
  const [resumee, setResumee] = useState("");
  const [YouthEmploymentId, setYouthEmploymentId] = useState();
  const [Address, setAddress] = useState("");
  const [NationalId, setNationalId] = useState();
  const [EducationalQualification, setEducationalQualification] = useState("");

  const [disabled, setDisabled] = useState(false);

  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  //   useEffect(() => {
  //     setYouthEmploymentId();
  //   }, []);

  const initialState = () => {
    setName("");
    setMobile();
    setEmail("");
    setResumee("");
    setYouthEmploymentId();
    setAddress("");
    setNationalId();
    setSubject("");
    setEducationalQualification("");
    setDisabled(false);
  };

  const apply = async (e) => {
    const obj = new FormData();
    obj.append("Name", Name);
    obj.append("Mobile", Mobile);
    obj.append("Email", Email);
    obj.append("resumeeFile", resumee);
    obj.append("YouthEmploymentId", props.content.id);
    obj.append("Address", Address);
    obj.append("NationalId", NationalId);
    obj.append("EducationalQualification", EducationalQualification);
    obj.append("Subject", Subject);
    e.preventDefault();

    if (
      Name.trim() !== "" &&
      Mobile !== undefined &&
      Email !== "" &&
      NationalId !== undefined &&
      resumee !== undefined &&
      Subject.trim() !== ""
    ) {
      if (
        Name.trim() !== "" &&
        Mobile.match(/^01[0125][0-9]{8}$/) &&
        Email.match(
          /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ) &&
        NationalId.match(
          /(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d/
        ) &&
        resumee !== undefined &&
        Subject.trim() !== ""
      ) {
        if (disabled) {
          return;
        } else {
          setDisabled(true);
        }
        let res = await youthApplyAPI(obj);
        props.onHideCitizenServicesFormModal();
        initialState();
        if (res.response.data.status == 200) {
          setSuccessShow(true);
        } else {
          setDangerShow(true);
        }
      } else {
        setDangerShow(true);
      }
    }
  };

  const onFileChange = (event) => {
    setResumee(event.target.files[0]);
  };

  const renderFormModal = () => {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        onHide={props.onHideCitizenServicesFormModal}
        show={props.showCitizenServicesFormModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">???????? ??????????????????</div>
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={props.onHideCitizenServicesFormModal}
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
            <form
              className="panel-content justify-content-center col-12"
              onSubmit={apply}
            >
              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-black">
                      {" "}
                      ?????????? <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="Namef"
                      name="Name"
                      required
                      placeholder="??????????"
                      value={Name}
                      onChange={(e) => {
                        setName(e.currentTarget.value);
                      }}
                    />
                    {/* {Name.trim()===""&&<div className="text-danger">???? ???????? ???????? ??????????</div>} */}
                  </div>
                </div>
              </div>
              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label text-black">
                      {" "}
                      ???????????????? <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control text-right "
                      id="Mobilef"
                      name="Mobile"
                      required
                      placeholder="????????????????"
                      value={Mobile}
                      onChange={(e) => {
                        setMobile(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group">
                    <label className="form-label text-black">
                      {" "}
                      ???????????? ????????????????????{" "}
                      <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="email"
                      className="form-control text-right "
                      id="Emailf"
                      name="Email"
                      required
                      placeholder="???????????? ????????????????????"
                      value={Email}
                      onChange={(e) => {
                        setEmail(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-black">
                      {" "}
                      ?????????????? <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="SubjectF"
                      name="Subject"
                      required
                      placeholder="??????????????"
                      value={Subject}
                      onChange={(e) => {
                        setSubject(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-black"> ?????????????? </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="Addressf"
                      name="Address"
                      placeholder="??????????????"
                      value={Address}
                      onChange={(e) => {
                        setAddress(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label text-black">
                      {" "}
                      ?????????? ???????????? <span style={{ color: "red" }}>
                        {" "}
                        *{" "}
                      </span>{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control text-right "
                      id="NationalIdf"
                      name="NationalId"
                      required
                      placeholder="?????????? ????????????"
                      value={NationalId}
                      onChange={(e) => {
                        setNationalId(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label d-block">
                      ???????????? ?????????????? <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <div className="custom-file">
                      <input
                        type="file"
                        name="Resumee"
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
                        {resumee?.name ? resumee.name : "???????? ??????..."}
                      </label>
                    </div>
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>

              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-12">
                  <div className="form-group">
                    <label className="form-label text-black">
                      ??????????????<span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control text-right "
                      id="EducationalQualificationf"
                      name="EducationalQualification"
                      placeholder="??????????????"
                      value={EducationalQualification}
                      onChange={(e) => {
                        setEducationalQualification(e.currentTarget.value);
                      }}
                    />
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
                  {disabled ? "???????? ??????????" : "??????"}
                </button>
                <Button
                  className="my-4 mx-2"
                  style={{ backgroundColor: "orange", borderColor: "gray" }}
                  onClick={() => {
                    props.onHideCitizenServicesFormModal();
                    initialState();
                  }}
                >
                  ??????????
                </Button>
              </div>
            </form>
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
  return bindActionCreators({ youthApplyAPI }, dispatch);
};

export default connect(null, mapDispatchToProps)(CitizenServicesForm);
