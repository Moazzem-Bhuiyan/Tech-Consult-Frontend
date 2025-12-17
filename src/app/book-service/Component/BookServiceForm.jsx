'use client';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const BookServiceForm = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [value, setValue] = useState('');
  const boookingSubtmit = (data) => {
    console.log(data);
  };
  return (
    <div className="z-10 w-full !mb-5 md:mb-0">
      <form onSubmit={handleSubmit(boookingSubtmit)}>
        <div className="md:flex flex-col gap-5 justify-between">
          <Input
            className="rounded-lg  bg-white !px-4 !py-5 "
            placeholder="Your name"
            {...register('name')}
          />
          <Input
            type="email"
            id="email"
            placeholder="Eneter Your Email"
            className="rounded-lg  bg-white !px-4 !py-5 md:mt-0 !mt-5"
            {...register('email', {
              required: 'Email is required',
              validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                  return 'Must be a valid email';
                }
                return true;
              },
            })}
          />
        </div>
        <div className="md:flex gap-5 justify-between !mt-5">
          <Select className="flex-1">
            <SelectTrigger className="rounded-lg  bg-white !px-4 !py-5 w-full md:mt-0 !mt-5 ">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Services</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative flex gap-2 w-full">
            <Input
              id="date"
              value={value}
              placeholder="Please select  a preferend date"
              className="rounded-lg  bg-white !px-4 !py-5 md:mt-0 !mt-5"
              onChange={(e) => {
                const date = new Date(e.target.value);
                setValue(e.target.value);
                if (isValidDate(date)) {
                  setDate(date);
                  setMonth(date);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  id="date-picker"
                  variant="ghost"
                  className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                >
                  <CalendarIcon className="size-3.5" />
                  <span className="sr-only">Select date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={18}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={(date) => {
                    setDate(date);
                    setValue(formatDate(date));
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* text area */}
        <div className="!mt-5">
          <Textarea
            {...register('message')}
            id="message"
            rows={6}
            className={'rounded-lg  bg-white !px-4 !py-5 h-[150px]'}
            placeholder="Type your message here."
          />
        </div>

        {/* submit button */}
        <Button
          className="!mt-5 !mx-auto md:w-[40%] w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 cursor-pointer !py-5 text-[15px]"
          type="submit"
        >
          <Send className="ml-2" />
          Book Your Service Today
        </Button>
      </form>
    </div>
  );
};

export default BookServiceForm;
