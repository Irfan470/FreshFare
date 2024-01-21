import styled from "styled-components";

export const ImageSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;


    &:hover {
        transform: scale(1.1);
    }
`;

export const ThumbnailList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

`;

export const ThumbnailImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
    cursor: pointer;
    margin: 0 5px;
    border: 2px solid transparent;
    border-radius: 5px;

    transition: border-color 0.3s ease-in-out;
    

    &:hover {
        border-color: #000;

    }
`;

