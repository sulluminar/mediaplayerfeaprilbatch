import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Category() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addCategory = ()=>{
        console.log("====category name====");
        console.log(categoryName)
    }
    return (
        <>
            <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
            <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
                <Modal.Header closeButton className='bg-dark'>
                    <Modal.Title><i class="fa-solid fa-list text-warning me-3"></i><span className='textStyle'>ADD CATEGORY</span></Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <p className='textStyle' style={{ fontWeight: '700' }}>Please fill the form</p>
                    <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
                        <Form.Group className="mb-3"  >
                            <Form.Control type="text" placeholder="Enter Category Name"
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="warning" onClick={addCategory}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Category