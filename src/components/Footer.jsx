import React, { Component } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line
import Icofont from 'react-icofont';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText}</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
//Props Types
Footer.propTypes = {
    copyrightText: PropTypes.string,
    TwitterLink: PropTypes.string,
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © All Rights Reserved.",
    socialTitle: "Follow Us On:",
    TwitterLink: "/#0",
    linkedinLink: "/#0",
};
export default Footer;
