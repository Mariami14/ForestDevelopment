import React from 'react';
import {FooterBg, FooterIcon, FooterIcons, FooterLink, FooterLinks} from "./FooterElemet";
import {FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon} from "../svg";

const Footer = () => {

    return (
        <FooterBg id='footer'>
            <FooterIcons>
                <FooterIcon className={'footerIcon'}>
                    <WhatsappIcon/>
                </FooterIcon>
                <FooterIcon className={'footerIcon'}>
                    <InstagramIcon/>
                </FooterIcon>
                <FooterIcon className={'footerIcon'}>
                    <FacebookIcon/>
                </FooterIcon>
                <FooterIcon className={'footerIcon'}>
                    <LinkedinIcon/>
                </FooterIcon>
            </FooterIcons>

        </FooterBg>
    );
};

export default Footer;
