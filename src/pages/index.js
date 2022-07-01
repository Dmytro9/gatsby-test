import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log("data ", data)
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Something</p>
          <Link className={styles.btn} to="projects">
            Projects
          </Link>
        </div>
        <img
          src="./banner.png"
          alt="site banner"
          style={{
            maxWidth: "100%",
          }}
        />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`
