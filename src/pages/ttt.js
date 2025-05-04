import React from "react";
import TicTacToe from "../components/TicTacToe";

import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function TicTacToePage() {
    const title = 'TicTacToe';      

    return (
      <>
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <SEO />
  
        <PageLayout>
          <Hero
            title={title}
          />

        <TicTacToe />

        </PageLayout>
      </>
    )
  }
  
TicTacToePage.Layout = Layout
