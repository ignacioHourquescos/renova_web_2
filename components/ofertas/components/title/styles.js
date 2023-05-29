import styled from "styled-components";
import device from "../../../../utils/utils";

export const Inner = styled.div`
  color: black;
  border-bottom: 5px solid black;
  font-size: 2rem;
  font-weight: bold;
  width: 100%;
  margin-bottom: 3rem;
  background-color: black;
  padding: 1rem 0;
  color: white;
  text-align: center;
  margin-top: 4rem;
  @media ${device.mobileL} {
    width: 100%;
    margin: 10% 0;
  }
`;
