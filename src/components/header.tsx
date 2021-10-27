import React, { FC } from "react"
import PropTypes from "prop-types"

interface Props {
  siteTitle: string
}

const Header: FC<Props> = ({ siteTitle }) => (
  <header>
    <div>
      <h1 className={`brand`}>{siteTitle}</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
