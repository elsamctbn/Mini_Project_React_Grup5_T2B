function Fia() {
return ( <div className="bg-gray-100 min-h-screen">


  <div className="bg-white shadow p-3 flex justify-between items-center px-6">
    <h1 className="font-bold text-blue-600 text-xl">LinkedIn</h1>
    <input 
      type="text" 
      placeholder="Search..." 
      className="border px-3 py-1 rounded-full w-1/3"
    />
    <div className="flex gap-4 text-sm">
      <p>Home</p>
      <p>My Network</p>
      <p>Jobs</p>
    </div>
  </div>


  <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6 mt-6 px-4">

    <div className="bg-white p-4 rounded-xl shadow text-center">
      <img
        src="/fia2.jpeg"
        className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
      />
      <h2 className="font-bold text-gray-800">Luthfia Ifadah</h2>
      <p className="text-sm text-gray-500">IT Student</p>
      <p className="text-sm text-gray-400">Malang</p>


      <p className="text-sm text-gray-500 mt-1">Kelas: TI-2B</p>

      <div className="mt-4 text-sm text-gray-600">
        <p>Connections: 111</p>
        <p>Profile Views: 1050</p>
      </div>
    </div>

    <div className="col-span-2">
    
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-40 rounded-t-xl"></div>

      <div className="bg-white p-6 rounded-b-xl shadow relative hover:shadow-lg transition duration-300">

        <img
          src="/fia2.jpeg"
          className="w-32 h-32 rounded-full border-4 border-white absolute -top-16 left-6 object-cover object-top"
        />

        <div className="mt-20">
          <h1 className="text-2xl font-bold text-gray-800">
            Luthfia Ifadah
          </h1>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            📧 luthfiaifadah@gmail.com
          </p>

          <p className="text-gray-600 mt-1">
            Undergraduate Information Technology
          </p>

          <p className="text-gray-400 text-sm">
            Malang, Indonesia
          </p>

          <div className="mt-4 flex gap-3">
            <button className="bg-blue-500 text-white px-5 py-1.5 rounded-full hover:bg-blue-600 transition">
              Connect
            </button>
            <button className="border px-5 py-1.5 rounded-full hover:bg-gray-100 transition">
              Message
            </button>
          </div>

          <div className="mt-4 flex gap-6 text-sm text-gray-600">
            <p>👁 1050 profile views</p>
            <p>📊 100 post impressions</p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-5 rounded-xl shadow">
        <h2 className="font-semibold text-lg">About</h2>

        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          Saya adalah mahasiswa jurusan Teknik Informatika yang memiliki minat 
          dalam pengembangan web dan desain UI/UX. Saya senang mempelajari teknologi 
          modern seperti ReactJS dan Tailwind CSS untuk menciptakan aplikasi yang 
          menarik dan interaktif.
          
          <br /><br />

          Selain itu, saya juga tertarik pada dunia desain grafis dan berusaha 
          menggabungkan kreativitas dengan teknologi untuk menghasilkan solusi 
          digital yang inovatif. Saya terus mengembangkan kemampuan melalui 
          proyek pribadi dan pembelajaran mandiri.
        </p>
      </div>

    </div>

    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">People you may know</h2>

      <div className="space-y-3 text-sm">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-medium">Halimah</p>
            <p className="text-gray-400 text-xs">Student IT</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-medium">Elsa</p>
            <p className="text-gray-400 text-xs">Student IT</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

);
}

export default Fia;
