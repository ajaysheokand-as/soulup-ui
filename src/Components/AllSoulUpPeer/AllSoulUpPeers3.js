import React from 'react'
import  "./AllSoulUpPeer3.css";
import {useSelector} from 'react-redux'
const AllSoulUpPeer3 = () => {
    const cData=useSelector(state=>state.peer3card)
  return (
    <div className='container1'>
        <div className='content1'>
            <div className='row'>
                <div className='col-12 text-center'><h2>How Peer Converstions Help</h2></div>
            </div>
      </div>
      <div className='box'>
      {
        cData.map((index)=>{
            return(
                <div className='H1peer3' key={index.id}>
                    <h3>{index.title}</h3>
                    <div className='rte'>
                        <p>{index.text}
                         </p>
                    </div>
                </div>
            )

        })
      }
      </div>
     {/* <div className='card-container' >
      <div className='card1'>
                <div className='H1'>
                    <h3>Learn from a Peer</h3>
                    <div className='rte'>
                        <p>
                        Talking to a 'Peer' who has already been in your shoes helps you learn from their experiences. Indulge in some 'emotional brainstorming'!.
                         </p>
                    </div>
                </div>
                <div className='H1'>
                    <h3>Validate your feelings</h3>
                    <div className='rte'>
                        <p>
                        Talking to a Peer will prove to you that you aren't alone after all. It's a great opportunity to validate what you are going through. 
                         </p>
                    </div>
                </div>
                <div className='H1'>
                    <h3>Find a safe space</h3>
                    <div className='rte'>
                        <p>
                        Since Peers don't know you socially - it's a great way to freely express what is running through your head. Plus it's all bound by our privacy
                         </p>
                    </div>
                </div>
            </div>
        </div> */}
</div>

  )
}

export default AllSoulUpPeer3
