import * as React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Https";
import EmailIcon from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/styles';
import CircularProgress from "@material-ui/core/CircularProgress";
import green from "@material-ui/core/colors/green";

const styles = (theme) => ({
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
});



class Login extends React.Component {
  state = {
    email: "",
    password: "",
    emailFieldEmpty: false,
    passwordFieldEmpty: false
  };

  _inputEmail;

  constructor(props) {
    super(props);

    this._onClickEnter = this._onClickEnter.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
    this._inputEmail = {focus(){}};
  }

  componentDidMount() {
    if (this._inputEmail !== undefined) {
      this._inputEmail.focus();
    }
  }

  _onLogin() {
    window.location.href = "/";
    let { onLogin } = this.props;

    this.setState({ passwordFieldEmpty: false, emailFieldEmpty: false });

    if (!this.state.email.length) {
      this.setState({ emailFieldEmpty: true });

      return;
    } else if (!this.state.password.length) {
      this.setState({ passwordFieldEmpty: true });

      return;
    }

    onLogin(this.state.email, this.state.password);
  }

  _onClickEnter(event) {
    if (event.key == "Enter") {
      this._onLogin();
    }
  }

  responseFacebook(res) {
    this.props.oauthFacebook(res.accessToken);
  }

  render() {
    let {
      classes,
      state: { showPreloader = false, success = true, message = "" }
    } = this.props;

    const buttonClassname = makeStyles({
      [classes.buttonSuccess]: success
    });

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.demo}>
          <Grid
            container
            className={classes.demo}
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
                      inputRef={input => (this._inputEmail = input)}
                      disabled={showPreloader}
                      error={this.state.emailFieldEmpty}
                      helperText={
                        this.state.emailFieldEmpty
                          ? "The email field is empty"
                          : ""
                      }
                      onChange={el => this.setState({ email: el.target.value })}
                      onKeyUp={this._onClickEnter}
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
                      error={this.state.passwordFieldEmpty}
                      helperText={
                        this.state.passwordFieldEmpty
                          ? "The password field is empty"
                          : ""
                      }
                      onChange={el =>
                        this.setState({ password: el.target.value })
                      }
                      onKeyUp={this._onClickEnter}
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
                          onClick={this._onLogin.bind(this)}
                          size="large"
                          variant="contained"
                          color="primary"
                          className={buttonClassname}
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
}

export default withStyles(styles)(Login);