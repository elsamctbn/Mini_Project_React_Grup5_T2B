function Halimah() {
  return (
    <div className="bg-blue-200 min-h-screen">

      <div className="w-full h-[2px] bg-gray-800"></div>
      <div className="flex justify-center gap-10 py-4 text-black-700 font-medium">
        <a href="#home" className="cursor-pointer hover:text-purple-500">Home</a>
        <a href="#profil" className="cursor-pointer hover:text-purple-500">Profil</a>
        <a href="#pendidikanpekerjaan" className="cursor-pointer hover:text-purple-500">Pendidikan & Pekerjaan</a>
        <a href="#kontak" className="cursor-pointer hover:text-purple-500">Kontak</a>
      </div>
      <div className="w-full h-[2px] bg-gray-800"></div>

      <div id="home" className="mt-20 text-center">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10 px-6 pb-6 pt-10">
          <p className="text-4xl mb-2" style={{ fontFamily: 'Poppins' }}>Hello!!</p>
          <p className="text-4xl font-bold">I'm Halimah</p>
          <p className="text-xl mt-2">this is my first website :)</p>
        </div>
      </div>

      <div id="profil" className="mt-40 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden">

            <div 
              className="h-32 bg-cover bg-center"
              style={{ backgroundImage: `url(/bagroundWebsite.avif)` }}
            ></div>

            <div className="flex justify-start pl-6 -mt-16">
              <img
                src="/halimah.jpeg"
                alt="Halimah"
                className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <div className="px-6 pb-6 mt-2">
              <p className="text-2xl font-bold">Halimatussadiyah</p>
              <p className="text-gray-500">Kelas T2B</p>
              <p className="text-gray-500">Mahasiswa Vokasi, Teknologi Informasi</p>
              <p className="text-gray-400 text-sm">Tangerang, Banten, Indonesia</p>

              <div className="flex gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Koneksi</button>
                <button className="border px-4 py-1 rounded-full">Pesan</button>
              </div>

              <div className="w-full h-[2px] bg-gray-300 mt-3"></div>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <p>👥 500 pengunjung profil</p>
                <p>📊 300 tayangan profil</p>
              </div>
            </div>

          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg">
            <p className="font-bold mb-2">Orang Yang Mungkin Anda Kenal</p>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Elsa Maria Condoleza Tambunan</p>
                <p className="text-xs text-gray-500">Mahasiswa Vokasi, Teknologi Informasi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm font-medium">Luthfia Ifadah</p>
                <p className="text-xs text-gray-500">Mahasiswa Vokasi, Teknologi Informasi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <p className="text-xl font-bold mb-2">Tentang Saya</p>
            <p className="text-gray-500 mt-3">Saya adalah orang yang mampu bertanggung jawab, disiplin dalam menjalankan suatu aturan dengan baik, dan orang yang ambisius.</p>
            <p className="text-gray-500 mt-3">Kelemahan yang saya miliki adalah, saya kurang mampu untuk bisa mengontrol diri saya ketika tidak mencapai target dengan baik, merasa takut untuk mencoba hal, dan terlalu banyak mengambil pertimbangan untuk keputusan suatu hal.</p>      <p className="text-gray-500 mt-3">Kesempatan yang saya miliki saat ini adalah fasilitas pendidikan yang sangat menunjang kebutuhan saya dan support lingkungan sekitar yang positif </p>
            <p className="text-gray-500 mt-3">Dari kelemahan yang saya miliki, saya mengatasi nya dengan cara mencoba hal-hal positif yang belum pernah saya coba. Baik berhubungan dengan bidang akademik ataupun non akademik. Seperti mengikuti seminar yang sejalan dengan prodi, berencana untuk mengikuti penelitian dosen dengan bidang yang saya minati, mengikuti organisasi dengan divisi yang belum pernah saya coba, dan inign  mencoba beasiswa-beasiswa. </p>
        </div>
      </div>

      <div id="pendidikanpekerjaan" className="mt-40 text-center">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10 px-6 pb-6 pt-10">
          <h1 className="text-3xl font-bold">Pendidikan & Pekerjaan</h1>
          <p className="mt-4">coming soon..</p>
        </div>
      </div>

      <div id="kontak" className="mt-40 text-center">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10 px-6 pb-6 pt-10">
          <h1 className="text-3xl font-bold">Kontak</h1>
          <p className="mt-4">coming soon..</p>
        </div>
      </div>

    </div>
  );
}

export default Halimah;
