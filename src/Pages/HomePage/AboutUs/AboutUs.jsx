import React from "react";
import NavBarHome from "../../../Component/NavBarHome/NavBarHome";
import "./AboutUs.css";
import aboutUsImage from "../../../Img/Classrom.png";

function AboutUs() {
  return (
    <div>
      <NavBarHome />
      <div className="container">
        <div className="flex justify-center">
          <img
            fluid
            src={aboutUsImage}
            width="auto"
            height="auto"
            alt="logo"
          />
        </div>
        <div className="bg-gray-500 text-white p-20">
          <h1>
            <div className="text-bold about">Learning Management System</div>
          </h1>
          <label className="h5 mb-4">Study & Monitoring System</label>
          <div className="text-bold">
          Selamat datang di LMS MAN 5 GARUT, tempat di mana pembelajaran bertemu dengan inovasi. Kami adalah tim yang berdedikasi, terdiri dari para pendidik, 
          pengembang, dan inovator yang berkomitmen untuk menyediakan pengalaman belajar yang menarik dan mudah diakses. Platform kami dirancang untuk memberdayakan 
          individu dan institusi dengan menyajikan konten pendidikan berkualitas tinggi melalui antarmuka yang intuitif dan ramah pengguna. Di LMS MAN 5 GARUT, kami 
          percaya bahwa pembelajaran harus dipersonalisasi, fleksibel, dan dapat diakses oleh siapa saja, kapan saja, dan di mana saja. Baik Anda seorang pelajar dan pendidik. 
          tujuan kami adalah meningkatkan perjalanan pendidikan Anda dengan menyediakan alat dan sumber daya yang Anda butuhkan untuk sukses.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
