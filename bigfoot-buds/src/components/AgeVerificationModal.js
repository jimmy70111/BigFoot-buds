import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

import logo from "../images/original3.png";

const AgeVerificationModal = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const isVerified = localStorage.getItem('ageVerified');
        if (!isVerified) {
            setShow(true);
        }
    }, []);

    const handleClose = () => setShow(false);
    
    const handleYes = () => {
        localStorage.setItem('ageVerified', 'true'); // Set the flag in localStorage
        setShow(false);
    };

    const handleNo = () => {
        alert("You must be 21 years or older to use this website.");
        setShow(true);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="justify-content-center">
                    <Modal.Title className="text-center w-100">
                        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>You MUST BE 21 YEARS OLD to use this website.</h5>
                    <p>Are you over the age of 21?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleYes}>
                        Yes, I am
                    </Button>
                    <Button variant="secondary" onClick={handleNo}>
                        No, I am not
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AgeVerificationModal;
