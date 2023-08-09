import { Avatar, Grid, Box, Typography } from "@mui/material";

export const Notification = ({ notification, read }) => {
  let { name, action, target, readed, date, avatar } = notification;
  return (
    <Box
      sx={{ marginBottom: 1.5, width: "100%" }}
      className="card layout-helper"
    >
      <Grid container className="">
        <Grid item xs={2} sm={2} md={1} className="">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar sx={{ width: 50, height: 50 }} alt={name} src={avatar} />
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={11} className="">
          <Box justifyContent="start" alignItems="start">
            {action === "comment" ? (
              <Grid container className="">
                <Grid item xs={10} sm={11} md={11} className="">
                  <Grid container className="">
                    <Grid container className="">
                      <Typography className="name">
                        {name}
                        <Typography variant="p" className="text-card">
                          {target.adicionalContent}
                          {target.type !== "message" &&
                          target.type !== "img" ? (
                            <Typography className="typ-hover" variant="p">
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
                    <Grid container className="">
                      <Typography className="date">{date}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} sm={1} md={1} className="">
                  <Box display="flex" justifyContent="right">
                    <Box
                      component={"img"}
                      src={target.principal}
                      sx={{ width: 48, height: 50 }}
                    ></Box>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Grid container className="layout-helper">
                <Typography className="name" variant="p">
                  {name}
                  <Typography variant="p" className="text-card  layout-helper">
                    {target.adicionalContent}
                    {target.type !== "message" && target.type !== "img" ? (
                      <Typography
                        className="typ-hover layout-helper"
                        variant="p"
                      >
                        {target.principal}
                      </Typography>
                    ) : null}
                  </Typography>
                </Typography>

                {readed === false && read === false ? (
                  <Box
                    display="flex"
                    justify-content="center"
                    align-items="center"
                    sx={{ my: "auto" }}
                    className="status"
                    component="span"
                  ></Box>
                ) : (
                  ""
                )}

                <Grid container className="layout-helper">
                  <Typography className="date">{date}</Typography>
                </Grid>
              </Grid>
            )}

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
