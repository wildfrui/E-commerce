//external deps
import React from "react";
import jwt_decode from "jwt-decode";
//internal deps
//css
import "./GoogleAuth.css";

//пока что выйти можно только перезагрузив страницу. допилить sign out  и разобраться с тем что значок гугла пропадает при ререндере

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false, email: null, sub: null, pic: null };
    this.handleCredentialResponse = this.handleCredentialResponse.bind(this);
  }

  //функция callback которая достает jwt токен из response, декодит его и получает объект с информацией о пользователе
  handleCredentialResponse(response) {
    const decodedJWT = jwt_decode(response.credential);
    console.log(decodedJWT);
    this.setState({
      isSignedIn: true,
      email: decodedJWT.email,
      sub: decodedJWT.sub,
      pic: decodedJWT.picture,
    });
  }

  componentDidMount() {
    //ждем загрузки библиотеки
    window.onload = () => {
      //инициализируем библиотеку с ключом и коллбэком который принимает response
      window.google.accounts.id.initialize({
        client_id:
          "508580598361-n87o2omje7rirvg1hqmnbp2eorb682bp.apps.googleusercontent.com",
        callback: this.handleCredentialResponse,
      });
      //рендерим кнопку на экран
      window.google.accounts.id.renderButton(
        document.getElementById("google__button"),
        { theme: "outline", size: "large", type: "icon", shape: "circle" } // customization attributes
      );
    };
  }

  // условный рендеринг в зависимости от того вошел ли пользователь или нет
  renderStatus = () => {
    const { isSignedIn, email, pic } = this.state;
    if (isSignedIn && email) {
      return (
        // возвращаем фото профиля если вошел
        <React.Fragment>
          <img className="google__pic" src={pic} alt="" />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <button id="google__button"></button>
          <p className="google__status">Log in</p>
        </React.Fragment>
      );
    }
  };

  render() {
    return <div className="google__auth ">{this.renderStatus()}</div>;
  }
}

export default GoogleAuth;
