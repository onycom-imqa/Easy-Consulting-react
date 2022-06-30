import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';
import {useIMQA} from "imqa-react-sdk";

const FooterInfo = ({data: {icon, info1, info2, id}}) => {
    const IMQARef = useIMQA(); // 삽입
    return (
        <div ref={IMQARef}>
        <Col md={4}>
            <div className={`d-flex fContactInfo fContactInfo${id} align-items-center`}>
                <FontAwesomeIcon icon={icon} className="fContactIcon"/>
                <div>
                    <p className={`brnName${id}`}>{info1}</p>
                    {info2 && <p>{info2}</p>}
                </div>
            </div>
        </Col>
        </div>
    );
};

export default FooterInfo;
