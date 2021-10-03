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
import { advertismentRequireAPI } from "../../store/actions/forms-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ContactUsModal from "../modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AdvertisementRequire = (props) => {
  let todayDate = moment(new Date().toLocaleDateString(), "MM-DD-YYYY")
    .format("YYYY-MM-DD")
    .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [PublishDate, setPublishDate] = useState(todayDate);
  const [AdvertiserName, setAdvertiserName] = useState("");
  const [AdvertiserPhone, setAdvertiserPhone] = useState();
  const [Url, setUrl] = useState("");
  const [attachmentFile, setAttachmentFile] = useState("");
  const [photoFile, setPhotoFile] = useState("");
  const [PhotoAlbumFile, setPhotoAlbumFile] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [successShow, setSuccessShow] = useState(false);
  const [dangerShow, setDangerShow] = useState(false);

  const initialState = () => {
    setTitle("");
    setDescription("");
    setPublishDate(todayDate);
    setAdvertiserName("");
    setAdvertiserPhone();
    setUrl("");
    setAttachmentFile("");
    setPhotoFile("");
    setPhotoAlbumFile([]);
    setDisabled(false);
  };

  const apply = async (e) => {
    const obj = new FormData();
    obj.append("Title", Title);
    obj.append("Description", Description);
    obj.append("PublishDate", PublishDate);
    obj.append("AdvertiserName", AdvertiserName);
    obj.append("AdvertiserPhone", parseInt(AdvertiserPhone));
    obj.append("Url", Url);
    obj.append("attachmentFile", attachmentFile);
    obj.append("photoFile", photoFile);
    PhotoAlbumFile.forEach(file => {
      obj.append("PhotoAlbumFile", file);
    })
    e.preventDefault();
    if (
      Title.trim() !== "" &&
      AdvertiserName.trim() !== "" &&
      photoFile !== undefined &&
      AdvertiserPhone.match(/^01[0125][0-9]{8}$/)
    ) {
      if (disabled) {
        return;
      } else {
        setDisabled(true);
      }
      let res = await advertismentRequireAPI(obj);
      props.onHideAdvertisementModal();
      initialState();
      if(res.response.data.status == 200){
          setSuccessShow(true);
      } else {
      setDangerShow(true);
      }
    } else {
      setDangerShow(true);
    }
  };

  const onAttachmentFileChange = (event) => {
    setAttachmentFile(event.target.files[0]);
  };

  const onPhotoFileChange = (event) => {
    setPhotoFile(event.target.files[0]);
  };

  const onPhotoAlbumChange =  (event) => {
    event.preventDefault();
    const x = Object.values(event.target.files)
    const arr=[...x];
    setPhotoAlbumFile(arr);
      
  };

  const publishDateHandler = (dateChanged) =>
    setPublishDate(
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
        onHide={props.onHideAdvertisementModal}
        show={props.showAdvertisementModal}
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="d-flex">
              طلب إعلان
            </div>
          </Modal.Title>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={props.onHideAdvertisementModal}
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
              encType="multipart/form-data"
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
                      value={Title}
                      onChange={(e) => {
                        setTitle(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row d-flex flex-md-row flex-column">
                <div className={`col-md-6 col-12 px-3 mt-2`}>
                  <label className="form-label text-black">
                    {" "}
                    تاريخ النشر <span style={{ color: "red" }}> * </span>{" "}
                  </label>
                  <MuiPickersUtilsProvider
                    libInstance={moment}
                    utils={MomentUtils}
                    locale={"sw"}
                    className="bg-danger"
                  >
                    <KeyboardDatePicker
                      format="L"
                      inputVariant="outlined"
                      value={PublishDate}
                      variant="dialog"
                      maxDateMessage=""
                      mask="__-__-____"
                      placeholder="يوم/شهر/سنة"
                      onChange={publishDateHandler}
                      views={["year", "month", "date"]}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label d-block">
                      الملف المرفق
                    </label>
                    <div className="custom-file">
                      <input
                        type="file"
                        name="attachmentFile"
                        className="custom-file-input"
                        id="attachmentFile_AttachmentInput"
                        style={{ cursor: "pointer" }}
                        onChange={onAttachmentFileChange}
                      />
                      <label
                        id="attachmentLabel"
                        className="custom-file-label p-2"
                        for="attachmentFile_AttachmentInput"
                      >
                        {attachmentFile?.name
                          ? attachmentFile.name
                          : "اختر ملف..."}
                      </label>
                    </div>
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label d-block">
                      صورة <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <div className="custom-file">
                        {}
                      <input
                        type="file"
                        name="photoFile"
                        accept=".jpeg, .jpg, .png"
                        className="custom-file-input"
                        id="photoFile_AttachmentInput"
                        style={{ cursor: "pointer" }}
                        onChange={(event)=>onPhotoFileChange(event)}
                        required
                      />
                      <label
                        id="photoLabel"
                        className="custom-file-label p-2"
                        for="photoFile_AttachmentInput"
                      >
                        {photoFile?.name ? photoFile.name : "اختر صورة..."}
                      </label>
                    </div>
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label d-block">البوم صور</label>
                    <div className="custom-file">
                      <input
                        type="file"
                        multiple
                        accept=".jpeg, .pdf, .jpg, .png"
                        name="PhotoAlbumFile"
                        className="custom-file-input"
                        id="PhotoAlbumFile_AttachmentInput"
                        style={{ cursor: "pointer" }}
                        onChange={onPhotoAlbumChange}
                      />
                      <label
                        id="photoAlbumLabel"
                        className="custom-file-label p-2"
                        for="PhotoAlbumFile_AttachmentInput"
                      >
                        {PhotoAlbumFile[0]?.name ? PhotoAlbumFile[0].name : "اختر ملفات..."}
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
                      {" "}
                      الوصف{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="Description"
                      name="Description"
                      placeholder="الوصف"
                      value={Description}
                      onChange={(e) => {
                        setDescription(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="form-row d-flex flex-md-row flex-column">
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label text-black">
                      إسم المعلن <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="AdvertiserNamef"
                      name="AdvertiserName"
                      required
                      placeholder="إسم المعلن"
                      value={AdvertiserName}
                      onChange={(e) => {
                        setAdvertiserName(e.currentTarget.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label text-black">
                      هاتف المعلن <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control text-right "
                      id="AdvertiserPhonef"
                      name="AdvertiserPhone"
                      placeholder="هاتف المعلن"
                      value={AdvertiserPhone}
                      required
                      onChange={(e) => {
                        setAdvertiserPhone(e.currentTarget.value);
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
                      الرابط{" "}
                    </label>
                    <input
                      type="url"
                      className="form-control text-right "
                      id="Url"
                      name="Url"
                      placeholder="الرابط"
                      value={Url}
                      onChange={(e) => {
                        setUrl(e.currentTarget.value);
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
                  class="btn btn-primary btn-main-bg my-4 mx-2"
                >
                  {disabled ? "جاري الحفظ" : "حفظ"}
                </button>
                <Button
                  className="my-4 mx-2"
                  style={{ backgroundColor: "orange", borderColor: "gray" }}
                  onClick={() => {
                    props.onHideAdvertisementModal();
                    initialState();
                  }}
                >
                  إلغاء
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
  return bindActionCreators({ advertismentRequireAPI }, dispatch);
};

export default connect(null, mapDispatchToProps)(AdvertisementRequire);
