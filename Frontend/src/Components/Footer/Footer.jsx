
import React from "react";
import {
  Phone,
  MapPin,
  Clock3,
  Pause,
  Instagram,
  ChevronUp,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Construction", href: "/construction" },
    { label: "Contact Us", href: "/contact" },
    { label: "How To Order", href: "/how-to-order" },
    { label: "My Account", href: "/my-account" },
    { label: "Cart", href: "/cart" },
  ];

  const paymentImages = [
    {
      src: "/images/first-atlantic-commerce.png",
      alt: "Powered by First Atlantic Commerce",
      width: "112px",
    },
    {
      src: "/images/visa.png",
      alt: "Visa",
      width: "109px",
    },
    {
      src: "/images/mastercard.png",
      alt: "Mastercard",
      width: "109px",
    },
    {
      src: "/images/3d-secure.png",
      alt: "3D Secure",
      width: "170px",
    },
    {
      src: "/images/verified-by-visa.png",
      alt: "Verified by Visa",
      width: "115px",
    },
    {
      src: "/images/mastercard-securecode.png",
      alt: "Mastercard SecureCode",
      width: "119px",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#555555] text-white">
      <div className="mx-auto w-full max-w-[1536px] px-5 pt-6 sm:px-8 md:px-10 lg:px-[11.3%]">

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">

          {/* Contact Us */}
          <div>
            <h2 className="mb-8 font-serif text-[24px] font-bold leading-tight">
              Contact Us
            </h2>

            <div className="space-y-5 text-[18px] leading-[1.4]">
              <div>
                <p className="text-[#e1e1e1]">Telephone:</p>

                <a
                  href="tel:8683999200"
                  className="flex flex-wrap items-center gap-x-1 hover:text-[#d1d1d1]"
                >
                  <Phone
                    size={17}
                    fill="currentColor"
                    strokeWidth={2}
                    className="shrink-0"
                  />
                  <span>(868) 399-9200</span>
                  <span className="text-[14px] text-[#dedede]">
                    (Sales & WhatsApp)
                  </span>
                </a>

                <a
                  href="tel:8686477653"
                  className="flex items-center gap-1 hover:text-[#d1d1d1]"
                >
                  <Phone
                    size={17}
                    fill="currentColor"
                    strokeWidth={2}
                    className="shrink-0"
                  />
                  <span>(868) 647-7653</span>
                </a>

                <a
                  href="tel:8682226265"
                  className="flex items-center gap-1 hover:text-[#d1d1d1]"
                >
                  <Phone
                    size={17}
                    fill="currentColor"
                    strokeWidth={2}
                    className="shrink-0"
                  />
                  <span>(868) 22-AMCOL</span>
                </a>
              </div>

              <div>
                <p className="text-[#e1e1e1]">Address:</p>

                <div className="flex items-start gap-1">
                  <MapPin
                    size={17}
                    fill="currentColor"
                    strokeWidth={2}
                    className="mt-1 shrink-0"
                  />

                  <address className="max-w-[370px] not-italic">
                    22 Ramjohn Trace, Penal, Trinidad and Tobago
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="mb-8 font-serif text-[24px] font-bold leading-tight">
              Opening Hours
            </h2>

            <div className="space-y-0 text-[18px] leading-[1.45] text-[#e0e0e0]">
              <p className="flex items-start gap-1">
                <Clock3 size={19} className="mt-1 shrink-0" />
                <span>Monday - Friday: 7am - 5pm</span>
              </p>

              <p className="flex items-start gap-1">
                <Clock3 size={19} className="mt-1 shrink-0" />
                <span>Saturday: 7am - 4pm</span>
              </p>

              <p className="flex items-start gap-1">
                <Pause size={19} className="mt-1 shrink-0" />
                <span>Sunday / Public Holiday: Closed</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="mb-8 font-serif text-[24px] font-bold leading-tight">
              Quick Links
            </h2>

            <nav className="flex flex-col items-start text-[18px] leading-[1.45]">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#d1d1d1]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Payment Logos, Social Icons and Back to Top */}
        <div className="mt-10 flex flex-col gap-6 pb-6 sm:mt-12 lg:mt-11">

          {/* Payment Logos and Social Icons */}
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

            {/* Payment Logos */}
            <div className="flex max-w-full flex-wrap items-center gap-[5px]">
              {paymentImages.map((payment) => (
                <img
                  key={payment.alt}
                  src={payment.src}
                  alt={payment.alt}
                  style={{ width: payment.width }}
                  className="h-[66px] max-w-full bg-white object-contain"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Social Icons and Back to Top */}
            <div className="flex w-full items-center justify-end gap-6 lg:w-auto lg:gap-7">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#929292] transition-colors hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#929292] transition-colors hover:text-white"
              >
                <Instagram size={19} strokeWidth={2.2} />
              </a>

              {/* Back to Top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-md bg-[#f0f0f0] text-[#777777] transition-colors hover:bg-white"
              >
                <ChevronUp size={27} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-[14px] leading-6 text-[#e3e3e3] sm:text-[15px]">
            © 2026 Americas Marketing Company Limited (AMCOL) Hardware.{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-white hover:underline"
            >
              Privacy Policy.
            </a>{" "}
            <a
              href="/terms-of-service"
              className="font-semibold text-white hover:underline"
            >
              Terms of Service.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
