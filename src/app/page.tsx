
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckSquare, Factory, ShieldCheck, ThermometerSun, Wind, Waves, VolumeX, Leaf, Building, GanttChartSquare, PackageCheck, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry-form';


export default function Home() {

  const features = [
    {
      icon: <Wind className="h-10 w-10 text-primary" />,
      title: 'Durable & Weather-Resistant',
      description: 'Our uPVC profiles are built to withstand harsh weather conditions, from scorching sun to heavy rain, ensuring longevity and performance without fading, warping, or cracking.',
    },
    {
      icon: <ThermometerSun className="h-10 w-10 text-primary" />,
      title: 'Energy Efficient',
      description: 'Our profiles have excellent thermal insulation properties that help maintain a consistent indoor temperature, reducing reliance on heating and cooling systems and lowering energy costs.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Enhanced Security',
      description: 'Our profiles are designed for multi-point locking systems and reinforced frames, providing superior security for your peace of mind.',
    },
    {
      icon: <VolumeX className="h-10 w-10 text-primary" />,
      title: 'Sound Insulation',
      description: 'The multi-chambered design of our uPVC profiles, combined with double or triple glazing, significantly reduces outside noise, creating a quieter and more peaceful indoor environment.',
    },
    {
        icon: <Waves className="h-10 w-10 text-primary" />,
        title: 'Water Resistance',
        description: 'Engineered for advanced drainage systems, our uPVC profiles offer excellent protection against water leakage.',
    },
    {
        icon: <Leaf className="h-10 w-10 text-primary" />,
        title: 'Eco-Friendly Material',
        description: 'uPVC is a recyclable material that requires less energy to produce than other options. Choosing our profiles is a step towards a more sustainable and environmentally friendly home.',
    }
  ];

  const products = [
    {
      title: 'uPVC Sliding Window Profiles',
      description: 'Sleek and modern profiles for sliding windows that maximize natural light and airflow, gliding effortlessly to connect indoor and outdoor spaces.',
      image: '/images/sliding-window-1.avif',
      hint: 'upvc sliding window'
    },
    {
      title: 'uPVC Casement Window Profiles',
      description: 'A timeless and elegant choice, our casement profiles are designed for windows hinged on the side to open outward for excellent ventilation and a classic look.',
      image: '/images/window.jpg',
      hint: 'upvc casement window'
    },
    {
      title: 'uPVC Combination Window Profiles',
      description: 'Combine various window styles, like casement and fixed, into a single, adaptable unit with our versatile combination profiles.',
      image: '/images/combination-window-2.jpg',
      hint: 'upvc combination window'
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image 
                src="/images/hero.webp"
                alt="Modern home with large uPVC windows"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="modern house windows"
                className="brightness-75"
            />
            <div className="relative z-20 container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Quality uPVC Profiles for Windows & Doors
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
                Noaah specializes in the manufacturing of high-quality uPVC profiles, offering durability, style, and energy efficiency for fabricators.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/contacts">Contact Us</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="/products">View Profiles</Link>
                </Button>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">About Noaah uPVC Profiles</h2>
                        <p className="mt-4 text-muted-foreground">
                            We are a premier uPVC profile manufacturing company, dedicated to crafting top-tier profiles for windows and doors. Our experienced team uses state-of-the-art technology and the finest materials to deliver products that are the foundation of beautiful and secure spaces.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We believe in building lasting relationships with our clients through exceptional products and service.
                        </p>
                         <p className="mt-4 text-muted-foreground">
                            At Noaah, we follow a meticulous fabrication process for our profiles, ensuring every product meets our high standards. From formulation and extrusion to quality control, each step is performed with precision and care.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-xl">
                        <Image 
                            src="/images/about-us-detailed.png"
                            alt="uPVC Door Profiles"
                            width={600}
                            height={400}
                            data-ai-hint="upvc door white"
                            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Profile Range</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Explore our comprehensive collection of uPVC profiles for windows and doors, designed to meet your every need.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                        <CardContent className="p-0">
                          <div className="overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.title}
                              width={600}
                              height={400}
                              data-ai-hint={product.hint}
                              className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-semibold">{product.title}</h3>
                            <p className="mt-2 text-muted-foreground">{product.description}</p>
                          </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/products">View All Profiles</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our uPVC Profiles?</h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                Experience the perfect blend of aesthetics, durability, and performance with our advanced uPVC profile solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(0,3).map((feature, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <div className="bg-primary/10 p-4 rounded-full">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild>
                <Link href="/features">Explore All Features</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
                <p className="mt-3 text-muted-foreground">
                    Have a question or need a quote? We're here to help.
                </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Noaah Tech Private Limited.</h3>
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
