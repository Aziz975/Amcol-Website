import React from "react";
import { FaHome, FaTools, FaShoppingCart } from "react-icons/fa";
import { faqData } from "./faqData";

const icons = { home: FaHome, tools: FaTools, cart: FaShoppingCart };

export default function FaqSection() {
    const { sectionTitle, items } = faqData;

    const renderHighlightedText = (text, linkObjects) => {
        if (!text || !linkObjects) return text;

        const wordsToMatch = linkObjects.map((item) => item.word);
        const regex = new RegExp(`\\b(${wordsToMatch.join("|")})\\b`, "gi");
        const parts = text.split(regex);

        return parts.map((part, index) => {
            const matchingLinkObj = linkObjects.find(
                (item) => item.word.toLowerCase() === part.toLowerCase()
            );

            if (matchingLinkObj) {
                return (
                    <a
                        key={index}
                        href={matchingLinkObj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#c8102e] no-underline hover:underline transition-all"
                    >
                        {part}
                    </a>
                );
            }
            return part;
        });
    };

    return (
        <section className="w-full bg-[#f9f9fc] py-14">
            <div className="mx-auto max-w-[1200px] px-4">

                {/* Header: ? icon + title */}
                <div className="mb-10 text-center">
                    <div className="mb-2 text-5xl font-extrabold text-[#d9234a]">?</div>
                    <h2 className="font-serif text-3xl font-bold tracking-tight text-[#333333] md:text-4xl">
                        {sectionTitle}
                    </h2>
                </div>

                {/* 3 cards */}
                <div className="mx-auto mt-[14px] grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-3">
                    {items.map((item, i) => {
                        const Icon = icons[item.icon];
                        return (
                            <div
                                key={i}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-transparent border-t-4 border-t-[#c8102e] bg-white p-8 shadow-xl transition-colors duration-300 hover:border-rose-300 hover:border-t-[#c8102e]"
                            >
                                {/* Top-right corner circle */}
                                <div
                                    aria-hidden="true"
                                    className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gray-100 transition-transform duration-500 ease-out group-hover:translate-y-3 group-hover:scale-125"
                                />

                                {/* Icon box */}
                                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1f305e] shadow-md">
                                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>

                                {/* Question */}
                                <h3 className="relative z-[1] mb-[13px] font-serif text-[22px] font-bold leading-[1.25] text-[#1f305e]">
                                    {item.question}
                                </h3>

                                {/* Answer (flex-1 = buttons neeche aligned) */}
                                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#202020] md:text-base">
                                    {renderHighlightedText(item.answer, faqData.highlightedLinks)}
                                </p>

                                {/* Button */}
                                <a
                                    href={item.button.href}
                                    className="inline-block self-start rounded-full bg-[#1f305e] px-5 py-3 text-sm font-bold text-[#e11d48] transition-colors duration-300 hover:bg-[#e11d48] hover:text-[#1f305e]"
                                >
                                    {item.button.label}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}