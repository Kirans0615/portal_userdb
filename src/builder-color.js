import React from 'react';
import { DescriptionDomain } from './descriptionDomain';
import { ProvenanceDomain } from './provenanceDomain';
import { UsabilityDomain } from './usabilityDomain';

import { useSelector } from 'react-redux'

import PropTypes from 'prop-types';
import { makeStyles,withStyles } from "@material-ui/core/styles";
import DataObjectIcon from '@mui/icons-material/DataObject';

import {
    ListItemText,
    Grid,
    Card,
    Paper
} from "@material-ui/core";

import MuiListItem from "@material-ui/core/ListItem";

import "./sidebar.css";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto'
    },
  }));

  const data = [
    {
      name: "Provenance Domain"
    },
    {
      name: "Usability Domain"
    },
    {
      name: "Description Domain"
    },
    {
      name: "Extension Domain (Optional)"
    }
  ];

  const ListItem = withStyles({
    root: {
      "&$selected": {
        backgroundColor: "SteelBlue",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      },
      "&$selected:hover": {
        backgroundColor: "darkgray",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      },
      "&:hover": {
        backgroundColor: "lightgrey",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white"
        }
      }
    },
    selected: {}
  })(MuiListItem);


export const  BuilderColorCode = () => {
    const state = useSelector(state=>state)

    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    function a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }


    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Card>
              {children}
            </Card>
          )}
        </div>
      );
    }
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    
    return (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                <Grid container spacing={2}>
                <Grid item>
                    <div className='sidebar'>
                        {data.map((item, index) => (
                            <ListItem selected={value === index} value={index} button key={index} onClick={() => {handleChange(index)}} {...a11yProps(index)}>          
                                <DataObjectIcon />{" "}<ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    
                    </div>
                    </Grid>
                    <Grid item xs={12} md>
                                
                        <TabPanel value={value} index={0}>
                            <ProvenanceDomain/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <UsabilityDomain/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <DescriptionDomain/>
                        </TabPanel>
                    </Grid>
                </Grid>
                </Paper>
            </div>
            <br/>
            <button>
                Submit
            </button>
            <pre>{JSON.stringify(state,null, 2)}</pre>
        </>
    )
}