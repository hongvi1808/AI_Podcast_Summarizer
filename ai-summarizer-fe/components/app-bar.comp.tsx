'use client';
import { AppBar, Button, Container, IconButton, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { ButtonBase } from './buttons/button-base.comp';
import { APP_MENU_ITEMS } from '@/utils/constant';

interface IAppBarMainProps {
}

const AppBarMain: React.FunctionComponent<IAppBarMainProps> = (props) => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2}>
                        {APP_MENU_ITEMS.map((item, index) => (
                            <ButtonBase key={index}
                                href={item.href}
                                component={Link}
                                color="inherit"     
                            >   
                                {item.title}
                            </ButtonBase>   
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppBarMain;
