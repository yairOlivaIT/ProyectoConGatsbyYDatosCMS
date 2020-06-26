import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const query = graphql`
    query($slug: String!){
        allDatoCmsHabitacion(filter: {slug : { eq : $slug }}){
            nodes{
                titulo
                contenido
                imagen{
                    fluid(maxWidth: 1200){
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`;


const Contenido = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        column-gap: 3rem;
    }

    

    p{
        line-height: 2;
        margin-top: 2rem;
    }
`;

const HabitacionTemplate = ({data: { allDatoCmsHabitacion: { nodes }}}) => {
 
  const { titulo , contenido , imagen } = nodes[0];

  return ( 
    <Layout>
        <main
            css={css`
                margin: 0 auto;
                max-width: 1200px;
                width: 95%;
            `}
        >
            <h1
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                    
                `}
            >{titulo}</h1>

            <Contenido>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />
            </Contenido>
        </main>
    </Layout>
  );
}
 
export default HabitacionTemplate;