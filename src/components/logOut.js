// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";

// import { auth } from "../components/auth";
// import SignUp from "./signUp";
// import SignInSide from "./signIn";
// import SignUpFormik from "./formikForm";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper
//   }
// }));

// export default function LogOut(props) {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   function handleChange(event, newValue) {
//     setValue(newValue);
//   }

//   const logut = () => {
//     auth.signout(() => props.history.push("/"));
//     localStorage.setItem("isLoggedIn", false)
//   };

//   return (
//     <div className={classes.root}>
//       <div style={{ textAlign: "right" }}>
//         <span onClick={logut} style={{ cursor: "pointer" }}>
//           logout
//         </span>
//       </div>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="simple tabs example"
//         >
//           <Tab label="Sign Up" {...a11yProps(0)} />
//           <Tab label="Sign In" {...a11yProps(1)} />
//           <Tab label="Sign Up Formik" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <TabPanel value={value} index={0}>
//         <SignUp />
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <SignInSide handleChange={handleChange} a11yProps={a11yProps} />
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <SignUpFormik />
//       </TabPanel>
//     </div>
//   );
// }
