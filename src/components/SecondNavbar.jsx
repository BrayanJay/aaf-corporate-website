import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Dropdown from './Dropdown'

library.add(fas, fab);

// Dropdown data for each menu item
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
            <header className='flex justify-between px-4 py-3 shadow-md items-center sticky top-0 z-50 bg-white/60 backdrop-blur-md'>
                <ul className='hidden md:flex gap-4 font-medium'>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('home')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('home')}
                    >
                        Home
                    </li>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('about')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('about')}
                    >
                        About
                        
                    </li>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('products')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('products')}
                    >
                        Products & Services
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'products' ? 'rotate-180' : ''}`}
                            size='lg' 
                        />
                        {dropdownOpen === 'products' && (
                            <Dropdown items={dropdownData.products} />
                        )}
                    </li>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('policies')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('policies')}
                    >
                        Investor Relations
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'policies' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'policies' && (
                            <Dropdown items={dropdownData.investor_relations} />
                        )}
                    </li>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('investor')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('investor')}
                    >
                        Downloads
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'investor' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'investor' && (
                            <Dropdown items={dropdownData.downloads} />
                        )}
                    </li>
                    <li 
                        className={liClasses}
                        onMouseEnter={() => toggleDropdown('careers')}
                        onMouseLeave={() => toggleDropdown(null)}
                        onClick={() => toggleDropdown('careers')}
                    >
                        Careers
                        <FontAwesomeIcon 
                            icon={['fas', 'chevron-down']} 
                            className={`ml-2 transition-transform ${dropdownOpen === 'careers' ? 'rotate-180' : ''}`} 
                            size='lg' 
                        />
                        {dropdownOpen === 'careers' && (
                            <Dropdown items={dropdownData.careers} />
                        )}
                    </li>
                </ul>
                <span className='md:hidden cursor-pointer' onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={['fas', 'bars']} size='lg' />
                </span>
            </header>

            {isNavbarOpen && (
                <div className='md:hidden'>
                    <ul className='flex flex-col gap-4 p-4 bg-[#004fc5]'>
                        <li className={liClasses}>Home</li>
                        <li className={liClasses}>About</li>
                        <li className={liClasses}>
                            Products & Services
                            <FontAwesomeIcon 
                                icon={['fas', 'chevron-down']} 
                                className='ml-2' 
                                size='lg' 
                            />
                        </li>
                        <li className={liClasses}>
                            Policies & Compliance
                            <FontAwesomeIcon 
                                icon={['fas', 'chevron-down']} 
                                className='ml-2' 
                                size='lg' 
                            />
                        </li>
                        <li className={liClasses}>
                            Investor Relations
                            <FontAwesomeIcon 
                                icon={['fas', 'chevron-down']} 
                                className='ml-2' 
                                size='lg' 
                            />
                        </li>
                        <li className={liClasses}>Careers</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default SecondNavbar;
