import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPages = ({ props }) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1> {props} csdc </h1>
    </main>
  )
}

export default IndexPages
