'use client';

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import { usePathname } from 'next/navigation';

type Props = {};

const TopNav = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <CiMenuBurger />
        </Button>
      </SheetTrigger>
      <SheetContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100dvh',
        }}>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/' ? 'active' : undefined}`} href="/">
            Home
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/about' ? 'active' : undefined}`} href="/about">
            About Us
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/booking' ? 'active' : undefined}`} href="/booking">
            Booking
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/contact-us' ? 'active' : undefined}`} href="/contact-us">
            Contact Us
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/events' ? 'active' : undefined}`} href="/events">
            Events
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/faq' ? 'active' : undefined}`} href="/faq">
            FAQ
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/gallery' ? 'active' : undefined}`} href="/gallery">
            Gallery
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/news' ? 'active' : undefined}`} href="/news">
            News
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/testimonials' ? 'active' : undefined}`} href="/testimonials">
            Testimonials
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link className={`nav-link ${pathname === '/visitor-info' ? 'active' : undefined}`} href="/visitor-info">
            Visitor Info
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

export default TopNav;
