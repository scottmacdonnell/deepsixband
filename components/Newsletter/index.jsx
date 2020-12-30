import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Newsletter.module.scss'

export default function Newsletter() {
  return (
    <div className={styles.Newsletter}>
      <div className={styles.NewsletterMeta}> 
        <h2>Next.js is getting better every day — don’t miss out on all the action.</h2>
        <p>Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</p>
      </div>
      <div className={styles.NewsletterForm}>
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
            />
          </label>
          <input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
)
}