"use client";


import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import {itemStore} from "../store/ItemStore";

/**
 * Element search component.
 * @module ItemSearch
 * @param {Object} props - The component properties.
 * @returns {JSX.Element} The item search component.
 */
export default function ItemSearch(props: any) {

    /**
     * The search item state.
     * @type {Object}
     * @property {string} searchItem - The current search item.
     * @property {Function} search - The search function to update the search state.
     */
    const { searchItem, search } = itemStore();

    const router = useRouter();

    /**
     * Redirects to another page with the current search item.
     * @returns {void}
     */
    const redirectToAnotherPage = () => {
      router.push(`/items?search=${searchItem}`);
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