import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import './MenuList.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// DB Firestore
import { db } from '../../firebase/firebaseConfig';
// Firestore
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import Typography from '@mui/material/Typography';
export default function MenuList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const q = query(
        collection(db, 'categories'),
        orderBy('name')
        //con el orderBy traigo ordenado
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push(doc.data()); //con esto lo traigo por defecto
      });
      setCategories(docs);
    };
    getCategories();
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='fade-button'
        className='li'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography>CATEGORIES</Typography>
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link
          className='menuItem'
          key='menuItem-All'
          to={'/category/all'}
        >
          <MenuItem
            className='menuItem'
            onClick={handleClose}
          >
            ALL
          </MenuItem>
        </Link>
        {categories.map((item) => (
          <Link
            className='menuItem'
            key={`menuItem-${item.name}`}
            to={`/category/${item.name.toLowerCase()}`}
          >
            <MenuItem
              className='menuItem'
              onClick={handleClose}
            >{`${item.name.toUpperCase()}`}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
