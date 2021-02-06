import { Link } from '@material-ui/core'
import React from 'react'

export default function ErrorNoinfo() {
    return (
        <div>
            <h1>This is a dummy link.We Don't have the required data to display the info</h1>
            <Link className="flex justify-center" href="/">
            go back
            </Link>
        </div>
    )
}
