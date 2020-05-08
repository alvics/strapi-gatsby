// App root (Home page)
import React, { Component } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Home } from "../components/Home/Home"

class index extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{ textAlign: "center" }}>
          <code>Using index page template</code>
        </div>
        <Home />
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default index
