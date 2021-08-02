import React from 'react';


const Contact = () => {

    return (
        <div>
            <div className='container p-0'>
                <div className=" row p-0 m-0">
                    <div className='col-sm-4 col-12   p-0 order-sm-1 order-2'>
                        <form className="justify-content-center col-11">
                            <div className="form-group mb-3 mt-2">
                                <input type="text" className="form-control" placeholder="الاسم" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <input type="email" className="form-control" placeholder="البريد الالكتروني" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <input type="text" className="form-control" placeholder="الموضوع" />
                            </div>
                            <div className="form-group mb-3 mt-2">
                                <textarea placeholder="الرسالة" className="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">ارسال</button>
                        </form>
                    </div>
                    <div className='col-sm-7 col-12 order-sm-2 order-1 me-sm-3 me-0 mt-2'>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe  className="col-12 h-100 embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Contact;