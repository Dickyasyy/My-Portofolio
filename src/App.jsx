import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaRegCreditCard,
} from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiMysql,
  SiAndroid,
} from "react-icons/si";
import { SiLinkedin, SiTiktok, SiInstagram, SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

// IMPORT ASET
import { GlobalImages } from "./assets";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSocial, setActiveSocial] = useState(null);

  const handleDownloadCV = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Masukkan Kode Akses",
      input: "text",
      inputPlaceholder: "Ketik kode di sini...",
      showCancelButton: true,
      confirmButtonText: "Download",
      confirmButtonColor: "#059669", // Warna hijau
      cancelButtonText: "Batal",
    }).then((result) => {
      const KODE_RAHASIA = "Riferawati Ainun";

      if (result.isConfirmed) {
        if (result.value === KODE_RAHASIA) {
          // Jika Benar
          const link = document.createElement("a");
          link.href = "/cv-secure-9525123-req-access.pdf";
          link.download = "CV_Muh_Nur_Assidiq_Syafarrudin.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          Swal.fire({
            icon: "success",
            title: "Berhasil!",
            text: "Download sedang berjalan...",
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          // Jika Salah - Arahkan ke IG
          Swal.fire({
            icon: "error",
            title: "Kode Salah 🤪",
            html: "Silakan DM saya di Instagram untuk mendapatkan kode akses.",
            footer:
              '<a href="https://instagram.com/dickyasyy" target="_blank" style="color: #E1306C; font-weight: bold;">Klik di sini untuk ke IG: @dickyasyy</a>',
            confirmButtonText: "Tutup",
            confirmButtonColor: "#d33",
          });
        }
      }
    });
  };

  const socials = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/feed/",
      // Gunakan gradient dengan dua warna yang sama agar terlihat solid tapi tetap terbaca sebagai gradient
      color:
        "hover:bg-linear-to-tr hover:from-[#0077B5] hover:to-[#0077B5] active:bg-linear-to-tr active:from-[#0077B5] active:to-[#0077B5]",
      shadow: "hover:shadow-[#0077B5]/40 active:shadow-[#0077B5]/40",
      text: "Professional Profile",
    },
    {
      name: "Instagram",
      icon: <SiInstagram />,
      link: "https://instagram.com/dickyasyy",
      color:
        "hover:bg-linear-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] active:bg-linear-to-tr active:from-[#f9ce34] active:via-[#ee2a7b] active:to-[#6228d7]",
      shadow: "hover:shadow-[#ee2a7b]/40 active:shadow-[#ee2a7b]/40",
      text: "Daily Activity",
    },
    {
      name: "TikTok",
      icon: <SiTiktok />,
      link: "https://tiktok.com/@dickyasy",
      color:
        "hover:bg-linear-to-tr hover:from-black hover:to-black active:bg-linear-to-tr active:from-black active:to-black",
      shadow: "hover:shadow-gray-500/40 active:shadow-gray-500/40",
      text: "Creative Content",
    },
    {
      name: "WhatsApp",
      icon: <SiWhatsapp />,
      link: "https://wa.me/6289636758016",
      color:
        "hover:bg-linear-to-tr hover:from-[#25D366] hover:to-[#25D366] active:bg-linear-to-tr active:from-[#25D366] active:to-[#25D366]",
      shadow: "hover:shadow-[#25D366]/40 active:shadow-[#25D366]/40",
      text: "Fast Response",
    },
  ];

  const projects = [
    {
      title: "Wedding Invitation",
      description:
        "Aplikasi undangan pernikahan digital eksklusif dengan fitur musik, countdown otomatis, dan integrasi RSVP via WhatsApp.",
      image: GlobalImages.weddingProject,
      demoLink: "https://undangan-pernikahan-eight-xi.vercel.app/",
      codeLink: "https://github.com/Dickyasyy/Undangan-Pernikahan",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
      emoji: "💍",
    },
    {
      title: "Web Servis Dan Instalasi",
      description:
        "Web jasa servis printer dan instalasi windows cepat & murah meriah",
      image: GlobalImages.servisProject,
      demoLink: "https://servis-laptop-frontend.vercel.app/",
      codeLink: "https://github.com/Dickyasyy/servis-laptop-frontend",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
        {
          name: "Midtrans",
          icon: <FaRegCreditCard className="text-blue-800" />,
        },
      ],
      emoji: "🛍️",
    },
    {
      title: "Aplikasi Panduan Belajar Investasi",
      description:
        "Aplikasi berbasis android untuk belajar investasi menjadi lebih mudah yang bisa di download",
      image: GlobalImages.InvestProject,
      demoLink: "https://expo.dev/artifacts/eas/jwLCeGr23d2FDPYnX36xS2.apk",
      codeLink: "https://github.com/Dickyasyy/Panduan-Investasi",
      isDownload: true,
      tech: [
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "Expo",
          icon: <SiAndroid className="text-green-500" />,
        },
      ],
      emoji: "📱",
    },
  ];

  const StarSparkles = () => {
    // Jumlah 100 agar lebih ramai dan terlihat jelas
    const stars = Array.from({ length: 30 });

    return (
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {stars.map((_, i) => {
          const size = Math.random() * 5 + 2;
          const isGreen = Math.random() > 0.5;

          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                opacity: 0,
                x: Math.random() * 100 + "vw",
                y: Math.random() * 100 + "vh",
              }}
              animate={{
                opacity: [0, 1, 0.5, 1, 0], // Berkedip lebih tajam
                scale: [0, 1, 1.2, 1, 0],
                rotate: [0, 90, 180], // Sedikit rotasi agar dinamis
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
              style={{
                width: size + "px",
                height: size + "px",
              }}
            >
              {/* Logika Warna: Hijau atau Kuning */}
              <div
                className={`w-full h-full rounded-full blur-[0.3px] 
                  ${
                    isGreen
                      ? "bg-green-500 shadow-[0_0_12px_4px_rgba(34,197,94,0.8)]"
                      : "bg-yellow-400 shadow-[0_0_12px_4px_rgba(250,204,21,0.8)]"
                  }`}
              />

              {/* Inti Cahaya Putih (Agar terlihat seperti berlian/bintang asli) */}
              <div className="absolute inset-[20%] bg-white rounded-full opacity-80" />
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden">
      <StarSparkles />
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
        <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0">
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl font-extrabold bg-linear-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent"
                >
                  Portfolio
                </motion.a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-2">
                {["Home", "About", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-5 py-2 rounded-xl text-gray-600 font-bold transition-all duration-300 
            /* Hover Desktop */
            hover:bg-linear-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white hover:shadow-lg hover:shadow-green-200
            /* Active/Click State */
            active:bg-linear-to-r active:from-green-600 active:to-yellow-500 active:text-white"
                  >
                    {item}
                  </a>
                ))}

                {/* Social Icons */}
                <div className="flex items-center space-x-2 ml-6 border-l pl-6 border-gray-200">
                  <a
                    href="https://github.com/Dickyasyy"
                    className="p-2 rounded-full text-gray-400 hover:bg-green-100 hover:text-green-600 active:bg-green-600 active:text-white transition-all duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    className="p-2 rounded-full text-gray-400 hover:bg-blue-100 hover:text-blue-600 active:bg-blue-600 active:text-white transition-all duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Mobile Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 active:bg-gray-200 transition-colors"
                >
                  {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Area */}
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
                  onClick={() => setIsMenuOpen(false)} // Tutup menu saat link diklik
                  className="px-5 py-3 rounded-xl text-gray-600 font-bold block transition-all duration-300 
          /* Efek saat ditekan di HP */
          active:bg-linear-to-r active:from-green-600 active:to-yellow-500 active:text-white"
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
                  {/* Tombol View Projects */}
                  <motion.a
                    href="#projects"
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-2xl border-2 border-green-600 bg-white text-green-600 font-bold shadow-lg 
    /* Desktop Hover */
    md:hover:bg-linear-to-r md:hover:from-green-600 md:hover:to-yellow-500 md:hover:text-white md:hover:border-transparent
    /* Mobile Active/Click - FULL GRADIENT */
    active:bg-linear-to-r active:from-green-600 active:to-yellow-500 active:text-white active:border-transparent
    transition-all duration-300"
                  >
                    View Projects
                  </motion.a>

                  {/* Tombol Download CV */}
                  <div className="flex items-center relative">
                    <motion.a
                      href="#"
                      onClick={handleDownloadCV}
                      whileTap={{ scale: 0.95 }} // Tambahkan feedback tap agar konsisten
                      className="px-8 py-3 rounded-2xl border-2 border-green-600 bg-white text-green-600 font-bold shadow-lg shadow-green-100 
      /* Desktop Hover */
      hover:bg-linear-to-r hover:from-green-600 hover:to-yellow-500 hover:text-white hover:border-transparent hover:scale-105
      /* Mobile Active/Click - FULL GRADIENT */
      active:bg-linear-to-r active:from-green-600 active:to-yellow-500 active:text-white active:border-transparent
      transition-all duration-300 cursor-pointer"
                    >
                      Download CV
                    </motion.a>

                    {/* Animasi Klik */}
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
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 relative">
              {/* --- CARD 1: BACKGROUND --- */}
              <motion.div
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group p-10 rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-2xl border border-white relative z-10"
              >
                {/* ANIMASI 1: Sekarang di dalam Card 1 (Kiri Atas Card) */}
                <motion.img
                  src={GlobalImages.AnimAbout1}
                  alt="deco-1"
                  className="absolute -top-10 -left-10 w-24 h-24 md:w-32 md:h-32 z-20 pointer-events-none"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-green-500 to-yellow-400 group-hover:w-4 transition-all rounded-l-[3rem]"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-green-100 rounded-2xl text-green-600">
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

              {/* --- CARD 2: TECH STACK --- */}
              <motion.div
                whileHover={{ y: -15 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[3rem] bg-white/80 backdrop-blur-xl shadow-2xl border border-white relative z-10"
              >
                {/* ANIMASI 2: Menempel di Card 2 (Kanan Bawah) */}
                <motion.img
                  src={GlobalImages.AnimAbout2}
                  alt="deco-2"
                  className="absolute -bottom-12 -right-10 w-32 h-32 md:w-44 md:h-44 z-30 pointer-events-none"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

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
                      name: "TypeScript",
                      icon: <SiTypescript className="text-blue-600" />,
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
                      whileTap={{ scale: 0.95 }} // Tambahan agar saat di-klik/sentuh di HP ada feedback
                      className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl font-bold text-gray-700 border border-gray-100 shadow-sm cursor-pointer touch-none"
                    >
                      <span className="text-xl">{skill.icon}</span> {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Session */}
        <section
          id="projects"
          className="px-4 md:px-8 lg:px-16 py-20 bg-transparent"
        >
          <div className="max-w-7xl mx-auto">
            {/* Judul: Kita beri z-20 agar di atas kartu, dan pb-4 agar gradientnya tidak terpotong */}
            <div className="relative z-20">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold mb-12 md:mb-16 text-center bg-linear-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent pb-4"
              >
                My Projects
              </motion.h2>
            </div>

            {/* Grid: Beri z-10 agar berada di bawah judul secara hierarki jika terjadi tumpang tindih */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto relative z-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-white/50 group flex flex-col h-full hover:border-green-200 transition-all duration-500"
                >
                  {/* Konten Card (Image, Title, etc.) tetap sama */}
                  <div className="relative h-60 overflow-hidden rounded-[2.5rem] mb-8 bg-gray-100 border border-gray-100 shadow-inner">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-7xl">{project.emoji}</span>
                      </div>
                    )}
                  </div>

                  <h3
                    className="text-2xl font-bold mb-4 text-gray-800 transition-all duration-300
            group-hover:text-green-600 
            group-active:text-transparent"
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-xl font-bold text-[10px] uppercase tracking-wider text-gray-600 border border-gray-100 shadow-sm"
                      >
                        <span className="text-sm">{skill.icon}</span>
                        {skill.name}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-linear-to-r from-green-600 to-green-500 text-white rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-200"
                      {...(project.isDownload ? { download: "" } : {})}
                    >
                      {project.isDownload ? "Download APK" : "Live Demo"}
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      className="text-gray-400 font-bold text-sm flex items-center gap-2 hover:text-gray-900"
                    >
                      <FiGithub size={20} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
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
                /* Update: bg-linear-to-r (Standar v4) */
                className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent mb-4"
              >
                Let's Connect
              </motion.h2>
              <p className="text-gray-500 text-lg">
                Temukan saya di platform favorit Anda
              </p>
            </div>

            {/* Social Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socials.map((social, index) => {
                // Logic Gradient Dinamis
                const activeGradient =
                  social.name === "LinkedIn"
                    ? "linear-gradient(to top right, #0077B5, #0077B5)"
                    : social.name === "WhatsApp"
                    ? "linear-gradient(to top right, #25D366, #25D366)"
                    : social.name === "TikTok"
                    ? "linear-gradient(to top right, #000, #000)"
                    : "linear-gradient(to top right, #f9ce34, #ee2a7b, #6228d7)"; // Instagram

                const shadowColor =
                  social.name === "LinkedIn"
                    ? "#0077B5"
                    : social.name === "WhatsApp"
                    ? "#25D366"
                    : social.name === "TikTok"
                    ? "#666"
                    : "#ee2a7b";

                const isActive = activeSocial === index;

                return (
                  <motion.a
                    key={`social-card-${social.name}-${index}`}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onTouchStart={() => setActiveSocial(index)}
                    onTouchEnd={() => setActiveSocial(null)}
                    onMouseDown={() => setActiveSocial(index)}
                    onMouseUp={() => setActiveSocial(null)}
                    style={{
                      // GUNAKAN backgroundImage agar sama dengan Instagram
                      backgroundImage: isActive ? activeGradient : "none",
                      backgroundColor: isActive ? "transparent" : "white",
                      boxShadow: isActive
                        ? `0 20px 25px -5px ${shadowColor}66`
                        : "",
                      transition: "all 0.2s ease",
                    }}
                    className={`relative p-8 rounded-[2.5rem] border border-gray-100 shadow-xl flex flex-col items-center text-center z-50 ${social.color} ${social.shadow}`}
                  >
                    {/* Icon Container */}
                    <div
                      style={{
                        backgroundColor: isActive
                          ? "rgba(255,255,255,0.2)"
                          : "",
                        color: isActive ? "white" : "",
                      }}
                      className="mb-6 p-5 rounded-2xl bg-gray-50 text-3xl transition-all duration-300"
                    >
                      {social.icon}
                    </div>

                    {/* Text Title */}
                    <h3
                      style={{ color: isActive ? "white" : "" }}
                      className="text-xl font-bold text-gray-800 transition-colors duration-300"
                    >
                      {social.name}
                    </h3>

                    {/* Text Description */}
                    <p
                      style={{ color: isActive ? "rgba(255,255,255,0.8)" : "" }}
                      className="text-gray-500 text-sm transition-colors duration-300"
                    >
                      {social.text}
                    </p>
                  </motion.a>
                );
              })}
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
