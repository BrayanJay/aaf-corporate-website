//MAIN SOURCE OF TEXT CONTENTS - ALL THE CHANGES SHOULD BE DONE IN HERE

import { faUsers, faBriefcase, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons'; // Import suitable icons

//branches photos
//import branchSample from '../media/branches/temp.webp';


// Translation resources
const resources = {
  en: {
    translation: {
      //Header Component
      header: {
        title: "Contact Us",
      },
      //Navbar component
      navbar: {
        home: "Home",
        about: "About",
        about_dropdown0: "Overview",
        about_dropdown1: "Vision, Mission & Goal",
        about_dropdown2: "Board of Directors",
        about_dropdown3: "Corporate Management",
        about_dropdown4: "Branch Network",
        products: "Products & Services",
        products_dropdown1: "Products Overview",
        products_dropdown2: "Gold Loan",
        products_dropdown3: "Fixed Deposits",
        products_dropdown4: "Leasing",
        products_dropdown5: "Mortgage",
        products_dropdown6: "Forex",
        products_dropdown7: "Luckewallet",
        investor_relations: "Investor Relations",
        investor_relations_dropdown1: "Corporate Profile",
        investor_relations_dropdown2: "Key Financials",
        careers: "Careers",
        downloads: "Downloads",
        contacts: "Contact Us",
      },


      //Footer component
      footerListItems: [
        { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork" ] },
        { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Forex ", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "Investor Relations", list: ["Corporate Profile", "Key Financials", "Downloads"], links: ["/ir", "/ir/#financial-keys", "/downloads"] },
        { title: "Other Links", list: ["Careers", "Contact Us", "Promotions", "Privacy Policy", "Customer Complaints Form"], links: ["/careers", "/contacts", "/promotions", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],

      footerText: {
        subs_title1: "Bringing Financial Solutions Closer to You",
        subs_title2: "Subscribe & Get Latest Updates",
        subs_title3: "From Us",
        subs_message: "Subscribe to receive our offers and updates directly in your inbox.",
        subs_field: "Enter your email",
        subs_btn: "Submit",
        intro: "Asia Asset Finance PLC, incorporated on 23rd September 1970, is rated Fitch rating A+ Stable Outlook and is licensed by the Monetary Board of the Central Bank of Sri Lanka under the Finance Business Act No. 42 of 2011.",
        address: "Head Office: No. 76, Park Street, Colombo 02, Sri Lanka",
      },


      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg1.webp`,
          title: "Innovative Solutions for Your Financial Future",
          intro: "Empowering Your Financial Future",
          description:
            "At Asia Asset Finance, we believe in the power of innovation to drive financial success. Our commitment to providing tailored financial solutions has positioned us as a leader in the Sri Lankan finance industry. Whether you’re looking to invest, save, or finance your next big project, we’re here to support your journey with trust and transparency.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg2.webp`,
          title: "Where Dreams Meet Financial Solutions",
          intro: "Innovative Finance, Inspiring Growth",
          description:
            "We are more than just a financial institution; we are your partners in progress. Our innovative approach to finance is designed to empower individuals and businesses across Sri Lanka. By combining cutting-edge technology with personalized service, we deliver financial solutions that are not only efficient but also effective in helping you achieve your goals.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg3.webp`,
          title: "Leading the Way in Sri Lankan Finance",
          intro: "Your Trust, Your Commitment",
          description:
            "Trust and transparency are the cornerstones of our business. As a leader in Sri Lankan finance, we are committed to maintaining the highest standards of integrity in everything we do. From our first interaction to the final transaction, you can count on us to provide clear, honest advice and services that are tailored to your needs.",
        },

      ],
      landingPageCards: {
        card1_title: "Expert Team",
        card1_description: "Leverage the knowledge and experience of our financial experts dedicated to helping you succeed.",
        card2_title: "Wide Reach",
        card2_description: "Serving clients across Sri Lanka with a comprehensive range of financial products tailored to local needs.",
        card3_title: "Fast & Efficient Service",
        card3_description: "Experience quick and hassle-free services designed to save you time and streamline your financial journey.",
      },
      whyChooseUs: {
        title_left: "Why Choose",
        title_right: "Asia Asset Finance",
        description: "For over 50 years we at Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold Loans we provide for the most reasonable rates, Leasing, Mortgage Loans, Group Personal Loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
        card1: "Tailored Financial Solutions for Every Stage of Life",
        card2: "Unparalleled Customer Service with a Personal Touch",
        card3: "Innovative Products Backed by Decades of Expertise",
    },
    luckewalletLandingPage: {
      title1: "Simplify Your Financial Journey with Our ",
      title2: "Luckewallet ",
      title3: "Mobile App",
      subtitle: "Experience seamless and secure financial services right from your smartphone.",
      learn_more: "Learn More",
      key_features1: "Key ",
      key_features2: "Features",
      feature1_title: "Easy Account Management",
      feature1_description: "View and manage all your accounts effortlessly in one place.",
      feature2_title: "Quick Loan Applications",
      feature2_description: "Apply for loans and track your application status seamlessly.",
      feature3_title: "Seamless Online Transactions",
      feature3_description: "Experience fast, secure, and hassle-free online financial services.",
      feature4_title: "Real-time Notifications",
      feature4_description: "Stay updated with instant alerts on account activities and offers.",
      download_now: "Download Now!",
  },
  productsOverviewTextLandingPage: {
    title: "Discover Our Financial Products",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, we provide a diverse range of financial products tailored to meet your unique needs. Whether you're looking to grow your savings, secure a loan, or explore investment opportunities, our offerings are designed with your financial well-being in mind. Choose from our secure Fixed Deposits, flexible Gold Loans, and supportive Micro Mortgage Loans to find the right fit for you. With our innovative E-Saving accounts, competitive Foreign Exchange services, and convenient Leasing options, we ensure that every aspect of your financial journey is covered. Trust us to deliver reliable, personalized solutions that empower your financial success.",
  },
  productsOverviewLandingPage: [
    { title: "Fixed Deposits", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/fd.webp`, description: "Secure your savings with fixed returns.", link: "/fixed-deposit" },
  { title: "Gold Loan", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/gloan.webp`, description: "Grow your wealth with flexible savings.", link: "/gold-loan" },
  { title: "Mortgage", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/mortgage.webp`, description: "Affordable loans for your every need.", link: "/mortgage" },
  { title: "Leasing", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/leasing.webp`, description: "Convenient spending with low-interest rates.", link: "/leasing" },
  { title: "E - Savings", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/eSavings.webp`, description: "Comprehensive protection for peace of mind.", link: "/luckewallet" },
  { title: "Forex", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/forex.webp`, description: "Maximize your returns with diverse options.", link: "/foreign-exchange" },
],
testimonialsText: {
  title: "What Our Clients Say",
  subtitle: "Real Stories of Success and Satisfaction",
},
testimonials: [
  {
    personName: "Niroshan Fernando",
    location: "From Thudalla",
    imageUrl: "/src/media/testimonials/niroshan_fernando.webp",
    quote: "I trust Asia Asset Finance for their A+ rating, 54-year legacy, and exceptional service!",
    rating: 5,
  },
  {
    personName: "S Yogaraja",
    location: "From Hekiththa",
    imageUrl: "/src/media/testimonials/s_yogaraja.webp",
    quote: "Asia Asset was the one who gave me strength.",
    rating: 5,
  },
  /*{
    personName: "L Nalini",
    location: "From Hekiththa",
    imageUrl: "/src/media/testimonials/l_nalini.webp",
    quote: "Asia Asset was the one who gave me strength.",
  },*/
  {
    personName: "Saumya Nilukshi",
    location: "From Awarakotuwa",
    imageUrl: "/src/media/testimonials/saumya_nilukshi.webp",
    quote: "Asia Asset Finance is our place, filled with humanity and care!",
    rating: 5,
  },
],

branchDetailsLandingPage: {
  title1: "Our",
  title2: "Branches",
  subtitle: "Bringing Financial Solutions Closer to You ",
  description1: "Visit one of our ",
  description2: "100+ branches ",
  description3: "today and experience the personalized service that ",
  description4: "Asia Asset Finance PLC ",
  description5: "is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.",
  newbranches_title: "Our Newest Branches",
  newbranches_description: "We're excited to announce the opening of our newest branches, bringing our trusted financial services even closer to you. As part of our commitment to accessibility and community support, these branches are equipped to provide the full range of Asia Asset Finance products and services. Visit us at our latest locations and experience the same reliable and personalized service that you've come to expect from us.",
  newest_branch_name: "Deniyaya",
  newest_branch_address: "No 196, Main Street, Deniyaya",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  our_branch_network_btn: "Our Branch Network",
},
inquiryForm: {
  title: "Get In Touch With Us Today",
  subtitle: "Bringing Financial Solutions Closer to You",
  label1: "Name",
  field1: "Enter your Name",
  error1: "Please provide your name",
  label2: "Mobile Number",
  field2: "Enter your Mobile Number",
  error2: "Please provide your mobile number",
  label3: "Email",
  field3: "Enter your Email",
  error3: "Please provide your email",
  error3_1: "Please provide a valid email address",
  label4: "Message",
  field4: "Enter your Message here",
  error4: "",
  label5: "Employee's Name",
  field5: "Enter employee name here",
  error5: "Please provide employee's name",
  label6: "Department",
  field6: "Enter department name here",
  error6: "Please provide department",
  label7: "Branch",
  field7: "Enter branch name here",
  error7: "Please provide branch",
  label8: "Adress",
  field8: "Enter your address here",
  error8: "Please provide your address",
  label9: "Nearest City",
  field9: "Enter your nearest city here",
  error9: "Please provide your nearest city",
  label10: "Amount (Optional)",
  field10: "Enter amount here",
  error10: "",
  label11: "Services",
  field11: "Select a service",
  error11: "Please select a service",
  label12: "Language",
  field12: "Select a language",
  error12: "Please select a language",
  button1: "Clear",
  button2: "Submit",
  close_btn: "Back",
  response_pass: "Your inquiry has been sent successfully!",
  response_fail: "Failed to send inquiry. Please try again.",
  inquiry: "Inquiry Form",
  cus_complaint: "Customer Complaints Form",
  titleLabel: "Select Title",
  titlePlaceholder: "Please select your title",
  titleOptions: [ "Mr", "Mrs", "Miss", "Ms", "Dr", "Prof", "Rev", "Other",],
  customer_details: "Customer Details",
  employee_details: "Employee Details",
},

  //About Page Components
  bannerAbout:{
    src: `${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bannerAbout.webp`,
    title: "About us",
    intro: "Empowering Your Financial Future ",
    specialnote: "since 1970",
    description: "“ Empowering People and Transforming Lives ”",
  },
  cardsAbout: [
    { stat: "70,000+", text: "Customers", icon: faUsers },
    { stat: "54+", text: "Years of Excellence", icon: faClock },
    { stat: "1000+", text: "Employees", icon: faBriefcase },
    { stat: "100+", text: "Branches", icon: faBuilding },
  ],
  overviewAbout: {
    title: "Overview",
    description: "For over 50 years we at Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold Loans we provide for the most reasonable rates, Leasing, Mortgage Loans, Group Loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies. Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka. Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business. The story of Asia Asset Finance PLC is one of “Empowering People and Transforming Lives”."
},
missionVisionGoal: {
  mission: {
category: "mission",
    title: "The solutions we provide for our customers' financial needs would be unconventional, innovative, and relevant for their needs to improve their quality of life whilst maintaining superior levels of customer service which would go well beyond their expectations.",
    description: ""
  },
  vision: {
category: "vision",
    title: "Empowering people & transforming lives.",
    description: ""
  },
  goal: {
category: "goal",
    title: "To become a premier finance company in Sri Lanka.",
    description: ""
  }
},

 bodTextsAbout: {
    title1: "Board of ",
    title2: "Directors",
    subtitle: "Guiding Our Vision with Expertise and Integrity",
    intro: "Our Board of Directors comprises seasoned professionals with diverse backgrounds and extensive experience in the financial industry. Their leadership and strategic insights are instrumental in steering Asia Asset Finance towards sustainable growth and success.",
    chairman_name: "V. A. Prasanth",
    chairman_position: "Chairman",
    chairman_description: "V.A Prasanth is a commercial banker with over 37 years of all-round exposure in Retail & Corporate banking, Treasury Operations and Information Security. Formerly he worked with Indian Bank – acclaimed as one of the best...",
    ceo_name: "R. J. A. Gunawardena",
    ceo_position: "Executive Director / Chief Executive Officer",
    ceo_description: "Mr. Rajiv Gunawardena, the Chief Executive Officer / Director of Asia Asset Finance PLC was appointed to the Board in December 2009. A visionary leader, responsible for setting and implementing the organization’s vision...",
    see_more_btn: "Read More",
    view_profile_btn: "Read More",
  },
  comTextsAbout: {
    title1: "Corporate ",
    title2: "Management",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, our corporate management team is composed of seasoned professionals who bring a wealth of experience and insight to the table. Their strategic leadership and commitment to excellence drive our company’s success, ensuring we remain at the forefront of Sri Lanka’s financial services industry.",
  },
  branchNetworktext: {
    title1: "Our",
    title2: "Branch Network",
    subtitle: "Bringing Financial Solutions Closer to You",
    description1: "Visit one of our ",
    description2: "100+ branches ",
    description3: "today and experience the personalized service that ",
    description4: "Asia Asset Finance PLC ",
    description5: "is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.",
    label: "Search Your Nearest Branch:",
    field: "Search Branch...",
    all_tab: "All Regions",
    central_tab: "Central Region",
    eastern_tab: "Eastern Region",
    northern_tab: "Northern Region",
    sabaragamuwa_tab: "Sabaragamuwa Region",
    southern_tab: "Southern Region",
    uva_tab: "Uva Region",
    western_tab: "Western Region",
    northwestern_tab: "North-Western Region",
    viewOnMapBtn: "View On Map",
    callNowBtn: "Call Now"
  },

    //Investor Relations Page Components
    bannerIR:{
      src: `${import.meta.env.VITE_API_BASE_URL}/media/investorRelations/irPgBanner.webp`,
      title: "Investor Relations",
      intro: "Building Wealth with Trust and Vision ",
      specialnote: "since 1970",
      description: "“ Partnering for Progress, Driving Sustainable Growth ”",
    },
    corporateProfileIR: {
      title1: "Corporate ",
      title2: "Profile",
      label1: "Name of Company",
      field1: "Asia Asset Finance PLC",
      label2: "Company Ratings",
      field2: "Fitch A+",
      label3: "Legal Form",
      //field3_1: "- Incorporated as a Private Limited Company on 23 September 1970. (under the Companies Ordinance No. 51 of 1938 (Cap 145))",
      //field3_2: "- Name changed under the Companies Ordinance No. 51 of 1938 (Cap 145) on 03 October 2006.",
      //field3_3: "- Re-registered under the Companies Act No. 07 of 2007 on 23 January 2008.",
      //field3_4: "- Converted to a Public Limited Company under the Companies Act No. 07 of 2007 on 20 March 2012.",
      //field3_5: "- Registration Number (under the Companies Act No. 17 of 1982): PB 139 PQ.",
      //field3_6: "- New Registration Number (under the Companies Act No. 7 of 2007): PB 139 PQ.",
      field3_1: "Incorporated as a Private Limited Liability Company under the Companies Ordinance No. 51 of 1938 (Cap 145) on 23 September 1970 and name changed under the Companies Ordinance, No. 51 of 1938 (Cap 145) on 03 October 2006 and re-registered under the Companies Act No.07 of 2007 on 23 January 2008 and converted to a public company under the Companies Act No.07 of 2007 on 20 March 2012 Registration Number (Under the Companies Act No.17 of 1982). New Registration Number (Under the Companies Act No.7 of 2007) PB 139 PQ",
      label4: "Company Registration Number",
      field4: "PB 139 PQ",
      label5: "Lawyers of the Company",
      field5: "Shiranthi Gunawardane Associates, \n No.22/1, Elliot Place,Colombo 08.",
      label6: "Board of Directors",
      field6_1: "Chairman - V A Prasanth",
      field6_2: "CEO - R J A Gunawardena",
      field6_3: "G M Alexander",
      field6_4: "K R Bijimon",
      field6_5: "K G K Pillai",
      field6_6: "R A B Basnayake",
      field6_7: "J P D R Jayasekara",
      field6_8: "R D S Gunasekera",
      field6_9: "T C D Kumarasiri",
      field6_10: "M Thiruneelakandan",
      label7: "Secretary of the Company",
      field7: `Ms. Ruwani Angammana, No.76, Park Street, Colombo 02.`,
      field7_1: `Email: companysecretary@asiaassetfinance.lk`,
      label8: "Auditors of the Company",
      field8: "KPMG, 32A, Sir Mohomad Macan Marikar Mawatha, Colombo 03.",
      label9: "Banking Partners",
    },
    keyFinancialsIR: {
      title1: "Key ",
      title2: "Financials",
      card1_title: "Total Income",
      card1_amount: "XX,XXX",
      card2_title: "Profit After Tax",
      card2_amount: "XX,XXX",
      card3_title: "Total Assets",
      card3_amount: "XX,XXX",
      card4_title: "Return On Equity",
      card4_amount: "XX,XXX",
      card5_title: "Earning Per Share",
      card5_amount: "XX,XXX",
      share_price_title: "Latest Share Price",
      share_price_reg: "XXXXXXXXXX",
      share_price_name: "Asia Asset Finance PLC",
      share_price_amount: "LKR XX.XX",
      share_price_percentage: "XX,XXXX",
      share_price_type: "LKR ",
      description_line1: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
      description_line2: "Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.",
      description_line3: "Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business.",
      description_line4: "The story of Asia Asset Finance PLC is one of “ Empowering People and Transforming Lives ”.",
    },
    documentsIR: {
      title: "Downloads",
      tab1_title: "Annual Reports",
      tab1_content: "No Reports has been uploaded yet!",
      tab2_title: "Credit Ratings",
      tab2_content: "No Reports has been uploaded yet!",
      tab3_title: "Quarterly Financials",
      tab3_content: "No Reports has been uploaded yet!",
      tab4_title: "Monthly Financials",
      tab4_content: "No Reports has been uploaded yet!",
    },

    //Downloads Page Components
    downloadsData: [
      {idx: "card1",
      title: "Annual Report 2023 - 2024",
      description: "",
      link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },
      {idx: "card1",
        title: "Annual Report 2023 - 2024",
        description: "",
        link: ""
      },  
    ],
    downloadsTexts: {
      title: "Downloads",
      section1: "Annual Reports",
      intro1: "Click on a document to view it.",
      section2: "Interim Financials",
      intro2: "Click on a document to view it.",
      section3: "Customer Information",
      intro3: "Click on a document to view it.",
      section4: "Other Documents",
      intro4: "Click on a document to view it.",
      section5: "Debenture Issue 2024",
      intro5: "Click on a document to view it.",
    },

    privacyPolicy: {
      title: "Privacy Policy",
      description: [
        "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
        "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
        "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
        "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
    ],
    information_collection: "Information Collection and Use",
    ic_description: [
      "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
      "The app does use third party services that may collect information used to identify you.",
    ],
    ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
    cookies: "Cookies",
    cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
    service_providers: "Service Providers",
    service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
    service_providers_points: [
      "To facilitate our Service",
      "To provide the Service on our behalf",
      "To perform Service-related services",
      "To assist us in analyzing how our Service is used",
    ],
    service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
    security: "Security",
    security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
    links_to_other_sites: "Links to Other Sites",
    links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    children_privacy: "Children’s Privacy",
    children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
    changes_to_this_privacy: "Changes to This Privacy Policy",
    changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
    changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
    contact_us: "Contact Us",
    contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
  },

    //Promotions Page
    promotionsPage: {
      title: "Promotions",
      subtitle: "No Current Promotions",
      description: "Please visit this page later for updates.",
    },

    //Products & Services Page Components
    bannerProducts: {
      title: "Products & Services",
      intro: "Simplifying Financial Solutions",
      specialnote: "since 1970",
      description: "“ Partnering for Growth and Prosperity ”",
    },

    productsSelector: { 
      'Fixed Deposit': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Fixed Deposits",
        features: [
          { title: "High Interest Rate", description: "Earn a higher interest rate than regular savings accounts." },
          { title: "Flexible Terms", description: "Choose from a variety of terms that best suit your needs." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Gold Loan",
        features: [
          { title: "Fast Approval", description: "Get quick access to funds using your gold as collateral." },
          { title: "Low Interest", description: "Competitive interest rates for gold-backed loans." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Mortgage",
        features: [
          { title: "Affordable Rates", description: "Low-interest rates for small-scale mortgages." },
          { title: "Flexible Repayment", description: "Customizable repayment plans based on income." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Leasing",
        features: [
          { title: "Convenient Leasing Options", description: "Lease vehicles, equipment, and more at flexible terms." },
          { title: "Fast Processing", description: "Quick and easy leasing application process." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "Forex",
        features: [
          { title: "Competitive Rates", description: "Exchange currency at favorable rates." },
          { title: "Multiple Currencies", description: "Access a wide range of international currencies." },
        ],
      },
    },

    luckewalletProductsPage: {
      description1: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
      description2: "Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka.",
      kFeature1: "Key ",
      kFeature2: "Features",
      f1title: "Easy Account Management",
      f1Text: "View and manage all your accounts effortlessly in one place.",
      f2title: "Quick Loan Applications",
      f2Text: "Apply for loans and track your application status seamlessly.",
      f3title: "Seamless Online Transactions",
      f3Text: "Experience fast, secure, and hassle-free online financial services.",
      f4title: "Real-time Notifications",
      f4Text: "Stay updated with instant alerts on account activities and offers.",
    },


    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//

    //Careers Page Components
    careersBanner: {
      title: "Careers",
      description:"Shape Your Future with Us!",
    },

    titleCareers: {
      title1: "We are ",
      title2: "Hiring",
      description1: "Here’s what we do at Asia Asset Finance! We help individuals live the lives they want to live, we empower businesses to build their enterprises, we are active instruments in narrowing the financial divide.",
      description2: "We are constantly on the lookout for passionate professionals with a desire to build economies and break societal boundaries. So if you think you have what it takes, apply for the available positions below."
    },

    //------------------------------------------------------ Products Pages --------------------------------------------------------------//

    //Gold Loan Page Components
    goldLoanPage: {
      title: "Gold Loan",
      description: "Responsibility is something that comes to all of us. You can be a father, contemplating your daughter’s wedding and the expenses that come with. A mother striving to give her son the best possible education. A spouse in dire need of money for your better half’s sudden surgery. Fear not, ladies and gentlemen. Our Gold Loan Service has got you and your finances covered. Simply walk to any Asia Asset Branch and speak to one of our caring professionals and we’ll take it from there. Here are the guarantees. Instant money. Flexible interest rates, according to your situation. And at the end of it all, your gold has seen a safer space! We are, after all- a fully owned subsidiary of Muthoot Finance, legendary multinational Financial Service Provider with the LARGEST gold loan portfolio around the globe. With Asia Asset Finance PLC’s Gold Loan services, it takes no more than a few minutes for your gold to generate cash. All you need is the gold.",
      kfd: "/src/media/attachments/customerProtectionFramework/en_key_fact_document_gl.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/src/media/uploads/charges_and_tariff/en_gl_cat.png",
    },

    //FD Page Components
    fdPage: {
      title: "Fixed Deposits",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crises and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
      kfd: "/src/media/attachments/customerProtectionFramework/en_key_fact_document_fd.pdf",
      btn_1: "Key Fact Document",
      btn_2: "FD Rates",
      btn_3: "Customer Information Documents",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: `${import.meta.env.VITE_API_BASE_URL}/media/attachments/products/fixedDeposit/accounts/fd_collection_accounts.webp`,
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      fdRates: "/src/media/uploads/en_fd_rates.webp",
    },

    //Leasing Page Components
    leasingPage: {
      title: "Leasing",
      description: "Don’t let anyone tell you that you should not drive your dream vehicle NOW! Any vehicle you could have possibly wanted to drive or ride is just one visit to your nearest Asia Asset Branch away. Own it. Drive it. And all the time in the world to pay for it. In this deal, you WIN! When you apply for a lease from us our trained professionals will provide you with; The finest interest rates in the market, Doorstep Service, Minimum Documentation, Zero Hassle, Flexible Repayment Terms & etc. So, lease with ease with us and drive your dream!",
      kfd: "/src/media/attachments/customerProtectionFramework/en_key_fact_document_l.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/src/media/uploads/charges_and_tariff/en_l_cat.png",
    },

    //Mortgage Page Components
    mortgagePage: {
      title: "Mortgage",
      description: "Money can solve all your financial problems. We at Asia Asset invest all our efforts to up your financial lifestyle. This is the fastest way for you to raise funds. Mortgage your asset with us, generate money and in time reclaim your asset. So, stop worrying. Go. Grow. All those problems that are obstacles to you, we have already solved. We promise you an excellent, effective and efficient service. We promise you the fairest rates you can receive because we see you. Afterall, it is our mission to empower people and to transform lives!",
      kfd: "/src/media/attachments/customerProtectionFramework/en_key_fact_document_m.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      btn_3: "Customer Information Documents",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/src/media/uploads/charges_and_tariff/en_m_cat.png",
    },

    //Forex Page Components
    forexPage: {
      title: "Forex",
      description: "At Asia Asset Finance you can get your Foreign Exchange Transactions done in a flash! Just walk over to one of our counters with your cash and let the trading happen. So, here is how Forex works. In the simplest form of describing it, it is the act of selling one currency to buy another. These are always quoted in pairs- that is, how much one unit of base(bought) currency is in terms of quote (sold) currency. With our professional advice, and constant on our toes approach, watch your wealth multiply.",
      btn_1: "Customer Information Documents",
      btn_2: "",
      btn_3: "",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "",
      our_partners: "Our Partners",
    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "Access Your Wealth From Anywhere",
      description: ["Luckewallet has firmly established itself as the leading payment platform in Sri Lanka, renowned for its high transaction volume and customer base. Luckewallet offers a wide range of financial services, including digital savings accounts, digital fixed deposits, and Gold Loan interest payments. Additionally, users can pay utility bills and accept credit card payments without needing to visit a physical branch. The platform is designed to seamlessly connect customers and merchants, providing a secure and integrated experience.",
        "An extension of our e-savings account offering is its highly competitive interest rate, which stands out in the market. The e-savings account provides users with the ability to earn interest in their savings while enjoying the flexibility and convenience of managing their funds digitally. Customers can open and manage their digital savings accounts directly through the app, with the added benefit of earning interest that is typically higher than traditional savings accounts. This feature allows users to grow their savings effortlessly, with the ease of accessing their funds and tracking their account activity at any time.",
        "More than just a payment platform, Luckewallet is envisioned as a comprehensive ecosystem, with the company acting as a merchant-acquiring partner. Recognized internationally for its advanced software architecture, the app is continually improved to ensure a smooth and efficient user experience. Key features include easy customer onboarding, self-registration, and a variety of services such as mobile recharges and direct transactions with other bank accounts. With the e-savings account and its competitive interest rate, Luckewallet is offering more than just digital transactions — it’s helping users build their financial future.",
      ],
      kfd: "/src/media/attachments/customerProtectionFramework/en_key_fact_document_s.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Customer Information Documents",
      btn_3: "",
      hotline: "Hotline",
      note: "Note: These are values indicative and may change time to time*",
      charges_tariff: "",
      
    },
    //Contacts Page Components
    contactsPage: {
      title1: "Contact ",
      title2: "Us",
      subtitle: "Contact us today, and we'll provide the support you need!",
      card1title: "Location",
      card1Body: "No 76, Park St, Colombo 02",
      card2title: "Customer Care",
      card2Body: "011 71 70 712",
      card3title: "Telephone",
      card3Body: "011 76 99 000",
      card4title: "Email",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "Complaints",
      card5Body: "077 79 99 922",
      card6title: "Hotline",
      card6Body: "1369",
    },
    },
  },
  si: {
    translation: {
      //Header Component
      header: {
        title: "අප අමතන්න",
      },

      //Navbar component
      navbar: {
        home: "මුල් පිටුව",
        about: "අප ගැන",
        about_dropdown0: "හැඳින්වීම",
        about_dropdown1: " දැක්ම, මෙහෙවර සහ ඉලක්කය",
        about_dropdown2: "අධ්‍යක්ෂ මණ්ඩලය",
        about_dropdown3: "සමාගමේ කළමනාකරණය",
        about_dropdown4: "ශාඛා ජාලය",
        products: "සේවා",
        products_dropdown1: "නිෂ්පාදන සාරාංශය",
        products_dropdown2: "රන් ණය",
        products_dropdown3: "ස්ථාවර තැන්පතු",
        products_dropdown4: "ලිසිං",
        products_dropdown5: "උකස්",
        products_dropdown6: "විදේශ විනිමය හුවමාරුව",
        products_dropdown7: "Luckewallet",
        investor_relations: "ආයෝජක සබඳතා",
        investor_relations_dropdown1: "ආයතනික පැතිකඩ",
        investor_relations_dropdown2: "ප්‍රධාන මුල්‍ය තොරතුරු",
        careers: "රැකියා",
        downloads: "බාගතකිරීම්",
        contacts: "අප අමතන්න",
      },

      //Footer Component
      footerListItems: [
        { title: "අපි ගැන", list: ["හැඳින්වීම", "නිලධාරී මණ්ඩලය", "කාර්‍යාල කළමනාකරණය", "ශාඛා ජාලය"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork"] },
        { title: "සේවා", list: ["රන් ණය", "ස්ථිර තැන්පතු", "ලීසිං", "උකස්", "විදේශ විනිමය හුවමාරුව", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "ආයෝජක සම්බන්ධතා", list: ["ආයතනික පැතිකඩ", "ප්‍රධාන මුල්‍ය තොරතුරු", "බාගත කිරීම්",], links: ["/ir", "/ir/#financial-keys", "/downloads",] },
        { title: "වෙනත් සබැඳි", list: ["රැකියා", "අප අමතන්න", "ප්‍රවර්ධන", "රහස්යතා ප්රතිපත්තිය", "පාරිභෝගික පැමිණිලි පෝරමය"], links: ["/careers", "/contacts", "/promotions", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],
      
      
      footerText: {
        subs_title1: "ඔබට ආරක්ෂිත මූල්‍ය විසඳුම් ඔබ අසලට",
        subs_title2: "අපගේ නවතම යාවත්කාලීන කිරීම් ලබාගැනීම සඳහා ලියාපදිංචි වන්න",
        subs_title3: "අපෙන්",
        subs_message: "අපගේ ප්‍රතිලාභ සහ යාවත්කාලීන කිරීම් ඔබගේ ඊමේල් හිමි inbox එකට ලබා ගැනීමට ලියාපදිංචි වන්න.",
        subs_field: "ඔබගේ ඊමේල් පත‍්‍රය ඇතුල් කරන්න",
        subs_btn: "ඉදිරිපත් කරන්න",
        intro: "Asia Asset Finance PLC, 1970 සැප්තැම්බර් 23 වන දින සමාගම පිහිටුවා ඇති අතර Fitch rating A+ ස්ථායී අවධි ශ්‍රේණිය ලබා ඇත සහ ශ්‍රී ලංකා මහ බැංකුවේ 2011 අංක 42 දරන මුල්‍ය ව්‍යාපාර පනත යටතේ මූල්‍ය කමිටු බලපත්‍රය ලැබ ඇත.",
        address: "ප්‍රධාන කාර්යාලය: අංක 76, උද්‍යාන වීදිය, කොළඹ 02, ශ්‍රී ලංකා",
      },
      

      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg1.webp`,
          title: "ඔබේ මූල්‍ය අනාගතය සඳහා නව්‍ය විසඳුම්",
          intro: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
          description:
            "අපි ඒෂියා ඇසට් ෆිනෑන්ස් හි මූල්‍ය සාර්ථකත්වය සඳහා නවෝත්පාදනය තුලින් සිදුවන බලපෑම පිලිබද විශ්වාස කරන්නෙමු. ගැලපෙන මුල්‍ය විසඳුම් ලබාදීම වෙනුවෙන් අපගේ ඇති කැපවීම ශ්‍රී ලංකාවේ මුල්‍ය ක්ෂේත්‍රය තුල ප්‍රමුඛයා ලෙස අපව ස්ථානගත කර ඇත. ඔබ ආයෝජනය කිරීමට, ඉතිරි කිරීමට හෝ ඔබේ මීළඟ විශාල ව්‍යාපෘතිය මූල්‍යකරණය කිරීමට බලාපොරොත්තු වන්නේද ? , එසේනම් අපි විශ්වාසයෙන් සහ විනිවිදභාවයෙන් යුතුව ඔබේ ගමනට සහාය වීමට බලා සිටින්නෙමු.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg2.webp`,
          title: "සිහින සැබෑ වෙන මුල්‍ය විසඳුම් හමුවන තැන",
          intro: "මුල්‍ය නවෝත්පාදනය සහා ප්‍රබෝධමත් වර්ධනය ",
          description:
            "අපි හුදෙක් මූල්‍ය ආයතනයක් නොවන්නෙමු; අපි ඔබේ ප්‍රගතියේ හවුල්කරුවන් වෙමු. මූල්‍ය සඳහා වන අපගේ නව්‍ය ප්‍රවේශය ශ්‍රී ලංකාව පුරා සිටින පුද්ගලයන් සහ ව්‍යාපාර සවිබල ගැන්වීම සඳහා නිර්මාණය කර ඇත. පුද්ගලාරෝපිත සේවාවක් සමඟ අති නවීන තාක්‍ෂණය ඒකාබද්ධ කිරීමෙන්, අපි කාර්යක්ෂම පමණක් නොව, ඔබේ ඉලක්ක සපුරා ගැනීමට උපකාරී වන ඵලදායී මූල්‍ය විසඳුම් ලබා දෙන්නෙමු.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg3.webp`,
          title: "ශ්‍රී ලංකා මූල්‍ය ක්ෂේත්‍රයේ ප්‍රමුඛයා",
          intro: "ඔබේ විශ්වාසය, අපගේ කැපවීම",
          description:
            "විශ්වාසය සහ විනිවිදභාවය අපගේ ව්‍යාපාරයේ මූලික පදනමයි. ශ්‍රී ලාංකේය මූල්‍ය ක්ෂේත්‍රයේ ප්‍රමුඛයෙකු ලෙස, අප කරන සෑම දෙයකදීම අඛණ්ඩතාවයේ ඉහළම ප්‍රමිතීන් පවත්වා ගැනීමට අපි කැපවී සිටිමු. අපගේ පළමු හමුවීමේ සිට අවසාන ගනුදෙනුව දක්වා, ඔබට ඔබගේ අවශ්‍යතාවලට ගැලපෙන පැහැදිලි, අවංක උපදෙස් සහ සේවාවන් සැපයීම වෙනුවෙන් අප කෙරෙහි විශ්වාසය තැබිය හැකිය.",
        },
      ],
      landingPageCards: {
        card1_title: "විශේෂඥ කණ්ඩායම",
        card1_description: "ඔබේ සාර්ථකත්වය සදහා උදව් කිරීමට  දැනුමෙන් සහ පළපුරුද්දෙන් යුත් අපගේ මූල්‍ය විශේෂඥයින් කැපවීමෙන් සහය වනු ඇත.",
        card2_title: "පුළුල් පරාසය",
        card2_description: "ශ්‍රී ලංකාව පුරා සිටින ගනුදෙනුකරුවන්ගේ අවශ්‍යතාවලට ගැලපෙන මූල්‍ය සේවා රාශියක් අප සතු වේ.",
        card3_title: "කඩිනම් සහ කාර්යක්ෂම සේවාව",
        card3_description: "ඔබේ කාලය ඉතිරි කර ගැනීමට සහ ඔබේ මූල්‍ය ගමන විධිමත් කිරීමට සැලසුම් කර ඇති ඉක්මන් සහ කරදරයකින් තොර සේවාවන් අදම අත්විඳින්න.",
      },
      whyChooseUs: {
        title_left: "ඒෂියා ඇසට් ෆිනෑන්ස් ",
        title_right: "තෝරාගත යුත්තේ ඇයි? ",
        description: "අපි ඒෂියා ඇසට් ආයතනය වශයෙන් අවුරුදු 50කට වැඩි කාලයක් පුරා අපගේ ආයෝජන මඟින් විවිධ පුද්ගලයන් සහ ව්‍යාපාර සදහා සහයෝගය ලබාදී ඇත. වඩාත් සාධාරණ රන් ණය, ලීසිං, උකස් ණය, සමූහ පුද්ගලික ණය, පුද්ගලික ණය, ව්‍යාපාර ණය, ආයතනික ණය, ක්ෂුද්‍ර ණය හෝ ඔබේ පොදු තැන්පතු භාර ගැනීම තුලින් තිරසාර ආර්ථිකයක් බිහිකිරීමට සමාජයට උදව් කර තිබීම ගැන අපි ආඩම්බර වෙමු.",
        card1: "ජීවිතයේ සෑම අවස්ථාවකටම  ගැලපෙන මුල්‍ය විසඳුම්",
        card2: "පුද්ගලික හදුනාගැනීමක්  සහිත අසමසම පාරිභෝගික සේවාවක් ",
        card3: "දශක ගණනාවක ප්‍රවීණ පිටුබලයක් සහිත නව්‍ය සේවා ",
    },   
    luckewalletLandingPage: {
      title1: "අපගේ ",
      title2: "Luckewallet ",
      title3: "ජංගම යෙදුම සමඟ ඔබේ මූල්‍ය ගමන පහසු කරගන්න",
      subtitle: "ඔබේ ස්මාට්ෆෝන් එකෙන්ම සිදු කළ හැකි නිරායාස සහ ආරක්ෂිත මූල්‍ය සේවාවන් අත්විඳින්න.",
      learn_more: "තව දැනගන්න",
      key_features1: "ප්‍රධාන ",
      key_features2: "විශේෂාංග",
      feature1_title: "පහසු ගිණුම් කළමනාකරණය",
      feature1_description: "ඔබගේ සියලුම ගිණුම් එකම තැනකින් බැලීමට සහ කළමනාකරණය කරන්න.",
      feature2_title: "ඉක්මන් ණය අයදුම්පත්",
      feature2_description: "ණය සඳහා පහසුවෙන් අයදුම් කිරීමට සහ ඔබගේ අයදුම්පත් තත්ත්වය බාධාවකින් තොරව  බලාගන්න",
      feature3_title: "මාරුකිරීම් සඳහා ඉක්මන් හා පවත්නා සේවාවන්",
      feature3_description: "ක්ෂණික, ආරක්ෂිත, සහ පහසු මාර්ගගත මූල්‍ය සේවාවන් අත්විඳින්න.",
      feature4_title: "තත්‍ය කාලීන දැනුම්දීම්",
      feature4_description: "ගිණුම් ක්‍රියාකාරකම් සහ දීමනා පිළිබඳ ක්ෂණික පණිවිඩ සමඟ යාවත්කාලීන වෙන්න.",
      download_now: "දැන්ම බාගතකරන්න!",
    },
  productsOverviewTextLandingPage: {  
    title: "අපගේ මූල්‍ය නිෂ්පාදන සොයාගන්න",  
    subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
    description: "ඒෂියා ඇසට් ෆිනෑන්ස් හිදී, ඔබේ අත්‍යවශ්‍යතා සපුරාලීම සඳහා සකස් කළ විවිධ මූල්‍ය නිෂ්පාදන අපි සපයන්නෙමු. ඔබ ඔබගේ අරමුදල් වර්ධනය කිරීමට, ණයක් ලබා ගැනීමට, හෝ ආයෝජන අවස්ථා පිලිබද දැනගැනීමට කැමතිද එසේනම් ඔබේ මූල්‍ය සුභසාධනය වෙනුවෙන් සකසා ඇති අපගේ නිෂ්පාදන ඔබට ප්‍රයෝජනවත් වනු ඇත. ආරක්ෂිත ස්ථාවර තැන්පතු, නම්‍යශීලී රන් ණය, සහ කුඩා පොලී ණය අතරින් ඔබට ගැලපෙන විසදුමක් තෝරාගන්න. අපගේ නව්‍ය විද්‍යුත් ඉතුරුම් ගිණුම්, තරඟකාරී විදේශ විනිමය සේවා, සහ පහසු ලීසිං විකල්ප සමඟ, ඔබේ මූල්‍ය ගමනේ සෑම පැතිකඩක්ම ආවරණය කරයි. ඔබගේ මූල්‍ය සාර්ථකත්වය සවිබල ගන්වන විශ්වාසනීය, පුද්ගලාරෝපිත විසඳුම් ලබා දීම වෙනුවෙන් ඔබට අප කෙරෙහි විශ්වාසය තැබිය හැක.",  
},  
  
  productsOverviewLandingPage: [
    { title: "ස්ථාවර තැන්පතු", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/fd.webp`, description: "ස්ථාවර ප්‍රතිලාභ සමඟ ඔබේ ඉතුරුම් සුරක්ෂිත කරගන්න." },
    { title: "රන් ණය", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/gold_loan.webp`, description: "නම්‍යශීලී ඉතුරුම් සමඟ ඔබේ වත්කම් වර්ධනය කරගන්න." },
    { title: "ක්ෂුද්‍ර ණය", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/mortgage.webp`, description: "ඔබේ සෑම අවශ්‍යතාවක් සඳහාම අඩු පොලී අනුපාතවලින් ණය ලබාගන්න." },
    { title: "ලීසිං", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/leasing.webp`, description: "අඩු පොලී අනුපාත සමඟ පහසු වියදම්." },
    { title: "විද්‍යුත් ඉතුරුම් ගිණුම", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/luckewallet.webp`, description: "පුළුල් ආරක්ෂාවක් සහිත විද්‍යුත් ගිණුම්." },
    { title: "විදේශ විනිමය හුවමාරුව", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/forex.webp`, description: "විවිධ විකල්ප සමඟින් ඔබේ ප්‍රතිලාභ උපරිම කරගන්න." },
],
testimonialsText: {
  title: "අපගේ ගනුදෙනුකරුවන් පවසන දේ",
  subtitle: "සාර්ථකත්වය සහ තෘප්තිය පිළිබඳ සැබෑ තොරතුරු",
},
testimonials: [
  {
    personName: "නිරෝශන් ප්‍රනාන්දු",
    location: "තුඩුල්ල සිට",
    imageUrl: "/src/media/testimonials/niroshan_fernando.webp",
    quote: "මම එෂියා ඇසට් ෆිනෑන්ස් ව්ශ්වාසයෙන් තොරාගන්නේ මූල්‍ය ස්ථාවරත්වයේ සහ 54 වසරක අභිමානවත් සේවය නිසයි !",
    rating: 5,
  },
  {
    personName: "එස් යෝගරාජා",
    location: "හෙකිත්ත සිට",
    imageUrl: "/src/media/testimonials/s_yogaraja.webp",
    quote: "මට දිරිය දුන්නේ ඒෂියා ඇසට් තමයි.",
    rating: 5,
  },
  /*{
    personName: "එල් නාලිනි",
    location: "හෙකිත්ත සිට",
    imageUrl: "/src/media/testimonials/l_nalini.webp",
    quote: "Aමට දිරිය දුන්නේ ඒෂියා ඇසට් තමයි.",
  },*/
  {
    personName: "සෞම්‍යා නිලුක්ෂි",
    location: "අවරකොටුව සිට",
    imageUrl: "/src/media/testimonials/saumya_nilukshi.webp",
    quote: "ඒෂියා ඇසෙට් ෆිනෑන්ස් කියන්නේ මනුස්සකම පිරුණු අපේ තැනක්!",
    rating: 5,
  },
],
branchDetailsLandingPage: {
  title1: "අපගේ",
  title2: "ශාඛා",
  subtitle: "මුල්‍ය විසදුම් දැන් පහසුවෙන්ම ඔබ වෙත",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100+ ",
  description3: "අතුරින් එකකට ගොස් අපගේ පුද්ගලාරෝපිත සේවාව අදම අත්විඳින්න. ශ්‍රී ලංකාවේ කොතැන සිටියත් ඔබගේ මූල්‍ය ගමනට සහයක්.",
  //description4: "ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී ",
  //description5: "ඉහළින්ම ප්‍රසිද්ධයි. ශ්‍රී ලංකාවේ ඔබ සිටින තැනට බැගින්, ඔබගේ මූල්‍ය ගමනට අපි සහය වනවා.",
  newbranches_title: "අපගේ නවතම ශාඛා",
  newbranches_description: "අපගේ විශ්වාසනීය මූල්‍ය සේවාවන් ඔබට වඩාත් සමීප කරමින් අපගේ නවතම ශාඛා විවෘත කිරීම පිළිබඳව අපි ඉතා සතුටට පත් වෙමු. මෙම ශාඛා මගින් අපගේ  සේවාවන් දිවයින පුරා සිටින ඔබට ලබාදේ. අපගේ නවතම ශාඛා වෙත පැමිණ ඔබ අපෙන් බලාපොරොත්තු වන විශ්වාසනීය සහ පුද්ගලාරෝපිත සේවාවම අදම අත්විඳින්න.",
  newest_branch_name: "දෙනියාය",
  newest_branch_address: "අංක 196, මධ්‍යම පාර, දෙනියාය",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  our_branch_network_btn: "අපගේ ශාඛා ජාලය",
},
inquiryForm: {
  title: "අප සමඟ අදම සම්බන්ධ වන්න",
  subtitle: "මූල්‍ය විසඳුම් ඔබට තවත් සමීප කරමින්",
  label1: "නම",
  field1: "ඔබේ නම ඇතුළත් කරන්න",
  error1: "කරුණාකර ඔබේ නම ලබා දෙන්න",
  error1_1: "කරුණාකර සත්‍යයින්ගෙන් යුත් විද්‍යුත් තැපැල් ලිපිනයක් ලබා දෙන්න",
  label2: "ජංගම දුරකතන අංකය",
  field2: "ඔබේ ජංගම දුරකතන අංකය ඇතුළත් කරන්න",
  error2: "කරුණාකර ඔබේ ජංගම අංකය ලබා දෙන්න",
  label3: "විද්‍යුත් තැපෑල (අනිවාර්ය නොවේ)",
  field3: "ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
  error3: "කරුණාකර ඔබේ විද්‍යුත් තැපෑල ලබා දෙන්න",
  label4: "පණිවිඩය (අනිවාර්ය නොවේ)",
  field4: "ඔබේ පණිවිඩය මෙහි ඇතුළත් කරන්න",
  error4: "",
  label5: "සේවකයාගේ නම",
  field5: "කරුණාකර සේවකයාගේ නම මෙහි ඇතුලත් කරන්න",
  error5: "",
  label6: "දෙපාර්තමේන්තුව",
  field6: "කරුණාකර දෙපාර්තමේන්තු නම මෙහි ඇතුලත් කරන්න",
  error6: "",
  label7: "ශාඛාව",
  field7: "කරුණාකර මෙහි ශාඛාවේ නම ඇතුලත් කරන්න",
  error7: "",
  label8: "ලිපිනය",
  field8: "කරුණාකර ඔබගේ ලිපිනය ඇතුලත් කරන්න",
  error8: "",
  label9: "ළඟම නගරය",
  field9: "කරුණාකර ඔබට ළඟම නගරය ඇතුලත් කරන්න",
  error9: "",
  label10: "මුදල (අනිවාර්ය නොවේ)",
  field10: "කරුණාකර මුදල ඇතුළත් කරන්න",
  error10: "",
  label11: "සේවාව තෝරන්න",
  field11: "කරුණාකර සේවාවක් තෝරන්න",
  error11: "කරුණාකර සේවාවක් තෝරන්න",
  label12: "භාෂාව තෝරන්න",
  field12: "කරුණාකර භාෂාවක් තෝරන්න",
  error12: "කරුණාකර භාෂාවක් තෝරන්න",
  button1: "යලි සකසන්න",
  button2: "යොමු කරන්න",
  close_btn: "ආපසු",
  response_pass: "ඔබගේ විමසුම සාර්ථකව යවා ඇත!",
  response_fail: "විමසුම යැවීම අසාර්ථකයි! කරුණාකර නැවත උත්සහ කරන්න.",
  inquiry: "විමසීම් ",
  cus_complaint: "පාරිභෝගික පැමිණිලි පෝරමය",
  titleLabel: "ආමන්ත්‍රණය",
  titlePlaceholder: "කරුණාකර ආමන්ත්‍රණයක් තෝරන්න",
  titleOptions: ["මහතා", "මහත්මිය", "මෙනෙවිය", "ආචාර්ය", "මහාචාර්ය", "පූජ්‍ය", "වෙනත්", ],
  customer_details: "පාරිභෝගික තොරතුරු",
  employee_details: "සේවක තොරතුරු",
},

//About Page Components
bannerAbout: {
  src: `${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bannerAbout.webp`,
  title: "අප ගැන",
  intro: "1970 සිට ",
  specialnote: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
  description: "“ මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම ”",
},
cardsAbout: [
  { stat: "70,000+", text: "පාරිභෝගිකයන්", icon: faUsers },
  { stat: "54+", text: "වසර ගණනාවක අත්දැකීම්", icon: faClock },
  { stat: "1000+", text: "සේවකයින්", icon: faBriefcase },
  { stat: "100+", text: "ශාඛා", icon: faBuilding },
],
overviewAbout: {
  title: "හැඳින්වීම",
  description: "වසර 50 කටත් වැඩි කාලයක් ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී හි අපි අපේ අවශ්‍යතා ගණන් කළ නොහැකි තරම් පුද්ගලයින් සහ ව්‍යාපාර සඳහා ආයෝඡනය කර ඇත්තෙමු. අපි වඩාත් සාධාරණ මිල ගණන් යටතේ ලීසිං, උකස් ණය, කණ්ඩායම් ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, ආයතනික ණය, ක්ෂුද්‍ර ණය හෝ ඔබේ පොදු තැන්පතු ලබාගැනීම තුලින් අපි ප්‍රජාවන් තිරසාර ආර්ථිකයන් ලෙස පෝෂණය කිරීම ගැන ආඩම්බර වන්නෙමු. ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී යනු මුතූට් ෆිනෑන්ස් ලිමිටඩ් හි පූර්ණ අනුබද්ධිත ආයතනයක් වන අතර ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි පූර්ණ බලපත්‍රලාභී, තැන්පතු ගැනීමේ ආයතනයකි. මෙම අවශ්‍යතා සපුරාලීම සඳහා වූ සරල ගවේෂණයේදී සමාජයේ මූල්‍ය අවශ්‍යතා දිනෙන් දින වර්ධනය වන අතර වත්කම් වසර ගණනාවක් තිස්සේ වර්ධනය වී ඇති බව අප විසින් වටහා ගන්නා ලදී. අපගේ උත්සාහයන් සැම විටම පැවතුණේ ගනුදෙනුකරුවන්ට ඔවුන් ජීවත් වන ආකාරය සහ ඔවුන් ව්‍යාපාර කරන ආකාරය වර්‍ධනය කරගැනීමට උපකාර කිරීම තුලයි. ඒෂියා ඇසට් ෆිනෑන්ස් පීඑල්සී හි කතාව “මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත වෙනස් කිරීම” පිළිබඳ කතාවකි.",
},
missionVisionGoal: {
  mission: {
    category: "මෙහෙයුම",
    title: "අපගේ පාරිභෝගිකයින්ගේ මූල්‍ය අවශ්‍යතා සඳහා අපි ලබාදෙන විසඳුම් සාම්ප්‍රදායික නොවන, අලුත් කරන ලද සහ ඔවුන්ගේ අවශ්‍යතා සඳහාම වන අතර, අපගේ පාරිභෝගික සේවාව ප්‍රමිතීන් ඉක්මවා ගොස් ඔවුන්ගේ අපේක්ෂාවන් ඉක්මවීමට කැප වී ඇත.",
    description: "",
  },
  vision: {
    category: "දැක්ම",
    title: "මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම",
    description: "",
  },
  goal: {
    category: "ඉලක්කය",
    title: "ශ්‍රී ලංකාවේ ප්‍රමුඛතම මූල්‍ය සමාගමක් වීම",
    description: "",
  }
},
bodTextsAbout: {
  title1: "සමාගමේ අධ්‍යක්ෂ මණ්ඩලය",
  title2: "",
  subtitle: "අපගේ දැක්ම ප්‍රවීණතාවයෙන් සහ අඛණ්ඩතාවයෙන් මෙහෙයවීම ",
  intro: "අපගේ අධ්‍යක්ෂ මණ්ඩලය මූල්‍ය කර්මාන්තය පිළිබඳ විවිධ පසුබිම් අත්දැකීම් සහිත වෘත්තීය දැනුමක් ඇති පිරිසකගෙන් සමන්විත වේ. ඔවුන්ගේ මග පෙන්වීම සහ යෝජනා ඒෂියා ඇසෙට් ෆිනෑන්ස් හි වර්ධනය හා සාර්ථකත්වය සඳහා අවශ්‍ය වේ.",
  chairman_name: "වී ඒ ප්‍රශාන්ත් මහතා",
  chairman_position: "සභාපති",
  chairman_description: "වි ඒ ප්‍රශාන්ත මහතා මූල්‍ය බැංකු ක්ෂේත්‍රයේ 37 වසරක පළපුරුද්දක් ඇති පාරිභෝගික බැංකු සේවා හා කෝපරේට් බැංකු සේවා, භාණ්ඩාගාර මෙහෙයුම් ක්‍රියාකාරීත්වය සහ තොරතුරු ආරක්ෂාව පිළිබඳව විවිධ අත්දැකීම්...",
  ceo_name: "ආර් ජේ ඒ ගුණවර්ධන මහතා",
  ceo_position: "අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරි",
  ceo_description: "මහාචාර්ය රජීව් ගුණවර්ධන, Asia Asset Finance PLC හි ප්‍රධාන විධායක නිලධාරි / අධ්‍යක්ෂ, 2009 දෙසැම්බර් මාසයේ අධ්‍යක්ෂ මණ්ඩලයට පත් විය. සංවිධානයේ දර්ශනය සකස් කිරීම හා ක්‍රියාත්මක කිරීම සඳහා ඔහු වගකියයි...",
  see_more_btn: "වැඩිදුර විස්තර",
  view_profile_btn: "වැඩිදුර විස්තර",
},
comTextsAbout: {  
  title1: "සමාගම්",  
  title2: "කළමනාකරණය",  
  subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
  description: "ඒෂියා ඇසට් ෆිනෑන්ස් හි, අපගේ ආයතනික කළමනාකරණ කණ්ඩායම සමන්විත වන්නේ අත්දැකීම් සම්භාරයක් සහ තීක්ෂ්ණ බුද්ධියක්  සහිත පළපුරුදු වෘත්තිකයන්ගෙන් ය. ඔවුන්ගේ උපායමාර්ගික නායකත්වය සහ විශිෂ්ටත්වය සඳහා වූ කැපවීම අපගේ සමාගමේ සාර්ථකත්වයට හේතු වන අතර, අපි ශ්‍රී ලංකාවේ මූල්‍ය සේවා කර්මාන්තයේ ඉදිරියෙන්ම සිටින බව සහතික කරමු."  
},  

branchNetworktext: {
  title1: "අපගේ ",
  title2: "ශාඛා ජාලය",
  subtitle: "මූල්‍ය විසඳුම් ඔබ වෙත සමීප කරමින් ",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100+ ",
  description3: "අතුරින් එකකට ගොස් ",
  description4: "ඒෂියා ඇසට් ෆිනෑන්ස් ",
  description5: "හි පුද්ගලාරෝපිත සේවාව අත්විඳින්න. ඔබ ශ්‍රී ලංකාවේ කොතැනක සිටියත් ඔබගේ මූල්‍ය ගමනට සහය වීමට අපි මෙහි සිටිමු.",
  label: "ඔබගේ ආසන්නතම ශාඛාව සොයන්න:",
  field: "ශාඛාව සොයන්න...",
  all_tab: " සියලුම කලාප",
  central_tab: "මධ්‍යම කලාපය ",
  eastern_tab: "නැගෙනහිර කලාපය",
  northern_tab: "උතුරු කලාපය",
  sabaragamuwa_tab: "සබරගමුව කලාපය",
  southern_tab: "දක්ෂිණ කලාපය",
  uva_tab: "ඌව කලාපය",
  western_tab: "බස්නාහිර කලාපය",
  northwestern_tab: "වයඹ කලාපය",
  viewOnMapBtn: "සිතියම මත බලන්න",
  callNowBtn: "අමතන්න"
},

  //Investor Relations Page Components
  bannerIR: {
    src: `${import.meta.env.VITE_API_BASE_URL}/media/investorRelations/irPgBanner.webp`,
    title: "අප ගැන",
    intro: "විශ්වාසයෙන් සහ දැක්මෙන් ධනය ගොඩනැඟීම",
    specialnote: "1970 සිට",
    description: "“ ප්‍රගතිය සඳහා හවුල් වීම, තිරසාර සංවර්ධන සංවර්ධනයක් ඇති කිරීම ”"
  },
  corporateProfileIR: {
    title1: "ආයතනික ",
    title2: "පැතිකඩ",
    label1: "සමාගමේ නම",
    field1: "ඒෂියා ඇසට් ෆිනෑන්ස් පිඑල්සි ",
    label2: "සමාගම් ශ්‍රේණිගත කිරීම",
    field2: "Fitch A+",
    label3: "නෛතික ස්වරූපය",
    /*  field3_1: "- 1970 සැප්තැම්බර් 23 දින පුද්ගලික සීමිත සමාගමක් ලෙස සංස්ථාගත කරන ලදී. (1938 අංක 51 දරන සමාගම් ආඥාපනත යටතේ (Cap 145))",
      field3_2: "- 2006 ඔක්තෝබර් 03 දින 1938 අංක 51 දරන සමාගම් ආඥාපනත (Cap 145) යටතේ නම වෙනස් කරන ලදී.",
      field3_3: "- 2008 ජනවාරි 23 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ නැවත ලියාපදිංචි කිරීම.",
      field3_4: "- 2012 මාර්තු 20 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ පොදු සීමිත සමාගමක් බවට පරිවර්තනය කරන ලදී.",
      field3_5: "- ලියාපදිංචි අංකය (1982 අංක 17 දරන සමාගම් පනත යටතේ): PB 139 PQ.",
      field3_6: "- නව ලියාපදිංචි අංකය (2007 අංක 7 දරන සමාගම් පනත යටතේ): PB 139 PQ.", */
      field3_1: "පුද්ගලික සීමාසහිත වගකීම් සමාගමක් ලෙස 1938 අංක 51 දරන සමාගම් ආඥා පනත යටතේ (කැප් 145) 1970 සැප්තැම්බර් 23 දිනදී සහ සමාගම් ආඥාපනත යටතේ අංක 1938 අංක 51 දරණ (2006 ඔක්තෝබර් 03) දින වෙනස් කරන ලදි. 2008 ජනවාරි 23 දිනැති 2007 අංක 07 දරණ සමාගම් පනත යටතේ නැවත ලියාපදිංචි වී 2012 මාර්තු 20 දින ලියාපදිංචි අංකය (1982 අංක 17 දරණ සමාගම් පනත යටතේ) 2007 අංක .07 දරණ සමාගම් පනත යටතේ පොදු සමාගමක් බවට පත් කරන ලදි. නව ලියාපදිංචි අංකය (2007 අංක 7 දරණ සමාගම් පනත යටතේ) පීබී 139 PQ",
    label4: "සමාගම් ලියාපදිංචි අංකය",
    field4: "PB 139 PQ",
    label5: "සමාගමේ නීතිඥයින්",
    field5: "ශිරන්ති ගුණවර්ධන ඇසෝසියේට්ස්, \n අංක 22/1, එලියට් පෙදෙස, කොළඹ 08.",
    label6: "අධ්‍යක්ෂ මණ්ඩලය",
    field6_1: "සභාපති - වී ඒ ප්‍රසාන්ත්",
    field6_2: "ප්‍රධාන විධායක නිලධාරී - ආර් ජේ ඒ ගුණවර්ධන",
    field6_3: "ජී එම් ඇලෙක්සැන්ඩර්",
    field6_4: "කේ ආර් බිජිමොන්",
    field6_5: "කේ ජී කේ පිල්ලේ",
    field6_6: "ආර් ඒ බී බස්නායක",
    field6_7: "ජේ පී ඩී ආර් ජයසේකර",
    field6_8: "ආර් ඩී එස් ගුණසේකර",
    field6_9: "ටි සි ඩි කුමාරසිරි",
    field6_10: "එම්. තිරුනීලකන්දන්",
    label7: "සමාගමේ ලේකම්",
    field7: "රුවනි අංගම්මන මහත්මිය, අංක 76, උද්‍යාන වීදිය, කොළඹ 02.",
    field7_1: "ඊමේල්: companysecretary@asiaassetfinance.lk",
    label8: "සමාගමේ විගණකවරු",
    field8: "KPMG, 32A, සර් මොහොමඩ් මකන් මරික්කාර් මාවත, කොළඹ 03.",
    label9: "බැංකු සහකරුවන්",
  },  
  keyFinancialsIR: {
    title1: "ප්‍රධාන මුල්‍ය ",
    title2: "තොරතුරු",
    card1_title: "මුළු ආදායම",
    card1_amount: "XX,XXX",
    card2_title: "බදු ගෙවීමෙන් පසු ලාභය",
    card2_amount: "XX,XXX",
    card3_title: "මුළු වත්කම්",
    card3_amount: "XX,XXX",
    card4_title: "ආයෝජන මත ප්‍රතිලාභ",
    card4_amount: "XX,XXX",
    card5_title: "කොටසක ඉපැයීම්",
    card5_amount: "XX,XXX",
    share_price_title: "තාවත්කාලීන කොටසක මිල",
    share_price_reg: "XXXXXXXXXX",
    share_price_name: "Asia Asset Finance PLC",
    share_price_amount: "රුපියල් XX.XX",
    share_price_percentage: "XX,XXXX",
    share_price_type: "රුපියල්",
    description_line1: "අපි ඒෂියා ඇසට් ආයතනය වශයෙන් අවුරුදු 50කට වැඩි කාලයක් පුරා අපගේ ආයෝජන මඟින් විවිධ පුද්ගලයන් සහ ව්‍යාපාර සදහා සහයෝගය ලබාදී ඇත",
    description_line2: "Asset Finance PLC යනු Muthoot Finance Ltd හි පූර්ණ අනුබද්ධිත ආයතනයක් වන අතර ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි පූර්ණ බලපත්‍රලාභී, තැන්පතු ලබා ගැනීමේ ආයතනයකි.",
    description_line3: "සමාජයේ මුල්‍ය අවශ්‍යතා වර්ධනය වෙමින් පවතින අතර වසර ගණනාවක් පුර ඒෂියා ඇසට් වර්ධනය වූයේ මෙම අවශ්‍යතා සපුරලිමෙන්ය. අපගේ උත්සාහය සෑම විටම අපගේ ගනුදෙනුකරුවන්ට ඔවුන් ජීවත් වන ආකාරය සහ ඔවුන් ව්‍යාපාර කරන ආකාරය තුළ වර්ධනයක් ලබා ගැනීමට උපකාර කිරීමයි.",
    description_line4: "Asia Asset Finance PLC හි ප්‍රධාන අරමුණ “ මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීමයි ”.",
  },
  documentsIR: {
    title: "බාගතකිරීම්",
    tab1_title: "වාර්ෂික වාර්තා",
    tab1_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab2_title: "උච්චත්වය ඇගැයීම්",
    tab2_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab3_title: "දැයි කාලීන මූල්‍ය වාර්තා",
    tab3_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!",
    tab4_title: "මාසික මූල්‍ය වාර්තා",
    tab4_content: "වර්තමානව වන වාර්තා කිසිවක් අරඹා නැත!"
    },
  
    //Downloads Page Component
    downloadsTexts: {
      title: "බාගත කිරීම්",
      section1: "වාර්ෂික වාර්තා",
      intro1: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section2: "මූල්‍ය වාර්තා",
      intro2: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section3: "පාරිභෝගික තොරතුරු",
      intro3: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section4: "වෙනත් අත්‍යාවශ්‍ය ප්‍රතිපත්ති",
      intro4: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section5: "Debenture Issue 2024",
      intro5: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
    },

    /* privacyPolicy: {
      title: "රහස්යතා ප්රතිපත්තිය",
      description: [
        "",
        "",
        "",
        "",
    ],
    information_collection: "තොරතුරු රැස් කිරීම සහ භාවිතය",
    ic_description: [
      "වඩා හොඳ අත්දැකීමක් සඳහා, අපගේ සේවාව භාවිතා කරන අතරතුර, අපට පුද්ගලිකව හඳුනාගත හැකි ඇතැම් තොරතුරු සැපයීමට අප ඔබට අවශ්‍ය විය හැක. අප ඉල්ලා සිටින තොරතුරු අප විසින් රඳවා ගනු ලබන අතර මෙම රහස්‍යතා ප්‍රතිපත්තියේ විස්තර කර ඇති පරිදි භාවිතා කරනු ඇත.",
      "යෙදුම ඔබව හඳුනා ගැනීමට භාවිතා කරන තොරතුරු රැස් කළ හැකි තෙවන පාර්ශවීය සේවාවන් භාවිතා කරයි.",
    ],
    ic_description_2 : "ඔබ අපගේ සේවාව භාවිතා කරන සෑම විටම, යෙදුමේ දෝෂයක් ඇති වූ විට, අපි ලොග් ඩේටා නමින් ඔබේ දුරකථනයේ දත්ත සහ තොරතුරු (තෙවන පාර්ශවීය නිෂ්පාදන හරහා) රැස් කරන බව ඔබට දැනුම් දීමට අපට අවශ්‍යය. මෙම ලොග් දත්ත වලට ඔබගේ උපාංග අන්තර්ජාල ප්‍රොටෝකෝලය ('IP') ලිපිනය, උපාංගයේ නම, මෙහෙයුම් පද්ධති අනුවාදය, අපගේ සේවාව භාවිතා කරන විට යෙදුමේ වින්‍යාසය, ඔබ සේවාව භාවිතා කරන වේලාව සහ දිනය සහ වෙනත් සංඛ්‍යාලේඛන වැනි තොරතුරු ඇතුළත් විය හැක.",
    cookies: "කුකීස්",
    cookies_text: "මෙම සේවාව මෙම 'කුකීස්' පැහැදිලිව භාවිතා නොකරයි. කෙසේ වෙතත්, යෙදුම තොරතුරු රැස් කිරීමට සහ ඔවුන්ගේ සේවාවන් වැඩිදියුණු කිරීමට 'කුකීස්' භාවිතා කරන තෙවන පාර්ශවීය කේතය සහ පුස්තකාල භාවිතා කළ හැක. ඔබට මෙම කුකීස් පිළිගැනීමට හෝ ප්‍රතික්ෂේප කිරීමට සහ කුකියක් ඔබගේ උපාංගයට යවන්නේ කවදාදැයි දැන ගැනීමට විකල්පයක් ඇත. ඔබ අපගේ කුකීස් ප්‍රතික්ෂේප කිරීමට තෝරා ගන්නේ නම්, ඔබට මෙම සේවාවේ සමහර කොටස් භාවිතා කිරීමට නොහැකි වනු ඇත.",
    service_providers: "සේවා සපයන්නන්",
    service_providers_text_1: "පහත සඳහන් හේතූන් නිසා අපි තුන්වන පාර්ශ්ව සමාගම් සහ පුද්ගලයන් සේවයේ යෙදවිය හැක:",
    service_providers_points: [
      "අපගේ සේවාව පහසු කිරීම සඳහා",
      "අප වෙනුවෙන් සේවාව සැපයීමට",
      "සේවා සම්බන්ධ සේවාවන් ඉටු කිරීමට",
      "අපගේ සේවාව භාවිතා කරන ආකාරය විශ්ලේෂණය කිරීමට අපට සහාය වීමට",
    ],
    service_providers_text_2: "මෙම තෙවන පාර්ශවයන්ට ඔබගේ පුද්ගලික තොරතුරු වෙත ප්‍රවේශය ඇති බව මෙම සේවාව භාවිතා කරන්නන්ට දැනුම් දීමට අපට අවශ්‍යය. හේතුව ඔවුන්ට පැවරී ඇති කාර්යයන් අප වෙනුවෙන් ඉටු කිරීමයි. කෙසේ වෙතත්, තොරතුරු හෙළි නොකිරීමට හෝ වෙනත් අරමුණක් සඳහා භාවිතා නොකිරීමට ඔවුන් බැඳී සිටී.",
    security: "ආරක්ෂක",
    security_text: "ඔබගේ පුද්ගලික තොරතුරු අපට ලබා දීමේ ඔබගේ විශ්වාසය අපි අගය කරමු, එබැවින් අපි එය ආරක්ෂා කිරීමට වාණිජමය වශයෙන් පිළිගත හැකි ක්‍රම භාවිතා කිරීමට උත්සාහ කරමු. නමුත් අන්තර්ජාලය හරහා සම්ප්‍රේෂණය කිරීමේ කිසිදු ක්‍රමයක් හෝ ඉලෙක්ට්‍රොනික ගබඩා කිරීමේ ක්‍රමයක් 100% ආරක්ෂිත සහ විශ්වාසදායක නොවන බව මතක තබා ගන්න, අපට එහි නිරපේක්ෂ ආරක්ෂාව සහතික කළ නොහැක.",
    links_to_other_sites: "වෙනත් අඩවි වෙත සබැඳි",
    links_to_other_sites_text: "මෙම සේවාවෙහි වෙනත් අඩවි වෙත සබැඳි අඩංගු විය හැක. ඔබ තෙවන පාර්ශවීය සබැඳියක් ක්ලික් කළහොත්, ඔබව එම වෙබ් අඩවියට යොමු කරනු ඇත. මෙම බාහිර අඩවි අප විසින් ක්‍රියාත්මක නොවන බව සලකන්න. එබැවින්, මෙම වෙබ් අඩවි වල රහස්‍යතා ප්‍රතිපත්තිය සමාලෝචනය කරන ලෙස අපි ඔබට තරයේ අවවාද කරමු. අපට කිසිදු තෙවන පාර්ශවීය වෙබ් අඩවියක හෝ සේවාවන්හි අන්තර්ගතය, රහස්‍යතා ප්‍රතිපත්ති, හෝ භාවිතයන් සම්බන්ධයෙන් කිසිදු පාලනයක් නොමැති අතර වගකීමක් භාර නොගනිමු.",
    children_privacy: "ළමා පෞද්ගලිකත්වය",
    children_privacy_text: "මෙම සේවාවන් වයස අවුරුදු 13 ට අඩු කිසිවෙකු ආමන්ත්‍රණය නොකරයි. අපි වයස අවුරුදු 13 ට අඩු ළමුන්ගෙන් පුද්ගලිකව හඳුනාගත හැකි තොරතුරු දැනුවත්ව රැස් නොකරමු. වයස අවුරුදු 13 ට අඩු දරුවෙකු අපට පුද්ගලික තොරතුරු ලබා දී ඇති බව අප සොයා ගත් අවස්ථාවක, අපි මෙය අපගේ සේවාදායකයෙන් වහාම මකා දමමු. ඔබ දෙමාපියෙකු හෝ භාරකරුවෙකු නම් සහ ඔබේ දරුවා අපට පුද්ගලික තොරතුරු සපයා ඇති බව ඔබ දන්නේ නම්, කරුණාකර අප හා සම්බන්ධ වන්න එවිට අපට අවශ්‍ය ක්‍රියාමාර්ග ගැනීමට හැකි වනු ඇත.",
    changes_to_this_privacy: "මෙම රහස්‍යතා ප්‍රතිපත්තියට වෙනස්කම්",
    changes_to_this_privacy_text_1: "අපි අපගේ රහස්‍යතා ප්‍රතිපත්තිය කලින් කලට යාවත්කාලීන කළ හැක. මේ අනුව, කිසියම් වෙනසක් සඳහා මෙම පිටුව වරින් වර සමාලෝචනය කිරීමට ඔබට උපදෙස් දෙනු ලැබේ. මෙම පිටුවේ නව රහස්‍යතා ප්‍රතිපත්තිය පළ කිරීමෙන් අපි ඔබට කිසියම් වෙනස්කමක් දන්වන්නෙමු.",
    changes_to_this_privacy_text_2: "මෙම ප්‍රතිපත්තිය 2021-08-01 සිට ක්‍රියාත්මක වේ",
    contact_us: "අපව අමතන්න",
    contact_us_text: "අපගේ රහස්‍යතා ප්‍රතිපත්තිය පිළිබඳව ඔබට කිසියම් ප්‍රශ්නයක් හෝ යෝජනා තිබේ නම්, info@asiassetfinance.lk. හි අප හා සම්බන්ධ වීමට පසුබට නොවන්න.",
  }, */

    privacyPolicy: {
      title: "Privacy Policy",
      description: [
        "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
        "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
        "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
        "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
    ],
    information_collection: "Information Collection and Use",
    ic_description: [
      "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
      "The app does use third party services that may collect information used to identify you.",
    ],
    ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
    cookies: "Cookies",
    cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
    service_providers: "Service Providers",
    service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
    service_providers_points: [
      "To facilitate our Service",
      "To provide the Service on our behalf",
      "To perform Service-related services",
      "To assist us in analyzing how our Service is used",
    ],
    service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
    security: "Security",
    security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
    links_to_other_sites: "Links to Other Sites",
    links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
    children_privacy: "Children’s Privacy",
    children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
    changes_to_this_privacy: "Changes to This Privacy Policy",
    changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
    changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
    contact_us: "Contact Us",
    contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
  },

    //Promotions Page
    promotionsPage: {
      title: "ප්‍රවර්ධන",
      subtitle: "දැනට කිසිදු ප්‍රවර්ධනයක් නොමැත",
      description: "කරුණාකර පසුව මෙම පිටුවට පිවිසෙන්න.",
    },

    //Products & Services Page Components
    bannerProducts: {
      title: "නිෂ්පාදන සහ සේවාවන්",
      intro: "මූල්‍ය විසඳුම් සරල කිරීම",
      specialnote: "1970 සිට",
      description: "“ වර්ධනය හා සාරවත්කම සඳහා හවුල් වීම ”",
    },

    productsSelector: { 
      'Fixed Deposit': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "ස්ථාවර තැන්පතු",
        features: [
          { title: "ඉහළ පොලී අනුපාතය", description: "සාමාන්‍ය ඉතිරිකිරීම් ගිණුම්වලට වඩා වැඩි පොලී අනුපාතයක් ලබාගන්න." },
          { title: "කාර්යක්ෂම කාලසීමා", description: "ඔබේ අවශ්‍යතාවයට ලබැඳි කාලසීමාවක් තෝරාගන්න." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "රන් ණය",
        features: [
          { title: "ක්ෂණික අනුමත කිරීම", description: "ඔබේ රන් අත්තිකාරමක් ලෙස භාවිතා කරමින් වේගයෙන් මුදල් ලබාගන්න." },
          { title: "අඩු පොලී අනුපාත", description: "රන්-පසුබැසුණු ණය සඳහා අගනා පොලී අනුපාත ලබාගන්න." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "මුලික ණය",
        features: [
          { title: "කාර්යක්ෂම පොලී අනුපාත", description: "කුඩා මට්ටමේ මුලික ණය සඳහා අඩු පොලී අනුපාත ලබාගන්න." },
          { title: "තැන්පත් සැලසුම්", description: "ආදායම මත පදනම්ව වෙනස් කළ හැකි මුලික ණය ගෙවීම් සැලසුම්." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "ලිසිං",
        features: [
          { title: "සෞඛ්‍ය ලිසිං විකල්ප", description: "වාහන, උපකරණ හා සෞඛ්‍ය ව්‍යවස්ථා සඳහා සුදුසු මට්ටමේ ලිසිං ලබාගන්න." },
          { title: "වේගවත් සැකසුම", description: "ලිසිං අයදුම් කිරීමේ ක්‍රියාවලිය වේගවත් සහ පහසුයි." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "මුදල් හුවමාරු",
        features: [
          { title: "අගනා අනුපාත", description: "වඩාත් අගනා අනුපාත වලින් විදේශ මුදල් හුවමාරු කරන්න." },
          { title: "බහු මුදල් විකල්ප", description: "විවිධ ජාත්‍යන්තර මුදල් ප්‍රවේශ ලැබෙන්න." },
        ],
      },
    },

    luckewalletProductsPage: {
      description1: "අපේ ආයෝජන 50 වසරකට අධික කාලයක් පුරා ගණනාවක් පිරිනමන පුද්ගලයන් හා ව්‍යාපාර සඳහා අපි අපේ රුචි ආයෝජනය කර ඇත. ඉතා සාධාරණ අනුපාත වලින් ලබාදෙන රන් ණය, ලීසිං, මූල්‍ය ණය, කණ්ඩායම් පුද්ගලික ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, සංස්ථා ණය, කුඩා ණය හෝ ඔබේ මහජන තැන්පතු අපි පිළිගැනීම වැනි සේවාවන් මඟින් අපි රැකවරණයේ ආර්ථික ව්‍යවස්ථා වර්ධනයට ආධාර කළෙමු.",
      description2: "Asia Asset Finance PLC, Muthoot Finance Ltd ආයතනයේ සම්පූර්ණ අනුබද්ධයක් වන අතර ශ්‍රී ලංකා මධ්‍යම බැංකුව විසින් ලියාපදිංචි කරන ලද සම්පූර්ණ බලපත්‍රය ලත් තැන්පතු ලබා ගන්නා ආයතනයකි.",
      kFeature1: "මූලික ",
      kFeature2: "විශේෂාංග",
      f1title: "සැහැල්ලු ගිණුම් කළමනාකරණය",
      f1Text: "ඔබේ සියලු ගිණුම් එක ස්ථානයකින් සරලව නිරීක්ෂණය සහ කළමනාකරණය කරන්න.",
      f2title: "ඉක්මන් ණය අයදුම්",
      f2Text: "ණය සඳහා අයදුම් කරන්න සහ ඔබේ අයදුම් තත්ත්වය සන්සුන්ව මිනුම් කරන්න.",
      f3title: "මාරුකිරීම් සඳහා ඉක්මන් හා පවත්නා සේවාවන්",
      f3Text: "ක්ෂණික, ආරක්ෂිත, සහ පහසු මාර්ගගත මූල්‍ය සේවාවන් අත්විඳින්න.",
      f4title: "සජීවී දැනුම්දීම්",
      f4Text: "ගිණුම් ක්‍රියාකාරකම් සහ දීමනා පිළිබඳ වහාම දැනුවත් වන්න.",
    },
    
    
    

    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//

    //Careers Page Components
    careersBanner: {
      title: "රැකියා",
      description: "අප සමඟ ඔබේ අනාගතය මවන්න!",
    },
    
    titleCareers: {
      title1: "නව ",
      title2: "බඳවාගැනීම්",
      description1: "ඒෂියා ඇසට් ෆිනෑන්ස් හි අපි කරන කාර්යයන් මෙයයි. අපි පුද්ගලයින්ට ඔවුන් අපේක්ෂා කරන ජීවන තත්ත්වය සාර්ථකව ලගා කර ගැනීමට සහය දක්වන්නෙමු. ව්‍යාපාරවලට ඔවුන්ගේ ව්‍යාපාර ගොඩනගා ගැනීමට අපි ඔවුන්ව බල ගන්වන්නෙමු. අපි මූල්‍ය විෂමතාව අඩු කිරීමට ක්‍රියාකාරී ලෙස කටයුතු කරන්නෙමු.",
      description2: "අපි  ආර්ථිකයන් ගොඩනැගීමට සහ සමාජ සීමාවන් බිඳ දැමීමට ආශාවක් ඇති අධිෂ්ඨානශීලී වෘත්තිකයන් නිරන්තරයෙන් සොයන්නෙමු. එබැවින් ඔබ තුළ අපට අවශ්‍ය දේ ඇති බව ඔබ සිතනවානම්, පහත සඳහන් තනතුරු සඳහා අයදුම් කරන්න!",
    },


    //------------------------------------------------------ Products Pages --------------------------------------------------------------//

    //Gold Loan Page Components
    goldLoanPage: {
      title: "රන් ණය",
      description: "අපි ලොව පුරා විශාලතම රන් ණය සේවා සපයන බහුජාතික මූල්‍ය සේවා සපයන්නෙකු වන මුතූට් ෆිනෑන්ස් හි පූර්ණ අනුබද්ධිත ආයතනයක් වෙමු. අපගේ රන් ණය සේවා සමඟින්, ඔබේ රත්‍රන් සඳහා මුදල් කරගැනීමට මිනිත්තු කිහිපයකට වඩා ගත නොවේ. ඔබට අවශ්‍ය වන්නේ රත්‍රන් පමණි.",
      kfd: "/src/media/attachments/customerProtectionFramework/si_key_fact_document_gl.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/si_gl_cat.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "ස්ථාවර තැන්පතු",
      description: "ඉතිරි කිරීම ආරම්භ කිරීමට කිසිවිටෙක නරක කාලයක් නොවන අතර අප සමඟ ඉතිරි කිරීම ආරම්භ කිරීම කිසිදු අයුරකින් නරක අදහසක් නොවේ. වසර 50කට අධික ඉතිහාසයක් ඇති Asia Asset Finance PLC වන අප ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි මූල්‍ය සමාගමක් ලෙස ආයෝජන හවුල්කරුවෙකු බවට පත්ව ඇත. තරඟකාරී ස්ථාවර ප්‍රතිලාභ සහතික කිරීම සඳහා නිර්මාණය කර ඇති තැන්පතු අනුපාත ඔබ වෙත පිරිනමමින් අපි ඔබේ වත්කම් හි ආරක්ෂාව සහතික කරමු. ශ්‍රී ලංකාව විවිධ ආර්ථික අර්බුද වලට මුහුණ දී ඇති අතර, එසේ තිබියදීත් ඒෂියා  ඇසට් ආයතනය සෑම විටම ඔබට සිය සේවාව ලබා දී ඇත.",
      kfd: "/src/media/attachments/customerProtectionFramework/si_key_fact_document_fd.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "පොලී අනුපාත",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: "/src/media/uploads/fd_collection_accounts.webp",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      fdRates: "/src/media/uploads/si_fd_rates.webp",
      charges_tariff: "",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "ලීසිං ණය",
      description: "ඔබ ඔබේ සිහින වාහනය ධාවනය නොකළ යුතු බව කිසිවෙකුට පැවසීමට ඉඩ නොදෙන්න! ඔබට පැදවීමට අවශ්‍ය ඕනෑම වාහනයක් මිලදී ගැනීමට අවශ්‍ය සහය ඔබේ ළඟම ඇති ඒෂියා ඇසට් ශාඛාවක් වෙත ගොස් ලබාගැනීමට දැන් ඔබට අවස්ථාව ඇත. ඔබ අපගෙන් මේ සඳහා අයදුම් කරන විට අපගේ පුහුණු වෘත්තිකයන් ඔබට වෙළඳපොලේ ඇති හොඳම පොලී අනුපාත, අවම ලේඛන, කරදරයකින් තොර, නම්‍යශීලී ආපසු ගෙවීමේ නියමයන් ඇතුලු සේවා රැසක් ඔබගේ නිවසටම පැමිණ ලබාදේ. එබැවින්, අපත් සමඟ පහසුවෙන් ඔබේ සිහින වාහනය ලබාගන්න!",
      kfd: "/src/media/attachments/customerProtectionFramework/si_key_fact_document_l.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/si_l_cat.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "උකස් ණය",
      description: "ඒෂියා ඇසට් හි අපි ඔබගේ මූල්‍ය ජීවන රටාව ඉහළ නැංවීම සඳහා අප උත්සහා කරන්නෙමු. ඔබට ගැටළු වන සියල්ල අපි දැනටමත් විසඳා ඇත. අපි ඔබට විශිෂ්ට, ඵලදායී සහ කාර්යක්ෂම සේවාවක් ලබාදීමට පොරොන්දු වන්නෙමු. අපි ඔබට දිය හැකි සාධාරණම ගාස්තු ලබාදීමට පොරොන්දු වන්නෙමු. සියල්ලට පසු, මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම අපගේ මෙහෙවරයි! ",
      kfd: "/src/media/attachments/customerProtectionFramework/si_key_fact_document_m.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      btn_3: "පාරිභෝගික තොරතුරු ලේඛන",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/si_m_cat.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "විදේශ විනිමය",
      description: "Asia Asset Finance හි ඔබට ඔබගේ විදේශ විනිමය ගනුදෙනු ක්ෂණිකව සිදු කර ගත හැක. ඔබගේ මුදල් සමඟ අපගේ කවුන්ටරයන්ගෙන් එකකට ගොස් හුවමාරුව  සිදුවන අයුරු බලාසිටින්න.  Forex  විස්තර කිරීමේ සරලම ආකාරය ලෙස, එක්  මුදල් වර්ගයක් මිලදී ගැනීම සඳහා තවත් මුදල් ඒකකයක් විකිණීම විස්තර කලහැකිය. මෙය සෑම විටම යුගල වශයෙන් උපුටා දක්වා ඇත- එනම්, පාදක (මිලදී ගත්) මුදල් ඒකකයක් උද්ධෘත (විකුණුම්) මුදල් අනුව කොපමණ වේද ලෙසයි. අපගේ වෘත්තීය උපදෙස් සමඟින් ඔබේ ධනය වැඩි වන අයුරු බලාගැනීමට ඔබට අවස්ථාව ලැබේ. ",
      btn_1: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_2: "",
      btn_3: "",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "",
      our_partners: "අපගේ හවුල්කරුවන්",

    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "ඕනෑම තැනක සිට ඔබේ වත්කම් වෙත ප්‍රවේශ වන්න",
      description: ["Luckewallet ශ්‍රී ලංකාවේ ප්‍රමුඛතම ගෙවීම් වේදිකාව ලෙස ස්ථිරව තහවුරු වී ඇති අතර, එහි ඉහළ ගනුදෙනු ප්‍රමානය සහ පාරිභෝගික පදනම සඳහා ද ප්‍රචලිත වේ. ලකීවොලට් ඩිජිටල් ඉතුරුම් ගිණුම්, ඩිජිටල් ස්ථාවර තැන්පතු සහ රන් ණය පොලී ගෙවීම් ඇතුළු පුළුල් පරාසයක මූල්‍ය සේවා සපයයි. අමතරව, පරිශීලකයින්ට භෞතික ශාඛාවකට නොපැමිණ පාරිභෝගික සේවා බිල්පත් සහ ක්‍රෙඩිට් කාඩ් ගෙවීම් ද මේ තුලින් සිදුකල හැක. එමෙන්ම මෙය සැලසුම් කර ඇත්තේ පාරිභෝගිකයින් සහ වෙළෙන්දන් බාධාවකින් තොරව සම්බන්ධ කිරීමට, මෙන්ම ආරක්ෂිත සහ ඒකාබද්ධ අත්දැකීමක් ලබා දීම සඳහා ය.",
        "ඉතා තරඟකාරී පොලී අනුපාතය අපගේ ඩිජිටල් ඉතුරුම් ගිණුම් සේවාව සඳහා ඇති විශේෂාංගයක් වන අතර එය වෙළඳපොල තුල කැපී පෙනේ. විද්‍යුත් ඉතුරුම් ගිණුම මඟින් පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් ඩිජිටල් ලෙස කළමනාකරණය කිරීමේ නම්‍යශීලීභාවය සහ පහසුවෙන් ඔවුන්ගේ ඉතුරුම් සඳහා පොලී උපයා ගැනීමේ හැකියාව ලබා දේ. සාමාන්‍යයෙන් සාම්ප්‍රදායික ඉතුරුම් ගිණුම්වලට වඩා වැඩි පොලී ඉපැයීමේ අමතර ප්‍රතිලාභයක් සමඟින් පාරිභෝගිකයින්ට ඔවුන්ගේ ඩිජිටල් ඉතුරුම් ගිණුම්,  යෙදුම හරහා සෘජුවම විවෘත කර කළමනාකරණය කළ හැකිය. මෙම විශේෂාංගය පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් වෙත ප්‍රවේශ වීමේ පහසුව  මෙන්ම ඕනෑම වේලාවක ඔවුන්ගේ ගිණුම් ක්‍රියාකාරකම් නිරීක්ෂණය කිරීමේ පහසුව සමඟින් ඉතුරුම් පහසුවෙන් වර්ධනය කර ගැනීමට ඉඩ සලසයි.",
        "Luckewallet සාමාන්‍ය ගෙවීම් වේදිකාවක් ලෙසට සීමා නොවී, සම්පූර්ණ පද්ධතියක් ලෙස ස්ථාපිත වෙමින්, විශ්වාසදායී වෙළඳ-ලබාගැනීමේ හවුල්කරු ලෙස සේවය කරයි. ඉහළ මට්ටමේ මෘදුකාංග ව්‍යුහ සම්පාදනය සඳහා ජාත්‍යන්තර වශයෙන් ප්‍රසිද්ධ මෙම යෙදුම, මෘදු සහ කාර්යක්ෂම පාරිභෝගික අත්දැකීමක් ලබා දීමට නිරන්තරයෙන් වැඩිදියුණු කරයි. මූලික විශේෂාංග සඳහා පහසුවෙන් පාරිභෝගිකයින් එක් කිරීම, ස්වයං ලියාපදිංචි කිරීම, මෙන්ම ජංගම ඇමතුම් රිචාජ් සහ අනෙකුත් බැංකු ගිණුම් සමඟ සෘජු ගනුදෙනු වැනි විවිධ සේවාවන් ඇතුළත් වේ. ඩිජිටල් ඉතුරුම් ගිණුම සහ එහි තරඟකාරී පොලී අනුපාතය සමඟ, Luckewallet ඩිජිටල් ගනුදෙනු පමණක් නොව, පරිශීලකයින්ට ඔවුන්ගේ මූල්‍ය අනාගතය ගොඩනැගීමට උපකාරී වේ.",
                  ],
      kfd: "/src/media/attachments/customerProtectionFramework/si_key_fact_document_s.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "පාරිභෝගික තොරතුරු ලේඛන",
      btn_3: "",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "",
      
    },
    
    //Contacts Page Components
    contactsPage: {
      title1: "සම්බන්ධ ",
      title2: "වන්න",
      subtitle: " ඔබට අවශ්‍ය සහාය ලබා දීමට අපි සූදානම්. අදම අප හා සම්බන්ධ වන්න!",
      card1title: "ලිපිනය",
      card1Body: "අංක 76, උද්‍යාන වීදිය, කොළඹ 02",
      card2title: "පාරිභෝගික සේවා",
      card2Body: "011 71 70 712",
      card3title: "දුරකථන අංකය",
      card3Body: "011 76 99 000",
      card4title: "ඊමේල්",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "පැමිණිලි",
      card5Body: "077 79 99 922",
      card6title: "ක්ෂණික ඇමතුම්",
      card6Body: "1369",
    } 
    },
  },
  ta: {
    translation: {
      //Header Component
      header: {
        title: "தொடர்பு கொள்ள",
      },
      //Navbar component
      navbar: {
        home: "முகப்பு",
        about: "எங்களைப் பற்றி",
        about_dropdown0: "கண்ணோட்டம்",
        about_dropdown1: "நோக்கம், பார்வை மற்றும் இலக்கு",
        about_dropdown2: "பணிப்பாளர்கள் குழுமம்",
        about_dropdown3: "நிறுவன மேலாண்மை",
        about_dropdown4: "கிளை வலையமைப்பு",
        products: "சேவைகள்",
        products_dropdown1: "கண்ணோட்டம்",
        products_dropdown2: "தங்கக்கடன்",
        products_dropdown3: "நிலையான வைப்புக்கள்",
        products_dropdown4: "குத்தகை",
        products_dropdown5: "அடைமானம்",
        products_dropdown6: "வெளிநாட்டு நாணய மாற்று",
        products_dropdown7: "Luckewallet",
        investor_relations: "முதலீட்டாளர் தொடர்புகள்",
        investor_relations_dropdown1: "நிறுவன விவரம்",
        investor_relations_dropdown2: "நிதித்தரவுகள்",
        careers: "தொழில்வாய்ப்புக்கள்",
        downloads: "பதிவிறக்கங்கள்",
        contacts: "தொடர்பு கொள்ள",
      },

      //Footer Component
      footerListItems: [
        { title: "எங்களைப் பற்றி", list: ["கண்ணோட்டம்", "பணிப்பாளர்கள் குழுமம்", "நிறுவன மேலாண்மை", "கிளை வலையமைப்புக்கள்"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/branchnetwork"] },
        { title: "சேவைகள்", list: ["தங்கக்கடன்", "நிலையான வைப்புக்கள்", "குத்தகை", "அடைமானம்", "வெளிநாட்டு நாணய மாற்று", "Luckewallet"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/luckewallet"] },
        { title: "முதலீட்டாளர் தொடர்புகள்", list: ["நிறுவன விவரம்", "நிதித்தரவுகள்", "பதிவிறக்கங்கள்"], links: ["/ir", "/ir/#financial-keys", "/downloads"] },
        { title: "ஏனைய இணைப்புகள்", list: ["தொழில்வாய்ப்புக்கள்", "தொடர்பு கொள்ள", "சலுகைள்", "தனியுரிமைக் கொள்கை", "வாடிக்கையாளர் புகார் படிவம்"], links: ["/careers", "/contacts", "/promotions", "/downloads/privacy-policy", "contacts/complaints/#complaint-form"] },
      ],


      footerText: {
        subs_title1: "உங்கள் அருகிலுள்ள நிதி தீர்வுகளை கொண்டுவருதல்",
        subs_title2: "புதிய புதுப்பிப்புகளுக்காக பதிவு செய்யவும்",
        subs_title3: "எங்களிடமிருந்து",
        subs_message: "எங்கள் ஆஃபர்களையும் புதுப்பிப்புகளையும் உங்கள் இனைத்து பெட்டியில் பெற பதிவு செய்யவும்.",
        subs_field: "உங்கள் மின்னஞ்சல் எண் உள்ளிடவும்",
        subs_btn: "சமர்ப்பிக்கவும்",
        intro: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ, 1970 செப்டம்பர் 23 ஆம் தேதி நிறுவப்பட்டது, Fitch rating A+ நிலையான முன்னோக்கி மதிப்பீடு மற்றும் இலங்கை மத்திய வங்கியின் நிதி வாரியத்தால் நிதி வணிக சட்டம் இல. 42 - 2011 இல் உரிமம் பெற்றுள்ளது.",
        address: "தலைமையகம்: எண் 76, பார்க் தெரு, கொழும்பு 02, இலங்கை",
      },
      
      
      //Landing Page Components
      tempData: {
        debenture_btn: "Debenture Issues 2024",
      },

      carouselLandingPage: [
        
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg1.webp`,
          title: "உங்கள் நிதி எதிர்காலத்திற்கு புதிய தீர்வுகள்",
          intro: "உங்கள் நிதி எதிர்காலத்தை சக்திவாய்ந்ததாக ஆக்குதல்",
          description: "ஏசியா எசட் பைனான்ஸ் நிறுவனத்தில், நிதி வெற்றியைத் தூண்டும் புதுமையின் சக்தியை நாங்கள் நம்புகிறோம். பொருத்தமான நிதித் தீர்வுகளை வழங்குவதில் எங்களின் அர்ப்பணிப்பு இலங்கையின் நிதித்துறையில் முன்னணியில் எங்களை நிலைநிறுத்தியுள்ளது. உங்களின் அடுத்த பெரிய திட்டத்தில் முதலீடு செய்ய, சேமிக்க அல்லது நிதியுதவி செய்ய நீங்கள் விரும்பினாலும், நம்பிக்கையுடனும் வெளிப்படைத்தன்மையுடனும் உங்கள் பயணத்தை ஆதரிக்க நாங்கள் இங்கு இருக்கிறோம்.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg2.webp`,
          title: "கனவுகளுக்கான நிதி தீர்வுகள் சந்திக்கும் இடம்",
          intro: "புதுப்பிக்கப்பட்ட நிதி முன்னுதாரண வளர்ச்சி ",
          description:
            "நாங்கள் ஒரு நிதி நிறுவனம் அல்ல, நாங்கள் உங்கள் பங்காளிகள். நிதிக்கான எங்களின் புதுமையான அணுகுமுறையானது இலங்கை முழுவதிலும் உள்ள தனிநபர்கள் மற்றும் வணிகங்களை மேம்படுத்துவதற்காக வடிவமைக்கப்பட்டுள்ளது. தனிப்பயனாக்கப்பட்ட சேவையுடன் அதிநவீன தொழில்நுட்பத்தை இணைப்பதன் மூலம், உங்கள் இலக்குகளை அடைய உங்களுக்கு உதவுவதில் திறமையானவை மட்டுமல்ல, பயனுள்ள நிதித் தீர்வுகளையும் நாங்கள் வழங்குகிறோம்.",
        },
        {
          src: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/bannerimg3.webp`,
          title: "இலங்கை நிதித்துறையில் முன்னோடியாக முன்னேறி செல்கிறோம் ",
          intro: "உங்கள் நம்பிக்கை எமது பொறுப்பு ",
          description:
            "நம்பிக்கையும் வெளிப்படைத்தன்மையும் எங்கள் வணிகத்தின் மூலக்கற்கள். இலங்கையின் நிதித்துறையில் ஒரு தலைவன் என்ற வகையில், நாம் செய்யும் எல்லாவற்றிலும் ஒருமைப்பாட்டின் மிக உயர்ந்த தரத்தைப் பேணுவதற்கு நாங்கள் உறுதிபூண்டுள்ளோம். எங்களின் முதல் தொடர்பு முதல் இறுதி பரிவர்த்தனை வரை, உங்கள் தேவைகளுக்கு ஏற்ப தெளிவான, நேர்மையான ஆலோசனை மற்றும் சேவைகளை வழங்குவதற்கு நீங்கள் எங்களை நம்பலாம்.",
        },
      ],
      landingPageCards: {
        card1_title: "நிபுணர் அணி",
        card1_description: "எங்கள் நிதி நிபுணர்களின் அறிவையும் அனுபவத்தையும் உங்கள்  வெற்றி பாதையில் பயணிக்க பயன்படுத்துங்கள்.",
        card2_title: "பரந்த அணுகல்",
        card2_description: "இலங்கை முழுவதும் உள்ள வாடிக்கையாளர்களின் தேவைகளுக்கு  ஏற்றவாறு வடிவமைக்கப்பட்ட விரிவான நிதி தயாரிப்புகளை வழங்குதல்",
        card3_title: "வேகமான செயல்திறன்மிக்க சேவை ",
        card3_description: "உங்கள் நேரத்தை மிச்சப்படுத்தவும் மற்றும் உங்கள் நிதி பயணத்தை எளிதாக்கவும் வடிவமைக்கப்பட்ட விரைவான மற்றும் தடங்கல் அற்ற சேவைகளை அனுபவிக்கவும்.",
      },
      whyChooseUs: {
        title_left: "ஏசியா எசட் பைனான்ஸ் ",
        title_right: "ஏன் தேர்வு செய்ய வேண்டும்",
        description: "50 ஆண்டுகளுக்கு மேல், ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனமாக நாம், எங்கள் ஆர்வத்தை எண்ணற்ற நபர்களுக்கும் வணிகங்களுக்கும் முதலீடு செய்துள்ளோம். அதில், நாம் வழங்கும் மிகவும் சாதாரண விகிதத்தில் தங்கக்கடன், குத்தகை, அடமான கடன்கள், குழு கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், சிறிய கடன்கள் அல்லது உங்கள் பொதுவான வைப்புக்களை ஏற்றுக்கொள்வதில், இந்த சமுதாயங்களை நிலையான பொருளாதாரமாக வளர்த்துவைத்துள்ளோம் என நாங்கள் பெருமையில் அடைகிறோம்.",
        card1: "வாழ்க்கையின் ஒவ்வொரு கட்டத்திற்கும் என வடிவமைக்கப்பட்ட நிதித் தீர்வுகள்",
        card2: "உங்களுக்காக வடிவமைக்கப்பட்ட இணையற்ற வாடிக்கையாளர் சேவை",
        card3: "தசாப்தகாலமாக நிறைந்த நிபுணத்துவத்தால் உருவாக்கப்பட்ட புதுமையான தயாரிப்புகள்",
    },  
    luckewalletLandingPage: {
      title1: "உங்கள் நிதி பயணத்தை எளிமையாக்குங்கள் ",
      title2: "Luckewallet ",
      title3: "மொபைல் ஆப்ஸுடன்",
      subtitle: "தடையற்ற அனுபவம் பாதுகாப்பான நிதி சேவைகள்உங்கள் தொலைபேசியிலிருந்து ",
      learn_more: "மேலும் அறிய",
      key_features1: "முக்கிய ",
      key_features2: "அம்சங்கள்",
      feature1_title: "எளிய கணக்கு நிர்வாகம்", //1st point
      feature1_description: "உங்கள் கணக்குகள் அனைத்தையும் ஒரே இடத்தில் எளிதாகப் பார்க்கலாம் மற்றும் நிர்வகிக்கலாம்.",
      feature2_title: "விரைவான கடன் விண்ணப்பங்கள்", //2nd point
      feature2_description: "கடன் பெற  விண்ணப்பிக்கவும்,உங்கள் விண்ணப்ப செயற்பாடுகளை கண்காணிக்கவும்.",
      feature3_title: "பாதுகாப்பான பண பரிமாற்றங்கள்", //3rd point
      feature3_description: "மேம்படுத்தப்பட்ட பாதுகாப்பு நெறிமுறைகளுடன் பாதுகாப்பான மற்றும் விரைவான பணப் பரிவர்த்தனைகளை மேற்கொள்ளுங்கள்.",
      feature4_title: "உடனுக்குடன் அறிவிப்புகள்", //4th point
      feature4_description: "கணக்கு நடவடிக்கைகள் மற்றும் சலுகைகள் பற்றிய உடனடி தகவல்களை அறிந்துகொள்ளுங்கள்.",
      download_now: "இப்போதே பதிவிறக்கவும்!",
    }, 
  productsOverviewTextLandingPage: {  
    title: "எங்கள் நிதி தயாரிப்புகளை கண்டறியவும்",  
    subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கு விரிவான தீர்வுகள்",  
    description: "ஏசியா எசட் பைனான்ஸ், உங்களின் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்யும் வகையில் பல்வேறு வகையான நிதித் தயாரிப்புகளை நாங்கள் வழங்குகிறோம். நீங்கள் உங்கள் சேமிப்பை அதிகரிக்க விரும்பினாலும், கடனைப் பெற விரும்பினாலும் அல்லது முதலீட்டு வாய்ப்புகளை ஆராய விரும்பினாலும், உங்கள் நிதி நலனைக் கருத்தில் கொண்டு எங்கள் சலுகைகள் வடிவமைக்கப்பட்டுள்ளன. உங்களுக்கான சரியாக பொருந்தும் சேவையை கண்டறிய எங்களின் பாதுகாப்பான நிலையான வைப்புத்தொகை,  தங்கக் கடன்கள் மற்றும் ஆதரவான மைக்ரோ அடமானக் கடன்களில் இருந்து தேர்வு செய்யவும். எங்களின் புதுமையான மின்-சேமிப்பு கணக்குகள், போட்டித்தன்மை வாய்ந்த அந்நியச் செலாவணி சேவைகள் மற்றும் வசதியான குத்தகை விருப்பங்கள் மூலம், உங்கள் நிதிப் பயணத்தின் ஒவ்வொரு அம்சமும் உள்ளடக்கப்பட்டிருப்பதை உறுதிசெய்கிறோம். உங்கள் நிதி வெற்றியை மேம்படுத்தும் நம்பகமான, தனிப்பயனாக்கப்பட்ட தீர்வுகளை வழங்க எங்களை நம்புங்கள்.",  
},  

  productsOverviewLandingPage: [
    { title: "நிலையான வைப்பு", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/fd.webp`, description: "நிலையான வருவாயுடன் உங்கள் சேமிப்புகளைப் பாதுகாக்கவும்." },
    { title: "தங்கக்கடன்", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/gold_loan.webp`, description: "நெகிழ்வான சேமிப்புடன் உங்கள் செல்வத்தை வளர்த்துக் கொள்ளுங்கள்." },
    { title: "அடைமானம்", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/mortgage.webp`, description: "உங்கள் ஒவ்வொரு தேவைக்கும் மலிவு கடன்." },
    { title: "குத்தகை", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/leasing.webp`, description: "குறைந்த வட்டி விகிதங்களுடன் வசதியான செலவினம்." },
    { title: "E - சேமிப்பு", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/luckewallet.webp`, description: "மன அமைதிக்கான விரிவான பாதுகாப்பு." },
    { title: "வெளிநாட்டு நாணய மாற்று", image: `${import.meta.env.VITE_API_BASE_URL}/media/landingPage/forex.webp`, description: "பல்வேறு விருப்பங்களுடன் உங்கள் வருமானத்தை அதிகரிக்கவும்." },
],
testimonialsText: {  
  title: "எமது வாடிக்கையாளர்கள் எம்மை பற்றி தெரிவித்த கருத்துக்கள்",  
  subtitle: "வெற்றிக்கும் நமது திருப்திகரமான சேவைக்கும் உள்ள கதைகள்",  
},  

testimonials: [
  {
    personName: "நிரோஷன் பெர்னாண்டோ",
    location: "துடல்லையில் இருந்து ",
    imageUrl: "/src/media/testimonials/niroshan_fernando.webp",
    quote: "A+ மதிப்பீடு, 54 ஆண்டு பாரம்பரியம் மற்றும் விதிவிலக்கான சேவைக்காக நான் ஏசியா எசட்தான் நம்புகிறேன்.",
    rating: 5,
  },
  {
    personName: "S யோகராஜா",
    location: "ஹெகித்தையில் இருந்து ",
    imageUrl: "/src/media/testimonials/s_yogaraja.webp",
    quote: "ஏசியா எசட்தான் எனக்கு கை கொடுத்தது.",
    rating: 5,
  },
  /*{
    personName: "L நளினி",
    location: "ஹெகித்தையில் இருந்து ",
    imageUrl: "/src/media/testimonials/l_nalini.webp",
    quote: "ஏசியா எசட்தான் எனக்கு கை கொடுத்தது.",
  },*/
  {
    personName: "சௌமியா நிலுக்ஷி",
    location: "அவரகொட்டுவையில்  இருந்து",
    imageUrl: "/src/media/testimonials/saumya_nilukshi.webp",
    quote: "ஏசியா எசட் பினான்ஸ் மனிதநேயம் நிறைந்த எங்கள் இடம்!",
    rating: 5,
  },
],
branchDetailsLandingPage: {
  title1: "எமது ",
  title2: "கிளைகள்",
  subtitle: "நிதி தீர்வுகளை உங்களுக்கு மேலும் அருகாமையில் கொண்டுவருகிறோம்",
  description1: "இன்றே ",
  description2: "எங்களின் 100+ கிளைகளில் ",
  description3: "ஒன்றுக்கு சென்று மற்றும் ",
  description4: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ",
  description5: "முன்னெடுக்கப்படும் தனித்துவமான  சேவையை பெற்றிடுங்கள் . நீங்கள் இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் தேவைகளை பூர்த்தி செய்ய அதற்க்கு ஆதரவளிக்க நாங்கள்  இருக்கிறோம்.",
  newbranches_title: "எங்கள் புதிய கிளைகள்",
  newbranches_description: "நாங்கள் எங்கள் புதிய கிளைகளைத் தொடங்கியதை அறிவிக்க பெருமகிழ்ச்சி அடைகிறோம், எங்கள் நம்பகமான நிதி சேவைகளை உங்களிடம் மேலும் அருகாமையில் கொண்டுவருகிறோம். அணுகல் மற்றும் சமூக ஆதரவு ஆகியவற்றிற்கான எங்கள் முழு அர்ப்பணிப்பின் ஒரு பகுதியாக, இந்த கிளைகள் ஏசியா ஆசெட் ஃபைனான்ஸின் முழுமையான தயாரிப்புகள் மற்றும் சேவைகளை வழங்கத் தயாராக உள்ளன. எங்கள் சமீபத்திய இடங்களில் எங்களை பார்வையிடுங்கள், நீங்கள் எதிர்பார்க்கும் அதே நம்பகமான மற்றும் தனிப்பயனாக்கப்பட்ட சேவையை அனுபவிக்கவும்.",
  newest_branch_name: "டெனியாயா",
  newest_branch_address: "எண் 196, மெயின் வீதி, டெனியாயா",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk",
  btn: "கிளை வலையமைப்புக்கள்",
  our_branch_network_btn: "எங்கள் கிளை நெட்வொர்க்",

},
inquiryForm: {
  title: "இன்றே எங்களை தொடர்பு கொள்ளுங்கள்",
  subtitle: "",
  label1: "பெயர்",
  field1: "உங்கள் பெயரை உள்ளிடவும்",
  error1: "தயவுசெய்து உங்கள் பெயரை வழங்கவும்",
  error1_1: "தயவுசெய்து சரியான மின்னஞ்சல் முகவரியை வழங்கவும்",
  label2: "கைபேசி எண்",
  field2: "உங்கள் கைபேசி எண்ணை உள்ளிடவும்",
  error2: "தயவுசெய்து உங்கள் கைபேசி எண்ணை வழங்கவும்",
  label3: "மின்னஞ்சல்",
  field3: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
  error3: "தயவுசெய்து உங்கள் மின்னஞ்சலை வழங்கவும்",
  label4: "விசாரணை",
  field4: "உங்கள் விசாரணையை இங்கே உள்ளிடவும்",
  error4: "",
  label5: "ஊழியரின் பெயர்",
  field5: "ஊழியரின் பெயரை இங்கே  உள்ளிடவும்",
  error5: "",
  label6: "துறை",
  field6: "துறையின் பெயரை இங்கே உள்ளிடவும்",
  error6: "",
  label7: "கிளை",
  field7: "கிளையின் பெயரை இங்கே உள்ளிடவும்",
  error7: "",
  label8: "முகவரி ",
  field8: "Enter your address here",
  error8: "",
  label9: "நகரம் ",
  field9: "Enter your nearest city here",
  error9: "",
  button1: "மீள அமைக்க",
  button2: "சமர்ப்பிக்கவும்",
  inquiry: "விசாரணை படிவம்",
  cus_complaint: "வாடிக்கையாளர் புகார்",
  titleLabel: "தலைப்பு",
  titlePlaceholder: "தயவுசெய்து உங்கள் தலைப்பைத் தேர்ந்தெடுக்கவும்",
  titleOptions: [ "திரு", "செல்வி", "திருமதி", "டாக்டர்", "பேராசிரியர்", "மற்ற", ],
  customer_details: "வாடிக்கையாளர் விபரங்கள்",
  employee_details: "ஊழியர் விபரங்கள்",
},

//About Page Components
bannerAbout: {
  src: `${import.meta.env.VITE_API_BASE_URL}/media/aboutPage/bannerAbout.webp`,
  title: "எங்களைப் பற்றி",
  intro: "உங்கள் நிதி எதிர்காலத்தை வலுவடிக்கச் செய்கிறோம்",
  specialnote: "1970 முதல்",
  description: "“ மக்களுக்கு அதிகாரம் வழங்குதல் மற்றும் வாழ்க்கையை மாற்றுதல் ”",
},
cardsAbout: [
  { stat: "70,000+", text: "நுகர்வோர்", icon: faUsers },
  { stat: "54+", text: "சிறப்புத் தகுதி ஆண்டுகள்", icon: faClock },
  { stat: "1000+", text: "உதவியாளர்கள்", icon: faBriefcase },
  { stat: "100+", text: "கிளைகள்", icon: faBuilding },
],
overviewAbout: {
  title: "கண்ணோட்டம்",
  description: "50 ஆண்டுகளுக்கு மேலாக, ஏசியா எசட் பைனான்ஸ் பீ எல் சீ, எங்கள் ஆர்வங்களை பல்வேறு மனிதர்களிலும், வணிகங்களிலும் முதலீடு செய்துள்ளது. எங்கள் சுயாதீனமான வட்டி விகிதத்தில் வழங்கப்படும் தங்க கடன்கள், குத்தகை, உடன் கடன்கள், குழு தனிப்பட்ட கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது உங்கள் பொது அடையாளங்களை ஏற்கின்றன என்பதை பரிசுத்தமான முறையில் சமூகங்கள் வளர்ந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி என்பது முபூட் ஃபைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையாக கையிருப்புக்கான துணை நிறுவனமாகும் மற்றும் இலங்கை மத்திய வங்கி மூலம் பதிவு செய்யப்பட்ட பூரணமாக உரிமை பெற்ற, பொதுத் தொகுப்பு ஏற்ற ஆற்றலுடைய நிறுவனம் ஆகும். சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்து வருகின்றன, ஏசியா ஆஸெட் இந்த தேவைகளுக்கு பூரணமாக நம்பிக்கையுடன் இணைக்கப்பட்டுக் கொண்டுள்ளது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு அவர்கள் வாழும் மற்றும் வணிகம் செய்வதற்கான முறையில் வளர்ச்சி அடைய உதவுவதாக இருந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி இன் கதை “மக்களுக்கு அதிகாரம் அளித்தல் மற்றும் வாழ்க்கையை மாற்றுதல்” என்பதாகும்.",
},
missionVisionGoal: {
  mission: {
    category: "தொலைநோக்கு",
    title: "",
    description: "எங்கள் வாடிக்கையாளர்களுக்கு நிதித் தேவைகளுக்காக நாங்கள் வழங்கும் தீர்வுகள் வழக்கத்திற்கு மாறானதாகவும், புதுமையானதாகவும், அவர்களின் வாழ்க்கைத் தரத்தை மேம்படுத்துவதற்கான அவர்களின் தேவைகளுக்கு பொருத்தமானதாகவும் இருக்கும், அதே நேரத்தில் வாடிக்கையாளர் சேவையின் உயர்ந்த நிலைகளைப் பராமரிக்கும்.",
  },
  vision: {
    category: "தொலைபார்வை",
    title: "",
    description: "வாழ்க்கையை மாற்றும் மக்களுக்கு அதிகாரம் அளித்தல்.",
  },
  goal: {
    category: "இலக்கு",
    title: "",
    description: "இலங்கையில் ஒரு முதன்மையான நிதி நிறுவனமாக மாற.",
  }
},
bodTextsAbout: {
  title1: "ஆலோசகர் குழு",
  title2: "",
  subtitle: "எங்கள் தரிசனத்தை வழிநடத்துதல், துறைசார்ந்த அறிவும் நெருக்கமுமாக",
  intro: "எங்கள் ஆலோசகர் குழுவில் மிக்க அனுபவமும் மாறுபட்ட பின்னணிகளும் கொண்ட வணிக நிபுணர்கள் அடங்கியுள்ளனர். இவர்களின் வழிகாட்டுதலும் உள்ளுணர்வுகளும் Asia Asset Finance ஐ நிலைத்த உத்தேச வளர்ச்சிக்கான நிச்சயமாக மாற்றுகின்றன.",
  chairman_name: "வி. ஏ. பிரசாந்த்",
  chairman_position: "தலைவர்",
  chairman_description: "வி. ஏ. பிரசாந்த் என்பது வணிக வங்கியாளராக 37 ஆண்டுகளுக்கு மேல் அனுபவமுள்ளவர், குறிப்பாக தன்னிச்சையான மற்றும் காப்பீடு வங்கியாளர்கள், பொறுப்பு செயல்பாடுகள் மற்றும் தகவல் பாதுகாப்பு போன்ற துறைகளில்...",
  ceo_name: "ஆர். ஜே. ஏ. குணவர்தன",
  ceo_position: "நிறைவேற்று பணிப்பாளர் / பிரதான நிறைவேற்று அதிகாரி",
  ceo_description: "திரு. ரஜீவ் குணவர்தன, Asia Asset Finance PLC இன் தலைமை நிர்வாக அதிகாரி / ஆலோசகர், 2009 டிசம்பர் மாதத்தில் ஆலோசகர் குழுவுக்கு நியமிக்கப்பட்டார். நிறுவனம் தரிசனம் அமைத்தல் மற்றும் செயல்படுத்தல் போன்ற செயல்களுக்கு அவர் பொறுப்பாளரானவர்...",
  see_more_btn: "மேலும் காண்க",
  view_profile_btn: "சுயவிவரத்தைக் காண்க",
},
comTextsAbout: {  
  title1: "குழு",  
  title2: "நிர்வாகம்",  
  subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கான முழுமையான தீர்வுகள்",  
  description: "ஏசியா எசட் பைனான்ஸ், எங்கள் காப்பக மேலாண்மை குழு அனுபவமிக்க நிபுணர்களால் அமைக்கப்பட்டுள்ளது, அவர்கள் தங்களுடைய அனுபவமும் ஆழமான பார்வையும் கொண்டு வருகின்றனர். அவர்களின் மூலோபாயமான முன்னேற்றம் மற்றும் சிறந்ததுவதை நிலைநிறுத்துவதற்கான கடமையுடன் எங்கள் நிறுவனம் வெற்றியுடன் முன்னேறி, இலங்கையின் நிதி சேவைத் துறையில் முன்னணியில் இருக்க எங்களுடைய முன்னணி நிலையை உறுதி செய்கின்றனர்."  
},

branchNetworktext: {
  title1: "எங்கள் ",
  title2: "கிளை நெட்வொர்க்",
  subtitle: "நிதித் தீர்வுகளை உங்களுக்கு நெருக்கமாகக் கொண்டுவருதல்",
  description1: "எங்கள் சேவையை அனுபவிக்க அறியப்பட்ட ",
  description2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ன் 100+ கிளைகளில் ",
  description3: "ஒன்றை  இன்றே   நாடவும் . இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் பயணத்திற்கு ஆதரவளிக்க நாங்கள் இங்கு இருக்கிறோம். ",
  label: "உங்கள் அருகிலுள்ள கிளையை தேடவும்:",
  field: "கிளையை தேடவும்...",
  all_tab: "அனைத்து  வலயங்கள்",
  viewOnMapBtn: "வரைபடத்தில் பார்க்க",
  callNowBtn: "அழைப்பு"
},

  //Investor Relations Page Components
  bannerIR: {
    src: `${import.meta.env.VITE_API_BASE_URL}/media/investorRelations/irPgBanner.webp`,
    title: "எங்களைப் பற்றி",
    intro: "நம்பிக்கையுடன் மற்றும் பார்வையுடன் செல்வத்தை உருவாக்குவது",
    specialnote: "1970 முதல்",
    description: "“ முன்னேற்றத்திற்கான கூட்டாளியாக, நிலையான வளர்ச்சியை இயக்குகிறோம் ”"
  },
  corporateProfileIR: {
    title1: "நிறுவனத்தின் ",
    title2: "சுயவிவரம்",
    label1: "நிறுவனத்தின் பெயர்",
    field1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ",
    label2: "நிறுவனத்தின் மதிப்பீடு",
    field2: "Fitch A+",
    label3: "சட்ட பரிமாணம்",
    /*field3_1: "- 1970 செப்டம்பர் 23 ஆம் தேதி தனியார் வரையறுக்கப்பட்ட நிறுவனமாக பதிவு செய்யப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_2: "- 2006 அக்டோபர் 03 ஆம் தேதி பெயர் மாற்றப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_3: "- 2008 ஜனவரி 23 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் மறுபதிவு செய்யப்பட்டது.",
    field3_4: "- 2012 மார்ச் 20 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் பொது வரையறுக்கப்பட்ட நிறுவனமாக மாற்றப்பட்டது.",
    field3_5: "- பதிவு எண் (1982 17 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.",
    field3_6: "- புதிய பதிவு எண் (2007 7 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.", */
    field3_1: "1938 ஆம் ஆண்டு செப்டம்பர் 23 ஆம் தேதி நிறுவன கட்டளை எண் 51 (கேப் 145) இன் கீழ் ஒரு தனியார் வரையறுக்கப்பட்ட பொறுப்பு நிறுவனமாக இணைக்கப்பட்டது மற்றும் நிறுவன உத்தரவின் கீழ் பெயர் மாற்றப்பட்டது, 1938 ஆம் ஆண்டின் 51 (கேப் 145) 03 அக்டோபர் 2006 இல் மீண்டும் பதிவு செய்யப்பட்டது 2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .07, 23 ஜனவரி 2008 இல் மற்றும் 2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .07 இன் கீழ் ஒரு பொது நிறுவனமாக மாற்றப்பட்டது. புதிய பதிவு எண் (2007 ஆம் ஆண்டின் நிறுவனச் சட்டம் எண் .7 இன் கீழ்) பிபி 139 PQ",
    label4: "நிறுவனத்தின் பதிவு எண்",
    field4: "PB 139 PQ",
    label5: "நிறுவனத்தின் சட்ட ஆலோசகர்கள்",
    field5: "ஷிராந்தி குணவர்தன அசோசியேட்ஸ், \n எண் 22/1, எலியட் பிளேஸ், கொழும்பு 08.",
    label6: "பணிப்பாளர்கள் குழுமம்",
    field6_1: "தலைவர் - V A பிரசந்த்",
    field6_2: "பிரதான நிறைவேற்று அதிகாரி - R J A குணவர்தன",
    field6_3: "G M அலெக்சாண்டர்",
    field6_4: "K R பிஜிமான்",
    field6_5: "K G K பிள்ளை",
    field6_6: "R A B பச்நாயக்கே",
    field6_7: "J P D R ஜயசேகரா",
    field6_8: "R D S குணசேகர",
    field6_9: "T C D குமாரசிறி",
    field6_10: "M திருநீலகண்டன்",
    label7: "நிறுவனத்தின் செயலாளர்",
    field7: "திருமதி ருவாணி அங்கமான, எண் 76, பார்க் தெரு, கொழும்பு 02.",
    field7_1: "மின்னஞ்சல்: companysecretary@asiaassetfinance.lk",
    label8: "நிறுவனத்தின் கணக்காய்வாளர்கள்",
    field8: "KPMG, \n 32A, சர் மொஹமட் மக்கான் மார்க்கர் மாவத்தை, \n கொழும்பு 03",
    label9: "வங்கி துணை முகவர்கள் ",
  },
  keyFinancialsIR: {
  title1: "நிதித் ",
  title2: "தரவுகள்",
  card1_title: "மொத்த வருமானம்",
  card1_amount: "XX,XXX",
  card2_title: "வரிக்கு பின் இலாபம்",
  card2_amount: "XX,XXX",
  card3_title: "மொத்த சொத்துகள்",
  card3_amount: "XX,XXX",
  card4_title: "சமபங்குகளில் இருந்து வருமானம்",
  card4_amount: "XX,XXX",
  card5_title: "ஒரு பங்குக்கான இலாபம் ",
  card5_amount: "XX,XXX",
  share_price_title: "சமீபத்திய பங்கு விலை",
  share_price_reg: "XXXXXXXXXX",
  share_price_name: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ",
  share_price_amount: "ரூ XX.XX",
  share_price_percentage: "XX,XXXX",
  share_price_type: "ரூ",
  description_line1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனம் 50 வருடங்களாக ஏராளமானவர்களுக்கும் நிறுவனங்களுக்கும் நிதி ஆதரவினை வழங்கி வருகிறது. எங்களின் தங்க கடன், குத்தகை, கடன் சலுகைகள், குழு தனிநபர் கடன், தனிநபர் கடன், தொழிலாளர் கடன், நிறுவன கடன், மற்றும் பொதுத் தணிப்பு போன்றவை பொருளாதாரங்களை வலுப்படுத்தியதற்காக பெருமைப்படுகிறோம்.",
  description_line2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ என்பது முத்தூட் பைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியில் பதிவு செய்யப்பட்ட ஒரு பத்திரமாக்க நிறுவனமாகும்.",
  description_line3: "சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்தாலும், அதனை நிறைவேற்ற ஏஷியா ஆசெட் பல ஆண்டுகளாக வளர்ச்சியடைந்தது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு வாழ்க்கையின் தரத்தை உயர்த்த உதவும்.",
  description_line4: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ நிறுவனத்தின் கதை “மக்களுக்கு அதிகாரம் அளிப்பது மற்றும் வாழ்க்கையை மாற்றுவது” ஆகும்.",
  },
  documentsIR: {
    title: "பதிவிறக்கம்",
    tab1_title: "ஆண்டு அறிக்கைகள்",
    tab1_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab2_title: "கடன் மதிப்பீடுகள்",
    tab2_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab3_title: "தரவுகள் நிதி அறிக்கைகள்",
    tab3_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!",
    tab4_title: "மாதாந்திர நிதி அறிக்கைகள்",
    tab4_content: "இப்போது பதிவேற்றப்பட்ட அறிக்கைகள் எதுவும் இல்லை!"
  },
  
    //Downloads Page Components
    downloadsTexts: {
      title: "பதிவிறக்கங்கள்",
      section1: "ஆண்டு அறிக்கைகள்",
      intro1: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section2: "நிதி அறிக்கைகள்",
      intro2: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section3: "வாடிக்கையாளர் தகவல்கள்",
      intro3: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section4: "மற்ற ஆவணங்கள்",
      intro4: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
      section5: "Debenture Issues 2024",
      intro5: "ஆவணத்தைப் பார்க்க அதை அழுத்தவும்.",
    },

  privacyPolicy: {
    title: "Privacy Policy",
    description: [
      "Asia Asset Finance PLC built all as free. This SERVICE is provided by Asia Asset Finance PLC at no cost and is intended for use as is.",
      "This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.",
      "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
      "The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions are accessible.",
  ],
  information_collection: "Information Collection and Use",
  ic_description: [
    "For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.",
    "The app does use third party services that may collect information used to identify you.",
  ],
  ic_description_2 : "We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.",
  cookies: "Cookies",
  cookies_text: "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
  service_providers: "Service Providers",
  service_providers_text_1: "We may employ third-party companies and individuals due to the following reasons:",
  service_providers_points: [
    "To facilitate our Service",
    "To provide the Service on our behalf",
    "To perform Service-related services",
    "To assist us in analyzing how our Service is used",
  ],
  service_providers_text_2: "We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
  security: "Security",
  security_text: "We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.",
  links_to_other_sites: "Links to Other Sites",
  links_to_other_sites_text: "This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
  children_privacy: "Children’s Privacy",
  children_privacy_text: "These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.",
  changes_to_this_privacy: "Changes to This Privacy Policy",
  changes_to_this_privacy_text_1: "We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.",
  changes_to_this_privacy_text_2: "This policy is effective as of 2021-08-01",
  contact_us: "Contact Us",
  contact_us_text: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at info@asiassetfinance.lk.",
},

    //Promotions Page
    promotionsPage: {
      title: "சலுகைள்",
      subtitle: "தற்போது சலுகைள் இல்லை",
      description: "புதிய அறிவிப்புகளுக்கு இந்த பக்கத்தை பிறகு வந்துகாண்க.",
    },

    //Products and Services Page Components
    bannerProducts: {
      title: "தயாரிப்புகள் மற்றும் சேவைகள்",
      intro: "நிதி தீர்வுகளை எளிதாக்குதல்",
      specialnote: "1970 முதல்",
      description: "“ வளர்ச்சிக்கும் வளத்திற்கும் பங்காளி ”",
    },
    
    productsSelector: { 
      'Fixed Deposit': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "நிலையான வைப்பு",
        features: [
          { title: "உயர் வட்டி விகிதம்", description: "இயல்பான சேமிப்பு கணக்குகளை விட அதிக வட்டியுடன் ஈட்டுங்கள்." },
          { title: "நெகிழ்வான காலஅளவு", description: "உங்கள் தேவைகளுக்கு ஏற்ப காலஅளவுகளைத் தேர்ந்தெடுக்கவும்." },
        ],
      },
      'Gold Loan': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "தங்கக் கடன்",
        features: [
          { title: "விரைவான ஒப்புதல்", description: "உங்கள் தங்கத்தை அடமாகக் கொண்டு விரைவாக நிதி பெறுங்கள்." },
          { title: "குறைந்த வட்டி", description: "தங்க அடமாகக் கொண்ட கடன்களுக்கான போட்டித்திறன் கொண்ட வட்டிகளைப் பெறுங்கள்." },
        ],
      },
      'Mortgage': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "அடமானம்",
        features: [
          { title: "சரியான வட்டி விகிதம்", description: "சிறிய அளவிலான அடமானங்களுக்கான குறைந்த வட்டி விகிதங்கள்." },
          { title: "நெகிழ்வான தொகுப்புகள்", description: "வருமானத்தின்படி அமைக்கக்கூடிய திருப்பிச் செலுத்தும் திட்டங்கள்." },
        ],
      },
      'Leasing': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "குத்தகை",
        features: [
          { title: "விரைவான குத்தகை தேர்வுகள்", description: "வாகனங்கள், உபகரணங்கள் மற்றும் பலவற்றுக்கான குத்தகை முறை உள்ளன." },
          { title: "விரைவான செயலாக்கம்", description: "குத்தகை விண்ணப்ப செயல்முறை எளிதாகவும் விரைவாகவும்." },
        ],
      },
      'Forex': {
        images: ["https://via.placeholder.com/250x400", "https://via.placeholder.com/250x400"],
        name: "விநியோகம்",
        features: [
          { title: "போட்டித் திறனுள்ள விகிதங்கள்", description: "சிறந்த விகிதத்தில் நாணயங்களை மாற்றவும்." },
          { title: "பல நாணயங்கள்", description: "பல்வேறு சர்வதேச நாணயங்களுக்கு அணுகல் கிடைக்கும்." },
        ],
      },
    },
    
    luckewalletProductsPage: {
      description1: "50 ஆண்டுகளாக பல தனிநபர்கள் மற்றும் தொழில்கள் மீது தங்கள் ஆர்வத்தைச் செலவழித்து வந்திருக்கிறோம். நியாயமான வட்டி விகிதத்தில் தங்க கடன்கள், குத்தகை, அடமானக் கடன்கள், குழு தனிநபர் கடன்கள், தனிநபர் கடன்கள், தொழில்முனைவோர் கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது பொதுத் தகுப்பு எங்கள் சேவைகளை வழங்குவதன் மூலம் சமூகங்களை சுயாதீனமாக உருவாக்க நாங்கள் பெருமிதமாக இருக்கிறோம்.",
      description2: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ என்பது Muthoot Finance Ltd நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியால் பதிவு செய்யப்பட்ட முழுமையான உரிமம் பெற்றவை.",
      kFeature1: "முக்கிய ",
      kFeature2: "அம்சங்கள்",
      f1title: "எளிதான கணக்கு மேலாண்மை",
      f1Text: "எல்லா கணக்குகளையும் ஒரு இடத்தில் எளிதாக பார்க்கவும் நிர்வகிக்கவும்.",
      f2title: "விரைவான கடன் விண்ணப்பங்கள்",
      f2Text: "கடன்களுக்காக விண்ணப்பிக்கவும் மற்றும் உங்கள் விண்ணப்ப நிலையைச் சரிபார்க்கவும்.",
      f3title: "எளிதான ஆன்லைன் பரிவர்த்தனைகள்",
      f3Text: "விரைவான, பாதுகாப்பான மற்றும் சிரமமில்லாத மாறுபாட்டு சேவைகளை அனுபவிக்கவும்.",
      f4title: "நேரடிக் அறிவிப்புகள்",
      f4Text: "கணக்கு செயல்பாடுகள் மற்றும் சலுகைகள் குறித்த உடனடி அறிவிப்புகளைப் பெறுங்கள்.",
    },
    

    //------------------------------------------------------ Sub Pages --------------------------------------------------------------//
    
    //Careers Page Components
    careersBanner: {
      title: "தொழில் வாய்ப்புகள்",
      description: "எங்களுடன் உங்கள் எதிர்காலத்தை உருவாக்குங்கள்!",
    },
    
    titleCareers: {
      title1: "நாங்கள் ",
      title2: "பணியமர்த்துகிறோம்",
      description1: "ஏசியா எசட் பைனான்ஸ் பீ எல் சீ யில் நாங்கள் செய்யும் விஷயங்கள் இங்கே! நாங்கள் தனிநபர்களுக்கு அவர்கள் விரும்பும் வாழ்க்கையை வாழ உதவுகிறோம், நாங்கள் வணிகங்களை அமைப்பதற்கான சாதனமாக உள்ளோம், நாங்கள் நிதி இடைவெளியை குறைக்கும் செயலில் உள்ளோம்.",
      description2: "நாங்கள் அடிக்கடி பொருளாதாரங்களை உருவாக்கும் ஆர்வமுள்ள தொழில்முனைவோரை தேடுகிறோம். உங்களிடம் அதற்கான தகுதி இருக்கிறது என்று நீங்கள் நினைத்தால், கீழே உள்ள கிடைக்கும் நிலைகளுக்கு விண்ணப்பிக்கவும்.",
    },


    //------------------------------------------------------ Products Pages --------------------------------------------------------------//
    
    //Gold Loan Page Components
    goldLoanPage: {
      title: "தங்கக்கடன்",
      description: "பொறுப்பு என்பது நமக்கு அனைவருக்கும் வரும் ஒன்று. உங்கள் மகளின் திருமண செலவுகளைப் பற்றி கவலைப்படும் தந்தையாகவும், உங்கள் மகனுக்கு சிறந்த கல்வியை வழங்க முயற்சிக்கும் தாயாகவும், திடீர் அறுவை சிகிச்சைக்கான பணம் தேவைப்படும் துணையாகவும் இருக்கலாம். பயப்படாதீர்கள். எங்கள் தங்க கடன் சேவை உங்கள் தேவைகளை பூர்த்தி செய்ய தயார். எங்கள் கிளைகளில் வருகை தந்து நம்பகத்தன்மை உள்ள நிபுணர்களுடன் பேசுங்கள். தங்கத்தை உங்களுக்கே பாதுகாப்பான இடத்தில் வைத்திருக்க உத்தரவாதம் தருகிறோம்.",
      kfd: "/src/media/attachments/customerProtectionFramework/ta_key_fact_document_gl.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/ta_gl_cat.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "நிலையான வைப்புக்கள்",
      description: "சேமிக்கத் தொடங்குவதற்கு இது ஒரு மோசமான நேரமல்ல, எங்களிடம் சேமிக்கத் தொடங்குவது மோசமான யோசனையல்ல. 50 ஆண்டுகளுக்கும் மேலான வரலாற்றைக் கொண்டு, ஏசியா எசட் பைனான்ஸ் பீ எல் சீ ஆனது, இலங்கை மத்திய வங்கியில் பதிவுசெய்யப்பட்ட நிதி நிறுவனமாக காலத்தால் சோதிக்கப்பட்ட முதலீட்டு பங்காளியாக மாறியுள்ளது. உங்கள் செல்வத்தின் பாதுகாப்பை நாங்கள் உறுதிசெய்கிறோம், அதேசமயம் டெபாசிட் விகிதங்களை வழங்குகிறோம். இலங்கையானது பல பொருளாதார நெருக்கடிகளை எதிர்கொண்டுள்ளது. இருந்த போதிலும் ஆசிய சொத்துக்கள் எப்போதும் வழங்கப்பட்டுள்ளன. உங்கள் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்வதற்காக நட்பு மற்றும் தனிப்பயனாக்கப்பட்ட நிபுணர்களின் குழுவுடன் வீடு வீடாகச் செல்லும் சேவை எங்கள் சேவைகளில் அடங்கும்.",
      kfd: "/src/media/attachments/customerProtectionFramework/ta_key_fact_document_fd.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "வட்டி விகிதம்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_4: "Collection Bank Accounts",
      collectionAccounts: "/src/media/uploads/fd_collection_accounts.webp",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      fdRates: "/src/media/uploads/ta_fd_rates.webp",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "குத்தகை",
      description: "உங்கள் கனவு வாகனத்தை நீங்கள் இப்போது ஓட்டக்கூடாது என்று யாரும் சொல்ல வேண்டாம்! நீங்கள் ஓட் விரும்பும் எந்தவொரு வாகனமும், உங்கள் அருகில் உள்ள ஆசிய அசெட் கிளைக்கு ஒரு முறை சென்று வந்தால் போதும். சொந்தமாக. ஓட்டுங்கள். மேலும் உலகில் உள்ள எல்லா நேரமும் அதற்கு பணம் செலுத்த வேண்டும். இந்த ஒப்பந்தத்தில், நீங்கள் வெற்றி பெறுவீர்கள்! எங்களிடமிருந்து நீங்கள் குத்தகைக்கு விண்ணப்பிக்கும்போது, ​​எங்கள் பயிற்சி பெற்ற வல்லுநர்கள் உங்களுக்கு வழங்குவார்கள்; சந்தையில் சிறந்த வட்டி விகிதங்கள், வீட்டு வாசல் சேவை, குறைந்தபட்ச ஆவணங்கள், நெகிழ்வான திருப்பிச் செலுத்தும் விதிமுறைகள் மற்றும் பல. எனவே, எங்களுடன் எளிதாக குத்தகைக்கு எடுத்து உங்கள் கனவை இயக்குங்கள்!",
      kfd: "/src/media/attachments/customerProtectionFramework/ta_key_fact_document_l.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/ta_l_cat.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "அடைமானம்",
      description: "பணம் உங்களின் அனைத்து நிதி பிரச்சனைகளையும் தீர்க்கும். ஏசியா எசட்டில் நாங்கள் உங்கள் நிதி வாழ்க்கை முறையை மேம்படுத்த எங்களின் அனைத்து முயற்சிகளையும் முதலீடு செய்கிறோம். நீங்கள் நிதி திரட்டுவதற்கான விரைவான வழி இதுவாகும். உங்கள் சொத்தை எங்களிடம் அடமானம் வைத்து, பணத்தை உருவாக்கி, சரியான நேரத்தில் உங்கள் சொத்தை மீட்டெடுக்கவும். எனவே, கவலைப்படுவதை நிறுத்துங்கள். போ. வளருங்கள். உங்களுக்கு தடையாக இருக்கும் அனைத்து பிரச்சனைகளையும் நாங்கள் ஏற்கனவே தீர்த்துவிட்டோம். சிறந்த, பயனுள்ள மற்றும் திறமையான சேவையை நாங்கள் உங்களுக்கு உறுதியளிக்கிறோம். நாங்கள் உங்களைப் பார்ப்பதால் நீங்கள் பெறக்கூடிய நியாயமான கட்டணங்களை நாங்கள் உறுதியளிக்கிறோம். எல்லாவற்றிற்கும் மேலாக, மக்களை மேம்படுத்துவதும் வாழ்க்கையை மாற்றுவதும் எங்கள் நோக்கம்!",
      kfd: "/src/media/attachments/customerProtectionFramework/ta_key_fact_document_m.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண மற்றும் விகித பட்டியல்",
      btn_3: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      hotline: "துரித எண்",
      note: "குறிப்பு: குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "/src/media/uploads/charges_and_tariff/ta_m_cat.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "வெளிநாட்டு நாணய மாற்று",
      description: "ஏசியா எசட் பைனான்ஸ் உங்கள் வெளிநாட்டு நாணய மாற்றங்களை   ஒரே நேரத்தில் செய்துவிடலாம். அதை விவரிக்கும் எளிய வடிவத்தில், இது ஒரு நாணயத்தை விற்று மற்றொரு நாணயத்தை வாங்குவதாகும். இவை எப்போதும் ஜோடிகளாகவே மேற்கோள் காட்டப்படும்- அதாவது, அடிப்படை (வாங்கிய) நாணயத்தின் ஒரு யூனிட், மேற்கோள் (விற்ற) நாணயத்தின் அடிப்படையில் எவ்வளவு. எங்களுடைய தொழில்முறை ஆலோசனையுடன், எங்கள் அணுகுமுறையுடன், உங்கள் செல்வம் பெருகுவதைப் பாருங்கள்.",
      btn_1: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_2: "",
      btn_3: "",
      hotline: "துரித எண்",
      note: "குறிப்பு: இந்த மதிப்புகள் அவ்வப்போது மாறும்.",
      charges_tariff: "",
      our_partners: "எங்கள் துணை முகவர்கள் ",

    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "உங்கள் செல்வத்தை எங்கிருந்தாலும் அணுகுங்கள்",
      description: ["Luckewallet  இலங்கையில் முன்னணி பணம் பரிவர்த்தனை தளமாக தன்னை உறுதியாக நிலைநிறுத்தியுள்ளது. இது அதிகமான பரிவர்த்தனை அளவுக்காகவும், பரந்த வாடிக்கையாளர் அடிப்படைக்காகவும் பிரபலமானது. Luckewallet பலவகையான நிதி சேவைகளை வழங்குகிறது, அவற்றில் டிஜிட்டல் சேமிப்பு கணக்குகள், டிஜிட்டல் நிலையான வைப்புகள், மற்றும் தங்கக் கடன் வட்டி செலுத்தல் அடங்கும். பயனர்கள் தங்கள் பயன்பாட்டு மின்சாரக் கட்டணங்களைச் செலுத்தலாம் மற்றும் கிரெடிட் கார்டு பணப் பரிவர்த்தனைகளை எந்த ஒரு கிளையையும் சென்று தேவை இல்லாமல் ஏற்றுக்கொள்ளலாம். இந்த தளம், வாடிக்கையாளர்களையும் வியாபாரிகளையும் முழுமையாக இணைக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது, பாதுகாப்பான மற்றும் ஒருங்கிணைந்த அனுபவத்தை வழங்குகிறது.",
        "எங்கள் E-சேமிப்பு கணக்கின் நீட்சியான அம்சம் இதன் மிகப் போட்டித்தன்மை கொண்ட வட்டி விகிதமாகும், இது சந்தையில் தனித்துவமானதாக இருக்கிறது. E-சேமிப்பு கணக்கு பயனர்களுக்கு தங்கள் சேமிப்புகளில் வட்டி சம்பாதிக்கும் வசதியையும், நிதிகளை டிஜிட்டல் முறையில் நிர்வகிக்கும் சுதந்திரத்தையும் வழங்குகிறது. வாடிக்கையாளர்கள் தங்கள் டிஜிட்டல் சேமிப்பு கணக்குகளை நேரடியாக செயலியின் மூலம் திறக்கவும் நிர்வகிக்கவும் முடியும், மேலும் வழக்கமான சேமிப்பு கணக்குகளைவிட உயர்ந்த வட்டி சம்பாதிக்கவும் கூடுதல் நன்மை உள்ளது. இந்த அம்சம் பயனர்களுக்கு தங்கள் சேமிப்புகளை எளிதாக வளர்க்கும் வாய்ப்பை வழங்குகிறது, எப்போது வேண்டுமானாலும் தங்கள் நிதிகளை அணுகவும் கணக்கு நடவடிக்கைகளை கண்காணிக்கவும் அனுகுமுறையுடன்.",
        "Luckewallet  சாதாரணமாக ஒரு கட்டண தளம் அல்ல, முழுமையான சுற்றுச்சூழல் அமைப்பாக காட்சியளிக்கப்படுகிறது, நிறுவனமானது வியாபாரியர்களை பெற்றுக் கொள்ளும் கூட்டாளியாக செயல்படுகிறது. மேம்பட்ட மென்பொருள் கட்டமைப்பிற்காக சர்வதேச அளவில் பாராட்டப்பட்ட இந்த செயலி, பயனர்களுக்கு மெலிதான மற்றும் செயல்திறனான அனுபவத்தை உறுதிப்படுத்த தொடர்ந்து மேம்படுத்தப்படுகிறது. முக்கிய அம்சங்களில் எளிய வாடிக்கையாளர் சேர்க்கை, சுய பதிவேற்றம், மற்றும் மொபைல் ரீசார்ஜ்கள் மற்றும் பிற வங்கிக் கணக்குகளுடன் நேரடி பரிவர்த்தனைகளைச் செய்யும் பல்வேறு சேவைகள் அடங்கும். E-சேமிப்பு கணக்கு மற்றும் அதனுடைய போட்டித்தன்மை வாய்ந்த வட்டி விகிதத்துடன், Luckewallet  டிஜிட்டல் பரிவர்த்தனைகளுக்கு மேல் செல்லும் ஒரு பயணத்தை வழங்குகிறது — இது பாவனையாளர்களுக்கு தங்கள் நிதி எதிர்காலத்தை உருவாக்க உதவுகிறது.",
      ],
      kfd: "/src/media/attachments/customerProtectionFramework/ta_key_fact_document_s.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "வாடிக்கையாளர் தகவல் ஆவணங்கள்",
      btn_3: "",
      hotline: "துரித எண்",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "",
      
    },

    //Contact Page Components
    contactsPage: {
      title1: "தொடர்பு கொள்ளுங்கள் ",
      title2: "எங்களுடன்",
      subtitle: "இன்று எங்களைத் தொடர்பு கொள்ளுங்கள், உங்களுக்குத் தேவையான ஆதரவை நாங்கள் வழங்குவோம்!",
      learnMoreBtn: "மேலும் அறியவும்",
      card1title: "முகவரி",
      card1Body: "எண் 76, பார்க்க் வீதி, கொழும்பு 02",
      card2title: "வாடிக்கையாளர் சேவை",
      card2Body: "011 71 70 712",
      card3title: "தொலைபேசி",
      card3Body: "011 76 99 000",
      card4title: "மின்னஞ்சல்",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "புகார்கள்",
      card5Body: "077 79 99 922",
      card6title: "துரித எண்",
      card6Body: "1369",
    },    
    },
  },
  // Additional language data omitted for brevity
};

export default resources;