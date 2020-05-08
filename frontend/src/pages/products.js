// Display the list of products
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Products from "../components/Products/Products"
import SEO from "../components/seo"

const ProductsPage = () => (
  <Layout>
    <SEO title="Product page" />
    <div style={{ textAlign: "center" }}>
      <code>Using products page template</code>
    </div>
    <Products />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProductsPage
