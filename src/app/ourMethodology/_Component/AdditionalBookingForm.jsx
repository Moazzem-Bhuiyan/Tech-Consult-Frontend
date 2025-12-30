'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
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
import { z } from 'zod';
import { Building2, Zap, User } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';

/* ---------------- ZOD SCHEMA ---------------- */
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(2, 'Subject must be at least 2 characters.'),
  service: z.enum(['b2b', 'b2e', 'p2c'], {
    required_error: 'Please select an engagement model.',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export function BookingForm() {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      service: undefined,
      message: '',
    },
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/inquires/sent-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed to send message');

      Swal.fire({
        title: 'Message sent successfully!',
        text: 'We will get back to you soon.',
        icon: 'success',
      });

      reset();
    } catch (error) {
      Swal.fire({
        title: error.message || 'Something went wrong',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="!w-full !p-0 !m-0">
      <form onSubmit={handleSubmit(onSubmit)} className="!space-y-10 !p-0 !m-0">
        {/* NAME & EMAIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 !gap-4 !p-0 !m-0 !space-y-2 !mb-3">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div className="!space-y-2 !p-0 !m-0">
                <label className="!text-sm !font-medium !p-0 !m-0">Name</label>
                <Input {...field} placeholder="John Doe" className="!p-3 !m-0 !bg-background/50" />
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <div className="!space-y-2 !p-0 !m-0">
                <label className="!text-sm !font-medium !p-0 !m-0">Email</label>
                <Input
                  {...field}
                  placeholder="john@company.com"
                  className="!p-3 !m-0 !bg-background/50"
                />
              </div>
            )}
          />
        </div>

        {/* SUBJECT */}
        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <div className="!space-y-2 !p-0 !m-0 !mb-3">
              <label className="!text-sm !font-medium !p-0 !mb-3">Subject</label>
              <Input
                {...field}
                placeholder="Project Subject"
                className="!p-3 !m-0 !bg-background/50"
              />
            </div>
          )}
        />

        {/* SELECT (NO SPACING AT ALL) */}
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <div className="!space-y-2 !p-0 !mb-3">
              <label className="!text-sm !font-medium !p-0 !-mb-4">Engagement Model</label>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="!w-full !p-3 !m-0 !h-auto !bg-background/50">
                  <SelectValue placeholder="Select engagement model" />
                </SelectTrigger>

                <SelectContent className="!p-3 !m-0 !rounded-none">
                  <SelectItem value="b2b" className="!p-3 !m-0 !h-auto !min-h-0">
                    <div className="flex items-center gap-2 !p-0 !m-0">
                      <Building2 className="!h-4 !w-4" />
                      <span>B2B: Company Contracts</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="b2e" className="!p-3 !m-0 !h-auto !min-h-0">
                    <div className="flex items-center gap-2 !p-0 !m-0">
                      <Zap className="!h-4 !w-4" />
                      <span>B2E: Employee-Initiated</span>
                    </div>
                  </SelectItem>

                  <SelectItem value="p2c" className="!p-3 !m-0 !h-auto !min-h-0">
                    <div className="flex items-center gap-2 !p-0 !m-0">
                      <User className="!h-4 !w-4" />
                      <span>P2C: Direct Professional Help</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        />

        {/* MESSAGE */}
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <div className="!space-y-2 !p-0 !m-0">
              <label className="!text-sm !font-medium !p-0 !m-0">Project Details</label>
              <Textarea
                {...field}
                className="!min-h-[120px] !p-3 !m-0 !bg-background/50"
                placeholder="Tell us about your project..."
              />
            </div>
          )}
        />

        {/* SUBMIT */}
        <Button type="submit" disabled={loading} className="!w-full !rounded-full !py-6 !p-0 !mt-5">
          {loading ? 'Sending...' : 'Send Booking Request'}
        </Button>
      </form>
    </div>
  );
}
