import React from 'react'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from 'react-router-dom';

const Roompage = () => {
const {roomId} = useParams();

const myMeeting = async(element) =>{
    const appID = 2129250070;
    const serverSecret = "23d23885ca0fb3658d73c31f5bfe18d3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId , Date.now().toString(),'Mahi');
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
        container : element,
        scenario : {
            mode : ZegoUIKitPrebuilt.VideoConference
        }
    })
}
  return (
    <div>
     <div ref = {myMeeting}/>
    </div>
  )
}

export default Roompage
