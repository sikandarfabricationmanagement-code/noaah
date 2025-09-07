
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Award, CheckSquare, Factory } from 'lucide-react';
import Image from 'next/image';

export default function CertificatesPage() {
    const certificates = [
        {
            icon: <Award className="h-10 w-10 text-primary" />,
            title: 'ISO 9001:2015 Certified',
            description: 'This certification demonstrates our commitment to quality management systems and our ability to consistently provide products and services that meet customer and regulatory requirements.',
            image: '/images/certificate-1.jpg',
            hint: 'certificate document'
        },
        {
            icon: <CheckSquare className="h-10 w-10 text-primary" />,
            title: 'Green Building Council Member',
            description: 'As a member, we are dedicated to sustainable practices and promoting the development of environmentally-friendly buildings. Our uPVC products contribute to green building standards.',
            image: '/images/certificate-2.jpg',
            hint: 'eco award'
        },
        {
            icon: <Factory className="h-10 w-10 text-primary" />,
            title: 'National Fenestration Rating Council (NFRC)',
            description: 'Our products are rated and certified by the NFRC for energy performance, giving you reliable information about energy efficiency, including U-factor and Solar Heat Gain Coefficient.',
            image: '/images/certificate-3.jpg',
            hint: 'quality seal'
        }
    ]

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="certificates" className="py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold">Quality Assurance & Certifications</h1>
                    <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
                        We adhere to the highest industry standards for quality and safety. Our certifications are a testament to our dedication to excellence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certificates.map((cert, index) => (
                    <Card key={index} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                         <CardHeader className="items-center">
                            <div className="bg-primary/10 p-4 rounded-full">
                                {cert.icon}
                            </div>
                            <CardTitle className="mt-4">{cert.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-between">
                            <p className="text-muted-foreground">{cert.description}</p>
                            <div className="mt-6 overflow-hidden rounded-lg">
                                <Image
                                    src={cert.image}
                                    alt={`${cert.title} certificate`}
                                    width={400}
                                    height={200}
                                    data-ai-hint={cert.hint}
                                    className="rounded-lg shadow-md mx-auto w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                        </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
