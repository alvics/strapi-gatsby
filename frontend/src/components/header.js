import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FFFFFF`,
      marginBottom: `1.45rem`,
      borderBottom: `3px solid black`,
      boxShadow: `0 2px 5px rgba(0, 0, 0, 0.16), 0 2px 3px rgba(0, 0, 0, 0.12)`,
      display: `fixed`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        color: "#333",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Gatsby / Strapi`,
}

export default Header
