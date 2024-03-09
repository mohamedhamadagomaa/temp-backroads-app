import React from 'react'

const HeadTitle = ({title,subTitle}) => {
  return (
    <div className="section-title">
    <h2>
      {title} <span>{subTitle}</span>
    </h2>
  </div>
  )
}

export default HeadTitle
