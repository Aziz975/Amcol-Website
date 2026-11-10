import React from "react";

const ShoppingCartPage = () => {
  const handleEmptyCart = () => {
    // TODO: clear cart items from your cart state / backend
    console.log("Cart emptied");
  };

  return (
    <main className="min-h-screen w-full bg-[#fdfdfd] pb-16">
      {/* ================= PAGE TITLE BAR ================= */}
      <div className="w-full border-b border-[#e5e5e5] bg-[#f5f5f5]">
        <div className="mx-auto flex max-w-[925px] items-center justify-between px-4 py-5 sm:px-8 lg:px-0">
          <h1 className="font-serif text-[22px] font-normal text-[#777]">
            Shopping Cart
          </h1>
          <p className="text-[11px] text-[#aaa]">Shopping Cart</p>
        </div>
      </div>

      <div className="mx-auto max-w-[925px] px-4 sm:px-8 lg:px-0">
        {/* ================= LOGIN ALERT ================= */}
        <div className="mt-10 flex items-center rounded-[3px] bg-[#ff5555] p-[10px]">
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[3px] bg-[#f04848]">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#a82323]">
              <g fill="currentColor">
                <rect x="4.5" y="4.5" width="15" height="15" />
                <rect
                  x="4.5"
                  y="4.5"
                  width="15"
                  height="15"
                  transform="rotate(45 12 12)"
                />
              </g>
              <rect x="11" y="8" width="2" height="5.5" fill="#f04848" />
              <circle cx="12" cy="15.5" r="1.1" fill="#f04848" />
            </svg>
          </div>

          <div className="ml-[18px] text-[13px] leading-[20px] text-white">
            <p>Please login to request a quote.</p>
            <a
              href="/login"
              className="text-[#9b2c2c] transition-colors hover:text-white"
            >
              Login here
            </a>
          </div>
        </div>

        {/* ================= CART ACTION BUTTONS ================= */}
        <div className="mt-[30px] flex flex-wrap gap-[10px]">
          <button
            type="button"
            onClick={handleEmptyCart}
            className="flex h-[40px] overflow-hidden rounded-[2px] border border-[#e5e5e5] border-t-[3px] bg-[#f7f7f7] text-[12px] text-[#666] transition-colors hover:text-[#c90020]"
          >
            <span className="flex w-[40px] items-center justify-center bg-[#e9e9e9]">
              <svg
                viewBox="0 0 24 24"
                className="h-[13px] w-[13px]"
                fill="currentColor"
              >
                <path d="M9 3h6l1 2h4v2H4V5h4l1-2zM6 9h12l-1 12H7L6 9z" />
              </svg>
            </span>
            <span className="flex items-center px-[18px]">Empty Cart</span>
          </button>

          <a
            href="/"
            className="flex h-[40px] overflow-hidden rounded-[2px] border border-[#e5e5e5] border-t-[3px] bg-[#f7f7f7] text-[12px] text-[#666] transition-colors hover:text-[#c90020]"
          >
            <span className="flex w-[40px] items-center justify-center bg-[#e9e9e9]">
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 4h3l2.5 11h11L21 7H6" />
                <circle cx="9" cy="19.5" r="1.4" />
                <circle cx="17" cy="19.5" r="1.4" />
              </svg>
            </span>
            <span className="flex items-center px-[18px]">
              Continue Shopping
            </span>
          </a>
        </div>

        {/* ================= EMPTY CART HEADING ================= */}
        <h2 className="mt-4 font-serif text-[22px] font-bold text-[#333]">
          Your Shopping Cart is empty.
        </h2>

        {/* ================= INFO BOX 1 ================= */}
        <div className="mt-3 flex w-full max-w-[540px] items-start rounded-[3px] bg-[#2f96dc] p-[10px]">
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[3px] bg-[#1b7dc4]">
            <span className="font-serif text-[36px] font-bold italic leading-none text-[#164b78]">
              i
            </span>
          </div>

          <div className="ml-[18px] pb-3 pr-4 pt-[6px] text-[13px] leading-[20px] text-white">
            <p>
              Your Shopping Cart lives to serve. Give it purpose--fill it with
              tools, supplies, accessories, wares, electronics, and more. If you
              already have an account,{" "}
              <a
                href="/login"
                className="text-[#b3dcf7] transition-colors hover:text-white"
              >
                Sign In
              </a>{" "}
              to see your Cart.
              <br />
              Continue shopping on the{" "}
              <a
                href="/"
                className="text-[#b3dcf7] transition-colors hover:text-white"
              >
                AMCOL Hardware Home Page
              </a>{" "}
              or take a peek at{" "}
              <a
                href="/deals"
                className="text-[#b3dcf7] transition-colors hover:text-white"
              >
                this month&apos;s deals
              </a>
              .
            </p>
          </div>
        </div>

        {/* ================= INFO BOX 2 ================= */}
        <div className="mt-7 flex w-full max-w-[540px] items-start rounded-[3px] bg-[#2f96dc] p-[10px]">
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-[3px] bg-[#1b7dc4]">
            <span className="font-serif text-[36px] font-bold italic leading-none text-[#164b78]">
              i
            </span>
          </div>

          <div className="ml-[18px] pb-3 pr-4 pt-[6px] text-[13px] leading-[20px] text-white">
            <p>
              The price and availability of items at AMCOL Hardware are subject
              to change. The shopping cart is a temporary place to store a list
              of your items and reflects each item&apos;s most recent price.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCartPage;