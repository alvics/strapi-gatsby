// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react"
import Layout from "../components/layout"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/myydrdgr"
            method="POST"
          >
            <div className="container">
              <div className="brand">
                <h1 className="brand">
                  <span>Ooh La Lava</span>
                </h1>
                <div className="spil">
                  <small stye={{ marginTop: "-25px" }}>
                    Custom jewellery designs, sizing quantities etc...
                  </small>
                </div>
              </div>

              <div className="wrapper">
                <div className="company-info">
                  <h3>Connect with us</h3>

                  <ul>
                    <li>
                      <i className="fa fa-road"></i> 22 Beitz Ave
                    </li>
                    <li>
                      <i className="fa fa-phone"></i> (555) 555-5555
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> oohlalava@yahoo.com
                    </li>
                  </ul>
                </div>

                <div className="contact">
                  <h3>E-mail Us</h3>

                  <form id="contact-form">
                    <p>
                      <label>Name</label>
                      <input type="text" name="name" id="name" required />
                    </p>

                    <p>
                      <label>Company</label>
                      <input type="text" name="company" id="company" />
                    </p>

                    <p>
                      <label>E-mail Address</label>
                      <input type="email" name="email" id="email" required />
                    </p>

                    <p>
                      <label>Phone Number</label>
                      <input type="text" name="phone" id="phone" />
                    </p>

                    <p className="full">
                      <label>Message</label>
                      <textarea name="message" rows="5" id="message"></textarea>
                    </p>

                    <p className="btn-contact">
                      <button type="submit" style={{ cursor: "pointer" }}>
                        Submit
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>

            {status === "SUCCESS" ? (
              <p
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  padding: "10px",
                  width: "50%",
                  margin: "0 auto",
                  borderRadius: "4px",
                  marginTop: "20px",
                }}
              >
                Thanks, your email was submitted successfully!
              </p>
            ) : (
              <p style={{ display: "none" }}>
                <button type="submit">Submit</button>
              </p>
            )}
            {status === "ERROR" && (
              <p
                style={{
                  backgroundColor: "red",
                  color: "#fff",
                  padding: "10px",
                  width: "50%",
                  margin: "0 auto",
                  borderRadius: "4px",
                  marginTop: "20px",
                }}
              >
                Ooops! There was an error, please try again.
              </p>
            )}
          </form>
        </div>
      </Layout>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
