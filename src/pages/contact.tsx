import React from 'react'

import Layout from '../components/Layout'
import Socials from '../components/Socials'
import { TextContent } from '../components/elements'

interface Props {
  location: {
    pathname: string
  }
}

const ContactPage: React.SFC<Props> = ({ location: { pathname } }) => {
  return (
    <Layout currentUrlPath={pathname}>
      <h1>
        contact <span>📞</span>
      </h1>
      <TextContent>
        <p style={{ textAlign: 'center' }}>
          From time to time, I take on small web projects. If you’re improving an existing site or starting something new, feel free to reach out. I’m always looking to meet new folks and hear what you're working on!
        </p>
        <p style={{ textAlign: 'center' }}>
          <a href="https://calendly.com/trevorlitsey/30min" target="_blank" rel="noopener noreferrer">Say hello</a>
        </p>
      </TextContent>
      <Socials />
    </Layout>
  )
}

export default ContactPage
