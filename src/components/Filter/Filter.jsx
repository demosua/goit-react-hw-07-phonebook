import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { filterChange, selectFilter } from '../../redux/filterSlice'
import PropTypes from 'prop-types';
import { Lbl, Inp } from './Filter.styled'

const Filter = () => {
  const filterValue = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <>
      <Lbl htmlFor="">Find contacts by name</Lbl>
      <Inp type="text" value={filterValue} onChange={e => dispatch(filterChange(e.target.value))} />
    </>
  )
};
  
export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func,
};