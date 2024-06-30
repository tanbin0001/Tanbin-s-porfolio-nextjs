
"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Divider, List, ListItem, Stack } from "@mui/material";
import Link from "next/link";
import { ListItemButton, ListItemText } from "@mui/material";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

export default function DashboardDrawer({ children }: { children: React.ReactNode }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const pathname = usePathname();

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Box sx={{ display: "flex", bgcolor: "black", color: "white" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    bgcolor: "#15191C",
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 0,
                    borderBottom: "1px solid #333",
                    py: 1,
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon sx={{ color: "white" }} />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="body2"
                                noWrap
                                component="div"
                                sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                            >
                                Hey,
                            </Typography>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ color: "white" }}
                            >
                                Boss, Welcome back!
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            bgcolor: "#15191C",
                            color: "white",
                        },
                    }}
                />
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            bgcolor: "#15191C",
                            color: "white",
                        },
                    }}
                    open
                >
                    <Box>
                        <Stack
                            sx={{
                                py: 1,
                                mt: 1,
                            }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            gap={1}
                            component={Link}
                            href="/"
                        >

                        </Stack>
                        <List>
                            <Link href="/dashboard/admin/projects/add-projects">
                                <ListItem
                                    disablePadding
                                    sx={{
                                        ...(pathname === "/dashboard/admin/projects/add-projects"
                                            ? {
                                                borderRight: "3px solid #67d2f0",
                                                "& svg": {
                                                    color: "#6db784",
                                                }, color: "#9de7fc"
                                            }
                                            : {}),
                                        mb: 1,
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Add Project" />
                                    </ListItemButton>


                                </ListItem>
                            </Link>

                            <Link href="/dashboard/admin/projects/all-projects">
                                <ListItem
                                    disablePadding
                                    sx={{
                                        ...(pathname === "/dashboard/admin/projects/all-projects"
                                            ? {
                                                borderRight: "3px solid #67d2f0",
                                                "& svg": {
                                                    color: "#9de7fc",
                                                },
                                                color: "#9de7fc"
                                            }
                                            : {}),
                                        mb: 1,
                                    }}
                                >
                                    <ListItemButton>
                                        <ListItemText primary="Add Projects" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                    </Box>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    bgcolor: "black",
                    color: "white",
                }}
            >
                <Toolbar />
                <Box sx={{
                    bgcolor: '#15191C'
                }}>{children}</Box>
            </Box>
        </Box>
    );
}
