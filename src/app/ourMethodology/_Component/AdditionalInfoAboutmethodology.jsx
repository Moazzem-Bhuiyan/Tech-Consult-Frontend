'use client';

import { ArrowRight, Zap, Shield, Briefcase, User, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { BookingForm } from './AdditionalBookingForm';
import techtow from '@/assets/images/tech-tow.png';
import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <main className="!min-h-screen !font-sans selection:!bg-white selection:!text-black">
      {/* Hero */}
      <section className="relative !mx-auto !max-w-7xl !overflow-hidden !px-6 !pt-32 !pb-24 md:!pt-48 md:!pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 !gap-12 !items-center">
          <div>
            <h1 className="!mb-8 !text-balance !text-5xl md:!text-7xl !font-bold !leading-[1.1] !tracking-tight">
              Consulting <br />
              <span className="!text-muted-foreground">Without the Bureaucracy.</span>
            </h1>

            <p className="!mb-10 !max-w-xl !text-xl !leading-relaxed !text-muted-foreground !text-pretty">
              At PL Tech Consulting, we believe access to world-class database expertise
              shouldn&apos;t be gated by slow procurement processes or restrictive enterprise
              contracts.
            </p>

            <div className="flex flex-wrap !gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="!rounded-full !px-8 !py-6 !text-base !font-medium cursor-pointer"
                  >
                    Get started
                  </Button>
                </DialogTrigger>
                <DialogContent className="!border-border !bg-card/95 !backdrop-blur-md sm:!max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="!text-2xl">Start Your Project</DialogTitle>
                    <DialogDescription>
                      Select your preferred engagement model and tell us about your needs.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="!py-4">
                    <BookingForm />
                  </div>
                </DialogContent>
              </Dialog>

              <Link href="/service">
                <Button
                  size="lg"
                  variant="outline"
                  className="!rounded-full !bg-transparent !px-8 !py-6 !text-base !font-medium cursor-pointer"
                >
                  View services
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative !h-80 w-full md:!h-96 lg:!h-[500px] rounded-2xl">
            <Image
              fill
              src={techtow}
              alt="PL Tech Consulting Workspace"
              className="!h-full !w-full !object-cover !object-center rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="!border-y !border-border !bg-card/30 !backdrop-blur-sm">
        <div className="!mx-auto !max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 !divide-y md:!divide-y-0 md:!divide-x !divide-border">
          {[
            { Icon: Zap, title: 'Fast Access', text: 'Cut through the red tape.' },
            { Icon: Shield, title: 'Expert Help', text: 'Access expert assistance quickly.' },
            { Icon: ArrowRight, title: 'Transparent', text: 'Choose what fits your needs.' },
            { Icon: Briefcase, title: 'Scalable', text: 'Grow with flexible engagement.' },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="!p-8 md:!p-12">
              <Icon className="!mb-6 !h-8 !w-8 !text-primary" />
              <h3 className="!mb-4 !text-2xl !font-semibold">{title}</h3>
              <p className="!text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="!mx-auto !max-w-7xl !px-6 !py-24 md:!py-32">
        <div className="!mb-20 !text-center">
          <h2 className="!mb-6 !text-4xl md:!text-5xl !font-bold">
            Choose Your Path to Expert Help
          </h2>
          <p className="!mx-auto !max-w-2xl !text-xl !text-muted-foreground !text-pretty">
            Three engagement models designed for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 !gap-8">
          {[User, Zap, Building2].map((Icon, i) => (
            <Card
              key={i}
              className="!bg-card !border !border-border hover:!border-primary/50 !flex !flex-col !transition-colors !group"
            >
              <CardHeader className="!p-8">
                <div className="!mb-6 !h-12 !w-12 !rounded-lg !bg-primary/10 !flex !items-center !justify-center group-hover:!scale-110 !transition-transform">
                  <Icon className="!h-6 !w-6 !text-primary" />
                </div>
                <CardTitle className="!mb-2 !text-2xl">
                  {i === 0 ? 'P2C' : i === 1 ? 'B2E' : 'B2B'}
                </CardTitle>
                <CardDescription className="!text-lg">
                  {i === 0
                    ? 'Direct Professional Help'
                    : i === 1
                    ? 'Employee-Initiated'
                    : 'Company Contracts'}
                </CardDescription>
              </CardHeader>
              <CardContent className="!p-8 !pt-0 !space-y-6 !flex-grow">
                <p>
                  Flexible pricing with a starting cost and hourly billing — no upper limit for
                  complex projects.
                </p>
                {/* <Button
                  variant="link"
                  className="!px-0 group-hover:!translate-x-1 !transition-transform"
                >
                  Learn more <ArrowRight className="!ml-2 !h-4 !w-4" />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="!border-t !border-border !bg-card/10 !px-6 !py-24 md:!py-32">
        <div className="!mx-auto !max-w-4xl !text-center">
          <p className="!mb-8 !text-lg !text-muted-foreground !text-pretty">
            No bureaucracy. Just clear pricing and expert help.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="!rounded-full !px-12 !py-8 !text-lg !font-semibold cursor-pointer"
              >
                Let&apos;s discuss your project
              </Button>
            </DialogTrigger>
            <DialogContent className="!border-border !bg-card/95 !backdrop-blur-md sm:!max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="!text-2xl">Consultation Request</DialogTitle>
                <DialogDescription>
                  Tell us which service model you&apos;re interested in.
                </DialogDescription>
              </DialogHeader>
              <div className="!py-4">
                <BookingForm />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}
