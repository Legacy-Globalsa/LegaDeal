import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';

export default function InquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      // Trigger enter animation next frame
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  if (!isOpen) return null;

  const dots = [1, 2, 3];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 sm:mx-auto">
        <div
          className={`bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 relative overflow-hidden transition-all duration-300 transform ${
            visible ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-0'
          }`}
        >
          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-all z-20"
          >
            <Icon icon="solar:close-circle-linear" className="text-xl" />
          </button>

          {/* Progress Dots */}
          <div className="flex justify-center gap-1.5 mb-8 relative z-10">
            {dots.map((d) => (
              <div
                key={d}
                className={`w-8 h-1 rounded-full transition-all duration-500 ${
                  d === step ? 'bg-brand-gold' : d < step ? 'bg-brand-gold/30' : 'bg-slate-100'
                }`}
              />
            ))}
          </div>

          <div className="relative w-full h-[340px]">
            {/* Step 1 */}
            <div
              className={`absolute inset-0 w-full transition-all duration-300 ease-in-out flex flex-col justify-center ${
                step === 1
                  ? 'translate-x-0 opacity-100'
                  : step > 1
                  ? '-translate-x-[30px] opacity-0 pointer-events-none'
                  : 'translate-x-[30px] opacity-0 pointer-events-none'
              }`}
            >
              <h3 className="font-playfair text-2xl font-medium text-slate-900 text-center tracking-tight">
                Initiate Inquiry
              </h3>
              <p className="text-slate-500 text-center text-sm mt-2 font-light mb-8">
                How can we reach you?
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 w-full outline-none transition-all text-sm font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1 ml-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 w-full outline-none transition-all text-sm font-light"
                  />
                </div>
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full bg-brand-charcoal text-white py-3.5 rounded-xl font-normal text-sm hover:bg-slate-800 shadow-sm transition-all duration-300 mt-8"
              >
                Continue
              </button>
            </div>

            {/* Step 2 */}
            <div
              className={`absolute inset-0 w-full transition-all duration-300 ease-in-out flex flex-col justify-center ${
                step === 2
                  ? 'translate-x-0 opacity-100'
                  : step > 2
                  ? '-translate-x-[30px] opacity-0 pointer-events-none'
                  : 'translate-x-[30px] opacity-0 pointer-events-none'
              }`}
            >
              <h3 className="font-playfair text-2xl font-medium text-slate-900 text-center tracking-tight">
                Area of Interest
              </h3>
              <p className="text-slate-500 text-center text-sm mt-2 mb-8 font-light">
                Select the primary service required
              </p>
              <div className="space-y-3">
                {['Import / Export Mgmt', 'Saudi Compliance (SFDA/SABER)', 'Commodity Sourcing'].map(
                  (label) => (
                    <label
                      key={label}
                      className="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors has-[:checked]:border-brand-gold has-[:checked]:bg-amber-50/50"
                    >
                      <input
                        type="radio"
                        name="service"
                        className="w-4 h-4 accent-brand-gold bg-white border-slate-300"
                      />
                      <span className="ml-3 text-sm font-medium text-slate-900">{label}</span>
                    </label>
                  )
                )}
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 bg-brand-charcoal text-white py-3.5 rounded-xl font-normal text-sm hover:bg-slate-800 shadow-sm transition-all duration-300"
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`absolute inset-0 w-full transition-all duration-300 ease-in-out flex flex-col justify-center ${
                step === 3
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-[30px] opacity-0 pointer-events-none'
              }`}
            >
              <h3 className="font-playfair text-2xl font-medium text-slate-900 text-center tracking-tight">
                Final Details
              </h3>
              <p className="text-slate-500 text-center text-sm mt-2 mb-8 font-light">
                Briefly describe your requirements
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 w-full outline-none transition-all text-sm font-light"
                />
                <textarea
                  rows={3}
                  placeholder="Tell us about the volume, origin, or specific compliance needs..."
                  className="bg-slate-50 border border-slate-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 w-full outline-none transition-all text-sm font-light resize-none"
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleClose}
                  className="flex-1 bg-brand-gold text-brand-charcoal py-3.5 rounded-xl font-medium text-sm hover:bg-brand-gold-dark shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Inquiry <Icon icon="solar:arrow-right-linear" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
