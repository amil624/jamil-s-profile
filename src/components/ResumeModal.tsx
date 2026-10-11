import React from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import {
  profileData,
  careerHighlights,
  organizingExperience,
  educationList,
  honorsAndAwards,
  caseCompetitions,
  leadershipCertifications,
  skillCategories,
  academicReferences,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-auto border border-slate-300">
        
        {/* Floating Top Control Bar (Hidden during print) */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 print:hidden gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs sm:text-sm tracking-tight text-white">
              Official Curriculum Vitae
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              &bull; Md. Jamil Hosen Khandakar
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              id="resume-print-button"
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm min-h-[36px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
              <span className="sm:hidden">Print</span>
            </button>
            <button
              onClick={onClose}
              id="resume-modal-close"
              aria-label="Close CV Modal"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div id="printable-cv" className="p-4 sm:p-8 md:p-12 space-y-5 sm:space-y-6 text-slate-900 bg-white font-sans text-xs sm:text-[13px] leading-relaxed">
          
          {/* Header */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b-2 border-slate-800">
            <div className="space-y-1 sm:space-y-1.5">
              <h1 className="text-xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase">
                {profileData.name}
              </h1>
              <div className="text-xs text-slate-600 font-medium space-y-0.5">
                <div>Pirgachha, Rangpur, Bangladesh | {profileData.phone}</div>
                <div className="break-all sm:break-normal">Email: <span className="text-blue-700">{profileData.email}</span> | LinkedIn: <span className="text-blue-700">linkedin.com/in/jamil-khandakar</span></div>
              </div>
            </div>

            {/* Photo */}
            <div className="w-16 h-20 sm:w-24 sm:h-28 rounded border border-slate-300 overflow-hidden shrink-0 shadow-sm self-start sm:self-auto">
              <img
                src="/src/assets/images/jamil_portrait_1789908349117.jpg"
                alt="Md. Jamil Hosen Khandakar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-800 text-justify leading-normal">
              {profileData.summary}
            </p>
          </div>

          {/* LEADERSHIP & WORK EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              LEADERSHIP & WORK EXPERIENCE
            </h2>

            {/* VP RUBC */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Vice President</span>
                <span className="text-slate-600 font-normal">Apr 2026 – Present</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                Rajshahi University Business Club (RUBC)
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                <li><strong className="font-semibold">Human Resources & Strategic Operations:</strong> Oversee planning and human resource operations for 200+ members, optimizing delegation and leadership development pipelines.</li>
                <li><strong className="font-semibold">Capacity Building:</strong> Formulate and conduct skill-building workshops to enhance member capabilities in strategic planning, analytical thinking, and event operations.</li>
              </ul>
            </div>

            {/* Former Deputy Campus Director */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Former Deputy Campus Director</span>
                <span className="text-slate-600 font-normal">Sept 2025 – Feb 2026</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                HULT PRIZE at University of Rajshahi
              </div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                <li><strong className="font-semibold">Team Leadership & Delivery:</strong> Directed 50+ members across 3 specialized divisions (Graphics & Visuals, IT & Administration, Media & Documentation) to execute the campus-level flagship social enterprise competition.</li>
              </ul>

              {/* Umbrella Project Pathchinhno Box */}
              <div className="mt-2 p-3 border border-slate-400 rounded bg-slate-50 grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                <div className="font-bold text-slate-900 border-b sm:border-b-0 sm:border-r border-slate-300 pr-2">
                  Umbrella Project: Pathchinhno (পথ চিহ্ন)
                </div>
                <div>
                  <div className="font-semibold text-slate-800">1. The Green FootPrint</div>
                  <div className="text-slate-600">• 170+ tree plantation</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">2. Mission BluePulse</div>
                  <div className="text-slate-600">• Awareness 30+ households, Save Life Below Water - Padma River</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">3. Winter Heaven</div>
                  <div className="text-slate-600">• 05+ temporary houses for street animals</div>
                </div>
              </div>
            </div>
          </div>

          {/* ORGANIZING & PROJECT MANAGEMENT EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              ORGANIZING & PROJECT MANAGEMENT EXPERIENCE
            </h2>

            {/* CaseCation Season 2 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Head of Branding & Production</span>
                <span className="text-slate-600 font-normal">Aug 2025 – Oct 2025</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                CaseCation Season 2 (National Case Competition)
              </div>
              <ul className="list-disc list-inside text-slate-800 pl-1">
                <li><strong className="font-semibold">Strategic Campaign Direction:</strong> Led a 15+ member team in designing and deploying 450+ visual assets and 20+ nationwide promotional banners to maximize digital outreach.</li>
              </ul>
            </div>

            {/* UNRAVEL 5X */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Deputy Director of Branding & Promotion</span>
                <span className="text-slate-600 font-normal">Feb 2025</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                UNRAVEL 5X (Regional Case Competition)
              </div>
              <ul className="list-disc list-inside text-slate-800 pl-1">
                <li>Managed promotional design deliverables, successfully producing 150+ custom visual designs and 10+ promotional banners.</li>
              </ul>
            </div>

            {/* HULT PRIZE 2024-25 */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Chief of Administration</span>
                <span className="text-slate-600 font-normal">Nov 2024 – Feb 2025</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                HULT PRIZE 2024-25
              </div>
              <ul className="list-disc list-inside text-slate-800 pl-1">
                <li>Supervised administrative logistics, event scheduling, and operational resource coordination for seamless execution.</li>
              </ul>
            </div>

            {/* MUN */}
            <div className="space-y-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Deputy Director of Branding & Promotion</span>
                <span className="text-slate-600 font-normal">Dec 2024 – Feb 2025</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                Rajshahi Univ. MUN 2025 & North Bengal MUN 2025
              </div>
              <ul className="list-disc list-inside text-slate-800 pl-1">
                <li>Managed press relations, public outreach materials, and visual branding for two major diplomacy conferences.</li>
              </ul>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              EDUCATION
            </h2>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Bachelor of Public Administration</span>
                <span className="text-slate-600 font-normal">Nov 2022 – Present</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                University of Rajshahi, Bangladesh
              </div>
              <div className="text-slate-800 pl-1">
                • Currently studying 4th year 2nd semester (Cumulative CGPA: <strong className="font-bold">3.65 out of 4.00</strong>)
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <span>Higher Secondary Certificate (HSC) — Humanities</span>
                <span className="font-bold text-slate-900">GPA 5.00 / 5.00</span>
              </div>
              <div className="italic text-slate-700 font-medium">
                Pirgachha Govt. College, Rangpur
              </div>
            </div>
          </div>

          {/* HONORS & AWARDS */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              HONORS & AWARDS
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
              <li><strong className="font-semibold">Finalist:</strong> ImaGen Venture Youth Challenge 2024-25 (Mymensingh Boot-Camp)</li>
              <li><strong className="font-semibold">Special Mention II:</strong> Metropolitan Univ. National MUN 2025</li>
              <li><strong className="font-semibold">Champion:</strong> Article Writing Segment, Ignite 3.0 (RUBC)</li>
              <li><strong className="font-semibold">Runners-Up:</strong> Inter Department Basketball Tournament (RU)</li>
              <li><strong className="font-semibold">Best Talented Face:</strong> Pirgachha Upazila Quiz Competition</li>
            </ul>
          </div>

          {/* COMPETITIONS & CERTIFICATIONS */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              COMPETITIONS & CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-800 pl-1">
              <li>
                <strong className="font-semibold">Case & Ideation Competitions:</strong> Semi-finalist at CAPITALIZER'25, NEGOCIO 2.0, CaseSprint, CaseSpecs 3.0 | Participated at Breaking Brand 2025, ProMAESTROS.
              </li>
              <li>
                <strong className="font-semibold">Leadership Certifications:</strong> Aspire Leadership Program (Aspire Institute) | Bystander Youth Leadership Training (Rupantar) | Event Planning (BYLC).
              </li>
            </ul>
          </div>

          {/* SKILLS */}
          <div className="space-y-1.5">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              SKILLS
            </h2>
            <div className="space-y-1 text-slate-800 pl-1">
              <div>• <strong className="font-semibold">Soft Skills:</strong> Communication, Leadership, Analytical & Critical Thinking, Public Administration, Strategic Operations.</div>
              <div>• <strong className="font-semibold">Hard Skills:</strong> Adobe Illustrator, Photoshop, Canva, CapCut, MS PowerPoint, Event Management, Digital Branding.</div>
            </div>
          </div>

          {/* ACADEMIC REFERENCES */}
          <div className="space-y-2 pt-2">
            <h2 className="text-sm font-bold tracking-wider uppercase text-blue-900 border-b border-slate-300 pb-0.5">
              ACADEMIC REFERENCES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-1">
              <div>
                <div className="font-bold text-slate-900">Dr. Mst. Marzina Begum</div>
                <div className="text-slate-700">Chairman, Department of Public Administration</div>
                <div className="text-slate-600">University of Rajshahi</div>
                <div className="text-blue-700">Email: marzinabegum80@gmail.com</div>
              </div>
              <div>
                <div className="font-bold text-slate-900">Dr. Md. Nurul Momen</div>
                <div className="text-slate-700">Professor, Department of Public Administration</div>
                <div className="text-slate-600">University of Rajshahi</div>
                <div className="text-blue-700">Email: nurulmomen78@gmail.com</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
