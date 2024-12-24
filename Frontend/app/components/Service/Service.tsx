import React from 'react'
import Image from 'next/image'

import Style from './Service.module.css'

function Service() {
  return (
    <div className={Style.service}>
        <div className={Style.service_box}>
            <div className={Style.service_box_item}>
                <Image src="/service-1.png" alt="Filter & Discover" width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src="/service-2.png" alt="Filter & Discover" width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src="/service-3.png" alt="Connect wallet" width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
            </div>
            <div className={Style.service_box_item}>
                <Image src="/service-1.png" alt="Filter & Discover" width={100} height={100} />
                <p className={Style.service_box_item_step}>
                    <span>Step 1</span>
                </p>
                <h3>Start trading</h3>
                <p>Connect with wallet, discover, buy NFTs, sell your NFTs and earn money</p>
            </div>
        </div>
    </div>
  )
}

export default Service