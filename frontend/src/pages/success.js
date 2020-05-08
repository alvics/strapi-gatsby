import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <div style={{ textAlign: "center" }}>
      <code>Using success</code>
    </div>
    <h4
      style={{
        backgroundColor: "green",
        padding: "20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      Thank you, your order was successfully completed
    </h4>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
