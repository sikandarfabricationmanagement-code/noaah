
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="about" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold">About Noaah uPVC Profiles</h1>
                        <p className="mt-4 text-muted-foreground">
                            We are a premier uPVC profile manufacturing company, dedicated to crafting top-tier profiles for windows and doors. Our experienced team uses state-of-the-art technology and the finest materials to deliver products that are the foundation of beautiful and secure spaces.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Our commitment to quality and customer satisfaction has made us a trusted name in the industry. We specialize in profiles for Sliding Windows, Casement Windows, and Combination Windows, ensuring a perfect fit for any architectural style. We believe in building lasting relationships with our clients through exceptional products and service.
                        </p>
                         <p className="mt-4 text-muted-foreground">
                            At Noaah, we follow a meticulous fabrication process for our profiles, ensuring every product meets our high standards. From formulation and extrusion to quality control, each step is performed with precision and care. We aim to deliver not just profiles, but complete solutions that bring comfort and style to your life.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-xl">
                        <Image 
                            src="/images/about-us-detailed.png"
                            alt="uPVC window profiles"
                            width={600}
                            height={400}
                            data-ai-hint="window factory"
                            className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
