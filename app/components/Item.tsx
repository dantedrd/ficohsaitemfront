"use client";

import { useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import {itemStore} from "../store/ItemStore";

/**
 * Component displaying details of an item.
 * @module Item
 * @param {Object} props - The component properties.
 * @param {Object} props.item - The item to display details for.
 * @returns {JSX.Element} The item component.
 */
export default function Item(props: any) {

    /**
     * State and actions from the item store.
     * @type {Object}
     * @property {Function} setItem - Function to set the item in the store.
     * @property {Object} item - The item from the store.
     */
    const {setItem,item} = itemStore();

    /**
     * Updates the item in the store when the component mounts or when the item prop changes.
     * @returns {void}
     */
    useEffect(() => {
        setItem(props.item)
    }, [props.item])

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    id: {item.id}
                </Typography>
                <Typography variant="h5" component="div">
                    name: {item.name}
                </Typography>
                <Typography variant="h5" component="div">
                    Fecha de creacion:  {item.createdAt}
                </Typography>
                <Typography variant="h5" component="div">
                    Fecha de modificacion:  {item.updatedAt}
                </Typography>
            </CardContent>
        </Card>
    )
}