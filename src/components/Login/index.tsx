import React, {useState, useRef, useEffect, KeyboardEvent} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Https";
import EmailIcon from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { makeStyles  } from '@material-ui/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";
import { Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1) * 2,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },
  backgroundGreen: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    width: "100%"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  learnMore: {
    color: "white",
    borderColor: "white"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    right: 133.69 / 2 - 33 / 2,
    marginTop: -12,
    marginLeft: -12
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  textError: {
    color: theme.palette.error.main
  }
}));

export type LoginProps = {
  onLogin: Function
}

const Login = ({onLogin}: LoginProps) =>  {

    const classes = styles()

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [emailFieldEmpty, setemailFieldEmpty] = useState(false);
    const [passwordFieldEmpty, setpasswordFieldEmpty] = useState(false);
    const _inputEmail = useRef<HTMLInputElement>(null);
    const [showPreloader, setShowPreloader] = useState(false)
    const [message, setMessage] = useState("");
    
    const _onLogin = () => {
      setShowPreloader(true);
      setemailFieldEmpty(false);
      setpasswordFieldEmpty(false);
    
      if (!email.length) {
        setemailFieldEmpty(true);
    
        return;
      } else if (!password.length) {
        setpasswordFieldEmpty(true)
   
        return;
      }
    
      onLogin(email, password, setShowPreloader, setMessage);
    }

    const _onClickEnter = (event : KeyboardEvent<HTMLDivElement>) => {
      if (event.key == "Enter") {
        _onLogin();
      }
    }

    useEffect(() => {
      _inputEmail?.current?.focus()
    },[])

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
          >
            <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
              <Paper
                elevation={0}
                className={[classes.paper, classes.backgroundGreen].join(" ")}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <div>
                  <br />
                  <Typography
                    style={{
                      color: "white"
                    }}
                    variant="h4"
                    gutterBottom
                  >
                    Welcome to the Sensedia Architecture Center.
                  </Typography>
                  <Typography
                    style={{
                      color: "white"
                    }}
                    variant="h5"
                    gutterBottom
                  >
                    Share and get inspired with use cases already performed by the Sensedia team
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
              <Paper
                elevation={0}
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <div style={{ margin: "0 auto" }}>
                  <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    align="center"
                  >
                    <b>Architecture Center</b>
                  </Typography>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    <TextField
                      inputRef={_inputEmail}
                      disabled={showPreloader}
                      error={emailFieldEmpty}
                      helperText={
                        emailFieldEmpty
                          ? "The email field is empty"
                          : ""
                      }
                      onChange={el => setemail(el.target.value )}
                      onKeyUp={_onClickEnter}
                      className={classes.text}
                      label="Type your email"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <EmailIcon />
                          </InputAdornment>
                        )
                      }}
                    />

                    <TextField
                      disabled={showPreloader}
                      error={passwordFieldEmpty}
                      helperText={
                        passwordFieldEmpty
                          ? "The password field is empty"
                          : ""
                      }
                      onChange={el =>
                        setpassword(el.target.value)
                      }
                      onKeyUp={_onClickEnter}
                      type="password"
                      className={classes.text}
                      label="Password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockIcon />
                          </InputAdornment>
                        )
                      }}
                    />

                    <Typography
                      className={classes.textError}
                      variant="subtitle2"
                      gutterBottom
                      align="center"
                    >
                      {message}
                    </Typography>
                    <div
                      style={{
                        textAlign: "right"
                      }}
                    >
                      <br />
                      <div className={classes.wrapper}>
                        <Button
                          onClick={_onLogin}
                          size="large"
                          variant="contained"
                          color="primary"
                          disabled={showPreloader}
                        >
                          Sign In
                          <Check />
                        </Button>
                        {showPreloader && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                 
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  
}

export default Login;