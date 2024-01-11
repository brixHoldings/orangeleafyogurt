import NextLink from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OuterContainer = styled.nav`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
`;

export const Container = styled.div`
  padding: 18px 40px;
  background-color: #fff;
  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
  border-radius: 0px 0px 16px 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  white-space: nowrap;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkSection = styled(Section)`
  gap: 55px;
  @media (max-width: 1140px) {
    flex: 1;
    justify-content: space-evenly;
    gap: 0;
  }
`;

export const Link = styled(NextLink)`
  text-decoration: none;
  position: relative;
  font-size: 18px;
  line-height: 25px;
  color: #421b00;
  &[data-is-active='true'] {
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #4e3629;
      width: 100%;
      height: 2px;
      border-radius: 2px;
    }
  }
`;

export const ButtonLink = styled.button`
  text-decoration: none;
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: var(--century-gothic);
  font-size: 18px;
  line-height: 25px;
  color: #421b00;
  text-transform: initial;
  &[data-is-active='true'] {
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #4e3629;
      width: 100%;
      height: 2px;
      border-radius: 2px;
    }
  }
`;

export const ButtonLinkAsAnchor = styled.a`
  text-decoration: none;
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: var(--century-gothic);
  font-size: 18px;
  line-height: 25px;
  color: #421b00;
  text-transform: initial;
  &[data-is-active='true'] {
    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      background: #4e3629;
      width: 100%;
      height: 2px;
      border-radius: 2px;
    }
  }
`;

export const Separator = styled.div`
  width: 2px;
  height: 30px;
  background: #ff6b00;
  border-radius: 1px;
  margin: 0 20px;
`;

export const Button = styled.button`
  font-size: 14px;
  line-height: 13px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 35px;
  background: #ff9828;
  box-shadow: 0px 0px 10px rgba(113, 49, 14, 0.3);
  border: none;
  color: #ffffff;
  cursor: pointer;
`;

export const MobileWrapper = styled.nav`
  width: 100%;
  background: #fff;
  padding: 7px 24px 6px 24px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;
  z-index: 1000;
  align-items: center;
  position: fixed;
  top: 0;
`;

export const HomeLink = styled(Link)`
  padding: 5px;
  display: inline-flex;
  margin-left: -5px;
`;

export const HamburgerButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  background: transparent;
  padding: 13px 12px;
  cursor: pointer;
  margin-right: -12px;
`;

export const HamburgerMenu = styled(motion.div)`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  z-index: 2000;
  width: 100%;
  background: #fff;
  padding: 40px 23px 60px 32px;
  box-shadow: 0px 6px 20px rgba(63, 26, 0, 0.1);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &[data-is-open='false'] {
    pointer-events: none;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 13px;
  right: 25px;
  padding: 6px 12px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
