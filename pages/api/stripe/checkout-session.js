import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  const {
    body: { line_items }
  } = req

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'AL', 'DZ', 'AD', 'AR', 'AU', 'AT', 'BH',
      'BY', 'BE', 'BR', 'BG', 'CL', 'CO', 'CR', 'HR', 'CY', 'CZ', 'DK', 'DO',
      'EC', 'EG', 'EE', 'FI', 'FR', 'DE', 'GR', 'GT', 'HU', 'IS', 'IN', 'ID',
      'IE', 'IL', 'IT', 'JP', 'JO', 'KZ', 'KZ', 'KW', 'LV', 'LB', 'LI', 'LT',
      'LU', 'MY', 'MT', 'MX', 'MD', 'MC', 'ME', 'MA', 'NL', 'NZ', 'NI', 'NO',
      'OM', 'PS', 'PA', 'PE', 'PH', 'PL', 'PT', 'QA', 'RO', 'RU', 'SA', 'RS',
      'SG', 'SK', 'SI', 'ZA', 'ES', 'SE', 'CH', 'TW', 'TH', 'TN', 'TR', 'UA',
      'GB', 'UY'],
    },
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'https://deepsixband.com/success',
    cancel_url: 'https://deepsixband.com/checkout',
  })

  res.status(200).json({ session })
}