import React from "react"
import { Input } from "@chakra-ui/react"

export const User = (props) => {
    return (
        <div>
            <h2>{props.emri}</h2>
            <Input placeholder={props.placeholder} />
        </div>
    )
}

// export default User