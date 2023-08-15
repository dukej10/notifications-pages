import { Avatar, Grid, Box, Typography } from "@mui/material";

export const Notification = ({ notification, read }) => {
  let { name, action, target, readed, date, avatar } = notification;
  return (
    <Box sx={{ marginBottom: 1.5, width: "100%", py: 1 }} className="card ">
      <Grid container className="" sx={{ paddingRight: 2 }}>
        <Grid item xs={3} sm={2} md={2} className="">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar sx={{ width: 50, height: 50 }} alt={name} src={avatar} />
          </Box>
        </Grid>
        <Grid item xs={9} sm={10} md={10} className="container-text">
          <Box justifyContent="start" alignItems="start">
            {action === "comment" ? (
              <Grid container className="">
                <Grid item xs={9} sm={11} md={11} className="">
                  <Grid container className="">
                    <Grid container className="">
                      <Box>
                        <Typography className="name" variant="p">
                          {name}
                        </Typography>

                        <Typography variant="p" className="text-card">
                          {target.adicionalContent}
                        </Typography>
                        {target.type !== "message" && target.type !== "img" ? (
                          <Typography className="typ-hover" variant="p">
                            {target.principal}
                            {readed === false && read === false ? (
                              <span className="status"></span>
                            ) : (
                              ""
                            )}
                          </Typography>
                        ) : null}
                      </Box>
                    </Grid>
                    <Grid container className="">
                      <Typography className="date">{date}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3} sm={1} md={1} className="">
                  <Box display="flex" justifyContent="right">
                    <Box
                      component={"img"}
                      src={target.principal}
                      sx={{ width: 48, height: 50 }}
                      className="img"
                    ></Box>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Grid container className="">
                <Box>
                  <Typography className="name" variant="p">
                    {name}
                  </Typography>
                  <Typography variant="p" className="text-card  ">
                    {target.adicionalContent}
                  </Typography>
                  {target.type !== "message" &&
                  target.type !== "img" &&
                  target.principal ? (
                    <Typography className="typ-hover " variant="p">
                      {target.principal}
                    </Typography>
                  ) : null}
                  {readed === false && read === false ? (
                    <Box
                      justify-content="center"
                      align-items="center"
                      sx={{ my: "auto" }}
                      className={target.principal ? "status" : "status2"}
                      component="span"
                    ></Box>
                  ) : (
                    ""
                  )}
                </Box>

                <Grid container className="">
                  <Typography className="date">{date}</Typography>
                </Grid>
              </Grid>
            )}

            {target.type === "message" ? (
              <Grid container className="">
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
