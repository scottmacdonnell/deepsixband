import styles from './FeaturedArticlesSkeleton.module.scss'

export default function FeaturedArticlesSkeleton() {
  return (
    <div className={styles.FeaturedArticlesSkeleton}>
      <div className={styles.Article}>
        <div className={styles.ArticleImage}/>
        <div className={styles.ArticleMeta} />
      </div>
      <div className={styles.Article}>
        <div className={styles.ArticleImage} />
        <div className={styles.ArticleMeta} />
      </div>
      <div className={styles.Article}>
        <div className={styles.ArticleImage} />
        <div className={styles.ArticleMeta} />
      </div>
      <div className={styles.Article}>
        <div className={styles.ArticleImage} />
        <div className={styles.ArticleMeta} />
      </div>
      <div className={styles.Article}>
        <div className={styles.ArticleImage} />
        <div className={styles.ArticleMeta} />
      </div>
    </div>
  )
}