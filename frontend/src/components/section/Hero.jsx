const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Kiri - Teks & Button */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Temukan <span className="text-cyan-400">talenta terbaik</span>{" "}
              untuk pekerjaan Anda
            </h1>
            <p className="mt-4 text-gray-300 max-w-lg">
              Posting lowongan kerja Anda hari ini dan dapatkan kandidat
              berkualitas hanya dalam hitungan hari. Mudah, cepat, dan efisien.
            </p>

            {/* Button */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-lg transition">
                Post a Job
              </button>
              <button className="border border-gray-700 bg-gray-800/70 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold text-gray-200 transition">
                Browse Talent
              </button>
            </div>
          </div>

          {/* Kanan - Gambar */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://careers.alvarezandmarsal.com/system/production/assets/363180/original/work-well-live-well__benefits--03.jpg"
              alt="image job"
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
