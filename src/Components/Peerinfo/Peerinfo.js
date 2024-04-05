import React from 'react'
import './Peerinfo.css'
function Peerinfo(props) {
    console.log(props.item);
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-auto rounded d-flex justify-content-center  flex-lg-column justify-content-lg-start'>
            <img src={props.item.img_url} alt='Peer Image' className='peerinfo-img rounded'/>
        </div>
        <div className='col-lg-6 ms-3'>
            <div className='row '>
              <div className='col peerinfo-title'>{props.item.title}</div>
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
                <div className='col fs-5 fw-bold'>{props.item.language}</div>
            </div>
            <div className='row mb-3'>
              <div className='col'>
              <span className='col fs-5 tw-bold'>{props.item.age}</span><span className='fs-3 fw-bolder'>|</span>
              <span className='col fs-5 tw-bold'>{props.item.maritial_status}</span>
              <span className='fs-3 fw-bolder'>|</span><span className='col fs-5 tw-bold'>{props.item.occupation}</span>
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
    </div>
  )
}

export default Peerinfo
