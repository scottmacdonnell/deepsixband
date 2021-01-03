import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Newsletter.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.Newsletter}>
      <div className="Content">
        <div className={styles.NewsletterContainer}>

          <div className={styles.NewsletterContainerMeta}>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi dolore aperiam non quod.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis aut nulla eum praesentium magni quae maiores?</p>
          </div>

          <div className={styles.NewsletterContainerForm}>
            <form>
              <label htmlFor="email-input-field">
                <span>
                  <FontAwesomeIcon icon="envelope"/>
                </span>
                <input 
                  type="email" 
                  id="email-input-field" 
                  placeholder="bighomie@deepsixband.com"
                  aria-label="Your email address" 
                  autoComplete="off"
                />
              </label>
              
              <input type="submit" value="Subscribe" />
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}