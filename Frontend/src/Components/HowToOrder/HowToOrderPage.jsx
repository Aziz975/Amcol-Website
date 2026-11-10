import React from "react";

const HowToOrderPage = () => {
  return (
    <main className="min-h-screen w-full bg-[#fdfdfd] pb-16">
      {/* ================= PAGE TITLE ================= */}
      <header className="mx-auto max-w-[925px] px-4 pt-6 text-center sm:px-8 lg:px-0">
        <h1 className="font-serif text-[28px] font-bold leading-tight text-[#333]">
          How to Order Online
        </h1>
        <p className="mt-2 text-[12px] text-[#999]">
          Order online from AMCOL Hardware.
        </p>
      </header>

      <div className="mx-auto max-w-[925px] px-4 sm:px-8 lg:px-0">
        {/* ================= SUPPORT CONTACT ================= */}
        <div className="mt-8 flex items-center gap-4">
          <svg
            viewBox="0 0 24 24"
            className="h-9 w-9 shrink-0 text-[#555]"
            fill="currentColor"
          >
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
          </svg>
          <div>
            <p className="text-[12px] text-[#666]">
              E-Commerce Technical Support: Contact
            </p>
            <a
              href="tel:+18682904600"
              className="mt-1 block text-[13px] font-bold text-[#555] transition-colors hover:text-[#c90020]"
            >
              +1-868-290-4600
            </a>
          </div>
        </div>

        {/* ================= VIDEO TUTORIALS ================= */}
        <section className="mt-8">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            Video Tutorial: How to Register
          </h2>
          <video
            controls
            className="mt-3 h-[120px] w-full max-w-[430px] bg-black object-contain"
          >
            <source src="videos/how-to-register.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mt-5">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            Video Tutorial: How to Order
          </h2>
          <video
            controls
            className="mt-3 h-[120px] w-full max-w-[430px] bg-black object-contain"
          >
            <source src="videos/how-to-order.mp4" type="video/mp4" />
          </video>
        </section>

        {/* ================= STEP 1 : MEMBER LOG IN ================= */}
        <section className="mt-10">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            1. Member Log In
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
            <div>
              <img
                src="images/order-step1-login.jpg"
                alt="AMCOL Hardware member login"
                className="w-full max-w-[415px] border border-[#333] object-contain"
              />
            </div>

            <div className="space-y-4 text-[14px] leading-[20px] text-[#666] lg:pt-[2px]">
              <p>
                Go to <strong className="text-[#444]">MEMBER LOGIN</strong>
              </p>
              <p>
                If you have an account, enter your username and password and
                press <strong className="text-[#444]">Log In</strong>, or{" "}
                <strong className="text-[#444]">Continue With Facebook</strong>{" "}
                if you signed up using your Facebook account.
              </p>
              <p>
                If you do not have an account yet,{" "}
                <strong className="text-[#444]">Sign Up</strong> or{" "}
                <strong className="text-[#444]">Continue With Facebook</strong>{" "}
                to sign up using your Facebook account.
              </p>
              <p>
                If your account is new, you will need to verify your email
                address before ordering.
              </p>
            </div>
          </div>
        </section>

        {/* ================= STEP 2 : ADD ITEMS TO CART ================= */}
        <section className="mt-10 border-t border-[#ddd] pt-6">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            2. Add Items to Cart and Request Quote
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
            <div>
              <img
                src="images/order-step2-cart.jpg"
                alt="Add to cart and request quote"
                className="w-full max-w-[415px] border border-[#333] object-contain"
              />
            </div>

            <div className="space-y-4 text-[14px] leading-[20px] text-[#666] lg:pt-[2px]">
              <p>
                Navigate an the Product you want and{" "}
                <strong className="text-[#444]">Add to Cart</strong>. You may
                enter the quantity you want before adding to cart.
              </p>
              <p>
                Go to Cart and{" "}
                <strong className="text-[#444]">Request Quote</strong>
              </p>
              <p>
                <strong className="text-[#444]">Request Now</strong> once you
                have reviewed your items.
              </p>
            </div>
          </div>
        </section>

        {/* ================= STEP 3 : MAKE AN ONLINE PAYMENT ================= */}
        <section className="mt-10 border-t border-[#ddd] pt-6">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            3. Make an Online Payment
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 lg:grid-cols-2">
            <div>
              <img
                src="images/order-step3-payment.jpg"
                alt="Make an online payment"
                className="w-full max-w-[415px] border border-[#333] object-contain"
              />
            </div>

            <div className="space-y-4 text-[14px] leading-[20px] text-[#666] lg:pt-[2px]">
              <p>
                Go to your Quotes and{" "}
                <strong className="text-[#444]">Pay Now</strong> on the approved
                quote.
              </p>
              <p>
                Review your payment details and{" "}
                <strong className="text-[#444]">Proceed to Payment</strong>
              </p>
              <div>
                <p>
                  Enter your credit card information and{" "}
                  <strong className="text-[#444]">Confirm Payment</strong>
                </p>
                <p>Note for credit card payments:</p>
                <p>
                  if your payment is made{" "}
                  <strong className="text-[#1e8a1e]">before 11:00 AM</strong>{" "}
                  (Trinidad &amp; Tobago Time) your goods will be scheduled for
                  delivery as early as the next working day.
                </p>
                <p>
                  Any payment received 11:00 AM or after will be scheduled for
                  delivery in 2-3 working days.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OTHER PAYMENT METHODS ================= */}
        <section className="mt-10">
          <h2 className="font-serif text-[16px] font-bold text-[#222]">
            Direct Deposit, Online Banking, ACH or other payment methods.
          </h2>

          <div className="mt-4 space-y-4 text-[14px] leading-[20px] text-[#666]">
            <p>
              If you would like to pay using Direct Deposit, Online Banking,
              ACH, or if your credit card payment was unsuccessful, please
              contact support at{" "}
              <a
                href="tel:+18682904600"
                className="text-[#e0203a] transition-colors hover:text-[#c90020]"
              >
                +1-868-290-4600
              </a>
              .
            </p>
            <p>
              You will receive bank account information &amp; information on
              how to send payment.
            </p>
            <p>
              Perform the desired payment and email the receipt (using the email
              associated with your account), to{" "}
              <a
                href="mailto:info@amcolgroup.com"
                className="text-[#e0203a] transition-colors hover:text-[#c90020]"
              >
                info@amcolgroup.com
              </a>
            </p>
            <p>
              Once your payment is confirmed, you will receive a notification
              via email and your order will be processed.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HowToOrderPage;