import React from "react"
import Product from "../Products/Product"
import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "../../css/products.module.css"
import ButtonStripe from "../ButtonStripe"

const query = graphql`
  {
    allStrapiProduct(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
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

const Featured = () => {
  const {
    allStrapiProduct: { nodes: products },
  } = useStaticQuery(query)

  return (
    <section className={styles.products}>
      <h1>Hello from Featured Products!</h1>

      <div className={styles.center}>
        {products.map(product => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to="/products" className="btn-primary">
        more products
      </Link>
      <ButtonStripe />
    </section>
  )
}

export default Featured
