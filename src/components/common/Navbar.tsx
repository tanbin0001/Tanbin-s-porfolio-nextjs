
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
        <Navbar className="dark:bg-black dark:border-black text-white !important">

            <NavbarContainer>
                <NavbarList >
                    <NavbarItem>Projects</NavbarItem>
                    <NavbarItem>Research</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                </NavbarList>
                <NavbarBrand>
                    <Image alt='logo' width={50} height={50} src={logo} />
                </NavbarBrand>
                <NavbarList>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavbarItem>Projects</NavbarItem>
                    <NavbarItem>Research</NavbarItem>
                    <NavbarItem>Contact</NavbarItem>
                    <NavbarItem>Figma</NavbarItem>
                    <NavbarItem>Documentation</NavbarItem>
                    <NavbarItem>Blog</NavbarItem>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
