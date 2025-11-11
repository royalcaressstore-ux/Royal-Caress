\
"use client"

import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TermsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#b3123c] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#4B1D3F] px-6 lg:px-12 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/royal-caress-logo.png"
              alt="Royal Caress"
              width={96}
              height={96}
              className="h-24 w-auto"
            />
          </Link>
          <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#4B1D3F] to-[#B3123D] py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6 tracking-tight">
            General Terms and Conditions
          </h1>
          <p className="text-lg text-white/90 leading-relaxed font-light">
            Please read these terms carefully before using our website or purchasing our products.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* 1.1 Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.1 Introduction</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">Welcome to Royal Caress.</p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              These Terms and Conditions govern your use of our website and the purchase of products through it.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              By accessing our website and/or making a purchase, you agree to be bound by these terms, our Privacy
              Policy, and any other terms and conditions that may apply to our products or services. If you do not agree
              to these Terms, please do not use our Website.
            </p>
          </div>

          {/* 1.2 Eligibility and Age Verification */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.2 Eligibility and Age Verification</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Our Site and products are intended solely for adults 18 years of age or older. By using our Site, you
              represent and warrant that you are at least 18 years of age.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We implement an age verification process in compliance with UK regulations. We reserve the right to
              request proof of age before processing any order and to refuse service, terminate accounts, or cancel
              orders at our sole discretion.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              For more information about our age verification process, please see our "Age Verification Policy."
            </p>
          </div>

          {/* 1.3 Products and Prices */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.3 Products and Prices</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All products are described as accurately as possible. However, we do not guarantee that all descriptions
              or images are 100% accurate. Colors may vary depending on your device settings.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All prices are displayed in British Pounds (£). We reserve the right to change prices at any time, but
              changes will not affect previously confirmed orders.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              We make every effort to ensure that all prices on the Site are accurate, but errors do occur. If we
              discover an error in the price of any product, we will notify you as soon as possible and give you the
              option to reconfirm the order at the correct price or cancel it.
            </p>
          </div>

          {/* 1.4 Orders and Contracts */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.4 Orders and Contracts</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              By placing an order, you are making an offer to purchase products. All orders are subject to acceptance
              and availability.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              The contract between you and Royal Caress will only be formalized when we send you an order confirmation
              email. This email will constitute acceptance of your offer to purchase products.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We reserve the right to refuse your order for any reason, including:
            </p>
            <ul className="list-disc list-inside text-[#4B1D3F]/80 leading-relaxed mb-4 ml-4">
              <li>Product out of stock</li>
              <li>Inability to authorize your payment</li>
              <li>Identifying a price or product description error</li>
              <li>Suspected fraud</li>
              <li>Age verification failed</li>
            </ul>
          </div>

          {/* 1.5 Payment */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.5 Payment</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">We accept the following payment methods:</p>
            <ul className="list-disc list-inside text-[#4B1D3F]/80 leading-relaxed mb-4 ml-4">
              <li>Credit and debit cards (Visa, Mastercard, American Express, UnionPay, JCB, Discover)</li>
              <li>Apple Pay</li>
              <li>Klarna</li>
              <li>ClearPay</li>
              <li>Revolut Pay</li>
            </ul>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              All credit and debit card transactions are processed through secure and encrypted payment gateways. We do
              not store full card details on our servers.
            </p>
          </div>

          {/* 1.6 Delivery */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.6 Delivery</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We deliver throughout the UK. Delivery times and costs vary depending on location and the delivery method
              chosen.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All products are shipped in discreet packaging, with no identification of the contents or the Royal Caress
              brand.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              For detailed information about our delivery policies, including times, costs and countries served, please
              see our "Delivery Policy".
            </p>
          </div>

          {/* 1.7 Right of Cancellation and Refunds */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">
              1.7 Right of Cancellation and Refunds
            </h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have
              a legal right to cancel your order within 14 days of receiving the goods.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              To exercise your right of cancellation, you must inform us of your decision by making a clear statement
              via email: support@royalcaress.co.uk
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We accept returns of opened products, except for intimate items for health and safety reasons. All
              returned products must be intact and in their original packaging.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              For detailed information about our return and refund process, please see our "Return and Refund Policy".
            </p>
          </div>

          {/* 1.8 Warranty and Compliance */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.8 Warranty and Compliance</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All products sold by Royal Caress are covered by a minimum 3-month warranty against manufacturing defects,
              in addition to your statutory rights.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We guarantee that all products conform to their description, are of satisfactory quality and fit for their
              intended purpose.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All electrical products sold on our website comply with UK and EU safety regulations, including the Low
              Voltage Directive (LVD) and the Electromagnetic Compatibility Directive (EMC) where applicable.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              For detailed information about our warranty, please see our "Warranty Policy".
            </p>
          </div>

          {/* 1.9 Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.9 Intellectual Property</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              All content on the site, including text, graphics, logos, icons, images, audio clips, digital downloads
              and data compilations, is the property of Royal Caress or its content suppliers and is protected by UK and
              international copyright laws.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              You may view, download, and print content from our website for your personal, limited to non-commercial
              use only. You must not reproduce, distribute, modify, create derivative works from, publicly display,
              publicly perform, republish, download, store, or transmit any material from our website without our
              expressed written permission.
            </p>
          </div>

          {/* 1.10 Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.10 Limitation of Liability</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              To the maximum extent permitted by law, Royal Caress will not be liable for any indirect, incidental,
              special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, or any loss of data, use, goodwill or other intangible losses, resulting from:
            </p>
            <ul className="list-none text-[#4B1D3F]/80 leading-relaxed mb-4 ml-4">
              <li className="mb-2">a) Your use of, or inability to use, our website;</li>
              <li className="mb-2">b) Any products purchased or obtained through our website;</li>
              <li className="mb-2">c) Any unauthorized access to or alteration of your transmissions or data;</li>
              <li className="mb-2">d) Any other questions related to our Website or products.</li>
            </ul>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Our total liability to you for any damages shall not exceed the amount paid by you for the relevant
              products.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              Nothing in these Terms excludes or limits our liability for death or personal injury resulting from our
              negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or
              limited under applicable law.
            </p>
          </div>

          {/* 1.11 Proper Use of Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.11 Proper Use of Products</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Our products are intended for personal and recreational use by adults only. You agree to use our products
              responsibly and in accordance with the instructions provided.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              We are not responsible for any injuries or damage resulting from the misuse or abuse of our products. We
              recommend that you read all instructions and safety information before using any product.
            </p>
          </div>

          {/* 1.12 Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.12 Changes to Terms</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              of the Updated Terms on the Website.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              Your continued use of the website following the posting of any changes constitutes acceptance of those
              changes. We recommend that you review these Terms periodically to be aware of any changes.
            </p>
          </div>

          {/* 1.13 Applicable Law and Jurisdiction */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.13 Applicable Law and Jurisdiction</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              These Terms will be governed by and construed in accordance with the laws of England and Wales. Any
              disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              If you are a consumer resident in another European Union country, you may also have protection under the
              mandatory consumer laws of the country where you reside.
            </p>
          </div>

          {/* 1.14 Contact */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">1.14 Contact</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:support@royalcaress.co.uk" className="text-[#B3123D] hover:underline">
                support@royalcaress.co.uk
              </a>
            </p>
          </div>

          {/* ====================== NEW POLICIES (ADDED) ====================== */}

          {/* 2. Privacy Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">2. Privacy Policy</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We collect and process personal data strictly in accordance with applicable data protection laws. The
              categories of data may include identification, contact details, order information, payment confirmation and
              technical usage data.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We use your data to provide and improve our services, fulfil orders, prevent fraud, comply with legal
              obligations and, where permitted, deliver marketing communications. You may opt-out of marketing at any
              time.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We implement appropriate technical and organisational measures to safeguard your information. We retain
              data only for as long as necessary for the purposes described or as required by law.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              For full details of your rights (access, rectification, erasure, restriction, portability and objection),
              please refer to our dedicated Privacy Policy page or contact{" "}
              <a href="mailto:support@royalcaress.co.uk" className="text-[#B3123D] hover:underline">
                support@royalcaress.co.uk
              </a>.
            </p>
          </div>

          {/* 3. Cookies Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">3. Cookies Policy</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We use cookies and similar technologies to enable essential site functions, measure performance, remember
              preferences and deliver relevant content. You can manage your preferences through the cookie banner or
              your browser settings.
            </p>
            <ul className="list-disc list-inside text-[#4B1D3F]/80 leading-relaxed mb-4 ml-4">
              <li>Essential cookies: required for core functionality and security.</li>
              <li>Analytics cookies: help us understand site usage and improve the experience.</li>
              <li>Marketing cookies: used to deliver personalised content and offers.</li>
            </ul>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              Blocking some cookies may impact your experience. For more information, please consult our full Cookies
              Policy page.
            </p>
          </div>

          {/* 4. Returns & Refunds Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">4. Returns & Refunds Policy</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              In addition to your statutory 14-day cancellation right, our detailed policy sets out the conditions for
              return eligibility, timelines, and refund methods. For health and hygiene reasons, certain intimate items
              may be non-returnable once opened unless defective.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              To initiate a return, please contact us at{" "}
              <a href="mailto:support@royalcaress.co.uk" className="text-[#B3123D] hover:underline">
                support@royalcaress.co.uk
              </a>{" "}
              with your order number and reason for return. We will provide instructions and, where applicable, a return
              authorisation.
            </p>
          </div>

          {/* 5. Age Verification Terms */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">5. Age Verification Terms</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We may use third-party age verification services and may require supporting documentation. Orders may be
              delayed or cancelled if verification cannot be completed. Any data processed for age checks is handled in
              accordance with our Privacy Policy and applicable law.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              If an order fails age verification, any payments captured will be refunded to the original method,
              excluding non-recoverable processing fees where permitted by law.
            </p>
          </div>

          {/* 6. Disclaimer of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">6. Disclaimer of Liability</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Information provided on our website is for general guidance only and does not substitute professional
              advice. To the fullest extent permitted by law, we disclaim responsibility for losses arising from reliance
              on site content or improper use of products.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              Always follow product instructions and consult a qualified professional if you have medical concerns.
            </p>
          </div>

          {/* 7. Delivery & Shipping Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">7. Delivery & Shipping Policy</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              We offer multiple delivery options across the UK. Estimated timelines are shown at checkout and may vary
              by destination, courier and peak periods. Tracking details are provided where available.
            </p>
            <ul className="list-disc list-inside text-[#4B1D3F]/80 leading-relaxed mb-4 ml-4">
              <li>Discreet packaging without product identification.</li>
              <li>Risk passes to you upon delivery to the provided address.</li>
              <li>Please report damaged or missing items within 48 hours of receipt.</li>
            </ul>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              Full shipping terms, including fees and service levels, are detailed in our Delivery & Shipping Policy.
            </p>
          </div>

          {/* 8. Warranty Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-light text-[#4B1D3F] mb-4">8. Warranty Policy</h2>
            <p className="text-[#4B1D3F]/80 leading-relaxed mb-4">
              Products are warranted against manufacturing defects for a minimum of 3 months unless a longer period is
              stated by the manufacturer. This warranty does not cover normal wear, misuse, improper storage, unauthorised
              modifications or accidental damage.
            </p>
            <p className="text-[#4B1D3F]/80 leading-relaxed">
              If you believe your product is defective, contact{" "}
              <a href="mailto:support@royalcaress.co.uk" className="text-[#B3123D] hover:underline">
                support@royalcaress.co.uk
              </a>{" "}
              with proof of purchase and a description of the issue. Remedies may include repair, replacement or refund,
              as appropriate under applicable law.
            </p>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t border-[#4B1D3F]/20">
            <p className="text-sm text-[#4B1D3F]/60">Last updated: November 2025</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-12 bg-[#0B0B0B] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-light mb-4 tracking-wide">Royal Caress</h3>
              <p className="text-white/70 leading-relaxed font-light max-w-md">
                A sanctuary for intimate wellness, celebrating every body and every expression of pleasure.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4 tracking-wide">Connect</h4>
              <p className="text-white/70 mb-4 text-sm">support@royalcaress.co.uk</p>

              <div className="mb-4">
                <Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                  GENERAL TERMS AND CONDITIONS
                </Link>
              </div>

              <div className="flex gap-4 mb-4">
                <Link
                  href="https://www.tiktok.com/@royal.caress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/royal.caress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300" />
                </Link>
                <Link
                  href="https://wa.me/447592253773?text=Hello%21%20Hope%20you%27re%20well.%20I%27d%20love%20to%20speak%20when%20you%20have%20a%20moment.%20Many%20thanks%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-5 h-5 text-white/70 hover:text-white cursor-pointer transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm font-light">
            <p>© 2025 Royal Caress Ltd — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
