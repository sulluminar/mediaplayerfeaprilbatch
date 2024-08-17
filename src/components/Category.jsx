import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState()
    const [allCategory, setAllCategory] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAddCategory = async () => {
        if (!categoryName) {
            alert("Please fill the form completely")
        }
        else {
            let body = {
                categoryName: categoryName,
                allVideos: []
            }
            const response = await addCategory(body);
            if (response.status === 201) {
                toast.success(`${categoryName} successfully inserted`);
                handleClose()
                setCategoryName('')
            }
            else {
                toast.error("Some thing went wrong")
            }
        }
    }
    const getCategory = async () => {
        const response = await getAllCategory();
        const { data } = response;
        console.log("Category Details");
        console.log(data)
        setAllCategory(data)
    }
    useEffect(() => {
        getCategory();
    }, [])
    const handleDelete = async (categoryId) => {
        const result = await deleteCategory(categoryId);
        console.log("delete response");
        console.log(result)
        if (result.status === 200) {
            getCategory()
        }
        else {
            toast.error("Some thing went wrong")
        }
    }
    const videoDrop = async (e) => {
        console.log("===on drop===")
    }
    return (
        <>
            <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
            {
                allCategory?.length > 0 ?
                    allCategory.map((item) => (
                        <div className='m-3 border border-secondary rounded p-3' 
                            droppable onDrop={(e) =>videoDrop(e)}
                        >
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 style={{ color: 'white' }}>{item.categoryName}</h6>
                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}> <i class="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    ))
                    : <p>No Categroy Found</p>
            }
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
                    <Button variant="warning" onClick={handleAddCategory}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
        </>
    )
}

export default Category