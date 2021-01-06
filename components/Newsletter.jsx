import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Newsletter.module.scss'

export default function Newsletter() {
  const inputEmail = useRef(null);
  const [buttonStateReady, setButtonStateReady] = useState(true)
  const [buttonStateActive, setButtonStateActive] = useState(false)
  const [buttonStateAfter, setButtonStateAfter] = useState(false)

  const handleSubscribe = async (e) => {
    setButtonStateActive(true)
    setButtonStateReady(false)
    e.preventDefault()

    const body = {
      email: inputEmail.current.value
    }

    const res = await fetch(`/api/mailchimp/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(body)
    })

    const { status } = await res.json();

    if (status) {
      inputEmail.current.value = ''
      setTimeout(userSubscribeSuccess, 1000);
    }
  }

  const userSubscribeSuccess = () => {
    setButtonStateAfter(true)
    setButtonStateActive(false)
    setTimeout(resetButton, 1000);
  }

  const resetButton = () => {
    setButtonStateReady(true)
    setButtonStateAfter(false)
  }

  return (
    <div className={styles.Newsletter}>
      <div className="Content">
        <div className={styles.NewsletterContainer}>

          <div className={styles.NewsletterContainerMeta}>
            <h2>We do things sometimes. Be the first to know when it happens.</h2>
            <p>Sign up for our email newsletter through the form below, and we'll make sure to keep you updated.</p>
          </div>

          <div className={styles.NewsletterContainerForm}>
            <form onSubmit={handleSubscribe}>
              <label htmlFor="email-input-field">
                <span>
                  <FontAwesomeIcon icon="envelope"/>
                </span>
                <input 
                  type="email"
                  name="email"
                  id="email-input-field" 
                  placeholder="bighomie@deepsixband.com"
                  ref={inputEmail}
                  aria-label="Your email address" 
                  autoComplete="off"
                />
              </label>
              <button
                type="submit"
                className={`${styles.SubmitButton} ${buttonStateReady ? styles.SubmitButtonReady : ''} ${buttonStateActive ? styles.SubmitButtonActive : ''} ${buttonStateAfter ? styles.SubmitButtonAfter : ''}`}
              >
                <div className={styles.SubmitButtonText}>
                  <p>Subscribe</p>
                </div>

                <div className={styles.SubmitButtonSpinnerContainer}>
                  <div className={styles.SubmitButtonSpinner} />
                </div>

                <div className={styles.SubmitButtonCheck}>
                  <svg role="img" focusable="false" height="32" width="32" viewBox="0 0 24 24" aria-hidden="true" class="Svg-sc-1usfroi-0 epEIZP">
                    <polyline points="6.66 12 10.43 16.41 17.32 8.34" fill="none" stroke="#f1f1f1"/>
                  </svg>
                </div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}