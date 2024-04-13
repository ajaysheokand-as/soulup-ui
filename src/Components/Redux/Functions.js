import {createSlice} from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
    passinfo:null,
    formpopup:true,
    peer3card:[
        {
            title:"Learn from a Peer",
            text:"Talking to a 'Peer' who has already been in your shoes helps you learn from their experiences. Indulge in some 'emotional brainstorming'!."
        },
        {
            title:"Validate your feelings",
            text:"Talking to a Peer will prove to you that you aren't alone after all. It's a great opportunity to validate what you are going through. "
        },
        {
            title:"Find a safe space",
            text:"Since Peers don't know you socially - it's a great way to freely express what is running through your head. Plus it's all bound by our privacy protocol. "
        },

    ],
    info: [
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"

        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Arti.jpeg"),
            title: "Arti",
            text: "Married during MCA,battled family challenges,domestic bullying, emotional trauma.",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Palak.jpeg"),
            title: "Palak",
            text: "I welcome conversations with new moms striving to balance the demands of child home, and work",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Harrshita.jpg"),
            title: "Harrshita",
            text: "Overcome anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"

        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/mia.jpeg"),
            title: "Malina",
            text: "Introverted personality,Social Anxiety, narcissistic breakyup, suicidal thoughts. Healing journey",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
        {
            img_url: require("../../Assests/AllSoulUpPeer2/Kriti.jpg"),
            title: "Kirti",
            text: "Led to self-isolation but now advocate for open discussions on mental health",
            language: "Hindi,English",
            age: "34",
            maritial_status: "single",
            occupation: "Full Stack Developer"
        },
    ]
}

export const infoSlice=createSlice({
    name:"inforfmation",
    initialState,
    reducers:{
        addInfo:(state,action)=>{
            const infoarr={
                img_url:require(action.payload.img_url),
                title:action.payload.title,
                text:action.payload.text,
                language:action.payload.language,
                age:action.payload.age,
                maritial_status:action.payload.maritial_status,
                occupation:action.payload.occupation,

            }
            state.info.push(infoarr);
        },

        setpasskey:(state,action)=>{
            state.passinfo=action.payload;
        },

        setformpopup:(state,action)=>{
            state.formpopup=action.payload;
        }
    }
})

export const {addInfo ,setpasskey,setformpopup}=infoSlice.actions;
export default infoSlice.reducer;