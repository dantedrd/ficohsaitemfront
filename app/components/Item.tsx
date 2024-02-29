"use client";

import { useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import { Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import {itemStore} from "../store/ItemStore";

export default function Item(props: any) {
    const {setItem,item} = itemStore();

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