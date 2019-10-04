import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import Input from '@material-ui/core/Input';

function FuncItem(visibleFuncs, props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      {/*<ListItemText primary={`${visibleFuncs[index]}`} />*/}
      <Input
        fullWidth={true}
        type={"text"}
        defaultValue={visibleFuncs[index]}
      />
    </ListItem>
  );
}

FuncItem.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function FuncResultsList(props) {
  return (
    <AutoSizer>
      {({height, width}) => (
          <FixedSizeList
            className="FunctionResultsList"
            height={height}
            itemCount={props.visibleFuncs.length}
            itemSize={35}
            width={width}
            overscanRowCount={3}
          >
            {(rowProps) => FuncItem(props.visibleFuncs, rowProps)}
          </FixedSizeList>
        )}
    </AutoSizer>
  );
}

FuncResultsList.propTypes = {
  visibleFuncs: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
}