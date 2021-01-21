import React from 'react'
import Header from './Header/Header'
import HeaderTwo from './Header/HeaderTwo'
export default function Layouts({children}) {
    return (
        <>
        <HeaderTwo/>
        {children}
        </>
    )
}
