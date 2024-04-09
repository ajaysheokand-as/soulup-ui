import React from 'react'
import './Peerinfo.css'
import { setpasskey } from '../Redux/Functions';
import { useSelector } from 'react-redux'
import AllSoulUpPeer3 from '../AllSoulUpPeer/AllSoulUpPeers3';
function Peerinfo() {
  const item = useSelector((state) => (state.info[state.passinfo]))
  // console.log("passinfo=");
  console.log(item);
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-auto rounded d-flex justify-content-center  flex-lg-column justify-content-lg-start'>
          <img src={item.img_url} alt='Peer Image' className='peerinfo-img rounded' />
        </div>
        <div className='col-lg-6 ms-3'>
          <div className='row '>
            <div className='col peerinfo-title'>{item.title}</div>
          </div>
          <div className='row'>
            <div className="col">
              <button type="button" className="btn btn-outline-primary m-2 peer-btn">Career Fulfilment</button>
              <button type="button" className="btn btn-outline-primary m-2">Difficult in-laws</button>
              <button type="button" className="btn btn-outline-primary m-2">Loss of a pet</button>
              <button type="button" className="btn btn-outline-primary m-2">Mental Harassment</button>
              <button type="button" className="btn btn-outline-primary m-2">Suicide Attempts</button>
            </div>
          </div>
          <div className='row mt-5 mb-5 '>
            <div className='col fs-5 fw-bold'>{item.language}</div>
          </div>
          <div className='row mb-3'>
            <div className='col'>
              <span className='col fs-5 tw-bold'>{item.age}</span><span className='fs-3 fw-bolder'>|</span>
              <span className='col fs-5 tw-bold'>{item.maritial_status}</span>
              <span className='fs-3 fw-bolder'>|</span><span className='col fs-5 tw-bold'>{item.occupation}</span>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              Got married between first sem exam during my MCA from NIT. Our Marriage was Love, faced lots of challenges to agree on family. Just after marriage faced lots of domestic bullying/mental harassment by my in-laws, I even tried suicide , despite it ,I excelled in MCA, and after that hustled in my career from 5k job to Module Lead in LTIMindtree.Gone through lots of emotional trauma during Covid also I lost my 2 pets(rabbits) last year, they were with me since last 8 years.
            </div>
          </div>
          <div className='row mt-5 '>
            <div className='col-3'>Rs. 299.0 Platform Fee</div>
            <div className='col'>
              <button type="button" class="btn btn-danger btn-sm">Verified Peer</button>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col'>
              <div className="d-grid gap-2">
                <button className="btn btn-warning rounded-5 border border-secondary" type="button">Schedule Your Time</button>
              </div>
            </div>
            <div className='row mt-5 '>
              <div className='col-12 border-top p-2'>
                <div className='row'>
                  <div className='col-1'><i class="fa-solid fa-lock"></i></div>
                  <div className='col-10'>Everything is Confidential</div>
                </div>
              </div>
              <div className='col-12 border-top p-2'>
                <div className='row'>
                  <div className='col-1'><i class="fa-regular fa-clipboard"></i></div>
                  <div className='col-10'>Learning from Peer's Experience</div>
                </div>
              </div>
              <div className='col-12 border-top p-2'>
                <div className='row'>
                  <div className='col-1'><i class="fa-regular fa-heart"></i></div>
                  <div className='col-10'>Honest Free-flow Conversation</div>
                </div>
              </div>
              <div className='col-12  border-top p-2'>
                <div className='row'>
                  <div className='col-1'><i class="fa-regular fa-square-check"></i></div>
                  <div className='col-10'>Trained & verified Peers</div>
                </div>
              </div>
              <div className='col-12 border-top p-2'>
                <div className='row'>
                  <div className='col-1'><i class="fa-solid fa-arrow-up-from-bracket"></i></div>
                  <div className='col-10'>Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row w-100 mt-5 mb-5 d-flex justify-content-center'>
        <div className='col-12 text-center fs-3 fw-bold'>
          Custmore Reviews
        </div>
        <div className='col-lg-6 border-end p-3 '>
          <div className='row d-flex  d-flex flex-column  align-items-lg-end'>
            <div className='col-lg-6  d-flex justify-content-center justify-content-lg-start'>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div className='col-lg-6 d-flex justify-content-center justify-content-lg-start'>Be the first to write a review</div>
          </div>
        </div>
        <div className='col-lg-6 p-3 ps-5 d-flex flex-column align-items-center align-items-lg-start'><button type="button" class="btn btn-dark rounded-0 w-50 ">Write a Review</button></div>
      </div>
      <div className='row mb-5'>
        <div className='col-12 fs-1 text-center'>Benefits of a Peer Conversation</div>
        <div className='row mt-5 d-flex justify-content-center'>
          <div className='col-lg-5 m-2 '>
            <div className="card text-center bg-secondary-subtle" style={{height:'10rem'}}>
              <div className="card-body">
                <h5 className="card-title">✓ Peer Intelligence & Coping strategies</h5>
                <p className="card-text">Since your Peer has gone through something similar, you can exchange notes, learn from their experiences and find brand new perspectives about your common challenges.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 m-2'>
            <div className="card text-center bg-secondary-subtle" style={{height:'10rem'}}>
                <div className="card-body">
                  <h5 className="card-title">✓ Validation & support</h5>
                  <p className="card-text">SoulUp Conversations allow you to recognize that there are others who have had the same challenges as you. Talking about common emotions is a great source of hope and strength.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <AllSoulUpPeer3/>
    </div>
    
  )
}

export default Peerinfo
