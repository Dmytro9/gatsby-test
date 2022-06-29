import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
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
      </section>
    </Layout>
  )
}
