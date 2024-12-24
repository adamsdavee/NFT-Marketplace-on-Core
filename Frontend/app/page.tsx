import Image from "next/image";

import Styles from './page.module.css'
import { HeroSection, Service, BigNFTSlider } from "./components/componentsindex";

export default function Home() {
  return (
    <div className={Styles.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  );
}
