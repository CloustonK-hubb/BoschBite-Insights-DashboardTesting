import { useState, useEffect } from "react";
import { useDataProvider, Title } from "react-admin";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export const Dashboard = () => {
  const dataProvider = useDataProvider();
  const [topFood, setTopFood] = useState(null);
  const [topCategory, setTopCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataProvider
      .getList("foods", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => {
        // Highest priced item
        if (data.length > 0) {
          const highest = [...data].sort((a, b) => b.price - a.price)[0];
          setTopFood(highest);
        }

        // Most common category
        const counts = data.reduce((acc, food) => {
          acc[food.category] = (acc[food.category] || 0) + 1;
          return acc;
        }, {});
        const sortedCategories = Object.entries(counts).sort((a, b) => b[1] - a[1]);
        if (sortedCategories.length > 0) {
          setTopCategory({ name: sortedCategories[0][0], count: sortedCategories[0][1] });
        }

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [dataProvider]);

  return (
    <div>
      <Title title="Dashboard" />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Highest Priced Item
              </Typography>
              {loading ? (
                <Typography>Loading…</Typography>
              ) : topFood ? (
                <>
                  <Typography variant="h5">{topFood.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    R{topFood.price}
                  </Typography>
                </>
              ) : (
                <Typography>No data</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Most Common Category
              </Typography>
              {loading ? (
                <Typography>Loading…</Typography>
              ) : topCategory ? (
                <>
                  <Typography variant="h5">{topCategory.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {topCategory.count} item{topCategory.count !== 1 ? "s" : ""}
                  </Typography>
                </>
              ) : (
                <Typography>No data</Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};