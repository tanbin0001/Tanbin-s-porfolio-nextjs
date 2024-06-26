
import {
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import Image from 'next/image'

import logo from '../../assets/logo.png'

export const Nav = () => {
    return (
        <div className=' '>
            <div>
                <Navbar className="dark:bg-black dark:border-black text-white !important">

                    <NavbarContainer>
                        <NavbarList >
                            <a href="#home">

                                <NavbarItem>Home</NavbarItem>
                            </a>
                            <a href="#projects">

                                <NavbarItem>Projects</NavbarItem>
                            </a>
                            <a href="#aboutme">

                                <NavbarItem>About</NavbarItem>
                            </a>

                        </NavbarList>
                        <NavbarBrand>
                            <Image alt='logo' width={50} height={50} src={logo} />
                        </NavbarBrand>
                        <NavbarList>
                            <a href="#experience">

                                <NavbarItem>Experience</NavbarItem>
                            </a>
                            <a href="#technologies">

                                <NavbarItem>Technologies</NavbarItem>
                            </a>
                            <a href="#contact">

                                <NavbarItem>Contact</NavbarItem>
                            </a>
                        </NavbarList>
                        <NavbarCollapseBtn />
                        <NavbarCollapse>
                            <a href="#home">

                                <NavbarItem>Home</NavbarItem>
                            </a>
                            <a href="#projects">

                                <NavbarItem>Projects</NavbarItem>
                            </a>
                            <a href="#aboutme">

                                <NavbarItem>About</NavbarItem>
                            </a>
                            <a href="#experience">

                                <NavbarItem>Experience</NavbarItem>
                            </a>
                            <a href="#technologies">

                                <NavbarItem>Technologies</NavbarItem>
                            </a>
                            <a href="#contact">

                                <NavbarItem>Contact</NavbarItem>
                            </a>
                        </NavbarCollapse>
                    </NavbarContainer>
                </Navbar>
            </div>
        </div>
    )
}
