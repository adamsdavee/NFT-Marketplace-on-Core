'use client'

import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLines, TbArrowBigRightLine } from 'react-icons/tb';

import Style from './BigNFTSlider.module.css';
import Button from '../Button/Button';
import images from '../../../public/index';

function BigNFTSlider() {

    const [idNumber, setIdNumber] = useState(1);

    const sliderData = [{title: "Buddy NFT", id: 1, name: "Chukwudi David", collection: "Gym", price: "0.0000064664 ETH", like: 243, image: images.user1, nftImage:  images.nft_image_1, time: {days: 27, hours: 10, minutes: 11, seconds: 35,}},
        {title: "Buddy NFT", id: 1, name: "Chukwudi David", collection: "Gym", price: "0.0000064664 ETH", like: 243, image: images.user2, nftImage:  images.nft_image_2, time: {days: 27, hours: 10, minutes: 11, seconds: 35,}},
        {title: "Hello NFT", id: 1, name: "Chukwudi David", collection: "Gym", price: "0.0000064664 ETH", like: 243, image: images.user3, nftImage:  images.nft_image_3, time: {days: 27, hours: 10, minutes: 11, seconds: 35,}},
        {title: "Hello NFT", id: 1, name: "Chukwudi David", collection: "Gym", price: "0.0000064664 ETH", like: 243, image: images.user4, nftImage:  images.nft_image_3, time: {days: 27, hours: 10, minutes: 11, seconds: 35,}}
    ];

  
  return (
    <div className={Style.bigNFTSlider}>
        <div className={Style.bigNFTSlider_box}>
            <div className={Style.bigNFTSlider_box_left}>
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNFTSlider_box_left_creator}>
                    <div className={Style.bigNFTSlider_box_left_creator_profile}>
                        <Image className={Style.bigNFTSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="Profile image" width={50} height={50} />
                        <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}<span><MdVerified /></span></h4>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_creator_collection}>
                        <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                        <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_bidding}>
                    <div className={Style.bigNFTSlider_box_left_bidding_box}>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} <span>$43,000</span></p>
                    </div>
                    <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                        <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon} />
                        <span>Auction ending in</span>
                    </p>

                    <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.days} <span>Days</span></p>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.hours} <span>Hours</span></p>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.minutes} <span>mins</span></p>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                            <p>{sliderData[idNumber].time.seconds} <span>secs</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigNFTSlider