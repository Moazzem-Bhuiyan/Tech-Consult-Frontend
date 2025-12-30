'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Send, Building2, Zap, User } from 'lucide-react';
import Swal from 'sweetalert2';
import { useState } from 'react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/inquires/sent-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      Swal.fire({
        title: 'Message sent successfully!',
        text: 'We will get back to you soon.',
        icon: 'success',
      });

      reset();
    } catch (error) {
      Swal.fire({
        title: error.message || 'An error occurred. Please try again.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* NAME & EMAIL */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Input
            placeholder="Your Name"
            {...register('name', { required: 'Name is required' })}
            className="h-12"
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="h-12"
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      {/* SUBJECT */}
      <div className="!mt-5">
        <Input
          placeholder="Subject"
          {...register('subject', { required: 'Subject is required' })}
          className="h-12"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      {/* SERVICE SELECT */}
      <div className="!mt-5">
        <Select onValueChange={(value) => setValue('service', value, { shouldValidate: true })}>
          <SelectTrigger className="!h-12 !w-full !p-3 !bg-background/50">
            <SelectValue placeholder="Select Service Type" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="b2b" className="!p-3 m-0 h-auto min-h-0">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                <span>B2B – Company Contracts</span>
              </div>
            </SelectItem>

            <SelectItem value="b2e" className="!p-3 m-0 h-auto min-h-0">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>B2E – Employee Initiated</span>
              </div>
            </SelectItem>

            <SelectItem value="p2c" className="!p-3 m-0 h-auto min-h-0">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>P2C – Direct Professional Help</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        {/* hidden input for react-hook-form */}
        <input type="hidden" {...register('service', { required: 'Service is required' })} />

        {errors.service && (
          <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      {/* MESSAGE */}
      <div className="!mt-5">
        <Textarea
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
          className="min-h-[120px] resize-none !p-3"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* SUBMIT */}
      <Button
        type="submit"
        disabled={loading}
        className="h-12 !mt-5 w-full bg-foreground text-background hover:bg-foreground/90"
      >
        {loading ? 'Sending...' : 'Inquire Now'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
