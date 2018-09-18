import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Affix, Anchor } from 'antd'
import './App.css';
import 'antd/dist/antd.css'
const { Header, Content, Footer } = Layout
const { Link } = Anchor
const menuStyle={lineHeight:'64px'}
//const contentStyle={padding:'0 50px'}
const standardLight='#fff'
const standardDark='#001529'
const divDark={ background: standardDark, height:'100vh'}
const divLight={ background: standardLight, height:'100vh'}
const headerStyles={background: standardLight}
const standardPadding={padding:100}
const App=()=>(
  <Layout>
    
      <Affix>
        <Header style={headerStyles}>

          <div className="logo" />
            <Menu
              mode='horizontal'
              defaultSelectedKeys={['1']}
              style={menuStyle}
            >
              <Menu.Item key='1'>
                Features
              </Menu.Item>
              <Menu.Item key='2'>
                Pricing
              </Menu.Item>
              <Menu.Item key='3'>
                About
              </Menu.Item>
            </Menu>
        </Header>
      </Affix>
      <Content>
        <div style={divDark}>
          <h1 style={{color:standardLight, ...standardPadding}}>
            Derivatives Modeling as a Service
          </h1>
        </div>
        <div style={divLight} id="features">
          <div style={standardPadding}>
            <h2>
              Option Pricing Models; exposed over REST APIs
            </h2>
            <p>
              Use state-of-the-art modeling techniques to both calibrate and calculate.  
              <ul>
                <li>
                  Robust Black-Scholes implied volatility
                </li>
                <li>
                  Modern calibration techniques using advanced models which go way beyond Heston
                </li>
                <li>
                  Modern calculation techniques including pricing, Greeks, option implied density, value at risk, and expected shortfall.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div style={divDark} id="pricing">Pricing</div>
        <div style={divLight} id="about">About</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        optsaas
      </Footer>
    
  </Layout>
)

export default App;
