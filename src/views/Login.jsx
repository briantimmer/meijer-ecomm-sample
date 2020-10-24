import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import GlobalContext from "../context/GlobalContext";

/**
 * Login view
 */
class Login extends Component {
  static contextType = GlobalContext;

  /**
   * Builds the initial state of the component
   * @constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      signinError: "",
    };
  }

  /**
   * Monitors to see if the user presses the [Enter] when filling
   * in the login form
   * @param {object} e Key code object of the key pressed
   */
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.login();
    }
  };

  /**
   * Attempts to log in the user. Simple validation of required fields.
   * If the login is successful the profile is redirected to the home page.
   */
  login = () => {
    if (this.state.username === "" || this.state.password === "") {
      this.setState({
        signinError: "Both Username and Password are required.",
      });
    } else {
      const loggedIn = this.context.login(
        this.state.username,
        this.state.password
      );
      if (!loggedIn) {
        this.setState({ signinError: "Incorrect Username or Password." });
      } else {
        this.props.history.push("/");
      }
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card className="mt-4">
              <CardBody>
                <h3>Sign In</h3>
                <FormGroup row>
                  <Col>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(event) =>
                        this.setState({ username: event.target.value })
                      }
                      onKeyPress={this.handleKeyPress}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                      onKeyPress={this.handleKeyPress}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col className="text-center">
                    <Button
                      color="primary"
                      size="lg"
                      block
                      onClick={() => this.login()}
                    >
                      Sign In
                    </Button>
                    {this.state.signinError !== "" && (
                      <p className="mt-2 text-danger">
                        <strong>{this.state.signinError}</strong>
                      </p>
                    )}
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
