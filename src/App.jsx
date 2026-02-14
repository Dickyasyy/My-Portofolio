import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiLaravel,
  SiJavascript,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { SiLinkedin, SiTiktok, SiInstagram, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

// IMPORT ASET
import { GlobalImages } from "./assets";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socials = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/feed/",
      color: "hover:bg-[#0077B5]",
      shadow: "hover:shadow-[#0077B5]/40",
      text: "Professional Profile",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://instagram.com/dickyasyy",
      color:
        "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
      shadow: "hover:shadow-[#ee2a7b]/40",
      text: "Daily Activity",
    },
    {
      name: "TikTok",
      icon: <SiTiktok />,
      link: "https://tiktok.com/@dickyasy",
      color: "hover:bg-[#000000]",
      shadow: "hover:shadow-gray-500/40",
      text: "Creative Content",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp />,
      link: "https://wa.me/6289636758016",
      color: "hover:bg-[#25D366]",
      shadow: "hover:shadow-[#25D366]/40",
      text: "Fast Response",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      {/* --- BACKGROUND ANIMASI GLOBAL --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.img
          src={GlobalImages.AnimProject}
          alt="Global Background"
          className="w-full h-full object-cover opacity-[0.18]"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Overlay halus agar konten tetap tajam */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {" "}
              {/* Tinggi sedikit ditambah agar lebih lega */}
              <div className="flex-shrink-0">
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent"
                >
                  Portfolio
                </motion.a>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                {" "}
                {/* space-x dikurangi karena kita pakai padding di link */}
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-5 py-2 rounded-xl text-gray-600 font-bold transition-all duration-300 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-green-200"
                  >
                    {item}
                  </a>
                ))}
                {/* Social Icons with Hover Circle */}
                <div className="flex items-center space-x-2 ml-6 border-l pl-6 border-gray-200">
                  <a
                    href="https://github.com/Dickyasyy"
                    className="p-2 rounded-full text-gray-400 hover:bg-green-100 hover:text-green-600 transition-all duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    className="p-2 rounded-full text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
              {/* Mobile Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu (Optional Adjustment) */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-2"
            >
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl font-bold text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-32 px-4 md:px-8 lg:px-16 py-20 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* --- ANIMASI SLIDE TURUN UNTUK NAMA --- */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider">
                    Hallo, Saya
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-2 text-gray-800 leading-tight">
                    Muh Nur Assidiq Syafarrudin
                  </h1>
                </motion.div>

                {/* --- ANIMASI MENGETIK --- */}
                <div className="inline-block relative mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                    className="overflow-hidden whitespace-nowrap border-r-4 border-yellow-400"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                      Full Stack Developer
                    </h2>
                  </motion.div>
                </div>

                <p className="text-gray-600 mb-10 text-lg max-w-lg leading-relaxed">
                  Junior Web Developer berfokus pada ekosistem{" "}
                  <span className="text-green-600 font-bold">
                    React & Laravel
                  </span>
                  . Senang membangun solusi digital yang efisien.
                </p>

                {/* --- BUTTONS --- */}
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="#projects"
                    className="px-8 py-3 rounded-2xl border-2 border-green-600 bg-white text-green-600 font-bold shadow-lg shadow-green-100 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects
                  </a>

                  <div className="flex items-center relative">
                    <a
                      href="/CV_Muh_Nur_Assidiq_Syafarrudin.pdf"
                      download="CV Muh Nur Assidiq_Syafarrudin.pdf"
                      className="px-8 py-3 rounded-2xl border-2 border-green-600 bg-white text-green-600 font-bold shadow-lg shadow-green-100 hover:bg-gradient-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105"
                    >
                      Download CV
                    </a>
                    <motion.img
                      src={GlobalImages.AnimClick}
                      className="w-16 h-16 -ml-4 pointer-events-none relative z-20"
                      animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* --- BAGIAN FOTO DENGAN HOVER EFFECT --- */}
              <div className="relative flex justify-center">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      rotateX: 5,
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-gray-100 cursor-pointer"
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src={GlobalImages.Profil}
                      alt="Profil"
                      className="w-full h-full object-cover object-[50%_5%] scale-110"
                    />
                  </motion.div>

                  <motion.img
                    src={GlobalImages.AnimFly}
                    className="absolute -top-10 -right-10 w-24 h-24 z-20"
                    animate={{ y: [0, -15, 0], rotate: [10, -5, 10] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="px-4 md:px-8 lg:px-16 py-24 bg-transparent relative overflow-hidden"
        >
          {/* --- ANIMASI GAMBAR TAMBAHAN --- */}
          {/* Gambar 1: Kiri Atas - Posisi disesuaikan agar tidak terlalu bawah */}
          <motion.img
            src={GlobalImages.AnimAbout1}
            alt="deco-1"
            className="absolute top-24 -left-5 w-32 h-32 opacity-80 z-0 hidden lg:block"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 8, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 relative">
              {/* Gambar 2: Kanan Depan (Z-index lebih tinggi dari card) */}
              <motion.img
                src={GlobalImages.AnimAbout2}
                alt="deco-2"
                className="absolute -bottom-16 -right-10 w-48 h-48 z-30 pointer-events-none hidden lg:block"
                animate={{
                  y: [0, 25, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CARD 1: BACKGROUND */}
              <motion.div
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="group p-10 rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-2xl border border-white relative overflow-hidden z-10"
              >
                <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-green-500 to-yellow-400 group-hover:w-4 transition-all"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-green-100 rounded-2xl text-green-600">
                    {/* Ikon User yang Pasti Muncul (Inline SVG) */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Background
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Saya Junior Web Developer yang berfokus pada tampilan depan
                  web menggunakan
                  <span className="font-bold text-green-600 ml-1">
                    React.js
                  </span>
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Serta membangun API yang kuat dan aman, menggunakan sistem
                  backend
                  <span className="font-bold text-yellow-600 ml-1">
                    Laravel
                  </span>
                  .
                </p>
              </motion.div>

              {/* CARD 2: TECH STACK */}
              <motion.div
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-10 rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-2xl border border-white z-10"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="p-4 bg-yellow-100 rounded-2xl text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Tech Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      name: "Javascript",
                      icon: <SiJavascript className="text-yellow-400" />,
                    },
                    {
                      name: "PHP",
                      icon: <SiPhp className="text-indigo-500" />,
                    },
                    {
                      name: "React",
                      icon: <SiReact className="text-blue-500" />,
                    },
                    {
                      name: "Laravel",
                      icon: <SiLaravel className="text-red-600" />,
                    },
                    {
                      name: "Tailwind",
                      icon: <SiTailwindcss className="text-teal-400" />,
                    },
                    {
                      name: "Bootstrap",
                      icon: <SiBootstrap className="text-purple-600" />,
                    },
                    {
                      name: "SQL",
                      icon: <SiMysql className="text-blue-700" />,
                    },
                    {
                      name: "Github",
                      icon: <SiGithub className="text-gray-800" />,
                    },
                  ].map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl font-bold text-gray-700 border border-gray-100 shadow-sm"
                    >
                      <span className="text-xl">{skill.icon}</span> {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section
          id="projects"
          className="px-4 md:px-8 lg:px-16 py-20 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -10 }}
                  className="bg-white/90 backdrop-blur-md p-6 rounded-[2.5rem] shadow-xl border border-gray-100 group"
                >
                  <div className="h-48 bg-gradient-to-br from-green-50 to-yellow-50 rounded-[2rem] mb-6 flex items-center justify-center text-5xl">
                    🛍️
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                    E-commerce App
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Membangun platform belanja modern dengan integrasi payment
                    gateway.
                  </p>
                  <div className="flex justify-between items-center border-t pt-4">
                    <button className="text-green-600 font-bold text-sm flex items-center gap-2">
                      <FiExternalLink /> Demo
                    </button>
                    <button className="text-gray-400 font-bold text-sm flex items-center gap-2">
                      <FiGithub /> Code
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
        <section
          id="projects"
          className="px-4 md:px-8 lg:px-16 py-20 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              My Projects
            </h2>

            <div className="flex justify-center">
              <motion.div
                whileHover={{ y: -10 }}
                className="w-full max-w-sm bg-white/90 backdrop-blur-md p-6 rounded-[2.5rem] shadow-xl border border-gray-100 group"
              >
                {/* Kontainer Gambar Proyek */}
                <div className="h-48 overflow-hidden rounded-[2rem] mb-6 flex items-center justify-center bg-stone-100">
                  <img
                    src={GlobalImages.weddingProject}
                    alt="Wedding Invitation Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  Wedding Invitation
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Aplikasi undangan pernikahan digital eksklusif dengan fitur
                  musik, countdown otomatis, dan integrasi RSVP via WhatsApp.
                </p>

                <div className="flex justify-between items-center border-t pt-4">
                  {/* Link Demo - Ganti button jadi tag <a> */}
                  <a
                    href="https://undangan-pernikahan-eight-xi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-bold text-sm flex items-center gap-2 hover:underline"
                  >
                    <FiExternalLink /> Demo
                  </a>

                  {/* Link Code - Lakukan hal yang sama untuk GitHub jika ada linknya */}
                  <a
                    href="https://github.com/Dickyasyy/Undangan-Pernikahan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 font-bold text-sm flex items-center gap-2 hover:text-stone-600"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="px-4 md:px-8 lg:px-16 py-24 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-4"
              >
                Let's Connect
              </motion.h2>
              <p className="text-gray-500 text-lg">
                Temukan saya di platform favorit Anda
              </p>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socials.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -15,
                    transition: { duration: 0.2 },
                  }}
                  className={`group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl transition-all duration-300 flex flex-col items-center text-center ${social.color} ${social.shadow}`}
                >
                  {/* Icon Container */}
                  <div className="mb-6 p-5 rounded-2xl bg-gray-50 text-3xl group-hover:bg-white/20 group-hover:text-white group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-500">
                    {social.icon}
                  </div>

                  {/* Text Info */}
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-white mb-2 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors font-medium">
                    {social.text}
                  </p>

                  {/* Decorative Circle di Background Card saat Hover */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity"></div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 overflow-hidden">
          {/* Layer Background Berwarna */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-yellow-50 opacity-70"></div>

          {/* Garis Border Gradien */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            {/* Nama dengan Efek Hover Warna */}
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="font-extrabold text-xl bg-gradient-to-r from-green-700 to-yellow-600 bg-clip-text text-transparent inline-block cursor-default"
            >
              &copy; {new Date().getFullYear()} Muh Nur Assidiq Syafarrudin
            </motion.p>

            {/* Deskripsi dengan Ikon Berwarna */}
            <div className="flex justify-center items-center gap-2 mt-4">
              <p className="text-gray-500 text-sm font-semibold tracking-wide">
                Built with
              </p>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-red-500 text-lg"
              >
                ❤️
              </motion.span>
              <p className="text-gray-500 text-sm font-semibold tracking-wide">
                React & <span className="text-teal-500">Tailwind</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
