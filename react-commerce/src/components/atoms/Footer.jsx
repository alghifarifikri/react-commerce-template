const FooterComponent = () => {
  return (
    <footer className="bg-white p-14">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <img src="/images/logo.webp" alt="Vascomm Logo" className="mb-4" />
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              commodo in vestibulum, sed dapibus tristique nullam.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/images/icons/twitter.svg"
                  alt="Twitter"
                  className="w-5 h-5"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          {/* Layanan Section */}
          <div className="col-span-1">
            <h3 className="text-black font-semibold mb-4">Layanan</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Bantuan</li>
              <li>Tanya Jawab</li>
              <li>Hubungi Kami</li>
              <li>Cara Berjualan</li>
            </ul>
          </div>

          {/* Tentang Kami Section */}
          <div className="col-span-1">
            <h3 className="text-black font-semibold mb-4">Tentang Kami</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>About Us</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Kebijakan Privasi</li>
              <li>Syarat dan Ketentuan</li>
            </ul>
          </div>

          {/* Mitra Section */}
          <div className="col-span-1">
            <h3 className="text-black font-semibold mb-4">Mitra</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Supplier</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
