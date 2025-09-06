
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InquiryForm } from '@/components/inquiry-form';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="contact" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
                <p className="mt-3 text-muted-foreground">
                    Have a question or need a quote? We're here to help.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Noaah Tech Private Limited.</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">Speak to our uPVC experts today.</p>
                      <a href="tel:+919900004811" className="text-primary hover:underline">+91 9900004811</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">Send us your requirements and we'll get back to you.</p>
                      <a href="mailto:noaahtechprofile@gmail.com" className="text-primary hover:underline">noaahtechprofile@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office & Showroom</h3>
                      <p className="text-muted-foreground">Ground Floor,No 1/5, Near Rotary Electronics,Kodigehalli,Bangalore - 560091.</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Website</h3>
                      <a href="http://www.noaahtechprofile.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.noaahtechprofile.com</a>
                    </div>
                  </div>
                </div>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              <div>
                <InquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
