import Container from './ui/Container'

import styles from '../styles/components/Merch.module.scss'

export default function Merch() {
  return (
    <MerchComponent>
      <MerchHeader>
        <h2>Merch</h2>
      </MerchHeader>

      <MerchMain>
        <h5>Main</h5>
      </MerchMain>

      <MerchFooter>
        <h5>Footer</h5>
      </MerchFooter>
    </MerchComponent>
  )
}

function MerchHeader(props) {
  return (
    <div className={styles.MerchHeader}>
      {props.children}
    </div>
  )
}

function MerchMain(props) {
  return (
    <div className={styles.MerchMain}>
      {props.children}
    </div>
  )
}

function MerchFooter(props) {
  return (
    <div className={styles.MerchFooter}>
      {props.children}
    </div>
  )
}

function MerchComponent(props) {
  return (
    <div className={styles.Merch}>
      <Container>
        <div className={styles.MerchContent}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}