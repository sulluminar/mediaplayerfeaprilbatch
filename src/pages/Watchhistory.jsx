import React from 'react'
import { Link } from 'react-router-dom'

function Watchhistory() {
  return (
    <>
      <div className='container mt-5 d-flex justify-content-between mb-5'>
        <h3 className='textStyle'>Watch History</h3>
        <Link to='/home' style={{textDecoration:'none', color:'white', fontWeight:'700', fontSize:'18px'}}>
        <i class="fa-solid fa-arrow-left me-2"></i>
          Back To Home
        </Link>
      </div>
      <table className='table container mb-5 mt-5' data-bs-theme='dark'>
          <thead >
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Neela Nilave</td>
              <td>https://www.youtube.com/watch?v=ufHnsVixMEs</td>
              <td>07-08-2024 11:30AM</td>
              <td><i class="fa-solid fa-trash"></i></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Neela Nilave</td>
              <td>https://www.youtube.com/watch?v=ufHnsVixMEs</td>
              <td>07-08-2024 11:30AM</td>
              <td><i class="fa-solid fa-trash"></i></td>
            </tr>
          </tbody>
      </table>
    </>
  )
}

export default Watchhistory