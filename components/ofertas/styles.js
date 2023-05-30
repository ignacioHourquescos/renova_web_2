import device from "../../utils/utils";
import styled from "styled-components";

export const Styled = {
  Inner: styled.div`
    width: 100%;
    background-color: red;
  `,
  Container: styled.div`
    width: 75%;
    margin: 0 12.5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: none;

    @media ${device.mobileL} {
      width: 90%;
      margin: 5%;
    }
  `,
  ProductsContainer: styled.div`
    width: 75%;
    margin: 0 12.5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: none;
    @media ${device.mobileL} {
      width: 90%;
      margin: 5%;
    }
  `,
};
