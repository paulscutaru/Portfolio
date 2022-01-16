import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter className="bg-dark font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <a className="footer-a" href="https://github.com/paulscutaru">2022 <img className="gh-logo" src="github.png"/></a>
            </MDBContainer>
        </MDBFooter>
    );
}

export default FooterPage;