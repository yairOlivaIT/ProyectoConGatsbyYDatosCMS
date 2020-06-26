import React from 'react';
import { graphql , useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImagenBackground = styled(BackgroundImage)`
    height: 700px;
`
const TextoImagen = styled.div`
    background-image: linear-gradient(to top, rgba(34,49,63,.8), rgba(34,49,63,.8));
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column; 
    flex: 1;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 4rem;
        margin: 0;

        @media(min-width:992px){
            font-size: 5.8rem;
        }
        @media(max-width:495px){
            font-size: 2.9rem;
        }
        @media(max-width:370px){
            font-size: 2.3rem;
        }
    }
    p{
        font-size: 2rem;

        @media(min-width:992px){
            font-size: 3.2rem;
        }
        @media(max-width:370px){
            font-size: 1.5rem;
        }
    }
`;
const ImagenHotel = () => {

    const { image } = useStaticQuery (graphql`
    query{
        image: file(relativePath:{ eq:"8.jpg" }) {
          sharp : childImageSharp{
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    // srcSetWebp

    // console.log(image.sharp.fluid);

    return ( 
        <ImagenBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <TextoImagen>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </TextoImagen>
        </ImagenBackground>
    );
}
 
export default ImagenHotel;