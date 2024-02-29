"use client";

import { useEffect } from "react";
import { IconButton, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import itemStore from "../store/ItemStore";

export default function ItemList(props: any) {

    const setItems = itemStore(state => state.setItems);
    const items = itemStore(state => state.items);

    useEffect(() => {
        setItems(props.itemsList.data)
    }, [props.itemsList])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Fecha de creacion</TableCell>
                        <TableCell align="right">Fecha de modificacion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="right"> <Link href={`/item/${row.id}`}>
                                <IconButton color="primary">
                                    <VisibilityIcon />
                                </IconButton>
                            </Link></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}