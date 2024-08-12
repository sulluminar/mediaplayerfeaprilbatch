import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VideoCard({dispalyVideo}) {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dispalyVideo.imageUrl}
                    height='250px' style={{padding:'5px'}} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{dispalyVideo.caption}</Card.Title>
                        <Button variant="danger"><i class="fa-solid fa-trash"></i></Button>
                    </div>

                </Card.Body>
            </Card>
        </>
    )
}

export default VideoCard