import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'
import Component4 from '../components/component4'
import Component5 from '../components/component5'
import Component6 from '../components/component6'
import './chatblockai.css'

const Chatblockai = (props) => {
  return (
    <div className="chatblockai-container">
      <Helmet>
        <title>Plush Short Toad</title>
        <meta property="og:title" content="Plush Short Toad" />
      </Helmet>
      <img
        alt="Mascot"
        src="/playground_assets/logo%20final%20%5B1%5D%20%5B5%5D%20%5B4%5D%20%5B1%5D-300w.png"
        className="chatblockai-image"
      />
      <img
        alt="Site name"
        src="/playground_assets/landing%20page%20%5B1%5D-200h.png"
        className="chatblockai-image1"
      />
      <a
        href="https://chatblock.ai/sign-in"
        target="_blank"
        rel="noreferrer noopener"
        className="chatblockai-link"
      >
        <AppComponent
          image_alt="Launch_app"
          className="chatblockai-component"
        ></AppComponent>
      </a>
      <div className="chatblockai-container1">
        <a
          href="https://medium.com/@chatblock.ai"
          target="_blank"
          rel="noreferrer noopener"
          className="chatblockai-link1"
        >
          <Component1
            image_alt="Medium"
            className="chatblockai-component1"
          ></Component1>
        </a>
        <div className="chatblockai-container2">
          <div className="chatblockai-container3">
            <a
              href="https://t.me/ChatBlockAI"
              target="_blank"
              rel="noreferrer noopener"
              className="chatblockai-link2"
            >
              <Component2
                image_alt="Telegram"
                className="chatblockai-component2"
              ></Component2>
            </a>
            <div className="chatblockai-container4">
              <a
                href="https://twitter.com/ChatBlock_Ai"
                target="_blank"
                rel="noreferrer noopener"
                className="chatblockai-link3"
              >
                <Component3
                  image_alt="tweets"
                  className="chatblockai-component3"
                ></Component3>
              </a>
              <a
                href="https://discord.gg/ZwXZyUdDKz"
                target="_blank"
                rel="noreferrer noopener"
                className="chatblockai-link4"
              >
                <Component4
                  image_alt="cord"
                  className="chatblockai-component4"
                ></Component4>
              </a>
            </div>
          </div>
          <a
            href="https://pancakeswap.finance/"
            target="_blank"
            rel="noreferrer noopener"
            className="chatblockai-link5"
          >
            <Component5
              image_alt="cake swap"
              className="chatblockai-component5"
            ></Component5>
          </a>
        </div>
      </div>
      <a
        href="https://chatblock.ai/docs.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className="chatblockai-link6"
      >
        <Component6
          image_alt="Docs"
          className="chatblockai-component6"
        ></Component6>
      </a>
    </div>
  )
}

export default Chatblockai
