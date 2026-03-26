function Elsa() {
  return (
    <div className="min-h-screen bg-[#f3f2ef] p-6 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <div>
            <div className="flex justify-center">
              <img
                src="/elsa.jpg"
                alt="foto"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            <div className="text-left mt-3">
              <h2 className="font-semibold">Elsa Maria Condoleza Tambunan</h2>
              <p className="text-sm text-gray-500">Undergraduate Information Technology</p>
              <p className="text-xs text-gray-400 mt-1">
                Medan, North Sumatra, Indonesia
              </p>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 space-y-2">
            <p>🎓 Class: TI-2B</p>
            <p>👥 Connection: 115</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="h-36 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="px-6">
              <img
                src="/elsa.jpg"
                alt="foto"
                className="w-28 h-28 rounded-full border-4 border-white -mt-14 object-cover"
              />

              <div className="mt-2">
                <h1 className="text-xl font-bold">
                  Elsa Maria Condoleza Tambunan
                </h1>
                <p className="text-gray-600 text-sm">
                  Undergraduate Information Technology
                </p>
                <p className="text-gray-400 text-sm">
                  Medan, North Sumatra, Indonesia
                </p>

                <div className="flex gap-2 mt-3">
                  <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">
                    Connect
                  </button>
                  <button className="border px-4 py-1 rounded-full text-sm hover:bg-gray-100">
                    Message
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t mt-4 text-sm text-gray-600 flex justify-between">
              <p>👀 Profile views: 500</p>
              <p>📊 Post impressions: 300</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-2">About</h2>

            <div className="text-gray-600 text- sm text-justify space-y-4">
              <p>
                Elsa Maria Condoleza Tambunan is an undergraduate student in Information Technology at Brawijaya University.
                She has a strong passion for the creative industry, technology, cybersecurity, and graphic design,
                and is continuously honing her skills to combine creativity with innovation. Actively engaged in both academic
                and personal projects, she enjoys exploring new ideas, taking on challenges, and expanding her network.
              </p>

              <p>
                With strong skills in communication, time management, adaptability, and problem-solving,
                Elsa thrives in dynamic environments that require both technical and creative thinking. 
                Her curiosity drives her to constantly seek growth, while her flexibility enables her
                to adapt to various situations and team settings.
              </p>

              <p>
                In the future, she aspires to build a career that bridges technology and creativity,
                delivering impactful solutions in both local and global contexts. She is open to opportunities
                in areas related to technology, cybersecurity, and digital design.
              </p>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-4 h-fit">
          <h2 className="font-semibold mb-3">People you may know</h2>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Halima</p>
                <p className="text-gray-500 text-xs">Undergraduate Information Technology</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-medium">Lutfia</p>
                <p className="text-gray-500 text-xs">Undergraduate Information Technology</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Elsa;