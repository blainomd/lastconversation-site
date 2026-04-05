"use client";

import { useState } from "react";

const essays = [
  {
    title: "What I Wish I\u2019d Said",
    preview:
      "He was lucid for six more hours. I spent them adjusting the thermostat.",
  },
  {
    title: "Mom\u2019s Kitchen Table",
    preview:
      "She brought it up between the salad and the pot roast. Nobody touched dessert.",
  },
  {
    title: "The Difference Between Everything and Anything",
    preview:
      "\u201CDo everything\u201D is not a plan. It\u2019s a way of saying you never had one.",
  },
  {
    title: "She Wrote It on a Napkin",
    preview:
      "It held up in court. Because it said what she actually wanted.",
  },
  {
    title: "The Physician Who Couldn\u2019t Ask",
    preview:
      "He\u2019d told a thousand families. He couldn\u2019t tell his own.",
  },
];

function EmailCapture({
  id,
  buttonText = "Subscribe",
}: {
  id: string;
  buttonText?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <p className="text-sage text-lg italic">
        We&apos;ll be in touch. Quietly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        id={id}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-4 py-3 bg-white border border-warm-gray/20 rounded-md text-charcoal text-base focus:outline-none focus:border-sage transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-sage text-cream rounded-md text-base hover:bg-sage-dark transition-colors cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="pt-12 pb-6 px-6 text-center">
        <p className="text-warm-gray text-sm tracking-[0.2em] uppercase mb-2">
          A biweekly letter about
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sage">
            <svg viewBox="0 0 40 40" className="w-7 h-7"><circle cx="18" cy="20" r="17" fill="currentColor" /><circle cx="18" cy="20" r="10" fill="black" /><rect x="18" y="0" width="22" height="18" fill="black" /><rect x="18" y="17" width="20" height="6" fill="currentColor" /></svg>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight font-normal">
            The Last Conversation
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-12 pb-16 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug font-normal mb-8">
          70% of Americans want to die at home.
          <br />
          <span className="text-warm-gray">70% don&apos;t.</span>
        </p>
        <p className="text-lg sm:text-xl text-warm-gray leading-relaxed mb-12 max-w-lg mx-auto">
          Not because the system failed.
          <br />
          Because nobody had the conversation.
        </p>
        <div className="flex justify-center">
          <EmailCapture id="hero-email" buttonText="Get the essays" />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-warm-gray/15" />

      {/* Stats */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <p className="text-4xl sm:text-5xl text-charcoal font-normal mb-3">73%</p>
            <p className="text-warm-gray text-base leading-relaxed">
              of Americans have
              <br />
              no advance directive
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl text-charcoal font-normal mb-3">53%</p>
            <p className="text-warm-gray text-base leading-relaxed">
              haven&apos;t told their family
              <br />
              what they want
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl text-charcoal font-normal mb-3">$300K</p>
            <p className="text-warm-gray text-base leading-relaxed">
              average last-year cost without
              <br />
              documented wishes
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-warm-gray/15" />

      {/* What If */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl text-charcoal font-normal mb-8">
          What if you started talking?
        </h2>
        <div className="text-lg text-warm-gray leading-relaxed space-y-4 max-w-lg mx-auto">
          <p>
            CareGoals isn&apos;t a form. It&apos;s a conversation.
          </p>
          <p>
            Sage listens. You talk.
            <br />
            The document writes itself.
          </p>
          <p className="text-base italic text-warm-gray/70 pt-4">
            No legalese. No checkboxes. Just the words
            <br />
            you&apos;d actually say at the kitchen table.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-warm-gray/15" />

      {/* Essays */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-2xl sm:text-3xl text-charcoal font-normal text-center mb-12">
          Preview essays
        </h2>
        <div className="space-y-8">
          {essays.map((essay, i) => (
            <div key={i} className="border-l-2 border-sage/30 pl-6">
              <h3 className="text-xl text-charcoal font-normal mb-2">
                {essay.title}
              </h3>
              <p className="text-warm-gray text-base italic leading-relaxed">
                {essay.preview}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-warm-gray/15" />

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl text-charcoal font-normal mb-4">
          Read the first essay
        </h2>
        <p className="text-warm-gray text-lg mb-8">
          Delivered to your inbox. No spam. Just the conversation.
        </p>
        <div className="flex justify-center">
          <EmailCapture id="cta-email" buttonText="Send it to me" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-warm-gray/10 mt-8">
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <p className="text-warm-gray/60 text-sm mb-4">
            Part of the{" "}
            <a
              href="https://co-op.care"
              className="text-warm-gray/80 underline underline-offset-2 hover:text-sage transition-colors"
            >
              co-op.care
            </a>{" "}
            ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-warm-gray/50 mb-8">
            <a href="https://co-op.care" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">co-op.care</a>
            <a href="https://sh-room.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">sh-room.com</a>
            <a href="https://fillforward.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">fillforward.com</a>
            <a href="https://comfortcard.org" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">comfortcard.org</a>
            <a href="https://caregoals.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">caregoals.com</a>
            <a href="https://surgeonvalue.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">surgeonvalue.com</a>
            <a href="https://solvinghealth.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">solvinghealth.com</a>
            <a href="https://doesyourbackhurt.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">doesyourbackhurt.com</a>
            <a href="https://themissedcode.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">themissedcode.com</a>
          </div>
          <p className="text-warm-gray/40 text-xs">
            Built entirely by AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
