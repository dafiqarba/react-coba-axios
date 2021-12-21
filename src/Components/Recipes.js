import * as React from 'react';
import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import useStyles from './Style';
import { Button, Container, CssBaseline, Grid, Typography, Modal, Box, TextField } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';

export default function Recipes() {
  const classes = useStyles();
  const [cards, setCards] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [recipe, setRecipe] = useState({});

  //deps = [] -- dijalankan hanya sekali
  useEffect(() => {
    console.log('useEffect');
    axios.get('http://localhost:3001/recipes').then((res) => {
      setCards(res.data);
    });
  }, [refresh]);

  const doRefresh = () => {
    console.log('doRefresh');
    setRefresh(!refresh);
  };

  const removeHandler = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
      if (response.status === 200) {
        console.log(response.status);
        setRefresh(!refresh);
      }
    } catch (e) {
      console.log('There was an error');
    }
  };

  const addHandler = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/recipes/`, {
        title: recipe.title,
        content: recipe.content,
        image: recipe.image,
      });

      if (response.status === 201) {
        console.log(response.status);
        setRecipe({
          title: '',
          content: '',
          image: '',
        });
        setRefresh(!refresh);
      }
    } catch (e) {
      console.log('There was an error');
    }
  };

  const editHandler = async (id) => {
    open ? setEdit(true) : setEdit(false);

    try {
      const response = await axios.put(`http://localhost:3001/recipes/${id}`, {
        title: recipe.title,
        content: recipe.content,
        image: recipe.image,
      });
      if (response.status === 200) {
        console.log(response.status);
        setRefresh(!refresh);
        setRecipe({
          title: '',
          content: '',
          image: '',
        });
      }
    } catch (e) {
      console.log('There was an error');
    }
  };

  const handleOpen = (title, content, image) => {
    setOpen(true);
    if (title && content && image) {
      setEdit(true);
      setRecipe({
        title: title,
        content: content,
        image: image,
      });
    }
  };
  const handleClose = () => {
    if (edit === true) setEdit(false);
    setOpen(false);

    /* Workaround, enable to remove current data after open/close the edit button
    setRecipe({
          title: '',
          content: '',
          image: '',
        }); 
        */
  };

  const changeHandler = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Button onClick={doRefresh}>Refresh</Button>
            <Button onClick={handleOpen}> Add Recipe</Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {edit ? 'Edit Recipe' : 'Add Recipe'}
                </Typography>
                <Row>
                  <TextField
                    name="title"
                    placeholder="Enter recipe title ..."
                    fullWidth
                    onChange={changeHandler}
                    value={recipe.title}
                  />
                </Row>
                <Row>
                  <TextField
                    name="content"
                    placeholder="Enter recipe ..."
                    fullWidth
                    multiline={true}
                    minRows={3}
                    onChange={changeHandler}
                    value={recipe.content}
                  />
                </Row>
                <Row>
                  <TextField
                    name="image"
                    placeholder="Enter image URL ..."
                    fullWidth
                    onChange={changeHandler}
                    value={recipe.image}
                  />
                </Row>
                <Col>
                  <Button variant="contained" onClick={() => (edit ? editHandler(selectedId) : addHandler())}>
                    {edit ? 'Save' : 'Add'}
                  </Button>
                  <Button variant="contained" onClick={() => handleClose()}>
                    Close
                  </Button>
                </Col>
              </Box>
            </Modal>

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Recipes
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aneka macam ide resep masakan dan makanan yang simpel tersaji disini untuk memberi panduan dan mempermudah
              dalam menentukan hidangan lezat untuk keluarga anda
            </Typography>
            <div className={classes.heroButtons}></div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <RecipeCard
                key={card.id}
                card={card}
                onRemove={removeHandler}
                onEdit={handleOpen}
                selectedId={setSelectedId}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

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

const Row = styled.div`
  margin-bottom: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
