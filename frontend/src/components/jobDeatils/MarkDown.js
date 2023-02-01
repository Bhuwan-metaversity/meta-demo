import React from 'react'
import ReactMarkdown from 'react-markdown'
const StyledMarkdown = ({ data }) => {
    return (
      <ReactMarkdown source={data} />
    )
  }
  
  export default StyledMarkdown