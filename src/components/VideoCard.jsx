import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard({ dispalyVideo }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card style={{ width: '16rem', height: "350px" }}>
                <Card.Img variant="top" src={dispalyVideo.imageUrl}
                    height="250px" width="100%" style={{ padding: '5px' }} onClick={handleShow} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{dispalyVideo.caption}</Card.Title>
                        <Button variant="danger"><i class="fa-solid fa-trash"></i></Button>
                    </div>

                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{dispalyVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="480" src={`${dispalyVideo.youtubeLink}`}
                        title="Ennile Punchiri Video Song | Phoenix | Sam C.S | K.S. Chithra | Kapil Kapilan"
                        frameborder="0" allow="accelerometer; autoplay; allowfullscreen">
                    </iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}

export default VideoCard