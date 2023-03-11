import "../styles/Gnavbar.css"
const Gnavbar = () => {
    return (
        <div className="gnavbar">

            <div className="logo0">
                <img height={"60px"} width={"69px"} src="/images/green.png" alt="" />
                <div className="tp">
                    <h1>Greenwich Library</h1>
                </div>
            </div>




            <div className="lf1">

                <div className="if1">
                    <img style={{ margin: "5px" }} width='30' src="/images/donate.png" alt="" />
                    <h6>Donate</h6>
                </div>

                <div className="if1">
                    <img style={{ margin: "5px" }} width='30' src="/images/libcard.png" alt="" />
                    <h6>Library Card</h6>
                </div>

                <div className="if1">
                    <img style={{ margin: "5px" }} width='30' src="/images/account.png" alt="" />
                    <h6>Account</h6>
                </div>

                <div className="if1">
                    <img style={{ margin: "5px" }} width='30' src="/images/search.png" alt="" />
                    <h6>Search</h6>
                </div>


            </div>



        </div>
    );
}

export default Gnavbar;