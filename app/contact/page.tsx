'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaintBrushStroke, PaintSplatter } from '@/components/ui/PaintDecorations';

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
  const [isError, setIsError] = useState(false);

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
    setIsSuccess(false);
    setIsError(false);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      const url = (endpoint && endpoint.trim().startsWith('http'))
        ? endpoint.trim()
        : 'https://formspree.io/f/xpqvzyqk';

      const response = await fetch(
        url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form to Formspree:', error);
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* Hero Section (Centered & Premium) */}
      <section className="relative h-[450px] flex items-center justify-center bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/project-images/jta_work_3.jpg"
            alt="JTA painting project"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-white max-w-2xl leading-relaxed">
            Ready to start your painting project? We&apos;d love to hear from you. Get a free estimate today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight mb-6">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Whether you need a single room painted or a full commercial property,
                  our team is ready to help. Fill out the form or give us a call.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-logo-gold/10 text-logo-gold transition-transform group-hover:scale-105 duration-300">
                    <MapPin className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Address</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">
                      9225 Bay Plaza Blvd<br />
                      Suite 417 PMB 1205<br />
                      Tampa, FL 33619
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-logo-red/10 text-logo-red transition-transform group-hover:scale-105 duration-300">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Phone</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">
                      <a href="tel:813-392-8301" className="hover:text-primary font-medium">813-392-8301</a>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Secondary: <a href="tel:813-392-8128" className="hover:text-primary font-medium">813-392-8128</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-logo-purple/10 text-logo-purple transition-transform group-hover:scale-105 duration-300">
                    <Mail className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Email</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mt-1">
                      <a href="mailto:service@jtaadvancepainting.com" className="hover:text-primary font-medium">
                        service@jtaadvancepainting.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <Card className="relative overflow-hidden group border border-border bg-slate-50/50 shadow-sm">
                <PaintSplatter color="gold" variant={1} className="absolute -bottom-6 -right-6 size-16 opacity-5 transition-opacity" />
                <CardContent className="p-6 relative z-10">
                  <h3 className="font-bold mb-3 flex items-center gap-1.5">
                    <MapPin className="size-4.5 text-logo-red" />
                    <span>Service Area</span>
                  </h3>
                  <p className="text-sm text-slate-550 leading-relaxed">
                    We serve Tampa Bay and surrounding Florida communities including
                    Brandon, Riverview, Lithia, Apollo Beach, and all of Hillsborough County.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Request Estimate Form Container (Right) */}
            <div>
              <Card className="relative overflow-hidden group border border-border shadow-xl bg-white">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-logo-red via-logo-orange to-logo-gold" />
                <PaintSplatter color="green" variant={3} className="absolute -bottom-10 -right-10 size-28 opacity-5 transition-opacity" />
                <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-2xl font-bold">Request a Free Estimate</CardTitle>
                  <CardDescription className="text-slate-500 leading-relaxed">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...register('name')}
                        className={cn("rounded-lg border-border py-5", errors.name && 'border-destructive')}
                      />
                      {errors.name && (
                        <p className="text-xs text-destructive font-medium mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register('email')}
                        className={cn("rounded-lg border-border py-5", errors.email && 'border-destructive')}
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive font-medium mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(813) 392-8301"
                        {...register('phone')}
                        className={cn("rounded-lg border-border py-5", errors.phone && 'border-destructive')}
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive font-medium mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">Tell Us About Your Project</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe your painting needs — interior, exterior, cabinet refinishing, commercial..."
                        rows={5}
                        {...register('message')}
                        className={cn("rounded-lg border-border", errors.message && 'border-destructive')}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive font-medium mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <Separator />

                    {isSuccess && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                        <CheckCircle className="size-5 text-green-600 shrink-0" aria-hidden="true" />
                        <p className="text-green-800 font-semibold text-sm">
                          Message sent! We&apos;ll be in touch within 24 hours.
                        </p>
                      </div>
                    )}

                    {isError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                        <AlertCircle className="size-5 text-destructive shrink-0" aria-hidden="true" />
                        <p className="text-destructive font-semibold text-sm">
                          Failed to send message. Please try again or call us directly.
                        </p>
                      </div>
                    )}

                    <Button type="submit" className="w-full rounded-xl py-6 font-bold bg-primary text-primary-foreground hover:bg-primary/95 transition-all" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}