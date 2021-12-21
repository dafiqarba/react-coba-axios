import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';

import { makeStyles } from '@mui/styles';
import styled from 'styled-components';
//import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const RecipeCard = ({ card, onRemove, onEdit, selectedId }) => {
  // const [removeRecipe, setRemoveRecipe] = useState(false);
  const classes = useStyles();

  return (
    <>
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={card.image} title={card.title} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography>{card.content}</Typography>
          </CardContent>

          <CardActions>
            <Col>
              <Button
                size="small"
                onClick={() => {
                  onEdit(card.title, card.content, card.image);
                  selectedId(card.id);
                }}
              >
                <EditIcon />
              </Button>
              <Button size="small" onClick={() => onRemove(card.id)}>
                <RemoveCircleIcon color="error"/>
              </Button>
            </Col>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
export default RecipeCard;

const Col = styled.div`
  display: flex;
  width:100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;