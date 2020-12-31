import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import FeaturedArticlesSkeleton from './FeaturedArticlesSkeleton/'

import { articles } from '../../data/articles'

import styles from './FeaturedArticles.module.scss'

export default function FeaturedArticles() {
  return (
    <div className={styles.FeaturedArticles}>
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
          <div className={styles.Article}>
            <div className={styles.ArticleImage}>
              <Link href={href}>
                <a><img src={image} alt="Article Image"/></a>
              </Link>
            </div>

            <div className={styles.ArticleMeta}>
              <div>
                <div className={styles.ArticleAuthor}>
                  <span>
                    <FontAwesomeIcon icon={["far", "bookmark"]} />
                    <Link href={author.url}>
                      <a><b>{author.name}</b></a>
                    </Link>
                    {" at "}
                    <Link href={publisher.url}>
                      <a><b>{publisher.name}</b></a>
                    </Link>
                  </span>
                </div>
                <Link href={href}>
                  <a><h2>{title}</h2></a>
                </Link>
                
                <p className={styles.DateLength}>{date} · {length} min read</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}