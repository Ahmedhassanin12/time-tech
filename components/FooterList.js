import Link from 'next/link'
import React from 'react'

const FooterList = ({title, links}) => {
  return (
    <div className='footer_list'>
      <h3>{title}</h3>
      <div className="list">
        {
          links.map((item, idx) => {
            return(
             <Link key={idx} href={item.path}>{item.title}</Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default FooterList