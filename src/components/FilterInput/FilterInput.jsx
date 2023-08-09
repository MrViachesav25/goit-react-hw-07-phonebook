import { FilterLabel, Input } from './FilterInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { addFilter } from 'redux/filterSlice';

const FilterInput = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);
  
  const onChangeFilter = event => {
    dispatch(addFilter(event.currentTarget.value.toLowerCase()))
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