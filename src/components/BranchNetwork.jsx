import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const BranchNetwork = () => {
  const { t, i18n } = useTranslation();
  const [branchesData, setBranchesData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = "http://localhost:3000/data/branches";

  // Fetch all regions based on language
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/getBranchDetails/${i18n.language}`);
        setRegions(response.data);
        
        // Set default to "All Regions"
        setSelectedRegion(t("branchNetworktext.all_tab"));
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, [i18n.language]);

  // Fetch branches based on selected region
  useEffect(() => {
    const fetchBranches = async () => {
      setLoading(true);
      try {
        const url = selectedRegion === t("branchNetworktext.all_tab")
          ? `${apiBaseUrl}/getBranchDetails/${i18n.language}`
          : `${apiBaseUrl}/getBranchDetails/${selectedRegion}/${i18n.language}`;
  
        const response = await axios.get(url);
        setBranchesData(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching branch details:", error);
        setBranchesData([]);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBranches();
  }, [selectedRegion, i18n.language]);
  
  // Format phone number for display
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    
    // Remove non-numeric characters
    const cleaned = phoneNumber.toString().replace(/\D/g, "");
    
    // Format as XXX XXX XXXX
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    
    return phoneNumber; // Return original if format doesn't match
  };

  // Get phone number for dialing (remove spaces, ensure proper format)
  const getDialingNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    return `+94${phoneNumber.toString().replace(/\D/g, "").replace(/^0/, "")}`;
  };

  const uniqueRegionNames = [...new Set(regions.map(region => region.region_name)), t("branchNetworktext.all_tab")];

  // Filter branches based on search query
  const filteredBranches = branchesData.filter((branch) =>
    branch?.branch_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch?.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="main-container" className="px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col relative justify-center items-start py-10">
        <h1 className="border-l-4 lg:border-l-8 border-blue-900 text-blue-700 text-xl md:text-2xl lg:text-4xl font-semibold pl-2 lg:pl-4">
          {t("branchNetworktext.title1")} <span className="font-bold text-blue-900">{t("branchNetworktext.title2")}</span>
        </h1>
        <h2 className="border-l-4 lg:border-l-8 border-blue-900 pl-2 lg:pl-4 pt-1 text-sm lg:text-xl font-medium text-blue-500 italic">
          {t("branchNetworktext.subtitle")}
        </h2>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center items-center gap-2 lg:gap-5">
        <div className="text-center text-xs md:text-sm lg:text-lg font-semibold text-blue-700">{t("branchNetworktext.label")}</div>
        <input
          type="text"
          placeholder={t("branchNetworktext.field")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-blue-300 rounded-lg w-full sm:w-1/2"
        />
      </div>

      {/* Tab Bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {uniqueRegionNames.map((regionName) => (
          <button
            key={regionName}
            onClick={() => setSelectedRegion(regionName)}
            className={`py-2 px-4 rounded-lg ${selectedRegion === regionName ? "bg-bluegradient text-white" : "bg-gray-200"}`}
          >
            {regionName}
          </button>
        ))}
      </div>

      {/* Branch Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10" data-aos="fade-up">
        {loading ? (
          <div className="col-span-full text-center">
            <p className="text-lg font-semibold text-blue-700">Loading...</p>
          </div>
        ) : filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <div key={index} className="flex flex-col p-4 bg-white shadow-lg rounded-lg justify-center items-center hover:scale-110 transition-all duration-300 ease-in-out">
              {branch.picture && (
                  <img 
                    src={`../src/${branch.picture}`}
                    alt={branch.branch_name || "Branch"} 
                    className="max-w-32 max-h-32 lg:max-w-48 lg:max-h-48 w-fit h-fit object-cover"
                  />
              )}
              <div className="text-blue-900 text-base lg:text-lg font-bold mt-2 text-center">
                {branch.branch_name || "Unknown Branch"}
              </div>
              <div className="text-black/60 flex items-center text-xs lg:text-sm text-center gap-2 mt-2">
                <FontAwesomeIcon icon={['fas', 'location-dot']} className="text-xs text-blue-800" /> 
                <span>{branch.address || "No address available"}</span>
              </div>
              {branch.contact_number && (
                  <div className="text-black/60 flex items-center text-xs lg:text-sm text-center gap-2">
                    <FontAwesomeIcon icon={['fas', 'phone']} className="text-xs text-blue-800" /> 
                    <span>{formatPhoneNumber(branch.contact_number)}</span>
                  </div>
              )}
              <div className="flex flex-row gap-1 md:gap-2">
              {branch.latitude && branch.longitude && (
                <a 
                  href={`https://maps.google.com/?q=${branch.latitude},${branch.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-xs font-medium"
                >
                  <span className="flex flex-row gap-1 justify-center items-center">
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} className="mr-1" />
                    <p>View on Map</p>
                  </span>
                </a>
              )}
              {branch.contact_number && (
                <a
                  href={`tel:${getDialingNumber(branch.contact_number)}`}
                  className="mt-3 px-3 py-1 bg-amber-200 hover:bg-amber-300 text-amber-800 rounded-full text-xs font-medium"
                  >
                    <span className="flex flex-row gap-2 justify-center items-center">
                      <FontAwesomeIcon icon={['fas', 'phone']} className="text-xs" /> 
                      Call Now
                    </span>
                </a>
              )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-xl font-semibold text-rose-800">No branches found!</p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default BranchNetwork;