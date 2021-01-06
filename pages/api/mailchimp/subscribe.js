import mailchimp from "@mailchimp/mailchimp_marketing"
import md5 from 'md5'

export default async (req, res) => {
  const {
    body: { email }
  } = req

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const LIST_ID = process.env.MAILCHIMP_LIST_ID
  const API_KEY = process.env.MAILCHIMP_API_KEY
  const API_SERVER = process.env.MAILCHIMP_API_SERVER

  mailchimp.setConfig({
    apiKey: API_KEY,
    server: API_SERVER,
  })

  try {
    const subscriberHash = md5(email.toLowerCase())
    const statusResponse = await mailchimp.lists.getListMember(LIST_ID, subscriberHash)
    console.log('This email has already subscribed.')
    res.status(200).json({ status: "success" })
  } catch (err) {
    const subscribeData = {
      email_address: email,
      status: 'subscribed'
    }
    const subscribeResponse = await mailchimp.lists.addListMember(LIST_ID, subscribeData)
    console.log(`Successfully created an audience. The audience id is ${subscribeResponse.id}.`)
    res.status(200).json({ status: "success" })
  }

  

  

  // const subscribeData = {
  //   email_address: email,
  //   status: 'subscribed'
  // }

  // const subscribeResponse = await mailchimp.lists.addListMember(LIST_ID, subscribeData)

  // console.log(
  //   `Successfully created an audience. The audience id is ${subscribeResponse.id}.`
  // )

  // res.status(200).json({ status: "success" })
}

// export async function getServerSideProps(ctx) {
  
  
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }