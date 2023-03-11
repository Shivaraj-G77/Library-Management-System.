import '../styles/Footer.css'


const Footer = () => {

    let logo=[
        {image:'/images/fb1.png'},
        {image:'/images/twitter.png'},
        {image:'/images/youtube.png'},
        {image:'/images/insta.png'},
        {image:'/images/linkedin.png'}
    ]

    return (
        <div className="footer">

            <div className="imgg">
                <img width='45' src={'/images/karlogo.png'} alt="" />
            </div>

            <div className="linnks">
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>

            <div className="socialMedia">
                {
                    logo.map((x)=>(
                        <img style={{margin:"5px"}} width='35' src={x.image} alt="" />
                    ))
                }
            </div>

            <div className="copyright">
                <p>&copy; 1996 -2023, karlibrary.gov.in, Inc. or its affilates</p>
            </div>
        </div>
    );
}

export default Footer;