import "../styles/Admin.css"
import Footer from "./footer";
import Gnavbar from "./gnavbar";
import Gnavbar2 from "./gnavbar2";
const Admin = () => {



    return (
        <div className="admin">
            <Gnavbar />


            <div className="togg">

                <div className="toggle">

                    <div className="tog1">
                        <h1 style={{ padding: "3px" }} id="siz1">Where the Crawdads Sing</h1>
                        <br />
                        <h3 id="siz2">On Friday, March 10 at 7:00 pm, come see the adaptation of the <br /> bestselling novel about a girl raising herself in the marshlands of North <br /> Carolina.</h3>

                        <br />
                        <br />

                        <div className="cF3">
                            <h4  >Register Here   </h4>
                            <h2>&#8594;</h2>
                        </div>


                    </div>
                </div>

            </div>

         
            <Gnavbar2 />

            <div className="cafe">

                <div className="c1">

                    <div className="cF2">
                        <h1 style={{ padding: "3px" }} id="siz3">Café at Greenwich Library</h1>
                        <br />
                        <h3 id="siz4"> There’s no need to stroll down the Ave for a meal when you’re at the <br /> Library! Visit our lower level to get coffee, drinks, snacks, and lunch <br /> options, locally sourced from favorites like Happiness Is and Shearwater <br /> Coffee.</h3>
                        <br />
                        <br />

                        <div className="cF6">
                            <h4>Place an Order  </h4>
                            <h2>&#8594;</h2>
                        </div>

                    </div>

                </div>

            </div>



            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />






            <div className="green">

                <div className="g1">

                    <div className="g2">

                        <h1 style={{ padding: "3px", alignItems: "center" }} id="siz5">March Events</h1>
                        <br />
                        <h3 id="siz6">Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</h3>
                        <br />
                        <br />

                        <div className="cF8">
                            <h4>Printable Event Calenders</h4>
                            <h2>&#8594;</h2>
                        </div>


                    </div>

                </div>

            </div>
            <br />
            <br />

            <div className="Two">

                <div className="first">

                    <div className="fir1">

                        <div className="fir2">

                            <h1 style={{ padding: "3px", alignItems: "center" }} id="siz7">Tax Help</h1>
                            <br />
                            <h3 id="siz8">On Saturday, March 11 from 9:00 am – 2:00 pm, drop in to get free help with your taxes from the AARP Foundation.</h3>
                            <br />
                            <br />
                            <a style={{ color: "rgb(19, 126, 83)" }} href="">Learn More</a>




                        </div>

                    </div>

                </div>


                <div className="second">

                    <div className="sec1">

                        <div className="sec2">

                            <h1 style={{ padding: "3px", alignItems: "center" }} id="siz9">Sea Glass Frames</h1>
                            <br />
                            <h3 id="siz10">On Saturday, March 11 at 10:30 am at Cos Cob Library, join us to create fun and breezy sea glass frames!</h3>
                            <br />
                            <br />
                            <a style={{ color: "rgb(19, 126, 83)" }} href="">Register Here</a>

                        </div>

                    </div>

                </div>

            </div>

            <div className="secondtwo">

                <div className="firstt">

                    <div className="fir11">

                        <div className="fir22">

                            <h1 style={{ padding: "3px", alignItems: "center" }} id="siz77">Protect Yourself Online</h1>
                            <br />
                            <h3 id="siz88">On Wednesday, March 15 at 3:00 pm, find out the ten vital practices to protect your personal information and finances. </h3>
                            <br />
                            <br />
                            <a style={{ color: "rgb(19, 126, 83)" }} href="">Mark Your Calender</a>

                        </div>

                    </div>

                </div>


                <div className="secondd">

                    <div className="sec11">

                        <div className="sec22">

                            <h1 style={{ padding: "3px", alignItems: "center" }} id="siz99">Adopt-a-Shelf</h1>
                            <br />
                            <h3 id="siz100"> On Tuesday, March 14 at 10:30 am, volunteer at the Library by taking care of a shelf twice a month at a time that works for you.</h3>
                            <br />
                            <br />
                            <a style={{ color: "rgb(19, 126, 83)" }} href="">Become a Volunteer</a>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Admin;