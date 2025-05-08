import React, { useEffect, useState } from "react";
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

import animationData from "../assets/lottie/rocket.json"; 
import passport from "../assets/lottie/passport.json";
import car from "../assets/lottie/car.json";

export default function LottiePage() {
  const title = 'Animation';
  const [isClient, setIsClient] = useState(false);
  const [Lottie, setLottie] = useState(null);

  useEffect(() => {
    setIsClient(true);
    import("lottie-react").then((mod) => setLottie(() => mod.default));
  }, []);

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>
        <Hero title={title} />

        <p>
          Lottie animations are lightweight, scalable animations rendered from JSON files, 
          enabling rich motion graphics on the web and mobile without performance overhead.
        </p>

        {isClient && Lottie && (
          <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "2rem" }}>
            <Lottie animationData={car} loop autoplay style={{ width: 300, height: 300 }} />
            <Lottie animationData={animationData} loop autoplay style={{ width: 300, height: 300 }} />
            <Lottie animationData={passport} loop autoplay style={{ width: 300, height: 300 }} />
          </div>
        )}
      </PageLayout>
    </>
  );
}

LottiePage.Layout = Layout;
