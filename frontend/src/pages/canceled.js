import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Success Page" />
    <div style={{ textAlign: "center" }}>
      <code>Using canceled</code>
    </div>
    <h4
      style={{
        backgroundColor: "red",
        padding: "20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      You successfully canceled your order.
    </h4>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
