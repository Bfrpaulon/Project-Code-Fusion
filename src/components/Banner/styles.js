import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const BannerTitle = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const BannerSubtitle = styled.h3`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 400;
`;
