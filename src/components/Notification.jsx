import { Avatar, Grid, Box, Typography } from "@mui/material";

export const Notification = ({ notification, read }) => {
  let { name, action, target, readed, date, avatar } = notification;
  return (
    <Box sx={{ mx: "auto", width: 650 }} className="card">
      <Grid container className="layout-helper">
        <Grid item xs={1} sm={1} className="layout-helper">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt={name}
              src={notification.avatar}
            />
          </Box>
        </Grid>
        <Grid item xs={9} sm={11} className="layout-helper">
          <Box
            justifyContent="start"
            alignItems="start"
            className="layout-helper"
          >
            <Grid container className="layout-helper">
              <Typography className="name">
                {name}
                <Typography variant="p" className="text-card">
                  {target.adicionalContent}
                  {target.type !== "message" && target.type !== "img" ? (
                    <Typography className="typ-hover" variant="p" color={"red"}>
                      {target.principal}
                      {readed === false && read === false ? (
                        <span className="status"></span>
                      ) : (
                        ""
                      )}
                    </Typography>
                  ) : null}
                </Typography>
              </Typography>
            </Grid>
            <Grid container className="layout-helper">
              <Typography className="date">{date}</Typography>
            </Grid>
            {target.type === "message" ? (
              <Grid container className="layout-helper">
                <Box className=" message-container">
                  <Typography className="message">
                    {target.principal}
                  </Typography>
                </Box>
              </Grid>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
