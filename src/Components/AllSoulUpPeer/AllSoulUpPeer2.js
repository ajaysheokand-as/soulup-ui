import React from 'react'
import './AllSoulUpPeer2.css'
import { useNavigate } from 'react-router-dom'
function AllSoulUpPeer2(props) {
  const navigate =useNavigate();
  const arr = [
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
      title: "Arti",
      text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
      title: "Kirti",
      text: "Led to self-isolation but now advocate for open discussions on mental health",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
      title: "Palak",
      text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
      title: "Harrshita",
      text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
      title: "Malina",
      text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
      title: "Arti",
      text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
      title: "Kirti",
      text: "Led to self-isolation but now advocate for open discussions on mental health",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
      title: "Palak",
      text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
      title: "Harrshita",
      text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"

    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
      title: "Malina",
      text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
      title: "Arti",
      text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
      title: "Kirti",
      text: "Led to self-isolation but now advocate for open discussions on mental health",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
      title: "Palak",
      text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
      title: "Harrshita",
      text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"

    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
      title: "Malina",
      text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
    {
      img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
      title: "Kirti",
      text: "Led to self-isolation but now advocate for open discussions on mental health",
      language:"Hindi,English",
      age:"34",
      maritial_status:"single",
      occupation:"Full Stack Developer"
    },
  ]

  const go_card=(item)=>{
    props.data_from_parent(item);
    navigate('/peerinfo');
    
  }
  return (
    <div className='container-fluid'>
      <div className='row mt-4 border border-0'>
        {
          arr.map((item => {
            return (
              <div className='col-lg-4 col-xl-3 col-sm-6 mb-4' onClick={()=>{go_card(item)}}>
                <div className="card border-0" style={{ width: '18rem' }}>
                  <img src={item.img_url} className="card-img-top img-fluid rounded-5" alt="Arti-Image" style={{ width: '18rem', height: '14rem' }} />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          }))
        }

      </div>

    </div>
  )
}

export default AllSoulUpPeer2
