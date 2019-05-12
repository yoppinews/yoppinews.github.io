import React from "react"

import Calendar from "../components/calendar"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="yoppinews" keywords={[`yoppinews`, `青山吉能`]} />
    <Calendar/>
    <ul>
      <li>情報の不足・誤りについては <a href="https://twitter.com/yoppinews">Twitter DM</a> にてご連絡いただけますと幸いです</li>
      <li>公式な情報ソースのないものについては一部記載を見送っているものがある場合があります</li>
    </ul>
    <p>
      <a className="twitter-timeline" href="https://twitter.com/yoppinews?ref_src=twsrc%5Etfw">Tweets by yoppinews</a>
    </p>
  </Layout>
)

export default IndexPage
