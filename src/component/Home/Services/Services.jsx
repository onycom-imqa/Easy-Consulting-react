import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Shared/Spinner/Spinner';
import {useIMQA} from "imqa-react-sdk";

const Services = () => {
    const IMQARef = useIMQA(); // 삽입
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('https://immense-river-40491.herokuapp.com/services')
        .then(res => setServices(res.data))
    }, [])

    return (
        <div ref={IMQARef}>
        <section id="services" className="services">
            <h4 className="miniTitle text-center">SERVICES</h4>
            <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div>
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center">
                {
                    services?.map((service, id) => <Service key={service._key + id} service={service}/>)
                }
            </div>
        </section>
        </div>
    );
};

export default Services;
