import React, { useEffect, useState } from "react";
import LogoSI from "../../../Img/LogoSI.png";
import { ModalLogout } from "../../../Component/Modal";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import apiDosenProfil from "../../../lib/api/dosen/profil";

const TopBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [user, setUser] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getData = async () => {
      await apiDosenProfil.info().then((res) => setUser(res.data.data));
    };
    getData();
  }, []);

  return (
    <>
      <nav className="w-full pl-12 bg-gray-300 py-2">
        <div className="container mx-auto flex items-center justify-between">
          <img src={LogoSI} alt="logo" className="w-48" />
          <div className="flex fap-2 items-center mr-4">
            <span className="hidden sm:flex">{user.nama}</span>
            <IconButton onClick={handleClick} color="white">
              <FaUserCircle size="25" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/dosen/profil");
                }}
              >
                Profil
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setOpen(true);
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          {/* <FiLogOut size={24} className="cursor-pointer" onClick={() => setOpen(true)} /> */}
        </div>
      </nav>
      <ModalLogout open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default TopBar;
