import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="SA-MP Wiki and open.mp API Documentation - A mostly complete copy of the SA-MP Wiki with improvements and updates to documentation.">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.logoImage}
            src={useBaseUrl("public/logo-light-mono.svg")}
            alt={siteConfig.title}
          />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/index")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
