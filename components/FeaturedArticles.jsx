import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { articles } from '../data/articles'

import styles from '../styles/components/FeaturedArticles.module.scss'

export default function FeaturedArticles() {
  return (
    <div className={styles.FeaturedArticles}>
      <div className="Content">
        <div className={styles.FeaturedArticlesContent}>

          {articles.map((article) => {
            const { 
              title,
              subtitle,
              image,
              date,
              length,
              author,
              publisher,
              href
            } = article
            return (
              <div className={styles.FeaturedArticlesContentArticle}>
                <div className={styles.FeaturedArticlesContentArticleImage}>
                  <Link href={href}>
                    <a><img src={image} alt="Article Image"/></a>
                  </Link>
                </div>

                <div className={styles.FeaturedArticlesContentArticleMeta}>

                  <div className={styles.FeaturedArticlesContentArticleMetaAuthor}>
                    <FontAwesomeIcon icon={["far", "bookmark"]} />
                    <Link href={publisher.url}>
                      <a><b>{author.name}</b> at <b>{publisher.name}</b></a>
                    </Link>
                  </div>

                  <div className={styles.FeaturedArticlesContentArticleMetaTitle}>
                    <Link href={href}>
                      <a><h2>{title}</h2></a>
                    </Link>
                  </div>
                  
                  <div className={styles.FeaturedArticlesContentArticleMetaInfo}>
                    <p className={styles.DateLength}>{date} · {length} min read</p>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}