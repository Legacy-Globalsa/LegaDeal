import { Icon } from '@iconify/react';
import logo from '../assets/LegaDealLogo.png';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="LEGADEAL" className="h-7 w-auto" />
            </div>
            <p className="text-sm text-slate-500 font-light leading-relaxed max-w-xs">
              Global Trading, Import &amp; Export Excellence. A subsidiary of Legacy Global
              Commercial Services Co.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-xs tracking-widest text-slate-900 uppercase font-medium mb-4">
                Contact Directory
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+966503602359"
                    className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors font-light flex items-center gap-2"
                  >
                    <Icon icon="solar:phone-linear" className="text-slate-400" />
                    +966 50 360 2359
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@legacyglobalsa.com"
                    className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors font-light flex items-center gap-2"
                  >
                    <Icon icon="solar:letter-linear" className="text-slate-400" />
                    info@legacyglobalsa.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.legacyglobalsa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-brand-gold-dark transition-colors font-light flex items-center gap-2"
                  >
                    <Icon icon="solar:link-linear" className="text-slate-400" />
                    www.legacyglobalsa.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-widest text-slate-900 uppercase font-medium mb-4">
                Headquarters
              </h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed flex items-start gap-2">
                <Icon icon="solar:map-point-linear" className="text-slate-400 mt-0.5 shrink-0" />
                <span>
                  Near Al Mutlaq Hotel
                  <br />
                  King Abdulaziz Rd
                  <br />
                  Kingdom of Saudi Arabia
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-light">
            © 2024 LEGADEAL. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-light">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
