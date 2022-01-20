import React from "react";
import one from "../assets/images/11.png"

const Survey = ()=>{
    return (
        <body className = "survey">
    <header>
        <div className="wrapper">
            <img src={one} alt="x" className="logo"/>
            
                
            
            
            <ul className = "main">
              <li><a href="df.pdf">FAQ</a></li>

            </ul>


            <h2 style={{textAlign:"center"}}>
                <strong>Stress Survey Form</strong>
            </h2>
            <br />
            <h3 style={{textAlign:"center"}}>
                
            </h3>

            <br /><br />

        </div>
        <div className="a">
            <p><i><strong>"The purpose of the survey would be collecting informations from the employes around the word. This survey should take less than 10 minutes to complete."</strong></i></p>
        </div>
        <section>
            <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form method="post">
                    <h3>Please tell us a little about yourself.</h3>
                    <div className="row">
                        <div className="col-md-6" style={{width: "100%"}}>
                            <p>Gender:
                                <input type="RADIO" name="gender" value="1"/> Male &nbsp;
                                <input type="RADIO" name="gender" value="2"/> Female
                            </p><br />
                            <p>
                                Date of birth: Month <select name="mob">
									<option selected="" value=""> ? 
									</option><option value="1">Jan
									</option><option value="2">Feb
									</option><option value="3">Mar
									</option><option value="4">Apr
									</option><option value="5">May
									</option><option value="6">Jun
                                    </option><option value="7">Jul
                                    </option><option value="8">Aug
                                    </option><option value="9">Sep
                                    </option><option value="10">Oct
                                    </option><option value="11">Nov
                                    </option><option value="12">Dec</option></select> &nbsp; Day <select name="dob">
                                    <option selected="" value="">?
                                    </option><option>1
                                    </option><option>2
                                    </option><option>3
                                    </option><option>4
                                    </option><option>5
                                    </option><option>6
                                    </option><option>7
                                    </option><option>8
                                    </option><option>9
                                    </option><option>10
                                    </option><option>11
                                    </option><option>12
                                    </option><option>13
                                    </option><option>14
                                    </option><option>15
                                    </option><option>16
                                    </option><option>17
                                    </option><option>18
                                    </option><option>19
                                    </option><option>20
                                    </option><option>21
                                    </option><option>22
                                    </option><option>23
                                    </option><option>24
                                    </option><option>25
                                    </option><option>26
                                    </option><option>27
                                    </option><option>28
                                    </option><option>29
                                    </option><option>30
                                    </option><option>31 </option></select>&nbsp; Year

                                <select name="yob">
                                    <option selected="" value=""> ??
                                    </option><option>1985
                                    </option><option>1986
                                    </option><option>1987
                                    </option><option>1988
                                    </option><option>1989
                                    </option><option>1990
                                    </option><option>1991
                                    </option><option>1992
                                    </option><option>1993
                                    </option><option>1994
                                    </option><option>1995
                                    </option><option>1996
                                    </option><option>1997
                                    </option><option>1998
                                    </option><option>1999
                                    </option><option>2000</option></select>

                            </p><br />
                            <p>
                                Nationality:
                                <input type="RADIO" name="nationality" value="1"/> India &nbsp;
                                <input type="RADIO" name="nationality" value="2"/> U.S.A &nbsp;
                                <input type="RADIO" name="nationality" value="3"/> UK &nbsp;
                                <input type="RADIO" name="nationality" value="4"/> Canada
                            </p><br />
                            <p>
                                Highest Degree attained:
                                <select name="educ">
                                    <option selected="" value=""> ?
                                    </option><option value="1">H.S. diploma (or equiv.)
                                    </option><option value="2">Assoc. degree
                                    </option><option value="3">Bachelor's degree
                                    </option><option value="4">Master's degree
                                    </option><option value="5">Doctoral degree</option></select>
                            </p><br />
                            <p className="colon">
                                The work is very stimulating.<br/><span className="new">
                                <input type="RADIO" name="sim" value="1"/> Strongly agree
                                <input type="RADIO" name="sim" value="2"/> Agree
                                <input type="RADIO" name="sim" value="3"/> Neither agree nor disagree
                                <input type="RADIO" name="sim" value="4"/> Disagree
                                <input type="RADIO" name="sim" value="5"/> Strongly Disagree</span>

                            </p><br />
                            <p className="colon">
                                I have a lot of freedom at work.<br/><span className="new">
                                <input type="RADIO" name="simy" value="1"/> Strongly agree
                                <input type="RADIO" name="simy" value="2"/> Agree
                                <input type="RADIO" name="simy" value="3"/> Neither agree nor disagree
                                <input type="RADIO" name="simy" value="4"/> Disagree
                                <input type="RADIO" name="simy" value="5"/> Strongly Disagree</span>

                            </p><br />
                            <p className="colon">
                                My supervisor is very demanding of high quality.<br/><span class="new">
                                <input type="RADIO" name="simpy" value="1"/> Strongly agree
                                <input type="RADIO" name="simpy" value="2"/> Agree
                                <input type="RADIO" name="simpy" value="3"/> Neither agree nor disagree
                                <input type="RADIO" name="simpy" value="4"/> Disagree
                                <input type="RADIO" name="simpy" value="5"/> Strongly Disagree</span>

                            </p><br />
                            <p className="colon">
                                The work environment is conducive to creative thinking.<br/><span className="new">
                                <input type="RADIO" name="simpy" value="1"/> Strongly agree
                                <input type="RADIO" name="simpy" value="2"/> Agree
                                <input type="RADIO" name="simpy" value="3"/> Neither agree nor disagree
                                <input type="RADIO" name="simpy" value="4"/> Disagree
                                <input type="RADIO" name="simpy" value="5"/> Strongly Disagree</span>

                            </p><br />
                            <p>
                                Do you have any addition thoughts on the topic of the survey?<br/>
                                <br/>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "110px"}}></textarea>
                                    </div>
                                </div>

                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                               <br/>If you would like to have a copy of the final summary results sent to you, please type your e-mail address below:<br/><br /> E-mail address:
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea name="txtMsg" className="form-control" placeholder="Your Email *" style={{width: "100%", height: "50px"}}></textarea>
                                    </div>
                                </div>

                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p>
                                Thank you for taking the survey. To submit the results, press the Send info button below.<br />
                                <br /><br />

                            </p>

                        {/* </div> */}
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{width: "100%", height: "110px"}}></textarea>
                        </div>
                    </div>
                    <br /><br /><br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="a">
                        <button type="button" className="btn btn-primary">Send Info</button>
                        <button type="button" className="btn btn-primary">Clear</button>
                    </div>


            {/* </div> */}
            </div> 
            </form>
            </div>
        </section>
    </header>
</body>
    )
}
export default Survey