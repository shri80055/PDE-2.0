import React from "react";

function NewFoot() {
  return (
    <footer role="contentinfo" className="bg-[#0f4450] text-white mt-12">
      
      {/* ===== Footer Links Section ===== */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Column 1: About */}
        <div>
          <h3 className="font-semibold mb-3">About the Portal</h3>
          <p className="text-gray-200 leading-relaxed">
            Public Data Entry (PDE) System is an initiative of the Land Records
            Department, Government of Maharashtra, to provide citizens a
            transparent and user-friendly platform for land record services.
          </p>
        </div>

        {/* Column 2: Mandatory GIGW Links */}
        <div>
          <h3 className="font-semibold mb-3">Important Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Website Policies</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Hyperlinking Policy</a></li>
            <li><a href="#" className="hover:underline">Copyright Policy</a></li>
            <li><a href="#" className="hover:underline">Disclaimer</a></li>
            <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Land Records Department</li>
            <li>Government of Maharashtra</li>
            <li>Helpline: <strong>020-25679297</strong></li>
            <li>Email: <strong>support@mahabhulekh.gov.in</strong></li>
            <li>Working Hours: 10:00 AM – 5:45 PM</li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="bg-[#0A5C57] text-xs">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          
          <p className="text-gray-200 text-center md:text-left">
            © {new Date().getFullYear()} Government of Maharashtra. All Rights Reserved.
          </p>

          <p className="text-gray-300 text-center md:text-right">
            Last Updated: <span className="font-medium">01 April 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default NewFoot;
