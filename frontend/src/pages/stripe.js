import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

class StripeProducts extends Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_FSllgWVajOupl24NdtxXRE5f00A6ibj0TO")
  }

  handleSubmit(sku) {
    return event => {
      event.preventDefault()

      this.stripe
        .redirectToCheckout({
          items: [{ sku, quantity: 1 }],
          successUrl: "http://localhost:8000/success",
          cancelUrl: "http://localhost:8000/canceled",
        })
        .then(function (result) {
          if (result.error) {
            console.error(result.error.message)
          }
        })
    }
  }

  render() {
    const { id, currency, price, name, image } = this.props

    const priceFloat = (price / 100).toFixed(2)
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(priceFloat)

    return (
      <form onSubmit={this.handleSubmit(id)}>
        <Img fluid={image} alt="" />
        <h2>{name}</h2>
        <p>({formattedPrice})</p>
        <button type="submit">Buy Now</button>
      </form>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        allStripeSku {
          edges {
            node {
              price
              id
              currency
              attributes {
                name
              }
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allStripeSku.edges.map(({ node: sku }) => (
          <StripeProducts
            id={sku.id}
            currency={sku.currency}
            name={sku.attributes.name}
            price={sku.price}
          />
        ))}
      </div>
    )}
  />
)
