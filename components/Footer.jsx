import Link from 'next/link'

import Container from './ui/Container'

import styles from '../styles/components/Footer.module.scss'

export default function Footer() {
  return (
    <>
      <FooterComponent>
        {/* <FooterHeader>
          <FooterNavMain />
          <FooterNavClub />
          <FooterNavLegal />
        </FooterHeader> */}

        <FooterMain>
          <FooterTagline>
            <span>© 2023 deepsix.</span>
          </FooterTagline>

          <FooterSocial />
        </FooterMain>
      </FooterComponent>
    </>
  )
}

function FooterSocial(props) {
  return (
    <div className={styles.FooterSocial}>
      <nav className={styles.Social}>
        <Link href="https://twitter.com/deepsixca" aria-label="Twitter">
          <a className="Link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
        </Link>
        <Link href="https://instagram.com/deepsixband" aria-label="Instagram">
          <a className="Link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <path d="M17.5 6.5h.01"/>
            </svg>
          </a>
        </Link>
      </nav>
    </div>
  )
}

function FooterTagline(props) {
  return (
    <div className={styles.FooterTagline}>
      <div className={styles.FooterLogo}>
        {/* <Logo /> */}
        {/* <h4>deepsix</h4> */}
      </div>

      <div className={styles.FooterTag}>
        {props.children}
      </div>
    </div>
  )
}

// function FooterNavLegal(props) {
//   return (
//     <div className={styles.FooterNavLegal}>
//       <span><strong>Legal</strong></span>
//       <nav>
//         <ul>
//           <li>
//             <Link
//               href="/legal/privacy"
//               style={{ display: 'contents' }}
//             >
//               <a>
//                 <span>Privacy Policy</span>
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/legal/terms"
//               style={{ display: 'contents' }}
//             >
//               <a>
//                 <span>Terms of Service</span>
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/legal/cookies"
//               style={{ display: 'contents' }}
//             >
//               <a>
//                 <span>Cookie Policy</span>
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

// function FooterNavMain(props) {
//   return (
//     <div className={styles.FooterNavMain}>
//       <span><strong>Main</strong></span>
//       <nav>
//         <ul>
//           <li>
//             <Link
//               href="/"
//               style={{ display: 'contents' }}
//             >
//               <a>
//                 <span>Home</span>
//               </a>
//             </Link>
//           </li>

//           <li>
//             <Link
//               href="/about"
//               style={{ display: 'contents' }}
//             >
//               <a>
//                 <span>About Us</span>
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }

function FooterMain(props) {
  return (
    <div className={styles.FooterMain}>
      {props.children}
    </div>
  )
}

function FooterHeader(props) {
  return (
    <div className={styles.FooterHeader}>
      {props.children}
    </div>
  )
}

function FooterComponent(props) {
  return (
    <div className={styles.Footer}>
      <Container>
        <div className={styles.FooterGrid}>
          {props.children}
        </div>
      </Container>
    </div>
  )
}

function Instagram({ href }) {
  return (
    <Link
      href={href}
      style={{ display: 'contents' }}
    >
      <a target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" fill="currentColor" shapeRendering="geometricPrecision">
          <g>
            <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" />
          </g>
        </svg>
      </a>
    </Link>
  )
}

function Twitter({ href }) {
  return (
    <Link
      href={href}
      style={{ display: 'contents' }}
    >
      <a target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" preserveAspectRatio="xMidYMid" width="22" height="22" fill="currentColor" shapeRendering="geometricPrecision">
          <g id="Logo_1_">
            <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
            C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
            c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
            c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
            c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
            c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" />
          </g>
        </svg>
      </a>
    </Link>
  )
}

function Facebook({ href }) {
  return (
    <Link
      href={href}
      style={{ display: 'contents' }}
    >
      <a target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1017.78" preserveAspectRatio="xMidYMid" width="22" height="22" fill="currentColor" shapeRendering="geometricPrecision">
          <path d="M1024,512C1024,229.23,794.77,0,512,0S0,229.23,0,512c0,255.55,187.23,467.37,432,505.78V660H302V512H432V399.2C432,270.88,508.44,200,625.39,200c56,0,114.61,10,114.61,10V336H675.44c-63.6,0-83.44,39.47-83.44,80v96H734L711.3,660H592v357.78C836.77,979.37,1024,767.55,1024,512Z"/>
        </svg>
      </a>
    </Link>
  )
}

// function Logo() {
//   return (

//   )
// }