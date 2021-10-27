import React, { FC } from "react"
import PropTypes from "prop-types"

interface Props {
  siteTitle: string
}

const Footer: FC<Props> = ({ siteTitle }) => (
  <footer>
    <div>
      <p>&copy; {new Date().getFullYear()} {siteTitle}</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
