import React, { useState } from 'react';
import { feedBackApi } from '../actions/News_Action'
import Alert from 'react-bootstrap/Alert'
import MyModal from './modal'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [successShow, setSuccessShow] = useState(false)
    const [dangerShow, setDangerShow] = useState(false)

    const feedBack = async (e) => {
        let obj = {
            email,
            name,
            subject,
            message
        }
        e.preventDefault()
        try {
            let res = await feedBackApi(obj)
            setSuccessShow(true)
        } catch (e) {
            console.log(e)
            setDangerShow(true)

        }



    }

    return (
        <div>
            <div className=" custom_contanier pe-0 ">
                <div className="mt-2 d-flex">
                    <img src="/images/icons/contact_titel-0٢.png" width='7%' />
                    <h4 className="mt-4 me-2 text-secondary">اتصل بنا </h4>
                </div>
            </div>
            <div style={{backgroundColor:'#eeecec'}}>
            <div className='container p-0 mt-3 py-4' >
                <div className=" row p-0 m-0">
                    <div className='col-sm-4 col-12   p-0 order-sm-1 order-2'>
                        <form className="justify-content-center col-11">
                            <div className="form-group mb-3 mt-2">
                                <input onChange={(e) => {
                                    setName(e.currentTarget.value)
                                }} type="text" className="form-control border-0" placeholder="الاسم" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <input onChange={(e) => {
                                    setEmail(e.currentTarget.value)
                                }} type="email" className="form-control border-0" placeholder="البريد الالكتروني" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <input onChange={(e) => {
                                    setSubject(e.currentTarget.value)
                                }} type="text" className="form-control border-0" placeholder="الموضوع" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <textarea  onChange={(e) => {
                                    console.log(e.currentTarget.value)
                                    setMessage(e.currentTarget.value)
                                }} placeholder="الرسالة" className="form-control border-0" rows="3"></textarea>
                            </div>
                              <div className='mb-2 container col-6 justify-content-center'>      
                            <button onClick={feedBack} style={{backgroundColor:'#cacbcb'}} type="submit" className="btn border-0 col-12">ارسال</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-sm-7 col-12 order-sm-2 order-1 me-sm-3 me-0 mt-2'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789541.5554558444!2d32.63899545236434!3d28.832954149939198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145418db9de8309d%3A0xf8bc0ebe4dadff7!2sSouth%20Sinai%20Governorate!5e0!3m2!1sen!2seg!4v1603114902415!5m2!1sen!2seg" width="100%" height="95%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <MyModal dialogClassName='success' show={successShow} onHide={() => setSuccessShow(false)} />
                    <MyModal dialogClassName='danger' show={dangerShow} onHide={() => setDangerShow(false)} />
                </div>
            </div>
        </div>
        </div>
    );

}
export default Contact;