import React from "react";
import Page from "./attractions/page";
import Layout from "./attractions/layout";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";


export default function page() {
  return (
    <div>
      <Layout />
      <Typography variant="h2" style={{ marginTop: "20px", marginBottom: "20px" }}>Full-Stack Web API</Typography>
      <Page />
    </div>
  );
}
