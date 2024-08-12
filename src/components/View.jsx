import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/AllApi'
import { Col, Row } from 'react-bootstrap'

function View() {
  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    const response = await getAllVideos();
    console.log("===all videos==");
    console.log(response)
    const { data } = response;
    setAllVideos(data)
  }
  useEffect(() => {
    getVideos()
  }, [])
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos?.map((videos) => (
              <Col sm={3}>
                <VideoCard dispalyVideo={videos} />
              </Col>
            )) :
            <p>Nothing To Display</p>
        }

      </Row>

    </>
  )
}

export default View