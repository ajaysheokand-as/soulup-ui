import React from 'react'
import './ConnectRelavant.css'
function ConnectRelavant() {
    const arr = [
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma."
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",

        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma."
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",

        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma."
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",

        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
        },
    ]
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner bg-dark">
                        {/* <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..."/>
                        </div> */}
                        
                             
                                {/* <div className='container-fluid'> */}
                                  <div className='row mt-4 border border-0'>
                                      {
                                        arr.map(((item,index)=>{
                                          return(
                                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                            <div className='col-3 mb-4'>
                                          <div className="card border-0" style={{width: '18rem'}}>
                                            <img src={item.img_url} className="card-img-top img-fluid rounded-5" alt="Arti-Image" style={{width:'18rem',height:'14rem'}}/>
                                            <div className="card-body">
                                              <h5 className="card-title text-center">{item.title}</h5>
                                              <p className="card-text">{item.text}</p>
                                            </div>
                                          </div>
                                          </div>
                                          </div>
                                        );}))
                                      }
                                   
                                  </div>
                                  
                                {/* </div> */}
                              
                        
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConnectRelavant
