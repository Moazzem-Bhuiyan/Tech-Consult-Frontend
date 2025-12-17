'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function BillingDetailsFormModal({ children, initialService }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const toastId = toast.loading('Processing your order.....');

    try {
      const payload = {
        ...data,
        service: initialService?._id,
      };

      // STEP 1 — CREATE BOOKING
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service-bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || 'Failed to create booking');
      }

      // STEP 2 — CHECKOUT
      const checkoutRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/payments/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ booking: result?.data?._id }),
      });

      const checkout = await checkoutRes.json();

      if (!checkoutRes.ok) {
        throw new Error(checkout?.message || 'Checkout failed');
      }

      // SUCCESS
      toast.success('Order placed successfully!', { id: toastId });

      // REDIRECT
      window.location.href = checkout?.data;
    } catch (error) {
      toast.error(error.message || 'Something went wrong', { id: toastId });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="!max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Billing Details</DialogTitle>
          <DialogDescription>
            Book service: <span className="font-bold text-black">{initialService?.title}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <Label>Name</Label>
            <Input {...register('name', { required: true })} />
          </div>

          <div>
            <Label>Email</Label>
            <Input type="email" {...register('email', { required: true })} />
          </div>

          <div>
            <Label>Contact</Label>
            <Input {...register('contactNumber', { required: true })} />
          </div>

          <div>
            <Label>Note</Label>
            <Textarea {...register('note')} placeholder="Optional" />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
