import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useQuery } from '@apollo/react-hooks';
import {  get } from 'lodash';
import GET_AGENCES from '../../graphql/queries/getAgences.graphql';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function ChipsArray() {
  const classes = useStyles();
  const { loading, data: agenceData } = useQuery(GET_AGENCES, {
    refetchQueries: [ { query: GET_AGENCES } ],
  });
  console.log('data',agenceData)
  if (loading) return <p>Loading ...</p>;

  const agences = get(agenceData, 'getAgences');
  const [ chipData, setChipData ] = React.useState(agences);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.nomAgence !== chipToDelete.nomAgence));
  };
  

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;
        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.nomAgence}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          </li>
            
        );
      })}
    </Paper>
  );
}
export default ChipsArray;
