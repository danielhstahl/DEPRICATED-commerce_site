import React, { Component } from 'react'
import 'swagger-ui/dist/swagger-ui.css'
import SwaggerUI from 'swagger-ui'
export default class SwaggerTest extends Component {
  componentDidMount() {
    SwaggerUI({
      dom_id: '#swaggerContainer',
      url:
        'https://cdn.rawgit.com/phillyfan1138/option_price_faas/28d64aaad5b3e39a2f51a0a7d84d0772ea002290/docs/openapi_merged.yml'
      //presets: [presets.apis],
    })
  }
  render() {
    return <div id="swaggerContainer" />
  }
}
