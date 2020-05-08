// Create product template

import React from "react"
import styles from "../../css/single-product.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Product = ({ title, image, price, url }) => {
  const mainImage = image.childImageSharp.fluid
  return (
    <Link to={`/products/${url}`}>
      <article className={styles.product}>
        <div className={styles.imgContainer}>
          <Image fluid={mainImage} alt={title} className={styles.img}></Image>
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="log-img" style={{ height: "20px" }}>
            <img
              src="https://oohlalava.com/wp-content/uploads/2017/11/50x50-logo.png"
              alt="logo"
            />
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Product
