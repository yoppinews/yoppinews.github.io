import React from "react"

import Calendar from "../components/calendar"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="yoppinews" keywords={[`yoppinews`, `青山吉能`]} />
    <Calendar/>
    <p>
      <a className="twitter-timeline" href="https://twitter.com/yoppinews?ref_src=twsrc%5Etfw">Tweets by yoppinews</a>
    </p>
  </Layout>
)

export default IndexPage
