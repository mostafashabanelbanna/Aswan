import React ,{useState} from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
const TrainingAgenda = () => {
    const [message, setMessage] = useState();
    const [show, setShow] = useState();
    return (<div>
        <div className='d-flex flex-column flex-md-row container'>
            <div className='col-md-6 col-12 p-3'>
            <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[{title:'bbb',date: '2021-08-24'},{title:'ddd',date: '2021-08-24'},{title:'bbfffb',date: '2021-08-24'},{title:'rrr',date: '2021-08-24'},{title:'tr',date: '2021-08-24'}]}
        eventClick={(args)=>{
            setMessage(args.event.title)
            setShow(true)
            console.log(args.event._instance.range.start)
        }}
        eventBackgroundColor={'#fbbf3c'}
        eventTextColor={'black'}
        eventBorderColor={false}
        headerToolbar={{ start:'', center:'title' , end:''}}
        editable={false}
        locale='ar'
        height={'600px'}
        

      />
            </div>
            <div className='col-md-6 col-12 px-3'>
                <div>
                    <div className='d-flex'>
                        <div>Hi</div>
                        <div><h2>مؤتمرات</h2></div>
                    </div>
                    <div>
                        فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                        . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='p-3 bg-info'>الأحد 2021 / 10 يوليو</div>
                        <div className='align-items-center d-flex'>المزيد</div>
                    </div>
                    <div className="my-2" style={{height:'1px' , width:'60%' , backgroundColor:'black' , margin:'auto'}}></div>
                </div>

                <div>
                    <div className='d-flex'>
                        <div>Hi</div>
                        <div><h2>مؤتمرات</h2></div>
                    </div>
                    <div>
                        فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                        . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='p-3 bg-info'>الأحد 2021 / 10 يوليو</div>
                        <div className='align-items-center d-flex'>المزيد</div>
                    </div>
                    <div className="my-2" style={{height:'1px' , width:'60%' , backgroundColor:'black' , margin:'auto'}}></div>
                </div>


                <div>
                    <div className='d-flex'>
                        <div>Hi</div>
                        <div><h2>مؤتمرات</h2></div>
                    </div>
                    <div>
                        فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                        . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='p-3 bg-info'>الأحد 2021 / 10 يوليو</div>
                        <div className='align-items-center d-flex'>المزيد</div>
                    </div>
                    <div className="my-2" style={{height:'1px' , width:'60%' , backgroundColor:'black' , margin:'auto'}}></div>
                </div>


                <div>
                    <div className='d-flex'>
                        <div>Hi</div>
                        <div><h2>مؤتمرات</h2></div>
                    </div>
                    <div>
                        فاعليات اليوم الثانى من المؤتمر السنوى العشرون للمركز القومي
                        . للبحوث الاجتماعية والجنائية تحت عنوان "السكان وتحديات التنمية
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div className='p-3 bg-info'>الأحد 2021 / 10 يوليو</div>
                        <div className='align-items-center d-flex'>المزيد</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <ActivityModal dialogClassName={message} show={show} onHide={() => setShow(false)} /> */}

    </div>);
}

export default TrainingAgenda;