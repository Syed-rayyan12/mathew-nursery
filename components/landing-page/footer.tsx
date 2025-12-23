import { Facebook, Twitter, Youtube, Instagram, Mail, LocateIcon, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-white bg-no-repeat min-h-screen w-full"
      style={{
        backgroundImage: 'url(/images/footer.png)',
        width: '100%',
        height: '80vh'
      }}
    >
      <div className="max-w-6xl pt-60 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-white">

        <div className="flex flex-col gap-4 md:col-span-1  border-white pb-4">
          <img src="/images/footer-logo.png" alt="Logo" className="object-cover h-auto w-30" />
          <p className="font-sans text-[16px] text-white">Find, compare, and connect with nurseries near you.Because every great beginning starts with the right care.</p>
          <div className="flex gap-4 mt-4">
            <div className="rounded-full bg-black p-2">
              <Facebook className="w-6 h-6 text-white" />
            </div>
            <div className="rounded-full bg-black p-2">
              <Twitter className="w-6 h-6 text-white" />
            </div>
            <div className="rounded-full bg-black p-2">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <div className="rounded-full bg-black p-2">
              <Instagram className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div className='w-1/2'>
          <h3 className="text-lg  font-medium font-heading font-semibold mb-4 text-[22px] text-white">Quick Links</h3>
          <ul className="space-y-2 leading-8">
            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
            <li><Link href="/services" className="text-white hover:text-gray-300">Service</Link></li>
            <li><Link href="/group" className="text-white hover:text-gray-300">Group</Link></li>
            <li><Link href="/articles" className="text-white hover:text-gray-300">Articles</Link></li>
            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact Us</Link></li>
          </ul>
        </div>

        <div>
           <h3 className="text-lg  font-medium font-heading font-semibold mb-4 text-[22px] text-white">Support</h3>
           <ul className="space-y-2 leading-8">
             <li><Link href="/childcare" className="text-white hover:text-gray-300 hover:underline">Help With Childcare Costs</Link></li>
             <li><Link href="/claim" className="text-white hover:text-gray-300 hover:underline">Claim 6-Month Free Listing </Link></li>
             <li><Link href="/pricing" className="text-white hover:text-gray-300 hover:underline">Pricing/Subscription Page</Link></li>
             <li><Link href="/review" className="text-white hover:text-gray-300 hover:underline">Review</Link></li>
           </ul>
         </div>
        {/* Get in Touch */}

        
        <div>
          <h3 className="text-lg font-medium font-heading font-semibold mb-4 text-[22px] text-white">Get In Touch</h3>
          <ul className="space-y-2 leading-8">
            <li className='flex items-center gap-2 text-white'>
              <Mail />
              info@mynursery.co.uk</li>
            <li className='flex items-center gap-2 text-white'>
              <LocateIcon />
              123 Nursery Lane,UK</li>
            <li className='flex items-center gap-2 text-white'>
              <Phone />
              077700 900123</li>
          </ul>
        </div>

      </div>
      <div className="flex justify-between items-center border-t mt-8 pt-4 text-white max-w-6xl mx-auto">
        <p>© 2025 My Nursery. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/terms-condition" className="text-white hover:text-gray-300 hover:underline">Terms and Condition</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="text-white hover:text-gray-300 hover:underline">Privacy Policy</Link>
          <span>|</span>
          <Link href="/cookie-policy" className="text-white hover:text-gray-300 hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}