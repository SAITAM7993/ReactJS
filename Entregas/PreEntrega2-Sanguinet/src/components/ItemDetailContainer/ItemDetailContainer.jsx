/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */

import { useEffect, useState } from 'react';
import { Typography, Modal, Box } from '@mui/material';
import { getProductById } from '../../api/getProductById';
import ItemDetail from '../ItemDetail/ItemDetail';
//importo url de .env para no exponer la url

//estilos de modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getProductById(id).then((product) => setProduct(product)); //la guardo en useState de productos "products"
  }, [id]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ItemDetail {...product} />
        </Box>
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
