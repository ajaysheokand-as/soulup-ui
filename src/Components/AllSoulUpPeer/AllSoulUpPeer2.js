import React from 'react'
import './AllSoulUpPeer2.css'
import { useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { setpasskey } from '../Redux/Functions';
function AllSoulUpPeer2() {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const arr=useSelector(state=>state.info);
  const go_card=(key)=>{
    dispatch(setpasskey(key));  
    navigate('/peerinfo');
  }
  return (
    <div className='container-fluid'>
      <div className='row mt-4 border border-0'>
        {
          arr.map((item,index) => {
            return (
              <div className='col-lg-4 col-xl-3 col-sm-6 mb-4' key={index}  onClick={()=>{go_card(index)}}>
                <div className="card border-0" style={{ width: '18rem' }}>
                  <img src={item.img_url} className="card-img-top img-fluid rounded-5" alt="Arti-Image" style={{ width: '18rem', height: '14rem' }} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text text-dark text-center" >{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })
        }

      </div>

    </div>
  )
}

export default AllSoulUpPeer2
