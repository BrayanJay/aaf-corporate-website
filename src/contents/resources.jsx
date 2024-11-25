import banner1 from '../assets/bannerimg1.svg';
import banner2 from '../assets/bannerimg2.svg';
import banner3 from '../assets/bannerimg3.svg';
import bannerAbout from '../assets/bannerimg1.svg';
import bannerIR from '../assets/bannerimg1.svg';
import FixedDeposits from '../assets/productsoverview/fd.jpg';
import { faUsers, faBriefcase, faBuilding, faClock } from '@fortawesome/free-solid-svg-icons'; // Import suitable icons

import mrAlexandra from '../assets/bod/gm.svg';
import mrBijimon from '../assets/bod/kr.svg';
import mrPillai from '../assets/bod/kgk.svg';
import mrRajitha from '../assets/bod/rab.svg';
import mrJayasekara from '../assets/bod/jpdr.svg';
import mrRoshan from '../assets/bod/rds.svg';
import mrKumarasiri from '../assets/bod/tcd.svg';
import mrRajiv from '../assets/bod/rja.svg';
import mrThiru from '../assets/bod/gm.svg';
import mrMahesh from '../assets/bod/gm.svg';
import mrJayantha from '../assets/bod/gm.svg';
import mrSameera from '../assets/bod/gm.svg';
import msGeethika from '../assets/bod/gm.svg';
import mrSajith from '../assets/bod/gm.svg';
import mrInditha from '../assets/bod/gm.svg';
import mrPraveen from '../assets/bod/gm.svg';

import FD from '../assets/products/fd.svg';


