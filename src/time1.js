import React, { Component } from "react";


/* import mobiscroll */
import mobiscroll from '@mobiscroll/react-lite';
import '@mobiscroll/react-lite/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme:"auto"
}
//
// mobiscroll.settings = {
//     theme: 'windows'
// };

class DateDemo extends React.Component {
    render() {
        return (
            <mobiscroll.Form>
                <div className="mbsc-grid">
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
                            <mobiscroll.FormGroup inset>
                                <mobiscroll.FormGroupTitle>Pop-up positioning</mobiscroll.FormGroupTitle>
                                <label>
                                    Top
                                    <mobiscroll.Date
                                        touchUi={false}
                                        display="top"
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Bottom
                                    <mobiscroll.Date
                                        touchUi={false}
                                        display="bottom"
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Anchored
                                    <mobiscroll.Date
                                        touchUi={false}
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Center
                                    <mobiscroll.Date
                                        touchUi={false}
                                        display="center"
                                        placeholder="Please select..."
                                    />
                                </label>
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
                            <mobiscroll.FormGroup inset>
                                <mobiscroll.FormGroupTitle>Basic usage</mobiscroll.FormGroupTitle>
                                <label>
                                    Date & Time
                                    <mobiscroll.Datetime
                                        touchUi={false}
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Date
                                    <mobiscroll.Date
                                        touchUi={false}
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Time
                                    <mobiscroll.Time
                                        touchUi={false}
                                        placeholder="Please select..."
                                    />
                                </label>
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                    <div className="mbsc-row mbsc-justify-content-center">
                        <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
                            <mobiscroll.FormGroup inset>
                                <mobiscroll.FormGroupTitle>With buttons</mobiscroll.FormGroupTitle>
                                <label>
                                    Set button
                                    <mobiscroll.Datetime
                                        display="center"
                                        touchUi={false}
                                        buttons={['set']}
                                        placeholder="Please select..."
                                    />
                                </label>
                                <label>
                                    Set/Cancel
                                    <mobiscroll.Datetime
                                        display="center"
                                        touchUi={false}
                                        buttons={['set', 'cancel']}
                                        placeholder="Please select..."
                                    />
                                </label>
                            </mobiscroll.FormGroup>
                        </div>
                    </div>
                </div>
            </mobiscroll.Form>
        );
    }
}


export default DateDemo;
