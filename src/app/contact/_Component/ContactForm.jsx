'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import Swal from 'sweetalert2';
import { useState } from 'react';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
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
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      setLoading(false);
      reset();
      Swal.fire({
        title: 'Message sent successfully!',
        text: 'We will get back to you soon.',
        icon: 'success',
        draggable: true,
      });
    } catch (error) {
      Swal.fire({
        title: `${error.message || 'An error occurred. Please try again.'}`,
        icon: 'error',
        draggable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

      <Button
        type="submit"
        className="h-12 !mt-5 w-full bg-foreground text-background hover:bg-foreground/90"
      >
        {loading ? 'Sending...' : 'Inquire Now'}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
