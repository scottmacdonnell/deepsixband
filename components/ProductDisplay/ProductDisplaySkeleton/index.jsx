import styles from './ProductDisplaySkeleton.module.scss'

export default function ProductDisplaySkeleton() {
  return (
    <div className={styles.ProductDisplaySkeleton}>
      <div className={styles.ProductImage}>
        <div className={styles.ImageSkeleton} />
      </div>

      <div className={styles.ProductMeta}>
        <div className={styles.TitleSkeleton} />
        <div className={styles.PriceSkeleton} />
        <div className={styles.DescriptionSkeleton} />
        <div className={styles.SelectSkeleton} />
        <div className={styles.ButtonSkeleton} />
      </div>
    </div>
  )
}