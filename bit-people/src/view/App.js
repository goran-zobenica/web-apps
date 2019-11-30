import React from 'react';
import Main from './Main';
import Header from '../components/Header'
import Footer from '../components/Footer'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isList: !!JSON.parse(localStorage.getItem("isList")) };
  }



  showAboutPage = () => {
  }

  render() {
    return (
      <div className="App">
        <Header isList={this.state.isList} onChangeLayout={this.changeLayout} showAboutPage={this.showAboutPage} />
        <Main isList={this.state.isList} />
        <Footer />
      </div>
    );
  }
}

export default App;
