import React from "react"
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/contenidoincio';
import useHabitaciones from '../hooks/use-habitaciones';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import HabitacionPreview from '../components/habitacionPreview';

const ListaHabitaciones = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display : grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const habitaciones = useHabitaciones();
  
  return(
    <Layout>
      <ImagenHotel />

      <ContenidoInicio />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2>

      <ListaHabitaciones>
        {habitaciones.map(habitacion => (
          <HabitacionPreview 
            key= {habitacion.id}
            habitacion = {habitacion}
          />
        ))}
      </ListaHabitaciones>

    </Layout>
  )
}

export default IndexPage
