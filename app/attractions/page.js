import React from "react";
import { getData } from "./data";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";

// ทุกครั้งที่เรียกใช้ async
// ต้องใส่คำสั่ง await
export default async function Page() {
  const data = await getData();
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((attraction) => (
          <Grid item key={attraction.id} xs={12} md={4}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image={attraction.coverimage}
                title={attraction.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {attraction.detail}
                </Typography>
              </CardContent>

              <CardActions>
                <a href={`/attractions/${attraction.id}`}>
                  <Button size="small">Learn More</Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
