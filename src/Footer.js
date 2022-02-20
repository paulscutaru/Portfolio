import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter className="bg-dark font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <a className="footer-a" href="https://github.com/paulscutaru" rel="noreferrer" target="_blank">2022 <img alt="github-logo" src="github.png"/></a>
            </MDBContainer>
        </MDBFooter>
    );
}

export default FooterPage;