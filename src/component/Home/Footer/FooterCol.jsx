import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';
import {useIMQA} from "imqa-react-sdk";

const FooterCol = (props) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Col md={6} lg={3} className="footerLink">
            <h5>{props.title? props.title : ''}</h5>
            {
                props.menuItems?.map(({name, id}) => <Link to="/" onClick={scrollUP} key={id}><li>
                    {/* <FontAwesomeIcon icon={faAngleDoubleRight}
                className="footArrowIcon"/> */}
                 {name}</li></Link>)
            }
            {props.children && props.children}
        </Col>
        </div>
    );
};

export default FooterCol;
