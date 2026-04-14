import React from 'react';
import { TranslationStrings } from '../types';

interface ContactProps {
  t: TranslationStrings;
}

export const ContactSection: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <div>
            <h2 className="contact-headline">
              {t.contact.title}
            </h2>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <a href="mailto:guipires1912@hotmail.com">guipires1912@hotmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <span>+55 (21) 99699-3226</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">◈</div>
                <a
                  href="https://github.com/GuilhermePires1912"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/GuilhermePires1912
                </a>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="mailto:guipires1912@hotmail.com"
              className="btn btn-primary"
            >
              ✉ Email
            </a>
            <a
              href="https://wa.me/5521996993226"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <div className="container">
          © {new Date().getFullYear()} Guilherme Pires · Publicidade & Dev · Rio de Janeiro
        </div>
      </div>
    </section>
  );
};
