import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const BranchNetwork = () => {
  const { t, i18n } = useTranslation();
  const [branchesData, setBranchesData] = useState([]);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedRegionId, setSelectedRegionId] = useState(null); // Track region by ID instead of name
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const apiBaseUrl = `${import.meta.env.VITE_API_BASE_URL}/branch/branches`;

  // Fetch all branches and extract unique regions based on language
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/lang/${i18n.language}`);
        const branches = response.data;
        
        // Extract unique regions from branches data
        const uniqueRegions = branches.reduce((acc, branch) => {
          const existingRegion = acc.find(region => region.region_id === branch.region_id);
          if (!existingRegion) {
            acc.push({
              region_id: branch.region_id,
              region_name: branch.region_name
            });
          }
          return acc;
        }, []);
        
        setRegions(uniqueRegions);
        
        // Maintain selected region across language changes
        if (selectedRegionId !== null) {
          // Find the region name in the new language for the selected region ID
          const currentRegion = uniqueRegions.find(region => region.region_id === selectedRegionId);
          if (currentRegion) {
            setSelectedRegion(currentRegion.region_name);
          } else {
            // If region not found, default to "All Regions"
            setSelectedRegion(t("branchNetworktext.all_tab"));
            setSelectedRegionId(null);
          }
        } else if (selectedRegion && selectedRegion !== t("branchNetworktext.all_tab")) {
          // Handle case where a region was selected but we lost the ID reference
          // Try to find the region by checking if current selectedRegion matches any previous language version
          setSelectedRegion(t("branchNetworktext.all_tab"));
        } else {
          // Update "All Regions" text if that's what's selected, or set default on initial load
          setSelectedRegion(t("branchNetworktext.all_tab"));
        }
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, [i18n.language, apiBaseUrl, t, selectedRegionId, selectedRegion]);

  // Fetch branches based on selected region
  useEffect(() => {
    const fetchBranches = async () => {
      setLoading(true);
      try {
        let url;
        let responseData;
        
        if (selectedRegion === t("branchNetworktext.all_tab")) {
          // Fetch all branches by language
          url = `${apiBaseUrl}/lang/${i18n.language}`;
          const response = await axios.get(url);
          responseData = response.data;
        } else {
          // Find the region_id for the selected region name
          const selectedRegionData = regions.find(region => region.region_name === selectedRegion);
          if (selectedRegionData) {
            // Fetch by region and then filter for language-specific fields
            url = `${apiBaseUrl}/region/${selectedRegionData.region_id}`;
            const response = await axios.get(url);
            
            // Transform the data to match language-specific format
            responseData = response.data.map(branch => ({
              ...branch,
              branch_name: branch[`branch_name_${i18n.language}`] || branch.branch_name_en,
              branch_address: branch[`branch_address_${i18n.language}`] || branch.branch_address_en,
              region_name: branch[`region_name_${i18n.language}`] || branch.region_name_en
            }));
          } else {
            // Fallback to all branches if region not found
            url = `${apiBaseUrl}/lang/${i18n.language}`;
            const response = await axios.get(url);
            responseData = response.data;
          }
        }
  
        setBranchesData(Array.isArray(responseData) ? responseData : []);
      } catch (error) {
        console.error("Error fetching branch details:", error);
        setBranchesData([]);
      } finally {
        setLoading(false);
      }
    };
  
    if (selectedRegion) {
      fetchBranches();
    }
  }, [selectedRegion, i18n.language, regions, apiBaseUrl, t]);
  
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

  // Helper function to generate image filename from branch name
  const getBranchImageName = (branchNameEn) => {
    if (!branchNameEn) return "temp.webp";
    // Convert to lowercase and remove spaces
    return `${branchNameEn.toLowerCase().replace(/\s+/g, "")}.webp`;
  };

  const uniqueRegionNames = [t("branchNetworktext.all_tab"), ...new Set(regions.map(region => region.region_name))];

  // Handle region selection
  const handleRegionSelect = (regionName) => {
    setSelectedRegion(regionName);
    
    if (regionName === t("branchNetworktext.all_tab")) {
      setSelectedRegionId(null);
    } else {
      const regionData = regions.find(region => region.region_name === regionName);
      if (regionData) {
        setSelectedRegionId(regionData.region_id);
      }
    }
  };

  // Filter branches based on search query
  const filteredBranches = branchesData.filter((branch) =>
    branch?.branch_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch?.branch_address?.toLowerCase().includes(searchQuery.toLowerCase())
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
            onClick={() => handleRegionSelect(regionName)}
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
              <div className="w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={`${import.meta.env.VITE_API_BASE_URL}/media/branches/${getBranchImageName(branch.branch_name_en)}`}
                  alt={branch.branch_name || "Branch"} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.target.src.includes('temp.webp')) {
                      e.target.src = `${import.meta.env.VITE_API_BASE_URL}/media/branches/temp.webp`;
                    } else {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-400" style={{ display: 'none' }}>
                  <FontAwesomeIcon icon={['fas', 'building']} className="text-4xl lg:text-6xl" />
                </div>
              </div>
              <div className="text-blue-900 text-base lg:text-lg font-bold mt-2 text-center">
                {branch.branch_name || "Unknown Branch"}
              </div>
              <div className="text-black/60 flex items-center text-xs lg:text-sm text-center gap-2 mt-2">
                <FontAwesomeIcon icon={['fas', 'location-dot']} className="text-xs text-blue-800" /> 
                <span>{branch.branch_address || "No address available"}</span>
              </div>
              {branch.contact_number && (
                  <div className="text-black/60 flex items-center text-xs lg:text-sm text-center gap-2">
                    <FontAwesomeIcon icon={['fas', 'phone']} className="text-xs text-blue-800" /> 
                    <span>{formatPhoneNumber(branch.contact_number)}</span>
                  </div>
              )}
              <div className="flex flex-row gap-1 md:gap-2">
              {branch.coordinates_latitude && branch.coordinates_longitude && (
                <a 
                  href={`https://maps.google.com/?q=${branch.coordinates_latitude},${branch.coordinates_longitude}`}
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