import { Typography } from "@mui/material";

const ItemListContainer = ({ greeting }) => { 
    return (
        <div>
            <Typography variant = "h1"> {greeting}
            </Typography>
        </div>
    )
}
export default ItemListContainer;