// Translation resources
const resources = {
  en: {
    translation: {
      //Navbar component
      navbar: {
        home: "Home",
        about: "About",
        about_dropdown0: "Overview",
        about_dropdown1: "Mission, Vision & Goal",
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
        products_dropdown7: "Luckewallet - Digital Wallet",
        investor_relations: "Investor Relations",
        investor_relations_dropdown1: "Corporate Profile",
        investor_relations_dropdown2: "Financial Keys",
        careers: "Careers",
        downloads: "Downloads"
      },


      //Footer component
      footerListItems: [
        { title: "About", list: ["Overview", "Board of Directors", "Corporate Management", "Branch Network"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/about/#branches" ] },
        { title: "Products", list: ["Gold Loans", "Fixed Deposits", "Leasing", "Mortgage", "Foreign Exchange ", "E - Savings"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/products/#luckewallet"] },
        { title: "Investor Relations", list: ["Corporate Profile", "Key Financials"], links: ["/ir", "/ir/#financial-keys"] },
        { title: "Other Links", list: ["Careers", "Contact Us", "Downloads"], links: ["/careers", "/contacts", "/downloads"] },
      ],

      footerText: {
        subs_title1: "Bringing Financial Solutions Closer to You",
        subs_title2: "Subscribe & Get Latest Updates",
        subs_title3: "From Us",
        subs_message: "Subscribe to receive our offers and updates directly in your inbox.",
        subs_field: "Enter your email",
        subs_btn: "Submit",
        intro: "Asia Asset Finance PLC, incorporated on 25th November 1981, is rated ICRA A+ Stable Outlook and is licensed by the Monetary Board of the Central Bank of Sri Lanka.",
        address: "No: 76, Park Street, Colombo 02, Sri Lanka",
      },


      //Landing Page Components
      carouselLandingPage: [
        {
          src: banner1,
          title: "Innovative Solutions for Your Financial Future",
          intro: "Empowering Your Financial Future",
          description:
            "At Asia Asset Finance, we believe in the power of innovation to drive financial success. Our commitment to providing tailored financial solutions has positioned us as a leader in the Sri Lankan finance industry. Whether you're looking to invest, save, or finance your next big project, we're here to support your journey with trust and transparency.",
        },
        {
          src: banner2,
          title: "Where Dreams Meet Financial Solutions",
          intro: "Innovating Finance, Inspiring Growth",
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
        description: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
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
      feature3_title: "Easy Account Management",
      feature3_description: "View and manage all your accounts effortlessly in one place.",
      feature4_title: "Real-time Notifications",
      feature4_description: "Stay updated with instant alerts on account activities and offers.",
  },
  productsOverviewLandingPage: [
    { title: "Fixed Deposits", image: FixedDeposits, description: "Secure your savings with fixed returns." },
  { title: "Gold Loan", image: "image2.jpg", description: "Grow your wealth with flexible savings." },
  { title: "Mortgage", image: "image3.jpg", description: "Affordable loans for your every need." },
  { title: "Leasing", image: "image4.jpg", description: "Convenient spending with low-interest rates." },
  { title: "Saving", image: "image5.jpg", description: "Comprehensive protection for peace of mind." },
  { title: "Foreign Exchange", image: "image6.jpg", description: "Maximize your returns with diverse options." },
],
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
  description2: "90+ branches ",
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
  title: "Get in Touch with Us Today",
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
  button2: "Submit"
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
    { stat: "50,000+", text: "Customers", icon: faUsers },
    { stat: "54+", text: "Years of Excellence", icon: faClock },
    { stat: "1000+", text: "Employees", icon: faBriefcase },
    { stat: "100+", text: "Branches", icon: faBuilding },
  ],
  overviewAbout: {
    title: "Overview",
    description: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies. Asia Asset Finance PLC is a fully owned subsidiary of Muthoot Finance Ltd and a fully licensed, deposit-taking institution registered with the Central Bank of Sri Lanka. Society’s financial needs are ever growing and Asia Asset grew over the years, in a simple quest to cater to these needs. Our efforts have always been to aid our customers to achieve growth in the way they live and in the way they do business. The story of Asia Asset Finance PLC is one of “Empowering People and Transforming Lives”."
},
missionVisionGoal: {
  mission: {
category: "mission",
    title: "Towards the Customers",
    description: "The solutions we provide for our customers' financial needs would be unconventional, innovative, and relevant for their needs to improve their quality of life whilst maintaining superior levels of customer service which would go well beyond their expectations."
  },
  vision: {
category: "vision",
    title: "Towards the Shareholders",
    description: "Build shareholder value and provide substantial shareholder returns through relentlessly improving our performance and operations with sustainable effective strategies."
  },
  goal: {
category: "goal",
    title: "Towards our Family of Employees",
    description: "A Company that fosters and harnesses equality amongst employees along with personnel development and to create the perfect work-life balance in the organization."
  }
},
  bodProfilesAbout: [
    { imgSrc: mrAlexandra, name: 'G. M. Alexander', title: 'Non - Executive Director' },
    { imgSrc: mrBijimon, name: 'K. R. Bijimon', title: 'Non - Executive Director / Chief General Manager - Muthoot Finance Ltd' },
    { imgSrc: mrPillai, name: 'K. G. K. Pillai', title: 'Non - Executive Director' },
    { imgSrc: mrRajitha, name: 'R. A. B. Basnayake', title: 'Independent Non - Executive Director' },
    { imgSrc: mrJayasekara, name: 'J. P. D. R. Jayasekara', title: 'Independent Non - Executive Director' },
    { imgSrc: mrRoshan, name: 'R. D. S. Gunasekara', title: 'Executive Director / Chief Operating Officer' },
    { imgSrc: mrKumarasiri, name: 'T. C. D. Kumarasiri', title: 'Non - Executive Director' },
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
    see_more_btn: "See more"
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
      field8: "BDO Partners \n65/2, Sir Chiththapalam A. Gardiner Mawatha \nColombo 02.",
      label9: "Bankers of the Company",
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
      description_line1: "For over 50 years we of Asia Asset Finance PLC have invested our interests in countless individuals and business’. Be it in the Gold loans we provide for the most reasonable rates, leasing, mortgage loans, Group Personal loans, Personal Loans, Business Loans, Corporate Loans, Micro Loans or accepting your public deposits we are proud to have nurtured communities to be sustainable economies.",
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
      intro1: "",
      section2: "Financial Reports",
      intro2: "",
      section3: "KYC Documents",
      intro3: "",
      section4: "",
      intro4: "",
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
        name: "Fixed Deposit",
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
    titleCareers: {
      title1: "We are ",
      title2: "Hiring",
      description1: "Here’s what we do at Asia Asset Finance! We help individuals live the lives they want to live, we empower businesses' to build their enterprises, we are active instruments in narrowing the financial divide",
      description2: "We are constantly on the lookout for passionate professionals with a desire to build economies and break societal boundaries! So if you think you have what it takes, Apply for the available positions below"
    },

    //Gold Loan Page Components
    goldLoanPage: {
      title: "Gold Loan",
      description: "Responsibility is something that comes to all of us. You can be a father, contemplating your daughter’s wedding and the expenses that come with. A mother striving to give her son the best possible education. A spouse in dire need of money for your better half’s sudden surgery. Fear not, ladies and gentlemen. Our Gold Loan Service has got you and your finances covered. Simply walk to any Asia Asset Branch and speak to one of our caring professionals and we’ll take it from there. Here are the guarantees. Instant money. Flexible interest rates, according to your situation. And at the end of it all, your gold has seen a safer space! We are, after all- a fully owned subsidiary of Muthoot Finance, legendary multinational Financial Service Provider with the LARGEST gold loan portfolio around the globe. With Asia Asset Finance PLC’s Gold Loan services, it takes no more than a few minutes for your gold to generate cash. All you need is the gold.",
    },

    //FD Page Components
    fdPage: {
      title: "Fixed Deposit",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crisis’ and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
    },

    //Leasing Page Components
    leasingPage: {
      title: "Leasing",
      description: "Don’t let anyone tell you that you should not drive your dream vehicle NOW! Any vehicle you could have possibly wanted to drive or ride is just one visit to your nearest Asia Asset Branch away. Own it. Drive it. And all the time in the world to pay for it. In this deal, you WIN! When you apply for a lease from us our trained professionals will provide you with; The finest interest rates in the market, Doorstep Service, Minimum Documentation, Zero Hassle, Flexible Repayment Terms & etc. So, lease with ease with us and drive your dream!",
    },

    //Mortgage Page Components
    mortgagePage: {
      title: "Mortgage",
      description: "Money can solve all your financial problems. We at Asia Asset invest all our efforts to up your financial lifestyle. This is the fastest way for you to raise funds. Mortgage your asset with us, generate money and in time reclaim your asset. So, stop worrying. Go. Grow. All those problems that are obstacles to you, we have already solved. We promise you an excellent, effective and efficient service. We promise you the fairest rates you can receive because we see you. Afterall, it is our mission to empower people and to transform lives!",
    },

    //Forex Page Components
    forexPage: {
      title: "Forex",
      description: "It is never a bad time to start saving and it is never a bad idea to start saving with us. With a history spanning over 50 years, Asia Asset Finance PLC has become a time-tested investment partner as a finance company registered with the Central Bank of Sri Lanka. We ensure the security of your wealth, whilst offering deposit rates which are designed to ensure consistently competitive returns. Sri Lanka has faced multiple economic crisis’ and in spite of that Asia Asset has always delivered. Our services include door-to-door service with a friendly and personalized team of professionals to cater to your individual requirements.",
    },

    //Luckewallet Page Components

    //Contacts Page Components
    contactsPage: {
      title1: "Contact ",
      title2: "Us",
      subtitle: "Experience seamless and secure financial services right from your smartphone.",
      learnMoreBtn: "Learn More",
      card1title: "Location",
      card1Body: "No 76, Park St, Colombo 02",
      card2title: "Hotline",
      card2Body: "011 769 9000",
      card3title: "Fax",
      card3Body: "011 769 9000",
      card4title: "Email",
      card4Body: "info@asiaassetfinance.lk",
    },
    },
  },
  si: {
    translation: {
      //Navbar component
      navbar: {
        home: "මුල් පිටුව",
        about: "අප ගැන",
        about_dropdown1: "මූලධර්මය, දැක්ම සහ අරමුණ",
        about_dropdown2: "අධ්‍යක්ෂ මණ්ඩලය",
        about_dropdown3: "සමාගමේ කළමනාකරණය",
        about_dropdown4: "ශාඛා ජාලය",
        products: "නිෂ්පාදන සහ සේවාවන්",
        products_dropdown1: "නිෂ්පාදන සාරාංශය",
        products_dropdown2: "රන් ණය",
        products_dropdown3: "ස්ථාවර තැන්පතු",
        products_dropdown4: "ලිසිං",
        products_dropdown5: "උකස්",
        products_dropdown6: "Forex",
        products_dropdown7: "Luckewallet - ඩිජිටල් මෘදුකාංගය",
        investor_relations: "නාළිකා සම්බන්ධතා",
        investor_relations_dropdown1: "ආයතනික පැතිකඩ",
        investor_relations_dropdown2: "මූල්ය යතුරු",
        careers: "රැකියා අවස්ථා",
        downloads: "බාගත කිරීම්"
      },

      //Footer Component
      footerListItems: [
        { title: "අපි ගැන", list: ["සාරාංශය", "නිලධාරී මණ්ඩලය", "කාර්යාල කළමනාකරණය", "ශාඛා ජාලය"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/about/#branches"] },
        { title: "නිෂ්පාදන", list: ["දුම්රිය ණය", "ස්ථිර තැන්පතු", "භාණ්ඩ වාහන", "හොල්ඩිං", "විදේශ මූල්‍ය", "ඊ-සේවින්"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/products/#luckewallet"] },
        { title: "වැඩිහිටියන්ගේ සම්බන්ධතා", list: ["සමාගමේ වාර්තා", "ප්‍රධාන මූල්‍ය තොරතුරු"], links: ["/ir", "/ir/#financial-keys"] },
        { title: "වෙනත් සබැඳි", list: ["රැකියා", "අප අමතන්න", "බාගත කිරීම්"], links: ["/careers", "/contacts", "/downloads"] },
      ],
      
      
      footerText: {
        subs_title1: "ඔබට ආරක්ෂිත මූල්‍ය විසඳුම් ප‍්‍රයෝජනයක් ලබා දීම",
        subs_title2: "නවතම යාවත්කාලීන කිරීම් ලබා ගන්න සඳහා ලියාපදිංචි වන්න",
        subs_title3: "අපෙන්",
        subs_message: "අපගේ ප්‍රතිලාභ සහ යාවත්කාලීන කිරීම් ඔබගේ ඊමේල් හිමි inbox එකට ලබා ගැනීමට ලියාපදිංචි වන්න.",
        subs_field: "ඔබගේ ඊමේල් පත‍්‍රය ඇතුල් කරන්න",
        subs_btn: "ඉදිරිපත් කරන්න",
        intro: "Asia Asset Finance PLC, 1981 නොවැම්බර් 25 වන දින සමාගමකින් පිහිටුවා ඇති අතර ICRA A+ ස්ථායී අවධි ශ්‍රේණිය ලබා ඇත සහ ශ්‍රී ලංකා මධ්‍යම බැංකුවේ මූල්‍ය ප板යේ බලපත්‍රය ලැබ ඇත.",
        address: "අංක 76, පාර්ක් වීදිය, කොළඹ 02, ශ්‍රී ලංකා",
      },
      

      //Landing Page Components
      carouselLandingPage: [
        {
          src: banner1,
          title: "ඔබේ මූල්‍ය අනාගතය සඳහා නවීන විසඳුම්",
          intro: "ඔබේ මූල්‍ය අනාගතය ශක්තිමත් කිරීම",
          description:
            "Asia Asset Finance හි අපට විශ්වාසයි නවෝත්පාදනය මූල්‍ය සාර්ථකත්වය නඩත්තු කිරීමට බලශක්තියක් බවට පත්වන බව. අපගේ ව්‍යक्तිගත මූල්‍ය විසඳුම් සැපයීමේ වගකීම ශ්‍රී ලංකා මූල්‍ය ක්ෂේත්‍රයේ නායකයකු ලෙස අපගේ තැන සනාථ කරයි. ඔබ ආයෝජනයක් කිරීමට, සුරැකුමක් කිරීමට, හෝ ඔබේ මීළඟ විශාල ව්‍යාපෘතිය සඳහා මූල්‍ය පහසුකම් ලබා ගැනීමට බලාපොරොත්තු වෙනවාද, අපි ඔබේ ගමන විශ්වාසය සහ පෑක්ෂිකම මඟින් සහය දක්වමු.",
        },
        {
          src: banner2,
          title: "සන්සුන්ය සහ මූල්‍ය විසඳුම් මුණගැසෙන තැන",
          intro: "මූල්‍ය නවෝත්පාදනය, වර්ධනය සඳහා උනන්දු කිරීම",
          description:
            "අපි සරල මූල්‍ය ආයතනයක් පමණක් නොවේ; අපි ශ්‍රී ලංකාව පුරා පුද්ගලයන් සහ ව්‍යාපාර පෝෂණය කිරීම සඳහා අභිප්‍රායගතව සැලසුම් කළ නවෝත්පාදන මූල්‍ය සම්බන්ධතාවයකි. කටුක තාක්ෂණය ව්‍යක්තීකරණ සේවාවක් සමඟ එකතු කිරීම මඟින්, අපි ඔබේ ඉලක්ක වඩාත් ඵලදායී හා කාර්යක්ෂම ලෙස ඉටු කිරීමට උපකාරී මූල්‍ය විසඳුම් ලබා දෙනවා.",
        },
        {
          src: banner3,
          title: "ශ්‍රී ලංකාවේ මූල්‍ය ක්ෂේත්‍රයේ නායකත්වය",
          intro: "ඔබේ විශ්වාසය, ඔබේ වගකීම",
          description:
            "විශ්වාසය සහ පෑක්ෂිනය අපගේ ව්‍යාපාරයේ මූලික ගල් තලා වෙයි. ශ්‍රී ලංකාවේ මූල්‍ය ක්ෂේත්‍රයේ නායකයකු ලෙස, අපි සියලු කටයුතු වලදී ඉහළම අධිමපේක්ෂම් සම්මානය රඳවාගැනීමට කැපවෙයි. අපගේ පළමු අන්තර්ක්‍රියාවෙන් පසුව අවසාන ගනුදෙනුවට, ඔබේ අවශ්‍යතා සඳහා ව්‍යක්තීකරණ උපදේශන සහ සේවා සැපයීමට අපෙන් බලාපොරොත්තු වන්න.",
        },
      ],
      landingPageCards: {
        card1_title: "ප්‍රවීණ කණ්ඩායම",
        card1_description: "ඔබගේ සාර්ථකත්වයට කැපවූ අපේ මූල්‍ය විශේෂඥයින්ගේ දැනුම සහ පළපුරුද්ද භාවිතා කරන්න.",
        card2_title: "පුළුල් පරාසය",
        card2_description: "දේශීය අවශ්‍යතා අනුව අභිරුචි ගත මූල්‍ය නිෂ්පාදන විශාල පරාසයක් සහිතව ශ්‍රී ලංකාවේ පුරා සේවා සැපයීම.",
        card3_title: "ඉක්මන් සහ කාර්යක්ෂම සේවාව",
        card3_description: "ඔබේ කාලය ඉතිරි කිරීමට සහ ඔබේ මූල්‍ය ගමන පහසුකර ගැනීමට නිර්මාණය කළ ඉක්මන් හා කාර්යක්ෂම සේවාවන් අත්විඳින්න.",
      },
      whyChooseUs: {
        title_left: "මන්ද ඔබ",
        title_right: "ආසියා අසේට් ෆිනෑන්ස්",
        description: "අප ආසියා අසේට් ෆිනෑන්ස් පීඑල්සී 50 වසරකට වඩා වැඩි කාලයක් සදහා පුද්ගලයන් හා ව්‍යාපාර සඳහා අපගේ කාර්යයන් ආයෝජනය කර ඇත. සාධාරණම පොළී අනුපාතවලින් ලබාදෙන රන් ණය, ලීසිං, මයික්‍රෝ මෝර්ටගේ ණය, කණ්ඩායම් පුද්ගලික ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, සංස්ථාපිත ණය, මයික්‍රෝ ණය හෝ ඔබේ මහජන තැන්පතු භාරගැනීම යන සේවාවන්ගෙන් අපි මුළු හමුදාවක් සම්පූර්ණ කළ ආර්ථිකයන් බවට පත් කර ඇත.",
        card1: "ජීවිතයේ සෑම අදියරකින්ද ගැළපෙන මූල්‍ය විසඳුම්",
        card2: "අපේක්ෂාවෙන් ඉහළ ගනුදෙනුකරුවන්ට මනාපයෙන් කටයුතු කරන සේවාව",
        card3: "දශක ගණනාවක පළපුරුද්දෙන් පසුබැසී නව නිෂ්පාදන",
    },   
    luckewalletLandingPage: {
      title1: "ඔබගේ මූල්‍ය ගමන පහසු කරන්නේ ",
      title2: "Luckewallet ",
      title3: "ජංගම යෙදුම සමඟ",
      subtitle: "ඔබේ ස්මාර්ට්ෆෝන් එකෙන්ම සිදු කළ හැකි නිරායාස සහ ආරක්ෂිත මූල්‍ය සේවාවන් අත්විඳින්න.",
      learn_more: "තව දැනගන්න",
      key_features1: "ප්‍රධාන ",
      key_features2: "විශේෂාංග",
      feature1_title: "ගිණුම් කළමණාකරණය පහසු කිරීම",
      feature1_description: "ඔබේ සියලු ගිණුම් එකම ස්ථානයක නිරායාසව බලන්න සහ කළමණාකරණය කරන්න.",
      feature2_title: "වේගවත් ණය ඉල්ලීම්",
      feature2_description: "උණුසුම්ව ණය ඉල්ලීම් කරන්න සහ ඔබේ ඉල්ලීමේ තත්ත්වය හොඳින් හඳුනා ගන්න.",
      feature3_title: "ගිණුම් කළමණාකරණය පහසු කිරීම",
      feature3_description: "ඔබේ සියලු ගිණුම් එකම ස්ථානයක නිරායාසව බලන්න සහ කළමණාකරණය කරන්න.",
      feature4_title: "වास्तවික කාල නිවේදන",
      feature4_description: "ගිණුම් ක්‍රියාකාරකම් සහ දැන්වීම් පිළිබඳ වහාම සනිටුහන් සහිතව දැනුවත් වන්න.",
  },  
  productsOverviewLandingPage: [
    { title: "ස්ථාවර තැන්පතු", image: FixedDeposits, description: "ආරක්ෂිත ආදායම් සමඟ ඔබේ ආධාරක රැකගන්න." },
    { title: "රන් ණය", image: "image2.jpg", description: "ආරක්ෂිත විකල්පවලින් ඔබේ ධනය වර්ධනය කරන්න." },
    { title: "ඇප කල්බදු ණය", image: "image3.jpg", description: "ඔබේ සෑම අවශ්‍යතාවක් සඳහාම අඩු පොලී අනුපාතවලින් ණය ලබාගන්න." },
    { title: "ලීසිං", image: "image4.jpg", description: "අඩු පොලී අනුපාතවලින් පහසු වියදම් කිරීම." },
    { title: "ආරක්ෂිත ඉතිරිකිරීම්", image: "image5.jpg", description: "සංසුන්කමට සහ ආරක්ෂාවට සම්පුර්ණ ආවරණය." },
    { title: "විදේශ විනිමය", image: "image6.jpg", description: "විවිධ විකල්පවලින් ඔබේ ආදායම ඉහළ නැංවීම." },
],
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
  subtitle: "මූල්‍ය විසඳුම් ඔබට තවත් සමීප කරමින්",
  description1: "අපගේ ",
  description2: "90+ ශාඛා ",
  description3: "කිසියම්මකට යන්න, ඔබට අභිරුචිමය සේවාව අත්විඳින්න, එය ",
  description4: "ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී ",
  description5: "ඉහළින්ම ප්‍රසිද්ධයි. ශ්‍රී ලංකාවේ ඔබ සිටින තැනට බැගින්, ඔබගේ මූල්‍ය ගමනට අපි සහය වනවා.",
  newbranches_title: "අපගේ නවතම ශාඛා",
  newbranches_description: "අපගේ විශ්වාසදායක මූල්‍ය සේවාවන් තවත් සමීප කරන නවතම ශාඛා ආරම්භ කිරීම ගැන අපි හුඟක් සතුටුයි. ප්‍රවේශය සහ සමාජ සහාය සඳහා අපගේ කැපවීමේ කොටසක් ලෙස, මෙම ශාඛාවන් සම්පුර්ණ ඇසියා ඇසට් ෆිනෑන්ස් නිෂ්පාදන සහ සේවාවන් ලබා දීමට සූදානම්. අපගේ නවතම ස්ථානවලට පිවිස, ඔබ අපෙන් අපේක්ෂා කළ විශ්වාසනීය සහ අභිරුචිමය සේවාව අත්විඳින්න.",
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
  button2: "ඉදිරිපත් කරන්න"
},

//About Page Components
bannerAbout: {
  src: bannerAbout,
  title: "අප ගැන",
  intro: "ඔබගේ මූල්‍ය අනාගතය ශක්තිමත් කරමින්",
  specialnote: "1970 සිට",
  description: "“ ජනතාවට බලගැන්වීම සහ ජීවිත වෙනස් කිරීම ”",
},
cardsAbout: [
  { stat: "50,000+", text: "පාරිභෝගිකයන්", icon: faUsers },
  { stat: "54+", text: "ඉහළම ශ්‍රේණියේ වසර", icon: faClock },
  { stat: "1000+", text: "සේවකයින්", icon: faBriefcase },
  { stat: "100+", text: "ශාඛා", icon: faBuilding },
],
overviewAbout: {
  title: "සමීක්ෂණය",
  description: "අවුරුදු 50කට වැඩි කාලයක් සිට, අපි ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී ලෙස, කීපදෙනෙකුගේ සහ ව්‍යාපාර කිහිපයකුගේ ගමන තුළ අපගේ වශයෙන් ප්‍රයෝජන ලබා දී ඇත. අප විසින් ලබා දෙන සුළු සහ විශ්වාසනීය අනුපාත මත ලෝක බර රහිත ණය, ලීසිං, බඳවා ගත් ණය, කණ්ඩායම් පෞද්ගලික ණය, පෞද්ගලික ණය, ව්‍යාපාර ණය, සමාගම් ණය, මයික්‍රෝ ණය හෝ ඔබගේ පොදු තැන්පතු සලකුණු කිරීම තුළ පවත්වා ඇති සමාජයන්, ආර්ථික ප්‍රජාවක් බවට පත් කිරීම ගැන අපි සතුටු වෙමු. ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සී යනු මුතුට් ෆිනෑන්ස් සමාගම් කාර්යාලයේ සම්පුර්ණයෙන්ම හිමිකරුවන් වන උපක්‍රමය සහ ශ්‍රී ලංකා මධ්‍යම බැංකුවෙන් ලියාපදිංචි වූ සම්පූර්ණ අයවැය සහ තැන්පතු ගෙවීම් ආයතනයකි. සමාජයේ මූල්‍ය අවශ්‍යතා නිරන්තරයෙන් වර්ධනය වෙමින් පවතී, ඇසියා ඇසට් මෙම අවශ්‍යතා පූර්ණ කිරීම සඳහා අවුරුදු ගණනාවක පවත්වාගෙන ගොස් ඇත. අපගේ උත්සාහය සෑම විටම අපගේ පාරිභෝගිකයන්ට ඔවුන්ගේ ජීවන ක්‍රමය සහ ව්‍යාපාර ක්‍රමය තුළ වර්ධනය ලබා දීමට උදව් කිරීම විය. ඇසියා ඇසට් ෆිනෑන්ස් පීඑල්සීගේ කතාව “ජනතාවට බලය ලබා දීම සහ ජීවිත වෙනස් කිරීම” යි.",
},
missionVisionGoal: {
  mission: {
    category: "මෙහෙවර",
    title: "පාරිභෝගිකයින් වෙත",
    description: "අප විසින් අපගේ පාරිභෝගිකයින්ගේ මූල්‍ය අවශ්‍යතා සඳහා සපයන විසඳුම් විකල්ප, නවෝත්පාදන සහ ඔවුන්ගේ අවශ්‍යතා සඳහා සම්බන්ධිතව වන අතර, ඔවුන්ගේ ජීවන ගුණාත්මකභාවය දියුණු කිරීමට සහ අතිවෘත්තීය පාරිභෝගික සේවා මට්ටම් පවත්වාගෙන යාමට අවශ්‍ය සියළුම ආධාර ලබා දීමට අපි කැපවී සිටී.",
  },
  vision: {
    category: "දෘශ්‍යය",
    title: "ශේයාකරුවන් වෙත",
    description: "අපගේ කාර්ය සාධන හා ක්‍රියාකාරකම් පරම ආකෘතියකට ගොස්, දිගු කාලීන සාර්ථකත්වයක් මගින් ශේයාකරුවන්ට වටිනාකම සහ වැදගත් ආදායම් ලබා දීමට අපි උත්සාහ කෙරෙමු.",
  },
  goal: {
    category: "ඉලක්කය",
    title: "අපගේ සේවක පවුල වෙත",
    description: "සේවකයින් අතර සාමාන্যතාවය පවත්වා, පුද්ගලික සංවර්ධන ක්‍රියාකාරකම් සමඟ වඩාත්ම පරිපූර්ණ කාර්ය-ජීවිත සම්පාදනය කිරීමට, සාමකාමී වැඩ පරිසරයක් සහ අධික කාර්ය සාධනය ඇති කිරීමට අපි කැපවී සිටී.",
  }
},
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ජී. එම්. අලෙක්සැන්ඩර්', title: 'නොන්-ගෘහස්ථ අධ්‍යක්ෂ' },
  { imgSrc: mrBijimon, name: 'කේ. ආර්. බිජිමොන්', title: 'නොන්-ගෘහස්ථ අධ්‍යක්ෂ / මූතුට් ෆිනෑන්ස් ලිමිටඩ් හි ප්‍රධාන ජෙනරාල් කළමනාකරු' },
  { imgSrc: mrPillai, name: 'කේ. ජී. කේ. පිල්ලෙයි', title: 'නොන්-ගෘහස්ථ අධ්‍යක්ෂ' },
  { imgSrc: mrRajitha, name: 'ආර්. ඒ. බී. බස්නායක', title: 'ස්වාධීන නොන්-ගෘහස්ථ අධ්‍යක්ෂ' },
  { imgSrc: mrJayasekara, name: 'ජේ. පී. ඩී. ආර්. ජයසේකර', title: 'ස්වාධීන නොන්-ගෘහස්ථ අධ්‍යක්ෂ' },
  { imgSrc: mrRoshan, name: 'ආර්. ඩී. එස්. ගුණසේකර', title: 'ගෘහස්ථ අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරී' },
  { imgSrc: mrKumarasiri, name: 'ටී. සී. ඩී. කුමාරසිරි', title: 'නොන්-ගෘහස්ථ අධ්‍යක්ෂ' },
],
bodTextsAbout: {
  title1: "අධ්‍යක්ෂ මණ්ඩලය",
  title2: "",
  subtitle: "අපේ දර්ශනය මග පෙන්වමින්, විශේෂ දැනුම සහ අවංකතාවය",
  intro: "අපගේ අධ්‍යක්ෂ මණ්ඩලය මූල්‍ය කර්මාන්තය පිළිබඳ විවිධ පසුබැසීමේ අත්දැකීම් සහිත වෘත්තීය දැනුමක් ඇති වෘත්තීන්ගෙන් සමන්විත වේ. ඔවුන්ගේ මග පෙන්වීම සහ යෝජනා Asia Asset Finance හි ආරක්ෂිත වර්ධනය හා සාර්ථකත්වය සඳහා අවශ්‍ය වේ.",
  chairman_name: "වී. ඒ. ප්‍රසන්ත්",
  chairman_position: "අධ්‍යක්ෂ මණ්ඩලයේ සභාපති",
  chairman_description: "වී. ඒ. ප්‍රසන්ත් ව්‍යාපාරික බැංකුකරණයේ අවුරුදු 37 ක අත්දැකීම් ඇති ජාතික බැංකුකාරයෙකි, විශේෂයෙන් ම ග්‍රාමීය හා කොමර්ෂල් බැංකුකරණය, තැන්පතු මෙහෙයුම් සහ තොරතුරු ආරක්ෂාව යන ක්ෂේත්‍රවල...",
  ceo_name: "ආර්. ජේ. ඒ. ගුණවර්ධන",
  ceo_position: "අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරි",
  ceo_description: "මහාචාර්ය රාජීව් ගුණවර්ධන, Asia Asset Finance PLC හි ප්‍රධාන විධායක නිලධාරි / අධ්‍යක්ෂ, 2009 දෙසැම්බර් මාසයේ අධ්‍යක්ෂ මණ්ඩලයට පත් විය. සංවිධානයේ දර්ශනය සකස් කිරීම හා ක්‍රියාත්මක කිරීම සඳහා ඔහු වගකියයි...",
  see_more_btn: "තව බලන්න"
},
comProfilesAbout: [ 
  { imgSrc: mrRajiv, name: 'රාජිව් ගුණවර්ධන', title: 'අධ්‍යක්ෂ / ප්‍රධාන විධායක නිලධාරී' },
  { imgSrc: mrRoshan, name: 'රොෂාන් ගුණසේකර', title: 'ගණුදෙනු අධ්‍යක්ෂ / ප්‍රධාන මෙහෙයුම් නිලධාරී' },
  { imgSrc: mrThiru, name: 'එම්. තිරුනීලකන්දන්', title: 'පොදු කළමනාකරු' },
  { imgSrc: mrMahesh, name: 'මහේෂ් කුමාර', title: 'අනු පොදු කළමනාකරු - ණය' },
  { imgSrc: mrJayantha, name: 'ජයන්ත වීරපුල්ලිගේ', title: 'අනු පොදු කළමනාකරු - අලෙවිකරණය' },
  { imgSrc: mrSameera, name: 'සමීර වෙවෙලදෙනිය', title: 'අනු පොදු කළමනාකරු - නියත තැන්පතු' },
  { imgSrc: msGeethika, name: 'ගීතිකා ඇල්වලාගේ', title: 'අනු පොදු කළමනාකරු - මූල්‍යය' },
  { imgSrc: mrSajith, name: 'සජිත් අටපත්තු', title: 'අනු පොදු කළමනාකරු - අවදානම' },
  { imgSrc: mrInditha, name: 'ඉන්දීත ජයතිලක', title: 'අනු පොදු කළමනාකරු - තොරතුරු තාක්ෂණය' },
  { imgSrc: mrPraveen, name: 'ප්‍රවීන් පීරිස්', title: 'අනු පොදු කළමනාකරු - භණ්ඩාගාර' }
],

  //Investor Relations Page Components
  bannerIR: {
    src: bannerIR,
    title: "අප ගැන",
    intro: "විශ්වාසයෙන් සහ දැක්මෙන් ධනය ගොඩනැඟීම",
    specialnote: "1970 සිට",
    description: "“ ප්‍රගතිසහකරය, ස්ථායි වර්ධනයේ ධාවකය ”"
  },
  corporateProfileIR: {
    title1: "සමාගමේ ",
    title2: "පැතිකඩ",
    label1: "සමාගමේ නම",
    field1: "ඒෂියා ආසට් ෆිනෑන්ස් පීඑල්සී",
    label2: "සමාගමේ ශ්‍රේණිගත කිරීම",
    field2: "Fitch A+",
    label3: "නීතිමය ආකාරය",
    field3_1: "- 1970 සැප්තැම්බර් 23 දින පුද්ගලික සමාගමක් ලෙස ලියාපදිංචි විය. (1938 51 වන නීති ආඥාවේ (Cap 145) යටතේ)",
    field3_2: "- 2006 ඔක්තෝබර් 03 දින නම වෙනස් කරන ලදී. (1938 51 වන නීති ආඥාවේ (Cap 145) යටතේ)",
    field3_3: "- 2008 ජනවාරි 23 දින 2007 07 වන සමාගම් පනත යටතේ නැවත ලියාපදිංචි විය.",
    field3_4: "- 2012 මාර්තු 20 දින 2007 07 වන සමාගම් පනත යටතේ මහජන සමාගමක් ලෙස පරිවර්තනය විය.",
    field3_5: "- ලියාපදිංචි අංකය (1982 17 වන සමාගම් පනත යටතේ): PB 139 PQ.",
    field3_6: "- නව ලියාපදිංචි අංකය (2007 7 වන සමාගම් පනත යටතේ): PB 139 PQ.",
    label4: "සමාගමේ ලියාපදිංචි අංකය",
    field4: "PB 139 PQ",
    label5: "සමාගමේ නීතිඥවරු",
    field5: "ශිරන්ති ගුණවර්ධන සංගමය, \n අංක 22/1, එලිට් පේස්, කොළඹ 08.",
    label6: "අධ්‍යක්ෂ මණ්ඩලය",
    field6_1: "සභාපති - V. A ප්‍රසන්ත",
    field6_2: "CEO - රාජිව් ජේම්ස් අබේවික්‍රම ගුණවර්ධන",
    field6_3: "ජෝර්ජ් මුත්තුට් ඇලෙක්සැන්ඩර්",
    field6_4: "කුට්ටික්කාට්ටු රාජප්පන් බිජිමෝන්",
    field6_5: "කිරන් ගෝපාල ක්‍රිෂ්ණ පිල්ලෙයි",
    field6_6: "රජිත් ආනන්ද බණ්ඩාර බස්නායක",
    field6_7: "ජේ පී ඩී ආර් ජයසේකර",
    field6_8: "රොෂාන් ද සිල්වා ගුණසේකර",
    field6_9: "ටී. සී. ඩී. කුමාරසිරි",
    label7: "සමාගමේ ලේකම්",
    field7: "චලානි ගොනාඩුවා \nසමාගම් ලේකම් \nඅංක 76, පාර්ක් වීදිය, කොළඹ 02. \nදුරකථන: 011 7699 074 \nඊමේල්: companysecretary@asiaassetfinance.lk",
    label8: "සමාගමේ විගණකාධිපතිවරු",
    field8: "BDO පාර්ට්නර්ස් \nඅංක 65/2, ශ්‍රි චිත්තපාලම් A. ගාඩ්නර් මාවත \nකොළඹ 02.",
    label9: "සමාගමේ බැංකුකරුවන්",
  },  
  keyFinancialsIR: {
    title1: "මූල්‍ය ",
    title2: "විශේෂාංග",
    card1_title: "මුළු ආදායම",
    card1_amount: "XX,XXX",
    card2_title: "බදු අනතුරෙන් පසු ලාභය",
    card2_amount: "XX,XXX",
    card3_title: "මුළු සම්පත්",
    card3_amount: "XX,XXX",
    card4_title: "ආයෝජන මත ප්‍රතිලාභ",
    card4_amount: "XX,XXX",
    card5_title: "ශේරයක් මත ලාභය",
    card5_amount: "XX,XXX",
    share_price_title: "අලුත්ම ශේර ලාභය",
    share_price_reg: "XXXXXXXXXX",
    share_price_name: "ඒෂියා ආසට් ෆිනෑන්ස් පීඑල්සී",
    share_price_amount: "රුපියල් XX.XX",
    share_price_percentage: "XX,XXXX",
    share_price_type: "රුපියල්",
    description_line1: "අපි, ඒෂියා ආසට් ෆිනෑන්ස් පීඑල්සී, වසර 50 කට වැඩි කාලයක් පුරා අරමුදල් හා ව්‍යාපාර තුල අපේ උනන්දුව යොදා ඇත. වඩාත් සාධාරණ මිලට ලබා දෙන රන් ණය, ලීසිං, ණය හානි, කණ්ඩායම් පුද්ගල ණය, පුද්ගලික ණය, ව්‍යාපාරික ණය, සංවර්ධන ණය, හා මහාජන තැන්පතු පිළිගැනීම යන යටතේ අපි තිරසාර ආර්ථිකයන් ලෙස ප්‍රජා වර්ධනය කිරීමට ආඩම්බර වෙනවා.",
    description_line2: "ඒෂියා ආසට් ෆිනෑන්ස් පීඑල්සී යනු මුතුට් ෆිනෑන්ස් ලිමිටඩ් සමාගමේ සම්පූර්ණ අනුබද්ධ සමාගමක් වන අතර ශ්‍රී ලංකා මධ්‍යම බැංකුවේ ලියාපදිංචි තැන්පතු ගැනීමේ ආයතනයකි.",
    description_line3: "සමූහයේ මූල්‍ය අවශ්‍යතා සෑම විටම වර්ධනය වෙමින් පවතින අතර ඒෂියා ආසට් තවදුරටත් ඒ සඳහා නිවැරදි විසඳුම් සපයමින් වර්ධනය විය. අපේ උත්සාහය සෑම විටම අපගේ ගනුදෙනුකරුවන්ට ඔවුන්ගේ ජීවන මට්ටම සහ ව්‍යාපාරය වර්ධනය කිරීමට උපකාරී වීමටයි.",
    description_line4: "ඒෂියා ආසට් ෆිනෑන්ස් පීඑල්සී ගේ කතාව නම් “ මිනිසුන්ට බලය දීම සහ ජීවිතය වෙනස් කිරීමයි ”.",
  },
  documentsIR: {
    title: "බාගත කිරීම්",
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
      intro1: "",
      section2: "මූල්‍ය වාර්තා",
      intro2: "",
      section3: "KYC ලේඛන",
      intro3: "",
      section4: "",
      intro4: "",
    },

    //Products & Services Page Components
    bannerProducts: {
      title: "නිෂ්පාදන සහ සේවාවන්",
      intro: "මූල්‍ය විසඳුම් සරල කිරීම",
      specialnote: "1970 සිට",
      description: "“ වර්ධනය හා සාරවත්කම සඳහා හවුල්කරුවෙකු ”",
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
    titleCareers: {
      title1: "අපි බඳවාගනු ",
      title2: "ලබමු",
      description1: "අසියා ඇසට් ෆයිනෑන්ස් PLC එකේ අපි කරන දේ මෙන්න! අපි පුද්ගලයන්ට ඔවුන්ගේ ජීවිත ගත කිරීමට අවශ්‍ය ජීවිත ගත කිරීමට උදව් කරමු, අපි ව්‍යාපාරිකයන්ට ඔවුන්ගේ ව්‍යාපාර ගොඩනැගීමට බලසම්පන්න කරමු, අපි මූල්‍ය විෂමතාව අඩු කරන ක්‍රියාකාරී උපකරණ වෙමු.",
      description2: "අපි නිතරම ආවේණික ජීවිත ගොඩනැගීමට අධිෂ්ඨානශීල පුද්ගලයන් සොයන්නෙමු. මොනවට ඔබට කාර්යභාරයක් සොයන්න පුළුවන් නම්, පහත තිබෙන පිහිටවීම සඳහා අයදුම් කරන්න."
    },

    //Gold Loan Page Components
    goldLoanPage: {
      title: "රන් ණය",
      description: "වගකීම අප සෑමදෙනාටම ලැබෙන දෙයක්. ඔබේ දියණියගේ විවාහය සහ එයත් සමඟ වන වියදම් ගැන සිතා සිටින පියෙකි. ඔබේ පුත්‍රයාට හොඳම අධ්‍යාපනය ලබා දීමට කැපවූ මවකි. හදිසි ශල්‍යකර්මයක් සඳහා මුදල් අවශ්‍ය මනාලියෙකි. කවුරුත් භය නොවන්න. අපගේ ගොල්ඩ් ණය සේවාව ඔබගේ මූල්‍ය අවශ්‍යතා සම්පූර්ණ කරනු ඇත. කෙලින්ම ආසියා ආසෙට් ශාඛාවකට පැමිණ අපගේ සැලකිලිමත් වෘත්තීය පුද්ගලයන් එක්ක කතා කරන්න. පහසුවෙන් මුදල් ලබා ගන්න, ඔබේ අවස්ථාවට ගැලපෙන සංඛ්‍යානුපාතික වාරික සහ ආරක්ෂිතව ආපසු ලබා ගන්නා ගොල්ඩ්. අපගේ සේවාවක් නව නිවෙසක් වෙනුවෙන් ගන්න."
    },
    
    //FD Page Components
    fdPage: {
      title: "ස්ථාවර තැන්පතු",
      description: "ඉතිරිකිරීමක් අරඹන්නට කවදා හෝ මිනිත්තු කුඩා දෙයක් නොවේ. අපගේ ආසියා ආසෙට් ෆිනෑන්ස් ලිමිටඩ් ආයතනය 50 වසරකට වැඩි කාලයක් තිස්සේ ආයෝජන සංගමයකට පුරෝගාමී ආයතනයක් බවට පත්ව ඇත. අපගේ අඛණ්ඩ අරමුදල් සේවාවන් නිරතුරුවම පාරිභෝගිකයාගේ මූල්‍ය ආරක්ෂාව සුරැකීමේදී ගනුදෙනුකරුවන්ගේ දිරාක්ෂාව තහවුරු කරමින් ශක්තිමත් වේ. අපගේ ඊට වඩා සාමාන්‍ය අනුපාතික අයදුම් ප්‍රතිප්‍රේෂණය ලබා ගන්නා සේවාවක් සමඟ."
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "ලීසිං ණය",
      description: "ඔබේ සිහින වාහනය දැන් ධාවනය කිරීමට කවුරුන් හෝ නැවැත්විය නොහැක! ඔබට අවශ්‍ය වාහනයක්, වඩාත් සුදුසු වාරික ප්‍රතිපාදන සහ අවම ලියකියවිලි සමඟ පහසුවෙන් අරමුණු කරයි. පහසුම අතිරේක ගෙවීම් හා සාරීරික බලය අවශ්‍යතාවයට අදාලව ඔබේ වාහනය දැන් ලබා ගන්න."
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "උකස් ණය",
      description: "මුදල් ඔබේ මූල්‍ය ගැටළු සියල්ල විසඳා දියුනු කරනවා. මොළය උස්සන්න, යන්න, වර්ධනය කරන්න! ඔබේ ජීවන මට්ටම ඉහළ දැමීමට ආසියා ආසෙට් අපි සියල්ල උනන්දුවෙන් ආයෝජනය කරනවා. ලාභදායී සහ සාධාරණ සේවාවක් ලබා ගන්න."
    },
    
    //Forex Page Components
    forexPage: {
      title: "විදේශ විනිමය",
      description: "50 වසරක ඉතිහාසය සමඟ ආසියා ආසෙට් ෆිනෑන්ස් ලිමිටඩ් ආයෝජන පාර්ශවයක් වේ. ඔබේ මූල්‍ය ආරක්ෂාව සුරැකීම සඳහා විශිෂ්ට අරමුදල් ලබා ගන්න. ශීර්ෂ තැනට අපගේ සේවාවන් සමග."
    },
    
    //Contacts Page Components
    contactsPage: {
      title1: "සම්බන්ධ වෙන්න ",
      title2: "අප හා",
      subtitle: "ඔබගේ ස්මාර්ට්ෆෝනයෙන් පවා සරල සහ ආරක්ෂිත මූල්‍ය සේවාවන් අත්විඳින්න.",
      learnMoreBtn: "තවමත් දැන ගන්න",
      card1title: "ස්ථානය",
      card1Body: "අංක 76, පාර්ක් වීදිය, කොළඹ 02",
      card2title: "හොට්ලයින්",
      card2Body: "011 769 9000",
      card3title: "ෆැක්ස්",
      card3Body: "011 769 9000",
      card4title: "ඊමේල්",
      card4Body: "info@asiaassetfinance.lk",
    },    
    
    },
  },
  ta: {
    translation: {
      //Navbar component
      navbar: {
        home: "முகப்பு",
        about: "எங்களை பற்றி",
        about_dropdown1: "நோக்கம், பார்வை மற்றும் இலக்கு",
        about_dropdown2: "வழிகாட்டும் குழு",
        about_dropdown3: "சொற்பொருள் நிர்வாகம்",
        about_dropdown4: "கிளை வலையமைப்பு",
        products: "தயாரிப்புகள் மற்றும் சேவைகள்",
        products_dropdown1: "தயாரிப்புகளின் பார்வை",
        products_dropdown2: "தங்கக் கடன்",
        products_dropdown3: "நிலையான வைப்புக்கள்",
        products_dropdown4: "லீசிங்",
        products_dropdown5: "கடன் உத்தரவாதம்",
        products_dropdown6: "விநியோக நாணயம்",
        products_dropdown7: "Luckewallet - டிஜிட்டல் மென்பொருள்",
        investor_relations: "முதலீட்டாளர் தொடர்புகள்",
        investor_relations_dropdown1: "கார்ப்பரேட் சுயவிவரம்",
        investor_relations_dropdown2: "நிதி விசைகள்",
        careers: "வேலைவாய்ப்புகள்",
        downloads: "பதிவிறக்கங்கள்"
      },

      //Footer Component
      footerListItems: [
        { title: "எங்களைப் பற்றி", list: ["சாரா பார்வை", "பிரBoard நிர்வாக குழு", "கார்ப்பரேட் மேலாண்மை", "முகாமைத்துவ வலை"], links: ["/about", "/about/#bod", "/about/#corporate-management", "/about/#branches"] },
        { title: "தயாரிப்புகள்", list: ["பரபரப்பு கடன்", "நிலைபார்க்க வேண்டிய உறுதிப்பத்திரம்", "பட்சி வாடகைகள்", "குடியுரிமை", "வெளிநாட்டு பரிமாற்றம்", "இ-சேமிப்பு"], links: ["/gold-loan", "/fixed-deposit", "/leasing", "/mortgage", "/foreign-exchange", "/products/#luckewallet"] },
        { title: "பொது தொடர்புகள்", list: ["திறந்த சிறுகுழு", "முக்கிய நிதி"], links: ["/ir", "/ir/#financial-keys"] },
        { title: "மற்ற இணைப்புகள்", list: ["வேலைவாய்ப்பு", "எங்களை தொடர்பு கொள்ளவும்", "பதிவிறக்கங்கள்"], links: ["/careers", "/contacts", "/downloads"] },
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
          title: "உங்கள் நிதி எதிர்காலத்திற்கான புதுமையான தீர்வுகள்",
          intro: "உங்கள் நிதி எதிர்காலத்தை உறுதிசெய்தல்",
          description:
            "Asia Asset Finance இல், நிதி வெற்றியை முன்னேற்ற புதுமையின் சக்தியில் நம்புகிறோம். தனிப்பயனாக்கப்பட்ட நிதி தீர்வுகளை வழங்குவதற்கான எங்கள் அர்ப்பணிப்பு, இலங்கை நிதி துறையில் முன்னணி நிறுவனமாக எங்களை நிலைநிறுத்தியுள்ளது. நீங்கள் முதலீடு செய்ய, சேமிக்க அல்லது உங்கள் அடுத்த பெரிய திட்டத்திற்கு நிதியளிக்க முயற்சிக்கிறீர்களா, நம்பிக்கையுடன் மற்றும் வெளிப்படையான முறையில் உங்கள் பயணத்தை ஆதரிக்க நாங்கள் இங்கே இருக்கிறோம்.",
        },
        {
          src: banner2,
          title: "கனவுகள் நிதி தீர்வுகளுடன் சந்திக்கும் இடம்",
          intro: "நிதி புதுமை, வளர்ச்சியை ஊக்குவித்தல்",
          description:
            "நாங்கள் ஒரு சாதாரண நிதி நிறுவனம் மட்டுமல்ல; இலங்கை முழுவதும் தனிநபர்களையும் நிறுவனங்களையும் அதிகாரப்படுத்த நாங்கள் வடிவமைக்கப்பட்ட புதிய நிதி அணுகுமுறையுடன் உங்கள் முன்னேற்றத்தின் துணைநிலையமாக செயல்படுகிறோம். வெட்டுத் தொழில்நுட்பத்தை தனிப்பட்ட சேவையுடன் இணைப்பதன் மூலம், உங்கள் இலக்குகளை எளிதாகவும் பயனுள்ளவையாகவும் எட்ட நாங்கள் நிதி தீர்வுகளை வழங்குகிறோம்.",
        },
        {
          src: banner3,
          title: "இலங்கை நிதி துறையில் வழிகாட்டுதல்",
          intro: "உங்கள் நம்பிக்கை, உங்கள் அர்ப்பணிப்பு",
          description:
            "நம்பிக்கை மற்றும் வெளிப்படைத் தன்மையே எங்கள் வணிகத்தின் தூண்கள். இலங்கை நிதி துறையில் முன்னணி நிறுவனமாக, எங்கள் அனைத்து செயல்பாடுகளிலும் மிக உயர்ந்த நெறிமுறைகளை நிலைநிறுத்த நாங்கள் அர்ப்பணிக்கப்பட்டுள்ளோம். எங்கள் முதல் தொடர்பிலிருந்து இறுதி பரிமாற்றம் வரை, உங்கள் தேவைகளுக்கு சரியான மற்றும் நேர்மையான ஆலோசனை மற்றும் சேவைகளை வழங்க நம்புங்கள்.",
        },
      ],
      landingPageCards: {
        card1_title: "திறமையான குழு",
        card1_description: "உங்கள் வெற்றிக்கு உழைக்கும் நமது நிதி நிபுணர்களின் அறிவையும் அனுபவத்தையும் பயன்படுத்துங்கள்.",
        card2_title: "வியாபகமான பரப்பல்",
        card2_description: "உள்ளூர் தேவைகளைப் பூர்த்தி செய்ய Sri Lanka முழுவதும் விரிவான நிதி தயாரிப்புகளுடன் சேவைகள் வழங்குதல்.",
        card3_title: "வேகமான மற்றும் திறமையான சேவை",
        card3_description: "உங்கள் நேரத்தை மிச்சப்படுத்தவும் மற்றும் உங்கள் நிதி பயணத்தை எளிதாக்கவும் வடிவமைக்கப்பட்ட விரைவான மற்றும் திறமையான சேவைகளை அனுபவிக்கவும்.",
      },
      whyChooseUs: {
        title_left: "ஏன் தேர்வு செய்வது",
        title_right: "ஆசியா அசெட் பைனான்ஸ்",
        description: "ஆசியா அசெட் பைனான்ஸ் பிஎல்சி கடந்த 50 ஆண்டுகளுக்கும் மேலாக எண்ணற்ற தனிநபர்களுக்கும் நிறுவனங்களுக்கும் நமது ஆர்வங்களை முதலீடு செய்துள்ளது. மிகச் சிறந்த விகிதங்களில் நாங்கள் வழங்கும் தங்க கடன், லீசிங், கடன் அடமானம், குழு தனிநபர் கடன், தனிநபர் கடன், வணிகக் கடன், நிறுவனக் கடன், மைக்ரோ கடன் அல்லது உங்கள் பொது வைப்புக்களை ஏற்றுக்கொள்வதில், நாங்கள் சமூகங்களை தன்னிறைவான பொருளாதாரங்களாக வளர்த்ததில் பெருமை அடைகிறோம்.",
        card1: "வாழ்க்கையின் ஒவ்வொரு கட்டத்திற்கும் பொருத்தமான நிதி தீர்வுகள்",
        card2: "தனிப்பட்ட கவனம் கொண்ட மிகச்சிறந்த வாடிக்கையாளர் சேவை",
        card3: "ஆண்டுகளான அனுபவத்தால் ஆதரிக்கப்படும் புதுமையான தயாரிப்புகள்",
    },  
    luckewalletLandingPage: {
      title1: "உங்கள் நிதி பயணத்தை எளிமையாக்குங்கள் ",
      title2: "Luckewallet ",
      title3: "மொபைல் ஆப்ஸுடன்",
      subtitle: "உங்கள் ஸ்மார்ட்போனிலிருந்து நேர்த்தியான மற்றும் பாதுகாப்பான நிதி சேவைகளை அனுபவிக்கவும்.",
      learn_more: "மேலும் அறிய",
      key_features1: "முக்கிய ",
      key_features2: "அம்சங்கள்",
      feature1_title: "சுலபமான கணக்கு மேலாண்மை",
      feature1_description: "உங்கள் அனைத்து கணக்குகளையும் ஒரே இடத்தில் எளிதாக பார்க்கவும் நிர்வகிக்கவும் செய்யுங்கள்.",
      feature2_title: "விரைவான கடன் விண்ணப்பங்கள்",
      feature2_description: "கடன்களுக்கு விண்ணப்பிக்கவும் உங்கள் விண்ணப்ப நிலையை தெளிவாக கண்டறியவும்.",
      feature3_title: "சுலபமான கணக்கு மேலாண்மை",
      feature3_description: "உங்கள் அனைத்து கணக்குகளையும் ஒரே இடத்தில் எளிதாக பார்க்கவும் நிர்வகிக்கவும் செய்யுங்கள்.",
      feature4_title: "நேரடி அறிவிப்புகள்",
      feature4_description: "கணக்கு செயல்பாடுகள் மற்றும் சலுகைகளுக்கு உடனடி அறிவிப்புகளுடன் பதிலளிக்கவும்.",
  },    
  productsOverviewLandingPage: [
    { title: "நிலையான வைப்பு", image: FixedDeposits, description: "நிலையான வருவாயுடன் உங்கள் சேமிப்புகளைப் பாதுகாக்கவும்." },
    { title: "தங்க கடன்", image: "image2.jpg", description: "நீங்கள் தேவைப்படும் செலவுகளை எளிதாக்க குளறுபடிகள் இல்லாமல் கடன் பெறுங்கள்." },
    { title: "அடமானம்", image: "image3.jpg", description: "குறைந்த வட்டி விகிதங்களில் கடன்களை எளிதாகப் பெறுங்கள்." },
    { title: "லீசிங்", image: "image4.jpg", description: "குறைந்த வட்டி விகிதங்களுடன் வசதியான செலவினம்." },
    { title: "சேமிப்பு", image: "image5.jpg", description: "மனநிம்மதத்திற்கும் பாதுகாப்பிற்கும் முழுமையான பாதுகாப்பு." },
    { title: "வெளிநாட்டு மாற்று", image: "image6.jpg", description: "பல்வேறு விருப்பங்களுடன் உங்கள் வருமானத்தை அதிகரிக்கவும்." },
],
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
  title1: "எங்கள்",
  title2: "கிளைகள்",
  subtitle: "நிதி தீர்வுகளை உங்கள் அருகில் கொண்டுவருகிறோம்",
  description1: "எங்கள் ",
  description2: "90+ கிளைகளில் ",
  description3: "பார்வையிடுங்கள் மற்றும் தனிப்பயனாக்கப்பட்ட சேவையை அனுபவிக்கவும், இது ",
  description4: "ஏசியா ஆசெட் ஃபைனான்ஸ் பிஎல்சி ",
  description5: "மிகவும் பிரபலமானது. இலங்கையில் நீங்கள் இருக்கும் இடமெங்கும் உங்கள் நிதி பயணத்தை ஆதரிக்க நாங்கள் இங்கு உள்ளோம்.",
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
  { stat: "50,000+", text: "வாடிக்கையாளர்கள்", icon: faUsers },
  { stat: "54+", text: "சிறப்புத் தகுதி ஆண்டுகள்", icon: faClock },
  { stat: "1000+", text: "உதவியாளர்கள்", icon: faBriefcase },
  { stat: "100+", text: "கிளைகள்", icon: faBuilding },
],
overviewAbout: {
  title: "மேலும் பார்வை",
  description: "50 ஆண்டுகளுக்கு மேலாக, ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி, எங்கள் ஆர்வங்களை பல்வேறு மனிதர்களிலும், வணிகங்களிலும் முதலீடு செய்துள்ளது. எங்கள் சுயாதீனமான வட்டி விகிதத்தில் வழங்கப்படும் தங்க கடன்கள், லீசிங், உடன் கடன்கள், குழு தனிப்பட்ட கடன்கள், தனிப்பட்ட கடன்கள், வணிக கடன்கள், நிறுவன கடன்கள், மைக்ரோ கடன்கள் அல்லது உங்கள் பொது அடையாளங்களை ஏற்கின்றன என்பதை பரிசுத்தமான முறையில் சமூகங்கள் வளர்ந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி என்பது முபூட் ஃபைனான்ஸ் லிமிடெட் நிறுவனத்தின் முழுமையாக கையிருப்புக்கான துணை நிறுவனமாகும் மற்றும் இலங்கை மத்திய வங்கி மூலம் பதிவு செய்யப்பட்ட பூரணமாக உரிமை பெற்ற, பொதுத் தொகுப்பு ஏற்ற ஆற்றலுடைய நிறுவனம் ஆகும். சமூகத்தின் நிதி தேவைகள் தொடர்ந்து வளர்ந்து வருகின்றன, ஏசியா ஆஸெட் இந்த தேவைகளுக்கு பூரணமாக நம்பிக்கையுடன் இணைக்கப்பட்டுக் கொண்டுள்ளது. எங்கள் முயற்சிகள் எப்போதும் எங்கள் வாடிக்கையாளர்களுக்கு அவர்கள் வாழும் மற்றும் வணிகம் செய்வதற்கான முறையில் வளர்ச்சி அடைய உதவுவதாக இருந்துள்ளன. ஏசியா ஆஸெட் ஃபைனான்ஸ் பிஎல்சி இன் கதை “மக்களுக்கு அதிகாரம் அளித்தல் மற்றும் வாழ்க்கையை மாற்றுதல்” என்பதாகும்.",
},
missionVisionGoal: {
  mission: {
    category: "பணிகள்",
    title: "வாடிக்கையாளர்களுக்கு",
    description: "எங்கள் வாடிக்கையாளர்களின் நிதி தேவைகளுக்கு வழங்கப்படும் தீர்வுகள் வழக்கமற்ற, புதுமையான மற்றும் அவர்களின் தேவைகளுக்கே உரியவை ஆகும், இதன் மூலம் அவர்கள் வாழ்கின்ற வாழ்க்கை தரத்தை மேம்படுத்துவதுடன், அவர்களது எதிர்பார்ப்புகளை தாண்டி உயர்ந்த வாடிக்கையாளர் சேவையை வழங்குவதற்கு நாங்கள் திடமாக உறுதியாக இருக்கின்றோம்.",
  },
  vision: {
    category: "காட்சி",
    title: "பங்குதாரர்களுக்கு",
    description: "எங்கள் செயல்பாடுகளையும் செயல்திறனையும் தொடர்ந்தும் மேம்படுத்துவதன் மூலம் பங்குதாரர் மதிப்பை உருவாக்கி, நிலையான மற்றும் திறமையான நிலைப்பாட்டை கொண்ட முறைகளில் வெற்றியளிக்கும், பங்குதாரர்களுக்கு முக்கியமான வருமானங்களை வழங்குக.",
  },
  goal: {
    category: "இலக்கு",
    title: "எங்கள் பணியாளர்கள் குடும்பத்திற்கு",
    description: "பணியாளர்களுக்கு சமத்துவத்தை ஊக்குவிக்கும் மற்றும் அந்த பணியாளர்களின் தனிப்பட்ட வளர்ச்சியுடன், நிறுவனத்தில் சரியான வேலை-வாழ்க்கை சமநிலை உருவாக்கும் வகையில் ஒரு நிறுவனமாக மாறுவதாக நாங்கள் உறுதி செய்கிறோம்.",
  }
},
bodProfilesAbout: [
  { imgSrc: mrAlexandra, name: 'ஜி. எம். அலெக்சாண்டர்', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrBijimon, name: 'கே. ஆர். பிஜிமொன்', title: 'நான்-நிறுவன இயக்குனர் / முத்தூட் ஃபைனான்ஸ் லிமிடெட் பொதுக் மேலாளர்' },
  { imgSrc: mrPillai, name: 'கே. ஜி. கே. பிள்ளை', title: 'நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrRajitha, name: 'ஆர். ஏ. பி. பஸ்நாயக்கே', title: 'சுதந்திர நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrJayasekara, name: 'ஜே. பி. டி. ஆர். ஜயசேகரா', title: 'சுதந்திர நான்-நிறுவன இயக்குனர்' },
  { imgSrc: mrRoshan, name: 'ஆர். டி. எஸ். குணசேகரா', title: 'நிறுவன இயக்குனர் / தலைமை இயக்க அதிகாரி' },
  { imgSrc: mrKumarasiri, name: 'டி. சி. டி. குமாரசிறி', title: 'நான்-நிறுவன இயக்குனர்' },
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
  see_more_btn: "மேலும் காண்க"
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
    field8: "KPMG Sri Lanka \n 32A, சர் மொஹமட் மக்கான் மார்க்கர் மாவத்தை, \n கொழும்பு 03",
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
    titleCareers: {
      title1: "நாங்கள் ",
      title2: "பணியமர்த்துகிறோம்",
      description1: "ஆசியா அசெட் ஃபைனான்ஸ் PLCயில் நாங்கள் செய்யும் விஷயங்கள் இங்கே! நாங்கள் தனிநபர்களுக்கு அவர்கள் விரும்பும் வாழ்க்கையை வாழ உதவுகிறோம், நாங்கள் வணிகங்களை அமைப்பதற்கான சாதனமாக உள்ளோம், நாங்கள் நிதி இடைவெளியை குறைக்கும் செயலில் உள்ளோம்.",
      description2: "நாங்கள் அடிக்கடி பொருளாதாரங்களை உருவாக்கும் ஆர்வமுள்ள தொழில்முனைவோரை தேடுகிறோம்! உங்களிடம் அதற்கான தகுதி இருக்கிறது என்று நீங்கள் நினைத்தால், கீழே உள்ள கிடைக்கும் நிலைகளுக்கு விண்ணப்பிக்கவும்."
    },
    
    //Gold Loan Page Components
    goldLoanPage: {
      title: "தங்க கடன்",
      description: "பொறுப்பு என்பது நமக்கு அனைவருக்கும் வரும் ஒன்று. உங்கள் மகளின் திருமண செலவுகளைப் பற்றி கவலைப்படும் தந்தையாகவும், உங்கள் மகனுக்கு சிறந்த கல்வியை வழங்க முயற்சிக்கும் தாயாகவும், திடீர் அறுவை சிகிச்சைக்கான பணம் தேவைப்படும் துணையாகவும் இருக்கலாம். பயப்படாதீர்கள். எங்கள் தங்க கடன் சேவை உங்கள் தேவைகளை பூர்த்தி செய்ய தயார். எங்கள் கிளைகளில் வருகை தந்து நம்பகத்தன்மை உள்ள நிபுணர்களுடன் பேசுங்கள். தங்கத்தை உங்களுக்கே பாதுகாப்பான இடத்தில் வைத்திருக்க உத்தரவாதம் தருகிறோம்."
    },
    
    //FD Page Components
    fdPage: {
      title: "நிலையான வைப்பு",
      description: "சிலுவை வைப்பதற்கான நேரம் எப்போதும் உகந்தது. நம் 50 ஆண்டுகளின் வரலாற்றின் மூலம், நம்பகமான சேவையுடன் உங்களைப் பாதுகாக்க நாங்கள் உங்களை இணைத்துக்கொள்கிறோம். உங்கள் தேவைகளுக்கு ஏற்ற சுலபமான பணி உத்தரவாதம்!"
    },
    
    //Leasing Page Components
    leasingPage: {
      title: "குத்தகை",
      description: "உங்கள் கனவு வாகனத்தை இப்போது ஓட்டுவதற்கான பயிற்சி எளிதானது! மிகவும் சாதகமான வட்டி விகிதங்களுடன் நீங்கள் வெற்றி பெறுவீர்கள். மின்னல் வேகத்தில் குறைந்த பிணக்குத்தன்மையுடன் பணி!"
    },
    
    //Mortgage Page Components
    mortgagePage: {
      title: "அடமானம்",
      description: "பணம் உங்கள் பிரச்சனைகளைத் தீர்க்கும் வழி. உங்கள் நிதி வாழ்க்கையை மேம்படுத்தும் ஒரே வழி இது. நம்பகமான சேவையுடன் அனைத்து சூழ்நிலைகளுக்கும் ஏற்றதாக இருக்கும்!"
    },
    
    //Forex Page Components
    forexPage: {
      title: "அந்நிய செலாவணி",
      description: "50 ஆண்டுகளின் நம்பகமான வரலாற்றுடன், நாங்கள் உங்கள் நிதி பாதுகாப்பை உறுதிசெய்கிறோம். உங்களை எங்கள் முன்னணி சேவைகளுடன் இணைத்துக்கொள்ளுங்கள்!"
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
      card2Body: "011 769 9000",
      card3title: "பெக்ஸ்",
      card3Body: "011 769 9000",
      card4title: "மின்னஞ்சல்",
      card4Body: "info@asiaassetfinance.lk",
    },    
    
    },
  },
  // Additional language data omitted for brevity
};

export default resources;
