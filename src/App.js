import React from 'react'
import { Layout, Menu } from 'antd'
//import ScrollableAnchor from 'react-scrollable-anchor'
//import Scrollchor from 'react-scrollchor'
import './App.css'
import 'antd/dist/antd.css'
const { Header, Content, Footer } = Layout
const menuStyle = { lineHeight: '64px' }
const standardLight = '#fff'
const standardDark = '#001529'
const divDark = { background: standardDark, height: '100vh' }
const divLight = { background: standardLight, height: '100vh' }
const headerStyles = {
  background: standardLight,
  position: 'fixed',
  zIndex: 1,
  width: '100%'
}
const standardPadding = { padding: 100 }
/*
const sections=[
  {
    id:'home',
    label:'Home',
    component:()=>
  },
  {
    id:'features',
    label:'Features',
    component:()=>
  },
  {
    id:'pricing',
    label:'Pricing',
    component:()=>
  },
  {
    id:'about',
    label:'About',
    component:()=>
  }
]

const SwitchComponent=({match, location})=>{

  switch(match.params.pageLocation){
    case 
  }
}
*/
const App = () => (
  <Layout>
    {/*<Header style={headerStyles}>
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys={['1']} style={menuStyle}>
            <Menu.Item key="1"><Scrollchor to='#features'>Features</Scrollchor></Menu.Item>
            <Menu.Item key="2"><Scrollchor to='#pricing'>Pricing</Scrollchor></Menu.Item>
            <Menu.Item key="3"><Scrollchor to='#about'>About</Scrollchor></Menu.Item>
          </Menu>
</Header>*/}
    <Content>
      <div style={divDark} id="home">
        <h1 style={{ color: standardLight, ...standardPadding }}>
          Derivatives Modeling as a Service
        </h1>
        <p style={{ color: standardLight, ...standardPadding }}>
          For decades, the same financial models have been programmed and
          re-programmed at every bank. We are changing that. Combining
          state-of-the-art modeling with modern REST APIs, our models as a
          service provides robust, scalable infrastructure at a bargain price.
        </p>
      </div>
      <div style={{ ...standardPadding, ...divLight }} id="features">
        <h1>Option Pricing Models</h1>
        <p>
          Our models are the most sophisticated in the industry. Our software
          engineering is top notch.
        </p>
        <ul>
          <li>Robust Black-Scholes implied volatility</li>
          <li>
            Modern calibration techniques using advanced models which go far
            beyond Heston.
          </li>
          <li>
            Modern calculation techniques including pricing, Greeks, option
            implied density, value at risk, and expected shortfall.
          </li>
        </ul>
        <p>For more information on the models, see</p>
      </div>
      <div style={divDark} id="pricing">
        Pricing
      </div>
      <div style={divLight} id="about">
        About
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>optsaas</Footer>
  </Layout>
)

export default App
