import React from "react";
import { MessageCircle, Briefcase, Award, CheckCircle2, Anchor } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

export default function About() {
  const whatsappUrl = "https://wa.me/918606427768";

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white py-24 px-6 overflow-hidden md:px-16">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium uppercase bg-cyan-500/20 border border-cyan-400/30 rounded-full">
            Marine Coaching Institute
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Sailmate <span className="text-cyan-400">Brilliant Brains</span>
          </h1>

          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
            Empowering future marine professionals with expert sponsorship coaching 
            and technical training for successful careers at sea.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={whatsappUrl}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold shadow-lg"
            >
              <MessageCircle size={20} /> Enroll Now
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 md:px-16">
        
        {/* ABOUT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-28">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-cyan-500">Sailmate Institute</span>?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Sailmate Brilliant Brains Institute is dedicated to helping aspiring marine 
              engineers achieve their career goals through focused sponsorship coaching 
              and strong technical training.
              
              We provide structured preparation, expert mentorship, and real guidance 
              to help students confidently secure placements in leading shipping companies.
            </p>

            <div className="space-y-4">
              {[
                "GME & ETO Sponsorship Coaching",
                "Marine Industry Expert Mentors",
                "Interview Preparation & Guidance",
                "Strong Technical Foundations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-medium text-slate-700">
                  <CheckCircle2 className="text-cyan-500" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* STATS CARD */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-6 bg-cyan-50 rounded-2xl text-center">
                <Anchor className="mx-auto mb-2 text-cyan-500" />
                <div className="font-bold text-2xl">Marine</div>
                <div className="text-xs text-slate-500">Core Focus</div>
              </div>

              <div className="p-6 bg-blue-50 rounded-2xl text-center">
                <Briefcase className="mx-auto mb-2 text-blue-600" />
                <div className="font-bold text-2xl">100%</div>
                <div className="text-xs text-slate-500">Career Oriented</div>
              </div>

              <div className="p-6 bg-green-50 rounded-2xl text-center col-span-2">
                <Award className="mx-auto mb-2 text-green-600" />
                <div className="font-bold text-xl italic">
                  "Start Strong. Sail Ahead."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMS */}
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Training Programs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {[
            {
              title: "GME Sponsorship Coaching",
              desc: "Preparation for Graduate Marine Engineering sponsorship",
              list: ["Company Exams", "Interview Prep", "Mentorship"]
            },
            {
              title: "ETO Sponsorship Coaching",
              desc: "Electro Technical Officer career preparation",
              list: ["Electrical Concepts", "Technical Training", "Interview Support"]
            },
            {
              title: "Electrical Line Diagram",
              desc: "Essential skill for marine engineers",
              list: ["Diagram Reading", "Circuit Understanding", "Practical Concepts"]
            }
          ].map((course, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-cyan-500 hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{course.desc}</p>

              <ul className="space-y-2">
                {course.list.map((li, i) => (
                  <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-28 pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <h4 className="text-2xl font-bold">Sailmate Brilliant Brains Institute</h4>
            <p className="text-slate-500">Your Gateway to a Marine Career</p>
          </div>

          <a
            href={whatsappUrl}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full"
          >
            <MdWhatsapp size={20} /> Contact Now
          </a>
        </div>

      </div>
    </div>
  );
}