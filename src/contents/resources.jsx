//Landing Page Banners
import banner1 from '../media/bannerimg1.webp';
import banner2 from '../media/bannerimg2.webp';
import banner3 from '../media/bannerimg3.webp';

//About Page Banners
import bannerAbout from '../media/bannerAbout.webp';

//Investor Relations Page Banners
import bannerIR from '../media/bannerIR.webp';

//Landing Page Products Overview Images
import FixedDeposits from '../media/productsoverview/fd.webp';
import Forex from '../media/productsoverview/forex.webp';
import GoldLoan from '../media/productsoverview/gloan.webp';
import Mortgage from '../media/productsoverview/mortgage.webp';
import Leasing from '../media/productsoverview/leasing.webp';
import Luckewallet from '../media/productsoverview/luckewallet.webp';

import { faUsers, faBriefcase, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons'; // Import suitable icons

//BOD Profile Pictures
import mrPrasanth from '../media/bod/vap.webp';
import mrRajiv from '../media/bod/rja.webp';
import mrAlexandra from '../media/bod/gm.webp';
import mrBijimon from '../media/bod/kr.webp';
import mrPillai from '../media/bod/kgk.webp';
import mrRajitha from '../media/bod/rab.webp';
import mrJayasekara from '../media/bod/jpdr.webp';
import mrRoshan from '../media/bod/rds.webp';
import mrKumarasiri from '../media/bod/tcd.webp';

//COM Profile Pictures
import mrThiru from '../media/com/tn.webp';
import mrMahesh from '../media/com/mk.webp';
import mrJayantha from '../media/com/jw.webp';
import mrSameera from '../media/com/sw.webp';
import msGeethika from '../media/com/ge.webp';
import mrSajith from '../media/com/sa.webp';
import mrInditha from '../media/com/ij.webp';
import mrPraveen from '../media/com/pp.webp';

//Products Selector Images
import FD from '../media/products/fdPgBanner.webp';

//branches photos
import branchSample from '../media/branches/temp.webp';


// Translation resources
const resources = {
  en: {
    translation: {
      //Header Component
      header: {
        title: "Customer Care",
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
        investor_relations_dropdown2: "Financial Keys",
        careers: "Careers",
        downloads: "Downloads"
      },


      //Footer component
      footerListItems: [
        { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"], links: ["/web/about", "/web/about/#bod", "/web/about/#corporate-management", "/web/about/#branches" ] },
        { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Forex ", "Luckewallet"], links: ["/web/gold-loan", "/web/fixed-deposit", "/web/leasing", "/web/mortgage", "/web/foreign-exchange", "/web/luckewallet"] },
        { title: "Investor Relations", list: ["Corporate Profile", "Key Financials"], links: ["/web/ir", "/web/ir/#financial-keys"] },
        { title: "Other Links", list: ["Careers", "Contact Us", "Downloads"], links: ["/web/careers", "/web/contacts", "/web/downloads"] },
      ],

      footerText: {
        subs_title1: "Bringing Financial Solutions Closer to You",
        subs_title2: "Subscribe & Get Latest Updates",
        subs_title3: "From Us",
        subs_message: "Subscribe to receive our offers and updates directly in your inbox.",
        subs_field: "Enter your email",
        subs_btn: "Submit",
        intro: "Asia Asset Finance PLC, incorporated on 25th November 1981, is rated ICRA A+ Stable Outlook and is licensed by the Monetary Board of the Central Bank of Sri Lanka under the Finance Business Act No. 42 2011.",
        address: "No: 76, Park Street, Colombo 02, Sri Lanka",
      },


      //Landing Page Components
      carouselLandingPage: [
        {
          src: banner1,
          title: "Innovative Solutions for Your Financial Future",
          intro: "Empowering Your Financial Future",
          description:
            "At Asia Asset Finance, we believe in the power of innovation to drive financial success. Our commitment to providing tailored financial solutions has positioned us as a leader in the Sri Lankan finance industry. Whether you’re looking to invest, save, or finance your next big project, we’re here to support your journey with trust and transparency.",
        },
        {
          src: banner2,
          title: "Where Dreams Meet Financial Solutions",
          intro: "Innovative Finance, Inspiring Growth",
          description:
            "We are more than just a financial institution; we are your partners in progress. Our innovative approach to finance is designed to empower individuals and businesses across Sri Lanka. By combining cutting-edge technology with personalized service, we deliver financial solutions that are not only efficient but also effective in helping you achieve your goals.",
        },
        {
          src: banner3,
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
  },
  productsOverviewTextLandingPage: {
    title: "Discover Our Financial Products",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, we provide a diverse range of financial products tailored to meet your unique needs. Whether you're looking to grow your savings, secure a loan, or explore investment opportunities, our offerings are designed with your financial well-being in mind. Choose from our secure Fixed Deposits, flexible Gold Loans, and supportive Micro Mortgage Loans to find the right fit for you. With our innovative E-Saving accounts, competitive Foreign Exchange services, and convenient Leasing options, we ensure that every aspect of your financial journey is covered. Trust us to deliver reliable, personalized solutions that empower your financial success.",
  },
  productsOverviewLandingPage: [
    { title: "Fixed Deposits", image: FixedDeposits, description: "Secure your savings with fixed returns.", link: "/web/fixed-deposit" },
  { title: "Gold Loan", image: GoldLoan, description: "Grow your wealth with flexible savings.", link: "/web/gold-loan" },
  { title: "Mortgage", image: Mortgage, description: "Affordable loans for your every need.", link: "/web/mortgage" },
  { title: "Leasing", image: Leasing, description: "Convenient spending with low-interest rates.", link: "/web/leasing" },
  { title: "E - Savings", image: Luckewallet, description: "Comprehensive protection for peace of mind.", link: "/web/luckewallet" },
  { title: "Forex", image: Forex, description: "Maximize your returns with diverse options.", link: "/web/foreign-exchange" },
],
testimonialsText: {
  title: "What Our Clients Say",
  subtitle: "Real Stories of Success and Satisfaction",
},
testimonials: [
  {
    personName: "Rakesh Bansal",
    profile: "Marketing Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam ducimus perferendis impedit laborum, facilis dignissimos! Ullam minus cumque quo.",
  },
  {
    personName: "Vimal Kumar",
    profile: "Data Analyst",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "Vineet Singh",
    profile: "Product Manager",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
],
branchDetailsLandingPage: {
  title1: "Our",
  title2: "Branches",
  subtitle: "Bringing Financial Solutions Closer to You ",
  description1: "Visit one of our ",
  description2: "100 branches ",
  description3: "today and experience the personalized service that ",
  description4: "Asia Asset Finance PLC ",
  description5: "is known for. We're here to support your financial journey, no matter where you are in Sri Lanka.",
  newbranches_title: "Our Newest Branches",
  newbranches_description: "We're excited to announce the opening of our newest branches, bringing our trusted financial services even closer to you. As part of our commitment to accessibility and community support, these branches are equipped to provide the full range of Asia Asset Finance products and services. Visit us at our latest locations and experience the same reliable and personalized service that you've come to expect from us.",
  newest_branch_name: "Deniyaya",
  newest_branch_address: "No 196, Main Street, Deniyaya",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk"
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
  button1: "Clear",
  button2: "Submit",
  close_btn: "Back",
  response_pass: "Your inquiry has been sent successfully!",
  response_fail: "Failed to send inquiry. Please try again.",
},

  //About Page Components
  bannerAbout:{
    src: bannerAbout,
    title: "About us",
    intro: "Empowering Your Financial Future ",
    specialnote: "since 1970",
    description: "“ Empowering People and Transforming Lives ”",
  },
  cardsAbout: [
    { stat: "70,000+", text: "Customers", icon: faUsers },
    { stat: "54+", text: "Years of Excellence", icon: faClock },
    { stat: "1000+", text: "Employees", icon: faBriefcase },
    { stat: "100", text: "Branches", icon: faBuilding },
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
  bodProfilesAbout: [
    { imgSrc: mrAlexandra, name: 'G. M. Alexander', title: 'Non - Executive Director' },
    { imgSrc: mrBijimon, name: 'K. R. Bijimon', title: 'Non - Executive Director / Chief General Manager - Muthoot Finance Ltd' },
    { imgSrc: mrPillai, name: 'K. G. K. Pillai', title: 'Non - Executive Director' },
    { imgSrc: mrRajitha, name: 'R. A. B. Basnayake', title: 'Independent Non - Executive Director' },
    { imgSrc: mrJayasekara, name: 'J. P. D. R. Jayasekara', title: 'Independent Non - Executive Director' },
    { imgSrc: mrKumarasiri, name: 'T. C. D. Kumarasiri', title: 'Non - Executive Director' },
    { imgSrc: mrRoshan, name: 'R. D. S. Gunasekara', title: 'Executive Director / Chief Operating Officer' },
  ],
 bodTextsAbout: {
    title1: "Board of ",
    title2: "Directors",
    subtitle: "Guiding Our Vision with Expertise and Integrity",
    intro: "Our Board of Directors comprises seasoned professionals with diverse backgrounds and extensive experience in the financial industry. Their leadership and strategic insights are instrumental in steering Asia Asset Finance towards sustainable growth and success.",
    chairman_name: "V. A. Prasanth",
    chairman_position: "Chairman",
    chairman_description: "V.A Prasanth is a commercial banker with over 37 years of all-round exposure in Retail & Corporate banking, Treasury Operations and Information Security. Formerly he worked with Indian Bank – acclaimed as one of the best...",
    ceo_name: "R. J. A. Gunawardena",
    ceo_position: "Director / Chief Executive Officer",
    ceo_description: "Mr. Rajiv Gunawardena, the Chief Executive Officer / Director of Asia Asset Finance PLC was appointed to the Board in December 2009. A visionary leader, responsible for setting and implementing the organization’s vision...",
    see_more_btn: "See more",
    view_profile_btn: "View Profile",
  },
  comTextsAbout: {
    title1: "Corporate ",
    title2: "Management",
    subtitle: "Comprehensive Solutions for Secure Financial Growth",
    description: "At Asia Asset Finance, our corporate management team is composed of seasoned professionals who bring a wealth of experience and insight to the table. Their strategic leadership and commitment to excellence drive our company’s success, ensuring we remain at the forefront of Sri Lanka’s financial services industry.",
  },
  comProfilesAbout: [ 
    { imgSrc: mrRajiv, name: 'Rajiv Gunawardena', title: 'Director / Chief Executive Officer' },
    { imgSrc: mrRoshan, name: 'Roshan Gunasekara', title: 'Executive Director / Chief Operating Officer' },
    { imgSrc: mrThiru, name: 'M. Thiruneelakandan', title: 'General Manager' },
    { imgSrc: mrMahesh, name: 'Mahesh Kumar', title: 'Deputy General Manager - Credit' },
    { imgSrc: mrJayantha, name: 'Jayantha Weerapullige', title: 'Deputy General Manager - Marketing' },
    { imgSrc: mrSameera, name: 'Sameera Weveladeniya', title: 'Deputy General Manager - Fixed Deposits' },
    { imgSrc: msGeethika, name: 'Geethika Elwalage', title: 'Deputy General Manager - Finance' },
    { imgSrc: mrSajith, name: 'Sajith Atapattu', title: 'Deputy General Manager - Risk' },
    { imgSrc: mrInditha, name: 'Inditha Jayathilaka', title: 'Deputy General Manager - IT' },
    { imgSrc: mrPraveen, name: 'Praveen Peiris', title: 'Deputy General Manager - Treasury' },
    
  ],
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
  },
  branchesData: {
    western: {
      title: "Western Region",
      branches: [
        { name: "Negombo", location: "No 295, Main Street, Negombo.", contact: "031 769 9020", image: branchSample },
        { name: "Gampaha", location: "No. 69, Colombo Road, Gampaha.", contact: "033 769 9010", image: branchSample },
        { name: "Kalutara", location: "No. 344, Maha Veediya, Kalutara South", contact: "034 769 9013", image: branchSample },
        { name: "Moratuwa", location: "No 16, New De Soysa Road, Rawathawatta, Moratuwa.", contact: "011 768 1511", image: branchSample },
        { name: "Wellawatta", location: "No.344, Galle Road, Wellawatte", contact: "011 768 1530", image: branchSample },
        { name: "Mathugama", location: "K & W Centre, No.5, Gamini Mawatha, Aluthgama Road, Mathugama", contact: "034 769 9022", image: branchSample },
        { name: "Kotahena", location: "No. 31, Kotahena Street, Colombo 13", contact: "011 769 9109", image: branchSample },
        { name: "Panadura", location: "No.114, D S Senanayake Mawatha, Panadura.", contact: "038 769 9010", image: branchSample },
        { name: "Mattakkuliya", location: "No. 3/810, Farm Road, Mattakkuliya", contact: "011 769 9480", image: branchSample },
        { name: "Grandpass", location: "No.428, Madampitiya Road, Colombo 14", contact: "011 768 1502", image: branchSample },
        { name: "Elakanda", location: "No.327, Thimbirigasyaya, Handala, Wattala.", contact: "011 769 9446", image: branchSample },
        { name: "Homagama", location: "No 486,Homagama Town,Homagama", contact: "011 769 9415", image: branchSample },
        { name: "Dankotuwa", location: "No 07, Naththandiya Road, Dankotuwa.", contact: "031 769 9030", image: branchSample }
      ]
    },
    eastern: {
      title: "Eastern Region",
      branches: [
        { name: "Batticaloa", location: "No 187, Trinco Road, Batticaloa.", contact: "065 222 9720", image: branchSample },
        { name: "Chenkalady", location: "New Market Road,Chenkalady", contact: "065 769 9020", image: branchSample },
        { name: "Kalmunai", location: "No. 69, Main Road, Kalmunai.", contact: "067 205 9920", image: branchSample },
        { name: "Sammanthurai", location: "No. 120, Ampara Road, Karuvaddukal-02, Sammanthurai.", contact: "067 205 0387", image: branchSample },
        { name: "Akkaraipattu", location: "No. 155, Ampara Road, Akkaraipattu.", contact: "067 769 9010", image: branchSample },
        { name: "Valaichchenai", location: "Main Street, Valachchenai", contact: "065 225 8808", image: branchSample },
        { name: "Trincomalee", location: "No.285, Central Road, Trincomalee.", contact: "026 769 9021", image: branchSample },
        { name: "Kinniya", location: "No. 88, Main Street , Sinna Kinniya, Kinniya 03", contact: "026 769 9032", image: branchSample },
        { name: "Kaluwanchikudy", location: "No.172, Main Street, Kalawanchikudy", contact: "065 769 9032", image: branchSample },
        { name: "Pottuvil", location: "Main Street, Pottuvil", contact: "063 769 9011", image: branchSample },
        { name: "Kanthale", location: "No: 137, Main Street, Kantale", contact: "026 223 4592", image: branchSample },
        { name: "Thirukkovil", location: "Main Street,Thirikkovil", contact: "067 769 9040", image: branchSample },
        { name: "Nintavur", location: "42/11, Main Street,Ninthavur.", contact: "067 769 9052", image: branchSample },
	      { name: "Serunuwara", location: "No,44, A.R.B.03, Serunuwara", contact: "026 769 9050", image: branchSample },
	      { name: "Muthur", location: "Batticoca Road, Alim Nagar, Muttur.", contact: "026 769 9040", image: branchSample },
	      { name: "Ampara", location: "No 451, D S Senanayaka Road, Ampara.", contact: "063 769 9020", image: branchSample }
      ]
    },
    southern: {
      title: "Southern Region",
      branches: [
        { name: "Galle", location: "No 170/172,Kadaveediya,Main Street,Galle.", contact: "091 769 9002", image: branchSample },
        { name: "Matara", location: "79, Anagarika Dharmapala Mawatha, Matara.", contact: "041 769 9012", image: branchSample },
        { name: "Beruwala", location: "No. 199, Totamune South,Beruwala.", contact: "034 769 9030", image: branchSample },
        { name: "Ambalantota", location: "No 55, Maha Veediya, Ambalantota", contact: "047 769 9000", image: branchSample },
        { name: "Elpitiya", location: "No 23/4, Ambalangoda road, Elpitiya.", contact: "091 769 9010", image: branchSample },
        { name: "Deniyaya", location: "No. 196, Main Street, Deniaya.", contact: "041 769 9020", image: branchSample }
      ]
    },
    northern: {
      title: "Northern Region",
      branches: [
        { name: "Jaffna", location: "No 109,Kasthriyar Road,Jaffna.", contact: "021 221 9229", image: branchSample },
        { name: "Chavakachcheri", location: "No.05, Kandy Road, Chavakachcheri.", contact: "021 769 9040", image: branchSample },
        { name: "Point Pedro", location: "No.374, Rajina Building complex, Point Pedro.", contact: "021 769 9080", image: branchSample },
        { name: "Chunnakam", location: "No. 15, Station Road, Chunnakam", contact: "021 224 4200", image: branchSample },
        { name: "Nelliady", location: "No.82, Point Pedro Road, Nelliadi.", contact: "021 226 5285", image: branchSample },
        { name: "Changani", location: "Mahan Thanga Plaza,Main Street,Chankani.", contact: "021 769 9030", image: branchSample },
        { name: "Velanai", location: "Vagalavadi, Velani", contact: "021 769 9021", image: branchSample },
        { name: "Achchuveli", location: "No.53, Avarangal Road, Achchuveli.", contact: "021 769 9010", image: branchSample },
        { name: "Manipay", location: "No.260, Manipay Road, Manipay.", contact: "021 769 9115", image: branchSample },
        { name: "Urumpirai", location: "Palay Road, Urumpurai.", contact: "021 769 9090", image: branchSample },
        { name: "Kilinochchi", location: "Near Murugan Temple, A9 road, Killinochchi.", contact: "021 769 9062", image: branchSample },
        { name: "Pudukuduirippu", location: "No.02, Paranthan Road, Puthukkudiyiruppu, Mullaitivu. ", contact: "021 577 8151", image: branchSample },
        { name: "Mullaitivu", location: "No.38, Main Street, Mullaitivu.", contact: "024 769 9010", image: branchSample },
	      { name: "Vavuniya", location: "No, 27,, 2nd Cross Street,Vauniya.", contact: "021 769 9010", image: branchSample },
        { name: "Oddusuddan", location: "Mullaitivu, Main Street, Vidyapuram, Oddusuddan.", contact: "021 229 1880", image: branchSample },
        { name: "Mannar", location: "No :5, First Cross Street, Petha, Mannar.", contact: "023 769 9010", image: branchSample },
        { name: "Cheddikulam", location: "Main Street , Cheddikulam", contact: "024 769 9020", image: branchSample },
        { name: "Mulankavil", location: "Mannar Road, Mulankavil.", contact: "011 769 9000", image: branchSample },
        { name: "Mallavi", location: "Thunnukai Road, Mallavi, Mullaitivu.", contact: "021 769 9095", image: branchSample }
      ]
    },
    central: {
      title: "Central Region",
      branches: [
        { name: "Digana", location: "J/2005 11/02. Rajawella Digana.", contact: "081 769 9030", image: branchSample },
        { name: "Hatton", location: "No.14/A, Ground Floor , New Road, Hatton.", contact: "051 769 9001", image: branchSample },
        { name: "Thalawakele", location: "No. 8/3, Main Street, Thalawakele", contact: "052 769 9035", image: branchSample },
        { name: "Nawalapitiya", location: "No. 75, Ambagamuwa Road, Nawalapitiya", contact: "081 769 9041", image: branchSample },
	      { name: "Gampola", location: "No. 63, Nuwara Eliya Road, Gampola", contact: "081 769 9002", image: branchSample },
        { name: "Ragala", location: "No. 67, Main Street, Ragala.", contact: "052 769 9033", image: branchSample },
        { name: "Matale", location: "No. 242, Main Street, Matale", contact: "066 769 9020", image: branchSample },
        { name: "Pundaluoya", location: "No.244/59,lhala Kade Veediya, Pundaluoya.", contact: "051 769 9032", image: branchSample },
	      { name: "Maskeliya", location: "No: 244,Main Street, Maskeliya.", contact: "052 769 9010", image: branchSample },
        { name: "Katugastota", location: "No 144, Kurunegala Road, Katugasthota.", contact: "081 769 9010", image: branchSample },
        { name: "Naula", location: "No. 26, Dambulla Road, Naula.", contact: "066 769 9010", image: branchSample },
        { name: "Bogawantalawa", location: "No.90,Bridwell Bazaar, Bogawanthalawa.", contact: "052 769 9020", image: branchSample },
	      { name: "Pussellawa", location: "No.305, Nuwara Eliya Road, Pussellawa.", contact: "081 769 9020", image: branchSample },
        { name: "Wattegama", location: "No. 55, Main Street, Wattegama", contact: "081 769 9025", image: branchSample },
        { name: "Agarapatana", location: "No.34, Main Street , Agarapathana.", contact: "051 769 9011", image: branchSample },
        { name: "Hawa Eliya", location: "No.26, Udapussellawa Road , Hawaeliya.", contact: "052 769 9117", image: branchSample },
	      { name: "Passara", location: "No 289, Main Road,Passara", contact: "055 769 9041", image: branchSample },
        { name: "Kotagala", location: "No.179/1,Main Street,Kotagala.", contact: "051 769 9022", image: branchSample },
        { name: "Hanguranketha", location: "No 16, ragala road, rikillagaskada", contact: "081 769 9050", image: branchSample },
        { name: "Dayagama", location: ". No.B/1. Dayagama Bazaar, Dayagama.", contact: "051 769 9041", image: branchSample },
	      { name: "Hapugastalawa", location: "Halgolla, No 01, Hapugastalawa, Nawalapitiya", contact: "054 769 9000", image: branchSample }
      ]
    },
    northwestern: {
      title: "North-Western Region",
      branches: [
        { name: "Kurunegala", location: "No 30, Surathissa Mawatha, Kurunegala", contact: "037 769 9002", image: branchSample },
        { name: "Wennappuwa", location: "224/3A, Colombo Road, Wennappuwa.", contact: "031 769 9010", image: branchSample },
        { name: "Chillow", location: "39, Colombo Road,Chilaw", contact: "032 769 9015", image: branchSample },
        { name: "Udappuwa", location: "No. 75, Division No 2, Udappuwa", contact: "032 769 9032", image: branchSample },
        { name: "Puttalam", location: "No.61, Kurunegala Road, Puttalam", contact: "032 769 9010", image: branchSample },
	      { name: "Kalpitiya", location: "No.120, Puttalam Road, Kalpitiya.", contact: "032 769 9020", image: branchSample }
      ]
    },
    uva: {
      title: "Uva Region",
      branches: [
        { name: "Monaragala", location: "No.141,1st Lane, Wellawaya Road, Monaragala.", contact: "055 769 9021", image: branchSample },
        { name: "Mahiyanganaya", location: "No 23, New Town, Mahiyanganaya.", contact: "055 769 9030", image: branchSample },
        { name: "Badulla", location: "No.49, Cocowatta Road, Badulla.", contact: "055 769 9011", image: branchSample },
        { name: "Haputale", location: "No: 27, Main Street, Haputale", contact: "057 769 9010", image: branchSample },
        { name: "Welimada", location: "No: 51, Nuwara Eliya Road, Welimada", contact: "057 769 9015", image: branchSample },
	      { name: "Bibila", location: ". No.6,Opposite Hospital, Batticaloa Road, Bibile. ", contact: "055 769 9050", image: branchSample },
	      { name: "Boralanda", location: "Oluganthota, Boralanda", contact: "057 769 9020", image: branchSample },
        { name: "Girandurukotte", location: "No 4, New Town, Giradurukotte.", contact: "027 769 9000", image: branchSample },
	      { name: "Lunugala", location: "No 156,Main Street, Lunugala", contact: "055 769 9060", image: branchSample }
      ]
    },
    sabaragamuwa: {
      title: "Sabaragamuwa Region",
      branches: [
        { name: "Kegalle", location: "No. 245, Main Street, Kegalle.", contact: "035 769 9011", image: branchSample },
        { name: "Ruwanwella", location: "No. 104. Main Street, Ruwanwella.", contact: "036 769 9002", image: branchSample },
        { name: "Balangoda", location: "No.16, Reset House Approach Road, Balangoda.", contact: "045 769 9000", image: branchSample },
        { name: "Rakwana", location: ". No. 29 Main street Rakwana", contact: "045 769 9011", image: branchSample },
        { name: "Eheliyagoda", location: "No . 36 Main Street , Ehaliyagoda", contact: "036 769 9011", image: branchSample },
	      { name: "Deraniyagala", location: "No 78, Main street, Deraniyagala.", contact: "036 769 9015", image: branchSample },
	      { name: "Kuruwita", location: "No 71/C/1, Colombo Road, Kuruwita.", contact: "045 769 9015", image: branchSample },
        { name: "Kahawatta", location: "No 31/A, Rakwana Main Road, Kahawatte.", contact: "045 769 9020", image: branchSample }
      ]
    }
  },

    //Investor Relations Page Components
    bannerIR:{
      src: bannerIR,
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
      field3_1: "- Incorporated as a Private Limited Company on 23 September 1970. (under the Companies Ordinance No. 51 of 1938 (Cap 145))",
      field3_2: "- Name changed under the Companies Ordinance No. 51 of 1938 (Cap 145) on 03 October 2006.",
      field3_3: "- Re-registered under the Companies Act No. 07 of 2007 on 23 January 2008.",
      field3_4: "- Converted to a Public Limited Company under the Companies Act No. 07 of 2007 on 20 March 2012.",
      field3_5: "- Registration Number (under the Companies Act No. 17 of 1982): PB 139 PQ.",
      field3_6: "- New Registration Number (under the Companies Act No. 7 of 2007): PB 139 PQ.",
      label4: "Company Registration Number",
      field4: "PB 139 PQ",
      label5: "Lawyers of the Company",
      field5: "Shiranthi Gunawardane Associates, \n No.22/1,Elliot Place,Colombo 08.",
      label6: "Board of Directors",
      field6_1: "Chairman - V. A Prasanth",
      field6_2: "CEO - Rajiv James Abeywickrema Gunawardena",
      field6_3: "George Muthoot Alexander",
      field6_4: "Kuttikattu Rajappan Bijimon",
      field6_5: "Kiran Gopala Krishna Pillai",
      field6_6: "Rajitha Ananda Bandara Basnayake",
      field6_7: "J P D R Jayasekara",
      field6_8: "Roshan De Silva Gunasekera",
      field6_9: "T. C. D. Kumarasiri",
      label7: "Secretary of the Company",
      field7: `Ms. Chalani Gonaduwa \nCompany Secretory \nNo.76, Park Street, Colombo 02. \nTel: 011 7699 074 \nEmail: companysecretary@asiaassetfinance.lk`,
      label8: "Auditors of the Company",
      field8: "KPMG, 32A, Sir Mohomad Macan Marikar Mawatha, Colombo 03.",
      label9: "Banking Partners",
    },
    keyFinancialsIR: {
      title1: "Financial ",
      title2: "Keys",
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
      intro2: "Explore detailed financial facts.",
      section3: "Customer Information",
      intro3: "",
      section4: "Other Documents",
      intro4: "Other essential policies.",
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
        images: [FD, FD],
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
      description1: "Here’s what we do at Asia Asset Finance! We help individuals live the lives they want to live, we empower businesses to build their enterprises, we are active instruments in narrowing the financial divide",
      description2: "We are constantly on the lookout for passionate professionals with a desire to build economies and break societal boundaries! So if you think you have what it takes, apply for the available positions below"
    },

    //Gold Loan Page Components
    goldLoanPage: {
      title: "Gold Loan",
      description: "Responsibility is something that comes to all of us. You can be a father, contemplating your daughter’s wedding and the expenses that come with. A mother striving to give her son the best possible education. A spouse in dire need of money for your better half’s sudden surgery. Fear not, ladies and gentlemen. Our Gold Loan Service has got you and your finances covered. Simply walk to any Asia Asset Branch and speak to one of our caring professionals and we’ll take it from there. Here are the guarantees. Instant money. Flexible interest rates, according to your situation. And at the end of it all, your gold has seen a safer space! We are, after all- a fully owned subsidiary of Muthoot Finance, legendary multinational Financial Service Provider with the LARGEST gold loan portfolio around the globe. With Asia Asset Finance PLC’s Gold Loan services, it takes no more than a few minutes for your gold to generate cash. All you need is the gold.",
      kfd: "/web/src/media/attachments/customerProtectionFramework/en_key_fact_document_gl.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/web/src/media/uploads/en_charges_and_tariff.png",
    },

    //FD Page Components
    fdPage: {
      title: "Fixed Deposits",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crises and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
      kfd: "/web/src/media/attachments/customerProtectionFramework/en_key_fact_document_fd.pdf",
      btn_1: "Key Fact Document",
      btn_2: "FD Rates",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      fdRates: "/web/src/media/uploads/en_fd11112024.webp",
    },

    //Leasing Page Components
    leasingPage: {
      title: "Leasing",
      description: "Don’t let anyone tell you that you should not drive your dream vehicle NOW! Any vehicle you could have possibly wanted to drive or ride is just one visit to your nearest Asia Asset Branch away. Own it. Drive it. And all the time in the world to pay for it. In this deal, you WIN! When you apply for a lease from us our trained professionals will provide you with; The finest interest rates in the market, Doorstep Service, Minimum Documentation, Zero Hassle, Flexible Repayment Terms & etc. So, lease with ease with us and drive your dream!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/en_key_fact_document_l.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/web/src/media/uploads/en_charges_and_tariff.png",
    },

    //Mortgage Page Components
    mortgagePage: {
      title: "Mortgage",
      description: "Money can solve all your financial problems. We at Asia Asset invest all our efforts to up your financial lifestyle. This is the fastest way for you to raise funds. Mortgage your asset with us, generate money and in time reclaim your asset. So, stop worrying. Go. Grow. All those problems that are obstacles to you, we have already solved. We promise you an excellent, effective and efficient service. We promise you the fairest rates you can receive because we see you. Afterall, it is our mission to empower people and to transform lives!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/en_key_fact_document_m.pdf",
      btn_1: "Key Fact Document",
      btn_2: "Charges & Tariff Sheet",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: "/web/src/media/uploads/en_charges_and_tariff.png",
    },

    //Forex Page Components
    forexPage: {
      title: "Forex",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crises and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
      btn_1: "",
      btn_2: "",
      hotline: "Hotline",
      note: "Note: These values are indicative and may change time to time*",
      charges_tariff: ""
    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "Access Your Wealth From Anywhere",
      description: ["Luckewallet has firmly established itself as the leading payment platform in Sri Lanka, renowned for its high transaction volume and customer base. Luckewallet offers a wide range of financial services, including digital savings accounts, digital fixed deposits, and Gold Loan interest payments. Additionally, users can pay utility bills and accept credit card payments without needing to visit a physical branch. The platform is designed to seamlessly connect customers and merchants, providing a secure and integrated experience.",
        "An extension of our e-savings account offering is its highly competitive interest rate, which stands out in the market. The e-savings account provides users with the ability to earn interest in their savings while enjoying the flexibility and convenience of managing their funds digitally. Customers can open and manage their digital savings accounts directly through the app, with the added benefit of earning interest that is typically higher than traditional savings accounts. This feature allows users to grow their savings effortlessly, with the ease of accessing their funds and tracking their account activity at any time.",
        "More than just a payment platform, Luckewallet is envisioned as a comprehensive ecosystem, with the company acting as a merchant-acquiring partner. Recognized internationally for its advanced software architecture, the app is continually improved to ensure a smooth and efficient user experience. Key features include easy customer onboarding, self-registration, and a variety of services such as mobile recharges and direct transactions with other bank accounts. With the e-savings account and its competitive interest rate, Luckewallet is offering more than just digital transactions — it’s helping users build their financial future.",
      ],
      kfd: "/web/src/media/attachments/customerProtectionFramework/en_key_fact_document_s.pdf",
      btn_1: "Key Fact Document",
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
      card3title: "Fax",
      card3Body: "011 76 99 000",
      card4title: "Email",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "Complaints",
      card5Body: "077 79 99 922",
    },

    profileDetails: [
      {
        id: "1",
        name: "V A Prasanth",
        src: mrPrasanth,
        designation: "Chairman",
        description : ["V.A Prasanth is a commercial banker with over 37 years of all-round exposure in Retail & Corporate banking, Treasury Operations and Information Security. Formerly he worked with Indian Bank – acclaimed as one of the best performing Public Sector Banks in India – as General Manager and Chief Information Officer. During this time, he was in-charge of Information Technology and Digital Banking. V.A Prasanth was also appointed as the Chief Financial Officer at Indian Bank, and further served as the Zonal Manager in two prominent zones of the Bank.",
                      "He has over two decades of experience in Financial Markets – Headed the Forex Dealing Room at Mumbai from 1994 to 1998, the Head of Singapore Treasury from 2001 to 2005, Head of Treasury Back Office from 2009 to 2011, and also the Administrator of Wealth Management Services for Indian Bank (WMS) between 2009 and 2011.",
                      "V.A Prasanth is presently associated with the Institute for Research and Development in Banking Technology (IDRBT), Hyderabad, as Senior Domain Expert. He was appointed as the Chairman of Asia Asset Finance in June 2020."
        ]
      },
      {
        id: "2",
        name: "G M Alexander",
        src: mrAlexandra,
        designation: "Non - Executive Director",
        description : ["George Alexander has done his Master’s in Business Administration from the University of North Carolina’s – Kenan & Flagler Business School and bachelors in Mechanical Engineering from University of Kerala TKM College of Engineering. He is currently working as Senior Vice President of Muthoot Finance taking care of operations in the State of Karnataka, Goa & south of Telangana, he also has the additional responsibility monitoring of global operations of The Muthoot Group in the U.S.A.",
          "He is presently on the board of other group companies namely Muthoot Insurance Brokers & Belstar Finance & Investments. Muthoot Finance is the Gold Loan (NBFC) Company and is the flagship company of The Muthoot Group. It was listed in 2011 and is traded in BSE & NSE. It is the largest Gold Loan Company in the country.",
          "Apart from Muthoot Finance, The Muthoot Group has 16 other divisions, to name a few are Hospitality, Health Care, Equity & Commodity Trading, Insurance broking etc. The group is four generations old and George Alexander represents the fourth generation. Prior to joining his family business George had worked for ING & Kotak Mahindra Bank in India.",
          "He was the Chair of Confederation of Indian Industries – Young Indians Bangalore Chapter in 2015. He is presently the Finance Chair of Entrepreneur’s Organisation Bangalore. George was one among the ten Indians chosen to represent India for AIYD (Australia India Youth Dialogue) at Sydney and Melbourne in 2013."
        ]
      },
      {
        id: "3",
        name: "K R Bijimon",
        src: mrBijimon,
        designation: "Non - Executive Director / Chief General Manager - Muthoot Finance Ltd",
        description : ["Mr. K. R. Bijimon began his career as Manager (Finance) with Muthoot Bankers in 1996. Over his 21 years of service, he led the transformation of Muthoot Bankers into the present-day Muthoot Finance Ltd. and steadily rose to the position of Chief General Manager of the company.Under his leadership, the company experienced significant growth and has become the largest lender of gold loans in the country, and possibly the largest in the world. As Chief General Manager, he is responsible for driving growth across the Group's diversified business portfolios, including the Money Transfer division, International Remittance and Foreign Exchange, ATM division, and the global expansion of the business.",
          "Muthoot Group today has a global presence, with successful businesses in countries such as the USA, UK, UAE, Singapore, and Sri Lanka. The group is also planning to begin operations in Italy shortly. Mr. Bijimon also serves as the Chief Operating Officer for Global Operations at Muthoot Group. Currently, he holds directorships in several companies, including Muthoot Forex Ltd, Muthoot Securities Ltd, Muthoot Commodities Ltd, Muthoot Homefin (India) Ltd, Muthoot Royalex Services Pvt. Ltd, Belstar Investment and Finance Pvt. Ltd (a subsidiary of Muthoot Finance), and Asia Asset Finance PLC (Sri Lanka).",
          "Mr. Bijimon holds a Bachelor’s Degree in Law (LLB), a Bachelor’s Degree in Science (BSc), and a Master’s Degree in Business Administration (MBA). He is also a Fellow Member of the Institute of Chartered Accountants of India, a Certified Associate of the Indian Institute of Bankers (CAIIB), and a Fellow Member of the Certified Management Accountants (FCMA), Institute of Sri Lanka."
        ]
      },
      {
        id: "4",
        name: "K G K Pillai",
        src: mrPillai,
        designation: "Non - Executive Director",
        description : ["Kiran G presently functions as the Head of the Internal Audit & Inspection Department of Muthoot Finance Limited. He graduated from Kerala University with a Bachelor of Science Degree in Mathematics. He is also a Chartered Accountant from the Institute of Chartered Accountants, India. He presently functions as the Head of the Internal Audit & Inspection Department, which employs a team of 1000 auditors.",
          "He possesses over 13 years of specialist experience in auditing with expertise in operational, financial, and regulatory compliance. He has a proven track record and experience in strategic reporting on internal control to the Audit Committee, including providing expertise and advice on risk management techniques.",
          "Further, he has experience in coordinating work with risk, legal, surveillance & vigilance departments. He provides his expertise to act as a resource person for other departments in their design, implementation and monitoring of activities across the organization."
        ]
      },
      {
        id: "5",
        name: "R A B Basnayake",
        src: mrRajitha,
        designation: "Independent Non - Executive Director",
        description : ["Independent Management and ICT Consultant with 30+ years of extensive experience in ICT and Business Management providing leadership to mission critical ICT and Business Process Transformation projects enabling business strategies of a wide variety of industry sectors predominantly encompassing Financial services, Digital Entertainment, FMCG/ consumer durables Retailing / Distribution and Food & Beverage manufacturing Distribution, Hospitality and Information Technology solution delivery. He brings extensive experience in Business consultancy services as Director Advisory Services of Ernst & Young Sri Lanka providing Business Advisory and ICT Advisory solutions for mission critical private and public sector projects including ADB, UNIDO, ICTA projects in Sri Lanka and overseas. He currently serves on the Board of Asia Asset Finance PLC as Senior Independent Non-Executive Director and also as Chairman of Evoke International (Pvt) Ltd, leader in Digital Entertainment industry Sri Lanka. Furthermore he currently functions as Senior Management Consultant at Latex Green (Pvt) Ltd, the regional leader in Natural Latex Foam industry.",
          "His project portfolio currently includes key IT Strategy and Business Process Re-engineering projects as an external consultant to key clients of Ernst & Young IT Advisory Service, Sri Lanka. During his career he has spearheaded ICT operations of Asia Capital Group a highly diversified conglomerate into capital markets, non banking finance, insurance, digital entertainment, tea packaging, Leisure, Technology as Group Chief Information Officer and held key Senior Management positions in ICT at The Lion Brewery Ceylon Ltd as Head of Information Technology and Richard Pieris Distributors Ltd as Manager Information Systems . He counts over 20 years experience as a key member of the strategic leadership teams of these companies and Ernst & Young.",
          "He was also a visiting lecturer for MSc in Information Technology study program conducted by Informatics Institute of Technology in collaboration with Keele University UK. Rajitha holds a Master Degree with Distinction from Keele University UK, Executive Diploma in Business Administration with Distinction from University of Colombo and British and Australian Professional IT qualifications."
        ]
      },
      {
        id: "6",
        name: "J P D R Jayasekara",
        src: mrJayasekara,
        designation: "Independent Non - Executive Director",
        description : ["Mr Danasiri Rupakumara Jayasekera holds a BA (Special) Degree in Economics with a second class upper division. He possesses over 33 years of progressive experience in taxation,ICT and banking and finance. He assumed office as an Assessor to the Department of Inland Revenue in 1984 and was promoted to the position of Senior Assessor in 1994.In the year 2005, he was promoted as Deputy Commissioner, Thereafter he was promoted as Commissioner and also to Senior Commissioner.",
                      "Since 2015 July, he has performed duties as Senior Additional Project Director of Revenue Administration Management Information System (RAMIS) which is an IT project in order to automate the entire IRD Taxes. At the time of retirement he performed duties as Deputy Commissioner General (Information Technology) of the Department. Mr Jayasekera has gained considerable overseas exposure through training programs and international conferences attended during his career at the IRD. He had the opportunity undergo training programs in various aspects of taxation in Austria, India and UK.",
                      "He has also received valued exposure in double taxation treaty negotiations through programs Conducted in Seychelles and Saudi Arabia. He has participated in strategic level forums as a delegate to conferences such as ‘OECD Global Forum on VAT’ held in France and the ‘Fourth IMF – Japan High Level Tax Conference for Asian Countries’ in Tokyo, Japan, Ministerial workshop on Blue Economy and Maritime Silk Road in China. He was one of the members of the Evaluation committee in preparation of Due Diligence Reports in respect of RAMIS project who visited to countries such as Singapore and Angola.",
                      "Mr. Jayasekera holds a membership of APFA (Association of Public Finance Accountants of Sri Lanka) and also an active member of the China Sri Lanka Society. He is also social worker holding positions and memberships in several societies and associations."
        ]
      },
      {
        id: "7",
        name: "T C D Kumarasiri",
        src: mrKumarasiri,
        designation: "Non - Executive Director",
        description : ["Mr. Chaaminda Kumarasiri is a Senior Chartered Accountant, Management Consultant, Keynote Speaker, Business Advisor and a Corporate Trainer with a proven track record, holding senior leadership positions in leading local entities and multinationals.",
                      "He is the Founder/President of Asia Pacific Institute of Money and Entrepreneurship Development, the Founder/CEO of the Human Capital Partner, the Chairman/Principal Consultant of H C P Consulting (Pvt.) Ltd. He serves as an Independent Non-Executive Director at Sanasa Development Bank PLC and an advisor/consultant to a few leading Organizations both in the Private Sector and Public Sector. He also serves on the International Panel on Accounting Education (IPAE), as the only representative from the entire South Asia. He has served on the Governing Council of CA Sri Lanka for two consecutive terms and currently serves as the Vice Chairman of ACCA Sri Lanka Member Network Panel.",
                      "Mr. Kumarasiri possesses an array of professional and academic qualifications with numerous awards and medallions. He is a Fellow member of The Institute of Chartered Accountants of Sri Lanka, The Association of Chartered Certified Accountants – UK, The Association of Accounting Technician of Sri Lanka and The Institute of Certified Management Accountants of Sri Lanka. He has obtained a B.Sc. Accountancy (Special) degree with a First Class honors from the University of Sri Jayewardenepura and holds an MBA in Finance from the University of Colombo. As a leading Corporate Trainer he has profoundly inspired countless individuals both in Sri Lanka and overseas. As a pivotal figure in the Entrepreneurial Ecosystem, Chaaminda is frequently featured across various public forums, national TV/Radio channels, and prominent YouTube channels. He is sought after as a guest speaker and a panelist at business forums and entrepreneurship-related events.",
                      "He has been bestowed with ACCA National Advocate of the Year Award - 2022 for his exceptional commitment and dedication to promote the accountancy profession and its values."
        ]
      },
      {
        id: "8",
        name: "R D S Gunasekara",
        src: mrRoshan,
        designation: "Executive Director / Chief Operating Officer",
        description : ["Starting his career as a humble Credit Officer at Commercial Leasing Company in 1994 Mr. Gunasekera has under his belt, over 25 years of work experience in the Finance Sector. In April 2010 he joined the Asia Asset Family as a General Manager and now holds the title of Chief Operating Officer, overlooking the branch network as well as overall operations of the branches, comprising of Marketing, Credit, Administrations & Recoveries.",
                      "He is also responsible for product & business development, strategic planning & implementation. He graduated from the University of Sri Jayewardenepura, holds an MBA from the University of Colombo, is part-qualified in CIMA and a member of the Association for Overseas Technical Scholarship (AOTS) – Japan. He used to be a Financial Services Marketing lecturer (visiting) at the University of Colombo – Sri Lanka."
        ]
      },
      {
        id: "9",
        name: "R A J Gunawardena",
        src: mrRajiv,
        designation: "Chief Executive Officer",
        description : ["Mr. Rajiv Gunawardena, the Chief Executive Officer / Director of Asia Asset Finance PLC was appointed to the Board in December 2009. A visionary leader, responsible for setting and implementing the organization’s vision and strategy and for orchestrating the organization’s operations, Mr. Gunawardena is known for his analytical mind and charismatic presence.",
                      "Prior to taking the reins of Asia Asset Finance, he has worked in the capacity of Senior Investment Analyst at Asia Capital PLC and at a point, lectured in Account at the Australian College of Business and Technology.",
                      "He holds a Bachelor of Science in Business and Information Systems from the United Kingdom and a Masters of Professional Accounting from Monash University, Australia."
        ]
      },
      //need to translate below
      {
        id: "10",
        name: "R D S Gunasekara",
        src: mrRoshan,
        designation: "Executive Director / Chief Operating Officer",
        description : ["Starting his career as a humble Credit Officer at Commercial Leasing Company in 1994 Mr. Gunasekera has under his belt, over 25 years of work experience in the Finance Sector. In April 2010 he joined the Asia Asset Family as a General Manager and now holds the title of Chief Operating Officer, overlooking the branch network as well as overall operations of the branches, comprising of Marketing, Credit, Administrations & Recoveries.",
                      "He is also responsible for product & business development, strategic planning & implementation. He graduated from the University of Sri Jayewardenepura, holds an MBA from the University of Colombo, is part-qualified in CIMA and a member of the Association for Overseas Technical Scholarship (AOTS) – Japan. He used to be a Financial Services Marketing lecturer (visiting) at the University of Colombo – Sri Lanka."
        ]
      },
      {
        id: "11",
        name: "M Thiruneelakandan",
        src: mrThiru,
        designation: "General Manager",
        description : ["Currently, he overlooks the credit department, branches and FD Operations. While he was working for a private Bank Mr Thiruneelakanthan read for the Institute of Bankers London and Institute of Cost and Management Accountants London.",

        ]
      },
      {
        id: "12",
        name: "Mahesh Kumar",
        src: mrMahesh,
        designation: "Deputy General Manager - Credit",
        description : ["Mr. Mahesh Kumara holds a BBA (Accounting) Degree from the University of Colombo. Prior to joining Asia Asset in 2009 Mr. Kumara acquired a vast industrial experience working in the senior management of multiple finance companies. He fondly recalls his entry into the industry in the year 1999 as an Assistant Accountant. Presently, this gentleman holds the position of Assistant General Manager – Credit.",

        ]
      },
      {
        id: "13",
        name: "Jayantha Weerapullige",
        src: mrJayantha,
        designation: "Deputy General Manager- Marketing",
        description : ["Currently, Mr. Weerapullige serves as the AGM – Marketing of Asia Asset Finance ( after 3 years, being the Senior Manager- Lending )",
          "He holds a B.Com (special) degree in business administration and an MBA from the University of Colombo. He counts over 17 years of work experience in Marketing, Credit & Accounts of which 14 were spent in the Banking and Finance sector.",
        ]
      },
      {
        id: "14",
        name: "Samira Weveldeniya",
        src: mrSameera,
        designation: "Deputy General Manager - Fixed Deposits",
        description : ["Mr. Samira Weveldeniya joined Asia Asset in June 2006 as its Negombo Branch Manager. Today, he is the Assistant General Manager- Fixed Deposits, contributing to the marketing activities and branch development of the company. Mr.Weveldeniya’s superior marketing skills have earned him a reputation across the industry.",
          "When working at Ceylinco Development Bank- prior to joining Asia Asset- many a marketing award has Samira Weveldeniya engraved on it. Mr.Weveldeniya holds an MBA from Buckinghamshire New University in the UK and was conferred the Postgraduate professional status of Certified Professional Marketer- Asia (CPM – Asia) by The Asia Marketing Federation (AMF).",
          "He is also an Associate Member of The Certified Management Accountants- Australia (AMA-Australia), a Certified Member of Sri Lanka Institute of Marketing (SLIM), holds the Preliminary Certificate in Marketing from the Sri Lanka Institute of Marketing and is partly qualified in Chartered Institute of Marketing (CIM-UK).",
         ]
      },
      {
        id: "15",
        name: "Geethika Elwalage",
        src: msGeethika,
        designation: "Deputy General Manager - Finance",
        description : ["Ms. Geethika Elwalage was appointed as AGM Finance of the Company in March 2017. She has varied exposure of over 8 years in the financial services sector having worked in several leading financial institutions. She is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka.",
          "Additionally, she has three years of experience in the audit sector having worked at BDO Partners. Further, she holds a Master Degree in Business Administration from the University of Sri Jayawardenapura.",
        ]
      },
      {
        id: "16",
        name: "Sajith Atapattu",
        src: mrSajith,
        designation: "Deputy General Manager - Risk",
        description : ["Mr. Sajith Atapattu joined Asia Asset Finance in April 2010. At Asia Asset Finance Mr. Atapattu has worked with the Credit, Recovery, and Administration and Operations departments.",
          "Prior to working at Asia Asset Finance, he has worked in the UK financial services sector where he was in the involved in projects to improve financial inclusion within the non-banking population in the society. He holds a Bachelor’s Degree from University of Keele – UK.",
        ]
      },
      {
        id: "17",
        name: "Inditha Jayathilaka",
        src: mrInditha,
        designation: "Deputy General Manager - Information Technology",
        description : ["Mr. Inditha Jayathilaka is the mastermind solution provider for all IT related tasks at Asia Asset Finance PLC. He has more than 12 years of experience in banking and finance solution development and implementation. He received his BSc in MIS from University college of Dublin.",
          "Over the course of his career, he gained his experience from various sectors, ultimately specializing in the financial sector by providing mission-critical software and infrastructure solutions. Presently, he oversees the Information Technology department by proving IT-related infrastructure, software and security services.",
        ]
      },
      {
        id: "18",
        name: "Praveen Peiris",
        src: mrPraveen,
        designation: "Deputy General Manager - Treasury",
        description : ["Mr.Praveen Peiris joined Asia Asset Finance PLC in January 2014 and has over 16 years of Financial and Treasury experience. He started his career at a Global Audit Firm in 2004 and joined the Non-Banking Financial Sector in 2008.",
          "Prior to joining Asia Asset Finance PLC, he worked as Manager – Treasury in a listed finance company. He has the expertise in Treasury Management including Strategic Risk Management, Asset –Liability Management and Cash Management. He is Competent in Operational Management and has the capacity of handling financing of high-value projects. Mr. Peiris holds an MBA from the University of Wales, U.K and is a Finalist at the Chartered Institute of Management Accountants, U.K.",
        ]
      },
  ],
    },
  },
  si: {
    translation: {
      //Header Component
      header: {
        title: "පාරිභෝගික සේවා",
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
        investor_relations_dropdown2: "මූල්ය යතුරු",
        careers: "රැකියා",
        downloads: "බාගතකිරීම්"
      },

      //Footer Component
      footerListItems: [
        { title: "අපි ගැන", list: ["හැඳින්වීම", "නිලධාරී මණ්ඩලය", "කාර්‍යාල කළමනාකරණය", "ශාඛා ජාලය"], links: ["/web/about", "/web/about/#bod", "/web/about/#corporate-management", "/web/about/#branches"] },
        { title: "සේවා", list: ["රන් ණය", "ස්ථිර තැන්පතු", "ලීසිං", "උකස්", "විදේශ විනිමය හුවමාරුව", "Luckewallet"], links: ["/web/gold-loan", "/web/fixed-deposit", "/web/leasing", "/web/mortgage", "/web/foreign-exchange", "/web/luckewallet"] },
        { title: "ආයෝජක සම්බන්ධතා", list: ["ආයතනික පැතිකඩ", "මූල්‍ය තොරතුරු"], links: ["/web/ir", "/web/ir/#financial-keys"] },
        { title: "වෙනත් සබැඳි", list: ["රැකියා", "අප අමතන්න", "බාගත කිරීම්"], links: ["/web/careers", "/web/contacts", "/web/downloads"] },
      ],
      
      
      footerText: {
        subs_title1: "ඔබට ආරක්ෂිත මූල්‍ය විසඳුම් ඔබ අසලට",
        subs_title2: "අපගේ නවතම යාවත්කාලීන කිරීම් ලබාගැනීම සඳහා ලියාපදිංචි වන්න",
        subs_title3: "අපෙන්",
        subs_message: "අපගේ ප්‍රතිලාභ සහ යාවත්කාලීන කිරීම් ඔබගේ ඊමේල් හිමි inbox එකට ලබා ගැනීමට ලියාපදිංචි වන්න.",
        subs_field: "ඔබගේ ඊමේල් පත‍්‍රය ඇතුල් කරන්න",
        subs_btn: "ඉදිරිපත් කරන්න",
        intro: "Asia Asset Finance PLC, 1981 නොවැම්බර් 25 වන දින සමාගම පිහිටුවා ඇති අතර ICRA A+ ස්ථායී අවධි ශ්‍රේණිය ලබා ඇත සහ ශ්‍රී ලංකා මධ්‍යම බැංකුවේ මූල්‍ය කමිටු බලපත්‍රය ලැබ ඇත.",
        address: "අංක 76, උද්‍යාන වීදිය, කොළඹ 02, ශ්‍රී ලංකා",
      },
      

      //Landing Page Components
      carouselLandingPage: [
        {
          src: banner1,
          title: "ඔබේ මූල්‍ය අනාගතය සඳහා නව්‍ය විසඳුම්",
          intro: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
          description:
            "අපි ඒෂියා ඇසට් ෆිනෑන්ස් හි මූල්‍ය සාර්ථකත්වය සඳහා නවෝත්පාදනය තුලින් සිදුවන බලපෑම පිලිබද විශ්වාස කරන්නෙමු. ගැලපෙන මුල්‍ය විසඳුම් ලබාදීම වෙනුවෙන් අපගේ ඇති කැපවීම ශ්‍රී ලංකාවේ මුල්‍ය ක්ෂේත්‍රය තුල ප්‍රමුඛයා ලෙස අපව ස්ථානගත කර ඇත. ඔබ ආයෝජනය කිරීමට, ඉතිරි කිරීමට හෝ ඔබේ මීළඟ විශාල ව්‍යාපෘතිය මූල්‍යකරණය කිරීමට බලාපොරොත්තු වන්නේද ? , එසේනම් අපි විශ්වාසයෙන් සහ විනිවිදභාවයෙන් යුතුව ඔබේ ගමනට සහාය වීමට බලා සිටින්නෙමු.",
        },
        {
          src: banner2,
          title: "සිහින සැබෑ වෙන මුල්‍ය විසඳුම් හමුවන තැන",
          intro: "මුල්‍ය නවෝත්පාදනය සහා ප්‍රබෝධමත් වර්ධනය ",
          description:
            "අපි හුදෙක් මූල්‍ය ආයතනයක් නොවන්නෙමු; අපි ඔබේ ප්‍රගතියේ හවුල්කරුවන් වෙමු. මූල්‍ය සඳහා වන අපගේ නව්‍ය ප්‍රවේශය ශ්‍රී ලංකාව පුරා සිටින පුද්ගලයන් සහ ව්‍යාපාර සවිබල ගැන්වීම සඳහා නිර්මාණය කර ඇත. පුද්ගලාරෝපිත සේවාවක් සමඟ අති නවීන තාක්‍ෂණය ඒකාබද්ධ කිරීමෙන්, අපි කාර්යක්ෂම පමණක් නොව, ඔබේ ඉලක්ක සපුරා ගැනීමට උපකාරී වන ඵලදායී මූල්‍ය විසඳුම් ලබා දෙන්නෙමු.",
        },
        {
          src: banner3,
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
        card2_description: "රී ලංකාව පුරා සිටින ගනුදෙනුකරුවන්ගේ අවශ්‍යතාවලට ගැලපෙන මූල්‍ය සේවා රාශියක් අප සතු වේ.",
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
  },
  productsOverviewTextLandingPage: {  
    title: "අපගේ මූල්‍ය නිෂ්පාදන සොයාගන්න",  
    subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
    description: "ඒෂියා ඇසට් ෆිනෑන්ස් හිදී, ඔබේ අත්‍යවශ්‍යතා සපුරාලීම සඳහා සකස් කළ විවිධ මූල්‍ය නිෂ්පාදන අපි සපයන්නෙමු. ඔබ ඔබගේ අරමුදල් වර්ධනය කිරීමට, ණයක් ලබා ගැනීමට, හෝ ආයෝජන අවස්ථා පිලිබද දැනගැනීමට කැමතිද එසේනම් ඔබේ මූල්‍ය සුභසාධනය වෙනුවෙන් සකසා ඇති අපගේ නිෂ්පාදන ඔබට ප්‍රයෝජනවත් වනු ඇත. ආරක්ෂිත ස්ථාවර තැන්පතු, නම්‍යශීලී රන් ණය, සහ කුඩා පොලී ණය අතරින් ඔබට ගැලපෙන විසදුමක් තෝරාගන්න. අපගේ නව්‍ය විද්‍යුත් ඉතුරුම් ගිණුම්, තරඟකාරී විදේශ විනිමය සේවා, සහ පහසු ලීසිං විකල්ප සමඟ, ඔබේ මූල්‍ය ගමනේ සෑම පැතිකඩක්ම ආවරණය කරයි. ඔබගේ මූල්‍ය සාර්ථකත්වය සවිබල ගන්වන විශ්වාසනීය, පුද්ගලාරෝපිත විසඳුම් ලබා දීම වෙනුවෙන් ඔබට අප කෙරෙහි විශ්වාසය තැබිය හැක.",  
},  
  
  productsOverviewLandingPage: [
    { title: "ස්ථාවර තැන්පතු", image: FixedDeposits, description: "ස්ථාවර ප්‍රතිලාභ සමඟ ඔබේ ඉතුරුම් සුරක්ෂිත කරගන්න." },
    { title: "රන් ණය", image: GoldLoan, description: "නම්‍යශීලී ඉතුරුම් සමඟ ඔබේ වත්කම් වර්ධනය කරගන්න." },
    { title: "ක්ෂුද්‍ර ණය", image: Mortgage, description: "ඔබේ සෑම අවශ්‍යතාවක් සඳහාම අඩු පොලී අනුපාතවලින් ණය ලබාගන්න." },
    { title: "ලීසිං", image: Leasing, description: "අඩු පොලී අනුපාත සමඟ පහසු වියදම්." },
    { title: "විද්‍යුත් ඉතුරුම් ගිණුම", image: Luckewallet, description: "පුළුල් ආරක්ෂාවක් සහිත විද්‍යුත් ගිණුම්." },
    { title: "විදේශ විනිමය හුවමාරුව", image: Forex, description: "විවිධ විකල්ප සමඟින් ඔබේ ප්‍රතිලාභ උපරිම කරගන්න." },
],
testimonialsText: {
  title: "අපගේ ගනුදෙනුකරුවන් පවසන දේ",
  subtitle: "සාර්ථකත්වය සහ තෘප්තිය පිළිබඳ සැබෑ තොරතුරු",
},
testimonials: [
  {
    personName: "රාකේෂ් බන්සල්",
    profile: "අලෙවි කළමනාකරු",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam ducimus perferendis impedit laborum, facilis dignissimos! Ullam minus cumque quo.",
  },
  {
    personName: "විමල් කුමාර",
    profile: "දත්ත විශ්ලේෂක",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  },
  {
    personName: "විනිත් සිංහ",
    profile: "නිෂ්පාදන කළමනාකරු",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "විනිත් සිංහ",
    profile: "නිෂ්පාදන කළමනාකරු",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "විනිත් සිංහ",
    profile: "නිෂ්පාදන කළමනාකරු",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
],
branchDetailsLandingPage: {
  title1: "අපගේ",
  title2: "ශාඛා",
  subtitle: "මුල්‍ය විසදුම් දැන් පහසුවෙන්ම ඔබ වෙත",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100 ",
  description3: "අතුරින් එකකට ගොස් අපගේ පුද්ගලාරෝපිත සේවාව අදම අත්විඳින්න. ශ්‍රී ලංකාවේ කොතැන සිටියත් ඔබගේ මූල්‍ය ගමනට සහයක්.",
  //description4: "ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී ",
  //description5: "ඉහළින්ම ප්‍රසිද්ධයි. ශ්‍රී ලංකාවේ ඔබ සිටින තැනට බැගින්, ඔබගේ මූල්‍ය ගමනට අපි සහය වනවා.",
  newbranches_title: "අපගේ නවතම ශාඛා",
  newbranches_description: "අපගේ විශ්වාසනීය මූල්‍ය සේවාවන් ඔබට වඩාත් සමීප කරමින් අපගේ නවතම ශාඛා විවෘත කිරීම පිළිබඳව අපි ඉතා සතුටට පත් වෙමු. මෙම ශාඛා මගින් අපගේ  සේවාවන් දිවයින පුරා සිටින ඔබට ලබාදේ. අපගේ නවතම ශාඛා වෙත පැමිණ ඔබ අපෙන් බලාපොරොත්තු වන විශ්වාසනීය සහ පුද්ගලාරෝපිත සේවාවම අදම අත්විඳින්න.",
  newest_branch_name: "දෙනියාය",
  newest_branch_address: "අංක 196, මධ්‍යම පාර, දෙනියාය",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk"
},
inquiryForm: {
  title: "අප සමඟ අදම සම්බන්ධ වන්න",
  subtitle: "මූල්‍ය විසඳුම් ඔබට තවත් සමීප කරමින්",
  label1: "නම",
  field1: "ඔබේ නම ඇතුළත් කරන්න",
  error1: "කරුණාකර ඔබේ නම ලබා දෙන්න",
  error1_1: "කරුණාකර සත්‍යයින්ගෙන් යුත් විද්‍යුත් තැපැල් ලිපිනයක් ලබා දෙන්න",
  label2: "ජංගම අංකය",
  field2: "ඔබේ ජංගම අංකය ඇතුළත් කරන්න",
  error2: "කරුණාකර ඔබේ ජංගම අංකය ලබා දෙන්න",
  label3: "විද්‍යුත් තැපෑල",
  field3: "ඔබේ විද්‍යුත් තැපැල් ලිපිනය ඇතුළත් කරන්න",
  error3: "කරුණාකර ඔබේ විද්‍යුත් තැපෑල ලබා දෙන්න",
  label4: "පණිවිඩය",
  field4: "ඔබේ පණිවිඩය මෙහි ඇතුළත් කරන්න",
  error4: "",
  button1: "යලි සකසන්න",
  button2: "ඉදිරිපත් කරන්න",
  close_btn: "ආපසු",
  response_pass: "ඔබගේ විමසුම සාර්ථකව යවා ඇත!",
  response_fail: "විමසුම යැවීම අසාර්ථකයි! කරුණාකර නැවත උත්සහ කරන්න.",
},

//About Page Components
bannerAbout: {
  src: bannerAbout,
  title: "අප ගැන",
  intro: "1970 සිට ",
  specialnote: "ඔබේ මූල්‍ය අනාගතය සවිබල ගැන්වීම",
  description: "“ මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම ”",
},
cardsAbout: [
  { stat: "70,000+", text: "පාරිභෝගිකයන්", icon: faUsers },
  { stat: "54+", text: "වසර ගණනාවක අත්දැකීම්", icon: faClock },
  { stat: "1000+", text: "සේවකයින්", icon: faBriefcase },
  { stat: "100", text: "ශාඛා", icon: faBuilding },
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
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ජී එම් අලෙක්සැන්ඩර් මහතා', title: 'විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrBijimon, name: 'කේ ආර් බිජිමොන් මහතා', title: 'විධායක නොවන අධ්‍යක්ෂ / ප්‍රධාන සාමාන්‍යාධිකාරී - මූතුට් ෆිනෑන්ස් ලිමිටඩ්' },
  { imgSrc: mrPillai, name: 'කේ ජී කේ පිල්ලේ මහතා', title: 'විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrRajitha, name: 'ආර් ඒ බී බස්නායක මහතා', title: 'ස්වාධීන නොවන විධායක අධ්‍යක්ෂ' },
  { imgSrc: mrJayasekara, name: 'ජේ පී ඩී ආර් ජයසේකර මහතා', title: 'ස්වාධීන නොවන විධායක අධ්‍යක්ෂ' },
  { imgSrc: mrKumarasiri, name: 'ටී සී ඩී කුමාරසිරි මහතා', title: 'විධායක නොවන අධ්‍යක්ෂ' },
  { imgSrc: mrRoshan, name: 'ආර් ඩී එස් ගුණසේකර මහතා', title: 'විධායක අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරී' },
],
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
  see_more_btn: "තව බලන්න",
  view_profile_btn: "පැතිකඩ බලන්න",
},
comTextsAbout: {  
  title1: "සමාගම්",  
  title2: "කළමනාකරණය",  
  subtitle: "ආරක්ෂිත මූල්‍ය වර්ධනය සඳහා සම්පුර්ණ විසඳුම්",  
  description: "ඒෂියා ඇසට් ෆිනෑන්ස් හි, අපගේ ආයතනික කළමනාකරණ කණ්ඩායම සමන්විත වන්නේ අත්දැකීම් සම්භාරයක් සහ තීක්ෂ්ණ බුද්ධියක්  සහිත පළපුරුදු වෘත්තිකයන්ගෙන් ය. ඔවුන්ගේ උපායමාර්ගික නායකත්වය සහ විශිෂ්ටත්වය සඳහා වූ කැපවීම අපගේ සමාගමේ සාර්ථකත්වයට හේතු වන අතර, අපි ශ්‍රී ලංකාවේ මූල්‍ය සේවා කර්මාන්තයේ ඉදිරියෙන්ම සිටින බව සහතික කරමු."  
},  

comProfilesAbout: [ 
  { imgSrc: mrRajiv, name: 'රජීව් ගුණවර්ධන', title: 'අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරී' },
  { imgSrc: mrRoshan, name: 'රොෂාන් ගුණසේකර', title: 'විධායක අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරි' },
  { imgSrc: mrThiru, name: 'එම්. තිරුනීලකන්දන්', title: 'සමාන්‍යාධිකාරී' },
  { imgSrc: mrMahesh, name: 'මහේෂ් කුමාර', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - ණය' },
  { imgSrc: mrJayantha, name: 'ජයන්ත වීරපුල්ලිගේ', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - අලෙවිකරණය' },
  { imgSrc: mrSameera, name: 'සමිර වේවැල්දෙණිය', title: 'සහකාර සමාන්‍යාධිකාරී - ස්ථාවර තැන්පතු' },
  { imgSrc: msGeethika, name: 'ගීතිකා ඇල්වලගේ', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - මූල්ය' },
  { imgSrc: mrSajith, name: 'සජිත් අතපත්තු', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - අවදානම් කළමනාකරණය' },
  { imgSrc: mrInditha, name: 'ඉන්දිත ජයතිලක', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - තොරතුරු තාක්ෂණ' },
  { imgSrc: mrPraveen, name: 'ප්‍රවීන් පීරිස්', title: 'නියෝජ්ය සමාන්‍යාධිකාරී - භාණ්ඩාගාරය' }
],

branchNetworktext: {
  title1: "අපගේ ",
  title2: "ශාඛා ජාලය",
  subtitle: "මූල්‍ය විසඳුම් ඔබ වෙත සමීප කරමින් ",
  description1: "අදම අපගේ ",
  description2: "ශාඛා 100 ",
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
},
branchesData: {
  western: {
    title: "බස්නාහිර කලාපය",
    branches: [
      { name: "මීගමුව", location: "අංක 295, ප්‍රධාන වීදිය, මීගමුව", contact: "031 769 9020", image: branchSample },
      { name: "ගම්පහ", location: "අංක 69, කොළඹ පාර, ගම්පහ.", contact: "033 769 9010", image: branchSample },
      { name: "කළුතර", location: "අංක 344, මහ වීදිය, කළුතර දකුණ", contact: "034 769 9013", image: branchSample },
      { name: "මොරටුව", location: "අංක 16, නව ද සොයිසා පාර, රාවතාවත්ත.මොරටුව.", contact: "011 768 1511", image: branchSample },
      { name: "වැල්ලවත්ත", location: "අංක 344, ගාලු පාර, වැල්ලවත්ත", contact: "011 768 1530", image: branchSample },
      { name: "මතුගම", location: "K & W මධ්‍යස්ථානය, අංක 5, ගාමිණී මාවත, අලුත්ගම පාර, මතුගම", contact: "034 769 9022", image: branchSample },
      { name: "කොටහේන", location: "අංක 31, කොටහේන වීදිය, කොළඹ 13", contact: "- ", image: branchSample },
      { name: "පානදුර", location: "අංක 114, ඩී එස් සේනානායක මාවත, පානදුර..", contact: "038 769 9010", image: branchSample },
      { name: "මට්ටක්කුලිය", location: "අංක 3/810, ෆාම් පාර, මට්ටක්කුලිය", contact: "011 769 9480", image: branchSample },
      { name: "ග්‍රෑන්ඩ් පාස් ", location: "අංක 428, මාදම්පිටිය පාර, කොළඹ 14", contact: "011 768 1502", image: branchSample },
      { name: "ඇලකන්ද", location: "අංක 327, තිඹිරිගස්යාය, හඳල, වත්තල.", contact: "011 769 9446", image: branchSample },
      { name: "හෝමාගම", location: "අංක 486, හෝමාගම නගරය, හෝමාගම", contact: "011 769 9415", image: branchSample },
      { name: "දංකොටුව", location: "අංක 07, නාත්තන්ඩිය පාර, දංකොටුව.", contact: "031 769 9030", image: branchSample }
    ]
  },
  eastern: {
    title: "නැගෙනහිර කලාපය",
    branches: [
      { name: "මඩකලපුව", location: "අංක 187, ත්‍රිකුණාමලය පාර, මඩකලපුව.", contact: "+94 123 456 789", image: branchSample },
      { name: "චෙන්කලඩි", location: "නව මාර්කට් පාර, චෙන්කලඩි", contact: "+94 234 567 890", image: branchSample },
      { name: "කල්මුණේ", location: "අංක 69, ප්‍රධාන පාර, කල්මුණේ.", contact: "+94 345 678 901", image: branchSample },
      { name: "සම්මන්තුරේ", location: "අංක 120, අම්පාර පාර, කරුවාඩ්ඩුකල්-02, සම්මන්තුරේ.", contact: "+94 456 789 012", image: branchSample },
      { name: "අක්කරපත්තුව", location: "අංක 155, අම්පාර පාර, අක්කරපත්තුව.", contact: "+94 567 890 123", image: branchSample },
      { name: "වාලච්චේන", location: "ප්‍රධාන වීදිය, වාලච්චේන", contact: "+94 678 901 234", image: branchSample },
      { name: "ත්‍රිකුණාමලය", location: "අංක 285, මධ්‍යම පාර, ත්‍රිකුණාමලය.", contact: "+94 789 012 345", image: branchSample },
      { name: "කින්නියා", location: "අංක 88, ප්‍රධාන වීදිය, සින්න කින්නියා, කින්නියා 03", contact: "+94 890 123 456", image: branchSample },
      { name: "කලවංචිකුඩි", location: "අංක 172, ප්‍රධාන වීදිය, කලවංචිකුඩි", contact: "+94 901 234 567", image: branchSample },
      { name: "පොතුවිල්", location: "ප්‍රධාන වීදිය, පොතුවිල්", contact: "+94 012 345 678", image: branchSample },
      { name: "කන්තලේ", location: "අංක: 137, ප්‍රධාන වීදිය, කන්තලේ", contact: "+94 123 456 789", image: branchSample },
      { name: "තිරුක්කෝවිල්", location: "ප්‍රධාන වීදිය, තිරුක්කෝවිල්", contact: "+94 234 567 890", image: branchSample },
      { name: "නින්දවූර්", location: "42/11, ප්‍රධාන වීදිය, නින්දවූර්", contact: "+94 345 678 901", image: branchSample },
      { name: "සේරුනුවර", location: "අංක 44, A.R.B.03, සේරුනුවර", contact: "+94 267 699 050", image: branchSample },
      { name: "මුතූර්", location: "මඩකලපු පාර, අලිම් නගර්, මුතූර්.", contact: "+94 267 699 040", image: branchSample },
      { name: "අම්පාර", location: "අංක 451, D.S සේනානායක පාර, අම්පාර.", contact: "+94 637 699 020", image: branchSample }
    ]
  },
  southern: {
    title: "දකුණු කලාපය",
    branches: [
      { name: "ගාල්ල", location: "අංක 170/172, කඩවීදිය, ප්‍රධාන වීදිය, ගාල්ල.", contact: "+94 123 456 789", image: branchSample },
      { name: "මාතර", location: "79,අනගාරික ධර්මපාල මාවත, මාතර", contact: "+94 234 567 890", image: branchSample },
      { name: "බේරුවල", location: "අංක 199, තොටමුනේ දකුණ බේරුවල බද්දේ, බේරුවල.", contact: "+94 345 678 901", image: branchSample },
      { name: "අම්බලන්තොට", location: "අංක 55, මහ වීදිය , අම්බලන්තොට", contact: "+94 456 789 012", image: branchSample },
      { name: "ඇල්පිටිය", location: "අංක 23/4, අම්බලන්ගොඩ පාර, ඇල්පිටිය.", contact: "+94 567 890 123", image: branchSample },
      { name: "දෙනියාය", location: "අංක 196, ප්‍රධාන වීදිය, දෙනියාය.", contact: "+94 678 901 234", image: branchSample }
    ]
  },
  northern: {
    title: "උතුරු කලාපය",
    branches: [
      { name: "යාපනය", location: "අංක 109, කස්ත්රියාර් පාර, යාපනය.", contact: "+94 890 123 456", image: branchSample },
      { name: "චාවකච්චේරිය", location: "අංක 05, නුවර පාර, චාවකච්චේරි.", contact: "+94 901 234 567", image: branchSample },
      { name: "පේදුරුතුඩුව", location: "අංක 374, රැජින ගොඩනැගිලි සංකීර්ණය, පේදුරුතුඩුව.", contact: "+94 012 345 678", image: branchSample },
      { name: "චුන්නාකම්", location: "අංක 15, ස්ටේෂන් පාර, චුන්නාකම්", contact: "+94 123 456 789", image: branchSample },
      { name: "නෙල්ලියඩි ", location: "අංක 82, පේදුරුතුඩුව පාර, නෙල්ලියඩි .", contact: "+94 234 567 890", image: branchSample },
      { name: "චංගනී", location: "මහන් තංග ප්ලාසා, ප්‍රධාන වීදිය, චංගනී.", contact: "+94 345 678 901", image: branchSample },
      { name: "වේලනයි", location: "වාගලවාඩි, වේලනයි", contact: "+94 456 789 012", image: branchSample },
      { name: "අච්චුවේලි", location: "අංක 53, අවරංගල් පාර, අච්චුවේලි.", contact: "+94 567 890 123", image: branchSample },
      { name: "මනිපායි", location: "අංක 260, මනිපායි පාර, මනිපායි.", contact: "+94 678 901 234", image: branchSample },
      { name: "උරුම්පිරායි", location: "පලායි පාර, උරුම්පිරායි", contact: "+94 789 012 345", image: branchSample },
      { name: "කිලිනොච්චිය", location: "මුරුගන් පන්සල අසල,A9 මාර්ගය, කිලිනොච්චිය.", contact: "+94 890 123 456", image: branchSample },
      { name: "පුදුකුඩිඉරිප්පු", location: "අංක 02, පරන්තන් පාර, පුදුකුඩිඉරිප්පු, මුලතිව්.", contact: "+94 901 234 567", image: branchSample },
      { name: "මුලතිව්", location: "අංක 38, ප්‍රධාන වීදිය, මුලතිව්.", contact: "+94 012 345 678", image: branchSample },
      { name: "වවුනියාව", location: "අංක, 27, 2 වන හරස් වීදිය, වවුනියාව.", contact: "+94 247 699 010", image: branchSample },
      { name: "ඔඩ්ඩුසුඩාන්", location: "මුලතිව්, ප්‍රධාන වීදිය, විද්‍යාපුරම්, ඔඩ්ඩුසුඩාන්.", contact: "+94 212 291 880", image: branchSample },
      { name: "මන්නාරම", location: "අංක : 5, පළමු හරස් වීදිය, පිටකොටුව, මන්නාරම.", contact: "+94 237 699 010", image: branchSample },
      { name: "චෙඩ්ඩිකුලම්", location: "ප්‍රධාන වීදිය, චෙඩ්ඩිකුලම්", contact: "+94 247 699 020", image: branchSample },
      { name: "මුලංකාවිල්", location: "මන්නාරම පාර, මුලන්කාවිල්.", contact: "+94 117 699 000", image: branchSample },
      { name: "මල්ලාවි", location: "තුන්නුකායි පාර, මල්ලාවි, මුලටිව්.", contact: "+94 217 699 067", image: branchSample }
    ]
  },
  central: {
    title: "මධ්යම කලාපය",
    branches: [
      { name: "දිගන", location: "J/2005 11/02. රජවැල්ල දිගන.", contact: "+94 345 678 222", image: branchSample },
      { name: "හැටන්", location: "අංක 14/ඒ, බිම් මහල, නව පාර, හැටන්.", contact: "+94 456 789 333", image: branchSample },
      { name: "තලවකැලේ", location: "අංක 8/3, ප්‍රධාන වීදිය, තලවකැලේ", contact: "+94 567 890 444", image: branchSample },
      { name: "නාවලපිටිය", location: "අංක 75, අඹගමුව පාර, නාවලපිටිය", contact: "+94 678 901 555", image: branchSample },
      { name: "ගම්පොල", location: "අංක 63, නුවරඑළිය පාර, ගම්පොල", contact: "+94 817 699 002", image: branchSample },
      { name: "රාගල", location: "අංක 67, ප්‍රධාන වීදිය, රාගල.", contact: "+94 527 699 033", image: branchSample },
      { name: "මාතලේ", location: "අංක 242, ප්‍රධාන වීදිය, මාතලේ", contact: "+94 667 699 020", image: branchSample },
      { name: "පුණ්ඩළුඔය", location: "අංක 244/59, ලා කඩේ වීදිය, පුණ්ඩළුඔය.", contact: "+94 517 699 032", image: branchSample },
      { name: "මස්කෙළිය", location: "අංක: 244, ප්‍රධාන වීදිය, මස්කෙළිය.", contact: "+94 527 699 010", image: branchSample },
      { name: "කටුගස්තොට", location: "අංක 144, කුරුණෑගල පාර, කටුගස්තොට.", contact: "+94 817 699 010", image: branchSample },
      { name: "නාඋල", location: "අංක 26, දඹුල්ල පාර, නාඋල.", contact: "+94 667 699 010", image: branchSample },
      { name: "බගවන්තලාව", location: "අංක 90, බ්‍රිඩ්වෙල් බසාර්, බගවන්තලාව.", contact: "+94 527 699 020", image: branchSample },
      { name: "පුස්සැල්ලාව", location: "අංක 305, නුවරඑළිය පාර, පුස්සැල්ලාව.", contact: "+94 817 699 020", image: branchSample },
      { name: "වත්තේගම", location: "අංක 55, ප්‍රධාන වීදිය, වත්තේගම", contact: "+94 817 699 025", image: branchSample },
      { name: "අගරපතන", location: "අංක 34, ප්‍රධාන වීදිය, අගරපතන", contact: "+94 517 699 011", image: branchSample },
      { name: "හාවා එළිය", location: "අංක 26, උඩපුස්සැල්ලාව පාර, හාවා එළිය", contact: "+94 527 699 117", image: branchSample },
      { name: "පස්සර", location: "අංක 289, ප්‍රධාන පාර, පස්සර", contact: "+94 557 699 041", image: branchSample },
      { name: "කොටගල", location: "අංක 179/1, ප්‍රධාන වීදිය, කොටගල.", contact: "+94 517 699 022", image: branchSample },
      { name: "හඟුරන්කෙත", location: "අංක 16, රාගල පාර, රිකිල්ලගස්කඩ", contact: "+94 817 699 050", image: branchSample },
      { name: "ඩයගම", location: ". No.B/1. ඩයගම බසාර්, ඩයගම  ", contact: "+94 517 699 041", image: branchSample },
      { name: "හපුගස්තලාව", location: "හල්ගොල්ල, අංක 01, හපුගස්තලාව, නාවලපිටිය", contact: "+94 547 699 000", image: branchSample }
    ]
  },
  northwestern: {
    title: "වයඹ කලාපය",
    branches: [
      { name: "කුරුණෑගල", location: "අංක 30, සුරතිස්ස මාවත, කුරුණෑගල", contact: "+94 123 456 789", image: branchSample },
      { name: "වෙන්නප්පුව", location: "224/3A, කොළඹ පාර, වෙන්නප්පුව.", contact: "+94 234 567 890", image: branchSample },
      { name: "හලාවත ", location: "39, කොළඹ පාර, හලාවත", contact: "+94 345 678 901", image: branchSample },
      { name: "උඩප්පුව", location: "අංක 75, කොට්ඨාශ අංක 2, උඩප්පුව", contact: "+94 456 789 012", image: branchSample },
      { name: "පුත්තලම", location: "අංක 61, කුරුණෑගල පාර, පුත්තලම", contact: "+94 567 890 123", image: branchSample },
      { name: "කල්පිටිය", location: "අංක 120, පුත්තලම පාර, දකුණ, කල්පිටිය.", contact: "+94 327 699 020", image: branchSample }
    ]
  },
  uva: {
    title: "ඌව කලාපය",
    branches: [
      { name: "මොනරාගල", location: "අංක 141,1 වැනි පටුමග, වැල්ලවාය පාර, මොනරාගල.", contact: "055 769 9021", image: branchSample },
      { name: "මහියංගනය", location: "අංක 23, නව නගරය, මහියංගනය.", contact: "055 769 9030", image: branchSample },
      { name: "බදුල්ල", location: "අංක 49, කොකෝවත්ත පාර, බදුල්ල.", contact: "055 769 9011", image: branchSample },
      { name: "හපුතලේ", location: "නො: 27, ප්‍රධාන වීදිය, හපුතලේ", contact: "057 769 9010", image: branchSample },
      { name: "වැලිමඩ", location: "නො: 51, නුවරඑළිය පාර, වැලිමඩ", contact: "057 769 9015", image: branchSample },
      { name: "බිබිල", location: "අංක 6, රෝහල ඉදිරිපිට, මඩකලපුව පාර, බිබිල ", contact: "055 769 9050", image: branchSample },
      { name: "බොරලන්ද", location: "ඔළුගන්තොට, බොරලන්ද", contact: "057 769 9020", image: branchSample },
      { name: "ගිරාඳුරුකෝට්ටේ", location: "අංක 4, නව නගරය, ගිරාදුරුකෝට්ටේ.", contact: "027 769 9000", image: branchSample },
      { name: "ලුණුගල", location: "අංක 156, ප්‍රධාන වීදිය, ලුණුගල", contact: "055 769 9060", image: branchSample }
    ]
  },
  sabaragamuwa: {
    title: "සබරගමුව කලාපය",
    branches: [
      { name: "කෑගල්ල", location: "අංක 245, ප්‍රධාන වීදිය, කෑගල්ල.", contact: "035 769 9011", image: branchSample },
      { name: "රුවන්වැල්ල", location: "අංක 104. ප්‍රධාන වීදිය, රුවන්වැල්ල.", contact: "036 769 9002", image: branchSample },
      { name: "බලංගොඩ", location: " අංක 16, රීසෙට් හවුස් ප්‍රවේශ පාර, බලංගොඩ.", contact: "045 769 9000", image: branchSample },
      { name: "රක්වාන", location: "අංක 29 රක්වාන ප්‍රධාන වීදිය.", contact: "045 769 9011", image: branchSample },
      { name: "ඇහැලියගොඩ", location: "අංක 36 ප්‍රධාන වීදිය, ඇහැලියගොඩ", contact: "036 769 9011", image: branchSample },
      { name: "දැරණියගල", location: "අංක 78, ප්‍රධාන වීදිය, දැරණියගල.", contact: "036 769 9015", image: branchSample },
      { name: "කුරුවිට", location: "අංක 71/C/1, කොළඹ පාර, කුරුවිට.", contact: "045 769 9015", image: branchSample },
      { name: "කහවත්ත", location: "අංක 31/ඒ, රක්වාන ප්‍රධාන පාර, කහවත්ත.", contact: "045 769 9020", image: branchSample }
    ]
  }	
},

  //Investor Relations Page Components
  bannerIR: {
    src: bannerIR,
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
    label3: "නීති ආකෘතිය",
    field3_1: "- 1970 සැප්තැම්බර් 23 දින පුද්ගලික සීමිත සමාගමක් ලෙස සංස්ථාගත කරන ලදී. (1938 අංක 51 දරන සමාගම් ආඥාපනත යටතේ (Cap 145))",
    field3_2: "- 2006 ඔක්තෝබර් 03 දින 1938 අංක 51 දරන සමාගම් ආඥාපනත (Cap 145) යටතේ නම වෙනස් කරන ලදී.",
    field3_3: "- 2008 ජනවාරි 23 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ නැවත ලියාපදිංචි කිරීම.",
    field3_4: "- 2012 මාර්තු 20 දින 2007 අංක 07 දරන සමාගම් පනත යටතේ පොදු සීමිත සමාගමක් බවට පරිවර්තනය කරන ලදී.",
    field3_5: "- ලියාපදිංචි අංකය (1982 අංක 17 දරන සමාගම් පනත යටතේ): PB 139 PQ.",
    field3_6: "- නව ලියාපදිංචි අංකය (2007 අංක 7 දරන සමාගම් පනත යටතේ): PB 139 PQ.",
    label4: "සමාගම් ලියාපදිංචි අංකය",
    field4: "PB 139 PQ",
    label5: "සමාගමේ නීතිඥයින්",
    field5: "ශිරන්ති ගුණවර්ධන ඇසෝසියේට්ස්, \n අංක 22/1, එලියට් පෙදෙස, කොළඹ 08.",
    label6: "අධ්‍යක්ෂ මණ්ඩලය",
    field6_1: "සභාපති - වී.ඒ ප්‍රසාන්ත්",
    field6_2: "ප්‍රධාන විධායක නිලධාරී - රජිව් ජේම්ස් අබේවික්‍රම ගුණවර්ධන",
    field6_3: "ජෝර්ජ් මුතූට් ඇලෙක්සැන්ඩර්",
    field6_4: "කුට්ටිකට්ටු රාජප්පන් බිජිමොන්",
    field6_5: "කිරන් ගෝපාල ක්‍රිෂ්ණා පිල්ලේ",
    field6_6: "රාජිත ආනන්ද බණ්ඩාර බස්නායක",
    field6_7: "ජේ පී ඩී ආර් ජයසේකර",
    field6_8: "රොෂාන් ද සිල්වා ගුණසේකර",
    field6_9: "ටි සි ඩි කුමාරසිරි",
    label7: "සමාගමේ ලේකම්",
    field7: "චලානි ගොනාඩුවා \nසමාගම් ලේකම් \nඅංක 76, පාර්ක් වීදිය, කොළඹ 02. \nදුරකථන: 011 7699 074 \nඊමේල්: companysecretary@asiaassetfinance.lk",
    label8: "සමාගමේ විගණකවරු",
    field8: "KPMG, 32A, සර් මොහොමඩ් මකන් මරික්කාර් මාවත, කොළඹ 03.",
    label9: "සමාගමේ බැංකුකරුවන්",
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
      intro2: "සවිස්තරාත්මක මූල්‍ය කරුණු ගවේෂණය කරන්න.",
      section3: "KYC ලේඛන",
      intro3: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
      section4: "වෙනත් අත්‍යාවශ්‍ය ප්‍රතිපත්ති",
      intro4: "ලේඛනයක් බැලීමට ඒ මත ක්ලික් කරන්න.",
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
        images: [FD, FD],
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

    //Gold Loan Page Components
    goldLoanPage: {
      title: "රන් ණය",
      description: "අපි ලොව පුරා විශාලතම රන් ණය සේවා සපයන බහුජාතික මූල්‍ය සේවා සපයන්නෙකු වන මුතූට් ෆිනෑන්ස් හි පූර්ණ අනුබද්ධිත ආයතනයක් වෙමු. අපගේ රන් ණය සේවා සමඟින්, ඔබේ රත්‍රන් සඳහා මුදල් කරගැනීමට මිනිත්තු කිහිපයකට වඩා ගත නොවේ. ඔබට අවශ්ය වන්නේ රත්‍රන් පමණි.",
      kfd: "/web/src/media/attachments/customerProtectionFramework/si_key_fact_document_gl.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/web/src/media/uploads/si_charges_and_tariff.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "ස්ථාවර තැන්පතු",
      description: "ඉතිරි කිරීම ආරම්භ කිරීමට කිසිවිටෙක නරක කාලයක් නොවන අතර අප සමඟ ඉතිරි කිරීම ආරම්භ කිරීම කිසිදු අයුරකින් නරක අදහසක් නොවේ. වසර 50කට අධික ඉතිහාසයක් ඇති Asia Asset Finance PLC වන අප ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචි මූල්‍ය සමාගමක් ලෙස ආයෝජන හවුල්කරුවෙකු බවට පත්ව ඇත. තරඟකාරී ස්ථාවර ප්‍රතිලාභ සහතික කිරීම සඳහා නිර්මාණය කර ඇති තැන්පතු අනුපාත ඔබ වෙත පිරිනමමින් අපි ඔබේ වත්කම් හි ආරක්ෂාව සහතික කරමු. ශ්‍රී ලංකාව විවිද ආර්ථික අර්බුද වලට මුහුණ දී ඇති අතර, එසේ තිබියදීත් ඒෂියා  ඇසට් ආයතනය සෑම විටම ඔබට සිය සේවාව ලබා දී ඇත.",
      kfd: "/web/src/media/attachments/customerProtectionFramework/si_key_fact_document_fd.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "පොලී අනුපාත",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      fdRates: "/web/src/media/uploads/si_fd11112024.webp",
      charges_tariff: "",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "ලීසිං ණය",
      description: "ඔබ ඔබේ සිහින වාහනය ධාවනය නොකළ යුතු බව කිසිවෙකුට පැවසීමට ඉඩ නොදෙන්න! ඔබට පැදවීමට අවශ්‍ය ඕනෑම වාහනයක් මිලදී ගැනීමට අවශ්‍ය සහය ඔබේ ළඟම ඇති ඒශියා ඇසට් ශාඛාවක් වෙත ගොස් ලබාගැනීමට දැන් ඔබට අවස්ථාව ඇත. ඔබ අපගෙන් මේ සඳහා අයදුම් කරන විට අපගේ පුහුණු වෘත්තිකයන් ඔබට වෙළඳපොලේ ඇති හොඳම පොලී අනුපාත, අවම ලේඛන, කරදරයකින් තොර, නම්‍යශීලී ආපසු ගෙවීමේ නියමයන් ඇතුලු සේවා රැසක් ඔබගේ නිවසටම පැමිණ ලබාදේ. එබැවින්, අපත් සමඟ පහසුවෙන් ඔබේ සිහින වාහනය ලබාගන්න!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/si_key_fact_document_l.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/web/src/media/uploads/si_charges_and_tariff.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "උකස් ණය",
      description: "ඒෂියා ඇසට් හි අපි ඔබගේ මූල්‍ය ජීවන රටාව ඉහළ නැංවීම සඳහා අප උත්සහා කරන්නෙමු. ඔබට ගැටළු වන සියල්ල අපි දැනටමත් විසඳා ඇත. අපි ඔබට විශිෂ්ට, ඵලදායී සහ කාර්යක්ෂම සේවාවක් ලබාදීමට පොරොන්දු වන්නෙමු. අපි ඔබට දිය හැකි සාධාරණම ගාස්තු ලබාදීමට පොරොන්දු වන්නෙමු. සියල්ලට පසු, මිනිසුන් සවිබල ගැන්වීම සහ ජීවිත පරිවර්තනය කිරීම අපගේ මෙහෙවරයි! ",
      kfd: "/web/src/media/attachments/customerProtectionFramework/si_key_fact_document_m.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      btn_2: "ගාස්තු සහ තීරුබදු පත්‍රය",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: "/web/src/media/uploads/si_charges_and_tariff.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "විදේශ විනිමය",
      description: "ඉතිරිකිරීම් ආරම්භ කිරීමට සෑම විටම සුදුසුම කාලය මෙය වන අතර, ඒෂියා ඇසට් වන අප ඔබේ විශ්වාසවන්ත සහකරු වේ. ශ්‍රී ලංකා මහ බැංකුවේ ලියාපදිංචිය සහිතව වසර 50කට වැඩි පළපුරුද්දක් ඇති අප තරඟකාරී තැන්පතු අනුපාත පිරිනමමින්  ඔබේ වත්කම් හි ආරක්ෂාව අපි සහතික කරමු. ",
      btn_1: "",
      btn_2: "",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: ""
    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      subtitle: "ඕනෑම තැනක සිට ඔබේ වත්කම් වෙත ප්‍රවේශ වන්න",
      description: ["Luckewallet ශ්‍රී ලංකාවේ ප්‍රමුඛතම ගෙවීම් වේදිකාව ලෙස ස්ථිරව තහවුරු වී ඇති අතර, එහි ඉහළ ගනුදෙනු ප්‍රමානය සහ පාරිභෝගික පදනම සඳහා ද ප්‍රචලිත වේ. ලකීවොලට් ඩිජිටල් ඉතුරුම් ගිණුම්, ඩිජිටල් ස්ථාවර තැන්පතු සහ රන් ණය පොලී ගෙවීම් ඇතුළු පුළුල් පරාසයක මූල්‍ය සේවා සපයයි. අමතරව, පරිශීලකයින්ට භෞතික ශාඛාවකට නොපැමිණ පාරිභෝගික සේවා බිල්පත් සහ ක්‍රෙඩිට් කාඩ් ගෙවීම් ද මේ තුලින් සිදුකල හැක. එමෙන්ම මෙය සැලසුම් කර ඇත්තේ පාරිභෝගිකයින් සහ වෙළෙන්දන් බාධාවකින් තොරව සම්බන්ධ කිරීමට, මෙන්ම ආරක්ෂිත සහ ඒකාබද්ධ අත්දැකීමක් ලබා දීම සඳහා ය.",
        "ඉතා තරඟකාරී පොලී අනුපාතය අපගේ ඩිජිටල් ඉතුරුම් ගිණුම් සේවාව සඳහා ඇති විශේෂාංගයක් වන අතර එය වෙළඳපොල තුල කැපී පෙනේ. විද්‍යුත් ඉතුරුම් ගිණුම මඟින් පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් ඩිජිටල් ලෙස කළමනාකරණය කිරීමේ නම්‍යශීලීභාවය සහ පහසුවෙන් ඔවුන්ගේ ඉතුරුම් සඳහා පොලී උපයා ගැනීමේ හැකියාව ලබා දේ. සාමාන්‍යයෙන් සාම්ප්‍රදායික ඉතුරුම් ගිණුම්වලට වඩා වැඩි පොලී ඉපැයීමේ අමතර ප්‍රතිලාභයක් සමඟින් පාරිභෝගිකයින්ට ඔවුන්ගේ ඩිජිටල් ඉතුරුම් ගිණුම්,  යෙදුම හරහා සෘජුවම විවෘත කර කළමනාකරණය කළ හැකිය. මෙම විශේෂාංගය පරිශීලකයින්ට ඔවුන්ගේ අරමුදල් වෙත ප්‍රවේශ වීමේ පහසුව  මෙන්ම ඕනෑම වේලාවක ඔවුන්ගේ ගිණුම් ක්‍රියාකාරකම් නිරීක්ෂණය කිරීමේ පහසුව සමඟින් ඉතුරුම් පහසුවෙන් වර්ධනය කර ගැනීමට ඉඩ සලසයි.",
        "Luckewallet සාමාන්‍ය ගෙවීම් වේදිකාවක් ලෙසට සීමා නොවී, සම්පූර්ණ පද්ධතියක් ලෙස ස්ථාපිත වෙමින්, විශ්වාසදායී වෙළඳ-ලබාගැනීමේ හවුල්කරු ලෙස සේවය කරයි. ඉහළ මට්ටමේ මෘදුකාංග ව්‍යුහ සම්පාදනය සඳහා ජාත්‍යන්තර වශයෙන් ප්‍රසිද්ධ මෙම යෙදුම, මෘදු සහ කාර්යක්ෂම පාරිභෝගික අත්දැකීමක් ලබා දීමට නිරන්තරයෙන් වැඩිදියුණු කරයි. මූලික විශේෂාංග සඳහා පහසුවෙන් පාරිභෝගිකයින් එක් කිරීම, ස්වයං ලියාපදිංචි කිරීම, මෙන්ම ජංගම ඇමතුම් රිචාජ් සහ අනෙකුත් බැංකු ගිණුම් සමඟ සෘජු ගනුදෙනු වැනි විවිධ සේවාවන් ඇතුළත් වේ. ඩිජිටල් ඉතුරුම් ගිණුම සහ එහි තරඟකාරී පොලී අනුපාතය සමඟ, Luckewallet ඩිජිටල් ගනුදෙනු පමණක් නොව, පරිශීලකයින්ට ඔවුන්ගේ මූල්‍ය අනාගතය ගොඩනැගීමට උපකාරී වේ.",
                  ],
      kfd: "/web/src/media/attachments/customerProtectionFramework/si_key_fact_document_s.pdf",
      btn_1: "ප්‍රධාන තොරතුරු ලේඛනය",
      hotline: "ක්ෂණික ඇමතුම්",
      note: "සැ.යු.: මෙම අගයන් කාලානුකූලව වෙනස් විය හැක.",
      charges_tariff: ""
    },
    
    //Contacts Page Components
    contactsPage: {
      title1: "සම්බන්ධ ",
      title2: "වන්න",
      subtitle: " ඔබට අවශ්‍ය සහාය ලබා දීමට අපි සූදානම්. අදම අප හා සම්බන්ධ වන්න!",
      card1title: "ලිපිනය",
      card1Body: "අංක 76, උද්‍යාන වීදිය, කොළඹ 02",
      card2title: "ක්ෂණික ඇමතුම්",
      card2Body: "011 71 70 712",
      card3title: "ෆැක්ස්",
      card3Body: "011 76 99 000",
      card4title: "ඊමේල්",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "පැමිණිලි",
      card5Body: "077 79 99 922",
    }, 
    
    //Personal Profile page
    profileDetails: [
      {
        id: "1",
        name: "වී ඒ ප්‍රශාන්ත්",
        src: mrPrasanth,
        designation: "සභාපති",
        description : ["වි ඒ ප්‍රශාන්ත මහතා මූල්‍ය බැංකු ක්ෂේත්‍රයේ 37 වසරක පළපුරුද්දක් ඇති පාරිභෝගික බැංකු සේවා හා කෝපරේට් බැංකු සේවා, භාණ්ඩාගාර මෙහෙයුම් ක්‍රියාකාරීත්වය සහ තොරතුරු ආරක්ෂාව පිළිබඳව විවිධ අත්දැකීම් ලබා ගත් මූල්‍ය බැංකු සේවා විශේෂඥයෙකි. එවක් ඔහු ඉන්දියානු බැංකුවේ – ඉන්දියාවේ ප්‍රසිද්ධම රාජ්‍ය කටයුතු බැංකුවක් ලෙස සම්මානය ලැබූ – සාමාන්‍යාධිකාරී සහ  තොරතුරු තාක්‍ෂණ ප්‍රධානි වශයෙන් ලෙස සේවය කළේය. මෙම කාලය තුල, ඔහු තොරතුරු තාක්‍ෂණ හා ඩිජිටල් බැංකු සේවා වල ප්‍රධානියා වශයෙන් ද කටයුතු කලේය. වි ඒ ප්‍රශාන්ත මහතා ඉන්දියානු බැංකුවේ ප්‍රධාන මූල්‍ය නිලධාරී ලෙස ද වරක පත් විය. එමෙන්ම, ඔහු බැංකුවේ ප්‍රමුඛ කලාප දෙකක කලාප කළමනාකරු ලෙස ද කටයුතු කරන ලදී.",
          "ඔහුට මූල්‍ය වෙළඳපොළවල දශක දෙකකට වැඩි පළපුරුද්දක් ඇති අතර – 1994-1998 කාලය තුළ මුම්බායි හි විදේශ විනිමය ගනුදෙනු කිරීම් අංශයේ ප්‍රධානියා ලෙසද, 2001-2005 කාලය තුල සිංගප්පූරු මූල්‍ය අංශයේ ප්‍රධානියා වශයෙන් ද , 2009-2011 කාලය තුල මූල්‍ය අංශයේ මෙහෙයුම් කාර්යාල ප්‍රධානි වශයෙන් ද, 2009-2011 කාලයේ ඉන්දියන් බැංකුවේ මූල්‍ය කළමණාකරණ සේවා (WMS) පරිපාලකයෙකු වශයෙන් ද සේවය කලේය.",
          "වි ඒ ප්‍රශාන්ත මහතා දැනට හයිද්‍රාබාද් හි පිහිටි බැංකු තාක්‍ෂණ පර්යේෂණ සහ සංවර්ධන ආයතනයේ (IDRBT) ජ්‍යේෂ්ඨ ක්ෂේත්‍ර විශේෂඥයෙකු ලෙස සේවය කරයි. 2020 ජූනි මාසයේ දී ඔහු ඒෂියා ඇසට් ෆිනෑන්ස් හි සභාපති ලෙස පත් විය. ",
        ]
      },
      {
        id: "2",
        name: "ජෝර්ජ් මුත්තූට් ඇලෙක්සැන්ඩර්",
        src: mrAlexandra,
        designation: "විධායක නොවන අධ්‍යක්ෂ",
        description : ["ජෝර්ජ් ඇලෙක්සැන්ඩර් මහතා උතුරු කැරොලිනා විශ්ව විද්‍යාලයේ කෙනාන් සහ ෆ්ලැග්ලර් ව්‍යාපාර පාසලෙන් ව්‍යාපාර කළමනාකරණ ශාස්ත්‍රපති උපාධිය (MBA) ද, කේරළ විශ්ව විද්‍යාලයේ TKM ඉංජිනේරු පීඨයෙන් යාන්ත්‍රික ඉංජිනේරු ශාස්ත්‍රවේදී උපාධිය ද ලබා ගත්තේය. දැනට, ඔහු මුතුට් ෆිනෑන්ස් ආයතනයේ ජ්‍යේෂ්ඨ උපසභාපති ලෙස කර්ණාටක, ගෝවා සහ දකුණු  තෙලගනා යන ප්‍රදේශ වල මෙහෙයුම් භාරව සිටී. එමෙන්ම, ඔහු ඇමරිකාවේ මුතුට් සමූහයේ ගෝලීය මෙහෙයුම් ද භාරව සිටී.",
                      "ඔහු දැනට මුතුට් ඉන්ෂුවරන්ස් බ්‍රෝකර්ස් , බෙල්ස්ටාර් ෆිනෑන්ස් සහ ආයෝජන ඇතුලු සමාගම් සමූහයේ සාමාජිකයෙකු ලෙස කටයුතු කරයි. මුතුට් ෆිනෑන්ස් යනු රන් ණය (NBFC) සමාගම වන අතර, එය මුතුට් සමූහයේ ප්‍රධානතම සමාගමයි. 2011 දී එය ලියාපදිංචි වූ අතර , BSE සහ NSE වෙළඳපොලවල ද විකුනුම් සිදුකෙරේ. එය රටේ විශාලතම රන් ණය සමාගම ද වේ.",
                      "මුතුට් ෆිනෑන්ස් හැර, මුතුට් සමූහයේ තවත් අංශ 16ක් පවතී, කිහිපයක් නම් සෞඛ්‍ය සේවා, කොටස් සහ භාණ්ඩ වෙළඳාම, රක්ෂණ බ්‍රෝකර් ගිණුම් ආදී වෙයි. මෙම සමූහය පරම්පරා සතරක් පරණ වන අතර, ජෝර්ජ් ඇලෙක්සැන්ඩර් වර්තමාන සිව්වන පරම්පරාව නියෝජනය කරයි. ඔහු තම පවුල් ව්‍යාපාරය සමඟ සම්බන්ධ වීමට පෙර ඉන්දියාවේ ING සහ කොටක් මහින්ද්‍රා බැංකුවල කටයුතු කර ඇත.",
                      "ඔහු 2015 දී ඉන්දියානු කර්මාන්ත සම්මේලනයේ සභාපතිව සිටි අතර දැනට බැංගලෝර් ව්‍යවසායකයන්ගේ සංවිධානයේ මූල්‍ය සභාපතිවරයා ලෙස කටයුතු කරයි. ඔහු 2013 දී සිඩ්නි සහ මෙල්බර්න් හි AIYD (ඕස්ට්‍රේලියාවේ ඉන්දියානු තරුණ සමුළුව) සඳහා ඉන්දියාව නියෝජනය කිරීමට තෝරාගත් ඉන්දියානුවන් දස දෙනාගෙන් කෙනෙකි.",
        ]
      },
      {
        id: "3",
        name: "කුට්ටිකට්ටු රාජප්පන් බිජිමන්",
        src: mrBijimon,
        designation: "විධායක නොවන අධ්‍යක්ෂ / ප්‍රධාන සාමාන්‍යාධිකාරී (මුතූට් ෆිනෑන්ස් ලිමිටඩ්)",
        description : ["කේ ආර් බිජිමෝන් මහතා තම වෘත්තිය ජීවිතය 1996 දී මූල්‍ය කළමණාකරු ලෙස  මුතුට් බැංකුව (Muthoot Bankers) සමග  ආරම්භ කළේය. ඔහුගේ 21 වසරක සේවය තුළ, මුතුට් බැංකුව වර්තමාන මුතුට් ෆිනෑන්ස් ලිමිටඩ් බවට පත්කිරීමට නායකත්වය දුන් අතර, කාලයත් සමඟ ඔහු සමාගමේ ප්‍රධාන සාමාන්‍යාධිකාරී ලෙස තනතුරින් උසස්වීම් ලබා ඇත. ඔහුගේ නායකත්වය මඟින්, සමාගම විශාල ලෙස වර්ධනය වී ඇති අතර, අද වන විට  මුතුට් ෆිනෑන්ස් සමාගම රටේ සහ විශාල වශයෙන් ලෝකයේ  රන් ණය ලබා දෙන සමාගමක් බවට පත්වී ඇත. ප්‍රධාන සාමාන්‍යාධිකාරී ලෙස, ඔහු විවිධ අංශ සහ සමස්තයක් ලෙස ව්‍යාපාරය ජාත්‍යන්තරව ව්‍යාප්ත කිරීම සඳහා ද දායක වේ. ",
          "මුතුට් සමූහය අද වනවිට ඇමරිකාව, එක්සත් රාජධානිය, එක්සත් අරාබි එමීර් රාජ්‍ය, සිංගප්පූරුව සහ ශ්‍රී ලංකාව වැනි රටවල සාර්ථක ව්‍යාපාරයක් ජාත්‍යන්තර වශයෙන් ස්තාපිත වී ඇති අතර අනාගතයේදී ඉතාලිය තුලත්  එහි මෙහෙයුම් ආරම්භ කිරීමට සැලසුම් කර ඇත.  බිජිමෝන් මහතා මුතුට් ව්‍යාපාරයේ ජාත්‍යන්තර මෙහෙයුම් සඳහා ප්‍රධාන මෙහෙයුම් නිලධාරී (COO) ලෙසත් කටයුතු කරයි. වර්තමානයේ ඔහු මුතුට් ෆොරෙක්ස් ලිමිටඩ්, මුතුට් සෙකියුරිටීස් ලිමිටඩ්, මුතුට් කොමොඩිටීස් ලිමිටඩ්, මුතුට් හෝම්ෆින් (ඉන්දීය) ලිමිටඩ්, මුතුට් රෝයලෙක්ස් සේවා පෞද්ගලික සමාගම, බෙල්ස්ටාර් ආයෝජන හා ෆිනෑන්ස් පෞද්ගලික සමාගම (මුතුට් ෆිනෑන්ස් හි උප සමාගම) සහ ඒෂියා  ඇසට් ෆිනෑන්ස් PLC (ශ්‍රී ලංකාව) වැනි සමාගම්වල අධ්‍යක්ෂක වශයෙන්ද  කටයුතු කරයි.",
          "බිජිමෝන් මහතා නීතිය පිළිබඳ ශාස්ත්‍රවේදී උපාධිය (LLB), විද්‍යාව පිළිබඳ ශාස්ත්‍රවේදී උපාධිය (BSc) සහ ව්‍යාපාර කළමණාකරණ ශාස්ත්‍රපති  උපාධිය (MBA) හදාරා ඇත. ඔහු ඉන්දියාවේ වරලත් ගණකාධිකාරීවරුන්ගේ ආයතනයේ සාමාජිකයෙකු ලෙසද ඉන්දියානු බැංකුකරුවන්ගේ ආයතනයේ (CAIIB) සහතික ලත් සහකරුවෙක් ලෙසද ශ්‍රී ලංකා ආයතනය තුල සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ (FCMA) සමාජිකයෙකු ලෙසද සිටී.",
        ]
      },
      {
        id: "4",
        name: "කිරන් ගෝපාල ක්‍රිෂ්ණා පිල්ලේ",
        src: mrPillai,
        designation: "විධායක නොවන අධ්‍යක්ෂ",
        description : ["කිරන් ජී මහතා වර්තමානය වනවිට මුතුට් ෆිනෑන්ස් ලිමිටඩ් හී අභ්‍යන්තර විගණන සහ පරීක්ෂණ අංශයේ ප්‍රධානී ලෙස කටයුතු කරයි. ඔහු කේරළ විශ්වවිද්‍යාලයෙන් ගණිතය පිළිබඳ ශාස්ත්‍රවේදී විද්‍යා උපාධිය (BSc) ලබා ගෙන ඇත. ඔහු ඉන්දියානු ලේඛකාධිකාරී සංගමයේ සාමාජිකයෙකු වේ. ",
          "ඔහු මෙහෙයුම්, මූල්‍ය සහ නියාමන පිලිබද13 වසරක පළපුරුද්දක් හිමි අයෙකි එමෙන්ම අවදානම් කළමනාකරණ  ක්‍රම පිළිබඳ විශේෂඥතාව ඇතුළුව, විගණන කමිටුවට අභ්‍යන්තර පාලනය පිළිබඳ යෝජනාත්මක වාර්තාකරණය සම්බන්දව මනා පළපුරුද්දක් ඔහුට ඇත.",
          "තවද, ඔහුට අවදානම්, නීති, නිරීක්ෂණ සහ පරීක්ෂණ යන අංශ සමග ද එක්ව කටයුතු කිරීමේ පළපුරුද්දක් ඇත. ඔහු සමාගමේ විවිධ අංශවල ක්‍රියාකාරකම් සැලසුම් කිරීම, ක්‍රියාත්මක කිරීම සහ පරීක්ෂා කිරීම යනාදී කටයුතු ද කිරීමට තම විශේෂඥතාවය සපයයි.",
        ]
      },
      {
        id: "5",
        name: "රාජිත ආනන්ද බණ්ඩාර බස්නායක",
        src: mrRajitha,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["බස්නායක මහතා ICT සහ ව්‍යාපාර කළමණාකරණයේ 30 වසරකට අධික පළපුරුද්දක් ඇති ස්වාධීන කළමණාකරණ සහ ICT උපදේශකයකු වන අතර  මූල්‍ය සේවා, විද්‍යුත් විනෝදාස්වාද, FMCG, විකුණුම්, ආහාර පාන, හෝටල් ක්ෂේත්‍රය සහ තොරතුරු තාක්ෂණය යනා දී ක්ශේත්‍රයන් තුල  විශාල පරිමාණ ICT සහ ව්‍යාපාර මෙහෙයුම් පරිවර්තන ව්‍යාපෘති සදහා නායකත්වය ලබා දී ඇත. ඔහු අර්න්ස්ට් සහ යන්ග්, ශ්‍රී ලංකා හි උපදේශන සේවා අධ්‍යක්ෂවරයා ලෙස පෞද්ගලික සහ රාජ්‍ය අංශයේ ව්‍යාපෘති (ADB සහ UNIDO ඇතුලුව) සදහා ICT සහ ව්‍යාපාර උපදේශන ලබා දී ඇත.",
          "ඔහු වර්තමානයේ ඒශියා ඇස්ට් ෆිනෑන්ස් PLC හි ජ්‍යෙෂ්ඨ ස්වාධීන විධායක නොවන අධ්‍යක්ෂ,  ඉවෝක් අන්තර්ජාතික (පෞද්ගලික) සමාගමෙහි (Evoke International (Pvt) Ltd) සභාපති ,  සහ Latex Green (පෞද්ගලික) සමාගමේ ජ්‍යෙෂ්ඨ කළමණාකරණ උපදේශකවරයා ලෙස කටයුතු කරයි. ",
          "ඔහුගේ ව්‍යාපෘති පෝට්ෆෝලියෝවට Ernst & Young Sri Lanka හි බාහිර උපදේශකයෙකු වශයෙන් සිදුකල තොරතුරු තාක්ෂණ උපාය මාර්ග සහ ව්‍යාපාර ක්‍රියාවලි ප්‍රති-ඉංජිනේරු ව්‍යාපෘති ඇතුළත් වේ. මීට පෙර, ඔහු Asia Capital Group, The Lion Brewery Ceylon Ltd, සහ Richard Pieris Distributors Ltd හි ජ්‍යෙෂ්ඨ ICT නායකත්ව තනතුරු දැරීය. බස්නායක මහතා Keele University, UK හි ශාස්ත්‍රපති උපාධියක් (විශිෂ්ට සාමාර්ථ) සහා University of Colombo හි ව්‍යාපාර කළමණාකරණ විධායක  ඩිප්ලෝමාවක් ලබා ඇත. ඔහු එක්සත් රාජධානියේ Keele  විශ්ව විද්‍යාලය සමඟ එක්ව Informatics Institute of Technology විසින් පවත්වනු ලබන තොරතුරු තාක්ෂණ අධ්‍යයන වැඩසටහන සඳහා බාහිර කථිකාචාර්යවරයෙකු ද විය.",
        ]
      },
      {
        id: "6",
        name: "ජේ පී ඩී ආර් ජයසේකර",
        src: mrJayasekara,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["දනසිරි රූපකුමාර ජයසේකර මහතා ආර්ථික විද්‍යාව පිළිබඳ දෙවන පන්තියේ ඉහළ සාමාර්ථයක් සහිත විශේෂ උපාධියක් (BA Special) ඇති අයෙකි. ඔහුට බදු, තොරතුරු තාක්ෂණය , බැංකු සහ මූල්‍ය ක්ෂේත්‍රයන්හි වසර 33 ක අඛණ්ඩ පළපුරුද්දක් ඇත. 1984 වසරේ අභ්‍යන්තර ආදායම් දෙපාර්තමේන්තුවේ තක්සේරුකරුවෙකු ලෙස කාර්යභාරය ඇරඹූ ඔහු 1994 වසරේ ජ්‍යෙෂ්ඨ තක්සේරු තනතුරට උසස් කරන ලදී. 2005 වසරේදී නියෝජ්‍ය කොමසාරිස් තනතුරට උසස් කරන ලද ඔහු, පසුව කොමසාරිස් සහ ජ්‍යෙෂ්ඨ කොමසාරිස් තනතුරු ද දැරීය.",
          "2015 ජූලි මාසයෙන් පසු, ආදායම් පරිපාලන කළමණාකරණ තොරතුරු පද්ධතිය (RAMIS) නම් තොරතුරු තාක්ෂණ ව්‍යාපෘතියේ ජ්‍යෙෂ්ඨ අතිරේක ව්‍යාපෘති අධ්‍යක්ෂවරයා ලෙස කාර්යභාරය ඉටු කළේය. මෙම ව්‍යාපෘතියේ අරමුණ නම් අභ්‍යන්තර ආදායම් දෙපාර්තමේන්තුවේ සියළු IRD  බදු ක්‍රියාදාමයන් ස්වයංක්‍රීය කිරීමය. විශ්‍රාම යන විට ඔහු තොරතුරු තාක්ෂණ නියෝජ්‍ය කොමසාරිස් ජනරාල් ලෙස කටයුතු කළේය.",
          "ජයසේකර මහතා IRD හි සේවා කාලය තුල විවිධ පුහුණු වැඩසටහන් සහ ජාත්‍යන්තර සම්මන්තරණවලට සහභාගීවීමෙන් විදෙස් පළපුරුද්ද ලබා ගෙන ඇත. ඔහුට බදු ක්ෂේත්‍රයේ විවිධ කරුණු පිළිබඳ ඔස්ට්‍රියාව, ඉන්දියාව සහ එක්සත් රාජධානියේ පුහුණු වැඩසටහන් හදාරන්නට අවස්ථාව හිමිවිය. එමෙන්ම, සීශෙල්ස් සහ සවුදි අරාබියාවේ ප්‍රායෝගික වැඩසටහන් හරහා ද්විත්ව බදුකරණය ගිවිසුම් පිළිබඳ වටිනා අත්දැකීම් ලබා ගෙන ඇත.",
          "ඔහු ප්‍රංශයේ පැවති ‘OECD Global Forum on VAT’ සහ ජපානයේ ටෝකියෝ නගරයේ පැවති ‘Fourth IMF – Japan High Level Tax Conference for Asian Countries’ යන සම්මන්ත්‍රණ සදහා නියෝජිතයකු ලෙස ද සහභාගී විය. තවද, චීනයේ පැවති Blue Economy සහ Maritime Silk Road පිළිබඳ අමාත්‍යාංශීය කටයුතු මණ්ඩලයේ වැඩමුළුවකට සහභාගී වී ඇත. RAMIS ව්‍යාපෘතියේ ‘Due Diligence Reports’ සකස් කිරීමට අදාළ සිංගප්පූරුව සහ ඇන්ගෝලා යන රටවල් වෙත ගමන් කල ඇගයීම් කමිටුවේ සාමාජිකයෙකු ලෙස ද ඔහු කටයුතු කළේය.",
          "ජයසේකර මහතා APFA (ශ්‍රී ලංකා පොදු මූල්‍ය ගිණුම්කරුන්ගේ සංගමය) හි සාමාජිකයකු වන අතර, චීන-ශ්‍රී ලංකා සංගමයේ සක්‍රීය සාමාජිකයෙකු ලෙසද කටයුතු කරයි. එමෙන්ම, ඔහු සමාජ සහ සංගම් කිහිපයක තනතුරු සහ සාමාජිකත්වය දරණ  ක්‍රියාකාරී සමාජ සේවකයෙකි.",

        ]
      },
      {
        id: "7",
        name: "ටී.සී.ඩී.කුමාරසිරි",
        src: mrKumarasiri,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["කුමාරසිරි මහතා ජ්‍යෙෂ්ඨ වරලත් ගණකාධිකාරීවරයෙකු, කළමනාකරණ උපදේශකයෙකු, ප්‍රධාන දේශකයෙකු, ව්‍යාපාර උපදේශකයෙකු සහ ආයතනික පුහුණුකරුවෙකු ද වන අතර ප්‍රමුඛ පෙළේ දේශීය ආයතනවල සහ බහුජාතික සමාගම්වල ජ්‍යෙෂ්ඨ නායක තනතුරු දරා ඇත. ",
          "ඔහු ආසියා පැසිෆික් මුදල් සහ ව්‍යවසායකත්ව සංවර්ධන ආයතනයේ නිර්මාතෘ/සභාපති, මානව ප්රාග්ධන සහකාර ආයතනයෙහි නිර්මාතෘ/ප්‍රධාන විධායක නිලධාරී, සහ H C P Consulting (Pvt.) Ltd හි සභාපති/ප්‍රධාන උපදේශක වේ. ඔහු සණස සංවර්ධන බැංකුවේ ස්වාධීන විධායක නොවන අධ්‍යක්ෂවරයෙකු ලෙස සහ පෞද්ගලික/ රාජ්‍ය අංශයන්හි ප්‍රමුඛ පෙළේ ආයතන කිහිපයක උපදේශකයෙකු ලෙස සේවය කරයි. ඔහු සමස්ත දකුණු ආසියාවේ එකම නියෝජිතයා ලෙස ගිණුම්කරණ අධ්‍යාපනය පිළිබඳ ජාත්‍යන්තර මණ්ඩලයේ (IPAE) ද සේවය කරයි. ඔහු අඛණ්ඩව වාර දෙකක දී CA ශ්‍රී ලංකා හි පාලක මණ්ඩලයේ සේවය කර ඇති අතර දැනට ACCA ශ්‍රී ලංකා සාමාජික ජාලයේ උප සභාපති ලෙස කටයුතු කරයි.",
          "කුමාරසිරි මහතාට සම්මාන රැසක් මෙන්ම වෘත්තීය සහ අධ්‍යයන සුදුසුකම් රාශියක් ද ඇත. ඔහු ශ්‍රී ලංකා වරලත් ගණකාධිකාරීවරුන්ගේ ආයතනයේ, එක්සත් රාජධානියේ වරලත් සහතිකලත් ගණකාධිකාරීවරුන්ගේ සංගමයේ, ශ්‍රී ලංකා ගිණුම්කරණ කාර්මිකයන්ගේ සංගමයේ සහ ශ්‍රී ලංකා සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ ආයතනයේ සාමාජිකයෙකි. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් පළමු පන්තියේ ගෞරව සහිතව B.Sc ගණකාධිකාරී (විශේෂ) උපාධියක් ලබා ඇති අතර කොළඹ විශ්වවිද්‍යාලයෙන් මූල්‍ය පිළිබඳ ශාස්ත්‍රපති උපාධියක් ද ලබා ඇත. ප්‍රමුඛ පෙළේ ආයතනික පුහුණුකරුවෙකු ලෙස ඔහු ශ්‍රී ලංකාවේ සහ එතෙර සිටින විශාල පුද්ගලයින් ප්‍රමාණයක් දිරිගන්වා ඇත. ව්‍යවසායකයින් අතර ප්‍රමුඛ චරිතයක් ලෙස, විවිධ පොදු සංසද, ජාතික රූපවාහිනී/ගුවන්විදුලි නාලිකා සහ ප්‍රමුඛ YouTube නාලිකා හරහා ඔහු  නිරන්තරයෙන් වැඩසටහන් වලට සහභාගී වී ඇත. ගණකාධිකාරී වෘත්තිය සහ එහි වටිනාකම් ප්‍රවර්ධනය කිරීම සඳහා ඔහුගේ සුවිශේෂී කැපවීම වෙනුවෙන් ඔහුට 2022 වසරේ ACCA ජාතික උපදේශක සම්මානය ද පිරිනමා ඇත."
        ]
      },
      {
        id: "8",
        name: "රොෂාන් ද සිල්වා ගුණසේකර",
        src: mrRoshan,
        designation: "විධායක අධ්යක්ෂක / ප්‍රධාන මෙහෙයුම් නිලධාරි",
        description : ["ගුණසේකර මහතා 1994 දී කොමර්ෂල් ලීසිං සමාගමේ ණය නිලධාරියෙකු ලෙස සිය වෘත්තීය ජීවිතය ආරම්භ කලේය. එමෙන්ම මූල්‍ය අංශයේ වසර 25කට වැඩි සේවා පළපුරුද්දක් ඔහුට ඇත. 2010 අප්‍රේල් මාසයේදී ඔහු ඒශියා ඇසට් ආයතනය සමග සාමාන්‍යාධිකාරීවරයෙකු ලෙස සම්බන්ධ වූ අතර මේ වන විට ප්‍රධාන මෙහෙයුම් නිලධාරි තනතුර දරමින්, ශාඛා ජාලය මෙන්ම අලෙවිකරණය, ණය, පරිපාලනය සහ ප්‍රතිසාධන වලින් සමන්විත ශාඛාවල සමස්ත ක්‍රියාකාරිත්වය පාලනය කරනු ලබයි.",
        "නිෂ්පාදන සහ ව්‍යාපාර සංවර්ධනය, උපායමාර්ගික සැලසුම් සහ ක්‍රියාත්මක කිරීම් ද ඔහුගේ වගකීම් අතර වේ. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයෙන් ශාස්ත්‍රවේදී  උපාධිය ද, කොළඹ විශ්ව විද්‍යාලයෙන් ශාස්ත්‍රපති  උපාධිය ද ලබාගෙන ඇත. CIMA හි අර්ධ සුදුසුකම් ලබා ඇති ඔහු ජපානයේ විදේශ තාක්ෂණික ශිෂ්‍යත්ව සංගමයේ (AOTS) ද සාමාජිකයෙකු වේ. ගුණසේකර මහතා ශ්‍රී ලංකා කොළඹ විශ්ව විද්‍යාලයේ මුල්‍ය සේවා අලෙවිකරණ කථිකාචාර්යවරයෙකු ලෙස ද කටයුතු කර ඇත."]
      },
      {
        id: "9",
        name: "රජීව් ජේම්ස් අබේවික්‍රම ගුණවර්ධන",
        src: mrRajiv,
        designation: "අධ්‍යක්ෂ/ප්‍රධාන විධායක නිලධාරී",
        description : ["ආසියා ඇසට් ෆිනෑන්ස් පීඑල්සී හි ප්‍රධාන විධායක නිලධාරී / අධ්‍යක්ෂ රජීව් ගුණවර්ධන මහතා 2009 දෙසැම්බර් මාසයේදී මණ්ඩලයට පත් කරන ලදී. ඔහුගේ විශ්ලේෂණාත්මක මනස සහ ආකර්ෂණීය පැවැත්ම සඳහා.",
                      "ඒෂියා ඇසට් ෆිනෑන්ස් හි පාලනය භාර ගැනීමට පෙර ඔහු ඒෂියා කැපිටල් පීඑල්සී හි ජ්යෙෂ්ඨ ආයෝඡන විශ්ලේෂක තනතුරේ වැඩ කර ඇති අතර වරෙක ඕස්ට්‍රේලියානු ව්‍යාපාර හා තාක්‍ෂණ විද්‍යාලයේ ගිණුම්කරණය පිළිබඳ දේශන පැවැත්වීය.",
                      "ඔහු එක්සත් රාජධානියේ ව්‍යාපාර හා තොරතුරු පද්ධති පිළිබඳ විද්‍යා උපාධියක් ලබා ඇති අතර ඕස්ට්‍රේලියාවේ මොනෑෂ් විශ්ව විද්‍යාලයෙන් වෘත්තීය ගිණුම්කරණය පිළිබඳ ශාස්ත්‍රපති උපාධියක් ලබා ඇත.",
        ]
      },
      {
        id: "10",
        name: "රොෂාන් ද සිල්වා ගුණසේකර",
        src: mrRoshan,
        designation: "විධායක අධ්යක්ෂක / ප්‍රධාන මෙහෙයුම් නිලධාරි",
        description : ["ගුණසේකර මහතා 1994 දී කොමර්ෂල් ලීසිං සමාගමේ ණය නිලධාරියෙකු ලෙස සිය වෘත්තීය ජීවිතය ආරම්භ කලේය. එමෙන්ම මූල්‍ය අංශයේ වසර 25කට වැඩි සේවා පළපුරුද්දක් ඔහුට ඇත. 2010 අප්‍රේල් මාසයේදී ඔහු ඒශියා ඇසට් ආයතනය සමග සාමාන්‍යාධිකාරීවරයෙකු ලෙස සම්බන්ධ වූ අතර මේ වන විට ප්‍රධාන මෙහෙයුම් නිලධාරි තනතුර දරමින්, ශාඛා ජාලය මෙන්ම අලෙවිකරණය, ණය, පරිපාලනය සහ ප්‍රතිසාධන වලින් සමන්විත ශාඛාවල සමස්ත ක්‍රියාකාරිත්වය පාලනය කරනු ලබයි.",
        "නිෂ්පාදන සහ ව්‍යාපාර සංවර්ධනය, උපායමාර්ගික සැලසුම් සහ ක්‍රියාත්මක කිරීම් ද ඔහුගේ වගකීම් අතර වේ. ඔහු ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයෙන් ශාස්ත්‍රවේදී  උපාධිය ද, කොළඹ විශ්ව විද්‍යාලයෙන් ශාස්ත්‍රපති  උපාධිය ද ලබාගෙන ඇත. CIMA හි අර්ධ සුදුසුකම් ලබා ඇති ඔහු ජපානයේ විදේශ තාක්ෂණික ශිෂ්‍යත්ව සංගමයේ (AOTS) ද සාමාජිකයෙකු වේ. ගුණසේකර මහතා ශ්‍රී ලංකා කොළඹ විශ්ව විද්‍යාලයේ මුල්‍ය සේවා අලෙවිකරණ කථිකාචාර්යවරයෙකු ලෙස ද කටයුතු කර ඇත."]
      },
      {
        id: "11",
        name: "එම් තිරුනීලකන්දන්",
        src: mrThiru,
        designation: "සාමාන්‍යාධිකාරී",
        description : ["දැනට, ඔහු ණය දෙපාර්තමේන්තුව, ශාඛා සහ ස්ථිර තැන්පතු මෙහෙයුම් යනා දී අංශ  පාලනය කරයි. තිරුනීලකාන්තන් මහතා පෞද්ගලික බැංකුවක සේවය කරමින් සිටිය දී ලන්ඩනයේ බැංකුකරුවන්ගේ ආයතනයේ සහ ලන්ඩනයේ පිරිවැය සහ කළමනාකරණ ගණකාධිකාරී ආයතනයේ අධ්‍යාපනය හැදෑරීය."]
      },
      {
        id: "12",
        name: "මහේෂ් කුමාර",
        src: mrMahesh,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - ණය",
        description : ["මහේෂ් කුමාර මහතා කොළඹ විශ්වවිද්‍යාලයෙන් ගිණුම්කරණ ශාස්ත්‍රවේදී උපාධියක් ලබා ඇත. 1999 වසරේ සහකාර ගණකාධිකාරීවරයෙකු ලෙස ඔහු ක්ෂේත්‍රයට පිවිස ඇත. 2009 වසරේ ඒශියා ඇසට් ආයතනය හා සම්බන්ධ වීමට පෙර ඔහු විවිධ මූල්‍ය සමාගම්වල ජ්‍යෙෂ්ඨ කළමනාකාරීත්වයේ සේවය කිරීමෙන් ලබාගත් පුළුල් ක්ශේත්‍ර අත්දැකීම් සමුදායකින් සන්නද්ධ වේ. මේ වන විට මෙම කුමාර් මහතා සහකාර සාමාන්‍යාධිකාරී - ණය  තනතුර දරයි."]
      },
      {
        id: "13",
        name: "ජයන්ත වීරපුල්ලිගේ",
        src: mrJayantha,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - අලෙවිකරණය",
        description : ["දැනට, වීරපුල්ලිගේ මහතා ඒෂියා ඇසට් ෆිනෑන්ස් හි සහකාර සාමාන්‍යාධිකාරී - අලෙවිකරණය ( ජ්‍යෙෂ්ඨ කළමනාකරු- ණය දීම්  ලෙස සේවය කර වසර 3 කට පසු) ලෙස සේවය කරයි. ඔහු ව්‍යාපාර පරිපාලනය පිළිබඳ ශාස්ත්‍රවේදී  (විශේෂ) උපාධියක් සහ කොළඹ විශ්වවිද්‍යාලයෙන් ශාස්ත්‍රපති උපාධියක් ලබා ඇත. ඔහුට අලෙවිකරණය, ණය සහ ගිණුම් පිළිබඳ වසර 17කට වැඩි සේවා පළපුරුද්දක් ඇති අතර ඉන් 14ක් බැංකු හා මූල්‍ය අංශයට අදාලව වේ."]
      },
      {
        id: "14",
        name: "සමිර වේවැල්දෙණිය",
        src: mrSameera,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - ස්ථාවර තැන්පතු",
        description : ["සමිර වේවැල්දෙණිය මහතා 2006 ජුනි මාසයේදී මීගමුව ශාඛාවේ කළමනාකරු ලෙස Asia Asset වෙත සම්බන්ධ විය. අද වන විට ඔහු සහකාර සාමාන්‍යාධිකාරී - ස්ථාවර තැන්පතු වශයෙන් කටයුතු කරන අතරම , සමාගමේ අලෙවිකරණ කටයුතු සහ ශාඛා සංවර්ධනය සඳහා ද සිය දායකත්වය ලබා දෙයි. වේවැල්දෙණිය මහතා ගේ උසස් අලෙවිකරණ කුසලතා හේතුවෙන් ඔහු සිය ක්ශේත්‍රය පුරා කීර්තියක් අත්කර ගෙන ඇත.",
          "සෙලින්කෝ සංවර්ධන බැංකුවේ සේවය කරන විට එහි බොහෝ අලෙවිකරණ සම්මානයන් නිර්මාණය කර ඇත්තේ සමිර වේවැල්දෙණිය මහතා විසිනි. වේවැල්දෙණිය මහතා එක්සත් රාජධානියේ නව බකින්හැම්ශයර් විශ්වවිද්‍යාලයෙන් ශාස්ත්‍රපති  උපාධිය ලබා ඇති අතර ආසියානු අලෙවිකරණ සම්මේලනය (AMF) විසින් ආසියානු සහතික ලත් වෘත්තීය අලෙවිකාර ආයතනයෙන් (CPM - Asia)  සිය පශ්චාත් උපාධිය ලබාගෙන ඇත.",
          "ඔහු ඔස්ට්‍රේලියාවේ සහතික කළ කළමනාකරණ ගණකාධිකාරීවරුන්ගේ (AMA-Australia) සහකාර සාමාජිකයෙක් මෙන්ම ශ්‍රී ලංකා අලෙවිකරණ ආයතනයේ (SLIM) සහතික ලත් සාමාජිකයෙකු ද වේ. ඔහු ශ්‍රී ලංකා අලෙවිකරණ ආයතනයෙන් අලෙවිකරණය පිළිබඳ මූලික සහතිකය හිමිකරගෙන ඇති අතර වරලත් අලෙවිකරණ ආයතනයේ (CIM-UK) අර්ධ වශයෙන් සුදුසුකම් ද ලබාගෙන ඇත."
        ]
      },
      {
        id: "15",
        name: "ගීතිකා ඇල්වලගේ",
        src: msGeethika,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - මූල්‍ය",
        description : ["ගීතිකා එල්වලගේ මහත්මිය 2017 මාර්තු මාසයේ දී සමාගමේ සහකාර සාමාන්‍යාධිකාරී- මූල්‍ය ලෙස පත් කරන ලදී. ප්‍රමුඛ පෙළේ මූල්‍ය ආයතන කිහිපයක සේවය කර ඇති ඇය මූල්‍ය සේවා අංශයේ වසර 8 කට වැඩි කාලයක් විවිධ වූ අත්දැකීම් ලබා ඇත. ඇය ශ්‍රී ලංකා වරලත් ගණකාධිකාරී ආයතනයේ ද සාමාජික සාමාජිකාවකි.",
          "මීට අමතරව, ඇය BDO හවුල්කරුවන් සමග සේවය කර විගණන අංශයේ වසර තුනක පළපුරුද්දක් ඇත. තවද, ඇය ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් ව්‍යාපාර පරිපාලනය පිළිබඳ ශාස්ත්‍රපති උපාධියක් ද ලබා ඇත."
        ]
      },
      {
        id: "16",
        name: "සජිත් අතපත්තු",
        src: mrSajith,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - අවදානම් කළමනාකරණ",
        description : [" සජිත් අතපත්තු මහතා ඒෂියා ඇසට් ෆිනෑන්ස් හා සම්බන්ධ වූයේ 2010 අප්‍රේල් මාසයේදීය.  ඒෂියා ඇසට් ෆිනෑන්ස් හි අතපත්තු මහතා ණය, ප්‍රතිසාධන, පරිපාලන සහ මෙහෙයුම් යන දෙපාර්තමේන්තු සමඟ කටයුතු කර ඇත.",
          "ඒෂියා ඇසට් ෆිනෑන්ස් හි සේවය කිරීමට පෙර, ඔහු එක්සත් රාජධානියේ මූල්‍ය සේවා අංශයේ සේවය කර ඇති අතර එහිදී ඔහු බැංකු ක්ශේත්‍රීය නොවන ආයතනවල මූල්‍ය සේවා වැඩිදියුණු කිරීමේ ව්‍යාපෘතිවල නිරත විය. ඔහු එක්සත් රාජධානියේ කීල් විශ්ව විද්‍යාලයෙන් සිය ශාස්ත්‍රවේදී  උපාධිය ලබාගෙන ඇත."
        ]
      },
      {
        id: "17",
        name: "ඉන්දිත ජයතිලක",
        src: mrInditha,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - තොරතුරු තාක්ෂණ",
        description : ["ඉන්දිත ජයතිලක මහතා ඒෂියා ඇසට් ෆිනෑන්ස් ආයතනයෙහි සියලුම තොරතුරු තාක්ෂණ ආශ්‍රිත කාර්යයන් සඳහා විසඳුම් සපයනු ලබන අතර ඔහුට බැංකු සහ මූල්‍ය විසඳුම් සංවර්ධනය සහ ක්‍රියාත්මක කිරීම සම්බන්ධයෙන් වසර 12 කට වැඩි පළපුරුද්දක් ඇත. ඔහු සිය කළමනාකරණ තොරතුරු පද්ධති පිළිබඳ ශාස්ත්‍රවේදී උපාධිය  ඩබ්ලන් විශ්ව විද්‍යාලයෙන් ලබාගන්නා ලදී.",
          "ඔහුගේ වෘත්තීය කාලය තුළ, ඔහු විවිධ අංශවලින් ඔහුගේ අත්දැකීම් ලබා ගත් අතර, මූල්‍ය ක්ශේත්‍රය තුල අත්‍යාවශ්‍ය මෘදුකාංග ඇතුලු අනෙකුත් තොරතුරු තාක්ශණික විසඳුම් ලබාදෙන විශේෂඥ පුද්ගලයෙක් බවට පත්විය. දැනට, ඔහු තොරතුරු තාක්ෂණය හා සම්බන්ධ මෘදුකාංග , ආරක්ෂක සේවා ඇතුලු සියලුම ක්‍රියාවලීන් සිදු කරමින් තොරතුරු තාක්ෂණ දෙපාර්තමේන්තුව අධීක්ෂණය කරනු ලබයි."
        ]
      },
      {
        id: "18",
        name: "ප්‍රවීන් පීරිස්",
        src: mrPraveen,
        designation: "නියෝජ්‍ය සාමාන්‍යාධිකාරී - භාණ්ඩාගාර",
        description : ["ප්‍රවීන් පීරිස් මහතා 2014 ජනවාරි මාසයේදී ඒෂියා ඇසට් ෆිනෑන්ස් හා සම්බන්ධ වූ අතර ඔහු වසර 16 කට වඩා වැඩි මූල්‍ය හා භාණ්ඩාගාර අත්දැකීම් වලින් සමන්විත අයෙකි. ඔහු 2004 දී ගෝලීය විගණන සමාගමකින් සිය වෘත්තීය ජීවිතය ආරම්භ කළ අතර 2008 දී බැංකු නොවන මූල්‍ය ආයතනයක් සමග සම්බන්ධ විය.",
          "ඒෂියා ඇසට් ෆිනෑන්ස් හා සම්බන්ධ වීමට පෙර, ඔහු ලැයිස්තුගත මූල්‍ය සමාගමක භාණ්ඩාගාර කළමණාකරුවකු ලෙස සේවය කළේය. උපාය මාර්ගික අවදානම් කළමනාකරණය, වත්කම් කළමනාකරණය සහ මුදල් කළමනාකරණය ඇතුළු භාණ්ඩාගාර කළමනාකරණය පිළිබඳ විශේෂඥ දැනුමක් ඔහුට ඇත. ඔහු මෙහෙයුම් කළමනාකරණය පිළිබඳ නිපුණයෙකු වන අතර ඉහළ වටිනාකමක් ඇති ව්‍යාපෘති සඳහා මූල්‍යකරණය හැසිරවීමේ හැකියාව ඔහු සතුව ඇත. ප්‍රවීන් පීරිස් මහතා එක්සත් රාජධානියේ වේල්ස් විශ්වවිද්‍යාලයෙන් සිය ශාස්ත්‍රපති උපාධිය ලබා ඇති අතර එක්සත් රාජධානියේහි කළමනාකරණ ගණකාධිකාරීවරුන්ගේ වරලත් ආයතනයේද සාමාජිකයෙකු ද වේ."
        ]
      },
    ],
    
    },
  },
  ta: {
    translation: {
      //Header Component
      header: {
        title: "வாடிக்கையாளர் சேவை",
      },
      //Navbar component
      navbar: {
        home: "முகப்பு",
        about: "எங்களை பற்றி",
        about_dropdown0: "கண்ணோட்டம்",
        about_dropdown1: "நோக்கம், பார்வை மற்றும் இலக்கு",
        about_dropdown2: "வழிகாட்டும் குழு",
        about_dropdown3: "சொற்பொருள் நிர்வாகம்",
        about_dropdown4: "கிளை வலையமைப்பு",
        products: "சேவைகள்",
        products_dropdown1: "தயாரிப்புகளின் பார்வை",
        products_dropdown2: "தங்கக் கடன்",
        products_dropdown3: "நிலையான வைப்புக்கள்",
        products_dropdown4: "லீசிங்",
        products_dropdown5: "கடன் உத்தரவாதம்",
        products_dropdown6: "வெளிநாட்டு மாற்று",
        products_dropdown7: "Luckewallet",
        investor_relations: "முதலீட்டாளர் தொடர்பு",
        investor_relations_dropdown1: "கார்ப்பரேட் சுயவிவரம்",
        investor_relations_dropdown2: "நிதி விசைகள்",
        careers: "தொழில்",
        downloads: "பதிவிறக்கம்"
      },

      //Footer Component
      footerListItems: [
        { title: "எங்களைப் பற்றி", list: ["சாரா பார்வை", "பிரBoard நிர்வாக குழு", "கார்ப்பரேட் மேலாண்மை", "முகாமைத்துவ வலை"], links: ["/web/about", "/web/about/#bod", "/web/about/#corporate-management", "/web/about/#branches"] },
        { title: "தயாரிப்புகள்", list: ["பரபரப்பு கடன்", "நிலைபார்க்க வேண்டிய உறுதிப்பத்திரம்", "பட்சி வாடகைகள்", "குடியுரிமை", "வெளிநாட்டு மாற்று", "Luckewallet"], links: ["/web/gold-loan", "/web/fixed-deposit", "/web/leasing", "/web/mortgage", "/web/foreign-exchange", "/web/luckewallet"] },
        { title: "பொது தொடர்புகள்", list: ["திறந்த சிறுகுழு", "முக்கிய நிதி"], links: ["/web/ir", "/web/ir/#financial-keys"] },
        { title: "மற்ற இணைப்புகள்", list: ["வேலைவாய்ப்பு", "எங்களை தொடர்பு கொள்ளவும்", "பதிவிறக்கங்கள்"], links: ["/web/careers", "/web/contacts", "/web/downloads"] },
      ],


      footerText: {
        subs_title1: "உங்கள் அருகிலுள்ள நிதி தீர்வுகளை கொண்டுவருதல்",
        subs_title2: "புதிய புதுப்பிப்புகளுக்காக பதிவு செய்யவும்",
        subs_title3: "எங்களிடமிருந்து",
        subs_message: "எங்கள் ஆஃபர்களையும் புதுப்பிப்புகளையும் உங்கள் இனைத்து பெட்டியில் பெற பதிவு செய்யவும்.",
        subs_field: "உங்கள் மின்னஞ்சல் எண் உள்ளிடவும்",
        subs_btn: "சமர்ப்பிக்கவும்",
        intro: "Asia Asset Finance PLC, 1981 நவம்பர் 25 ஆம் தேதி நிறுவப்பட்டது, ICRA A+ நிலையான முன்னோக்கி மதிப்பீடு பெற்றுள்ளது மற்றும் இலங்கை மத்திய வங்கியின் நிதி வாரியத்தால் உரிமம் பெற்றுள்ளது.",
        address: "எண் 76, பார்க் தெரு, கொழும்பு 02, இலங்கை",
      },
      
      
      //Landing Page Components
      carouselLandingPage: [
        {
          src: banner1,
          title: "உங்கள் நிதி எதிர்காலத்திற்கு புதிய தீர்வுகள்",
          intro: "உங்கள் நிதி எதிர்காலத்தை சக்திவாய்ந்ததாக ஆக்குதல்",
          description: "ஏசியா எசட் பைனான்ஸ் நிறுவனத்தில், நிதி தேவையுடைவர்களுக்கு . பொருத்தமான நிதித் தீர்வுகளை வழங்குவதில் எங்களின் அர்ப்பணிப்பு இலங்கையின் நிதித்துறையில் முன்னணியில் எங்களை நிலைநிறுத்தியுள்ளது. உங்களின் அடுத்த பாரிய திட்டத்தில் முதலீடு செய்ய, சேமிக்க அல்லது நிதியுதவி செய்ய நீங்கள் விரும்பினால் , எம்முடன் இணையுங்கள். நம்பிக்கையுடனும் வெளிப்படைத்தன்மையுடனும் உங்கள் பயணத்தை ஆதரிக்க நாங்கள் இங்கு இருக்கிறோம்.",
        },
        {
          src: banner2,
          title: "கனவுகளுக்கான நிதி தீர்வுகள் சந்திக்கும் இடம் ",
          intro: "புதுப்பிக்கப்பட்ட நிதி முன்னுதாரண வளர்ச்சி ",
          description:
            "நாங்கள் ஒரு நிதி நிறுவனத்தை விட அதிகம்; நாங்கள் உங்கள் வளர்ச்சியின் பங்காளிகள். நிதிக்கான எங்களின் புதுமையான அணுகுமுறையானது இலங்கை முழுவதிலும் உள்ள தனிநபர்கள் மற்றும் வணிகங்களை மேம்படுத்துவதற்காக வடிவமைக்கப்பட்டுள்ளது. தனிதிறன்மிக்க  சேவையுடன் அதிநவீன தொழில்நுட்பத்தை இணைப்பதன் மூலம், உங்கள் இலக்குகளை அடைய உங்களுக்கு உதவுவதில் திறன்  கொண்டுள்ளதுடன், பயனுள்ள நிதித் தீர்வுகளையும் நாங்கள் வழங்குகிறோம்.",
        },
        {
          src: banner3,
          title: "இலங்கை நிதித்துறையில் முன்னோடியாக முன்னேறி செல்கிறோம் ",
          intro: "உங்கள் நம்பிக்கை எமது பொறுப்பு ",
          description:
            "நம்பிக்கையும் வெளிப்படைத்தன்மையும் எங்கள் வணிகத்தின் முக்கிய காரணிகள் . இலங்கையின் நிதித்துறையில் சிறந்த தலைமை என்ற வகையில், நாம் செய்யும் எல்லாவற்றிலும் ஒருமைப்பாட்டின் மிக உயர்ந்த தரத்தைப் பேணுவதற்கு நாங்கள் உறுதிபூண்டுள்ளோம். எங்களின் முதல் தொடர்பு முதல் இறுதி பரிவர்த்தனை வரை, உங்கள் தேவைகளுக்கு ஏற்ப தெளிவான, நேர்மையான ஆலோசனை மற்றும் சேவைகளை பெறுவதுதொடர்பில்  நீங்கள் எங்களை நம்பலாம்.",
        },
      ],
      landingPageCards: {
        card1_title: "நிபுணர் குழு",
        card1_description: "எங்கள் நிதி நிபுணர்களின் அறிவையும் அனுபவத்தையும் உங்கள்  வெற்றி பாதையில் பயணிக்க யன்படுத்துங்கள்.",
        card2_title: "பரந்த அணுகல்",
        card2_description: "இலங்கை முழுவதும் உள்ள வாடிக்கையாளர்களின் தேவைகளுக்கு  ஏற்றவாறு வடிவமைக்கப்பட்ட விரிவான நிதி தயாரிப்புகளை வழங்குதல்",
        card3_title: "வேகமான செயல்திறன்மிக்க சேவை ",
        card3_description: "உங்கள் நேரத்தை மிச்சப்படுத்தவும் மற்றும் உங்கள் நிதி பயணத்தை எளிதாக்கவும் வடிவமைக்கப்பட்ட விரைவான மற்றும் திறமையான சேவைகளை அனுபவிக்கவும்.",
      },
      whyChooseUs: {
        title_left: "ஏசியா எசட் பைனான்சினை  ",
        title_right: "ஏன் தேர்வு செய்ய வேண்டும்",
        description: "50 ஆண்டுகளுக்கு மேல், ஆசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி நிறுவனமாக நாம், எங்கள் ஆர்வத்தை எண்ணற்ற நபர்களுக்கும் வணிகங்களுக்கும் முதலீடு செய்துள்ளோம். அதில், நாம் வழங்கும் மிகவும் சந்தோஷமான விகிதத்தில் நகைக்கடன், லீசிங், அடமான கடன்கள், குழு கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், சிறிய கடன்கள் அல்லது உங்கள் பொதுவான குவியல்களை ஏற்றுக்கொள்வதில் நாங்கள் நம்புகிறோம், இந்த சமுதாயங்களை நிலையான பொருளாதாரமாக வளர்த்துவைத்துள்ளோம் என நமக்கு பெருமை.",
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
  }, 
  productsOverviewTextLandingPage: {  
    title: "எங்கள் நிதி தயாரிப்புகளை கண்டறியவும்",  
    subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கு விரிவான தீர்வுகள்",  
    description: "ஏசியா எசட் பைனான்ஸில், உங்களின் தனிப்பட்ட தேவைகளைப் பூர்த்தி செய்யும் வகையில் பல்வேறு வகையான நிதித் தயாரிப்புகளை நாங்கள் வழங்குகிறோம். நீங்கள் உங்கள் சேமிப்பை அதிகரிக்க விரும்பினாலும், கடனைப் பெற விரும்பினாலும் அல்லது முதலீட்டு வாய்ப்புகளை ஆராய விரும்பினாலும், உங்கள் நிதி நலனைக் கருத்தில் கொண்டு எங்கள் சலுகைகள் வடிவமைக்கப்பட்டுள்ளன. உங்களுக்கான சரியாக பொருந்தும் சேவையை கண்டறிய எங்களின் பாதுகாப்பான நிலையான வைப்புத்தொகை,  தங்கக் கடன்கள் மற்றும் ஆதரவான மைக்ரோ அடமானக் கடன்களில் இருந்து தேர்வு செய்யவும். எங்களின் புதுமையான மின்-சேமிப்பு கணக்குகள், போட்டித்தன்மை வாய்ந்த அந்நியச் செலாவணி சேவைகள் மற்றும் வசதியான குத்தகை விருப்பங்கள் மூலம், உங்கள் நிதிப் பயணத்தின் ஒவ்வொரு அம்சமும் உள்ளடக்கப்பட்டிருப்பதை உறுதிசெய்கிறோம். உங்கள் நிதி வெற்றியை மேம்படுத்தும் நம்பகமான, தனிப்பயனாக்கப்பட்ட தீர்வுகளை வழங்க எங்களை நம்புங்கள்.",  
},  

  productsOverviewLandingPage: [
    { title: "நிலையான வைப்பு", image: FixedDeposits, description: "நிலையான வருவாயுடன் உங்கள் சேமிப்புகளைப் பாதுகாக்கவும்." },
    { title: "தங்க கடன்", image: GoldLoan, description: "நீங்கள் தேவைப்படும் செலவுகளை எளிதாக்க குளறுபடிகள் இல்லாமல் கடன் பெறுங்கள்." },
    { title: "அடமானம்", image: Mortgage, description: "குறைந்த வட்டி விகிதங்களில் கடன்களை எளிதாகப் பெறுங்கள்." },
    { title: "லீசிங்", image: Leasing, description: "குறைந்த வட்டி விகிதங்களுடன் வசதியான செலவினம்." },
    { title: "Luckewallet", image: Luckewallet, description: "மனநிம்மதத்திற்கும் பாதுகாப்பிற்கும் முழுமையான பாதுகாப்பு." },
    { title: "வெளிநாட்டு மாற்று", image: Forex, description: "பல்வேறு விருப்பங்களுடன் உங்கள் வருமானத்தை அதிகரிக்கவும்." },
],
testimonialsText: {  
  title: "எமது வாடிக்கையாளர்கள் எம்மை பற்றி தெரிவித்த கருத்துக்கள்",  
  subtitle: "வெற்றிக்கும் நமது திருப்திகரமான சேவைக்கும் உள்ள கதைகள்",  
},  

testimonials: [
  {
    personName: "ராகேஷ் பன்சல்",
    profile: "மார்க்கெட்டிங் மேலாளர்",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam ducimus perferendis impedit laborum, facilis dignissimos! Ullam minus cumque quo.",
  },
  {
    personName: "விமல் குமார்",
    profile: "தரவு பகுப்பாய்வாளர்",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, necessitatibus?",
  },
  {
    personName: "வினீத் சிங்",
    profile: "தயாரிப்பு மேலாளர்",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "வினீத் சிங்",
    profile: "தயாரிப்பு மேலாளர்",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
  {
    personName: "வினீத் சிங்",
    profile: "தயாரிப்பு மேலாளர்",
    imageUrl: "https://www.ateneo.edu/sites/default/files/2021-11/istockphoto-517998264-612x612.jpeg",
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur nisi minima ipsum, laborum veniam?",
  },
],
branchDetailsLandingPage: {
  title1: "எமது ",
  title2: "கிளைகள்",
  subtitle: "உங்களுக்கு பொருத்தமான நிதி தேவைகள் உங்கள் அருகில்",
  description1: "இன்றே ",
  description2: "எங்களின் 90+ கிளைகளில் ",
  description3: "ஒன்றுக்கு சென்று மற்றும் ",
  description4: "ஏசியா எசட் பைனான்ஸ் ",
  description5: "பீ எல் சீ முன்னெடுக்கப்படும் தனித்துவமான  சேவையை பெற்றிடுங்கள் . நீங்கள் இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் தேவைகளை பூர்த்தி செய்ய அதற்க்கு ஆதரவளிக்க நாங்கள்  இருக்கிறோம்.",
  newbranches_title: "எங்கள் புதிய கிளைகள்",
  newbranches_description: "நாங்கள் எங்கள் புதிய கிளைகளைத் தொடங்கியதை அறிவிக்க பெருமகிழ்ச்சி அடைகிறோம், எங்கள் நம்பகமான நிதி சேவைகளை உங்களிடம் மேலும் அருகாமையில் கொண்டுவருகிறோம். அணுகல் மற்றும் சமூக ஆதரவு ஆகியவற்றிற்கான எங்கள் முழு அர்ப்பணிப்பின் ஒரு பகுதியாக, இந்த கிளைகள் ஏசியா ஆசெட் ஃபைனான்ஸின் முழுமையான தயாரிப்புகள் மற்றும் சேவைகளை வழங்கத் தயாராக உள்ளன. எங்கள் சமீபத்திய இடங்களில் எங்களை பார்வையிடுங்கள், நீங்கள் எதிர்பார்க்கும் அதே நம்பகமான மற்றும் தனிப்பயனாக்கப்பட்ட சேவையை அனுபவிக்கவும்.",
  newest_branch_name: "டெனியாயா",
  newest_branch_address: "எண் 196, மெயின் வீதி, டெனியாயா",
  newest_branch_tp: "+94 11 7699000",
  newest_branch_email: "deniyaya@aaf.lk"
},
inquiryForm: {
  title: "இன்றே எங்களை தொடர்பு கொள்ளுங்கள்",
  subtitle: "நிதி தீர்வுகளை உங்களுக்கு மேலும் அருகாமையில் கொண்டுவருகிறோம்",
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
  label4: "செய்தி",
  field4: "உங்கள் செய்தியை இங்கே உள்ளிடவும்",
  error4: "",
  button1: "மீள அமைக்க",
  button2: "சமர்ப்பிக்கவும்"
},

//About Page Components
bannerAbout: {
  src: bannerAbout,
  title: "எங்களைப் பற்றி",
  intro: "உங்கள் நிதி எதிர்காலத்தை வலுவடிக்கச் செய்கிறோம்",
  specialnote: "1970 முதல்",
  description: "“ மக்களுக்கு அதிகாரம் வழங்குதல் மற்றும் வாழ்க்கையை மாற்றுதல் ”",
},
cardsAbout: [
  { stat: "70,000+", text: "வாடிக்கையாளர்கள்", icon: faUsers },
  { stat: "54+", text: "சிறப்புத் தகுதி ஆண்டுகள்", icon: faClock },
  { stat: "1000+", text: "உதவியாளர்கள்", icon: faBriefcase },
  { stat: "100", text: "கிளைகள்", icon: faBuilding },
],
overviewAbout: {
  title: "மேலும் பார்வை",
  description: "50 ஆண்டுகளுக்கு மேலாக, ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி, எங்கள் ஆர்வங்களை பல்வேறு மனிதர்களிலும், வணிகங்களிலும் முதலீடு செய்துள்ளது. எங்கள் சுயாதீனமான வட்டி விகிதத்தில் வழங்கப்படும் தங்க கடன்கள், லீசிங், உடன் கடன்கள், குழு தனிப்பட்ட கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது உங்கள் பொது அடையாளங்களை ஏற்கின்றன என்பதை பரிசுத்தமான முறையில் சமூகங்கள் வளர்ந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி என்பது முபூட் ஃபைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையாக கையிருப்புக்கான துணை நிறுவனமாகும் மற்றும் இலங்கை மத்திய வங்கி மூலம் பதிவு செய்யப்பட்ட பூரணமாக உரிமை பெற்ற, பொதுத் தொகுப்பு ஏற்ற ஆற்றலுடைய நிறுவனம் ஆகும். சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்து வருகின்றன, ஏசியா ஆஸெட் இந்த தேவைகளுக்கு பூரணமாக நம்பிக்கையுடன் இணைக்கப்பட்டுக் கொண்டுள்ளது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு அவர்கள் வாழும் மற்றும் வணிகம் செய்வதற்கான முறையில் வளர்ச்சி அடைய உதவுவதாக இருந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி இன் கதை “மக்களுக்கு அதிகாரம் அளித்தல் மற்றும் வாழ்க்கையை மாற்றுதல்” என்பதாகும்.",
},
missionVisionGoal: {
  mission: {
    category: "பணிகள்",
    title: "",
    description: "எங்கள் வாடிக்கையாளர்களின் நிதி தேவைகளுக்கு வழங்கப்படும் தீர்வுகள் வழக்கமற்ற, புதுமையான மற்றும் அவர்களின் தேவைகளுக்கே உரியவை ஆகும், இதன் மூலம் அவர்கள் வாழ்கின்ற வாழ்க்கை தரத்தை மேம்படுத்துவதுடன், அவர்களது எதிர்பார்ப்புகளை தாண்டி உயர்ந்த வாடிக்கையாளர் சேவையை வழங்குவதற்கு நாங்கள் திடமாக உறுதியாக இருக்கின்றோம்.",
  },
  vision: {
    category: "காட்சி",
    title: "",
    description: "எங்கள் செயல்பாடுகளையும் செயல்திறனையும் தொடர்ந்தும் மேம்படுத்துவதன் மூலம் பங்குதாரர் மதிப்பை உருவாக்கி, நிலையான மற்றும் திறமையான நிலைப்பாட்டை கொண்ட முறைகளில் வெற்றியளிக்கும், பங்குதாரர்களுக்கு முக்கியமான வருமானங்களை வழங்குக.",
  },
  goal: {
    category: "இலக்கு",
    title: "",
    description: "பணியாளர்களுக்கு சமத்துவத்தை ஊக்குவிக்கும் மற்றும் அந்த பணியாளர்களின் தனிப்பட்ட வளர்ச்சியுடன், நிறுவனத்தில் சரியான வேலை-வாழ்க்கை சமநிலை உருவாக்கும் வகையில் ஒரு நிறுவனமாக மாறுவதாக நாங்கள் உறுதி செய்கிறோம்.",
  }
},
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ஜி. எம். அலெக்சாண்டர்', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrBijimon, name: 'கே. ஆர். பிஜிமொன்', title: 'நான்-நிறுவன இயக்குனர் / முத்தூட் ஃபைனான்ஸ் லிமிடெட் பொதுக் மேலாளர்' },
  { imgSrc: mrPillai, name: 'கே. ஜி. கே. பிள்ளை', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrRajitha, name: 'ஆர். ஏ. பி. பஸ்நாயக்கே', title: 'சுதந்திர நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrJayasekara, name: 'ஜே. பி. டி. ஆர். ஜயசேகரா', title: 'சுதந்திர நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrKumarasiri, name: 'டி. சி. டி. குமாரசிறி', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrRoshan, name: 'ஆர். டி. எஸ். குணசேகரா', title: 'நிறுவன இயக்குனர் / தலைமை இயக்க அதிகாரி' },
],
bodTextsAbout: {
  title1: "ஆலோசகர் குழு",
  title2: "",
  subtitle: "எங்கள் தரிசனத்தை வழிநடத்துதல், துறைசார்ந்த அறிவும் நெருக்கமுமாக",
  intro: "எங்கள் ஆலோசகர் குழுவில் மிக்க அனுபவமும் மாறுபட்ட பின்னணிகளும் கொண்ட வணிக நிபுணர்கள் அடங்கியுள்ளனர். இவர்களின் வழிகாட்டுதலும் உள்ளுணர்வுகளும் Asia Asset Finance ஐ நிலைத்த உத்தேச வளர்ச்சிக்கான நிச்சயமாக மாற்றுகின்றன.",
  chairman_name: "வி. ஏ. பிரசாந்த்",
  chairman_position: "செயலாளர் குழு தலைவர்",
  chairman_description: "வி. ஏ. பிரசாந்த் என்பது வணிக வங்கியாளராக 37 ஆண்டுகளுக்கு மேல் அனுபவமுள்ளவர், குறிப்பாக தன்னிச்சையான மற்றும் காப்பீடு வங்கியாளர்கள், பொறுப்பு செயல்பாடுகள் மற்றும் தகவல் பாதுகாப்பு போன்ற துறைகளில்...",
  ceo_name: "ஆர். ஜே. ஏ. குணவர்தன",
  ceo_position: "ஆலோசகர் / தலைமை நிர்வாக அதிகாரி",
  ceo_description: "திரு. ராஜீவ் குணவர்தன, Asia Asset Finance PLC இன் தலைமை நிர்வாக அதிகாரி / ஆலோசகர், 2009 டிசம்பர் மாதத்தில் ஆலோசகர் குழுவுக்கு நியமிக்கப்பட்டார். நிறுவனம் தரிசனம் அமைத்தல் மற்றும் செயல்படுத்தல் போன்ற செயல்களுக்கு அவர் பொறுப்பாளரானவர்...",
  see_more_btn: "மேலும் காண்க",
  view_profile_btn: "சுயவிவரத்தைக் காண்க",
},
comTextsAbout: {  
  title1: "குழு",  
  title2: "நிர்வாகம்",  
  subtitle: "பாதுகாப்பான நிதி வளர்ச்சிக்கான முழுமையான தீர்வுகள்",  
  description: "ஏசியா அசெட் பைனான்ஸில், எங்கள் காப்பக மேலாண்மை குழு அனுபவமிக்க நிபுணர்களால் அமைக்கப்பட்டுள்ளது, அவர்கள் தங்களுடைய அனுபவமும் ஆழமான பார்வையும் கொண்டு வருகின்றனர். அவர்களின் மூலோபாயமான முன்னேற்றம் மற்றும் சிறந்ததுவதை நிலைநிறுத்துவதற்கான கடமையுடன் எங்கள் நிறுவனம் வெற்றியுடன் முன்னேறி, இலங்கையின் நிதி சேவைத் துறையில் முன்னணியில் இருக்க எங்களுடைய முன்னணி நிலையை உறுதி செய்கின்றனர்."  
},  


comProfilesAbout: [ 
  { imgSrc: mrRajiv, name: 'ராஜீவ் குணவர்தன', title: 'இயக்குனர் / தலைமை நிர்வாக அதிகாரி' },
  { imgSrc: mrRoshan, name: 'ரோஷன் குணசேகரா', title: 'நிறுவன இயக்குநர் / செயல்முறை பொறுப்பு அதிகாரி' },
  { imgSrc: mrThiru, name: 'எம். திருநீலகந்தன்', title: 'பொது மேலாளர்' },
  { imgSrc: mrMahesh, name: 'மஹேஷ் குமார்', title: 'உப பொது மேலாளர் - கடன்' },
  { imgSrc: mrJayantha, name: 'ஜயந்த வீரபுள்ளிகே', title: 'உப பொது மேலாளர் - சந்தைப்படுத்தல்' },
  { imgSrc: mrSameera, name: 'சமீரா வெவேலடெனிய', title: 'உப பொது மேலாளர் - நிலையான வைப்பு' },
  { imgSrc: msGeethika, name: 'கீதிகா எல்வாலகே', title: 'உப பொது மேலாளர் - நிதி' },
  { imgSrc: mrSajith, name: 'சஜித் அடபத்து', title: 'உப பொது மேலாளர் - அபாய மேலாண்மை' },
  { imgSrc: mrInditha, name: 'இந்தித ஜயதிலக', title: 'உப பொது மேலாளர் - தகவல் தொழில்நுட்பம்' },
  { imgSrc: mrPraveen, name: 'பிரவீன் பீரிஸ்', title: 'உப பொது மேலாளர் - தனிசேமிப்பு' }
],

branchNetworktext: {
  title1: "எங்கள் ",
  title2: "கிளை நெட்வொர்க்",
  subtitle: "நிதித் தீர்வுகளை உங்களுக்கு நெருக்கமாகக் கொண்டுவருதல்",
  description1: "எங்கள் சேவையை அனுபவிக்க அறியப்பட்ட ",
  description2: "ஆசியா அஸெட் பைனான்ஸ் பி.எல்.சி ன் 100 கிளைகளில் ",
  description3: "ஒன்றை  இன்றே   நாடவும் . இலங்கையில் எங்கிருந்தாலும் உங்கள் நிதிப் பயணத்திற்கு ஆதரவளிக்க நாங்கள் இங்கு இருக்கிறோம். ",
  label: "உங்கள் அருகிலுள்ள கிளையை தேடவும்:",
  field: "கிளையை தேடவும்...",
  all_tab: "அனைத்து  வலயங்கள்",
},
branchesData: {
  western: {
    title: "மேற்கு  வலயம்",
    branches: [
      { name: "நீர்கொழும்பு", location: "இல. 295, பிரதான வீதி, நீர்கொழும்பு.", contact: "031 769 9020", image: branchSample },
      { name: "கம்பஹா", location: "இல. 69, கொழும்பு வீதி, கம்பஹா.", contact: "033 769 9010", image: branchSample },
      { name: "களுத்துறை", location: "இல 344, மகா வீதி, களுத்துறை தெற்கு", contact: "034 769 9013", image: branchSample },
      { name: "மொரட்டுவ", location: "இல 16, புதிய டி சொய்சா வீதி, ராவத்தவத்தை. மொரட்டுவ.", contact: "011 768 1511", image: branchSample },
      { name: "வெள்ளவத்தை", location: "இல.344, காலி வீதி, வெள்ளவத்தை", contact: "011 768 1530", image: branchSample },
      { name: "மத்துகம", location: "K & W மையம், No.5, காமினி மாவத்தை, அளுத்கம வீதி, மத்துகம", contact: "034 769 9022", image: branchSample },
      { name: "கொட்டாஞ்சேனை", location: "இல. 31, கொட்டாஞ்சேனை வீதி, கொழும்பு 13", contact: "- ", image: branchSample },
      { name: "பாணந்துறை", location: "இல.114, D S சேனநாயக்க மாவத்தை, பாணந்துறை..", contact: "038 769 9010", image: branchSample },
      { name: "மட்டக்குளி", location: "இல. 3/810, பண்ணை வீதி, மட்டக்குளி", contact: "011 769 9480", image: branchSample },
      { name: "கிராண்ட்பாஸ்", location: "இல.428, மாதம்பிடிய வீதி, கொழும்பு 14", contact: "011 768 1502", image: branchSample },
      { name: "எலகந்தை", location: "இல.327, திம்பிரிகஸ்யாய, ஹந்தல, வத்தளை..", contact: "011 769 9446", image: branchSample },
      { name: "ஹோமாகம", location: "எண் 486, ஹோமாகம நகரம், ஹோமாகம", contact: "011 769 9415", image: branchSample },
      { name: "தங்கொடுவ", location: "இல 07, நாத்தாண்டிய வீதி, தங்கொடுவ.", contact: "031 769 9030", image: branchSample },
    ]
  },
  eastern: {
    title: "கிழக்கு  வலயம்",
    branches: [
      { name: "மட்டக்களப்பு", location: "இலக்கம் 187, திருகோண வீதி, மட்டக்களப்பு.", contact: "652229720", image: branchSample },
      { name: "செங்கலடி", location: "புதிய சந்தை சாலை, செங்கலடி", contact: "657699020", image: branchSample },
      { name: "கல்முனை", location: "இல.69, பிரதான வீதி, கல்முனை.", contact: "672059920", image: branchSample },
      { name: "சம்மாந்துறை", location: "இலக்கம் 120, அம்பாறை வீதி, கருவாட்டுகல்-02, சம்மாந்துறை", contact: "672050387", image: branchSample },
      { name: "அக்கரைப்பற்று", location: "இலக்கம் 155, அம்பாறை வீதி, அக்கரைப்பற்று.", contact: "677699010", image: branchSample },
      { name: "வாழைச்சேனை", location: "பிரதான வீதி, வாழைச்சேனை", contact: "652258808", image: branchSample },
      { name: "திருகோணமலை", location: "இல.285, மத்திய வீதி, திருகோணமலை", contact: "267699021", image: branchSample },
      { name: "கிண்ணியா", location: "இல. 88, பிரதான வீதி, சின்ன கிண்ணியா, கிண்ணியா 03", contact: "267699032", image: branchSample },
      { name: "களுவாஞ்சிகுடி", location: "இல.172, பிரதான வீதி, களுவாஞ்சிகுடி", contact: "657699032", image: branchSample },
      { name: "பொத்துவில்", location: "பிரதான வீதி, பொத்துவில்", contact: "637699011", image: branchSample },
      { name: "கந்தளாய்", location: "இலக்கம்: 137, பிரதான வீதி, கந்தளாய்", contact: "262234592", image: branchSample },
      { name: "திருக்கோவில்", location: "பிரதான வீதி, திருக்கோவில்", contact: "677699040", image: branchSample },
      { name: "நிந்தவூர்", location: "42/11, பிரதான வீதி, நிந்தவூர்.", contact: "677699052", image: branchSample },
      { name: "சேருநுவர", location: "இல,44, A.R.B.03, சேருநுவர", contact: "267699050", image: branchSample },
      { name: "மூதூர்", location: "மட்டக்களப்பு வீதி, ஆலிம் நகர், மூதூர்.", contact: "267699040", image: branchSample },
      { name: "அம்பாறை", location: "இல 451, D.S சேனநாயக்க வீதி, அம்பாறை.", contact: "637699020", image: branchSample }
    ]
  },
  southern: {
    title: "தெற்கு  வலயம்",
    branches: [
      { name: "காலி", location: "இலக்கம் 170/172, கடவீதிய, பிரதான வீதி, காலி", contact: "917699002", image: branchSample },
      { name: "மாத்தறை", location: "79,அனகாரிக தர்மபால மாவத்தை, மாத்தறை.", contact: "417699012", image: branchSample },
      { name: "பேருவளை", location: "இல. 199, தொட்டமுனே தெற்கு பேருவளை பத்தே, பேருவளை.", contact: "347699030", image: branchSample },
      { name: "அம்பலாந்தோட்டை", location: "எண் 55, மஹா தெரு, அம்பலாந்தோட்டை", contact: "477699000", image: branchSample },
      { name: "எல்பிட்டிய", location: "இல 23/4, அம்பலாங்கொட வீதி, எல்பிட்டிய", contact: "917699010", image: branchSample },
      { name: "தெனியாய", location: "இலக்கம் 196, பிரதான வீதி, தெனியாய.", contact: "417699020", image: branchSample },
    ]
  },
  northern: {
    title: "வடக்கு  வலயம்",
    branches: [
      { name: "யாழ்ப்பாணம்", location: "எண் 109, கஸ்திரியார் சாலை, யாழ்ப்பாணம்", contact: "212219229", image: branchSample },
      { name: "சாவகச்சேரி", location: "இல.05, கண்டி வீதி, சாவகச்சேரி", contact: "217699040", image: branchSample },
      { name: "பருத்தித்துறை", location: "எண்.374, ரஜினா கட்டிட வளாகம், பருத்தித்துறை", contact: "217699080", image: branchSample },
      { name: "சுன்னாகம்", location: "இல. 15, நிலைய வீதி, சுன்னாகம்", contact: "212244200", image: branchSample },
      { name: "நெல்லியடி", location: "இல.82, பருத்தித்துறை வீதி, நெல்லியடி.", contact: "212265285", image: branchSample },
      { name: "சங்கணை", location: "மகான் தங்க பிளாசா, பிரதான தெரு, சங்கணை", contact: "217699030", image: branchSample },
      { name: "வேலணை", location: "வகலவாடி, வேலணை", contact: "217699021", image: branchSample },
      { name: "அச்சுவேலி", location: "இல.53, ஆவரங்கால் வீதி, அச்சுவேலி", contact: "217699010", image: branchSample },
      { name: "மானிப்பாய்", location: "இல.260, மானிப்பாய் வீதி, மானிப்பாய்", contact: "217699115", image: branchSample },
      { name: "உரும்பிராய்", location: "பாளை வீதி, உரும்பிராய் ", contact: "217699090", image: branchSample },
      { name: "கிளிநொச்சி", location: "முருகன் கோவிலுக்கு அருகில், ஏ9 வீதி, கிளிநொச்சி", contact: "217699062", image: branchSample },
      { name: "புதுக்குடியிருப்பு", location: "இல.02, பரந்தன் வீதி, புதுக்குடியிருப்பு, முல்லைத்தீவு", contact: "215778151", image: branchSample },
      { name: "முல்லைத்தீவு", location: "இல.38, பிரதான வீதி, முல்லைத்தீவு", contact: "217699067", image: branchSample },
      { name: "வவுனியா", location: "எண், 27, 2வது குறுக்குத் தெரு, வவுனியா.", contact: "247699010", image: branchSample },
      { name: "ஒட்டுசுட்டான்", location: "முல்லைத்தீவு, பிரதான வீதி, வித்யாபுரம், ஒட்டுசுட்டான்", contact: "212291880", image: branchSample },
      { name: "மன்னார்", location: "எண் : 5, முதல் குறுக்குத் தெரு, பேத்தா, மன்னார்.", contact: "237699010", image: branchSample },
      { name: "செட்டிகுளம்", location: "பிரதான வீதி, செட்டிகுளம்", contact: "247699020", image: branchSample },
      { name: "முழங்காவில்", location: "மன்னார் வீதி, முழங்காவில்.", contact: "117699000", image: branchSample },
      { name: "மல்லாவி", location: "துன்னுகை சாலை, மல்லாவி, முலேட்டிவ்.", contact: "217699095", image: branchSample }
    ]
  },
  central: {
    title: "மத்திய  வலயம்",
    branches: [
      { name: "திகன", location: "ஜே/2005 11/02. ராஜவெல்ல திகன", contact: "817699030", image: branchSample },
      { name: "ஹட்டன்", location: "இல.14/A, தரை தளம், புதிய வீதி, ஹட்டன்", contact: "517699001", image: branchSample },
      { name: "தலவாக்கலை", location: "இல. 8/3, பிரதான வீதி, தலவாக்கலை", contact: "527699035", image: branchSample },
      { name: "நாவலப்பிட்டி", location: "இல. 75, அம்பகமுவ வீதி, நாவலப்பிட்டி", contact: "817699041", image: branchSample },
      { name: "கம்பளை", location: "இல. 63, நுவரெலியா வீதி, கம்பளை", contact: "081 769 9002", image: branchSample },
      { name: "ராகலை", location: "எண். 67, பிரதான வீதி, ராகலை.", contact: "052 769 9033", image: branchSample },
      { name: "மாத்தளை", location: "இலக்கம் 242, பிரதான வீதி, மாத்தளை", contact: "066 769 9020", image: branchSample },
      { name: "பூண்டலுஓயா", location: "இல.244/59, ழல கட வீதி, பூண்டலுஓயா, Pundaluoya.", contact: "051 769 9032", image: branchSample },
      { name: "மஸ்கெலியா", location: "இலக்கம்: 244, பிரதான வீதி, மஸ்கெலியா.", contact: "052 769 9010", image: branchSample },
      { name: "கடுகஸ்தோட்டை", location: "இலக்கம் 144, குருநாகல் வீதி, கடுகஸ்தோட்டை.", contact: "081 769 9010", image: branchSample },
      { name: "நாவுல", location: "இல. 26, தம்புள்ளை வீதி, நாவுல.", contact: "066 769 9010", image: branchSample },
      { name: "பொகவந்தலாவ", location: "இல.90, பிரிட்வெல் பஜார், பொகவந்தலாவ.", contact: "052 769 9020", image: branchSample },
      { name: "புஸ்ஸல்லாவா", location: "இல.305, நுவரெலியா வீதி, புஸ்ஸல்லாவ.", contact: "081 769 9020", image: branchSample },
      { name: "வத்தேகம", location: "இலக்கம் 55, பிரதான வீதி, வத்தேகம", contact: "081 769 9025", image: branchSample },
      { name: "அகரபத்தனை", location: "எண்.34, பிரதான வீதி, அகரபத்தனை.", contact: "051 769 9011", image: branchSample },
      { name: "ஹவாலியா", location: "இல.26, உடபுஸ்ஸல்லாவ வீதி, ஹவாலியா.", contact: "052 769 9117", image: branchSample },
      { name: "பசறை", location: "எண் 289, பிரதான சாலை, பசறை", contact: "055 769 9041", image: branchSample },
      { name: "கொட்டகலை", location: "இல.179/1, பிரதான வீதி, கொட்டகலை.", contact: "051 769 9022", image: branchSample },
      { name: "ஹங்குரன்கெத", location: "எண் 16, ராகலா சாலை, ரிகில்லகஸ்கட", contact: "081 769 9050", image: branchSample },
      { name: "டயகம", location: ". . எண்.பி/1. டயகம பஜார், டயகம    ", contact: "051 769 9041", image: branchSample },
{ name: "ஹபுகஸ்தலாவ", location: "ஹல்கொல்ல, இல 01, ஹபுகஸ்தலாவ, நாவலப்பிட்டி", contact: "054 769 9000", image: branchSample }
    ]
  },
  northwestern: {
    title: "வட மேற்கு  வலயம்",
    branches: [
      { name: "குருநாகல்", location: "இல 30, சுரதிஸ்ஸ மாவத்தை, குருநாகல்", contact: "377699002", image: branchSample },
      { name: "வென்னப்புவ", location: "224/3A, கொழும்பு வீதி, வென்னப்புவ", contact: "317699010", image: branchSample },
      { name: "சிலாபம்", location: "39, கொழும்பு வீதி, சிலாபம்", contact: "327699015", image: branchSample },
      { name: "உடப்புவ", location: "இலக்கம் 75, பிரிவு இலக்கம் 2, உடப்புவ", contact: "327699032", image: branchSample },
      { name: "புத்தளம்", location: "இல.61, குருநாகல் வீதி, புத்தளம்", contact: "327699010", image: branchSample },
      { name: "கல்பிட்டி", location: "இல.120, புத்தளம் வீதி, தெற்கு, கல்பிட்டி.", contact: "327699020", image: branchSample }
    ]
},
uva: {
    title: "ஊவா மாகாணம்",
    branches: [
      { name: "மொனராகலை", location: "இல.141,1வது லேன், வெல்லவாய வீதி, மொனராகலை.", contact: "557699021", image: branchSample },
      { name: "மஹியங்கனை", location: "எண் 23, புதிய நகரம், மஹியங்கனை.", contact: "557699030", image: branchSample },
      { name: "பதுளை", location: "இல.49, கொக்கோவத்தை வீதி, பதுளை.", contact: "055 769 9011", image: branchSample },
      { name: "ஹப்புத்தளை", location: "இல: 27, பிரதான வீதி, ஹப்புத்தளை", contact: "057 769 9010", image: branchSample },
      { name: "வெலிமடை", location: "இல: 51, நுவரெலியா வீதி, வெலிமடை, Welimada", contact: "057 769 9015", image: branchSample },
      { name: "பிபிலை", location: ".  இல.6, வைத்தியசாலைக்கு எதிரில், மட்டக்களப்பு வீதி, பிபிலை  ", contact: "055 769 9050", image: branchSample },
      { name: "பொரலந்த", location: "ஒலுகந்தோட்டை, பொரலந்த", contact: "057 769 9020", image: branchSample },
      { name: "கிரந்துருகோட்டே", location: "எண் 4, புதிய நகரம், கிராதுருகோட்டே.", contact: "027 769 9000", image: branchSample },
      { name: "லுனுகல", location: "இலக்கம் 156, பிரதான வீதி, லுனுகல", contact: "055 769 9060", image: branchSample }
    ]
  },
sabaragamuwa: {
    title: "சப்ரகமுவ மாகாணம்",
    branches: [
      { name: "கேகாலை", location: "இலக்கம் 245, பிரதான வீதி, கேகாலை.", contact: "035 769 9011", image: branchSample },
      { name: "ருவன்வெல்ல", location: "இலக்கம் 104. பிரதான வீதி, ருவன்வெல்ல.", contact: "036 769 9002", image: branchSample },
      { name: "பலாங்கொடை", location: "  இல.16, ரீசெட் ஹவுஸ் அப்ரோச் வீதி, பலாங்கொடை  , Balangoda  ", contact: "045 769 9000", image: branchSample },
      { name: "ரக்வானா", location: ". . எண். 29 ரக்வானா பிரதான வீதி", contact: "045 769 9011", image: branchSample },
      { name: "எஹலியகொட", location: "இல . 36 பிரதான வீதி , எஹலியகொட ", contact: "036 769 9011", image: branchSample },
      { name: "தெரணியகல", location: "இலக்கம் 78, பிரதான வீதி, தெரணியகல.", contact: "036 769 9015", image: branchSample },
      { name: "குருவிட்ட", location: "இல 71/C/1, கொழும்பு வீதி, குருவிட்ட.", contact: "045 769 9015", image: branchSample },
      { name: "கஹவத்தை", location: "எண் 31/A, ரக்வான பிரதான வீதி, கஹவத்தை.", contact: "045 769 9020", image: branchSample }
    ]
  }
},

  //Investor Relations Page Components
  bannerIR: {
    src: bannerIR,
    title: "எங்களைப் பற்றி",
    intro: "நம்பிக்கையுடன் மற்றும் பார்வையுடன் செல்வத்தை உருவாக்குவது",
    specialnote: "1970 முதல்",
    description: "“ முன்னேற்றத்திற்கான கூட்டாளியாக, நிலையான வளர்ச்சியை இயக்குகிறோம் ”"
  },
  corporateProfileIR: {
    title1: "நிறுவனத்தின் ",
    title2: "சுயவிவரம்",
    label1: "நிறுவனத்தின் பெயர்",
    field1: "ஏஷியா ஆசெட் பைனான்ஸ் பி.எல்.சி",
    label2: "நிறுவனத்தின் மதிப்பீடு",
    field2: "Fitch A+",
    label3: "சட்டப் பரிமாணம்",
    field3_1: "- 1970 செப்டம்பர் 23 ஆம் தேதி தனியார் வரையறுக்கப்பட்ட நிறுவனமாக பதிவு செய்யப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_2: "- 2006 அக்டோபர் 03 ஆம் தேதி பெயர் மாற்றப்பட்டது. (1938 51 ஆம் சட்ட ஒழுங்கின் (Cap 145) கீழ்)",
    field3_3: "- 2008 ஜனவரி 23 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் மறுபதிவு செய்யப்பட்டது.",
    field3_4: "- 2012 மார்ச் 20 ஆம் தேதி 2007 07 ஆம் நிறுவன சட்டத்தின் கீழ் பொது வரையறுக்கப்பட்ட நிறுவனமாக மாற்றப்பட்டது.",
    field3_5: "- பதிவு எண் (1982 17 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.",
    field3_6: "- புதிய பதிவு எண் (2007 7 ஆம் நிறுவன சட்டத்தின் கீழ்): PB 139 PQ.",
    label4: "நிறுவனத்தின் பதிவு எண்",
    field4: "PB 139 PQ",
    label5: "நிறுவனத்தின் சட்ட ஆலோசகர்கள்",
    field5: "ஷிராந்தி குணவர்தன அசோசியேட்ஸ், \n எண் 22/1, எலியட் பிளேஸ், கொழும்பு 08.",
    label6: "ஆட்சி குழு",
    field6_1: "செயர்மன் - V. A பிரசந்த்",
    field6_2: "சிஇஓ - ராஜிவ் ஜேம்ஸ் அபேவிக்கிரம குணவர்தன",
    field6_3: "ஜார்ஜ் முத்தூட் அலெக்சாண்டர்",
    field6_4: "குட்டிக்காட்டு ராஜப்பன் பிஜிமான்",
    field6_5: "கிரன் கோபால கிருஷ்ணா பிள்ளை",
    field6_6: "ரஜித் ஆனந்த பண்டார பச்நாயக்கே",
    field6_7: "ஜே. பி. டி. ஆர். ஜயசேகரா",
    field6_8: "ரோஷன் டி சில்வா குணசேகரா",
    field6_9: "டி. சி. டி. குமாரசிறி",
    label7: "நிறுவனத்தின் செயலாளர்",
    field7: "சலானி கோனாடுவா \nநிறுவன செயலாளர் \nஎண் 76, பார்க் தெரு, கொழும்பு 02. \nதொலைபேசி: 011 7699 074 \nமின்னஞ்சல்: companysecretary@asiaassetfinance.lk",
    label8: "நிறுவனத்தின் கணக்காய்வாளர்கள்",
    field8: "KPMG, \n 32A, சர் மொஹமட் மக்கான் மார்க்கர் மாவத்தை, \n கொழும்பு 03",
    label9: "நிறுவனத்தின் வங்கி தொடர்பாளர்கள்",
  },
  keyFinancialsIR: {
  title1: "நிதி ",
  title2: "சாவிகள்",
  card1_title: "மொத்த வருவாய்",
  card1_amount: "XX,XXX",
  card2_title: "வரி கழித்த பிறகு லாபம்",
  card2_amount: "XX,XXX",
  card3_title: "மொத்த சொத்துகள்",
  card3_amount: "XX,XXX",
  card4_title: "சொத்து திரும்பல்",
  card4_amount: "XX,XXX",
  card5_title: "ஒன்றுக்கு லாபம்",
  card5_amount: "XX,XXX",
  share_price_title: "சமீபத்திய பங்கு விலை",
  share_price_reg: "XXXXXXXXXX",
  share_price_name: "ஏஷியா ஆசெட் பைனான்ஸ் பி.எல்.சி",
  share_price_amount: "ரூ XX.XX",
  share_price_percentage: "XX,XXXX",
  share_price_type: "ரூ",
  description_line1: "ஏஷியா ஆசெட் பைனான்ஸ் பி.எல்.சி நிறுவனம் 50 வருடங்களாக ஏராளமானவர்களுக்கும் நிறுவனங்களுக்கும் நிதி ஆதரவினை வழங்கி வருகிறது. எங்களின் தங்க கடன், லீசிங், கடன் சலுகைகள், குழு தனிநபர் கடன், தனிநபர் கடன், தொழிலாளர் கடன், நிறுவன கடன், மற்றும் பொதுத் தணிப்பு போன்றவை பொருளாதாரங்களை வலுப்படுத்தியதற்காக பெருமைப்படுகிறோம்.",
  description_line2: "ஏஷியா ஆசெட் பைனான்ஸ் பி.எல்.சி என்பது முத்தூட் பைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியில் பதிவு செய்யப்பட்ட ஒரு பத்திரமாக்க நிறுவனமாகும்.",
  description_line3: "சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்தாலும், அதனை நிறைவேற்ற ஏஷியா ஆசெட் பல ஆண்டுகளாக வளர்ச்சியடைந்தது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு வாழ்க்கையின் தரத்தை உயர்த்த உதவும்.",
  description_line4: "ஏஷியா ஆசெட் பைனான்ஸ் பி.எல்.சி நிறுவனத்தின் கதை “மக்களுக்கு அதிகாரம் அளிப்பது மற்றும் வாழ்க்கையை மாற்றுவது” ஆகும்.",
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
      title: "பதிவிறக்கம்",
      section1: "ஆண்டு அறிக்கைகள்",
      intro1: "",
      section2: "நிதி அறிக்கைகள்",
      intro2: "",
      section3: "KYC ஆவணங்கள்",
      intro3: "",
      section4: "",
      intro4: "",
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
        images: [FD, FD],
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
        name: "லீசிங்",
        features: [
          { title: "விரைவான லீசிங் தேர்வுகள்", description: "வாகனங்கள், உபகரணங்கள் மற்றும் பலவற்றுக்கான லீசிங் முறை உள்ளன." },
          { title: "விரைவான செயலாக்கம்", description: "லீசிங் விண்ணப்ப செயல்முறை எளிதாகவும் விரைவாகவும்." },
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
      description1: "50 ஆண்டுகளாக பல தனிநபர்கள் மற்றும் தொழில்கள் மீது தங்கள் ஆர்வத்தைச் செலவழித்து வந்திருக்கிறோம். நியாயமான வட்டி விகிதத்தில் தங்க கடன்கள், லீசிங், அடமானக் கடன்கள், குழு தனிநபர் கடன்கள், தனிநபர் கடன்கள், தொழில்முனைவோர் கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது பொதுத் தகுப்பு எங்கள் சேவைகளை வழங்குவதன் மூலம் சமூகங்களை சுயாதீனமாக உருவாக்க நாங்கள் பெருமிதமாக இருக்கிறோம்.",
      description2: "Asia Asset Finance PLC என்பது Muthoot Finance Ltd நிறுவனத்தின் முழுமையான துணை நிறுவனம் ஆகும் மற்றும் இலங்கை மத்திய வங்கியால் பதிவு செய்யப்பட்ட முழுமையான உரிமம் பெற்றவை.",
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
      description1: "ஆசியா அசெட் ஃபைனான்ஸ் PLCயில் நாங்கள் செய்யும் விஷயங்கள் இங்கே! நாங்கள் தனிநபர்களுக்கு அவர்கள் விரும்பும் வாழ்க்கையை வாழ உதவுகிறோம், நாங்கள் வணிகங்களை அமைப்பதற்கான சாதனமாக உள்ளோம், நாங்கள் நிதி இடைவெளியை குறைக்கும் செயலில் உள்ளோம்.",
      description2: "நாங்கள் அடிக்கடி பொருளாதாரங்களை உருவாக்கும் ஆர்வமுள்ள தொழில்முனைவோரை தேடுகிறோம்! உங்களிடம் அதற்கான தகுதி இருக்கிறது என்று நீங்கள் நினைத்தால், கீழே உள்ள கிடைக்கும் நிலைகளுக்கு விண்ணப்பிக்கவும்.",
    },
    
    //Gold Loan Page Components
    goldLoanPage: {
      title: "தங்க கடன்",
      description: "பொறுப்பு என்பது நமக்கு அனைவருக்கும் வரும் ஒன்று. உங்கள் மகளின் திருமண செலவுகளைப் பற்றி கவலைப்படும் தந்தையாகவும், உங்கள் மகனுக்கு சிறந்த கல்வியை வழங்க முயற்சிக்கும் தாயாகவும், திடீர் அறுவை சிகிச்சைக்கான பணம் தேவைப்படும் துணையாகவும் இருக்கலாம். பயப்படாதீர்கள். எங்கள் தங்க கடன் சேவை உங்கள் தேவைகளை பூர்த்தி செய்ய தயார். எங்கள் கிளைகளில் வருகை தந்து நம்பகத்தன்மை உள்ள நிபுணர்களுடன் பேசுங்கள். தங்கத்தை உங்களுக்கே பாதுகாப்பான இடத்தில் வைத்திருக்க உத்தரவாதம் தருகிறோம்.",
      kfd: "/web/src/media/attachments/customerProtectionFramework/ta_key_fact_document_gl.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண & விகித பட்டியல்",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "/web/src/media/uploads/ta_charges_and_tariff.png",
    },
    
    //FD Page Components
    fdPage: {
      title: "நிலையான வைப்பு",
      description: "சிலுவை வைப்பதற்கான நேரம் எப்போதும் உகந்தது. நம் 50 ஆண்டுகளின் வரலாற்றின் மூலம், நம்பகமான சேவையுடன் உங்களைப் பாதுகாக்க நாங்கள் உங்களை இணைத்துக்கொள்கிறோம். உங்கள் தேவைகளுக்கு ஏற்ற சுலபமான பணி உத்தரவாதம்!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/ta_key_fact_document_fd.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      fdRates: "/web/src/media/uploads/ta_fd11112024.webp",
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "குத்தகை",
      description: "உங்கள் கனவு வாகனத்தை இப்போது ஓட்டுவதற்கான பயிற்சி எளிதானது! மிகவும் சாதகமான வட்டி விகிதங்களுடன் நீங்கள் வெற்றி பெறுவீர்கள். மின்னல் வேகத்தில் குறைந்த பிணக்குத்தன்மையுடன் பணி!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/ta_key_fact_document_l.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண & விகித பட்டியல்",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "/web/src/media/uploads/ta_charges_and_tariff.png",
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "அடமானம்",
      description: "பணம் உங்கள் பிரச்சனைகளைத் தீர்க்கும் வழி. உங்கள் நிதி வாழ்க்கையை மேம்படுத்தும் ஒரே வழி இது. நம்பகமான சேவையுடன் அனைத்து சூழ்நிலைகளுக்கும் ஏற்றதாக இருக்கும்!",
      kfd: "/web/src/media/attachments/customerProtectionFramework/ta_key_fact_document_m.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண & விகித பட்டியல்",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "/web/src/media/uploads/ta_charges_and_tariff.png",
    },
    
    //Forex Page Components
    forexPage: {
      title: "வெளிநாட்டு மாற்று",
      description: "50 ஆண்டுகளின் நம்பகமான வரலாற்றுடன், நாங்கள் உங்கள் நிதி பாதுகாப்பை உறுதிசெய்கிறோம். உங்களை எங்கள் முன்னணி சேவைகளுடன் இணைத்துக்கொள்ளுங்கள்!",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண & விகித பட்டியல்",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: "",
    },

    //Luckewallet Page Components
    luckewalletPage: {
      title: "Luckewallet",
      description: ["Luckewallet  இலங்கையில் முன்னணி பணம் பரிவர்த்தனை தளமாக தன்னை உறுதியாக நிலைநிறுத்தியுள்ளது. இது அதிகமான பரிவர்த்தனை அளவுக்காகவும், பரந்த வாடிக்கையாளர் அடிப்படைக்காகவும் பிரபலமானது. Luckewallet பலவகையான நிதி சேவைகளை வழங்குகிறது, அவற்றில் டிஜிட்டல் சேமிப்பு கணக்குகள், டிஜிட்டல் நிலையான வைப்புகள், மற்றும் தங்கக் கடன் வட்டி செலுத்தல் அடங்கும். பயனர்கள் தங்கள் பயன்பாட்டு மின்சாரக் கட்டணங்களைச் செலுத்தலாம் மற்றும் கிரெடிட் கார்டு பணப் பரிவர்த்தனைகளை எந்த ஒரு கிளையையும் சென்று தேவை இல்லாமல் ஏற்றுக்கொள்ளலாம். இந்த தளம், வாடிக்கையாளர்களையும் வியாபாரிகளையும் முழுமையாக இணைக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது, பாதுகாப்பான மற்றும் ஒருங்கிணைந்த அனுபவத்தை வழங்குகிறது.",
        "எங்கள் இ-சேமிப்பு கணக்கின் நீட்சியான அம்சம் இதன் மிகப் போட்டித்தன்மை கொண்ட வட்டி விகிதமாகும், இது சந்தையில் தனித்துவமானதாக இருக்கிறது. இ-சேமிப்பு கணக்கு பயனர்களுக்கு தங்கள் சேமிப்புகளில் வட்டி சம்பாதிக்கும் வசதியையும், நிதிகளை டிஜிட்டல் முறையில் நிர்வகிக்கும் சுதந்திரத்தையும் வழங்குகிறது. வாடிக்கையாளர்கள் தங்கள் டிஜிட்டல் சேமிப்பு கணக்குகளை நேரடியாக செயலியின் மூலம் திறக்கவும் நிர்வகிக்கவும் முடியும், மேலும் வழக்கமான சேமிப்பு கணக்குகளைவிட உயர்ந்த வட்டி சம்பாதிக்கவும் கூடுதல் நன்மை உள்ளது. இந்த அம்சம் பயனர்களுக்கு தங்கள் சேமிப்புகளை எளிதாக வளர்க்கும் வாய்ப்பை வழங்குகிறது, எப்போது வேண்டுமானாலும் தங்கள் நிதிகளை அணுகவும் கணக்கு நடவடிக்கைகளை கண்காணிக்கவும் அனுகுமுறையுடன்.",
        "Luckewallet  சாதாரணமாக ஒரு கட்டண தளம் அல்ல, முழுமையான சுற்றுச்சூழல் அமைப்பாக காட்சியளிக்கப்படுகிறது, நிறுவனமானது வியாபாரியர்களை பெற்றுக் கொள்ளும் கூட்டாளியாக செயல்படுகிறது. மேம்பட்ட மென்பொருள் கட்டமைப்பிற்காக சர்வதேச அளவில் பாராட்டப்பட்ட இந்த செயலி, பயனர்களுக்கு மெலிதான மற்றும் செயல்திறனான அனுபவத்தை உறுதிப்படுத்த தொடர்ந்து மேம்படுத்தப்படுகிறது. முக்கிய அம்சங்களில் எளிய வாடிக்கையாளர் சேர்க்கை, சுய பதிவேற்றம், மற்றும் மொபைல் ரீசார்ஜ்கள் மற்றும் பிற வங்கிக் கணக்குகளுடன் நேரடி பரிவர்த்தனைகளைச் செய்யும் பல்வேறு சேவைகள் அடங்கும். இ-சேமிப்பு கணக்கு மற்றும் அதனுடைய போட்டித்தன்மை வாய்ந்த வட்டி விகிதத்துடன், Luckewallet  டிஜிட்டல் பரிவர்த்தனைகளுக்கு மேல் செல்லும் ஒரு பயணத்தை வழங்குகிறது — இது பயனர்களுக்கு தங்கள் நிதி எதிர்காலத்தை உருவாக்க உதவுகிறது.",
      ],
      kfd: "/web/src/media/attachments/customerProtectionFramework/ta_key_fact_document_s.pdf",
      btn_1: "முக்கிய தகவல் ஆவணம்",
      btn_2: "கட்டண & விகித பட்டியல்",
      hotline: "தொலைபேசி சேவை",
      note: "குறிப்பு: இந்த மதிப்புகள் சுட்டுரைச் செய்யும் பொருட்டு மட்டுமே வழங்கப்பட்டுள்ளன மற்றும் அவை காலத்தின்படி மாறக்கூடும்.",
      charges_tariff: ""
    },

    //Contact Page Components
    contactsPage: {
      title1: "தொடர்பு கொள்ளுங்கள் ",
      title2: "எங்களுடன்",
      subtitle: "உங்கள் ஸ்மார்ட்போனிலிருந்து எளிதான மற்றும் பாதுகாப்பான நிதி சேவைகளை அனுபவிக்கவும்.",
      learnMoreBtn: "மேலும் அறியவும்",
      card1title: "இருப்பிடம்",
      card1Body: "எண் 76, பார்க்க் வீதி, கொழும்பு 02",
      card2title: "ஹாட்லைன்",
      card2Body: "011 71 70 712",
      card3title: "பெக்ஸ்",
      card3Body: "011 76 99 000",
      card4title: "மின்னஞ்சல்",
      card4Body: "info@asiaassetfinance.lk",
      card5title: "புகார்கள்",
      card5Body: "077 79 99 922",
    },    
    
    //Personal Profile page
    profileDetails: [
      {
        id: "1",
        name: "வி ஏ பிரசாந்த்",
        src: mrPrasanth,
        designation: "தலைவர்",
        description : ["விஏ பிரசாந்த் என்பது சில்லறை மற்றும் பெருநிறுவன வங்கி, கருவூல செயல்பாடுகள் மற்றும் தகவல் பாதுகாப்பு ஆகியவற்றில் 37 ஆண்டுகளுக்கும் மேலாக வெளிப்படும் ஒரு வணிக வங்கியாளர். முன்னதாக அவர் இந்தியன் வங்கியில் பணியாற்றினார் - இந்தியாவில் சிறப்பாக செயல்படும் பொதுத்துறை வங்கிகளில் ஒன்றாகப் போற்றப்பட்டார் - பொது மேலாளர் மற்றும் தலைமை தகவல் அதிகாரி. இந்த நேரத்தில், அவர் தகவல் தொழில்நுட்பம் மற்றும் டிஜிட்டல் வங்கிப் பொறுப்பாளராக இருந்தார். VA பிரசாந்த் இந்தியன் வங்கியின் தலைமை நிதி அதிகாரியாகவும் நியமிக்கப்பட்டார், மேலும் வங்கியின் இரண்டு முக்கிய மண்டலங்களில் மண்டல மேலாளராக பணியாற்றினார்.",
          "நிதிச் சந்தைகளில் அவருக்கு இரண்டு தசாப்தங்களுக்கும் மேலான அனுபவம் உள்ளது-மும்பையில் 1994-1998 இல் அந்நிய செலாவணி கையாளும் அறைக்கு தலைமை தாங்கினார், 2001-2005 காலத்தில் சிங்கப்பூர் கருவூலத் தலைவராகவும், 2009-2011 இல் கருவூலத்தின் பின் அலுவலகத்தின் தலைவராகவும், மற்றும் செல்வ மேலாண்மை நிர்வாகியாகவும் இருந்தார். 2009 மற்றும் 2011 க்கு இடையில் இந்தியன் வங்கி (WMS) க்கான சேவைகள்.",
          "வி.ஏ.பிரசாந்த் தற்போது ஐதராபாத்தில் உள்ள வங்கி தொழில்நுட்ப மேம்பாட்டு மற்றும் ஆராய்ச்சி நிறுவனத்துடன் (ஐடிஆர்பிடி) மூத்த கள நிபுணராக தொடர்புடையவர். அவர் ஜூன் 2020 இல் ஆசியா அசெட் ஃபைனான்ஸின் தலைவராக நியமிக்கப்பட்டார்.",
        ]
      },
      {
        id: "2",
        name: "ஜார்ஜ் முத்தூட் அலெக்சாண்டர்",
        src: mrAlexandra,
        designation: "நிர்வாகமற்ற இயக்குனர்",
        description : ["ஜார்ஜ் அலெக்சாண்டர் வட கரோலினா பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் முதுகலைப் பட்டம் பெற்றார் - கெனன் & ஃபிளாக்லர் வணிகப் பள்ளி மற்றும் கேரளா பல்கலைக்கழகத்தின் டிகேஎம் பொறியியல் கல்லூரியில் மெக்கானிக்கல் இன்ஜினியரிங் இளங்கலைப் பட்டம் பெற்றார். அவர் தற்போது கர்நாடகா மாநிலம், கோவா மற்றும் தெலுங்கானாவின் தெலுங்கானாவில் நடவடிக்கைகளை கவனித்து வரும் முத்தூட் ஃபைனான்ஸ் நிறுவனத்தின் மூத்த துணைத் தலைவராக பணிபுரிகிறார், மேலும் அமெரிக்காவில் உள்ள முத்தூட் குழுமத்தின் உலகளாவிய செயல்பாடுகளை கண்காணிப்பதற்கான கூடுதல் பொறுப்பும் அவருக்கு உள்ளது.",
          "அவர் தற்போது மற்ற குழு நிறுவனங்களான முத்தூட் இன்சூரன்ஸ் ப்ரோக்கர்ஸ் & பெல்ஸ்டார் ஃபைனான்ஸ் & இன்வெஸ்ட்மென்ட்ஸ் குழுவில் உள்ளார். முத்தூட் ஃபைனான்ஸ் என்பது தங்கக் கடன் (NBFC) நிறுவனம் மற்றும் முத்தூட் குழுமத்தின் முதன்மை நிறுவனமாகும். இது 2011 இல் பட்டியலிடப்பட்டது மற்றும் BSE & NSE இல் வர்த்தகம் செய்யப்படுகிறது. இது நாட்டின் மிகப்பெரிய தங்கக் கடன் நிறுவனம் ஆகும்.",
          "முத்தூட் ஃபைனான்ஸ் தவிர, முத்தூட் குழுமம் 16 பிரிவுகளைக் கொண்டுள்ளது, அவற்றில் சில விருந்தோம்பல், ஹெல்த் கேர், ஈக்விட்டி & கமாடிட்டி டிரேடிங், இன்சூரன்ஸ் ப்ரோக்கிங் போன்றவையாகும். குழு நான்கு தலைமுறைகள் பழமையானது மற்றும் ஜார்ஜ் அலெக்சாண்டர் நான்காவது தலைமுறையைப் பிரதிநிதித்துவப்படுத்துகிறார். ஜார்ஜ் தனது குடும்பத் தொழிலில் சேருவதற்கு முன்பு இந்தியாவில் ஐஎன்ஜி & கோடக் மஹிந்திரா வங்கியில் பணிபுரிந்தார்.",
          "அவர் 2015 இல் இந்திய தொழில்களின் கூட்டமைப்பு - யங் இந்தியன்ஸ் பெங்களூர் அத்தியாயத்தின் தலைவராக இருந்தார். அவர் தற்போது பெங்களூரு தொழில்முனைவோர் அமைப்பின் நிதித் தலைவராக உள்ளார். 2013 இல் சிட்னி மற்றும் மெல்போர்னில் நடந்த AIYD (ஆஸ்திரேலியா இந்தியா இளைஞர் உரையாடல்) க்காக இந்தியாவைப் பிரதிநிதித்துவப்படுத்தத் தேர்ந்தெடுக்கப்பட்ட பத்து இந்தியர்களில் ஜார்ஜ் ஒருவர்.",
        ]
      },
      {
        id: "3",
        name: "குட்டிக்கட்டு ராஜப்பன் பிஜிமோன்",
        src: mrBijimon,
        designation: "நிர்வாகமற்ற இயக்குனர் / தலைமை பொது மேலாளர் (முத்தூட் ஃபைனான்ஸ் லிமிடெட்)",
        description : ["திரு. கே.ஆர்.பிஜிமோன் 1996 ஆம் ஆண்டு முத்தூட் வங்கியாளர்களுடன் மேலாளராக (நிதி) தனது வாழ்க்கையைத் தொடங்கினார். தனது 21 ஆண்டுகால சேவையின் போது, ​​முத்தூட் வங்கியாளர்களை இன்றைய முத்தூட் ஃபைனான்ஸ் லிமிடெட் ஆக மாற்றியமைக்க அவர் வழிவகுத்தார். நிறுவனத்தின் தலைமை பொது மேலாளர். அவரது தலைமையின் கீழ், நிறுவனம் பன்மடங்கு வளர்ச்சியடைந்து, இன்று நாட்டிலேயே மிகப்பெரிய தங்கக் கடன் வழங்குபவராகவும், உலகிலேயே மிகப் பெரிய நிறுவனமாகவும் மாறியுள்ளது. தலைமைப் பொது மேலாளராக, பணப் பரிமாற்றப் பிரிவு, சர்வதேசப் பணம் மற்றும் அன்னியச் செலாவணி, ஏடிஎம் பிரிவு போன்ற குழுமத்தின் பல்வகைப்பட்ட வணிகத் துறைகளில் வளர்ச்சியை முன்னெடுப்பதற்கும் பொறுப்பானவர்.",
          "முத்தூட் குழுமம் இன்று அமெரிக்கா, இங்கிலாந்து, ஐக்கிய அரபு எமிரேட்ஸ், சிங்கப்பூர் மற்றும் இலங்கை போன்ற நாடுகளில் வெற்றிகரமான வணிகங்களுடன் உலகளாவிய முன்னிலையில் உள்ளது. இந்த குழு விரைவில் இத்தாலியில் தனது நடவடிக்கைகளை தொடங்க திட்டமிட்டுள்ளது. முத்தூட் குழுமத்தின் உலகளாவிய செயல்பாடுகளுக்கான தலைமை இயக்க அதிகாரியாகவும் திரு. பிஜிமோன் பொறுப்பேற்கிறார். தற்போது, ​​அவர் முத்தூட் ஃபாரெக்ஸ் லிமிடெட், முத்தூட் செக்யூரிட்டீஸ் லிமிடெட், முத்தூட் கமாடிட்டிஸ் லிமிடெட், முத்தூட் ஹோம்ஃபின் (இந்தியா) லிமிடெட், முத்தூட் ராயலெக்ஸ் சர்வீசஸ் பிரைவேட் போன்ற நிறுவனங்களிலும் இயக்குநர் பதவியை வகிக்கிறார். லிமிடெட், பெல்ஸ்டார் இன்வெஸ்ட்மென்ட் அண்ட் ஃபைனான்ஸ் பிரைவேட். லிமிடெட் (முத்தூட் ஃபினான்ஸின் துணை நிறுவனம்) மற்றும் ஏசியா அசெட் ஃபினான்ஸ் பிஎல்சி (இலங்கை).",
          "திரு. பிஜிமோன் சட்டத்தில் இளங்கலைப் பட்டம் (LLB), அறிவியலில் இளங்கலைப் பட்டம் (BSc) மற்றும் வணிக நிர்வாகத்தில் முதுகலைப் பட்டம் (MBA) ஆகியவற்றைப் பெற்றுள்ளார். அவர் இந்திய பட்டயக் கணக்காளர்கள் நிறுவனத்தின் சக உறுப்பினராகவும், இந்திய வங்கியாளர்கள் நிறுவனத்தின் (CAIIB) சான்றளிக்கப்பட்ட அசோசியேட்டாகவும் மற்றும் இலங்கை நிறுவனத்தின் சான்றளிக்கப்பட்ட மேலாண்மை கணக்காளர்களின் (FCMA) சக உறுப்பினராகவும் உள்ளார்.",
        ]
      },
      {
        id: "4",
        name: "கிரண் கோபால கிருஷ்ண பிள்ளை",
        src: mrPillai,
        designation: "நிர்வாகமற்ற இயக்குனர்",
        description : ["கிரண் ஜி தற்போது முத்தூட் ஃபைனான்ஸ் லிமிடெட் இன் உள் தணிக்கை மற்றும் ஆய்வுத் துறையின் தலைவராகச் செயல்படுகிறார். அவர் கேரளா பல்கலைக்கழகத்தில் கணிதத்தில் இளங்கலை அறிவியல் பட்டம் பெற்றார். அவர் இந்தியாவின் பட்டயக் கணக்காளர்கள் நிறுவனத்தில் பட்டயக் கணக்காளராகவும் உள்ளார். அவர் தற்போது உள் தணிக்கை மற்றும் ஆய்வுத் துறையின் தலைவராகச் செயல்படுகிறார், இதில் 1000 தணிக்கையாளர்கள் குழு உள்ளது.",
          "செயல்பாட்டு, நிதி மற்றும் ஒழுங்குமுறை இணக்கம் ஆகியவற்றில் நிபுணத்துவத்துடன் தணிக்கை செய்வதில் 13 ஆண்டுகளுக்கும் மேலான சிறப்பு அனுபவம் பெற்றவர். இடர் மேலாண்மை நுட்பங்களில் நிபுணத்துவம் மற்றும் ஆலோசனைகளை வழங்குவது உட்பட, தணிக்கைக் குழுவிற்கு உள் கட்டுப்பாடு குறித்த மூலோபாய அறிக்கையிடலில் அவர் நிரூபிக்கப்பட்ட சாதனை மற்றும் அனுபவத்தைக் கொண்டுள்ளார்.",
          "மேலும், இடர், சட்டம், கண்காணிப்பு மற்றும் விஜிலென்ஸ் துறைகளுடன் பணியை ஒருங்கிணைப்பதில் அனுபவம் பெற்றவர். நிறுவனம் முழுவதும் செயல்பாடுகளை வடிவமைத்தல், செயல்படுத்துதல் மற்றும் கண்காணித்தல் ஆகியவற்றில் மற்ற துறைகளுக்கு வள நபராக செயல்பட அவர் தனது நிபுணத்துவத்தை வழங்குகிறார்.",
        ]
      },
      {
        id: "5",
        name: "ராஜித ஆனந்த பண்டார பஸ்நாயக்க",
        src: mrRajitha,
        designation: "சுயாதீன நிர்வாகமற்ற இயக்குனர்",
        description : ["ராஜித ICT இல் 30+ வருட விரிவான அனுபவத்தைக் கொண்டுள்ளார், அதில் 19 வருடங்கள் மூத்த நிர்வாகத்தில் பணிபுரியும் முக்கியமான ICT திட்டங்களுக்கு தலைமை தாங்கி, நிதிச் சேவைகள், விருந்தோம்பல், FMCG/ நுகர்வோர் பொருட்கள் போன்ற பல்வேறு துறைகளின் வணிக உத்திகளை செயல்படுத்துகிறது. சில்லறை விற்பனை / விநியோகம் மற்றும் உணவு மற்றும் குளிர்பானம் உற்பத்தி / விநியோகம் மற்றும் தகவல் தொழில்நுட்ப தீர்வு விநியோகம். அவர் தற்போது ஒரு சுயாதீன தகவல் தொழில்நுட்ப நிபுணராக இலங்கையில் உள்ள முன்னணி தொழில்முறை சேவை நிறுவனங்களின் வாடிக்கையாளர்களுக்கு வெளி ஆலோசகராக பணியாற்றுகிறார்.",
          "அவர் தனது பணியின் போது, ​​ஏசியா கேபிடல் குழுமத்தின் ICT செயல்பாடுகளை மூலதனச் சந்தைகள், வங்கியல்லாத நிதி, காப்பீடு, டிஜிட்டல் பொழுதுபோக்கு, தேநீர் பேக்கேஜிங், ஓய்வு, தொழில்நுட்பம் ஆகியவற்றில் 3 ஆண்டுகளாக குழுமத்தின் தலைமை தகவல் அதிகாரியாக, தி லயன் ப்ரூவரி சிலோன் ஆகிய துறைகளில் முன்னணியில் உள்ளார். லிமிடெட் (4 ஆண்டுகள் ஐடி தலைவராக), ரிச்சர்ட் பீரிஸ் டிஸ்ட்ரிபியூட்டர்ஸ் லிமிடெட் இன் தகவல் அமைப்புகளின் மேலாளராக 5 ஆண்டுகள் மற்றும் இந்த நிறுவனங்களின் மூலோபாய தலைமைக் குழுக்களின் முக்கிய உறுப்பினராக. மேலும், முக்கியமான தனியார் மற்றும் பொதுத்துறை திட்டங்களுக்கான வணிக ஆலோசனை மற்றும் ICT ஆலோசனை தீர்வுகளை வழங்கும் Ernst & Young Sri Lanka இன் பணிப்பாளர் ஆலோசனை சேவையாக ஆலோசனை சேவைகளில் 5 வருடங்களுக்கும் மேலான அனுபவத்தை கொண்டு வருகிறார்.",
          "ராஜித இங்கிலாந்தின் கீலே பல்கலைக்கழகத்தில் சிறப்புடன் முதுகலைப் பட்டமும், கொழும்பு பல்கலைக்கழகத்தில் சிறப்புடன் வணிக நிர்வாகத்தில் நிறைவேற்று டிப்ளோமாவும் மற்றும் பிரிட்டிஷ் மற்றும் அவுஸ்திரேலியாவின் தொழில்முறை தகவல் தொழில்நுட்பத் தகைமைகளும் பெற்றுள்ளார்."
        ]
      },
      {
        id: "6",
        name: "ஜேபிடிஆர் ஜெயசேகர",
        src: mrJayasekara,
        designation: "சுயாதீன நிர்வாகமற்ற இயக்குனர்",
        description : ["திரு தனசிறி ரூபகுமார ஜயசேகர இரண்டாம் தர உயர் பிரிவுடன் பொருளாதாரத்தில் BA (சிறப்பு) பட்டம் பெற்றுள்ளார். அவர் வரிவிதிப்பு, தகவல் தொழில்நுட்பம் மற்றும் வங்கி மற்றும் நிதி ஆகியவற்றில் 33 ஆண்டுகளுக்கும் மேலான முற்போக்கான அனுபவம் பெற்றவர். அவர் 1984 இல் உள்நாட்டு இறைவரித் திணைக்களத்தின் மதிப்பீட்டாளராகப் பதவியேற்றார் மற்றும் 1994 இல் முதுநிலை மதிப்பீட்டாளராகப் பதவி உயர்வு பெற்றார்.",
          "2015 ஜூலை முதல், வருவாய் நிர்வாக மேலாண்மை தகவல் அமைப்பின் (RAMIS) மூத்த கூடுதல் திட்ட இயக்குநராகப் பணிபுரிந்தார், இது முழு IRD வரிகளையும் தானியங்குபடுத்தும் IT திட்டமாகும். ஓய்வுபெறும் போது அவர் துறையின் துணை ஆணையர் ஜெனரலாக (தகவல் தொழில்நுட்பம்) கடமையாற்றினார். திரு ஜெயசேகர IRD இல் தனது பணியின் போது கலந்து கொண்ட பயிற்சி நிகழ்ச்சிகள் மற்றும் சர்வதேச மாநாடுகள் மூலம் கணிசமான வெளிநாட்டு வெளிப்பாட்டை பெற்றுள்ளார். ஆஸ்திரியா, இந்தியா மற்றும் இங்கிலாந்து ஆகிய நாடுகளில் வரிவிதிப்பு தொடர்பான பல்வேறு அம்சங்களில் பயிற்சித் திட்டங்களில் ஈடுபட அவருக்கு வாய்ப்பு கிடைத்தது.",
          "சீஷெல்ஸ் மற்றும் சவூதி அரேபியாவில் நடத்தப்பட்ட நிகழ்ச்சிகள் மூலம் இரட்டை வரிவிதிப்பு ஒப்பந்த பேச்சுவார்த்தைகளில் மதிப்புமிக்க வெளிப்பாட்டையும் அவர் பெற்றுள்ளார். பிரான்சில் நடைபெற்ற 'OECD Global Forum on VAT' மற்றும் 'ஆசிய நாடுகளுக்கான நான்காவது IMF - ஜப்பான் உயர்மட்ட வரி மாநாடு', ஜப்பான், டோக்கியோவில், நீலப் பொருளாதாரம் குறித்த அமைச்சர்களின் பணிமனை போன்ற மாநாடுகளின் பிரதிநிதியாக மூலோபாய அளவிலான மன்றங்களில் பங்கேற்றுள்ளார். மற்றும் சீனாவில் கடல்சார் பட்டுப்பாதை. சிங்கப்பூர் மற்றும் அங்கோலா போன்ற நாடுகளுக்குச் சென்ற RAMIS திட்டம் தொடர்பாக உரிய விடாமுயற்சி அறிக்கைகளைத் தயாரிப்பதில் மதிப்பீட்டுக் குழுவின் உறுப்பினராக இருந்தார்.",
          "திரு. ஜெயசேகர APFA (இலங்கையின் பொது நிதிக் கணக்காளர்களின் சங்கம்) இன் அங்கத்துவக் கப்பலையும், சைனா ஸ்ரீலங்கா சொசைட்டியின் செயலில் உறுப்பினராகவும் உள்ளார். அவர் பல சங்கங்கள் மற்றும் சங்கங்களில் பதவிகள் மற்றும் உறுப்பினர்களை வைத்திருக்கும் சமூக சேவகர் ஆவார்.",
        ]
      },
      {
        id: "7",
        name: "ටී.සී.ඩී.කුමාරසිරි",
        src: mrKumarasiri,
        designation: "ස්වාධීන විධායක නොවන අධ්‍යක්ෂ",
        description : ["චමින්ද කුමාරසිරි මහතා ජ්‍යෙෂ්ඨ වරලත් ගණකාධිකාරීවරයෙක්, කළමනාකරණ උපදේශකයෙක්, ප්‍රධාන කථිකයෙක්, ව්‍යාපාර උපදේශකයෙක් සහ ඔප්පු කළ වාර්තාවක් ඇති ආයතනික පුහුණුකරුවෙක් වන අතර  දේශීය ආයතන සහ බහුජාතික සමාගම්වල ජ්‍යෙෂ්ඨ නායකත්ව තනතුරු දරයි.",
          "ඔහු ආසියා පැසිෆික් මුදල් හා ව්‍යවසායකත්ව සංවර්ධන ආයතනයේ නිර්මාතෘ/සභාපති, මානව ප්‍රාග්ධන හවුල්කරුගේ නිර්මාතෘ/ප්‍රධාන විධායක නිලධාරී, HCP උපදේශන (Pvt.) හි සභාපති/ප්‍රධාන උපදේශක වේ ලිමිටඩ්. ඔහු Sanasa Development Bank PLC හි ස්වාධීන විධායක නොවන අධ්‍යක්ෂවරයෙකු ලෙසත්, පුද්ගලික අංශයේ සහ රාජ්‍ය අංශයේ ප්‍රමුඛ පෙළේ සංවිධාන කිහිපයක උපදේශකයෙකු ලෙසත් සේවය කරයි. ඔහු සමස්ත දකුණු ආසියාවේ එකම නියෝජිතයා ලෙස ගිණුම්කරණ අධ්‍යාපනය පිළිබඳ ජාත්‍යන්තර මණ්ඩලයේ (IPAE) ද සේවය කරයි. ඔහු අඛණ්ඩව වාර දෙකක් ශ්‍රී ලංකා CA හි පාලක මණ්ඩලයේ සේවය කර ඇති අතර දැනට ACCA ශ්‍රී ලංකා සාමාජික ජාල මණ්ඩලයේ උප සභාපති ලෙස කටයුතු කරයි.",
          "කුමාරසිරි මහතාට සම්මාන සහ පදක්කම් රාශියක් සහිත වෘත්තීය සහ අධ්‍යයන සුදුසුකම් රාශියක් ඇත. ඔහු ශ්‍රී ලංකාවේ වරලත් ගණකාධිකාරී ආයතනය, වරලත් සහතිකලත් ගණකාධිකාරීවරුන්ගේ සංගමය – UK, ශ්‍රී ලංකාවේ ගිණුම්කරණ කාර්මික ශිල්පීන්ගේ සංගමය සහ ශ්‍රී ලංකාවේ සහතික කළ කළමනාකරණ ගණකාධිකාරී ආයතනයේ සාමාජික සාමාජිකයෙකි. ඔහු B.Sc. ශ්‍රී ජයවර්ධනපුර විශ්වවිද්‍යාලයෙන් පළමු පන්තියේ ගෞරව සහිත ගණකාධිකාරී (විශේෂ) උපාධිය සහ කොළඹ විශ්වවිද්‍යාලයෙන් මූල්‍ය පිළිබඳ MBA උපාධියක් ලබා ඇත. ප්‍රමුඛ පෙළේ ආයතනික පුහුණුකරුවෙකු ලෙස ඔහු ශ්‍රී ලංකාවේ සහ විදේශයන්හි අසංඛ්‍යාත පුද්ගලයින්ට ගැඹුරින් ආස්වාදයක් ලබා දී ඇත. ව්‍යවසායක පරිසර පද්ධතියේ ප්‍රධාන චරිතයක් ලෙස, Chaaminda විවිධ පොදු සංසද, ජාතික රූපවාහිනී/ගුවන්විදුලි නාලිකා සහ ප්‍රමුඛ YouTube නාලිකා හරහා නිතර ප්‍රදර්ශනය කෙරේ. ඔහු ව්‍යාපාරික සංසදවල සහ ව්‍යවසායකත්වයට අදාළ සිදුවීම්වල ආරාධිත කථිකයෙකු සහ පැනලිස්ට්වරයෙකු ලෙස සොයනු ලැබේ.",
          "ගණකාධිකාරී වෘත්තිය සහ එහි වටිනාකම් ප්‍රවර්ධනය කිරීම සඳහා ඔහුගේ සුවිශේෂී කැපවීම සහ කැපවීම වෙනුවෙන් ඔහුට ACCA වසරේ ජාතික අධිනීතිඥ සම්මානය - 2022 පිරිනමා ඇත.",
        ]
      },
      {
        id: "8",
        name: "ரோஷன் டி சில்வா குணசேகர",
        src: mrRoshan,
        designation: "நிர்வாக இயக்குனர் / தலைமை இயக்க அதிகாரி",
        description : ["1994 இல் வணிக குத்தகை நிறுவனத்தில் பணிவான கடன் அதிகாரியாக தனது பணியைத் தொடங்கிய திரு. குணசேகரா நிதித்துறையில் 25 வருட பணி அனுபவம் பெற்றவர். ஏப்ரல் 2010 இல், அவர் ஆசியா அசெட் குடும்பத்தில் ஒரு பொது மேலாளராக சேர்ந்தார், இப்போது அவர் கிளை நெட்வொர்க் மற்றும் கிளைகளின் ஒட்டுமொத்த செயல்பாடுகளையும், சந்தைப்படுத்தல், கடன், நிர்வாகங்கள் மற்றும் மீட்பு ஆகியவற்றைக் கவனிக்காமல் தலைமை நிர்வாக அதிகாரி என்ற பட்டத்தை வகிக்கிறார்.",
          "தயாரிப்பு மற்றும் வணிக மேம்பாடு, மூலோபாய திட்டமிடல் மற்றும் செயல்படுத்துதல் ஆகியவற்றிற்கும் அவர் பொறுப்பு. அவர் ஸ்ரீ ஜெயவர்த்தனபுரா பல்கலைக்கழகத்தில் பட்டம் பெற்றார், கொழும்பு பல்கலைக்கழகத்தில் எம்பிஏ பட்டம் பெற்றார், சிஐஎம்ஏ-வில் பகுதி தகுதி பெற்றவர் மற்றும் வெளிநாட்டு தொழில்நுட்ப உதவித்தொகையின் (ஏஓடிஎஸ்)-ஜப்பான் உறுப்பினர். அவர் இலங்கை - கொழும்பு பல்கலைக்கழகத்தில் நிதிச் சேவைகள் சந்தைப்படுத்தல் விரிவுரையாளராக (வருகை) இருந்தார்.",
        ]
      },
      {
        id: "9",
        name: "ராஜீவ் ஜேம்ஸ் அபேவிக்ரம குணவர்தன",
        src: mrRajiv,
        designation: "இயக்குனர்/தலைமை நிர்வாக அதிகாரி",
        description : ["திரு ராஜீவ் குணவர்தனா, ஆசியா அசெட் ஃபைனான்ஸ் பிஎல்சியின் தலைமை நிர்வாக அதிகாரி / இயக்குநர் டிசம்பர் 2009 இல் வாரியத்திற்கு நியமிக்கப்பட்டார் அவரது பகுப்பாய்வு மனம் மற்றும் கவர்ச்சியான இருப்புக்காக.",
          "ஆசியா அசெட் ஃபைனான்ஸின் கட்டுப்பாட்டை எடுப்பதற்கு முன், அவர் ஆசியா கேபிடல் பிஎல்சியில் மூத்த முதலீட்டு ஆய்வாளர் என்ற முறையில் பணியாற்றினார் மற்றும் ஒரு கட்டத்தில் ஆஸ்திரேலிய வணிக மற்றும் தொழில்நுட்பக் கல்லூரியில் கணக்கியலில் விரிவுரையாற்றினார்.",
          "அவர் யுனைடெட் கிங்டமிலிருந்து வணிகம் மற்றும் தகவல் அமைப்புகளில் இளங்கலை அறிவியல் மற்றும் ஆஸ்திரேலியாவின் மோனாஷ் பல்கலைக்கழகத்தில் தொழில்முறை கணக்கியலில் முதுகலைப் பட்டம் பெற்றார்.",
        ]
      },
      {
        id: "10",
        name: "ரோஷன் டி சில்வா குணசேகர",
        src: mrRoshan,
        designation: "நிர்வாக இயக்குனர் / தலைமை இயக்க அதிகாரி",
        description : ["1994 இல் வணிக குத்தகை நிறுவனத்தில் பணிவான கடன் அதிகாரியாக தனது பணியைத் தொடங்கிய திரு. குணசேகரா நிதித்துறையில் 25 வருட பணி அனுபவம் பெற்றவர். ஏப்ரல் 2010 இல், அவர் ஆசியா அசெட் குடும்பத்தில் ஒரு பொது மேலாளராக சேர்ந்தார், இப்போது அவர் கிளை நெட்வொர்க் மற்றும் கிளைகளின் ஒட்டுமொத்த செயல்பாடுகளையும், சந்தைப்படுத்தல், கடன், நிர்வாகங்கள் மற்றும் மீட்பு ஆகியவற்றைக் கவனிக்காமல் தலைமை நிர்வாக அதிகாரி என்ற பட்டத்தை வகிக்கிறார்.",
          "தயாரிப்பு மற்றும் வணிக மேம்பாடு, மூலோபாய திட்டமிடல் மற்றும் செயல்படுத்துதல் ஆகியவற்றிற்கும் அவர் பொறுப்பு. அவர் ஸ்ரீ ஜெயவர்த்தனபுரா பல்கலைக்கழகத்தில் பட்டம் பெற்றார், கொழும்பு பல்கலைக்கழகத்தில் எம்பிஏ பட்டம் பெற்றார், சிஐஎம்ஏ-வில் பகுதி தகுதி பெற்றவர் மற்றும் வெளிநாட்டு தொழில்நுட்ப உதவித்தொகையின் (ஏஓடிஎஸ்)-ஜப்பான் உறுப்பினர். அவர் இலங்கை - கொழும்பு பல்கலைக்கழகத்தில் நிதிச் சேவைகள் சந்தைப்படுத்தல் விரிவுரையாளராக (வருகை) இருந்தார்.",
        ]
      },
      {
        id: "11",
        name: "மு. திருநீலகண்டன்",
        src: mrThiru,
        designation: "பொது மேலாளர்",
        description : ["தற்போது, ​​அவர் கடன் துறை, கிளைகள் மற்றும் FD செயல்பாடுகளை கவனிக்கவில்லை. திருநீலகண்டன் ஒரு தனியார் வங்கியில் பணிபுரிந்தபோது, ​​லண்டன் இன்ஸ்டிடியூட் ஆஃப் பேங்கர்ஸ் மற்றும் இன்ஸ்டிடியூட் ஆப் காஸ்ட் அண்ட் மேனேஜ்மென்ட் அக்கவுண்டன்ட்ஸ் லண்டனில் படித்தார்.",

        ]
      },
      {
        id: "12",
        name: "மகேஷ் குமார",
        src: mrMahesh,
        designation: "துணை பொது மேலாளர் - கடன்",
        description : ["திரு. மகேஷ் குமார கொழும்பு பல்கலைக்கழகத்தில் BBA (கணக்கியல்) பட்டம் பெற்றவர். 2009 ஆம் ஆண்டு ஆசியா அசெட்டில் சேர்வதற்கு முன்பு திரு. குமார பல நிதி நிறுவனங்களின் மூத்த நிர்வாகத்தில் பணிபுரிந்து பரந்த தொழில்துறை அனுபவத்தைப் பெற்றார். 1999 ஆம் ஆண்டு உதவி கணக்காளராக தொழில்துறையில் நுழைந்ததை அவர் அன்புடன் நினைவு கூர்ந்தார். தற்போது, ​​இந்த மனிதர் உதவி பொது மேலாளர் - கிரெடிட் பதவியை வகிக்கிறார்.",

        ]
      },
      {
        id: "13",
        name: "ஜயந்த வீரபுல்லிகே",
        src: mrJayantha,
        designation: "உதவி பொது மேலாளர் - சந்தைப்படுத்தல்",
        description : ["தற்போது, ​​திரு. வீரபுள்ளிகே, ஆசிய அசெட் ஃபைனான்ஸ் நிறுவனத்தின் AGM - மார்க்கெட்டிங் (3 ஆண்டுகளுக்குப் பிறகு, மூத்த மேலாளர்- கடன் வழங்குதல்) ஆக பணியாற்றுகிறார்.",
          "வணிக நிர்வாகத்தில் B.Com (சிறப்பு) பட்டமும், கொழும்பு பல்கலைக்கழகத்தில் MBA பட்டமும் பெற்றவர். மார்க்கெட்டிங், கிரெடிட் & அக்கவுண்ட்ஸ் ஆகியவற்றில் 17 ஆண்டுகளுக்கும் மேலான பணி அனுபவத்தை அவர் கணக்கிடுகிறார், அதில் 14 வங்கி மற்றும் நிதித் துறையில் செலவிடப்பட்டது.",
        ]
      },
      {
        id: "14",
        name: "சமிரா வெவெல்தெனிய",
        src: mrSameera,
        designation: "உதவி பொது மேலாளர் - நிலையான வைப்பு",
        description : ["திரு. சமிர வெவெல்தெனிய ஆசியா அசெட்டில் 2006 ஆம் ஆண்டு ஜூன் மாதம் அதன் நீர்கொழும்பு கிளை முகாமையாளராக இணைந்தார். இன்று, அவர் உதவி பொது மேலாளர்- நிலையான வைப்புத்தொகை, நிறுவனத்தின் சந்தைப்படுத்தல் நடவடிக்கைகள் மற்றும் கிளை வளர்ச்சிக்கு பங்களிப்பு செய்கிறார். திரு.வெவெல்தெனியவின் சிறந்த சந்தைப்படுத்தல் திறன் அவருக்கு தொழில்துறை முழுவதும் நற்பெயரைப் பெற்றுத்தந்தது.",
          "செலிங்கோ டெவலப்மென்ட் வங்கியில் பணிபுரியும் போது - ஏசியா அசெட் மெனியில் சேர்வதற்கு முன்னர் - சந்தைப்படுத்தல் விருதை சமிரா வெவெல்தெனிய பொறித்திருந்தார். திரு.வெவெல்தெனியா இங்கிலாந்தில் உள்ள பக்கிங்ஹாம்ஷயர் நியூ யுனிவர்சிட்டியில் MBA பட்டம் பெற்றவர் மற்றும் ஆசிய சந்தைப்படுத்தல் கூட்டமைப்பால் (AMF) சான்றளிக்கப்பட்ட நிபுணத்துவ சந்தைப்படுத்துபவர்-ஆசியா (CPM - ஆசியா) முதுகலை தொழில்முறை அந்தஸ்தைப் பெற்றார்.",
          "அவர் சான்றளிக்கப்பட்ட முகாமைத்துவ கணக்காளர்கள்- ஆஸ்திரேலியாவின் (AMA-Australia), இலங்கை சந்தைப்படுத்தல் நிறுவகத்தின் (SLIM) சான்றளிக்கப்பட்ட உறுப்பினர், இலங்கை சந்தைப்படுத்தல் நிறுவனத்தில் சந்தைப்படுத்துதலுக்கான ஆரம்ப சான்றிதழைப் பெற்றுள்ளார் மற்றும் ஓரளவு தகுதி பெற்றவர். பட்டய சந்தைப்படுத்தல் நிறுவனம் (CIM-UK).",
        ]
      },
      {
        id: "15",
        name: "கீதிகா எல்வலகே",
        src: msGeethika,
        designation: "துணை பொது மேலாளர் - நிதி",
        description : ["திருமதி கீதிகா எல்வலகே அவர்கள் மார்ச் 2017 இல் நிறுவனத்தின் AGM நிதியாக நியமிக்கப்பட்டார். பல முன்னணி நிதி நிறுவனங்களில் பணியாற்றிய அவர் நிதிச் சேவைத் துறையில் 8 ஆண்டுகளுக்கும் மேலாக மாறுபட்ட வெளிப்பாட்டைக் கொண்டுள்ளார். அவர் இலங்கை பட்டயக் கணக்காளர்கள் நிறுவனத்தின் சக உறுப்பினராவார்.",
          "கூடுதலாக, BDO பார்ட்னர்ஸ் நிறுவனத்தில் பணிபுரிந்த தணிக்கை துறையில் அவருக்கு மூன்று வருட அனுபவம் உள்ளது. மேலும், ஸ்ரீ ஜயவர்தனபுர பல்கலைக்கழகத்தில் வணிக நிர்வாகத்தில் முதுகலைப் பட்டம் பெற்றுள்ளார்.",
        ]
      },
      {
        id: "16",
        name: "சஜித் அதபத்து",
        src: mrSajith,
        designation: "துணை பொது மேலாளர் - தயாரிப்பு மேம்பாடு",
        description : ["திரு. சஜித் அதபத்து ஏப்ரல் 2010 இல் ஏசியா அசெட் ஃபைனான்ஸில் சேர்ந்தார். ஆசியா அசெட் ஃபைனான்ஸில் திரு. அதபத்து கடன், மீட்பு மற்றும் நிர்வாகம் மற்றும் செயல்பாட்டுத் துறைகளில் பணியாற்றியுள்ளார்.",
          "ஆசியா அசெட் ஃபைனான்ஸ் நிறுவனத்தில் பணிபுரிவதற்கு முன்பு, அவர் UK நிதிச் சேவைத் துறையில் பணியாற்றினார், அங்கு அவர் சமூகத்தில் வங்கி அல்லாத மக்களிடையே நிதி உள்ளடக்கத்தை மேம்படுத்துவதற்கான திட்டங்களில் ஈடுபட்டார். இங்கிலாந்தின் கீலே பல்கலைக்கழகத்தில் இளங்கலைப் பட்டம் பெற்றவர்.",
        ]
      },
      {
        id: "17",
        name: "இந்தித ஜயதிலக",
        src: mrInditha,
        designation: "உதவி பொது மேலாளர் - தகவல் தொழில்நுட்பம்",
        description : ["திரு. இந்தித ஜயதிலக்க ஆசியா அசெட் ஃபினான்ஸ் பிஎல்சியில் அனைத்து தகவல் தொழில்நுட்பம் தொடர்பான பணிகளுக்கும் தலைசிறந்த தீர்வு வழங்குநராக உள்ளார். வங்கி மற்றும் நிதி தீர்வு மேம்பாடு மற்றும் செயல்படுத்தல் ஆகியவற்றில் 12 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்டவர். அவர் டப்ளின் பல்கலைக்கழக கல்லூரியில் MIS இல் BSc பெற்றார்.",
          "அவரது தொழில் வாழ்க்கையில், அவர் பல்வேறு துறைகளில் இருந்து தனது அனுபவத்தைப் பெற்றார், இறுதியில் மிஷன்-கிரிட்டிகல் மென்பொருள் மற்றும் உள்கட்டமைப்பு தீர்வுகளை வழங்குவதன் மூலம் நிதித்துறையில் நிபுணத்துவம் பெற்றார். தற்போது, ​​தகவல் தொழில்நுட்பத் துறையை அவர் ஐடி தொடர்பான உள்கட்டமைப்பு, மென்பொருள் மற்றும் பாதுகாப்பு சேவைகளை நிரூபிப்பதன் மூலம் மேற்பார்வையிடுகிறார்.",
        ]
      },
      {
        id: "18",
        name: "பிரவீன் பீரிஸ்",
        src: mrPraveen,
        designation: "துணை பொது மேலாளர் - கருவூலம்",
        description : ["திரு.பிரவீன் பீரிஸ் ஜனவரி 2014 இல் Asia Asset Finance PLC இல் இணைந்தார் மற்றும் 16 வருடங்களுக்கும் மேலாக நிதி மற்றும் கருவூல அனுபவத்தைக் கொண்டுள்ளார். 2004 ஆம் ஆண்டு குளோபல் ஆடிட் நிறுவனத்தில் தனது வாழ்க்கையைத் தொடங்கிய அவர், 2008 ஆம் ஆண்டில் வங்கி அல்லாத நிதித் துறையில் சேர்ந்தார்.",
          "ஏசியா அசெட் ஃபைனான்ஸ் பிஎல்சியில் சேர்வதற்கு முன்பு, பட்டியலிடப்பட்ட நிதி நிறுவனத்தில் கருவூலத்தின் மேலாளராகப் பணியாற்றினார். மூலோபாய இடர் மேலாண்மை, சொத்து பொறுப்பு மேலாண்மை மற்றும் பண மேலாண்மை உள்ளிட்ட கருவூல மேலாண்மையில் நிபுணத்துவம் பெற்றவர். அவர் செயல்பாட்டு நிர்வாகத்தில் திறமையானவர் மற்றும் அதிக மதிப்புள்ள திட்டங்களுக்கு நிதியளிக்கும் திறனைக் கொண்டவர். திரு. பீரிஸ் UK, வேல்ஸ் பல்கலைக்கழகத்தில் MBA பட்டம் பெற்றவர் மற்றும் UK, பட்டய மேலாண்மைக் கணக்காளர் நிறுவனத்தில் இறுதிப் போட்டியாளராக உள்ளார்.",
        ]
      },
    ],

    },
  },
  // Additional language data omitted for brevity
};

export default resources;
