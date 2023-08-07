import { FilterLabel, Input } from './FilterInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { addFilterSlice } from 'redux/filterSlice';

const FilterInput = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(getFilter);
  
  const onChangeFilter = event => {
    dispatch(addFilterSlice(event.currentTarget.value.toLowerCase()))
  };
  return (
    <FilterLabel>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={onChangeFilter}
      />
    </FilterLabel>
  );
};


export default FilterInput;