import {Component} from 'react'

import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginFormCont,
  FormCont,
  Logo,
  InputCont,
  InputLabel,
  Input,
  CheckboxCont,
  CheckboxInput,
  CheckboxLabel,
  LoginBtn,
  Error,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showError: false,
  }

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShow = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showPassword, showError, errorMsg} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const inputType = showPassword ? 'text' : 'password'

          return (
            <LoginFormCont>
              <FormCont onSubmit={this.submitForm}>
                <Logo src={logoUrl} />
                <InputCont>
                  <InputLabel htmlFor="username">USERNAME</InputLabel>
                  <Input
                    value={username}
                    id="username"
                    onChange={this.onChangeName}
                    type="text"
                    placeholder="Username"
                  />
                </InputCont>

                <InputCont>
                  <InputLabel htmlFor="password">PASSWORD</InputLabel>
                  <Input
                    value={password}
                    id="password"
                    onChange={this.onChangePassword}
                    type={inputType}
                    placeholder="Password"
                  />
                </InputCont>

                <CheckboxCont>
                  <CheckboxInput
                    onChange={this.onChangeShow}
                    id="checkbox"
                    type="checkbox"
                  />
                  <CheckboxLabel htmlFor="checkbox">
                    Show Password
                  </CheckboxLabel>
                </CheckboxCont>
                <LoginBtn type="submit">Login</LoginBtn>
                {showError && <Error>{errorMsg}</Error>}
              </FormCont>
            </LoginFormCont>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default LoginForm
