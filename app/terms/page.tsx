"use client"

import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
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
            Policies &amp; Terms
          </h1>
          <p className="text-lg text-white/90 leading-relaxed font-light">
            Please read the policies and terms below.
          </p>
        </div>
      </section>

      {/* Content parsed from DOCX (tables + lists preserved) */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
<ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>GENERAL TERMS AND CONDITIONS</li>
            </ol>
            <h3 className="text-xl font-medium mt-6 mb-3">1.1 Introduction</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Welcome to Royal Caress.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">These Terms and Conditions govern your use of our website and the purchase of products through it.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">By accessing our website and/or making a purchase, you agree to be bound by these terms, our Privacy Policy, and any other terms and conditions that may apply to our products or services. If you do not agree to these Terms, please do not use our Website.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.2 Eligibility and Age Verification</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our Site and products are intended solely for adults 18 years of age or older. By using our Site, you represent and warrant that you are at least 18 years of age.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We implement an age verification process in compliance with UK regulations. We reserve the right to request proof of age before processing any order and to refuse service, terminate accounts, or cancel orders at our sole discretion.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For more information about our age verification process, please see our "Age Verification Policy."</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.3 Products and Prices</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All products are described as accurately as possible. However, we do not guarantee that all descriptions or images are 100% accurate. Colors may vary depending on your device settings.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All prices are displayed in British Pounds (£). We reserve the right to change prices at any time, but changes will not affect previously confirmed orders.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We make every effort to ensure that all prices on the Site are accurate, but errors do occur. If we discover an error in the price of any product, we will notify you as soon as possible and give you the option to reconfirm the order at the correct price or cancel it.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.4 Orders and Contracts</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">By placing an order, you are making an offer to purchase products. All orders are subject to acceptance and availability.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">The contract between you and Royal Caress will only be formalized when we send you an order confirmation email. This email will constitute acceptance of your offer to purchase products.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We reserve the right to refuse your order for any reason, including:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Product out of stock</li>
              <li>Inability to authorize your payment</li>
              <li>Identifying a price or product description error</li>
              <li>Suspected fraud</li>
              <li>Age verification failed</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-3">1.5 Payment</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We accept the following payment methods:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Credit and debit cards (Visa, Mastercard, American Express, UnionPay, JCB, Discover)</li>
              <li>Apple Pay</li>
              <li>Klarna</li>
              <li>ClearPay</li>
              <li>Revolut Pay</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All credit and debit card transactions are processed through secure and encrypted payment gateways. We do not store full card details on our servers.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.6 Delivery</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We deliver throughout the UK. Delivery times and costs vary depending on location and the delivery method chosen.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All products are shipped in discreet packaging, with no identification of the contents or the Royal Caress brand.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For detailed information about our delivery policies, including times, costs and countries served, please see our "Delivery Policy".</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.7 Right of Cancellation and Refunds</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have a legal right to cancel your order within 14 days of receiving the goods.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To exercise your right of cancellation, you must inform us of your decision by making a clear statement via email. support@royalcaress.co.uk</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We accept returns of opened products, except for intimate items for health and safety reasons. All returned products must be intact and in their original packaging.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For detailed information about our return and refund process, please see our "Return and Refund Policy".</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.8 Warranty and Compliance</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All products sold by Royal Caress are covered by a minimum 3-month warranty against manufacturing defects, in addition to your statutory rights.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We guarantee that all products conform to their description, are of satisfactory quality and fit for their intended purpose.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All electrical products sold on our website comply with UK and EU safety regulations, including the Low Voltage Directive (LVD) and the Electromagnetic Compatibility Directive (EMC) where applicable.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For detailed information about our warranty, please see our "Warranty Policy".</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.9 Intellectual Property</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All content on the site, including text, graphics, logos, icons, images, audio clips, digital downloads and data compilations, is the property of Royal Caress or its content suppliers and is protected by UK and international copyright laws.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You may view, download, and print content from our website for your personal, limited to non-commercial use only. You must not reproduce, distribute, modify, create derivative works from, publicly display, publicly perform, republish, download, store, or transmit any material from our website without our expressed written permission.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.10 Limitation of Liability</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To the maximum extent permitted by law, Royal Caress will not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill or other intangible losses, resulting from:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">a)Your use of, or inability to use, our website;</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">b)Any products purchased or obtained through our website;</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">c) Any unauthorized access to or alteration of your transmissions or data;</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">d) Any other questions related to our Website or products.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our total liability to you for any damages shall not exceed the amount paid by you for the relevant products.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Nothing in these Terms excludes or limits our liability for death or personal injury resulting from our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.11 Proper Use of Products</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our products are intended for personal and recreational use by adults only. You agree to use our products responsibly and in accordance with the instructions provided.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We are not responsible for any injuries or damage resulting from the misuse or abuse of our products. We recommend that you read all instructions and safety information before using any product.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.12 Changes to Terms</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting of the Updated Terms on the Website.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Your continued use of the website following the posting of any changes constitutes acceptance of those changes. We recommend that you review these Terms periodically to be aware of any changes.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.13 Applicable Law and Jurisdiction</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">These Terms will be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you are a consumer resident in another European Union country, you may also have protection under the mandatory consumer laws of the country where you reside.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">1.14 Contact</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you have any questions about these Terms, please contact us at: support@royalcaress.co.uk</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">2. PRIVACY AND DATA PROTECTION POLICY</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">2.1 Introduction</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Royal Caress is committed to protecting and respecting your privacy. This Privacy Policy establishes the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.2 Information We Collect</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We may collect and process the following data about you:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Information you provide to us:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Identifying information (name, date of birth for age verification)</li>
              <li>Contact information (email address, phone number, postal address)</li>
              <li>Payment information (credit/debit card details, billing address)</li>
              <li>Order history and product preferences</li>
              <li>Communications with us (emails, chat, phone calls)</li>
              <li>Responses to surveys or questionnaires</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Information we collect automatically:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Technical information (IP address, browser type, operating system)</li>
              <li>Usage information (pages visited, products viewed, time spent on the site)</li>
              <li>Location information (country, city)</li>
              <li>Cookies and similar technologies (as detailed in our Cookie Policy)</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-3">2.3 How We Use Your Information</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We only use your personal information when the law allows us to. Most commonly, we will use your personal information in the following circumstances:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
                <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
                  <li>To perform the contract we are about to enter into or have entered into with you</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) where your interests and fundamental rights do not override</li>
                  <li>When we need to comply with a legal or regulatory obligation</li>
                  <li>When you consented to the use</li>
                </ol>
              </ol>
            </ol>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Specifically, we use your information to:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Process and deliver your orders</li>
              <li>Verify your age (to comply with adult product regulations)</li>
              <li>Manage payments, fees, and charges</li>
              <li>Communicate with you about your order, account, or other inquiries</li>
              <li>Personalize your experience and provide relevant content and product offers</li>
              <li>Improve our website, products and services</li>
              <li>Administer and protect our business and website</li>
              <li>Measure the effectiveness of our advertising</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Send newsletters and promotional offers only with your explicit consent collected through a checkbox at checkout or in the registration form.</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-3">2.4 Legal Basis for Processing</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We process your personal data based on the following legal bases:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Contract Execution: When processing is necessary for the performance of a contract with you or in order to take steps at your request prior to entering into a contract.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Legitimate Interests: When processing is necessary for our legitimate interests or those of a third party, such as:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Operate and improve our business and website</li>
              <li>Direct marketing of relevant products</li>
              <li>Fraud prevention</li>
              <li>Network and information security</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Legal Obligation: When processing is necessary to comply with a legal obligation to which we are subject, such as:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Age verification for adult products</li>
              <li>Maintenance of tax and accounting records</li>
              <li>Responding to requests from legal authorities</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Consent: When you have given explicit consent to the processing of your personal data for one or more specific purposes, such as:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Email or SMS marketing</li>
              <li>Use of non-essential cookies</li>
              <li>Processing of special categories of data</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-3">2.5 Data Sharing</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We may share your personal information with the following categories of third parties:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Service providersServices include:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Payment processors</li>
              <li>Delivery and logistics companies</li>
              <li>Age verification services</li>
              <li>Hosting and technology providers</li>
              <li>Customer service</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Business Partners:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Product suppliers.</li>
              <li>Marketing partners</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Legal Authorities:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>When required by law, regulation or legal process</li>
              <li>To protect our legal rights or property</li>
              <li>In the event of a merger, sale or transfer of business assets</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All third parties with whom we share your data are required to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use any of your personal data for their own purposes and only permit them to process your personal data for specific purposes in accordance with our instructions.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.6 Data Security</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We implement appropriate technical and organizational security measures to protect your personal information against accidental loss, unauthorized use or access, alteration, or disclosure. These measures include:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Encryption of sensitive data</li>
              <li>Firewalls and intrusion detection systems</li>
              <li>Restricted access based on a need to know basis</li>
              <li>Regular monitoring of systems to detect vulnerabilities</li>
              <li>Employee training in data security practices</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We limit access to your personal information to essential personnel. Access is granted solely for legitimate business purposes. They will only process your personal information on our instructions and are subject to a duty of confidentiality.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We have procedures in place to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.7 Data Retention</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To determine the appropriate retention period for personal data, we consider:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>The amount, nature and sensitivity of personal data</li>
              <li>The potential risk of harm from unauthorized use or disclosure</li>
              <li>The purposes for which we process data</li>
              <li>If we can achieve these purposes by other means</li>
              <li>Applicable legal requirements</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">In some circumstances, we may anonymize your personal information (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Specific retention periods:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Account Information: While your account is active, plus 2 years after inactivity</li>
              <li>Order history: 7 years (for accounting and tax purposes)</li>
              <li>Customer Service Communications: 2 years after query resolution</li>
              <li>Marketing data: 2 years after the last interaction or until you withdraw consent</li>
            </ul>
            <h3 className="text-xl font-medium mt-6 mb-3">2.8 Your Data Protection Rights</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Under data protection laws, you have the following rights regarding your personal information:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right of access: You have the right to request a copy of the personal information we hold about you.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right of rectification: You have the right to request that we correct inaccurate or incomplete personal information we hold about you.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right to erasure: You have the right to request that we erase your personal information in certain circumstances.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right to restriction of processing: You have the right to request that we restrict the processing of your personal information in certain circumstances.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right of opposition: You have the right to object to the processing of your personal information in certain circumstances, particularly in relation to direct marketing.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Right to withdraw consent: Where we rely on consent as the legal basis for processing your data, you have the right to withdraw your consent at any time.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you wish to exercise any of these rights, please contact us using the details provided in the "Contact Us" section.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You will not have to pay a fee to access your personal information (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Alternatively, we may refuse to comply with your request in these circumstances.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal information (or to exercise any of your other rights). This is a security measure to ensure that personal information is not disclosed to anyone who has no right to receive it.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.9 International Transfers</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We operate primarily in the UK, but some of our service providers may be located outside the UK or the European Economic Area (EEA). This means that the processing of your personal information may involve a transfer of data outside the UK or the EEA.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.10 Marketing</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We'd like to send you information about products, promotions, and events that may be of interest to you. If you've consented to receiving marketing communications, you can opt out of receiving them at any time.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You have the right to prevent us from using your personal information for marketing purposes. If you do not want us to use your information for marketing purposes, uncheck the relevant boxes when providing your details, adjust your preferences in your online account, or use the "unsubscribe" link in our marketing communications.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We will not share your personal information with third parties for marketing purposes without your explicit consent.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.11 Cookies</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our website uses cookies and similar technologies to distinguish you from other users. This helps us provide you with a good experience when you browse our website and also allows us to improve it.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For detailed information about the cookies we use, the purposes for which we use them, and how you can control their use, please see our "Cookie Policy."</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.12 Links to Other Sites</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our website may include links to third-party websites, plug-ins, and applications. Clicking on these links or enabling these connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">2.13 Changes to the Privacy Policy</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We reserve the right to update this privacy policy at any time. Any changes we make to our privacy policy in the future will be posted directly on our website.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">3. COOKIE POLICY</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">3.1 What are Cookies?</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to website owners.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">3.2 How We Use Cookies</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We use cookies for a variety of reasons, detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">3.3 Types of Cookies We Use</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Strictly Necessary Cookies: These cookies are essential for you to navigate the website and use its features, such as access to secure areas. Without these cookies, services you have asked for, such as shopping carts or e-billing, cannot be provided.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Performance Cookies: These cookies collect information about how visitors use a website, for example, which pages visitors go to most often and if they receive error messages from web pages. These cookies do not collect information that identifies a visitor. All information these cookies collect are aggregated and therefore anonymous. They are only used to improve how a website works.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Functionality Cookies: These cookies allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you've made to text size, fonts, and other parts of web pages that you can customize.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Targeting or Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of an advertising campaign. They are usually placed by advertising networks with the website operator's permission. They remember that you have visited a website and this information is shared with other organizations, such as advertisers.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Social Media Cookies: Our website may include features provided by third parties, such as "like" and "share" buttons. These features may collect your IP address and which pages you visit on our website, and may set a cookie to enable the feature to function properly.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">3.4 Specific Cookies We Use</h3>
            <div className="overflow-x-auto mb-8">
<table className="min-w-full border border-[#4B1D3F]/30 text-left">
<thead className="bg-[#F7F7F7]">
<tr>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Cookie Name</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Type</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Purpose</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Duration</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">session_id</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Strictly Necessary</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Keeps your session state</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Session</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">cart_contents</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Strictly Necessary</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Stores items in your cart</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">30 days</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">age_verified</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Strictly Necessary</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Records that your age has been verified</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">30 days</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">_ga</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Performance</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Google Analytics - Used to distinguish users</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">2 years</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">_gid</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Performance</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Google Analytics - Used to distinguish users</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">24 hours</td>
</tr>
</tbody></table></div>
            <div className="overflow-x-auto mb-8">
<table className="min-w-full border border-[#4B1D3F]/30 text-left">
<thead className="bg-[#F7F7F7]">
<tr>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Cookie Name</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Type</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Purpose</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Duration</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">_fbp</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Advertising</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Facebook Pixel - Used for advertising</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">3 months</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">user_preferences</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Functionality</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Stores user preferences</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">1 again</td>
</tr>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">recently_viewed</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Functionality</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Stores recently viewed products</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">30 days</td>
</tr>
</tbody></table></div>
            <h3 className="text-xl font-medium mt-6 mb-3">3.5 Cookie Consent</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">When you first visit our website, we display a cookie banner asking for your consent to non-essential cookies. You can choose to accept all cookies, only essential cookies, or customize your preferences.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You can change your cookie preferences at any time by visiting our "Cookie Preferences" page in the footer of the website.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">3.6 Controlling Cookies</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You can control and/or delete cookies as you wish. You can delete all cookies already on your computer, and you can configure most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a website, and some services and features may not work.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Most browsers allow some control over most cookies through the browser settings. To learn more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To opt out of being tracked by Google Analytics across all websites, visit http://tools.google.com/dlpage/gaoptout.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">4. RETURN AND REFUND POLICY</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">4.1 Legal Right to Cancellation</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, you have a legal right to cancel your order within 14 days of receiving the product without giving a reason.To exercise the right of cancellation, you must inform us of your decision to cancel this contract by means of a clear statement by email.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To comply with the cancellation deadline, it is sufficient that you send your communication regarding the exercise of the right of cancellation before the cancellation period expires.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.2 Effects of Cancellation</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you cancel this contract, we will reimburse all payments received from you. This includes the costs of delivery (except for the additional costs resulting from your choice of a type of delivery other than the least expensive standard delivery offered by us), without undue delay and, in any event, no later than 14 days from the day on which we are informed about your decision to cancel this contract.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We will carry out such refund using the same payment method that you used for the initial transaction, unless you have expressly agreed otherwise; in any case, you will not incur any fees as a result of such refund.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We may withhold reimbursement until we have received the returned products or until you have provided evidence of having sent the products back, whichever is earlier.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.3 Product Returns</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You must send the products back or deliver them to us without undue delay and, in any case, no later than 14 days from the day you notified us of your cancellation of this contract. This deadline is met if you send the products back before the 14-day period expires.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You will be responsible for the direct costs of returning the products. The estimated cost is approximately £5–£10 for standard products within the UK.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.4 Condition of Returned Products</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We accept returns of opened products, except for intimate use items (such as menstrual cups, vaginal dilators, penetrative products, and the like) for health and safety reasons.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You are only responsible for any decrease in the value of the products resulting from handling other than that necessary to establish the nature, characteristics and functioning of the products.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All returned products must be in undamaged condition and in their original packaging. All accessories, manuals, and promotional gifts must be included.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.5 Defective Products</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you are returning a product because it is faulty or incorrectly described, we will refund the full price of the faulty product, any applicable delivery costs and any reasonable costs incurred by you in returning the item to us.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You have legal rights regarding products that are defective or not as described. These legal rights are not affected by this Return and Refund Policy or by  the General Terms and Conditions.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.6 How to Make a Return</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To initiate a return, follow these steps:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Contact our Customer Service by email support@royalcaress.co.uk</li>
              <li>Please provide your order number, details of the product(s) you wish to return, and the reason for the return.</li>
              <li>Our team will provide you with a Return Merchandise Authorization (RMA) number and detailed return instructions.</li>
              <li>Pack the product(s) securely, ideally in the original packaging.</li>
              <li>Include the RMA number and your proof of purchase in the package.</li>
              <li>Send the package to the return address provided in the email.</li>
            </ol>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For returns of defective products, we may request photos or other evidence of the defect before approving the return.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.7 Refunds</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Once we receive and inspect your returned item, we will send you an email to notify you that we have received your return and to let you know whether or not your refund has been approved.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within 14 days.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">4.8 Exchanges</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We do not offer direct exchanges. If you wish to exchange one product for another, please return the original product for a refund and place a new order for the desired product.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">5. AGE VERIFICATION TERMS</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">5.1 Legal Requirement</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Under UK law, it is illegal to sell adult products to anyone under the age of 18. Royal Caress is committed to complying with all applicable laws and regulations regarding the sale of adult products.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">5.2 Age Declaration</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">By using our website, you represent and warrant that you are at least 18 years of age. If we discover or have reason to believe that you are under 18, we reserve the right to suspend or terminate your account and refuse any and all current or future use of the website.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">5.3 Verification Process</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We have implemented a multi-step age verification process:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Passive Verification:</p>
            <ul className="list-disc ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Age declaration at website entrance</li>
              <li>Age confirmation during account registration</li>
              <li>Age verification at checkout</li>
            </ul>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Active Verification: In addition to passive verification, we can perform active age verification using one or more of the following methods:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Credit Card Verification: We verify that the payment method used is in your name and is a credit card (which is generally only available to those over 18).</li>
              <li>Database Verification: We may check your details against voter, credit and other public records databases to confirm your age.</li>
              <li>Documentation: In some cases, we may ask you to provide a copy of a government-issued photo ID (such as a passport, driver's license) to verify your age.</li>
            </ol>
            <h3 className="text-xl font-medium mt-6 mb-3">5.4 Verification Failed</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If we cannot verify that you are 18 or older, we will not be able to process your order. In this case:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Your order will be placed on hold</li>
              <li>We will contact you requesting additional verification.</li>
              <li>If verification is not provided within 7 days, your order will be cancelled and refunded.</li>
            </ol>
            <h3 className="text-xl font-medium mt-6 mb-3">5.5 Age Falsification</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Providing false information about your age or attempting to circumvent our age verification processes is a serious violation of these Terms. If we discover that you have falsified your age:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Your order will be canceled immediately.</li>
              <li>Your account will be permanently closed.</li>
              <li>We may report the incident to the relevant authorities.</li>
            </ol>
            <h3 className="text-xl font-medium mt-6 mb-3">5.6 Privacy and Verification Data</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Any documents or information provided for age verification will be treated with the strictest confidentiality and in accordance with our Privacy Policy.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Identity documents provided for age verification will be viewed for that purpose only and will not be stored longer than necessary to complete the verification.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">5.7 Delivery and Verification</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our delivery drivers may request proof of age upon delivery for packages containing age-restricted items. If you are unable to provide adequate proof of age upon delivery, the package may be retained.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">5.8 Shopping as a Gift</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you are purchasing a product as a gift for someone else, you must ensure that the recipient is at least 18 years old. You will be held responsible for any misrepresentation.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">6. MEDICAL DISCLAIMER</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">6.1 Non-Constitution of Medical Counseling</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">The information and materials available on our Website, including text, graphics, images, and other content related to sexual health and intimate well-being, are provided for informational and educational purposes only. They do not constitute medical advice, diagnosis, or treatment.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.2 Consultation with Health Professionals</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Always consult a qualified physician or other appropriate healthcare professional for:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Medical advice specific to your situation</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Diagnosis of medical conditions</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Treatment of any medical condition</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Guidance before starting any health regimen</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Questions related to existing medical conditions</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Concerns about drug interactions</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.3 Use of Products</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our products are intended for recreational use by healthy adults only. They are not medical devices and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">You are responsible for using our products safely and appropriately. We recommend that you:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Read all instructions and safety information before use.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Follow the cleaning and maintenance guidelines provided.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Discontinue use and consult a healthcare professional if discomfort or adverse reaction occurs.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Do not use products if you have medical conditions that may be affected by their use.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.4 Allergies and Sensitivities</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you have known allergies or sensitivities to certain materials, carefully check the ingredients of any product before purchasing. While we strive to provide accurate information about the materials in our products, you should exercise caution if you have specific sensitivities.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.5 Pregnancy and Medical Conditions</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you are pregnant, nursing, have a pre-existing medical condition, or are taking medications, consult a healthcare professional before using our products.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.6 Limitation of Liability</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To the maximum extent permitted by applicable law, Royal Caress will not be liable for any direct, indirect, incidental, consequential or punitive damages resulting from the use of or inability to use our products, or from information or content available on our Site.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We make no representations or warranties about the accuracy, reliability, completeness, or timeliness of any health-related content on our Site.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">6.7 Links to External Resources</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our website may contain links to external resources related to sexual health and wellness. These links are provided solely for convenience and additional information. We do not endorse and are not responsible for the content of external websites.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">7. DELIVERY POLICY</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">7.1 Delivery Areas</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We currently deliver to the following locations: - All of the UK (including Northern Ireland) - European Union - Selected countries outside the EU</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For a full list of countries we deliver to, please see our Delivery Information page on the website.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.2 Delivery Options and Deadlines</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">United Kingdom:</p>
            <div className="overflow-x-auto mb-8">
<table className="min-w-full border border-[#4B1D3F]/30 text-left">
<thead className="bg-[#F7F7F7]">
<tr>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Delivery Method</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Estimated Deadline</th>
<th className="py-3 px-4 text-[#4B1D3F] font-medium border-b border-[#4B1D3F]/30">Cost</th>
</tr>
</thead>
<tbody>
<tr>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">Standard</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">7’-21 business days</td>
<td className="py-3 px-4 text-[#4B1D3F]/80 border-b border-[#4B1D3F]/20">£5.95</td>
</tr>
</tbody></table></div>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Delivery times are estimates only and are not guaranteed. Factors such as weather conditions, seasonal events (such as Black Friday, Valentine's Day, Women's Day, or Christmas), customs procedures, and local holidays may affect delivery times.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.3 Order Tracking</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All delivery methods include tracking. Once your order is shipped, you'll receive a confirmation email with a tracking number and instructions on how to track your package.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.4 Discreet Packaging</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All orders are shipped in discreet packaging, with no indication of the contents. Packages are shipped in:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
                <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
                  <li>No external logos or brands related to adult products</li>
                  <li>No description of contents on the outside of the package</li>
                </ol>
              </ol>
            </ol>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Your privacy is our priority, and every effort is made to ensure your order arrives discreetly and confidentially.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.5 Customs Duties</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We are not responsible for any customs fees or import taxes that may be charged at the destination. These costs are the customer's responsibility.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.6 Undelivered Orders</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If an order cannot be delivered due to:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Incorrect or incomplete address</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- No one available to receive the package (when signature is required)</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Age verification failure (where applicable)</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Failure to collect a retained package</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">The carrier will usually attempt to deliver again or leave a notice with instructions for pickup or rescheduling.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If a package is returned to us as undeliverable, we may take the following actions:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">1. We will contact you to resolve the issue.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">2. We may charge a reshipping fee to ship the order again.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">3. Refunds for returned orders are subject to a deduction to cover the original shipping costs.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.7 Damage during Transport</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If your order arrives damaged:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">1. Take photos of the outer packaging and damaged products.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">2. Contact our customer service within 48 hours of receipt.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">3. Provide your order number and photos of the damage</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Depending on the nature of the damage, we offer a refund or replacement of the product.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.8 Lost Orders</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">An order is considered lost if:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Not delivered within 7 days of the estimated delivery date (UK)</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you believe your order is lost:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">1. Check the tracking status online</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">2. Check with neighbors and alternative delivery locations</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">3. Contact our customer service</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We will investigate lost orders with the carrier and, if confirmed lost, we will issue a refund or ship a replacement order.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">7.9 Contact About Deliveries</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For any questions related to delivery, please contact our customer service team via email: support@royalcaress.co.uk</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">8. Shipping Policy</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.1 Order Processing</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">After payment confirmation, your order will be processed within 2 business days.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.2 Shipping Time UK:</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We deliver throughout the UK.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Deadlines: Estimated delivery time is 7 to 21 business days.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Due to our dropshipping model, products may be shipped from different suppliers, which may result in varying delivery times.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">There may be additional delays due to customs and local holidays.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.3 Shipping Cost</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Shipping cost is calculated at checkout.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.4 Tracking</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We will provide a tracking number whenever available so you can track your order.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.5 Packaging</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All products are shipped in discreet packaging, without any identification of the contents or the Royal Caress brand on the outside, ensuring your privacy.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.6 Customs Duties</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We are not responsible for any customs fees or import taxes that may be charged at the destination. These costs are the customer's responsibility.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">8.7 Delays or Orders Not Received</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If your order does not arrive within the estimated time, please contact our support at support@royalcaress.co.uk so we can investigate with the carrier.</p>
            <h2 className="text-2xl lg:text-3xl font-serif font-light mb-4">9. WARRANTY POLICY</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">9.1 Standard Warranty</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">All products sold by Royal Caress are covered by a minimum 3-month warranty against manufacturing defects, starting from the date of delivery.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">This warranty covers defects in materials and workmanship under normal and proper use in accordance with the instructions provided with the product.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.2 What the Warranty Covers</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our warranty covers:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Electrical or mechanical failures not caused by improper use</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Manufacturing defects that affect the functionality of the product</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Products that do not work as expected</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Problems with materials that crack, peel, or discolor under normal use</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.3 What the Warranty Does Not Cover</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Our warranty does not cover:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Damage caused by accident, misuse, abuse or negligence</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Normal wear and tear expected with use over time</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Damage caused by improper cleaning or maintenance</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Damage caused by improper storage</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Problems resulting from the use of incompatible accessories</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Products that have been modified or altered</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Damage caused by exposure to extreme conditions</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Rechargeable batteries (which usually have a limited lifespan)</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.4 Extended Warranties</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Some premium products may come with extended warranties of up to 3 years. Where applicable, extended warranty details will be clearly displayed on the product page.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.5 Your Statutory Rights</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">This guarantee is in addition to and does not affect your statutory rights under the Consumer Rights Act 2015 and other applicable UK legislation.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Under UK law, all products must be:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Of satisfactory quality</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Fit for purpose</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- As described</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If a product does not meet these criteria, you have legal rights regardless of our warranty.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.6 How to Make a Warranty Claim</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If you believe your product has a defect covered by our warranty:</p>
            <ol className="list-decimal ml-6 text-[#4B1D3F]/80 leading-relaxed mb-4">
              <li>Please contact our customer service within the warranty period.</li>
              <li>Please provide your order number, product details, and description of the issue.</li>
              <li>Include photos or videos of the defect, if possible.</li>
              <li>Our team will evaluate your complaint and provide you with further instructions.</li>
            </ol>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We may ask you to return the product for inspection. In this case, we'll provide a prepaid return label.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.7 Solutions for Warranty Claims</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If your warranty claim is approved, we will offer, at our discretion:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Repair of defective product</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Replacement with an identical or equivalent product</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- Full or partial refund</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">The solution offered will depend on the nature of the defect, the availability of the product and the time elapsed since purchase.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.8 Shipping Costs for Warranty Claims</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">For valid warranty claims:</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- We cover the shipping costs to return the defective product</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">- We cover the shipping costs to send you a repaired or replaced product</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">If, after inspection, we determine that the problem is not covered by the warranty, we may return the product to you and charge you for shipping costs.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.9 Warranty Transfer</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">The warranty is provided to the original purchaser and is non-transferable. Proof of purchase (such as an order confirmation or receipt) may be required to make a warranty claim.</p>
            <h3 className="text-xl font-medium mt-6 mb-3">9.10 Contact for Warranty</h3>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">To make a warranty claim or for any warranty related queries, please contact our customer service team via email support@royalcaress.co.uk</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">10. Frequently Asked Questions (FAQ)</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">What forms of payment do you accept?</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">We accept credit/debit cards (Visa, Mastercard, etc.), Apple Pay, Klarna, ClearPay and Revolut Pay.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">How long will it take for my order to arrive?</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Processing time is up to 2 business days, and delivery takes an average of 7 to 21 business days.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Can I return a product?</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Yes, you can cancel your order within 14 days of receiving it. Please see our Return and Refund Policy for more details, especially regarding intimate items.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Is my data safe?</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Yes. We take your privacy seriously and comply with all GDPR regulations. For more details, see our Privacy Policy.</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Is the packaging discreet?</p>
            <p className="leading-relaxed text-[#4B1D3F]/80 mb-4">Yes, all orders are shipped in discreet packaging, without logos or identification of the contents.</p>
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
