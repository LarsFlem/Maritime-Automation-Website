import React from "react";
import "./Services.css";

// Import images
import designImage from "./_Pictures/Design30X25.png";
import commissioningImage from "./_Pictures/Commisioning30X25.jpg";
import assistanceImage from "./_Pictures/Assistanse30X25.jpg";

const Services: React.FC = () => {
  return (
    <section id="services">
      <h2>Mine Tjenester</h2>
      <p>
        Jeg tilbyr konsulent- og engineeringtjenester innen elektro og
        automasjon, med spesialisering i design og implementering av systemer
        for bevegelig maskineri, alarmsystemer og generell automasjon. Med en
        solid bakgrunn innen mekatronikk og erfaring fra selskaper som Moreld
        Apply, Red Rock, HMH, Ocean Infinity Marine, Kongsberg Maritim / Rolls
        Royce Marine og Optimar Stette, kan jeg bidra til din bedrifts suksess
        med følgende:
      </p>
      <div className="service-grid">
        <div className="service-card">
          <img src={designImage} alt="Engineering" />
          <div className="service-card-content">
            <h3>Komplette Engineering-pakker</h3>
            <ul>
              <li>
                Design og implementering av automatiseringssystemer for
                bevegelig maskineri.
              </li>
              <li>Alarmsystemer og generell automasjon.</li>
              <li>
                Planlegging, design og gjennomføring av elektriske systemer i
                samsvar med IECEx- og ATEX-standarder.
              </li>
              <li>
                Programmering av PLC-er, spesielt TwinCAT for Beckhoff PLC-er.
              </li>
              <li>Konfigurasjon av HMI-løsninger basert på HTML/CSS/JS.</li>
              <li>
                Oppsett og vedlikehold av SQL-databaser for alarmsystemer.
              </li>
              <li>
                Koordinering med ulike disipliner for å sikre optimal ytelse og
                pålitelighet, med fokus på kostnadseffektivitet.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-card">
          <img src={commissioningImage} alt="Support" />
          <div className="service-card-content">
            <h3>Support og Kommisjoning</h3>
            <ul>
              <li>Igangsetting av automasjonsutstyr og maskineri.</li>
              <li>
                Feilsøking og teknisk støtte på elektrisk- og automasjonsutstyr.
              </li>
              <li>
                Nettverkskonfigurasjon for routere, access points og brannmurer.
              </li>
              <li>Oppsett av CCTV-systemer.</li>
              <li>Leveranse av detaljert as-built dokumentasjon.</li>
              <li>Fjernsupport for databaserte systemer.</li>
              <li>
                Teknisk opplæring av operatører i bruk av avanserte
                automasjonssystemer.
              </li>
              <li>Termografering av produkt</li>
              <li>
                Gjennomføring av IAT, FAT, HAT, eller SAT med klasse/kunde.
              </li>
              <li>
                Innehaver nødvendige sertifikat og attester for arbeid på sjøen
                og på rig.
              </li>
            </ul>
          </div>
        </div>

        <div className="service-card">
          <img src={assistanceImage} alt="Assistanse" />
          <div className="service-card-content">
            <h3>Prosjektsupportering og Assistanse</h3>
            <ul>
              <li>
                Støtte i prosjektledelse, inkludert estimering av tid og
                kostnader for tekniske oppgraderinger.
              </li>
              <li>
                Assistanse i håndtering av programvareoppdateringer og endringer
                - Software Change Management.
              </li>
              <li>Teknisk assistanse på pågående prosjekter.</li>
              <li>
                Gjennomgang av kontrollfilosofi og softwareimplementasjon.
              </li>
              <li>FMEA-assistanse (Failure Modes and Effects Analysis).</li>
              <li>
                Assistanse ved implementering av nye verktøy som AutoCAD, Vault,
                TwinCAT, etc.
              </li>
              <li>Kostnadskontroll på eksisterende løsninger.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
