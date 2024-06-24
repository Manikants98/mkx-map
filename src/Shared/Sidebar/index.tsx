import { Close, Menu } from "@mui/icons-material";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useState } from "react";
import { useTheme } from "../../Context/ThemeContext";
import classNames from "classnames";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { mode, setMode } = useTheme();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconButton onClick={handleOpen}>
        <Menu
          className={classNames(
            "lg:!text-4xl lg:text-white",
            mode === "dark" ? "text-black" : ""
          )}
        />
      </IconButton>
      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{ className: "!flex !flex-col !justify-between w-72" }}
      >
        <List>
          <ListItem className="!flex !justify-end">
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </ListItem>
          <ListItemButton>Home</ListItemButton>
          <ListItemButton>Guide</ListItemButton>
          <ListItemButton>About</ListItemButton>
          <ListItemButton>FAQs</ListItemButton>
          <ListItemButton>Privacy Policy</ListItemButton>
          <ListItemButton>Terms and Conditions</ListItemButton>
        </List>
        <List>
          <ListItemButton
            onClick={() => {
              mode === "dark" ? setMode("light") : setMode("dark");
              handleClose();
            }}
            className="!capitalize"
          >
            {mode} Mode
          </ListItemButton>
          <ListItem>Language Conversion</ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
