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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

  const SignupSchema = Yup.object().shape({
    AdvertiserName: Yup.string()
      .min(2, "الإسم قصير جدا")
      .max(50, "الإسم طويل جدا")
      .trim("", "مطلوب *")
      .required("مطلوب *"),
    AdvertiserPhone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "رقم الموبايل غير صحيح")
      .required("مطلوب *"),
    Url: Yup.string()
      .matches(/^(ftp|http|https):\/\/[^ "]+$/,"برجاء إدخال رابط صحيح"
      ),
    Title: Yup.string()
      .min(5, "العنوان قصير جدا")
      .max(100, "العنوان طويل جدا")
      .required("مطلوب *")
  });

  // const apply = async (e) => {
  //   const obj = new FormData();
  //   obj.append("Title", Title);
  //   obj.append("Description", Description);
  //   obj.append("PublishDate", PublishDate);
  //   obj.append("AdvertiserName", AdvertiserName);
  //   obj.append("AdvertiserPhone", parseInt(AdvertiserPhone));
  //   obj.append("Url", Url);
  //   obj.append("attachmentFile", attachmentFile);
  //   obj.append("photoFile", photoFile);
  //   PhotoAlbumFile.forEach(file => {
  //     obj.append("PhotoAlbumFile", file);
  //   })
  //   e.preventDefault();
  //   if (
  //     Title.trim() !== "" &&
  //     AdvertiserName.trim() !== "" &&
  //     photoFile !== undefined &&
  //     AdvertiserPhone.match(/^01[0125][0-9]{8}$/)
  //   ) {
  //     if (disabled) {
  //       return;
  //     } else {
  //       setDisabled(true);
  //     }
  //     let res = await advertismentRequireAPI(obj);
  //     props.onHideAdvertisementModal();
  //     initialState();
  //     if(res.response.data.status == 200){
  //         setSuccessShow(true);
  //     } else {
  //     setDangerShow(true);
  //     }
  //   } else {
  //     setDangerShow(true);
  //   }
  // };

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
          <Formik
          initialValues={{
            Title: "",
            Description: "",
            AdvertiserName: "",
            AdvertiserPhone: "",
            Url: "",
            attachmentFile: "",
            photoFile: "",
            PhotoAlbumFile: [],
            PublishDate: todayDate,
          }}validationSchema={SignupSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const obj = new FormData();
            for (const objs in values) {
              obj.append(objs, values[objs]);
            }
            obj.append("PublishDate", PublishDate);
            obj.append("attachmentFile", attachmentFile);
            obj.append("photoFile", photoFile);
            PhotoAlbumFile.forEach(file => {
              obj.append("PhotoAlbumFile", file);
            })

            if (disabled) {
              return;
            } else {
              setDisabled(true);
            }
            let res = await advertismentRequireAPI(obj);
            if (res.response.data.status == 200) {
              props.onHideAdvertisementModal();
              initialState();
              setSuccessShow(true);
            } else {
              setDangerShow(true);
            }
          }}
        >
          {(Formik) => (
            <form
              className="panel-content justify-content-center col-12"
              onSubmit={Formik.handleSubmit}
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
                      // value={Title}
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
                    required
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
                      required
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
                        accept=".jpg, .jpeg, .jfif, .pjpeg, .pjp, .png, .svg, .webp, .apng, .avif, .gif, "
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
                        {PhotoAlbumFile[0]?.name ? (PhotoAlbumFile[1]?.name ? (PhotoAlbumFile[2]?.name ? (PhotoAlbumFile[0].name + ',' + PhotoAlbumFile[1].name + ',' + PhotoAlbumFile[2].name) : (PhotoAlbumFile[0].name + ',' + PhotoAlbumFile[1].name)) : PhotoAlbumFile[0].name)  : "اختر ملفات..."}
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
                      // value={Description}
                      // onChange={(e) => {
                      //   setDescription(e.currentTarget.value);
                      // }}
                      onChange={Formik.handleChange("Description")}
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
                      // value={AdvertiserName}
                      onChange={Formik.handleChange("AdvertiserName")}

                    />
                    {Formik.touched.AdvertiserName && Formik.errors.AdvertiserName ? (
                          <div className="text-danger">
                            {Formik.errors.AdvertiserName}
                          </div>
                        ) : null}
                  </div>
                </div>
                <div className="col-md-6 col-12 ">
                  <div className="form-group">
                    <label className="form-label text-black">
                      هاتف المعلن <span style={{ color: "red" }}> * </span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control text-right "
                      id="AdvertiserPhonef"
                      name="AdvertiserPhone"
                      placeholder="هاتف المعلن"
                      // value={AdvertiserPhone}
                      required
                      onChange={Formik.handleChange("AdvertiserPhone")}

                    />
                    {Formik.touched.AdvertiserPhone && Formik.errors.AdvertiserPhone ? (
                          <div className="text-danger">
                            {Formik.errors.AdvertiserPhone}
                          </div>
                        ) : null}
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
                      // value={Url}
                      onChange={Formik.handleChange("Url")}
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
  return bindActionCreators({ advertismentRequireAPI }, dispatch);
};

export default connect(null, mapDispatchToProps)(AdvertisementRequire);
