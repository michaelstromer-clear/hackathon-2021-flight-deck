import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Category } from 'types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      fontSize: 22,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  })
);

interface Props {
  categories: Array<Category>;
  onSelectCategory: (category: string) => void;
}

export default function CategoryList(props: Props) {
  const classes = useStyles();
  const { categories, onSelectCategory } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {categories.map((tile) => (
          <GridListTile
            key={tile.slugName}
            onClick={() => console.log(tile.name)}
          >
            <ButtonBase onClick={() => onSelectCategory(tile.slugName)}>
              <img src={tile.image} alt={tile.name} />
            </ButtonBase>
            <GridListTileBar
              title={tile.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
