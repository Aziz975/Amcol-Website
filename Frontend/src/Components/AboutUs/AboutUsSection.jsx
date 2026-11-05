import React from 'react';
import { aboutUsData } from './aboutUsData';
import { FaUserFriends } from "react-icons/fa";

export default function AboutUsSection() {
    const { sectionTitle, leftCard, content } = aboutUsData;

    // UPDATED Helper to render links with hover underline
    const renderHighlightedText = (text, linkObjects) => {
        if (!text || !linkObjects) return text;

        // Get an array of just the words to use in the regex
        const wordsToMatch = linkObjects.map(item => item.word);

        // Create a regex to match any of the words (case-insensitive)
        const regex = new RegExp(`(${wordsToMatch.join('|')})`, 'gi');

        // Split the text into parts
        const parts = text.split(regex);

        return parts.map((part, index) => {
            // Check if this part is a highlighted word
            const matchingLinkObj = linkObjects.find(
                (item) => item.word.toLowerCase() === part.toLowerCase()
            );

            if (matchingLinkObj) {
                // Render it as a styled clickable link
                return (
                    <a
                        key={index}
                        href={matchingLinkObj.href}
                        target="_blank" // Opens in a new tab
                        rel="noopener noreferrer" // Security for new tabs
                        /* 
                          Styling Breakdown:
                          - font-semibold: Semi-bold text (from mockup)
                          - text-[#d9534f]: Red color (from mockup)
                          - no-underline: Remove default link underline
                          - hover:underline: Add underline on hover
                          - transition-all: Smooth appearance of underline
                        */
                        className="font-semibold text-[#d9534f] no-underline hover:underline transition-all"
                    >
                        {part}
                    </a>
                );
            } else {
                // If it's not a keyword, just return the plain text
                return part;
            }
        });
    };

    return (
        <section className="w-full bg-[#f9f9fc] py-14">
            <div className="mx-auto max-w-[1200px] px-4">

                {/* Top Header with Icon */}
                <div className="mb-10 text-center">
                    <div className="mb-2 inline-block text-[#d9534f]">
                        <svg
                            className="mx-auto h-9 w-9"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#333333] md:text-3xl">
                        {sectionTitle}
                    </h2>
                </div>

                {/* Outer Card with Red Top Border */}
                <div className="relative overflow-hidden rounded-2xl border-t-4 border-[#d9534f] bg-white p-6 shadow-xl md:p-10">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">

                        {/* Left Dark Blue Banner */}
                        <div className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_25%_22%,rgba(255,255,255,0.22),transparent_45%),linear-gradient(160deg,#1f2f66,#16224a)] p-8 text-center text-white lg:col-span-4">
                            {/* Top-right ka bada gol */}
                            <div
                                aria-hidden="true"
                                className="absolute -right-20 -top-[72px] h-[200px] w-[200px] rounded-full bg-white/10"
                            />

                            {/* Icon box */}
                            <div className="relative mb-7 flex h-24 w-24 items-center justify-center rounded-[22px] bg-[#c8102e] shadow-[0_10px_24px_rgba(0,0,0,0.35)]">
                                <FaUserFriends className="h-12 w-12 text-white" aria-hidden="true" />
                            </div>

                            <h3 className="relative max-w-[16rem] text-2xl font-bold leading-snug">
                                {leftCard.title}
                            </h3>
                        </div>

                        {/* Right Text Content */}
                        <div className="flex flex-col justify-center lg:col-span-8">
                            <div className="space-y-4 text-sm leading-relaxed md:text-base">
                                <p className="font-bold text-gray-800">
                                    {content.guidingPrinciples}
                                </p>

                                {/* Paragraph with clickable keywords */}
                                <p>
                                    {renderHighlightedText(
                                        content.paragraphs[0],
                                        content.highlightedLinks // Pass the updated link objects
                                    )}
                                </p>

                                <p>{content.paragraphs[1]}</p>
                                <p>{content.paragraphs[2]}</p>
                            </div>

                            {/* Tags Section
              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                {content.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border border-red-200 bg-red-50/50 px-4 py-1.5 text-xs font-semibold text-[#1b2b50] transition-colors hover:bg-red-100"
                  >
                    <span className="mr-1.5 h-3 w-1 rounded-full bg-[#d9534f]"></span>
                    {tag}
                  </span>
                ))}
              </div> */}

                            {/* Amcol Info Chip Row */}
                            <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                                {content.tags.map((tag, index) => (
                                    <a
                                        key={index}
                                        href={`https://www.amcolhardwarett.com/search.php?category=${encodeURIComponent(tag)}`}
                                        className="group relative inline-flex items-center overflow-hidden rounded-full bg-[#f1f3f7] text-xs font-bold text-[#1b2b50] transition-colors hover:bg-[#e4e8f0] md:text-sm"
                                    >
                                        {/* Outer Curved Red Left Border Arc */}
                                        <span className="flex h-full items-center justify-center rounded-l-full border-l-[3.5px] border-[#d9534f] py-2 pl-4 pr-5">
                                            {tag}
                                        </span>
                                    </a>
                                ))}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}