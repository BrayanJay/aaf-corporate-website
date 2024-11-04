import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

library.add(fas, fab);

const dropdownData = {
    home: [],
    about: [],
    products: ['Gold Loan', 'Fixed Deposits', 'Leasing', 'Mortgage', 'Foreign Exchange', 'Luckewallet'],
    investor_relations: ['Privacy Policy', 'Terms & Conditions'],
    downloads: ['Annual Report', 'Financials'],
    careers: ['Job Openings', 'Internships'],
};

const SecondNavbar = () => {
    const liClasses = 'py-1.5 px-3 bg-[#004fc5] rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-[#083f93] transition delay-200 ease-in-out rounded-sm text-white text-sm font-medium font-roboto';
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    return (
        <>
            <div className='flex justify-between px-4 py-3 shadow-md items-center sticky top-0 z-50 bg-white/60 backdrop-blur-md'>
                <div className='hidden md:flex gap-4 font-medium'>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('home')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/">Home</Link>
                    </div>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('about')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/about">About</Link>
                    </div>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('products')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/products">Products & Services</Link>
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'products' ? 'rotate-180' : ''}`}
                            size='lg' 
                        />
                        {dropdownOpen === 'products' && (
                            <Dropdown items={dropdownData.products} />
                        )}
                    </div>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('policies')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/ir">Investor Relations</Link>
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'policies' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'policies' && (
                            <Dropdown items={dropdownData.investor_relations} />
                        )}
                    </div>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('investor')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/downloads">Downloads</Link>
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'investor' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'investor' && (
                            <Dropdown items={dropdownData.downloads} />
                        )}
                    </div>
                    <div 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('careers')}
                        onMouseLeave={() => toggleDropdown(null)}
                    >
                        <Link to="/careers">Careers</Link>
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'careers' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'careers' && (
                            <Dropdown items={dropdownData.careers} />
                        )}
                    </div>
                </div>
                <div className='md:hidden cursor-pointer' onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={['fas', 'bars']} size='lg' />
                </div>
            </div>

            {isNavbarOpen && (
                <div className='md:hidden'>
                    <div className='flex flex-col gap-4 p-4 bg-[#004fc5]'>
                        <div className={liClasses}><Link to="/">Home</Link></div>
                        <div className={liClasses}><Link to="/about">About</Link></div>
                        <div className={liClasses}><Link to="/products">Products & Services</Link></div>
                        <div className={liClasses}><Link to="/ir">Investor Relations</Link></div>
                        <div className={liClasses}><Link to="/downloads">Downloads</Link></div>
                        <div className={liClasses}><Link to="/careers">Careers</Link></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SecondNavbar;
