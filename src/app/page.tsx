import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Check,
  Droplets,
  Leaf,
  Lock,
  Mail,
  Phone,
  Recycle,
  ShieldCheck,
  Sun,
  Thermometer,
  Volume2,
  Wind,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ContactForm } from "@/components/contact-form";

const products = [
  {
    title: "Sliding Systems",
    description: "Elegant and space-saving designs that provide a seamless transition to the outdoors, with superior thermal and acoustic insulation.",
    features: ["Energy Efficient", "Sound Insulation", "High Security"],
    image: {
      src: "https://picsum.photos/600/400",
      hint: "sliding door",
    },
  },
  {
    title: "Casement Systems",
    description: "Versatile and high-performance window and door solutions, offering excellent ventilation and weather resistance for any architectural style.",
    features: ["Weather Resistant", "Low Maintenance", "Enhanced Durability"],
    image: {
      src: "https://picsum.photos/600/401",
      hint: "modern window",
    },
  },
  {
    title: "Custom Profiles",
    description: "Tailor-made uPVC profiles engineered to meet your specific project requirements, ensuring perfect integration and performance.",
    features: ["Design Flexibility", "Precision Engineering", "Sustainable Materials"],
    image: {
      src: "https://picsum.photos/600/402",
      hint: "pvc profile",
    },
  },
];

const features = [
  {
    icon: Thermometer,
    title: "Thermal Insulation",
    description: "Our multi-chambered profiles significantly reduce heat transfer, keeping interiors comfortable and lowering energy bills.",
  },
  {
    icon: Volume2,
    title: "Acoustic Insulation",
    description: "Enjoy peace and quiet. Our systems are designed to block out external noise, creating a tranquil indoor environment.",
  },
  {
    icon: Wind,
    title: "Weather Resistance",
    description: "Engineered to withstand harsh weather conditions, from heavy rain to strong winds, ensuring long-lasting performance.",
  },
  {
    icon: Lock,
    title: "High Security",
    description: "Multi-point locking systems and reinforced frames provide enhanced security and peace of mind for your property.",
  },
  {
    icon: Droplets,
    title: "Water Tightness",
    description: "Advanced sealing technology prevents water leakage, protecting your home from moisture damage even in severe storms.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Made from 100% recyclable, lead-free materials, our uPVC profiles are a sustainable choice for green building projects.",
  },
];

const certifications = [
  {
    icon: Award,
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
  },
  {
    icon: ShieldCheck,
    name: "NFRC Certified",
    description: "Energy Performance Rating",
  },
  {
    icon: Recycle,
    name: "GreenGuard Gold",
    description: "Low Chemical Emissions",
  },
  {
    icon: Sun,
    name: "AAMA Verified",
    description: "Performance Standards",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutUsSection />
        <ProductsShowcase />
        <FeaturesPreview />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Close-up of modern uPVC window frames"
        data-ai-hint="modern window frame"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Quality uPVC Profiles for Windows & Doors
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/90">
          Noaah specializes in the manufacturing of high-quality uPVC profiles, offering durability, style, and energy efficiency for fabricators.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="border-primary bg-primary/10 text-primary-foreground hover:bg-primary/20 backdrop-blur-sm">
            <a href="#contact">Contact Us</a>
          </Button>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="#products">View Profiles</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutUsSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-2xl">
            <Image
              src="https://picsum.photos/800/600"
              alt="Noaah manufacturing facility"
              data-ai-hint="factory interior"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
              Our Mission: Innovation in Every Profile
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At Noaah, we are dedicated to pushing the boundaries of uPVC technology. Our mission is to provide architects, builders, and homeowners with superior quality profiles that combine aesthetic appeal, exceptional durability, and outstanding energy efficiency.
            </p>
            <p className="mt-4 text-muted-foreground">
              With state-of-the-art manufacturing facilities and a commitment to sustainability, we craft products that not only meet but exceed international standards. We believe in building a greener future, one window at a time.
            </p>
            <Button asChild className="mt-6" size="lg">
              <a href="#contact">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsShowcase() {
  return (
    <section id="products" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
            Explore Our Product Range
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            From sleek sliding systems to robust casement designs, our uPVC profiles are engineered for excellence.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.title} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-secondary border-border">
              <div className="relative h-56 w-full">
                <Image
                  src={product.image.src}
                  alt={product.title}
                  data-ai-hint={product.image.hint}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-primary-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-muted-foreground flex-1">{product.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesPreview() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
            Uncompromising Quality & Performance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our uPVC profiles are packed with advanced features to deliver superior performance and lasting value.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-lg transition-colors hover:bg-background/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certificate" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
            Certified Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We adhere to the highest industry standards, ensuring our products are certified for quality, performance, and sustainability.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center text-center">
              <cert.icon className="h-12 w-12 text-primary" />
              <p className="mt-4 font-semibold text-primary-foreground">{cert.name}</p>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl font-headline">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a question or need a quote for your project? Our team of experts is here to help. Contact us today to discuss your requirements.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:sales@noaah.com" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary-foreground transition-colors">
                <Mail className="h-6 w-6 text-primary" />
                <span>sales@noaah.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 text-lg text-muted-foreground hover:text-primary-foreground transition-colors">
                <Phone className="h-6 w-6 text-primary" />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
          <Card className="p-6 sm:p-8 shadow-xl bg-background border-border">
            <CardHeader className="p-0 pb-6">
              <CardTitle className="text-primary-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
