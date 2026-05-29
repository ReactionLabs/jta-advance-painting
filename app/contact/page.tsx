'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', { ...data, submittedAt: new Date().toISOString() });
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[450px]">
        <Image
          src="/project-images/jta_work_3.jpg"
          alt="JTA painting project"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 flex h-full items-end pb-14 px-6 md:px-12 max-w-7xl mx-auto">
          <div>
            <p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-3">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Ready to start your painting project? We&apos;d love to hear from you.
              Get a free estimate today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Let&apos;s Discuss Your Project</h2>
                <p className="text-muted-foreground">
                  Whether you need a single room painted or a full commercial property,
                  our team is ready to help. Fill out the form or give us a call.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Address</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      9225 Bay Plaza Blvd<br />
                      Suite 417 PMB 1205<br />
                      Tampa, FL 33619
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Phone</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="tel:813-392-8301" className="hover:text-primary">813-392-8301</a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Secondary: <a href="tel:813-392-8128" className="hover:text-primary">813-392-8128</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Email</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="mailto:service@jtaadvancepainting.com" className="hover:text-primary">
                        service@jtaadvancepainting.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="bg-muted/30 rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Service Area</h3>
                <p className="text-sm text-muted-foreground">
                  We serve Tampa Bay and surrounding Florida communities including
                  Brandon, Riverview, Lithia, Apollo Beach, and all of Hillsborough County.
                </p>
              </div>
            </div>

            {/* Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Request a Free Estimate</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...register('name')}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(813) 555-1234"
                      {...register('phone')}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Project</Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your painting needs — interior, exterior, commercial, residential..."
                      rows={5}
                      {...register('message')}
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Separator />

                  {isSuccess && (
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500/50 rounded-md flex items-center gap-3">
                      <CheckCircle className="size-5 text-green-600" aria-hidden="true" />
                      <p className="text-green-700 dark:text-green-400 font-medium text-sm">
                        Message sent! We&apos;ll be in touch within 24 hours.
                      </p>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}