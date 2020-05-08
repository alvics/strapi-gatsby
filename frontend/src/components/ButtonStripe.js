import React, { Component } from "react"

export default class ButtonStripe extends Component {
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_FSllgWVajOupl24NdtxXRE5f00A6ibj0TO")
  }
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            console.log("hello stripe!!")
            event.preventDefault()
            this.stripe
              .redirectToCheckout({
                items: [{ sku: "sku_HDg8ufPFvFVQJb", quantity: 1 }],
                successUrl: "http://localhost:8000/success",
                cancelUrl: "http://localhost:8000/canceled",
              })
              .then(function (result) {
                if (result.error) {
                  // If `redirectToCheckout` fails due to a browser or network
                  // error, display the localized error message to your customer.
                  var displayError = document.getElementById("error-message")
                  displayError.textContent = result.error.message
                }
              })
          }}
        >
          <button id="checkout-button-sku_HDg8ufPFvFVQJb" role="link">
            Checkout
          </button>
        </form>
      </div>
    )
  }
}
