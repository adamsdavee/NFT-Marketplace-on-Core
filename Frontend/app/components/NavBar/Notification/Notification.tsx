import React from 'react'
import Style from './Notification.module.css'
import Image from 'next/image'

function Notification() {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src="/user-1.png" alt="profile image" width={50} height={50}/>
        </div>
        <div className={Style.notification_box_info}>
          <h4>Chukwudi David</h4>
          <p>Measure action your user....</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification