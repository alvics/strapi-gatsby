// GET all products Query from strapi

import React from "react"
import Product from "./Product"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../../css/products.module.css"

const Products = () => {
  // Check to see if we have the query
  // const data = useStaticQuery(query)
  // console.log(data)
  // get allStrapiProducts and change the nodes name to products
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section className={styles.products}>
      <h1>Hello from Starpi Products!</h1>
      <div className={styles.center}>
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

const query = graphql`
  {
    allStrapiProduct {
      nodes {
        id
        title
        url
        price
        image {
          childImageSharp {
            fluid(maxWidth: 640, maxHeight: 480) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default Products
