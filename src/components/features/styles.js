import styled from 'styled-components';
import { device } from '../../tokens/screen';

export const Container = styled.div`
  background: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  font-family: 'Roboto', sans-serif;
`;

export const Title = styled.h2`
  color: white;
  font-size: 35px;
  width: 290px;
  text-align: center;
  margin-bottom: 30px;

  @media ${device.mobileM} {
    width: 180px;
  }

  @media ${device.mobileM} {
    width: 250px;
  }

  @media ${device.tablet} {
    width: 500px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 15px;
  text-align: center;
  width: 290px;
  margin-bottom: 30px;
  line-height: 25px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 350px;
  }

  @media ${device.tablet} {
    width: 500px;
    margin-bottom: 60px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 150px;
  margin-bottom: 50px;

  @media ${device.mobileS} {
    width: 200px;
  }

  @media ${device.mobileM} {
    width: 280px;
  }

  @media ${device.tablet} {
    width: 600px;
  }

  @media ${device.laptop} {
    width: 600px;
  }
`;

export const BoxTitleInforation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TitleInforation = styled.h3`
  color: white;
  font-size: 20px;
  width: 170px;
`;

export const IconFeatures = styled.img`
  width: 25px;
  padding-right: 10px;
`;

export const TextIformation = styled.p`
  color: white;
  font-size: 13px;
  text-align: left;
  width: 180px;
  margin-bottom: 35px;
  line-height: 25px;

  @media ${device.tablet} {
    margin-bottom: 20px;
  }
`;
