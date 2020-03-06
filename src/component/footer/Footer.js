import React from 'react';
import './footer.scss'
import gerb from "../../assets/img/gerb.png";
import phone from "../../assets/img/phone.png";
import email from "../../assets/img/email.png";

const Footer = (props) => {
  return (
      <footer className="footer">
        <div className={'footer-top'}>
          <div className={'footer-bottom'}>
            <div className="container">
              <div className="row">
                <div className="footer-about">
                  <img src={gerb} alt="logo" className={'footer-about-gerb'}/>
                  <span className={'footer-about-caption'}>
                      Министерство просвещения <br/> РОССИЙСКОЙ ФЕДЕРАЦИИ
                  </span>
                </div>
                <div className="footer-info">
                    <span>
                    <img src={phone} alt="logo"/>
                    <span>+7 (495) 539-55-19</span>
                      </span>
                  <span>
                    <img src={email} alt="logo"/>
                  <span>Вопросы по технической поддержке сайта</span>
                      </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
