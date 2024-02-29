"use client";

import { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import itemStore from "../store/ItemStore";

export default function ItemSearch(props: any) {

    const search = itemStore(state => state.search);
    const searchItem = itemStore(state => state.searchItem);

    const router = useRouter();

    const redirectToAnotherPage = () => {
      router.push(`/items?search=${searchItem}`); // Redirecciona a /otra-pagina
    };


    return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh', // Altura completa de la ventana
                }}
            >
                <TextField
                    label="Buscar"
                    variant="outlined"
                    onChange={(e) => search(e.target.value)}
                    style={{ width: '80%', marginBottom: '16px' }} // Ancho del 80%
                />
                <Button variant="contained" color="primary" disabled={searchItem&&searchItem!==""?false:true} onClick={redirectToAnotherPage}>
                    Buscar
                </Button>
            </div>
    )
}