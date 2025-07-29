import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navbar: React.FC = () => {
    const [openContact, setOpenContact] = useState(false);

    const handleOpenContact = () => setOpenContact(true);
    const handleCloseContact = () => setOpenContact(false);

    return (
        <>
            <AppBar position="static" className="text-white">
                <Toolbar className="flex justify-between">
                    {/* Left Side */}
                    <Box className="flex items-center gap-2">
                        <IconButton href="/" edge="start" aria-label="home" className="">
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap className="font-semibold">
                            My Portfolio
                        </Typography>
                    </Box>

                    {/* Right Side */}
                    <Box className="flex items-center gap-2">
                        <IconButton
                            href="https://www.linkedin.com/in/triston-ramos"
                            target="_blank"
                            rel="noopener"
                            aria-label="LinkedIn"
                            className="text-white transition"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            href="https://github.com/TKSomar"
                            target="_blank"
                            rel="noopener"
                            aria-label="GitHub"
                            className="transition"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <Button
                            variant="outlined"
                            startIcon={<MailOutlineIcon />}
                            onClick={handleOpenContact}
                            className=""
                        >
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Contact Modal */}
            <Dialog open={openContact} onClose={handleCloseContact}>
                <DialogTitle className="font-semibold text-text-dark">Contact Me</DialogTitle>
                <DialogContent className="bg-surface text-secondary">
                    <Typography variant="body1">
                        Feel free to reach out via email or phone at:
                        <br />
                        <strong className="text-primary">tksomar@gmail.com | +1 (737) 341-3222</strong>
                    </Typography>
                </DialogContent>
                <DialogActions className="bg-background">
                    <Button onClick={handleCloseContact} className="text-primary hover:underline normal-case">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Navbar;
